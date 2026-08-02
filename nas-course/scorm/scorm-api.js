// SCORM 1.2 API wrapper — finds the LMS API and reports progress/completion/score
(function () {
  let api = null;
  let initialized = false;

  function findAPI(win) {
    let tries = 0;
    while (win && tries < 20) {
      tries++;
      try { if (win.API) return win.API; } catch (e) { return null; }
      if (!win.parent || win.parent === win) break;
      win = win.parent;
    }
    return null;
  }

  function locateAPI() {
    let candidate = null;
    try { candidate = findAPI(window); } catch (e) {}
    if (!candidate && window.opener) {
      try { candidate = findAPI(window.opener); } catch (e) {}
    }
    return candidate;
  }

  const SCORM = {
    init() {
      if (initialized) return true;
      api = locateAPI();
      if (!api) {
        console.warn("[SCORM] No LMS API found. Running standalone.");
        return false;
      }
      const ok = api.LMSInitialize("") === "true";
      if (ok) {
        initialized = true;
        api.LMSSetValue("cmi.core.lesson_status", "incomplete");
        api.LMSCommit("");
      }
      return ok;
    },

    available() { return !!api && initialized; },

    setProgress(completedCount, total) {
      if (!this.available()) return;
      const pct = Math.round((completedCount / total) * 100);
      api.LMSSetValue("cmi.core.lesson_location", `lesson_${completedCount}_of_${total}`);
      api.LMSSetValue("cmi.suspend_data", JSON.stringify({ completedCount, total, pct }));
      api.LMSCommit("");
    },

    setScore(score, total, passingScore) {
      if (!this.available()) return;
      const pct = Math.round((score / total) * 100);
      api.LMSSetValue("cmi.core.score.raw", String(pct));
      api.LMSSetValue("cmi.core.score.min", "0");
      api.LMSSetValue("cmi.core.score.max", "100");
      const passed = (score / total) >= passingScore;
      api.LMSSetValue("cmi.core.lesson_status", passed ? "passed" : "failed");
      api.LMSCommit("");
    },

    setComplete() {
      if (!this.available()) return;
      api.LMSSetValue("cmi.core.lesson_status", "completed");
      api.LMSCommit("");
    },

    finish() {
      if (!this.available()) return;
      api.LMSCommit("");
      api.LMSFinish("");
      initialized = false;
    }
  };

  SCORM.init();
  window.addEventListener("beforeunload", () => SCORM.finish());

  window.SCORM = SCORM;
})();

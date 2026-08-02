// Main app — routes between hub, lesson, exam, results
const { useState: useStateApp, useEffect: useEffectApp } = React;

const STORAGE_KEY = "part107_progress_v1";

const loadProgress = () => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return JSON.parse(raw);
  } catch (e) {}
  return { lessons: {}, examResult: null, learnerName: "" };
};

const saveProgress = (p) => {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(p)); } catch (e) {}
};

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "accent": "magenta",
  "showProgressInTopbar": true,
  "compactCards": false,
  "learnerName": "Remote Pilot"
}/*EDITMODE-END*/;

const ACCENT_PALETTES = {
  magenta: { name: "Sectional Magenta", color: "#C8388C" },
  amber:   { name: "Chart Amber",       color: "#D89B2C" },
  navy:    { name: "Aviation Navy",     color: "#2A55A8" },
  green:   { name: "Field Green",       color: "#4F7A4A" }
};

const App = () => {
  const [tweaks, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const [route, setRoute] = useStateApp({ name: "hub" });
  const [progress, setProgress] = useStateApp(loadProgress);

  // apply accent
  useEffectApp(() => {
    const palette = ACCENT_PALETTES[tweaks.accent] || ACCENT_PALETTES.magenta;
    document.documentElement.style.setProperty("--magenta", palette.color);
  }, [tweaks.accent]);

  useEffectApp(() => { saveProgress(progress); }, [progress]);

  const completedCount = COURSE.lessons.filter(l => progress.lessons[l.id]?.completed).length;
  const overallPct = Math.round((completedCount / COURSE.lessons.length) * 100);
  const examUnlocked = completedCount === COURSE.lessons.length;

  const completeLesson = (id) => {
    setProgress(p => {
      const next = {
        ...p,
        lessons: { ...p.lessons, [id]: { completed: true, when: Date.now() } }
      };
      const done = COURSE.lessons.filter(l => next.lessons[l.id]?.completed).length;
      if (window.SCORM?.available?.()) window.SCORM.setProgress(done, COURSE.lessons.length);
      return next;
    });
  };

  const resetProgress = () => {
    if (confirm("Reset all course progress?")) {
      setProgress({ lessons: {}, examResult: null, learnerName: progress.learnerName });
    }
  };

  return (
    <div className="app">
      <header className="topbar">
        <div className="brand">
          <div className="brand-mark"></div>
          <div className="brand-name">Part 107 · <span>Safety Essentials</span></div>
        </div>
        <div className="topbar-right">
          {tweaks.showProgressInTopbar && (
            <div className="progress-pill">
              <span>{completedCount} / {COURSE.lessons.length}</span>
              <div className="progress-track">
                <div className="progress-fill" style={{width: `${overallPct}%`}}></div>
              </div>
              <span>{overallPct}%</span>
            </div>
          )}
          <button className="btn-text" onClick={resetProgress}>Reset</button>
        </div>
      </header>

      <main>
        {route.name === "hub" && (
          <Hub
            course={COURSE}
            progress={progress}
            examUnlocked={examUnlocked}
            onOpenLesson={(id) => setRoute({ name: "lesson", id })}
            onStartExam={() => setRoute({ name: "exam" })}
          />
        )}

        {route.name === "lesson" && (() => {
          const lesson = COURSE.lessons.find(l => l.id === route.id);
          return (
            <Lesson
              lesson={lesson}
              onComplete={() => {
                completeLesson(lesson.id);
                setRoute({ name: "hub" });
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              onExit={() => setRoute({ name: "hub" })}
            />
          );
        })()}

        {route.name === "exam" && (
          <Exam
            course={COURSE}
            onFinish={(result) => {
              setProgress(p => ({ ...p, examResult: result }));
              if (window.SCORM?.available?.()) {
                window.SCORM.setScore(result.score, result.total, COURSE.passingScore);
                if ((result.score / result.total) >= COURSE.passingScore) {
                  window.SCORM.setComplete();
                }
              }
              setRoute({ name: "results", result });
            }}
            onExit={() => setRoute({ name: "hub" })}
          />
        )}

        {route.name === "results" && (
          <Results
            course={COURSE}
            result={route.result}
            learnerName={tweaks.learnerName}
            onRetry={() => setRoute({ name: "exam" })}
            onHome={() => setRoute({ name: "hub" })}
          />
        )}
      </main>

      <TweaksPanel title="Tweaks">
        <TweakSection title="Accent">
          <TweakRadio
            value={tweaks.accent}
            onChange={(v) => setTweak("accent", v)}
            options={Object.entries(ACCENT_PALETTES).map(([k, v]) => ({ value: k, label: v.name }))}
          />
        </TweakSection>
        <TweakSection title="Layout">
          <TweakToggle
            label="Show progress in top bar"
            value={tweaks.showProgressInTopbar}
            onChange={(v) => setTweak("showProgressInTopbar", v)}
          />
        </TweakSection>
        <TweakSection title="Certificate">
          <TweakText
            label="Learner name on certificate"
            value={tweaks.learnerName}
            onChange={(v) => setTweak("learnerName", v)}
          />
        </TweakSection>
        <TweakSection title="Progress">
          <TweakButton onClick={resetProgress}>Reset all course progress</TweakButton>
        </TweakSection>
      </TweaksPanel>
    </div>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<App/>);

// Main app — routes between hub, lesson, exam, results
const { useState: useStateApp, useEffect: useEffectApp } = React;
const { Button: ButtonApp } = window.TuftsDroneProgramDesignSystem_779650;

const STORAGE_KEY = "drones_nas_progress_v1";

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
  "explorerView": "section",
  "showProgressInTopbar": true,
  "learnerName": "Recreational Flyer"
}/*EDITMODE-END*/;
// Brand color is fixed by the Tufts Drone Program Design System (Tufts Blue / Jumbo Blue) —
// no accent tweak; the identity isn't a per-viewer preference.

const EXPLORER_VIEWS = [
  { value: "section", label: "Cross-section" },
  { value: "layers", label: "Stacked layers" },
  { value: "map", label: "Top-down map" }
];

const App = () => {
  const [tweaks, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const [route, setRoute] = useStateApp({ name: "hub" });
  const [progress, setProgress] = useStateApp(loadProgress);

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
      setRoute({ name: "hub" });
    }
  };

  return (
    <div className="app">
      <header className="topbar">
        <div className="brand">
          <img className="brand-wordmark" src="assets/wordmark-blue.png" alt="Tufts University"/>
          <div className="brand-divider"></div>
          <div className="brand-name">Drone Program · <span>DRONE COURSE</span></div>
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
          <ButtonApp variant="ghost" size="sm" onClick={resetProgress}>Reset</ButtonApp>
        </div>
      </header>

      <main>
        {route.name === "hub" && (
          <Hub
            course={COURSE}
            progress={progress}
            examUnlocked={examUnlocked}
            onOpenLesson={(id) => { setRoute({ name: "lesson", id }); window.scrollTo({top:0}); }}
            onStartExam={() => { setRoute({ name: "exam" }); window.scrollTo({top:0}); }}
            onOpenGlossary={() => { setRoute({ name: "glossary" }); window.scrollTo({top:0}); }}
            onOpenSources={() => { setRoute({ name: "sources" }); window.scrollTo({top:0}); }}
          />
        )}

        {route.name === "lesson" && (() => {
          const lesson = COURSE.lessons.find(l => l.id === route.id);
          return (
            <Lesson
              lesson={lesson}
              explorerView={tweaks.explorerView}
              onComplete={() => {
                completeLesson(lesson.id);
                setRoute({ name: "hub" });
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              onExit={() => { setRoute({ name: "hub" }); window.scrollTo({top:0}); }}
            />
          );
        })()}

        {route.name === "glossary" && (
          <Glossary course={COURSE} onExit={() => { setRoute({ name: "hub" }); window.scrollTo({top:0}); }} />
        )}

        {route.name === "sources" && (
          <Sources course={COURSE} onExit={() => { setRoute({ name: "hub" }); window.scrollTo({top:0}); }} />
        )}

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
              window.scrollTo({ top: 0 });
            }}
            onExit={() => { setRoute({ name: "hub" }); window.scrollTo({top:0}); }}
          />
        )}

        {route.name === "results" && (
          <Results
            course={COURSE}
            result={route.result}
            learnerName={tweaks.learnerName}
            onRetry={() => { setRoute({ name: "exam" }); window.scrollTo({top:0}); }}
            onHome={() => { setRoute({ name: "hub" }); window.scrollTo({top:0}); }}
          />
        )}
      </main>

      <TweaksPanel title="Tweaks">
        <TweakSection title="Airspace explorer — default view">
          <TweakRadio
            value={tweaks.explorerView}
            onChange={(v) => setTweak("explorerView", v)}
            options={EXPLORER_VIEWS}
          />
        </TweakSection>
        <TweakSection title="Layout">
          <TweakToggle
            label="Show progress in top bar"
            value={tweaks.showProgressInTopbar}
            onChange={(v) => setTweak("showProgressInTopbar", v)}
          />
        </TweakSection>
        <TweakSection title="Completion record">
          <TweakText
            label="Name on completion record"
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

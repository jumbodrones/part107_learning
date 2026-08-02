// Lesson reader — multi-screen flow with concept screens, knowledge check, and scenario
const { useState: useStateLR, useMemo: useMemoLR } = React;

const ConceptScreen = ({ screen }) => (
  <div className="screen">
    <div className="screen-eyebrow">{screen.eyebrow}</div>
    <h2>{screen.heading}</h2>
    <div className="screen-body">{screen.body}</div>
    {screen.callout && (
      <div className="callout">
        <div className="label">{screen.callout.label}</div>
        <div className="text">{screen.callout.text}</div>
      </div>
    )}
  </div>
);

const StatsScreen = ({ screen }) => (
  <div className="screen">
    <div className="screen-eyebrow">{screen.eyebrow}</div>
    <h2>{screen.heading}</h2>
    <div className="stats-grid">
      {screen.stats.map((s, i) => (
        <div className="stat" key={i}>
          <div className="v">{s.value}<span className="unit">{s.unit}</span></div>
          <div className="label">{s.label}</div>
        </div>
      ))}
    </div>
  </div>
);

const ChecklistScreen = ({ screen }) => (
  <div className="screen">
    <div className="screen-eyebrow">{screen.eyebrow}</div>
    <h2>{screen.heading}</h2>
    <div className="screen-body">{screen.body}</div>
    <div className="checklist">
      {screen.items.map((it, i) => (
        <div className="item" key={i}>
          <span className="num">{String(i + 1).padStart(2, "0")}</span>
          {it}
        </div>
      ))}
    </div>
  </div>
);

const AirspaceScreen = ({ screen }) => (
  <div className="screen">
    <div className="screen-eyebrow">{screen.eyebrow}</div>
    <h2>{screen.heading}</h2>
    <div className="screen-body">{screen.body}</div>
    <div className="airspace-diagram">
      <div className="airspace-table">
        {screen.classes.map((c, i) => (
          <div className={`airspace-row ${c.color}`} key={i}>
            <div className="cell"><span className="code">{c.code}</span></div>
            <div className="cell"><span className="desc">{c.desc}</span></div>
            <div className="cell">
              <span className={`auth ${c.auth ? "yes" : "no"}`}>
                {c.auth ? "ATC required" : "No ATC needed"}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const CategoriesScreen = ({ screen }) => (
  <div className="screen">
    <div className="screen-eyebrow">{screen.eyebrow}</div>
    <h2>{screen.heading}</h2>
    <div className="cat-grid">
      {screen.items.map((it, i) => (
        <div className="cat-card" key={i}>
          <div className="cat-code">CAT {it.code}</div>
          <div className="cat-title">{it.title}</div>
          <div className="cat-desc">{it.desc}</div>
        </div>
      ))}
    </div>
  </div>
);

const OptionsScreen = ({ screen }) => (
  <div className="screen">
    <div className="screen-eyebrow">{screen.eyebrow}</div>
    <h2>{screen.heading}</h2>
    <div className="opt-list">
      {screen.items.map((it, i) => (
        <div className="opt-row" key={i}>
          <div className="opt-tag">{it.tag}</div>
          <div>
            <div className="opt-title">{it.title}</div>
            <div className="opt-desc">{it.desc}</div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const ScreenRouter = ({ screen }) => {
  switch (screen.kind) {
    case "stats": return <StatsScreen screen={screen} />;
    case "checklist": return <ChecklistScreen screen={screen} />;
    case "airspace": return <AirspaceScreen screen={screen} />;
    case "categories": return <CategoriesScreen screen={screen} />;
    case "options": return <OptionsScreen screen={screen} />;
    default: return <ConceptScreen screen={screen} />;
  }
};

const QuestionCard = ({ kind, prompt, setup, choices, picked, onPick, locked }) => {
  const correctIdx = choices.findIndex(c => c.correct);
  return (
    <div className={`qcard ${kind === "scenario" ? "scenario" : ""}`}>
      <div className="qkind">{kind === "scenario" ? "Scenario" : "Knowledge Check"}</div>
      {setup && <div className="scenario-setup">{setup}</div>}
      <div className="qprompt">{prompt}</div>
      <div className="choices">
        {choices.map((c, i) => {
          let cls = "choice";
          if (picked != null) {
            if (i === picked) cls += c.correct ? " correct" : " wrong";
            else if (i === correctIdx) cls += " correct";
            else cls += " dim";
          }
          return (
            <button key={i} className={cls} disabled={locked} onClick={() => onPick(i)}>
              <span className="marker">{String.fromCharCode(65 + i)}</span>
              <span>{c.text}</span>
            </button>
          );
        })}
      </div>
      {picked != null && (
        <div className={`feedback ${choices[picked].correct ? "correct" : "wrong"}`}>
          <span className="label">{choices[picked].correct ? "Correct" : "Not quite"}</span>
          {choices[picked].why}
        </div>
      )}
    </div>
  );
};

const Lesson = ({ lesson, onComplete, onExit }) => {
  // Steps: each content screen, then check, then scenario
  const steps = useMemoLR(() => {
    const arr = lesson.screens.map(s => ({ kind: "screen", data: s }));
    arr.push({ kind: "check", data: lesson.check });
    arr.push({ kind: "scenario", data: lesson.scenario });
    return arr;
  }, [lesson]);

  const [stepIdx, setStepIdx] = useStateLR(0);
  const [checkPick, setCheckPick] = useStateLR(null);
  const [scenarioPick, setScenarioPick] = useStateLR(null);

  const step = steps[stepIdx];
  const isLast = stepIdx === steps.length - 1;
  const canAdvance = (() => {
    if (step.kind === "check") return checkPick != null;
    if (step.kind === "scenario") return scenarioPick != null;
    return true;
  })();

  const next = () => {
    if (isLast) {
      onComplete();
    } else {
      setStepIdx(stepIdx + 1);
    }
  };
  const prev = () => stepIdx > 0 && setStepIdx(stepIdx - 1);

  return (
    <div className="reader">
      <div className="reader-head">
        <div className="crumb">
          <button className="btn-text" onClick={onExit}>← All lessons</button>
          <span className="eyebrow">Lesson {lesson.number} · {lesson.title}</span>
        </div>
        <div className="reader-progress-dots">
          {steps.map((_, i) => (
            <span key={i} className={`dot ${i === stepIdx ? "active" : i < stepIdx ? "done" : ""}`}></span>
          ))}
        </div>
      </div>

      <div key={stepIdx}>
        {step.kind === "screen" && <ScreenRouter screen={step.data} />}
        {step.kind === "check" && (
          <QuestionCard
            kind="check"
            prompt={step.data.prompt}
            choices={step.data.choices}
            picked={checkPick}
            onPick={(i) => checkPick == null && setCheckPick(i)}
            locked={checkPick != null}
          />
        )}
        {step.kind === "scenario" && (
          <QuestionCard
            kind="scenario"
            prompt={step.data.question}
            setup={step.data.setup}
            choices={step.data.choices}
            picked={scenarioPick}
            onPick={(i) => scenarioPick == null && setScenarioPick(i)}
            locked={scenarioPick != null}
          />
        )}
      </div>

      <div className="reader-nav">
        <button className="btn btn-ghost" onClick={prev} disabled={stepIdx === 0} style={{opacity: stepIdx === 0 ? 0.4 : 1}}>
          <Icon name="arrow-left" size={16}/> Back
        </button>
        <div className="eyebrow">{stepIdx + 1} / {steps.length}</div>
        <button className="btn btn-primary" onClick={next} disabled={!canAdvance} style={{opacity: canAdvance ? 1 : 0.4}}>
          {isLast ? "Mark complete" : "Continue"}
          <Icon name="arrow-right" size={16}/>
        </button>
      </div>
    </div>
  );
};

window.Lesson = Lesson;

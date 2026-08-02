// Lesson reader — objectives intro, content screens, question set, and a closing summary
// (key terms + references). Screen kinds: concept, definition, table, deepdive, stats,
// checklist, airspace, categories, options + interactives (airspace-explorer, sectional, flycheck).
const { useState: useStateLR, useMemo: useMemoLR } = React;
const { Card: CardLR, Callout: CalloutLR, StepList: StepListLR, Button: ButtonLR, Tag: TagLR } = window.TuftsDroneProgramDesignSystem_779650;

const ConceptScreen = ({ screen }) => (
  <div className="screen">
    <div className="screen-eyebrow">{screen.eyebrow}</div>
    <h2>{screen.heading}</h2>
    <div className="screen-body">{screen.body}</div>
    {screen.callout && (
      <CalloutLR kind="note" title={screen.callout.label} style={{marginTop: 24}}>{screen.callout.text}</CalloutLR>
    )}
  </div>
);

const DefinitionScreen = ({ screen }) => (
  <div className="screen">
    <div className="screen-eyebrow">{screen.eyebrow}</div>
    <h2>{screen.heading}</h2>
    <CardLR accent>
      <div className="def-term">{screen.term}</div>
      <div className="def-statement">{screen.statement}</div>
      {screen.cite && <div className="def-cite">{screen.cite}</div>}
    </CardLR>
    {screen.body && <div className="screen-body" style={{marginTop: 24}}>{screen.body}</div>}
  </div>
);

const TableScreen = ({ screen }) => (
  <div className="screen">
    <div className="screen-eyebrow">{screen.eyebrow}</div>
    <h2>{screen.heading}</h2>
    {screen.body && <div className="screen-body">{screen.body}</div>}
    <div className="dtable-wrap">
      <table className="dtable">
        <thead>
          <tr>{screen.columns.map((c, i) => <th key={i}>{c}</th>)}</tr>
        </thead>
        <tbody>
          {screen.rows.map((r, i) => (
            <tr key={i}>{r.map((cell, j) => <td key={j} className={j === 0 ? "lead" : ""}>{cell}</td>)}</tr>
          ))}
        </tbody>
      </table>
    </div>
    {screen.note && <div className="dtable-note">{screen.note}</div>}
  </div>
);

const DeepDiveScreen = ({ screen }) => (
  <div className="screen">
    <CardLR style={{background: "var(--surface-warm)", borderTop: "4px solid var(--tufts-brown)"}}>
      <div className="deepdive-tag"><Icon name="book" size={14}/>{screen.eyebrow || "DEEP DIVE"}</div>
      <h2 style={{fontSize: 27, marginBottom: 18}}>{screen.heading}</h2>
      <div className="screen-body" style={{maxWidth: "62ch"}}>{screen.body}</div>
      {screen.points && (
        <div style={{marginTop: 22}}>
          <StepListLR steps={screen.points} />
        </div>
      )}
    </CardLR>
  </div>
);

const StatsScreen = ({ screen }) => (
  <div className="screen">
    <div className="screen-eyebrow">{screen.eyebrow}</div>
    <h2>{screen.heading}</h2>
    <div className="stats-grid">
      {screen.stats.map((s, i) => (
        <CardLR className="stat" key={i}>
          <div className="v">{s.value}<span className="unit">{s.unit}</span></div>
          <div className="label">{s.label}</div>
        </CardLR>
      ))}
    </div>
  </div>
);

const ChecklistScreen = ({ screen }) => (
  <div className="screen">
    <div className="screen-eyebrow">{screen.eyebrow}</div>
    <h2>{screen.heading}</h2>
    {screen.body && <div className="screen-body">{screen.body}</div>}
    <div className="checklist-wrap">
      <StepListLR steps={screen.items} />
    </div>
  </div>
);

const AirspaceScreen = ({ screen }) => (
  <div className="screen">
    <div className="screen-eyebrow">{screen.eyebrow}</div>
    <h2>{screen.heading}</h2>
    {screen.body && <div className="screen-body">{screen.body}</div>}
    <div className="airspace-diagram">
      <div className="airspace-table">
        {screen.classes.map((c, i) => (
          <div className={`airspace-row ${c.color}`} key={i}>
            <div className="cell"><span className="code">{c.code}</span></div>
            <div className="cell"><span className="desc">{c.desc}</span></div>
            <div className="cell">
              <TagLR active={c.auth}>{c.auth ? "Authorization" : "No auth needed"}</TagLR>
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
        <CardLR key={i}>
          <TagLR active>{it.code}</TagLR>
          <div className="cat-title">{it.title}</div>
          <div className="cat-desc">{it.desc}</div>
        </CardLR>
      ))}
    </div>
  </div>
);

const OptionsScreen = ({ screen }) => (
  <div className="screen">
    <div className="screen-eyebrow">{screen.eyebrow}</div>
    <h2>{screen.heading}</h2>
    {screen.body && <div className="screen-body">{screen.body}</div>}
    <div className="opt-list-grid">
      {screen.items.map((it, i) => (
        <CardLR key={i}>
          <div className="opt-row-inner">
            <TagLR>{it.tag}</TagLR>
            <div>
              <div className="opt-title">{it.title}</div>
              <div className="opt-desc">{it.desc}</div>
            </div>
          </div>
        </CardLR>
      ))}
    </div>
  </div>
);

const ScreenRouter = ({ screen, explorerView }) => {
  switch (screen.kind) {
    case "definition": return <DefinitionScreen screen={screen} />;
    case "table": return <TableScreen screen={screen} />;
    case "deepdive": return <DeepDiveScreen screen={screen} />;
    case "stats": return <StatsScreen screen={screen} />;
    case "checklist": return <ChecklistScreen screen={screen} />;
    case "airspace": return <AirspaceScreen screen={screen} />;
    case "categories": return <CategoriesScreen screen={screen} />;
    case "options": return <OptionsScreen screen={screen} />;
    case "airspace-explorer": return <AirspaceExplorer screen={screen} initialView={explorerView} />;
    case "sectional": return <SectionalReader screen={screen} />;
    case "flycheck": return <FlyCheck screen={screen} />;
    default: return <ConceptScreen screen={screen} />;
  }
};

// Lesson opener — objectives.
const ObjectivesIntro = ({ lesson }) => (
  <div className="screen">
    <div className="screen-eyebrow">Lesson {lesson.number}</div>
    <h2 style={{maxWidth: "18ch"}}>{lesson.title}</h2>
    <div className="lede" style={{marginTop: 8, marginBottom: 30, maxWidth: "52ch"}}>{lesson.summary}</div>
    <CardLR>
      <div className="objectives-head"><Icon name="check-circle" size={16} /> Learning objectives</div>
      <div className="objectives-sub">By the end of this lesson you will be able to:</div>
      <div style={{marginTop: 14}}>
        <StepListLR steps={lesson.objectives} />
      </div>
    </CardLR>
  </div>
);

// Lesson closer — key terms + references.
const SummaryStep = ({ lesson }) => (
  <div className="screen">
    <div className="screen-eyebrow">Lesson {lesson.number} · Review</div>
    <h2 style={{maxWidth: "20ch"}}>Key terms &amp; references</h2>
    {lesson.terms && (
      <CardLR>
        <div className="terms-list">
          {lesson.terms.map((t, i) => (
            <div className="term-row" key={i}>
              <div className="term-name">{t.term}</div>
              <div className="term-def">{t.def}</div>
            </div>
          ))}
        </div>
      </CardLR>
    )}
    {lesson.references && (
      <div className="refs">
        <div className="refs-head">Further reading &amp; sources</div>
        <ul className="refs-list">
          {lesson.references.map((r, i) => {
            const url = window.citeToUrl(r.cite);
            return (
              <li key={i}>
                <span className="ref-label">{r.label}</span>
                {url
                  ? <a className="ref-cite" href={url} target="_blank" rel="noopener noreferrer">{r.cite} <Icon name="arrow-right" size={11}/></a>
                  : <span className="ref-cite">{r.cite}</span>}
              </li>
            );
          })}
        </ul>
        <div className="refs-disclaimer">
          Citations are current to mid-2026 and provided for study. Regulations change — verify against the eCFR (ecfr.gov) and current FAA guidance before operating. Nothing here is legal advice.
        </div>
      </div>
    )}
  </div>
);

const QuestionCard = ({ kind, prompt, setup, choices, picked, onPick, locked }) => {
  const correctIdx = choices.findIndex(c => c.correct);
  return (
    <CardLR className={`qcard ${kind === "scenario" ? "scenario" : ""}`}>
      <div className="qkind">{kind === "scenario" ? "Scenario" : "Knowledge Check"}</div>
      {setup && <CalloutLR kind="warning" title="Scenario" style={{marginBottom: 22, fontFamily: "var(--serif)"}}>{setup}</CalloutLR>}
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
        <CalloutLR kind={choices[picked].correct ? "tip" : "danger"} title={choices[picked].correct ? "Correct" : "Not quite"} style={{marginTop: 20}}>
          {choices[picked].why}
        </CalloutLR>
      )}
    </CardLR>
  );
};

const Lesson = ({ lesson, onComplete, onExit, explorerView }) => {
  const steps = useMemoLR(() => {
    const arr = [];
    if (lesson.objectives) arr.push({ kind: "objectives" });
    lesson.screens.forEach(s => arr.push({ kind: "screen", data: s }));
    const qs = lesson.questions || [
      lesson.check && { kind: "check", ...lesson.check },
      lesson.scenario && { kind: "scenario", prompt: lesson.scenario.question, setup: lesson.scenario.setup, choices: lesson.scenario.choices }
    ].filter(Boolean);
    qs.forEach((q, i) => arr.push({ kind: "question", data: q, qIndex: i }));
    if (lesson.terms || lesson.references) arr.push({ kind: "summary" });
    return arr;
  }, [lesson]);

  const [stepIdx, setStepIdx] = useStateLR(0);
  const [picks, setPicks] = useStateLR({});   // qIndex -> chosen option index

  const step = steps[stepIdx];
  const isLast = stepIdx === steps.length - 1;
  const canAdvance = step.kind !== "question" || picks[step.qIndex] != null;

  const next = () => {
    if (isLast) onComplete();
    else { setStepIdx(stepIdx + 1); window.scrollTo({ top: 0, behavior: "smooth" }); }
  };
  const prev = () => { if (stepIdx > 0) { setStepIdx(stepIdx - 1); window.scrollTo({ top: 0, behavior: "smooth" }); } };

  return (
    <div className="reader">
      <div className="reader-head">
        <div className="crumb">
          <ButtonLR variant="ghost" size="sm" onClick={onExit}>← All lessons</ButtonLR>
          <span className="eyebrow">Lesson {lesson.number} · {lesson.title}</span>
        </div>
        <div className="reader-progress-dots">
          {steps.map((_, i) => (
            <span key={i} className={`dot ${i === stepIdx ? "active" : i < stepIdx ? "done" : ""}`}></span>
          ))}
        </div>
      </div>

      <div key={stepIdx}>
        {step.kind === "objectives" && <ObjectivesIntro lesson={lesson} />}
        {step.kind === "screen" && <ScreenRouter screen={step.data} explorerView={explorerView} />}
        {step.kind === "summary" && <SummaryStep lesson={lesson} />}
        {step.kind === "question" && (
          <QuestionCard
            kind={step.data.kind}
            prompt={step.data.prompt}
            setup={step.data.setup}
            choices={step.data.choices}
            picked={picks[step.qIndex] ?? null}
            onPick={(i) => setPicks(p => (p[step.qIndex] != null ? p : { ...p, [step.qIndex]: i }))}
            locked={picks[step.qIndex] != null}
          />
        )}
      </div>

      <div className="reader-nav">
        <ButtonLR variant="outline" onClick={prev} disabled={stepIdx === 0} iconLeft={<Icon name="arrow-left" size={16}/>}>Back</ButtonLR>
        <div className="eyebrow">{stepIdx + 1} / {steps.length}</div>
        <ButtonLR variant="primary" onClick={next} disabled={!canAdvance} iconRight={<Icon name="arrow-right" size={16}/>}>
          {isLast ? "Mark complete" : "Continue"}
        </ButtonLR>
      </div>
    </div>
  );
};

window.Lesson = Lesson;

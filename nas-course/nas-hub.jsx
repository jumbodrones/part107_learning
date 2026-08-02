// Hub / dashboard + Glossary for the NAS course.
const { Card: CardHub, Badge: BadgeHub, Button: ButtonHub, Tag: TagHub } = window.TuftsDroneProgramDesignSystem_779650;

const Hub = ({ course, progress, onOpenLesson, onStartExam, onOpenGlossary, onOpenSources, examUnlocked }) => {
  const completedCount = course.lessons.filter(l => progress.lessons[l.id]?.completed).length;
  const overallPct = Math.round((completedCount / course.lessons.length) * 100);
  const totalTerms = course.lessons.reduce((n, l) => n + (l.terms ? l.terms.length : 0), 0);
  const totalRefs = course.lessons.reduce((n, l) => n + (l.references ? l.references.length : 0), 0);

  return (
    <div className="hub">
      <div className="hub-header">
        <div>
          <div className="eyebrow accent" style={{marginBottom: 18}}>49 U.S.C. § 44809 · 14 CFR PARTS 107 · 89 · 48</div>
          <h1>
            <span className="accent">Self-Study Course</span>
            The regulated sky, from statute to launch.
          </h1>
          <p className="lede" style={{marginTop: 24, maxWidth: "40ch"}}>
            A methodical treatment of where civil remotely piloted aircraft (drones) fit in U.S. airspace — the two
            regulatory regimes, airspace structure and charting, Remote ID, the operating rules,
            and the preflight decision. Built for undergraduate and graduate study, with citations
            throughout.
          </p>
        </div>
        <div className="hub-meta">
          <div>
            <div>Lessons</div>
            <div className="v">{completedCount}<span style={{color: "var(--ink-4)", fontSize: "0.6em"}}> / {course.lessons.length}</span></div>
          </div>
          <div>
            <div>Time</div>
            <div className="v">~{course.estimatedMinutes}<span style={{fontSize: "0.5em", color: "var(--ink-4)", marginLeft: 4}}>min</span></div>
          </div>
          <div>
            <div>Progress</div>
            <div className="v">{overallPct}<span style={{fontSize: "0.5em", color: "var(--ink-4)"}}>%</span></div>
          </div>
        </div>
      </div>

      {course.courseObjectives && (
        <CardHub style={{marginTop: 40}}>
          <div className="course-obj-head"><Icon name="check-circle" size={16}/> Course objectives</div>
          <ol className="course-obj-list">
            {course.courseObjectives.map((o, i) => <li key={i}>{o}</li>)}
          </ol>
        </CardHub>
      )}

      <div className="hub-section">
        <div className="hub-section-head">
          <h2>Lessons</h2>
          <div className="eyebrow">Sequential · {course.lessons.length} total</div>
        </div>

        <div className="lesson-grid">
          {course.lessons.map((l) => {
            const lp = progress.lessons[l.id] || {};
            const done = !!lp.completed;
            return (
              <CardHub key={l.id} hover onClick={() => onOpenLesson(l.id)} style={{cursor: "pointer"}}>
                <div className="lesson-card-inner">
                  <div>
                    <BadgeHub tone={done ? "green" : "blue"}>Lesson {l.number}</BadgeHub>
                  </div>
                  <div>
                    <h3>{l.title}</h3>
                    <div className="summary">{l.summary}</div>
                  </div>
                  <div className="foot">
                    <div>{l.minutes} min · {l.tagline}</div>
                    <div className={`status ${done ? "done" : ""}`}>
                      <span className="check">{done && <Icon name="check" size={10} />}</span>
                      {done ? "Complete" : "Start"}
                    </div>
                  </div>
                  <div className="icon-art"><Icon name={l.icon} size={34} /></div>
                </div>
              </CardHub>
            );
          })}
        </div>
      </div>

      <div className="hub-section">
        <CardHub hover onClick={onOpenGlossary} style={{cursor: "pointer", marginBottom: 16}}>
          <div className="reference-row">
            <div>
              <div className="eyebrow accent" style={{marginBottom: 8}}>Reference</div>
              <h3 style={{fontSize: 24}}>Glossary of key terms</h3>
              <div className="summary" style={{marginTop: 6, color: "var(--ink-3)"}}>
                {totalTerms} defined terms drawn from every lesson, with the controlling citations.
              </div>
            </div>
            <ButtonHub variant="outline" iconRight={<Icon name="arrow-right" size={16}/>}>Open glossary</ButtonHub>
          </div>
        </CardHub>
        <CardHub hover onClick={onOpenSources} style={{cursor: "pointer"}}>
          <div className="reference-row">
            <div>
              <div className="eyebrow accent" style={{marginBottom: 8}}>Reference</div>
              <h3 style={{fontSize: 24}}>Sources &amp; further reading</h3>
              <div className="summary" style={{marginTop: 6, color: "var(--ink-3)"}}>
                {totalRefs} citations — statutes, CFR parts, and FAA guidance — organized by lesson.
              </div>
            </div>
            <ButtonHub variant="outline" iconRight={<Icon name="arrow-right" size={16}/>}>View sources</ButtonHub>
          </div>
        </CardHub>
      </div>

      <div className={`exam-tile ${examUnlocked ? "" : "locked"}`}>
        <div>
          <div className="eyebrow" style={{color: "rgba(255,255,255,0.72)", marginBottom: 10}}>FINAL ASSESSMENT</div>
          <h2>Ready for assessment?</h2>
          <div className="exam-meta">
            <span>{course.finalExam.length} questions</span>
            <span>·</span>
            <span>Pass at {Math.round(course.passingScore * 100)}%</span>
            <span>·</span>
            <span>{examUnlocked ? "Unlocked" : `Finish ${course.lessons.length - completedCount} more lesson${course.lessons.length - completedCount === 1 ? "" : "s"} to unlock`}</span>
          </div>
        </div>
        <div>
          <ButtonHub
            variant="onbrand"
            disabled={!examUnlocked}
            onClick={() => examUnlocked && onStartExam()}
            iconLeft={examUnlocked ? <Icon name="arrow-right" size={16}/> : <Icon name="lock" size={16}/>}
          >
            {examUnlocked ? "Begin assessment" : "Locked"}
          </ButtonHub>
        </div>
      </div>
    </div>
  );
};

// Alphabetized glossary aggregated from all lesson terms.
const Glossary = ({ course, onExit }) => {
  const entries = [];
  course.lessons.forEach(l => (l.terms || []).forEach(t => entries.push({ ...t, lesson: l.number })));
  entries.sort((a, b) => a.term.localeCompare(b.term));

  return (
    <div className="reader">
      <div className="reader-head">
        <div className="crumb">
          <ButtonHub variant="ghost" size="sm" onClick={onExit}>← Dashboard</ButtonHub>
          <span className="eyebrow">Reference · Glossary</span>
        </div>
        <div className="eyebrow">{entries.length} terms</div>
      </div>
      <div className="screen">
        <div className="screen-eyebrow">Glossary</div>
        <h2 style={{marginBottom: 28}}>Key terms, defined.</h2>
        <div className="glossary">
          {entries.map((e, i) => (
            <div className="gloss-row" key={i}>
              <div className="gloss-term">
                {e.term}
                <TagHub>L{e.lesson}</TagHub>
              </div>
              <div className="gloss-def">{e.def}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

window.Hub = Hub;
window.Glossary = Glossary;

// Sources & further reading, grouped by lesson, in course order.
const Sources = ({ course, onExit }) => {
  const withRefs = course.lessons.filter(l => l.references && l.references.length);
  const totalRefs = withRefs.reduce((n, l) => n + l.references.length, 0);

  return (
    <div className="reader">
      <div className="reader-head">
        <div className="crumb">
          <ButtonHub variant="ghost" size="sm" onClick={onExit}>← Dashboard</ButtonHub>
          <span className="eyebrow">Reference · Sources</span>
        </div>
        <div className="eyebrow">{totalRefs} citations</div>
      </div>
      <div className="screen">
        <div className="screen-eyebrow">Sources</div>
        <h2 style={{marginBottom: 12}}>Sources &amp; further reading.</h2>
        <div className="screen-body" style={{marginBottom: 8}}>
          Statutes, CFR parts, and FAA guidance drawn on throughout the course, organized by the lesson that cites them.
        </div>
        {withRefs.map((l) => (
          <div className="refs" key={l.id}>
            <div className="refs-head">Lesson {l.number} · {l.title}</div>
            <ul className="refs-list">
              {l.references.map((r, i) => {
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
          </div>
        ))}
        <div className="refs-disclaimer" style={{marginTop: 28}}>
          Citations are current to mid-2026 and provided for study. Regulations change — verify against the eCFR (ecfr.gov) and current FAA guidance before operating. Nothing here is legal advice.
        </div>
      </div>
    </div>
  );
};
window.Sources = Sources;

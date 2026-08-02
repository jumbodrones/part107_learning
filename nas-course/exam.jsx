// Final exam + results screen
const { useState: useStateEX } = React;
const { Card: CardEX, Callout: CalloutEX, Button: ButtonEX } = window.TuftsDroneProgramDesignSystem_779650;

const Exam = ({ course, onFinish, onExit }) => {
  const [idx, setIdx] = useStateEX(0);
  const [answers, setAnswers] = useStateEX(Array(course.finalExam.length).fill(null));

  const q = course.finalExam[idx];
  const isLast = idx === course.finalExam.length - 1;
  const picked = answers[idx];

  const choose = (i) => {
    if (picked != null) return;
    const next = [...answers];
    next[idx] = i;
    setAnswers(next);
  };

  const advance = () => {
    if (isLast) {
      const score = answers.reduce((acc, a, i) => acc + (a === course.finalExam[i].correct ? 1 : 0), 0);
      onFinish({ score, total: course.finalExam.length, answers });
    } else {
      setIdx(idx + 1);
    }
  };

  return (
    <div className="exam">
      <div className="reader-head">
        <div className="crumb">
          <ButtonEX variant="ghost" size="sm" onClick={onExit}>← Exit exam</ButtonEX>
          <span className="eyebrow">Final assessment</span>
        </div>
        <div className="eyebrow">Question {idx + 1} of {course.finalExam.length}</div>
      </div>

      <div className="exam-progress-bar">
        {course.finalExam.map((_, i) => (
          <span key={i} className={`seg ${i < idx ? "done" : i === idx ? "active" : ""}`}></span>
        ))}
      </div>

      <CardEX className="exam-q">
        <div className="qnum">Q{String(idx + 1).padStart(2, "0")}</div>
        <div className="qprompt" style={{fontSize: 24}}>{q.q}</div>
        <div className="choices">
          {q.choices.map((text, i) => {
            let cls = "choice";
            if (picked != null) {
              if (i === picked) cls += i === q.correct ? " correct" : " wrong";
              else if (i === q.correct) cls += " correct";
              else cls += " dim";
            }
            return (
              <button key={i} className={cls} disabled={picked != null} onClick={() => choose(i)}>
                <span className="marker">{String.fromCharCode(65 + i)}</span>
                <span>{text}</span>
              </button>
            );
          })}
        </div>
        {picked != null && (
          <CalloutEX kind={picked === q.correct ? "tip" : "danger"} title={picked === q.correct ? "Correct" : "Not quite"} style={{marginTop: 20}}>
            {q.why}
            {q.cite && <div className="feedback-cite">{q.cite}</div>}
          </CalloutEX>
        )}
      </CardEX>

      <div className="reader-nav">
        <div></div>
        <ButtonEX variant="primary" disabled={picked == null} onClick={advance} iconRight={<Icon name="arrow-right" size={16}/>}>
          {isLast ? "Finish exam" : "Next question"}
        </ButtonEX>
      </div>
    </div>
  );
};

const Results = ({ course, result, onRetry, onHome, learnerName }) => {
  const pct = result.score / result.total;
  const passed = pct >= course.passingScore;
  const date = new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });

  return (
    <div className={`results ${passed ? "pass" : "fail"}`}>
      <div className="verdict-mark">
        {passed ? <Icon name="check" size={44}/> : <Icon name="x" size={44}/>}
      </div>
      <div className="score-display">
        {result.score}<span className="of">/{result.total}</span>
      </div>
      <div className="verdict-line">{passed ? "Pass · Clear skies" : "Below passing — review and retry"}</div>
      <p className="lede" style={{maxWidth: "46ch", margin: "0 auto"}}>
        {passed
          ? "You can place a small-UAS operation in its regulatory regime, read the airspace from a chart, obtain the right authorization, and reach a defensible go/no-go call. This is a study record, not an FAA credential."
          : `You needed ${Math.ceil(course.passingScore * result.total)} of ${result.total} correct to pass. The explanations below cite the controlling rule for each item — review, then retake.`}
      </p>

      <div className="review">
        {course.finalExam.map((q, i) => {
          const ok = result.answers[i] === q.correct;
          return (
            <div className={`review-row ${ok ? "ok" : "bad"}`} key={i}>
              <div className="ico">{ok ? "✓" : "×"}</div>
              <div>
                <div style={{color: "var(--ink)"}}>{q.q}</div>
                {!ok && (
                  <div style={{color: "var(--ink-3)", marginTop: 4, fontSize: 13}}>
                    Correct answer: <span style={{color: "var(--green)"}}>{q.choices[q.correct]}</span>
                  </div>
                )}
                <div style={{color: "var(--ink-3)", marginTop: 6, fontSize: 13, lineHeight: 1.5}}>{q.why}</div>
                {q.cite && <div className="review-cite">{q.cite}</div>}
              </div>
              <div className="eyebrow">Q{String(i + 1).padStart(2, "0")}</div>
            </div>
          );
        })}
      </div>

      {passed && (
        <CardEX accent style={{marginTop: 48, textAlign: "center"}}>
          <div className="cert-eyebrow">Course Completion · Study Record</div>
          <h2>Drones in the National Airspace System</h2>
          <div style={{color: "var(--ink-3)", fontSize: 14, marginTop: 10}}>has been completed by</div>
          <div className="cert-name">{learnerName || "Recreational Flyer"}</div>
          <div style={{color: "var(--ink-3)", fontSize: 14, maxWidth: "48ch", margin: "0 auto", fontFamily: "var(--serif)"}}>
            Demonstrated a working understanding of the U.S. regulatory framework for civil small
            unmanned aircraft — the § 44809 and part 107 regimes, airspace structure and charting,
            Remote ID, operating limitations, and preflight decision-making.
          </div>
          <div className="cert-foot">
            <div>
              <div>Date</div>
              <div style={{color: "var(--ink)", marginTop: 4, fontFamily: "var(--serif)", fontSize: 16, textTransform: "none", letterSpacing: 0}}>{date}</div>
            </div>
            <div>
              <div>Score</div>
              <div style={{color: "var(--ink)", marginTop: 4, fontFamily: "var(--serif)", fontSize: 16, textTransform: "none", letterSpacing: 0}}>{result.score} / {result.total} · {Math.round(pct * 100)}%</div>
            </div>
          </div>
        </CardEX>
      )}

      <div className="actions">
        <ButtonEX variant="outline" onClick={onHome}>Back to dashboard</ButtonEX>
        <ButtonEX variant="primary" onClick={onRetry} iconLeft={<Icon name="rotate" size={16}/>}>Retake exam</ButtonEX>
      </div>
    </div>
  );
};

window.Exam = Exam;
window.Results = Results;

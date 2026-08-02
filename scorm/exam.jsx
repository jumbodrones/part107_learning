// Final exam + results screen
const { useState: useStateEX } = React;

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
          <button className="btn-text" onClick={onExit}>← Exit exam</button>
          <span className="eyebrow">Final assessment</span>
        </div>
        <div className="eyebrow">Question {idx + 1} of {course.finalExam.length}</div>
      </div>

      <div className="exam-progress-bar">
        {course.finalExam.map((_, i) => (
          <span key={i} className={`seg ${i < idx ? "done" : i === idx ? "active" : ""}`}></span>
        ))}
      </div>

      <div className="exam-q">
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
      </div>

      <div className="reader-nav">
        <div></div>
        <button
          className="btn btn-primary"
          disabled={picked == null}
          onClick={advance}
          style={{opacity: picked == null ? 0.4 : 1}}
        >
          {isLast ? "Finish exam" : "Next question"}
          <Icon name="arrow-right" size={16}/>
        </button>
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
      <div className="verdict-line">{passed ? "Pass · Well flown" : "Below passing — review and retry"}</div>
      <p className="lede" style={{maxWidth: "44ch", margin: "0 auto"}}>
        {passed
          ? "You demonstrated solid command of the safety-critical rules of Part 107. This isn't an FAA certificate — it's a study check on the safety essentials."
          : `You needed ${Math.ceil(course.passingScore * result.total)} correct to pass. Revisit the lessons covering your missed questions, then try again.`}
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
              </div>
              <div className="eyebrow">Q{String(i + 1).padStart(2, "0")}</div>
            </div>
          );
        })}
      </div>

      {passed && (
        <div className="cert">
          <div className="cert-eyebrow">Course Completion · Study Record</div>
          <h2>Part 107 Safety Essentials</h2>
          <div style={{color: "var(--ink-3)", fontSize: 14}}>has been completed by</div>
          <div className="cert-name">{learnerName || "Remote Pilot"}</div>
          <div style={{color: "var(--ink-3)", fontSize: 14, maxWidth: "44ch", margin: "0 auto"}}>
            Demonstrated proficiency on the safety-critical operational limitations,
            airspace, and pilot-responsibility provisions of 14 CFR Part 107.
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
        </div>
      )}

      <div className="actions">
        <button className="btn btn-ghost" onClick={onHome}>Back to dashboard</button>
        <button className="btn btn-primary" onClick={onRetry}>
          <Icon name="rotate" size={16}/> Retake exam
        </button>
      </div>
    </div>
  );
};

window.Exam = Exam;
window.Results = Results;

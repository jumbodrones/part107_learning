// Hub / Dashboard view
const { useState } = React;

const Hub = ({ course, progress, onOpenLesson, onStartExam, examUnlocked }) => {
  const completedCount = course.lessons.filter(l => progress.lessons[l.id]?.completed).length;
  const overallPct = Math.round((completedCount / course.lessons.length) * 100);

  return (
    <div className="hub">
      <div className="hub-header">
        <div>
          <div className="eyebrow accent" style={{marginBottom: 18}}>FAA · 14 CFR Part 107 · Safety Essentials</div>
          <h1>
            <span className="accent">Course</span>
            Fly small. Fly safe.
          </h1>
          <p className="lede" style={{marginTop: 24, maxWidth: "32ch"}}>
            A focused review of the rules that keep your aircraft, your bystanders, and your certificate out of trouble.
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

      <div className="hub-section">
        <div className="hub-section-head">
          <h2>Lessons</h2>
          <div className="eyebrow">Pick any · {course.lessons.length} total</div>
        </div>

        <div className="lesson-grid">
          {course.lessons.map((l) => {
            const lp = progress.lessons[l.id] || {};
            const done = !!lp.completed;
            return (
              <div className="lesson-card" key={l.id} onClick={() => onOpenLesson(l.id)}>
                <div>
                  <div className="num"><span className="dot"></span>LESSON {l.number}</div>
                </div>
                <div>
                  <h3>{l.title}</h3>
                  <div className="summary">{l.summary}</div>
                </div>
                <div className="foot">
                  <div>{l.minutes} min · {l.tagline}</div>
                  <div className={`status ${done ? "done" : ""}`}>
                    <span className="check">
                      {done && <Icon name="check" size={10} />}
                    </span>
                    {done ? "Complete" : "Start"}
                  </div>
                </div>
                <div className="icon-art"><Icon name={l.icon} size={36} /></div>
              </div>
            );
          })}
        </div>
      </div>

      <div className={`exam-tile ${examUnlocked ? "" : "locked"}`}>
        <div>
          <div className="eyebrow accent" style={{color: "var(--magenta)", marginBottom: 10}}>FINAL ASSESSMENT</div>
          <h2>Prove what you know.</h2>
          <div className="exam-meta">
            <span>{course.finalExam.length} questions</span>
            <span>·</span>
            <span>Pass at {Math.round(course.passingScore * 100)}%</span>
            <span>·</span>
            <span>{examUnlocked ? "Unlocked" : `Complete ${course.lessons.length - completedCount} more lesson${course.lessons.length - completedCount === 1 ? "" : "s"} to unlock`}</span>
          </div>
        </div>
        <div>
          <button
            className={examUnlocked ? "btn btn-magenta" : "btn btn-ghost"}
            disabled={!examUnlocked}
            onClick={() => examUnlocked && onStartExam()}
            style={{borderColor: examUnlocked ? "transparent" : "rgba(245,241,232,0.3)", color: examUnlocked ? "white" : "rgba(245,241,232,0.6)"}}
          >
            {examUnlocked ? <Icon name="arrow-right" size={16}/> : <Icon name="lock" size={16}/>}
            {examUnlocked ? "Begin exam" : "Locked"}
          </button>
        </div>
      </div>
    </div>
  );
};

window.Hub = Hub;

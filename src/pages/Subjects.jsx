import "../styles/pages.css";

const subjects = [
  { title: "Maths", level: "KS2 • KS3 • GCSE • A-Level", desc: "Core skills, problem-solving, exam practice." },
  { title: "Physics", level: "GCSE • A-Level", desc: "Concept clarity, equations, exam technique." },
  { title: "Chemistry", level: "GCSE • A-Level", desc: "Topics broken down, required practicals support." },
  { title: "Biology", level: "GCSE • A-Level", desc: "Key processes, mark schemes, diagrams explained." },
  { title: "Computer Science", level: "GCSE • A-Level", desc: "Programming + theory, problem practice." },
  { title: "Programming (Python/JS)", level: "Beginner → Intermediate", desc: "Real projects, confidence with code." },
];

export default function Subjects() {
  return (
    <div className="container page">
      <h1>Subjects</h1>
      <p className="subtext">Pick a subject — lessons are tailored to your level and goals.</p>

      <div className="subjects-grid">
        {subjects.map((s) => (
          <article className="card" key={s.title}>
            <h3>{s.title}</h3>
            <p className="muted">{s.level}</p>
            <p>{s.desc}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
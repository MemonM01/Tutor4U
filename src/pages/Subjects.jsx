import SEO from "../components/SEO";
import "../styles/pages.css";

const subjects = [
  { title: "Maths", level: "KS2 • KS3 • GCSE • A-Level", desc: "Core skills, problem-solving, and exam confidence." },
  { title: "English", level: "KS2 • KS3 • GCSE • A-Level", desc: "Reading analysis, essay structure, and writing confidence." },
  { title: "Business", level: "GCSE • A-Level", desc: "Case studies, key concepts, and exam-ready application skills." },
  { title: "Physics", level: "GCSE • A-Level", desc: "Concept clarity, calculations, and exam technique." },
  { title: "Chemistry", level: "GCSE • A-Level", desc: "Topics broken down with practical support and revision guidance." },
  { title: "Biology", level: "GCSE • A-Level", desc: "Clear explanations, key processes, and strong exam preparation." },
  { title: "Combined Science", level: "GCSE", desc: "Balanced coverage of Biology, Chemistry and Physics for combined science exams." },
  { title: "Computer Science", level: "GCSE • A-Level", desc: "Programming, theory, and problem-solving support." },
  { title: "Programming (Python/JS)", level: "Beginner → Intermediate", desc: "Practical coding support and skill-building guidance." },
  { title: "Further Maths", level: "GCSE • A-Level", desc: "Challenge-focused support for advanced problem solving." },
];

export default function Subjects() {
  return (
    <div className="container page">
      <SEO
        title="Subjects We Teach | GCSE & A-Level Tutoring – Sig Fig Tutors"
        description="Online tutoring in Maths, English, Sciences, Combined Science, Computer Science and more. GCSE and A-Level support across AQA, Edexcel, OCR, WJEC/Eduqas and CCEA."
      />
      <h1>Subjects</h1>
      <p className="subtext">Pick a subject — lessons are tailored to your level and goals.</p>
      <p className="examBoards">Supporting all exam boards: AQA, Edexcel, OCR, WJEC/Eduqas, CCEA</p>

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
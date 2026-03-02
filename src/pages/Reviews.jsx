import "../styles/pages.css";

const reviews = [
  { name: "Student (GCSE Maths)", text: "Helped me go from struggling to confident. Clear explanations and great practice." },
  { name: "Parent", text: "Very professional and supportive. My child improved quickly and enjoyed lessons." },
  { name: "A-Level Student", text: "Strong exam technique and structure — felt prepared and calmer in exams." },
];

export default function Reviews() {
  return (
    <div className="container page">
      <h1>Reviews</h1>
      <p className="subtext">What students and parents say about Tutor4U.</p>

      <div className="reviews-grid">
        {reviews.map((r, i) => (
          <div className="card" key={i}>
            <p className="quote">“{r.text}”</p>
            <p className="muted">— {r.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
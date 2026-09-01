import SEO from "../components/SEO";
import "../styles/pages.css";

const reviews = [
  {
    name: "Parent",
    text: "Shafay has been working with my children for a few months now and he is very good. My children enjoy his lessons and his teaching style is tailored to their needs. They love that they can ask him to explain areas that they are stuck with and he is very accommodating. He is very knowledgeable, friendly and professional and I would highly recommend him. He has made a huge difference for my children and he makes their lessons fun & interactive. Thank you Shafay.",
  },
  {
    name: "Student",
    text: "My tutor encourages me to try the questions, even when I find them difficult at first. This has made me less anxious when attempting a new question and increased my confidence in topics that I initially found difficult.",
  },
  {
    name: "Parent",
    text: "Amazing. The support has been excellent and the lessons are engaging, encouraging and very effective. We have seen real improvement and confidence grow.",
  },
  {
    name: "Student",
    text: "Brilliant service. Everything is clear, well explained and tailored to what I need. I feel much more prepared for my exams.",
  },
  {
    name: "Parent",
    text: "Very professional and supportive. My child feels comfortable asking questions and genuinely enjoys the sessions, which has made a big difference to their progress.",
  },
  {
    name: "Student",
    text: "The way lessons are structured makes difficult topics feel manageable. I feel more confident and much less stressed about schoolwork.",
  },
];

export default function Reviews() {
  return (
    <div className="container page">
      <SEO
        title="Student & Parent Reviews | Sig Fig Tutors"
        description="Read what students and parents say about their experience with Sig Fig Tutors' online GCSE and A-Level tutoring."
      />
      <h1>Reviews</h1>
      <p className="subtext">What students and parents say about Sig Fig Tutors.</p>

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
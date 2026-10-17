import { faqs } from "@/lib/content";

export default function Faq() {
  return (
    <section id="faq" className="in" style={{ paddingBottom: "3.6rem" }}>
      <h2 className="sec-title">Pertanyaan yang sering diajukan</h2>
      <div className="faq">
        {faqs.map((f) => (
          <details key={f.q}>
            <summary>{f.q}</summary>
            <div className="ans">{f.a}</div>
          </details>
        ))}
      </div>
    </section>
  );
}

import { steps } from "@/lib/content";

export default function HowItWorks() {
  return (
    <section id="cara-kerja" className="in block">
      <h2 className="sec-title">
        Langkah Sederhana untuk Mendampingi Tumbuh Kembang Si Kecil.
      </h2>
      <p className="sec-sub">
        Mulai dari memahami kondisi anak hingga merencanakan kebutuhan gizinya.
        NusaGizi membantu orang tua menjalani setiap langkah dengan lebih
        terarah.
      </p>
      <div className="steps">
        {steps.map((s, i) => (
          <article className="step" key={s.title}>
            <div className="n">{i + 1}</div>
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

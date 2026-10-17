import { features } from "@/lib/content";
import { Svg } from "./Icons";

export default function Features() {
  return (
    <section id="fitur" className="in block">
      <h2 className="sec-title">
        Semua yang Dibutuhkan untuk Mendampingi Tumbuh Kembang Si Kecil.
      </h2>
      <p className="sec-sub">
        NusaGizi membantu orang tua memahami kebutuhan anak dan mengambil
        langkah nyata dengan lebih mudah.
      </p>

      <div className="fgrid">
        {features.map((f) => (
          <article className="fcard" key={f.title}>
            <span className="ic" aria-hidden="true">
              <Svg>{f.icon}</Svg>
            </span>
            <h3>{f.title}</h3>
            <p>{f.desc}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

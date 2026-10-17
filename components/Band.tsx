import { bandStats } from "@/lib/content";
import { ArrowRight } from "./Icons";

export default function Band() {
  return (
    <div className="in">
      <div className="band">
        <div>
          <h2>Dari data tumbuh kembang, menjadi langkah nyata.</h2>
          <p>
            Pahami kondisi si kecil, temukan kebutuhan gizinya, dan rencanakan
            langkah sederhana yang bisa dilakukan setiap hari.
          </p>
          <a className="btn btn-white" href="#cara-kerja">
            Lihat Cara Kerja <ArrowRight />
          </a>
        </div>
        <div className="stats">
          {bandStats.map((s) => (
            <div className="stat" key={s.title}>
              <b>{s.title}</b>
              <span>{s.desc}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

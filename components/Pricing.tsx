import { plans } from "@/lib/content";
import { Check } from "./Icons";

export default function Pricing() {
  return (
    <section id="harga" className="in" style={{ paddingBottom: "3.6rem" }}>
      <h2 className="sec-title">Pilih Paket yang Sesuai untuk Keluargamu</h2>
      <p className="sec-sub">
        Mulai gratis untuk memantau si kecil, atau nikmati fitur tambahan untuk
        merencanakan kebutuhan gizi dan pengasuhan dengan lebih praktis.
      </p>

      <div className="pgrid">
        {plans.map((p) => (
          <article className={p.popular ? "plan pop" : "plan"} key={p.name}>
            {p.popular && <span className="badge">Populer</span>}
            <h3>{p.name}</h3>
            <p className="for">{p.forWho}</p>
            <p className="price">
              <span className="n">{p.price}</span>
              <span className="per">/bulan</span>
            </p>
            <ul>
              {p.features.map((f) => (
                <li key={f}>
                  <Check />
                  {f}
                </li>
              ))}
            </ul>
            <a
              className={p.popular ? "btn btn-white" : "btn btn-line"}
              href="#daftar"
            >
              {p.cta}
            </a>
          </article>
        ))}
      </div>

      <p className="price-foot">
        Pilih paket sesuai kebutuhan keluarga. Kamu bisa memulai dari paket
        Gratis dan beralih ke paket berbayar saat membutuhkan fitur tambahan.
      </p>
    </section>
  );
}

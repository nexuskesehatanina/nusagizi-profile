import { plans } from "@/lib/content";
import { Check } from "./Icons";

export default function Pricing() {
    return (
        <section id="harga" className="w-full max-w-360 mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
            <h2 className="sec-title text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0F1F16] text-center">
                Pilih Paket yang Sesuai untuk Keluargamu
            </h2>
            <p className="sec-sub text-[#58695F] text-sm sm:text-base max-w-[56ch] mx-auto text-center mt-3 sm:mt-4 leading-relaxed">
                Mulai gratis untuk memantau si kecil, atau nikmati fitur tambahan untuk merencanakan kebutuhan gizi dan pengasuhan dengan lebih
                praktis.
            </p>

            {/* Grid Responsif via Tailwind: 1 kolom (max-w-md terpusat) di HP/tablet, 3 kolom di desktop */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 sm:gap-6 max-w-md lg:max-w-260 mx-auto mt-8 sm:mt-10 items-stretch">
                {plans.map((p) => (
                    <article className={p.popular ? "plan pop" : "plan"} key={p.name}>
                        {p.popular && <span className="badge">Populer</span>}
                        <h3 className="text-lg font-bold">{p.name}</h3>
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
                        <a className={p.popular ? "btn btn-white w-full" : "btn btn-line w-full"} href="#daftar">
                            {p.cta}
                        </a>
                    </article>
                ))}
            </div>

            <p className="mt-6 text-center text-xs sm:text-sm text-[#58695F] max-w-lg mx-auto">
                Pilih paket sesuai kebutuhan keluarga. Kamu bisa memulai dari paket Gratis dan beralih ke paket berbayar saat membutuhkan fitur
                tambahan.
            </p>
        </section>
    );
}

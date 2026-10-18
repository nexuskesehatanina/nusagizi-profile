import { features } from "@/lib/content";
import { Svg } from "./Icons";

export default function Features() {
    return (
        <section id="fitur" className="w-full max-w-360 mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
            <h2 className="sec-title text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0F1F16] text-center">
                Semua yang Dibutuhkan untuk Mendampingi Tumbuh Kembang Si Kecil.
            </h2>
            <p className="sec-sub text-[#58695F] text-sm sm:text-base max-w-[56ch] mx-auto text-center mt-3 sm:mt-4 leading-relaxed">
                NusaGizi membantu orang tua memahami kebutuhan anak dan mengambil langkah nyata dengan lebih mudah.
            </p>

            {/* Grid Responsif via Tailwind: 1 kolom di HP, 2 kolom di tablet, 3 kolom di desktop */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6 mt-8 sm:mt-10">
                {features.map((f) => (
                    <article
                        className="bg-white border border-[#E3EAE4] hover:border-[#B9E3C6] rounded-2xl p-5 sm:p-6 shadow-sm flex flex-col gap-2 min-w-0 transition-all duration-200 hover:-translate-y-1"
                        key={f.title}
                    >
                        <span className="w-11 h-11 rounded-xl bg-[#EDF8F0] text-[#00A735] grid place-items-center shrink-0" aria-hidden="true">
                            <span className="w-5 h-5 flex items-center justify-center">
                                <Svg>{f.icon}</Svg>
                            </span>
                        </span>
                        <h3 className="text-base sm:text-lg font-bold text-[#0F1F16] mt-2">{f.title}</h3>
                        <p className="text-sm text-[#58695F] leading-relaxed">{f.desc}</p>
                    </article>
                ))}
            </div>
        </section>
    );
}

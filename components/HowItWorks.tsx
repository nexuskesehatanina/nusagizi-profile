import { steps } from "@/lib/content";

export default function HowItWorks() {
    return (
        <section id="cara-kerja" className="w-full max-w-360 mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
            <h2 className="sec-title text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0F1F16] text-center">
                Langkah Sederhana untuk Mendampingi Tumbuh Kembang Si Kecil.
            </h2>
            <p className="sec-sub text-[#58695F] text-sm sm:text-base max-w-[56ch] mx-auto text-center mt-3 sm:mt-4 leading-relaxed">
                Mulai dari memahami kondisi anak hingga merencanakan kebutuhan gizinya. NusaGizi membantu orang tua menjalani setiap langkah dengan
                lebih terarah.
            </p>

            {/* Grid Responsif via Tailwind: 1 kolom di HP, 2 kolom di tablet, 4 kolom di desktop */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mt-8 sm:mt-10">
                {steps.map((s, i) => (
                    <article className="bg-white border border-[#E3EAE4] rounded-2xl p-5 sm:p-6 shadow-sm min-w-0 flex flex-col" key={s.title}>
                        <div className="w-10 h-10 rounded-full bg-[#00A735] text-white flex items-center justify-center font-extrabold text-base mb-3 shadow-[0_4px_10px_rgba(0,167,53,0.3)]">
                            {i + 1}
                        </div>
                        <h3 className="text-base sm:text-lg font-bold text-[#0F1F16] mb-1.5">{s.title}</h3>
                        <p className="text-sm text-[#58695F] leading-relaxed">{s.desc}</p>
                    </article>
                ))}
            </div>
        </section>
    );
}

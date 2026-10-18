import { bandStats } from "@/lib/content";
import { ArrowRight } from "./Icons";

export default function Band() {
    return (
        <div className="w-full max-w-360 mx-auto px-4 sm:px-6 lg:px-8 my-4 sm:my-6">
            <div className="relative overflow-hidden rounded-2xl text-white bg-linear-to-br from-[#0A3F25] to-[#0B5A30] p-6 sm:p-8 lg:p-10 grid grid-cols-1 lg:grid-cols-[1fr_1.25fr] gap-6 sm:gap-8 items-center text-center lg:text-left">
                <div className="relative z-10 flex flex-col items-center lg:items-start">
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight leading-tight">
                        Dari data tumbuh kembang, menjadi langkah nyata.
                    </h2>
                    <p className="text-[#C5E6D1] text-sm sm:text-base max-w-[42ch] mt-3 leading-relaxed">
                        Pahami kondisi si kecil, temukan kebutuhan gizinya, dan rencanakan langkah sederhana yang bisa dilakukan setiap hari.
                    </p>
                    <a className="btn btn-white mt-5 sm:mt-6 inline-flex" href="#cara-kerja">
                        Lihat Cara Kerja <ArrowRight />
                    </a>
                </div>

                {/* Stats Grid via Tailwind: 1 kolom di HP, 3 kolom di tablet & desktop */}
                <div className="relative z-10 grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 w-full">
                    {bandStats.map((s) => (
                        <div
                            className="bg-white/10 border border-white/15 rounded-xl p-4 sm:p-5 flex flex-col justify-start min-w-0 backdrop-blur-md transition-colors hover:bg-white/15 text-left"
                            key={s.title}
                        >
                            <b className="text-xl sm:text-2xl font-extrabold tracking-tight text-white block">{s.title}</b>
                            <span className="text-xs sm:text-sm text-[#D1ECDA] mt-1.5 leading-snug block">{s.desc}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

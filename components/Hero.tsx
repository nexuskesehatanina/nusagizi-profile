"use client";

import Image from "next/image";
import { ArrowRight, Play } from "./Icons";

export default function Hero() {
    return (
        <section className="w-full max-w-360 mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-[0.95fr_1.15fr] gap-8 lg:gap-12 items-center py-8 sm:py-12 lg:py-16">
            <div className="flex flex-col text-center lg:text-left items-center lg:items-start">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-extrabold tracking-tight leading-[1.15] text-[#0F1F16]">
                    Pahami Tumbuh Kembang, <span className="text-[#00A735]">Ambil Langkah Nyata Bersama NusaGizi.</span>
                </h1>
                <p className="mt-4 sm:mt-5 text-[#58695F] text-base sm:text-lg max-w-[58ch] leading-relaxed">
                    Pantau pertumbuhan, pahami kebutuhan gizi, dan temukan rekomendasi menu yang sesuai untuk si kecil. Semua dalam{" "}
                    <b className="font-bold text-[#0F1F16]">satu aplikasi</b> untuk membantu orang tua mendampingi tumbuh kembang anak dengan lebih
                    percaya diri.
                </p>
                <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 justify-center lg:justify-start w-full sm:w-auto">
                    <a className="btn btn-primary w-full sm:w-auto justify-center" href="#daftar">
                        Coba Gratis
                        <ArrowRight />
                    </a>
                    <a className="btn btn-line w-full sm:w-auto justify-center" href="#cara-kerja">
                        Lihat Cara Kerjanya <Play />
                    </a>
                </div>
            </div>

            <div className="flex justify-center items-center w-full">
                <div className="relative w-full max-w-170 mx-auto transition-transform duration-300 hover:scale-[1.02] drop-shadow-[0_16px_32px_rgba(15,31,22,0.16)]">
                    <Image
                        src="/mockup3.png"
                        alt="Mockup Aplikasi NusaGizi"
                        width={960}
                        height={800}
                        priority
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 680px"
                        className="w-full h-auto object-contain block"
                    />
                </div>
            </div>
        </section>
    );
}

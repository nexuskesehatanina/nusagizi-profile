"use client";

import Image from "next/image";

export default function Waitlist() {
    const PLAYSTORE_URL = "https://play.google.com/store";
    const WHATSAPP_URL = "https://wa.me/6287791152573";

    return (
        <section id="daftar" className="w-full max-w-360 mx-auto px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16">
            <div className="relative overflow-hidden rounded-2xl text-white bg-linear-to-br from-[#072B19] to-[#0B6A33] p-6 sm:p-10 lg:p-12 grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-8 items-center text-center lg:text-left shadow-lg">
                <div className="relative z-10 flex flex-col items-center lg:items-start">
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight leading-tight">
                        Dampingi Tumbuh Kembang Si Kecil, Mulai Hari ini.
                    </h2>
                    <p className="text-[#C9E8D4] text-sm sm:text-base max-w-[46ch] mt-3 sm:mt-4 leading-relaxed">
                        Pantau tumbuh kembang, temukan inspirasi menu, dan kelola kebutuhan gizi si kecil dalam satu aplikasi. Mulai perjalananmu
                        bersama NusaGizi secara gratis.
                    </p>
                </div>

                <div className="relative z-10 flex flex-col gap-3.5 justify-center w-full max-w-sm mx-auto lg:mx-0">
                    {/* Tombol Play Store */}
                    <a
                        href={PLAYSTORE_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-white w-full flex items-center justify-center gap-3 p-3.5 sm:p-4 rounded-2xl shadow-md hover:-translate-y-0.5 transition-all"
                    >
                        <Image src="/google-play-5.svg" alt="Google Play Logo" width={26} height={26} className="shrink-0 object-contain" />
                        <div className="text-left leading-tight">
                            <div className="text-[0.68rem] uppercase tracking-wider text-[#58695F]">Temukan di</div>
                            <div className="text-base sm:text-lg font-extrabold text-[#0F1F16]">Google Play</div>
                        </div>
                    </a>

                    {/* Tombol WhatsApp */}
                    <a
                        href={WHATSAPP_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full flex items-center justify-center gap-2.5 p-3.5 sm:p-4 rounded-2xl bg-white/12 border border-white/25 text-white text-sm sm:text-base font-bold shadow-sm hover:bg-white/20 hover:-translate-y-0.5 transition-all"
                    >
                        <Image src="/whatsapp-3.svg" alt="WhatsApp Logo" width={26} height={26} className="shrink-0 object-contain" />
                        <span>Hubungi via WhatsApp</span>
                    </a>
                </div>
            </div>
        </section>
    );
}

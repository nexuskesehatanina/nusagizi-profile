const menu = [
    { time: "07.00", text: "Bubur ayam hati dengan wortel" },
    { time: "10.00", text: "Pisang kerok dan air putih" },
    { time: "12.30", text: "Nasi tim ikan dengan bayam" },
    { time: "18.00", text: "Sup ayam telur dengan brokoli" },
];

export default function Screenshots() {
    return (
        <section id="tampilan-aplikasi" className="w-full max-w-360 mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
            <h2 className="sec-title text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0F1F16] text-center">
                Dirancang agar Informasi Anak Lebih Mudah Dipahami
            </h2>
            <p className="sec-sub text-[#58695F] text-sm sm:text-base max-w-[56ch] mx-auto text-center mt-3 sm:mt-4 leading-relaxed">
                Lihat bagaimana data tumbuh kembang, rekomendasi menu, dan kebutuhan harian si kecil tersaji dalam satu aplikasi yang praktis dan
                mudah digunakan.
            </p>

            {/* Grid Responsif via Tailwind: 1 kolom (max-w-lg) di mobile/tablet, 3 kolom di desktop */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 max-w-lg lg:max-w-none mx-auto mt-8 sm:mt-10">
                {/* 1 — Kurva pertumbuhan */}
                <article className="bg-white border border-[#E3EAE4] rounded-2xl overflow-hidden shadow-sm flex flex-col min-w-0">
                    <div className="bg-linear-to-br from-[#EAF6EE] to-[#F6FBF7] p-4 sm:p-5 relative min-h-52.5 flex items-center">
                        <div className="ui">
                            <div className="hd">
                                Kurva berat badan <span className="tag">Contoh</span>
                            </div>
                            <svg viewBox="0 0 220 110" style={{ display: "block", width: "100%", height: "auto" }} aria-hidden="true">
                                <path d="M10 70L50 52 90 40 130 32 170 24 210 14V44L170 52 130 60 90 70 50 82 10 96Z" fill="#00A735" opacity=".14" />
                                <path d="M10 106L50 92 90 82 130 74 170 64 210 54V14L170 24 130 32 90 40 50 52 10 70Z" fill="#FFB93F" opacity="0" />
                                <path
                                    d="M10 86L50 70 90 58 130 48 170 38 210 28"
                                    fill="none"
                                    stroke="#00A735"
                                    strokeOpacity=".5"
                                    strokeWidth="1.2"
                                    strokeDasharray="3 3"
                                />
                                <path
                                    d="M50 76L80 72 110 64 140 54 170 46 200 38"
                                    fill="none"
                                    stroke="#00A735"
                                    strokeWidth="2.6"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <circle cx="200" cy="38" r="4" fill="#fff" stroke="#00A735" strokeWidth="2.5" />
                                <line x1="10" y1="104" x2="210" y2="104" stroke="#E3EAE4" />
                            </svg>
                            <div className="rrow" style={{ marginTop: ".4rem" }}>
                                <span>Status gizi</span>
                                <b className="up">Gizi baik</b>
                            </div>
                        </div>
                    </div>
                    <div className="p-4 sm:p-5 flex flex-col gap-1">
                        <small className="text-[0.66rem] font-extrabold tracking-widest uppercase text-[#007A27]">Pantau</small>
                        <h3 className="text-base sm:text-lg font-bold text-[#0F1F16]">Kurva pertumbuhan</h3>
                        <p className="text-sm text-[#58695F]">Posisi anak terhadap rentang WHO terlihat sekilas, lengkap dengan arah tren.</p>
                    </div>
                </article>

                {/* 2 — Menu hari ini */}
                <article className="bg-white border border-[#E3EAE4] rounded-2xl overflow-hidden shadow-sm flex flex-col min-w-0">
                    <div className="bg-linear-to-br from-[#EAF6EE] to-[#F6FBF7] p-4 sm:p-5 relative min-h-52.5 flex items-center">
                        <div className="ui">
                            <div className="hd">
                                Menu hari ini <span className="tag">Contoh</span>
                            </div>
                            {menu.map((m) => (
                                <div className="mrow" key={m.time}>
                                    <time>{m.time}</time>
                                    <span>{m.text}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="p-4 sm:p-5 flex flex-col gap-1">
                        <small className="text-[0.66rem] font-extrabold tracking-widest uppercase text-[#007A27]">Jalankan</small>
                        <h3 className="text-base sm:text-lg font-bold text-[#0F1F16]">Menu dan daftar belanja</h3>
                        <p className="text-sm text-[#58695F]">Rencana makan hari itu, siap diubah jadi daftar belanja yang bisa dibagi.</p>
                    </div>
                </article>

                {/* 3 — Ringkasan 30 hari */}
                <article className="bg-white border border-[#E3EAE4] rounded-2xl overflow-hidden shadow-sm flex flex-col min-w-0">
                    <div className="bg-linear-to-br from-[#EAF6EE] to-[#F6FBF7] p-4 sm:p-5 relative min-h-52.5 flex items-center">
                        <div className="ui">
                            <div className="hd">
                                Ringkasan 30 hari <span className="tag">Contoh</span>
                            </div>
                            <div className="rrow">
                                <span>Berat badan</span>
                                <b>
                                    10,6 kg <span className="up">+0,4</span>
                                </b>
                            </div>
                            <div className="rrow">
                                <span>Asupan vs target</span>
                                <b>82%</b>
                            </div>
                            <div className="rrow">
                                <span>Catatan perkembangan</span>
                                <b>3 dicatat</b>
                            </div>
                            <div className="alert">Cepat lelah saat makan: 3 kali pekan ini. Bahas saat kontrol.</div>
                        </div>
                    </div>
                    <div className="p-4 sm:p-5 flex flex-col gap-1">
                        <small className="text-[0.66rem] font-extrabold tracking-widest uppercase text-[#007A27]">Konsultasi</small>
                        <h3 className="text-base sm:text-lg font-bold text-[#0F1F16]">Laporan untuk dokter</h3>
                        <p className="text-sm text-[#58695F]">Satu halaman yang membantu dokter melihat perkembangan tanpa mengandalkan ingatan.</p>
                    </div>
                </article>
            </div>
        </section>
    );
}

"use client";

import Image from "next/image";

export default function Waitlist() {
    const PLAYSTORE_URL = "https://play.google.com/store";
    const WHATSAPP_URL =
        "https://wa.me/6281234567890?text=Halo%20NusaGizi,%20saya%20tertarik%20untuk%20mengetahui%20lebih%20lanjut%20tentang%20aplikasi%20ini.";

    return (
        <section id="daftar" className="in cta">
            <div className="cta-panel">
                <div>
                    <h2>Berat anak naik tipis bulan ini? Jangan tunggu kontrol berikutnya.</h2>
                    <p className="sub">
                        Unduh aplikasi NusaGizi sekarang untuk mulai mendampingi tumbuh kembang si kecil, atau hubungi tim kami via WhatsApp jika
                        membutuhkan bantuan.
                    </p>
                </div>

                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "0.9rem",
                        justifyContent: "center",
                    }}
                >
                    {/* Tombol Play Store */}
                    <a
                        href={PLAYSTORE_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-white"
                        style={{
                            display: "inline-flex",
                            alignItems: "center",
                            justifyContent: "center",
                            gap: "0.75rem",
                            padding: "0.95rem 1.4rem",
                            textDecoration: "none",
                            borderRadius: "14px",
                            boxShadow: "0 10px 24px -10px rgba(0,0,0,0.3)",
                            transition: "transform .2s ease, box-shadow .2s ease",
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = "translateY(-2px)";
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = "translateY(0)";
                        }}
                    >
                        <Image
                            src="/google-play-5.svg"
                            alt="Google Play Logo"
                            width={26}
                            height={26}
                            style={{ flexShrink: 0, objectFit: "contain" }}
                        />
                        <div style={{ textAlign: "left", lineHeight: 1.2 }}>
                            <div
                                style={{
                                    fontSize: "0.68rem",
                                    textTransform: "uppercase",
                                    letterSpacing: "0.08em",
                                    opacity: 0.8,
                                    color: "var(--muted)",
                                }}
                            >
                                Temukan di
                            </div>
                            <div style={{ fontSize: "1.05rem", fontWeight: 800, color: "var(--ink)" }}>Google Play</div>
                        </div>
                    </a>

                    {/* Tombol WhatsApp */}
                    <a
                        href={WHATSAPP_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            display: "inline-flex",
                            alignItems: "center",
                            justifyContent: "center",
                            gap: "0.5rem",
                            padding: "0.95rem 1.4rem",
                            borderRadius: "14px",
                            background: "rgba(255, 255, 255, 0.12)",
                            border: "1px solid rgba(255, 255, 255, 0.28)",
                            color: "#fff",
                            textDecoration: "none",
                            fontSize: "0.96rem",
                            fontWeight: 700,
                            boxShadow: "0 4px 14px rgba(0,0,0,0.1)",
                            transition: "all .2s ease",
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.background = "rgba(255, 255, 255, 0.2)";
                            e.currentTarget.style.transform = "translateY(-2px)";
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.background = "rgba(255, 255, 255, 0.12)";
                            e.currentTarget.style.transform = "translateY(0)";
                        }}
                    >
                        <Image src="/whatsapp-3.svg" alt="WhatsApp Logo" width={28} height={28} style={{ flexShrink: 0, objectFit: "contain" }} />
                        <span>Hubungi via WhatsApp</span>
                    </a>
                </div>
            </div>
        </section>
    );
}

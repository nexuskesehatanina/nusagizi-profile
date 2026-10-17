import Image from "next/image";
import { CONTACT_EMAIL } from "@/lib/content";
import { ArrowUp } from "./Icons";

export default function Footer() {
    return (
        <footer className="foot">
            <div className="fg">
                <div className="about">
                    <a className="brand" href="#top" style={{ display: "inline-flex", alignItems: "center", gap: "0.6rem" }}>
                        <Image src="/logo.png" alt="Logo NusaGizi" width={28} height={28} style={{ objectFit: "contain" }} />
                        <span style={{ fontSize: "1.15rem", fontWeight: 800, letterSpacing: "-0.02em" }}>NusaGizi</span>
                    </a>
                    <p style={{ marginTop: "0.85rem", lineHeight: 1.6, opacity: 0.85 }}>
                        Menerjemahkan data pertumbuhan anak menjadi tindakan nyata yang dapat dilakukan orang tua setiap hari.
                    </p>
                </div>

                <div>
                    <h4>Produk</h4>
                    <ul>
                        <li>
                            <a href="#fitur">Fitur</a>
                        </li>
                        <li>
                            <a href="#cara-kerja">Cara kerja</a>
                        </li>
                        <li>
                            <a href="#harga">Harga</a>
                        </li>
                        <li>
                            <a href="#faq">FAQ</a>
                        </li>
                    </ul>
                </div>

                <div>
                    <h4>Untuk Faskes</h4>
                    <ul>
                        <li>
                            <a href="#harga">Dashboard Pemantauan</a>
                        </li>
                        <li>
                            <a href="#daftar">Ajukan Kerja Sama</a>
                        </li>
                        <li>
                            <a href="#daftar">Program CSR</a>
                        </li>
                    </ul>
                </div>

                <div>
                    <h4>Kontak & Media Sosial</h4>
                    <ul style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                        <li>
                            <a
                                href={`mailto:${CONTACT_EMAIL}`}
                                style={{
                                    display: "inline-flex",
                                    alignItems: "center",
                                    gap: "0.65rem",
                                    color: "#EAF6EE",
                                    textDecoration: "none",
                                    transition: "color 0.2s ease",
                                }}
                            >
                                <span
                                    style={{
                                        width: "28px",
                                        height: "28px",
                                        borderRadius: "8px",
                                        background: "rgba(255, 255, 255, 0.08)",
                                        border: "1px solid rgba(255, 255, 255, 0.14)",
                                        display: "inline-grid",
                                        placeItems: "center",
                                        flexShrink: 0,
                                    }}
                                >
                                    <Image src="/mail.svg" alt="Email" width={14} height={14} style={{ filter: "brightness(0) invert(1)" }} />
                                </span>
                                <span style={{ whiteSpace: "nowrap", fontSize: "0.82rem" }}>{CONTACT_EMAIL}</span>
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://wa.me/6287791152573"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                    display: "inline-flex",
                                    alignItems: "center",
                                    gap: "0.65rem",
                                    color: "#EAF6EE",
                                    textDecoration: "none",
                                    transition: "color 0.2s ease",
                                }}
                            >
                                <span
                                    style={{
                                        width: "28px",
                                        height: "28px",
                                        borderRadius: "8px",
                                        background: "rgba(255, 255, 255, 0.08)",
                                        border: "1px solid rgba(255, 255, 255, 0.14)",
                                        display: "inline-grid",
                                        placeItems: "center",
                                        flexShrink: 0,
                                    }}
                                >
                                    <Image
                                        src="/whatsapp-black.svg"
                                        alt="WhatsApp"
                                        width={14}
                                        height={14}
                                        style={{ filter: "brightness(0) invert(1)" }}
                                    />
                                </span>
                                <span>0877-9115-2573</span>
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://instagram.com/Nusagizi.id"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                    display: "inline-flex",
                                    alignItems: "center",
                                    gap: "0.65rem",
                                    color: "#EAF6EE",
                                    textDecoration: "none",
                                    transition: "color 0.2s ease",
                                }}
                            >
                                <span
                                    style={{
                                        width: "28px",
                                        height: "28px",
                                        borderRadius: "8px",
                                        background: "rgba(255, 255, 255, 0.08)",
                                        border: "1px solid rgba(255, 255, 255, 0.14)",
                                        display: "inline-grid",
                                        placeItems: "center",
                                        flexShrink: 0,
                                    }}
                                >
                                    <Image
                                        src="/instagram.svg"
                                        alt="Instagram"
                                        width={14}
                                        height={14}
                                        style={{ filter: "brightness(0) invert(1)" }}
                                    />
                                </span>
                                <span>Nusagizi.id</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            <div style={{ marginTop: "2.4rem", paddingTop: "1.6rem", borderTop: "1px solid rgba(168,199,179,0.14)" }}>
                {/* Disclaimer Card yang Rapi dan Bersih */}
                <div
                    style={{
                        background: "rgba(255, 255, 255, 0.04)",
                        border: "1px solid rgba(255, 255, 255, 0.08)",
                        borderRadius: "12px",
                        padding: "0.85rem 1.1rem",
                        fontSize: "0.78rem",
                        lineHeight: 1.6,
                        color: "#C2DED0",
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "0.75rem",
                    }}
                >
                    <div style={{ display: "flex", flexDirection: "column", gap: "0.35rem" }}>
                        <div style={{ color: "#fff", fontWeight: 700, fontSize: "0.8rem", letterSpacing: "0.02em" }}>
                            Catatan Medis & Ketentuan Data
                        </div>
                        <ul
                            style={{
                                listStyle: "none",
                                padding: 0,
                                margin: 0,
                                display: "flex",
                                flexDirection: "column",
                                gap: "0.25rem",
                                color: "#B8D9C7",
                                fontSize: "0.77rem",
                                lineHeight: 1.5,
                            }}
                        >
                            <li style={{ display: "flex", alignItems: "baseline", gap: "0.45rem" }}>
                                <span style={{ color: "#00E676", fontSize: "0.9rem", lineHeight: 1 }}>•</span>
                                <span>
                                    NusaGizi adalah alat bantu pemantauan gizi dan{" "}
                                    <strong style={{ color: "#EAF6EE", fontWeight: 600 }}>tidak menggantikan pemeriksaan/penilaian klinis</strong>{" "}
                                    tenaga kesehatan.
                                </span>
                            </li>
                            <li style={{ display: "flex", alignItems: "baseline", gap: "0.45rem" }}>
                                <span style={{ color: "#00E676", fontSize: "0.9rem", lineHeight: 1 }}>•</span>
                                <span>
                                    Status gizi mengacu pada <strong style={{ color: "#EAF6EE", fontWeight: 600 }}>standar antropometri WHO</strong>.
                                </span>
                            </li>
                            <li style={{ display: "flex", alignItems: "baseline", gap: "0.45rem" }}>
                                <span style={{ color: "#00E676", fontSize: "0.9rem", lineHeight: 1 }}>•</span>
                                <span>
                                    Data contoh pada halaman ini{" "}
                                    <strong style={{ color: "#EAF6EE", fontWeight: 600 }}>bukan data pasien nyata</strong>.
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div
                    className="fb"
                    style={{
                        marginTop: "1.4rem",
                        borderTop: "none",
                        paddingTop: 0,
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}
                >
                    <span style={{ fontSize: "0.8rem", color: "#A8C7B3" }}>© 2026 NusaGizi · Nexus Kesehatan Indonesia</span>
                    <a className="up-btn" href="#top" aria-label="Kembali ke atas" style={{ position: "static" }}>
                        <ArrowUp />
                    </a>
                </div>
            </div>
        </footer>
    );
}

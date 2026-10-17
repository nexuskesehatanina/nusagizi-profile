"use client";

import Image from "next/image";
import { ArrowRight, Play } from "./Icons";

export default function Hero() {
    return (
        <section className="in hero">
            <div>
                <h1>
                    Pahami Tumbuh Kembang, <em>Ambil Langkah Nyata Bersama NusaGizi.</em>
                </h1>
                <p className="lede">
                    Pantau pertumbuhan, pahami kebutuhan gizi, dan temukan rekomendasi menu yang sesuai untuk si kecil. Semua dalam{" "}
                    <b>satu aplikasi</b> untuk membantu orang tua mendampingi tumbuh kembang anak dengan lebih percaya diri.
                </p>
                <div className="hero-actions">
                    <a className="btn btn-primary" href="#daftar">
                        Coba Gratis
                        <ArrowRight />
                    </a>
                    <a className="btn btn-line" href="#cara-kerja">
                        Lihat Cara Kerjanya <Play />
                    </a>
                </div>
            </div>

            <div
                className="art"
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    position: "relative",
                    width: "100%",
                }}
            >
                <div
                    style={{
                        position: "relative",
                        width: "100%",
                        cursor: "pointer",
                        transition: "transform 0.4s cubic-bezier(0.2, 0.8, 0.2, 1), filter 0.4s ease",
                        filter: "drop-shadow(0 20px 36px rgba(15, 31, 22, 0.2))",
                        transformOrigin: "center center",
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.transform = "scale(1.05) translateY(-6px)";
                        e.currentTarget.style.filter = "drop-shadow(0 32px 50px rgba(15, 31, 22, 0.3))";
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.transform = "scale(1) translateY(0)";
                        e.currentTarget.style.filter = "drop-shadow(0 20px 36px rgba(15, 31, 22, 0.2))";
                    }}
                >
                    <Image
                        src="/mockup3.png"
                        alt="Mockup Aplikasi NusaGizi"
                        width={960}
                        height={800}
                        priority
                        style={{
                            width: "100%",
                            height: "auto",
                            objectFit: "contain",
                            display: "block",
                        }}
                    />
                </div>
            </div>
        </section>
    );
}

"use client";

import * as React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { testimonials } from "@/lib/content";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Testimonials() {
    const [emblaRef, emblaApi] = useEmblaCarousel({
        align: "start",
        loop: true,
    });

    const scrollPrev = React.useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev();
    }, [emblaApi]);

    const scrollNext = React.useCallback(() => {
        if (emblaApi) emblaApi.scrollNext();
    }, [emblaApi]);

    return (
        <section id="testimoni" className="in block">
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem" }}>
                <h2 className="sec-title" style={{ margin: 0 }}>
                    Apa Kata Mereka Tentang NusaGizi?
                </h2>
                <div style={{ display: "flex", gap: "0.5rem" }}>
                    <button
                        onClick={scrollPrev}
                        aria-label="Previous"
                        style={{
                            width: "40px",
                            height: "40px",
                            borderRadius: "50%",
                            border: "1px solid var(--line)",
                            background: "#fff",
                            display: "grid",
                            placeItems: "center",
                            cursor: "pointer",
                        }}
                    >
                        <ChevronLeft size={18} />
                    </button>
                    <button
                        onClick={scrollNext}
                        aria-label="Next"
                        style={{
                            width: "40px",
                            height: "40px",
                            borderRadius: "50%",
                            border: "1px solid var(--line)",
                            background: "#fff",
                            display: "grid",
                            placeItems: "center",
                            cursor: "pointer",
                        }}
                    >
                        <ChevronRight size={18} />
                    </button>
                </div>
            </div>

            {/* Carousel Viewport */}
            <div ref={emblaRef} style={{ overflow: "hidden" }}>
                <div style={{ display: "flex", gap: "1rem", touchAction: "pan-y" }}>
                    {testimonials.map((t) => (
                        <div
                            key={t.name}
                            style={{
                                flex: "0 0 calc(33.333% - 0.67rem)",
                                minWidth: 0,
                                display: "flex",
                            }}
                            className="carousel-slide"
                        >
                            <article className="tcard" style={{ height: "100%", width: "100%", display: "flex", flexDirection: "column" }}>
                                <div className="qm">&ldquo;</div>
                                <span className="tslot">{t.slot}</span>
                                <blockquote style={{ flex: 1, margin: 0 }}>{t.quote}</blockquote>
                                <div className="who" style={{ height: "64px", minHeight: "64px", maxHeight: "64px", flexShrink: 0, marginTop: "auto" }}>
                                    <Image
                                        src="/women_profile.jpg"
                                        alt={t.name}
                                        width={36}
                                        height={36}
                                        style={{
                                            borderRadius: "50%",
                                            objectFit: "cover",
                                            flexShrink: 0,
                                        }}
                                    />
                                    <div>
                                        <b>{t.name}</b>
                                        <small>{t.role}</small>
                                    </div>
                                </div>
                            </article>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

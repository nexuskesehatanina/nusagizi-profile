"use client";

import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { navLinks } from "@/lib/content";
import { Menu, X } from "lucide-react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [mounted, setMounted] = useState(false);
    const headerRef = useRef<HTMLElement>(null);
    const [headerHeight, setHeaderHeight] = useState(65);

    // Hitung tinggi header aktual untuk offset drawer
    useEffect(() => {
        setMounted(true);
        if (headerRef.current) {
            setHeaderHeight(headerRef.current.getBoundingClientRect().height);
        }
    }, []);

    // Tutup menu otomatis jika layar diperbesar ke ukuran desktop
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setIsOpen(false);
            }
            if (headerRef.current) {
                setHeaderHeight(headerRef.current.getBoundingClientRect().height);
            }
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const drawerContent = (
        <div
            className="fixed inset-x-0 bottom-0 z-9999 bg-black/40 backdrop-blur-sm flex flex-col animate-fadeIn"
            style={{ top: `${headerHeight}px` }}
            onClick={() => setIsOpen(false)}
        >
            <div
                className="w-full bg-white border-b border-[#E3EAE4] shadow-2xl p-5 flex flex-col gap-4 overflow-y-auto animate-slideDown"
                onClick={(e) => e.stopPropagation()}
            >
                <nav className="flex flex-col gap-1.5">
                    {navLinks.map((l) => (
                        <a
                            key={l.href}
                            href={l.href}
                            className="block px-4 py-3.5 text-base font-bold text-[#0F1F16] hover:bg-[#EDF8F0] hover:text-[#007A27] rounded-xl transition-all"
                            onClick={() => setIsOpen(false)}
                        >
                            {l.label}
                        </a>
                    ))}
                </nav>
                <div className="pt-3 border-t border-[#E3EAE4]">
                    <a className="btn btn-primary w-full justify-center py-3.5 text-base" href="#daftar" onClick={() => setIsOpen(false)}>
                        Coba Gratis
                    </a>
                </div>
            </div>
        </div>
    );

    return (
        <>
            <header ref={headerRef} className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-[#E3EAE4]/80">
                <div className="w-full max-w-360 mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4 py-3.5">
                    <a className="flex items-center gap-2 shrink-0" href="#top" onClick={() => setIsOpen(false)}>
                        <Image src="/logo.png" alt="Logo NusaGizi" width={140} height={35} priority className="w-auto h-8 sm:h-9 object-contain" />
                    </a>

                    {/* Navigasi Desktop */}
                    <nav className="hidden md:flex items-center gap-6 lg:gap-8 mx-auto" aria-label="Bagian halaman">
                        {navLinks.map((l) => (
                            <a
                                key={l.href}
                                href={l.href}
                                className="relative text-sm font-semibold text-[#0F1F16] hover:text-[#007A27] py-1 transition-colors duration-150 first:text-[#007A27] first:after:content-[''] first:after:absolute first:after:left-0 first:after:right-0 first:after:-bottom-1 first:after:h-0.5 first:after:bg-[#00A735]"
                            >
                                {l.label}
                            </a>
                        ))}
                    </nav>

                    <div className="flex items-center gap-3 shrink-0">
                        <a className="hidden md:inline-flex btn btn-primary btn-sm text-sm" href="#daftar">
                            Coba Gratis
                        </a>
                        {/* Tombol Hamburger */}
                        <button
                            type="button"
                            className="flex md:hidden items-center justify-center w-10 h-10 rounded-lg border border-[#E3EAE4] bg-transparent text-[#0F1F16] hover:bg-[#EDF8F0] hover:border-[#00A735] transition-all cursor-pointer"
                            onClick={() => setIsOpen((prev) => !prev)}
                            aria-label={isOpen ? "Tutup menu" : "Buka menu"}
                            aria-expanded={isOpen}
                        >
                            {isOpen ? <X size={22} /> : <Menu size={22} />}
                        </button>
                    </div>
                </div>
            </header>

            {/* Drawer mobile dirender via Portal di level root, bebas dari stacking context header */}
            {mounted && isOpen && createPortal(drawerContent, document.body)}
        </>
    );
}

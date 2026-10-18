import Image from "next/image";
import { CONTACT_EMAIL } from "@/lib/content";
import { ArrowUp } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-[#072B19] text-[#A8C7B3] pt-12 sm:pt-14 pb-8 relative">
            <div className="w-full max-w-360 mx-auto px-4 sm:px-6 lg:px-8">
                {/* Grid Responsif via Tailwind: 1 kolom di HP, 2 kolom di tablet, 4 kolom di desktop */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.3fr_0.85fr_0.85fr_1.3fr] gap-8 lg:gap-6">
                    <div>
                        <a className="inline-flex items-center gap-2.5" href="#top">
                            <Image
                                src="/logo.png"
                                alt="Logo NusaGizi"
                                width={140}
                                height={35}
                                priority
                                className="w-auto h-8 sm:h-9 object-contain"
                            />
                        </a>
                        <p className="mt-3.5 text-sm text-[#A8C7B3] leading-relaxed max-w-[34ch] opacity-85">Dari Data Menjadi Tindakan Nyata.</p>
                    </div>

                    <div>
                        <h4 className="text-xs font-extrabold tracking-widest uppercase text-white mb-3">Navigasi</h4>
                        <ul className="list-none p-0 m-0 flex flex-col gap-2 text-sm">
                            <li>
                                <a className="hover:text-white transition-colors" href="#top">
                                    Beranda
                                </a>
                            </li>
                            <li>
                                <a className="hover:text-white transition-colors" href="#fitur">
                                    Fitur
                                </a>
                            </li>
                            <li>
                                <a className="hover:text-white transition-colors" href="#cara-kerja">
                                    Cara Kerja
                                </a>
                            </li>
                            <li>
                                <a className="hover:text-white transition-colors" href="#tampilan-aplikasi">
                                    Tampilan Aplikasi
                                </a>
                            </li>
                            <li>
                                <a className="hover:text-white transition-colors" href="#harga">
                                    Paket Harga
                                </a>
                            </li>
                            <li>
                                <a className="hover:text-white transition-colors" href="#faq">
                                    FAQ
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-xs font-extrabold tracking-widest uppercase text-white mb-3">Informasi</h4>
                        <ul className="list-none p-0 m-0 flex flex-col gap-2 text-sm">
                            <li>
                                <a className="hover:text-white transition-colors" href="#top">
                                    Tentang NusaGizi
                                </a>
                            </li>
                            <li>
                                <a className="hover:text-white transition-colors" href="#faq">
                                    Kebijakan Privasi
                                </a>
                            </li>
                            <li>
                                <a className="hover:text-white transition-colors" href="#faq">
                                    Syarat dan Ketentuan
                                </a>
                            </li>
                            <li>
                                <a className="hover:text-white transition-colors" href="#daftar">
                                    Hubungi Kami
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-xs font-extrabold tracking-widest uppercase text-white mb-3">Kontak & Media Sosial</h4>
                        <ul className="list-none p-0 m-0 flex flex-col gap-3">
                            <li>
                                <a
                                    href={`mailto:${CONTACT_EMAIL}`}
                                    className="inline-flex items-center gap-2.5 text-[#EAF6EE] hover:text-white transition-colors"
                                >
                                    <span className="w-7 h-7 rounded-lg bg-white/10 border border-white/15 inline-grid place-items-center shrink-0">
                                        <Image src="/mail.svg" alt="Email" width={14} height={14} className="brightness-0 invert" />
                                    </span>
                                    <span className="text-xs sm:text-sm break-all">{CONTACT_EMAIL}</span>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://wa.me/6287791152573"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2.5 text-[#EAF6EE] hover:text-white transition-colors"
                                >
                                    <span className="w-7 h-7 rounded-lg bg-white/10 border border-white/15 inline-grid place-items-center shrink-0">
                                        <Image src="/whatsapp-black.svg" alt="WhatsApp" width={14} height={14} className="brightness-0 invert" />
                                    </span>
                                    <span className="text-xs sm:text-sm">0877-9115-2573</span>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://instagram.com/Nusagizi.id"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2.5 text-[#EAF6EE] hover:text-white transition-colors"
                                >
                                    <span className="w-7 h-7 rounded-lg bg-white/10 border border-white/15 inline-grid place-items-center shrink-0">
                                        <Image src="/instagram.svg" alt="Instagram" width={14} height={14} className="brightness-0 invert" />
                                    </span>
                                    <span className="text-xs sm:text-sm">nusagizi.id</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar via Tailwind: Vertikal di HP sempit, horizontal di tablet/desktop */}
                <div className="mt-10 sm:mt-12 pt-5 border-t border-[#A8C7B3]/20 flex flex-col-reverse sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
                    <span className="text-xs sm:text-sm text-[#A8C7B3]">© 2026 NusaGizi · Nexus Kesehatan Indonesia</span>
                    <a
                        className="w-10 h-10 rounded-full bg-[#00A735] hover:bg-[#10B947] flex items-center justify-center transition-all hover:-translate-y-0.5 shrink-0 text-white shadow-md cursor-pointer"
                        href="#top"
                        aria-label="Kembali ke atas"
                    >
                        <ArrowUp size={20} strokeWidth={2.5} />
                    </a>
                </div>
            </div>
        </footer>
    );
}

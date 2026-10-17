import Image from "next/image";
import { navLinks } from "@/lib/content";

export default function Navbar() {
    return (
        <header className="in nav">
            <a className="brand" href="#top">
                <Image src="/logo.png" alt="Logo NusaGizi" width={32} height={32} priority />
                NusaGizi
            </a>
            <nav className="links" aria-label="Bagian halaman">
                {navLinks.map((l) => (
                    <a key={l.href} href={l.href}>
                        {l.label}
                    </a>
                ))}
            </nav>
            <div className="navr">
                <a className="btn btn-primary btn-sm" href="#daftar">
                    Coba Gratis
                </a>
            </div>
        </header>
    );
}

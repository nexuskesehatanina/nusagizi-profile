import {
    BookText,
    Camera,
    ChartNoAxesCombined,
    FileCheckCorner,
    NotebookPen,
    Scale,
    ShoppingCartPlus,
    SquareText,
    UserCheck,
    UserPen,
    Utensils,
} from "lucide-react";
import type { ReactNode } from "react";

/* ---------- Navigasi ---------- */
export const navLinks = [
    { href: "#top", label: "Beranda" },
    { href: "#fitur", label: "Fitur" },
    { href: "#cara-kerja", label: "Cara Kerja" },
    { href: "#testimoni", label: "Testimoni" },
    { href: "#harga", label: "Harga" },
    { href: "#faq", label: "FAQ" },
];

/* ---------- Rujukan ---------- */
export const references: { label: string; icon: ReactNode }[] = [
    {
        label: "Standar Pertumbuhan Anak WHO",
        icon: <FileCheckCorner />,
    },
    {
        label: "Permenkes RI No. 28 Tahun 2019",
        icon: <Scale />,
    },
    {
        label: "Pedoman Pemantauan Perkembangan Anak",
        icon: <BookText />,
    },
];

/* ---------- Fitur ---------- */
export const features: { title: string; desc: string; icon: ReactNode }[] = [
    {
        title: "Growth & Development Monitoring",
        desc: "Pantau pertumbuhan dan kenali perkembangan anak untuk pahami kondisi si kecil dari waktu ke waktu.",
        icon: <ChartNoAxesCombined />,
    },
    {
        title: "Personalized Recipe Recommendations",
        desc: "Dapatkan rekomendasi resep sesuai kebutuhan gizi dan usia anak untuk membantu menyajikan makanan yang lebih bervariasi.",
        icon: <Utensils />,
    },
    {
        title: "Smart Grocery Checklist",
        desc: "Kumpulkan kebutuhan bahan makanan dalam satu daftar belanja agar persiapan makanan keluarga menjadi lebih praktis.",
        icon: <ShoppingCartPlus />,
    },
    {
        title: "Food Photo Journal",
        desc: "Catat makanan yang dikonsumsi si kecil melalui jurnal foto untuk membantu orang tua meninjau kebiasaan makan dari waktu ke waktu.",
        icon: <Camera />,
    },
    {
        title: "Consultation Notes",
        desc: "Simpan hasil konsultasi dan saran dokter agar informasi penting tetap mudah diakses saat orang tua mendampingi anak di rumah.",
        icon: <NotebookPen />,
    },
    {
        title: "Caregiver Collaboration",
        desc: "Bantu orang tua dan caregiver menyelaraskan informasi serta rutinitas pengasuhan agar kebutuhan si kecil tetap diperhatikan bersama.",
        icon: <UserCheck />,
    },
];

/* ---------- Pita statistik ---------- */
export const bandStats = [
    { title: "Pantau", desc: "Pertumbuhan dan perkembangan" },
    { title: "Pahami", desc: "Kebutuhan si kecil" },
    { title: "Lakukan", desc: "Langkah nyata setiap hari" },
];

/* ---------- Cara kerja ---------- */
export const steps = [
    {
        title: "Lengkapi Data Si Kecil",
        desc: "Buat profil anak dan masukkan informasi yang diperlukan, seperti tanggal lahir, berat badan, dan tinggi atau panjang badan.",
    },
    {
        title: "Pantau dan Pahami Kondisi Anak",
        desc: "Lihat informasi pertumbuhan dan hasil skrining perkembangan untuk membantu memahami kondisi serta aspek yang perlu diperhatikan.",
    },
    {
        title: "Temukan Rekomendasi Menu",
        desc: "Jelajahi rekomendasi resep dan ide menu yang disesuaikan dengan kebutuhan gizi anak sebagai panduan menyiapkan makanan sehari-hari.",
    },
    {
        title: "Terapkan dan Pantau Kebiasaan",
        desc: "Siapkan bahan melalui grocery list, dokumentasikan momen makan, dan simpan catatan konsultasi untuk membantu menjaga kesinambungan pendampingan anak.",
    },
];

/* ---------- Testimoni ---------- */
export const testimonials = [
    {
        slot: "Perspektif Tenaga Kesehatan",
        quote: "NusaGizi berpotensi membantu menjembatani informasi dari konsultasi dengan penerapannya di rumah, sehingga orang tua memiliki panduan untuk mendampingi anak setelah konsultasi.",
        name: "dr. Moretta Damayanti, Sp.A(K), M.Kes",
        role: "Dokter Spesialis Anak",
    },
    {
        slot: "Perspektif Tenaga Kesehatan",
        quote: "Informasi gizi perlu disesuaikan dengan kondisi anak. Karena itu, pendampingan yang membantu orang tua memahami kebutuhan nutrisi anak merupakan hal yang penting.",
        name: "dr. Dyahris Koentartiwi, Sp.A, Subsp.Kardio(K)",
        role: "Dokter Spesialis Anak",
    },
    {
        slot: "Perspektif Ibu",
        quote: "Berguna banget, apalagi untuk MPASI yang krusial, banyak pantangan dan alerginya jadi harus dipantau strict. Belum ada aplikasi lain yang sedetail ini.",
        name: "Dina Hamid",
        role: "Ibu Bekerja & Pengguna Aktif",
    },
    {
        slot: "Perspektif Nutrisionis",
        quote: "Panduan kebutuhan kalori dan makronutrisi harian di NusaGizi sangat praktis. Membantu orang tua menyusun menu seimbang tanpa harus bingung menghitung manual.",
        name: "Rizka Maulida, S.Gz",
        role: "Ahli Gizi Klinis",
    },
    {
        slot: "Perspektif Orang Tua",
        quote: "Fitur checklist belanja dan ide resepnya penyelamat banget di akhir pekan. Persiapan makanan untuk anak jadi jauh lebih teratur dan hemat waktu.",
        name: "Budi Pratama",
        role: "Ayah 2 Anak",
    },
    {
        slot: "Perspektif Kader Komunitas",
        quote: "Kurva pertumbuhannya mudah dibaca oleh ibu-ibu saat kegiatan posyandu. Edukasi pencegahan stunting di lingkungan warga jadi lebih mudah disampaikan.",
        name: "Siti Rahmawati",
        role: "Kader Posyandu Melati",
    },
];

/* ---------- Harga ---------- */
export const plans = [
    {
        name: "Free",
        forWho: "Untuk orang tua yang ingin mulai memantau",
        price: "Rp 0",
        features: ["Pemantauan tumbuh kembang", "Pemantauan gizi", "Jurnal foto makan anak"],
        cta: "Daftar Gratis",
        popular: false,
    },
    {
        name: "Basic",
        forWho: "Untuk orang tua yang ingin menu lebih fleksibel",
        price: "Rp 20.000",
        features: ["Pemantauan tumbuh kembang", "Pemantauan gizi", "Jurnal foto makan anak", "Generate ulang menu personal untuk setiap anak"],
        cta: "Pilih Basic",
        popular: false,
    },
    {
        name: "Premium",
        forWho: "Untuk pendampingan anak yang lebih menyeluruh",
        price: "Rp 49.000",
        features: [
            "Pemantuaan tumbuh kembang",
            "Pemantauan gizi",
            "Jurnal foto makan anak",
            "Generate ulang menu personal untuk setiap anak",
            "Hubungkan pengasuh",
            "Catatan konsultasi dokter",
            "Laporan konsultasi siap pakai",
        ],
        cta: "Pilih Premium",
        popular: true,
    },
];

/* ---------- FAQ ---------- */
export const faqs = [
    {
        q: "Apakah itu NusaGizi?",
        a: "NusaGizi adalah platform digital yang membantu orang tua memantau tumbuh kembang anak, memahami kebutuhan gizinya, dan merencanakan menu harian melalui satu platform.",
    },
    {
        q: "Siapa yang bisa menggunakan NusaGizi?",
        a: "NusaGizi dirancang untuk orang tua atau pengasuh yang ingin mendampingi tumbuh kembang dan memenuhi kebutuhan gizi anak. Ketersediaan fitur dapat bergantung pada usia anak dan fitur yang digunakan.",
    },
    {
        q: "Apakah yang dimaksud dengan regenerasi menu personal?",
        a: "Fitur ini memungkinkan orang tua membuat ulang rekomendasi menu personal untuk setiap anak, sehingga memiliki pilihan menu tambahan sesuai kebutuhan yang tercatat di NusaGizi.",
    },
    {
        q: "Apakah rekomendasi menu menggantikan konsultasi dokter?",
        a: "Tidak. Rekomendasi NusaGizi merupakan alat bantu untuk merencanakan makanan sehari-hari, bukan pengganti diagnosis atau saran profesional. Untuk kondisi medis atau kebutuhan diet khusus, konsultasikan dengan dokter atau ahli gizi.",
    },
    {
        q: "Bagaimana cara kerja fitur pengasuh dan catatan dokter?",
        a: "Pada paket Premium, orang tua dapat menghubungkan pengasuh dan mengelola informasi konsultasi untuk membantu menjaga kesinambungan pengasuhan. Akses terhadap data mengikuti izin dan pengaturan yang tersedia di aplikasi.",
    },
    {
        q: "Apakah data anak aman di NusaGizi?",
        a: "NusaGizi dirancang untuk membantu orang tua mengelola informasi anak dalam satu platform. Sebelum menggunakan layanan, pengguna dapat meninjau kebijakan privasi untuk memahami bagaimana data dikumpulkan, digunakan, dan dilindungi.",
    },
];

/* ---------- Waitlist ---------- */
export const CONTACT_EMAIL = "nexuskesehatanina@gmail.com";

export const roles = ["Orang tua balita", "Orang tua anak dengan PJB", "Tenaga kesehatan", "Kader posyandu", "Calon mitra atau investor"];

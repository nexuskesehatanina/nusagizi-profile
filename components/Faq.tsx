import { faqs } from "@/lib/content";

export default function Faq() {
    return (
        <section id="faq" className="w-full max-w-360 mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
            <h2 className="sec-title text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0F1F16] text-center">Pertanyaan yang sering diajukan</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 mt-8 sm:mt-10 items-start">
                {faqs.map((f) => (
                    <details key={f.q} className="bg-white border border-[#E3EAE4] open:border-[#B9E3C6] rounded-xl shadow-sm overflow-hidden group">
                        <summary className="list-none cursor-pointer flex justify-between items-center gap-4 p-4 sm:p-5 font-bold text-sm sm:text-base text-[#0F1F16] select-none [&::-webkit-details-marker]:hidden after:content-['+'] group-open:after:content-['−'] after:text-xl after:text-[#007A27] after:font-semibold">
                            {f.q}
                        </summary>
                        <div className="px-4 pb-4 sm:px-5 sm:pb-5 text-sm text-[#58695F] leading-relaxed">{f.a}</div>
                    </details>
                ))}
            </div>
        </section>
    );
}

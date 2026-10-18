import { references } from "@/lib/content";
import { Svg } from "./Icons";

export default function ReferenceStrip() {
    return (
        <div className="w-full max-w-360 mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white border border-[#E3EAE4] rounded-2xl shadow-sm p-4 sm:p-5 text-center">
                <h3 className="text-xs sm:text-sm font-bold text-[#58695F] tracking-wide uppercase">Berlandaskan Standar Kesehatan Tepercaya</h3>
                <ul className="list-none p-0 m-0 flex flex-wrap justify-center items-center gap-3 sm:gap-6 lg:gap-8 mt-3.5">
                    {references.map((r) => (
                        <li
                            key={r.label}
                            className="inline-flex items-center gap-2 font-extrabold text-xs sm:text-sm lg:text-[0.95rem] text-[#3C4C43] tracking-tight"
                        >
                            <span className="w-5 h-5 text-[#3C4C43] shrink-0 flex items-center justify-center">
                                <Svg>{r.icon}</Svg>
                            </span>
                            <span>{r.label}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

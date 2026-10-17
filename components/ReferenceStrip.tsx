import { references } from "@/lib/content";
import { Svg } from "./Icons";

export default function ReferenceStrip() {
  return (
    <div className="in">
      <div className="strip">
        <h3>Berlandaskan Standar Kesehatan Tepercaya</h3>
        <ul>
          {references.map((r) => (
            <li key={r.label}>
              <Svg>{r.icon}</Svg>
              {r.label}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

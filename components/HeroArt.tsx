/** Ilustrasi piring makan balita di atas podium dengan tunas tumbuh dari tengahnya. */
export default function HeroArt() {
  return (
    <svg
      className="main"
      viewBox="0 0 520 470"
      role="img"
      aria-label="Ilustrasi piring makan balita di atas podium dengan tunas tumbuh dari tengahnya, dikelilingi cincin dan bola hijau."
    >
      <defs>
        <radialGradient id="sph" cx=".35" cy=".3" r=".8">
          <stop offset="0" stopColor="#9BF7B8" />
          <stop offset=".55" stopColor="#00A735" />
          <stop offset="1" stopColor="#006B24" />
        </radialGradient>
        <radialGradient id="gls" cx=".35" cy=".3" r=".8">
          <stop offset="0" stopColor="#fff" stopOpacity=".95" />
          <stop offset=".6" stopColor="#DDF5E5" stopOpacity=".55" />
          <stop offset="1" stopColor="#8FD9AB" stopOpacity=".55" />
        </radialGradient>
        <linearGradient id="pod" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#fff" />
          <stop offset="1" stopColor="#E5ECE7" />
        </linearGradient>
        <linearGradient id="ring" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#00A735" stopOpacity=".05" />
          <stop offset=".5" stopColor="#00A735" stopOpacity=".75" />
          <stop offset="1" stopColor="#00A735" stopOpacity=".1" />
        </linearGradient>
        <filter id="bl" x="-20%" y="-50%" width="140%" height="200%">
          <feGaussianBlur stdDeviation="9" />
        </filter>
      </defs>

      {/* bayangan & podium */}
      <ellipse cx="260" cy="432" rx="214" ry="22" fill="#0F1F16" opacity=".14" filter="url(#bl)" />
      <path d="M58 384V412A202 36 0 0 0 462 412V384Z" fill="#DCE4DE" />
      <ellipse cx="260" cy="384" rx="202" ry="36" fill="url(#pod)" stroke="#fff" />
      <path d="M108 356V382A152 27 0 0 0 412 382V356Z" fill="#E9EFEB" />
      <ellipse cx="260" cy="356" rx="152" ry="27" fill="#fff" />

      {/* piring */}
      <ellipse cx="260" cy="344" rx="124" ry="34" fill="#CBD6CE" />
      <ellipse cx="260" cy="338" rx="124" ry="34" fill="#fff" />
      <g transform="translate(260 338) scale(1 .29)">
        <path d="M0 0V-104A104 104 0 0 1 104 0Z" fill="#00A735" />
        <path d="M0 0H104A104 104 0 0 1 0 104Z" fill="#FFB93F" />
        <path d="M0 0V104A104 104 0 0 1 -104 0Z" fill="#E8735F" />
        <path d="M0 0H-104A104 104 0 0 1 0 -104Z" fill="#0A5A2B" />
        <g stroke="#fff" strokeWidth="5" fill="none">
          <line x1="0" y1="-104" x2="0" y2="104" />
          <line x1="-104" y1="0" x2="104" y2="0" />
        </g>
        <circle r="17" fill="#fff" />
      </g>

      {/* tunas */}
      <path d="M260 334C260 300 258 270 260 232" stroke="#0B7A2F" strokeWidth="6" strokeLinecap="round" fill="none" />
      <path d="M260 282C220 282 194 258 190 226C228 226 256 248 260 282Z" fill="#00A735" />
      <path d="M260 262C300 262 326 238 330 206C294 206 264 228 260 262Z" fill="#5BCB7C" />
      <path d="M260 240C248 222 250 202 260 186C270 202 272 222 260 240Z" fill="#0B7A2F" />

      {/* cincin orbit */}
      <ellipse cx="260" cy="270" rx="196" ry="62" transform="rotate(-18 260 270)" fill="none" stroke="url(#ring)" strokeWidth="3" />
      <ellipse cx="260" cy="270" rx="166" ry="46" transform="rotate(16 260 270)" fill="none" stroke="url(#ring)" strokeWidth="2" />
      <ellipse cx="260" cy="270" rx="214" ry="74" transform="rotate(-6 260 270)" fill="none" stroke="#00A735" strokeOpacity=".28" strokeWidth="1.5" strokeDasharray="3 7" />

      {/* bola */}
      <circle cx="104" cy="132" r="17" fill="url(#sph)" />
      <circle cx="432" cy="98" r="11" fill="url(#sph)" />
      <circle cx="476" cy="262" r="9" fill="url(#sph)" />
      <circle cx="84" cy="236" r="24" fill="url(#gls)" stroke="#fff" strokeOpacity=".9" />
      <circle cx="448" cy="176" r="28" fill="url(#gls)" stroke="#fff" strokeOpacity=".9" />
      <circle cx="372" cy="60" r="14" fill="url(#gls)" stroke="#fff" strokeOpacity=".9" />
      <circle cx="170" cy="70" r="9" fill="url(#gls)" stroke="#fff" strokeOpacity=".9" />
    </svg>
  );
}

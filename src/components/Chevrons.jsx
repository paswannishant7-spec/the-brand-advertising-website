export default function Chevrons({ className = "w-8 h-8", gradient = true }) {
  const id = "chevGrad";
  return (
    <svg viewBox="0 0 64 48" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      {gradient && (
        <defs>
          <linearGradient id={id} x1="0" y1="0" x2="64" y2="0">
            <stop offset="0%" stopColor="#FF9FB2" />
            <stop offset="55%" stopColor="#E31C3D" />
            <stop offset="100%" stopColor="#A10F28" />
          </linearGradient>
        </defs>
      )}
      {[0, 20, 40].map((x, i) => (
        <path
          key={i}
          d={`M${x} 4 L${x + 20} 24 L${x} 44`}
          stroke={gradient ? `url(#${id})` : "currentColor"}
          strokeWidth="7"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          opacity={1 - i * 0.18}
        />
      ))}
    </svg>
  );
}

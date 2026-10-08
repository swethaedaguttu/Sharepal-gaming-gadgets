export default function Logo({ variant = 'badge', size = 'md' }) {
  return (
    <span className={`logo logo--${variant} logo--${size}`} aria-label="SharePal">
      <span className="logo__share">Share</span>
      <span className="logo__pal">Pal</span>
    </span>
  );
}

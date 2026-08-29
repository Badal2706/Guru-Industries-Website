/* The real Guru Industries lockup — black wordmark, always on a white plate,
   so it reads the same over the hero photograph and over the scrolled bar. */
export default function Logo({ height = 40, className = '' }) {
  return (
    <img
      src="/brand/guru-logo.png"
      alt="Guru Industries"
      className={`brand-logo ${className}`}
      width="600"
      height="218"
      style={{ height, width: 'auto' }}
    />
  )
}

export default function SectionLabel({ children, light = false, className = '' }) {
  return (
    <p className={`mb-3 block text-base font-semibold uppercase leading-[1.3] text-[var(--color-primary)] max-md:text-sm${light ? ' section-label-light' : ''}${className ? ` ${className}` : ''}`}>
      {children}
    </p>
  )
}

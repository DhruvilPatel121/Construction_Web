export default function ActionLink({ children, href, className = '', ...props }) {
  return (
    <a className={`inline-flex items-center gap-2 text-base font-bold text-[var(--color-primary)] transition-colors duration-[250ms] hover:text-[var(--color-heading)] ${className}`} href={href} {...props}>
      {children}
      <span aria-hidden="true">↗</span>
    </a>
  )
}

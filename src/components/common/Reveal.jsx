import useReveal from '../../hooks/useReveal.js'

export default function Reveal({ children, className = '', delay = 0, id }) {
  const { ref, isVisible } = useReveal()
  return (
    <div
      ref={ref}
      id={id}
      className={`opacity-0 translate-y-6 [transition:opacity_750ms_cubic-bezier(0.16,1,0.3,1),transform_750ms_cubic-bezier(0.16,1,0.3,1)] [transition-delay:var(--reveal-delay)] [will-change:opacity,transform] motion-reduce:!translate-y-0 motion-reduce:!opacity-100 motion-reduce:!transition-none ${isVisible ? '!translate-y-0 !opacity-100 [will-change:auto]' : ''} ${className}`}
      style={{ '--reveal-delay': `${delay}ms` }}
    >
      {children}
    </div>
  )
}

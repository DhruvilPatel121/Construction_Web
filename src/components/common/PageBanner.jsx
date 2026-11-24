import { useLayoutEffect, useRef, useState } from 'react'
import { Link } from 'react-router'

const MAX_WATERMARK_SIZE = 180
const MIN_WATERMARK_SIZE = 24

export default function PageBanner({
  title,
  watermark = title,
  backgroundImage,
  breadcrumbs = [],
  variant,
}) {
  const contentRef = useRef(null)
  const watermarkRef = useRef(null)
  const [watermarkSize, setWatermarkSize] = useState(MAX_WATERMARK_SIZE)

  useLayoutEffect(() => {
    const content = contentRef.current
    const watermarkElement = watermarkRef.current
    if (!content || !watermarkElement) return undefined

    let isActive = true

    const updateWatermarkSize = () => {
      const sideSpace = Number.parseFloat(
        window.getComputedStyle(content).getPropertyValue('--page-banner-watermark-side-space'),
      ) || 24
      const availableWidth = Math.max(0, content.clientWidth - sideSpace * 2)
      const styles = window.getComputedStyle(watermarkElement)
      const canvasContext = document.createElement('canvas').getContext('2d')
      const letterSpacing = Number.parseFloat(styles.letterSpacing) || 0

      if (canvasContext) {
        canvasContext.font = `${styles.fontStyle} ${styles.fontWeight} ${MAX_WATERMARK_SIZE}px ${styles.fontFamily}`
      }

      const fullSizeWidth = canvasContext
        ? canvasContext.measureText(watermark).width + letterSpacing * Math.max(0, watermark.length - 1)
        : watermarkElement.scrollWidth
      const nextSize = fullSizeWidth > availableWidth
        ? Math.max(MIN_WATERMARK_SIZE, Math.floor((availableWidth / fullSizeWidth) * MAX_WATERMARK_SIZE))
        : MAX_WATERMARK_SIZE

      if (isActive) {
        setWatermarkSize((currentSize) => (
          currentSize === nextSize ? currentSize : nextSize
        ))
      }
    }

    updateWatermarkSize()
    const resizeObserver = new ResizeObserver(updateWatermarkSize)
    resizeObserver.observe(content)
    document.fonts?.ready.then(() => {
      if (isActive) updateWatermarkSize()
    })

    return () => {
      isActive = false
      resizeObserver.disconnect()
    }
  }, [watermark])

  return (
    <section
      className={`page-banner${variant ? ` page-banner--${variant}` : ''}`}
      style={{ '--page-banner-image': `url(${backgroundImage})` }}
      aria-labelledby="page-banner-title"
    >
      <div className="page-banner__content" ref={contentRef}>
        <span
          className="page-banner__watermark"
          ref={watermarkRef}
          style={{ '--page-banner-watermark-size': `${watermarkSize}px` }}
          aria-hidden="true"
        >
          {watermark}
        </span>
        <h1 id="page-banner-title">{title}</h1>
        <nav className="page-banner__crumbs" aria-label="Breadcrumb">
          {breadcrumbs.map((crumb, index) => (
            <span className="page-banner__crumb" key={`${crumb.label}-${index}`}>
              {index > 0 && <span aria-hidden="true">•</span>}
              {crumb.href ? (
                <Link to={crumb.href} aria-current={crumb.current ? 'page' : undefined}>
                  {crumb.label}
                </Link>
              ) : (
                <span>{crumb.label}</span>
              )}
            </span>
          ))}
        </nav>
      </div>
    </section>
  )
}

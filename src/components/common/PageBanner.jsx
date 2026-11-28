import { useLayoutEffect, useRef, useState } from 'react'
import { Link } from 'react-router'
import { pageBanners } from '../../data/siteContent.js'

const MIN_WATERMARK_SIZE = 24

export default function PageBanner({
  page,
  title,
  watermark = title,
  backgroundImage,
  breadcrumbs = [],
  variant,
}) {
  const pageData = page ? pageBanners[page] : null
  const resolvedTitle = pageData?.title ?? title
  const resolvedWatermark = pageData?.watermark ?? watermark ?? resolvedTitle
  const resolvedBackgroundImage = pageData?.backgroundImage ?? backgroundImage
  const resolvedBreadcrumbs = pageData?.breadcrumbs ?? breadcrumbs
  const resolvedVariant = pageData?.variant ?? variant
  const contentRef = useRef(null)
  const watermarkRef = useRef(null)
  const [watermarkSize, setWatermarkSize] = useState(180)

  useLayoutEffect(() => {
    const content = contentRef.current
    const watermarkElement = watermarkRef.current
    if (!content || !watermarkElement) return undefined

    let isActive = true

    const updateWatermarkSize = () => {
      const contentStyles = window.getComputedStyle(content)
      const sideSpace = Number.parseFloat(
        contentStyles.getPropertyValue('--page-banner-watermark-side-space'),
      ) || 24
      const maxSize = Number.parseFloat(
        contentStyles.getPropertyValue('--page-banner-watermark-max-size'),
      ) || 180
      const availableWidth = Math.max(0, content.clientWidth - sideSpace * 2)
      const styles = window.getComputedStyle(watermarkElement)
      const canvasContext = document.createElement('canvas').getContext('2d')
      const letterSpacing = Number.parseFloat(styles.letterSpacing) || 0

      if (canvasContext) {
        canvasContext.font = `${styles.fontStyle} ${styles.fontWeight} ${maxSize}px ${styles.fontFamily}`
      }

      const fullSizeWidth = canvasContext
        ? canvasContext.measureText(resolvedWatermark).width + letterSpacing * Math.max(0, resolvedWatermark.length - 1)
        : watermarkElement.scrollWidth
      const nextSize = fullSizeWidth > availableWidth
        ? Math.max(MIN_WATERMARK_SIZE, Math.floor((availableWidth / fullSizeWidth) * maxSize))
        : maxSize

      if (isActive) {
        setWatermarkSize((currentSize) => (
          currentSize === nextSize ? currentSize : nextSize
        ))
      }
    }

    updateWatermarkSize()
    const resizeObserver = typeof ResizeObserver === 'undefined'
      ? null
      : new ResizeObserver(updateWatermarkSize)
    resizeObserver?.observe(content)
    window.addEventListener('resize', updateWatermarkSize)
    document.fonts?.ready.then(() => {
      if (isActive) updateWatermarkSize()
    })

    return () => {
      isActive = false
      resizeObserver?.disconnect()
      window.removeEventListener('resize', updateWatermarkSize)
    }
  }, [resolvedWatermark])

  return (
    <section
      className={`page-banner${resolvedVariant ? ` page-banner--${resolvedVariant}` : ''}`}
      style={{ '--page-banner-image': `url(${resolvedBackgroundImage})` }}
      aria-labelledby="page-banner-title"
    >
      <div className="page-banner__content" ref={contentRef}>
        <span
          className="page-banner__watermark"
          ref={watermarkRef}
          style={{ '--page-banner-watermark-size': `${watermarkSize}px` }}
          aria-hidden="true"
        >
          {resolvedWatermark}
        </span>
        <h1 id="page-banner-title">{resolvedTitle}</h1>
        <nav className="page-banner__crumbs" aria-label="Breadcrumb">
          {resolvedBreadcrumbs.map((crumb, index) => (
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

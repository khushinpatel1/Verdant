import { useReducedMotion } from './reducedMotion.js'

/**
 * A still that a video transparently upgrades. Build against `poster` now;
 * when the MP4 lands, pass `src` and nothing else changes. Under reduced
 * motion the video never loads — the still carries the scene.
 *
 * Props:
 *  - poster: still image (always present, the fallback + first paint)
 *  - src: optional video (mp4); add `webm` for an AV1/VP9 source too
 *  - objectPosition: focal point for the cover crop (e.g. 'center 30%')
 */
export default function MediaLayer({
  poster,
  src,
  webm,
  alt = '',
  objectPosition,
  className = '',
  style,
}) {
  const reduced = useReducedMotion()
  const showVideo = src && !reduced

  return (
    <div className={`media-layer ${className}`} style={style}>
      {showVideo ? (
        <video
          className="media-layer__media"
          poster={poster}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          style={objectPosition ? { objectPosition } : undefined}
        >
          {webm && <source src={webm} type="video/webm" />}
          <source src={src} type="video/mp4" />
        </video>
      ) : (
        <img
          className="media-layer__media"
          src={poster}
          alt={alt}
          loading="eager"
          decoding="async"
          // until the asset is dropped in, fail to the layer's CSS fallback
          // instead of showing broken-image alt text
          onError={(e) => {
            e.currentTarget.style.visibility = 'hidden'
          }}
          style={objectPosition ? { objectPosition } : undefined}
        />
      )}
    </div>
  )
}

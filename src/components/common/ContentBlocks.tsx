import React, { useState } from 'react';
import { X } from 'lucide-react';
import { ContentBlock } from '../../types/content';

interface ContentBlocksProps {
  blocks?: ContentBlock[];
  className?: string;
}

/**
 * Komponen modular untuk merender elemen tambahan (teks, foto tunggal,
 * galeri foto, gambar+teks berdampingan, maupun kartu angka/highlight)
 * cukup dengan mengisi data di `src/data/*.ts`.
 */
export const ContentBlocks: React.FC<ContentBlocksProps> = ({ blocks, className = '' }) => {
  const [lightboxImage, setLightboxImage] = useState<{ src: string; alt: string; caption?: string } | null>(null);

  if (!blocks || blocks.length === 0) return null;

  return (
    <div className={`space-y-16 ${className}`}>
      {blocks.map((block, index) => {
        if (block.type === 'stats') {
          return (
            <div
              key={index}
              className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
            >
              {block.items.map((item, idx) => (
                <div
                  key={idx}
                  className="glass-card p-6 transition-shadow duration-300 hover:shadow-card-hover"
                >
                  <p className="text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
                    {item.value}
                  </p>
                  <p className="mt-2 text-sm font-semibold text-ink">{item.label}</p>
                  {item.sublabel && (
                    <p className="mt-1 text-xs leading-relaxed text-muted">{item.sublabel}</p>
                  )}
                </div>
              ))}
            </div>
          );
        }

        if (block.type === 'text') {
          return (
            <div key={index} className="glass-card p-8 sm:p-10">
              {block.eyebrow && (
                <p className="text-xs uppercase tracking-[0.22em] text-muted">
                  {block.eyebrow}
                </p>
              )}
              {(block.title || block.titleMuted) && (
                <h3 className="mt-3 text-2xl font-semibold leading-snug tracking-tight text-ink sm:text-3xl">
                  {block.title}
                  {block.titleMuted && (
                    <>
                      <br />
                      <span className="text-muted">{block.titleMuted}</span>
                    </>
                  )}
                </h3>
              )}
              <div className="mt-5 max-w-[70ch] space-y-4 text-sm leading-relaxed text-muted sm:text-base">
                {block.paragraphs.map((p, pIdx) => (
                  <p key={pIdx}>{p}</p>
                ))}
              </div>
            </div>
          );
        }

        if (block.type === 'image') {
          const aspectClass =
            block.aspect === 'wide'
              ? 'aspect-[21/9]'
              : block.aspect === 'landscape'
              ? 'aspect-[16/9]'
              : '';
          return (
            <figure key={index} className="glass-card overflow-hidden p-3 sm:p-4">
              <button
                type="button"
                onClick={() => setLightboxImage({ src: block.src, alt: block.alt, caption: block.caption })}
                className="block w-full overflow-hidden rounded-photo text-left"
              >
                <img
                  src={block.src}
                  alt={block.alt}
                  loading="lazy"
                  className={`w-full object-cover transition-transform duration-500 hover:scale-[1.015] ${aspectClass}`}
                />
              </button>
              {block.caption && (
                <figcaption className="px-2 pt-3 text-xs text-muted">
                  {block.caption}
                </figcaption>
              )}
            </figure>
          );
        }

        if (block.type === 'gallery') {
          const gridCols =
            block.columns === 2
              ? 'grid-cols-1 md:grid-cols-2'
              : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3';
          return (
            <div key={index} className="space-y-6">
              {(block.eyebrow || block.title) && (
                <div>
                  {block.eyebrow && (
                    <p className="text-xs uppercase tracking-[0.22em] text-muted">
                      {block.eyebrow}
                    </p>
                  )}
                  {block.title && (
                    <h3 className="mt-2 text-2xl font-semibold tracking-tight text-ink">
                      {block.title}
                    </h3>
                  )}
                </div>
              )}
              <div className={`grid gap-5 ${gridCols}`}>
                {block.images.map((img, imgIdx) => (
                  <figure
                    key={imgIdx}
                    className="glass-card group overflow-hidden p-3 transition-shadow duration-300 hover:shadow-card-hover"
                  >
                    <button
                      type="button"
                      onClick={() => setLightboxImage(img)}
                      className="block w-full overflow-hidden rounded-photo"
                    >
                      <img
                        src={img.src}
                        alt={img.alt}
                        loading="lazy"
                        className="aspect-[16/10] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      />
                    </button>
                    {img.caption && (
                      <figcaption className="px-2 pt-3 text-xs text-muted">
                        {img.caption}
                      </figcaption>
                    )}
                  </figure>
                ))}
              </div>
            </div>
          );
        }

        if (block.type === 'image-text') {
          const isRight = block.imagePosition === 'right';
          return (
            <div
              key={index}
              className="glass-card grid grid-cols-1 items-center gap-8 p-5 sm:p-8 lg:grid-cols-12"
            >
              <div className={`lg:col-span-6 ${isRight ? 'lg:order-2' : ''}`}>
                <button
                  type="button"
                  onClick={() => setLightboxImage({ src: block.src, alt: block.alt })}
                  className="block w-full overflow-hidden rounded-photo"
                >
                  <img
                    src={block.src}
                    alt={block.alt}
                    loading="lazy"
                    className="aspect-[16/11] w-full object-cover transition-transform duration-500 hover:scale-[1.02]"
                  />
                </button>
              </div>
              <div className={`lg:col-span-6 ${isRight ? 'lg:order-1' : ''}`}>
                {block.eyebrow && (
                  <p className="text-xs uppercase tracking-[0.22em] text-muted">
                    {block.eyebrow}
                  </p>
                )}
                <h3 className="mt-2 text-2xl font-semibold leading-snug tracking-tight text-ink sm:text-3xl">
                  {block.title}
                  {block.titleMuted && (
                    <>
                      <br />
                      <span className="text-muted">{block.titleMuted}</span>
                    </>
                  )}
                </h3>
                <div className="mt-4 space-y-3 text-sm leading-relaxed text-muted sm:text-base">
                  {block.paragraphs.map((p, pIdx) => (
                    <p key={pIdx}>{p}</p>
                  ))}
                </div>
              </div>
            </div>
          );
        }

        return null;
      })}

      {/* Lightbox pratinjau gambar monokrom */}
      {lightboxImage && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={lightboxImage.alt}
          className="fixed inset-0 z-[80] flex items-center justify-center bg-black/85 p-4 backdrop-blur-md"
          onClick={() => setLightboxImage(null)}
        >
          <div
            className="relative max-h-[90vh] max-w-5xl overflow-hidden rounded-card border border-white/20 bg-ink p-3"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setLightboxImage(null)}
              aria-label="Tutup pratinjau gambar"
              className="glass-photo-pill absolute right-5 top-5 z-10 flex h-10 w-10 items-center justify-center rounded-full text-white transition hover:bg-white hover:text-ink"
            >
              <X className="h-4 w-4" strokeWidth={1.75} />
            </button>
            <img
              src={lightboxImage.src}
              alt={lightboxImage.alt}
              className="max-h-[78vh] w-auto rounded-photo object-contain"
            />
            {lightboxImage.caption && (
              <p className="px-2 pt-3 text-center text-xs text-white/80">
                {lightboxImage.caption}
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

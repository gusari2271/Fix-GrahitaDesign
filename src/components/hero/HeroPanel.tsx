import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export interface HeroSlideItem {
  slug: string;
  title: string;
  subtitle: string;
  cover: string;
  targetUrl: string;
  ctaLabel: string;
}

interface HeroPanelProps {
  panelLabel: string;
  slides: HeroSlideItem[];
  initialDelayMs?: number;
  intervalMs?: number;
  isTopMobilePanel?: boolean;
  onHoverChange?: (hovered: boolean) => void;
  className?: string;
}

/**
 * Satu panel Hero bergaya DDAP Architect:
 * - Foto full-bleed dengan transisi crossfade 600ms
 * - Label layanan kecil kapital di kiri-atas/tengah-atas panel
 * - Judul proyek/izin kapital besar ber-letter-spacing lebar di tengah
 * - Garis putih pendek di bawah judul
 * - Subjudul kategori/nama lengkap dalam huruf kapital tipis
 * - Tautan "SEE MORE"
 * - Panah prev/next bulat transparan glassmorphism di kiri-kanan (desktop)
 * - Indikator titik di bawah + dukungan swipe di layar sentuh
 * - Klik area panel atau "SEE MORE" membuka halaman detail item yang SEDANG TAMPIL.
 */
export const HeroPanel: React.FC<HeroPanelProps> = ({
  panelLabel,
  slides,
  initialDelayMs = 0,
  intervalMs = 6000,
  isTopMobilePanel = true,
  onHoverChange,
  className = '',
}) => {
  const navigate = useNavigate();
  const prefersReducedMotion = useReducedMotion();
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const touchDeltaX = useRef<number>(0);

  const count = slides.length;
  const activeSlide = slides[activeIndex] || slides[0];

  const goNext = useCallback(() => {
    if (count <= 1) return;
    setActiveIndex((prev) => (prev + 1) % count);
  }, [count]);

  const goPrev = useCallback(() => {
    if (count <= 1) return;
    setActiveIndex((prev) => (prev - 1 + count) % count);
  }, [count]);

  // Rotasi otomatis tiap 6 detik dengan offset awal agar panel kiri & kanan tidak berganti serentak
  useEffect(() => {
    if (prefersReducedMotion || isPaused || count <= 1) return;

    let intervalId: ReturnType<typeof setInterval> | null = null;
    const startTimer = setTimeout(() => {
      intervalId = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % count);
      }, intervalMs);
    }, initialDelayMs);

    return () => {
      clearTimeout(startTimer);
      if (intervalId) clearInterval(intervalId);
    };
  }, [prefersReducedMotion, isPaused, count, intervalMs, initialDelayMs]);

  const handlePanelClick = () => {
    // Abaikan klik jika pengguna baru saja melakukan swipe horizontal
    if (Math.abs(touchDeltaX.current) > 25) {
      touchDeltaX.current = 0;
      return;
    }
    if (activeSlide) {
      navigate(activeSlide.targetUrl);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      goPrev();
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      goNext();
    } else if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      if (activeSlide) navigate(activeSlide.targetUrl);
    }
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchDeltaX.current = 0;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    touchDeltaX.current = e.touches[0].clientX - touchStartX.current;
  };

  const handleTouchEnd = () => {
    if (Math.abs(touchDeltaX.current) > 45) {
      if (touchDeltaX.current < 0) {
        goNext();
      } else {
        goPrev();
      }
    }
    touchStartX.current = null;
  };

  if (!activeSlide) return null;

  return (
    <div
      role="region"
      aria-roledescription="carousel"
      aria-label={panelLabel}
      tabIndex={0}
      onClick={handlePanelClick}
      onKeyDown={handleKeyDown}
      onMouseEnter={() => {
        setIsPaused(true);
        onHoverChange?.(true);
      }}
      onMouseLeave={() => {
        setIsPaused(false);
        onHoverChange?.(false);
      }}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      className={`group relative cursor-pointer select-none overflow-hidden bg-ink text-on-photo outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-white ${className}`}
    >
      {/* Background Full-Bleed Crossfade (600ms) */}
      <AnimatePresence initial={false}>
        <motion.img
          key={activeSlide.slug}
          src={activeSlide.cover}
          alt={activeSlide.title}
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, scale: 1.03 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={prefersReducedMotion ? { opacity: 0 } : { opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
        />
      </AnimatePresence>

      {/* Overlay Gradien Hitam Tipis agar Teks Putih Selalu Terbaca Jelas */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/45 via-black/30 to-black/60 transition-opacity duration-500 group-hover:via-black/35"
      />

      {/* Label Kategori Layanan di Kiri Atas Panel (Glass Pill Halus) */}
      <div
        className={`pointer-events-none absolute left-4 z-10 sm:left-8 ${
          isTopMobilePanel ? 'top-20 lg:top-24' : 'top-4 lg:top-24'
        }`}
      >
        <span className="glass-photo-pill inline-block rounded-full px-3.5 py-1 text-[10px] font-medium uppercase tracking-[0.24em] text-white/90 sm:text-[11px]">
          {panelLabel}
        </span>
      </div>

      {/* Konten Utama Tengah Bergaya DDAP Architect */}
      <div className="relative z-10 flex h-full w-full flex-col items-center justify-center px-8 text-center sm:px-14">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSlide.slug}
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: -8 }}
            transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center"
          >
            {/* Judul Proyek / Izin Kapital Besar dengan Letter-Spacing Lebar */}
            <h2 className="text-2xl font-normal uppercase tracking-[0.26em] text-white drop-shadow-sm sm:text-4xl md:text-[40px] lg:text-[44px] xl:text-[48px]">
              {activeSlide.title}
            </h2>

            {/* Garis Putih Pendek di Bawah Judul (Referensi DDAP) */}
            <span
              aria-hidden="true"
              className="my-4 block h-[1px] w-12 bg-white/85 transition-all duration-300 group-hover:w-16 sm:my-5"
            />

            {/* Subjudul Kategori dalam Huruf Kapital Tipis */}
            <p className="max-w-md text-[11px] font-light uppercase tracking-[0.26em] text-white/90 sm:text-xs md:text-[13px]">
              {activeSlide.subtitle}
            </p>

            {/* Tautan Teks SEE MORE */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                navigate(activeSlide.targetUrl);
              }}
              className="mt-6 inline-flex items-center gap-2 border-b border-white/50 pb-1 text-[10px] font-medium uppercase tracking-[0.28em] text-white/95 transition-all duration-300 hover:border-white hover:tracking-[0.32em] sm:mt-7 sm:text-[11px]"
            >
              {activeSlide.ctaLabel}
            </button>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Panah Prev / Next Bulat Glassmorphism (Tampil di Desktop/Tablet, Disembunyikan di Mobile sesuai PRD 6.1) */}
      {count > 1 && (
        <>
          <button
            type="button"
            aria-label={`Slide sebelumnya pada ${panelLabel}`}
            onClick={(e) => {
              e.stopPropagation();
              goPrev();
            }}
            className="glass-photo-pill absolute left-4 top-1/2 z-20 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full text-white transition-all duration-200 hover:bg-white hover:text-ink md:flex lg:left-6 lg:h-11 lg:w-11"
          >
            <ChevronLeft className="h-4 w-4" strokeWidth={1.75} />
          </button>

          <button
            type="button"
            aria-label={`Slide berikutnya pada ${panelLabel}`}
            onClick={(e) => {
              e.stopPropagation();
              goNext();
            }}
            className="glass-photo-pill absolute right-4 top-1/2 z-20 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full text-white transition-all duration-200 hover:bg-white hover:text-ink md:flex lg:right-6 lg:h-11 lg:w-11"
          >
            <ChevronRight className="h-4 w-4" strokeWidth={1.75} />
          </button>
        </>
      )}

      {/* Indikator Titik di Bawah */}
      {count > 1 && (
        <div
          className="absolute inset-x-0 bottom-5 z-20 flex items-center justify-center gap-2 sm:bottom-7"
          onClick={(e) => e.stopPropagation()}
        >
          {slides.map((slide, idx) => {
            const isActive = idx === activeIndex;
            return (
              <button
                key={slide.slug}
                type="button"
                aria-label={`Tampilkan ${slide.title}`}
                aria-current={isActive ? 'true' : undefined}
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveIndex(idx);
                }}
                className={`h-2 rounded-full transition-all duration-300 ${
                  isActive
                    ? 'w-6 bg-white'
                    : 'w-2 bg-white/45 hover:bg-white/80'
                }`}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

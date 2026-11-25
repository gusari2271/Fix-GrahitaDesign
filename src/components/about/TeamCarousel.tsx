import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { siteConfig } from '../../data/site';
import { teamMembers } from '../../data/team';
import { TeamCard } from './TeamCard';
import { TeamDetailPanel } from './TeamDetailPanel';

/**
 * Section About Us (PRD Bagian 6.1.B):
 * - Carousel horizontal: 3 anggota per slide di desktop, 2 di tablet, 1 di mobile.
 * - Total 7 anggota -> Slide 1 (3), Slide 2 (3), Slide 3 (1) di desktop.
 * - Klik kartu membuka panel detail mengembang di bawah carousel (hanya satu terbuka).
 * - Tekan Escape menutup panel detail.
 */
export const TeamCarousel: React.FC = () => {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    slidesToScroll: 'auto',
    containScroll: 'trimSnaps',
  });

  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);
  const [selectedSnap, setSelectedSnap] = useState(0);
  const [snapCount, setSnapCount] = useState(0);

  const onSelectSnap = useCallback(() => {
    if (!emblaApi) return;
    setCanPrev(emblaApi.canScrollPrev());
    setCanNext(emblaApi.canScrollNext());
    setSelectedSnap(emblaApi.selectedScrollSnap());
    setSnapCount(emblaApi.scrollSnapList().length);
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelectSnap();
    emblaApi.on('select', onSelectSnap);
    emblaApi.on('reInit', onSelectSnap);
    return () => {
      emblaApi.off('select', onSelectSnap);
      emblaApi.off('reInit', onSelectSnap);
    };
  }, [emblaApi, onSelectSnap]);

  // Tutup panel saat Escape ditekan (PRD Bagian 6.1.B)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && selectedId) {
        setSelectedId(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedId]);

  const selectedMember = teamMembers.find((m) => m.id === selectedId) || null;

  const handleToggleMember = (id: string) => {
    setSelectedId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="scroll-mt-24 bg-bg py-20 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header Section About Us dengan Efek Dua Nada (PRD 8.3) */}
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.24em] text-muted">
              {siteConfig.aboutSection.eyebrow}
            </p>
            <h2
              id="about-heading"
              className="mt-3 text-3xl font-semibold leading-[1.18] tracking-tight text-ink sm:text-4xl lg:text-[42px]"
            >
              {siteConfig.aboutSection.titleLine1}
              <br />
              <span className="text-neutral-500">{siteConfig.aboutSection.titleLine2}</span>
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
              {siteConfig.aboutSection.description}
            </p>
          </div>

          {/* Kontrol Carousel Kiri/Kanan & Indikator Slide */}
          <div className="flex items-center gap-3 self-start lg:self-auto">
            {snapCount > 1 && (
              <span className="mr-1 text-xs font-medium tracking-wider text-muted">
                SLIDE 0{selectedSnap + 1} / 0{snapCount}
              </span>
            )}
            <button
              type="button"
              onClick={() => emblaApi?.scrollPrev()}
              disabled={!canPrev}
              aria-label="Geser tim ke kiri"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-white text-ink shadow-sm transition-all hover:border-ink disabled:cursor-not-allowed disabled:opacity-35"
            >
              <ChevronLeft className="h-4 w-4" strokeWidth={1.75} />
            </button>
            <button
              type="button"
              onClick={() => emblaApi?.scrollNext()}
              disabled={!canNext}
              aria-label="Geser tim ke kanan"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-white text-ink shadow-sm transition-all hover:border-ink disabled:cursor-not-allowed disabled:opacity-35"
            >
              <ChevronRight className="h-4 w-4" strokeWidth={1.75} />
            </button>
          </div>
        </div>

        {/* Viewport Embla Carousel: 3 kartu di Desktop, 2 di Tablet, 1 di Mobile */}
        <div className="mt-12 overflow-hidden py-2 -mx-2.5 px-2.5" ref={emblaRef}>
          <div className="-ml-5 flex">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="min-w-0 shrink-0 grow-0 basis-full pl-5 sm:basis-1/2 lg:basis-1/3"
              >
                <TeamCard
                  member={member}
                  isSelected={selectedId === member.id}
                  onSelect={() => handleToggleMember(member.id)}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Indikator Titik Halaman Carousel */}
        {snapCount > 1 && (
          <div className="mt-6 flex items-center justify-center gap-2">
            {Array.from({ length: snapCount }).map((_, idx) => {
              const active = idx === selectedSnap;
              return (
                <button
                  key={idx}
                  type="button"
                  aria-label={`Ke grup tim ${idx + 1}`}
                  onClick={() => emblaApi?.scrollTo(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    active ? 'w-7 bg-ink' : 'w-2 bg-border hover:bg-muted'
                  }`}
                />
              );
            })}
          </div>
        )}

        {/* Panel Detail Anggota Tim Mengembang Inline ke Bawah */}
        <TeamDetailPanel
          member={selectedMember}
          onClose={() => setSelectedId(null)}
        />
      </div>
    </section>
  );
};

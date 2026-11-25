import React, { useMemo, useState } from 'react';
import { permits } from '../../data/permits';
import { projects } from '../../data/projects';
import { siteConfig } from '../../data/site';
import { HeroPanel, HeroSlideItem } from './HeroPanel';

/**
 * Hero Utama (PRD Bagian 6.1):
 * Membagi layar menjadi dua panel setara dengan carousel independen:
 * - Panel Kiri (atau Atas di mobile): Portofolio Proyek Desain
 * - Panel Kanan (atau Bawah di mobile): Layanan Pengurusan Izin (PBG & SLF)
 *
 * Saat kursor berada di salah satu panel pada desktop (Varian 1 'split'),
 * panel tersebut melebar halus (~54% : 46%).
 */
export const Hero: React.FC = () => {
  const [hoveredSide, setHoveredSide] = useState<'left' | 'right' | null>(null);

  const designSlides: HeroSlideItem[] = useMemo(
    () =>
      projects.map((project) => ({
        slug: project.slug,
        title: project.name,
        subtitle: project.category || 'Architectural Design',
        cover: project.cover,
        targetUrl: `/desain/${project.slug}`,
        ctaLabel: siteConfig.heroLabels.designCta,
      })),
    []
  );

  const permitSlides: HeroSlideItem[] = useMemo(
    () =>
      permits.map((permit) => ({
        slug: permit.slug,
        title: permit.name,
        subtitle: permit.fullName,
        cover: permit.cover,
        targetUrl: `/izin/${permit.slug}`,
        ctaLabel: permit.heroActionLabel || siteConfig.heroLabels.permitCta,
      })),
    []
  );

  const isStacked = siteConfig.heroVariant === 'stacked';

  const handlePanelHover = (side: 'left' | 'right', hovered: boolean) => {
    if (typeof window !== 'undefined' && !window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
      return;
    }
    setHoveredSide(hovered ? side : null);
  };

  if (isStacked) {
    return (
      <section aria-label="Layanan Utama Grahita Design" className="flex h-[100svh] min-h-[620px] w-full flex-col bg-ink">
        <HeroPanel
          panelLabel={siteConfig.heroLabels.designLabel}
          slides={designSlides}
          initialDelayMs={0}
          intervalMs={6000}
          isTopMobilePanel={true}
          className="h-[50svh] min-h-[310px] w-full border-b border-white/30"
        />
        <HeroPanel
          panelLabel={siteConfig.heroLabels.permitLabel}
          slides={permitSlides}
          initialDelayMs={1000}
          intervalMs={6000}
          isTopMobilePanel={false}
          className="h-[50svh] min-h-[310px] w-full"
        />
      </section>
    );
  }

  // Varian 1 (Default): Split Kiri-Kanan 100svh pada Desktop, Tumpuk 50svh pada Mobile
  const leftFlexClass =
    hoveredSide === 'left'
      ? 'lg:basis-[54%]'
      : hoveredSide === 'right'
      ? 'lg:basis-[46%]'
      : 'lg:basis-1/2';

  const rightFlexClass =
    hoveredSide === 'right'
      ? 'lg:basis-[54%]'
      : hoveredSide === 'left'
      ? 'lg:basis-[46%]'
      : 'lg:basis-1/2';

  return (
    <section
      aria-label="Layanan Utama Grahita Design"
      className="flex h-[100svh] min-h-[640px] w-full flex-col bg-ink lg:flex-row"
    >
      <HeroPanel
        panelLabel={siteConfig.heroLabels.designLabel}
        slides={designSlides}
        initialDelayMs={0}
        intervalMs={6000}
        isTopMobilePanel={true}
        onHoverChange={(h) => handlePanelHover('left', h)}
        className={`h-[50svh] min-h-[320px] w-full border-b border-white/35 transition-[flex-basis] duration-500 ease-out lg:h-full lg:border-b-0 lg:border-r lg:border-white/35 ${leftFlexClass}`}
      />

      <HeroPanel
        panelLabel={siteConfig.heroLabels.permitLabel}
        slides={permitSlides}
        initialDelayMs={1200}
        intervalMs={6000}
        isTopMobilePanel={false}
        onHoverChange={(h) => handlePanelHover('right', h)}
        className={`h-[50svh] min-h-[320px] w-full transition-[flex-basis] duration-500 ease-out lg:h-full ${rightFlexClass}`}
      />
    </section>
  );
};

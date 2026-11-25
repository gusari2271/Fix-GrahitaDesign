import React, { useEffect } from 'react';
import { ContentBlocks } from '../components/common/ContentBlocks';
import { CtaSection } from '../components/detail/CtaSection';
import { PermitGrid } from '../components/explore/PermitGrid';
import { ProjectGrid } from '../components/explore/ProjectGrid';
import { siteConfig } from '../data/site';

export const Explore: React.FC = () => {
  useEffect(() => {
    document.title = `${siteConfig.navigation.exploreLabel} — ${siteConfig.companyName}`;
  }, []);

  return (
    <main className="bg-bg pt-28 sm:pt-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Judul Halaman Explore dengan Efek Dua Nada (PRD 8.3) */}
        <header className="border-b border-border pb-10 sm:pb-12">
          <p className="text-xs uppercase tracking-[0.24em] text-muted">
            {siteConfig.explorePage.eyebrow}
          </p>
          <h1 className="mt-3 text-3xl font-semibold leading-[1.16] tracking-tight text-ink sm:text-5xl lg:text-[50px]">
            {siteConfig.explorePage.titleLine1}
            <br />
            <span className="text-neutral-500">{siteConfig.explorePage.titleLine2}</span>
          </h1>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
            {siteConfig.explorePage.description}
          </p>
        </header>

        {/* Section 1: Grid Semua Proyek Desain */}
        <ProjectGrid />

        {/* Section 2: Grid Semua Izin (PBG & SLF) */}
        <PermitGrid />

        {/* Blok Konten Tambahan Opsional (Dapat diisi gambar/teks dari src/data/site.ts) */}
        {siteConfig.exploreExtraBlocks.length > 0 && (
          <div className="border-t border-border py-12">
            <ContentBlocks blocks={siteConfig.exploreExtraBlocks} />
          </div>
        )}

        {/* CTA Kontak */}
        <CtaSection />
      </div>
    </main>
  );
};

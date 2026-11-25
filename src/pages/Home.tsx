import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Hero } from '../components/hero/Hero';
import { TeamCarousel } from '../components/about/TeamCarousel';
import { ContentBlocks } from '../components/common/ContentBlocks';
import { CtaSection } from '../components/detail/CtaSection';
import { siteConfig } from '../data/site';

export const Home: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    document.title = `${siteConfig.companyName} — Studio Arsitektur & Pengurusan Izin (PBG & SLF)`;
  }, []);

  // Scroll halus ke #about apabila diakses dari halaman lain melalui /#about
  useEffect(() => {
    if (location.hash === '#about') {
      const timer = setTimeout(() => {
        const el = document.getElementById('about');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 120);
      return () => clearTimeout(timer);
    }
  }, [location.hash]);

  return (
    <main>
      {/* Hero Dua Panel Bergaya DDAP Architect */}
      <Hero />

      {/* Blok Konten Modular Tambahan di Home (Mudah ditambah via src/data/site.ts) */}
      {siteConfig.homeExtraBlocks.length > 0 && (
        <section aria-label="Sorotan Layanan Studio" className="border-b border-border bg-surface/60 py-14 sm:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <ContentBlocks blocks={siteConfig.homeExtraBlocks} />
          </div>
        </section>
      )}

      {/* Section About Us: Carousel 7 Anggota Tim dengan Profil Mengembang Inline */}
      <TeamCarousel />

      {/* CTA Kontak Studio */}
      <div className="mx-auto max-w-7xl px-4 pb-8 sm:px-6 lg:px-8">
        <CtaSection />
      </div>
    </main>
  );
};

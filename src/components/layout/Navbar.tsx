import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, MessageSquare, X } from 'lucide-react';
import { getWhatsAppUrl, siteConfig } from '../../data/site';

export const Navbar: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [aboutInView, setAboutInView] = useState(false);

  // Pantau apakah section #about sedang berada di layar pada halaman Home
  useEffect(() => {
    if (location.pathname !== '/') {
      setAboutInView(false);
      return;
    }

    const handleScroll = () => {
      const aboutEl = document.getElementById('about');
      if (!aboutEl) return;
      const rect = aboutEl.getBoundingClientRect();
      setAboutInView(rect.top <= window.innerHeight * 0.45 && rect.bottom >= 160);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  // Tutup menu mobile saat pindah route
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname, location.hash]);

  const handleAboutClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setMobileOpen(false);
    if (location.pathname === '/') {
      const aboutEl = document.getElementById('about');
      if (aboutEl) {
        aboutEl.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate('/#about');
    }
  };

  const handleHomeClick = (e: React.MouseEvent) => {
    setMobileOpen(false);
    if (location.pathname === '/') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const isExploreActive =
    location.pathname.startsWith('/explore') ||
    location.pathname.startsWith('/desain') ||
    location.pathname.startsWith('/izin');
  const isAboutActive = location.pathname === '/' && aboutInView;
  const isHomeActive = location.pathname === '/' && !aboutInView;

  return (
    <header className="pointer-events-none fixed inset-x-0 top-4 z-50 flex flex-col items-center px-3 sm:top-5 sm:px-6">
      {/* Floating Pill Navbar (PRD Bagian 8.4) */}
      <nav
        aria-label="Navigasi Utama"
        className="glass-nav-pill pointer-events-auto flex w-full max-w-[920px] items-center justify-between gap-2 rounded-full px-2.5 py-2 text-white transition-all duration-300 sm:px-4 sm:py-2.5"
      >
        {/* Logo + Nama Perusahaan di kiri */}
        <Link
          to="/"
          onClick={handleHomeClick}
          className="flex min-w-0 items-center gap-2 rounded-full py-0.5 pl-1 pr-2 transition-opacity hover:opacity-90 sm:gap-2.5 sm:pl-1.5 sm:pr-3"
        >
          <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white/10 p-1.5 ring-1 ring-white/20 sm:h-8 sm:w-8">
            <img
              src={siteConfig.logoLight}
              alt={`${siteConfig.companyName} logo`}
              className="h-full w-full object-contain"
            />
          </span>
          <span className="truncate text-[13px] font-semibold tracking-wide text-white sm:text-[15px]">
            {siteConfig.companyName}
          </span>
        </Link>

        {/* Menu tengah (Desktop) */}
        <div className="hidden items-center gap-1 md:flex">
          <Link
            to="/"
            onClick={handleHomeClick}
            className={`rounded-full px-4 py-1.5 text-xs font-medium tracking-wide transition-all duration-200 sm:text-[13px] ${
              isHomeActive
                ? 'bg-white/20 text-white shadow-inner ring-1 ring-white/20'
                : 'text-white/80 hover:bg-white/10 hover:text-white'
            }`}
          >
            {siteConfig.navigation.homeLabel}
          </Link>

          <Link
            to="/explore"
            className={`rounded-full px-4 py-1.5 text-xs font-medium tracking-wide transition-all duration-200 sm:text-[13px] ${
              isExploreActive
                ? 'bg-white/20 text-white shadow-inner ring-1 ring-white/20'
                : 'text-white/80 hover:bg-white/10 hover:text-white'
            }`}
          >
            {siteConfig.navigation.exploreLabel}
          </Link>

          <a
            href="/#about"
            onClick={handleAboutClick}
            className={`rounded-full px-4 py-1.5 text-xs font-medium tracking-wide transition-all duration-200 sm:text-[13px] ${
              isAboutActive
                ? 'bg-white/20 text-white shadow-inner ring-1 ring-white/20'
                : 'text-white/80 hover:bg-white/10 hover:text-white'
            }`}
          >
            {siteConfig.navigation.aboutLabel}
          </a>
        </div>

        {/* Tombol putih "Konsultasi" di kanan + Hamburger Mobile */}
        <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-[11px] font-semibold text-ink shadow-sm transition-all duration-200 hover:bg-surface active:scale-[0.98] sm:gap-2 sm:px-4 sm:py-2 sm:text-[13px]"
          >
            <MessageSquare className="h-3 w-3 sm:h-3.5 sm:w-3.5" strokeWidth={1.75} />
            <span>{siteConfig.navigation.ctaLabel}</span>
          </a>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? 'Tutup menu navigasi' : 'Buka menu navigasi'}
            className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white ring-1 ring-white/20 transition hover:bg-white/20 md:hidden"
          >
            {mobileOpen ? (
              <X className="h-4 w-4" strokeWidth={1.75} />
            ) : (
              <Menu className="h-4 w-4" strokeWidth={1.75} />
            )}
          </button>
        </div>
      </nav>

      {/* Dropdown Menu Mobile (Glassmorphism) */}
      {mobileOpen && (
        <div className="glass-nav-pill pointer-events-auto mt-2 w-full max-w-[920px] overflow-hidden rounded-3xl p-3 text-white md:hidden">
          <div className="flex flex-col gap-1">
            <Link
              to="/"
              onClick={handleHomeClick}
              className={`rounded-2xl px-4 py-3 text-sm font-medium transition ${
                isHomeActive ? 'bg-white/20 text-white' : 'text-white/80 hover:bg-white/10'
              }`}
            >
              {siteConfig.navigation.homeLabel}
            </Link>
            <Link
              to="/explore"
              onClick={() => setMobileOpen(false)}
              className={`rounded-2xl px-4 py-3 text-sm font-medium transition ${
                isExploreActive ? 'bg-white/20 text-white' : 'text-white/80 hover:bg-white/10'
              }`}
            >
              {siteConfig.navigation.exploreLabel}
            </Link>
            <a
              href="/#about"
              onClick={handleAboutClick}
              className={`rounded-2xl px-4 py-3 text-sm font-medium transition ${
                isAboutActive ? 'bg-white/20 text-white' : 'text-white/80 hover:bg-white/10'
              }`}
            >
              {siteConfig.navigation.aboutLabel}
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

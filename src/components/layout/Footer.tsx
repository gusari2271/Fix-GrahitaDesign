import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ArrowUpRight, Mail, MapPin, Phone } from 'lucide-react';
import { getWhatsAppUrl, siteConfig } from '../../data/site';

export const Footer: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleAboutClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (location.pathname === '/') {
      const el = document.getElementById('about');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/#about');
    }
  };

  return (
    <footer className="border-t border-border bg-bg text-ink">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          {/* Identitas Perusahaan & Logo */}
          <div className="md:col-span-5">
            <Link to="/" className="inline-flex items-center gap-3">
              <img
                src={siteConfig.logoDark}
                alt={`${siteConfig.companyName} logo`}
                className="h-10 w-10 object-contain"
              />
              <div>
                <p className="text-lg font-semibold tracking-wide text-ink">
                  {siteConfig.companyName}
                </p>
                <p className="text-xs text-muted">Arsitektur & Perizinan PBG / SLF</p>
              </div>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">
              {siteConfig.tagline}. Dirancang dengan transparansi tahapan kerja mulai dari konsep arsitektur hingga kepastian legalitas bangunan gedung.
            </p>
          </div>

          {/* Navigasi Cepat */}
          <div className="md:col-span-3">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink">
              Navigasi
            </p>
            <ul className="mt-4 space-y-2.5 text-sm text-muted">
              <li>
                <Link to="/" className="transition-colors hover:text-ink">
                  {siteConfig.navigation.homeLabel}
                </Link>
              </li>
              <li>
                <Link to="/explore" className="transition-colors hover:text-ink">
                  {siteConfig.navigation.exploreLabel} (Desain & Izin)
                </Link>
              </li>
              <li>
                <a
                  href="/#about"
                  onClick={handleAboutClick}
                  className="transition-colors hover:text-ink"
                >
                  {siteConfig.navigation.aboutLabel}
                </a>
              </li>
              <li>
                <Link to="/izin/pbg" className="transition-colors hover:text-ink">
                  Alur Pengurusan PBG
                </Link>
              </li>
              <li>
                <Link to="/izin/slf" className="transition-colors hover:text-ink">
                  Alur Pengurusan SLF
                </Link>
              </li>
            </ul>
          </div>

          {/* Kontak & Alamat */}
          <div className="md:col-span-4">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink">
              Kontak Studio
            </p>
            <ul className="mt-4 space-y-3 text-sm text-muted">
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-ink" strokeWidth={1.5} />
                <span>
                  {siteConfig.contact.address}, {siteConfig.contact.city}
                </span>
              </li>
              <li>
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 transition-colors hover:text-ink"
                >
                  <Phone className="h-4 w-4 shrink-0 text-ink" strokeWidth={1.5} />
                  <span>WhatsApp: {siteConfig.contact.whatsappDisplay}</span>
                  <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.5} />
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="inline-flex items-center gap-2.5 transition-colors hover:text-ink"
                >
                  <Mail className="h-4 w-4 shrink-0 text-ink" strokeWidth={1.5} />
                  <span>{siteConfig.contact.email}</span>
                </a>
              </li>
              {siteConfig.contact.workingHours && (
                <li className="pt-1 text-xs text-muted">
                  Jam Operasional: {siteConfig.contact.workingHours}
                </li>
              )}
            </ul>
          </div>
        </div>

        {/* Garis Bawah Hak Cipta */}
        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-border pt-6 text-xs text-muted sm:flex-row sm:items-center">
          <p>
            © {new Date().getFullYear()} {siteConfig.companyName}. Seluruh hak cipta dilindungi.
          </p>
          <p>Desain Arsitektur • Persetujuan Bangunan Gedung (PBG) • Sertifikat Laik Fungsi (SLF)</p>
        </div>
      </div>
    </footer>
  );
};

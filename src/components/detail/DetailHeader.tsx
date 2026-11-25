import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, MapPin } from 'lucide-react';

interface DetailHeaderProps {
  backLabel?: string;
  backTo?: string;
  badge: string;
  title: string;
  subtitle?: string;
  summary: string;
  cover: string;
  metaItems?: { label: string; value: string }[];
}

export const DetailHeader: React.FC<DetailHeaderProps> = ({
  backLabel = 'Kembali ke Explore',
  backTo = '/explore',
  badge,
  title,
  subtitle,
  summary,
  cover,
  metaItems = [],
}) => {
  return (
    <div className="pt-24 sm:pt-28">
      {/* Tombol Kembali */}
      <div className="mb-6">
        <Link
          to={backTo}
          className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-4 py-2 text-xs font-medium text-ink shadow-sm transition-all hover:border-ink hover:bg-ink hover:text-white"
        >
          <ArrowLeft className="h-3.5 w-3.5" strokeWidth={1.75} />
          <span>{backLabel}</span>
        </Link>
      </div>

      {/* Hero Detail Preview Besar dalam Kartu Berradius 24px (Tinggi adaptif di mobile agar tidak pernah terpotong) */}
      <div className="relative flex min-h-[420px] flex-col justify-end overflow-hidden rounded-card border border-border bg-ink p-6 text-white shadow-card sm:min-h-[460px] sm:p-10 lg:min-h-[500px] lg:p-12">
        <img
          src={cover}
          alt={title}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-black/20"
        />

        {/* Teks di Atas Foto Hero Detail */}
        <div className="relative z-10 pt-20 sm:pt-28">
          <span className="glass-photo-pill inline-block rounded-full px-3.5 py-1 text-[10px] font-medium uppercase tracking-[0.24em] text-white/95 sm:text-[11px]">
            {badge}
          </span>

          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-5xl lg:text-[52px]">
            {title}
          </h1>

          {subtitle && (
            <p className="mt-1.5 text-xs uppercase tracking-[0.22em] text-white/80 sm:text-sm">
              {subtitle}
            </p>
          )}

          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-white/85 sm:text-base">
            {summary}
          </p>

          {metaItems.length > 0 && (
            <div className="mt-6 flex flex-wrap items-center gap-2.5 sm:gap-3">
              {metaItems.map((meta, idx) => (
                <div
                  key={idx}
                  className="glass-photo-pill inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs text-white/90"
                >
                  {meta.label.toLowerCase().includes('lokasi') && (
                    <MapPin className="h-3.5 w-3.5 text-white/80" strokeWidth={1.6} />
                  )}
                  <span className="text-white/65">{meta.label}:</span>
                  <span className="font-medium text-white">{meta.value}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

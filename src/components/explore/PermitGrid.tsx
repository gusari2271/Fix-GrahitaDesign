import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, FileCheck2, MapPin } from 'lucide-react';
import { permits } from '../../data/permits';
import { siteConfig } from '../../data/site';

export const PermitGrid: React.FC = () => {
  const [filter, setFilter] = useState<'Semua' | 'PBG' | 'SLF'>('Semua');

  const flattenedCases = useMemo(() => {
    return permits.flatMap((permit) =>
      permit.cases.map((c) => ({
        ...c,
        permitSlug: permit.slug,
        permitName: permit.name,
        permitFullName: permit.fullName,
        fallbackCover: permit.cover,
      }))
    );
  }, []);

  const visiblePermits = useMemo(() => {
    if (filter === 'Semua') return permits;
    return permits.filter((p) => p.name.toUpperCase() === filter);
  }, [filter]);

  const visibleCases = useMemo(() => {
    if (filter === 'Semua') return flattenedCases;
    return flattenedCases.filter((c) => c.permitName.toUpperCase() === filter);
  }, [filter, flattenedCases]);

  return (
    <section
      aria-labelledby="explore-permit-heading"
      className="border-t border-border py-12 sm:py-16"
    >
      <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.24em] text-muted">
            {siteConfig.explorePage.permitSectionEyebrow}
          </p>
          <h2
            id="explore-permit-heading"
            className="mt-2.5 text-2xl font-semibold tracking-tight text-ink sm:text-3xl lg:text-4xl"
          >
            {siteConfig.explorePage.permitSectionTitle}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
            {siteConfig.explorePage.permitSectionSubtitle}
          </p>
        </div>

        {/* Filter Jenis Izin: Semua | PBG | SLF (PRD Bagian 6.4 & 8.4) */}
        <div className="flex items-center gap-2">
          {(['Semua', 'PBG', 'SLF'] as const).map((tab) => {
            const isActive = filter === tab;
            return (
              <button
                key={tab}
                type="button"
                onClick={() => setFilter(tab)}
                className={`rounded-full border px-4 py-2 text-xs font-medium transition-all duration-200 ${
                  isActive
                    ? 'border-ink bg-ink text-white'
                    : 'border-border bg-white text-muted hover:border-ink hover:text-ink'
                }`}
              >
                {tab}
              </button>
            );
          })}
        </div>
      </div>

      {/* Ringkasan Alur Utama PBG & SLF */}
      <div className="mt-8 grid grid-cols-1 gap-5 lg:grid-cols-2">
        {visiblePermits.map((permit) => (
          <Link
            key={permit.slug}
            to={`/izin/${permit.slug}`}
            className="glass-card group flex flex-col justify-between rounded-card border border-border bg-surface/75 p-6 transition-all duration-300 hover:border-ink hover:bg-white hover:shadow-card-hover sm:p-7"
          >
            <div>
              <div className="flex items-center justify-between gap-3">
                <span className="inline-flex items-center gap-2 rounded-full bg-ink px-3.5 py-1 text-xs font-semibold tracking-wider text-white">
                  <FileCheck2 className="h-3.5 w-3.5" strokeWidth={1.75} />
                  <span>LAYANAN {permit.name}</span>
                </span>
                <span className="text-xs font-medium text-muted">
                  {permit.steps.length} Tahap Pengurusan
                </span>
              </div>

              <h3 className="mt-4 text-xl font-semibold tracking-tight text-ink sm:text-2xl">
                {permit.name} — {permit.fullName}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {permit.summary}
              </p>
            </div>

            <div className="mt-6 flex items-center justify-between border-t border-border pt-4">
              <span className="text-xs font-semibold text-ink">
                Pelajari Alur Lengkap {permit.name}
              </span>
              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-white text-ink transition-colors group-hover:border-ink group-hover:bg-ink group-hover:text-white">
                <ArrowUpRight className="h-4 w-4" strokeWidth={1.75} />
              </span>
            </div>
          </Link>
        ))}
      </div>

      {/* Grid Semua Pengalaman Izin (PBG 1-3 & SLF 1-3 sesuai PRD 6.4) */}
      <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {visibleCases.map((item) => (
          <Link
            key={item.id}
            to={`/izin/${item.permitSlug}`}
            className="group flex flex-col rounded-card border border-border bg-white p-3.5 shadow-card transition-all duration-300 hover:border-neutral-400 hover:shadow-card-hover"
          >
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-photo bg-surface">
              <img
                src={item.image || item.fallbackCover}
                alt={item.title}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
              />
              <div className="pointer-events-none absolute inset-x-3 top-3 flex items-center justify-between gap-2">
                <span className="glass-badge-dark rounded-full px-3 py-1 text-[11px] font-semibold tracking-wider">
                  {item.permitName}
                </span>
                {item.year && (
                  <span className="glass-badge-light rounded-full px-3 py-1 text-[11px] font-medium">
                    {item.year}
                  </span>
                )}
              </div>
            </div>

            <div className="flex flex-1 flex-col justify-between px-2 pb-1.5 pt-4">
              <div>
                <div className="flex flex-wrap items-center gap-2 text-xs text-muted">
                  {item.location && (
                    <span className="inline-flex items-center gap-1">
                      <MapPin className="h-3.5 w-3.5" strokeWidth={1.6} />
                      {item.location}
                    </span>
                  )}
                  {item.buildingType && <span>• {item.buildingType}</span>}
                </div>

                <h3 className="mt-1.5 text-base font-semibold leading-snug text-ink sm:text-lg">
                  {item.title}
                </h3>

                <p className="mt-2 text-xs leading-relaxed text-muted sm:text-sm">
                  {item.summary}
                </p>
              </div>

              <div className="mt-5 flex items-center justify-between border-t border-border pt-3.5">
                <span className="text-xs font-semibold text-ink">
                  Lihat Tahap Pengurusan {item.permitName}
                </span>
                <span className="flex h-8 w-8 items-center justify-center rounded-full border border-border bg-surface text-ink transition-colors duration-200 group-hover:border-ink group-hover:bg-ink group-hover:text-white">
                  <ArrowUpRight className="h-4 w-4" strokeWidth={1.75} />
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, MapPin } from 'lucide-react';
import { projects } from '../../data/projects';
import { siteConfig } from '../../data/site';

export const ProjectGrid: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('Semua');

  const categories = useMemo(() => {
    const unique = Array.from(
      new Set(projects.map((p) => p.category).filter(Boolean) as string[])
    );
    return ['Semua', ...unique];
  }, []);

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'Semua') return projects;
    return projects.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  return (
    <section aria-labelledby="explore-design-heading" className="py-10 sm:py-14">
      <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.24em] text-muted">
            {siteConfig.explorePage.designSectionEyebrow}
          </p>
          <h2
            id="explore-design-heading"
            className="mt-2.5 text-2xl font-semibold tracking-tight text-ink sm:text-3xl lg:text-4xl"
          >
            {siteConfig.explorePage.designSectionTitle}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
            {siteConfig.explorePage.designSectionSubtitle}
          </p>
        </div>

        {/* Chip Filter Kategori (Aktif hitam teks putih, tidak aktif putih border abu — PRD 8.4) */}
        <div className="flex flex-wrap items-center gap-2">
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`rounded-full border px-4 py-2 text-xs font-medium transition-all duration-200 ${
                  isActive
                    ? 'border-ink bg-ink text-white'
                    : 'border-border bg-white text-muted hover:border-ink hover:text-ink'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </div>

      {/* Grid Semua Proyek Desain (Kartu putih radius 24px, foto radius 16px) */}
      <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredProjects.map((project) => (
          <Link
            key={project.slug}
            to={`/desain/${project.slug}`}
            className="group flex flex-col rounded-card border border-border bg-white p-3.5 shadow-card transition-all duration-300 hover:border-neutral-400 hover:shadow-card-hover"
          >
            <div className="relative aspect-[16/11] w-full overflow-hidden rounded-photo bg-surface">
              <img
                src={project.cover}
                alt={project.name}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
              />

              {/* Badge Kategori & Tahun (Glassmorphism Monokrom) */}
              <div className="pointer-events-none absolute inset-x-3 top-3 flex items-center justify-between gap-2">
                {project.category && (
                  <span className="glass-badge-light rounded-full px-3 py-1 text-[11px] font-semibold">
                    {project.category}
                  </span>
                )}
                {project.year && (
                  <span className="glass-badge-dark rounded-full px-3 py-1 text-[11px] font-medium">
                    {project.year}
                  </span>
                )}
              </div>
            </div>

            <div className="flex flex-1 flex-col justify-between px-2 pb-1.5 pt-4">
              <div>
                {project.location && (
                  <p className="flex items-center gap-1.5 text-xs text-muted">
                    <MapPin className="h-3.5 w-3.5 shrink-0" strokeWidth={1.6} />
                    <span>{project.location}</span>
                    {project.area && <span>• {project.area}</span>}
                  </p>
                )}

                <h3 className="mt-1.5 text-lg font-semibold tracking-tight text-ink sm:text-xl">
                  {project.name}
                </h3>

                <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-muted sm:text-sm">
                  {project.summary}
                </p>
              </div>

              <div className="mt-5 flex items-center justify-between border-t border-border pt-3.5">
                <span className="text-xs font-semibold text-ink">
                  Lihat Design Journey ({project.journey.length} Tahap)
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

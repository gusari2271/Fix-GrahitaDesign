import React, { useEffect } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { ContentBlocks } from '../components/common/ContentBlocks';
import { CtaSection } from '../components/detail/CtaSection';
import { DetailHeader } from '../components/detail/DetailHeader';
import { Timeline } from '../components/detail/Timeline';
import { projects } from '../data/projects';
import { siteConfig } from '../data/site';

export const ProjectDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const projectIndex = projects.findIndex((p) => p.slug === slug);
  const project = projectIndex >= 0 ? projects[projectIndex] : null;

  useEffect(() => {
    if (project) {
      document.title = `${project.name} — Design Journey | ${siteConfig.companyName}`;
    }
  }, [project]);

  if (!project) {
    return <Navigate to="/404" replace />;
  }

  const prevProject =
    projects[(projectIndex - 1 + projects.length) % projects.length];
  const nextProject = projects[(projectIndex + 1) % projects.length];

  const metaItems = [
    ...(project.location ? [{ label: 'Lokasi', value: project.location }] : []),
    ...(project.area ? [{ label: 'Luas Bangunan', value: project.area }] : []),
    ...(project.year ? [{ label: 'Tahun', value: project.year }] : []),
  ];

  return (
    <main className="bg-bg pb-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* 1. Foto Preview Besar + Nama Proyek */}
        <DetailHeader
          badge="PORTOFOLIO DESAIN ARSITEKTUR"
          title={project.name}
          subtitle={project.category}
          summary={project.summary}
          cover={project.cover}
          metaItems={metaItems}
        />

        {/* Galeri Foto Proyek Opsional */}
        {project.gallery && project.gallery.length > 0 && (
          <div className="mt-12">
            <ContentBlocks
              blocks={[
                {
                  type: 'gallery',
                  eyebrow: 'DOKUMENTASI VISUAL',
                  title: `Sudut Ruang & Arsitektur ${project.name}`,
                  columns: 2,
                  images: project.gallery,
                },
              ]}
            />
          </div>
        )}

        {/* 2. Design Journey (5 Tahap Berurutan dengan Timeline Kartu Mengembang) */}
        <Timeline
          eyebrow="PROSES PERANCANGAN TRANSPARAN"
          titleLine1={`${project.journey.length} Tahap Design Journey`}
          titleLine2={`pada Proyek ${project.name}`}
          description="Setiap proyek dirancang melalui tahapan sistematis agar kebutuhan fungsional, respons iklim tapak, ketepatan anggaran, hingga gambar kerja konstruksi tercapai secara terukur."
          steps={project.journey}
        />

        {/* Blok Konten Tambahan Bebas (Mudah ditambah via extraBlocks di src/data/projects.ts) */}
        {project.extraBlocks && project.extraBlocks.length > 0 && (
          <div className="py-8">
            <ContentBlocks blocks={project.extraBlocks} />
          </div>
        )}

        {/* 4. Navigasi Proyek Sebelumnya / Berikutnya */}
        {projects.length > 1 && (
          <nav
            aria-label="Navigasi Antar Proyek"
            className="mt-6 grid grid-cols-1 gap-4 border-t border-border pt-10 sm:grid-cols-2"
          >
            <Link
              to={`/desain/${prevProject.slug}`}
              className="group flex items-center justify-between gap-4 rounded-card border border-border bg-white p-5 shadow-card transition-all hover:border-ink hover:shadow-card-hover"
            >
              <div className="flex items-center gap-3.5">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border bg-surface text-ink transition-colors group-hover:border-ink group-hover:bg-ink group-hover:text-white">
                  <ArrowLeft className="h-4 w-4" strokeWidth={1.75} />
                </span>
                <div>
                  <p className="text-[11px] uppercase tracking-[0.2em] text-muted">
                    Proyek Sebelumnya
                  </p>
                  <p className="mt-0.5 text-base font-semibold text-ink">
                    {prevProject.name}
                  </p>
                </div>
              </div>
            </Link>

            <Link
              to={`/desain/${nextProject.slug}`}
              className="group flex items-center justify-end gap-4 rounded-card border border-border bg-white p-5 text-right shadow-card transition-all hover:border-ink hover:shadow-card-hover"
            >
              <div className="flex items-center gap-3.5">
                <div>
                  <p className="text-[11px] uppercase tracking-[0.2em] text-muted">
                    Proyek Berikutnya
                  </p>
                  <p className="mt-0.5 text-base font-semibold text-ink">
                    {nextProject.name}
                  </p>
                </div>
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border bg-surface text-ink transition-colors group-hover:border-ink group-hover:bg-ink group-hover:text-white">
                  <ArrowRight className="h-4 w-4" strokeWidth={1.75} />
                </span>
              </div>
            </Link>
          </nav>
        )}

        {/* 5. CTA Kontak */}
        <CtaSection
          customMessage={`Halo Grahita Design, saya tertarik setelah melihat portofolio desain ${project.name} dan ingin berkonsultasi mengenai rencana pembangunan saya.`}
        />
      </div>
    </main>
  );
};

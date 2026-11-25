import React, { useEffect } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { ArrowRight, MapPin } from 'lucide-react';
import { ContentBlocks } from '../components/common/ContentBlocks';
import { CtaSection } from '../components/detail/CtaSection';
import { DetailHeader } from '../components/detail/DetailHeader';
import { Timeline } from '../components/detail/Timeline';
import { permits } from '../data/permits';
import { siteConfig } from '../data/site';

export const PermitDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const permit = permits.find((p) => p.slug === slug) || null;

  useEffect(() => {
    if (permit) {
      document.title = `Pengurusan ${permit.name} (${permit.fullName}) | ${siteConfig.companyName}`;
    }
  }, [permit]);

  if (!permit) {
    return <Navigate to="/404" replace />;
  }

  const otherPermit = permits.find((p) => p.slug !== permit.slug);

  return (
    <main className="bg-bg pb-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* 1. Header Izin (PBG / SLF) + Penjelasan Singkat */}
        <DetailHeader
          badge="JASA PENGURUSAN PERIZINAN"
          title={permit.name}
          subtitle={permit.fullName}
          summary={permit.summary}
          cover={permit.cover}
          metaItems={[
            { label: 'Tahapan Alur', value: `${permit.steps.length} Langkah Terstruktur` },
            { label: 'Sistem Resmi', value: 'SIMBG & Tata Ruang Daerah' },
          ]}
        />

        {/* 2. Alur Proses Pengurusan (Timeline Kartu Mengembang) */}
        <Timeline
          eyebrow="ALUR PROSES PENGURUSAN TRANSPARAN"
          titleLine1={`${permit.steps.length} Langkah Terstruktur`}
          titleLine2={`Pengurusan ${permit.name} hingga Terbit`}
          description={`Kami memastikan setiap pemohon memahami estimasi waktu, keluaran dokumen teknis, serta berkas yang perlu disiapkan pada setiap tahapan pengurusan ${permit.fullName}.`}
          steps={permit.steps}
        />

        {/* 4. Contoh Pengalaman Kasus yang Pernah Diurus (PBG 1-3 / SLF 1-3) */}
        {permit.cases.length > 0 && (
          <section
            aria-labelledby="permit-cases-heading"
            className="border-t border-border py-12 sm:py-16"
          >
            <div className="max-w-2xl">
              <p className="text-xs uppercase tracking-[0.24em] text-muted">
                REKAM JEJAK PENDAMPINGAN
              </p>
              <h2
                id="permit-cases-heading"
                className="mt-2.5 text-2xl font-semibold leading-snug tracking-tight text-ink sm:text-3xl lg:text-4xl"
              >
                Contoh Pengalaman Pengurusan {permit.name}
                <br />
                <span className="text-neutral-500">pada Beragam Fungsi Bangunan</span>
              </h2>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
              {permit.cases.map((item) => (
                <article
                  key={item.id}
                  className="flex flex-col rounded-card border border-border bg-white p-3.5 shadow-card transition-shadow duration-300 hover:shadow-card-hover"
                >
                  <div className="relative aspect-[16/10] w-full overflow-hidden rounded-photo bg-surface">
                    <img
                      src={item.image || permit.cover}
                      alt={item.title}
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                    <div className="pointer-events-none absolute inset-x-3 top-3 flex items-center justify-between gap-2">
                      <span className="glass-badge-dark rounded-full px-3 py-1 text-[11px] font-semibold">
                        {permit.name}
                      </span>
                      {item.year && (
                        <span className="glass-badge-light rounded-full px-3 py-1 text-[11px] font-medium">
                          {item.year}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col justify-between px-2 pb-2 pt-4">
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
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}

        {/* Blok Konten Tambahan Bebas (Mudah ditambah via extraBlocks di src/data/permits.ts) */}
        {permit.extraBlocks && permit.extraBlocks.length > 0 && (
          <div className="py-6">
            <ContentBlocks blocks={permit.extraBlocks} />
          </div>
        )}

        {/* Tautan Pindah ke Layanan Izin Lainnya */}
        {otherPermit && (
          <div className="mt-4 border-t border-border pt-10">
            <Link
              to={`/izin/${otherPermit.slug}`}
              className="group flex items-center justify-between gap-4 rounded-card border border-border bg-white p-6 shadow-card transition-all hover:border-ink hover:shadow-card-hover"
            >
              <div>
                <p className="text-[11px] uppercase tracking-[0.2em] text-muted">
                  Layanan Perizinan Lainnya
                </p>
                <p className="mt-1 text-lg font-semibold text-ink">
                  Lihat Alur Pengurusan {otherPermit.name} ({otherPermit.fullName})
                </p>
              </div>
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border bg-surface text-ink transition-colors group-hover:border-ink group-hover:bg-ink group-hover:text-white">
                <ArrowRight className="h-4 w-4" strokeWidth={1.75} />
              </span>
            </Link>
          </div>
        )}

        {/* 5. CTA Kontak */}
        <CtaSection
          customMessage={`Halo Grahita Design, saya ingin berkonsultasi mengenai pengurusan ${permit.name} (${permit.fullName}) untuk bangunan saya.`}
        />
      </div>
    </main>
  );
};

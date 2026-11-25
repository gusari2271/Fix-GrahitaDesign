import React, { useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { Check, ChevronDown, ChevronUp, ClipboardCheck, Clock, FileText, X } from 'lucide-react';
import { StepDetail } from '../../types/content';

interface TimelineProps {
  eyebrow: string;
  titleLine1: string;
  titleLine2: string;
  description: string;
  steps: StepDetail[];
}

/**
 * Komponen Timeline Kartu Mengembang (PRD Bagian 8.4 & Referensi Screenshot):
 * - Indikator progres tahap di kanan atas judul timeline ("TAHAP AKTIF", bar progres hitam, nomor langkah bisa diklik)
 * - Garis vertikal abu dengan lingkaran bernomor di kiri (aktif hitam angka putih, lainnya putih outline abu)
 * - Kartu mengembang: label "TAHAP 01", chip estimasi waktu, judul, deskripsi singkat
 * - Tombol bulat chevron di kanan ("Detail Tahap" saat tertutup, "Tutup" + lingkaran hitam saat terbuka)
 * - Saat dibuka muncul penjelasan lengkap, dua kotak abu ("Deliverable & Dokumen Keluaran" dengan centang dan
 *   "Yang Dibutuhkan dari Klien" dengan titik), serta galeri foto tahap opsional.
 * - Hanya satu langkah terbuka pada satu waktu.
 */
export const Timeline: React.FC<TimelineProps> = ({
  eyebrow,
  titleLine1,
  titleLine2,
  description,
  steps,
}) => {
  const prefersReducedMotion = useReducedMotion();
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [previewImg, setPreviewImg] = useState<{ src: string; alt: string; caption?: string } | null>(null);

  const totalSteps = steps.length;
  const activeStepNumber = openIndex !== null ? openIndex + 1 : 0;
  const progressPercent =
    openIndex !== null && totalSteps > 0
      ? ((openIndex + 1) / totalSteps) * 100
      : 0;

  const formatNum = (n: number) => String(n).padStart(2, '0');

  const handleStepSelect = (idx: number) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  const jumpToStep = (idx: number) => {
    setOpenIndex(idx);
    const el = document.getElementById(`timeline-step-${idx}`);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  };

  return (
    <section className="py-14 sm:py-20">
      {/* Header Timeline + Kartu Indikator Progres Tahap */}
      <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.24em] text-muted">
            {eyebrow}
          </p>
          <h2 className="mt-3 text-3xl font-semibold leading-[1.18] tracking-tight text-ink sm:text-4xl lg:text-[42px]">
            {titleLine1}
            <br />
            <span className="text-neutral-500">{titleLine2}</span>
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
            {description}
          </p>
        </div>

        {/* Indikator Progres Tahap (PRD Bagian 8.4) */}
        {totalSteps > 0 && (
          <div className="glass-card w-full shrink-0 rounded-2xl border border-border bg-white p-4 sm:w-auto sm:min-w-[270px]">
            <div className="flex items-center justify-between gap-4 text-[11px] uppercase tracking-[0.14em]">
              <span className="text-muted">Tahap Aktif</span>
              <span className="font-semibold text-ink">
                {openIndex !== null
                  ? `Langkah ${formatNum(activeStepNumber)} / ${formatNum(totalSteps)}`
                  : `Pilih Langkah (01–${formatNum(totalSteps)})`}
              </span>
            </div>

            {/* Bar Progres Hitam */}
            <div className="mt-2.5 h-1.5 w-full overflow-hidden rounded-full bg-border">
              <div
                className="h-full rounded-full bg-ink transition-all duration-300 ease-out"
                style={{ width: `${progressPercent}%` }}
              />
            </div>

            {/* Nomor Langkah yang Bisa Diklik */}
            <div className="mt-3 flex flex-wrap items-center justify-between gap-1">
              {steps.map((s, idx) => {
                const isActive = openIndex === idx;
                return (
                  <button
                    key={s.step + idx}
                    type="button"
                    onClick={() => jumpToStep(idx)}
                    aria-label={`Pilih tahap ${idx + 1}: ${s.step}`}
                    className={`rounded-full px-2.5 py-0.5 text-[11px] font-medium transition-colors ${
                      isActive
                        ? 'bg-ink text-white'
                        : 'text-muted hover:bg-surface hover:text-ink'
                    }`}
                  >
                    {formatNum(idx + 1)}
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>

      {/* Daftar Tahap Timeline dengan Garis Vertikal Abu */}
      <div className="relative mt-12 space-y-5">
        {/* Garis Vertikal Penghubung (Tampil mulai layar sm ke atas, dan tersembunyi rapi pada kartu terakhir) */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-8 left-[21px] top-6 hidden w-[1px] bg-border sm:block"
        />

        {steps.map((item, idx) => {
          const isOpen = openIndex === idx;
          const stepNumberStr = formatNum(idx + 1);
          const hasDeliverables = item.deliverables && item.deliverables.length > 0;
          const hasClientNeeds = item.clientNeeds && item.clientNeeds.length > 0;
          const hasImages = item.images && item.images.length > 0;

          return (
            <div
              id={`timeline-step-${idx}`}
              key={item.step + idx}
              className="relative flex flex-col gap-3 sm:flex-row sm:items-start sm:gap-5"
            >
              {/* Lingkaran Bernomor di Kiri */}
              <button
                type="button"
                onClick={() => handleStepSelect(idx)}
                aria-label={`Tahap ${stepNumberStr}: ${item.step}`}
                className={`relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border text-xs font-semibold transition-all duration-300 ${
                  isOpen
                    ? 'border-ink bg-ink text-white shadow-sm'
                    : 'border-border bg-white text-muted hover:border-ink hover:text-ink'
                }`}
              >
                {stepNumberStr}
              </button>

              {/* Kartu Mengembang */}
              <div
                className={`flex-1 rounded-card border transition-all duration-300 ${
                  isOpen
                    ? 'border-border bg-white shadow-card-hover'
                    : 'border-border bg-surface/65 hover:bg-white hover:shadow-card'
                }`}
              >
                {/* Area Header Kartu (Klik untuk Buka/Tutup) */}
                <button
                  type="button"
                  onClick={() => handleStepSelect(idx)}
                  aria-expanded={isOpen}
                  className="flex w-full items-start justify-between gap-4 p-5 text-left sm:p-7"
                >
                  <div className="min-w-0 flex-1">
                    {/* Label TAHAP 01 + Chip Estimasi Waktu */}
                    <div className="flex flex-wrap items-center gap-2.5">
                      <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
                        TAHAP {stepNumberStr}
                      </span>
                      {item.duration && (
                        <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-white px-2.5 py-0.5 text-[11px] font-medium text-ink">
                          <Clock className="h-3 w-3 text-muted" strokeWidth={1.6} />
                          <span>{item.duration}</span>
                        </span>
                      )}
                    </div>

                    {/* Judul Tahap + Subjudul */}
                    <h3 className="mt-2 text-lg font-semibold leading-snug text-ink sm:text-xl">
                      <span>{item.step}</span>
                      {item.subtitle && (
                        <span className="font-normal text-muted"> — {item.subtitle}</span>
                      )}
                    </h3>

                    {/* Deskripsi Singkat */}
                    <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted">
                      {item.description}
                    </p>
                  </div>

                  {/* Kontrol Kanan: "Detail Tahap" / "Tutup" + Tombol Bulat Chevron */}
                  <div className="flex shrink-0 items-center gap-2.5 self-center pl-2">
                    <span className="hidden text-xs font-medium text-ink md:inline">
                      {isOpen ? 'Tutup' : 'Detail Tahap'}
                    </span>
                    <span
                      className={`flex h-9 w-9 items-center justify-center rounded-full border transition-colors duration-200 ${
                        isOpen
                          ? 'border-ink bg-ink text-white'
                          : 'border-border bg-white text-ink'
                      }`}
                    >
                      {isOpen ? (
                        <ChevronUp className="h-4 w-4" strokeWidth={1.75} />
                      ) : (
                        <ChevronDown className="h-4 w-4" strokeWidth={1.75} />
                      )}
                    </span>
                  </div>
                </button>

                {/* Panel Konten Mengembang */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, height: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="border-t border-border px-5 pb-6 pt-5 sm:px-7 sm:pb-7 sm:pt-6">
                        <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
                          PENJELASAN TAHAP {stepNumberStr}: {item.step.toUpperCase()}
                        </p>
                        <p className="mt-2.5 max-w-3xl text-sm leading-relaxed text-ink/85 sm:text-[15px]">
                          {item.detailDescription || item.description}
                        </p>

                        {/* Dua Kotak Abu: Deliverable & Yang Dibutuhkan dari Klien */}
                        {(hasDeliverables || hasClientNeeds) && (
                          <div className="mt-6 grid grid-cols-1 gap-4 lg:grid-cols-2">
                            {hasDeliverables && (
                              <div className="rounded-2xl border border-border bg-surface p-5">
                                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-ink">
                                  <FileText className="h-4 w-4 shrink-0 text-ink" strokeWidth={1.6} />
                                  <span>Deliverable & Dokumen Keluaran</span>
                                </div>
                                <ul className="mt-3.5 space-y-2.5 text-xs leading-relaxed text-muted sm:text-[13px]">
                                  {item.deliverables!.map((del, dIdx) => (
                                    <li key={dIdx} className="flex items-start gap-2.5">
                                      <Check
                                        className="mt-0.5 h-4 w-4 shrink-0 text-ink"
                                        strokeWidth={1.75}
                                      />
                                      <span>{del}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}

                            {hasClientNeeds && (
                              <div className="rounded-2xl border border-border bg-surface p-5">
                                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-ink">
                                  <ClipboardCheck
                                    className="h-4 w-4 shrink-0 text-ink"
                                    strokeWidth={1.6}
                                  />
                                  <span>Yang Dibutuhkan dari Klien</span>
                                </div>
                                <ul className="mt-3.5 space-y-2.5 text-xs leading-relaxed text-muted sm:text-[13px]">
                                  {item.clientNeeds!.map((need, nIdx) => (
                                    <li key={nIdx} className="flex items-start gap-2.5">
                                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-ink" />
                                      <span>{need}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}
                          </div>
                        )}

                        {/* Galeri Gambar Tahap Opsional */}
                        {hasImages && (
                          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                            {item.images!.map((img, iIdx) => (
                              <figure
                                key={iIdx}
                                className="overflow-hidden rounded-2xl border border-border bg-surface p-2.5"
                              >
                                <button
                                  type="button"
                                  onClick={() => setPreviewImg(img)}
                                  className="block w-full overflow-hidden rounded-xl"
                                >
                                  <img
                                    src={img.src}
                                    alt={img.alt}
                                    loading="lazy"
                                    className="aspect-[16/10] w-full object-cover transition-transform duration-500 hover:scale-[1.02]"
                                  />
                                </button>
                                {img.caption && (
                                  <figcaption className="px-1.5 pt-2 text-xs text-muted">
                                    {img.caption}
                                  </figcaption>
                                )}
                              </figure>
                            ))}
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          );
        })}
      </div>

      {/* Modal Pratinjau Foto Tahap */}
      {previewImg && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-[80] flex items-center justify-center bg-black/85 p-4 backdrop-blur-md"
          onClick={() => setPreviewImg(null)}
        >
          <div
            className="relative max-w-4xl overflow-hidden rounded-card border border-white/20 bg-ink p-3"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setPreviewImg(null)}
              aria-label="Tutup pratinjau"
              className="glass-photo-pill absolute right-5 top-5 z-10 flex h-9 w-9 items-center justify-center rounded-full text-white hover:bg-white hover:text-ink"
            >
              <X className="h-4 w-4" strokeWidth={1.75} />
            </button>
            <img
              src={previewImg.src}
              alt={previewImg.alt}
              className="max-h-[78vh] w-auto rounded-photo object-contain"
            />
            {previewImg.caption && (
              <p className="pt-3 text-center text-xs text-white/80">{previewImg.caption}</p>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

import React from 'react';
import { ArrowUpRight, Mail, MessageSquare } from 'lucide-react';
import { getWhatsAppUrl, siteConfig } from '../../data/site';

interface CtaSectionProps {
  customMessage?: string;
}

export const CtaSection: React.FC<CtaSectionProps> = ({ customMessage }) => {
  return (
    <section aria-label="Konsultasi Proyek" className="py-12 sm:py-16">
      <div className="glass-card relative overflow-hidden rounded-card border border-border bg-surface p-8 sm:p-12">
        <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.24em] text-muted">
              {siteConfig.ctaBanner.eyebrow}
            </p>
            <h2 className="mt-3 text-2xl font-semibold leading-snug tracking-tight text-ink sm:text-3xl lg:text-4xl">
              {siteConfig.ctaBanner.titleLine1}
              <br />
              <span className="text-neutral-500">{siteConfig.ctaBanner.titleLine2}</span>
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
              {siteConfig.ctaBanner.description}
            </p>
          </div>

          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <a
              href={getWhatsAppUrl(customMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 rounded-full bg-ink px-6 py-3.5 text-xs font-semibold tracking-wide text-white transition-all hover:bg-neutral-800 sm:text-sm"
            >
              <MessageSquare className="h-4 w-4" strokeWidth={1.75} />
              <span>{siteConfig.ctaBanner.primaryButtonLabel}</span>
              <ArrowUpRight className="h-4 w-4" strokeWidth={1.75} />
            </a>

            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="inline-flex items-center justify-center gap-2.5 rounded-full border border-border bg-white px-6 py-3.5 text-xs font-semibold tracking-wide text-ink transition-all hover:border-ink sm:text-sm"
            >
              <Mail className="h-4 w-4" strokeWidth={1.75} />
              <span>{siteConfig.ctaBanner.secondaryButtonLabel}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

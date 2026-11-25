import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { siteConfig } from '../data/site';

export const NotFound: React.FC = () => {
  useEffect(() => {
    document.title = `Halaman Tidak Ditemukan | ${siteConfig.companyName}`;
  }, []);

  return (
    <main className="flex min-h-[75svh] items-center justify-center bg-bg px-4 pt-24">
      <div className="glass-card max-w-lg rounded-card border border-border p-10 text-center shadow-card">
        <p className="text-xs uppercase tracking-[0.24em] text-muted">ERROR 404</p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
          Halaman Tidak Ditemukan
        </h1>
        <p className="mt-3 text-sm leading-relaxed text-muted">
          Tautan yang Anda tuju tidak tersedia atau telah dipindahkan. Silakan kembali ke beranda atau jelajahi seluruh portofolio kami.
        </p>
        <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-xs font-semibold text-white transition hover:bg-neutral-800"
          >
            <ArrowLeft className="h-3.5 w-3.5" strokeWidth={1.75} />
            <span>Kembali ke Home</span>
          </Link>
          <Link
            to="/explore"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-5 py-2.5 text-xs font-semibold text-ink transition hover:border-ink"
          >
            <span>Buka {siteConfig.navigation.exploreLabel}</span>
          </Link>
        </div>
      </div>
    </main>
  );
};

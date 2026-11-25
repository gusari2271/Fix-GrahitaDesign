import React from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { Briefcase, Check, ClipboardList, GraduationCap, X } from 'lucide-react';
import { TeamMember } from '../../types/content';

interface TeamDetailPanelProps {
  member: TeamMember | null;
  onClose: () => void;
}

export const TeamDetailPanel: React.FC<TeamDetailPanelProps> = ({ member, onClose }) => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <AnimatePresence initial={false} mode="wait">
      {member && (
        <motion.div
          key={member.id}
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, height: 0, marginTop: 0 }}
          animate={{ opacity: 1, height: 'auto', marginTop: 24 }}
          exit={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, height: 0, marginTop: 0 }}
          transition={{ duration: 0.34, ease: [0.22, 1, 0.36, 1] }}
          className="overflow-hidden"
        >
          <div
            role="region"
            aria-label={`Profil lengkap ${member.name}`}
            className="glass-card border border-border bg-white p-6 shadow-card-hover sm:p-8"
          >
            {/* Header Panel Detail Anggota */}
            <div className="flex flex-col justify-between gap-4 border-b border-border pb-6 sm:flex-row sm:items-center">
              <div className="flex items-center gap-4">
                <img
                  src={member.photo}
                  alt={member.name}
                  className="h-16 w-16 rounded-2xl object-cover object-top ring-1 ring-border"
                />
                <div>
                  <p className="text-[11px] uppercase tracking-[0.22em] text-muted">
                    PROFIL ANGGOTA TIM
                  </p>
                  <h3 className="mt-0.5 text-xl font-semibold tracking-tight text-ink sm:text-2xl">
                    {member.name}
                  </h3>
                  <p className="text-sm text-muted">{member.position}</p>
                </div>
              </div>

              <button
                type="button"
                onClick={onClose}
                className="inline-flex items-center gap-2 self-start rounded-full border border-border bg-surface px-4 py-2 text-xs font-semibold text-ink transition hover:border-ink hover:bg-ink hover:text-white sm:self-auto"
              >
                <span>Tutup</span>
                <X className="h-3.5 w-3.5" strokeWidth={1.75} />
              </button>
            </div>

            {/* Grid Tiga Kolom: Education, Career, dan Jobdesk */}
            <div className="mt-6 grid grid-cols-1 gap-4 lg:grid-cols-3">
              {/* Education */}
              <div className="rounded-2xl border border-border bg-surface p-5">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-ink">
                  <GraduationCap className="h-4 w-4 text-ink" strokeWidth={1.6} />
                  <span>Background — Education</span>
                </div>
                <ul className="mt-4 space-y-2.5 text-sm leading-relaxed text-muted">
                  {member.education.map((edu, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-ink" />
                      <span>{edu}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Career */}
              <div className="rounded-2xl border border-border bg-surface p-5">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-ink">
                  <Briefcase className="h-4 w-4 text-ink" strokeWidth={1.6} />
                  <span>Background — Career</span>
                </div>
                <ul className="mt-4 space-y-2.5 text-sm leading-relaxed text-muted">
                  {member.career.map((car, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-ink" />
                      <span>{car}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Jobdesk */}
              <div className="rounded-2xl border border-border bg-surface p-5">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-ink">
                  <ClipboardList className="h-4 w-4 text-ink" strokeWidth={1.6} />
                  <span>Jobdesk & Tanggung Jawab</span>
                </div>
                <ul className="mt-4 space-y-2.5 text-sm leading-relaxed text-muted">
                  {member.jobdesk.map((task, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-ink" strokeWidth={1.75} />
                      <span>{task}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

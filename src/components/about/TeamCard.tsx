import React from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { TeamMember } from '../../types/content';

interface TeamCardProps {
  member: TeamMember;
  isSelected: boolean;
  onSelect: () => void;
}

export const TeamCard: React.FC<TeamCardProps> = ({ member, isSelected, onSelect }) => {
  return (
    <button
      type="button"
      onClick={onSelect}
      aria-expanded={isSelected}
      className={`group flex h-full w-full flex-col rounded-card border p-3.5 text-left transition-all duration-300 ${
        isSelected
          ? 'border-ink bg-white shadow-card-hover ring-1 ring-ink'
          : 'border-border bg-white shadow-card hover:border-neutral-400 hover:shadow-card-hover'
      }`}
    >
      {/* Foto Anggota Tim (Radius 16px sesuai PRD 8.4) */}
      <div className="relative aspect-[4/4.3] w-full overflow-hidden rounded-photo bg-surface">
        <img
          src={member.photo}
          alt={member.name}
          loading="lazy"
          className="h-full w-full object-cover object-top grayscale-[20%] transition-all duration-500 group-hover:scale-[1.03] group-hover:grayscale-0"
        />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/25 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </div>

      {/* Informasi Nama, Posisi & Indikator Expand */}
      <div className="flex flex-1 flex-col justify-between px-1.5 pb-1 pt-4">
        <div>
          <h3 className="text-lg font-semibold tracking-tight text-ink">
            {member.name}
          </h3>
          <p className="mt-1 text-xs leading-relaxed text-muted sm:text-[13px]">
            {member.position}
          </p>
        </div>

        <div className="mt-4 flex items-center justify-between border-t border-border pt-3">
          <span className="text-xs font-medium text-ink">
            {isSelected ? 'Tutup Profil' : 'Lihat Background & Jobdesk'}
          </span>
          <span
            className={`flex h-8 w-8 items-center justify-center rounded-full border transition-colors duration-200 ${
              isSelected
                ? 'border-ink bg-ink text-white'
                : 'border-border bg-surface text-ink group-hover:border-ink'
            }`}
          >
            {isSelected ? (
              <ChevronUp className="h-4 w-4" strokeWidth={1.75} />
            ) : (
              <ChevronDown className="h-4 w-4" strokeWidth={1.75} />
            )}
          </span>
        </div>
      </div>
    </button>
  );
};

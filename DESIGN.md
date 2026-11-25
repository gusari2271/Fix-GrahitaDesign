# Design System — Grahita Design

## Visual Identity
- **Aesthetic:** Modern Minimalist Monochrome + Architectural Glassmorphism
- **Core Rule:** Strictly black, white, and grey across all chrome, controls, borders, badges, and surfaces. Architectural photography is the sole source of color.

## Color Tokens (`src/index.css`)
| Token | Value | Role |
|---|---|---|
| `--bg` | `#FFFFFF` | Primary page ground |
| `--surface` | `#F7F7F7` | Secondary card / inset panel background |
| `--border` | `#E5E5E5` | 1px card borders and dividers |
| `--muted` | `#737373` | Secondary copy, captions, labels |
| `--ink` | `#0A0A0A` | Primary typography, active states, primary buttons |
| `--nav` | `rgba(56, 56, 56, 0.84)` + `blur(20px)` | Floating dark glassmorphic pill navbar |
| `--on-photo` | `#FFFFFF` | Typography and linework over hero photography |

## Typography
- **Font Stack:** `"Century Gothic", "Questrial", "Jost", sans-serif`
- **Hero Display:** Uppercase, `0.26em` tracking, regular weight, paired with a short centered `1px` white rule and thin uppercase category subtitle (DDAP reference).
- **Section Headings:** Semi-bold two-line hierarchy with `#0A0A0A` on line 1 and neutral grey on line 2.
- **Eyebrows:** Small uppercase (`11px–12px`), wide letter-spacing (`0.22em–0.24em`), muted grey, with no leading bullet or dash.

## Core Components
- **Floating Pill Navbar:** Centered rounded-full dark frosted glass bar (`max-w-[920px]`), light logo + company name left, navigation center with translucent active pill, crisp white `Konsultasi` pill button right.
- **Cards:** `#FFFFFF` surface, `1px solid #E5E5E5`, `24px` outer border radius (`rounded-card`), `16px` inner photo radius (`rounded-photo`), subtle elevation shadow.
- **Expandable Timeline:** Numbered circle markers along a `1px` vertical line, active step progress card at top-right, smooth Framer Motion height expansion revealing detailed narrative plus two grey boxes (`Deliverable & Dokumen Keluaran` with checkmarks and `Yang Dibutuhkan dari Klien` with bullets).

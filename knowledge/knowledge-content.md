# Knowledge — Content (plain text for documentation)
# PRJ-20260616-WEB · v1 · for WEB-004 content layer
# EN = site copy direction · ES = notas internas
#
# CURATION RULE (la trampa a evitar): Knowledge is NOT a glossary of methods.
# "What is OEE / 5S" contradicts the site's thesis (methods are commodity).
# An entry earns a full, graphed development only if it has:
#   (a) an angle of its own (not the definition)
#   (b) an anchor in a real case
#   (c) a graphic that genuinely clarifies
#   (d) citable sources
# Architecture: lead with FRAMES (how I think); METHODS & SYSTEMS below as a
# reference shelf. The order itself states the thesis: thinking first, methods
# are commodity.
# Per-entry composition: In short (brief def) · The angle · Seen in (cases) ·
# Graphic · Sources.

================================================================
PAGE INTRO
================================================================
Eyebrow:  Knowledge · how I think about it
H1:       Not definitions. Frames.

Intro:
The methods are on the web; anyone can look up what OEE or SMED means. What's
worth writing down is the angle — why these things fail, when they apply, what
they hide, and how I read them on a real floor. Each entry below leads with
that, ties to a case, and only then points you to the source.

================================================================
PART 1 — FRAMES  (the distinctive core — full + author's graphic)
================================================================

----------------------------------------------------------------
F1 — Cynefin: choose the method by the domain
----------------------------------------------------------------
IN SHORT
Cynefin (Snowden) sorts a situation by the kind of cause-and-effect at play —
clear, complicated, complex, chaotic, plus disorder — and prescribes a
different way of acting in each.

THE ANGLE
Most "method failures" are domain errors. A method built for the complicated
domain — study it, find the right answer, a stopwatch and a board — applied to
a complex one — emergent, interdependent, probe-sense-respond — doesn't fail
because the method is bad. It fails because it's in the wrong domain. This is
the whole reason the Lab exists: once observation became free, the complicated
half of the work got absorbed, and what's left is complex. Knowing which
domain you're in is the first decision, before any tool.

SEEN IN
Case 03 (the cultural resistance was complex, not a complicated-domain fix) ·
Lab opener.

GRAPHIC
The domains, each with one real industrial example: a jammed sensor (clear —
sense, categorize, respond) · a stopwatch time-study (complicated — analyze) ·
adoption and culture (complex — probe, sense, respond) · a line down, a fire
(chaotic — act, then sense). Disorder in the centre: not knowing which domain
you're in.

SOURCES
Snowden & Boone, "A Leader's Framework for Decision Making," HBR, 2007.

----------------------------------------------------------------
F2 — Legibility first: standardize → automate
----------------------------------------------------------------
IN SHORT
The site's spine, as a concept: you can't improve, standardize or automate
what you can't see. Standardization is the act of making an operation legible.

THE ANGLE
Standardize → automate is an order, not a menu. Unified, standardized data is
the precondition for automation, digital twins and reporting anyone trusts;
skip to automation and the project sits on sand. And resistance to a mandated
standard is rational when the thing being changed is still invisible — the fix
isn't to push harder, it's to make it legible first.

SEEN IN
Case 01 (screens) · Case 02 (FANUC) · effectively every case.

GRAPHIC
The chain LEGIBLE → STANDARDIZE → AUTOMATE, with a dashed arrow that jumps
from the start straight to AUTOMATE and snaps in the middle.

SOURCES
Standardization-as-prerequisite literature (field consensus; see Deep
Research brief). // ES: absorbe el artículo actual "Diagnose Before Automating".

----------------------------------------------------------------
F3 — Tacit vs explicit knowledge: why the manual fails
----------------------------------------------------------------
IN SHORT
Explicit knowledge can be written down; tacit knowledge — "we know more than
we can tell" (Polanyi) — lives in hands and judgment and resists codification.
Nonaka & Takeuchi's SECI model describes how one turns into the other.

THE ANGLE
A standard is an attempt to externalize tacit knowledge — and it's always
partial. The drift between the documented method and the real one is usually
tacit knowledge quietly correcting the explicit version. The retiring expert
is tacit knowledge walking out the door. The manual doesn't fail from neglect;
it fails because the most valuable know-how was never explicit to begin with.

SEEN IN
Case 01 (drift between documented and real method) · Lab "the expert who's
about to retire".

GRAPHIC
An iceberg: explicit knowledge above the water (SOPs, work instructions),
tacit below (feel, judgment, the workaround nobody wrote down). Optionally the
SECI spiral.

SOURCES
Polanyi, The Tacit Dimension · Nonaka & Takeuchi, The Knowledge-Creating
Company (SECI).

----------------------------------------------------------------
F4 — Vanity metrics: what OEE hides (Goodhart's law)
----------------------------------------------------------------
IN SHORT
OEE = availability × performance × quality, the standard equipment-
effectiveness number. Goodhart's law: when a measure becomes a target, it
stops being a good measure.

THE ANGLE
The definition is commodity; the value is knowing how it's gamed. Rework
classified as part of the process never touches OEE — the unit still counts as
good — yet it bleeds straight into cost; overtime masks the gap. A green OEE
can hide the exact loss it exists to expose. A metric is only as honest as the
categories underneath it, and the categories are a cultural choice.

SEEN IN
Case 03 (its lesson, generalized).

GRAPHIC
A green OEE gauge beside a rising cost line, with "rework — counted as
process" slipping through the gap between the two.

SOURCES
Nakajima (TPM / OEE origin) · Goodhart's law (Goodhart, 1975; Strathern's
formulation).

----------------------------------------------------------------
F5 — The sociotechnical seam: where projects actually fail
----------------------------------------------------------------
IN SHORT
Sociotechnical systems theory (Tavistock; Trist & Bamforth) holds that work is
a joint technical-and-social system: optimize one half alone and you degrade
the whole.

THE ANGLE
The evidence is consistent: failures live at the interface between technical
design and human adoption, and the human/organizational factors weigh at least
as much as the technical ones — while getting the least planning. This is not
"people win, technology is easy." It's joint causation, with the failure
concentrated in the overlap. In one manufacturing study the organizational
factors outranked the technology itself; in another, the human side appears in
a small fraction of Industry 4.0 research; and the acceptance literature is
clear that technical fit still matters. The lesson is to design for the seam.

SEEN IN
Case 02 (FANUC — the gap between installed and owned) · Case 01 (skeptics who
ended up demanding it).

GRAPHIC
Two overlapping circles — TECHNICAL and HUMAN — with failures concentrated in
the overlap. Data chip: factor ranking 21.3 / 21.0 / 20.9 % (strategy, org,
management) vs 19.0 % (technology).

SOURCES
Trist & Bamforth, 1951 · Sukathong et al., 2021 (SEM, n=212) · Reiman et al.,
2021 (scoping review, 37/336) · Blut et al., 2022 (counterweight).
// ES: aquí viven los datos duros del Deep Research.

----------------------------------------------------------------
F6 — The 70% myth, and resistance as rational information
----------------------------------------------------------------
IN SHORT
The endlessly cited "70% of change initiatives fail."

THE ANGLE
It's a phantom statistic. A citation audit of the most-cited sources found no
valid empirical basis — they cite each other in a loop, and the original
author disowned it. When someone measured properly, results varied wildly by
how "failure" was defined. The deeper point: the field can't even agree how to
measure change failure — and that absence is itself evidence that we're in a
complex domain (back to F1). So resistance gets reframed: it isn't irrationality
to overcome. When you're asked to change something you can't see, distrust is
rational information. The job isn't to defeat resistance — it's to remove its
cause.

SEEN IN
Case 03 (resistance encoded in the metrics) · the Home thesis.

GRAPHIC
The citation loop — a ring of sources pointing at one another (a set of
matryoshka dolls), with no empirical ground underneath.

SOURCES
Hughes, 2011 (Journal of Change Management) · Smith, 2002 · Jones et al., 2018
· McKinsey, 2009 ("The Inconvenient Truth about Change Management").

================================================================
PART 2 — METHODS & SYSTEMS  (reference shelf — full but standard, shorter)
# Anchored to cases, useful for the recruiter (systems literacy), subordinate to Frames.
================================================================

S1 — SMED, and why "seeing" was the real bottleneck
  Angle: the logic (internal vs external setup) was never the hard part —
  observing every changeover was. Seen in: Case 02 · Lab 01. Graphic:
  internal/external timeline → conversion. Source: Shingo.

S2 — The automation pyramid: SCADA vs MES (ISA-95)
  Angle: which layer owns which decision, and why reporting breaks when they're
  confused. Seen in: Case 03 (SCADA reporting). Graphic: the ISA-95 pyramid
  (field → PLC → SCADA → MES → ERP). Source: ISA-95.
  // ES: absorbe el artículo "SCADA vs MES".

S3 — ISO 50001 / EnPI: energy as a measurement discipline
  Angle: the certificate is the visible part; the real engine is committing to
  watch numbers you used to ignore. Seen in: Case 03. Graphic: EnPI baseline
  vs actual + PDCA loop. Source: ISO 50001.

S4 — Flow and the seven wastes (VSM)
  Angle: waste is invisible until the flow is drawn. Seen in: Lab "the layout
  that draws itself". Graphic: value-stream map / spaghetti. Source: Rother &
  Shook. (Optional — most commodity of the shelf.)

================================================================
NOT written as entries (and where they go)
================================================================
- Takt time · capacity · OEE calculation → live in TOOLBOX (the calculators);
  Knowledge links, never redefines.
- 5S → folded into visual management / the screens story, not its own entry.
- 5-Why / A3 → light stub (existing "Shopfloor to A3" article), never a keystone.
- Generic "what is Lean" → no; covered by VSM + standard work.

================================================================
CLOSE  (orbital — points back to where it applies)
================================================================
H2:  Frames are for using, not filing.
Body: Every entry here came out of a real operation and points back into one.
CTA: See them at work → Cases   ·   Where they're heading → Lab

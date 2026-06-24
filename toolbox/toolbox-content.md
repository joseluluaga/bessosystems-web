# Toolbox — Content (plain text for documentation)
# PRJ-20260616-WEB · v1 · for WEB-004 content layer
# EN = site copy direction · ES = notas internas
#
# REFRAME: not a pile of generic calculators ("10 free industrial tools" =
# any site, contradicts the thesis). The Toolbox is legibility you can touch:
# instruments that make an operation legible AND tell you what the number hides.
#
# CURATION RULE: a tool earns a place only if (a) it makes something legible
# and (b) it ties back to a Frame + a Case. Otherwise it's "free tools" noise.
#
# THE SUPERPOWER (design): every calculator outputs a LIVE GRAPHIC that updates
# as you type — the visitor watches their own operation become legible in real
# time. That's the strongest demonstration of the thesis on the whole site:
# they don't read about legibility, they do it, on their numbers.

================================================================
PAGE INTRO
================================================================
Eyebrow:  Toolbox · legibility you can touch
H1:       Tools that make a number honest.

Intro:
A calculator gives you a number. These give you the number — and tell you what
it's hiding and what to look at next. Each one ties back to a frame (the
thinking behind it) and a case (where I used it). Use them now; no sign-up.

================================================================
TIER 1 — INSTRUMENTS THAT MAKE YOU THINK
# The distinctive ones — Frames turned usable. (Knowledge explains; Toolbox applies.)
================================================================

I1 — Cynefin sorter            [BUILT]
  Does: answer five questions about a problem; watch it land on the Cynefin
  map and get the way of acting that fits. Questions = authored judgment,
  stored as data; vanilla JS + live SVG marker.
  Embodies: F1 (Cynefin). Routes "complex" → Agile (iterative value).
  Links: Knowledge F1 · Case 03.

I2 — OEE honesty check         [BUILD NEXT]
  Does: compute OEE, then ask the questions the number won't — "is rework
  counted as process? is overtime masking the gap?" — and show what slips
  through. Case 03, turned into a tool.
  Embodies: F4 (vanity metrics / Goodhart).
  Links: Knowledge F4 · Case 03.

I3 — Automate-readiness check  [BUILD NEXT]
  Does: a short checklist — is it legible? standardized? measured? trusted? —
  returning "ready" or "you're about to build on sand."
  Embodies: F2 (legibility first → standardize → automate).
  Links: Knowledge F2 · Cases 01/02.

================================================================
TIER 2 — CALCULATORS & TEMPLATES
# Direct utility + a one-line criterion layer ("what it hides / look at next").
================================================================

T1 — Takt time calculator       [LIVE]
  Criterion: takt assumes steady demand and uptime — look at the variation and
  the changeovers it smooths over. Live graphic: takt vs cycle, bottleneck lit.
  Frame: flow (S4) · Case: logistics (DHL).

T2 — OEE calculator             [LIVE]
  Criterion: a green OEE can hide rework and overtime — run it through the
  honesty check (I2). Live graphic: the three losses dissected as you type.
  Frame: F4 · Case 03.

T3 — Capacity calculator        [LIVE]
  Criterion: theoretical capacity ≠ real; the constraint decides the line.
  Live graphic: where the bottleneck sits in the flow.
  Frame: flow / theory of constraints · Case 02.

T4 — A3 problem-solving template [PLACEHOLDER]
  Criterion: the discipline is the structure, not the form.
  Frame: A3 / structured problem-solving · Case: (cross-cutting).

T5 — Standard work sheet         [PLACEHOLDER]
  Criterion: a standard externalizes tacit knowledge — always partial; the
  drift is the signal. Frame: F3 (tacit vs explicit) · Case 01.

T6 — SMED split worksheet        [PLACEHOLDER]
  Criterion: internal vs external is the whole game; seeing every changeover
  is the hard part. Frame: S1 (SMED) · Case 02 · Lab 01.

T7 — Checklists                  [PLACEHOLDER]
  Process audit · MES/SCADA readiness (S2) · ISO 50001 readiness (S3).
  Criterion: a checklist is a frame made portable.

================================================================
NOT a tool (and where it goes)
================================================================
- Anything that doesn't make something legible or can't tie to a Frame + Case
  → leave it out. "More calculators" is not the goal.
- Definitions / theory → Knowledge, not here. Toolbox links, never explains.

================================================================
BUILD ROADMAP (vanilla JS, static, GitHub Pages)
================================================================
- NOW (cheap, biggest差): add the criterion line + Frame/Case links to the 3
  live calculators; ship the Cynefin sorter.
- NEXT: OEE honesty check (I2), automate-readiness (I3).
- LATER: templates & checklists; consider an Agile / complex-domain instrument
  (see Code prompt — value-increment planner, safe-to-fail experiment card).

================================================================
CONNECTIVE ROLE
================================================================
The Toolbox is where the chips from Cases, Knowledge and Lab resolve. Every
tool points back to its frame and its case. That closes the web without
diluting the spine: the tool is legibility you can touch.

CLOSE
H2:  Every tool here came from a real problem.
CTA: The thinking behind them → Knowledge   ·   Where I used them → Cases

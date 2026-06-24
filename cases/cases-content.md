# Cases — Content (plain text for documentation)
# PRJ-20260616-WEB · v1 · for WEB-004 content layer
# EN = site copy ready to use · ES = notas internas
# Anonimización: sin nombres de empresa. Context da industria · región · cultura · marco.
# Orden propuesto: 01 screens → 02 FANUC → 03 ISO50001 (apertura limpia → sólido → crescendo).

================================================================
PAGE INTRO (conector inicial)
================================================================

Eyebrow:  Cases · the lens applied
H1:       The same move, in real operations.

Intro:
Names and numbers are left out on purpose — what carries across is the
pattern, not the logo. Each case below started as something nobody could
fully see, in a different industry, country and culture. The work was the
same every time: make the operation legible, and the right change stops
being a leap. What changes is what legibility uncovers — and how the people
around it react once they can finally see.

[IMAGE · page header: wide neutral shot of an assembly line, no identifiable
logos — or the opaque→legible motif from the Home hero]

================================================================
CASE 01 — The standard, where the work happens   (screens / digital IWs)
================================================================

CONTEXT
Appliance / electronics manufacturing · Latin America · high-mix assembly
line with a rotating operator base and a very large spare-parts catalogue.
Work instructions existed — in binders, on a shared drive, in the memory of
the longest-serving operator — but not where they were needed: at each
section of the line, in the moment, for whoever was on shift. Paper
instructions were handed out section by section; they got stained and worn,
and took real effort to distribute and keep current. So the real method
drifted from the documented one, and quality tracked whoever happened to be
working that day.

PROBLEMS IT SURFACED
Documentation that exists but isn't legible at the point of use; the drift
between the documented method and the real one; spare-part identification
(many parts, many codes) with no reliable reference at hand; standard work
treated as paperwork instead of visual management.

TOOLS
standard work · visual management · digital work instructions · Lean · 5S

OUTCOMES & CONCLUSIONS
I put the documentation on screens at each section of the line — every
station showing its current instruction right where the task is done,
updated the moment the method changed. Zero budget: the monitors were pulled
from scrap in the plant's own monitor-production area. People were skeptical
at first; by the end they were asking for it. They leaned on it hardest for
spare parts — checking features and part codes against the screen — and began
flagging wrong documentation themselves, which pushed the team into
structured, shared work instead of private know-how. The paper that used to
stain and wear was gone; the line looked clean, ordered, deliberate — and
stayed that way. The client's external audits read the change as
9001-compliant. The lesson under all of it: the resistance was never to
change — it was to changing something invisible. Make the standard visible,
literally at the post, and the same people who resisted start demanding it.

GO DEEPER
Knowledge → standard work · visual management · tacit vs explicit knowledge
Lab → AI-drafted and auto-updated instructions; vision to check method adherence

IMAGES
- Context: a line section with a monitor at the post showing an instruction.
- Outcome (before/after): stained paper sheet ↔ the same instruction clean on screen.
- Outcome: the clean, ordered 5S line.

================================================================
CASE 02 — Automation the floor could actually run   (FANUC cell)
================================================================
# ES: borrador — Facundo tiene material local; reemplazar/afinar.

CONTEXT
Appliance / electronics manufacturing · Latin America · high-mix plant
running ~54 product launches a year, with an established line and a rotating
operator base. A new FANUC robotic cell had to enter that rhythm. The risk
was never the robot — it was everything around it: a cell the floor couldn't
run, sitting on a process that changed every few weeks.

PROBLEMS IT SURFACED
A cell the floor couldn't run on its own; changeover discipline across dozens
of launches; standard work for a rotating operator base; the gap between
*installed* and *owned*.

TOOLS
FANUC programming · cell layout · safety / risk · SMED · standard work

OUTCOMES & CONCLUSIONS
I took the cell end to end — layout, robot programming, the safety envelope,
operator training — with one goal beyond "it works": make the cell legible to
the people who'd live with it. What it does, where it stops, how to recover
it, how to change it over for the next product. Automation that's understood
is automation that survives the next launch. The cell became part of the
floor's routine instead of an island only engineering could touch.

GO DEEPER
Knowledge → standard work & SMED
Lab → AI-assisted changeover & vision on the cell

IMAGES
- Context/lead: FANUC robot arm mid-operation, safety fencing visible.
- Outcome: operator at the cell HMI, or a training moment.
- Optional: cell layout diagram.

================================================================
CASE 03 — The metric that was hiding the problem   (ISO 50001 → OEE → cost → culture)
================================================================
# ES: este es el crescendo. Anonimizar fuerte (crítica cultural a empleador).

CONTEXT
Building materials · Europe · an energy-intensive, established plant with a
traditional manufacturing culture — one that saw itself as a leader of
change. I led the plant through ISO 50001 certification. Under the
certificate, an energy management system is really a discipline of
measurement: you commit to watching numbers you used to ignore.

PROBLEMS IT SURFACED
A vanity OEE that looked healthy; rework formally defined as part of the
standard process, so it never counted as a loss; cost masked by overtime;
and beneath all of it, an implicit cultural resistance dressed as
change-leadership. (Pull that thread and more incoherences follow.)

TOOLS
ISO 50001 / EnPI · OEE (and how it's gamed) · cost & SCADA analysis ·
Cynefin (to read the cultural complexity)

OUTCOMES & CONCLUSIONS
The energy discipline is what pulled the thread. Watching consumption and
cost against output, the production figures stopped adding up: the OEE was
green, but the costs didn't behave like a green OEE does. Underneath, rework
was defined as part of the standard process — so a reworked unit still counted
as good and on-time, and OEE never saw it. Production leaned on that rework,
plus overtime, to hit its targets. The rework never touched the metric
everyone trusted; it quietly touched the cost line. Fixing the metric was the
easy part. The hard part was what the metric protected: rework-as-process and
overtime-as-normal weren't accidents — they were how a traditional culture
preserved the status quo while calling itself a precursor of change. The
resistance was never stated; it was encoded — in the categories, in the
metrics, in what got counted as success. Making energy legible exposed that
the OEE wasn't; making the OEE legible exposed the cost; the cost exposed the
culture. Each layer of legibility uncovered the next. The most stubborn
resistance to change is the kind that describes itself as leading it —
invisible by design.

GO DEEPER
Knowledge → what OEE hides · metrics that lie · ISO 50001/EnPI · Cynefin & resistance
Lab → cross-data anomaly detection (energy + production + cost) to surface incoherences automatically

IMAGES
- Context: an energy dashboard / SCADA consumption trend, or an industrial
  energy meter — neutral, no logos.
- Conceptual: "layers of legibility" diagram — energy → OEE → cost → culture,
  each layer uncovering the next. (Rendered in the mockup.)
- Optional: a green OEE gauge beside a rising cost line — the contradiction in one image.

================================================================
FORWARD BAND (bridge to Lab)
================================================================
H2:  Each of these was made legible by hand.
Sub: Same order, new tools. The Lab is where AI extends these cases —
     without skipping the step that makes it safe.
CTA: See the Lab →

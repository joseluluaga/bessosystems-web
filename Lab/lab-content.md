# Lab — Content (plain text for documentation)
# PRJ-20260616-WEB · v1 · for WEB-004 content layer
# Purpose: substance/base for building the fictional concept videos.
# EN = site copy direction · ES = notas internas
# Framing rule: realism inside the video; honesty in the frame.
#   Each video = "a vision of how this could look — illustrative, not a deployed system."
#   Verbs in conditional ("AI would flag / could surface"), on-screen numbers tagged "illustrative output".

================================================================
PART 1 — CONCEPTUAL OPENER
================================================================

Eyebrow:  Lab · applied experiments
H1:       The methods still work. The ground moved.

Body:
Everything on this site so far points one way: make the operation legible,
standardize it, and the right change becomes obvious. So suppose, for a
moment, that you've done it — the whole floor standardized, documented,
measured. What then? Do you just run SMED, Kaizen and 5S the way they were
always run?

The methods aren't the problem. They're sound. But they were built for a
complicated world — one where cause and effect are knowable if you study
them, where a stopwatch and a board are enough to see what's happening. That
world is shrinking. The floor now generates more data than anyone can read,
the parts interact in ways no single person tracks, and observation itself —
the thing that used to cost an engineer a clipboard and a full shift — is
becoming continuous and almost free.

That isn't a complicated environment anymore. In Cynefin's terms it's a
complex one: emergent, interdependent, where the answer isn't deduced but
probed for. Running a complicated-world method, unchanged, on a complex-world
floor is using the right tool in the wrong domain.

So here's what the Lab is. Not "AI replaces the method." The method stays.
What AI changes is the domain the method operates in. SMED is still SMED — but
the bottleneck used to be *seeing* the changeover (timing it, noting it by
hand), and that part is now free and continuous. So the human work slides to
where the method never reached: the complex half — the emergent, the
relational, the why. AI eats the complicated half of the method and leaves
the complex half exposed. That half was always the one that mattered; no one
ever had time to look at it.

Each experiment below is one method, moved into the new environment. The
video is a vision of how it could look. What it shows isn't the technology —
it's where the thinking goes once the technology is doing the watching.

================================================================
PART 2 — THREE ANCHORED EXPERIMENTS
# Cada uno: un método de siempre, en el entorno nuevo, resonando con un caso real.
================================================================

----------------------------------------------------------------
EXPERIMENT 01 — SMED, when every changeover is seen
# resuena con: Cases 02 (FANUC / changeover) — high-mix line
----------------------------------------------------------------

THE METHOD, AND WHAT CHANGED
SMED separates internal setup (machine stopped) from external setup (can be
prepped while running) to cut changeover time. The historical bottleneck was
never the logic — it was the seeing: one engineer with a stopwatch could
study a handful of changeovers a month and had to generalize from a tiny
sample.

QUESTION
What does SMED become when every changeover on the line is observed,
continuously, with no stopwatch and no sampling?

INDUSTRIAL CONTEXT
A high-mix line that changes format constantly — dozens of products, a
changeover every few hours. Operators swap tooling, walk for parts, wait for
a setting to settle, adjust by feel. The traditional study catches a few of
these; the other hundreds run unobserved, and that's where the real
variation lives.

METHOD IN THE NEW ENVIRONMENT
A camera watches every changeover. The analysis classifies each action as
internal or external automatically, across hundreds of runs, and surfaces the
pattern no sample could: which steps could move off-line, where the variation
clusters, which changeover is the outlier and how it differs. The engineer
stops timing and starts deciding.

PROTOTYPE — THE VIDEO  (creative brief)
Scene: a side/overhead view of a changeover in progress. As it runs, segments
light up — amber for "internal" (machine stopped, clock running), grey for
"external" (could have been prepped while the line ran). A side panel tallies,
across many runs, the time that could move off-line. Badge in the corner:
"illustrative output." The reveal: the biggest loss isn't the slow step
everyone watches — it's a small, ten-second wait that repeats on every single
changeover, invisible precisely because no one ever watched them all at once.
Close on the human: the engineer beside the operator, asking why that wait
happens — and the operator pointing to a tool stored on the far side of the
floor. The camera found the pattern; only the operator had the reason.

WHAT STAYS HUMAN
The camera can see *that* the wait repeats; only the operator knows *why* — a
tool kept across the floor, a part that always arrives late, a habit with a
history. Deciding what to change, and earning the trust to change it, stays
human. The machine measures; the person understands.

LIMITS
This doesn't prove a working vision system, and the figures aren't measured
from this footage — they're illustrative. It shows where the analysis would
point, not a result it produced.

WHAT IT SHOWS
That the method survives intact. What changes is that observation becomes
total and free, and the engineer's attention moves from counting to the
complex "why."

GO DEEPER
Tools → SMED worksheet · takt time
Knowledge → SMED · internal/external setup · Cynefin

----------------------------------------------------------------
EXPERIMENT 02 — Standard work that can see whether it's followed
# resuena con: Cases 01 (digital work instructions on the line)
----------------------------------------------------------------

THE METHOD, AND WHAT CHANGED
Standard work is the documented best-known method. The historical bottleneck:
you write it, post it, and hope. Checking whether it's actually followed means
an auditor with a checklist, now and then — a snapshot, not a view.

QUESTION
What happens when the standard can see whether it's being followed — and tell
you why it isn't?

INDUSTRIAL CONTEXT
A manual assembly station with the documented method on a screen at the post
(the outcome of Case 01). The instruction is visible, but the real method
still drifts: a step skipped on nights, an order swapped, a quiet workaround
that everyone uses and no one wrote down.

METHOD IN THE NEW ENVIRONMENT
The system compares the observed sequence against the documented standard,
continuously — not to police the worker, but to surface the drift and its
pattern: this step is always skipped on the night shift; that workaround
appears whenever a particular part is involved. Drift becomes data about the
standard, not a verdict on the person.

PROTOTYPE — THE VIDEO  (creative brief)
Scene: an operator working a station; the documented steps shown as a quiet
checklist beside them. As they work, the observed steps tick against the
standard. A divergence appears — not a red "violation" alarm, but an amber
"drift: step 3 done before step 2." A panel notes the pattern across shifts.
Badge: "illustrative." The reveal: the workaround isn't indiscipline — it's
the operator silently correcting a flaw in the documented standard. The drift
was telling you the standard was wrong. Close on the human: the engineer
rewriting the standard *with* the operator who found the better way.

WHAT STAYS HUMAN
Deciding whether a drift is a problem to correct or an improvement to adopt;
the standard is a living agreement, not a cage. And the relationship that
makes an operator willing to *show* you the workaround instead of hiding it
when the screen lights up.

LIMITS
Illustrative, not real adherence detection. The point is the reframe — drift
as signal, not sin — not a working monitor.

WHAT IT SHOWS
Visual management's natural next step: the standard that reads itself. And
that the human role shifts from enforcing the standard to curating it.

GO DEEPER
Tools → standard work template
Knowledge → standard work · visual management · tacit vs explicit knowledge

----------------------------------------------------------------
EXPERIMENT 03 — Reading the metrics together
# resuena con: Cases 03 (ISO 50001 → OEE → cost → culture) — the strongest
----------------------------------------------------------------

THE METHOD, AND WHAT CHANGED
Operational metrics — OEE, energy, cost, quality — are traditionally read on
separate dashboards, by separate owners. The historical bottleneck: no one
holds all of them at once, so the incoherences *between* them stay invisible.
(This is exactly how a vanity OEE can hide a cost problem.)

QUESTION
What does an analysis see when it reads all the metrics together — the way no
single dashboard, and no single person, ever does?

INDUSTRIAL CONTEXT
A control room. Three screens: OEE, green and steady. Energy, flat. Cost,
creeping up. Three owners, three views, nothing connecting them — and a loss
living in the gap between them.

METHOD IN THE NEW ENVIRONMENT
The analysis reads the metrics jointly and flags the contradiction a human
would need months and a hunch to find: OEE says healthy, cost says otherwise
— and here is the rework, classified as process, sitting in the space between
the two, touching cost but never OEE.

PROTOTYPE — THE VIDEO  (creative brief)
Scene: three dashboards, each calm and green on its own. A line is drawn
connecting them; the contradiction lights up — "OEE healthy · cost rising ·
rework counted as process, not loss." A caption surfaces: "the metric was
hiding the problem." Badge: "illustrative." The reveal: the number everyone
trusted was the one concealing the loss — the lesson of Case 03, generalized
into a thing the analysis can spot in a minute instead of a quarter. Close on
the human: the analysis can flag the incoherence; only a person can ask why
it was built that way — and face the culture that wanted it hidden.

WHAT STAYS HUMAN
Confronting what the incoherence *means*: the political and cultural work of
changing what the metric was protecting. The machine finds the contradiction;
the human navigates the complexity — and the resistance — of fixing it.

LIMITS
Illustrative, not a real anomaly engine. It demonstrates the kind of question
worth asking, not a built detector.

WHAT IT SHOWS
The highest-value move of all: making the *relationships between metrics*
legible. And that the human work becomes interpreting and confronting, not
calculating.

GO DEEPER
Tools → OEE calculator
Knowledge → what OEE hides · metrics that lie · Cynefin & resistance

================================================================
PART 3 — OTHER POSSIBLE APPLICATIONS
# Mismo marco, terreno nuevo. Cada una: Context · Problem · What the analysis would do · Go deeper.
# Sin coletilla defensiva — ficción de algo que pronto será trivial.
================================================================

----------------------------------------------------------------
A — The layout that draws itself
----------------------------------------------------------------
CONTEXT — A floor where people and material move all day. The layout was set
years ago, drawn once, and never questioned since.
PROBLEM — Motion and transport waste are real but invisible: nobody has
mapped the actual paths, only the idealized layout on the wall.
WHAT THE ANALYSIS WOULD DO — Movement over a shift becomes a heat-map; the
spaghetti diagram draws itself; the trips that repeat needlessly stand out.
The reveal: the shortest route on the drawing is the longest one in practice.
VIDEO — overhead floor, paths accumulating into a glowing tangle, then the
one corridor that carries half the traffic lighting up.
GO DEEPER — Tools → (flow/VSM) · Knowledge → VSM · flow · motion waste

----------------------------------------------------------------
B — The expert who's about to retire
----------------------------------------------------------------
CONTEXT — The operator everyone asks when something goes wrong. Thirty years
of feel that lives only in their hands. Retirement is coming.
PROBLEM — When they leave, the knowledge leaves. It was never legible because
it's tacit — you can't write down what you can't quite articulate.
WHAT THE ANALYSIS WOULD DO — The system observes the expert handling an
anomaly — the micro-decisions, the small corrections — and turns the recurring
pattern into a draft standard the next person can learn from. Tacit made
explicit, by observation. The reveal: the "instinct" was a consistent,
learnable method all along; it just was never visible.
WHAT STAYS HUMAN — The expert's judgment in the genuinely novel case. The
system captures the repeatable and frees the human for the truly new.
VIDEO — the veteran's hands working; subtle moves getting named and sequenced
into a clean standard beside them.
GO DEEPER — Tools → standard work · Knowledge → tacit vs explicit knowledge · SECI

----------------------------------------------------------------
C — The floor that flags its own conditions
----------------------------------------------------------------
CONTEXT — A floor where conditions drift: a spill, an aisle blocked, a guard
left open, a parameter creeping out of range.
PROBLEM — Hazards and drifts are caught only when someone happens to look. The
near-miss that precedes the accident goes unrecorded.
WHAT THE ANALYSIS WOULD DO — The environment surfaces emerging *conditions* —
watching the floor's state, not the workers — so a drift is caught while it's
still a condition and not yet an incident. The reveal: the accident had a
visible runway that nobody was watching.
WHAT STAYS HUMAN — Judgment of what matters, and the culture to act on a flag
without blame. (Conditions and process, never monitoring people.)
VIDEO — a wide floor, calm, with one quiet amber mark forming where a
condition is drifting — long before anything happens.
GO DEEPER — Knowledge → safety · near-miss · sociotechnical systems

================================================================
PART 4 — CLOSE  (bridge to About)
================================================================
H2:  What the Lab is really about
Body: Not that AI is coming for the floor — but where human attention goes
once it arrives. The methods endure. Observation becomes free. And the part
that was always hardest — the complex, human half — is finally the part we
have time to think about.
CTA: Where this way of seeing comes from → About

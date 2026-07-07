// calc.js — BESSÓ Systems live calculators
// Four calculators: OEE · Takt · Capacity · EnPI
// Each reads inputs from its card and updates an inline SVG live.

(function () {
  "use strict";

  // ── helpers ──────────────────────────────────────────────────────────────
  function num(el, fallback) {
    const v = parseFloat(el ? el.value : NaN);
    return isNaN(v) ? fallback : v;
  }
  function clamp(v, lo, hi) { return Math.max(lo, Math.min(hi, v)); }
  function pct(v) { return clamp(v, 0, 100); }
  function fmt1(v) { return v.toFixed(1); }

  // ── OEE ──────────────────────────────────────────────────────────────────
  function initOEE(card) {
    const svg   = card.querySelector('.viz svg');
    const iA    = card.querySelector('[data-ci="A"]');
    const iP    = card.querySelector('[data-ci="P"]');
    const iQ    = card.querySelector('[data-ci="Q"]');
    const res   = card.querySelector('.cresult');
    if (!svg || !iA) return;

    function update() {
      const A = pct(num(iA, 85)) / 100;
      const P = pct(num(iP, 90)) / 100;
      const Q = pct(num(iQ, 95)) / 100;
      const oee = A * P * Q * 100;

      // SVG bars (viewBox 120 90): A · P · Q stacked, OEE result bar
      const W = 92; // usable bar width
      const barA  = svg.getElementById('bA');
      const barP  = svg.getElementById('bP');
      const barQ  = svg.getElementById('bQ');
      const barOEE= svg.getElementById('bOEE');
      const lblOEE= svg.getElementById('lOEE');
      if (barA) barA.setAttribute('width', (A * W).toFixed(1));
      if (barP) barP.setAttribute('width', (A * P * W).toFixed(1));
      if (barQ) barQ.setAttribute('width', (oee / 100 * W).toFixed(1));
      if (barOEE) barOEE.setAttribute('width', (oee / 100 * W).toFixed(1));
      if (lblOEE) lblOEE.textContent = fmt1(oee) + '%';
      if (res) res.innerHTML = 'OEE <b>' + fmt1(oee) + '%</b>';
    }
    [iA, iP, iQ].forEach(i => i && i.addEventListener('input', update));
    update();
  }

  // ── Takt ─────────────────────────────────────────────────────────────────
  function initTakt(card) {
    const svg  = card.querySelector('.viz svg');
    const iT   = card.querySelector('[data-ci="time"]');
    const iD   = card.querySelector('[data-ci="demand"]');
    const res  = card.querySelector('.cresult');
    if (!svg || !iT) return;

    function update() {
      const t = Math.max(1, num(iT, 480));
      const d = Math.max(1, num(iD, 60));
      const takt = t / d;           // minutes per unit

      const W = 92;
      const barT = svg.getElementById('bTakt');
      const lblT = svg.getElementById('lTakt');
      const maxT = 20;              // scale: 20 min/unit fills bar
      const w = clamp(takt / maxT * W, 4, W);
      if (barT) barT.setAttribute('width', w.toFixed(1));
      if (lblT) lblT.textContent = fmt1(takt) + ' min/u';
      if (res) {
        const unit = takt < 1 ? fmt1(takt * 60) + ' s/u' : fmt1(takt) + ' min/u';
        res.innerHTML = 'Takt <b>' + unit + '</b>';
      }
    }
    [iT, iD].forEach(i => i && i.addEventListener('input', update));
    update();
  }

  // ── Capacity ─────────────────────────────────────────────────────────────
  function initCapacity(card) {
    const svg  = card.querySelector('.viz svg');
    const iC   = [
      card.querySelector('[data-ci="ct1"]'),
      card.querySelector('[data-ci="ct2"]'),
      card.querySelector('[data-ci="ct3"]'),
    ];
    const res  = card.querySelector('.cresult');
    if (!svg || !iC[0]) return;

    function update() {
      const cts  = iC.map(i => Math.max(0.1, num(i, 0)));
      const maxCT= Math.max(...cts);
      const bIds = ['bC1','bC2','bC3'];
      const lIds = ['lC1','lC2','lC3'];
      const W = 80;

      cts.forEach((ct, idx) => {
        const bar = svg.getElementById(bIds[idx]);
        const lbl = svg.getElementById(lIds[idx]);
        const h   = (ct / maxCT * W).toFixed(1);
        if (bar) {
          bar.setAttribute('height', h);
          bar.setAttribute('y', (80 - parseFloat(h)).toFixed(1));
          bar.setAttribute('fill', ct === maxCT ? '#f2b01e' : '#86b8e8');
        }
        if (lbl) lbl.textContent = fmt1(ct);
      });
      if (res) {
        const cap = maxCT > 0 ? fmt1(60 / maxCT) : '—';
        res.innerHTML = 'Bottleneck <b>' + fmt1(maxCT) + ' min</b> → ' + cap + ' u/h';
      }
    }
    iC.forEach(i => i && i.addEventListener('input', update));
    update();
  }

  // ── EnPI ─────────────────────────────────────────────────────────────────
  function initEnPI(card) {
    const svg  = card.querySelector('.viz svg');
    const iE   = card.querySelector('[data-ci="energy"]');
    const iU   = card.querySelector('[data-ci="units"]');
    const iRef = card.querySelector('[data-ci="ref"]');
    const res  = card.querySelector('.cresult');
    if (!svg || !iE) return;

    function update() {
      const E   = Math.max(0.01, num(iE, 1000));
      const U   = Math.max(1,    num(iU, 100));
      const ref = Math.max(0.01, num(iRef, 12));
      const enpi = E / U;
      const gapPct = ((enpi - ref) / ref * 100);

      const W = 92;
      const barE   = svg.getElementById('bEnPI');
      const barRef = svg.getElementById('bRef');
      const lblE   = svg.getElementById('lEnPI');
      const lblGap = svg.getElementById('lGap');

      const scale = Math.max(enpi, ref) * 1.2;
      if (barE)   barE.setAttribute('width', (enpi / scale * W).toFixed(1));
      if (barRef) barRef.setAttribute('width', (ref  / scale * W).toFixed(1));
      if (lblE)   lblE.textContent = fmt1(enpi);
      if (lblGap) {
        lblGap.textContent = (gapPct > 0 ? '+' : '') + fmt1(gapPct) + '%';
        lblGap.setAttribute('fill', gapPct > 0 ? '#c0463a' : '#2f8a52');
      }
      if (res) {
        const sign = gapPct > 0 ? '▲' : '▼';
        res.innerHTML = 'EnPI <b>' + fmt1(enpi) + ' kWh/u</b> <span style="color:' + (gapPct>0?'#c0463a':'#2f8a52') + '">' + sign + fmt1(Math.abs(gapPct)) + '%</span>';
      }
    }
    [iE, iU, iRef].forEach(i => i && i.addEventListener('input', update));
    update();
  }

  // ── boot ─────────────────────────────────────────────────────────────────
  document.querySelectorAll('[data-calc="oee"]').forEach(initOEE);
  document.querySelectorAll('[data-calc="takt"]').forEach(initTakt);
  document.querySelectorAll('[data-calc="capacity"]').forEach(initCapacity);
  document.querySelectorAll('[data-calc="enpi"]').forEach(initEnPI);

})();

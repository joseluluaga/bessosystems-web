/* ================================================================
   BESSO Systems — calc.js
   Engineering calculators for the Toolbox page.
   Functions: calcTaktTime(), calcOEE(), calcCapacity()
================================================================ */

/* --- Helper: render result into a .calc-result container --- */
function renderResult(id, label, value, unit, note) {
  var el = document.getElementById(id);
  if (!el) return;
  el.innerHTML =
    '<div class="r-label">' + label + '</div>' +
    '<div><span class="r-value">' + value + '</span>' +
    (unit ? '<span class="r-unit">' + unit + '</span>' : '') + '</div>' +
    (note ? '<div class="r-note">' + note + '</div>' : '');
}

function renderEmpty(id, msg) {
  var el = document.getElementById(id);
  if (el) el.innerHTML = '<div class="r-empty">' + (msg || 'Enter values above.') + '</div>';
}

/* ----------------------------------------------------------------
   TAKT TIME CALCULATOR
   Formula: Takt Time = Net Available Time / Customer Demand
   Inputs:
     tt-shift   — shift duration (minutes)
     tt-breaks  — planned breaks + downtime (minutes)
     tt-demand  — customer demand (units per shift)
   Output: #tt-result
---------------------------------------------------------------- */
function calcTaktTime() {
  var shift  = parseFloat(document.getElementById('tt-shift').value)  || 0;
  var breaks = parseFloat(document.getElementById('tt-breaks').value) || 0;
  var demand = parseFloat(document.getElementById('tt-demand').value) || 0;

  if (shift <= 0)           { renderEmpty('tt-result', 'Enter shift duration.'); return; }
  if (demand <= 0)          { renderEmpty('tt-result', 'Enter demand to calculate.'); return; }
  if (breaks >= shift)      { renderEmpty('tt-result', 'Breaks must be less than shift duration.'); return; }

  var netSec = (shift - breaks) * 60;
  var takt   = netSec / demand;

  var display;
  if (takt >= 60) {
    var m = Math.floor(takt / 60);
    var s = (takt % 60).toFixed(0);
    display = m + 'm ' + s + 's';
  } else {
    display = takt.toFixed(1) + 's';
  }

  renderResult(
    'tt-result',
    'Takt Time',
    display,
    'per unit',
    'Net time: ' + (shift - breaks) + ' min &nbsp;·&nbsp; Demand: ' + demand + ' units/shift'
  );
}

/* ----------------------------------------------------------------
   OEE CALCULATOR
   Formula: OEE = Availability × Performance × Quality
   Inputs:
     oee-a — Availability (%)
     oee-p — Performance (%)
     oee-q — Quality (%)
   Output: #oee-result
---------------------------------------------------------------- */
function calcOEE() {
  var a = parseFloat(document.getElementById('oee-a').value) || 0;
  var p = parseFloat(document.getElementById('oee-p').value) || 0;
  var q = parseFloat(document.getElementById('oee-q').value) || 0;

  if (a <= 0 || p <= 0 || q <= 0) { renderEmpty('oee-result', 'Enter A, P and Q values.'); return; }

  var oee = (a / 100) * (p / 100) * (q / 100) * 100;

  var color, label;
  if (oee >= 85)      { color = 'var(--green)'; label = 'World Class (≥85%)'; }
  else if (oee >= 60) { color = 'var(--amber)'; label = 'Typical (60–84%)'; }
  else                { color = 'var(--red)';   label = 'Below target (<60%)'; }

  var el = document.getElementById('oee-result');
  if (!el) return;
  el.innerHTML =
    '<div class="r-label">OEE</div>' +
    '<div><span class="r-value" style="color:' + color + '">' + oee.toFixed(1) + '</span>' +
    '<span class="r-unit">%</span></div>' +
    '<div class="r-note">' + label + ' &nbsp;·&nbsp; A:' + a + '% × P:' + p + '% × Q:' + q + '%</div>';
}

/* ----------------------------------------------------------------
   CAPACITY CALCULATOR
   Formula: Capacity = (Machines × Shifts × Hours × 3600) / Cycle Time
   Inputs:
     cap-machines — number of machines / workstations
     cap-shifts   — shifts per day
     cap-hours    — hours per shift
     cap-cycle    — cycle time per unit (seconds)
   Output: #cap-result
---------------------------------------------------------------- */
function calcCapacity() {
  var machines = parseFloat(document.getElementById('cap-machines').value) || 1;
  var shifts   = parseFloat(document.getElementById('cap-shifts').value)   || 1;
  var hours    = parseFloat(document.getElementById('cap-hours').value)    || 8;
  var cycle    = parseFloat(document.getElementById('cap-cycle').value)    || 0;

  if (cycle <= 0) { renderEmpty('cap-result', 'Enter cycle time to calculate.'); return; }

  var totalSec  = machines * shifts * hours * 3600;
  var perDay    = Math.floor(totalSec / cycle);
  var perWeek   = perDay * 5;

  renderResult(
    'cap-result',
    'Daily Capacity',
    perDay.toLocaleString(),
    'units/day',
    perWeek.toLocaleString() + ' units/week &nbsp;·&nbsp; ' +
    machines + ' machine(s) × ' + shifts + ' shift(s) × ' + hours + 'h'
  );
}

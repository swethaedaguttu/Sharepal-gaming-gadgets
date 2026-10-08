const DAY_MS = 86400000;

export const startOfDay = (d) => new Date(d.getFullYear(), d.getMonth(), d.getDate());

export const isSameDay = (a, b) => !!a && !!b && a.getTime() === b.getTime();

/** Inclusive number of rental days. A single date counts as one day; invalid ranges count as zero. */
export function rentalDays(start, end) {
  if (!start) return 0;
  const last = end || start;
  const diff = Math.round((startOfDay(last) - startOfDay(start)) / DAY_MS) + 1;
  return diff > 0 ? diff : 0;
}

const inr = new Intl.NumberFormat('en-IN', { maximumFractionDigits: 2 });
export const formatINR = (n) => `₹${inr.format(n)}`;

export const formatShortDate = (d) =>
  d ? d.toLocaleDateString('en-IN', { day: 'numeric', month: 'short' }) : '';

export const formatLongDate = (d) =>
  d.toLocaleDateString('en-IN', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });

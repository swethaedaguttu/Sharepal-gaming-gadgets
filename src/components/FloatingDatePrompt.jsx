import { CalendarClock } from './Icons.jsx';
import { useRental } from '../context/RentalContext.jsx';
import { formatShortDate } from '../lib/pricing.js';

export default function FloatingDatePrompt() {
  const { range, days, openPicker, pickerOpen } = useRental();
  if (pickerOpen) return null;
  return (
    <button type="button" className={`floating-pill ${days ? 'is-set' : ''}`} data-date-trigger onClick={() => openPicker()}>
      <CalendarClock width={16} height={16} />
      {days
        ? <span>{formatShortDate(range.start)} – {formatShortDate(range.end || range.start)} · {days} {days === 1 ? 'day' : 'days'} <u>Change</u></span>
        : <span>Select rental dates to view prices</span>}
    </button>
  );
}

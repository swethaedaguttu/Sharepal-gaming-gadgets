import { useEffect, useRef, useState } from 'react';
import Calendar from './Calendar.jsx';
import { useRental } from '../context/RentalContext.jsx';
import { formatShortDate, rentalDays } from '../lib/pricing.js';

export default function DatePicker() {
  const { range, applyRange, closePicker, clearRange } = useRental();
  const [draft, setDraft] = useState(range);
  const ref = useRef(null);
  const days = rentalDays(draft.start, draft.end);

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && closePicker();
    const onDown = (e) => {
      if (ref.current && !ref.current.contains(e.target) && !e.target.closest('[data-date-trigger]')) closePicker();
    };
    document.addEventListener('keydown', onKey);
    document.addEventListener('mousedown', onDown);
    ref.current?.querySelector('button:not(:disabled)')?.focus({ preventScroll: true });
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('mousedown', onDown);
    };
  }, [closePicker]);

  return (
    <>
      <div className="picker-backdrop" onClick={closePicker} />
      <div className="picker" ref={ref} role="dialog" aria-label="Select rental dates">
        <div className="picker__head">
          <div>
            <h2 className="picker__title">Select rental dates</h2>
            <p className="picker__hint">
              {!draft.start && 'Choose a delivery date, then a pickup date.'}
              {draft.start && !draft.end && `Delivery ${formatShortDate(draft.start)} · now choose a pickup date, or apply for a single day.`}
              {draft.start && draft.end && `${formatShortDate(draft.start)} → ${formatShortDate(draft.end)}`}
            </p>
          </div>
          <button type="button" className="picker__close" onClick={closePicker} aria-label="Close date picker">×</button>
        </div>
        <Calendar start={draft.start} end={draft.end} onChange={setDraft} />
        <div className="picker__foot">
          <button
            type="button"
            className="picker__clear"
            onClick={() => {
              setDraft({ start: null, end: null });
              clearRange();
            }}
          >
            Clear
          </button>
          <button
            type="button"
            className="btn btn--navy"
            disabled={!days}
            onClick={() => applyRange(draft)}
          >
            {days ? `Apply · ${days} ${days === 1 ? 'day' : 'days'}` : 'Apply'}
          </button>
        </div>
      </div>
    </>
  );
}

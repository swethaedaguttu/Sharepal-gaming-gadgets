import { useMemo, useState } from 'react';
import { ChevronLeft, ChevronRight } from './Icons.jsx';
import { formatLongDate, isSameDay, startOfDay } from '../lib/pricing.js';

const WEEKDAYS = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

function Month({ year, month, today, start, end, hover, onPick, onHover, className }) {
  const label = new Date(year, month, 1).toLocaleDateString('en-IN', { month: 'long', year: 'numeric' });
  const lead = new Date(year, month, 1).getDay();
  const total = new Date(year, month + 1, 0).getDate();
  const cells = [];
  for (let i = 0; i < lead; i++) cells.push(<span key={`b${i}`} className="cal__blank" />);
  const rangeEnd = end || (start && hover && hover >= start ? hover : null);

  for (let day = 1; day <= total; day++) {
    const date = new Date(year, month, day);
    const disabled = date < today;
    const isStart = isSameDay(date, start);
    const isEnd = isSameDay(date, end);
    const inRange = start && rangeEnd && date > start && date < rangeEnd;
    const isRangeEnd = rangeEnd && isSameDay(date, rangeEnd) && !isStart;
    const cls = [
      'cal__day',
      isStart && 'is-start',
      (isEnd || isRangeEnd) && 'is-end',
      inRange && 'is-range',
      isStart && rangeEnd && !isSameDay(start, rangeEnd) && 'has-range',
      isSameDay(date, today) && 'is-today',
    ].filter(Boolean).join(' ');
    cells.push(
      <button
        key={day}
        type="button"
        className={cls}
        disabled={disabled}
        aria-label={formatLongDate(date)}
        aria-pressed={isStart || isEnd}
        onClick={() => onPick(date)}
        onMouseEnter={() => onHover(date)}
      >
        {day}
      </button>
    );
  }
  return (
    <div className={`cal__month ${className || ''}`}>
      <div className="cal__title">{label}</div>
      <div className="cal__grid" role="group" aria-label={label}>
        {WEEKDAYS.map((w) => (
          <span key={w} className="cal__wd">{w}</span>
        ))}
        {cells}
      </div>
    </div>
  );
}

export default function Calendar({ start, end, onChange }) {
  const today = useMemo(() => startOfDay(new Date()), []);
  const [view, setView] = useState({ y: (start || today).getFullYear(), m: (start || today).getMonth() });
  const [hover, setHover] = useState(null);

  const shift = (delta) => {
    const d = new Date(view.y, view.m + delta, 1);
    if (d < new Date(today.getFullYear(), today.getMonth(), 1)) return;
    setView({ y: d.getFullYear(), m: d.getMonth() });
  };
  const next = new Date(view.y, view.m + 1, 1);
  const atMin = view.y === today.getFullYear() && view.m === today.getMonth();

  const pick = (date) => {
    if (!start || end || date < start) onChange({ start: date, end: null });
    else onChange({ start, end: date });
  };

  return (
    <div className="cal" onMouseLeave={() => setHover(null)}>
      <button type="button" className="cal__nav cal__nav--prev" onClick={() => shift(-1)} disabled={atMin} aria-label="Previous month">
        <ChevronLeft />
      </button>
      <button type="button" className="cal__nav cal__nav--next" onClick={() => shift(1)} aria-label="Next month">
        <ChevronRight />
      </button>
      <Month year={view.y} month={view.m} today={today} start={start} end={end} hover={hover} onPick={pick} onHover={setHover} />
      <Month year={next.getFullYear()} month={next.getMonth()} today={today} start={start} end={end} hover={hover} onPick={pick} onHover={setHover} className="cal__month--second" />
    </div>
  );
}

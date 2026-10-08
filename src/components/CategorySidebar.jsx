import { SIDEBAR_CATEGORIES } from '../data/config.js';
import { ConsoleCube, ConsoleTower, Controller, VRHeadset, Wheel } from './Illustrations.jsx';

function Icon({ name }) {
  switch (name) {
    case 'all':
      return (
        <svg viewBox="0 0 40 40" className="cat__smile" aria-hidden="true">
          <circle cx="20" cy="20" r="14" fill="none" stroke="currentColor" strokeWidth="3" />
          <circle cx="14.5" cy="16.5" r="2" fill="currentColor" />
          <circle cx="25.5" cy="16.5" r="2" fill="currentColor" />
          <path d="M13 23c2 4.5 12 4.5 14 0" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        </svg>
      );
    case 'game':
      return (
        <span className="cat__game" aria-hidden="true">
          <span>VI</span>
        </span>
      );
    case 'ps5': return <ConsoleTower className="cat__art" />;
    case 'xbox': return <ConsoleCube className="cat__art" />;
    case 'vr': return <VRHeadset className="cat__art" />;
    case 'wheel': return <Wheel className="cat__art" />;
    default: return <Controller className="cat__art" />;
  }
}

export default function CategorySidebar({ active, counts, onSelect }) {
  return (
    <aside className="sidebar" aria-label="Gaming categories">
      <ul className="sidebar__list">
        {SIDEBAR_CATEGORIES.map((c) => {
          const isActive = active === c.id;
          return (
            <li key={c.id}>
              <button
                type="button"
                className={`cat ${isActive ? 'is-active' : ''}`}
                aria-pressed={isActive}
                onClick={() => onSelect(c.id)}
              >
                <span className="cat__tile"><Icon name={c.icon} /></span>
                <span className="cat__label">{c.label}</span>
                <span className="sr-only">{counts[c.id]} items</span>
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}

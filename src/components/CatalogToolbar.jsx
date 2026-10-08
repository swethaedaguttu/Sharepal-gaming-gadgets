import { FILTERS, SORTS } from '../lib/products.js';

export default function CatalogToolbar({ filter, onFilter, sort, onSort }) {
  return (
    <div className="toolbar">
      <div className="chips" role="group" aria-label="Filter products">
        {FILTERS.map((f) => (
          <button key={f.id} type="button" className={`chip ${filter === f.id ? 'is-active' : ''}`} aria-pressed={filter === f.id} onClick={() => onFilter(f.id)}>
            {f.label}
          </button>
        ))}
      </div>
      <label className="sort">
        <span className="sort__label">Sort by</span>
        <select value={sort} onChange={(e) => onSort(e.target.value)}>
          {SORTS.map((s) => (
            <option key={s.id} value={s.id}>{s.label}</option>
          ))}
        </select>
      </label>
    </div>
  );
}

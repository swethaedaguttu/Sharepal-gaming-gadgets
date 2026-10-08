import { SITE_URL, TOP_TABS } from '../data/config.js';

export default function CategoryTabs() {
  return (
    <nav className="tabs" aria-label="Rental categories">
      <ul className="tabs__list">
        {TOP_TABS.map((tab) => {
          const active = tab === 'Gaming';
          return (
            <li key={tab}>
              {active ? (
                <span className="tabs__item is-active" aria-current="page">{tab}</span>
              ) : (
                <a className="tabs__item" href={SITE_URL}>{tab}</a>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

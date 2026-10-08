import { useMemo, useState } from 'react';
import { RentalProvider } from './context/RentalContext.jsx';
import Header from './components/Header.jsx';
import CategoryTabs from './components/CategoryTabs.jsx';
import CategorySidebar from './components/CategorySidebar.jsx';
import HeroBanner from './components/HeroBanner.jsx';
import CatalogToolbar from './components/CatalogToolbar.jsx';
import ProductGrid from './components/ProductGrid.jsx';
import FAQ from './components/FAQ.jsx';
import Reviews from './components/Reviews.jsx';
import Footer from './components/Footer.jsx';
import CartDrawer from './components/CartDrawer.jsx';
import FloatingDatePrompt from './components/FloatingDatePrompt.jsx';
import ChatButton from './components/ChatButton.jsx';
import { CITY, PAGE_SIZE, SIDEBAR_CATEGORIES } from './data/config.js';
import { categoryCount, selectProducts } from './lib/products.js';

function GamingPage() {
  const [category, setCategory] = useState('all');
  const [filter, setFilter] = useState('all');
  const [sort, setSort] = useState('featured');
  const [query, setQuery] = useState('');
  const [visible, setVisible] = useState(PAGE_SIZE);

  const counts = useMemo(
    () => Object.fromEntries(SIDEBAR_CATEGORIES.map((c) => [c.id, categoryCount(c.id)])),
    []
  );
  const products = useMemo(() => selectProducts({ category, filter, sort, query }), [category, filter, sort, query]);
  const shown = products.slice(0, visible);
  const activeLabel = SIDEBAR_CATEGORIES.find((c) => c.id === category)?.label;

  const reset = () => {
    setCategory('all');
    setFilter('all');
    setQuery('');
    setVisible(PAGE_SIZE);
  };
  const withReset = (setter) => (value) => {
    setter(value);
    setVisible(PAGE_SIZE);
  };

  return (
    <>
      <Header query={query} onQueryChange={withReset(setQuery)} />
      <CategoryTabs />
      <main className="page">
        <CategorySidebar active={category} counts={counts} onSelect={withReset(setCategory)} />
        <div className="page__content">
          <HeroBanner />
          <section aria-labelledby="catalog-title" className="catalog">
            <div className="catalog__head">
              <h2 id="catalog-title">Gaming Gadgets On Rent</h2>
              <p className="catalog__total" aria-live="polite">Total items: <strong>{products.length} {products.length === 1 ? 'item' : 'items'}</strong></p>
            </div>
            <CatalogToolbar filter={filter} onFilter={withReset(setFilter)} sort={sort} onSort={withReset(setSort)} />
            <ProductGrid
              products={shown}
              onReset={reset}
              emptyMessage={query ? `Nothing matches “${query}”.` : `We don't have ${activeLabel} gadgets listed in ${CITY} right now.`}
            />
            {products.length > 0 && (
              <div className="catalog__more">
                <p>Showing {shown.length} of {products.length} results</p>
                {shown.length < products.length && (
                  <button type="button" className="btn btn--outline" onClick={() => setVisible((v) => v + PAGE_SIZE)}>Show More</button>
                )}
              </div>
            )}
          </section>
        </div>
      </main>
      <div className="shell">
        <FAQ />
        <nav className="crumbs" aria-label="Breadcrumb">
          <a href="/bangalore/gaming-gadgets-on-rent">{CITY}</a>
          <span aria-hidden="true">›</span>
          <span aria-current="page">Gaming gadgets on rent</span>
        </nav>
      </div>
      <Reviews />
      <Footer />
      <CartDrawer />
      <FloatingDatePrompt />
      <ChatButton />
    </>
  );
}

export default function App() {
  return (
    <RentalProvider>
      <GamingPage />
    </RentalProvider>
  );
}

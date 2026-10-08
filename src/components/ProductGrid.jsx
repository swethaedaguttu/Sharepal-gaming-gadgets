import { Fragment } from 'react';
import ProductCard from './ProductCard.jsx';
import { AssetPartnerBanner, RentOutBanner } from './PromoBanners.jsx';

const PROMOS = [
  { after: 4, Component: AssetPartnerBanner },
  { after: 8, Component: RentOutBanner },
];

export default function ProductGrid({ products, emptyMessage, onReset }) {
  if (products.length === 0) {
    return (
      <div className="empty">
        <p className="empty__title">No gadgets to show yet</p>
        <p className="empty__text">{emptyMessage}</p>
        <button type="button" className="btn btn--navy" onClick={onReset}>View all gaming gadgets</button>
      </div>
    );
  }
  return (
    <div className="grid">
      {products.map((product, index) => (
        <Fragment key={product.id}>
          <ProductCard product={product} eager={index < 4} />
          {PROMOS.filter((p) => p.after === index + 1 && products.length > index + 1).map(({ Component, after }) => (
            <Component key={after} />
          ))}
        </Fragment>
      ))}
    </div>
  );
}

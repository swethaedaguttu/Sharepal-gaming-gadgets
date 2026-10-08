import { useEffect } from 'react';
import { CloseIcon } from './Icons.jsx';
import { useRental } from '../context/RentalContext.jsx';
import { formatINR, formatShortDate } from '../lib/pricing.js';
import { SITE_URL } from '../data/config.js';
import ProductImage from './ProductImage.jsx';

export default function CartDrawer() {
  const { cartOpen, setCartOpen, cart, toggleCart, days, range, openPicker } = useRental();

  useEffect(() => {
    if (!cartOpen) return undefined;
    const onKey = (e) => e.key === 'Escape' && setCartOpen(false);
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [cartOpen, setCartOpen]);

  const total = days ? cart.reduce((sum, p) => sum + p.per_day_rent * days, 0) : 0;

  return (
    <div className={`drawer ${cartOpen ? 'is-open' : ''}`} aria-hidden={!cartOpen}>
      <div className="drawer__backdrop" onClick={() => setCartOpen(false)} />
      <aside className="drawer__panel" role="dialog" aria-label="Your cart">
        <div className="drawer__head">
          <h2>Your cart</h2>
          <button type="button" className="icon-btn icon-btn--dark" onClick={() => setCartOpen(false)} aria-label="Close cart" tabIndex={cartOpen ? 0 : -1}>
            <CloseIcon />
          </button>
        </div>
        {cart.length === 0 ? (
          <p className="drawer__empty">Your cart is empty. Tap + on any gadget to add it.</p>
        ) : (
          <ul className="drawer__list">
            {cart.map((p) => (
              <li key={p.id} className="drawer__item">
                <div className="drawer__thumb"><ProductImage src={p.image} alt="" /></div>
                <div className="drawer__info">
                  <strong>{p.name}</strong>
                  <span>{days ? `${formatINR(p.per_day_rent)} × ${days} ${days === 1 ? 'day' : 'days'} = ${formatINR(p.per_day_rent * days)}` : `${formatINR(p.per_day_rent)} / day`}</span>
                </div>
                <button type="button" className="drawer__remove" onClick={() => toggleCart(p)} tabIndex={cartOpen ? 0 : -1}>Remove</button>
              </li>
            ))}
          </ul>
        )}
        {cart.length > 0 && (
          <div className="drawer__foot">
            {days ? (
              <>
                <div className="drawer__row"><span>{formatShortDate(range.start)} – {formatShortDate(range.end || range.start)}</span><span>{days} {days === 1 ? 'day' : 'days'}</span></div>
                <div className="drawer__row drawer__row--total"><span>Estimated rent</span><span>{formatINR(total)}</span></div>
                <a className="btn btn--lime btn--block" href={SITE_URL}>Continue on SharePal</a>
              </>
            ) : (
              <button type="button" className="btn btn--navy btn--block" onClick={() => { setCartOpen(false); openPicker(); }}>Select dates to view total</button>
            )}
          </div>
        )}
      </aside>
    </div>
  );
}

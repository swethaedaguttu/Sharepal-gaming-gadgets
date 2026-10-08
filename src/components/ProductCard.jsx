import { useState } from 'react';
import ProductImage from './ProductImage.jsx';
import { CheckIcon, PlusIcon, SparkleIcon } from './Icons.jsx';
import { useRental } from '../context/RentalContext.jsx';
import { formatINR } from '../lib/pricing.js';
import { WAITLIST_JOINED, WAITLIST_TARGET } from '../data/config.js';

const BADGE_CLASS = { New: 'badge--new', Trending: 'badge--trending', 'Vote to Launch': 'badge--vote' };

function readWaitlist(id) {
  try {
    return window.localStorage.getItem(`waitlist:${id}`) === '1';
  } catch {
    return false;
  }
}

function WaitlistCard({ product, eager }) {
  const [joined, setJoined] = useState(() => readWaitlist(product.id));
  const count = WAITLIST_JOINED + (joined ? 1 : 0);

  const join = () => {
    if (joined) return;
    setJoined(true);
    try {
      window.localStorage.setItem(`waitlist:${product.id}`, '1');
    } catch {
      /* storage unavailable */
    }
  };

  return (
    <article className="pcard pcard--waitlist">
      <div className="pcard__tile">
        <span className={`badge ${BADGE_CLASS['Vote to Launch']}`}>Vote to Launch</span>
        <ProductImage src={product.image} alt={product.name} eager={eager} />
      </div>
      <div className="waitlist-note">
        <SparkleIcon width={14} height={14} />
        <span>We launch if 1k people join the waitlist. Get notified first!</span>
      </div>
      <div className="progress" role="progressbar" aria-valuemin={0} aria-valuemax={WAITLIST_TARGET} aria-valuenow={count} aria-label="Waitlist progress">
        <span className="progress__bar" style={{ width: `${Math.max((count / WAITLIST_TARGET) * 100, 12)}%` }} />
        <span className="progress__label">{count}/{WAITLIST_TARGET} Joined</span>
      </div>
      <h3 className="pcard__title">{product.name}</h3>
      <div className="pcard__foot pcard__foot--waitlist">
        <button type="button" className={`btn btn--lime btn--block ${joined ? 'is-done' : ''}`} onClick={join} aria-pressed={joined}>
          {joined ? "You're on the waitlist ✓" : 'Join Waitlist'}
        </button>
      </div>
    </article>
  );
}

export default function ProductCard({ product, eager = false }) {
  const { days, cart, toggleCart, openPicker } = useRental();
  if (product.tag === 'Vote to Launch') return <WaitlistCard product={product} eager={eager} />;

  const inCart = cart.some((p) => p.id === product.id);
  const total = product.per_day_rent * days;
  const unavailable = product.out_of_stock;

  const add = () => {
    if (unavailable) return;
    if (!days) openPicker(() => toggleCart(product));
    else toggleCart(product);
  };

  return (
    <article className={`pcard ${unavailable ? 'is-unavailable' : ''}`}>
      <div className="pcard__tile">
        {product.tag && !unavailable && <span className={`badge ${BADGE_CLASS[product.tag] || 'badge--trending'}`}>{product.tag}</span>}
        {unavailable && <span className="badge badge--oos">Out of stock</span>}
        <ProductImage src={product.image} alt={product.name} eager={eager} />
      </div>
      <h3 className="pcard__title">{product.name}</h3>
      <div className="pcard__foot">
        <div className="pcard__price">
          {unavailable ? (
            <>
              <span className="pcard__label">Currently unavailable</span>
              <span className="pcard__amount pcard__amount--muted">{formatINR(product.per_day_rent)}<small> / day</small></span>
            </>
          ) : days ? (
            <>
              <span className="pcard__label">{`${formatINR(product.per_day_rent)} × ${days} ${days === 1 ? 'day' : 'days'}`}</span>
              <span className="pcard__amount">{formatINR(total)}</span>
            </>
          ) : (
            <>
              <span className="pcard__label">Select Dates to view price</span>
              <span className="pcard__amount pcard__amount--blur" aria-hidden="true">₹ 000</span>
            </>
          )}
        </div>
        <button
          type="button"
          className={`add-btn ${inCart ? 'is-added' : ''}`}
          disabled={unavailable}
          aria-pressed={inCart}
          aria-label={unavailable ? `${product.name} is out of stock` : inCart ? `Remove ${product.name} from cart` : `Add ${product.name} to cart`}
          onClick={add}
        >
          {inCart ? <CheckIcon width={22} height={22} /> : <PlusIcon width={24} height={24} />}
        </button>
      </div>
    </article>
  );
}

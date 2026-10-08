import { REVIEWS, STATS } from '../data/config.js';
import { StarIcon } from './Icons.jsx';

function ReviewCard({ review, hidden }) {
  return (
    <figure className="review" aria-hidden={hidden || undefined}>
      <div className="review__top">
        <span className="gmark" aria-hidden="true">G</span>
        <span className="review__stars" role="img" aria-label={`${review.stars} out of 5 stars`}>
          {Array.from({ length: review.stars }, (_, i) => <StarIcon key={i} width={16} height={16} />)}
        </span>
      </div>
      <blockquote className="review__text">“ {review.text}</blockquote>
      <figcaption className="review__who">
        <span className="review__avatar" aria-hidden="true">{review.initials}</span>
        <span>
          <strong>{review.name}</strong>
          <small>{review.place} • {review.category}</small>
        </span>
      </figcaption>
    </figure>
  );
}

export default function Reviews() {
  return (
    <section className="social" aria-labelledby="social-title">
      <h2 id="social-title">Served more than <span>1 Lakh Orders</span></h2>
      <div className="marquee">
        <div className="marquee__track">
          {REVIEWS.map((r) => <ReviewCard key={r.name} review={r} />)}
          {REVIEWS.map((r) => <ReviewCard key={`${r.name}-dup`} review={r} hidden />)}
        </div>
      </div>
      <dl className="stats">
        {STATS.map((s) => (
          <div key={s.label} className="stats__item">
            <dt className="stats__value">{s.value}</dt>
            <dd className="stats__label">{s.label}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

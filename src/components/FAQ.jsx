import { useState } from 'react';
import { ChevronDown } from './Icons.jsx';
import { FAQS, SITE_URL } from '../data/config.js';

export default function FAQ() {
  const [open, setOpen] = useState(null);
  return (
    <section className="faq" aria-labelledby="faq-title">
      <h2 id="faq-title">Frequently Asked Questions (FAQs)</h2>
      <ul className="faq__list">
        {FAQS.map((item, i) => {
          const isOpen = open === i;
          return (
            <li key={item.q} className={`faq__item ${isOpen ? 'is-open' : ''}`}>
              <h3>
                <button type="button" className="faq__q" aria-expanded={isOpen} aria-controls={`faq-a-${i}`} id={`faq-q-${i}`} onClick={() => setOpen(isOpen ? null : i)}>
                  <span>{item.q}</span>
                  <ChevronDown width={18} height={18} className="faq__chev" />
                </button>
              </h3>
              <div className="faq__a" id={`faq-a-${i}`} role="region" aria-labelledby={`faq-q-${i}`} hidden={!isOpen}>
                <p>{item.a} <a href={SITE_URL}>Read more on SharePal</a></p>
              </div>
            </li>
          );
        })}
      </ul>
      <a className="faq__more" href={SITE_URL}>View more FAQ's</a>
    </section>
  );
}

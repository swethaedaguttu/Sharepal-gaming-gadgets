import { ArrowUpRight, CalendarClock, GiftIcon, RefreshIcon, TagIcon } from './Icons.jsx';
import { ActionCam, CameraDSLR, ConsoleTower, Controller, Drone, Speaker, Wheel } from './Illustrations.jsx';
import { SITE_URL } from '../data/config.js';

export function AssetPartnerBanner() {
  return (
    <section className="promo promo--partner" aria-labelledby="partner-title">
      <div className="promo__body">
        <h2 id="partner-title" className="promo__title">Become an <span>Asset Partner.</span> Earn Monthly.</h2>
        <div className="partner-grid">
          <div className="partner-col">
            <p className="partner-col__head">EARNING BENEFITS</p>
            <div className="partner-col__cards">
              <div className="partner-card"><CalendarClock width={18} height={18} className="partner-card__ico" /><strong>Monthly Earnings</strong><span>From rental assets</span></div>
              <div className="partner-card partner-card--sm"><GiftIcon width={18} height={18} className="partner-card__ico" /><small>Upto</small><strong>₹10,000</strong><span>Instant Wallet credits</span></div>
            </div>
          </div>
          <div className="partner-col">
            <p className="partner-col__head">RENTAL BENEFITS</p>
            <div className="partner-col__cards">
              <div className="partner-card partner-card--sm"><TagIcon width={18} height={18} className="partner-card__ico" /><strong>10% Off</strong><span>Exclusive discount when you rent</span></div>
              <div className="partner-card partner-card--sm"><RefreshIcon width={18} height={18} className="partner-card__ico" /><strong>Get 10%</strong><strong className="partner-card__sub">Cashback</strong><span>On every order</span></div>
            </div>
          </div>
        </div>
      </div>
      <div className="promo__art promo__art--partner" aria-hidden="true">
        <Drone className="art art-drone" />
        <ConsoleTower className="art art-tower" />
        <CameraDSLR className="art art-dslr" />
        <ActionCam className="art art-action" />
      </div>
      <a className="btn btn--lime promo__cta" href={SITE_URL}>Know More <ArrowUpRight width={20} height={20} /></a>
    </section>
  );
}

export function RentOutBanner() {
  return (
    <section className="promo promo--rentout" aria-labelledby="rentout-title">
      <div className="promo__art promo__art--left" aria-hidden="true">
        <Drone className="art art-drone" />
        <Wheel className="art art-wheel" />
        <ActionCam className="art art-action" />
      </div>
      <div className="rentout__copy">
        <p className="rentout__eyebrow"><span>Got gear you dont use anymore?</span></p>
        <h2 id="rentout-title" className="rentout__title">Rent Out Your Gear on SharePal</h2>
        <a className="btn btn--lime" href={SITE_URL}>Earn With Us <ArrowUpRight width={18} height={18} /></a>
      </div>
      <div className="promo__art promo__art--right" aria-hidden="true">
        <Controller className="art art-pad" />
        <Speaker className="art art-speaker" />
        <CameraDSLR className="art art-dslr" />
      </div>
    </section>
  );
}

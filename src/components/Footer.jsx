import { useState } from 'react';
import Logo from './Logo.jsx';
import { ChevronDown, ChevronUp, FacebookIcon, HeadsetIcon, InstagramIcon, LinkedinIcon, MailIcon } from './Icons.jsx';
import { CITY, FOOTER_CATEGORIES, FOOTER_COLUMNS, SITE_URL, SUPPORT_EMAIL } from '../data/config.js';

const PAGE_URL = '/bangalore/gaming-gadgets-on-rent';

export default function Footer() {
  const [more, setMore] = useState(false);
  return (
    <footer className="footer">
      <div className="footer__inner">
        <nav className="footer__cats" aria-label="Rental categories">
          {FOOTER_CATEGORIES.map((group) => (
            <div key={group.title} className="footer__cat">
              <h3>{group.title}</h3>
              <ul>
                {group.links.map((label) => (
                  <li key={label}>
                    <a href={group.current ? PAGE_URL : SITE_URL}>{label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>

        <div className="footer__seo">
          <h2><a href={SITE_URL}>Renting from SharePal in {CITY}</a></h2>
          <p>
            Discover the convenience of renting from SharePal, your trusted partner in {CITY} for all your rental needs. Whether you're exploring the vibrant streets of Koramangala, setting up a shoot in Indiranagar, or planning a trek from the outskirts of Whitefield, SharePal has you covered. We offer a wide range of products, including cameras, action cameras, gaming consoles, projectors, speakers, trekking gear, riding gear, and creator gear. With free home delivery and pickup services, flexible rental tenures, and an easy-to-use platform, renting has never been easier. Experience the freedom to rent what you need, when you need it, without the commitment of buying.
          </p>
          <h3>Categories on Rent</h3>
          <h4><a href={SITE_URL}>Action Cameras on Rent</a></h4>
          <p>
            Capture your adventures in stunning detail with our range of action cameras. Choose from top brands like GoPro, Insta360, and DJI, perfect for everything from extreme sports to casual vlogging. Whether you need high-quality video for your next trek or a 360-degree camera to capture every angle, we've got you covered.
          </p>
          {more && (
            <>
              <h4><a href={PAGE_URL}>Gaming Consoles on Rent</a></h4>
              <p>
                Rent the latest gaming gadgets from SharePal — PS5, Xbox, Oculus VR and racing wheels — with free home delivery and pickup and flexible rental tenures.
              </p>
            </>
          )}
          <button type="button" className="footer__more" aria-expanded={more} onClick={() => setMore((v) => !v)}>
            {more ? 'Read Less' : 'Read More'}
            {more ? <ChevronUp width={14} height={14} /> : <ChevronDown width={14} height={14} />}
          </button>
        </div>

        <div className="footer__brand"><Logo variant="plain" size="lg" /><span className="footer__brand-line" aria-hidden="true" /></div>

        <div className="footer__cols">
          {FOOTER_COLUMNS.map((col) => (
            <div key={col.title} className="footer__col">
              <h3>{col.title}</h3>
              <ul>
                {col.links.map((l) => (
                  <li key={l.label}>
                    <a href={SITE_URL}>{l.label}</a>
                    {l.badge && <span className="pill-new">{l.badge}</span>}
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="footer__col">
            <h3>Need Help</h3>
            <ul>
              <li><a className="footer__support" href={SITE_URL}><HeadsetIcon width={16} height={16} /> Contact Support</a></li>
              <li><a href={SITE_URL}>Contact Us</a></li>
              <li><a className="footer__support" href={`mailto:${SUPPORT_EMAIL}`}><MailIcon width={18} height={18} /> {SUPPORT_EMAIL}</a></li>
              <li className="footer__social">
                <a href={SITE_URL} aria-label="SharePal on Facebook"><FacebookIcon /></a>
                <a href={SITE_URL} aria-label="SharePal on Instagram"><InstagramIcon /></a>
                <a href={SITE_URL} aria-label="SharePal on LinkedIn"><LinkedinIcon /></a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <button type="button" className="footer__up" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            Go up <ChevronUp width={16} height={16} />
          </button>
          <p>© 2026. SWNAC E-Kiraya Services Pvt Ltd</p>
          <p className="footer__made">Made with <span aria-label="love">♥</span> for India</p>
        </div>
      </div>
    </footer>
  );
}

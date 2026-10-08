import { useEffect, useRef, useState } from 'react';
import Logo from './Logo.jsx';
import DatePicker from './DatePicker.jsx';
import { CalendarIcon, CalendarClock, CartIcon, ChevronDown, PinIcon, SearchIcon, UserIcon } from './Icons.jsx';
import { CITY, SITE_URL } from '../data/config.js';
import { useRental } from '../context/RentalContext.jsx';
import { formatShortDate } from '../lib/pricing.js';

export default function Header({ query, onQueryChange }) {
  const { range, pickerOpen, openPicker, cart, setCartOpen } = useRental();
  const [searchOpen, setSearchOpen] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    if (searchOpen) inputRef.current?.focus();
  }, [searchOpen]);

  const trigger = (e) => {
    e.stopPropagation();
    openPicker();
  };

  return (
    <header className="header">
      <div className="header__inner">
        <a className="header__logo" href={SITE_URL} aria-label="SharePal home">
          <Logo variant="badge" />
        </a>

        <div className="datebar" role="group" aria-label="Location and rental dates">
          <button type="button" className="datebar__city" aria-label={`City: ${CITY}`}>
            <PinIcon width={18} height={18} />
            <span>{CITY}</span>
            <ChevronDown width={16} height={16} />
          </button>
          <button type="button" className="datebar__field" data-date-trigger onClick={trigger}>
            <CalendarIcon width={17} height={17} />
            <span className={range.start ? 'is-set' : ''}>{range.start ? formatShortDate(range.start) : <><span className="full">Delivery Date</span><span className="short">Delivery</span></>}</span>
          </button>
          <button type="button" className="datebar__field" data-date-trigger onClick={trigger}>
            <CalendarIcon width={17} height={17} />
            <span className={range.start ? 'is-set' : ''}>{range.start ? formatShortDate(range.end || range.start) : <><span className="full">Pickup Date</span><span className="short">Pickup</span></>}</span>
          </button>
          <button type="button" className="datebar__select" data-date-trigger onClick={trigger}>
            <CalendarClock width={16} height={16} />
            <span>{range.start ? 'Change' : 'Select'}</span>
          </button>
          {pickerOpen && <DatePicker key="picker" />}
        </div>

        <div className="header__actions">
          <button type="button" className="icon-btn" aria-label="Search gaming gadgets" aria-expanded={searchOpen} onClick={() => setSearchOpen((v) => !v)}>
            <SearchIcon width={24} height={24} />
          </button>
          <button type="button" className="icon-btn icon-btn--cart" aria-label={`Cart, ${cart.length} items`} onClick={() => setCartOpen(true)}>
            <CartIcon width={25} height={25} />
            {cart.length > 0 && <span className="icon-btn__badge">{cart.length}</span>}
          </button>
          <a className="login" href={SITE_URL}>
            <span className="login__avatar"><UserIcon width={20} height={20} /></span>
            <span className="login__text">Hi, Login</span>
          </a>
        </div>
      </div>

      {searchOpen && (
        <div className="searchbar">
          <div className="searchbar__inner">
            <SearchIcon width={20} height={20} />
            <label className="sr-only" htmlFor="gear-search">Search gaming gadgets</label>
            <input
              id="gear-search"
              ref={inputRef}
              type="search"
              placeholder="Search PS5, controllers, games…"
              value={query}
              onChange={(e) => onQueryChange(e.target.value)}
              onKeyDown={(e) => e.key === 'Escape' && setSearchOpen(false)}
            />
            <button type="button" className="searchbar__done" onClick={() => setSearchOpen(false)}>Done</button>
          </div>
        </div>
      )}
    </header>
  );
}

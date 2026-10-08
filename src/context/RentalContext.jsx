import { createContext, useCallback, useContext, useMemo, useRef, useState } from 'react';
import { rentalDays } from '../lib/pricing.js';

const RentalContext = createContext(null);

export function RentalProvider({ children }) {
  const [range, setRange] = useState({ start: null, end: null });
  const [pickerOpen, setPickerOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [cart, setCart] = useState([]);
  const afterApply = useRef(null);

  const days = rentalDays(range.start, range.end);

  const openPicker = useCallback((callback) => {
    afterApply.current = typeof callback === 'function' ? callback : null;
    setPickerOpen(true);
  }, []);

  const closePicker = useCallback(() => {
    afterApply.current = null;
    setPickerOpen(false);
  }, []);

  const applyRange = useCallback((next) => {
    setRange(next);
    setPickerOpen(false);
    const cb = afterApply.current;
    afterApply.current = null;
    if (cb) cb();
  }, []);

  const clearRange = useCallback(() => setRange({ start: null, end: null }), []);

  const toggleCart = useCallback((product) => {
    setCart((items) =>
      items.some((p) => p.id === product.id) ? items.filter((p) => p.id !== product.id) : [...items, product]
    );
  }, []);

  const addToCart = useCallback((product) => {
    setCart((items) => (items.some((p) => p.id === product.id) ? items : [...items, product]));
  }, []);

  const value = useMemo(
    () => ({
      range, days, pickerOpen, openPicker, closePicker, applyRange, clearRange,
      cart, toggleCart, addToCart, cartOpen, setCartOpen,
    }),
    [range, days, pickerOpen, openPicker, closePicker, applyRange, clearRange, cart, toggleCart, addToCart, cartOpen]
  );

  return <RentalContext.Provider value={value}>{children}</RentalContext.Provider>;
}

export function useRental() {
  const ctx = useContext(RentalContext);
  if (!ctx) throw new Error('useRental must be used within RentalProvider');
  return ctx;
}

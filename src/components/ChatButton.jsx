import { useEffect, useRef, useState } from 'react';
import { ChatIcon } from './Icons.jsx';
import { SITE_URL, SUPPORT_EMAIL } from '../data/config.js';

export default function ChatButton() {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    if (!open) return undefined;
    const close = (e) => (e.type === 'keydown' ? e.key === 'Escape' && setOpen(false) : !ref.current?.contains(e.target) && setOpen(false));
    document.addEventListener('keydown', close);
    document.addEventListener('mousedown', close);
    return () => {
      document.removeEventListener('keydown', close);
      document.removeEventListener('mousedown', close);
    };
  }, [open]);

  return (
    <div className="chat" ref={ref}>
      {open && (
        <div className="chat__panel" role="dialog" aria-label="Contact support">
          <strong>Need help?</strong>
          <p>Our support team is here to help with your rental.</p>
          <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>
          <a href={SITE_URL}>Visit SharePal support</a>
        </div>
      )}
      <button type="button" className="chat__btn" aria-expanded={open} aria-label="Chat with support" onClick={() => setOpen((v) => !v)}>
        <span className="chat__back" aria-hidden="true" />
        <ChatIcon />
      </button>
    </div>
  );
}

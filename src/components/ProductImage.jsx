import { useState } from 'react';
import { ConsoleTower, VRHeadset, Wheel } from './Illustrations.jsx';

export default function ProductImage({ src, alt, eager = false }) {
  const Art = /quest|oculus|\bvr\b/i.test(alt) ? VRHeadset : /wheel/i.test(alt) ? Wheel : ConsoleTower;
  const [state, setState] = useState('loading');
  return (
    <div className={`pimg is-${state}`}>
      {state !== 'error' ? (
        <img
          src={src}
          alt={alt}
          loading={eager ? 'eager' : 'lazy'}
          decoding="async"
          onLoad={() => setState('ready')}
          onError={() => setState('error')}
        />
      ) : (
        <div className="pimg__fallback" role="img" aria-label={alt || 'Product image unavailable'}>
          <Art className="pimg__fallback-art" />
        </div>
      )}
    </div>
  );
}

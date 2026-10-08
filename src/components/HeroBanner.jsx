import Logo from './Logo.jsx';
import { ConsoleCube, ConsoleTower, Controller, VRHeadset } from './Illustrations.jsx';

export default function HeroBanner() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero__art hero__art--left" aria-hidden="true">
        <ConsoleCube className="hero__cube" />
        <Controller className="hero__pad hero__pad--l" />
      </div>
      <div className="hero__copy">
        <h1 id="hero-title">Gaming Consoles</h1>
        <p className="hero__sub">
          Rent the latest gaming gadgets from <Logo variant="inline" size="sm" /> PS5, Xbox, Oculus VR, Racing Wheel on rent.
        </p>
        <ul className="hero__brands" aria-label="Brands available">
          <li className="brand brand--xbox">XBOX</li>
          <li className="brand brand--ps">PS5</li>
          <li className="brand brand--meta">Meta</li>
        </ul>
      </div>
      <div className="hero__art hero__art--right" aria-hidden="true">
        <VRHeadset className="hero__vr" />
        <ConsoleTower className="hero__tower" />
        <Controller className="hero__pad hero__pad--r" />
      </div>
    </section>
  );
}

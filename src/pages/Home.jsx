import { Link } from 'react-router-dom';
import img1 from "../assets/logistics.png"

const Home = () => {
  const stats = [
    { value: '1M+', label: 'Packages Delivered' },
    { value: '50K+', label: 'Cities Served' },
    { value: '99.9%', label: 'Success Rate' },
    { value: '24/7', label: 'Customer Support' },
  ];

  const services = [
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/>
        </svg>
      ),
      title: 'Domestic Delivery',
      desc: 'Fast and reliable delivery across all 50 states.',
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2v20M2 12h20"/><path d="M5 5l14 14M19 5L5 19"/>
        </svg>
      ),
      title: 'International Shipping',
      desc: 'Global delivery to 200+ countries worldwide.',
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
        </svg>
      ),
      title: 'Express Delivery',
      desc: 'Same-day or next-day delivery for urgent shipments.',
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/>
        </svg>
      ),
      title: 'Warehouse Storage',
      desc: 'Secure storage & fulfillment for your inventory.',
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-bg">
          <div className="hero-overlay" />
          <div className="hero-pattern" />
        </div>
        <div className="container">
          <div className="hero-content">
            <div className="hero-badge">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
              Trusted by 10,000+ businesses
            </div>
            <h1 className="hero-title">
              Your Trusted<br />
              <span className="text-gradient">Logistics Partner</span>
            </h1>
            <p className="hero-desc">
              From small packages to full truckloads, NLS delivers with speed, precision, and care. 
              Experience the difference with America's fastest-growing logistics provider.
            </p>
            <div className="hero-actions">
              <Link to="/track" className="btn btn-primary btn-lg">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>
                </svg>
                Track Your Shipment
              </Link>
              <Link to="/services" className="btn btn-outline-light btn-lg">
                Explore Services
              </Link>
            </div>
          </div>
          <div className="hero-image-wrapper">
            <div className="hero-image-card">
              <img src={img1} alt="NLS Delivery" className="hero-image" />
              <div className="hero-image-stats">
                <div className="hero-stat-item">
                  <span className="hero-stat-value">99.9%</span>
                  <span className="hero-stat-label">Success Rate</span>
                </div>
                <div className="hero-stat-divider" />
                <div className="hero-stat-item">
                  <span className="hero-stat-value">50K+</span>
                  <span className="hero-stat-label">Cities</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat, i) => (
              <div key={i} className="stat-card">
                <div className="stat-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                </div>
                <span className="stat-value">{stat.value}</span>
                <span className="stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="services-section">
        <div className="container">
          <div className="section-header">
            <span className="badge badge-primary">What We Offer</span>
            <h2>Comprehensive Logistics Solutions</h2>
            <div className="divider divider-center" />
            <p>End-to-end shipping and logistics services tailored to your business needs.</p>
          </div>
          <div className="services-grid">
            {services.map((service, i) => (
              <div key={i} className="service-card card card-hover-primary">
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
                <Link to="/services" className="service-link">
                  Learn more
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-card">
            <div className="cta-content">
              <h2>Ready to Ship?</h2>
              <p>Get started with NLS today and experience hassle-free logistics.</p>
              <div className="cta-actions">
                <Link to="/contact" className="btn btn-primary btn-lg">
                  Contact Us
                </Link>
                <Link to="/track" className="btn btn-outline-light btn-lg">
                  Track Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
.hero-section { position: relative; min-height: 85vh; display: flex; align-items: center; overflow: hidden; background: var(--secondary); }
.hero-section .container { display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: center; position: relative; z-index: 2; padding-top: 40px; padding-bottom: 40px; }
.hero-bg { position: absolute; inset: 0; z-index: 1; }
.hero-overlay { position: absolute; inset: 0; background: linear-gradient(135deg, var(--secondary) 0%, var(--secondary-dark) 50%, #0a0e3d 100%); }
.hero-pattern { position: absolute; inset: 0; background-image: radial-gradient(circle at 20% 50%, rgba(255, 102, 0, 0.08) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.03) 0%, transparent 50%), radial-gradient(circle at 60% 80%, rgba(255, 102, 0, 0.05) 0%, transparent 50%); }
.hero-content { color: var(--white); }
.hero-badge { display: inline-flex; align-items: center; gap: 8px; padding: 8px 16px; background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.12); border-radius: 20px; font-size: 13px; font-weight: 500; color: rgba(255,255,255,0.8); margin-bottom: 28px; }
.hero-badge svg { color: var(--primary); }
.hero-title { font-size: clamp(2.5rem, 5vw, 4.2rem); font-weight: 900; line-height: 1.1; color: var(--white); margin-bottom: 24px; }
.hero-desc { color: rgba(255,255,255,0.65); font-size: 1.125rem; line-height: 1.7; max-width: 480px; margin-bottom: 36px; }
.hero-actions { display: flex; gap: 16px; flex-wrap: wrap; }
.hero-image-wrapper { display: flex; justify-content: center; align-items: center; }
.hero-image-card { position: relative; width: 100%; max-width: 520px; }
.hero-image { width: 100%; height: auto; border-radius: var(--radius-lg); box-shadow: var(--shadow-xl); aspect-ratio: 4/3; object-fit: cover; }
.hero-image-stats { position: absolute; bottom: -20px; left: 50%; transform: translateX(-50%); display: flex; align-items: center; gap: 24px; background: var(--white); padding: 16px 28px; border-radius: var(--radius-md); box-shadow: var(--shadow-lg); white-space: nowrap; }
.hero-stat-item { display: flex; flex-direction: column; }
.hero-stat-value { font-size: 18px; font-weight: 800; color: var(--secondary); }
.hero-stat-label { font-size: 12px; color: var(--text-muted); }
.hero-stat-divider { width: 1px; height: 36px; background: var(--border); }
.stats-section { padding: 0; position: relative; z-index: 3; margin-top: -20px; }
.stats-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1px; background: var(--border-light); border-radius: var(--radius-lg); overflow: hidden; box-shadow: var(--shadow-lg); }
.stat-card { background: var(--white); padding: 32px 24px; text-align: center; display: flex; flex-direction: column; align-items: center; gap: 8px; }
.stat-icon { color: var(--primary); margin-bottom: 4px; }
.stat-value { font-size: 2.25rem; font-weight: 800; color: var(--secondary); line-height: 1.1; }
.stat-label { font-size: 14px; color: var(--text-muted); font-weight: 500; }
.services-section { padding: 100px 0; }
.section-header { text-align: center; max-width: 600px; margin: 0 auto 56px; }
.section-header h2 { margin-top: 16px; margin-bottom: 0; }
.section-header p { color: var(--text-secondary); font-size: 1.0625rem; }
.services-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px; }
.service-card { text-align: center; padding: 40px 28px; }
.service-icon { width: 64px; height: 64px; display: flex; align-items: center; justify-content: center; background: var(--primary-bg); color: var(--primary); border-radius: var(--radius-md); margin: 0 auto 20px; }
.service-card h3 { margin-bottom: 12px; }
.service-card p { font-size: 14px; color: var(--text-muted); margin-bottom: 16px; }
.service-link { display: inline-flex; align-items: center; gap: 6px; font-size: 14px; font-weight: 600; color: var(--primary); text-decoration: none; transition: var(--transition); }
.service-link:hover { gap: 10px; }
.cta-section { padding: 80px 0 100px; }
.cta-card { background: linear-gradient(135deg, var(--secondary), var(--secondary-dark)); border-radius: var(--radius-xl); padding: 64px; text-align: center; position: relative; overflow: hidden; }
.cta-card::before { content: ''; position: absolute; inset: 0; background: radial-gradient(circle at 30% 50%, rgba(255, 102, 0, 0.1) 0%, transparent 60%); }
.cta-content { position: relative; z-index: 1; }
.cta-content h2 { color: var(--white); font-size: clamp(2rem, 4vw, 3rem); margin-bottom: 16px; }
.cta-content p { color: rgba(255,255,255,0.7); font-size: 1.125rem; max-width: 480px; margin: 0 auto 36px; }
.cta-actions { display: flex; gap: 16px; justify-content: center; flex-wrap: wrap; }
@media (max-width: 1024px) { .hero-section .container { grid-template-columns: 1fr; text-align: center; } .hero-desc { margin: 0 auto 36px; } .hero-actions { justify-content: center; } .hero-image-wrapper { display: none; } .stats-grid { grid-template-columns: repeat(2, 1fr); } .services-grid { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 768px) { .hero-section { min-height: auto; padding: 80px 0 60px; } .hero-section .container { padding-top: 0; padding-bottom: 0; } .hero-desc { font-size: 1rem; } .hero-actions { flex-direction: column; align-items: center; } .hero-actions .btn { width: 100%; max-width: 320px; } .stats-section { margin-top: 0; } .stats-section .container { padding: 0; } .stats-grid { grid-template-columns: repeat(2, 1fr); border-radius: 0; box-shadow: none; gap: 1px; } .stat-card { padding: 24px 16px; } .stat-value { font-size: 1.75rem; } .services-section { padding: 60px 0; } .services-grid { grid-template-columns: 1fr; gap: 16px; } .cta-section { padding: 40px 0 60px; } .cta-card { padding: 40px 24px; border-radius: var(--radius-lg); } .cta-actions { flex-direction: column; align-items: center; } .cta-actions .btn { width: 100%; } }
      `}</style>
    </>
  );
};

export default Home;
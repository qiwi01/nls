import { Link } from 'react-router-dom';

const About = () => {
  const values = [
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        </svg>
      ),
      title: 'Reliability',
      desc: 'We deliver on our promises, every time.',
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
        </svg>
      ),
      title: 'Speed',
      desc: 'Fast delivery without compromising quality.',
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
        </svg>
      ),
      title: 'Innovation',
      desc: 'Leveraging technology for smarter logistics.',
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22c1.6-2.2 3.5-3.5 5-4.5 1.5-1 2.8-2.5 3.5-3.5.5-.7 1-1.5 1.2-2.3.2-.8.3-1.5.3-2.2 0-2.3-0.9-4.5-2.5-6.2-1.6-1.7-3.8-2.5-6-2.5s-4.4 0.8-6 2.5c-1.6 1.7-2.5 3.9-2.5 6.2 0 0.7 0.1 1.4 0.3 2.2 0.2 0.8 0.7 1.6 1.2 2.3 0.7 1 2 2.5 3.5 3.5 1.5 1 3.4 2.3 5 4.5z"/>
        </svg>
      ),
      title: 'Customer First',
      desc: 'Your satisfaction is our top priority.',
    },
  ];

  const milestones = [
    { year: '2010', event: 'Founded in New York City' },
    { year: '2013', event: 'Expanded to 10 major cities' },
    { year: '2016', event: 'Launched international shipping' },
    { year: '2019', event: 'Reached 1M packages delivered' },
    { year: '2022', event: 'Opened 50th branch nationwide' },
    { year: '2024', event: 'Achieved 99.9% success rate' },
  ];

  return (
    <>
      <section className="page-banner">
        <h1>About NLS</h1>
        <p>Learn about our journey and commitment to excellence.</p>
      </section>

      {/* Story Section */}
      <section className="section">
        <div className="container">
          <div className="about-story">
            <div className="about-story-content">
              <span className="badge badge-primary">Our Story</span>
              <h2>Neon Logistic Service</h2>
              <div className="divider" />
              <p>Founded in 2010, NLS has grown to become one of America's leading logistics providers. With a fleet of 5,000+ vehicles and partnerships worldwide, we deliver on our promise of speed and reliability.</p>
              <p>Our state-of-the-art tracking system and 24/7 support ensure your shipments arrive safely and on time. From small businesses to Fortune 500 companies, we serve thousands of clients across every industry.</p>
              <div className="about-stats-row">
                <div className="about-stat">
                  <span className="about-stat-num">5,000+</span>
                  <span className="about-stat-lbl">Vehicles</span>
                </div>
                <div className="about-stat">
                  <span className="about-stat-num">200+</span>
                  <span className="about-stat-lbl">Countries</span>
                </div>
                <div className="about-stat">
                  <span className="about-stat-num">10K+</span>
                  <span className="about-stat-lbl">Clients</span>
                </div>
              </div>
            </div>
            <div className="about-story-image">
              <img src="/src/assets/warehouse-storage.jpg" alt="NLS Warehouse" />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section" style={{ background: 'var(--surface)' }}>
        <div className="container">
          <div className="section-header">
            <span className="badge badge-primary">Our Values</span>
            <h2>What Drives Us</h2>
            <div className="divider divider-center" />
            <p>These core principles guide everything we do.</p>
          </div>
          <div className="about-values-grid">
            {values.map((v, i) => (
              <div key={i} className="about-value-card card card-hover-primary">
                <div className="about-value-icon">{v.icon}</div>
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="badge badge-secondary">Our Journey</span>
            <h2>Company Milestones</h2>
            <div className="divider divider-center" />
          </div>
          <div className="about-timeline">
            {milestones.map((m, i) => (
              <div key={i} className="about-timeline-item">
                <div className="about-timeline-dot" />
                <span className="about-timeline-year">{m.year}</span>
                <p>{m.event}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section" style={{ paddingTop: 0}}>
        <div className="container">
          <div className="cta-card" style={{ background: 'linear-gradient(135deg, var(--primary), var(--primary-dark))' }}>
            <div className="cta-content" style={{ background: 'whitesmoke'}}>
              <h2>Ready to Work With Us?</h2>
              <p>Let's discuss how NLS can optimize your logistics.</p>
              <div className="cta-actions">
                <Link to="/contact" className="btn btn-secondary btn-lg">Contact Us</Link>
                <Link to="/services" className="btn btn-outline btn-lg">Explore Services</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .about-story {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
        }

        .about-story-content > .badge {
          margin-bottom: 16px;
        }

        .about-story-content h2 {
          margin-bottom: 0;
        }

        .about-story-content p {
          color: var(--text-secondary);
          margin-bottom: 16px;
        }

        .about-story-image img {
          width: 100%;
          border-radius: var(--radius-lg);
          box-shadow: var(--shadow-lg);
        }

        .about-stats-row {
          display: flex;
          gap: 32px;
          margin-top: 24px;
          padding-top: 24px;
          border-top: 1px solid var(--border);
        }

        .about-stat {
          display: flex;
          flex-direction: column;
        }

        .about-stat-num {
          font-size: 1.5rem;
          font-weight: 800;
          color: var(--primary);
        }

        .about-stat-lbl {
          font-size: 13px;
          color: var(--text-muted);
        }

        /* Values Grid */
        .about-values-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
        }

        .about-value-card {
          text-align: center;
          padding: 36px 24px;
        }

        .about-value-icon {
          width: 56px;
          height: 56px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--primary-bg);
          color: var(--primary);
          border-radius: var(--radius);
          margin: 0 auto 16px;
        }

        .about-value-card h3 {
          margin-bottom: 8px;
        }

        .about-value-card p {
          font-size: 14px;
          color: var(--text-muted);
        }

        /* Timeline */
        .about-timeline {
          display: flex;
          justify-content: space-between;
          position: relative;
          padding: 40px 0;
        }

        .about-timeline::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 0;
          right: 0;
          height: 2px;
          background: var(--border);
          transform: translateY(-50%);
        }

        .about-timeline-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 8px;
          position: relative;
          flex: 1;
        }

        .about-timeline-dot {
          width: 16px;
          height: 16px;
          border-radius: 50%;
          background: var(--primary);
          border: 3px solid var(--white);
          box-shadow: 0 0 0 2px var(--primary);
          z-index: 1;
        }

        .about-timeline-year {
          font-size: 14px;
          font-weight: 700;
          color: var(--secondary);
        }

        .about-timeline-item p {
          font-size: 12px;
          color: var(--text-muted);
          max-width: 120px;
        }

        @media (max-width: 1024px) {
          .about-values-grid { grid-template-columns: repeat(2, 1fr); }
        }

        @media (max-width: 768px) {
          .about-story { grid-template-columns: 1fr; gap: 32px; }
          .about-story-image { order: -1; }
          .about-values-grid { grid-template-columns: 1fr; }
          .about-timeline { flex-direction: column; padding: 0; gap: 24px; }
          .about-timeline::before { display: none; }
          .about-timeline-item { flex-direction: row; gap: 16px; text-align: left; }
          .about-timeline-item p { max-width: none; }
        }
      `}</style>
    </>
  );
};

export default About;
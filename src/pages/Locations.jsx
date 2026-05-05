import { useState } from 'react';
import locationsData from '../data/locations.json';

const Locations = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredLocations = locationsData.filter(location =>
    location.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
    location.zip.includes(searchTerm)
  );

  return (
    <>
      <section className="page-banner">
        <h1>Our Locations</h1>
        <p>Find an NLS branch near you.</p>
      </section>

      <section className="section">
        <div className="container">
          <div className="locations-search">
            <div className="locations-search-card card">
              <div className="locations-search-inner">
                <div className="form-group" style={{ marginBottom: 0, flex: 1 }}>
                  <div className="form-input-icon">
                    <svg className="input-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>
                    </svg>
                    <input type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} placeholder="Search by city or ZIP code..." />
                  </div>
                </div>
                <span className="locations-count badge badge-secondary">{filteredLocations.length} location{filteredLocations.length !== 1 ? 's' : ''} found</span>
              </div>
            </div>
          </div>

          {filteredLocations.length === 0 ? (
            <div className="locations-empty">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--text-muted)', marginBottom: '16px' }}>
                <circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>
              </svg>
              <h3>No locations found</h3>
              <p>Try searching by city or ZIP code</p>
            </div>
          ) : (
            <div className="locations-grid">
              {filteredLocations.map((location, index) => (
                <div key={index} className="location-card card card-hover-primary">
                  <div className="location-card-header">
                    <div className="location-card-icon">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
                      </svg>
                    </div>
                    <div>
                      <h3>{location.city}</h3>
                      <span className="badge badge-secondary">{location.zip}</span>
                    </div>
                  </div>
                  <div className="location-card-body">
                    <p><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg> {location.address}</p>
                    <p><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg> {location.phone}</p>
                  </div>
                  <div className="location-card-footer">
                    <a href={`https://maps.google.com/?q=${encodeURIComponent(location.address)}`} target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-sm btn-block">Get Directions</a>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="section" style={{ background: 'var(--surface)', paddingTop: 0 }}>
        <div className="container">
          <div className="branch-stats">
            <div><span className="branch-stat-value">50+</span><span className="branch-stat-label">Branches Nationwide</span></div>
            <div className="branch-stat-divider" />
            <div><span className="branch-stat-value">All 50</span><span className="branch-stat-label">States Covered</span></div>
            <div className="branch-stat-divider" />
            <div><span className="branch-stat-value">24/7</span><span className="branch-stat-label">Branch Support</span></div>
          </div>
        </div>
      </section>

      <style>{`
        .locations-search { margin-bottom: 32px; }
        .locations-search-card { padding: 20px 24px; }
        .locations-search-inner { display: flex; align-items: center; gap: 16px; }
        .locations-count { white-space: nowrap; flex-shrink: 0; }
        .locations-empty { text-align: center; padding: 64px 32px; background: var(--white); border-radius: var(--radius-md); border: 1px solid var(--border-light); }
        .locations-empty h3 { margin-bottom: 8px; }
        .locations-empty p { color: var(--text-muted); }
        .locations-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(340px, 1fr)); gap: 20px; }
        .location-card { padding: 24px; display: flex; flex-direction: column; }
        .location-card-header { display: flex; align-items: center; gap: 14px; margin-bottom: 16px; padding-bottom: 16px; border-bottom: 1px solid var(--border-light); }
        .location-card-icon { width: 44px; height: 44px; display: flex; align-items: center; justify-content: center; background: var(--primary-bg); color: var(--primary); border-radius: var(--radius); flex-shrink: 0; }
        .location-card-header h3 { margin-bottom: 4px; font-size: 1.125rem; }
        .location-card-body { flex: 1; display: flex; flex-direction: column; gap: 12px; margin-bottom: 20px; }
        .location-card-body p { display: flex; align-items: flex-start; gap: 10px; font-size: 14px; color: var(--text-secondary); }
        .location-card-body svg { flex-shrink: 0; margin-top: 3px; color: var(--primary); }
        .location-card-footer { padding-top: 16px; border-top: 1px solid var(--border-light); }
        .branch-stats { display: flex; align-items: center; justify-content: center; gap: 48px; padding: 48px 32px; background: var(--white); border-radius: var(--radius-md); border: 1px solid var(--border-light); }
        .branch-stat-value { font-size: 2rem; font-weight: 800; color: var(--secondary); display: block; text-align: center; }
        .branch-stat-label { font-size: 13px; color: var(--text-muted); font-weight: 500; display: block; text-align: center; }
        .branch-stat-divider { width: 1px; height: 48px; background: var(--border); }
        @media (max-width: 768px) {
          .locations-search-inner { flex-direction: column; }
          .locations-grid { grid-template-columns: 1fr; }
          .branch-stats { flex-direction: column; gap: 24px; padding: 32px 20px; }
          .branch-stat-divider { width: 48px; height: 1px; }
        }
      `}</style>
    </>
  );
};

export default Locations;
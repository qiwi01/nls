import { useState } from 'react';
import trackingData from '../data/tracking.json';

const Track = () => {
  const [trackingId, setTrackingId] = useState('');
  const [shipment, setShipment] = useState(null);
  const [searched, setSearched] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    const found = trackingData.find(item => item.id === trackingId.toUpperCase());
    setShipment(found || null);
    setSearched(true);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Delivered': return 'var(--success)';
      case 'In Transit': return 'var(--info)';
      case 'Processing': return 'var(--warning)';
      case 'Pending': return 'var(--text-muted)';
      default: return 'var(--text-muted)';
    }
  };

  return (
    <>
      <section className="page-banner">
        <h1>Track Your Shipment</h1>
        <p>Enter your tracking number to get real-time updates on your package.</p>
      </section>

      <section className="section">
        <div className="container">
          <div className="track-layout">
            {/* Tracking Form */}
            <div className="track-form-wrapper">
              <div className="track-form-card card">
                <div className="track-form-header">
                  <div className="track-form-icon">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>
                    </svg>
                  </div>
                  <div>
                    <h3>Tracking Number</h3>
                    <p className="text-muted">Enter the tracking number from your shipping confirmation</p>
                  </div>
                </div>
                <form onSubmit={handleSearch} className="track-form">
                  <div className="form-group">
                    <div className="form-input-icon">
                      <svg className="input-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/>
                      </svg>
                      <input
                        type="text"
                        value={trackingId}
                        onChange={(e) => setTrackingId(e.target.value.toUpperCase())}
                        placeholder="e.g. NLS123456789"
                        required
                      />
                    </div>
                  </div>
                  <button type="submit" className="btn btn-primary btn-lg btn-block">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>
                    </svg>
                    Track Package
                  </button>
                </form>
              </div>

              {/* Quick Tips */}
              <div className="track-tips">
                <h4>Quick Tips</h4>
                <ul>
                  <li>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
                    Tracking numbers typically start with "NLS"
                  </li>
                  <li>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
                    Need help? Call 1-800-NLS-DELIVER
                  </li>
                </ul>
              </div>
            </div>

            {/* Results */}
            <div className="track-results">
              {!searched && (
                <div className="track-placeholder">
                  <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="track-placeholder-icon">
                    <rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/>
                  </svg>
                  <h3>Enter a tracking number</h3>
                  <p>Search for real-time updates on your shipment</p>
                </div>
              )}

              {searched && !shipment && (
                <div className="track-not-found">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--danger)', marginBottom: '16px' }}>
                    <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
                  </svg>
                  <h3>No shipment found</h3>
                  <p>We couldn't find a shipment with tracking ID: <strong>{trackingId}</strong></p>
                  <p>Please check the number and try again, or contact support at 1-800-NLS-DELIVER</p>
                </div>
              )}

              {shipment && (
                <div className="track-result-details">
                  {/* Status Header */}
                  <div className="track-status-header">
                    <div className="track-status-info">
                      <h3>Tracking ID: <span style={{ color: 'var(--primary)' }}>{shipment.id}</span></h3>
                      <p className="text-muted">{shipment.from} → {shipment.to}</p>
                    </div>
                    <div className="track-status-badge" style={{ background: getStatusColor(shipment.status) }}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                      {shipment.status}
                    </div>
                  </div>

                  {/* Timeline */}
                  <div className="track-timeline">
                    <h4 className="track-timeline-title">Delivery Timeline</h4>
                    <div className="track-timeline-steps">
                      {shipment.timeline.map((step, index) => (
                        <div key={index} className={`track-timeline-step ${index === shipment.timeline.length - 1 ? 'active' : ''}`}>
                          <div className="track-timeline-dot" />
                          <div className="track-timeline-content">
                            <span className="track-timeline-date">{step.date}</span>
                            <h4 className="track-timeline-location">{step.location}</h4>
                            <p className="track-timeline-status">{step.status}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Delivery Progress Bar */}
                  <div className="track-progress">
                    <div className="track-progress-bar">
                      <div className="track-progress-fill" style={{ width: `${Math.min((shipment.timeline.length / 5) * 100, 100)}%` }} />
                    </div>
                    <div className="track-progress-labels">
                      <span>Order Placed</span>
                      <span>In Transit</span>
                      <span>Out for Delivery</span>
                      <span>Delivered</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .track-layout {
          display: grid;
          grid-template-columns: 400px 1fr;
          gap: 32px;
          align-items: start;
        }

        /* Form Card */
        .track-form-card {
          padding: 32px;
        }

        .track-form-header {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 24px;
        }

        .track-form-header h3 {
          margin-bottom: 4px;
        }

        .track-form-header p {
          font-size: 13px;
        }

        .track-form-icon {
          width: 52px;
          height: 52px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--primary-bg);
          color: var(--primary);
          border-radius: var(--radius-md);
          flex-shrink: 0;
        }

        .track-form {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        /* Tips */
        .track-tips {
          margin-top: 24px;
          padding: 20px;
          background: var(--white);
          border-radius: var(--radius-md);
          border: 1px solid var(--border-light);
        }

        .track-tips h4 {
          margin-bottom: 12px;
          font-size: 14px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          color: var(--text-muted);
        }

        .track-tips ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .track-tips li {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 13px;
          color: var(--text-secondary);
          margin-bottom: 8px;
        }

        .track-tips li svg {
          color: var(--primary);
          flex-shrink: 0;
        }

        /* Results Area */
        .track-results {
          min-height: 400px;
        }

        /* Placeholder */
        .track-placeholder {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          height: 100%;
          min-height: 400px;
          padding: 40px;
          background: var(--white);
          border-radius: var(--radius-md);
          border: 2px dashed var(--border);
        }

        .track-placeholder-icon {
          color: var(--border-dark);
          margin-bottom: 20px;
        }

        .track-placeholder h3 {
          margin-bottom: 8px;
        }

        .track-placeholder p {
          color: var(--text-muted);
        }

        /* Not Found */
        .track-not-found {
          text-align: center;
          padding: 48px 32px;
          background: var(--white);
          border-radius: var(--radius-md);
          border: 1px solid var(--border-light);
        }

        .track-not-found h3 {
          margin-bottom: 8px;
        }

        .track-not-found p {
          color: var(--text-muted);
          margin-bottom: 4px;
        }

        /* Status Header */
        .track-status-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 16px;
          padding: 28px;
          background: var(--white);
          border-radius: var(--radius-md);
          border: 1px solid var(--border-light);
          margin-bottom: 24px;
        }

        .track-status-info h3 {
          margin-bottom: 4px;
        }

        .track-status-info p {
          font-size: 14px;
        }

        .track-status-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 10px 20px;
          border-radius: var(--radius);
          color: var(--white);
          font-weight: 600;
          font-size: 14px;
          white-space: nowrap;
        }

        /* Timeline */
        .track-timeline {
          padding: 28px;
          background: var(--white);
          border-radius: var(--radius-md);
          border: 1px solid var(--border-light);
          margin-bottom: 24px;
        }

        .track-timeline-title {
          margin-bottom: 24px;
        }

        .track-timeline-steps {
          position: relative;
          padding-left: 28px;
        }

        .track-timeline-steps::before {
          content: '';
          position: absolute;
          left: 8px;
          top: 0;
          bottom: 0;
          width: 2px;
          background: var(--border);
        }

        .track-timeline-step {
          position: relative;
          padding-bottom: 24px;
        }

        .track-timeline-step:last-child {
          padding-bottom: 0;
        }

        .track-timeline-dot {
          position: absolute;
          left: -24px;
          top: 4px;
          width: 14px;
          height: 14px;
          border-radius: 50%;
          background: var(--border);
          border: 3px solid var(--white);
          box-shadow: 0 0 0 2px var(--border);
          z-index: 1;
        }

        .track-timeline-step.active .track-timeline-dot {
          background: var(--success);
          box-shadow: 0 0 0 2px var(--success);
        }

        .track-timeline-date {
          font-size: 12px;
          font-weight: 600;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.5px;
          display: block;
          margin-bottom: 4px;
        }

        .track-timeline-location {
          font-size: 16px;
          margin-bottom: 2px;
        }

        .track-timeline-status {
          font-size: 13px;
          color: var(--text-secondary);
        }

        /* Progress Bar */
        .track-progress {
          padding: 28px;
          background: var(--white);
          border-radius: var(--radius-md);
          border: 1px solid var(--border-light);
        }

        .track-progress-bar {
          height: 6px;
          background: var(--border-light);
          border-radius: 3px;
          overflow: hidden;
          margin-bottom: 12px;
        }

        .track-progress-fill {
          height: 100%;
          background: linear-gradient(90deg, var(--primary), var(--primary-light));
          border-radius: 3px;
          transition: width 0.6s ease;
        }

        .track-progress-labels {
          display: flex;
          justify-content: space-between;
        }

        .track-progress-labels span {
          font-size: 11px;
          color: var(--text-muted);
          font-weight: 500;
        }

        /* Responsive */
        @media (max-width: 1024px) {
          .track-layout {
            grid-template-columns: 1fr;
          }

          .track-results {
            min-height: auto;
          }
        }

        @media (max-width: 768px) {
          .track-form-card {
            padding: 24px;
          }

          .track-status-header {
            flex-direction: column;
          }

          .track-form-header {
            flex-direction: column;
            text-align: center;
          }

          .track-progress-labels span:not(:first-child):not(:last-child) {
            display: none;
          }
        }
      `}</style>
    </>
  );
};

export default Track;
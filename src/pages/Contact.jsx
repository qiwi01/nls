import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  return (
    <>
      <section className="page-banner">
        <h1>Contact Us</h1>
        <p>Have questions? Need a quote? We're here to help 24/7.</p>
      </section>

      <section className="section">
        <div className="container">
          <div className="contact-layout">
            {/* Contact Info Cards */}
            <div className="contact-info">
              <div className="contact-info-card card">
                <div className="contact-info-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                </div>
                <div>
                  <h4>Phone</h4>
                  <p>1-800-NLS-DELIVER</p>
                  <small className="text-muted">Available 24/7</small>
                </div>
              </div>

              <div className="contact-info-card card">
                <div className="contact-info-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                </div>
                <div>
                  <h4>Email</h4>
                  <p>support@nls.com</p>
                  <small className="text-muted">We reply within 2 hours</small>
                </div>
              </div>

              <div className="contact-info-card card">
                <div className="contact-info-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                </div>
                <div>
                  <h4>Hours</h4>
                  <p>24/7 Customer Support</p>
                  <small className="text-muted">Always here for you</small>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="contact-form-wrapper">
              {submitted ? (
                <div className="contact-success">
                  <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="var(--success)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
                  </svg>
                  <h3>Message Sent!</h3>
                  <p>Thank you {formData.name}! We'll get back to you within 2 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="contact-form card">
                  <h3>Send Us a Message</h3>
                  <p className="text-muted" style={{ marginBottom: '24px' }}>Fill out the form below and our team will get back to you.</p>
                  
                  <div className="contact-form-grid">
                    <div className="form-group">
                      <label htmlFor="name">Full Name</label>
                      <input id="name" name="name" type="text" value={formData.name} onChange={handleChange} placeholder="John Smith" required />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email Address</label>
                      <input id="email" name="email" type="email" value={formData.email} onChange={handleChange} placeholder="john@company.com" required />
                    </div>
                    <div className="form-group">
                      <label htmlFor="phone">Phone Number</label>
                      <input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} placeholder="+1 (555) 123-4567" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="subject">Subject</label>
                      <select id="subject" name="subject" value={formData.subject} onChange={handleChange} required>
                        <option value="">Select a subject</option>
                        <option value="quote">Request a Quote</option>
                        <option value="support">Customer Support</option>
                        <option value="tracking">Tracking Issue</option>
                        <option value="partnership">Partnership Inquiry</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea id="message" name="message" value={formData.message} onChange={handleChange} placeholder="Tell us how we can help..." required />
                  </div>

                  <button type="submit" className="btn btn-primary btn-lg btn-block">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 2 11 13"/><path d="M22 2 15 22 11 13 2 9 22 2z"/></svg>
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Address Section */}
      <section className="section" style={{ background: 'var(--surface)', paddingTop: 0 }}>
        <div className="container">
          <div className="contact-address-card card">
            <div className="contact-address-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
            </div>
            <div>
              <h4>Headquarters</h4>
              <p>123 Logistics Avenue, Suite 100, New York, NY 10001</p>
            </div>
            <a href="https://maps.google.com/?q=123+Logistics+Avenue+New+York+NY+10001" target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-sm">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              View on Map
            </a>
          </div>
        </div>
      </section>

      <style>{`
        .contact-layout {
          display: grid;
          grid-template-columns: 1fr 1.5fr;
          gap: 32px;
          align-items: start;
        }

        /* Info Cards */
        .contact-info {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .contact-info-card {
          display: flex;
          align-items: flex-start;
          gap: 16px;
          padding: 24px;
        }

        .contact-info-icon {
          width: 48px;
          height: 48px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--primary-bg);
          color: var(--primary);
          border-radius: var(--radius);
          flex-shrink: 0;
        }

        .contact-info-card h4 {
          margin-bottom: 4px;
        }

        .contact-info-card p {
          font-size: 15px;
          font-weight: 600;
          color: var(--text-primary);
        }

        .contact-info-card small {
          font-size: 12px;
        }

        /* Form */
        .contact-form {
          padding: 36px;
        }

        .contact-form h3 {
          margin-bottom: 4px;
        }

        .contact-form-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0 20px;
        }

        /* Success */
        .contact-success {
          text-align: center;
          padding: 64px 32px;
          background: var(--white);
          border-radius: var(--radius-md);
          border: 1px solid var(--border-light);
        }

        .contact-success svg {
          margin-bottom: 16px;
        }

        .contact-success h3 {
          margin-bottom: 8px;
          color: var(--success);
        }

        .contact-success p {
          color: var(--text-muted);
        }

        /* Address Card */
        .contact-address-card {
          display: flex;
          align-items: center;
          gap: 20px;
          padding: 24px 32px;
        }

        .contact-address-icon {
          width: 52px;
          height: 52px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--primary-bg);
          color: var(--primary);
          border-radius: var(--radius);
          flex-shrink: 0;
        }

        .contact-address-card h4 {
          margin-bottom: 4px;
        }

        .contact-address-card p {
          font-size: 14px;
          color: var(--text-secondary);
        }

        .contact-address-card .btn {
          margin-left: auto;
          flex-shrink: 0;
        }

        @media (max-width: 1024px) {
          .contact-layout { grid-template-columns: 1fr; }
        }

        @media (max-width: 768px) {
          .contact-form { padding: 24px; }
          .contact-form-grid { grid-template-columns: 1fr; }
          .contact-address-card { flex-direction: column; text-align: center; }
          .contact-address-card .btn { margin-left: 0; width: 100%; }
        }
      `}</style>
    </>
  );
};

export default Contact;
import { Link } from 'react-router-dom';
import img1 from "../assets/domestic.jpg"
import img2 from "../assets/warehouse.jpg"
import img3 from "../assets/plane.jpg"
import img4 from "../assets/express delivery.jpg"

const Services = () => {
  const services = [
    {
      title: 'Domestic Delivery',
      desc: 'Fast and reliable delivery anywhere in the USA. From small packages to full truckloads, we handle it all with precision and care.',
      image: img1,
      price: 'Starting at $5.99',
      features: ['Nationwide coverage', 'Real-time tracking', 'Insurance included', 'Flexible scheduling'],
      badge: 'Most Popular',
    },
    {
      title: 'International Shipping',
      desc: 'Global delivery to 200+ countries with seamless customs clearance and end-to-end visibility.',
      image: img3,
      price: 'Starting at $29.99',
      features: ['200+ countries', 'Customs clearance', 'Door-to-door', 'DDP available'],
      badge: 'Global Reach',
    },
    {
      title: 'Express Delivery',
      desc: 'Same-day or next-day delivery for urgent shipments. When time matters most, choose NLS Express.',
      image: img4,
      price: 'Starting at $19.99',
      features: ['Same-day available', 'Priority handling', 'Dedicated courier', 'SMS updates'],
      badge: 'Fastest Option',
    },
    {
      title: 'Warehouse Storage',
      desc: 'Secure storage and fulfillment services for your inventory with climate-controlled facilities.',
      image: img2,
      price: 'Contact for pricing',
      features: ['Climate controlled', 'Inventory management', 'Pick & pack', 'Distribution'],
      badge: 'Enterprise',
    },
  ];

  return (
    <>
      {/* Page Banner */}
      <section className="page-banner">
        <h1>Our Services</h1>
        <p>Comprehensive logistics solutions tailored to your business needs.</p>
      </section>

      {/* Services Grid */}
      <section className="section">
        <div className="container">
          <div className="services-grid-detailed">
            {services.map((service, index) => (
              <div key={index} className="service-detailed-card card card-hover-primary">
                <div className="service-detailed-image">
                  <img src={service.image} alt={service.title} />
                  <span className="badge badge-primary">{service.badge}</span>
                </div>
                <div className="service-detailed-content">
                  <h2 className="service-detailed-title">{service.title}</h2>
                  <p className="service-detailed-desc">{service.desc}</p>
                  <p className="service-detailed-price">{service.price}</p>
                  <ul className="service-detailed-features">
                    {service.features.map((feature, i) => (
                      <li key={i}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact" className="btn btn-primary">
                    Get a Quote
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services Section */}
      <section className="section" style={{ background: 'var(--surface)', paddingTop: 0 }}>
        <div className="container">
          <div className="additional-services-grid">
            <div className="additional-service-item">
              <div className="additional-service-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                </svg>
              </div>
              <h4>Freight Services</h4>
              <p>Full truckload and less-than-truckload options for large shipments.</p>
            </div>
            <div className="additional-service-item">
              <div className="additional-service-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                </svg>
              </div>
              <h4>Supply Chain</h4>
              <p>End-to-end supply chain management and optimization.</p>
            </div>
            <div className="additional-service-item">
              <div className="additional-service-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                </svg>
              </div>
              <h4>Fulfillment</h4>
              <p>Pick, pack, and ship your products with our fulfillment centers.</p>
            </div>
            <div className="additional-service-item">
              <div className="additional-service-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
                </svg>
              </div>
              <h4>Returns Management</h4>
              <p>Simplified reverse logistics and returns processing.</p>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .services-grid-detailed {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 28px;
        }

        .service-detailed-card {
          overflow: hidden;
          padding: 0;
          display: flex;
          flex-direction: column;
        }

        .service-detailed-image {
          position: relative;
          height: 220px;
          overflow: hidden;
        }

        .service-detailed-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.4s ease;
        }

        .service-detailed-card:hover .service-detailed-image img {
          transform: scale(1.05);
        }

        .service-detailed-image .badge {
          position: absolute;
          top: 16px;
          left: 16px;
        }

        .service-detailed-content {
          padding: 28px;
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        .service-detailed-title {
          margin-bottom: 12px;
        }

        .service-detailed-desc {
          font-size: 14px;
          color: var(--text-secondary);
          margin-bottom: 12px;
          flex: 1;
        }

        .service-detailed-price {
          font-size: 18px;
          font-weight: 700;
          color: var(--primary);
          margin-bottom: 16px;
        }

        .service-detailed-features {
          list-style: none;
          padding: 0;
          margin: 0 0 24px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 8px;
        }

        .service-detailed-features li {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 13px;
          color: var(--text-secondary);
        }

        .service-detailed-features li svg {
          color: var(--success);
          flex-shrink: 0;
        }

        /* Additional Services */
        .additional-services-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
          margin-top: 60px;
        }

        .additional-service-item {
          text-align: center;
          padding: 32px 20px;
          background: var(--white);
          border-radius: var(--radius-md);
          border: 1px solid var(--border-light);
          transition: var(--transition);
        }

        .additional-service-item:hover {
          box-shadow: var(--shadow-md);
          transform: translateY(-2px);
          border-color: var(--border);
        }

        .additional-service-icon {
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

        .additional-service-item h4 {
          margin-bottom: 8px;
        }

        .additional-service-item p {
          font-size: 13px;
          color: var(--text-muted);
        }

        /* Responsive */
        @media (max-width: 1024px) {
          .services-grid-detailed {
            grid-template-columns: 1fr;
          }

          .additional-services-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .service-detailed-features {
            grid-template-columns: 1fr;
          }

          .additional-services-grid {
            grid-template-columns: 1fr;
            gap: 16px;
          }
        }
      `}</style>
    </>
  );
};

export default Services;
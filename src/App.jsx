import React, { useState } from 'react';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: 'house-shifting',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const services = [
    {
      id: 'house-shifting',
      icon: '🏠',
      title: 'House Shifting',
      description: 'Complete packing, loading, and safe transportation of your household items with premium protective multi-layer packaging.'
    },
    {
      id: 'office-relocation',
      icon: '🏢',
      title: 'Office Relocation',
      description: 'Minimizing downtime with systematic labeling and secure handling of IT infrastructure, servers, workstations, and office archives.'
    },
    {
      id: 'vehicle-transport',
      icon: '🚗',
      title: 'Vehicle Transport',
      description: 'Specialized closed or open car carriers and bike shipping with end-to-end real-time tracking and comprehensive transit insurance.'
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert("Please fill out all required fields.");
      return;
    }
    setSubmitted(true);
  };

  return (
    // The theme class updates dynamically right here
    <div className={`landing-page ${darkMode ? 'dark' : 'light'}`}>
      
      {/* HEADER / NAVBAR */}
      <header className="navbar">
        <div className="nav-container">
          <div className="logo">
            <span className="logo-accent">Swift</span>Movers
          </div>
          
          <div className="nav-actions-wrapper">
            {/* NIGHT MODE TOGGLE BUTTON */}
            <button 
              className="theme-toggle-btn" 
              onClick={() => setDarkMode(!darkMode)}
              aria-label="Toggle Night Mode"
            >
              {darkMode ? '☀️ Light Mode' : '🌙 Night Mode'}
            </button>

            <button 
              className="mobile-toggle" 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? '✕' : '☰'}
            </button>
          </div>

          <nav className={`nav-menu ${mobileMenuOpen ? 'active' : ''}`}>
            <a href="#hero" onClick={() => setMobileMenuOpen(false)}>Home</a>
            <a href="#services" onClick={() => setMobileMenuOpen(false)}>Services</a>
            <a href="#quote" onClick={() => setMobileMenuOpen(false)} className="nav-cta">Get Quote</a>
          </nav>
        </div>
      </header>

      {/* HERO SECTION */}
      <section id="hero" className="hero-section">
        <div className="hero-container">
          <div className="hero-content">
            <span className="badge">Reliable & Safe Logistics</span>
            <h1>Move Anywhere Seamlessly Without The Stress</h1>
            <p>Professional packing, secure handling, and on-time delivery across the country. Let our expert crew manage the heavy lifting.</p>
            <div className="hero-actions">
              <a href="#quote" className="btn btn-primary">Book Your Move</a>
              <a href="#services" className="btn btn-secondary">Our Services</a>
            </div>
          </div>
          <div className="hero-visual">
            <div className="floating-card text-card">
              <span className="icon-badge">✓</span>
              <div>
                <h4>100% Insured</h4>
                <p>Zero risk transit coverage</p>
              </div>
            </div>
            <div className="floating-card visual-graphic">
              <div className="truck-body">🚚</div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section id="services" className="services-section">
        <div className="section-header">
          <h2>Our Core Moving Solutions</h2>
          <p>We provide tailormade moving services executed by certified professionals to suit your timeline and budget.</p>
        </div>
        
        <div className="services-grid">
          {services.map(service => (
            <div className="service-card" key={service.id}>
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT / ESTIMATE FORM */}
      <section id="quote" className="contact-section">
        <div className="contact-container">
          <div className="contact-info">
            <h2>Get an Instant Accurate Quote</h2>
            <p>Provide your contact specifics and moving requirements. Our logistical estimation team will call you back within 15 minutes with a comprehensive flat-rate pricing plan.</p>
            
            <div className="info-item">
              <span className="info-icon">📞</span>
              <div>
                <h4>Call Support</h4>
                <p>+1 (800) 555-MOVE</p>
              </div>
            </div>
          </div>

          <div className="contact-card">
            {submitted ? (
              <div className="success-state">
                <div className="success-icon">🎉</div>
                <h3>Quote Request Received!</h3>
                <p>Thank you, <strong>{formData.name}</strong>. An moving coordinator will contact you shortly on <strong>{formData.phone}</strong> to confirm your details.</p>
                <button className="btn btn-primary" onClick={() => { setSubmitted(false); setFormData({name:'', phone:'', service:'house-shifting', message:''}); }}>
                  Submit Another Request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="quote-form">
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    placeholder="John Doe"
                    value={formData.name} 
                    onChange={handleInputChange} 
                    required 
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone Number *</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone" 
                    placeholder="123-456-7890"
                    value={formData.phone} 
                    onChange={handleInputChange} 
                    required 
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="service">Service Required</label>
                  <select 
                    id="service" 
                    name="service" 
                    value={formData.service} 
                    onChange={handleInputChange}
                  >
                    <option value="house-shifting">House Shifting</option>
                    <option value="office-relocation">Office Relocation</option>
                    <option value="vehicle-transport">Vehicle Transport</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Moving Details (Optional)</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows="3" 
                    placeholder="E.g., Moving from 2BHK 3rd floor to a townhouse next month..."
                    value={formData.message} 
                    onChange={handleInputChange}
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-submit">Get Free Quote</button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-brand">
            <div className="logo"><span className="logo-accent">Swift</span>Movers</div>
            <p>Making transitions seamless, secure, and completely stress-free since 2018.</p>
          </div>
          <div className="footer-links">
            <h4>Quick Access</h4>
            <a href="#hero">Back to Top</a>
            <a href="#services">Our Services</a>
            <a href="#quote">Get Estimates</a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} SwiftMovers Logistics Inc. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
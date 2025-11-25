// app/contact/page.tsx
"use client";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Mail, Phone, MapPin, Send, MessageCircle } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:pepiniereduseigneur96@gmail.com?subject=${encodeURIComponent(
      formData.subject
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage: ${formData.message}`
    )}`;
    window.location.href = mailtoLink;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="page-wrapper">
      <Header />

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay"></div>
        <div className="container hero-content">
          <h1 className="hero-title">Get in Touch</h1>
          <p className="hero-subtitle">
            We'd love to hear from you. Reach out for orders, collaborations, or prayer requests.
          </p>
        </div>
      </section>

      <div className="container main-content">
        <div className="grid-layout">
          {/* Contact Info Side */}
          <div className="info-column">
            <h2 className="section-title">Contact Information</h2>
            <p className="section-desc">
              Feel free to reach out to us through any of the following channels.
            </p>

            <div className="info-cards">
              <div className="info-card">
                <div className="icon-box bg-gold">
                  <Mail size={24} />
                </div>
                <div className="info-details">
                  <h3>Email Us</h3>
                  <a href="mailto:pepiniereduseigneur96@gmail.com">pepiniereduseigneur96@gmail.com</a>
                  <p className="sub-text">We'll respond within 24 hours</p>
                </div>
              </div>

              <div className="info-card">
                <div className="icon-box bg-green">
                  <MessageCircle size={24} />
                </div>
                <div className="info-details">
                  <h3>WhatsApp</h3>
                  <a href="https://api.whatsapp.com/send?phone=250788549539&text=Hello" target="_blank" rel="noopener noreferrer">
                    Send us a message
                  </a>
                  <p className="sub-text">Quick responses for orders</p>
                </div>
              </div>

              <div className="info-card">
                <div className="icon-box bg-navy">
                  <MapPin size={24} />
                </div>
                <div className="info-details">
                  <h3>Visit Us</h3>
                  <p className="location-text">Kaminuza SDA Church</p>
                  <p className="location-text">Huye, Rwanda</p>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            
            <div className="map-container">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d31885.351060667923!2d29.719170615650565!3d-2.613324522659983!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x19c30d985ec6ed3b%3A0x1409691d1cd27a2!2sKaminuza%20SDA%20church!3m2!1d-2.6133485999999997!2d29.7388181!4m5!1s0x19c30d985ec6ed3b%3A0x1409691d1cd27a2!2s9PPQ%2BMG8%2C%20Butare!3m2!1d-2.6133485999999997!2d29.7388181!5e0!3m2!1sen!2srw!4v1764071013454!5m2!1sen!2srw"
    width="100%"
    height="450"
    style={{ border: 0 }}
    allowFullScreen
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
</div>

          </div>

          {/* Contact Form Side */}
          <div className="form-column">
            <div className="form-card">
              <h2 className="form-title">Send a Message</h2>
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="john@example.com"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="How can we help?"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Write your message here..."
                  ></textarea>
                </div>

                <button type="submit" className="submit-btn">
                  <Send size={20} />
                  <span>Send Message</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <Footer />

      <style jsx>{`
        .page-wrapper {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          background-color: var(--color-gray-50);
        }

        .hero-section {
          position: relative;
          height: 40vh;
          min-height: 300px;
          background-image: url('/images/pc (3).jpg'); /* Reuse existing image */
          background-size: cover;
          background-position: center;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          color: white;
          margin-bottom: 4rem;
        }

        .hero-overlay {
          position: absolute;
          inset: 0;
          background: rgba(10, 25, 47, 0.8);
        }

        .hero-content {
          position: relative;
          z-index: 10;
        }

        .hero-title {
          font-family: var(--font-heading);
          font-size: 3rem;
          font-weight: 700;
          margin-bottom: 1rem;
        }

        .hero-subtitle {
          font-size: 1.1rem;
          opacity: 0.9;
          max-width: 600px;
          margin: 0 auto;
        }

        .main-content {
          padding-bottom: 5rem;
        }

        .grid-layout {
          display: grid;
          grid-template-columns: 1fr;
          gap: 4rem;
        }

        @media (min-width: 900px) {
          .grid-layout {
            grid-template-columns: 1fr 1.2fr;
          }
        }

        .section-title {
          font-family: var(--font-heading);
          font-size: 2rem;
          color: var(--color-navy-900);
          margin-bottom: 1rem;
          font-weight: 700;
        }

        .section-desc {
          color: var(--color-gray-600);
          margin-bottom: 2.5rem;
          font-size: 1.05rem;
        }

        .info-cards {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          margin-bottom: 3rem;
        }

        .info-card {
          display: flex;
          align-items: flex-start;
          gap: 1.2rem;
          background: white;
          padding: 1.5rem;
          border-radius: 12px;
          box-shadow: 0 4px 15px rgba(0,0,0,0.03);
          transition: transform 0.2s;
        }

        .info-card:hover {
          transform: translateX(5px);
        }

        .icon-box {
          padding: 0.8rem;
          border-radius: 50%;
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .bg-gold { background-color: var(--color-gold-500); }
        .bg-green { background-color: #25D366; }
        .bg-navy { background-color: var(--color-navy-900); }

        .info-details h3 {
          font-weight: 600;
          color: var(--color-navy-900);
          margin-bottom: 0.3rem;
        }

        .info-details a {
          color: var(--color-gray-700);
          font-weight: 500;
          text-decoration: none;
          transition: color 0.2s;
        }

        .info-details a:hover {
          color: var(--color-gold-600);
        }

        .location-text {
          color: var(--color-gray-700);
        }

        .sub-text {
          font-size: 0.85rem;
          color: var(--color-gray-500);
          margin-top: 0.3rem;
        }

        .map-container {
          border-radius: 12px;
          overflow: hidden;
          height: 250px;
          background: white;
          box-shadow: 0 4px 15px rgba(0,0,0,0.05);
        }

        .map-placeholder {
          width: 100%;
          height: 100%;
          background-color: var(--color-gray-100);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          color: var(--color-gray-500);
        }

        .form-card {
          background: white;
          padding: 2.5rem;
          border-radius: 16px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.05);
        }

        .form-title {
          font-size: 1.8rem;
          font-weight: 700;
          color: var(--color-navy-900);
          margin-bottom: 2rem;
        }

        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .form-group label {
          font-weight: 500;
          color: var(--color-navy-800);
          font-size: 0.95rem;
        }

        .form-group input,
        .form-group textarea {
          padding: 0.8rem 1rem;
          border: 1px solid var(--color-gray-300);
          border-radius: 8px;
          font-family: inherit;
          transition: border-color 0.2s, box-shadow 0.2s;
        }

        .form-group input:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: var(--color-gold-500);
          box-shadow: 0 0 0 3px rgba(217, 119, 6, 0.1);
        }

        .submit-btn {
          background-color: var(--color-gold-500);
          color: white;
          padding: 1rem;
          border: none;
          border-radius: 8px;
          font-weight: 600;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          transition: background-color 0.2s;
          margin-top: 1rem;
        }

        .submit-btn:hover {
          background-color: var(--color-gold-600);
        }
      `}</style>
    </div>
  );
}

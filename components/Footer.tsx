// components/Footer.tsx
"use client";
import Link from "next/link";
import { Facebook, Instagram, Youtube, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="footer-grid">
          {/* Brand & Mission */}
          <div className="footer-col">
            <h3 className="footer-heading">Chorale Pépinière</h3>
            <p className="footer-text">
              To share Christ’s love and prepare people for eternal life through our songs.
            </p>
            <div className="social-links">
              <a href="https://web.facebook.com/chorale.pepiniereduseigneur#" className="social-link"><Facebook size={20} /></a>
              <a href="https://www.instagram.com/chorale_pepiniere_du_seigneur/" className="social-link"><Instagram size={20} /></a>
              <a href="https://www.youtube.com/@ChoralePepiniereduSeigneur" className="social-link"><Youtube size={20} /></a>              
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-col">
            <h4 className="footer-subheading">Quick Links</h4>
            <ul className="footer-links">
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/members">Our Team</Link></li>
              <li><Link href="/events">Events</Link></li>
              <li><Link href="/store">Music Store</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-col">
            <h4 className="footer-subheading">Contact Us</h4>
            <ul className="contact-list">
              <li>
                <MapPin size={18} className="contact-icon" />
                <span>Huye, Rwanda</span>
              </li>
              <li>
                <Phone size={18} className="contact-icon" />
                <span>+250 788 549 539</span>
              </li>
              <li>
                <Mail size={18} className="contact-icon" />
                <span>pepiniereduseigneur96@gmail.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="footer-col">
            <h4 className="footer-subheading">Newsletter</h4>
            <p className="footer-text">Subscribe to get updates on new music and events.</p>
            <form className="newsletter-form">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="newsletter-input"
              />
              <button type="submit" className="btn btn-primary newsletter-btn">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Chorale Pépinière du Seigneur. All rights reserved.</p>
        </div>
      </div>

      <style jsx>{`
        .footer-section {
          background-color: var(--color-navy-900);
          color: var(--color-gray-300);
          padding: 4rem 0 2rem;
          margin-top: auto;
        }

        .footer-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 3rem;
          margin-bottom: 3rem;
        }

        @media (min-width: 768px) {
          .footer-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 1024px) {
          .footer-grid {
            grid-template-columns: repeat(4, 1fr);
          }
        }

        .footer-heading {
          color: var(--color-white);
          font-family: var(--font-heading);
          font-size: 1.5rem;
          margin-bottom: 1rem;
        }

        .footer-subheading {
          color: var(--color-white);
          font-family: var(--font-heading);
          font-size: 1.1rem;
          margin-bottom: 1.2rem;
        }

        .footer-text {
          font-size: 0.95rem;
          line-height: 1.6;
          margin-bottom: 1.5rem;
        }

        .social-links {
          display: flex;
          gap: 1rem;
        }

        .social-link {
          color: var(--color-white);
          opacity: 0.8;
          transition: all 0.3s ease;
        }

        .social-link:hover {
          color: var(--color-gold-500);
          opacity: 1;
          transform: translateY(-2px);
        }

        .footer-links {
          list-style: none;
          padding: 0;
        }

        .footer-links li {
          margin-bottom: 0.8rem;
        }

        .footer-links a {
          transition: color 0.3s ease;
        }

        .footer-links a:hover {
          color: var(--color-gold-500);
          padding-left: 5px;
        }

        .contact-list {
          list-style: none;
          padding: 0;
        }

        .contact-list li {
          display: flex;
          align-items: flex-start;
          gap: 0.8rem;
          margin-bottom: 1rem;
        }

        .contact-icon {
          color: var(--color-gold-500);
          margin-top: 3px;
        }

        .newsletter-form {
          display: flex;
          flex-direction: column;
          gap: 0.8rem;
        }

        .newsletter-input {
          padding: 0.8rem;
          border-radius: 4px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          background-color: rgba(255, 255, 255, 0.05);
          color: white;
          outline: none;
        }

        .newsletter-input:focus {
          border-color: var(--color-gold-500);
        }

        .newsletter-btn {
          width: 100%;
          border-radius: 4px;
        }

        .footer-bottom {
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          padding-top: 2rem;
          text-align: center;
          font-size: 0.9rem;
        }
      `}</style>
    </footer>
  );
};

export default Footer;

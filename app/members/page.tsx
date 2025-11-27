// app/members/page.tsx
"use client";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { User, Music, Mic } from "lucide-react";

export default function Members() {
  const sections = [
    {
      title: "Sopranos",
      description: "The soaring voices that lead our melodies.",
      count: 12,
      color: "bg-gold-100",
    },
    {
      title: "Altos",
      description: "Rich harmonies that add depth and warmth.",
      count: 10,
      color: "bg-navy-50",
    },
    {
      title: "Tenors",
      description: "Powerful and brilliant voices driving the rhythm.",
      count: 8,
      color: "bg-gold-100",
    },
    {
      title: "Basses",
      description: "The solid foundation of our choral sound.",
      count: 8,
      color: "bg-navy-50",
    },
  ];

  return (
    <div className="page-wrapper">
      <Header />

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay"></div>
        <div className="container hero-content">
          <h1 className="hero-title">Meet the Voices</h1>
          <p className="hero-subtitle">
            United in harmony, dedicated to praise.
          </p>
        </div>
      </section>

      {/* Choir Sections */}
      <section className="section-padding">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="section-title">Our Sections</h2>
            <p className="section-subtitle">One body, many parts, one voice</p>
          </div>

          <div className="sections-grid">
            {sections.map((section, index) => (
              <div key={index} className={`section-card ${section.color}`}>
                <div className="icon-wrapper">
                  <Mic size={32} className="text-navy-900" />
                </div>
                <h3 className="section-name">{section.title}</h3>
                <p className="section-desc">{section.description}</p>
                <div className="member-count">
                  <User size={16} />
                  <span>{section.count} Members</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Members (Placeholder) */}
      <section className="section-padding bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="section-title">Choir Committee</h2>
          </div>
          
          <div className="members-grid">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="member-card">
                <div className="member-image">
                  <User size={64} className="text-gray-300" />
                </div>
                <h3 className="member-name">Committee Member {i}</h3>
                <p className="member-role">Role Description</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join CTA */}
      <Footer />

      <style jsx>{`
        .page-wrapper {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
        }

        .hero-section {
          position: relative;
          height: 50vh;
          min-height: 350px;
          background-image: url('/images/pc (1).jpg'); /* Ensure exists */
          background-size: cover;
          background-position: center;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          color: white;
        }

        .hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(rgba(10, 25, 47, 0.8), rgba(10, 25, 47, 0.6));
        }

        .hero-content {
          position: relative;
          z-index: 10;
        }

        .hero-title {
          font-family: var(--font-heading);
          font-size: 3.5rem;
          font-weight: 700;
          margin-bottom: 1rem;
        }

        .hero-subtitle {
          font-size: 1.25rem;
          opacity: 0.9;
        }

        .section-padding {
          padding: 5rem 0;
        }

        .bg-gray-50 {
          background-color: var(--color-gray-50);
        }

        .bg-gold-100 {
          background-color: #FEF3C7;
        }

        .bg-navy-50 {
          background-color: #F0F4F8;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1.5rem;
        }

        .section-title {
          font-family: var(--font-heading);
          font-size: 2.5rem;
          color: var(--color-navy-900);
          margin-bottom: 0.5rem;
          font-weight: 700;
        }

        .section-subtitle {
          font-size: 1.1rem;
          color: var(--color-gray-500);
        }

        .sections-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
        }

        .section-card {
          padding: 2rem;
          border-radius: 16px;
          text-align: center;
          transition: transform 0.3s ease;
        }

        .section-card:hover {
          transform: translateY(-5px);
        }

        .icon-wrapper {
          width: 64px;
          height: 64px;
          background: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1.5rem;
          box-shadow: 0 4px 10px rgba(0,0,0,0.05);
        }

        .section-name {
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--color-navy-900);
          margin-bottom: 0.5rem;
        }

        .section-desc {
          color: var(--color-gray-600);
          margin-bottom: 1.5rem;
          line-height: 1.5;
        }

        .member-count {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: white;
          padding: 0.5rem 1rem;
          border-radius: 50px;
          font-size: 0.9rem;
          font-weight: 600;
          color: var(--color-navy-800);
        }

        .members-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
          gap: 2rem;
        }

        .member-card {
          background: white;
          padding: 2rem;
          border-radius: 12px;
          text-align: center;
          box-shadow: 0 4px 15px rgba(0,0,0,0.05);
          transition: transform 0.3s ease;
        }

        .member-card:hover {
          transform: translateY(-5px);
        }

        .member-image {
          width: 120px;
          height: 120px;
          background: var(--color-gray-100);
          border-radius: 50%;
          margin: 0 auto 1.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .member-name {
          font-weight: 600;
          color: var(--color-navy-900);
          margin-bottom: 0.25rem;
        }

        .member-role {
          font-size: 0.9rem;
          color: var(--color-gold-600);
        }

        .cta-section {
          background: var(--color-navy-900);
          color: white;
          padding: 5rem 0;
        }

        .cta-icon {
          color: var(--color-gold-500);
          margin-bottom: 1.5rem;
        }

        .cta-title {
          font-family: var(--font-heading);
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 1rem;
        }

        .cta-text {
          font-size: 1.1rem;
          opacity: 0.9;
          max-width: 600px;
          margin: 0 auto 2rem;
        }

        .cta-btn {
          background: var(--color-gold-500);
          color: white;
          padding: 1rem 2.5rem;
          border-radius: 50px;
          font-weight: 600;
          border: none;
          cursor: pointer;
          transition: background 0.2s;
        }

        .cta-btn:hover {
          background: var(--color-gold-600);
        }
      `}</style>
    </div>
  );
}

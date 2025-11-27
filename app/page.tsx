// app/page.tsx
"use client";
import Header from "../components/Header";
import Footer from "../components/Footer";
import EventCard from "../components/EventCard";
import { Music, Heart, Users, ArrowRight, Play } from "lucide-react";
import Link from "next/link";

export default function Home() {
  const upcomingEvents = [
    {
      id: 1,
      title: "Ps Retreat",
      date: "Nov 16, 2025",
      time: "9:00 AM",
      location: "Kaminuza SDA Church",
      description: "An evening dedicated to deep worship and prayer.",
    },
    {
      id: 2,
      title: "Echoes Of Grace",
      date: "Nov 06, 2025",
      time: "2:00 PM",
      location: "Kaminuza SDA Church",
      description: "Sharing the love of Christ through music with Geula Singers and Jasper Singers.",
    },
    {
      id: 3,
      title: "30 Years Jubile",
      date: "June - 2025",
      time: "2:00 PM",
      location: "Kaminuza SDA Church",
      description: "Join us for a glorious celebration of our Risen Lord with special performances.",
    },
  ];

  return (
    <div className="page-wrapper">
      <Header />

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay"></div>
        <div className="container hero-content">
          <h1 className="hero-title animate-fade-in">
            Music that <span className="text-gold">Lifts the Soul</span>
          </h1>
          <p className="hero-subtitle animate-fade-in delay-100">
            Experience the divine presence through powerful worship and inspiring melodies.
            Join us in our mission to spread the gospel through song.
          </p>
          <div className="hero-cta animate-fade-in delay-200">
            <Link href="/members" className="btn btn-primary">
              Join Us
            </Link>
            <Link href="/donate" className="btn btn-outline">
              Support Our Ministry
            </Link>
          </div>
        </div>
      </section>

      {/* Intro / Mission Section */}
      <section className="section intro-section">
        <div className="container">
          <div className="intro-grid">
            <div className="intro-text">
              <h4 className="section-subtitle">Who We Are</h4>
              <h2 className="section-title">A Ministry of <span className="text-gold">Worship & Excellence</span></h2>
              <p className="section-desc">
                Chorale Pépinière du Seigneur is Based at the Kaminuza Seventh-Day
                Adventist Church in the Kaminuza District, South Rwanda. 
                It was founded in 1995 at the University of Rwanda, 
                we spread the Gospel through music, inspiring hope and transformation.
              </p>
              <div className="features-list">
                <div className="feature-item">
                  <div className="feature-icon"><Heart size={20} /></div>
                  <div>
                    <h5 className="feature-title">Spiritual Growth</h5>
                    <p className="feature-text">Nurturing faith through worship.</p>
                  </div>
                </div>
                <div className="feature-item">
                  <div className="feature-icon"><Users size={20} /></div>
                  <div>
                    <h5 className="feature-title">Community</h5>
                    <p className="feature-text">Building strong bonds of fellowship.</p>
                  </div>
                </div>
                <div className="feature-item">
                  <div className="feature-icon"><Music size={20} /></div>
                  <div>
                    <h5 className="feature-title">Musical Excellence</h5>
                    <p className="feature-text">Striving for perfection in praise.</p>
                  </div>
                </div>
              </div>
              <Link href="/about" className="link-arrow">
                Read Our Full Story <ArrowRight size={16} />
              </Link>
            </div>
            <div className="intro-image-wrapper">
              <div className="intro-image"></div>
              <div className="intro-stat">
                <span className="stat-number">30+</span>
                <span className="stat-label">Years of Ministry</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="section events-section">
        <div className="container">
          <div className="section-header text-center">
            <h4 className="section-subtitle">Calendar</h4>
            <h2 className="section-title">Upcoming <span className="text-gold">Events</span></h2>
            <p className="section-desc mx-auto">
              Mark your calendars and join us for these upcoming ministrations and gatherings.
            </p>
          </div>

          <div className="grid grid-3">
            {upcomingEvents.map((event, index) => (
              <EventCard key={index} {...event} />
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Link href="/events" className="btn btn-outline text-navy border-navy">
              View All Events
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Music */}
      <section className="section music-section">
        <div className="container">
          <div className="music-content">
            <div className="music-text">
              <h4 className="section-subtitle">Latest Release</h4>
              <h2 className="section-title text-white">New Album: <br/>&quot;Divine Grace&quot;</h2>
              <p className="section-desc text-gray-300">
                Our latest studio album features 12 powerful tracks of worship, praise, and 
                reflection. Available now on all major streaming platforms and our store.
              </p>
              <div className="music-actions">
                <Link href="/store" className="btn btn-primary">
                  Get the Album
                </Link>
                <a href="https://youtu.be/quc39Q6Qmfo?si=eNRR1UxsgRD0mICl">
                <button className="btn-play">
                  <Play size={24} fill="currentColor" />
                  <span>Watch Video</span>
                </button>
                </a>
              </div>
            </div>
              <div className="music-cover album-placeholder relative w-full pb-[56.25%] h-0 overflow-hidden rounded-xl">
                <div className="album-placeholder">
                  <a href="https://youtu.be/quc39Q6Qmfo?si=eNRR1UxsgRD0mICl">
                    <img src="/images/single-placeholder-1.jpg" alt="" />
                  {/* <Music size={64} className="text-gold-500 opacity-50" /> */}
                  
                  </a>
                </div>
              </div>
          </div>
        </div>
      </section>

      <Footer />

      <style jsx>{`
        .page-wrapper {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
        }

        /* Hero Section */
        .hero-section {
          height: 90vh;
          min-height: 600px;
          position: relative;
          display: flex;
          align-items: center;
          background-image: url('/images/choir-hero.jpg'); /* Fallback or actual image */
          background-size: cover;
          background-position: center;
          background-attachment: fixed;
        }

        .hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom, rgba(15, 23, 42, 0.7), rgba(15, 23, 42, 0.5));
        }

        .hero-content {
          position: relative;
          z-index: 10;
          color: white;
          max-width: 800px;
          margin-left: auto;
          margin-right: auto;
          text-align: center;
        }

        .hero-title {
          font-size: 3.5rem;
          font-weight: 700;
          margin-bottom: 1.5rem;
          line-height: 1.1;
        }

        .hero-subtitle {
          font-size: 1.25rem;
          color: var(--color-gray-200);
          margin-bottom: 2.5rem;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }

        .hero-cta {
          display: flex;
          gap: 1rem;
          justify-content: center;
        }

        @media (max-width: 768px) {
          .hero-title { font-size: 2.5rem; }
          .hero-cta { flex-direction: column; padding: 0 2rem; }
        }

        /* Intro Section */
        .intro-section {
          background-color: white;
        }

        .intro-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 4rem;
          align-items: center;
        }

        @media (min-width: 900px) {
          .intro-grid { grid-template-columns: 1fr 1fr; }
        }

        .section-subtitle {
          color: var(--color-gold-500);
          text-transform: uppercase;
          letter-spacing: 2px;
          font-size: 0.9rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
          font-family: var(--font-accent);
        }

        .section-title {
          font-size: 2.5rem;
          color: var(--color-navy-900);
          margin-bottom: 1.5rem;
        }

        .section-desc {
          color: var(--color-gray-600);
          margin-bottom: 2rem;
          font-size: 1.05rem;
        }

        .features-list {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          margin-bottom: 2rem;
        }

        .feature-item {
          display: flex;
          gap: 1rem;
          align-items: flex-start;
        }

        .feature-icon {
          background-color: var(--color-cream-100);
          color: var(--color-gold-500);
          padding: 0.8rem;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .feature-title {
          font-size: 1.1rem;
          font-weight: 600;
          margin-bottom: 0.2rem;
          color: var(--color-navy-900);
        }

        .feature-text {
          font-size: 0.9rem;
          color: var(--color-gray-600);
        }

        .link-arrow {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--color-gold-500);
          font-weight: 600;
          transition: gap 0.2s ease;
        }

        .link-arrow:hover {
          gap: 0.8rem;
        }

        .intro-image-wrapper {
          position: relative;
          height: 500px;
        }

        .intro-image {
          width: 100%;
          height: 100%;
          background-color: var(--color-gray-200);
          border-radius: 20px;
          background-image: url('/images/pc (11).jpg'); /* Fallback */
          background-size: cover;
          background-position: center;
        }

        .intro-stat {
          position: absolute;
          bottom: -20px;
          left: -20px;
          background-color: var(--color-white);
          padding: 2rem;
          border-radius: 12px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .stat-number {
          font-size: 2.5rem;
          font-weight: 700;
          color: var(--color-gold-500);
          line-height: 1;
        }

        .stat-label {
          font-size: 0.9rem;
          color: var(--color-gray-600);
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        /* Events Section */
        .events-section {
          background-color: var(--color-gray-50);
        }

        .mx-auto { margin-left: auto; margin-right: auto; }
        .mt-8 { margin-top: 2rem; }
        .text-navy { color: var(--color-navy-900); }
        .border-navy { border-color: var(--color-navy-900); }

        /* Music Section */
        .music-section {
          background-color: var(--color-navy-900);
          color: white;
          padding: 6rem 0;
        }

        .music-content {
          display: grid;
          grid-template-columns: 1fr;
          gap: 4rem;
          align-items: center;
        }

        @media (min-width: 900px) {
          .music-content { grid-template-columns: 1fr 1fr; }
        }

        .music-actions {
          display: flex;
          gap: 1.5rem;
          align-items: center;
        }

        .btn-play {
          display: flex;
          align-items: center;
          gap: 0.8rem;
          background: none;
          border: none;
          color: white;
          font-weight: 600;
          cursor: pointer;
          font-family: var(--font-accent);
          transition: color 0.3s ease;
        }

        .btn-play:hover {
          color: var(--color-gold-500);
        }

        .album-placeholder {
          width: 100%;
          aspect-ratio: 1;
          background: linear-gradient(135deg, var(--color-navy-800), var(--color-black));
          border-radius: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 20px 50px rgba(0,0,0,0.3);
          border: 1px solid rgba(255,255,255,0.1);
        }
      `}</style>
    </div>
  );
}

// app/events/page.tsx
"use client";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import EventCard from "../../components/EventCard";
import { Calendar, MapPin } from "lucide-react";

export default function Events() {
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

  const images = [
  "/images/pc (1).jpg",
  "/images/pc (2).jpg",
  "/images/pc (4).jpg",
  "/images/pc (8).jpg",
  "/images/pc (9).jpg",
  "/images/pc (10).jpg"
];

  return (
    <div className="page-wrapper">
      <Header />

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay"></div>
        <div className="container hero-content">
          <h1 className="hero-title">Ministry Events</h1>
          <p className="hero-subtitle">
            Join us as we gather to worship and serve.
          </p>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="section-padding">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="section-title">Upcoming Events</h2>
            <p className="section-subtitle">Save the date</p>
          </div>

          <div className="events-grid">
            {upcomingEvents.map((event) => (
              <EventCard key={event.id} {...event} />
            ))}
          </div>
        </div>
      </section>

      {/* Past Events Gallery */}
      <section className="section-padding bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="section-title">Past Events Gallery</h2>
            <p className="section-subtitle">Memories of God's grace</p>
          </div>

          <div className="gallery-grid">
            {images.map((src, index) => (
              <div key={index} className="gallery-item">
                <img
                  src={src}
                  alt={`Event Photo ${index + 1}`}
                  className="w-full h-full object-cover rounded-lg"
                />
            </div>
            ))}
          </div>
        </div>
      </section>

      {/* Calendar Note */}
      <section className="section-padding bg-navy-900 text-white text-center">
        <div className="container">
          <Calendar size={48} className="text-gold-500 mb-4 mx-auto" />
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-lg opacity-90 max-w-2xl mx-auto mb-8">
            Our schedule is updated regularly. Follow us on social media or subscribe to our newsletter to never miss an event.
          </p>
          <button className="bg-gold-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-gold-600 transition-colors">
            Subscribe to Calendar
          </button>
        </div>
      </section>

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
          background-image: url('/images/pc (1).jpeg'); /* Ensure exists */
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
          background: rgba(10, 25, 47, 0.7);
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

        .bg-navy-900 {
          background-color: var(--color-navy-900);
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
          color: var(--color-gold-600);
        }

        .events-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }

        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
          gap: 1.5rem;
        }

        .gallery-item {
          aspect-ratio: 4/3;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 4px 10px rgba(0,0,0,0.1);
          transition: transform 0.3s ease;
        }

        .gallery-item:hover {
          transform: scale(1.02);
        }

        .gallery-placeholder {
          width: 100%;
          height: 100%;
          background-color: var(--color-gray-200);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--color-gray-500);
          font-weight: 500;
        }
      `}</style>
    </div>
  );
}

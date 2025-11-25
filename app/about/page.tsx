// app/about/page.tsx
"use client";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Music, Heart, Users, Award } from "lucide-react";

export default function About() {
  return (
    <div className="page-wrapper">
      <Header />

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay"></div>
        <div className="container hero-content">
          <h1 className="hero-title">Our Story & Mission</h1>
          <p className="hero-subtitle">
            Proclaiming the Gospel through sacred music since 2005.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="grid-2-col">
            <div className="text-content">
              <h2 className="section-title">Who We Are</h2>
              <p className="text-lg text-gray-600 mb-6">
                Based at the Kaminuza Seventh-Day Adventist Church in the Kaminuza District, 
                South Rwanda. It was founded in 1995 at the University of Rwanda, 
                we spread the Gospel through music, inspiring hope and transformation.
              </p>
              <p className="text-lg text-gray-600">
                Our name "Pépinière" (Nursery) reflects our commitment to nurturing spiritual growth 
                and musical talent, raising a generation of worshippers who serve God in spirit and truth.
              </p>
            </div>
            <div className="values-grid">
              <div className="value-card">
                <Heart className="value-icon" size={32} />
                <h3>Faith</h3>
                <p>Rooted in scripture and prayer.</p>
              </div>
              <div className="value-card">
                <Music className="value-icon" size={32} />
                <h3>Excellence</h3>
                <p>Striving for the highest musical standards.</p>
              </div>
              <div className="value-card">
                <Users className="value-icon" size={32} />
                <h3>Community</h3>
                <p>A family united in love and service.</p>
              </div>
              <div className="value-card">
                <Award className="value-icon" size={32} />
                <h3>Service</h3>
                <p>Humility in ministry to God's people.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* History Timeline (Simplified) */}
      <section className="section-padding bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="section-title">Our Journey</h2>
            <p className="section-subtitle">Milestones of God's faithfulness</p>
          </div>
          
          <div className="timeline">
            <div className="timeline-item left">
              <div className="content">
                <span className="year">1995</span>
                <h3>Foundation</h3>
                <p>Founded: 1995 by MUSONI Jean Paul, with students from Collège Adventiste de Gitwe at the University of Rwanda.</p>
              </div>
            </div>
            <div className="timeline-item right">
              <div className="content">
                <span className="year">2006</span>
                <h3>First Album</h3>
                <p>Released "Umwigisha Uhebuje", reaching thousands across Rwanda with messages of grace.</p>
              </div>
            </div>
            <div className="timeline-item left">
              <div className="content">
                <span className="year">2021</span>
                <h3>25 Years Jubilee</h3>
                <p>We celebrate 25 years in God's missions in Rwanda, sharing our music and testimony.</p>
              </div>
            </div>
            <div className="timeline-item right">
              <div className="content">
                <span className="year">2023</span>
                <h3>PS Day</h3>
                <p>Launching digital platforms to share the gospel globally and connect with a wider audience.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="section-title">Leadership</h2>
            <p className="section-subtitle">Servants guiding the vision</p>
          </div>

          <div className="leadership-grid">
            {/* Placeholder Leaders */}
            {[1, 2, 3].map((i) => (
              <div key={i} className="leader-card">
                <div className="leader-img-placeholder">{i === 1 ? <img src='/images/president.jpg' alt='' className='w-32 h-32 rounded-full object-cover' /> : i === 2 ? "" : ""}</div>
                <h3 className="leader-name">{i === 1 ? "Edison HABIYAREMYE" : i === 2 ? "NZABONIMANA Charles" : "NDAGIJIMANA William"}</h3>
                <p className="leader-role">{i === 1 ? "President" : i === 2 ? "Music Director" : "Vice President"}</p>
              </div>
            ))}
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

        .hero-section {
          position: relative;
          height: 60vh;
          min-height: 400px;
          background-image: url('/images/pc (2).jpg');
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
          max-width: 600px;
          margin: 0 auto;
        }

        .section-padding {
          padding: 5rem 0;
        }

        .bg-gray-50 {
          background-color: var(--color-gray-50);
        }

        .bg-white {
          background-color: white;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1.5rem;
        }

        .grid-2-col {
          display: grid;
          grid-template-columns: 1fr;
          gap: 4rem;
          align-items: center;
        }

        @media (min-width: 900px) {
          .grid-2-col {
            grid-template-columns: 1fr 1fr;
          }
        }

        .section-title {
          font-family: var(--font-heading);
          font-size: 2.5rem;
          color: var(--color-navy-900);
          margin-bottom: 1rem;
          font-weight: 700;
        }

        .section-subtitle {
          font-size: 1.1rem;
          color: var(--color-gold-600);
          font-weight: 500;
        }

        .values-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
        }

        .value-card {
          background: var(--color-gray-50);
          padding: 1.5rem;
          border-radius: 12px;
          text-align: center;
          transition: transform 0.3s ease;
        }

        .value-card:hover {
          transform: translateY(-5px);
          background: white;
          box-shadow: 0 10px 30px rgba(0,0,0,0.05);
        }

        .value-icon {
          color: var(--color-gold-500);
          margin-bottom: 1rem;
        }

        .value-card h3 {
          font-weight: 600;
          margin-bottom: 0.5rem;
          color: var(--color-navy-900);
        }

        .value-card p {
          font-size: 0.9rem;
          color: var(--color-gray-600);
        }

        /* Timeline Styles */
        .timeline {
          position: relative;
          max-width: 1000px;
          margin: 3rem auto 0;
        }

        .timeline::after {
          content: '';
          position: absolute;
          width: 4px;
          background-color: var(--color-gold-200);
          top: 0;
          bottom: 0;
          left: 50%;
          margin-left: -2px;
        }

        .timeline-item {
          padding: 10px 40px;
          position: relative;
          background-color: inherit;
          width: 50%;
          box-sizing: border-box;
        }

        .timeline-item::after {
          content: '';
          position: absolute;
          width: 20px;
          height: 20px;
          right: -10px;
          background-color: white;
          border: 4px solid var(--color-gold-500);
          top: 20px;
          border-radius: 50%;
          z-index: 1;
        }

        .left {
          left: 0;
        }

        .right {
          left: 50%;
        }

        .left::before {
          content: " ";
          height: 0;
          position: absolute;
          top: 22px;
          width: 0;
          z-index: 1;
          right: 30px;
          border: medium solid white;
          border-width: 10px 0 10px 10px;
          border-color: transparent transparent transparent white;
        }

        .right::before {
          content: " ";
          height: 0;
          position: absolute;
          top: 22px;
          width: 0;
          z-index: 1;
          left: 30px;
          border: medium solid white;
          border-width: 10px 10px 10px 0;
          border-color: transparent white transparent transparent;
        }

        .right::after {
          left: -10px;
        }

        .content {
          padding: 20px 30px;
          background-color: white;
          position: relative;
          border-radius: 12px;
          box-shadow: 0 4px 15px rgba(0,0,0,0.05);
          transition: transform 0.3s ease;
        }

        .content:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 25px rgba(0,0,0,0.1);
        }

        .year {
          display: inline-block;
          background: var(--color-gold-500);
          color: white;
          padding: 0.25rem 0.75rem;
          border-radius: 50px;
          font-weight: 700;
          font-size: 0.9rem;
          margin-bottom: 0.5rem;
        }

        .content h3 {
          font-family: var(--font-heading);
          font-size: 1.5rem;
          color: var(--color-navy-900);
          margin-bottom: 0.5rem;
          font-weight: 700;
        }

        .content p {
          color: var(--color-gray-600);
          line-height: 1.6;
        }

        @media (max-width: 768px) {
          .timeline::after {
            left: 31px;
          }

          .timeline-item {
            width: 100%;
            padding-left: 70px;
            padding-right: 25px;
          }

          .timeline-item::before {
            left: 60px;
            border: medium solid white;
            border-width: 10px 10px 10px 0;
            border-color: transparent white transparent transparent;
          }

          .left::after, .right::after {
            left: 21px;
          }

          .right {
            left: 0%;
          }
          
          .left::before {
             right: auto;
             left: 60px;
             border-width: 10px 10px 10px 0;
             border-color: transparent white transparent transparent;
          }
        }

        .leadership-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
          margin-top: 3rem;
        }

        .leader-card {
          text-align: center;
        }

        .leader-img-placeholder {
          width: 150px;
          height: 150px;
          background-color: var(--color-gray-200);
          border-radius: 50%;
          margin: 0 auto 1.5rem;
        }

        .leader-img-placeholder img {
          width: 150px;
          height: 150px;
          background-color: var(--color-gray-200);
          border-radius: 50%;
          margin: 0 auto 1.5rem;
        }

        .leader-name {
          font-size: 1.25rem;
          font-weight: 600;
          color: var(--color-navy-900);
          margin-bottom: 0.25rem;
        }

        .leader-role {
          color: var(--color-gold-600);
          font-weight: 500;
        }
      `}</style>
    </div>
  );
}

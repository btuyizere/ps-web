// components/EventCard.tsx
"use client";
import { Calendar, MapPin, Clock } from "lucide-react";
import Link from "next/link";

interface EventCardProps {
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  image?: string;
}

const EventCard = ({ title, date, time, location, description, image }: EventCardProps) => {
  return (
    <div className="event-card">
      <div className="event-date">
        <span className="day">{date.split(' ')[0]}</span>
        <span className="month">{date.split(' ')[1]}</span>
      </div>
      
      <div className="event-content">
        <h3 className="event-title">{title}</h3>
        
        <div className="event-details">
          <div className="detail-item">
            <Clock size={16} />
            <span>{time}</span>
          </div>
          <div className="detail-item">
            <MapPin size={16} />
            <span>{location}</span>
          </div>
        </div>

        <p className="event-description">{description}</p>
        
        <Link href="/events" className="event-link">
          Event Details &rarr;
        </Link>
      </div>

      <style jsx>{`
        .event-card {
          background: white;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          display: flex;
          position: relative;
          border: 1px solid var(--color-gray-200);
        }

        .event-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        }

        .event-date {
          background-color: var(--color-navy-900);
          color: white;
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          min-width: 100px;
        }

        .day {
          font-size: 1.8rem;
          font-weight: 700;
          line-height: 1;
        }

        .month {
          font-size: 1rem;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-top: 0.2rem;
          color: var(--color-gold-500);
        }

        .event-content {
          padding: 1.5rem;
          flex: 1;
        }

        .event-title {
          font-family: var(--font-heading);
          font-size: 1.25rem;
          color: var(--color-navy-900);
          margin-bottom: 0.8rem;
        }

        .event-details {
          display: flex;
          gap: 1rem;
          margin-bottom: 1rem;
          color: var(--color-gray-600);
          font-size: 0.9rem;
        }

        .detail-item {
          display: flex;
          align-items: center;
          gap: 0.4rem;
        }

        .event-description {
          color: var(--color-gray-600);
          font-size: 0.95rem;
          margin-bottom: 1.2rem;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .event-link {
          color: var(--color-gold-500);
          font-weight: 600;
          font-size: 0.9rem;
          display: inline-flex;
          align-items: center;
          gap: 0.3rem;
          transition: gap 0.2s ease;
        }

        .event-link:hover {
          gap: 0.6rem;
        }

        @media (max-width: 640px) {
          .event-card {
            flex-direction: column;
          }
          
          .event-date {
            flex-direction: row;
            gap: 0.5rem;
            padding: 1rem;
            width: 100%;
          }

          .day { font-size: 1.5rem; }
        }
      `}</style>
    </div>
  );
};

export default EventCard;

"use client";
import { Calendar, Clock, MapPin, ArrowRight } from "lucide-react";
import Link from "next/link";

interface EventCardProps {
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
}

export default function EventCard({ title, date, time, location, description }: EventCardProps) {
  return (
    <div className="event-card">
      <div className="card-content">
        <div className="date-badge">
          <Calendar size={16} className="mb-1" />
          <span className="date-text">{date}</span>
        </div>
        
        <h3 className="card-title">{title}</h3>
        
        <div className="meta-row">
          <div className="meta-item">
            <Clock size={14} />
            <span>{time}</span>
          </div>
          <div className="meta-item">
            <MapPin size={14} />
            <span>{location}</span>
          </div>
        </div>
        
        <p className="card-desc">{description}</p>
        
        <div className="card-footer">
          <Link href="/events" className="details-link">
            Details <ArrowRight size={16} />
          </Link>
        </div>
      </div>

      <style jsx>{`
        .event-card {
          background: white;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
          transition: transform 0.2s ease, box-shadow 0.2s ease;
          border: 1px solid #e5e7eb;
          display: flex;
          flex-direction: column;
        }

        .event-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
        }

        .card-content {
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          height: 100%;
        }

        .date-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--color-gold-500, #d4af37);
          font-weight: 600;
          font-size: 0.875rem;
          margin-bottom: 0.75rem;
        }

        .card-title {
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--color-navy-900, #0f172a);
          margin-bottom: 0.75rem;
          line-height: 1.4;
        }

        .meta-row {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          margin-bottom: 1rem;
          color: #64748b;
          font-size: 0.875rem;
        }

        .meta-item {
          display: flex;
          align-items: center;
          gap: 0.25rem;
        }

        .card-desc {
          color: #4b5563;
          font-size: 0.95rem;
          line-height: 1.5;
          margin-bottom: 1.5rem;
          flex-grow: 1;
        }

        .card-footer {
          margin-top: auto;
        }

        .details-link {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--color-gold-500, #d4af37);
          font-weight: 600;
          font-size: 0.9rem;
          transition: gap 0.2s ease;
        }

        .details-link:hover {
          gap: 0.75rem;
        }
      `}</style>
    </div>
  );
}

// components/ProductCard.tsx
"use client";
import { Share2, MessageCircle, Mail } from "lucide-react";
import SpotifyEmbed from "./SpotifyEmbed";

interface Product {
  id: number;
  name: string;
  price: string;
  image?: string; // Optional now as we might use Spotify embed cover
  spotifyId?: string; // New field for Spotify ID
  description: string;
  tracks?: number;
}

interface ProductCardProps {
  product: Product;
  type: "album" | "single" | "ep";
}

const ProductCard = ({ product, type }: ProductCardProps) => {
  const handleWhatsAppOrder = () => {
    const message = `Hello, I would like to order: ${product.name}`;
    const url = `https://api.whatsapp.com/send?phone=250788549539&text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  const handleEmailOrder = () => {
    const subject = `Music Order - ${product.name}`;
    const body = `Hello,\n\nI would like to order: ${product.name}\n\nThank you!`;
    const url = `mailto:pepiniereduseigneur96@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = url;
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: product.name,
          text: `Check out ${product.name} by Chorale Pépinière du Seigneur`,
          url: window.location.href,
        });
      } catch (err) {
        console.log("Error sharing:", err);
      }
    }
  };

  return (
    <div className="product-card">
      <div className="product-media">
        {product.spotifyId ? (
          <SpotifyEmbed 
            type={type === "single" ? "track" : "album"} 
            id={product.spotifyId} 
            compact={false}
            height={type === "single" ? 152 : 352}
          />
        ) : (
          <div className="placeholder-media">
            <img src={product.image || "/images/album-placeholder.jpg"} alt={product.name} />
          </div>
        )}
      </div>

      <div className="product-info">
        <div className="product-header">
          <h3 className="product-title">{product.name}</h3>
          <button onClick={handleShare} className="share-btn" title="Share">
            <Share2 size={18} />
          </button>
        </div>

        <p className="product-desc">{product.description}</p>

        <div className="product-meta">
          <span className="product-price">{product.price} RWF</span>
          {product.tracks && (
            <span className="product-tracks">{product.tracks} tracks</span>
          )}
        </div>

        <div className="product-actions">
          <button
            onClick={handleWhatsAppOrder}
            className="action-btn whatsapp-btn"
            title="Order via WhatsApp"
          >
            <MessageCircle size={20} />
            <span>WhatsApp</span>
          </button>
          <button
            onClick={handleEmailOrder}
            className="action-btn email-btn"
            title="Order via Email"
          >
            <Mail size={20} />
            <span>Email</span>
          </button>
        </div>
      </div>

      <style jsx>{`
        .product-card {
          background: white;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 4px 15px rgba(0,0,0,0.05);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          border: 1px solid var(--color-gray-200);
          display: flex;
          flex-direction: column;
        }

        .product-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 25px rgba(0,0,0,0.1);
        }

        .product-media {
          background-color: var(--color-gray-50);
          overflow: hidden;
        }
        
        .placeholder-media img {
          width: 100%;
          height: 300px;
          object-fit: cover;
        }

        .product-info {
          padding: 1.5rem;
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        .product-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 0.5rem;
        }

        .product-title {
          font-family: var(--font-heading);
          font-size: 1.2rem;
          color: var(--color-navy-900);
          font-weight: 600;
        }

        .share-btn {
          color: var(--color-gray-400);
          background: none;
          border: none;
          cursor: pointer;
          transition: color 0.2s;
        }

        .share-btn:hover {
          color: var(--color-gold-500);
        }

        .product-desc {
          font-size: 0.9rem;
          color: var(--color-gray-600);
          margin-bottom: 1rem;
          line-height: 1.5;
        }

        .product-meta {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.5rem;
          padding-bottom: 1rem;
          border-bottom: 1px solid var(--color-gray-100);
        }

        .product-price {
          font-weight: 700;
          color: var(--color-gold-600);
          font-size: 1.1rem;
        }

        .product-tracks {
          font-size: 0.85rem;
          color: var(--color-gray-500);
        }

        .product-actions {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0.8rem;
          margin-top: auto;
        }

        .action-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          padding: 0.6rem;
          border-radius: 8px;
          border: none;
          cursor: pointer;
          font-weight: 600;
          font-size: 0.9rem;
          transition: filter 0.2s;
          color: white;
        }

        .action-btn:hover {
          filter: brightness(1.1);
        }

        .whatsapp-btn {
          background-color: #25D366;
        }

        .email-btn {
          background-color: var(--color-navy-800);
        }
      `}</style>
    </div>
  );
};

export default ProductCard;

// app/store/page.tsx
"use client";
import { useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ProductCard from "../../components/ProductCard";
import SpotifyEmbed from "../../components/SpotifyEmbed";
import { Search, Music } from "lucide-react";

export default function Store() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  // Placeholder Spotify IDs - User can replace these with actual IDs
  // Artist ID for Chorale Pépinière du Seigneur (from user link: 68CRV4tIanqAdj9Hgb8t0Y)
  const ARTIST_ID = "68CRV4tIanqAdj9Hgb8t0Y";

  const products = {
    albums: [
      {
        id: 1,
        name: "Tunes of Hope",
        price: "5,000",
        image: "/images/album-placeholder-1.jpg",
        spotifyId: "3LwrL6BYUbINVGkRVausFs", // Example ID
        description: "Inspirational songs of hope and faith",
        tracks: 12,
      },
      {
        id: 2,
        name: "Mbundikira mu Mababa",
        price: "5,000",
        image: "/images/album-placeholder-2.jpg",
        spotifyId: "09yyZ1Ehdc7yuRXFKxZpP2", // Example ID
        description: "Worship in native language",
        tracks: 10,
      },
      {
        id: 3,
        name: "Nzahimbaza",
        price: "5,000",
        image: "/images/album-placeholder-3.jpg",
        spotifyId: "4K64J1CeTl7HjmUVwUS9mJ", // Example ID
        description: "Praise and worship collection",
        tracks: 8,
      },
      {
        id: 4,
        name: "Amateka yo Gucungurwa",
        price: "5,000",
        image: "/images/album-placeholder-4.jpg",
        spotifyId: "4Ob7HXSj4RsZPsuEfA6zVs", // Example ID
        description: "Celebratory worship songs",
        tracks: 12,
      },
      {
        id: 5,
        name: "Abacunguwe",
        price: "5,000",
        image: "/images/album-placeholder-5.jpg",
        spotifyId: "0OjmVRZrN8oVa6lztFgn5r", // Example ID
        description: "Songs of redemption",
        tracks: 13,
      },
      {
        id: 6,
        name: "Urwo Yadukunze",
        price: "5,000",
        image: "/images/album-placeholder-6.jpg",
        spotifyId: "6ofVf0mOlE8C3j5uITJwk4", // Example ID
        description: "Historical worship pieces",
        tracks: 14,
      },
      {
        id: 7,
        name: "Twaratowe",
        price: "5,000",
        image: "/images/album-placeholder-7.jpg",
        spotifyId: "5a76FuAiDve9Mt6XpYqcpt", // Example ID
        description: "Songs for the redeemed",
        tracks: 13,
      },
      {
        id: 8,
        name: "Nzamusingiza",
        price: "5,000",
        image: "/images/album-placeholder-8.jpg",
        spotifyId: "10F5ZhIDxTm9kpWGl6D2I8", // Example ID
        description: "Tribute to the great teacher",
        tracks: 15,
      },
      {
        id: 9,
        name: "Nabonye Inshuti",
        price: "5,000",
        image: "/images/album-placeholder-9.jpg",
        spotifyId: "0SL0LmnTFrciwymxl5PWjJ", // Example ID
        description: "Tribute to the great teacher",
        tracks: 13,
      },
      {
        id: 10,
        name: "Umwigisha Uhebuje",
        price: "5,000",
        image: "/images/album-placeholder-10.jpg",
        spotifyId: "7lR8oZXOIPnYH4B2Ew33qY", // Example ID
        description: "Tribute to the great teacher",
        tracks: 13,
      },
    ],
    singles: [
      {
        id: 11,
        name: "Sinzateshuka",
        price: "1,000",
        image: "/images/single-placeholder-1.jpg",
        spotifyId: "1RYTHypLyqljecrInBbJ2h", // Example ID
        description: "Powerful worship single",
        tracks: 1,
      },
      {
        id: 12,
        name: "Ubuntu",
        price: "1,000",
        image: "/images/single-placeholder-2.jpg",
        spotifyId: "20VSvlnD4YewiNqotHplWR", // Example ID
        description: "Inspirational track",
        tracks: 1,
      },
      {
        id: 13,
        name: "Humura",
        price: "1,000",
        image: "/images/single-placeholder-3.jpg",
        spotifyId: "3GyJErAEegzY4FuZ1qtsNs", // Example ID
        description: "Contemporary gospel",
        tracks: 1,
      },
    ],
    ep: [
      {
        id: 14,
        name: "Nzabona Umwami",
        price: "5,000",
        image: "/images/ep-placeholder-1.jpg",
        description: "Upcoming extended play - Pre-order now!",
        tracks: 6,
      },
    ],
  };

  const allProducts = [...products.albums, ...products.singles, ...products.ep];

  const filteredProducts = allProducts.filter((product) => {
    if (!("tracks" in product)) return false;

    const matchesSearch =
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesFilter =
      activeFilter === "all" ||
      (activeFilter === "albums" && products.albums.includes(product as any)) ||
      (activeFilter === "singles" && products.singles.includes(product as any)) ||
      (activeFilter === "ep" && products.ep.includes(product as any));

    return matchesSearch && matchesFilter;
  });

  return (
    <div className="page-wrapper">
      <Header />

      {/* Spotify Artist Header */}
      <section className="spotify-header">
        <div className="container">
          <div className="spotify-content">
            <div className="spotify-text">
              <h1 className="page-title">Music Store</h1>
              <p className="page-subtitle">
                Stream our latest releases on Spotify or purchase digital copies
                to support the ministry.
              </p>
            </div>
            <div className="spotify-embed-wrapper">
              <SpotifyEmbed type="artist" id={ARTIST_ID} height="352" />
            </div>
          </div>
        </div>
      </section>

      <div className="container main-content">
        {/* Filters & Search */}
        <div className="controls-section">
          <div className="search-wrapper">
            <Search className="search-icon" size={20} />
            <input
              type="text"
              placeholder="Search music..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
            />
          </div>

          <div className="filters-wrapper">
            <button
              onClick={() => setActiveFilter("all")}
              className={`filter-btn ${activeFilter === "all" ? "active" : ""}`}
            >
              All Music
            </button>
            <button
              onClick={() => setActiveFilter("albums")}
              className={`filter-btn ${
                activeFilter === "albums" ? "active" : ""
              }`}
            >
              Albums
            </button>
            <button
              onClick={() => setActiveFilter("singles")}
              className={`filter-btn ${
                activeFilter === "singles" ? "active" : ""
              }`}
            >
              Singles
            </button>
            <button
              onClick={() => setActiveFilter("ep")}
              className={`filter-btn ${activeFilter === "ep" ? "active" : ""}`}
            >
              EP
            </button>
          </div>
        </div>

        {/* Bundle Offer */}
        <div className="bundle-banner">
          <div className="bundle-content">
            <h3 className="bundle-title">Special Bundle Offer!</h3>
            <p className="bundle-text">
              Get all 11 albums + 3 singles for only 50,000 RWF (Save 8,000
              RWF!)
            </p>
          </div>
          <a
            href="https://api.whatsapp.com/send?phone=250788549539&text=Hello, I would like to order Full Collection"
            className="btn btn-white text-gold"
            target="_blank"
            rel="noopener noreferrer"
          >
            Buy Full Collection
          </a>

          {/* <button className="btn btn-white text-gold">
            Buy Full Collection
          </button> */}
        </div>

        {/* Product Grid */}
        <div className="product-grid">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              type={
                products.albums.includes(product as any)
                  ? "album"
                  : products.singles.includes(product as any)
                  ? "single"
                  : "ep"
              }
            />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="empty-state">
            <Music size={48} className="empty-icon" />
            <p className="empty-text">No music found matching your search.</p>
          </div>
        )}
      </div>

      <Footer />

      <style jsx>{`
        .page-wrapper {
          min-height: 100vh;
          background-color: var(--color-gray-50);
          display: flex;
          flex-direction: column;
        }

        .spotify-header {
          background-color: var(--color-navy-900);
          color: white;
          padding: 4rem 0;
          margin-bottom: 2rem;
        }

        .spotify-content {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
          align-items: center;
        }

        @media (min-width: 900px) {
          .spotify-content {
            grid-template-columns: 1fr 1fr;
          }
        }

        .page-title {
          font-size: 3rem;
          font-weight: 700;
          margin-bottom: 1rem;
        }

        .page-subtitle {
          font-size: 1.1rem;
          color: var(--color-gray-300);
          max-width: 500px;
        }

        .main-content {
          padding-bottom: 4rem;
        }

        .controls-section {
          margin-bottom: 2rem;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        @media (min-width: 768px) {
          .controls-section {
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
          }
        }

        .search-wrapper {
          position: relative;
          max-width: 400px;
          width: 100%;
        }

        .search-icon {
          position: absolute;
          left: 1rem;
          top: 50%;
          transform: translateY(-50%);
          color: var(--color-gray-400);
        }

        .search-input {
          width: 100%;
          padding: 0.8rem 1rem 0.8rem 2.5rem;
          border: 1px solid var(--color-gray-300);
          border-radius: 50px;
          outline: none;
          transition: border-color 0.2s;
        }

        .search-input:focus {
          border-color: var(--color-gold-500);
          box-shadow: 0 0 0 2px rgba(217, 119, 6, 0.1);
        }

        .filters-wrapper {
          display: flex;
          gap: 0.5rem;
          flex-wrap: wrap;
        }

        .filter-btn {
          padding: 0.5rem 1.2rem;
          border-radius: 50px;
          border: 1px solid var(--color-gray-300);
          background: white;
          color: var(--color-gray-600);
          cursor: pointer;
          font-weight: 500;
          transition: all 0.2s;
        }

        .filter-btn:hover {
          background-color: var(--color-gray-100);
        }

        .filter-btn.active {
          background-color: var(--color-gold-500);
          color: white;
          border-color: var(--color-gold-500);
        }

        .bundle-banner {
          background: linear-gradient(
            135deg,
            var(--color-gold-500),
            var(--color-gold-600)
          );
          border-radius: 12px;
          padding: 2rem;
          color: white;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 1.5rem;
          margin-bottom: 3rem;
          box-shadow: 0 10px 20px rgba(217, 119, 6, 0.2);
        }

        @media (min-width: 768px) {
          .bundle-banner {
            flex-direction: row;
            text-align: left;
            justify-content: space-between;
          }
        }

        .bundle-title {
          font-size: 1.5rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
        }

        .bundle-text {
          font-size: 1.1rem;
          opacity: 0.9;
        }

        .btn-white {
          background-color: white;
          color: var(--color-gold-600);
          border: none;
        }

        .btn-white:hover {
          background-color: var(--color-gray-50);
        }

        .product-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
        }

        @media (min-width: 640px) {
          .product-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 1024px) {
          .product-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        @media (min-width: 1280px) {
          .product-grid {
            grid-template-columns: repeat(4, 1fr);
          }
        }

        .empty-state {
          text-align: center;
          padding: 4rem 0;
          color: var(--color-gray-400);
        }

        .empty-icon {
          margin-bottom: 1rem;
          opacity: 0.5;
        }
      `}</style>
    </div>
  );
}

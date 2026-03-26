'use client';

import React, { useEffect, useState, use } from 'react';
import Link from 'next/link';
import styles from './page.module.css';

export default function PlaceDetail({ params }) {
  const { id } = use(params);
  const [place, setPlace] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    const fetchPlace = async () => {
      try {
        const res = await fetch(`/api/places/${id}`);
        if (res.ok) {
          const data = await res.json();
          setPlace(data.place);
        }
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchPlace();
  }, [id]);

  if (loading) {
    return (
      <div className={styles.loadingContainer}>
        <div className={styles.spinner}></div>
        <p>Loading immersive experience...</p>
      </div>
    );
  }

  if (!place) {
    return (
      <div className={styles.errorContainer}>
        <h2>Place Not Found</h2>
        <Link href="/" className="btn-primary">Return Home</Link>
      </div>
    );
  }

  return (
    <main className={styles.detailMain}>
      {/* Navigation */}
      <nav className={styles.nav}>
        <div className="container">
          <Link href="/" className={styles.backBtn}>← Back to Discovery</Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroBg} style={{ backgroundImage: `url(${place.images[0]})` }}></div>
        <div className={styles.heroOverlay}></div>
        <div className={`container ${styles.heroContent}`}>
          <div className={styles.heroTags}>
            {place.smartTags?.map(tag => (
              <span key={tag} className={styles.smartTag}>{tag}</span>
            ))}
            <span className={styles.ratingBadge}>⭐ {place.rating} ({place.reviews})</span>
          </div>
          <h1 className={styles.title}>{place.name}</h1>
          <p className={styles.location}>📍 {place.location} • {place.zone}</p>
        </div>
      </section>

      <div className={`container ${styles.contentGrid}`}>
        {/* Left Column: Main Content */}
        <div className={styles.mainContent}>
          
          {/* Image Gallery */}
          {place.images && place.images.length > 1 && (
            <div className={styles.gallerySection}>
              <h2 className={styles.sectionTitle}>Visual Experience</h2>
              <div className={styles.mainImageWrapper}>
                <img src={place.images[activeImage]} alt="Main view" className={styles.mainImage} />
              </div>
              <div className={styles.thumbnails}>
                {place.images.map((img, idx) => (
                  <div 
                    key={idx} 
                    className={`${styles.thumbnail} ${activeImage === idx ? styles.activeThumb : ''}`}
                    onClick={() => setActiveImage(idx)}
                    style={{ backgroundImage: `url(${img})` }}
                  ></div>
                ))}
              </div>
            </div>
          )}

          {/* Location & Navigation */}
          {place.locationDetails && (
            <section className={styles.cardSection}>
              <div className={styles.sectionHeader}>
                <span className={styles.icon}>📍</span>
                <h2 className={styles.sectionTitle}>Location & Navigation</h2>
              </div>

              <div className={styles.locationBlock}>
                <div className={styles.addressBox}>
                  <h4>Full Address</h4>
                  <p>{place.locationDetails.fullAddress}</p>
                  <p className={styles.landmark}><strong>Landmark:</strong> {place.locationDetails.landmark}</p>
                </div>

                <div className={styles.navGrid}>
                  <div className={styles.navItem}>
                    <h4>🧭 How to Reach</h4>
                    <p className={styles.metroInfo}><strong>Nearest Metro:</strong> {place.locationDetails.nearestMetro}</p>
                    <ul className={styles.directionsList}>
                      {place.locationDetails.directions.map((step, idx) => (
                        <li key={idx}>{step}</li>
                      ))}
                    </ul>
                  </div>

                  <div className={styles.navItem}>
                    <h4>🚗 Transport & Parking</h4>
                    <ul className={styles.transportList}>
                      <li><strong>Options:</strong> {place.locationDetails.transportOptions}</li>
                      <li><strong>Parking:</strong> {place.locationDetails.parking}</li>
                      <li><strong>Travel Time:</strong> {place.locationDetails.travelTime}</li>
                    </ul>
                    
                    <a 
                      href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(place.locationDetails.mapQuery)}`} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className={styles.mapBtn}
                    >
                      🗺️ Open in Google Maps
                    </a>
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* 3D Taste Experience */}
          <section className={styles.cardSection}>
            <div className={styles.sectionHeader}>
              <span className={styles.icon}>🧠</span>
              <h2 className={styles.sectionTitle}>3D Taste Experience</h2>
            </div>
            <div className={styles.tasteGrid}>
              <div className={styles.tasteItem}>
                <h4>Texture</h4>
                <p>{place.taste3D.texture}</p>
              </div>
              <div className={styles.tasteItem}>
                <h4>Flavor</h4>
                <p>{place.taste3D.flavor}</p>
              </div>
              <div className={styles.tasteItem}>
                <h4>Aroma</h4>
                <p>{place.taste3D.aroma}</p>
              </div>
              <div className={styles.tasteItem}>
                <h4>Mouthfeel</h4>
                <p>{place.taste3D.mouthfeel}</p>
              </div>
            </div>
          </section>

          {/* Full Menu */}
          {place.menu && (
            <section className={styles.cardSection}>
              <div className={styles.sectionHeader}>
                <span className={styles.icon}>🍽️</span>
                <h2 className={styles.sectionTitle}>Full Menu</h2>
              </div>
              
              <div className={styles.menuLayout}>
                {Object.entries(place.menu).map(([category, items]) => {
                  if (!items || items.length === 0) return null;
                  return (
                    <div key={category} className={styles.menuGroup}>
                      <h3 className={styles.menuCategoryTitle}>{category.replace(/([A-Z])/g, ' $1').trim()}</h3>
                      <div className={styles.menuItems}>
                        {items.map((item, idx) => (
                          <div key={idx} className={styles.menuItemRow}>
                            <div className={styles.menuItemInfo}>
                              <h4 className={styles.menuItemName}>{item.name}</h4>
                              <p className={styles.menuItemDesc}>{item.description}</p>
                            </div>
                            <div className={styles.menuItemPrice}>₹{item.price}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>
          )}

        </div>

        {/* Right Column: Sidebar */}
        <aside className={styles.sidebar}>
          <div className={`glass-card ${styles.stickySidebar}`}>
            <h3 className={styles.sidebarTitle}>Quick Info</h3>
            
            <ul className={styles.infoList}>
              <li>
                <span className={styles.infoLabel}>Category</span>
                <span className={styles.infoValue}>{place.category}</span>
              </li>
              <li>
                <span className={styles.infoLabel}>Price Range</span>
                <span className={styles.infoValue}>{place.priceRange}</span>
              </li>
              <li>
                <span className={styles.infoLabel}>Peak Time</span>
                <span className={styles.infoValue}>{place.peakTime}</span>
              </li>
              <li>
                <span className={styles.infoLabel}>Service</span>
                <span className={styles.infoValue}>
                  {place.dineIn && "🍽️ Dine-in "} 
                  {place.takeaway && "📦 Takeaway"}
                </span>
              </li>
            </ul>
            
            <div className={styles.lovedDishBox}>
              <h4>⭐ Most Loved Dish</h4>
              <p>{place.mustTry[0]}</p>
            </div>
            
            <div className={styles.whyLoveBox}>
              <h4>❤️ Why People Love It</h4>
              <p>{place.whyStandsOut}</p>
            </div>
            
            <div className={styles.actionButtons}>
              <button className={`btn-primary ${styles.fullBtn}`}>Order Now</button>
              <button className={styles.secondaryBtn}>📍 Get Directions</button>
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
}

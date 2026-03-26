'use client';

import React, { useState, useEffect } from 'react';
import PlaceCard from '@/components/PlaceCard';
import styles from './page.module.css';

export default function Home() {
  const [places, setPlaces] = useState([]);
  const [loading, setLoading] = useState(true);
  
  // Search parameters
  const [location, setLocation] = useState('All Hyderabad');
  const [category, setCategory] = useState('');
  
  // Filters & Sorting
  const [preference, setPreference] = useState(''); // budget, premium, takeaway, dine-in
  const [sortBy, setSortBy] = useState('taste'); // taste, value

  const fetchPlaces = async () => {
    setLoading(true);
    try {
      const queryParams = new URLSearchParams({
        location,
        category,
        preference,
        sortBy
      });
      const res = await fetch(`/api/places?${queryParams.toString()}`);
      const data = await res.json();
      setPlaces(data.places);
    } catch (error) {
      console.error("Failed to fetch places", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPlaces();
  }, [category, preference, sortBy]); // Fetch on filter changes

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    fetchPlaces();
  };

  const handlePreferenceToggle = (pref) => {
    // Basic toggle logic
    setPreference(prev => {
      if (prev.includes(pref)) {
        return prev.replace(pref, '').trim();
      } else {
        return `${prev} ${pref}`.trim();
      }
    });
  };

  return (
    <main className={styles.main}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className="container">
          <h1 className={styles.heroTitle}>Crave<span style={{color: 'var(--primary)'}}>Compass</span></h1>
          <p className={styles.heroSubtitle}>Intelligent dining recommendations based on rich sensory experiences.</p>
          
          <form className={styles.searchBar} onSubmit={handleSearchSubmit}>
            <div className={styles.inputGroup}>
              <span className={styles.icon}>📍</span>
              <input 
                type="text" 
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="Where to? (e.g., Mehdipatnam)"
                className={styles.input}
              />
            </div>
            
            <div className={styles.divider}></div>
            
            <div className={styles.inputGroup}>
              <span className={styles.icon}>🍽️</span>
              <input 
                type="text" 
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                placeholder="What are you craving? (e.g., Desserts, Biryani)"
                className={styles.input}
              />
            </div>
            
            <button type="submit" className="btn-primary">Discover</button>
          </form>
        </div>
      </section>

      <div className={`container ${styles.contentWrapper}`}>
        {/* Sidebar / Filters */}
        <aside className={styles.sidebar}>
          <div className="glass-card">
            <h3 className={styles.filterSectionTitle}>Refine Search</h3>
            
            <div className={styles.filterGroup}>
              <h4 className={styles.filterSubTitle}>Sort By</h4>
              <div className={styles.sortToggle}>
                <button 
                  className={`${styles.toggleBtn} ${sortBy === 'taste' ? styles.active : ''}`}
                  onClick={() => setSortBy('taste')}
                >
                  Best Taste ⭐
                </button>
                <button 
                  className={`${styles.toggleBtn} ${sortBy === 'value' ? styles.active : ''}`}
                  onClick={() => setSortBy('value')}
                >
                  Best Value 💰
                </button>
              </div>
            </div>

            <div className={styles.filterGroup}>
              <h4 className={styles.filterSubTitle}>Preferences</h4>
              <div className={styles.pillContainer}>
                {['budget', 'premium', 'takeaway', 'dine-in'].map(pref => (
                  <button
                    key={pref}
                    className={`${styles.pillBtn} ${preference.includes(pref) ? styles.pillActive : ''}`}
                    onClick={() => handlePreferenceToggle(pref)}
                  >
                    {pref.charAt(0).toUpperCase() + pref.slice(1)}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </aside>

        {/* Results Grid / Zones */}
        <section className={styles.resultsGrid}>
          <div className={styles.resultsHeader}>
            <h2 className={styles.resultsTitle}>
              {loading ? "Discovering..." : `Found ${places.length} Curated Experiences`}
            </h2>
          </div>
          
          {loading ? (
            <div className={styles.loadingContainer}>
              <div className={styles.spinner}></div>
            </div>
          ) : places.length > 0 ? (
            <div className={styles.zoneContainer}>
              {Object.entries(
                places.reduce((acc, place) => {
                  if (!acc[place.zone]) acc[place.zone] = [];
                  acc[place.zone].push(place);
                  return acc;
                }, {})
              ).map(([zoneName, zonePlaces]) => (
                <div key={zoneName} className={styles.zoneBlock}>
                  <div className={styles.zoneHeader}>
                    <span className={styles.zonePin}>📍</span>
                    <h3>ZONE: {zoneName.toUpperCase()}</h3>
                  </div>
                  <div className={styles.grid}>
                    {zonePlaces.map((place, index) => (
                      <div key={place.id} style={{ animationDelay: `${index * 0.1}s` }}>
                        <PlaceCard place={place} />
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className={styles.emptyState}>
              <div className={styles.emptyIcon}>🔍</div>
              <h3>No places found</h3>
              <p>Try adjusting your search filters or location to discover new flavors.</p>
            </div>
          )}
        </section>
      </div>
    </main>
  );
}

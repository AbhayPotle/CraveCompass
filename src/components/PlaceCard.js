'use client';

import React from 'react';
import Link from 'next/link';
import styles from './PlaceCard.module.css';

export default function PlaceCard({ place }) {
  return (
    <Link href={`/place/${place.id}`} className={styles.cardLink}>
      <div className={`glass-card ${styles.card}`}>
        <div className={styles.header}>
          <h3 className={styles.name}>{place.name}</h3>
          <div className={styles.ratingBadge}>
            <span className={styles.star}>★</span>
            <span className={styles.ratingNumber}>{place.rating}</span>
            <span className={styles.reviews}>({place.reviews} reviews)</span>
          </div>
        </div>
        
        <div className={styles.tagsRow}>
          <span className={styles.categoryTag}>{place.category}</span>
          <span className={styles.priceTag}>{place.priceRange}</span>
          {place.takeaway && <span className={styles.attributeTag}>📦 Takeaway</span>}
          {place.dineIn && <span className={styles.attributeTag}>🍽️ Dine-in</span>}
          {place.smartTags?.map(tag => (
            <span key={tag} className={styles.smartTag}>{tag}</span>
          ))}
        </div>
        
        <div className={styles.sensorySectionContainer}>
          <div className={styles.sensorySectionHeader}>
            <span className={styles.brainIcon}>🧠</span>
            <h4>3D Taste Experience</h4>
          </div>
          
          <p className={styles.tastePreview}>
            &quot;{place.tasteDescription}&quot;
          </p>
          
          {place.taste3D && (
            <div className={styles.taste3DDetails}>
              <ul>
                <li><strong>Texture:</strong> {place.taste3D.texture}</li>
                <li><strong>Flavor:</strong> {place.taste3D.flavor}</li>
                <li><strong>Aroma:</strong> {place.taste3D.aroma}</li>
                <li><strong>Mouthfeel:</strong> {place.taste3D.mouthfeel}</li>
              </ul>
            </div>
          )}
        </div>
        
        <div className={styles.detailsSection}>
          <div className={styles.dishesBox}>
            <h4 className={styles.smallHeading}>🔥 Must Try:</h4>
            <p className={styles.dishesList}>{place.mustTry.join(', ')}</p>
          </div>
          
          <div className={styles.highlightBox}>
            <h4 className={styles.smallHeading}>❤️ Why People Love It:</h4>
            <p>{place.whyStandsOut}</p>
          </div>
        </div>
        
        <div className={styles.footer}>
          <span className={styles.bestFor}>Perfect for {place.bestFor}</span>
        </div>
      </div>
    </Link>
  );
}

import { NextResponse } from 'next/server';
import { placesData } from '@/lib/mockData';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  
  const location = searchParams.get('location')?.toLowerCase() || '';
  const category = searchParams.get('category')?.toLowerCase() || '';
  const preference = searchParams.get('preference')?.toLowerCase() || '';
  const sortBy = searchParams.get('sortBy') || 'taste'; // 'taste' or 'value'
  
  // 1. Filter places
  let filteredPlaces = placesData.filter(place => {
    // Location Filter
    if (location && location !== 'all hyderabad' && !place.location.toLowerCase().includes(location) && !place.zone.toLowerCase().includes(location)) {
      return false;
    }
    
    // Category Filter
    if (category && place.category.toLowerCase() !== category) {
      return false;
    }
    
    // Preferences Filter (budget-friendly, takeaway, dine-in, premium)
    if (preference) {
      if (preference.includes('budget') && !place.budgetFriendly) return false;
      if (preference.includes('premium') && place.budgetFriendly) return false;
      if (preference.includes('takeaway') && !place.takeaway) return false;
      if (preference.includes('dine-in') && !place.dineIn) return false;
    }
    
    // Core requirements from prompt: Rating >= 4.0
    if (place.rating < 4.0) return false;
    
    return true;
  });

  // 2. Rank/Sort places
  filteredPlaces = filteredPlaces.sort((a, b) => {
    if (sortBy === 'value') {
      // Sort by value (price lower is better) and then rating
      const priceScoreA = a.priceRange.length;
      const priceScoreB = b.priceRange.length;
      
      if (priceScoreA !== priceScoreB) {
        return priceScoreA - priceScoreB; // lower price first
      }
      return b.rating - a.rating; // higher rating first if price equals
    } 
    
    // Default: Sort by 'taste' (highest priority: rating, then popularity)
    // We weight rating heavily, and popularity as secondary
    const scoreA = (a.rating * 10) + (a.reviews / 1000);
    const scoreB = (b.rating * 10) + (b.reviews / 1000);
    
    return scoreB - scoreA;
  });

  return NextResponse.json({ places: filteredPlaces });
}

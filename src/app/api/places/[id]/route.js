import { NextResponse } from 'next/server';
import { placesData } from '@/lib/mockData';

export async function GET(request, { params }) {
  const { id } = await params;
  const place = placesData.find(p => p.id === id);
  
  if (!place) {
    return NextResponse.json({ error: 'Place not found' }, { status: 404 });
  }
  
  return NextResponse.json({ place });
}

export const placesData = [
  // CENTRAL HYDERABAD
  {
    id: "h1",
    name: "Cafe Bahar",
    zone: "Central Hyderabad",
    location: "Basheerbagh, Hyderabad",
    category: "Biryani",
    rating: 4.6,
    reviews: 42500,
    priceRange: "₹400",
    budgetFriendly: false,
    takeaway: true,
    dineIn: true,
    peakTime: "7:00 PM - 10:00 PM",
    locationDetails: {
      fullAddress: "Old MLA Quarters Road, Hyderguda, Basheerbagh, Hyderabad",
      landmark: "Near Old MLA Quarters",
      areaName: "Basheerbagh",
      nearestMetro: "Assembly Metro Station (5 min auto ride)",
      directions: [
        "From Abids: Head towards Basheerbagh crossing",
        "Turn right at the Commissionerate",
        "Cafe Bahar is on the left before Old MLA Quarters"
      ],
      transportOptions: "Autos and cabs readily available",
      parking: "Limited street parking; Two-wheelers preferred",
      travelTime: "10 mins from Secunderabad",
      mapQuery: "Cafe Bahar Basheerbagh Hyderabad"
    },
    images: [
      "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?q=80&w=800",
      "https://images.unsplash.com/photo-1589302168068-964664d93cb0?q=80&w=800",
      "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=800"
    ],
    menu: {
      starters: [
        { name: "Chicken 65", price: 280, description: "Spicy, deep-fried chicken tossed with curry leaves and green chilies." },
        { name: "Mutton Shikampur", price: 320, description: "Stuffed minced mutton patties seasoned with Hyderabadi spices." }
      ],
      mainCourse: [
        { name: "Hyderabadi Mutton Biryani", price: 380, description: "Classic dum biryani with tender mutton pieces and aromatic basmati rice." },
        { name: "Butter Chicken", price: 300, description: "Rich, creamy, and mildly sweet tomato gravy with roasted chicken." }
      ],
      desserts: [
        { name: "Double ka Meetha", price: 120, description: "Bread pudding dessert of fried bread slices soaked in hot milk with spices." }
      ],
      beverages: [
        { name: "Thumbs Up", price: 50, description: "Classic strong cola." }
      ]
    },
    mustTry: ["Hyderabadi Mutton Biryani", "Double ka Meetha"],
    tasteDescription: "A robust, deeply savory punch of star anise, black cardamom, and roasted onions.",
    whyStandsOut: "Locals swear by its consistency. Less commercialized than other giants, offering a more authentic, punchy spice profile.",
    bestFor: "Authentic Dine-in & Sunday family lunches",
    smartTags: ["⭐ Top Rated", "🔥 Iconic Eats"],
    taste3D: {
      texture: "Distinct, long-grain basmati that falls apart effortlessly, hiding incredibly tender mutton.",
      flavor: "A robust, deeply savory punch of star anise, black cardamom, and roasted onions.",
      aroma: "A room-filling fragrance of pure ghee and saffron steeping in hot steam.",
      mouthfeel: "Moist, fiery, and rich—leaving a lingering, spiced warmth that coats the palate."
    }
  },
  // SOUTH HYDERABAD (Old City)
  {
    id: "h2",
    name: "Nimrah Cafe & Bakery",
    zone: "South Hyderabad",
    location: "Charminar, Hyderabad",
    category: "Street Food",
    rating: 4.7,
    reviews: 15400,
    priceRange: "₹80",
    budgetFriendly: true,
    takeaway: true,
    dineIn: true,
    peakTime: "5:00 AM - 9:00 AM",
    locationDetails: {
      fullAddress: "Beside Mecca Masjid, Charminar Rd, Khilwat, Hyderabad",
      landmark: "Right next to Mecca Masjid and Charminar",
      areaName: "Charminar",
      nearestMetro: "MGBS Station (15 min auto ride) or Charminar bus stop",
      directions: [
        "From Nayapul: Cross the bridge towards Madina building",
        "Walk straight towards Charminar",
        "Nimrah is on the right hand side just beside Mecca Masjid"
      ],
      transportOptions: "High traffic zone; Walkable from drop-off point.",
      parking: "No dedicated parking. Park at the Charminar multi-level parking.",
      travelTime: "20 mins from Abids",
      mapQuery: "Nimrah Cafe and Bakery Charminar Hyderabad"
    },
    images: [
      "https://images.unsplash.com/photo-1561336313-0bd5e0b27ec8?q=80&w=800",
      "https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=800",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800"
    ],
    menu: {
      starters: [
        { name: "Osmania Biscuits", price: 60, description: "A box of perfectly baked, melt-in-mouth sweet and salty biscuits." },
        { name: "Tie Biscuits", price: 50, description: "Flaky, bow-tie shaped pastry biscuits." }
      ],
      mainCourse: [],
      desserts: [
        { name: "Plum Cake", price: 90, description: "Traditional fruit cake rich in dry fruits." }
      ],
      beverages: [
        { name: "Irani Chai", price: 20, description: "Strong, milky tea reduced slowly to perfection." },
        { name: "Khada Dupatta Chai", price: 30, description: "Extra strong, thick layer of malai float." }
      ]
    },
    mustTry: ["Irani Chai", "Osmania Biscuits", "Tie Biscuits"],
    tasteDescription: "A perfect crisp biscuit exterior yielding to a crumbly center in hot tea.",
    whyStandsOut: "The ultimate heritage experience. Sipping tea with a direct view of the Charminar at 6 AM is a cultural rite of passage.",
    bestFor: "Quick bites & Early morning heritage walks",
    smartTags: ["⭐ Most Loved Dish", "💰 Best Budget Pick"],
    taste3D: {
      texture: "A perfectly crisp biscuit exterior that yields to a crumbly, soft center.",
      flavor: "The sharp, tannic strength of reduced black tea balanced by buttery biscuit.",
      aroma: "Boiling milk, cardamom dust, and freshly baked shortbread.",
      mouthfeel: "A hot, soothing liquid wash followed by a rich, melt-in-the-mouth buttery finish."
    }
  },
  {
    id: "h3",
    name: "Hotel Shadab",
    zone: "South Hyderabad",
    location: "Ghansi Bazaar, Hyderabad",
    category: "Biryani",
    rating: 4.5,
    reviews: 38200,
    priceRange: "₹500",
    budgetFriendly: false,
    takeaway: true,
    dineIn: true,
    peakTime: "8:00 PM - 1:00 AM",
    locationDetails: {
      fullAddress: "Plot 21, High Court Road, Madina Circle, Ghansi Bazaar, Hyderabad",
      landmark: "Madina Circle, near High Court",
      areaName: "Ghansi Bazaar",
      nearestMetro: "MGBS Station (10 min auto ride)",
      directions: [
        "From Afzal Gunj: Cross the Nayapul bridge",
        "Take the immediate left at Madina Circle",
        "Shadab is highly visible on the corner block"
      ],
      transportOptions: "Autos directly available. Cabs are accessible.",
      parking: "Valet parking available, extremely congested during peak hours.",
      travelTime: "15 mins from Nampally",
      mapQuery: "Hotel Shadab Madina Circle Hyderabad"
    },
    images: [
      "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?q=80&w=800",
      "https://images.unsplash.com/photo-1590846406792-0adc7f638f1f?q=80&w=800"
    ],
    menu: {
      starters: [
        { name: "Paya Soup", price: 180, description: "Slow-cooked trotters soup, rich in collagen and spice." },
        { name: "Boti Kebab", price: 260, description: "Juicy mutton chunks marinated and grilled over charcoal." }
      ],
      mainCourse: [
        { name: "Shadab Special Haleem", price: 250, description: "Pounded wheat, meat, and lentils slow-cooked for 12 hours (Seasonal)." },
        { name: "Mutton Dum Biryani", price: 350, description: "The legendary old-city biryani." }
      ],
      desserts: [
        { name: "Qubani ka Meetha", price: 150, description: "Stewed apricots topped with fresh malai/cream." },
        { name: "Falooda", price: 120, description: "Rose milk, basil seeds, and ice cream." }
      ],
      beverages: []
    },
    mustTry: ["Authentic Haleem", "Qubani ka Meetha", "Mutton Biryani"],
    tasteDescription: "Intensely meaty and earthy, deeply comforting and rich.",
    whyStandsOut: "Refuses to compromise on old-world recipes. Their Qubani ka Meetha with fresh cream is legendary.",
    bestFor: "Late-night feasts",
    smartTags: ["🔥 Trending", "⭐ Top Rated"],
    taste3D: {
      texture: "Thick, velvety, and paste-like meat interspersed with the slight crunch of fried onions.",
      flavor: "Intensely meaty and earthy, cut perfectly by a sharp squeeze of fresh lime.",
      aroma: "Pounded wheat, slow-roasted spices, and simmering bone marrow.",
      mouthfeel: "Heavy, luxurious, and deeply comforting, melting lazily across the tongue."
    }
  },
  // WEST HYDERABAD
  {
    id: "h4",
    name: "Conçu",
    zone: "West Hyderabad",
    location: "Jubilee Hills, Hyderabad",
    category: "Desserts",
    rating: 4.8,
    reviews: 6500,
    priceRange: "₹800",
    budgetFriendly: false,
    takeaway: true,
    dineIn: true,
    peakTime: "4:00 PM - 8:00 PM",
    locationDetails: {
      fullAddress: "Plot 738, Road No. 37, CBI Colony, Jubilee Hills, Hyderabad",
      landmark: "Near Daspalla Hotel / Road No 36 intersection",
      areaName: "Jubilee Hills",
      nearestMetro: "Jubilee Hills Checkpost (5 min walk)",
      directions: [
        "From Checkpost: Head down Road No 36",
        "Take a left at the Drive-in turn",
        "Concu is situated in a quiet residential lane on the right"
      ],
      transportOptions: "Cabs and private vehicles highly recommended.",
      parking: "Ample street parking available in the quiet colony.",
      travelTime: "10 mins from Hitech City",
      mapQuery: "Concu Jubilee Hills Hyderabad"
    },
    images: [
      "https://images.unsplash.com/photo-1551024601-bec78aea704b?q=80&w=800",
      "https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=800",
      "https://images.unsplash.com/photo-1579954115545-a95591f28bfc?q=80&w=800"
    ],
    menu: {
      starters: [
        { name: "Avocado Toast", price: 450, description: "Smashed avocado on sourdough with cherry tomatoes." }
      ],
      mainCourse: [
        { name: "Mushroom Risotto", price: 550, description: "Creamy arborio rice with wild mushrooms and parmesan." }
      ],
      desserts: [
        { name: "Chocolate Truffle Patisserie", price: 280, description: "Rich, dense chocolate cake with smooth ganache layers." },
        { name: "Macarons (Box of 5)", price: 400, description: "Assorted French macarons (Pistachio, Rose, Dark Chocolate)." },
        { name: "Tiramisu", price: 350, description: "Coffee-soaked ladyfingers with mascarpone cream." }
      ],
      beverages: [
        { name: "Cortado", price: 220, description: "Equal parts espresso and steamed milk." }
      ]
    },
    mustTry: ["Macarons", "Tiramisu", "Choux Pastries"],
    tasteDescription: "Complex chocolate ganache balanced against sweet, nutty almond shells.",
    whyStandsOut: "European-grade baking precision right in Jubilee Hills. Aesthetic packaging makes it the king of premium takeaways.",
    bestFor: "Premium Takeaway & Dates",
    smartTags: ["💎 Hidden Gem", "📦 Premium Takeaway"],
    taste3D: {
      texture: "A delicate, eggshell-thin crust that snaps lightly, revealing a dense, chewy core.",
      flavor: "Complex, high-quality dark chocolate ganache against sweet, nutty almond shells.",
      aroma: "Rich Madagascar vanilla and roasted cocoa.",
      mouthfeel: "An airy, crisp entry that rapidly transforms into a heavy, velvety chew."
    }
  },
  {
    id: "h5",
    name: "Roast - The Caffeine Capital",
    zone: "West Hyderabad",
    location: "Hitech City, Hyderabad",
    category: "Cafes",
    rating: 4.6,
    reviews: 4200,
    priceRange: "₹1000",
    budgetFriendly: false,
    takeaway: true,
    dineIn: true,
    peakTime: "8:00 AM - 12:00 PM",
    locationDetails: {
      fullAddress: "Plot No. 1299/B, Road No. 68, Jubilee Hills (Extension towards Hitech City), Hyderabad",
      landmark: "Near Neeru's Emporium",
      areaName: "Hitech City",
      nearestMetro: "Hitech City Metro Station (10 min auto)",
      directions: [
        "From Cyber Towers: Head towards Jubilee Hills on the main road",
        "Take the left lane before Neerus",
        "Roast is the large glass structure on your left"
      ],
      transportOptions: "Excellent cab/auto availability.",
      parking: "Dedicated valet parking available.",
      travelTime: "5 mins from Mindspace",
      mapQuery: "Roast The Caffeine Capital Hitech City Hyderabad"
    },
    images: [
      "https://images.unsplash.com/photo-1484723091791-c0e7e147c0bbb?q=80&w=800",
      "https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?q=80&w=800",
      "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=800"
    ],
    menu: {
      starters: [
        { name: "Truffle Mushroom Toast", price: 380, description: "Sourdough toast with butter-sautéed mushrooms & truffle oil." }
      ],
      mainCourse: [
        { name: "Aglio Olio Spaghetti", price: 450, description: "Garlic, olive oil, chili flakes, and parmesan." }
      ],
      desserts: [
        { name: "Basque Cheesecake", price: 350, description: "Burnt top with a gooey, creamy center." }
      ],
      beverages: [
        { name: "Pour Over Coffee (Origin: Chikmagalur)", price: 280, description: "Hand-brewed, clean, and acidic." },
        { name: "Iced Sea Salt Mocha", price: 300, description: "Cold mocha topped with sea salt cold foam." }
      ]
    },
    mustTry: ["Pour Over Coffees", "Truffle Mushroom Toast"],
    tasteDescription: "Deeply earthy umami from mushrooms, elevated by the sharp hit of truffle oil.",
    whyStandsOut: "Stunning glasshouse aesthetics and coffee roasted in-house with unparalleled precision.",
    bestFor: "Dine-in & Sunday Brunch",
    smartTags: ["🔥 Trending Spot", "⭐ Top Rated"],
    taste3D: {
      texture: "A shattering sourdough crust topped with incredibly soft, butter-sautéed mushrooms.",
      flavor: "Deeply earthy umami from the mushrooms, elevated by luxurious truffle oil.",
      aroma: "Freshly ground arabica beans mingling with roasted garlic and truffle.",
      mouthfeel: "A warm, creamy, and savory chew that floods the mouth with richness."
    }
  },
  // SECUNDERABAD (NORTH)
  {
    id: "h6",
    name: "Blue Sea Tea & Snacks",
    zone: "North Hyderabad",
    location: "Secunderabad, Hyderabad",
    category: "Street Food",
    rating: 4.5,
    reviews: 11000,
    priceRange: "₹150",
    budgetFriendly: true,
    takeaway: true,
    dineIn: false,
    peakTime: "4:00 PM - 7:00 PM",
    locationDetails: {
      fullAddress: "Regimental Bazaar, Shivaji Nagar, Secunderabad, Hyderabad",
      landmark: "Just outside Secunderabad Railway Station (Clock Tower side)",
      areaName: "Secunderabad",
      nearestMetro: "Secunderabad East / West (2 min walk)",
      directions: [
        "From Paradise: Head towards Secunderabad Railway Station",
        "At the main signal, stay left",
        "Blue Sea is the crowded corner shop right across the station exit"
      ],
      transportOptions: "Extreme high availability of autos and buses.",
      parking: "None available. Stop-and-go grab format.",
      travelTime: "25 mins from Banjara Hills",
      mapQuery: "Blue Sea Secunderabad"
    },
    images: [
      "https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=800",
      "https://images.unsplash.com/photo-1565557623262-b51c2513a641?q=80&w=800"
    ],
    menu: {
      starters: [
        { name: "Mutton Lukhmi", price: 40, description: "Square pastry stuffed with spiced mutton mince." },
        { name: "Chicken Puff", price: 35, description: "Flaky puff pastry with chicken filling." }
      ],
      mainCourse: [],
      desserts: [
        { name: "Fruit Biscuit", price: 50, description: "Packet of classic local fruit/tutti-frutti cookies." }
      ],
      beverages: [
        { name: "Golden Tea", price: 20, description: "The iconic creamy milk tea." }
      ]
    },
    mustTry: ["Golden Tea", "Mutton Lukhmis"],
    tasteDescription: "Savory, peppery meat encased in a buttery, layered puff-pastry crust.",
    whyStandsOut: "A Secunderabad institution. The Lukhmis fly off the shelves by 4 PM, creating a frantic, lively atmosphere.",
    bestFor: "Evening snacks & Quick takeaways",
    smartTags: ["💎 Hidden Gem", "💰 Budget Friendly"],
    taste3D: {
      texture: "A flaky, layered, almost puff-pastry-like crust holding hot, finely minced mutton.",
      flavor: "Savory, peppery meat encased in a buttery, neutral crust that balances the spice.",
      aroma: "Hot oil, baked flour, and spicy minced lamb.",
      mouthfeel: "A loud, shattering crunch that gives way to a steamy, juicy, and savory center."
    }
  }
];

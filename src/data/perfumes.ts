export interface Perfume {
  id: string;
  slug: string;
  brand: string;
  name: string;
  gender: string;
  topNotes: string[];
  heartNotes: string[];
  baseNotes: string[];
  seasons: string[];
  time: string;
  sprays: string;
  occasions: string[];
  featured?: boolean;
  families: string[];
  accords: string[];
}

export const perfumes: Perfume[] = [
  {
    "id": "1",
    "slug": "abercrombie-fitch-fierce",
    "brand": "Abercrombie Fitch",
    "name": "Fierce",
    "gender": "for men",
    "topNotes": [
      "Fir",
      "Lemon",
      "Orange",
      "Petitgrain",
      "Cardamom",
      "Sea Notes"
    ],
    "heartNotes": [
      "Rosemary",
      "Lily-of-the-Valley",
      "Jasmine",
      "Rose",
      "Sage"
    ],
    "baseNotes": [
      "Musk",
      "Vetiver",
      "Oakmoss",
      "Brazilian Rosewood",
      "Sandalwood"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer"
    ],
    "time": "Day",
    "sprays": "4-6",
    "occasions": [
      "Casual",
      "Formal",
      "Office"
    ],
    "featured": false,
    "families": [
      "Aquatic",
      "Aromatic",
      "Citrus"
    ],
    "accords": [
      "Earthy",
      "Floral",
      "Fresh",
      "Herbal"
    ]
  },
  {
    "id": "2",
    "slug": "archive-first-instinct-blue",
    "brand": "Archive",
    "name": "First Instinct Blue",
    "gender": "for men",
    "topNotes": [
      "Apple",
      "Bergamot",
      "Cardamom"
    ],
    "heartNotes": [
      "Lavender",
      "Rosemary",
      "Pepper"
    ],
    "baseNotes": [
      "Tonka Bean",
      "Sandalwood",
      "Amber"
    ],
    "seasons": [
      "Spring",
      "Summer",
      "Monsoon"
    ],
    "time": "Day",
    "sprays": "3-4 sprays; 2-3 indoors",
    "occasions": [
      "Travel",
      "Casual Daytime Events",
      "College",
      "Office",
      "Brunch"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Aromatic",
      "Citrus"
    ],
    "accords": [
      "Floral",
      "Fresh",
      "Fruity",
      "Herbal"
    ]
  },
  {
    "id": "3",
    "slug": "abercrombie-fitch-first-instinct",
    "brand": "Abercrombie Fitch",
    "name": "First Instinct",
    "gender": "for men",
    "topNotes": [
      "Melon",
      "Tonic Water",
      "Gin"
    ],
    "heartNotes": [
      "Violet Leaf",
      "Sichuan Pepper",
      "Citruses"
    ],
    "baseNotes": [
      "Musk",
      "Suede",
      "Amber"
    ],
    "seasons": [
      "Spring",
      "Summer",
      "Monsoon"
    ],
    "time": "Day",
    "sprays": "3-4 sprays; 2-3 indoors",
    "occasions": [
      "Travel",
      "Casual Daytime Events",
      "College",
      "Office",
      "Brunch"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Aquatic",
      "Citrus"
    ],
    "accords": [
      "Floral",
      "Fresh",
      "Leather",
      "Marine"
    ]
  },
  {
    "id": "4",
    "slug": "blu-mediterraneo-bergamotto-di-calabria",
    "brand": "Blu Mediterraneo Bergamotto Di",
    "name": "Calabria",
    "gender": "Unisex",
    "topNotes": [
      "Bergamot; citron"
    ],
    "heartNotes": [
      "Ginger; cedar; flowers"
    ],
    "baseNotes": [
      "Vetiver; musk; benzoin"
    ],
    "seasons": [
      "Spring",
      "Ac Venues",
      "Mild Winter",
      "Monsoon Evenings"
    ],
    "time": "Day / Evening",
    "sprays": "2-3 sprays",
    "occasions": [
      "Lunches",
      "Smart Casuals",
      "Dates",
      "Office",
      "Pujas"
    ],
    "featured": true,
    "families": [
      "Amber/Oriental",
      "Citrus",
      "Spicy"
    ],
    "accords": [
      "Earthy",
      "Fresh",
      "Musky",
      "Spicy"
    ]
  },
  {
    "id": "5",
    "slug": "acqua-di-parma-colonia-ebano",
    "brand": "Acqua Di Parma",
    "name": "Colonia Ebano",
    "gender": "for men",
    "topNotes": [
      "Resins",
      "Red Pepper",
      "Petitgrain",
      "Bergamot"
    ],
    "heartNotes": [
      "Ebony",
      "Honey"
    ],
    "baseNotes": [
      "Vetiver",
      "Patchouli"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer",
      "Winter"
    ],
    "time": "Day / Evening",
    "sprays": "4-6",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal",
      "Office"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Citrus",
      "Gourmand"
    ],
    "accords": [
      "Balsamic",
      "Earthy",
      "Fresh",
      "Spicy"
    ]
  },
  {
    "id": "6",
    "slug": "acqua-di-parma-colonia-intensa",
    "brand": "Acqua Di Parma",
    "name": "Colonia Intensa",
    "gender": "for men",
    "topNotes": [
      "Calabrian bergamot",
      "Ginger",
      "Cardamom",
      "Sicilian Lemon"
    ],
    "heartNotes": [
      "Neroli",
      "Artemisia",
      "Myrtle"
    ],
    "baseNotes": [
      "Leather",
      "Cedar",
      "Benzoin",
      "Musk",
      "Patchouli"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer",
      "Winter"
    ],
    "time": "Day / Evening",
    "sprays": "4-6",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal",
      "Office"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Aromatic",
      "Citrus"
    ],
    "accords": [
      "Earthy",
      "Fresh",
      "Herbal",
      "Leather"
    ]
  },
  {
    "id": "7",
    "slug": "acqua-di-parma-colonia-oud",
    "brand": "Acqua Di Parma",
    "name": "Colonia Oud",
    "gender": "for men",
    "topNotes": [
      "Calabrian bergamot",
      "Italian Orange"
    ],
    "heartNotes": [
      "Agarwood (Oud)",
      "Amyris",
      "Coriander"
    ],
    "baseNotes": [
      "Leather",
      "Atlas Cedar",
      "Sandalwood",
      "Musk",
      "Indonesian Patchouli Leaf"
    ],
    "seasons": [
      "Spring",
      "Ac Venues",
      "Mild Winter",
      "Monsoon Evenings"
    ],
    "time": "Day / Evening",
    "sprays": "2-3 sprays",
    "occasions": [
      "Lunches",
      "Smart Casuals",
      "Dates",
      "Office",
      "Pujas"
    ],
    "featured": false,
    "families": [
      "Citrus",
      "Leather",
      "Spicy"
    ],
    "accords": [
      "Earthy",
      "Fresh",
      "Leather",
      "Musky"
    ]
  },
  {
    "id": "8",
    "slug": "acqua-di-parma-acqua-di-parma-colonia-pura",
    "brand": "Acqua Di Parma",
    "name": "Acqua di Parma Colonia Pura",
    "gender": "for women and men",
    "topNotes": [
      "Ozonic notes",
      "Bergamot",
      "Orange",
      "Petitgrain"
    ],
    "heartNotes": [
      "Narcissus",
      "Jasmine Sambac",
      "Coriander"
    ],
    "baseNotes": [
      "White Musk",
      "Cedar",
      "Patchouli"
    ],
    "seasons": [
      "Spring",
      "Summer",
      "Monsoon"
    ],
    "time": "Day",
    "sprays": "3-4 sprays; 2-3 indoors",
    "occasions": [
      "Travel",
      "Casual Daytime Events",
      "College",
      "Office",
      "Brunch"
    ],
    "featured": false,
    "families": [
      "Citrus",
      "Floral",
      "Spicy"
    ],
    "accords": [
      "Earthy",
      "Floral",
      "Fresh",
      "Musky"
    ]
  },
  {
    "id": "9",
    "slug": "acqua-di-parma-acqua-di-parma-magnolia-nobile",
    "brand": "Acqua Di Parma",
    "name": "Acqua di Parma Magnolia Nobile",
    "gender": "for women",
    "topNotes": [
      "Citron",
      "Lemon",
      "Bergamot"
    ],
    "heartNotes": [
      "Magnolia",
      "Jasmine",
      "Tuberose",
      "Rose"
    ],
    "baseNotes": [
      "Vetiver",
      "Sandalwood",
      "Vanilla",
      "Patchouli"
    ],
    "seasons": [
      "Spring",
      "Summer",
      "Monsoon"
    ],
    "time": "Day",
    "sprays": "3-4 sprays; 2-3 indoors Quercia Eau de Parfum for women and men",
    "occasions": [
      "Travel",
      "Casual Daytime Events",
      "College",
      "Office",
      "Brunch"
    ],
    "featured": true,
    "families": [
      "Amber/Oriental",
      "Citrus",
      "Floral"
    ],
    "accords": [
      "Earthy",
      "Floral",
      "Fresh",
      "Sweet"
    ]
  },
  {
    "id": "10",
    "slug": "when-to-wear-quercia-eau-de-parfum",
    "brand": "When To Wear",
    "name": "Quercia Eau de Parfum",
    "gender": "for women and men",
    "topNotes": [
      "Lemon",
      "Calabrian bergamot",
      "Pink Pepper",
      "Petitgrain"
    ],
    "heartNotes": [
      "Cardamom",
      "Cedar",
      "Geranium"
    ],
    "baseNotes": [
      "Moss",
      "Tonka Bean",
      "Patchouli"
    ],
    "seasons": [
      "Spring",
      "Ac Venues",
      "Mild Winter",
      "Monsoon Evenings"
    ],
    "time": "Day / Evening",
    "sprays": "2-3 sprays",
    "occasions": [
      "Lunches",
      "Smart Casuals",
      "Dates",
      "Office",
      "Pujas"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Citrus",
      "Floral"
    ],
    "accords": [
      "Earthy",
      "Floral",
      "Fresh",
      "Spicy"
    ]
  },
  {
    "id": "11",
    "slug": "acqua-di-parma-rosa-nobile",
    "brand": "Acqua Di Parma",
    "name": "Rosa Nobile",
    "gender": "for women",
    "topNotes": [
      "Mandarin Orange",
      "Pepper",
      "Bergamot"
    ],
    "heartNotes": [
      "Rose",
      "Peony",
      "Violet",
      "Lily-of-the-Valley"
    ],
    "baseNotes": [
      "Musk",
      "Cedar",
      "Ambergris"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer"
    ],
    "time": "Day",
    "sprays": "4-6",
    "occasions": [
      "Brunch",
      "Casual Daytime Events",
      "College",
      "Office",
      "Travel"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Citrus",
      "Floral"
    ],
    "accords": [
      "Floral",
      "Fresh",
      "Musky",
      "Powdery"
    ]
  },
  {
    "id": "12",
    "slug": "acqua-di-parma-fico-di-amalfi",
    "brand": "Acqua Di Parma",
    "name": "Fico di Amalfi",
    "gender": "for women and men",
    "topNotes": [
      "Grapefruit",
      "Bergamot",
      "Citron",
      "Lemon"
    ],
    "heartNotes": [
      "Fig Nectar",
      "Jasmine",
      "Pink Pepper"
    ],
    "baseNotes": [
      "Fig Tree",
      "Cedar",
      "Benzoin"
    ],
    "seasons": [
      "Spring",
      "Summer",
      "Monsoon"
    ],
    "time": "Day",
    "sprays": "3-4 sprays; 2-3 indoors Sprays: 3-4 sprays; 2-3 indoors",
    "occasions": [
      "Travel",
      "Casual Daytime Events",
      "College",
      "Office",
      "Brunch"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Citrus",
      "Floral"
    ],
    "accords": [
      "Floral",
      "Fresh",
      "Fruity",
      "Spicy"
    ]
  },
  {
    "id": "13",
    "slug": "aedes-de-venustas-iris-nazarena",
    "brand": "Aedes De Venustas",
    "name": "Iris Nazarena",
    "gender": "for women and men",
    "topNotes": [
      "Iris",
      "Juniper Berries",
      "Ambrette (Musk Mallow)",
      "Star Anise"
    ],
    "heartNotes": [
      "Leather",
      "Rose",
      "Cloves",
      "Agarwood (Oud)"
    ],
    "baseNotes": [
      "Incense",
      "Woody Notes",
      "Vetiver",
      "Amber"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Winter"
    ],
    "time": "Evening",
    "sprays": "2-3",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Floral",
      "Leather"
    ],
    "accords": [
      "Balsamic",
      "Earthy",
      "Floral",
      "Leather"
    ]
  },
  {
    "id": "14",
    "slug": "agatha-ruiz-de-la-prada-wow-girl",
    "brand": "Agatha Ruiz De La Prada",
    "name": "Wow Girl",
    "gender": "for women",
    "topNotes": [
      "Lemon",
      "Candy Apple",
      "Lime"
    ],
    "heartNotes": [
      "Peony",
      "Datura"
    ],
    "baseNotes": [
      "Cotton Candy",
      "Praline",
      "White Woods",
      "Moss"
    ],
    "seasons": [
      "Ac Venues",
      "Cool Nights",
      "Winter"
    ],
    "time": "Evening",
    "sprays": "4-6",
    "occasions": [
      "Festive Evenings",
      "Formal Dinners",
      "Receptions",
      "Winter Weddings"
    ],
    "featured": false,
    "families": [
      "Citrus",
      "Floral",
      "Fruity"
    ],
    "accords": [
      "Floral",
      "Fresh",
      "Fruity",
      "Sweet"
    ]
  },
  {
    "id": "15",
    "slug": "alexander-mcqueen-kaaf",
    "brand": "Alexander Mcqueen",
    "name": "Kaaf",
    "gender": "Unisex",
    "topNotes": [
      "Lavender; watermelon; Sicilian orange; red fruits"
    ],
    "heartNotes": [
      "Lily-of-the-valley; jasmine; lotus"
    ],
    "baseNotes": [
      "White musk; ambroxan; sandalwood"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer"
    ],
    "time": "Day",
    "sprays": "4-6",
    "occasions": [
      "Casual",
      "Office"
    ],
    "featured": false,
    "families": [
      "Aquatic",
      "Aromatic",
      "Citrus"
    ],
    "accords": [
      "Floral",
      "Fresh",
      "Herbal",
      "Marine"
    ]
  },
  {
    "id": "16",
    "slug": "archive-kingdom",
    "brand": "Archive",
    "name": "Kingdom",
    "gender": "for women",
    "topNotes": [
      "Neroli",
      "Bergamot",
      "Orange",
      "Mint",
      "Lemon",
      "Mandarin Orange"
    ],
    "heartNotes": [
      "Celery Seeds",
      "Rhubarb",
      "Ginger",
      "Carnation",
      "Rose",
      "Jasmine"
    ],
    "baseNotes": [
      "Musk",
      "Amber",
      "Oakmoss"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer"
    ],
    "time": "Day",
    "sprays": "4-6",
    "occasions": [
      "Brunch",
      "Casual Daytime Events",
      "College",
      "Office",
      "Travel"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Aromatic",
      "Citrus"
    ],
    "accords": [
      "Floral",
      "Fresh",
      "Herbal",
      "Musky"
    ]
  },
  {
    "id": "17",
    "slug": "amouage-beach-hut-man",
    "brand": "Amouage",
    "name": "Beach Hut Man",
    "gender": "for men",
    "topNotes": [
      "Mint",
      "Galbanum",
      "Orange Blossom"
    ],
    "heartNotes": [
      "Ivy",
      "Vetiver",
      "Moss"
    ],
    "baseNotes": [
      "Woody Notes",
      "Myrrh",
      "Patchouli"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer",
      "Winter"
    ],
    "time": "Day / Evening",
    "sprays": "4-6",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal",
      "Office"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Aromatic",
      "Citrus"
    ],
    "accords": [
      "Balsamic",
      "Earthy",
      "Floral",
      "Fresh"
    ]
  },
  {
    "id": "18",
    "slug": "amouage-boundless",
    "brand": "Amouage",
    "name": "Boundless",
    "gender": "for women and men",
    "topNotes": [
      "Cardamom",
      "Blood Orange",
      "Ginger",
      "elemi"
    ],
    "heartNotes": [
      "Bourbon Vanilla",
      "Benzoin"
    ],
    "baseNotes": [
      "Tobacco",
      "Myrrh",
      "Incense",
      "Cacao",
      "Guaiac Wood",
      "Patchouli",
      "Vetiver",
      "Papyrus",
      "Oakmoss"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer"
    ],
    "time": "Day",
    "sprays": "4-6",
    "occasions": [
      "Brunch",
      "Casual Daytime Events",
      "College",
      "Office",
      "Travel"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Citrus",
      "Gourmand"
    ],
    "accords": [
      "Balsamic",
      "Earthy",
      "Fresh",
      "Spicy"
    ]
  },
  {
    "id": "19",
    "slug": "amouage-bracken-woman",
    "brand": "Amouage",
    "name": "Bracken Woman",
    "gender": "for women",
    "topNotes": [
      "Fern",
      "Wild Berries"
    ],
    "heartNotes": [
      "Chamomile",
      "Leather",
      "Narcissus",
      "Lily"
    ],
    "baseNotes": [
      "Birch",
      "Vetiver",
      "Patchouli"
    ],
    "seasons": [
      "Spring",
      "Ac Venues",
      "Mild Winter",
      "Monsoon Evenings"
    ],
    "time": "Day / Evening",
    "sprays": "2-3 sprays",
    "occasions": [
      "Lunches",
      "Smart Casuals",
      "Dates",
      "Office",
      "Pujas"
    ],
    "featured": false,
    "families": [
      "Floral",
      "Leather",
      "Woody"
    ],
    "accords": [
      "Earthy",
      "Floral",
      "Leather",
      "Woody"
    ]
  },
  {
    "id": "20",
    "slug": "amouage-dia-man",
    "brand": "Amouage",
    "name": "Dia Man",
    "gender": "for men",
    "topNotes": [
      "Incense",
      "Cardamom",
      "Labdanum",
      "Bitter Orange"
    ],
    "heartNotes": [
      "Peony",
      "Plum",
      "Orris Root",
      "Ylang-Ylang"
    ],
    "baseNotes": [
      "Vetiver",
      "Leather",
      "Brazilian Rosewood",
      "Amber",
      "Patchouli"
    ],
    "seasons": [
      "Ac Venues",
      "Winter",
      "Cool Nights"
    ],
    "time": "Evening",
    "sprays": "1-2 sprays VIDEH / MASTER PERFUME CATALOG",
    "occasions": [
      "Receptions",
      "Winter Weddings",
      "Festive Evenings",
      "Formal Dinners"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Citrus",
      "Floral"
    ],
    "accords": [
      "Balsamic",
      "Earthy",
      "Floral",
      "Fresh"
    ]
  },
  {
    "id": "21",
    "slug": "amouage-enclave",
    "brand": "Amouage",
    "name": "Enclave",
    "gender": "for women and men",
    "topNotes": [
      "Peppermint",
      "Cardamom",
      "Cinnamon",
      "Pink Pepper"
    ],
    "heartNotes": [
      "Olibanum",
      "Patchouli",
      "Vetiver",
      "Rose"
    ],
    "baseNotes": [
      "Amber Xtreme",
      "Leather",
      "Labdanum"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Winter"
    ],
    "time": "Evening",
    "sprays": "2-3",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Aromatic",
      "Floral"
    ],
    "accords": [
      "Earthy",
      "Floral",
      "Herbal",
      "Leather"
    ]
  },
  {
    "id": "22",
    "slug": "amouage-epic-56-woman",
    "brand": "Amouage",
    "name": "Epic 56 Woman",
    "gender": "for women",
    "topNotes": [
      "Cumin",
      "Pink Pepper",
      "Cinnamon"
    ],
    "heartNotes": [
      "Damask Rose",
      "Jasmine Tea",
      "Geranium"
    ],
    "baseNotes": [
      "Olibanum",
      "Agarwood (Oud)",
      "Patchouli",
      "Sandalwood",
      "Amber",
      "Guaiac Wood",
      "Musk",
      "Orris",
      "Vanilla"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Winter"
    ],
    "time": "Evening",
    "sprays": "2-3",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Floral",
      "Spicy"
    ],
    "accords": [
      "Earthy",
      "Floral",
      "Musky",
      "Spicy"
    ]
  },
  {
    "id": "23",
    "slug": "amouage-figment-man",
    "brand": "Amouage",
    "name": "Figment Man",
    "gender": "for men",
    "topNotes": [
      "Geranium",
      "Lemon",
      "Pink Pepper"
    ],
    "heartNotes": [
      "Animal notes",
      "Vetiver",
      "Sandalwood"
    ],
    "baseNotes": [
      "Earthy Notes",
      "Labdanum",
      "Guaiac Wood"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer",
      "Winter"
    ],
    "time": "Day / Evening",
    "sprays": "4-6",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal",
      "Office"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Citrus",
      "Floral"
    ],
    "accords": [
      "Earthy",
      "Floral",
      "Fresh",
      "Spicy"
    ]
  },
  {
    "id": "24",
    "slug": "amouage-figment-woman",
    "brand": "Amouage",
    "name": "Figment Woman",
    "gender": "for women",
    "topNotes": [
      "Gardenia",
      "Sichuan Pepper",
      "Saffron"
    ],
    "heartNotes": [
      "Lily",
      "Tuberose",
      "Jasmine",
      "Ylang-Ylang",
      "Cassia Bourbon",
      "Orange Blossom"
    ],
    "baseNotes": [
      "Papyrus",
      "Orris",
      "Patchouli",
      "Incense"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer",
      "Winter"
    ],
    "time": "Day / Evening",
    "sprays": "4-6",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal",
      "Office"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Citrus",
      "Floral"
    ],
    "accords": [
      "Balsamic",
      "Earthy",
      "Floral",
      "Fresh"
    ]
  },
  {
    "id": "25",
    "slug": "amouage-gold-man",
    "brand": "Amouage",
    "name": "Gold Man",
    "gender": "for men",
    "topNotes": [
      "Lily-of-the-Valley",
      "Rose Hip",
      "Incense"
    ],
    "heartNotes": [
      "Jasmine",
      "Orris Root",
      "Myrrh"
    ],
    "baseNotes": [
      "Civet",
      "Musk",
      "Oakmoss",
      "Amber",
      "Sandalwood",
      "Patchouli",
      "Cedar"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Winter"
    ],
    "time": "Evening",
    "sprays": "2-3",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Floral",
      "Leather"
    ],
    "accords": [
      "Balsamic",
      "Earthy",
      "Floral",
      "Leather"
    ]
  },
  {
    "id": "26",
    "slug": "amouage-gold-woman",
    "brand": "Amouage",
    "name": "Gold Woman",
    "gender": "for women",
    "topNotes": [
      "Lily-of-the-Valley",
      "Rose",
      "Incense"
    ],
    "heartNotes": [
      "Incense",
      "Jasmine",
      "Orris Root",
      "Myrrh",
      "Labdanum"
    ],
    "baseNotes": [
      "Civet",
      "Musk",
      "Sandalwood",
      "Amber",
      "Cedar",
      "Oakmoss",
      "Ambergris",
      "Patchouli"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Winter"
    ],
    "time": "Evening",
    "sprays": "2-3",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Floral",
      "Leather"
    ],
    "accords": [
      "Balsamic",
      "Earthy",
      "Floral",
      "Leather"
    ]
  },
  {
    "id": "27",
    "slug": "amouage-guidance",
    "brand": "Amouage",
    "name": "Guidance",
    "gender": "for women and men",
    "topNotes": [
      "Pear",
      "Hazelnut",
      "Olibanum"
    ],
    "heartNotes": [
      "Osmanthus",
      "Rose",
      "Saffron",
      "Jasmine Sambac"
    ],
    "baseNotes": [
      "Sandalwood",
      "Vanilla",
      "Akigalawood",
      "Ambergris",
      "Labdanum"
    ],
    "seasons": [
      "Spring",
      "Winter"
    ],
    "time": "Evening",
    "sprays": "2-3",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Floral",
      "Fruity"
    ],
    "accords": [
      "Floral",
      "Fruity",
      "Spicy",
      "Sweet"
    ]
  },
  {
    "id": "28",
    "slug": "amouage-honour-43-woman",
    "brand": "Amouage",
    "name": "Honour 43 Woman",
    "gender": "for women",
    "topNotes": [
      "Rhubarb Leaf",
      "Pepper",
      "Coriander"
    ],
    "heartNotes": [
      "Tuberose",
      "Jasmine",
      "Lily-of-the-Valley",
      "Carnation"
    ],
    "baseNotes": [
      "Sandalwood",
      "Opoponax",
      "Labdanum",
      "Olibanum",
      "Vetiver",
      "Leather"
    ],
    "seasons": [
      "Ac Venues",
      "Winter",
      "Monsoon Evenings"
    ],
    "time": "Evening",
    "sprays": "2-3 sprays",
    "occasions": [
      "Celebrations",
      "Receptions",
      "Dinner Dates",
      "Formal Events"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Floral",
      "Leather"
    ],
    "accords": [
      "Earthy",
      "Floral",
      "Leather",
      "Spicy"
    ]
  },
  {
    "id": "29",
    "slug": "amouage-imitation-man",
    "brand": "Amouage",
    "name": "Imitation Man",
    "gender": "for men",
    "topNotes": [
      "Citron",
      "Nutmeg",
      "Black Pepper"
    ],
    "heartNotes": [
      "Turkish Rose",
      "Orris",
      "Violet"
    ],
    "baseNotes": [
      "Leather",
      "Myrhh",
      "Patchouli",
      "Vetiver",
      "Castoreum"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Winter"
    ],
    "time": "Evening",
    "sprays": "2-3",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal"
    ],
    "featured": false,
    "families": [
      "Floral",
      "Leather",
      "Spicy"
    ],
    "accords": [
      "Earthy",
      "Floral",
      "Leather",
      "Powdery"
    ]
  },
  {
    "id": "30",
    "slug": "amouage-interlude-53-man",
    "brand": "Amouage",
    "name": "Interlude 53 Man",
    "gender": "for men",
    "topNotes": [
      "Oregano",
      "Pimento",
      "Bergamot"
    ],
    "heartNotes": [
      "Opoponax",
      "Incense",
      "Amber",
      "Labdanum"
    ],
    "baseNotes": [
      "Smoke",
      "Leather",
      "Agarwood (Oud)",
      "Patchouli",
      "Sandalwood"
    ],
    "seasons": [
      "Spring",
      "Ac Venues",
      "Mild Winter",
      "Monsoon Evenings"
    ],
    "time": "Day / Evening",
    "sprays": "2-3 sprays",
    "occasions": [
      "Lunches",
      "Smart Casuals",
      "Dates",
      "Office",
      "Pujas"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Citrus",
      "Leather"
    ],
    "accords": [
      "Balsamic",
      "Earthy",
      "Fresh",
      "Leather"
    ]
  },
  {
    "id": "31",
    "slug": "amouage-interlude-black-iris",
    "brand": "Amouage",
    "name": "Interlude Black Iris",
    "gender": "for women and men",
    "topNotes": [
      "Violet Leaf",
      "Rosemary",
      "Bergamot"
    ],
    "heartNotes": [
      "Orris",
      "Olibanum",
      "Myrhh",
      "Labdanum",
      "Amber",
      "Vanilla"
    ],
    "baseNotes": [
      "Leather",
      "Agarwood (Oud)",
      "Sandalwood",
      "Patchouli",
      "Cedar  PAGE 4 / 118"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer",
      "Winter"
    ],
    "time": "Day / Evening",
    "sprays": "4-6",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal",
      "Office"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Aromatic",
      "Citrus"
    ],
    "accords": [
      "Earthy",
      "Floral",
      "Fresh",
      "Herbal"
    ]
  },
  {
    "id": "32",
    "slug": "amouage-interlude-man",
    "brand": "Amouage",
    "name": "Interlude Man",
    "gender": "for men",
    "topNotes": [
      "Oregano",
      "Pepper",
      "Bergamot"
    ],
    "heartNotes": [
      "Incense",
      "Opoponax",
      "Amber",
      "Labdanum"
    ],
    "baseNotes": [
      "Agarwood (Oud)",
      "Leather",
      "Sandalwood",
      "Patchouli"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer",
      "Winter"
    ],
    "time": "Day / Evening",
    "sprays": "4-6",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal",
      "Office"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Citrus",
      "Leather"
    ],
    "accords": [
      "Balsamic",
      "Earthy",
      "Fresh",
      "Leather"
    ]
  },
  {
    "id": "33",
    "slug": "amouage-journey-man",
    "brand": "Amouage",
    "name": "Journey Man",
    "gender": "for men",
    "topNotes": [
      "Sichuan Pepper",
      "Cardamom",
      "Bergamot",
      "Neroli"
    ],
    "heartNotes": [
      "Tobacco Leaf",
      "Incense",
      "Juniper Berries"
    ],
    "baseNotes": [
      "Leather",
      "Cypriol Oil or Nagarmotha",
      "Tonka Bean",
      "Musk"
    ],
    "seasons": [
      "Ac Venues",
      "Winter",
      "Cool Nights"
    ],
    "time": "Evening",
    "sprays": "1-2 sprays",
    "occasions": [
      "Receptions",
      "Winter Weddings",
      "Festive Evenings",
      "Formal Dinners"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Citrus",
      "Gourmand"
    ],
    "accords": [
      "Balsamic",
      "Fresh",
      "Leather",
      "Musky"
    ]
  },
  {
    "id": "34",
    "slug": "amouage-jubilation-xxv-man",
    "brand": "Amouage",
    "name": "Jubilation XXV Man",
    "gender": "for men",
    "topNotes": [
      "Blackberry",
      "Olibanum",
      "Orange",
      "Labdanum",
      "Coriander",
      "Tarragon"
    ],
    "heartNotes": [
      "Honey",
      "Guaiac Wood",
      "Cinnamon",
      "Bay Leaf",
      "Clove",
      "Rose",
      "Orchid",
      "Celery Seeds"
    ],
    "baseNotes": [
      "Opoponax",
      "Agarwood (Oud)",
      "Myrrh",
      "Patchouli",
      "Cedar",
      "Ambergris",
      "Musk"
    ],
    "seasons": [
      "Spring",
      "Ac Venues",
      "Mild Winter",
      "Monsoon Evenings"
    ],
    "time": "Day / Evening",
    "sprays": "2-3 sprays",
    "occasions": [
      "Lunches",
      "Smart Casuals",
      "Dates",
      "Office",
      "Pujas"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Citrus",
      "Floral"
    ],
    "accords": [
      "Balsamic",
      "Earthy",
      "Floral",
      "Fresh"
    ]
  },
  {
    "id": "35",
    "slug": "amouage-the-library-collection-opus-v",
    "brand": "Amouage",
    "name": "The Library Collection Opus V",
    "gender": "for women and men",
    "topNotes": [
      "Orris Root",
      "Rum"
    ],
    "heartNotes": [
      "Iris",
      "Rose",
      "Jasmine"
    ],
    "baseNotes": [
      "Agarwood (Oud)",
      "Woodsy Notes",
      "Civetta"
    ],
    "seasons": [
      "Spring",
      "Winter"
    ],
    "time": "Evening",
    "sprays": "3-4",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal"
    ],
    "featured": false,
    "families": [
      "Floral",
      "Leather",
      "Woody"
    ],
    "accords": [
      "Floral",
      "Leather",
      "Powdery",
      "Woody"
    ]
  },
  {
    "id": "36",
    "slug": "archive-love-mimosa",
    "brand": "Archive",
    "name": "Love Mimosa",
    "gender": "for women",
    "topNotes": [
      "Cascalone",
      "Violet Leaf",
      "Orris"
    ],
    "heartNotes": [
      "Mimosa",
      "Pear",
      "Paradisone"
    ],
    "baseNotes": [
      "Heliotrope",
      "Ambroxan",
      "Ylang-Ylang"
    ],
    "seasons": [
      "Ac Venues",
      "Monsoon Evenings",
      "Winter"
    ],
    "time": "Evening",
    "sprays": "4-6",
    "occasions": [
      "Celebrations",
      "Dinner Dates",
      "Formal Events",
      "Receptions"
    ],
    "featured": false,
    "families": [
      "Aquatic",
      "Floral",
      "Fruity"
    ],
    "accords": [
      "Floral",
      "Fruity",
      "Marine",
      "Powdery"
    ]
  },
  {
    "id": "37",
    "slug": "amouage-lyric-man",
    "brand": "Amouage",
    "name": "Lyric Man",
    "gender": "for men",
    "topNotes": [
      "Lime",
      "Bergamot"
    ],
    "heartNotes": [
      "Rose",
      "Angelica",
      "Ginger",
      "Orange Blossom",
      "Saffron",
      "Nutmeg",
      "Galbanum"
    ],
    "baseNotes": [
      "Musk",
      "Incense",
      "Pine Tree",
      "Sandalwood",
      "Vanilla"
    ],
    "seasons": [
      "Spring",
      "Ac Venues",
      "Mild Winter",
      "Monsoon Evenings"
    ],
    "time": "Day / Evening",
    "sprays": "2-3 sprays",
    "occasions": [
      "Lunches",
      "Smart Casuals",
      "Dates",
      "Office",
      "Pujas"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Citrus",
      "Floral"
    ],
    "accords": [
      "Balsamic",
      "Floral",
      "Fresh",
      "Green"
    ]
  },
  {
    "id": "38",
    "slug": "amouage-lyric-woman",
    "brand": "Amouage",
    "name": "Lyric Woman",
    "gender": "for women",
    "topNotes": [
      "Cardamom",
      "Cinnamon",
      "Ginger",
      "Bergamot"
    ],
    "heartNotes": [
      "Rose",
      "Geranium",
      "Ylang-Ylang",
      "Orris Root",
      "Angelica",
      "Jasmine"
    ],
    "baseNotes": [
      "Incense",
      "Sandalwood",
      "Woodsy Notes",
      "Musk",
      "Patchouli",
      "Tonka Bean",
      "Oakmoss",
      "Vanilla",
      "Vetiver"
    ],
    "seasons": [
      "Ac Venues",
      "Winter",
      "Cool Nights"
    ],
    "time": "Evening",
    "sprays": "1-2 sprays",
    "occasions": [
      "Receptions",
      "Winter Weddings",
      "Festive Evenings",
      "Formal Dinners"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Citrus",
      "Floral"
    ],
    "accords": [
      "Balsamic",
      "Earthy",
      "Floral",
      "Fresh"
    ]
  },
  {
    "id": "39",
    "slug": "amouage-material",
    "brand": "Amouage",
    "name": "Material",
    "gender": "for women and men",
    "topNotes": [
      "elemi",
      "Patchouli"
    ],
    "heartNotes": [
      "Madagascar Vanilla",
      "Benzoin"
    ],
    "baseNotes": [
      "Tonka Bean",
      "Incense",
      "Labdanum",
      "Guaiac Wood",
      "Agarwood (Oud)",
      "Osmanthus"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Winter"
    ],
    "time": "Evening",
    "sprays": "2-3",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Floral",
      "Woody"
    ],
    "accords": [
      "Balsamic",
      "Earthy",
      "Floral",
      "Sweet"
    ]
  },
  {
    "id": "40",
    "slug": "amouage-memoir-man",
    "brand": "Amouage",
    "name": "Memoir Man",
    "gender": "for men",
    "topNotes": [
      "Wormwood",
      "Mint",
      "Basil"
    ],
    "heartNotes": [
      "Incense",
      "Lavender",
      "Rose"
    ],
    "baseNotes": [
      "Tobacco",
      "Leather",
      "Sandalwood",
      "Guaiac Wood",
      "Vetiver",
      "oak moss",
      "Amber",
      "Vanille",
      "Musk"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Winter"
    ],
    "time": "Evening",
    "sprays": "2-3",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal"
    ],
    "featured": true,
    "families": [
      "Amber/Oriental",
      "Aromatic",
      "Floral"
    ],
    "accords": [
      "Balsamic",
      "Earthy",
      "Floral",
      "Herbal"
    ]
  },
  {
    "id": "41",
    "slug": "amouage-memoir-woman",
    "brand": "Amouage",
    "name": "Memoir Woman",
    "gender": "for women",
    "topNotes": [
      "Wormwood",
      "Cardamom",
      "Pink Pepper",
      "Mandarin Orange"
    ],
    "heartNotes": [
      "Incense",
      "Clove",
      "Woodsy Notes",
      "Rose",
      "White Flowers",
      "Pepper",
      "Jasmine"
    ],
    "baseNotes": [
      "Leather",
      "French labdanum",
      "Castoreum",
      "Styrax",
      "oak moss",
      "Musk"
    ],
    "seasons": [
      "Spring",
      "Summer",
      "Winter"
    ],
    "time": "Day / Evening",
    "sprays": "4-6",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal",
      "Office"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Citrus",
      "Floral"
    ],
    "accords": [
      "Balsamic",
      "Floral",
      "Fresh",
      "Leather"
    ]
  },
  {
    "id": "42",
    "slug": "amouage-myths-man",
    "brand": "Amouage",
    "name": "Myths Man",
    "gender": "for men",
    "topNotes": [
      "Chrysanthemum",
      "Orris"
    ],
    "heartNotes": [
      "elemi",
      "Rum",
      "Vetiver",
      "Rose"
    ],
    "baseNotes": [
      "Ash",
      "Leather",
      "Labdanum"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Winter"
    ],
    "time": "Evening",
    "sprays": "2-3",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Floral",
      "Leather"
    ],
    "accords": [
      "Earthy",
      "Floral",
      "Leather",
      "Warm"
    ]
  },
  {
    "id": "43",
    "slug": "opus-vii-reckless-leather-opus-xii-rose-incense",
    "brand": "Opus Vii Reckless Leather",
    "name": "Opus XII Rose Incense",
    "gender": "for women and men",
    "topNotes": [
      "Fenugreek",
      "Galbanum",
      "Cardamom",
      "Pink Pepper",
      "Nutmeg"
    ],
    "heartNotes": [
      "Leather",
      "Agarwood (Oud)",
      "Ambergris",
      "Patchouli",
      "Ambroxan"
    ],
    "baseNotes": [
      "Cypriol Oil or Nagarmotha",
      "Olibanum",
      "Sandalwood",
      "Costus",
      "Musk"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Winter"
    ],
    "time": "Evening",
    "sprays": "2-3",
    "occasions": [
      "Date Night",
      "Formal"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Leather",
      "Spicy"
    ],
    "accords": [
      "Earthy",
      "Green",
      "Leather",
      "Musky"
    ]
  },
  {
    "id": "44",
    "slug": "",
    "brand": "Archive",
    "name": "Classified Fragrance",
    "gender": "Unisex",
    "topNotes": [
      "Olibanum",
      "elemi",
      "Ink"
    ],
    "heartNotes": [
      "Damask Rose",
      "Olibanum"
    ],
    "baseNotes": [
      "Myrrh",
      "Sandalwood",
      "Cedar",
      "Vanilla"
    ],
    "seasons": [
      "Spring",
      "Winter"
    ],
    "time": "Evening",
    "sprays": "2-3",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Floral",
      "Woody"
    ],
    "accords": [
      "Balsamic",
      "Floral",
      "Sweet",
      "Warm"
    ]
  },
  {
    "id": "45",
    "slug": "amouage-opus-xiii-silver-oud",
    "brand": "Amouage",
    "name": "Opus XIII Silver Oud",
    "gender": "for women and men",
    "topNotes": [
      "Cypriol Oil or Nagarmotha",
      "Patchouli",
      "Virginia Cedar"
    ],
    "heartNotes": [
      "Agarwood (Oud)",
      "Madagascar Vanilla"
    ],
    "baseNotes": [
      "Castoreum",
      "Birch",
      "Guaiac Wood",
      "Ambrarome"
    ],
    "seasons": [
      "Monsoon",
      "Winter"
    ],
    "time": "Evening",
    "sprays": "2-3",
    "occasions": [
      "Date Night",
      "Formal"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Leather",
      "Woody"
    ],
    "accords": [
      "Earthy",
      "Leather",
      "Sweet",
      "Warm"
    ]
  },
  {
    "id": "46",
    "slug": "amouage-opus-xiv-royal-tobacco",
    "brand": "Amouage",
    "name": "Opus XIV Royal Tobacco",
    "gender": "for women and men",
    "topNotes": [
      "Olibanum",
      "Anise",
      "Elemi resin",
      "Cardamom",
      "Basil",
      "Bergamot"
    ],
    "heartNotes": [
      "Tobacco",
      "Licorice",
      "Fenugreek",
      "Prunol",
      "Lavender",
      "Osmanthus",
      "Orange Blossom",
      "Rose"
    ],
    "baseNotes": [
      "Olibanum",
      "Bourbon Vanilla",
      "Myrrh",
      "Birch Tar",
      "Benzoin",
      "Agarwood (Oud)",
      "Labdanum"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer",
      "Winter"
    ],
    "time": "Day / Evening",
    "sprays": "4-6",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal",
      "Office"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Aromatic",
      "Citrus"
    ],
    "accords": [
      "Balsamic",
      "Floral",
      "Fresh",
      "Herbal"
    ]
  },
  {
    "id": "47",
    "slug": "amouage-opus-xv-king-blue",
    "brand": "Amouage",
    "name": "Opus XV King Blue",
    "gender": "for women and men",
    "topNotes": [
      "Black Currant",
      "Mandarin Orange",
      "Pink Pepper"
    ],
    "heartNotes": [
      "Frankincense",
      "Amber"
    ],
    "baseNotes": [
      "Agarwood (Oud)",
      "Leather",
      "Oak",
      "Patchouli",
      "Sandalwood"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer",
      "Winter"
    ],
    "time": "Day / Evening",
    "sprays": "4-6",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal",
      "Office"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Citrus",
      "Fruity"
    ],
    "accords": [
      "Balsamic",
      "Earthy",
      "Fresh",
      "Fruity"
    ]
  },
  {
    "id": "48",
    "slug": "amouage-portrayal-man",
    "brand": "Amouage",
    "name": "Portrayal Man",
    "gender": "for men",
    "topNotes": [
      "Violet Leaves"
    ],
    "heartNotes": [
      "Vetiver"
    ],
    "baseNotes": [
      "Cade oil"
    ],
    "seasons": [
      "Ac Venues",
      "Cool Nights",
      "Winter"
    ],
    "time": "Evening",
    "sprays": "3-4",
    "occasions": [
      "Festive Evenings",
      "Formal Dinners",
      "Receptions",
      "Winter Weddings"
    ],
    "featured": false,
    "families": [
      "Floral",
      "Woody"
    ],
    "accords": [
      "Earthy",
      "Floral",
      "Powdery",
      "Woody"
    ]
  },
  {
    "id": "49",
    "slug": "amouage-reflection-45-man",
    "brand": "Amouage",
    "name": "Reflection 45 Man",
    "gender": "for men",
    "topNotes": [
      "Lavender",
      "Benzoin",
      "Juniper Berries",
      "Pink Pepper",
      "Clary Sage",
      "Cardamom"
    ],
    "heartNotes": [
      "Iris",
      "Jasmine",
      "Neroli",
      "Tonka Bean",
      "Vanilla",
      "Angelica"
    ],
    "baseNotes": [
      "Olibanum",
      "Sandalwood",
      "Myrrh",
      "Opoponax",
      "Cedar",
      "Vetiver",
      "Patchouli"
    ],
    "seasons": [
      "Spring",
      "Ac Venues",
      "Mild Winter",
      "Monsoon Evenings"
    ],
    "time": "Day / Evening",
    "sprays": "2-3 sprays",
    "occasions": [
      "Lunches",
      "Smart Casuals",
      "Dates",
      "Office",
      "Pujas"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Aromatic",
      "Citrus"
    ],
    "accords": [
      "Balsamic",
      "Earthy",
      "Floral",
      "Fresh"
    ]
  },
  {
    "id": "50",
    "slug": "amouage-reflection-man",
    "brand": "Amouage",
    "name": "Reflection Man",
    "gender": "for men",
    "topNotes": [
      "Rosemary",
      "Pink Pepper",
      "Petitgrain"
    ],
    "heartNotes": [
      "Jasmine",
      "Neroli",
      "Orris Root",
      "Ylang-Ylang"
    ],
    "baseNotes": [
      "Sandalwood",
      "Vetiver",
      "Cedar",
      "Patchouli"
    ],
    "seasons": [
      "Spring",
      "Summer",
      "Monsoon"
    ],
    "time": "Day",
    "sprays": "3-4 sprays; 2-3 indoors VIDEH / MASTER PERFUME CATALOG",
    "occasions": [
      "Travel",
      "Casual Daytime Events",
      "College",
      "Office",
      "Brunch"
    ],
    "featured": false,
    "families": [
      "Aromatic",
      "Citrus",
      "Floral"
    ],
    "accords": [
      "Earthy",
      "Floral",
      "Fresh",
      "Herbal"
    ]
  },
  {
    "id": "51",
    "slug": "amouage-reflection-woman",
    "brand": "Amouage",
    "name": "Reflection Woman",
    "gender": "for women",
    "topNotes": [
      "Green Leaves",
      "Freesia",
      "Water Violet"
    ],
    "heartNotes": [
      "Magnolia",
      "Jasmine"
    ],
    "baseNotes": [
      "Cedar",
      "Sandalwood",
      "Amber"
    ],
    "seasons": [
      "Spring",
      "Summer",
      "Winter"
    ],
    "time": "Day / Evening",
    "sprays": "4-6",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal",
      "Office"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Aquatic",
      "Floral"
    ],
    "accords": [
      "Floral",
      "Green",
      "Marine",
      "Powdery"
    ]
  },
  {
    "id": "52",
    "slug": "amouage-saffron-hamra",
    "brand": "Amouage",
    "name": "Saffron Hamra",
    "gender": "for women and men",
    "topNotes": [
      "Not separately listed"
    ],
    "heartNotes": [
      "Not separately listed"
    ],
    "baseNotes": [
      "Saffron",
      "Cade oil",
      "Rose"
    ],
    "seasons": [
      "Spring",
      "Winter"
    ],
    "time": "Evening",
    "sprays": "3-4",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal"
    ],
    "featured": false,
    "families": [
      "Floral",
      "Spicy"
    ],
    "accords": [
      "Floral",
      "Spicy"
    ]
  },
  {
    "id": "53",
    "slug": "amouage-search",
    "brand": "Amouage",
    "name": "Search",
    "gender": "for women and men",
    "topNotes": [
      "Lime",
      "Lemon",
      "Mandarin Orange"
    ],
    "heartNotes": [
      "Olibanum",
      "elemi",
      "Black Pepper"
    ],
    "baseNotes": [
      "Cade oil",
      "Vetiver",
      "Guaiac Wood"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer"
    ],
    "time": "Day",
    "sprays": "4-6",
    "occasions": [
      "Brunch",
      "Casual Daytime Events",
      "College",
      "Office",
      "Travel"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Citrus",
      "Spicy"
    ],
    "accords": [
      "Earthy",
      "Fresh",
      "Spicy",
      "Warm"
    ]
  },
  {
    "id": "54",
    "slug": "amouage-sunshine-woman",
    "brand": "Amouage",
    "name": "Sunshine Woman",
    "gender": "for women",
    "topNotes": [
      "Almond",
      "Black Currant",
      "Artemisia"
    ],
    "heartNotes": [
      "Osmanthus",
      "Vanilla",
      "Magnolia",
      "Jasmine"
    ],
    "baseNotes": [
      "White Tobacco",
      "Papyrus",
      "Juniper",
      "Patchouli"
    ],
    "seasons": [
      "Ac Venues",
      "Winter",
      "Monsoon Evenings"
    ],
    "time": "Evening",
    "sprays": "3-4 sprays; 2-3 indoors Sprays: 2-3 sprays",
    "occasions": [
      "Celebrations",
      "Receptions",
      "Dinner Dates",
      "Formal Events"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Aromatic",
      "Floral"
    ],
    "accords": [
      "Earthy",
      "Floral",
      "Fruity",
      "Herbal"
    ]
  },
  {
    "id": "55",
    "slug": "anfas-ishq",
    "brand": "Anfas",
    "name": "Ishq",
    "gender": "for women and men",
    "topNotes": [
      "Saffron",
      "Jasmine"
    ],
    "heartNotes": [
      "Raspberry",
      "Amber"
    ],
    "baseNotes": [
      "Talc",
      "Oakmoss"
    ],
    "seasons": [
      "Spring",
      "Winter"
    ],
    "time": "Evening",
    "sprays": "2-3",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Floral",
      "Fruity"
    ],
    "accords": [
      "Floral",
      "Fruity",
      "Spicy",
      "Warm"
    ]
  },
  {
    "id": "56",
    "slug": "anfas-rahaba",
    "brand": "Anfas",
    "name": "Rahaba",
    "gender": "for women and men",
    "topNotes": [
      "Pineapple",
      "Gin",
      "Orange"
    ],
    "heartNotes": [
      "Damask Rose",
      "Grasse Rose",
      "Orris"
    ],
    "baseNotes": [
      "Vanilla",
      "Tonka Bean",
      "Sandalwood",
      "Almond",
      "Amber",
      "Tolu Balsam"
    ],
    "seasons": [
      "Spring",
      "Summer",
      "Winter"
    ],
    "time": "Day / Evening",
    "sprays": "4-6",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal",
      "Office"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Citrus",
      "Floral"
    ],
    "accords": [
      "Floral",
      "Fresh",
      "Fruity",
      "Green"
    ]
  },
  {
    "id": "57",
    "slug": "anfas-salam-2014",
    "brand": "Anfas",
    "name": "Salam 2014",
    "gender": "for women and men",
    "topNotes": [
      "Mandarin Orange",
      "Bergamot"
    ],
    "heartNotes": [
      "Amber",
      "Jasmine",
      "Magnolia"
    ],
    "baseNotes": [
      "Sandalwood",
      "Musk"
    ],
    "seasons": [
      "Spring",
      "Summer",
      "Winter"
    ],
    "time": "Day / Evening",
    "sprays": "4-6",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal",
      "Office"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Citrus",
      "Floral"
    ],
    "accords": [
      "Floral",
      "Fresh",
      "Musky",
      "Warm"
    ]
  },
  {
    "id": "58",
    "slug": "antonio-banderas-the-golden-secret",
    "brand": "Antonio Banderas",
    "name": "The Golden Secret",
    "gender": "for men",
    "topNotes": [
      "Apple",
      "Mint",
      "Green Notes"
    ],
    "heartNotes": [
      "Nutmeg",
      "Pepper",
      "Cumin"
    ],
    "baseNotes": [
      "Leather",
      "Cedar",
      "Musk"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer"
    ],
    "time": "Day",
    "sprays": "2-3",
    "occasions": [
      "Brunch",
      "Casual Daytime Events",
      "College",
      "Office",
      "Travel"
    ],
    "featured": false,
    "families": [
      "Aromatic",
      "Fruity",
      "Leather"
    ],
    "accords": [
      "Fruity",
      "Green",
      "Herbal",
      "Leather"
    ]
  },
  {
    "id": "59",
    "slug": "antonio-banderas-the-icon",
    "brand": "Antonio Banderas",
    "name": "The Icon",
    "gender": "for men",
    "topNotes": [
      "Grapefruit",
      "Black Pepper"
    ],
    "heartNotes": [
      "Lavender",
      "Sage"
    ],
    "baseNotes": [
      "Sandalwood",
      "Oakmoss"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer",
      "Winter"
    ],
    "time": "Day / Evening",
    "sprays": "4-6",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal",
      "Office"
    ],
    "featured": true,
    "families": [
      "Aromatic",
      "Citrus",
      "Spicy"
    ],
    "accords": [
      "Fresh",
      "Herbal",
      "Spicy",
      "Woody"
    ]
  },
  {
    "id": "60",
    "slug": "archive-the-secret",
    "brand": "Archive",
    "name": "The Secret",
    "gender": "for men",
    "topNotes": [
      "Not separately listed"
    ],
    "heartNotes": [
      "Not separately listed"
    ],
    "baseNotes": [
      "Not separately listed"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer"
    ],
    "time": "Day",
    "sprays": "3-4",
    "occasions": [
      "Brunch",
      "Casual Daytime Events",
      "College",
      "Office",
      "Travel"
    ],
    "featured": false,
    "families": [
      "Aromatic"
    ],
    "accords": [
      "Fresh"
    ]
  },
  {
    "id": "61",
    "slug": "shakira-women",
    "brand": "Shakira",
    "name": "Women",
    "gender": "Unisex",
    "topNotes": [
      "Tangerine; pear; grapefruit; bergamot"
    ],
    "heartNotes": [
      "Peony; orange blossom; lily; neroli"
    ],
    "baseNotes": [
      "Caramel; vanilla; musk; woods"
    ],
    "seasons": [
      "Spring",
      "Summer",
      "Winter"
    ],
    "time": "Day / Evening",
    "sprays": "4-6",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal",
      "Office"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Citrus",
      "Floral"
    ],
    "accords": [
      "Floral",
      "Fresh",
      "Fruity",
      "Musky"
    ]
  },
  {
    "id": "62",
    "slug": "aramis-aramis",
    "brand": "Aramis",
    "name": "Aramis",
    "gender": "for men",
    "topNotes": [
      "Aldehydes",
      "Myrrh",
      "Artemisia",
      "Thyme",
      "Clover",
      "Bergamot",
      "Gardenia"
    ],
    "heartNotes": [
      "Patchouli",
      "Sage",
      "Jasmine",
      "Cardamom",
      "Orris Root"
    ],
    "baseNotes": [
      "Leather",
      "Oakmoss",
      "Musk",
      "Vetiver",
      "Sandalwood",
      "Amber",
      "Coconut"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer",
      "Winter"
    ],
    "time": "Day / Evening",
    "sprays": "4-6",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal",
      "Office"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Aromatic",
      "Citrus"
    ],
    "accords": [
      "Balsamic",
      "Earthy",
      "Floral",
      "Fresh"
    ]
  },
  {
    "id": "63",
    "slug": "ariana-grande-cloud",
    "brand": "Ariana Grande",
    "name": "Cloud",
    "gender": "for women",
    "topNotes": [
      "Lavender",
      "Pear",
      "Bergamot"
    ],
    "heartNotes": [
      "Whipped Cream",
      "Coconut",
      "Praline",
      "Vanilla Orchid"
    ],
    "baseNotes": [
      "Musk",
      "Woody Notes"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer",
      "Winter"
    ],
    "time": "Day / Evening",
    "sprays": "4-6",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal",
      "Office"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Aromatic",
      "Citrus"
    ],
    "accords": [
      "Floral",
      "Fresh",
      "Fruity",
      "Herbal"
    ]
  },
  {
    "id": "64",
    "slug": "archive-thank-u-next",
    "brand": "Archive",
    "name": "Thank U Next",
    "gender": "for women",
    "topNotes": [
      "Raspberry",
      "Pear"
    ],
    "heartNotes": [
      "Coconut",
      "Pink Rose"
    ],
    "baseNotes": [
      "Macarons",
      "Musk"
    ],
    "seasons": [
      "Spring"
    ],
    "time": "Day / Evening",
    "sprays": "3-4",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal",
      "Office"
    ],
    "featured": false,
    "families": [
      "Floral",
      "Fruity"
    ],
    "accords": [
      "Floral",
      "Fruity",
      "Musky"
    ]
  },
  {
    "id": "65",
    "slug": "atkinsons-club-de-nuit-intense-man",
    "brand": "Atkinsons",
    "name": "Club de Nuit Intense Man",
    "gender": "for men",
    "topNotes": [
      "Lemon",
      "Pineapple",
      "Bergamot",
      "Black Currant",
      "Apple"
    ],
    "heartNotes": [
      "Birch",
      "Jasmine",
      "Rose"
    ],
    "baseNotes": [
      "Musk",
      "Ambergris",
      "Patchouli",
      "Vanilla"
    ],
    "seasons": [
      "Ac Venues",
      "Winter",
      "Cool Nights"
    ],
    "time": "Evening",
    "sprays": "1-2 sprays",
    "occasions": [
      "Receptions",
      "Winter Weddings",
      "Festive Evenings",
      "Formal Dinners"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Citrus",
      "Floral"
    ],
    "accords": [
      "Earthy",
      "Floral",
      "Fresh",
      "Fruity"
    ]
  },
  {
    "id": "66",
    "slug": "avon-far-away",
    "brand": "Avon",
    "name": "Far Away",
    "gender": "for women",
    "topNotes": [
      "Earl Grey Tea",
      "Bergamot"
    ],
    "heartNotes": [
      "Suede",
      "Orris"
    ],
    "baseNotes": [
      "Agarwood (Oud)",
      "Sandalwood"
    ],
    "seasons": [
      "Spring",
      "Summer",
      "Winter"
    ],
    "time": "Day / Evening",
    "sprays": "4-6",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal",
      "Office"
    ],
    "featured": false,
    "families": [
      "Citrus",
      "Leather",
      "Woody"
    ],
    "accords": [
      "Fresh",
      "Leather",
      "Woody"
    ]
  },
  {
    "id": "67",
    "slug": "archive-oud-save-the-king",
    "brand": "Archive",
    "name": "Oud Save The King",
    "gender": "for women and men",
    "topNotes": [
      "Coconut",
      "Ylang-Ylang",
      "Peach",
      "Karo Karounde",
      "Orange"
    ],
    "heartNotes": [
      "Jasmine",
      "Gardenia",
      "Violet",
      "Freesia",
      "Osmanthus",
      "Rose"
    ],
    "baseNotes": [
      "Vanilla",
      "Sandalwood",
      "Amber",
      "Musk"
    ],
    "seasons": [
      "Spring",
      "Ac Venues",
      "Mild Winter",
      "Monsoon Evenings"
    ],
    "time": "Day / Evening",
    "sprays": "2-3 sprays",
    "occasions": [
      "Lunches",
      "Smart Casuals",
      "Dates",
      "Office",
      "Pujas"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Citrus",
      "Floral"
    ],
    "accords": [
      "Floral",
      "Fresh",
      "Fruity",
      "Musky"
    ]
  },
  {
    "id": "68",
    "slug": "avon-sweet-honesty",
    "brand": "Avon",
    "name": "Sweet Honesty",
    "gender": "for women",
    "topNotes": [
      "Lily-of-the-Valley",
      "Sicilian Lemon",
      "Aldehydes"
    ],
    "heartNotes": [
      "Hyacinth",
      "Rose"
    ],
    "baseNotes": [
      "Musk",
      "Honey",
      "Vanilla",
      "Cedar"
    ],
    "seasons": [
      "Ac Venues",
      "Monsoon Evenings",
      "Winter"
    ],
    "time": "Evening",
    "sprays": "4-6",
    "occasions": [
      "Celebrations",
      "Dinner Dates",
      "Formal Events",
      "Receptions"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Citrus",
      "Floral"
    ],
    "accords": [
      "Floral",
      "Fresh",
      "Musky",
      "Sweet"
    ]
  },
  {
    "id": "69",
    "slug": "azzaro-acteur",
    "brand": "Azzaro",
    "name": "Acteur",
    "gender": "for men",
    "topNotes": [
      "Fruity Notes",
      "Cardamom",
      "Bergamot",
      "Mace",
      "Calamus"
    ],
    "heartNotes": [
      "Rose",
      "Carnation",
      "Patchouli",
      "Vetiver",
      "Cedar",
      "Jasmine"
    ],
    "baseNotes": [
      "Leather",
      "Oakmoss",
      "Musk",
      "Amber"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer",
      "Winter"
    ],
    "time": "Day / Evening",
    "sprays": "4-6",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal",
      "Office"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Citrus",
      "Floral"
    ],
    "accords": [
      "Earthy",
      "Floral",
      "Fresh",
      "Leather"
    ]
  },
  {
    "id": "70",
    "slug": "azzaro-chrome",
    "brand": "Azzaro",
    "name": "Chrome",
    "gender": "for men",
    "topNotes": [
      "Lemon",
      "Rosemary",
      "Bergamot",
      "Neroli",
      "Pineapple"
    ],
    "heartNotes": [
      "Jasmine",
      "Oakmoss",
      "Cyclamen",
      "Coriander"
    ],
    "baseNotes": [
      "Musk",
      "Oakmoss",
      "Cedar",
      "Sandalwood",
      "Cardamom",
      "Brazilian Rosewood",
      "Tonka Bean"
    ],
    "seasons": [
      "Spring",
      "Ac Venues",
      "Mild Winter",
      "Monsoon Evenings"
    ],
    "time": "Day / Evening",
    "sprays": "2-3 sprays Top: Lemon, Rosemary, Bergamot, Neroli and Pineapple \u00e2\u20ac\u00a2 Heart: Jasmine, Oakmoss, Cyclamen and Coriander \u00e2\u20ac\u00a2 Base: Musk, Oakmoss, Cedar, Sandalwood, Cardamom, Brazilian Rosewood and Tonka Bean",
    "occasions": [
      "Lunches",
      "Smart Casuals",
      "Dates",
      "Office",
      "Pujas"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Aromatic",
      "Citrus"
    ],
    "accords": [
      "Floral",
      "Fresh",
      "Fruity",
      "Herbal"
    ]
  },
  {
    "id": "71",
    "slug": "azzaro-the-most-wanted",
    "brand": "Azzaro",
    "name": "The Most Wanted",
    "gender": "for men",
    "topNotes": [
      "Cardamom"
    ],
    "heartNotes": [
      "Toffee"
    ],
    "baseNotes": [
      "Amberwood"
    ],
    "seasons": [
      "Ac Venues",
      "Winter",
      "Monsoon Evenings"
    ],
    "time": "Evening",
    "sprays": "2-3 sprays",
    "occasions": [
      "Celebrations",
      "Receptions",
      "Dinner Dates",
      "Formal Events"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Spicy",
      "Woody"
    ],
    "accords": [
      "Spicy",
      "Warm",
      "Woody"
    ]
  },
  {
    "id": "72",
    "slug": "pierre-balmain-vent-vert",
    "brand": "Pierre Balmain",
    "name": "Vent Vert",
    "gender": "for women",
    "topNotes": [
      "Green Notes",
      "Lime",
      "Basil",
      "Asafoetida",
      "Lemon",
      "Neroli",
      "Orange Blossom",
      "Bergamot",
      "Peach"
    ],
    "heartNotes": [
      "Galbanum",
      "Hiacynth",
      "Lily- of-the-Valley",
      "Jasmine",
      "Marigold",
      "Rose",
      "Freesia",
      "Violet",
      "Ylang- Ylang",
      "Spicy Notes"
    ],
    "baseNotes": [
      "Oakmoss",
      "Vetiver",
      "Iris",
      "Sage"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer"
    ],
    "time": "Day",
    "sprays": "4-6",
    "occasions": [
      "Brunch",
      "Casual Daytime Events",
      "College",
      "Office",
      "Travel"
    ],
    "featured": false,
    "families": [
      "Aromatic",
      "Citrus",
      "Floral"
    ],
    "accords": [
      "Earthy",
      "Floral",
      "Fresh",
      "Fruity"
    ]
  },
  {
    "id": "73",
    "slug": "azzaro-azzaro-pour-homme",
    "brand": "Azzaro",
    "name": "Azzaro pour Homme",
    "gender": "for men",
    "topNotes": [
      "Lavender",
      "Lemon",
      "Caraway",
      "Basil",
      "Bergamot",
      "Clary Sage",
      "Iris",
      "Star Anise"
    ],
    "heartNotes": [
      "Vetiver",
      "Sandalwood",
      "Patchouli",
      "Cedar",
      "Juniper Berries",
      "Cardamom"
    ],
    "baseNotes": [
      "Oakmoss",
      "Leather",
      "Amber",
      "Musk",
      "Tonka Bean"
    ],
    "seasons": [
      "Spring",
      "Ac Venues",
      "Mild Winter",
      "Monsoon Evenings"
    ],
    "time": "Day / Evening",
    "sprays": "2-3 sprays",
    "occasions": [
      "Lunches",
      "Smart Casuals",
      "Dates",
      "Office",
      "Pujas"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Aromatic",
      "Citrus"
    ],
    "accords": [
      "Earthy",
      "Floral",
      "Fresh",
      "Herbal"
    ]
  },
  {
    "id": "74",
    "slug": "bath-body-works-beautiful-day",
    "brand": "Bath Body Works",
    "name": "Beautiful Day",
    "gender": "for women",
    "topNotes": [
      "Not separately listed"
    ],
    "heartNotes": [
      "Not separately listed"
    ],
    "baseNotes": [
      "Not separately listed"
    ],
    "seasons": [
      "Spring",
      "Summer",
      "Monsoon"
    ],
    "time": "Day",
    "sprays": "3-4 sprays; 2-3 indoors Sprays: 3-4 sprays; 2-3 indoors",
    "occasions": [
      "Travel",
      "Casual Daytime Events",
      "College",
      "Office",
      "Brunch"
    ],
    "featured": false,
    "families": [
      "Aromatic"
    ],
    "accords": [
      "Fresh"
    ]
  },
  {
    "id": "75",
    "slug": "bath-body-works-dark-kiss",
    "brand": "Bath Body Works",
    "name": "Dark Kiss",
    "gender": "for women",
    "topNotes": [
      "Blackberry",
      "Incense",
      "Mirabelle",
      "Bergamot"
    ],
    "heartNotes": [
      "Amber",
      "Rose",
      "Peony",
      "Geranium"
    ],
    "baseNotes": [
      "Vanille",
      "Musk",
      "Resin",
      "Vetyver",
      "French labdanum"
    ],
    "seasons": [
      "Spring",
      "Summer",
      "Winter"
    ],
    "time": "Day / Evening",
    "sprays": "4-6",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal",
      "Office"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Citrus",
      "Floral"
    ],
    "accords": [
      "Balsamic",
      "Floral",
      "Fresh",
      "Fruity"
    ]
  },
  {
    "id": "76",
    "slug": "bath-body-works-forever-red",
    "brand": "Bath Body Works",
    "name": "Forever Red",
    "gender": "for women",
    "topNotes": [
      "Pomegranate",
      "Peach",
      "Apple"
    ],
    "heartNotes": [
      "Red Peony",
      "Osmanthus",
      "Marigold"
    ],
    "baseNotes": [
      "Vanilla",
      "Rum",
      "Marshamallow",
      "Oak"
    ],
    "seasons": [
      "Ac Venues",
      "Winter",
      "Cool Nights"
    ],
    "time": "Evening",
    "sprays": "1-2 sprays",
    "occasions": [
      "Receptions",
      "Winter Weddings",
      "Festive Evenings",
      "Formal Dinners"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Floral",
      "Fruity"
    ],
    "accords": [
      "Floral",
      "Fruity",
      "Sweet",
      "Warm"
    ]
  },
  {
    "id": "77",
    "slug": "bath-body-works-ginger-cardamom",
    "brand": "Bath & Body Works",
    "name": "Ginger & Cardamom",
    "gender": "Unisex",
    "topNotes": [
      "Ginger; cardamom"
    ],
    "heartNotes": [
      "No separate heart notes listed"
    ],
    "baseNotes": [
      "No separate base notes listed"
    ],
    "seasons": [
      "Winter"
    ],
    "time": "Evening",
    "sprays": "3-4",
    "occasions": [
      "Date Night",
      "Formal"
    ],
    "featured": false,
    "families": [
      "Spicy"
    ],
    "accords": [
      "Spicy"
    ]
  },
  {
    "id": "78",
    "slug": "bath-body-works-japanese-cherry-blossom",
    "brand": "Bath Body Works",
    "name": "Japanese Cherry Blossom",
    "gender": "for women",
    "topNotes": [
      "Not separately listed"
    ],
    "heartNotes": [
      "Not separately listed"
    ],
    "baseNotes": [
      "Not separately listed"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer"
    ],
    "time": "Day",
    "sprays": "3-4",
    "occasions": [
      "Casual",
      "Office"
    ],
    "featured": false,
    "families": [
      "Aromatic"
    ],
    "accords": [
      "Fresh"
    ]
  },
  {
    "id": "79",
    "slug": "bath-body-works-lavender-sandalwood",
    "brand": "Bath Body Works",
    "name": "Lavender Sandalwood",
    "gender": "for women",
    "topNotes": [
      "Lavender",
      "Lemon",
      "Acai Berry"
    ],
    "heartNotes": [
      "Pink Peony",
      "White Magnolia",
      "Iris Petals"
    ],
    "baseNotes": [
      "Sandalwood",
      "Musk",
      "Vanilla",
      "Amber"
    ],
    "seasons": [
      "Spring",
      "Ac Venues",
      "Mild Winter",
      "Monsoon Evenings"
    ],
    "time": "Day / Evening",
    "sprays": "2-3 sprays",
    "occasions": [
      "Lunches",
      "Smart Casuals",
      "Dates",
      "Office",
      "Pujas"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Aromatic",
      "Citrus"
    ],
    "accords": [
      "Floral",
      "Fresh",
      "Fruity",
      "Herbal"
    ]
  },
  {
    "id": "80",
    "slug": "bath-body-works-love-sunshine",
    "brand": "Bath Body Works",
    "name": "Love Sunshine",
    "gender": "for women",
    "topNotes": [
      "Not separately listed"
    ],
    "heartNotes": [
      "Not separately listed"
    ],
    "baseNotes": [
      "Not separately listed"
    ],
    "seasons": [
      "Spring",
      "Summer",
      "Monsoon"
    ],
    "time": "Day",
    "sprays": "3-4 sprays; 2-3 indoors VIDEH / MASTER PERFUME CATALOG",
    "occasions": [
      "Travel",
      "Casual Daytime Events",
      "College",
      "Office",
      "Brunch"
    ],
    "featured": true,
    "families": [
      "Aromatic"
    ],
    "accords": [
      "Fresh"
    ]
  },
  {
    "id": "81",
    "slug": "page-9-118-tutti-dolci-white-mocha-kiss",
    "brand": "Page 9 / 118",
    "name": "Tutti Dolci White Mocha Kiss",
    "gender": "for women",
    "topNotes": [
      "Water Lily",
      "Apple"
    ],
    "heartNotes": [
      "Marshmallow",
      "Dark Chocolate",
      "Orchid",
      "Ginger flower"
    ],
    "baseNotes": [
      "Marshmallow",
      "Vanilla",
      "Driftwood"
    ],
    "seasons": [
      "Spring",
      "Ac Venues",
      "Mild Winter",
      "Monsoon Evenings"
    ],
    "time": "Day / Evening",
    "sprays": "2-3 sprays",
    "occasions": [
      "Lunches",
      "Smart Casuals",
      "Dates",
      "Office",
      "Pujas"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Aquatic",
      "Floral"
    ],
    "accords": [
      "Floral",
      "Fruity",
      "Marine",
      "Spicy"
    ]
  },
  {
    "id": "82",
    "slug": "bdk-parfums-gris-charnel",
    "brand": "Bdk Parfums",
    "name": "Gris Charnel",
    "gender": "for women and men",
    "topNotes": [
      "Cardamom",
      "Fig",
      "Black Tea"
    ],
    "heartNotes": [
      "Iris",
      "Bourbon Vetiver"
    ],
    "baseNotes": [
      "Sandalwood",
      "Tonka Bean"
    ],
    "seasons": [
      "Spring",
      "Ac Venues",
      "Mild Winter",
      "Monsoon Evenings"
    ],
    "time": "Day / Evening",
    "sprays": "2-3 sprays",
    "occasions": [
      "Lunches",
      "Smart Casuals",
      "Dates",
      "Office",
      "Pujas"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Floral",
      "Fruity"
    ],
    "accords": [
      "Earthy",
      "Floral",
      "Fruity",
      "Powdery"
    ]
  },
  {
    "id": "83",
    "slug": "bdk-parfums-velvet-tonka",
    "brand": "Bdk Parfums",
    "name": "Velvet Tonka",
    "gender": "for women and men",
    "topNotes": [
      "Almond",
      "Orange Blossom"
    ],
    "heartNotes": [
      "Tobacco",
      "Rose Oil"
    ],
    "baseNotes": [
      "Tonka Bean",
      "Bourbon Vanilla",
      "Amberwood",
      "Amyris"
    ],
    "seasons": [
      "Ac Venues",
      "Winter",
      "Cool Nights"
    ],
    "time": "Evening",
    "sprays": "1-2 sprays",
    "occasions": [
      "Receptions",
      "Winter Weddings",
      "Festive Evenings",
      "Formal Dinners"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Citrus",
      "Floral"
    ],
    "accords": [
      "Floral",
      "Fresh",
      "Sweet",
      "Warm"
    ]
  },
  {
    "id": "84",
    "slug": "bentley-bentley-for-men-intense",
    "brand": "Bentley",
    "name": "Bentley for Men Intense",
    "gender": "for men",
    "topNotes": [
      "Cardamom",
      "Fig",
      "Black Tea"
    ],
    "heartNotes": [
      "Iris",
      "Bourbon Vetiver",
      "Cistus Incanus"
    ],
    "baseNotes": [
      "Sandalwood",
      "Madagascar Vanilla",
      "Tonka Bean",
      "Cedar",
      "Indonesian Patchouli Leaf"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Winter"
    ],
    "time": "Evening",
    "sprays": "2-3",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Floral",
      "Fruity"
    ],
    "accords": [
      "Earthy",
      "Floral",
      "Fruity",
      "Powdery"
    ]
  },
  {
    "id": "85",
    "slug": "archive-gris-charnel-extrait",
    "brand": "Archive",
    "name": "Gris Charnel Extrait",
    "gender": "for women and men",
    "topNotes": [
      "Cherry",
      "Pink Pepper",
      "Bergamot"
    ],
    "heartNotes": [
      "Black Vanilla Husk",
      "Heliotrope",
      "Orange Blossom"
    ],
    "baseNotes": [
      "Tonka Bean",
      "Cashmere Wood",
      "White Musk",
      "Ambroxan",
      "Labdanum",
      "Violet"
    ],
    "seasons": [
      "Ac Venues",
      "Winter",
      "Cool Nights"
    ],
    "time": "Evening",
    "sprays": "1-2 sprays",
    "occasions": [
      "Receptions",
      "Winter Weddings",
      "Festive Evenings",
      "Formal Dinners"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Citrus",
      "Floral"
    ],
    "accords": [
      "Floral",
      "Fresh",
      "Fruity",
      "Musky"
    ]
  },
  {
    "id": "86",
    "slug": "bdk-parfums-rouge-smoking",
    "brand": "Bdk Parfums",
    "name": "Rouge Smoking",
    "gender": "for women and men",
    "topNotes": [
      "Blood Orange",
      "Mandarin Orange",
      "Bergamot",
      "Pear"
    ],
    "heartNotes": [
      "Neroli",
      "Orange Blossom",
      "Jasmine",
      "Lily-of-the-Valley"
    ],
    "baseNotes": [
      "Musk",
      "Cedar",
      "Vanilla",
      "Amber"
    ],
    "seasons": [
      "Ac Venues",
      "Winter",
      "Cool Nights"
    ],
    "time": "Evening",
    "sprays": "1-2 sprays",
    "occasions": [
      "Receptions",
      "Winter Weddings",
      "Festive Evenings",
      "Formal Dinners"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Citrus",
      "Floral"
    ],
    "accords": [
      "Floral",
      "Fresh",
      "Fruity",
      "Musky"
    ]
  },
  {
    "id": "87",
    "slug": "benetton-sisterland-blue-neroli",
    "brand": "Benetton",
    "name": "Sisterland Blue Neroli",
    "gender": "for women",
    "topNotes": [
      "Black Pepper",
      "Bay Leaf",
      "Bergamot"
    ],
    "heartNotes": [
      "Rum",
      "Woody Notes",
      "Cinnamon",
      "Clary Sage",
      "African Geranium"
    ],
    "baseNotes": [
      "Incense",
      "Leather",
      "Benzoin",
      "Cedar",
      "Patchouli"
    ],
    "seasons": [
      "Spring",
      "Ac Venues",
      "Mild Winter",
      "Monsoon Evenings"
    ],
    "time": "Day / Evening",
    "sprays": "2-3 sprays",
    "occasions": [
      "Lunches",
      "Smart Casuals",
      "Dates",
      "Office",
      "Pujas"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Aromatic",
      "Citrus"
    ],
    "accords": [
      "Balsamic",
      "Earthy",
      "Floral",
      "Fresh"
    ]
  },
  {
    "id": "88",
    "slug": "billie-eilish-women",
    "brand": "Billie Eilish",
    "name": "Women",
    "gender": "Unisex",
    "topNotes": [
      "Sugar; red berries; mandarin orange"
    ],
    "heartNotes": [
      "Vanilla; cacao; spicy notes; rose"
    ],
    "baseNotes": [
      "Tonka bean; amber; musk; woods"
    ],
    "seasons": [
      "Spring",
      "Summer",
      "Winter"
    ],
    "time": "Day / Evening",
    "sprays": "4-6",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal",
      "Office"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Citrus",
      "Floral"
    ],
    "accords": [
      "Floral",
      "Fresh",
      "Musky",
      "Sweet"
    ]
  },
  {
    "id": "89",
    "slug": "boadicea-the-victorious-boadicea-nemer",
    "brand": "Boadicea The Victorious",
    "name": "Boadicea Nemer",
    "gender": "for women and men",
    "topNotes": [
      "Saffron",
      "Lemongrass",
      "Black Pepper",
      "Ylang-Ylang"
    ],
    "heartNotes": [
      "Moroccan Rose",
      "Turkish Rose",
      "Rose"
    ],
    "baseNotes": [
      "Patchouli",
      "Sandalwood",
      "Cypriol Oil or Nagarmotha",
      "Cedar",
      "Moss",
      "Cashmere Wood",
      "Musk",
      "Amber",
      "Vanilla"
    ],
    "seasons": [
      "Spring",
      "Ac Venues",
      "Mild Winter",
      "Monsoon Evenings"
    ],
    "time": "Day / Evening",
    "sprays": "2-3 sprays",
    "occasions": [
      "Lunches",
      "Smart Casuals",
      "Dates",
      "Office",
      "Pujas"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Citrus",
      "Floral"
    ],
    "accords": [
      "Earthy",
      "Floral",
      "Fresh",
      "Green"
    ]
  },
  {
    "id": "90",
    "slug": "boadicea-the-victorious-hanuman",
    "brand": "Boadicea The Victorious",
    "name": "Hanuman",
    "gender": "for women and men",
    "topNotes": [
      "Orange Blossom",
      "Bergamot",
      "Lemon",
      "Black Currant"
    ],
    "heartNotes": [
      "Osmanthus",
      "Neroli",
      "Magnolia",
      "Cyclamen"
    ],
    "baseNotes": [
      "Vetiver",
      "Cedar",
      "Musk",
      "Amber",
      "Sandalwood"
    ],
    "seasons": [
      "Spring",
      "Summer",
      "Monsoon"
    ],
    "time": "Day",
    "sprays": "3-4 sprays; 2-3 indoors",
    "occasions": [
      "Travel",
      "Casual Daytime Events",
      "College",
      "Office",
      "Brunch"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Citrus",
      "Floral"
    ],
    "accords": [
      "Earthy",
      "Floral",
      "Fresh",
      "Fruity"
    ]
  },
  {
    "id": "91",
    "slug": "boadicea-the-victorious-knight-of-love",
    "brand": "Boadicea The Victorious",
    "name": "Knight of Love",
    "gender": "for men",
    "topNotes": [
      "Juniper",
      "Red Berries",
      "Pink Pepper",
      "Bergamot",
      "Cardamom"
    ],
    "heartNotes": [
      "Damask Rose",
      "Magnolia",
      "Violet",
      "Cashmeran"
    ],
    "baseNotes": [
      "Leather",
      "Tobacco",
      "Moss",
      "Sandalwood",
      "Vanilla",
      "Benzoin",
      "Amber"
    ],
    "seasons": [
      "Ac Venues",
      "Winter",
      "Cool Nights"
    ],
    "time": "Evening",
    "sprays": "1-2 sprays BOIS 1920 Cannabis for women and men",
    "occasions": [
      "Receptions",
      "Winter Weddings",
      "Festive Evenings",
      "Formal Dinners"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Citrus",
      "Floral"
    ],
    "accords": [
      "Floral",
      "Fresh",
      "Leather",
      "Powdery"
    ]
  },
  {
    "id": "92",
    "slug": "bois-1920-cannabis",
    "brand": "Bois 1920",
    "name": "Cannabis",
    "gender": "for women and men",
    "topNotes": [
      "Ylang-Ylang",
      "Mandarin Orange",
      "Petitgrain",
      "Orange",
      "Grapefruit"
    ],
    "heartNotes": [
      "Orange Blossom",
      "Orris",
      "Cherry Blossom",
      "Neroli",
      "Indian Jasmine"
    ],
    "baseNotes": [
      "Tonka Bean",
      "Vanilla",
      "Amber",
      "Sandalowood",
      "Patchouli"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer",
      "Winter"
    ],
    "time": "Day / Evening",
    "sprays": "4-6",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal",
      "Office"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Citrus",
      "Floral"
    ],
    "accords": [
      "Earthy",
      "Floral",
      "Fresh",
      "Fruity"
    ]
  },
  {
    "id": "93",
    "slug": "boadicea-the-victorious-valiant",
    "brand": "Boadicea The Victorious",
    "name": "Valiant",
    "gender": "for women and men",
    "topNotes": [
      "cannabis"
    ],
    "heartNotes": [
      "Patchouli",
      "cannabis"
    ],
    "baseNotes": [
      "cannabis",
      "Woody Notes"
    ],
    "seasons": [
      "Spring",
      "Ac Venues",
      "Mild Winter",
      "Monsoon Evenings"
    ],
    "time": "Day / Evening",
    "sprays": "2-3 sprays",
    "occasions": [
      "Lunches",
      "Smart Casuals",
      "Dates",
      "Office",
      "Pujas"
    ],
    "featured": false,
    "families": [
      "Woody"
    ],
    "accords": [
      "Earthy",
      "Woody"
    ]
  },
  {
    "id": "94",
    "slug": "bond-no-9-bleecker-street",
    "brand": "Bond No 9",
    "name": "Bleecker Street",
    "gender": "for women and men",
    "topNotes": [
      "Violet Leaf",
      "Blueberry",
      "Cassis",
      "Thyme"
    ],
    "heartNotes": [
      "Cedar",
      "Jasmine",
      "Cinnamon"
    ],
    "baseNotes": [
      "Oakmoss",
      "Suede",
      "Patchouli",
      "Amber",
      "Vanilla",
      "Caramel"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Winter"
    ],
    "time": "Evening",
    "sprays": "2-3",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Aromatic",
      "Floral"
    ],
    "accords": [
      "Earthy",
      "Floral",
      "Fruity",
      "Herbal"
    ]
  },
  {
    "id": "95",
    "slug": "bond-no-9-greenwich-village",
    "brand": "Bond No 9",
    "name": "Greenwich Village",
    "gender": "for women and men",
    "topNotes": [
      "Litchi",
      "Cassis",
      "Mandarin Orange"
    ],
    "heartNotes": [
      "Water Lily",
      "Peony",
      "Jasmine"
    ],
    "baseNotes": [
      "Ambroxan",
      "Praline",
      "Musk",
      "Vanilla",
      "oak moss"
    ],
    "seasons": [
      "Spring",
      "Ac Venues",
      "Mild Winter",
      "Monsoon Evenings"
    ],
    "time": "Day / Evening",
    "sprays": "2-3 sprays",
    "occasions": [
      "Lunches",
      "Smart Casuals",
      "Dates",
      "Office",
      "Pujas"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Aquatic",
      "Citrus"
    ],
    "accords": [
      "Floral",
      "Fresh",
      "Marine",
      "Musky"
    ]
  },
  {
    "id": "96",
    "slug": "bond-no-9-liberty-island",
    "brand": "Bond No 9",
    "name": "Liberty Island",
    "gender": "for women and men",
    "topNotes": [
      "Mandarin Orange",
      "Bergamot",
      "Black Currant"
    ],
    "heartNotes": [
      "Orange Blossom",
      "Jasmine"
    ],
    "baseNotes": [
      "Marshamallow",
      "Musk"
    ],
    "seasons": [
      "Spring",
      "Summer",
      "Monsoon"
    ],
    "time": "Day",
    "sprays": "3-4 sprays; 2-3 indoors BOND NO 9 The Scent Of Peace for women",
    "occasions": [
      "Travel",
      "Casual Daytime Events",
      "College",
      "Office",
      "Brunch"
    ],
    "featured": false,
    "families": [
      "Citrus",
      "Floral",
      "Fruity"
    ],
    "accords": [
      "Floral",
      "Fresh",
      "Fruity",
      "Musky"
    ]
  },
  {
    "id": "97",
    "slug": "bond-no-9-the-scent-of-peace",
    "brand": "Bond No 9",
    "name": "The Scent Of Peace",
    "gender": "for women",
    "topNotes": [
      "Black Currant",
      "Grapefruit"
    ],
    "heartNotes": [
      "Lily-of-the-Valley"
    ],
    "baseNotes": [
      "Musk",
      "Virginia Cedar"
    ],
    "seasons": [
      "Spring",
      "Summer",
      "Winter"
    ],
    "time": "Day / Evening",
    "sprays": "4-6",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal",
      "Office"
    ],
    "featured": false,
    "families": [
      "Citrus",
      "Floral",
      "Fruity"
    ],
    "accords": [
      "Floral",
      "Fresh",
      "Fruity",
      "Musky"
    ]
  },
  {
    "id": "98",
    "slug": "bond-no-9-west-side",
    "brand": "Bond No 9",
    "name": "West Side",
    "gender": "for women and men",
    "topNotes": [
      "Not separately listed"
    ],
    "heartNotes": [
      "Not separately listed"
    ],
    "baseNotes": [
      "Not separately listed"
    ],
    "seasons": [
      "Spring",
      "Summer",
      "Monsoon"
    ],
    "time": "Day",
    "sprays": "3-4 sprays; 2-3 indoors",
    "occasions": [
      "Travel",
      "Casual Daytime Events",
      "College",
      "Office",
      "Brunch"
    ],
    "featured": false,
    "families": [
      "Aromatic"
    ],
    "accords": [
      "Fresh"
    ]
  },
  {
    "id": "99",
    "slug": "britney-spears-fantasy-in-bloom",
    "brand": "Britney Spears",
    "name": "Fantasy in Bloom",
    "gender": "for women",
    "topNotes": [
      "Japanese Cherry Blossom",
      "Red Berries",
      "Green Mandarin"
    ],
    "heartNotes": [
      "Jasmine",
      "Osmanthus",
      "Tuberose"
    ],
    "baseNotes": [
      "Vanilla",
      "Sandalwood",
      "Amber"
    ],
    "seasons": [
      "Spring",
      "Summer",
      "Winter"
    ],
    "time": "Day / Evening",
    "sprays": "4-6",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal",
      "Office"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Citrus",
      "Floral"
    ],
    "accords": [
      "Floral",
      "Fresh",
      "Fruity",
      "Green"
    ]
  },
  {
    "id": "100",
    "slug": "britney-spears-private-show",
    "brand": "Britney Spears",
    "name": "Private Show",
    "gender": "for women",
    "topNotes": [
      "Whipped Cream",
      "Coffee",
      "Nectarine",
      "Clementine"
    ],
    "heartNotes": [
      "Dulce de leche",
      "Jasmine Sambac",
      "Orange Blossom"
    ],
    "baseNotes": [
      "Amber",
      "Musk"
    ],
    "seasons": [
      "Spring",
      "Ac Venues",
      "Mild Winter",
      "Monsoon Evenings"
    ],
    "time": "Day / Evening",
    "sprays": "2-3 sprays",
    "occasions": [
      "Lunches",
      "Smart Casuals",
      "Dates",
      "Office",
      "Pujas"
    ],
    "featured": true,
    "families": [
      "Amber/Oriental",
      "Citrus",
      "Floral"
    ],
    "accords": [
      "Floral",
      "Fresh",
      "Musky",
      "Sweet"
    ]
  },
  {
    "id": "101",
    "slug": "britney-spears-sunset-fantasy",
    "brand": "Britney Spears",
    "name": "Sunset Fantasy",
    "gender": "for women",
    "topNotes": [
      "Italian Mandarin",
      "Apple",
      "Blood Grapefruit"
    ],
    "heartNotes": [
      "Peach",
      "Raspberry Leaf",
      "Orange Blossom"
    ],
    "baseNotes": [
      "Milk Mousse",
      "Vanilla",
      "Amber",
      "Australian Sandalwood"
    ],
    "seasons": [
      "Spring",
      "Summer",
      "Winter"
    ],
    "time": "Day / Evening",
    "sprays": "4-6",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal",
      "Office"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Citrus",
      "Floral"
    ],
    "accords": [
      "Floral",
      "Fresh",
      "Fruity",
      "Sweet"
    ]
  },
  {
    "id": "102",
    "slug": "burberry-burberry-brit-rhythm",
    "brand": "Burberry",
    "name": "Burberry Brit Rhythm",
    "gender": "for men",
    "topNotes": [
      "Juniper Berries",
      "Cardamom",
      "Verbena",
      "Basil"
    ],
    "heartNotes": [
      "Leather",
      "Patchouli",
      "Styrax"
    ],
    "baseNotes": [
      "Tonka Bean",
      "Cedar",
      "Incense"
    ],
    "seasons": [
      "Spring",
      "Ac Venues",
      "Mild Winter",
      "Monsoon Evenings"
    ],
    "time": "Day / Evening",
    "sprays": "2-3 sprays",
    "occasions": [
      "Lunches",
      "Smart Casuals",
      "Dates",
      "Office",
      "Pujas"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Aromatic",
      "Leather"
    ],
    "accords": [
      "Balsamic",
      "Earthy",
      "Herbal",
      "Leather"
    ]
  },
  {
    "id": "103",
    "slug": "burberry-goddess",
    "brand": "Burberry",
    "name": "Goddess",
    "gender": "for women",
    "topNotes": [
      "Vanilla",
      "Lavender",
      "Cacao",
      "Ginger"
    ],
    "heartNotes": [
      "Vanilla Caviar"
    ],
    "baseNotes": [
      "Vanilla Absolute"
    ],
    "seasons": [
      "Monsoon",
      "Winter"
    ],
    "time": "Evening",
    "sprays": "2-3",
    "occasions": [
      "Date Night",
      "Formal"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Aromatic",
      "Gourmand"
    ],
    "accords": [
      "Herbal",
      "Spicy",
      "Sweet",
      "Warm"
    ]
  },
  {
    "id": "104",
    "slug": "burberry-burberry-her",
    "brand": "Burberry",
    "name": "Burberry Her",
    "gender": "for women",
    "topNotes": [
      "Strawberry",
      "Raspberry",
      "Blackberry",
      "Sour Cherry",
      "Black Currant",
      "Mandarin Orange",
      "Lemon"
    ],
    "heartNotes": [
      "Violet",
      "Jasmine"
    ],
    "baseNotes": [
      "Musk",
      "Vanilla",
      "Cashmeran",
      "Woody Notes",
      "Amber",
      "Oakmoss",
      "Patchouli"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer",
      "Winter"
    ],
    "time": "Day / Evening",
    "sprays": "4-6",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal",
      "Office"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Citrus",
      "Floral"
    ],
    "accords": [
      "Earthy",
      "Floral",
      "Fresh",
      "Fruity"
    ]
  },
  {
    "id": "105",
    "slug": "burberry-hero",
    "brand": "Burberry",
    "name": "Hero",
    "gender": "for men",
    "topNotes": [
      "Bergamot"
    ],
    "heartNotes": [
      "Juniper",
      "Black Pepper"
    ],
    "baseNotes": [
      "Atlas Cedar",
      "Virginian Cedar",
      "Himalayan Cedar"
    ],
    "seasons": [
      "Spring",
      "Summer",
      "Winter"
    ],
    "time": "Day / Evening",
    "sprays": "4-6",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal",
      "Office"
    ],
    "featured": false,
    "families": [
      "Citrus",
      "Spicy",
      "Woody"
    ],
    "accords": [
      "Fresh",
      "Spicy",
      "Woody"
    ]
  },
  {
    "id": "106",
    "slug": "burberry-london-for-men",
    "brand": "Burberry",
    "name": "London for Men",
    "gender": "for men",
    "topNotes": [
      "Cinnamon",
      "Lavender",
      "Bergamot"
    ],
    "heartNotes": [
      "Leather",
      "Mimosa"
    ],
    "baseNotes": [
      "Tobacco Leaf",
      "Guaiac Wood",
      "Opoponax",
      "Oakmoss"
    ],
    "seasons": [
      "Spring",
      "Summer",
      "Monsoon"
    ],
    "time": "Day",
    "sprays": "3-4 sprays; 2-3 indoors",
    "occasions": [
      "Travel",
      "Casual Daytime Events",
      "College",
      "Office",
      "Brunch"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Aromatic",
      "Citrus"
    ],
    "accords": [
      "Floral",
      "Fresh",
      "Herbal",
      "Leather"
    ]
  },
  {
    "id": "107",
    "slug": "bvlgari-ambero",
    "brand": "Bvlgari",
    "name": "Ambero",
    "gender": "for men",
    "topNotes": [
      "Not separately listed"
    ],
    "heartNotes": [
      "Not separately listed"
    ],
    "baseNotes": [
      "Not separately listed"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer"
    ],
    "time": "Day",
    "sprays": "3-4",
    "occasions": [
      "Casual",
      "Office"
    ],
    "featured": false,
    "families": [
      "Aromatic"
    ],
    "accords": [
      "Fresh"
    ]
  },
  {
    "id": "108",
    "slug": "bvlgari-aqva-amara",
    "brand": "Bvlgari",
    "name": "Aqva Amara",
    "gender": "for men",
    "topNotes": [
      "Sicilian Mandarin"
    ],
    "heartNotes": [
      "Watery Notes",
      "Neroli"
    ],
    "baseNotes": [
      "Olibanum",
      "Indonesian Patchouli Leaf"
    ],
    "seasons": [
      "Spring",
      "Ac Venues",
      "Mild Winter",
      "Monsoon Evenings"
    ],
    "time": "Day / Evening",
    "sprays": "2-3 sprays",
    "occasions": [
      "Lunches",
      "Smart Casuals",
      "Dates",
      "Office",
      "Pujas"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Aquatic",
      "Citrus"
    ],
    "accords": [
      "Earthy",
      "Fresh",
      "Marine",
      "Warm"
    ]
  },
  {
    "id": "109",
    "slug": "aqva-pour-homme-atlantiqve-aqva-pour-homme",
    "brand": "Aqva Pour Homme Atlantiqve",
    "name": "Aqva Pour Homme",
    "gender": "for men",
    "topNotes": [
      "Water Notes",
      "Calabrian bergamot",
      "Sicilian Lemon",
      "Sage"
    ],
    "heartNotes": [
      "Sea Notes",
      "Ambergris",
      "Apple"
    ],
    "baseNotes": [
      "Benzoin",
      "Amberwood",
      "Vetiver",
      "Patchouli",
      "Sandalwood"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer",
      "Winter"
    ],
    "time": "Day / Evening",
    "sprays": "4-6",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal",
      "Office"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Aquatic",
      "Aromatic"
    ],
    "accords": [
      "Earthy",
      "Fresh",
      "Fruity",
      "Herbal"
    ]
  },
  {
    "id": "110",
    "slug": "archive-fragrance-110",
    "brand": "Archive",
    "name": "Fragrance 110",
    "gender": "for men",
    "topNotes": [
      "Mandarin Orange",
      "Orange",
      "Petitgrain"
    ],
    "heartNotes": [
      "Seaweed",
      "Lavender",
      "Cotton Flower"
    ],
    "baseNotes": [
      "Virginia Cedar",
      "Woodsy Notes",
      "Patchouli",
      "Clary Sage",
      "Amber"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer"
    ],
    "time": "Day",
    "sprays": "4-6",
    "occasions": [
      "Brunch",
      "Casual Daytime Events",
      "College",
      "Office",
      "Travel"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Aquatic",
      "Aromatic"
    ],
    "accords": [
      "Earthy",
      "Fresh",
      "Herbal",
      "Marine"
    ]
  },
  {
    "id": "111",
    "slug": "bvlgari-aqva-pour-homme-marine",
    "brand": "Bvlgari",
    "name": "Aqva Pour Homme Marine",
    "gender": "for men",
    "topNotes": [
      "Grapefruit",
      "Neroli",
      "Mandarin Orange",
      "Petitgrain"
    ],
    "heartNotes": [
      "Water Notes",
      "Seaweed",
      "Rosemary"
    ],
    "baseNotes": [
      "Virginia Cedar",
      "Amber"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer"
    ],
    "time": "Day",
    "sprays": "4-6",
    "occasions": [
      "Brunch",
      "Casual Daytime Events",
      "College",
      "Office",
      "Travel"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Aquatic",
      "Aromatic"
    ],
    "accords": [
      "Floral",
      "Fresh",
      "Herbal",
      "Marine"
    ]
  },
  {
    "id": "112",
    "slug": "bvlgari-black",
    "brand": "Bvlgari",
    "name": "Black",
    "gender": "for women and men",
    "topNotes": [
      "Green Tea",
      "Bergamot",
      "Rose"
    ],
    "heartNotes": [
      "Sandalwood",
      "Cedar",
      "Jasmine"
    ],
    "baseNotes": [
      "Leather",
      "Vanilla",
      "Amber",
      "Musk",
      "Oakmoss"
    ],
    "seasons": [
      "Ac Venues",
      "Winter",
      "Cool Nights"
    ],
    "time": "Evening",
    "sprays": "3-4 sprays; 2-3 indoors Sprays: 1-2 sprays PAGE 12 / 118",
    "occasions": [
      "Receptions",
      "Winter Weddings",
      "Festive Evenings",
      "Formal Dinners"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Citrus",
      "Floral"
    ],
    "accords": [
      "Floral",
      "Fresh",
      "Green",
      "Leather"
    ]
  },
  {
    "id": "113",
    "slug": "bvlgari-blv",
    "brand": "Bvlgari",
    "name": "BLV",
    "gender": "for women",
    "topNotes": [
      "Ginger",
      "Bergamot"
    ],
    "heartNotes": [
      "Wisteria",
      "Flax"
    ],
    "baseNotes": [
      "Musk",
      "Sandalwood",
      "Black locust",
      "Vanilla"
    ],
    "seasons": [
      "Spring",
      "Summer",
      "Winter"
    ],
    "time": "Day / Evening",
    "sprays": "4-6",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal",
      "Office"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Citrus",
      "Spicy"
    ],
    "accords": [
      "Fresh",
      "Musky",
      "Spicy",
      "Sweet"
    ]
  },
  {
    "id": "114",
    "slug": "bvlgari-bvlgari-man-terrae-essence",
    "brand": "Bvlgari",
    "name": "Bvlgari Man Terrae Essence",
    "gender": "for men",
    "topNotes": [
      "Citron",
      "Calamansi"
    ],
    "heartNotes": [
      "Vetiver",
      "Orris"
    ],
    "baseNotes": [
      "Earthy Notes",
      "Styrax"
    ],
    "seasons": [
      "Spring",
      "Summer",
      "Monsoon"
    ],
    "time": "Day",
    "sprays": "3-4 sprays; 2-3 indoors",
    "occasions": [
      "Travel",
      "Casual Daytime Events",
      "College",
      "Office",
      "Brunch"
    ],
    "featured": false,
    "families": [
      "Woody"
    ],
    "accords": [
      "Earthy",
      "Woody"
    ]
  },
  {
    "id": "115",
    "slug": "bvlgari-eau-parfumee-au-the-rouge",
    "brand": "Bvlgari",
    "name": "Eau Parfumee au The Rouge",
    "gender": "for women and men",
    "topNotes": [
      "Not separately listed"
    ],
    "heartNotes": [
      "Not separately listed"
    ],
    "baseNotes": [
      "Not separately listed"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer"
    ],
    "time": "Day",
    "sprays": "3-4",
    "occasions": [
      "Casual",
      "Office"
    ],
    "featured": false,
    "families": [
      "Aromatic"
    ],
    "accords": [
      "Fresh"
    ]
  },
  {
    "id": "116",
    "slug": "-116",
    "brand": "Archive",
    "name": "Classified Fragrance",
    "gender": "Unisex",
    "topNotes": [
      "Pink Pepper",
      "Bergamot",
      "Orange"
    ],
    "heartNotes": [
      "Tea",
      "Fig"
    ],
    "baseNotes": [
      "Walnut",
      "Resin",
      "Musk"
    ],
    "seasons": [
      "Spring",
      "Ac Venues",
      "Mild Winter",
      "Monsoon Evenings"
    ],
    "time": "Day / Evening",
    "sprays": "2-3 sprays",
    "occasions": [
      "Lunches",
      "Smart Casuals",
      "Dates",
      "Office",
      "Pujas"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Citrus",
      "Fruity"
    ],
    "accords": [
      "Balsamic",
      "Fresh",
      "Fruity",
      "Musky"
    ]
  },
  {
    "id": "117",
    "slug": "bvlgari-eau-parfumee-au-the-blanc",
    "brand": "Bvlgari",
    "name": "Eau Parfumee au The Blanc",
    "gender": "for women and men",
    "topNotes": [
      "Tea",
      "Artemisia",
      "Bergamot",
      "Orange Blossom",
      "Bitter Orange"
    ],
    "heartNotes": [
      "Pepper",
      "Cardamom",
      "Coriander"
    ],
    "baseNotes": [
      "Musk",
      "Woody Notes",
      "Jasmine",
      "Amber",
      "Rose"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer"
    ],
    "time": "Day",
    "sprays": "4-6",
    "occasions": [
      "Brunch",
      "Casual Daytime Events",
      "College",
      "Office",
      "Travel"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Aromatic",
      "Citrus"
    ],
    "accords": [
      "Floral",
      "Fresh",
      "Herbal",
      "Musky"
    ]
  },
  {
    "id": "118",
    "slug": "when-to-wear-vert-extreme",
    "brand": "When To Wear",
    "name": "Vert Extreme",
    "gender": "for women and men",
    "topNotes": [
      "Bergamot",
      "Coriander",
      "Pepper",
      "Orange",
      "Orange Blossom"
    ],
    "heartNotes": [
      "Cardamom",
      "Jasmine",
      "Bulgarian Rose"
    ],
    "baseNotes": [
      "Green Tea",
      "Woody Notes"
    ],
    "seasons": [
      "Spring",
      "Summer",
      "Monsoon"
    ],
    "time": "Day",
    "sprays": "3-4 sprays; 2-3 indoors Sprays: 3-4 sprays; 2-3 indoors",
    "occasions": [
      "Travel",
      "Casual Daytime Events",
      "College",
      "Office",
      "Brunch"
    ],
    "featured": false,
    "families": [
      "Citrus",
      "Floral",
      "Spicy"
    ],
    "accords": [
      "Floral",
      "Fresh",
      "Green",
      "Spicy"
    ]
  },
  {
    "id": "119",
    "slug": "bvlgari-eau-parfumee-au-the-vert",
    "brand": "Bvlgari",
    "name": "Eau Parfumee au The Vert",
    "gender": "for women and men",
    "topNotes": [
      "Bergamot",
      "Cardamom",
      "Lemon",
      "Coriander",
      "Orange Blossom",
      "Mandarin Orange"
    ],
    "heartNotes": [
      "Jasmine",
      "Lily-of-the-Valley",
      "Bulgarian Rose"
    ],
    "baseNotes": [
      "Green Tea",
      "Musk",
      "Cedar",
      "Precious Woods",
      "Sandalwood",
      "Amber"
    ],
    "seasons": [
      "Spring",
      "Summer",
      "Monsoon"
    ],
    "time": "Day",
    "sprays": "3-4 sprays; 2-3 indoors",
    "occasions": [
      "Travel",
      "Casual Daytime Events",
      "College",
      "Office",
      "Brunch"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Citrus",
      "Floral"
    ],
    "accords": [
      "Floral",
      "Fresh",
      "Green",
      "Musky"
    ]
  },
  {
    "id": "120",
    "slug": "bvlgari-falkar",
    "brand": "Bvlgari",
    "name": "Falkar",
    "gender": "for men",
    "topNotes": [
      "Nutmeg",
      "Cinnamon"
    ],
    "heartNotes": [
      "Cypriol Oil or Nagarmotha",
      "Olibanum"
    ],
    "baseNotes": [
      "Agarwood (Oud)",
      "Black Musk",
      "Saffron"
    ],
    "seasons": [
      "Spring",
      "Ac Venues",
      "Mild Winter",
      "Monsoon Evenings"
    ],
    "time": "Day / Evening",
    "sprays": "2-3 sprays",
    "occasions": [
      "Lunches",
      "Smart Casuals",
      "Dates",
      "Office",
      "Pujas"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Spicy",
      "Woody"
    ],
    "accords": [
      "Musky",
      "Spicy",
      "Warm",
      "Woody"
    ]
  },
  {
    "id": "121",
    "slug": "bvlgari-garanat",
    "brand": "Bvlgari",
    "name": "Garanat",
    "gender": "for men",
    "topNotes": [
      "Not separately listed"
    ],
    "heartNotes": [
      "Not separately listed"
    ],
    "baseNotes": [
      "Not separately listed"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer"
    ],
    "time": "Day",
    "sprays": "3-4",
    "occasions": [
      "Casual",
      "Office"
    ],
    "featured": false,
    "families": [
      "Aromatic"
    ],
    "accords": [
      "Fresh"
    ]
  },
  {
    "id": "122",
    "slug": "bvlgari-gyan",
    "brand": "Bvlgari",
    "name": "Gyan",
    "gender": "for men",
    "topNotes": [
      "Not separately listed"
    ],
    "heartNotes": [
      "Not separately listed"
    ],
    "baseNotes": [
      "Not separately listed"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer"
    ],
    "time": "Day",
    "sprays": "3-4",
    "occasions": [
      "Casual",
      "Office"
    ],
    "featured": false,
    "families": [
      "Aromatic"
    ],
    "accords": [
      "Fresh"
    ]
  },
  {
    "id": "123",
    "slug": "bvlgari-kobraa",
    "brand": "Bvlgari",
    "name": "Kobraa",
    "gender": "for men",
    "topNotes": [
      "Geranium"
    ],
    "heartNotes": [
      "Olibanum"
    ],
    "baseNotes": [
      "Agarwood (Oud)"
    ],
    "seasons": [
      "Spring",
      "Winter"
    ],
    "time": "Evening",
    "sprays": "3-4",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Floral",
      "Woody"
    ],
    "accords": [
      "Floral",
      "Warm",
      "Woody"
    ]
  },
  {
    "id": "124",
    "slug": "bvlgari-le-gemme-empyr",
    "brand": "Bvlgari",
    "name": "Le Gemme Empyr",
    "gender": "for men",
    "topNotes": [
      "Ginger"
    ],
    "heartNotes": [
      "Ginger"
    ],
    "baseNotes": [
      "Sandalwood",
      "Labdanum"
    ],
    "seasons": [
      "Winter"
    ],
    "time": "Evening",
    "sprays": "2-3",
    "occasions": [
      "Date Night",
      "Formal"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Spicy",
      "Woody"
    ],
    "accords": [
      "Spicy",
      "Warm",
      "Woody"
    ]
  },
  {
    "id": "125",
    "slug": "bvlgari-bvlgari-man-in-black",
    "brand": "Bvlgari",
    "name": "Bvlgari Man In Black",
    "gender": "for men",
    "topNotes": [
      "Spices",
      "Rum",
      "Tobacco"
    ],
    "heartNotes": [
      "Leather",
      "Iris",
      "Tuberose"
    ],
    "baseNotes": [
      "Tonka Bean",
      "Guaiac Wood",
      "Benzoin"
    ],
    "seasons": [
      "Spring",
      "Winter"
    ],
    "time": "Evening",
    "sprays": "2-3",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Floral",
      "Gourmand"
    ],
    "accords": [
      "Floral",
      "Leather",
      "Powdery",
      "Sweet"
    ]
  },
  {
    "id": "126",
    "slug": "bvlgari-bvlgari-man-rain-essence",
    "brand": "Bvlgari",
    "name": "Bvlgari Man Rain Essence",
    "gender": "for men",
    "topNotes": [
      "Green Tea",
      "Orange"
    ],
    "heartNotes": [
      "White Lotus",
      "Musk"
    ],
    "baseNotes": [
      "Guaiac Wood",
      "Amber"
    ],
    "seasons": [
      "Ac Venues",
      "Cool Nights",
      "Winter"
    ],
    "time": "Evening",
    "sprays": "4-6",
    "occasions": [
      "Festive Evenings",
      "Formal Dinners",
      "Receptions",
      "Winter Weddings"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Citrus",
      "Woody"
    ],
    "accords": [
      "Fresh",
      "Green",
      "Musky",
      "Warm"
    ]
  },
  {
    "id": "127",
    "slug": "bvlgari-man-wood-essence-omnia-by-mary-katrantzou",
    "brand": "Bvlgari Man Wood Essence",
    "name": "Omnia by Mary Katrantzou",
    "gender": "for men",
    "topNotes": [
      "citruses with sugar",
      "Lemon Zest",
      "Coriander Leaf"
    ],
    "heartNotes": [
      "Cypress",
      "Cedar",
      "Vetiver"
    ],
    "baseNotes": [
      "Benzoin"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer",
      "Winter"
    ],
    "time": "Day / Evening",
    "sprays": "4-6",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal",
      "Office"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Citrus",
      "Gourmand"
    ],
    "accords": [
      "Earthy",
      "Fresh",
      "Spicy",
      "Sweet"
    ]
  },
  {
    "id": "128",
    "slug": "archive-fragrance-128",
    "brand": "Archive",
    "name": "Fragrance 128",
    "gender": "for women",
    "topNotes": [
      "Fig Leaf",
      "Mandarin Orange"
    ],
    "heartNotes": [
      "Orange Blossom",
      "Gardenia"
    ],
    "baseNotes": [
      "Musk",
      "White Woods"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer"
    ],
    "time": "Day",
    "sprays": "4-6",
    "occasions": [
      "Brunch",
      "Casual Daytime Events",
      "College",
      "Office",
      "Travel"
    ],
    "featured": false,
    "families": [
      "Citrus",
      "Floral",
      "Fruity"
    ],
    "accords": [
      "Floral",
      "Fresh",
      "Fruity",
      "Musky"
    ]
  },
  {
    "id": "129",
    "slug": "bvlgari-omnia-coral",
    "brand": "Bvlgari",
    "name": "Omnia Coral",
    "gender": "for women",
    "topNotes": [
      "Bergamot",
      "Goji Berries"
    ],
    "heartNotes": [
      "Pomegranate",
      "Hibiscus",
      "Water Lily"
    ],
    "baseNotes": [
      "Musk",
      "Virginia Cedar"
    ],
    "seasons": [
      "Spring",
      "Summer"
    ],
    "time": "Day",
    "sprays": "4-6",
    "occasions": [
      "Casual",
      "Office"
    ],
    "featured": false,
    "families": [
      "Aquatic",
      "Citrus",
      "Floral"
    ],
    "accords": [
      "Floral",
      "Fresh",
      "Marine",
      "Musky"
    ]
  },
  {
    "id": "130",
    "slug": "bvlgari-onekh",
    "brand": "Bvlgari",
    "name": "Onekh",
    "gender": "for men",
    "topNotes": [
      "Not separately listed"
    ],
    "heartNotes": [
      "Not separately listed"
    ],
    "baseNotes": [
      "Not separately listed"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer"
    ],
    "time": "Day",
    "sprays": "3-4",
    "occasions": [
      "Brunch",
      "Casual Daytime Events",
      "College",
      "Office",
      "Travel"
    ],
    "featured": false,
    "families": [
      "Aromatic"
    ],
    "accords": [
      "Fresh"
    ]
  },
  {
    "id": "131",
    "slug": "bvlgari-petits-et-mamans",
    "brand": "Bvlgari",
    "name": "Petits et Mamans",
    "gender": "for women",
    "topNotes": [
      "Brazilian Rosewood",
      "Sicilian Orange",
      "Bergamot"
    ],
    "heartNotes": [
      "Chamomile",
      "Sunflower",
      "Rose"
    ],
    "baseNotes": [
      "Powdery Notes",
      "Vanilla",
      "Iris",
      "White Peach"
    ],
    "seasons": [
      "Spring",
      "Summer",
      "Winter"
    ],
    "time": "Day / Evening",
    "sprays": "4-6",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal",
      "Office"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Citrus",
      "Floral"
    ],
    "accords": [
      "Floral",
      "Fresh",
      "Fruity",
      "Powdery"
    ]
  },
  {
    "id": "132",
    "slug": "bvlgari-bvlgari-pour-homme",
    "brand": "Bvlgari",
    "name": "Bvlgari Pour Homme",
    "gender": "for men",
    "topNotes": [
      "Tea",
      "Aldehydes",
      "Bergamot",
      "Lavender",
      "Nutmeg Flower",
      "Orange Blossom",
      "Mandarin Orange"
    ],
    "heartNotes": [
      "Pepper",
      "Iris",
      "Guaiac Wood",
      "Brazilian Rosewood",
      "Coriander",
      "Cyclamen",
      "Carnation",
      "Geranium",
      "Cardamom"
    ],
    "baseNotes": [
      "Musk",
      "Vetiver",
      "Cedar",
      "Oakmoss"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer"
    ],
    "time": "Day",
    "sprays": "4-6",
    "occasions": [
      "Casual",
      "Formal",
      "Office"
    ],
    "featured": false,
    "families": [
      "Aromatic",
      "Citrus",
      "Floral"
    ],
    "accords": [
      "Earthy",
      "Floral",
      "Fresh",
      "Herbal"
    ]
  },
  {
    "id": "133",
    "slug": "bvlgari-splendida-iris-d-or",
    "brand": "Bvlgari",
    "name": "Splendida Iris d Or",
    "gender": "for women",
    "topNotes": [
      "Green Notes",
      "Bergamot"
    ],
    "heartNotes": [
      "Iris",
      "Mimosa"
    ],
    "baseNotes": [
      "Violet Leaf",
      "Orris",
      "Tonka Bean",
      "Sandalwood",
      "Vetiver"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer",
      "Winter"
    ],
    "time": "Day / Evening",
    "sprays": "4-6",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal",
      "Office"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Citrus",
      "Floral"
    ],
    "accords": [
      "Earthy",
      "Floral",
      "Fresh",
      "Green"
    ]
  },
  {
    "id": "134",
    "slug": "bvlgari-tygar",
    "brand": "Bvlgari",
    "name": "Tygar",
    "gender": "for men",
    "topNotes": [
      "Grapefruit"
    ],
    "heartNotes": [
      "Ginger",
      "Ambrette"
    ],
    "baseNotes": [
      "Ambroxan",
      "Musk",
      "Vetiver",
      "Patchouli"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer"
    ],
    "time": "Day",
    "sprays": "4-6",
    "occasions": [
      "Brunch",
      "Casual Daytime Events",
      "College",
      "Office",
      "Travel"
    ],
    "featured": false,
    "families": [
      "Citrus",
      "Spicy",
      "Woody"
    ],
    "accords": [
      "Earthy",
      "Fresh",
      "Musky",
      "Spicy"
    ]
  },
  {
    "id": "135",
    "slug": "bvlgari-yasep",
    "brand": "Bvlgari",
    "name": "Yasep",
    "gender": "for men",
    "topNotes": [
      "Sicilian Mandarin",
      "Sichuan Pepper"
    ],
    "heartNotes": [
      "Sandalwood",
      "Cedar"
    ],
    "baseNotes": [
      "Amyris",
      "Musk",
      "Vetiver"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer",
      "Winter"
    ],
    "time": "Day / Evening",
    "sprays": "4-6",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal",
      "Office"
    ],
    "featured": false,
    "families": [
      "Citrus",
      "Spicy",
      "Woody"
    ],
    "accords": [
      "Earthy",
      "Fresh",
      "Musky",
      "Spicy"
    ]
  },
  {
    "id": "136",
    "slug": "byredo-accord-oud",
    "brand": "Byredo",
    "name": "Accord Oud",
    "gender": "for women and men",
    "topNotes": [
      "Blackberry",
      "Rum",
      "Saffron"
    ],
    "heartNotes": [
      "Leather",
      "Agarwood (Oud)",
      "Clary Sage"
    ],
    "baseNotes": [
      "Patchouli",
      "Musk"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer"
    ],
    "time": "Day",
    "sprays": "2-3",
    "occasions": [
      "Brunch",
      "Casual Daytime Events",
      "College",
      "Office",
      "Travel"
    ],
    "featured": false,
    "families": [
      "Aromatic",
      "Fruity",
      "Leather"
    ],
    "accords": [
      "Earthy",
      "Fruity",
      "Herbal",
      "Leather"
    ]
  },
  {
    "id": "137",
    "slug": "byredo-animalique",
    "brand": "Byredo",
    "name": "Animalique",
    "gender": "for women and men",
    "topNotes": [
      "Bergamot",
      "Lemon"
    ],
    "heartNotes": [
      "Violet",
      "Mimosa"
    ],
    "baseNotes": [
      "Suede",
      "Amber",
      "Tobacco Leaf"
    ],
    "seasons": [
      "Spring",
      "Summer",
      "Winter"
    ],
    "time": "Day / Evening",
    "sprays": "4-6",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal",
      "Office"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Citrus",
      "Floral"
    ],
    "accords": [
      "Floral",
      "Fresh",
      "Leather",
      "Powdery"
    ]
  },
  {
    "id": "138",
    "slug": "byredo-bal-d-afrique",
    "brand": "Byredo",
    "name": "Bal d Afrique",
    "gender": "for women and men",
    "topNotes": [
      "Amalfi Lemon",
      "Tagetes",
      "Black Currant",
      "Bergamot",
      "African Orange Flower"
    ],
    "heartNotes": [
      "Violet",
      "Cyclamen",
      "Jasmine"
    ],
    "baseNotes": [
      "Vetiver",
      "Musk",
      "Amber",
      "Virginia Cedar"
    ],
    "seasons": [
      "Spring",
      "Ac Venues",
      "Mild Winter",
      "Monsoon Evenings"
    ],
    "time": "Day / Evening",
    "sprays": "2-3 sprays",
    "occasions": [
      "Lunches",
      "Smart Casuals",
      "Dates",
      "Office",
      "Pujas"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Citrus",
      "Floral"
    ],
    "accords": [
      "Earthy",
      "Floral",
      "Fresh",
      "Fruity"
    ]
  },
  {
    "id": "139",
    "slug": "byredo-baudelaire",
    "brand": "Byredo",
    "name": "Baudelaire",
    "gender": "for men",
    "topNotes": [
      "Juniper Berries",
      "Pepper",
      "Caraway"
    ],
    "heartNotes": [
      "Leather",
      "Incense",
      "Hyacinth"
    ],
    "baseNotes": [
      "Patchouli",
      "Papyrus",
      "Amber"
    ],
    "seasons": [
      "Monsoon",
      "Winter"
    ],
    "time": "Evening",
    "sprays": "2-3",
    "occasions": [
      "Date Night",
      "Formal"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Leather",
      "Spicy"
    ],
    "accords": [
      "Balsamic",
      "Earthy",
      "Leather",
      "Spicy"
    ]
  },
  {
    "id": "140",
    "slug": "byredo-bibliotheque",
    "brand": "Byredo",
    "name": "Bibliotheque",
    "gender": "for women and men",
    "topNotes": [
      "Plum",
      "Peach"
    ],
    "heartNotes": [
      "Violet",
      "Peony"
    ],
    "baseNotes": [
      "Leather",
      "Patchouli",
      "Vanilla",
      "Musk"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Winter"
    ],
    "time": "Evening",
    "sprays": "2-3",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Floral",
      "Fruity"
    ],
    "accords": [
      "Earthy",
      "Floral",
      "Fruity",
      "Leather"
    ]
  },
  {
    "id": "141",
    "slug": "byredo-black-saffron",
    "brand": "Byredo",
    "name": "Black Saffron",
    "gender": "for women and men",
    "topNotes": [
      "Saffron",
      "Juniper Berries",
      "Chinese Grapefruit"
    ],
    "heartNotes": [
      "Leather",
      "Black Violet"
    ],
    "baseNotes": [
      "Raspberry",
      "Cashmeran",
      "Vetiver"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer"
    ],
    "time": "Day",
    "sprays": "4-6",
    "occasions": [
      "Casual",
      "Formal",
      "Office"
    ],
    "featured": false,
    "families": [
      "Citrus",
      "Floral",
      "Fruity"
    ],
    "accords": [
      "Earthy",
      "Floral",
      "Fresh",
      "Fruity"
    ]
  },
  {
    "id": "142",
    "slug": "byredo-blanche",
    "brand": "Byredo",
    "name": "Blanche",
    "gender": "for women",
    "topNotes": [
      "Aldehydes",
      "Rose",
      "Pink Pepper"
    ],
    "heartNotes": [
      "Peony",
      "Violet",
      "African Orange Flower"
    ],
    "baseNotes": [
      "Musk",
      "Woodsy Notes",
      "Sandalwood"
    ],
    "seasons": [
      "Spring",
      "Summer"
    ],
    "time": "Day",
    "sprays": "4-6",
    "occasions": [
      "Casual",
      "Office"
    ],
    "featured": false,
    "families": [
      "Citrus",
      "Floral",
      "Spicy"
    ],
    "accords": [
      "Floral",
      "Fresh",
      "Musky",
      "Powdery"
    ]
  },
  {
    "id": "143",
    "slug": "byredo-de-los-santos",
    "brand": "Byredo",
    "name": "De Los Santos",
    "gender": "for women and men",
    "topNotes": [
      "Sage",
      "Mirabelle"
    ],
    "heartNotes": [
      "Orris Root",
      "Cistus Incanus"
    ],
    "baseNotes": [
      "Musk",
      "Olibanum",
      "Ambroxan"
    ],
    "seasons": [
      "Monsoon"
    ],
    "time": "Day / Evening",
    "sprays": "3-4",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal",
      "Office"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Aromatic"
    ],
    "accords": [
      "Herbal",
      "Musky",
      "Warm"
    ]
  },
  {
    "id": "144",
    "slug": "byredo-eleventh-hour",
    "brand": "Byredo",
    "name": "Eleventh Hour",
    "gender": "for women and men",
    "topNotes": [
      "Sichuan Pepper",
      "Bergamot"
    ],
    "heartNotes": [
      "Plum",
      "Rum",
      "Fig",
      "Carrot Seeds"
    ],
    "baseNotes": [
      "Cedar",
      "Cashmere Wood",
      "Iso E Super",
      "Tonka Bean",
      "Olibanum",
      "Labdanum"
    ],
    "seasons": [
      "Spring",
      "Summer",
      "Winter"
    ],
    "time": "Day / Evening",
    "sprays": "4-6",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal",
      "Office"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Citrus",
      "Fruity"
    ],
    "accords": [
      "Fresh",
      "Fruity",
      "Spicy",
      "Sweet"
    ]
  },
  {
    "id": "145",
    "slug": "byredo-flowerhead",
    "brand": "Byredo",
    "name": "Flowerhead",
    "gender": "for women and men",
    "topNotes": [
      "Angelica",
      "Cranberry",
      "Lemon"
    ],
    "heartNotes": [
      "Tuberose",
      "Jasmine Sambac",
      "Green Notes",
      "Rose Petals"
    ],
    "baseNotes": [
      "Suede",
      "Ambergris"
    ],
    "seasons": [
      "Spring",
      "Summer",
      "Winter"
    ],
    "time": "Day / Evening",
    "sprays": "4-6",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal",
      "Office"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Citrus",
      "Floral"
    ],
    "accords": [
      "Floral",
      "Fresh",
      "Fruity",
      "Green"
    ]
  },
  {
    "id": "146",
    "slug": "byredo-gypsy-water",
    "brand": "Byredo",
    "name": "Gypsy Water",
    "gender": "for women and men",
    "topNotes": [
      "Juniper",
      "Lemon",
      "Bergamot",
      "Pepper"
    ],
    "heartNotes": [
      "Pine needles",
      "Incense",
      "Orris Root"
    ],
    "baseNotes": [
      "Vanilla",
      "Sandalwood",
      "Amber"
    ],
    "seasons": [
      "Spring",
      "Summer",
      "Monsoon"
    ],
    "time": "Day",
    "sprays": "3-4 sprays; 2-3 indoors",
    "occasions": [
      "Travel",
      "Casual Daytime Events",
      "College",
      "Office",
      "Brunch"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Citrus",
      "Spicy"
    ],
    "accords": [
      "Balsamic",
      "Fresh",
      "Spicy",
      "Sweet"
    ]
  },
  {
    "id": "147",
    "slug": "byredo-mixed-emotions",
    "brand": "Byredo",
    "name": "Mixed Emotions",
    "gender": "for women and men",
    "topNotes": [
      "Black Currant",
      "Mate"
    ],
    "heartNotes": [
      "Tea",
      "Violet Leaf"
    ],
    "baseNotes": [
      "Birch",
      "Papyrus"
    ],
    "seasons": [
      "Spring",
      "Winter"
    ],
    "time": "Evening",
    "sprays": "3-4",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal"
    ],
    "featured": false,
    "families": [
      "Floral",
      "Fruity",
      "Woody"
    ],
    "accords": [
      "Floral",
      "Fruity",
      "Powdery",
      "Woody"
    ]
  },
  {
    "id": "148",
    "slug": "byredo-mojave-ghost",
    "brand": "Byredo",
    "name": "Mojave Ghost",
    "gender": "for women and men",
    "topNotes": [
      "Sapodilla",
      "Ambrette (Musk Mallow)"
    ],
    "heartNotes": [
      "Magnolia",
      "Violet",
      "Sandalwood"
    ],
    "baseNotes": [
      "Ambergris",
      "Cedar"
    ],
    "seasons": [
      "Spring",
      "Winter"
    ],
    "time": "Evening",
    "sprays": "2-3",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Floral",
      "Woody"
    ],
    "accords": [
      "Floral",
      "Musky",
      "Powdery",
      "Warm"
    ]
  },
  {
    "id": "149",
    "slug": "byredo-open-sky",
    "brand": "Byredo",
    "name": "Open Sky",
    "gender": "for women and men",
    "topNotes": [
      "Pomelo",
      "Black Pepper"
    ],
    "heartNotes": [
      "cannabis"
    ],
    "baseNotes": [
      "Vetiver",
      "Palo Santo"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer"
    ],
    "time": "Day",
    "sprays": "3-4",
    "occasions": [
      "Brunch",
      "Casual Daytime Events",
      "College",
      "Office",
      "Travel"
    ],
    "featured": false,
    "families": [
      "Spicy",
      "Woody"
    ],
    "accords": [
      "Earthy",
      "Spicy",
      "Woody"
    ]
  },
  {
    "id": "150",
    "slug": "byredo-oud-immortel",
    "brand": "Byredo",
    "name": "Oud Immortel",
    "gender": "for women and men",
    "topNotes": [
      "Limoncello",
      "Incense",
      "Cardamom"
    ],
    "heartNotes": [
      "Agarwood (Oud)",
      "Patchouli",
      "Papyrus",
      "Brazilian Rosewood"
    ],
    "baseNotes": [
      "oak moss",
      "Tobacco"
    ],
    "seasons": [
      "Ac Venues",
      "Winter",
      "Cool Nights"
    ],
    "time": "Evening",
    "sprays": "3-4 sprays; 2-3 indoors Sprays: 1-2 sprays VIDEH / MASTER PERFUME CATALOG",
    "occasions": [
      "Receptions",
      "Winter Weddings",
      "Festive Evenings",
      "Formal Dinners"
    ],
    "featured": true,
    "families": [
      "Amber/Oriental",
      "Floral",
      "Gourmand"
    ],
    "accords": [
      "Balsamic",
      "Earthy",
      "Floral",
      "Spicy"
    ]
  },
  {
    "id": "151",
    "slug": "byredo-pulp",
    "brand": "Byredo",
    "name": "Pulp",
    "gender": "for women and men",
    "topNotes": [
      "Black Currant",
      "Bergamot",
      "Cardamon"
    ],
    "heartNotes": [
      "Fig",
      "Red Apple",
      "Tiare Flower"
    ],
    "baseNotes": [
      "Praline",
      "Peach Blossom",
      "Cedar"
    ],
    "seasons": [
      "Spring",
      "Summer"
    ],
    "time": "Day",
    "sprays": "4-6",
    "occasions": [
      "Casual",
      "Office"
    ],
    "featured": false,
    "families": [
      "Citrus",
      "Floral",
      "Fruity"
    ],
    "accords": [
      "Floral",
      "Fresh",
      "Fruity",
      "Sweet"
    ]
  },
  {
    "id": "152",
    "slug": "byredo-reine-de-nuit",
    "brand": "Byredo",
    "name": "Reine de Nuit",
    "gender": "for women and men",
    "topNotes": [
      "Black Currant",
      "Saffron"
    ],
    "heartNotes": [
      "Incense",
      "Alumroot"
    ],
    "baseNotes": [
      "Black Rose",
      "Ambrette (Musk Mallow)",
      "Patchouli"
    ],
    "seasons": [
      "Spring",
      "Ac Venues",
      "Mild Winter",
      "Monsoon Evenings"
    ],
    "time": "Day / Evening",
    "sprays": "2-3 sprays Top: Black Currant and Saffron \u00e2\u20ac\u00a2 Heart: Incense and Alumroot \u00e2\u20ac\u00a2 Base: Black Rose, Ambrette (Musk Mallow) and Patchouli",
    "occasions": [
      "Lunches",
      "Smart Casuals",
      "Dates",
      "Office",
      "Pujas"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Floral",
      "Fruity"
    ],
    "accords": [
      "Balsamic",
      "Earthy",
      "Floral",
      "Fruity"
    ]
  },
  {
    "id": "153",
    "slug": "byredo-rose-of-no-man-s-land",
    "brand": "Byredo",
    "name": "Rose Of No Man s Land",
    "gender": "for women and men",
    "topNotes": [
      "Turkey Red Rose",
      "Pink Pepper"
    ],
    "heartNotes": [
      "Turkey Red Rose",
      "Raspberry Bloom"
    ],
    "baseNotes": [
      "Papyrus",
      "Amber"
    ],
    "seasons": [
      "Spring",
      "Winter"
    ],
    "time": "Evening",
    "sprays": "2-3",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Floral",
      "Fruity"
    ],
    "accords": [
      "Floral",
      "Fruity",
      "Spicy",
      "Warm"
    ]
  },
  {
    "id": "154",
    "slug": "byredo-rouge-chaotique",
    "brand": "Byredo",
    "name": "Rouge Chaotique",
    "gender": "for women and men",
    "topNotes": [
      "Saffron",
      "Cassis",
      "Bergamot",
      "Lemon"
    ],
    "heartNotes": [
      "Plum",
      "Praline",
      "Oak"
    ],
    "baseNotes": [
      "Agarwood (Oud)",
      "Patchouli",
      "Papyrus"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer",
      "Winter"
    ],
    "time": "Day / Evening",
    "sprays": "4-6",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal",
      "Office"
    ],
    "featured": false,
    "families": [
      "Citrus",
      "Fruity",
      "Gourmand"
    ],
    "accords": [
      "Earthy",
      "Fresh",
      "Fruity",
      "Spicy"
    ]
  },
  {
    "id": "155",
    "slug": "byredo-slow-dance",
    "brand": "Byredo",
    "name": "Slow Dance",
    "gender": "for women and men",
    "topNotes": [
      "Opoponax",
      "Cognac"
    ],
    "heartNotes": [
      "Labdanum",
      "Violet",
      "Geranium"
    ],
    "baseNotes": [
      "Vanilla",
      "Patchouli",
      "Incense"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Winter"
    ],
    "time": "Evening",
    "sprays": "2-3",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Floral",
      "Woody"
    ],
    "accords": [
      "Balsamic",
      "Earthy",
      "Floral",
      "Powdery"
    ]
  },
  {
    "id": "156",
    "slug": "byredo-sundazed",
    "brand": "Byredo",
    "name": "Sundazed",
    "gender": "for women and men",
    "topNotes": [
      "Mandarin Orange",
      "Californian Lemon"
    ],
    "heartNotes": [
      "Neroli",
      "Jasmine Sambac"
    ],
    "baseNotes": [
      "Cotton Candy",
      "White Musk"
    ],
    "seasons": [
      "Ac Venues",
      "Cool Nights",
      "Winter"
    ],
    "time": "Evening",
    "sprays": "4-6",
    "occasions": [
      "Festive Evenings",
      "Formal Dinners",
      "Receptions",
      "Winter Weddings"
    ],
    "featured": false,
    "families": [
      "Citrus",
      "Floral"
    ],
    "accords": [
      "Floral",
      "Fresh",
      "Musky"
    ]
  },
  {
    "id": "157",
    "slug": "byredo-tobacco-mandarin",
    "brand": "Byredo",
    "name": "Tobacco Mandarin",
    "gender": "for women and men",
    "topNotes": [
      "Cumin",
      "Mandarin Orange",
      "Coriander"
    ],
    "heartNotes": [
      "Tobacco",
      "Leather",
      "Labdanum"
    ],
    "baseNotes": [
      "Olibanum",
      "Agarwood (Oud)",
      "Sandalwood"
    ],
    "seasons": [
      "Spring",
      "Summer",
      "Winter"
    ],
    "time": "Day / Evening",
    "sprays": "4-6",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal",
      "Office"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Citrus",
      "Gourmand"
    ],
    "accords": [
      "Fresh",
      "Leather",
      "Spicy",
      "Sweet"
    ]
  },
  {
    "id": "158",
    "slug": "byredo-vanille-antique",
    "brand": "Byredo",
    "name": "Vanille Antique",
    "gender": "for women and men",
    "topNotes": [
      "Musk",
      "Plum"
    ],
    "heartNotes": [
      "White Wood",
      "Labdanum"
    ],
    "baseNotes": [
      "Vanilla",
      "Amber"
    ],
    "seasons": [
      "Spring",
      "Winter"
    ],
    "time": "Evening",
    "sprays": "2-3",
    "occasions": [
      "Date Night",
      "Formal"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Fruity",
      "Woody"
    ],
    "accords": [
      "Fruity",
      "Musky",
      "Sweet",
      "Warm"
    ]
  },
  {
    "id": "159",
    "slug": "cacharel-not-stated",
    "brand": "Cacharel",
    "name": "Not stated",
    "gender": "Unisex",
    "topNotes": [
      "Persian galbanum",
      "Comorian ylang-ylang"
    ],
    "heartNotes": [
      "Grasse jasmine",
      "Bulgarian rose"
    ],
    "baseNotes": [
      "Moroccan oakmoss",
      "Indonesian patchouli",
      "Bourbon vetiver",
      "Tibetan musk  Anais Anais  for women  NOTES"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Winter"
    ],
    "time": "Evening",
    "sprays": "3-4",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal"
    ],
    "featured": false,
    "families": [
      "Floral",
      "Woody"
    ],
    "accords": [
      "Earthy",
      "Floral",
      "Green",
      "Musky"
    ]
  },
  {
    "id": "160",
    "slug": "patchouli-bourbon-vetiver-tibetan-musk-anais-anais",
    "brand": "Archive",
    "name": "Anais Anais",
    "gender": "for women",
    "topNotes": [
      "White Lily",
      "Hiacynth",
      "Honeysuckle",
      "Galbanum",
      "Orange Blossom",
      "Lavender",
      "Bergamot",
      "Black Currant",
      "Lemon"
    ],
    "heartNotes": [
      "Lily",
      "Lily-of-the-Valley",
      "Moroccan Jasmine",
      "Carnation",
      "Honeysuckle",
      "Tuberose",
      "Ylang-Ylang",
      "Iris",
      "Rose",
      "Orris Root"
    ],
    "baseNotes": [
      "Sandalwood",
      "Cedarwood",
      "Amber",
      "Oakmoss",
      "Vetiver",
      "Incense"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer"
    ],
    "time": "Day",
    "sprays": "4-6",
    "occasions": [
      "Casual",
      "Office"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Aromatic",
      "Citrus"
    ],
    "accords": [
      "Balsamic",
      "Earthy",
      "Floral",
      "Fresh"
    ]
  },
  {
    "id": "161",
    "slug": "cacharel-cacharel-pour-l-homme",
    "brand": "Cacharel",
    "name": "Cacharel pour L Homme",
    "gender": "for men",
    "topNotes": [
      "Nutmeg",
      "Bergamot",
      "Lavender",
      "Clary Sage"
    ],
    "heartNotes": [
      "Carnation",
      "Geranium",
      "Ylang-Ylang",
      "Lily-of-the-Valley",
      "Cyclamen",
      "Jasmine"
    ],
    "baseNotes": [
      "Fir",
      "Vetiver",
      "Cedar",
      "Oakmoss",
      "Sandalwood",
      "Amber",
      "Musk"
    ],
    "seasons": [
      "Spring",
      "Summer",
      "Monsoon"
    ],
    "time": "Day",
    "sprays": "3-4 sprays; 2-3 indoors",
    "occasions": [
      "Travel",
      "Casual Daytime Events",
      "College",
      "Office",
      "Brunch"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Aromatic",
      "Citrus"
    ],
    "accords": [
      "Earthy",
      "Floral",
      "Fresh",
      "Herbal"
    ]
  },
  {
    "id": "162",
    "slug": "calvin-klein-ck-one",
    "brand": "Calvin Klein",
    "name": "CK One",
    "gender": "for women and men",
    "topNotes": [
      "Lemon",
      "Green Notes",
      "Bergamot",
      "Mandarin Orange",
      "Pineapple",
      "Cardamom",
      "Papaya"
    ],
    "heartNotes": [
      "Lily-of-the-Valley",
      "Jasmine",
      "Violet",
      "Rose",
      "Nutmeg",
      "Orris Root",
      "Freesia"
    ],
    "baseNotes": [
      "Green Accord",
      "Musk",
      "Cedar",
      "Sandalwood",
      "Oakmoss",
      "Green Tea",
      "Amber"
    ],
    "seasons": [
      "Spring",
      "Summer",
      "Monsoon"
    ],
    "time": "Day",
    "sprays": "3-4 sprays; 2-3 indoors",
    "occasions": [
      "Travel",
      "Casual Daytime Events",
      "College",
      "Office",
      "Brunch"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Citrus",
      "Floral"
    ],
    "accords": [
      "Floral",
      "Fresh",
      "Fruity",
      "Green"
    ]
  },
  {
    "id": "163",
    "slug": "calvin-klein-escape",
    "brand": "Calvin Klein",
    "name": "Escape",
    "gender": "for women",
    "topNotes": [
      "Melon",
      "Chamomile",
      "Marigold",
      "Tagetes",
      "Hiacynth",
      "Apricot",
      "Oakmoss",
      "Apple",
      "Coriander",
      "Mandarin Orange",
      "Ylang-Ylang",
      "Litchi",
      "Black Currant",
      "Cassia"
    ],
    "heartNotes": [
      "Peach",
      "Lily-of-the-Valley",
      "Carnation",
      "Rose",
      "Jasmine",
      "Cloves"
    ],
    "baseNotes": [
      "Oakmoss",
      "Musk"
    ],
    "seasons": [
      "Spring",
      "Summer"
    ],
    "time": "Day",
    "sprays": "4-6",
    "occasions": [
      "Casual",
      "Office"
    ],
    "featured": false,
    "families": [
      "Citrus",
      "Floral",
      "Fruity"
    ],
    "accords": [
      "Floral",
      "Fresh",
      "Fruity",
      "Musky"
    ]
  },
  {
    "id": "164",
    "slug": "cacharel-yes-i-am-glorious",
    "brand": "Cacharel",
    "name": "Yes I Am Glorious",
    "gender": "for women",
    "topNotes": [
      "Peach",
      "Mandarin Orange"
    ],
    "heartNotes": [
      "Frangipani",
      "Tiare Flower",
      "Magnolia"
    ],
    "baseNotes": [
      "Sweet Notes",
      "Milk",
      "Sandalwood",
      "White Cedar Extract"
    ],
    "seasons": [
      "Spring",
      "Ac Venues",
      "Mild Winter",
      "Monsoon Evenings"
    ],
    "time": "Day / Evening",
    "sprays": "2-3 sprays",
    "occasions": [
      "Lunches",
      "Smart Casuals",
      "Dates",
      "Office",
      "Pujas"
    ],
    "featured": false,
    "families": [
      "Citrus",
      "Floral",
      "Fruity"
    ],
    "accords": [
      "Floral",
      "Fresh",
      "Fruity",
      "Woody"
    ]
  },
  {
    "id": "165",
    "slug": "calvin-klein-ck-one-shock-for-him",
    "brand": "Calvin Klein",
    "name": "CK One Shock For Him",
    "gender": "for men",
    "topNotes": [
      "Lavender",
      "Clementine",
      "Cucumber"
    ],
    "heartNotes": [
      "Cardamom",
      "Pepper",
      "Basil",
      "Osmanthus"
    ],
    "baseNotes": [
      "Tobacco",
      "Amber",
      "Patchouli",
      "Woodsy Notes",
      "Musk"
    ],
    "seasons": [
      "Spring",
      "Ac Venues",
      "Mild Winter",
      "Monsoon Evenings"
    ],
    "time": "Day / Evening",
    "sprays": "2-3 sprays",
    "occasions": [
      "Lunches",
      "Smart Casuals",
      "Dates",
      "Office",
      "Pujas"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Aromatic",
      "Floral"
    ],
    "accords": [
      "Earthy",
      "Floral",
      "Herbal",
      "Musky"
    ]
  },
  {
    "id": "166",
    "slug": "calvin-klein-eternity-intense",
    "brand": "Calvin Klein",
    "name": "Eternity Intense",
    "gender": "for women",
    "topNotes": [
      "Orris",
      "Watery Notes",
      "Bergamot"
    ],
    "heartNotes": [
      "Iris",
      "Osmanthus",
      "Rose"
    ],
    "baseNotes": [
      "Vanilla",
      "Musk",
      "Sandalwood"
    ],
    "seasons": [
      "Spring",
      "Summer",
      "Winter"
    ],
    "time": "Day / Evening",
    "sprays": "4-6",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal",
      "Office"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Aquatic",
      "Citrus"
    ],
    "accords": [
      "Floral",
      "Fresh",
      "Marine",
      "Musky"
    ]
  },
  {
    "id": "167",
    "slug": "calvin-klein-obsessed-for-women",
    "brand": "Calvin Klein",
    "name": "Obsessed for Women",
    "gender": "for women",
    "topNotes": [
      "Citruses",
      "elemi",
      "Neroli",
      "Bergamot"
    ],
    "heartNotes": [
      "Lavender",
      "Sage",
      "Violet Leaf",
      "Orange Blossom",
      "Lily-of-the-Valley",
      "Rose"
    ],
    "baseNotes": [
      "Musk",
      "Ambrette (Musk Mallow)",
      "Iso E Super"
    ],
    "seasons": [
      "Spring",
      "Summer",
      "Monsoon"
    ],
    "time": "Day",
    "sprays": "3-4 sprays; 2-3 indoors",
    "occasions": [
      "Travel",
      "Casual Daytime Events",
      "College",
      "Office",
      "Brunch"
    ],
    "featured": false,
    "families": [
      "Aromatic",
      "Citrus",
      "Floral"
    ],
    "accords": [
      "Floral",
      "Fresh",
      "Herbal",
      "Musky"
    ]
  },
  {
    "id": "168",
    "slug": "carolina-herrera-212-heroes-forever-young",
    "brand": "Carolina Herrera",
    "name": "212 Heroes Forever Young",
    "gender": "for women",
    "topNotes": [
      "Raspberry",
      "Mandarin Orange"
    ],
    "heartNotes": [
      "Jasmine",
      "Orange Blossom"
    ],
    "baseNotes": [
      "Cedar",
      "Sandalwood"
    ],
    "seasons": [
      "Spring",
      "Ac Venues",
      "Mild Winter",
      "Monsoon Evenings"
    ],
    "time": "Day / Evening",
    "sprays": "2-3 sprays",
    "occasions": [
      "Lunches",
      "Smart Casuals",
      "Dates",
      "Office",
      "Pujas"
    ],
    "featured": false,
    "families": [
      "Citrus",
      "Floral",
      "Fruity"
    ],
    "accords": [
      "Floral",
      "Fresh",
      "Fruity",
      "Woody"
    ]
  },
  {
    "id": "169",
    "slug": "carolina-herrera-212-men",
    "brand": "Carolina Herrera",
    "name": "212 Men",
    "gender": "for men",
    "topNotes": [
      "Green Notes",
      "Grapefruit",
      "Spices",
      "Bergamot",
      "Lavender",
      "Petitgrain"
    ],
    "heartNotes": [
      "Ginger",
      "Violet",
      "Gardenia",
      "Sage"
    ],
    "baseNotes": [
      "Musk",
      "Sandalwood",
      "Incense",
      "Vetiver",
      "Guaiac Wood",
      "Labdanum  212 VIP Black  for men  NOTES"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer",
      "Winter"
    ],
    "time": "Day / Evening",
    "sprays": "4-6",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal",
      "Office"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Aromatic",
      "Citrus"
    ],
    "accords": [
      "Balsamic",
      "Earthy",
      "Floral",
      "Fresh"
    ]
  },
  {
    "id": "170",
    "slug": "labdanum-212-vip-black",
    "brand": "Labdanum",
    "name": "212 VIP Black",
    "gender": "for men",
    "topNotes": [
      "Absinthe",
      "Anise",
      "Fennel"
    ],
    "heartNotes": [
      "Lavender"
    ],
    "baseNotes": [
      "Black Vanilla Husk",
      "Musk"
    ],
    "seasons": [
      "Monsoon",
      "Winter"
    ],
    "time": "Evening",
    "sprays": "2-3",
    "occasions": [
      "Date Night",
      "Formal"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Aromatic",
      "Spicy"
    ],
    "accords": [
      "Herbal",
      "Musky",
      "Spicy",
      "Sweet"
    ]
  },
  {
    "id": "171",
    "slug": "carolina-herrera-212-vip-men-party-fever",
    "brand": "Carolina Herrera",
    "name": "212 VIP Men Party Fever",
    "gender": "for men",
    "topNotes": [
      "Red Apple",
      "Citruses",
      "Ginger",
      "Juniper Berries",
      "Tamarind"
    ],
    "heartNotes": [
      "cannabis",
      "Geranium",
      "Freesia"
    ],
    "baseNotes": [
      "Tonka Bean",
      "Cedar",
      "Musk",
      "Vetiver",
      "Olibanum"
    ],
    "seasons": [
      "Spring",
      "Summer",
      "Monsoon"
    ],
    "time": "Day",
    "sprays": "3-4 sprays; 2-3 indoors 212 VIP Rose for women",
    "occasions": [
      "Travel",
      "Casual Daytime Events",
      "College",
      "Office",
      "Brunch"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Citrus",
      "Floral"
    ],
    "accords": [
      "Earthy",
      "Floral",
      "Fresh",
      "Fruity"
    ]
  },
  {
    "id": "172",
    "slug": "when-to-wear-212-vip-rose",
    "brand": "When To Wear",
    "name": "212 VIP Rose",
    "gender": "for women",
    "topNotes": [
      "Champagne Ros\u00e9",
      "Pink Pepper"
    ],
    "heartNotes": [
      "Peach Blossom",
      "Rose"
    ],
    "baseNotes": [
      "White Musk",
      "Woody Notes"
    ],
    "seasons": [
      "Spring",
      "Ac Venues",
      "Mild Winter",
      "Monsoon Evenings"
    ],
    "time": "Day / Evening",
    "sprays": "2-3 sprays",
    "occasions": [
      "Lunches",
      "Smart Casuals",
      "Dates",
      "Office",
      "Pujas"
    ],
    "featured": false,
    "families": [
      "Floral",
      "Fruity",
      "Spicy"
    ],
    "accords": [
      "Floral",
      "Fruity",
      "Musky",
      "Spicy"
    ]
  },
  {
    "id": "173",
    "slug": "carolina-herrera-ch-beauties",
    "brand": "Carolina Herrera",
    "name": "CH Beauties",
    "gender": "for women",
    "topNotes": [
      "Pear",
      "Green Mandarin"
    ],
    "heartNotes": [
      "Jasmine",
      "Neroli",
      "Peony"
    ],
    "baseNotes": [
      "Vanilla",
      "Amber",
      "Sandalwood"
    ],
    "seasons": [
      "Spring",
      "Summer",
      "Winter"
    ],
    "time": "Day / Evening",
    "sprays": "4-6",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal",
      "Office"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Citrus",
      "Floral"
    ],
    "accords": [
      "Floral",
      "Fresh",
      "Fruity",
      "Green"
    ]
  },
  {
    "id": "174",
    "slug": "carolina-herrera-ch-men",
    "brand": "Carolina Herrera",
    "name": "CH Men",
    "gender": "for men",
    "topNotes": [
      "Grass",
      "Bergamot",
      "Grapefruit"
    ],
    "heartNotes": [
      "Woodsy Notes",
      "Nutmeg",
      "Violet",
      "Saffron",
      "Jasmine"
    ],
    "baseNotes": [
      "Sugar",
      "Leather",
      "Vanilla",
      "Suede",
      "Amber",
      "Cashmirwood",
      "Sandalwood",
      "Oakmoss",
      "Vetiver"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer",
      "Winter"
    ],
    "time": "Day / Evening",
    "sprays": "4-6",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal",
      "Office"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Citrus",
      "Floral"
    ],
    "accords": [
      "Earthy",
      "Floral",
      "Fresh",
      "Green"
    ]
  },
  {
    "id": "175",
    "slug": "carolina-herrera-ch-privee",
    "brand": "Carolina Herrera",
    "name": "CH Privee",
    "gender": "for women",
    "topNotes": [
      "Not separately listed"
    ],
    "heartNotes": [
      "Not separately listed"
    ],
    "baseNotes": [
      "Not separately listed"
    ],
    "seasons": [
      "Ac Venues",
      "Winter",
      "Monsoon Evenings"
    ],
    "time": "Evening",
    "sprays": "2-3 sprays",
    "occasions": [
      "Celebrations",
      "Receptions",
      "Dinner Dates",
      "Formal Events"
    ],
    "featured": false,
    "families": [
      "Aromatic"
    ],
    "accords": [
      "Fresh"
    ]
  },
  {
    "id": "176",
    "slug": "carolina-herrera-good-girl-blush",
    "brand": "Carolina Herrera",
    "name": "Good Girl Blush",
    "gender": "for women",
    "topNotes": [
      "Bergamot",
      "Bitter Almond"
    ],
    "heartNotes": [
      "Peony",
      "Ylang-Ylang"
    ],
    "baseNotes": [
      "Vanilla",
      "Coumarin"
    ],
    "seasons": [
      "Spring",
      "Summer",
      "Monsoon"
    ],
    "time": "Day",
    "sprays": "3-4 sprays; 2-3 indoors",
    "occasions": [
      "Travel",
      "Casual Daytime Events",
      "College",
      "Office",
      "Brunch"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Citrus",
      "Floral"
    ],
    "accords": [
      "Floral",
      "Fresh",
      "Sweet",
      "Warm"
    ]
  },
  {
    "id": "177",
    "slug": "carolina-herrera-ch",
    "brand": "Carolina Herrera",
    "name": "CH",
    "gender": "for women",
    "topNotes": [
      "Tropical Fruit",
      "Bergamot",
      "Grapefruit",
      "Amalfi Lemon",
      "Water Notes"
    ],
    "heartNotes": [
      "Praline",
      "Cinnamon",
      "African Orange Flower",
      "Jasmine",
      "Tincture of Rose"
    ],
    "baseNotes": [
      "Suede",
      "Patchouli",
      "Cashmere Wood",
      "Sandalwood",
      "Musk",
      "Virginia Cedar",
      "Amber"
    ],
    "seasons": [
      "Spring",
      "Ac Venues",
      "Mild Winter",
      "Monsoon Evenings"
    ],
    "time": "Day / Evening",
    "sprays": "2-3 sprays",
    "occasions": [
      "Lunches",
      "Smart Casuals",
      "Dates",
      "Office",
      "Pujas"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Aquatic",
      "Citrus"
    ],
    "accords": [
      "Earthy",
      "Floral",
      "Fresh",
      "Leather"
    ]
  },
  {
    "id": "178",
    "slug": "carolina-herrera-good-girl",
    "brand": "Carolina Herrera",
    "name": "Good Girl",
    "gender": "for women",
    "topNotes": [
      "Almond",
      "Coffee",
      "Bergamot",
      "Lemon"
    ],
    "heartNotes": [
      "Tuberose",
      "Jasmine Sambac",
      "Orange Blossom",
      "Orris",
      "Bulgarian Rose"
    ],
    "baseNotes": [
      "Tonka Bean",
      "Cacao",
      "Vanilla",
      "Praline",
      "Sandalwood",
      "Musk",
      "Amber",
      "Cashmere Wood",
      "Cinnamon",
      "Patchouli",
      "Cedar"
    ],
    "seasons": [
      "Spring",
      "Ac Venues",
      "Mild Winter",
      "Monsoon Evenings"
    ],
    "time": "Day / Evening",
    "sprays": "2-3 sprays",
    "occasions": [
      "Lunches",
      "Smart Casuals",
      "Dates",
      "Office",
      "Pujas"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Citrus",
      "Floral"
    ],
    "accords": [
      "Earthy",
      "Floral",
      "Fresh",
      "Musky"
    ]
  },
  {
    "id": "179",
    "slug": "carolina-herrera-good-girl-supreme",
    "brand": "Carolina Herrera",
    "name": "Good Girl Supreme",
    "gender": "for women",
    "topNotes": [
      "Forest Fruits",
      "Egyptian Jasmine"
    ],
    "heartNotes": [
      "Tonka Bean",
      "Tuberose"
    ],
    "baseNotes": [
      "Vetiver"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Winter"
    ],
    "time": "Evening",
    "sprays": "2-3",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Floral",
      "Woody"
    ],
    "accords": [
      "Earthy",
      "Floral",
      "Sweet",
      "Warm"
    ]
  },
  {
    "id": "180",
    "slug": "carolina-herrera-very-good-girl",
    "brand": "Carolina Herrera",
    "name": "Very Good Girl",
    "gender": "for women",
    "topNotes": [
      "Litchi",
      "Red Currant"
    ],
    "heartNotes": [
      "Rose"
    ],
    "baseNotes": [
      "Vanilla",
      "Vetiver"
    ],
    "seasons": [
      "Ac Venues",
      "Winter",
      "Monsoon Evenings"
    ],
    "time": "Evening",
    "sprays": "2-3 sprays",
    "occasions": [
      "Celebrations",
      "Receptions",
      "Dinner Dates",
      "Formal Events"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Floral",
      "Fruity"
    ],
    "accords": [
      "Earthy",
      "Floral",
      "Fruity",
      "Sweet"
    ]
  },
  {
    "id": "181",
    "slug": "carolina-herrera-vip-black-red",
    "brand": "Carolina Herrera",
    "name": "VIP Black Red",
    "gender": "for men",
    "topNotes": [
      "Allspice",
      "Ginger",
      "Cardamom"
    ],
    "heartNotes": [
      "Absinthe"
    ],
    "baseNotes": [
      "Leather",
      "Guaiac Wood"
    ],
    "seasons": [
      "Winter"
    ],
    "time": "Evening",
    "sprays": "2-3",
    "occasions": [
      "Date Night",
      "Formal"
    ],
    "featured": false,
    "families": [
      "Leather",
      "Spicy",
      "Woody"
    ],
    "accords": [
      "Leather",
      "Spicy",
      "Woody"
    ]
  },
  {
    "id": "182",
    "slug": "carolina-herrera-212-vip-rose-red",
    "brand": "Carolina Herrera",
    "name": "212 VIP Rose Red",
    "gender": "for women",
    "topNotes": [
      "Liquor",
      "Tomato",
      "Raspberry"
    ],
    "heartNotes": [
      "Tiramisu",
      "Spices",
      "Bulgarian Rose"
    ],
    "baseNotes": [
      "Patchouli",
      "Musk",
      "Woody Notes"
    ],
    "seasons": [
      "Spring",
      "Ac Venues",
      "Mild Winter",
      "Monsoon Evenings"
    ],
    "time": "Day / Evening",
    "sprays": "2-3 sprays",
    "occasions": [
      "Lunches",
      "Smart Casuals",
      "Dates",
      "Office",
      "Pujas"
    ],
    "featured": false,
    "families": [
      "Floral",
      "Fruity",
      "Woody"
    ],
    "accords": [
      "Earthy",
      "Floral",
      "Fruity",
      "Musky"
    ]
  },
  {
    "id": "183",
    "slug": "cartier-baiser-vole",
    "brand": "Cartier",
    "name": "Baiser Vole",
    "gender": "for women",
    "topNotes": [
      "Lily",
      "Citruses"
    ],
    "heartNotes": [
      "Lily"
    ],
    "baseNotes": [
      "Green Lily",
      "Green Notes"
    ],
    "seasons": [
      "Spring",
      "Summer"
    ],
    "time": "Day",
    "sprays": "4-6",
    "occasions": [
      "Casual",
      "Office"
    ],
    "featured": false,
    "families": [
      "Citrus",
      "Floral"
    ],
    "accords": [
      "Floral",
      "Fresh",
      "Green"
    ]
  },
  {
    "id": "184",
    "slug": "cartier-oud-santal",
    "brand": "Cartier",
    "name": "Oud Santal",
    "gender": "for women and men",
    "topNotes": [
      "Not separately listed"
    ],
    "heartNotes": [
      "Not separately listed"
    ],
    "baseNotes": [
      "Not separately listed"
    ],
    "seasons": [
      "Spring",
      "Summer",
      "Monsoon"
    ],
    "time": "Day",
    "sprays": "3-4 sprays; 2-3 indoors",
    "occasions": [
      "Travel",
      "Casual Daytime Events",
      "College",
      "Office",
      "Brunch"
    ],
    "featured": false,
    "families": [
      "Aromatic"
    ],
    "accords": [
      "Fresh"
    ]
  },
  {
    "id": "185",
    "slug": "carven-ma-griffe",
    "brand": "Carven",
    "name": "Ma Griffe",
    "gender": "for women",
    "topNotes": [
      "Gardenia",
      "Bergamot",
      "Lemon"
    ],
    "heartNotes": [
      "Ylang-Ylang",
      "Jasmine",
      "Sandalwood",
      "Rose"
    ],
    "baseNotes": [
      "Vetiver",
      "Styrax",
      "Musk",
      "Tonka Bean"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer",
      "Winter"
    ],
    "time": "Day / Evening",
    "sprays": "4-6",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal",
      "Office"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Citrus",
      "Floral"
    ],
    "accords": [
      "Earthy",
      "Floral",
      "Fresh",
      "Musky"
    ]
  },
  {
    "id": "186",
    "slug": "cerruti-1881",
    "brand": "Cerruti",
    "name": "1881",
    "gender": "for women",
    "topNotes": [
      "Mimosa",
      "Iris",
      "Rose",
      "Freesia",
      "Violet",
      "Lily-of-the-Valley",
      "Jasmine",
      "Bergamot"
    ],
    "heartNotes": [
      "Chamomile",
      "Iris",
      "Narcissus",
      "Galbanum",
      "Geranium",
      "Coriander",
      "Jasmine",
      "Brazilian Rosewood",
      "Orange Blossom",
      "Tuberose"
    ],
    "baseNotes": [
      "Musk",
      "Sandalwood",
      "Cedar"
    ],
    "seasons": [
      "Spring",
      "Summer"
    ],
    "time": "Day",
    "sprays": "4-6",
    "occasions": [
      "Casual",
      "Office"
    ],
    "featured": false,
    "families": [
      "Citrus",
      "Floral",
      "Spicy"
    ],
    "accords": [
      "Floral",
      "Fresh",
      "Green",
      "Musky"
    ]
  },
  {
    "id": "187",
    "slug": "allure-homme-edition-blanche-allure-homme-sport-cologne",
    "brand": "Allure Homme Edition Blanche",
    "name": "Allure Homme Sport Cologne",
    "gender": "for men",
    "topNotes": [
      "Not separately listed"
    ],
    "heartNotes": [
      "Not separately listed"
    ],
    "baseNotes": [
      "Not separately listed  for men  NOTES"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer"
    ],
    "time": "Day",
    "sprays": "3-4",
    "occasions": [
      "Casual",
      "Office"
    ],
    "featured": false,
    "families": [
      "Aromatic"
    ],
    "accords": [
      "Fresh"
    ]
  },
  {
    "id": "188",
    "slug": "top-not-separately-listed-heart-not-separately-listed-base-not-separately-listed",
    "brand": "Archive",
    "name": "Base: Not separately listed",
    "gender": "for men",
    "topNotes": [
      "Lemon",
      "Bergamot",
      "Orange",
      "Grapefruit",
      "Mandarin Orange",
      "Aldehydes",
      "Neroli"
    ],
    "heartNotes": [
      "Fir Resin",
      "Spices",
      "Elemi resin"
    ],
    "baseNotes": [
      "White Musk",
      "Pepper",
      "Atlas Cedar",
      "Vetiver",
      "Tonka Bean"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer",
      "Winter"
    ],
    "time": "Day / Evening",
    "sprays": "4-6",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal",
      "Office"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Citrus",
      "Spicy"
    ],
    "accords": [
      "Balsamic",
      "Earthy",
      "Fresh",
      "Musky"
    ]
  },
  {
    "id": "189",
    "slug": "chanel-allure-homme-sport",
    "brand": "Chanel",
    "name": "Allure Homme Sport",
    "gender": "for men",
    "topNotes": [
      "Mandarin Orange",
      "Mint",
      "Cypress",
      "Sage"
    ],
    "heartNotes": [
      "Pepper"
    ],
    "baseNotes": [
      "Tonka Bean",
      "Musk",
      "Sandalwood",
      "Cedar"
    ],
    "seasons": [
      "Spring",
      "Ac Venues",
      "Mild Winter",
      "Monsoon Evenings"
    ],
    "time": "Day / Evening",
    "sprays": "2-3 sprays for men",
    "occasions": [
      "Lunches",
      "Smart Casuals",
      "Dates",
      "Office",
      "Pujas"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Aromatic",
      "Citrus"
    ],
    "accords": [
      "Fresh",
      "Herbal",
      "Musky",
      "Spicy"
    ]
  },
  {
    "id": "190",
    "slug": "evening-sprays-2-3-sprays",
    "brand": "Evening",
    "name": "Sprays: 2-3 sprays",
    "gender": "for men",
    "topNotes": [
      "Orange",
      "Sea Notes",
      "Aldehydes",
      "Blood Mandarin"
    ],
    "heartNotes": [
      "Pepper",
      "Neroli",
      "Cedar"
    ],
    "baseNotes": [
      "Vanilla",
      "Tonka Bean",
      "White Musk",
      "Amber",
      "Vetiver",
      "Elemi resin"
    ],
    "seasons": [
      "Ac Venues",
      "Winter",
      "Cool Nights"
    ],
    "time": "Evening",
    "sprays": "1-2 sprays VIDEH / MASTER PERFUME CATALOG",
    "occasions": [
      "Receptions",
      "Winter Weddings",
      "Festive Evenings",
      "Formal Dinners"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Aquatic",
      "Citrus"
    ],
    "accords": [
      "Balsamic",
      "Earthy",
      "Fresh",
      "Marine"
    ]
  },
  {
    "id": "191",
    "slug": "chanel-antaeus",
    "brand": "Chanel",
    "name": "Antaeus",
    "gender": "for men",
    "topNotes": [
      "Myrhh",
      "Clary Sage",
      "Coriander",
      "Bergamot",
      "Lime",
      "Amalfi Lemon"
    ],
    "heartNotes": [
      "Rose",
      "Thyme",
      "Basil",
      "Jasmine"
    ],
    "baseNotes": [
      "Castoreum",
      "Oakmoss",
      "Patchouli",
      "French labdanum"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer",
      "Winter"
    ],
    "time": "Day / Evening",
    "sprays": "4-6",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal",
      "Office"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Aromatic",
      "Citrus"
    ],
    "accords": [
      "Earthy",
      "Floral",
      "Fresh",
      "Herbal"
    ]
  },
  {
    "id": "192",
    "slug": "chanel-beige-eau-de-parfum",
    "brand": "Chanel",
    "name": "Beige Eau de Parfum",
    "gender": "for women",
    "topNotes": [
      "Not separately listed"
    ],
    "heartNotes": [
      "Not separately listed"
    ],
    "baseNotes": [
      "Not separately listed"
    ],
    "seasons": [
      "Ac Venues",
      "Winter",
      "Cool Nights"
    ],
    "time": "Evening",
    "sprays": "1-2 sprays Top: Not separately listed \u00e2\u20ac\u00a2 Heart: Not separately listed \u00e2\u20ac\u00a2 Base: Not separately listed",
    "occasions": [
      "Receptions",
      "Winter Weddings",
      "Festive Evenings",
      "Formal Dinners"
    ],
    "featured": false,
    "families": [
      "Aromatic"
    ],
    "accords": [
      "Fresh"
    ]
  },
  {
    "id": "193",
    "slug": "chanel-bleu-de-chanel",
    "brand": "Chanel",
    "name": "Bleu de Chanel",
    "gender": "for men",
    "topNotes": [
      "Grapefruit",
      "Lemon",
      "Mint",
      "Pink Pepper"
    ],
    "heartNotes": [
      "Ginger",
      "Nutmeg",
      "Jasmine",
      "Iso E Super"
    ],
    "baseNotes": [
      "Incense",
      "Vetiver",
      "Cedar",
      "Sandalwood",
      "Patchouli",
      "Labdanum",
      "White Musk"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer",
      "Winter"
    ],
    "time": "Day / Evening",
    "sprays": "4-6",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal",
      "Office"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Aromatic",
      "Citrus"
    ],
    "accords": [
      "Balsamic",
      "Earthy",
      "Floral",
      "Fresh"
    ]
  },
  {
    "id": "194",
    "slug": "chanel-bleu-de-chanel-194",
    "brand": "Chanel",
    "name": "Bleu de Chanel",
    "gender": "for men",
    "topNotes": [
      "Grapefruit",
      "Lemon",
      "Mint",
      "Pink Pepper"
    ],
    "heartNotes": [
      "Ginger",
      "Nutmeg",
      "Jasmine",
      "Iso E Super"
    ],
    "baseNotes": [
      "Incense",
      "Vetiver",
      "Cedar",
      "Sandalwood",
      "Patchouli",
      "Labdanum",
      "White Musk"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer",
      "Winter"
    ],
    "time": "Day / Evening",
    "sprays": "4-6",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal",
      "Office"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Aromatic",
      "Citrus"
    ],
    "accords": [
      "Balsamic",
      "Earthy",
      "Floral",
      "Fresh"
    ]
  },
  {
    "id": "195",
    "slug": "chanel-bleu-de-chanel-parfum",
    "brand": "Chanel",
    "name": "Bleu de Chanel Parfum",
    "gender": "for men",
    "topNotes": [
      "Lemon Zest",
      "Bergamot",
      "Mint",
      "Artemisia"
    ],
    "heartNotes": [
      "Lavender",
      "Pineapple",
      "Geranium",
      "Green Notes"
    ],
    "baseNotes": [
      "Sandalwood",
      "Cedar",
      "Amberwood",
      "Iso E Super",
      "Tonka Bean"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer",
      "Winter"
    ],
    "time": "Day / Evening",
    "sprays": "4-6",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal",
      "Office"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Aromatic",
      "Citrus"
    ],
    "accords": [
      "Floral",
      "Fresh",
      "Fruity",
      "Green"
    ]
  },
  {
    "id": "196",
    "slug": "chanel-bois-des-iles",
    "brand": "Chanel",
    "name": "Bois des Iles",
    "gender": "for women",
    "topNotes": [
      "Aldehydes",
      "Coriander",
      "Neroli",
      "Peach",
      "Bergamot",
      "Mandarin Orange"
    ],
    "heartNotes": [
      "Ylang-Ylang",
      "Iris",
      "Orris Root",
      "Jasmine",
      "Rose",
      "Lilac",
      "Lily-of-the-Valley"
    ],
    "baseNotes": [
      "Sandalwood",
      "Amber",
      "Benzoin",
      "Tonka Bean",
      "Opoponax",
      "Vanilla",
      "Musk",
      "Vetiver"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer",
      "Winter"
    ],
    "time": "Day / Evening",
    "sprays": "4-6",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal",
      "Office"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Citrus",
      "Floral"
    ],
    "accords": [
      "Earthy",
      "Floral",
      "Fresh",
      "Fruity"
    ]
  },
  {
    "id": "197",
    "slug": "chanel-boy-eau-de-parfum",
    "brand": "Chanel",
    "name": "Boy Eau de Parfum",
    "gender": "for women and men",
    "topNotes": [
      "Lavender",
      "Grapefruit",
      "Lemon"
    ],
    "heartNotes": [
      "Geranium",
      "Orange Blossom",
      "Rose"
    ],
    "baseNotes": [
      "White Musk",
      "Heliotrope",
      "Sandalwood",
      "Vanilla",
      "Moss",
      "Coumarin"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer"
    ],
    "time": "Day",
    "sprays": "4-6",
    "occasions": [
      "Brunch",
      "Casual Daytime Events",
      "College",
      "Office",
      "Travel"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Aromatic",
      "Citrus"
    ],
    "accords": [
      "Floral",
      "Fresh",
      "Herbal",
      "Musky"
    ]
  },
  {
    "id": "198",
    "slug": "chanel-chance-eau-fraiche",
    "brand": "Chanel",
    "name": "Chance Eau Fraiche",
    "gender": "for women",
    "topNotes": [
      "Lemon",
      "Cedar",
      "Citron"
    ],
    "heartNotes": [
      "Water Hyacinth",
      "Pink Pepper",
      "Jasmine"
    ],
    "baseNotes": [
      "White Musk",
      "Patchouli",
      "Vetiver",
      "Teak Wood",
      "Iris",
      "Amber"
    ],
    "seasons": [
      "Spring",
      "Summer",
      "Monsoon"
    ],
    "time": "Day",
    "sprays": "3-4 sprays; 2-3 indoors Sprays: 3-4 sprays; 2-3 indoors",
    "occasions": [
      "Travel",
      "Casual Daytime Events",
      "College",
      "Office",
      "Brunch"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Aquatic",
      "Citrus"
    ],
    "accords": [
      "Earthy",
      "Floral",
      "Fresh",
      "Marine"
    ]
  },
  {
    "id": "199",
    "slug": "chanel-chance-eau-tendre",
    "brand": "Chanel",
    "name": "Chance Eau Tendre",
    "gender": "for women",
    "topNotes": [
      "Quince",
      "Grapefruit"
    ],
    "heartNotes": [
      "Hyacinth",
      "Jasmine"
    ],
    "baseNotes": [
      "Musk",
      "Iris",
      "Virginia Cedar",
      "Amber"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer"
    ],
    "time": "Day",
    "sprays": "4-6",
    "occasions": [
      "Brunch",
      "Casual Daytime Events",
      "College",
      "Office",
      "Travel"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Citrus",
      "Floral"
    ],
    "accords": [
      "Floral",
      "Fresh",
      "Musky",
      "Powdery"
    ]
  },
  {
    "id": "200",
    "slug": "chanel-les-exclusifs-de-chanel-1932",
    "brand": "Chanel",
    "name": "Les Exclusifs de Chanel 1932",
    "gender": "for women",
    "topNotes": [
      "Aldehydes",
      "Neroli",
      "Bergamot"
    ],
    "heartNotes": [
      "Jasmine",
      "Lilac",
      "Ylang-Ylang",
      "Rose",
      "Carnation"
    ],
    "baseNotes": [
      "Orris Root",
      "Musk",
      "Ambrette (Musk Mallow)",
      "Vetiver",
      "Sandalwood",
      "Opoponax",
      "Vanila",
      "Coumarin",
      "Incense"
    ],
    "seasons": [
      "Spring",
      "Summer",
      "Monsoon"
    ],
    "time": "Day",
    "sprays": "3-4 sprays; 2-3 indoors Sprays: 3-4 sprays; 2-3 indoors VIDEH / MASTER PERFUME CATALOG",
    "occasions": [
      "Travel",
      "Casual Daytime Events",
      "College",
      "Office",
      "Brunch"
    ],
    "featured": true,
    "families": [
      "Amber/Oriental",
      "Citrus",
      "Floral"
    ],
    "accords": [
      "Balsamic",
      "Earthy",
      "Floral",
      "Fresh"
    ]
  },
  {
    "id": "201",
    "slug": "chanel-not-stated",
    "brand": "Chanel",
    "name": "Not stated",
    "gender": "Unisex",
    "topNotes": [
      "NA"
    ],
    "heartNotes": [
      "NA"
    ],
    "baseNotes": [
      "NA"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer"
    ],
    "time": "Day",
    "sprays": "3-4",
    "occasions": [
      "Brunch",
      "Casual Daytime Events",
      "College",
      "Office",
      "Travel"
    ],
    "featured": false,
    "families": [
      "Aromatic"
    ],
    "accords": [
      "Fresh"
    ]
  },
  {
    "id": "202",
    "slug": "chanel-coco-parfum",
    "brand": "Chanel",
    "name": "Coco Parfum",
    "gender": "for women",
    "topNotes": [
      "Bulgarian Rose",
      "Coriander",
      "Peach",
      "Jasmine",
      "Mandarin Orange"
    ],
    "heartNotes": [
      "Rose",
      "Cloves",
      "Mimosa",
      "Orange Blossom",
      "Clover"
    ],
    "baseNotes": [
      "Amber",
      "Opoponax",
      "Civet",
      "Sandalwood",
      "Labdanum",
      "Vanilla",
      "Tonka Bean"
    ],
    "seasons": [
      "Ac Venues",
      "Winter",
      "Cool Nights"
    ],
    "time": "Evening",
    "sprays": "3-4 sprays; 2-3 indoors Sprays: 1-2 sprays",
    "occasions": [
      "Receptions",
      "Winter Weddings",
      "Festive Evenings",
      "Formal Dinners"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Citrus",
      "Floral"
    ],
    "accords": [
      "Floral",
      "Fresh",
      "Fruity",
      "Leather"
    ]
  },
  {
    "id": "203",
    "slug": "chanel-coco-mademoiselle",
    "brand": "Chanel",
    "name": "Coco Mademoiselle",
    "gender": "for women",
    "topNotes": [
      "Orange",
      "Mandarin Orange",
      "Bergamot",
      "Orange Blossom"
    ],
    "heartNotes": [
      "Turkish Rose",
      "Jasmine",
      "Mimosa",
      "Ylang-Ylang"
    ],
    "baseNotes": [
      "Patchouli",
      "White Musk",
      "Vanilla",
      "Vetiver",
      "Tonka Bean",
      "Opoponax"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer",
      "Winter"
    ],
    "time": "Day / Evening",
    "sprays": "4-6",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal",
      "Office"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Citrus",
      "Floral"
    ],
    "accords": [
      "Earthy",
      "Floral",
      "Fresh",
      "Musky"
    ]
  },
  {
    "id": "204",
    "slug": "chanel-coco-noir",
    "brand": "Chanel",
    "name": "Coco Noir",
    "gender": "for women",
    "topNotes": [
      "Grapefruit",
      "Bergamot",
      "Orange"
    ],
    "heartNotes": [
      "Rose",
      "Geranium",
      "Jasmine",
      "Narcissus",
      "Peach"
    ],
    "baseNotes": [
      "Patchouli",
      "Sandalwood",
      "Olibanum",
      "Tonka Bean",
      "Vanille",
      "White Musk",
      "Cloves",
      "Benzoin"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer",
      "Winter"
    ],
    "time": "Day / Evening",
    "sprays": "4-6",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal",
      "Office"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Citrus",
      "Floral"
    ],
    "accords": [
      "Earthy",
      "Floral",
      "Fresh",
      "Fruity"
    ]
  },
  {
    "id": "205",
    "slug": "chanel-coromandel-parfum",
    "brand": "Chanel",
    "name": "Coromandel Parfum",
    "gender": "for women and men",
    "topNotes": [
      "Bitter Orange",
      "Citruses",
      "Neroli"
    ],
    "heartNotes": [
      "Patchouli",
      "Orris Root",
      "Rose",
      "Jasmine"
    ],
    "baseNotes": [
      "Benzoin",
      "Olibanum",
      "Labdanum"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer",
      "Winter"
    ],
    "time": "Day / Evening",
    "sprays": "4-6",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal",
      "Office"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Citrus",
      "Floral"
    ],
    "accords": [
      "Earthy",
      "Floral",
      "Fresh",
      "Warm"
    ]
  },
  {
    "id": "206",
    "slug": "chanel-cuir-de-russie-parfum",
    "brand": "Chanel",
    "name": "Cuir de Russie Parfum",
    "gender": "for women and men",
    "topNotes": [
      "Not separately listed"
    ],
    "heartNotes": [
      "Not separately listed"
    ],
    "baseNotes": [
      "Not separately listed"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer"
    ],
    "time": "Day",
    "sprays": "3-4",
    "occasions": [
      "Casual",
      "Office"
    ],
    "featured": false,
    "families": [
      "Aromatic"
    ],
    "accords": [
      "Fresh"
    ]
  },
  {
    "id": "207",
    "slug": "chanel-egoiste",
    "brand": "Chanel",
    "name": "Egoiste",
    "gender": "for men",
    "topNotes": [
      "Brazilian Rosewood",
      "Coriander",
      "Mahogany",
      "Sicilian Mandarin"
    ],
    "heartNotes": [
      "Cinnamon",
      "Damask Rose",
      "Carnation"
    ],
    "baseNotes": [
      "Sandalwood",
      "Tobacco",
      "Vanilla",
      "Leather",
      "Amber",
      "Ambrette (Musk Mallow)"
    ],
    "seasons": [
      "Ac Venues",
      "Cool Nights",
      "Winter"
    ],
    "time": "Evening",
    "sprays": "4-6",
    "occasions": [
      "Festive Evenings",
      "Formal Dinners",
      "Receptions",
      "Winter Weddings"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Citrus",
      "Floral"
    ],
    "accords": [
      "Floral",
      "Fresh",
      "Leather",
      "Musky"
    ]
  },
  {
    "id": "208",
    "slug": "chanel-egoiste-platinum",
    "brand": "Chanel",
    "name": "Egoiste Platinum",
    "gender": "for men",
    "topNotes": [
      "Lavender",
      "Rosemary",
      "Neroli",
      "Petitgrain"
    ],
    "heartNotes": [
      "Geranium",
      "Clary Sage",
      "Galbanum",
      "Jasmine"
    ],
    "baseNotes": [
      "Oakmoss",
      "Vetiver",
      "Cedar",
      "Sandalwood",
      "Amber"
    ],
    "seasons": [
      "Spring",
      "Summer",
      "Monsoon"
    ],
    "time": "Day",
    "sprays": "1-2 sprays Sprays: 3-4 sprays; 2-3 indoors",
    "occasions": [
      "Travel",
      "Casual Daytime Events",
      "College",
      "Office",
      "Brunch"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Aromatic",
      "Citrus"
    ],
    "accords": [
      "Earthy",
      "Floral",
      "Fresh",
      "Green"
    ]
  },
  {
    "id": "209",
    "slug": "chanel-gabrielle-essence",
    "brand": "Chanel",
    "name": "Gabrielle Essence",
    "gender": "for women",
    "topNotes": [
      "Citruses",
      "Peach",
      "Red Fruits",
      "Petitgrain",
      "Black Currant"
    ],
    "heartNotes": [
      "White Flowers",
      "Tuberose",
      "Ylang-Ylang",
      "Jasmine",
      "Orange Blossom",
      "Coconut"
    ],
    "baseNotes": [
      "Musk",
      "Vanilla",
      "Sandalwood"
    ],
    "seasons": [
      "Spring",
      "Summer",
      "Monsoon"
    ],
    "time": "Day",
    "sprays": "3-4 sprays; 2-3 indoors",
    "occasions": [
      "Travel",
      "Casual Daytime Events",
      "College",
      "Office",
      "Brunch"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Citrus",
      "Floral"
    ],
    "accords": [
      "Floral",
      "Fresh",
      "Fruity",
      "Musky"
    ]
  },
  {
    "id": "210",
    "slug": "chanel-gabrielle",
    "brand": "Chanel",
    "name": "Gabrielle",
    "gender": "for women",
    "topNotes": [
      "Grapefruit",
      "Mandarin Orange",
      "Black Currant"
    ],
    "heartNotes": [
      "Orange Blossom",
      "Jasmine",
      "Ylang-Ylang",
      "Tuberose",
      "Lily-of-the- Valley",
      "Pear",
      "Pink Pepper"
    ],
    "baseNotes": [
      "Musk",
      "Sandalwood",
      "Cashmeran",
      "Orris"
    ],
    "seasons": [
      "Spring",
      "Ac Venues",
      "Mild Winter",
      "Monsoon Evenings"
    ],
    "time": "Day / Evening",
    "sprays": "2-3 sprays VIDEH / MASTER PERFUME CATALOG",
    "occasions": [
      "Lunches",
      "Smart Casuals",
      "Dates",
      "Office",
      "Pujas"
    ],
    "featured": false,
    "families": [
      "Citrus",
      "Floral",
      "Fruity"
    ],
    "accords": [
      "Floral",
      "Fresh",
      "Fruity",
      "Musky"
    ]
  },
  {
    "id": "211",
    "slug": "chanel-gardenia",
    "brand": "Chanel",
    "name": "Gardenia",
    "gender": "for women",
    "topNotes": [
      "Orange Blossom",
      "Green Notes"
    ],
    "heartNotes": [
      "Gardenia",
      "Tuberose",
      "Jasmine",
      "Fruity Notes"
    ],
    "baseNotes": [
      "Coconut",
      "Musk",
      "Vanilla",
      "Sandalwood",
      "Vetiver",
      "Patchouli"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer",
      "Winter"
    ],
    "time": "Day / Evening",
    "sprays": "4-6",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal",
      "Office"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Citrus",
      "Floral"
    ],
    "accords": [
      "Earthy",
      "Floral",
      "Fresh",
      "Fruity"
    ]
  },
  {
    "id": "212",
    "slug": "chanel-la-pausa-eau-de-parfum",
    "brand": "Chanel",
    "name": "La Pausa Eau de Parfum",
    "gender": "for women",
    "topNotes": [
      "Not separately listed"
    ],
    "heartNotes": [
      "Not separately listed"
    ],
    "baseNotes": [
      "Not separately listed"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer"
    ],
    "time": "Day",
    "sprays": "3-4",
    "occasions": [
      "Casual",
      "Office"
    ],
    "featured": false,
    "families": [
      "Aromatic"
    ],
    "accords": [
      "Fresh"
    ]
  },
  {
    "id": "213",
    "slug": "chanel-le-lion-eau-de-parfum",
    "brand": "Chanel",
    "name": "Le Lion Eau de Parfum",
    "gender": "for women and men",
    "topNotes": [
      "Bergamot",
      "Lemon"
    ],
    "heartNotes": [
      "Labdanum",
      "Amber"
    ],
    "baseNotes": [
      "Patchouli",
      "Madagascar Vanilla",
      "Musk",
      "Sandalwood"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer",
      "Winter"
    ],
    "time": "Day / Evening",
    "sprays": "4-6",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal",
      "Office"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Citrus",
      "Woody"
    ],
    "accords": [
      "Earthy",
      "Fresh",
      "Musky",
      "Sweet"
    ]
  },
  {
    "id": "214",
    "slug": "chanel-misia-eau-de-parfum",
    "brand": "Chanel",
    "name": "Misia Eau de Parfum",
    "gender": "for women",
    "topNotes": [
      "Aldehydes",
      "Litchi"
    ],
    "heartNotes": [
      "Raspberry",
      "Turkish Rose",
      "Grasse Rose",
      "Peach"
    ],
    "baseNotes": [
      "Violet",
      "Powdery Notes",
      "Orris Root",
      "Leather",
      "Vanilla",
      "Tonka Bean",
      "Benzoin"
    ],
    "seasons": [
      "Spring",
      "Winter"
    ],
    "time": "Evening",
    "sprays": "2-3",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Floral",
      "Fruity"
    ],
    "accords": [
      "Floral",
      "Fruity",
      "Green",
      "Leather"
    ]
  },
  {
    "id": "215",
    "slug": "chanel-chanel-no-5-eau-de-parfum",
    "brand": "Chanel",
    "name": "Chanel No 5 Eau de Parfum",
    "gender": "for women",
    "topNotes": [
      "Green Notes",
      "Bergamot",
      "Neroli"
    ],
    "heartNotes": [
      "Iris",
      "Rose",
      "Narcissus",
      "Lily-of-the-Valley",
      "Ylang-Ylang"
    ],
    "baseNotes": [
      "oak moss",
      "Vetiver",
      "Leather",
      "Sandalwood"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer",
      "Winter"
    ],
    "time": "Day / Evening",
    "sprays": "4-6",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal",
      "Office"
    ],
    "featured": false,
    "families": [
      "Citrus",
      "Floral",
      "Leather"
    ],
    "accords": [
      "Earthy",
      "Floral",
      "Fresh",
      "Green"
    ]
  },
  {
    "id": "216",
    "slug": "archive-fragrance-216",
    "brand": "Archive",
    "name": "Fragrance 216",
    "gender": "for women",
    "topNotes": [
      "Aldehydes",
      "Ylang-Ylang",
      "Neroli",
      "Bergamot",
      "Peach"
    ],
    "heartNotes": [
      "Iris",
      "Jasmine",
      "Rose",
      "Lily-of-the-Valley"
    ],
    "baseNotes": [
      "Sandalwood",
      "Vanilla",
      "Oakmoss",
      "Vetiver",
      "Patchouli"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer"
    ],
    "time": "Day",
    "sprays": "4-6",
    "occasions": [
      "Brunch",
      "Casual Daytime Events",
      "College",
      "Office",
      "Travel"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Citrus",
      "Floral"
    ],
    "accords": [
      "Earthy",
      "Floral",
      "Fresh",
      "Fruity"
    ]
  },
  {
    "id": "217",
    "slug": "chanel-chanel-no-5-parfum",
    "brand": "Chanel",
    "name": "Chanel No 5 Parfum",
    "gender": "for women",
    "topNotes": [
      "Aldehydes",
      "Ylang-Ylang",
      "Neroli",
      "Bergamot",
      "Lemon"
    ],
    "heartNotes": [
      "Iris",
      "Jasmine",
      "Rose",
      "Orris Root",
      "Lily-of-the-Valley"
    ],
    "baseNotes": [
      "Civet",
      "Musk",
      "Sandalwood",
      "Amber",
      "Moss",
      "Vanilla",
      "Vetiver",
      "Patchouli"
    ],
    "seasons": [
      "Spring",
      "Ac Venues",
      "Mild Winter",
      "Monsoon Evenings"
    ],
    "time": "Day / Evening",
    "sprays": "2-3 sprays",
    "occasions": [
      "Lunches",
      "Smart Casuals",
      "Dates",
      "Office",
      "Pujas"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Citrus",
      "Floral"
    ],
    "accords": [
      "Earthy",
      "Floral",
      "Fresh",
      "Leather"
    ]
  },
  {
    "id": "218",
    "slug": "chanel-chanel-no-5-l-eau",
    "brand": "Chanel",
    "name": "Chanel No 5 L Eau",
    "gender": "for women",
    "topNotes": [
      "Aldehydes",
      "Lemon",
      "Neroli",
      "Mandarin Orange",
      "Bergamot",
      "Orange",
      "Lime"
    ],
    "heartNotes": [
      "Ylang-Ylang",
      "Jasmine",
      "May Rose"
    ],
    "baseNotes": [
      "White Musk",
      "Orris Root",
      "Cedar",
      "Vanila"
    ],
    "seasons": [
      "Spring",
      "Summer",
      "Monsoon"
    ],
    "time": "Day",
    "sprays": "3-4 sprays; 2-3 indoors",
    "occasions": [
      "Travel",
      "Casual Daytime Events",
      "College",
      "Office",
      "Brunch"
    ],
    "featured": false,
    "families": [
      "Citrus",
      "Floral",
      "Woody"
    ],
    "accords": [
      "Floral",
      "Fresh",
      "Musky",
      "Woody"
    ]
  },
  {
    "id": "219",
    "slug": "chanel-sycomore-parfum",
    "brand": "Chanel",
    "name": "Sycomore Parfum",
    "gender": "for women and men",
    "topNotes": [
      "Not separately listed"
    ],
    "heartNotes": [
      "Not separately listed"
    ],
    "baseNotes": [
      "Not separately listed"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer"
    ],
    "time": "Day",
    "sprays": "3-4",
    "occasions": [
      "Casual",
      "Office"
    ],
    "featured": false,
    "families": [
      "Aromatic"
    ],
    "accords": [
      "Fresh"
    ]
  },
  {
    "id": "220",
    "slug": "chopard-happy-chopard-lemon-dulci",
    "brand": "Chopard",
    "name": "Happy Chopard Lemon Dulci",
    "gender": "for women",
    "topNotes": [
      "Lemon",
      "Bergamot",
      "Mandarin Orange",
      "Shiso",
      "Ginger"
    ],
    "heartNotes": [
      "Orange Blossom",
      "Apple",
      "Mango",
      "Cucumber"
    ],
    "baseNotes": [
      "Mint",
      "Woody Notes"
    ],
    "seasons": [
      "Spring",
      "Ac Venues",
      "Mild Winter",
      "Monsoon Evenings"
    ],
    "time": "Day / Evening",
    "sprays": "2-3 sprays",
    "occasions": [
      "Lunches",
      "Smart Casuals",
      "Dates",
      "Office",
      "Pujas"
    ],
    "featured": false,
    "families": [
      "Aromatic",
      "Citrus",
      "Floral"
    ],
    "accords": [
      "Floral",
      "Fresh",
      "Fruity",
      "Herbal"
    ]
  },
  {
    "id": "221",
    "slug": "chopard-chopard-rose-malaki",
    "brand": "Chopard",
    "name": "Chopard Rose Malaki",
    "gender": "for women and men",
    "topNotes": [
      "Saffron"
    ],
    "heartNotes": [
      "Damask Rose"
    ],
    "baseNotes": [
      "Atlas Cedar"
    ],
    "seasons": [
      "Spring",
      "Winter"
    ],
    "time": "Evening",
    "sprays": "3-4",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal"
    ],
    "featured": false,
    "families": [
      "Floral",
      "Spicy",
      "Woody"
    ],
    "accords": [
      "Floral",
      "Spicy",
      "Woody"
    ]
  },
  {
    "id": "222",
    "slug": "clive-christian-blonde-amber",
    "brand": "Clive Christian",
    "name": "Blonde Amber",
    "gender": "for women and men",
    "topNotes": [
      "Rum",
      "Olibanum",
      "Bitter Orange",
      "Cardamom",
      "Pink Pepper",
      "Ginger",
      "Bergamot",
      "Grapefruit"
    ],
    "heartNotes": [
      "Dried Fruits",
      "White Tobacco",
      "Sandalwood",
      "Tuberose",
      "Saffron",
      "Osmanthus",
      "Orris",
      "Jasmine"
    ],
    "baseNotes": [
      "Tonka Bean",
      "Myrrh",
      "Vanilla",
      "Labdanum"
    ],
    "seasons": [
      "Spring",
      "Summer",
      "Winter"
    ],
    "time": "Day / Evening",
    "sprays": "4-6",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal",
      "Office"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Citrus",
      "Floral"
    ],
    "accords": [
      "Balsamic",
      "Floral",
      "Fresh",
      "Spicy"
    ]
  },
  {
    "id": "223",
    "slug": "coach-coach-blue",
    "brand": "Coach",
    "name": "Coach Blue",
    "gender": "for men",
    "topNotes": [
      "Lime",
      "Absinthe"
    ],
    "heartNotes": [
      "Ozonic notes",
      "Black Pepper"
    ],
    "baseNotes": [
      "Cedar",
      "Amber"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer"
    ],
    "time": "Day",
    "sprays": "4-6",
    "occasions": [
      "Brunch",
      "Casual Daytime Events",
      "College",
      "Office",
      "Travel"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Citrus",
      "Spicy"
    ],
    "accords": [
      "Fresh",
      "Spicy",
      "Warm",
      "Woody"
    ]
  },
  {
    "id": "224",
    "slug": "comme-des-garcons-comme-des-garcons-2-man",
    "brand": "Comme Des Garcons",
    "name": "Comme des Garcons 2 Man",
    "gender": "for men",
    "topNotes": [
      "Aldehydes",
      "Nutmeg",
      "Caraway",
      "Kumquat",
      "Mint"
    ],
    "heartNotes": [
      "Vetiver",
      "Saffron",
      "Iris"
    ],
    "baseNotes": [
      "Incense",
      "Mahogany",
      "Leather"
    ],
    "seasons": [
      "Ac Venues",
      "Winter",
      "Cool Nights"
    ],
    "time": "Evening",
    "sprays": "3-4 sprays; 2-3 indoors Sprays: 1-2 sprays",
    "occasions": [
      "Receptions",
      "Winter Weddings",
      "Festive Evenings",
      "Formal Dinners"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Aromatic",
      "Floral"
    ],
    "accords": [
      "Balsamic",
      "Earthy",
      "Floral",
      "Herbal"
    ]
  },
  {
    "id": "225",
    "slug": "comme-des-garcons-incense-avignon",
    "brand": "Comme Des Garcons",
    "name": "Incense Avignon",
    "gender": "for women and men",
    "topNotes": [
      "Not separately listed"
    ],
    "heartNotes": [
      "Not separately listed"
    ],
    "baseNotes": [
      "Not separately listed"
    ],
    "seasons": [
      "Ac Venues",
      "Winter",
      "Monsoon Evenings"
    ],
    "time": "Evening",
    "sprays": "2-3 sprays Comme des Garcons White for women and men",
    "occasions": [
      "Celebrations",
      "Receptions",
      "Dinner Dates",
      "Formal Events"
    ],
    "featured": false,
    "families": [
      "Aromatic"
    ],
    "accords": [
      "Fresh"
    ]
  },
  {
    "id": "226",
    "slug": "sprays-2-3-sprays-comme-des-garcons-white",
    "brand": "Sprays: 2-3 Sprays",
    "name": "Comme des Garcons White",
    "gender": "for women and men",
    "topNotes": [
      "Not separately listed"
    ],
    "heartNotes": [
      "Not separately listed"
    ],
    "baseNotes": [
      "Not separately listed"
    ],
    "seasons": [
      "Spring",
      "Ac Venues",
      "Mild Winter",
      "Monsoon Evenings"
    ],
    "time": "Day / Evening",
    "sprays": "2-3 sprays",
    "occasions": [
      "Lunches",
      "Smart Casuals",
      "Dates",
      "Office",
      "Pujas"
    ],
    "featured": false,
    "families": [
      "Aromatic"
    ],
    "accords": [
      "Fresh"
    ]
  },
  {
    "id": "227",
    "slug": "comme-des-garcons-wonderwood",
    "brand": "Comme Des Garcons",
    "name": "Wonderwood",
    "gender": "for men",
    "topNotes": [
      "Not separately listed"
    ],
    "heartNotes": [
      "Not separately listed"
    ],
    "baseNotes": [
      "Not separately listed"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer"
    ],
    "time": "Day",
    "sprays": "3-4",
    "occasions": [
      "Casual",
      "Office"
    ],
    "featured": false,
    "families": [
      "Aromatic"
    ],
    "accords": [
      "Fresh"
    ]
  },
  {
    "id": "228",
    "slug": "costume-national-scent-intense",
    "brand": "Costume National",
    "name": "Scent Intense",
    "gender": "for women and men",
    "topNotes": [
      "Tea",
      "Cinnamon",
      "Apple",
      "Bergamot"
    ],
    "heartNotes": [
      "Hibiscus",
      "Jasmine",
      "Davana"
    ],
    "baseNotes": [
      "Crystal Amber",
      "Amber",
      "Patchouli",
      "Sandalwood",
      "Leather",
      "Olibanum"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer",
      "Winter"
    ],
    "time": "Day / Evening",
    "sprays": "4-6",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal",
      "Office"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Citrus",
      "Floral"
    ],
    "accords": [
      "Earthy",
      "Floral",
      "Fresh",
      "Fruity"
    ]
  },
  {
    "id": "229",
    "slug": "creed-men",
    "brand": "Creed",
    "name": "Men",
    "gender": "Unisex",
    "topNotes": [
      "Bergamot; cardamom; lavender; artemisia"
    ],
    "heartNotes": [
      "Cinnamon; cedar; iris; tobacco"
    ],
    "baseNotes": [
      "Vanilla; musk; sandalwood; amber"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer",
      "Winter"
    ],
    "time": "Day / Evening",
    "sprays": "4-6",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal",
      "Office"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Aromatic",
      "Citrus"
    ],
    "accords": [
      "Floral",
      "Fresh",
      "Herbal",
      "Musky"
    ]
  },
  {
    "id": "230",
    "slug": "archive-acqua-fiorentina",
    "brand": "Archive",
    "name": "Acqua Fiorentina",
    "gender": "for women",
    "topNotes": [
      "Apple",
      "Plum"
    ],
    "heartNotes": [
      "Bergamot",
      "Sicilian Bergamot",
      "Lemon",
      "Pear",
      "Rose"
    ],
    "baseNotes": [
      "White Grapefruit",
      "Virginia Cedar",
      "Sandalwood"
    ],
    "seasons": [
      "Spring",
      "Ac Venues",
      "Mild Winter",
      "Monsoon Evenings"
    ],
    "time": "Day / Evening",
    "sprays": "2-3 sprays",
    "occasions": [
      "Lunches",
      "Smart Casuals",
      "Dates",
      "Office",
      "Pujas"
    ],
    "featured": false,
    "families": [
      "Citrus",
      "Floral",
      "Fruity"
    ],
    "accords": [
      "Floral",
      "Fresh",
      "Fruity",
      "Woody"
    ]
  },
  {
    "id": "231",
    "slug": "creed-aventus",
    "brand": "Creed",
    "name": "Aventus",
    "gender": "for men",
    "topNotes": [
      "Bergamot",
      "Black Currant",
      "Apple",
      "Lemon",
      "Pink Pepper"
    ],
    "heartNotes": [
      "Pineapple",
      "Patchouli",
      "Moroccan Jasmine"
    ],
    "baseNotes": [
      "Birch",
      "Musk",
      "oak moss",
      "Ambroxan",
      "Cedarwood"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer"
    ],
    "time": "Day",
    "sprays": "4-6",
    "occasions": [
      "Casual",
      "Formal",
      "Office"
    ],
    "featured": false,
    "families": [
      "Citrus",
      "Floral",
      "Fruity"
    ],
    "accords": [
      "Earthy",
      "Floral",
      "Fresh",
      "Fruity"
    ]
  },
  {
    "id": "232",
    "slug": "creed-aventus-cologne",
    "brand": "Creed",
    "name": "Aventus Cologne",
    "gender": "for men",
    "topNotes": [
      "Mandarin Orange",
      "Ginger",
      "Pink Pepper"
    ],
    "heartNotes": [
      "Vetiver",
      "Patchouli",
      "Sandalwood"
    ],
    "baseNotes": [
      "Musk",
      "Birch",
      "Tonka Bean",
      "Styrax"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer",
      "Winter"
    ],
    "time": "Day / Evening",
    "sprays": "4-6",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal",
      "Office"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Citrus",
      "Spicy"
    ],
    "accords": [
      "Earthy",
      "Fresh",
      "Musky",
      "Spicy"
    ]
  },
  {
    "id": "233",
    "slug": "creed-aventus-233",
    "brand": "Creed",
    "name": "Aventus",
    "gender": "for men",
    "topNotes": [
      "Bergamot",
      "Black Currant",
      "Apple",
      "Lemon",
      "Pink Pepper"
    ],
    "heartNotes": [
      "Pineapple",
      "Patchouli",
      "Moroccan Jasmine"
    ],
    "baseNotes": [
      "Birch",
      "Musk",
      "oak moss",
      "Ambroxan",
      "Cedarwood"
    ],
    "seasons": [
      "Spring",
      "Ac Venues",
      "Mild Winter",
      "Monsoon Evenings"
    ],
    "time": "Day / Evening",
    "sprays": "2-3 sprays",
    "occasions": [
      "Lunches",
      "Smart Casuals",
      "Dates",
      "Office",
      "Pujas"
    ],
    "featured": false,
    "families": [
      "Citrus",
      "Floral",
      "Fruity"
    ],
    "accords": [
      "Earthy",
      "Floral",
      "Fresh",
      "Fruity"
    ]
  },
  {
    "id": "234",
    "slug": "creed-bois-du-portugal",
    "brand": "Creed",
    "name": "Bois du Portugal",
    "gender": "for men",
    "topNotes": [
      "Bergamot"
    ],
    "heartNotes": [
      "Lavender"
    ],
    "baseNotes": [
      "Sandalwood",
      "Cedar",
      "Vetiver",
      "Ambergris"
    ],
    "seasons": [
      "Spring",
      "Summer",
      "Monsoon"
    ],
    "time": "Day",
    "sprays": "3-4 sprays; 2-3 indoors",
    "occasions": [
      "Travel",
      "Casual Daytime Events",
      "College",
      "Office",
      "Brunch"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Aromatic",
      "Citrus"
    ],
    "accords": [
      "Earthy",
      "Fresh",
      "Herbal",
      "Warm"
    ]
  },
  {
    "id": "235",
    "slug": "creed-carmina",
    "brand": "Creed",
    "name": "Carmina",
    "gender": "for women",
    "topNotes": [
      "Black Cherry",
      "Saffron",
      "Pink Pepper"
    ],
    "heartNotes": [
      "May Rose",
      "Peony",
      "Violet",
      "Cashmere Wood"
    ],
    "baseNotes": [
      "Musk",
      "Ambroxan",
      "Myrhh",
      "Frankincense"
    ],
    "seasons": [
      "Spring",
      "Winter"
    ],
    "time": "Evening",
    "sprays": "2-3",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Floral",
      "Fruity"
    ],
    "accords": [
      "Balsamic",
      "Floral",
      "Fruity",
      "Musky"
    ]
  },
  {
    "id": "236",
    "slug": "creed-centaurus",
    "brand": "Creed",
    "name": "Centaurus",
    "gender": "Unisex",
    "topNotes": [
      "Cinnamon; tobacco; cardamom; pink pepper"
    ],
    "heartNotes": [
      "Sandalwood; patchouli; heliotrope; geranium; jasmine"
    ],
    "baseNotes": [
      "Bourbon vanilla; benzoin; Tolu balsam; tonka bean; ambroxan"
    ],
    "seasons": [
      "Spring",
      "Ac Venues",
      "Mild Winter",
      "Monsoon Evenings"
    ],
    "time": "Day / Evening",
    "sprays": "2-3 sprays",
    "occasions": [
      "Lunches",
      "Smart Casuals",
      "Dates",
      "Office",
      "Pujas"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Floral",
      "Gourmand"
    ],
    "accords": [
      "Earthy",
      "Floral",
      "Spicy",
      "Sweet"
    ]
  },
  {
    "id": "237",
    "slug": "creed-delphinus",
    "brand": "Creed",
    "name": "Delphinus",
    "gender": "Unisex",
    "topNotes": [
      "Almond; incense; pink pepper; black pepper"
    ],
    "heartNotes": [
      "Orris; heliotrope; orchid"
    ],
    "baseNotes": [
      "Bourbon vanilla; tonka bean; leather; amberwood; patchouli"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Winter"
    ],
    "time": "Evening",
    "sprays": "2-3",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Floral",
      "Gourmand"
    ],
    "accords": [
      "Balsamic",
      "Earthy",
      "Floral",
      "Leather"
    ]
  },
  {
    "id": "238",
    "slug": "creed-erolfa",
    "brand": "Creed",
    "name": "Erolfa",
    "gender": "for men",
    "topNotes": [
      "Lime",
      "Bergamot",
      "Melon",
      "Green Notes",
      "Lemon",
      "Violet",
      "Caraway"
    ],
    "heartNotes": [
      "Herbal Notes",
      "Pine Tree",
      "Ginger",
      "Jasmine",
      "Pepper",
      "Cyclamen",
      "Nutmeg Flower"
    ],
    "baseNotes": [
      "Ambergris",
      "Musk",
      "Sandalwood",
      "Oakmoss",
      "Cedar"
    ],
    "seasons": [
      "Ac Venues",
      "Cool Nights",
      "Winter"
    ],
    "time": "Evening",
    "sprays": "4-6",
    "occasions": [
      "Festive Evenings",
      "Formal Dinners",
      "Receptions",
      "Winter Weddings"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Citrus",
      "Floral"
    ],
    "accords": [
      "Floral",
      "Fresh",
      "Green",
      "Musky"
    ]
  },
  {
    "id": "239",
    "slug": "creed-green-irish-tweed",
    "brand": "Creed",
    "name": "Green Irish Tweed",
    "gender": "for men",
    "topNotes": [
      "Lemon Verbena",
      "Iris"
    ],
    "heartNotes": [
      "Violet Leaf"
    ],
    "baseNotes": [
      "Ambergris",
      "Sandalwood"
    ],
    "seasons": [
      "Spring",
      "Summer",
      "Winter"
    ],
    "time": "Day / Evening",
    "sprays": "4-6",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal",
      "Office"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Citrus",
      "Floral"
    ],
    "accords": [
      "Floral",
      "Fresh",
      "Powdery",
      "Warm"
    ]
  },
  {
    "id": "240",
    "slug": "creed-millesime-imperial",
    "brand": "Creed",
    "name": "Millesime Imperial",
    "gender": "for women and men",
    "topNotes": [
      "Sea Salt",
      "Fruity Notes"
    ],
    "heartNotes": [
      "Sicilian Lemon",
      "Bergamot",
      "Iris",
      "Mandarin Orange"
    ],
    "baseNotes": [
      "Sea Notes",
      "Musk",
      "Woody Notes"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer"
    ],
    "time": "Day",
    "sprays": "4-6",
    "occasions": [
      "Brunch",
      "Casual Daytime Events",
      "College",
      "Office",
      "Travel"
    ],
    "featured": false,
    "families": [
      "Aquatic",
      "Citrus",
      "Floral"
    ],
    "accords": [
      "Floral",
      "Fresh",
      "Marine",
      "Musky"
    ]
  },
  {
    "id": "241",
    "slug": "creed-original-santal",
    "brand": "Creed",
    "name": "Original Santal",
    "gender": "for women and men",
    "topNotes": [
      "Juniper Berries",
      "Coriander",
      "Ginger",
      "Rosemary",
      "Bergamot",
      "Mandarin Orange"
    ],
    "heartNotes": [
      "Sandalwood",
      "Lavender",
      "Orange Blossom",
      "Geranium"
    ],
    "baseNotes": [
      "Tonka Bean",
      "Musk",
      "Cedar",
      "Oakmoss"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer",
      "Winter"
    ],
    "time": "Day / Evening",
    "sprays": "4-6",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal",
      "Office"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Aromatic",
      "Citrus"
    ],
    "accords": [
      "Floral",
      "Fresh",
      "Herbal",
      "Musky"
    ]
  },
  {
    "id": "242",
    "slug": "creed-original-vetiver",
    "brand": "Creed",
    "name": "Original Vetiver",
    "gender": "for women and men",
    "topNotes": [
      "Bergamot",
      "Ginger",
      "Mandarin Orange"
    ],
    "heartNotes": [
      "Haitian Vetiver",
      "Sandalwood",
      "Iris"
    ],
    "baseNotes": [
      "Musk",
      "Ambergris"
    ],
    "seasons": [
      "Spring",
      "Ac Venues",
      "Mild Winter",
      "Monsoon Evenings"
    ],
    "time": "Day / Evening",
    "sprays": "2-3 sprays Top: Bergamot, Ginger and Mandarin Orange \u00e2\u20ac\u00a2 Heart: Haitian Vetiver, Sandalwood and Iris \u00e2\u20ac\u00a2 Base: Musk and Ambergris",
    "occasions": [
      "Lunches",
      "Smart Casuals",
      "Dates",
      "Office",
      "Pujas"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Citrus",
      "Floral"
    ],
    "accords": [
      "Earthy",
      "Floral",
      "Fresh",
      "Musky"
    ]
  },
  {
    "id": "243",
    "slug": "creed-queen-of-silk",
    "brand": "Creed",
    "name": "Queen of Silk",
    "gender": "for women",
    "topNotes": [
      "Saffron",
      "Osmanthus",
      "Magnolia"
    ],
    "heartNotes": [
      "Passionfruit",
      "Tuberose",
      "Patchouli",
      "Agarwood (Oud)"
    ],
    "baseNotes": [
      "Madagascar Vanilla",
      "Ambroxan",
      "Myrrh",
      "Musk",
      "Cedarwood",
      "Incense"
    ],
    "seasons": [
      "Ac Venues",
      "Winter",
      "Cool Nights"
    ],
    "time": "Evening",
    "sprays": "1-2 sprays",
    "occasions": [
      "Receptions",
      "Winter Weddings",
      "Festive Evenings",
      "Formal Dinners"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Floral",
      "Fruity"
    ],
    "accords": [
      "Balsamic",
      "Earthy",
      "Floral",
      "Fruity"
    ]
  },
  {
    "id": "244",
    "slug": "creed-royal-oud",
    "brand": "Creed",
    "name": "Royal Oud",
    "gender": "for women and men",
    "topNotes": [
      "Pink Pepper",
      "Lemon",
      "Sicilian Bergamot"
    ],
    "heartNotes": [
      "Cedar",
      "Angelica",
      "Galbanum"
    ],
    "baseNotes": [
      "Sandalwood",
      "Agarwood (Oud)",
      "Musk"
    ],
    "seasons": [
      "Spring",
      "Ac Venues",
      "Mild Winter",
      "Monsoon Evenings"
    ],
    "time": "Day / Evening",
    "sprays": "2-3 sprays",
    "occasions": [
      "Lunches",
      "Smart Casuals",
      "Dates",
      "Office",
      "Pujas"
    ],
    "featured": false,
    "families": [
      "Citrus",
      "Spicy",
      "Woody"
    ],
    "accords": [
      "Fresh",
      "Green",
      "Musky",
      "Spicy"
    ]
  },
  {
    "id": "245",
    "slug": "creed-royal-mayfair",
    "brand": "Creed",
    "name": "Royal Mayfair",
    "gender": "for women and men",
    "topNotes": [
      "Pine Tree",
      "Gin",
      "Lime"
    ],
    "heartNotes": [
      "Rose"
    ],
    "baseNotes": [
      "Eucalyptus",
      "Cedar",
      "Orange"
    ],
    "seasons": [
      "Spring",
      "Ac Venues",
      "Mild Winter",
      "Monsoon Evenings"
    ],
    "time": "Day / Evening",
    "sprays": "2-3 sprays",
    "occasions": [
      "Lunches",
      "Smart Casuals",
      "Dates",
      "Office",
      "Pujas"
    ],
    "featured": false,
    "families": [
      "Aromatic",
      "Citrus",
      "Floral"
    ],
    "accords": [
      "Floral",
      "Fresh",
      "Herbal",
      "Woody"
    ]
  },
  {
    "id": "246",
    "slug": "creed-royal-water",
    "brand": "Creed",
    "name": "Royal Water",
    "gender": "for women and men",
    "topNotes": [
      "Citruses",
      "Lemon Verbena",
      "Bergamot",
      "Mandarin Orange"
    ],
    "heartNotes": [
      "Basil",
      "Allspice",
      "Cumin"
    ],
    "baseNotes": [
      "Musk",
      "Cedarwood"
    ],
    "seasons": [
      "Spring",
      "Summer",
      "Monsoon"
    ],
    "time": "Day",
    "sprays": "3-4 sprays; 2-3 indoors",
    "occasions": [
      "Travel",
      "Casual Daytime Events",
      "College",
      "Office",
      "Brunch"
    ],
    "featured": false,
    "families": [
      "Aromatic",
      "Citrus",
      "Spicy"
    ],
    "accords": [
      "Fresh",
      "Herbal",
      "Musky",
      "Spicy"
    ]
  },
  {
    "id": "247",
    "slug": "creed-silver-mountain-water",
    "brand": "Creed",
    "name": "Silver Mountain Water",
    "gender": "for women and men",
    "topNotes": [
      "Bergamot",
      "Mandarin Orange"
    ],
    "heartNotes": [
      "Green Tea",
      "Black Currant"
    ],
    "baseNotes": [
      "Musk",
      "Sandalwood",
      "Petitgrain",
      "Galbanum"
    ],
    "seasons": [
      "Spring",
      "Summer",
      "Winter"
    ],
    "time": "Day / Evening",
    "sprays": "4-6",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal",
      "Office"
    ],
    "featured": false,
    "families": [
      "Citrus",
      "Fruity",
      "Woody"
    ],
    "accords": [
      "Fresh",
      "Fruity",
      "Green",
      "Musky"
    ]
  },
  {
    "id": "248",
    "slug": "creed-spice-and-wood",
    "brand": "Creed",
    "name": "Spice and Wood",
    "gender": "for women and men",
    "topNotes": [
      "Apple",
      "Lemon",
      "Bergamot"
    ],
    "heartNotes": [
      "Pepper",
      "Birch",
      "Clove",
      "Angelica",
      "Patchouli"
    ],
    "baseNotes": [
      "Cedar",
      "Musk",
      "Iris",
      "oak moss"
    ],
    "seasons": [
      "Spring",
      "Summer",
      "Monsoon"
    ],
    "time": "Day",
    "sprays": "3-4 sprays; 2-3 indoors",
    "occasions": [
      "Travel",
      "Casual Daytime Events",
      "College",
      "Office",
      "Brunch"
    ],
    "featured": false,
    "families": [
      "Citrus",
      "Floral",
      "Fruity"
    ],
    "accords": [
      "Earthy",
      "Floral",
      "Fresh",
      "Fruity"
    ]
  },
  {
    "id": "249",
    "slug": "creed-sublime-vanille",
    "brand": "Creed",
    "name": "Sublime Vanille",
    "gender": "for women and men",
    "topNotes": [
      "Lemon",
      "Bergamot"
    ],
    "heartNotes": [
      "Vanilla",
      "Jasmine"
    ],
    "baseNotes": [
      "Tonka Bean",
      "Musk"
    ],
    "seasons": [
      "Spring",
      "Summer",
      "Winter"
    ],
    "time": "Day / Evening",
    "sprays": "4-6",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal",
      "Office"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Citrus",
      "Floral"
    ],
    "accords": [
      "Floral",
      "Fresh",
      "Musky",
      "Sweet"
    ]
  },
  {
    "id": "250",
    "slug": "creed-tabarome",
    "brand": "Creed",
    "name": "Tabarome",
    "gender": "for men",
    "topNotes": [
      "Tangerine",
      "Bergamot"
    ],
    "heartNotes": [
      "Ginger"
    ],
    "baseNotes": [
      "Tobacco",
      "Sandalwood",
      "Ambergris",
      "Leather",
      "Patchouli"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer",
      "Winter"
    ],
    "time": "Day / Evening",
    "sprays": "4-6",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal",
      "Office"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Citrus",
      "Gourmand"
    ],
    "accords": [
      "Earthy",
      "Fresh",
      "Leather",
      "Spicy"
    ]
  },
  {
    "id": "251",
    "slug": "creed-viking",
    "brand": "Creed",
    "name": "Viking",
    "gender": "for men",
    "topNotes": [
      "Pink Pepper",
      "Peppermint",
      "Bergamot",
      "Lemon",
      "Absinthe",
      "Orange"
    ],
    "heartNotes": [
      "Lavender",
      "Bulgarian Rose",
      "Clove",
      "Allspice",
      "Orris Root",
      "Jasmine"
    ],
    "baseNotes": [
      "Vetiver",
      "Cedar",
      "White Musk",
      "Tonka Bean"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer"
    ],
    "time": "Day",
    "sprays": "4-6",
    "occasions": [
      "Brunch",
      "Casual Daytime Events",
      "College",
      "Office",
      "Travel"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Aromatic",
      "Citrus"
    ],
    "accords": [
      "Earthy",
      "Floral",
      "Fresh",
      "Herbal"
    ]
  },
  {
    "id": "252",
    "slug": "creed-virgin-island-water",
    "brand": "Creed",
    "name": "Virgin Island Water",
    "gender": "for women and men",
    "topNotes": [
      "Coconut",
      "Lime",
      "White Bergamot",
      "Sicilian Mandarin"
    ],
    "heartNotes": [
      "Ginger",
      "Ylang-Ylang",
      "Indian Jasmine",
      "Hibiscus"
    ],
    "baseNotes": [
      "White Rum",
      "Sugar Cane",
      "Musk"
    ],
    "seasons": [
      "Spring",
      "Summer",
      "Monsoon"
    ],
    "time": "Day",
    "sprays": "3-4 sprays; 2-3 indoors Sprays: 3-4 sprays; 2-3 indoors",
    "occasions": [
      "Travel",
      "Casual Daytime Events",
      "College",
      "Office",
      "Brunch"
    ],
    "featured": false,
    "families": [
      "Citrus",
      "Floral",
      "Fruity"
    ],
    "accords": [
      "Floral",
      "Fresh",
      "Fruity",
      "Musky"
    ]
  },
  {
    "id": "253",
    "slug": "cuba-paris-cuba-tattoo",
    "brand": "Cuba Paris",
    "name": "Cuba Tattoo",
    "gender": "for women",
    "topNotes": [
      "Not separately listed"
    ],
    "heartNotes": [
      "Not separately listed"
    ],
    "baseNotes": [
      "Not separately listed"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer"
    ],
    "time": "Day",
    "sprays": "3-4",
    "occasions": [
      "Casual",
      "Office"
    ],
    "featured": false,
    "families": [
      "Aromatic"
    ],
    "accords": [
      "Fresh"
    ]
  },
  {
    "id": "254",
    "slug": "cyzone-not-reliably-matched",
    "brand": "Cyzone",
    "name": "Not reliably matched",
    "gender": "Unisex",
    "topNotes": [
      "Reliable exact-page data not found in indexed sources"
    ],
    "heartNotes": [
      "Reliable exact-page data not found in indexed sources"
    ],
    "baseNotes": [
      "Reliable exact-page data not found in indexed sources"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer"
    ],
    "time": "Day",
    "sprays": "3-4",
    "occasions": [
      "Casual",
      "Office"
    ],
    "featured": false,
    "families": [
      "Aromatic"
    ],
    "accords": [
      "Fresh"
    ]
  },
  {
    "id": "255",
    "slug": "davidoff-cool-water",
    "brand": "Davidoff",
    "name": "Cool Water",
    "gender": "for men",
    "topNotes": [
      "Sea water",
      "Lavender",
      "Mint",
      "Green Notes",
      "Rosemary",
      "Calone",
      "Coriander"
    ],
    "heartNotes": [
      "Sandalwood",
      "Neroli",
      "Geranium",
      "Jasmine"
    ],
    "baseNotes": [
      "Musk",
      "Oakmoss",
      "Tobacco",
      "Cedar",
      "Ambergris"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer",
      "Winter"
    ],
    "time": "Day / Evening",
    "sprays": "4-6",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal",
      "Office"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Aquatic",
      "Aromatic"
    ],
    "accords": [
      "Floral",
      "Fresh",
      "Green",
      "Herbal"
    ]
  },
  {
    "id": "256",
    "slug": "davidoff-silver-shadow",
    "brand": "Davidoff",
    "name": "Silver Shadow",
    "gender": "for men",
    "topNotes": [
      "Bitter Orange",
      "Coriander",
      "Virginia Cedar"
    ],
    "heartNotes": [
      "Saffron",
      "Clove",
      "Patchouli"
    ],
    "baseNotes": [
      "Benzoin",
      "Amber",
      "Cinnamon",
      "oak moss"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer",
      "Winter"
    ],
    "time": "Day / Evening",
    "sprays": "4-6",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal",
      "Office"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Citrus",
      "Spicy"
    ],
    "accords": [
      "Earthy",
      "Fresh",
      "Spicy",
      "Warm"
    ]
  },
  {
    "id": "257",
    "slug": "denim-musk",
    "brand": "Denim",
    "name": "Musk",
    "gender": "for men",
    "topNotes": [
      "Citruses"
    ],
    "heartNotes": [
      "Myrtle",
      "Lavender"
    ],
    "baseNotes": [
      "Patchouli",
      "Oriental Woodsy notes",
      "Oakmoss"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer",
      "Winter"
    ],
    "time": "Day / Evening",
    "sprays": "4-6",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal",
      "Office"
    ],
    "featured": false,
    "families": [
      "Aromatic",
      "Citrus",
      "Woody"
    ],
    "accords": [
      "Earthy",
      "Fresh",
      "Herbal",
      "Woody"
    ]
  },
  {
    "id": "258",
    "slug": "diesel-diesel",
    "brand": "Diesel",
    "name": "Diesel",
    "gender": "for women and men",
    "topNotes": [
      "Not separately listed"
    ],
    "heartNotes": [
      "Not separately listed"
    ],
    "baseNotes": [
      "Not separately listed"
    ],
    "seasons": [
      "Spring",
      "Summer",
      "Monsoon"
    ],
    "time": "Day",
    "sprays": "3-4 sprays; 2-3 indoors",
    "occasions": [
      "Travel",
      "Casual Daytime Events",
      "College",
      "Office",
      "Brunch"
    ],
    "featured": false,
    "families": [
      "Aromatic"
    ],
    "accords": [
      "Fresh"
    ]
  },
  {
    "id": "259",
    "slug": "dior-miss-dior-absolutely-blooming",
    "brand": "Dior",
    "name": "Miss Dior Absolutely Blooming",
    "gender": "for women",
    "topNotes": [
      "Lemon",
      "Mandarin Orange",
      "Guava",
      "Peach"
    ],
    "heartNotes": [
      "Licorice",
      "Jasmine",
      "Tuberose",
      "Aloe Vera",
      "Lily"
    ],
    "baseNotes": [
      "Sandalowood",
      "Cedar",
      "Musk"
    ],
    "seasons": [
      "Spring",
      "Summer",
      "Monsoon"
    ],
    "time": "Day",
    "sprays": "3-4 sprays; 2-3 indoors for women",
    "occasions": [
      "Travel",
      "Casual Daytime Events",
      "College",
      "Office",
      "Brunch"
    ],
    "featured": false,
    "families": [
      "Citrus",
      "Floral",
      "Fruity"
    ],
    "accords": [
      "Floral",
      "Fresh",
      "Fruity",
      "Musky"
    ]
  },
  {
    "id": "260",
    "slug": "when-to-wear-sprays-3-4-sprays-2-3-indoors",
    "brand": "When To Wear",
    "name": "Sprays: 3-4 sprays; 2-3 indoors",
    "gender": "for women",
    "topNotes": [
      "Raspberry",
      "Black Currant",
      "Pomegranate",
      "Pink Pepper"
    ],
    "heartNotes": [
      "May Rose",
      "Peony"
    ],
    "baseNotes": [
      "White Musk"
    ],
    "seasons": [
      "Spring",
      "Ac Venues",
      "Mild Winter",
      "Monsoon Evenings"
    ],
    "time": "Day / Evening",
    "sprays": "2-3 sprays VIDEH / MASTER PERFUME CATALOG",
    "occasions": [
      "Lunches",
      "Smart Casuals",
      "Dates",
      "Office",
      "Pujas"
    ],
    "featured": false,
    "families": [
      "Floral",
      "Fruity",
      "Spicy"
    ],
    "accords": [
      "Floral",
      "Fruity",
      "Musky",
      "Spicy"
    ]
  },
  {
    "id": "261",
    "slug": "dior-ambre-nuit",
    "brand": "Dior",
    "name": "Ambre Nuit",
    "gender": "for women and men",
    "topNotes": [
      "Not separately listed"
    ],
    "heartNotes": [
      "Not separately listed"
    ],
    "baseNotes": [
      "Not separately listed"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer"
    ],
    "time": "Day",
    "sprays": "3-4",
    "occasions": [
      "Casual",
      "Office"
    ],
    "featured": false,
    "families": [
      "Aromatic"
    ],
    "accords": [
      "Fresh"
    ]
  },
  {
    "id": "262",
    "slug": "dior-balade-sauvage",
    "brand": "Dior",
    "name": "Balade Sauvage",
    "gender": "for women and men",
    "topNotes": [
      "Ozonic notes",
      "Bergamot",
      "Petitgrain"
    ],
    "heartNotes": [
      "Fig Tree",
      "Fig",
      "Solar Notes",
      "Sea Notes",
      "Peach",
      "Orange Blossom",
      "Hedione",
      "Rose"
    ],
    "baseNotes": [
      "Pebbles",
      "Amberwood",
      "Labdanum",
      "Vanilla"
    ],
    "seasons": [
      "Spring",
      "Summer",
      "Winter"
    ],
    "time": "Day / Evening",
    "sprays": "4-6",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal",
      "Office"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Aquatic",
      "Citrus"
    ],
    "accords": [
      "Floral",
      "Fresh",
      "Fruity",
      "Marine"
    ]
  },
  {
    "id": "263",
    "slug": "dior-bois-d-argent",
    "brand": "Dior",
    "name": "Bois D Argent",
    "gender": "for women and men",
    "topNotes": [
      "Not separately listed"
    ],
    "heartNotes": [
      "Not separately listed"
    ],
    "baseNotes": [
      "Not separately listed"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer"
    ],
    "time": "Day",
    "sprays": "3-4",
    "occasions": [
      "Casual",
      "Office"
    ],
    "featured": false,
    "families": [
      "Aromatic"
    ],
    "accords": [
      "Fresh"
    ]
  },
  {
    "id": "264",
    "slug": "dior-cheval-blanc-paris",
    "brand": "Dior",
    "name": "Cheval Blanc Paris",
    "gender": "for women and men",
    "topNotes": [
      "Not separately listed"
    ],
    "heartNotes": [
      "Not separately listed"
    ],
    "baseNotes": [
      "Not separately listed"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer"
    ],
    "time": "Day",
    "sprays": "3-4",
    "occasions": [
      "Casual",
      "Office"
    ],
    "featured": false,
    "families": [
      "Aromatic"
    ],
    "accords": [
      "Fresh"
    ]
  },
  {
    "id": "265",
    "slug": "dior-cuir-cannage",
    "brand": "Dior",
    "name": "Cuir Cannage",
    "gender": "for women and men",
    "topNotes": [
      "Ylang-Ylang",
      "Orange Blossom",
      "Bergamot"
    ],
    "heartNotes": [
      "Leather",
      "Iris",
      "Jasmine",
      "Rose"
    ],
    "baseNotes": [
      "Leather",
      "Birch",
      "Tobacco",
      "Juniper",
      "Violet",
      "Cade oil"
    ],
    "seasons": [
      "Spring",
      "Summer",
      "Winter"
    ],
    "time": "Day / Evening",
    "sprays": "4-6",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal",
      "Office"
    ],
    "featured": false,
    "families": [
      "Citrus",
      "Floral",
      "Gourmand"
    ],
    "accords": [
      "Floral",
      "Fresh",
      "Leather",
      "Powdery"
    ]
  },
  {
    "id": "266",
    "slug": "dior-dior-homme-2005",
    "brand": "Dior",
    "name": "Dior Homme 2005",
    "gender": "for men",
    "topNotes": [
      "Lavender",
      "Sage",
      "Bergamot"
    ],
    "heartNotes": [
      "Iris",
      "Cacao",
      "Amber",
      "Cardamom"
    ],
    "baseNotes": [
      "Leather",
      "Tahitian Vetiver",
      "Patchouli"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer",
      "Winter"
    ],
    "time": "Day / Evening",
    "sprays": "4-6",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal",
      "Office"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Aromatic",
      "Citrus"
    ],
    "accords": [
      "Earthy",
      "Floral",
      "Fresh",
      "Herbal"
    ]
  },
  {
    "id": "267",
    "slug": "dior-dior-homme-2020",
    "brand": "Dior",
    "name": "Dior Homme 2020",
    "gender": "for men",
    "topNotes": [
      "Bergamot",
      "Pink Pepper",
      "elemi"
    ],
    "heartNotes": [
      "Atlas Cedar",
      "Cashmere Wood",
      "Patchouli"
    ],
    "baseNotes": [
      "Iso E Super",
      "Haitian Vetiver",
      "White Musk"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer"
    ],
    "time": "Day",
    "sprays": "4-6",
    "occasions": [
      "Brunch",
      "Casual Daytime Events",
      "College",
      "Office",
      "Travel"
    ],
    "featured": false,
    "families": [
      "Citrus",
      "Spicy",
      "Woody"
    ],
    "accords": [
      "Earthy",
      "Fresh",
      "Musky",
      "Spicy"
    ]
  },
  {
    "id": "268",
    "slug": "dior-dior-homme-eau-for-men",
    "brand": "Dior",
    "name": "Dior Homme Eau for Men",
    "gender": "for men",
    "topNotes": [
      "Coriander",
      "Grapefruit",
      "Calabrian bergamot"
    ],
    "heartNotes": [
      "Tuscan Iris"
    ],
    "baseNotes": [
      "Virginian Cedar",
      "Amber"
    ],
    "seasons": [
      "Spring",
      "Summer",
      "Monsoon"
    ],
    "time": "Day",
    "sprays": "3-4 sprays; 2-3 indoors Sprays: 3-4 sprays; 2-3 indoors",
    "occasions": [
      "Travel",
      "Casual Daytime Events",
      "College",
      "Office",
      "Brunch"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Citrus",
      "Floral"
    ],
    "accords": [
      "Floral",
      "Fresh",
      "Powdery",
      "Spicy"
    ]
  },
  {
    "id": "269",
    "slug": "dior-homme-intense-2011-dior-homme-original",
    "brand": "Dior Homme Intense 2011",
    "name": "Dior Homme Original",
    "gender": "for men",
    "topNotes": [
      "Lavender"
    ],
    "heartNotes": [
      "Iris",
      "Ambrette (Musk Mallow)",
      "Pear"
    ],
    "baseNotes": [
      "Virginia Cedar",
      "Vetiver"
    ],
    "seasons": [
      "Monsoon",
      "Spring"
    ],
    "time": "Day / Evening",
    "sprays": "3-4",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal",
      "Office"
    ],
    "featured": false,
    "families": [
      "Aromatic",
      "Floral",
      "Fruity"
    ],
    "accords": [
      "Earthy",
      "Floral",
      "Fruity",
      "Herbal"
    ]
  },
  {
    "id": "270",
    "slug": "archive-fragrance-270",
    "brand": "Archive",
    "name": "Fragrance 270",
    "gender": "for men",
    "topNotes": [
      "Tuscan Iris"
    ],
    "heartNotes": [
      "Guatemalan Cardamom"
    ],
    "baseNotes": [
      "Vetiver"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Winter"
    ],
    "time": "Evening",
    "sprays": "3-4",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal"
    ],
    "featured": false,
    "families": [
      "Floral",
      "Spicy",
      "Woody"
    ],
    "accords": [
      "Earthy",
      "Floral",
      "Powdery",
      "Spicy"
    ]
  },
  {
    "id": "271",
    "slug": "dior-dior-homme-parfum",
    "brand": "Dior",
    "name": "Dior Homme Parfum",
    "gender": "for men",
    "topNotes": [
      "Tuscan Iris",
      "Italian Orange"
    ],
    "heartNotes": [
      "Leather",
      "Rose"
    ],
    "baseNotes": [
      "Sandalwood",
      "Ambrette (Musk Mallow)",
      "Agarwood (Oud)",
      "Cedar"
    ],
    "seasons": [
      "Spring",
      "Summer",
      "Winter"
    ],
    "time": "Day / Evening",
    "sprays": "4-6",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal",
      "Office"
    ],
    "featured": false,
    "families": [
      "Citrus",
      "Floral",
      "Leather"
    ],
    "accords": [
      "Floral",
      "Fresh",
      "Leather",
      "Musky"
    ]
  },
  {
    "id": "272",
    "slug": "dior-dior-homme-sport-2017",
    "brand": "Dior",
    "name": "Dior Homme Sport 2017",
    "gender": "for men",
    "topNotes": [
      "Blood Orange",
      "Grapefruit",
      "Lemon",
      "Pear"
    ],
    "heartNotes": [
      "Pink Pepper",
      "Nutmeg",
      "Geranium"
    ],
    "baseNotes": [
      "Sandalwood",
      "Vetiver"
    ],
    "seasons": [
      "Ac Venues",
      "Monsoon Evenings",
      "Winter"
    ],
    "time": "Evening",
    "sprays": "4-6",
    "occasions": [
      "Celebrations",
      "Dinner Dates",
      "Formal Events",
      "Receptions"
    ],
    "featured": false,
    "families": [
      "Citrus",
      "Floral",
      "Fruity"
    ],
    "accords": [
      "Earthy",
      "Floral",
      "Fresh",
      "Fruity"
    ]
  },
  {
    "id": "273",
    "slug": "dior-dior-homme-sport",
    "brand": "Dior",
    "name": "Dior Homme Sport",
    "gender": "for men",
    "topNotes": [
      "Amalfi Lemon",
      "Grapefruit",
      "Bergamot",
      "Elemi resin"
    ],
    "heartNotes": [
      "Ginger",
      "Vetiver",
      "Virginia Cedar"
    ],
    "baseNotes": [
      "Lavender",
      "Rosemary",
      "Sandalwood"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer",
      "Winter"
    ],
    "time": "Day / Evening",
    "sprays": "4-6",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal",
      "Office"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Aromatic",
      "Citrus"
    ],
    "accords": [
      "Balsamic",
      "Earthy",
      "Floral",
      "Fresh"
    ]
  },
  {
    "id": "274",
    "slug": "dior-diorella",
    "brand": "Dior",
    "name": "Diorella",
    "gender": "for women",
    "topNotes": [
      "Green Notes",
      "Sicilian Lemon",
      "Bergamot",
      "Melon",
      "Basil"
    ],
    "heartNotes": [
      "Honeysuckle",
      "Moroccan Jasmine",
      "Peach",
      "Carnation",
      "Cyclamen",
      "Rose"
    ],
    "baseNotes": [
      "Oakmoss",
      "Vetiver",
      "Patchouli",
      "Musk"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer"
    ],
    "time": "Day",
    "sprays": "4-6",
    "occasions": [
      "Brunch",
      "Casual Daytime Events",
      "College",
      "Office",
      "Travel"
    ],
    "featured": false,
    "families": [
      "Aromatic",
      "Citrus",
      "Floral"
    ],
    "accords": [
      "Earthy",
      "Floral",
      "Fresh",
      "Fruity"
    ]
  },
  {
    "id": "275",
    "slug": "dior-diorissimo",
    "brand": "Dior",
    "name": "Diorissimo",
    "gender": "for women",
    "topNotes": [
      "Green Leaves",
      "Bergamot"
    ],
    "heartNotes": [
      "Lily-of-the-Valley",
      "Lilac",
      "Jasmine",
      "Lily",
      "Ylang-Ylang",
      "Amaryllis",
      "Rosemary",
      "Boronia"
    ],
    "baseNotes": [
      "Civet",
      "Sandalwood"
    ],
    "seasons": [
      "Spring",
      "Summer",
      "Monsoon"
    ],
    "time": "Day",
    "sprays": "3-4 sprays; 2-3 indoors",
    "occasions": [
      "Travel",
      "Casual Daytime Events",
      "College",
      "Office",
      "Brunch"
    ],
    "featured": false,
    "families": [
      "Aromatic",
      "Citrus",
      "Floral"
    ],
    "accords": [
      "Floral",
      "Fresh",
      "Green",
      "Herbal"
    ]
  },
  {
    "id": "276",
    "slug": "dior-dioriviera",
    "brand": "Dior",
    "name": "Dioriviera",
    "gender": "for women and men",
    "topNotes": [
      "Not separately listed"
    ],
    "heartNotes": [
      "Not separately listed"
    ],
    "baseNotes": [
      "Not separately listed"
    ],
    "seasons": [
      "Spring",
      "Ac Venues",
      "Mild Winter",
      "Monsoon Evenings"
    ],
    "time": "Day / Evening",
    "sprays": "2-3 sprays",
    "occasions": [
      "Lunches",
      "Smart Casuals",
      "Dates",
      "Office",
      "Pujas"
    ],
    "featured": false,
    "families": [
      "Aromatic"
    ],
    "accords": [
      "Fresh"
    ]
  },
  {
    "id": "277",
    "slug": "dior-dolce-vita",
    "brand": "Dior",
    "name": "Dolce Vita",
    "gender": "for women",
    "topNotes": [
      "Peach",
      "Cardamom",
      "Lily",
      "Grapefruit",
      "Bergamot",
      "Rose"
    ],
    "heartNotes": [
      "Cinnamon",
      "Apricot",
      "Brazilian Rosewood",
      "Lily",
      "Heliotrope",
      "Magnolia"
    ],
    "baseNotes": [
      "Vanilla",
      "Sandalwood",
      "Cedar",
      "Coconut"
    ],
    "seasons": [
      "Spring",
      "Summer",
      "Winter"
    ],
    "time": "Day / Evening",
    "sprays": "4-6",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal",
      "Office"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Citrus",
      "Floral"
    ],
    "accords": [
      "Floral",
      "Fresh",
      "Fruity",
      "Spicy"
    ]
  },
  {
    "id": "278",
    "slug": "dior-eau-sauvage-cologne",
    "brand": "Dior",
    "name": "Eau Sauvage Cologne",
    "gender": "for men",
    "topNotes": [
      "Calabrian bergamot",
      "Grapefruit",
      "Mandarin Orange"
    ],
    "heartNotes": [
      "Petitgrain",
      "Hedione",
      "Galbanum",
      "Pink Pepper"
    ],
    "baseNotes": [
      "Vetiver"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer"
    ],
    "time": "Day",
    "sprays": "4-6",
    "occasions": [
      "Brunch",
      "Casual Daytime Events",
      "College",
      "Office",
      "Travel"
    ],
    "featured": false,
    "families": [
      "Citrus",
      "Spicy",
      "Woody"
    ],
    "accords": [
      "Earthy",
      "Fresh",
      "Green",
      "Spicy"
    ]
  },
  {
    "id": "279",
    "slug": "dior-eau-sauvage",
    "brand": "Dior",
    "name": "Eau Sauvage",
    "gender": "for men",
    "topNotes": [
      "Lemon",
      "Bergamot",
      "Basil",
      "Rosemary",
      "Caraway",
      "Fruity Notes"
    ],
    "heartNotes": [
      "Jasmine",
      "Coriander",
      "Carnation",
      "Patchouli",
      "Orris Root",
      "Sandalwood",
      "Rose",
      "Lavender",
      "Hedione"
    ],
    "baseNotes": [
      "Oakmoss",
      "Vetiver",
      "Musk",
      "Amber"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer",
      "Winter"
    ],
    "time": "Day / Evening",
    "sprays": "4-6",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal",
      "Office"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Aromatic",
      "Citrus"
    ],
    "accords": [
      "Earthy",
      "Floral",
      "Fresh",
      "Herbal"
    ]
  },
  {
    "id": "280",
    "slug": "dior-fahrenheit",
    "brand": "Dior",
    "name": "Fahrenheit",
    "gender": "for men",
    "topNotes": [
      "Nutmeg Flower",
      "Lavender",
      "Cedar",
      "Mandarin Orange",
      "Chamomile",
      "Hawthorn",
      "Bergamot",
      "Lemon"
    ],
    "heartNotes": [
      "Violet Leaf",
      "Nutmeg",
      "Cedar",
      "Sandalwood",
      "Carnation",
      "Honeysuckle",
      "Jasmine",
      "Lily-of- the-Valley"
    ],
    "baseNotes": [
      "Leather",
      "Vetiver",
      "Musk",
      "Amber",
      "Patchouli"
    ],
    "seasons": [
      "Spring",
      "Summer",
      "Monsoon"
    ],
    "time": "Day",
    "sprays": "3-4 sprays; 2-3 indoors Top: Nutmeg Flower, Lavender, Cedar, Mandarin Orange, Chamomile, Hawthorn, Bergamot and Lemon \u00e2\u20ac\u00a2 Heart: Violet Leaf, Nutmeg, Cedar, Sandalwood, Carnation, Honeysuckle, Jasmine and Lily-of- the-Valley \u00e2\u20ac\u00a2 Base: Leather, Vetiver, Musk, Amber, Patchouli",
    "occasions": [
      "Travel",
      "Casual Daytime Events",
      "College",
      "Office",
      "Brunch"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Aromatic",
      "Citrus"
    ],
    "accords": [
      "Earthy",
      "Floral",
      "Fresh",
      "Herbal"
    ]
  },
  {
    "id": "281",
    "slug": "dior-fahrenheit-le-parfum",
    "brand": "Dior",
    "name": "Fahrenheit Le Parfum",
    "gender": "for men",
    "topNotes": [
      "Suede",
      "Licorice",
      "Sicilian Mandarin"
    ],
    "heartNotes": [
      "Violet Leaf",
      "Rum",
      "Coriander",
      "Cumin"
    ],
    "baseNotes": [
      "Bourbon Vanilla  PAGE 29 / 118"
    ],
    "seasons": [
      "Spring",
      "Summer",
      "Winter"
    ],
    "time": "Day / Evening",
    "sprays": "4-6",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal",
      "Office"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Citrus",
      "Floral"
    ],
    "accords": [
      "Floral",
      "Fresh",
      "Leather",
      "Powdery"
    ]
  },
  {
    "id": "282",
    "slug": "dior-fahrenheit-282",
    "brand": "Dior",
    "name": "Fahrenheit",
    "gender": "for men",
    "topNotes": [
      "Nutmeg Flower",
      "Lavender",
      "Cedar",
      "Mandarin Orange",
      "Chamomile",
      "Hawthorn",
      "Bergamot",
      "Lemon"
    ],
    "heartNotes": [
      "Violet Leaf",
      "Nutmeg",
      "Cedar",
      "Sandalwood",
      "Carnation",
      "Honeysuckle",
      "Jasmine",
      "Lily-of- the-Valley"
    ],
    "baseNotes": [
      "Leather",
      "Vetiver",
      "Musk",
      "Amber",
      "Patchouli"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer",
      "Winter"
    ],
    "time": "Day / Evening",
    "sprays": "4-6",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal",
      "Office"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Aromatic",
      "Citrus"
    ],
    "accords": [
      "Earthy",
      "Floral",
      "Fresh",
      "Herbal"
    ]
  },
  {
    "id": "283",
    "slug": "dior-feve-delicieuse",
    "brand": "Dior",
    "name": "Feve Delicieuse",
    "gender": "for women and men",
    "topNotes": [
      "Lavender",
      "Mint",
      "Bergamot"
    ],
    "heartNotes": [
      "Sour Cherry",
      "Freesia",
      "Jasmine"
    ],
    "baseNotes": [
      "Tonka Bean",
      "Vanilla",
      "Cacao Pod",
      "Caramel",
      "Praline",
      "Benzoin",
      "Milk",
      "Sandalwood",
      "Leather",
      "Cedar"
    ],
    "seasons": [
      "Ac Venues",
      "Winter",
      "Cool Nights"
    ],
    "time": "Evening",
    "sprays": "1-2 sprays",
    "occasions": [
      "Receptions",
      "Winter Weddings",
      "Festive Evenings",
      "Formal Dinners"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Aromatic",
      "Citrus"
    ],
    "accords": [
      "Floral",
      "Fresh",
      "Fruity",
      "Herbal"
    ]
  },
  {
    "id": "284",
    "slug": "dior-hypnotic-poison",
    "brand": "Dior",
    "name": "Hypnotic Poison",
    "gender": "for women",
    "topNotes": [
      "Coconut",
      "Plum",
      "Apricot"
    ],
    "heartNotes": [
      "Brazilian Rosewood",
      "Jasmine",
      "Caraway",
      "Tuberose",
      "Rose",
      "Lily-of-the-Valley"
    ],
    "baseNotes": [
      "Vanilla",
      "Almond",
      "Sandalwood",
      "Musk"
    ],
    "seasons": [
      "Spring",
      "Ac Venues",
      "Mild Winter",
      "Monsoon Evenings"
    ],
    "time": "Day / Evening",
    "sprays": "2-3 sprays",
    "occasions": [
      "Lunches",
      "Smart Casuals",
      "Dates",
      "Office",
      "Pujas"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Floral",
      "Fruity"
    ],
    "accords": [
      "Floral",
      "Fruity",
      "Musky",
      "Sweet"
    ]
  },
  {
    "id": "285",
    "slug": "dior-gris-dior",
    "brand": "Dior",
    "name": "Gris Dior",
    "gender": "for women and men",
    "topNotes": [
      "Not separately listed"
    ],
    "heartNotes": [
      "Not separately listed"
    ],
    "baseNotes": [
      "Not separately listed"
    ],
    "seasons": [
      "Spring",
      "Ac Venues",
      "Mild Winter",
      "Monsoon Evenings"
    ],
    "time": "Day / Evening",
    "sprays": "2-3 sprays",
    "occasions": [
      "Lunches",
      "Smart Casuals",
      "Dates",
      "Office",
      "Pujas"
    ],
    "featured": false,
    "families": [
      "Aromatic"
    ],
    "accords": [
      "Fresh"
    ]
  },
  {
    "id": "286",
    "slug": "dior-j-adore",
    "brand": "Dior",
    "name": "J adore",
    "gender": "for women",
    "topNotes": [
      "Pear",
      "Melon",
      "Magnolia",
      "Peach",
      "Mandarin Orange",
      "Bergamot"
    ],
    "heartNotes": [
      "Jasmine",
      "Lily-of-the-Valley",
      "Tuberose",
      "Freesia",
      "Rose",
      "Orchid",
      "Plum",
      "Violet"
    ],
    "baseNotes": [
      "Musk",
      "Vanilla",
      "Blackberry",
      "Cedar"
    ],
    "seasons": [
      "Spring",
      "Summer",
      "Monsoon"
    ],
    "time": "Day",
    "sprays": "3-4 sprays; 2-3 indoors",
    "occasions": [
      "Travel",
      "Casual Daytime Events",
      "College",
      "Office",
      "Brunch"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Citrus",
      "Floral"
    ],
    "accords": [
      "Floral",
      "Fresh",
      "Fruity",
      "Musky"
    ]
  },
  {
    "id": "287",
    "slug": "dior-j-adore-in-joy",
    "brand": "Dior",
    "name": "J Adore In Joy",
    "gender": "for women",
    "topNotes": [
      "Sea Salt"
    ],
    "heartNotes": [
      "Jasmine Sambac",
      "Ylang-Ylang",
      "Neroli",
      "Tuberose"
    ],
    "baseNotes": [
      "Peach"
    ],
    "seasons": [
      "Spring",
      "Summer"
    ],
    "time": "Day",
    "sprays": "4-6",
    "occasions": [
      "Casual",
      "Office"
    ],
    "featured": false,
    "families": [
      "Aquatic",
      "Citrus",
      "Floral"
    ],
    "accords": [
      "Floral",
      "Fresh",
      "Fruity",
      "Marine"
    ]
  },
  {
    "id": "288",
    "slug": "dior-j-adore-lumiere-eau-de-toilette",
    "brand": "Dior",
    "name": "J adore Lumiere Eau de Toilette",
    "gender": "for women",
    "topNotes": [
      "Blood Orange",
      "Lemon"
    ],
    "heartNotes": [
      "Magnolia",
      "Neroli",
      "Damask Rose"
    ],
    "baseNotes": [
      "Sandalwood",
      "Vanilla"
    ],
    "seasons": [
      "Spring",
      "Ac Venues",
      "Mild Winter",
      "Monsoon Evenings"
    ],
    "time": "Day / Evening",
    "sprays": "2-3 sprays",
    "occasions": [
      "Lunches",
      "Smart Casuals",
      "Dates",
      "Office",
      "Pujas"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Citrus",
      "Floral"
    ],
    "accords": [
      "Floral",
      "Fresh",
      "Sweet",
      "Warm"
    ]
  },
  {
    "id": "289",
    "slug": "dior-miss-dior-cherie",
    "brand": "Dior",
    "name": "Miss Dior Cherie",
    "gender": "for women",
    "topNotes": [
      "Cherry",
      "Strawberry",
      "Pineapple",
      "Mandarin Orange"
    ],
    "heartNotes": [
      "Popcorn",
      "Caramel",
      "Rose",
      "Jasmine",
      "Violet"
    ],
    "baseNotes": [
      "Patchouli",
      "Musk",
      "Amber"
    ],
    "seasons": [
      "Ac Venues",
      "Winter",
      "Monsoon Evenings"
    ],
    "time": "Evening",
    "sprays": "2-3 sprays",
    "occasions": [
      "Celebrations",
      "Receptions",
      "Dinner Dates",
      "Formal Events"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Citrus",
      "Floral"
    ],
    "accords": [
      "Earthy",
      "Floral",
      "Fresh",
      "Fruity"
    ]
  },
  {
    "id": "290",
    "slug": "dior-miss-dior",
    "brand": "Dior",
    "name": "Miss Dior",
    "gender": "for women",
    "topNotes": [
      "Aldehydes",
      "Galbanum",
      "Clary Sage",
      "Gardenia",
      "Bergamot"
    ],
    "heartNotes": [
      "Narcissus",
      "Iris",
      "Carnation",
      "Orris Root",
      "Lily-of-the- Valley",
      "Jasmine",
      "Rose",
      "Neroli"
    ],
    "baseNotes": [
      "Oakmoss",
      "Leather",
      "Vetiver",
      "Patchouli",
      "Labdanum",
      "Sandalwood",
      "Amber"
    ],
    "seasons": [
      "Spring",
      "Ac Venues",
      "Mild Winter",
      "Monsoon Evenings"
    ],
    "time": "Day / Evening",
    "sprays": "2-3 sprays VIDEH / MASTER PERFUME CATALOG",
    "occasions": [
      "Lunches",
      "Smart Casuals",
      "Dates",
      "Office",
      "Pujas"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Aromatic",
      "Citrus"
    ],
    "accords": [
      "Earthy",
      "Floral",
      "Fresh",
      "Green"
    ]
  },
  {
    "id": "291",
    "slug": "dior-new-look-1947",
    "brand": "Dior",
    "name": "New Look 1947",
    "gender": "for women and men",
    "topNotes": [
      "Pink Pepper"
    ],
    "heartNotes": [
      "Ylang-Ylang",
      "Jasmine",
      "Gardenia",
      "Rose",
      "Tuberose"
    ],
    "baseNotes": [
      "Benzoin",
      "Vanilla"
    ],
    "seasons": [
      "Spring",
      "Winter"
    ],
    "time": "Evening",
    "sprays": "2-3",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Floral",
      "Spicy"
    ],
    "accords": [
      "Floral",
      "Spicy",
      "Sweet",
      "Warm"
    ]
  },
  {
    "id": "292",
    "slug": "dior-oud-ispahan",
    "brand": "Dior",
    "name": "Oud Ispahan",
    "gender": "for women and men",
    "topNotes": [
      "Labdanum"
    ],
    "heartNotes": [
      "Rose",
      "Patchouli",
      "Saffron"
    ],
    "baseNotes": [
      "Agarwood (Oud)",
      "Sandalwood",
      "Cedar"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Winter"
    ],
    "time": "Evening",
    "sprays": "2-3",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Floral",
      "Spicy"
    ],
    "accords": [
      "Earthy",
      "Floral",
      "Spicy",
      "Warm"
    ]
  },
  {
    "id": "293",
    "slug": "dior-poison",
    "brand": "Dior",
    "name": "Poison",
    "gender": "for women",
    "topNotes": [
      "Plum",
      "Wild Berries",
      "Coriander",
      "Anise",
      "Brazilian Rosewood"
    ],
    "heartNotes": [
      "Tuberose",
      "Incense",
      "White Honey",
      "Cinnamon",
      "Opoponax",
      "Carnation",
      "Jasmine",
      "African Orange Flower",
      "Rose"
    ],
    "baseNotes": [
      "Vanille",
      "Amber",
      "Sandalwood",
      "Heliotrope",
      "Musk",
      "Vetiver"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer",
      "Winter"
    ],
    "time": "Day / Evening",
    "sprays": "4-6",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal",
      "Office"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Citrus",
      "Floral"
    ],
    "accords": [
      "Balsamic",
      "Earthy",
      "Floral",
      "Fresh"
    ]
  },
  {
    "id": "294",
    "slug": "dior-poison-294",
    "brand": "Dior",
    "name": "Poison",
    "gender": "for women",
    "topNotes": [
      "Plum",
      "Wild Berries",
      "Coriander",
      "Anise",
      "Brazilian Rosewood"
    ],
    "heartNotes": [
      "Tuberose",
      "Incense",
      "White Honey",
      "Cinnamon",
      "Opoponax",
      "Carnation",
      "Jasmine",
      "African Orange Flower",
      "Rose"
    ],
    "baseNotes": [
      "Vanille",
      "Amber",
      "Sandalwood",
      "Heliotrope",
      "Musk",
      "Vetiver"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer",
      "Winter"
    ],
    "time": "Day / Evening",
    "sprays": "4-6",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal",
      "Office"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Citrus",
      "Floral"
    ],
    "accords": [
      "Balsamic",
      "Earthy",
      "Floral",
      "Fresh"
    ]
  },
  {
    "id": "295",
    "slug": "dior-poison-girl",
    "brand": "Dior",
    "name": "Poison Girl",
    "gender": "for women",
    "topNotes": [
      "Bitter Orange",
      "Lemon"
    ],
    "heartNotes": [
      "Damask Rose",
      "Grasse Rose",
      "Orange Blossom"
    ],
    "baseNotes": [
      "Vanilla",
      "Almond",
      "Tonka Bean",
      "Tolu Balsam",
      "Sandalwood",
      "Cashmeran",
      "Heliotrope"
    ],
    "seasons": [
      "Spring",
      "Summer",
      "Winter"
    ],
    "time": "Day / Evening",
    "sprays": "4-6",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal",
      "Office"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Citrus",
      "Floral"
    ],
    "accords": [
      "Floral",
      "Fresh",
      "Green",
      "Sweet"
    ]
  },
  {
    "id": "296",
    "slug": "dior-sauvage",
    "brand": "Dior",
    "name": "Sauvage",
    "gender": "for men",
    "topNotes": [
      "Calabrian bergamot",
      "Pepper"
    ],
    "heartNotes": [
      "Sichuan Pepper",
      "Lavender",
      "Pink Pepper",
      "Vetiver",
      "Patchouli",
      "Geranium",
      "elemi"
    ],
    "baseNotes": [
      "Ambroxan",
      "Cedar",
      "Labdanum"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer",
      "Winter"
    ],
    "time": "Day / Evening",
    "sprays": "4-6",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal",
      "Office"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Aromatic",
      "Citrus"
    ],
    "accords": [
      "Earthy",
      "Floral",
      "Fresh",
      "Herbal"
    ]
  },
  {
    "id": "297",
    "slug": "dior-sauvage-297",
    "brand": "Dior",
    "name": "Sauvage",
    "gender": "for men",
    "topNotes": [
      "Calabrian bergamot",
      "Pepper"
    ],
    "heartNotes": [
      "Sichuan Pepper",
      "Lavender",
      "Pink Pepper",
      "Vetiver",
      "Patchouli",
      "Geranium",
      "elemi"
    ],
    "baseNotes": [
      "Ambroxan",
      "Cedar",
      "Labdanum"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer",
      "Winter"
    ],
    "time": "Day / Evening",
    "sprays": "4-6",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal",
      "Office"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Aromatic",
      "Citrus"
    ],
    "accords": [
      "Earthy",
      "Floral",
      "Fresh",
      "Herbal"
    ]
  },
  {
    "id": "298",
    "slug": "dior-sauvage-298",
    "brand": "Dior",
    "name": "Sauvage",
    "gender": "for men",
    "topNotes": [
      "Calabrian bergamot",
      "Pepper"
    ],
    "heartNotes": [
      "Sichuan Pepper",
      "Lavender",
      "Pink Pepper",
      "Vetiver",
      "Patchouli",
      "Geranium",
      "elemi"
    ],
    "baseNotes": [
      "Ambroxan",
      "Cedar",
      "Labdanum"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer",
      "Winter"
    ],
    "time": "Day / Evening",
    "sprays": "4-6",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal",
      "Office"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Aromatic",
      "Citrus"
    ],
    "accords": [
      "Earthy",
      "Floral",
      "Fresh",
      "Herbal"
    ]
  },
  {
    "id": "299",
    "slug": "dior-sauvage-elixir",
    "brand": "Dior",
    "name": "Sauvage Elixir",
    "gender": "for men",
    "topNotes": [
      "Nutmeg",
      "Cinnamon",
      "Cardamom",
      "Grapefruit"
    ],
    "heartNotes": [
      "Lavender"
    ],
    "baseNotes": [
      "Licorice",
      "Sandalwood",
      "Amber",
      "Patchouli",
      "Haitian Vetiver"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer",
      "Winter"
    ],
    "time": "Day / Evening",
    "sprays": "4-6",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal",
      "Office"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Aromatic",
      "Citrus"
    ],
    "accords": [
      "Earthy",
      "Fresh",
      "Herbal",
      "Spicy"
    ]
  },
  {
    "id": "300",
    "slug": "dior-sauvage-parfum",
    "brand": "Dior",
    "name": "Sauvage Parfum",
    "gender": "for men",
    "topNotes": [
      "Bergamot",
      "Mandarin Orange",
      "elemi"
    ],
    "heartNotes": [
      "Sandalwood"
    ],
    "baseNotes": [
      "Olibanum",
      "Tonka Bean",
      "Vanilla"
    ],
    "seasons": [
      "Spring",
      "Summer",
      "Winter"
    ],
    "time": "Day / Evening",
    "sprays": "4-6",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal",
      "Office"
    ],
    "featured": true,
    "families": [
      "Amber/Oriental",
      "Citrus",
      "Woody"
    ],
    "accords": [
      "Fresh",
      "Sweet",
      "Warm",
      "Woody"
    ]
  },
  {
    "id": "301",
    "slug": "dior-spice-blend",
    "brand": "Dior",
    "name": "Spice Blend",
    "gender": "for women and men",
    "topNotes": [
      "Rum",
      "Ginger"
    ],
    "heartNotes": [
      "Pink Pepper",
      "Cinnamon",
      "Black Pepper",
      "Cloves",
      "Nutmeg",
      "Coriander"
    ],
    "baseNotes": [
      "Bay Leaf",
      "Woodsy Notes"
    ],
    "seasons": [
      "Winter"
    ],
    "time": "Evening",
    "sprays": "3-4",
    "occasions": [
      "Date Night",
      "Formal"
    ],
    "featured": false,
    "families": [
      "Spicy",
      "Woody"
    ],
    "accords": [
      "Spicy",
      "Woody"
    ]
  },
  {
    "id": "302",
    "slug": "dior-tobacolor",
    "brand": "Dior",
    "name": "Tobacolor",
    "gender": "for women and men",
    "topNotes": [
      "Not separately listed"
    ],
    "heartNotes": [
      "Not separately listed"
    ],
    "baseNotes": [
      "Not separately listed"
    ],
    "seasons": [
      "Spring",
      "Ac Venues",
      "Mild Winter",
      "Monsoon Evenings"
    ],
    "time": "Day / Evening",
    "sprays": "2-3 sprays Top: Not separately listed \u00e2\u20ac\u00a2 Heart: Not separately listed \u00e2\u20ac\u00a2 Base: Not separately listed",
    "occasions": [
      "Lunches",
      "Smart Casuals",
      "Dates",
      "Office",
      "Pujas"
    ],
    "featured": false,
    "families": [
      "Aromatic"
    ],
    "accords": [
      "Fresh"
    ]
  },
  {
    "id": "303",
    "slug": "dior-vanilla-diorama",
    "brand": "Dior",
    "name": "Vanilla Diorama",
    "gender": "for women and men",
    "topNotes": [
      "Orange",
      "Pink Pepper",
      "Lemon"
    ],
    "heartNotes": [
      "Rum",
      "Cacao",
      "Cardamom"
    ],
    "baseNotes": [
      "Bourbon Vanilla",
      "Sandalwood",
      "Patchouli"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer",
      "Winter"
    ],
    "time": "Day / Evening",
    "sprays": "4-6",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal",
      "Office"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Citrus",
      "Gourmand"
    ],
    "accords": [
      "Earthy",
      "Fresh",
      "Spicy",
      "Sweet"
    ]
  },
  {
    "id": "304",
    "slug": "diptyque-do-son-eau-de-parfum",
    "brand": "Diptyque",
    "name": "Do Son Eau de Parfum",
    "gender": "for women and men",
    "topNotes": [
      "Not separately listed"
    ],
    "heartNotes": [
      "Not separately listed"
    ],
    "baseNotes": [
      "Not separately listed"
    ],
    "seasons": [
      "Spring",
      "Summer",
      "Monsoon"
    ],
    "time": "Day",
    "sprays": "3-4 sprays; 2-3 indoors",
    "occasions": [
      "Travel",
      "Casual Daytime Events",
      "College",
      "Office",
      "Brunch"
    ],
    "featured": false,
    "families": [
      "Aromatic"
    ],
    "accords": [
      "Fresh"
    ]
  },
  {
    "id": "305",
    "slug": "diptyque-eau-rose",
    "brand": "Diptyque",
    "name": "Eau Rose",
    "gender": "for women",
    "topNotes": [
      "Litchi",
      "Black Currant",
      "Bergamot"
    ],
    "heartNotes": [
      "Rose",
      "Geranium",
      "Jasmine"
    ],
    "baseNotes": [
      "Musk",
      "Virginia Cedar",
      "White Honey"
    ],
    "seasons": [
      "Spring",
      "Summer",
      "Monsoon"
    ],
    "time": "Day",
    "sprays": "3-4 sprays; 2-3 indoors",
    "occasions": [
      "Travel",
      "Casual Daytime Events",
      "College",
      "Office",
      "Brunch"
    ],
    "featured": false,
    "families": [
      "Citrus",
      "Floral",
      "Fruity"
    ],
    "accords": [
      "Floral",
      "Fresh",
      "Fruity",
      "Musky"
    ]
  },
  {
    "id": "306",
    "slug": "diptyque-fleur-de-peau-eau-de-parfum",
    "brand": "Diptyque",
    "name": "Fleur de Peau Eau de Parfum",
    "gender": "for women and men",
    "topNotes": [
      "Aldehydes",
      "Pink Pepper",
      "Angelica",
      "Bergamot"
    ],
    "heartNotes": [
      "Iris",
      "Turkish Rose"
    ],
    "baseNotes": [
      "Musk",
      "Ambrette (Musk Mallow)",
      "Carrot",
      "Ambergris",
      "Sandalwood",
      "Leather",
      "Amberwood"
    ],
    "seasons": [
      "Spring",
      "Ac Venues",
      "Mild Winter",
      "Monsoon Evenings"
    ],
    "time": "Day / Evening",
    "sprays": "2-3 sprays",
    "occasions": [
      "Lunches",
      "Smart Casuals",
      "Dates",
      "Office",
      "Pujas"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Citrus",
      "Floral"
    ],
    "accords": [
      "Floral",
      "Fresh",
      "Leather",
      "Musky"
    ]
  },
  {
    "id": "307",
    "slug": "diptyque-geranium-odorata",
    "brand": "Diptyque",
    "name": "Geranium Odorata",
    "gender": "for women and men",
    "topNotes": [
      "Not separately listed"
    ],
    "heartNotes": [
      "Not separately listed"
    ],
    "baseNotes": [
      "Not separately listed"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer"
    ],
    "time": "Day",
    "sprays": "3-4",
    "occasions": [
      "Casual",
      "Office"
    ],
    "featured": false,
    "families": [
      "Aromatic"
    ],
    "accords": [
      "Fresh"
    ]
  },
  {
    "id": "308",
    "slug": "diptyque-kyoto",
    "brand": "Diptyque",
    "name": "Kyoto",
    "gender": "for women and men",
    "topNotes": [
      "Not separately listed"
    ],
    "heartNotes": [
      "Not separately listed"
    ],
    "baseNotes": [
      "Not separately listed"
    ],
    "seasons": [
      "Spring",
      "Summer",
      "Monsoon"
    ],
    "time": "Day",
    "sprays": "3-4 sprays; 2-3 indoors",
    "occasions": [
      "Travel",
      "Casual Daytime Events",
      "College",
      "Office",
      "Brunch"
    ],
    "featured": false,
    "families": [
      "Aromatic"
    ],
    "accords": [
      "Fresh"
    ]
  },
  {
    "id": "309",
    "slug": "diptyque-philosykos-eau-de-parfum",
    "brand": "Diptyque",
    "name": "Philosykos Eau de Parfum",
    "gender": "for women and men",
    "topNotes": [
      "Not separately listed"
    ],
    "heartNotes": [
      "Not separately listed"
    ],
    "baseNotes": [
      "Not separately listed"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer"
    ],
    "time": "Day",
    "sprays": "3-4",
    "occasions": [
      "Casual",
      "Office"
    ],
    "featured": false,
    "families": [
      "Aromatic"
    ],
    "accords": [
      "Fresh"
    ]
  },
  {
    "id": "310",
    "slug": "-310",
    "brand": "Archive",
    "name": "Classified Fragrance",
    "gender": "Unisex",
    "topNotes": [
      "Fig Leaf",
      "Fig"
    ],
    "heartNotes": [
      "Green Notes",
      "Coconut"
    ],
    "baseNotes": [
      "Fig Tree",
      "Woody Notes",
      "Cedar"
    ],
    "seasons": [
      "Ac Venues",
      "Monsoon Evenings",
      "Winter"
    ],
    "time": "Evening",
    "sprays": "3-4",
    "occasions": [
      "Celebrations",
      "Dinner Dates",
      "Formal Events",
      "Receptions"
    ],
    "featured": false,
    "families": [
      "Fruity",
      "Woody"
    ],
    "accords": [
      "Fruity",
      "Green",
      "Woody"
    ]
  },
  {
    "id": "311",
    "slug": "diptyque-tempo-eau-de-parfum",
    "brand": "Diptyque",
    "name": "Tempo Eau de Parfum",
    "gender": "for women and men",
    "topNotes": [
      "Not separately listed"
    ],
    "heartNotes": [
      "Not separately listed"
    ],
    "baseNotes": [
      "Not separately listed"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer"
    ],
    "time": "Day",
    "sprays": "3-4",
    "occasions": [
      "Casual",
      "Office"
    ],
    "featured": false,
    "families": [
      "Aromatic"
    ],
    "accords": [
      "Fresh"
    ]
  },
  {
    "id": "312",
    "slug": "-312",
    "brand": "Archive",
    "name": "Classified Fragrance",
    "gender": "Unisex",
    "topNotes": [
      "Not separately listed"
    ],
    "heartNotes": [
      "Not separately listed"
    ],
    "baseNotes": [
      "Not separately listed"
    ],
    "seasons": [
      "Spring",
      "Ac Venues",
      "Mild Winter",
      "Monsoon Evenings"
    ],
    "time": "Day / Evening",
    "sprays": "2-3 sprays",
    "occasions": [
      "Lunches",
      "Smart Casuals",
      "Dates",
      "Office",
      "Pujas"
    ],
    "featured": false,
    "families": [
      "Aromatic"
    ],
    "accords": [
      "Fresh"
    ]
  },
  {
    "id": "313",
    "slug": "diptyque-volutes-eau-de-parfum",
    "brand": "Diptyque",
    "name": "Volutes Eau de Parfum",
    "gender": "for women and men",
    "topNotes": [
      "Not separately listed"
    ],
    "heartNotes": [
      "Not separately listed"
    ],
    "baseNotes": [
      "Not separately listed"
    ],
    "seasons": [
      "Ac Venues",
      "Winter",
      "Monsoon Evenings"
    ],
    "time": "Evening",
    "sprays": "2-3 sprays",
    "occasions": [
      "Celebrations",
      "Receptions",
      "Dinner Dates",
      "Formal Events"
    ],
    "featured": false,
    "families": [
      "Aromatic"
    ],
    "accords": [
      "Fresh"
    ]
  },
  {
    "id": "314",
    "slug": "donna-karan-dkny-stories",
    "brand": "Donna Karan",
    "name": "DKNY Stories",
    "gender": "for women",
    "topNotes": [
      "Milk Mousse",
      "Guava",
      "Black Cardamom",
      "Pink Pepper"
    ],
    "heartNotes": [
      "Iris",
      "White Tea",
      "Jasmine Sambac"
    ],
    "baseNotes": [
      "Vanilla",
      "White Sandalwood",
      "Ambergris"
    ],
    "seasons": [
      "Spring",
      "Ac Venues",
      "Mild Winter",
      "Monsoon Evenings"
    ],
    "time": "Day / Evening",
    "sprays": "2-3 sprays",
    "occasions": [
      "Lunches",
      "Smart Casuals",
      "Dates",
      "Office",
      "Pujas"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Floral",
      "Spicy"
    ],
    "accords": [
      "Floral",
      "Powdery",
      "Spicy",
      "Sweet"
    ]
  },
  {
    "id": "315",
    "slug": "donna-karan-dkny-nectar-love",
    "brand": "Donna Karan",
    "name": "DKNY Nectar Love",
    "gender": "for women",
    "topNotes": [
      "Solar Notes",
      "Nectarine",
      "Yellow Freesia",
      "Mandarin Orange",
      "Grapefruit"
    ],
    "heartNotes": [
      "Mirabelle",
      "Jasmine",
      "Lily-of-the-Valley"
    ],
    "baseNotes": [
      "Beeswax",
      "Vanilla",
      "Musk",
      "Cedar",
      "Neroli"
    ],
    "seasons": [
      "Spring",
      "Summer",
      "Winter"
    ],
    "time": "Day / Evening",
    "sprays": "4-6",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal",
      "Office"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Citrus",
      "Floral"
    ],
    "accords": [
      "Floral",
      "Fresh",
      "Musky",
      "Sweet"
    ]
  },
  {
    "id": "316",
    "slug": "dolce-gabbana-l-imperatrice-limited-edition",
    "brand": "Dolce Gabbana",
    "name": "L Imperatrice Limited Edition",
    "gender": "for women",
    "topNotes": [
      "Watermelon",
      "Strawberry"
    ],
    "heartNotes": [
      "Pink Peony",
      "Damask Rose",
      "Magnolia",
      "Cyclamen"
    ],
    "baseNotes": [
      "Musk",
      "Woody Notes",
      "Sandalwood",
      "Smoke"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer"
    ],
    "time": "Day",
    "sprays": "4-6",
    "occasions": [
      "Brunch",
      "Casual Daytime Events",
      "College",
      "Office",
      "Travel"
    ],
    "featured": false,
    "families": [
      "Aquatic",
      "Floral",
      "Fruity"
    ],
    "accords": [
      "Floral",
      "Fruity",
      "Marine",
      "Musky"
    ]
  },
  {
    "id": "317",
    "slug": "dolce-gabbana-dolce-gabbana",
    "brand": "Dolce Gabbana",
    "name": "Dolce Gabbana",
    "gender": "for women",
    "topNotes": [
      "Aldehydes",
      "Basil",
      "Citruses",
      "Ivy",
      "Mandarin Orange",
      "Freesia",
      "Bergamot"
    ],
    "heartNotes": [
      "Carnation",
      "Marigold",
      "Coriander",
      "Orange Blossom",
      "Lily",
      "Jasmine",
      "Bulgarian Rose",
      "Lily-of-the-Valley"
    ],
    "baseNotes": [
      "Sandalwood",
      "Vanilla",
      "Musk",
      "Tonka Bean"
    ],
    "seasons": [
      "Spring",
      "Ac Venues",
      "Mild Winter",
      "Monsoon Evenings"
    ],
    "time": "Day / Evening",
    "sprays": "2-3 sprays",
    "occasions": [
      "Lunches",
      "Smart Casuals",
      "Dates",
      "Office",
      "Pujas"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Aromatic",
      "Citrus"
    ],
    "accords": [
      "Floral",
      "Fresh",
      "Herbal",
      "Musky"
    ]
  },
  {
    "id": "318",
    "slug": "dolce-gabbana-not-stated",
    "brand": "Dolce & Gabbana",
    "name": "Not stated",
    "gender": "Unisex",
    "topNotes": [
      "Juniper berry",
      "Blood orange",
      "Sicilian lemon"
    ],
    "heartNotes": [
      "Proven\u00e7al lavender",
      "Geranium",
      "Chili",
      "Clary sage"
    ],
    "baseNotes": [
      "Cedarwood",
      "Patchouli",
      "Vetiver"
    ],
    "seasons": [
      "Spring",
      "Summer",
      "Monsoon"
    ],
    "time": "Day",
    "sprays": "3-4 sprays; 2-3 indoors",
    "occasions": [
      "Travel",
      "Casual Daytime Events",
      "College",
      "Office",
      "Brunch"
    ],
    "featured": false,
    "families": [
      "Aromatic",
      "Citrus",
      "Floral"
    ],
    "accords": [
      "Earthy",
      "Floral",
      "Fresh",
      "Fruity"
    ]
  },
  {
    "id": "319",
    "slug": "dolce-gabbana-homme",
    "brand": "Dolce Gabbana",
    "name": "Homme",
    "gender": "for men",
    "topNotes": [
      "Grapefruit",
      "Mandarin Orange"
    ],
    "heartNotes": [
      "Sea water",
      "Juniper"
    ],
    "baseNotes": [
      "Musk",
      "Amberwood"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer"
    ],
    "time": "Day",
    "sprays": "4-6",
    "occasions": [
      "Brunch",
      "Casual Daytime Events",
      "College",
      "Office",
      "Travel"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Aquatic",
      "Citrus"
    ],
    "accords": [
      "Fresh",
      "Marine",
      "Musky",
      "Warm"
    ]
  },
  {
    "id": "320",
    "slug": "when-to-wear-light-blue-forever",
    "brand": "When To Wear",
    "name": "Light Blue Forever",
    "gender": "for women",
    "topNotes": [
      "Lemon",
      "Blood Orange",
      "Green Apple"
    ],
    "heartNotes": [
      "Orange Blossom",
      "White Flowers"
    ],
    "baseNotes": [
      "White Musk",
      "Cedar",
      "Cashmeran"
    ],
    "seasons": [
      "Spring",
      "Summer",
      "Monsoon"
    ],
    "time": "Day",
    "sprays": "3-4 sprays; 2-3 indoors Sprays: 3-4 sprays; 2-3 indoors",
    "occasions": [
      "Travel",
      "Casual Daytime Events",
      "College",
      "Office",
      "Brunch"
    ],
    "featured": false,
    "families": [
      "Citrus",
      "Floral",
      "Fruity"
    ],
    "accords": [
      "Floral",
      "Fresh",
      "Fruity",
      "Green"
    ]
  },
  {
    "id": "321",
    "slug": "dolce-gabbana-light-blue-italian-love",
    "brand": "Dolce Gabbana",
    "name": "Light Blue Italian Love",
    "gender": "for women",
    "topNotes": [
      "Italian Lemon",
      "Granny Smith apple"
    ],
    "heartNotes": [
      "Ambrette (Musk Mallow)",
      "Jasmine Sambac",
      "White Rose"
    ],
    "baseNotes": [
      "Sandalwood",
      "White Musk",
      "Virginia Cedar",
      "Amber"
    ],
    "seasons": [
      "Spring",
      "Summer",
      "Winter"
    ],
    "time": "Day / Evening",
    "sprays": "4-6",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal",
      "Office"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Citrus",
      "Floral"
    ],
    "accords": [
      "Floral",
      "Fresh",
      "Fruity",
      "Musky"
    ]
  },
  {
    "id": "322",
    "slug": "dolce-gabbana-vibes",
    "brand": "Dolce Gabbana",
    "name": "Vibes",
    "gender": "for men",
    "topNotes": [
      "Sicilian Lemon"
    ],
    "heartNotes": [
      "Cypress"
    ],
    "baseNotes": [
      "Amberwood"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer"
    ],
    "time": "Day",
    "sprays": "4-6",
    "occasions": [
      "Brunch",
      "Casual Daytime Events",
      "College",
      "Office",
      "Travel"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Citrus",
      "Woody"
    ],
    "accords": [
      "Fresh",
      "Warm",
      "Woody"
    ]
  },
  {
    "id": "323",
    "slug": "dolce-gabbana-the-one",
    "brand": "Dolce Gabbana",
    "name": "The One",
    "gender": "for women",
    "topNotes": [
      "Peach",
      "Litchi",
      "Mandarin Orange",
      "Bergamot"
    ],
    "heartNotes": [
      "Lily",
      "Plum",
      "Jasmine",
      "Lily-of-the-Valley"
    ],
    "baseNotes": [
      "Vanilla",
      "Amber",
      "Musk",
      "Vetiver"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer",
      "Winter"
    ],
    "time": "Day / Evening",
    "sprays": "4-6",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal",
      "Office"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Citrus",
      "Floral"
    ],
    "accords": [
      "Earthy",
      "Floral",
      "Fresh",
      "Fruity"
    ]
  },
  {
    "id": "324",
    "slug": "dolce-gabbana-the-one-for-men",
    "brand": "Dolce Gabbana",
    "name": "The One for Men",
    "gender": "for men",
    "topNotes": [
      "Grapefruit",
      "Coriander",
      "Basil"
    ],
    "heartNotes": [
      "Ginger",
      "Cardamom",
      "Orange Blossom"
    ],
    "baseNotes": [
      "Amber",
      "Tobacco",
      "Cedar"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer",
      "Winter"
    ],
    "time": "Day / Evening",
    "sprays": "4-6",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal",
      "Office"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Aromatic",
      "Citrus"
    ],
    "accords": [
      "Floral",
      "Fresh",
      "Herbal",
      "Spicy"
    ]
  },
  {
    "id": "325",
    "slug": "dolce-gabbana-the-one-grey",
    "brand": "Dolce Gabbana",
    "name": "The One Grey",
    "gender": "for men",
    "topNotes": [
      "Grapefruit",
      "Cardamom",
      "Coriander",
      "Basil"
    ],
    "heartNotes": [
      "Clary Sage",
      "Lavender",
      "Geranium"
    ],
    "baseNotes": [
      "Vetiver",
      "Tobacco",
      "Patchouli",
      "Labdanum"
    ],
    "seasons": [
      "Spring",
      "Ac Venues",
      "Mild Winter",
      "Monsoon Evenings"
    ],
    "time": "Day / Evening",
    "sprays": "2-3 sprays",
    "occasions": [
      "Lunches",
      "Smart Casuals",
      "Dates",
      "Office",
      "Pujas"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Aromatic",
      "Citrus"
    ],
    "accords": [
      "Earthy",
      "Floral",
      "Fresh",
      "Herbal"
    ]
  },
  {
    "id": "326",
    "slug": "donna-karan-dkny-be-delicious-fresh-blossom",
    "brand": "Donna Karan",
    "name": "DKNY Be Delicious Fresh Blossom",
    "gender": "for women",
    "topNotes": [
      "Grapefruit",
      "Apricot",
      "Cassis"
    ],
    "heartNotes": [
      "Rose",
      "Lily-of- the-Valley",
      "Jasmine"
    ],
    "baseNotes": [
      "Red Apple",
      "Woodsy Notes"
    ],
    "seasons": [
      "Spring",
      "Summer",
      "Monsoon"
    ],
    "time": "Day",
    "sprays": "3-4 sprays; 2-3 indoors",
    "occasions": [
      "Travel",
      "Casual Daytime Events",
      "College",
      "Office",
      "Brunch"
    ],
    "featured": false,
    "families": [
      "Citrus",
      "Floral",
      "Fruity"
    ],
    "accords": [
      "Floral",
      "Fresh",
      "Fruity",
      "Woody"
    ]
  },
  {
    "id": "327",
    "slug": "donna-karan-black-cashmere",
    "brand": "Donna Karan",
    "name": "Black Cashmere",
    "gender": "for women",
    "topNotes": [
      "Nutmeg",
      "Saffron",
      "Olibanum"
    ],
    "heartNotes": [
      "White Pepper",
      "Rose",
      "Cloves"
    ],
    "baseNotes": [
      "Woody Notes",
      "Amber",
      "Patchouli",
      "Vanilla",
      "Olibanum"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Winter"
    ],
    "time": "Evening",
    "sprays": "2-3",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Floral",
      "Spicy"
    ],
    "accords": [
      "Earthy",
      "Floral",
      "Spicy",
      "Sweet"
    ]
  },
  {
    "id": "328",
    "slug": "donna-karan-cashmere-mist-edp",
    "brand": "Donna Karan",
    "name": "Cashmere Mist EDP",
    "gender": "for women",
    "topNotes": [
      "Bergamot"
    ],
    "heartNotes": [
      "Suede",
      "Lily-of-the-Valley",
      "Jasmine"
    ],
    "baseNotes": [
      "Cashmere Musk",
      "Sandalwood",
      "Amber",
      "Vanilla"
    ],
    "seasons": [
      "Spring",
      "Summer",
      "Winter"
    ],
    "time": "Day / Evening",
    "sprays": "4-6",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal",
      "Office"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Citrus",
      "Floral"
    ],
    "accords": [
      "Floral",
      "Fresh",
      "Leather",
      "Musky"
    ]
  },
  {
    "id": "329",
    "slug": "ds-durga-pistachio",
    "brand": "Ds Durga",
    "name": "Pistachio",
    "gender": "for women and men",
    "topNotes": [
      "Pistachio",
      "Cardamom"
    ],
    "heartNotes": [
      "Pistachio",
      "Almond"
    ],
    "baseNotes": [
      "Pistachio",
      "Patchouli",
      "Vanilla"
    ],
    "seasons": [
      "Monsoon",
      "Winter"
    ],
    "time": "Evening",
    "sprays": "2-3",
    "occasions": [
      "Date Night",
      "Formal"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Gourmand",
      "Spicy"
    ],
    "accords": [
      "Earthy",
      "Spicy",
      "Sweet",
      "Warm"
    ]
  },
  {
    "id": "330",
    "slug": "alfred-dunhill-dunhill",
    "brand": "Alfred Dunhill",
    "name": "Dunhill",
    "gender": "for men",
    "topNotes": [
      "Lavender",
      "Geranium",
      "Lemon",
      "Clary Sage"
    ],
    "heartNotes": [
      "Iris",
      "Cedar",
      "Orris Root",
      "Carnation",
      "Rose",
      "Jasmine"
    ],
    "baseNotes": [
      "Musk",
      "Leather",
      "Tonka Bean",
      "Sandalwood",
      "Cedar",
      "Vetiver",
      "Oakmoss"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer",
      "Winter"
    ],
    "time": "Day / Evening",
    "sprays": "4-6",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal",
      "Office"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Aromatic",
      "Citrus"
    ],
    "accords": [
      "Earthy",
      "Floral",
      "Fresh",
      "Herbal"
    ]
  },
  {
    "id": "331",
    "slug": "electimuss-icon",
    "brand": "Electimuss",
    "name": "Icon",
    "gender": "for men",
    "topNotes": [
      "Neroli",
      "Bergamot",
      "Black Pepper",
      "Petitgrain"
    ],
    "heartNotes": [
      "Black Pepper",
      "Lavender",
      "Cardamom",
      "Juniper Berries",
      "Sage"
    ],
    "baseNotes": [
      "Vetiver",
      "Oakmoss",
      "Iris",
      "Leather",
      "Agarwood (Oud)"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer"
    ],
    "time": "Day",
    "sprays": "4-6",
    "occasions": [
      "Casual",
      "Formal",
      "Office"
    ],
    "featured": false,
    "families": [
      "Aromatic",
      "Citrus",
      "Floral"
    ],
    "accords": [
      "Earthy",
      "Floral",
      "Fresh",
      "Herbal"
    ]
  },
  {
    "id": "332",
    "slug": "archive-black-caviar",
    "brand": "Archive",
    "name": "Black Caviar",
    "gender": "for women and men",
    "topNotes": [
      "Bergamot",
      "Cumin",
      "Lavender",
      "Mint",
      "Geranium"
    ],
    "heartNotes": [
      "Caviar",
      "Egyptian balsam",
      "Big Strawberry",
      "Geranium",
      "Tuberose",
      "Rose"
    ],
    "baseNotes": [
      "Benzoin",
      "Patchouli",
      "Vanilla",
      "Musk",
      "Amber",
      "Tonka Bean",
      "Cedar"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer",
      "Winter"
    ],
    "time": "Day / Evening",
    "sprays": "4-6",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal",
      "Office"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Aromatic",
      "Citrus"
    ],
    "accords": [
      "Earthy",
      "Floral",
      "Fresh",
      "Fruity"
    ]
  },
  {
    "id": "333",
    "slug": "electimuss-mercurial-cashmere",
    "brand": "Electimuss",
    "name": "Mercurial Cashmere",
    "gender": "for women and men",
    "topNotes": [
      "Cardamom",
      "Bergamot",
      "Pink Pepper"
    ],
    "heartNotes": [
      "Tuberose",
      "Iris",
      "Violet",
      "Ambergris"
    ],
    "baseNotes": [
      "Vanilla",
      "Caramel",
      "Cashmere Wood",
      "Tonka Bean",
      "Musk",
      "Cedar",
      "Agarwood (Oud)"
    ],
    "seasons": [
      "Spring",
      "Summer",
      "Winter"
    ],
    "time": "Day / Evening",
    "sprays": "4-6",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal",
      "Office"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Citrus",
      "Floral"
    ],
    "accords": [
      "Floral",
      "Fresh",
      "Musky",
      "Powdery"
    ]
  },
  {
    "id": "334",
    "slug": "paco-rabanne-invictus-victory-elixir",
    "brand": "Paco Rabanne",
    "name": "Invictus Victory Elixir",
    "gender": "for men",
    "topNotes": [
      "Lavender",
      "Cardamom",
      "Black Pepper"
    ],
    "heartNotes": [
      "Incense",
      "Patchouli"
    ],
    "baseNotes": [
      "Vanilla Pod",
      "Tonka Bean"
    ],
    "seasons": [
      "Monsoon",
      "Winter"
    ],
    "time": "Evening",
    "sprays": "2-3",
    "occasions": [
      "Date Night",
      "Formal"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Aromatic",
      "Spicy"
    ],
    "accords": [
      "Balsamic",
      "Earthy",
      "Herbal",
      "Spicy"
    ]
  },
  {
    "id": "335",
    "slug": "elizabeth-arden-green-tea",
    "brand": "Elizabeth Arden",
    "name": "Green Tea",
    "gender": "for women",
    "topNotes": [
      "Lemon",
      "Bergamot",
      "Mint",
      "Orange Peel",
      "Rhubarb"
    ],
    "heartNotes": [
      "Jasmine",
      "Oakmoss",
      "Musk",
      "Fennel",
      "Carnation",
      "White Amber"
    ],
    "baseNotes": [
      "Green Tea",
      "Jasmine",
      "Oakmoss",
      "Musk",
      "Celery Seeds",
      "Caraway",
      "Cloves",
      "Amber"
    ],
    "seasons": [
      "Spring",
      "Summer",
      "Monsoon"
    ],
    "time": "Day",
    "sprays": "3-4 sprays; 2-3 indoors",
    "occasions": [
      "Travel",
      "Casual Daytime Events",
      "College",
      "Office",
      "Brunch"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Aromatic",
      "Citrus"
    ],
    "accords": [
      "Floral",
      "Fresh",
      "Green",
      "Herbal"
    ]
  },
  {
    "id": "336",
    "slug": "ermenegildo-zegna-florentine-iris",
    "brand": "Ermenegildo Zegna",
    "name": "Florentine Iris",
    "gender": "for men",
    "topNotes": [
      "Not separately listed"
    ],
    "heartNotes": [
      "Not separately listed"
    ],
    "baseNotes": [
      "Not separately listed"
    ],
    "seasons": [
      "Spring",
      "Ac Venues",
      "Mild Winter",
      "Monsoon Evenings"
    ],
    "time": "Day / Evening",
    "sprays": "2-3 sprays",
    "occasions": [
      "Lunches",
      "Smart Casuals",
      "Dates",
      "Office",
      "Pujas"
    ],
    "featured": false,
    "families": [
      "Aromatic"
    ],
    "accords": [
      "Fresh"
    ]
  },
  {
    "id": "337",
    "slug": "escada-cherry-in-the-air",
    "brand": "Escada",
    "name": "Cherry in the Air",
    "gender": "for men",
    "topNotes": [
      "Not separately listed"
    ],
    "heartNotes": [
      "Not separately listed"
    ],
    "baseNotes": [
      "Not separately listed"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer"
    ],
    "time": "Day",
    "sprays": "3-4",
    "occasions": [
      "Casual",
      "Office"
    ],
    "featured": false,
    "families": [
      "Aromatic"
    ],
    "accords": [
      "Fresh"
    ]
  },
  {
    "id": "338",
    "slug": "archive-fragrance-338",
    "brand": "Archive",
    "name": "Fragrance 338",
    "gender": "for women",
    "topNotes": [
      "Sour Cherry",
      "Raspberry",
      "Daim",
      "Mandarin Orange"
    ],
    "heartNotes": [
      "Marshmallow",
      "Vanilla",
      "Gardenia",
      "Orchid"
    ],
    "baseNotes": [
      "White Suede",
      "Sandalwood",
      "Musk",
      "Oak"
    ],
    "seasons": [
      "Spring",
      "Summer",
      "Winter"
    ],
    "time": "Day / Evening",
    "sprays": "4-6",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal",
      "Office"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Citrus",
      "Floral"
    ],
    "accords": [
      "Floral",
      "Fresh",
      "Fruity",
      "Leather"
    ]
  },
  {
    "id": "339",
    "slug": "escada-sorbetto-rosso",
    "brand": "Escada",
    "name": "Sorbetto Rosso",
    "gender": "for women",
    "topNotes": [
      "Pear",
      "Calone",
      "Tangerine"
    ],
    "heartNotes": [
      "Watermelon",
      "Watery Notes",
      "Strawberry",
      "Apple",
      "Sea Salt",
      "Tiare Flower",
      "Hedione",
      "Rose"
    ],
    "baseNotes": [
      "Praline",
      "Musk",
      "Amber"
    ],
    "seasons": [
      "Spring",
      "Summer",
      "Monsoon"
    ],
    "time": "Day",
    "sprays": "3-4 sprays; 2-3 indoors",
    "occasions": [
      "Travel",
      "Casual Daytime Events",
      "College",
      "Office",
      "Brunch"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Aquatic",
      "Floral"
    ],
    "accords": [
      "Floral",
      "Fruity",
      "Marine",
      "Musky"
    ]
  },
  {
    "id": "340",
    "slug": "escentric-molecules-molecule-01",
    "brand": "Escentric Molecules",
    "name": "Molecule 01",
    "gender": "for women and men",
    "topNotes": [
      "Not separately listed"
    ],
    "heartNotes": [
      "Not separately listed"
    ],
    "baseNotes": [
      "Not separately listed"
    ],
    "seasons": [
      "Spring",
      "Ac Venues",
      "Mild Winter",
      "Monsoon Evenings"
    ],
    "time": "Day / Evening",
    "sprays": "2-3 sprays VIDEH / MASTER PERFUME CATALOG",
    "occasions": [
      "Lunches",
      "Smart Casuals",
      "Dates",
      "Office",
      "Pujas"
    ],
    "featured": false,
    "families": [
      "Aromatic"
    ],
    "accords": [
      "Fresh"
    ]
  },
  {
    "id": "341",
    "slug": "escentric-molecules-molecule-01-iris",
    "brand": "Escentric Molecules",
    "name": "Molecule 01 Iris",
    "gender": "for women and men",
    "topNotes": [
      "Not separately listed"
    ],
    "heartNotes": [
      "Not separately listed"
    ],
    "baseNotes": [
      "Not separately listed"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer"
    ],
    "time": "Day",
    "sprays": "3-4",
    "occasions": [
      "Casual",
      "Office"
    ],
    "featured": false,
    "families": [
      "Aromatic"
    ],
    "accords": [
      "Fresh"
    ]
  },
  {
    "id": "342",
    "slug": "esika-beauty-red",
    "brand": "Esika",
    "name": "Beauty Red",
    "gender": "for women",
    "topNotes": [
      "Peach",
      "Grapes",
      "Neroli",
      "Mandarin Orange",
      "Orange"
    ],
    "heartNotes": [
      "Jasmine",
      "Gardenia",
      "Rose",
      "Violet",
      "Orange Blossom",
      "Tuberose"
    ],
    "baseNotes": [
      "Cedar",
      "Sandalwood",
      "Patchouli",
      "Musk",
      "Amber"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer",
      "Winter"
    ],
    "time": "Day / Evening",
    "sprays": "4-6",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal",
      "Office"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Citrus",
      "Floral"
    ],
    "accords": [
      "Earthy",
      "Floral",
      "Fresh",
      "Fruity"
    ]
  },
  {
    "id": "343",
    "slug": "esika-secret-musk",
    "brand": "Esika",
    "name": "Secret Musk",
    "gender": "for women",
    "topNotes": [
      "Not separately listed"
    ],
    "heartNotes": [
      "Not separately listed"
    ],
    "baseNotes": [
      "Not separately listed"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer"
    ],
    "time": "Day",
    "sprays": "3-4",
    "occasions": [
      "Casual",
      "Office"
    ],
    "featured": false,
    "families": [
      "Aromatic"
    ],
    "accords": [
      "Fresh"
    ]
  },
  {
    "id": "344",
    "slug": "essential-parfums-bois-imperial",
    "brand": "Essential Parfums",
    "name": "Bois Imperial",
    "gender": "for women and men",
    "topNotes": [
      "Not separately listed"
    ],
    "heartNotes": [
      "Not separately listed"
    ],
    "baseNotes": [
      "Not separately listed"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer"
    ],
    "time": "Day",
    "sprays": "3-4",
    "occasions": [
      "Casual",
      "Office"
    ],
    "featured": false,
    "families": [
      "Aromatic"
    ],
    "accords": [
      "Fresh"
    ]
  },
  {
    "id": "345",
    "slug": "estee-lauder-pleasures",
    "brand": "Estee Lauder",
    "name": "Pleasures",
    "gender": "for women",
    "topNotes": [
      "Green Notes",
      "Freesia",
      "Pink Pepper",
      "Violet",
      "Violet Leaf",
      "Tuberose",
      "Red Berries"
    ],
    "heartNotes": [
      "Lily-of-the-Valley",
      "Peony",
      "Lilac",
      "Lily",
      "Rose",
      "Jasmine",
      "Geranium",
      "Karo Karounde"
    ],
    "baseNotes": [
      "Musk",
      "Cedar",
      "Sandalwood",
      "Patchouli"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Winter"
    ],
    "time": "Evening",
    "sprays": "3-4",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal"
    ],
    "featured": false,
    "families": [
      "Floral",
      "Spicy",
      "Woody"
    ],
    "accords": [
      "Earthy",
      "Floral",
      "Green",
      "Musky"
    ]
  },
  {
    "id": "346",
    "slug": "etat-libre-d-orange-archives-69",
    "brand": "Etat Libre D Orange",
    "name": "Archives 69",
    "gender": "for women and men",
    "topNotes": [
      "Pink Pepper",
      "Paprika",
      "Mandarin Orange"
    ],
    "heartNotes": [
      "Incense",
      "Plum",
      "Orchid"
    ],
    "baseNotes": [
      "Camphor",
      "Musk",
      "Benzoin",
      "Patchouli"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer"
    ],
    "time": "Day",
    "sprays": "4-6",
    "occasions": [
      "Brunch",
      "Casual Daytime Events",
      "College",
      "Office",
      "Travel"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Citrus",
      "Floral"
    ],
    "accords": [
      "Balsamic",
      "Earthy",
      "Floral",
      "Fresh"
    ]
  },
  {
    "id": "347",
    "slug": "etat-libre-d-orange-exit-the-king",
    "brand": "Etat Libre D Orange",
    "name": "Exit The King",
    "gender": "for women and men",
    "topNotes": [
      "Soap",
      "Aldehydes",
      "Musk",
      "Pink Pepper",
      "Timur"
    ],
    "heartNotes": [
      "Rose",
      "Jasmine",
      "Lily-of-the-Valley"
    ],
    "baseNotes": [
      "Moss",
      "Patchouli",
      "Ambroxan",
      "Sandalwood"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Winter"
    ],
    "time": "Evening",
    "sprays": "3-4",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal"
    ],
    "featured": false,
    "families": [
      "Floral",
      "Spicy",
      "Woody"
    ],
    "accords": [
      "Earthy",
      "Floral",
      "Musky",
      "Spicy"
    ]
  },
  {
    "id": "348",
    "slug": "etat-libre-d-orange-rien",
    "brand": "Etat Libre D Orange",
    "name": "Rien",
    "gender": "for women and men",
    "topNotes": [
      "Not separately listed"
    ],
    "heartNotes": [
      "Not separately listed"
    ],
    "baseNotes": [
      "Not separately listed"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer"
    ],
    "time": "Day",
    "sprays": "3-4",
    "occasions": [
      "Casual",
      "Office"
    ],
    "featured": false,
    "families": [
      "Aromatic"
    ],
    "accords": [
      "Fresh"
    ]
  },
  {
    "id": "349",
    "slug": "etat-libre-d-orange-you-or-someone-like-you",
    "brand": "Etat Libre D Orange",
    "name": "You Or Someone Like You",
    "gender": "for women and men",
    "topNotes": [
      "Not separately listed"
    ],
    "heartNotes": [
      "Not separately listed"
    ],
    "baseNotes": [
      "Not separately listed  NOTES"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer"
    ],
    "time": "Day",
    "sprays": "3-4",
    "occasions": [
      "Casual",
      "Office"
    ],
    "featured": false,
    "families": [
      "Aromatic"
    ],
    "accords": [
      "Fresh"
    ]
  },
  {
    "id": "350",
    "slug": "top-not-separately-listed-heart-not-separately-listed-base-not-separately-listed-350",
    "brand": "Archive",
    "name": "Base: Not separately listed",
    "gender": "Unisex",
    "topNotes": [
      "Mint",
      "Grapefruit",
      "Bergamot",
      "Anise"
    ],
    "heartNotes": [
      "Green Notes",
      "Cassis",
      "Rose",
      "Hedione"
    ],
    "baseNotes": [
      "White Musk"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer"
    ],
    "time": "Day",
    "sprays": "4-6",
    "occasions": [
      "Brunch",
      "Casual Daytime Events",
      "College",
      "Office",
      "Travel"
    ],
    "featured": false,
    "families": [
      "Aromatic",
      "Citrus",
      "Floral"
    ],
    "accords": [
      "Floral",
      "Fresh",
      "Green",
      "Herbal"
    ]
  },
  {
    "id": "351",
    "slug": "ex-nihilo-blue-talisman",
    "brand": "Ex Nihilo",
    "name": "Blue Talisman",
    "gender": "for women and men",
    "topNotes": [
      "Pear",
      "Bergamot",
      "Mandarin Orange",
      "Ginger"
    ],
    "heartNotes": [
      "Orange Blossom",
      "Georgywood"
    ],
    "baseNotes": [
      "Ambrofix\u2122",
      "Musk",
      "Akigalawood"
    ],
    "seasons": [
      "Spring",
      "Summer",
      "Winter"
    ],
    "time": "Day / Evening",
    "sprays": "4-6",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal",
      "Office"
    ],
    "featured": false,
    "families": [
      "Citrus",
      "Floral",
      "Fruity"
    ],
    "accords": [
      "Floral",
      "Fresh",
      "Fruity",
      "Musky"
    ]
  },
  {
    "id": "352",
    "slug": "ex-nihilo-fleur-narcotique",
    "brand": "Ex Nihilo",
    "name": "Fleur Narcotique",
    "gender": "for women and men",
    "topNotes": [
      "Litchi",
      "Bergamot",
      "Peach"
    ],
    "heartNotes": [
      "Peony",
      "Orange Blossom",
      "Jasmine",
      "Petalia"
    ],
    "baseNotes": [
      "Musk",
      "Moss",
      "Woody Notes"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer"
    ],
    "time": "Day",
    "sprays": "4-6",
    "occasions": [
      "Brunch",
      "Casual Daytime Events",
      "College",
      "Office",
      "Travel"
    ],
    "featured": false,
    "families": [
      "Citrus",
      "Floral",
      "Fruity"
    ],
    "accords": [
      "Floral",
      "Fresh",
      "Fruity",
      "Musky"
    ]
  },
  {
    "id": "353",
    "slug": "ex-nihilo-in-paradise-riviera",
    "brand": "Ex Nihilo",
    "name": "In Paradise Riviera",
    "gender": "for women and men",
    "topNotes": [
      "Bergamot"
    ],
    "heartNotes": [
      "Peony",
      "Tiare Flower",
      "Tuberose"
    ],
    "baseNotes": [
      "Musk",
      "Cashmeran"
    ],
    "seasons": [
      "Spring",
      "Summer"
    ],
    "time": "Day",
    "sprays": "4-6",
    "occasions": [
      "Casual",
      "Office"
    ],
    "featured": false,
    "families": [
      "Citrus",
      "Floral"
    ],
    "accords": [
      "Floral",
      "Fresh",
      "Musky"
    ]
  },
  {
    "id": "354",
    "slug": "ex-nihilo-the-hedonist",
    "brand": "Ex Nihilo",
    "name": "The Hedonist",
    "gender": "for women and men",
    "topNotes": [
      "Bergamot",
      "Ginger"
    ],
    "heartNotes": [
      "Akigalawood",
      "Cedar"
    ],
    "baseNotes": [
      "Vetiver",
      "Musk",
      "Tonka Bean"
    ],
    "seasons": [
      "Spring",
      "Summer",
      "Monsoon"
    ],
    "time": "Day",
    "sprays": "3-4 sprays; 2-3 indoors",
    "occasions": [
      "Travel",
      "Casual Daytime Events",
      "College",
      "Office",
      "Brunch"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Citrus",
      "Spicy"
    ],
    "accords": [
      "Earthy",
      "Fresh",
      "Musky",
      "Spicy"
    ]
  },
  {
    "id": "355",
    "slug": "fragrance-du-bois-cavort-extrait-de-parfum",
    "brand": "Fragrance Du Bois",
    "name": "Cavort Extrait de Parfum",
    "gender": "for women and men",
    "topNotes": [
      "Saffron",
      "Cinnamon",
      "Geranium",
      "Davana"
    ],
    "heartNotes": [
      "Rose",
      "Ylang-Ylang",
      "Orange Blossom",
      "Jasmine"
    ],
    "baseNotes": [
      "Sandalwood",
      "Incense",
      "Labdanum",
      "Patchouli  Oud Jaune Intense  for women",
      "men  NOTES"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer",
      "Winter"
    ],
    "time": "Day / Evening",
    "sprays": "4-6",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal",
      "Office"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Citrus",
      "Floral"
    ],
    "accords": [
      "Balsamic",
      "Earthy",
      "Floral",
      "Fresh"
    ]
  },
  {
    "id": "356",
    "slug": "incense-labdanum-and-patchouli-oud-jaune-intense",
    "brand": "Archive",
    "name": "Oud Jaune Intense",
    "gender": "for women and men",
    "topNotes": [
      "Tahitian Tiare Flower",
      "Fruity Notes",
      "Pineapple",
      "Ylang- Ylang"
    ],
    "heartNotes": [
      "Jasmine",
      "White Flowers",
      "Orange Blossom",
      "Amyl Salicylate"
    ],
    "baseNotes": [
      "Vanilla",
      "Musk",
      "Agarwood (Oud)"
    ],
    "seasons": [
      "Spring",
      "Summer",
      "Winter"
    ],
    "time": "Day / Evening",
    "sprays": "4-6",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal",
      "Office"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Citrus",
      "Floral"
    ],
    "accords": [
      "Floral",
      "Fresh",
      "Fruity",
      "Musky"
    ]
  },
  {
    "id": "357",
    "slug": "francesca-bianchi-sex-and-the-sea",
    "brand": "Francesca Bianchi",
    "name": "Sex and the Sea",
    "gender": "for women and men",
    "topNotes": [
      "Not separately listed"
    ],
    "heartNotes": [
      "Not separately listed"
    ],
    "baseNotes": [
      "Not separately listed"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer"
    ],
    "time": "Day",
    "sprays": "3-4",
    "occasions": [
      "Casual",
      "Office"
    ],
    "featured": false,
    "families": [
      "Aromatic"
    ],
    "accords": [
      "Fresh"
    ]
  },
  {
    "id": "358",
    "slug": "frederic-malle-angeliques-sous-la-pluie",
    "brand": "Frederic Malle",
    "name": "Angeliques Sous La Pluie",
    "gender": "for women and men",
    "topNotes": [
      "Not separately listed"
    ],
    "heartNotes": [
      "Not separately listed"
    ],
    "baseNotes": [
      "Not separately listed"
    ],
    "seasons": [
      "Ac Venues",
      "Winter",
      "Monsoon Evenings"
    ],
    "time": "Evening",
    "sprays": "2-3 sprays",
    "occasions": [
      "Celebrations",
      "Receptions",
      "Dinner Dates",
      "Formal Events"
    ],
    "featured": false,
    "families": [
      "Aromatic"
    ],
    "accords": [
      "Fresh"
    ]
  },
  {
    "id": "359",
    "slug": "frederic-malle-bigarade-concentree",
    "brand": "Frederic Malle",
    "name": "Bigarade Concentree",
    "gender": "for women and men",
    "topNotes": [
      "Bitter Orange",
      "Cardamom",
      "Pink Pepper"
    ],
    "heartNotes": [
      "Rose"
    ],
    "baseNotes": [
      "Grass",
      "Hay",
      "Cedar"
    ],
    "seasons": [
      "Spring",
      "Summer",
      "Winter"
    ],
    "time": "Day / Evening",
    "sprays": "4-6",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal",
      "Office"
    ],
    "featured": false,
    "families": [
      "Citrus",
      "Floral",
      "Spicy"
    ],
    "accords": [
      "Floral",
      "Fresh",
      "Green",
      "Spicy"
    ]
  },
  {
    "id": "360",
    "slug": "frederic-malle-carnal-flower",
    "brand": "Frederic Malle",
    "name": "Carnal Flower",
    "gender": "for women and men",
    "topNotes": [
      "Not separately listed"
    ],
    "heartNotes": [
      "Not separately listed"
    ],
    "baseNotes": [
      "Not separately listed"
    ],
    "seasons": [
      "Spring",
      "Summer",
      "Monsoon"
    ],
    "time": "Day",
    "sprays": "3-4 sprays; 2-3 indoors",
    "occasions": [
      "Travel",
      "Casual Daytime Events",
      "College",
      "Office",
      "Brunch"
    ],
    "featured": false,
    "families": [
      "Aromatic"
    ],
    "accords": [
      "Fresh"
    ]
  },
  {
    "id": "361",
    "slug": "frederic-malle-cologne-indelebile",
    "brand": "Frederic Malle",
    "name": "Cologne Indelebile",
    "gender": "for women and men",
    "topNotes": [
      "Bergamot",
      "Lemon"
    ],
    "heartNotes": [
      "Neroli",
      "Orange Blossom",
      "Narcissus"
    ],
    "baseNotes": [
      "Musk"
    ],
    "seasons": [
      "Spring",
      "Summer",
      "Monsoon"
    ],
    "time": "Day",
    "sprays": "3-4 sprays; 2-3 indoors",
    "occasions": [
      "Travel",
      "Casual Daytime Events",
      "College",
      "Office",
      "Brunch"
    ],
    "featured": false,
    "families": [
      "Citrus",
      "Floral"
    ],
    "accords": [
      "Floral",
      "Fresh",
      "Musky"
    ]
  },
  {
    "id": "362",
    "slug": "frederic-malle-dawn",
    "brand": "Frederic Malle",
    "name": "Dawn",
    "gender": "for women and men",
    "topNotes": [
      "Pink Pepper",
      "Turkish Rose"
    ],
    "heartNotes": [
      "Olibanum",
      "Turkish Rose"
    ],
    "baseNotes": [
      "Agarwood (Oud)",
      "Labdanum",
      "Vetiver",
      "Oakmoss"
    ],
    "seasons": [
      "Spring",
      "Ac Venues",
      "Mild Winter",
      "Monsoon Evenings"
    ],
    "time": "Day / Evening",
    "sprays": "2-3 sprays",
    "occasions": [
      "Lunches",
      "Smart Casuals",
      "Dates",
      "Office",
      "Pujas"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Floral",
      "Spicy"
    ],
    "accords": [
      "Earthy",
      "Floral",
      "Spicy",
      "Warm"
    ]
  },
  {
    "id": "363",
    "slug": "frederic-malle-malle",
    "brand": "Frederic Malle",
    "name": "Malle",
    "gender": "for women and men",
    "topNotes": [
      "Not separately listed"
    ],
    "heartNotes": [
      "Not separately listed"
    ],
    "baseNotes": [
      "Not separately listed"
    ],
    "seasons": [
      "Spring",
      "Ac Venues",
      "Mild Winter",
      "Monsoon Evenings"
    ],
    "time": "Day / Evening",
    "sprays": "2-3 sprays En Passant for women",
    "occasions": [
      "Lunches",
      "Smart Casuals",
      "Dates",
      "Office",
      "Pujas"
    ],
    "featured": false,
    "families": [
      "Aromatic"
    ],
    "accords": [
      "Fresh"
    ]
  },
  {
    "id": "364",
    "slug": "sprays-2-3-sprays-en-passant",
    "brand": "Sprays: 2-3 Sprays",
    "name": "En Passant",
    "gender": "for women",
    "topNotes": [
      "Not separately listed"
    ],
    "heartNotes": [
      "Not separately listed"
    ],
    "baseNotes": [
      "Not separately listed"
    ],
    "seasons": [
      "Spring",
      "Summer",
      "Monsoon"
    ],
    "time": "Day",
    "sprays": "3-4 sprays; 2-3 indoors",
    "occasions": [
      "Travel",
      "Casual Daytime Events",
      "College",
      "Office",
      "Brunch"
    ],
    "featured": false,
    "families": [
      "Aromatic"
    ],
    "accords": [
      "Fresh"
    ]
  },
  {
    "id": "365",
    "slug": "frederic-malle-french-lover",
    "brand": "Frederic Malle",
    "name": "French Lover",
    "gender": "for men",
    "topNotes": [
      "Galbanum",
      "Spices"
    ],
    "heartNotes": [
      "Angelica",
      "Cedar",
      "Incense"
    ],
    "baseNotes": [
      "Vetiver",
      "Oakmoss",
      "White Musk"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Winter"
    ],
    "time": "Evening",
    "sprays": "2-3",
    "occasions": [
      "Date Night",
      "Formal"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Woody"
    ],
    "accords": [
      "Balsamic",
      "Earthy",
      "Green",
      "Musky"
    ]
  },
  {
    "id": "366",
    "slug": "frederic-malle-geranium-pour-monsieur",
    "brand": "Frederic Malle",
    "name": "Geranium Pour Monsieur",
    "gender": "for men",
    "topNotes": [
      "Mint",
      "Geranium",
      "Star Anise"
    ],
    "heartNotes": [
      "Clove",
      "Cinnamon"
    ],
    "baseNotes": [
      "Musk",
      "Sandalwood",
      "Incense",
      "Styrax",
      "Benzoin"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Winter"
    ],
    "time": "Evening",
    "sprays": "2-3",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Aromatic",
      "Floral"
    ],
    "accords": [
      "Balsamic",
      "Floral",
      "Herbal",
      "Musky"
    ]
  },
  {
    "id": "367",
    "slug": "frederic-malle-iris-poudre",
    "brand": "Frederic Malle",
    "name": "Iris Poudre",
    "gender": "for women",
    "topNotes": [
      "Ylang-Ylang",
      "Carnation",
      "Palisander Rosewood",
      "Bergamot",
      "Orange"
    ],
    "heartNotes": [
      "Aldehydes",
      "Violet",
      "Lily",
      "Jasmine",
      "Rose",
      "Magnolia"
    ],
    "baseNotes": [
      "Iris",
      "Musk",
      "Sandalwood",
      "Vetiver",
      "Vanilla",
      "Amber",
      "ebony tree"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer",
      "Winter"
    ],
    "time": "Day / Evening",
    "sprays": "4-6",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal",
      "Office"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Citrus",
      "Floral"
    ],
    "accords": [
      "Earthy",
      "Floral",
      "Fresh",
      "Musky"
    ]
  },
  {
    "id": "368",
    "slug": "fredericmalle-not-reliably-matched",
    "brand": "Fredericmalle",
    "name": "Not reliably matched",
    "gender": "Unisex",
    "topNotes": [
      "Reliable exact-page data not found in indexed sources"
    ],
    "heartNotes": [
      "Reliable exact-page data not found in indexed sources"
    ],
    "baseNotes": [
      "Reliable exact-page data not found in indexed sources"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer"
    ],
    "time": "Day",
    "sprays": "3-4",
    "occasions": [
      "Casual",
      "Office"
    ],
    "featured": false,
    "families": [
      "Aromatic"
    ],
    "accords": [
      "Fresh"
    ]
  },
  {
    "id": "369",
    "slug": "frederic-malle-le-parfum-de-therese",
    "brand": "Frederic Malle",
    "name": "Le Parfum de Therese",
    "gender": "for women and men",
    "topNotes": [
      "Melon",
      "Tangerine"
    ],
    "heartNotes": [
      "Plum",
      "Rose"
    ],
    "baseNotes": [
      "Leather",
      "Vetiver",
      "Cedar"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Winter"
    ],
    "time": "Evening",
    "sprays": "2-3",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal"
    ],
    "featured": false,
    "families": [
      "Floral",
      "Fruity",
      "Leather"
    ],
    "accords": [
      "Earthy",
      "Floral",
      "Fruity",
      "Leather"
    ]
  },
  {
    "id": "370",
    "slug": "frederic-malle-l-eau-d-hiver",
    "brand": "Frederic Malle",
    "name": "L Eau d Hiver",
    "gender": "for women and men",
    "topNotes": [
      "Not separately listed"
    ],
    "heartNotes": [
      "Not separately listed"
    ],
    "baseNotes": [
      "Not separately listed"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer"
    ],
    "time": "Day",
    "sprays": "3-4",
    "occasions": [
      "Brunch",
      "Casual Daytime Events",
      "College",
      "Office",
      "Travel"
    ],
    "featured": false,
    "families": [
      "Aromatic"
    ],
    "accords": [
      "Fresh"
    ]
  },
  {
    "id": "371",
    "slug": "frederic-malle-lys-mediterranee",
    "brand": "Frederic Malle",
    "name": "Lys Mediterranee",
    "gender": "for women and men",
    "topNotes": [
      "Sea water",
      "Ginger"
    ],
    "heartNotes": [
      "Lily",
      "Lotus",
      "Angelica",
      "Orange Blossom"
    ],
    "baseNotes": [
      "Musk",
      "Vanilla"
    ],
    "seasons": [
      "Spring",
      "Summer",
      "Winter"
    ],
    "time": "Day / Evening",
    "sprays": "4-6",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal",
      "Office"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Aquatic",
      "Citrus"
    ],
    "accords": [
      "Floral",
      "Fresh",
      "Marine",
      "Musky"
    ]
  },
  {
    "id": "372",
    "slug": "frederic-malle-monsieur",
    "brand": "Frederic Malle",
    "name": "Monsieur",
    "gender": "for men",
    "topNotes": [
      "Rum",
      "Tangerine"
    ],
    "heartNotes": [
      "Patchouli",
      "Incense",
      "Cedar",
      "Amber"
    ],
    "baseNotes": [
      "Musk",
      "Vanilla"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer"
    ],
    "time": "Day",
    "sprays": "2-3",
    "occasions": [
      "Brunch",
      "Casual Daytime Events",
      "College",
      "Office",
      "Travel"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Woody"
    ],
    "accords": [
      "Balsamic",
      "Earthy",
      "Musky",
      "Sweet"
    ]
  },
  {
    "id": "373",
    "slug": "frederic-malle-musc-ravageur",
    "brand": "Frederic Malle",
    "name": "Musc Ravageur",
    "gender": "for women and men",
    "topNotes": [
      "Lavender",
      "Tangerine",
      "Bergamot"
    ],
    "heartNotes": [
      "Cinnamon",
      "Cloves"
    ],
    "baseNotes": [
      "Musk",
      "Vanilla",
      "Tonka Bean",
      "Amber",
      "Sandalwood",
      "Guaiac Wood",
      "Cedar"
    ],
    "seasons": [
      "Spring",
      "Ac Venues",
      "Mild Winter",
      "Monsoon Evenings"
    ],
    "time": "Day / Evening",
    "sprays": "2-3 sprays",
    "occasions": [
      "Lunches",
      "Smart Casuals",
      "Dates",
      "Office",
      "Pujas"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Aromatic",
      "Citrus"
    ],
    "accords": [
      "Fresh",
      "Herbal",
      "Musky",
      "Spicy"
    ]
  },
  {
    "id": "374",
    "slug": "frederic-malle-noir-epices",
    "brand": "Frederic Malle",
    "name": "Noir Epices",
    "gender": "for women and men",
    "topNotes": [
      "Geranium",
      "Orange",
      "Rose"
    ],
    "heartNotes": [
      "Cloves",
      "Nutmeg",
      "Pepper",
      "Cinnamon"
    ],
    "baseNotes": [
      "Patchouli",
      "Sandalwood",
      "Cedar",
      "Vanilla"
    ],
    "seasons": [
      "Spring",
      "Summer",
      "Monsoon"
    ],
    "time": "Day",
    "sprays": "3-4 sprays; 2-3 indoors",
    "occasions": [
      "Travel",
      "Casual Daytime Events",
      "College",
      "Office",
      "Brunch"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Citrus",
      "Floral"
    ],
    "accords": [
      "Earthy",
      "Floral",
      "Fresh",
      "Spicy"
    ]
  },
  {
    "id": "375",
    "slug": "frederic-malle-outrageous",
    "brand": "Frederic Malle",
    "name": "Outrageous",
    "gender": "for women and men",
    "topNotes": [
      "Green Apple",
      "Lime",
      "Grapefruit",
      "Mint",
      "Cinnamon"
    ],
    "heartNotes": [
      "Neroli",
      "Orange Blossom"
    ],
    "baseNotes": [
      "Musk",
      "Aldehydes",
      "Cedar",
      "Amber"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer",
      "Winter"
    ],
    "time": "Day / Evening",
    "sprays": "4-6",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal",
      "Office"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Aromatic",
      "Citrus"
    ],
    "accords": [
      "Floral",
      "Fresh",
      "Fruity",
      "Green"
    ]
  },
  {
    "id": "376",
    "slug": "frederic-malle-portrait-of-a-lady",
    "brand": "Frederic Malle",
    "name": "Portrait of a Lady",
    "gender": "for women",
    "topNotes": [
      "Rose",
      "Clove",
      "Raspberry",
      "Black Currant",
      "Cinnamon"
    ],
    "heartNotes": [
      "Patchouli",
      "Incense",
      "Sandalwood"
    ],
    "baseNotes": [
      "Musk",
      "Benzoin",
      "Amber"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer"
    ],
    "time": "Day",
    "sprays": "2-3",
    "occasions": [
      "Brunch",
      "Casual Daytime Events",
      "College",
      "Office",
      "Travel"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Floral",
      "Fruity"
    ],
    "accords": [
      "Balsamic",
      "Earthy",
      "Floral",
      "Fruity"
    ]
  },
  {
    "id": "377",
    "slug": "fredericmalle-not-reliably-matched-377",
    "brand": "Fredericmalle",
    "name": "Not reliably matched",
    "gender": "Unisex",
    "topNotes": [
      "Reliable exact-page data not found in indexed sources"
    ],
    "heartNotes": [
      "Reliable exact-page data not found in indexed sources"
    ],
    "baseNotes": [
      "Reliable exact-page data not found in indexed sources"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer"
    ],
    "time": "Day",
    "sprays": "3-4",
    "occasions": [
      "Casual",
      "Office"
    ],
    "featured": false,
    "families": [
      "Aromatic"
    ],
    "accords": [
      "Fresh"
    ]
  },
  {
    "id": "378",
    "slug": "frederic-malle-superstitious",
    "brand": "Frederic Malle",
    "name": "Superstitious",
    "gender": "for women",
    "topNotes": [
      "Not separately listed"
    ],
    "heartNotes": [
      "Not separately listed"
    ],
    "baseNotes": [
      "Not separately listed"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer"
    ],
    "time": "Day",
    "sprays": "3-4",
    "occasions": [
      "Casual",
      "Office"
    ],
    "featured": false,
    "families": [
      "Aromatic"
    ],
    "accords": [
      "Fresh"
    ]
  },
  {
    "id": "379",
    "slug": "frederic-malle-synthetic-jungle",
    "brand": "Frederic Malle",
    "name": "Synthetic Jungle",
    "gender": "for women and men",
    "topNotes": [
      "Galbanum",
      "Basil",
      "Black Currant"
    ],
    "heartNotes": [
      "Lily-of-the- Valley",
      "Hyacinth",
      "Jasmine",
      "Ylang-Ylang",
      "Almond"
    ],
    "baseNotes": [
      "Oakmoss",
      "Patchouli"
    ],
    "seasons": [
      "Monsoon",
      "Spring"
    ],
    "time": "Day / Evening",
    "sprays": "3-4",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal",
      "Office"
    ],
    "featured": false,
    "families": [
      "Aromatic",
      "Floral",
      "Fruity"
    ],
    "accords": [
      "Earthy",
      "Floral",
      "Fruity",
      "Green"
    ]
  },
  {
    "id": "380",
    "slug": "frederic-malle-the-moon",
    "brand": "Frederic Malle",
    "name": "The Moon",
    "gender": "for women and men",
    "topNotes": [
      "Raspberry",
      "Litchi",
      "Saffron"
    ],
    "heartNotes": [
      "Turkish Rose",
      "Red Berries",
      "Olibanum",
      "Red Currant",
      "Violet"
    ],
    "baseNotes": [
      "Agarwood (Oud)",
      "Leather",
      "Amber",
      "Patchouli",
      "Sandalwood"
    ],
    "seasons": [
      "Spring",
      "Summer",
      "Monsoon"
    ],
    "time": "Day",
    "sprays": "3-4 sprays; 2-3 indoors",
    "occasions": [
      "Travel",
      "Casual Daytime Events",
      "College",
      "Office",
      "Brunch"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Floral",
      "Fruity"
    ],
    "accords": [
      "Earthy",
      "Floral",
      "Fruity",
      "Leather"
    ]
  },
  {
    "id": "381",
    "slug": "frederic-malle-the-night",
    "brand": "Frederic Malle",
    "name": "The Night",
    "gender": "for women and men",
    "topNotes": [
      "Turkish Rose",
      "Saffron"
    ],
    "heartNotes": [
      "Indian Oud"
    ],
    "baseNotes": [
      "Amber",
      "Incense",
      "Sandalwood"
    ],
    "seasons": [
      "Spring",
      "Winter"
    ],
    "time": "Evening",
    "sprays": "2-3",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Floral",
      "Spicy"
    ],
    "accords": [
      "Balsamic",
      "Floral",
      "Spicy",
      "Warm"
    ]
  },
  {
    "id": "382",
    "slug": "frederic-malle-une-fleur-de-cassie",
    "brand": "Frederic Malle",
    "name": "Une Fleur de Cassie",
    "gender": "for women",
    "topNotes": [
      "Not separately listed"
    ],
    "heartNotes": [
      "Not separately listed"
    ],
    "baseNotes": [
      "Not separately listed"
    ],
    "seasons": [
      "Ac Venues",
      "Monsoon Evenings",
      "Winter"
    ],
    "time": "Evening",
    "sprays": "3-4",
    "occasions": [
      "Celebrations",
      "Dinner Dates",
      "Formal Events",
      "Receptions"
    ],
    "featured": false,
    "families": [
      "Aromatic"
    ],
    "accords": [
      "Fresh"
    ]
  },
  {
    "id": "383",
    "slug": "frederic-malle-une-fleur-de-cassie-383",
    "brand": "Frederic Malle",
    "name": "Une Fleur de Cassie",
    "gender": "for women",
    "topNotes": [
      "Not separately listed"
    ],
    "heartNotes": [
      "Not separately listed"
    ],
    "baseNotes": [
      "Not separately listed"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer"
    ],
    "time": "Day",
    "sprays": "3-4",
    "occasions": [
      "Casual",
      "Office"
    ],
    "featured": false,
    "families": [
      "Aromatic"
    ],
    "accords": [
      "Fresh"
    ]
  },
  {
    "id": "384",
    "slug": "frederic-malle-vetiver-extraordinaire",
    "brand": "Frederic Malle",
    "name": "Vetiver Extraordinaire",
    "gender": "for men",
    "topNotes": [
      "Bitter Orange",
      "Bergamot"
    ],
    "heartNotes": [
      "Vetiver",
      "Pink Pepper",
      "Cloves"
    ],
    "baseNotes": [
      "Cedar",
      "Oakmoss",
      "Myrhh",
      "Sandalwood",
      "Musk"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer"
    ],
    "time": "Day",
    "sprays": "4-6",
    "occasions": [
      "Brunch",
      "Casual Daytime Events",
      "College",
      "Office",
      "Travel"
    ],
    "featured": false,
    "families": [
      "Citrus",
      "Spicy",
      "Woody"
    ],
    "accords": [
      "Earthy",
      "Fresh",
      "Musky",
      "Spicy"
    ]
  },
  {
    "id": "385",
    "slug": "giorgio-armani-acqua-di-gio-absolu",
    "brand": "Giorgio Armani",
    "name": "Acqua di Gio Absolu",
    "gender": "for men",
    "topNotes": [
      "Sea Notes",
      "Bergamot",
      "Pear",
      "Apple",
      "Grapefruit",
      "Lemon"
    ],
    "heartNotes": [
      "Lavender",
      "Rosemary",
      "Geranium"
    ],
    "baseNotes": [
      "Woody Notes",
      "Tonka Bean",
      "Amberwood",
      "Patchouli",
      "Labdanum"
    ],
    "seasons": [
      "Spring",
      "Ac Venues",
      "Mild Winter",
      "Monsoon Evenings"
    ],
    "time": "Day / Evening",
    "sprays": "2-3 sprays",
    "occasions": [
      "Lunches",
      "Smart Casuals",
      "Dates",
      "Office",
      "Pujas"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Aquatic",
      "Aromatic"
    ],
    "accords": [
      "Earthy",
      "Floral",
      "Fresh",
      "Fruity"
    ]
  },
  {
    "id": "386",
    "slug": "giorgio-armani-acqua-di-gio-parfum",
    "brand": "Giorgio Armani",
    "name": "Acqua di Gio Parfum",
    "gender": "for men",
    "topNotes": [
      "Marine notes",
      "Bergamot"
    ],
    "heartNotes": [
      "Rosemary",
      "Clary Sage",
      "Geranium"
    ],
    "baseNotes": [
      "Olibanum",
      "Patchouli"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer"
    ],
    "time": "Day",
    "sprays": "4-6",
    "occasions": [
      "Brunch",
      "Casual Daytime Events",
      "College",
      "Office",
      "Travel"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Aquatic",
      "Aromatic"
    ],
    "accords": [
      "Earthy",
      "Floral",
      "Fresh",
      "Herbal"
    ]
  },
  {
    "id": "387",
    "slug": "giorgio-armani-acqua-di-gio",
    "brand": "Giorgio Armani",
    "name": "Acqua di Gio",
    "gender": "for men",
    "topNotes": [
      "Lime",
      "Lemon",
      "Bergamot",
      "Jasmine",
      "Orange",
      "Mandarin Orange",
      "Neroli"
    ],
    "heartNotes": [
      "Sea Notes",
      "Jasmine",
      "Calone",
      "Rosemary",
      "Peach",
      "Freesia",
      "Hiacynth",
      "Cyclamen",
      "Violet",
      "Coriander",
      "Rose",
      "Nutmeg",
      "Mignonette"
    ],
    "baseNotes": [
      "White Musk",
      "Cedar",
      "Oakmoss",
      "Patchouli"
    ],
    "seasons": [
      "Spring",
      "Summer",
      "Monsoon"
    ],
    "time": "Day",
    "sprays": "3-4 sprays; 2-3 indoors",
    "occasions": [
      "Travel",
      "Casual Daytime Events",
      "College",
      "Office",
      "Brunch"
    ],
    "featured": false,
    "families": [
      "Aquatic",
      "Aromatic",
      "Citrus"
    ],
    "accords": [
      "Earthy",
      "Floral",
      "Fresh",
      "Fruity"
    ]
  },
  {
    "id": "388",
    "slug": "giorgio-armani-acqua-di-gio-388",
    "brand": "Giorgio Armani",
    "name": "Acqua di Gio",
    "gender": "for women",
    "topNotes": [
      "Peony",
      "Musk Vodka",
      "Pineapple",
      "Lemon",
      "Peach",
      "Banana Leaf",
      "Violet"
    ],
    "heartNotes": [
      "Lily-of-the-Valley",
      "Lily",
      "Hiacynth",
      "Jasmine",
      "Freesia",
      "Calone",
      "Ylang-Ylang",
      "Rose"
    ],
    "baseNotes": [
      "Musk",
      "Cedar",
      "Sandalwood",
      "Amber",
      "Styrax"
    ],
    "seasons": [
      "Spring",
      "Summer",
      "Monsoon"
    ],
    "time": "Day",
    "sprays": "3-4 sprays; 2-3 indoors Sprays: 3-4 sprays; 2-3 indoors",
    "occasions": [
      "Travel",
      "Casual Daytime Events",
      "College",
      "Office",
      "Brunch"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Aquatic",
      "Citrus"
    ],
    "accords": [
      "Floral",
      "Fresh",
      "Fruity",
      "Marine"
    ]
  },
  {
    "id": "389",
    "slug": "giorgio-armani-acqua-di-gio-profondo",
    "brand": "Giorgio Armani",
    "name": "Acqua di Gio Profondo",
    "gender": "for men",
    "topNotes": [
      "Sea Notes",
      "Aquozone",
      "Bergamot",
      "Green Mandarin"
    ],
    "heartNotes": [
      "Rosemary",
      "Lavender",
      "Cypress",
      "Mastic or Lentisque"
    ],
    "baseNotes": [
      "Mineral notes",
      "Musk",
      "Patchouli",
      "Amber"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer",
      "Winter"
    ],
    "time": "Day / Evening",
    "sprays": "4-6",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal",
      "Office"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Aquatic",
      "Aromatic"
    ],
    "accords": [
      "Earthy",
      "Floral",
      "Fresh",
      "Green"
    ]
  },
  {
    "id": "390",
    "slug": "giorgio-armani-acqua-di-gio-profumo",
    "brand": "Giorgio Armani",
    "name": "Acqua di Gio Profumo",
    "gender": "for men",
    "topNotes": [
      "Sea Notes",
      "Bergamot"
    ],
    "heartNotes": [
      "Rosemary",
      "Sage",
      "Geranium"
    ],
    "baseNotes": [
      "Incense",
      "Patchouli"
    ],
    "seasons": [
      "Spring",
      "Summer",
      "Monsoon"
    ],
    "time": "Day",
    "sprays": "3-4 sprays; 2-3 indoors",
    "occasions": [
      "Travel",
      "Casual Daytime Events",
      "College",
      "Office",
      "Brunch"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Aquatic",
      "Aromatic"
    ],
    "accords": [
      "Balsamic",
      "Earthy",
      "Floral",
      "Fresh"
    ]
  },
  {
    "id": "391",
    "slug": "giorgio-armani-air-di-gioia",
    "brand": "Giorgio Armani",
    "name": "Air di Gioia",
    "gender": "for women",
    "topNotes": [
      "Salt",
      "Neroli",
      "Mandarin Orange"
    ],
    "heartNotes": [
      "Peony",
      "Orange Blossom",
      "Ylang-Ylang"
    ],
    "baseNotes": [
      "Cypress",
      "Moss",
      "Patchouli",
      "Cashmere Wood"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer"
    ],
    "time": "Day",
    "sprays": "4-6",
    "occasions": [
      "Casual",
      "Formal",
      "Office"
    ],
    "featured": false,
    "families": [
      "Aquatic",
      "Citrus",
      "Floral"
    ],
    "accords": [
      "Earthy",
      "Floral",
      "Fresh",
      "Marine"
    ]
  },
  {
    "id": "392",
    "slug": "giorgio-armani-armani-code-absolu",
    "brand": "Giorgio Armani",
    "name": "Armani Code Absolu",
    "gender": "for men",
    "topNotes": [
      "Green Mandarin",
      "Apple"
    ],
    "heartNotes": [
      "Nutmeg",
      "Orange Blossom",
      "Carrot Seeds"
    ],
    "baseNotes": [
      "Vanilla",
      "Tonka Bean",
      "Suede",
      "Woody Notes"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer"
    ],
    "time": "Day",
    "sprays": "4-6",
    "occasions": [
      "Brunch",
      "Casual Daytime Events",
      "College",
      "Office",
      "Travel"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Citrus",
      "Floral"
    ],
    "accords": [
      "Floral",
      "Fresh",
      "Fruity",
      "Green"
    ]
  },
  {
    "id": "393",
    "slug": "giorgio-armani-armani-code-colonia",
    "brand": "Giorgio Armani",
    "name": "Armani Code Colonia",
    "gender": "for men",
    "topNotes": [
      "Bergamot",
      "Mandarin Orange",
      "Pink Pepper"
    ],
    "heartNotes": [
      "Orange Blossom",
      "Clary Sage",
      "Amyl Salicylate"
    ],
    "baseNotes": [
      "Tonka Bean",
      "Amberwood",
      "Heliotrope"
    ],
    "seasons": [
      "Spring",
      "Ac Venues",
      "Mild Winter",
      "Monsoon Evenings"
    ],
    "time": "Day / Evening",
    "sprays": "2-3 sprays",
    "occasions": [
      "Lunches",
      "Smart Casuals",
      "Dates",
      "Office",
      "Pujas"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Aromatic",
      "Citrus"
    ],
    "accords": [
      "Floral",
      "Fresh",
      "Herbal",
      "Spicy"
    ]
  },
  {
    "id": "394",
    "slug": "giorgio-armani-armani-code-parfum",
    "brand": "Giorgio Armani",
    "name": "Armani Code Parfum",
    "gender": "for men",
    "topNotes": [
      "Bergamot",
      "Bergamot Leaf"
    ],
    "heartNotes": [
      "Iris",
      "Aldehydes",
      "Orris",
      "Clary Sage"
    ],
    "baseNotes": [
      "Tonka Bean",
      "Cedar"
    ],
    "seasons": [
      "Spring",
      "Ac Venues",
      "Mild Winter",
      "Monsoon Evenings"
    ],
    "time": "Day / Evening",
    "sprays": "2-3 sprays",
    "occasions": [
      "Lunches",
      "Smart Casuals",
      "Dates",
      "Office",
      "Pujas"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Aromatic",
      "Citrus"
    ],
    "accords": [
      "Floral",
      "Fresh",
      "Herbal",
      "Powdery"
    ]
  },
  {
    "id": "395",
    "slug": "giorgio-armani-bois-d-encens",
    "brand": "Giorgio Armani",
    "name": "Bois d Encens",
    "gender": "for women and men",
    "topNotes": [
      "Not separately listed"
    ],
    "heartNotes": [
      "Not separately listed"
    ],
    "baseNotes": [
      "Not separately listed"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer"
    ],
    "time": "Day",
    "sprays": "3-4",
    "occasions": [
      "Casual",
      "Office"
    ],
    "featured": false,
    "families": [
      "Aromatic"
    ],
    "accords": [
      "Fresh"
    ]
  },
  {
    "id": "396",
    "slug": "giorgio-armani-armani-code",
    "brand": "Giorgio Armani",
    "name": "Armani Code",
    "gender": "for men",
    "topNotes": [
      "Lemon",
      "Bergamot"
    ],
    "heartNotes": [
      "Star Anise",
      "Olive Blossom",
      "Guaiac Wood"
    ],
    "baseNotes": [
      "Leather",
      "Tonka Bean",
      "Tobacco"
    ],
    "seasons": [
      "Ac Venues",
      "Winter",
      "Cool Nights"
    ],
    "time": "Evening",
    "sprays": "1-2 sprays",
    "occasions": [
      "Receptions",
      "Winter Weddings",
      "Festive Evenings",
      "Formal Dinners"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Citrus",
      "Floral"
    ],
    "accords": [
      "Floral",
      "Fresh",
      "Leather",
      "Spicy"
    ]
  },
  {
    "id": "397",
    "slug": "giorgio-armani-armani-code-profumo",
    "brand": "Giorgio Armani",
    "name": "Armani Code Profumo",
    "gender": "for men",
    "topNotes": [
      "Cardamom",
      "Green Apple",
      "Green Mandarin"
    ],
    "heartNotes": [
      "Nutmeg",
      "Lavender",
      "Orange Blossom"
    ],
    "baseNotes": [
      "Tonka Bean",
      "Amber",
      "Leather"
    ],
    "seasons": [
      "Ac Venues",
      "Winter",
      "Cool Nights"
    ],
    "time": "Evening",
    "sprays": "1-2 sprays",
    "occasions": [
      "Receptions",
      "Winter Weddings",
      "Festive Evenings",
      "Formal Dinners"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Aromatic",
      "Citrus"
    ],
    "accords": [
      "Floral",
      "Fresh",
      "Fruity",
      "Green"
    ]
  },
  {
    "id": "398",
    "slug": "giorgio-armani-armani-code-for-women",
    "brand": "Giorgio Armani",
    "name": "Armani Code for Women",
    "gender": "for women",
    "topNotes": [
      "Italian Orange",
      "Jasmine",
      "Bitter Orange"
    ],
    "heartNotes": [
      "Jasmine",
      "Orange Blossom",
      "Ginger"
    ],
    "baseNotes": [
      "Honey",
      "Vanilla",
      "Sandalwood"
    ],
    "seasons": [
      "Spring",
      "Ac Venues",
      "Mild Winter",
      "Monsoon Evenings"
    ],
    "time": "Day / Evening",
    "sprays": "2-3 sprays",
    "occasions": [
      "Lunches",
      "Smart Casuals",
      "Dates",
      "Office",
      "Pujas"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Citrus",
      "Floral"
    ],
    "accords": [
      "Floral",
      "Fresh",
      "Spicy",
      "Sweet"
    ]
  },
  {
    "id": "399",
    "slug": "giorgio-armani-emporio-armani-lui",
    "brand": "Giorgio Armani",
    "name": "Emporio Armani Lui",
    "gender": "for men",
    "topNotes": [
      "Sage",
      "Yuzu",
      "Apple",
      "Bergamot",
      "Lemon",
      "Pineapple",
      "Mandarin Orange",
      "Cardamom"
    ],
    "heartNotes": [
      "Nutmeg",
      "Orris Root",
      "Cyclamen",
      "Jasmine",
      "Rose"
    ],
    "baseNotes": [
      "Sandalwood",
      "Oakmoss",
      "Cedar",
      "Musk",
      "Tonka Bean",
      "Amber"
    ],
    "seasons": [
      "Spring",
      "Ac Venues",
      "Mild Winter",
      "Monsoon Evenings"
    ],
    "time": "Day / Evening",
    "sprays": "2-3 sprays",
    "occasions": [
      "Lunches",
      "Smart Casuals",
      "Dates",
      "Office",
      "Pujas"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Aromatic",
      "Citrus"
    ],
    "accords": [
      "Floral",
      "Fresh",
      "Fruity",
      "Herbal"
    ]
  },
  {
    "id": "400",
    "slug": "giorgio-armani-magenta-tanzanite",
    "brand": "Giorgio Armani",
    "name": "Magenta Tanzanite",
    "gender": "for women and men",
    "topNotes": [
      "Cardamom",
      "Ginger",
      "Bergamot"
    ],
    "heartNotes": [
      "Cinnamon",
      "Coffee",
      "Myrrh"
    ],
    "baseNotes": [
      "Tobacco",
      "Vanilla",
      "Tonka Bean"
    ],
    "seasons": [
      "Ac Venues",
      "Winter",
      "Cool Nights"
    ],
    "time": "Evening",
    "sprays": "1-2 sprays",
    "occasions": [
      "Receptions",
      "Winter Weddings",
      "Festive Evenings",
      "Formal Dinners"
    ],
    "featured": true,
    "families": [
      "Amber/Oriental",
      "Citrus",
      "Gourmand"
    ],
    "accords": [
      "Balsamic",
      "Fresh",
      "Spicy",
      "Sweet"
    ]
  },
  {
    "id": "401",
    "slug": "giorgio-armani-mania",
    "brand": "Giorgio Armani",
    "name": "Mania",
    "gender": "for women",
    "topNotes": [
      "Labdanum",
      "Vanilla",
      "Orange Blossom",
      "Bergamot"
    ],
    "heartNotes": [
      "Nutmeg",
      "Saffron",
      "Cloves",
      "Amber"
    ],
    "baseNotes": [
      "White Musk",
      "Guaiac Wood",
      "Vanilla",
      "Iris"
    ],
    "seasons": [
      "Spring",
      "Summer",
      "Winter"
    ],
    "time": "Day / Evening",
    "sprays": "4-6",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal",
      "Office"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Citrus",
      "Floral"
    ],
    "accords": [
      "Floral",
      "Fresh",
      "Musky",
      "Powdery"
    ]
  },
  {
    "id": "402",
    "slug": "archive-my-way",
    "brand": "Archive",
    "name": "My Way",
    "gender": "for women",
    "topNotes": [
      "Orange Blossom",
      "Bergamot"
    ],
    "heartNotes": [
      "Tuberose",
      "Indian Jasmine"
    ],
    "baseNotes": [
      "Madagascar Vanilla",
      "White Musk",
      "Virginian Cedar"
    ],
    "seasons": [
      "Spring",
      "Ac Venues",
      "Mild Winter",
      "Monsoon Evenings"
    ],
    "time": "Day / Evening",
    "sprays": "2-3 sprays",
    "occasions": [
      "Lunches",
      "Smart Casuals",
      "Dates",
      "Office",
      "Pujas"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Citrus",
      "Floral"
    ],
    "accords": [
      "Floral",
      "Fresh",
      "Musky",
      "Sweet"
    ]
  },
  {
    "id": "403",
    "slug": "giorgio-armani-armani-prive-bleu-turquoise",
    "brand": "Giorgio Armani",
    "name": "Armani Prive Bleu Turquoise",
    "gender": "for women and men",
    "topNotes": [
      "Salt",
      "Incense",
      "Black Pepper"
    ],
    "heartNotes": [
      "Ylang-Ylang",
      "Cypriol Oil or Nagarmotha",
      "Indian Jasmine"
    ],
    "baseNotes": [
      "Vanilla",
      "Sandalwood",
      "Moss"
    ],
    "seasons": [
      "Ac Venues",
      "Winter",
      "Cool Nights"
    ],
    "time": "Evening",
    "sprays": "1-2 sprays",
    "occasions": [
      "Receptions",
      "Winter Weddings",
      "Festive Evenings",
      "Formal Dinners"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Aquatic",
      "Floral"
    ],
    "accords": [
      "Balsamic",
      "Floral",
      "Marine",
      "Spicy"
    ]
  },
  {
    "id": "404",
    "slug": "giorgio-armani-jasmin-kusamono",
    "brand": "Giorgio Armani",
    "name": "Jasmin Kusamono",
    "gender": "for women",
    "topNotes": [
      "Not separately listed"
    ],
    "heartNotes": [
      "Not separately listed"
    ],
    "baseNotes": [
      "Not separately listed"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer"
    ],
    "time": "Day",
    "sprays": "3-4",
    "occasions": [
      "Casual",
      "Office"
    ],
    "featured": false,
    "families": [
      "Aromatic"
    ],
    "accords": [
      "Fresh"
    ]
  },
  {
    "id": "405",
    "slug": "archive-bois-d-encens",
    "brand": "Archive",
    "name": "Bois d Encens",
    "gender": "for women and men",
    "topNotes": [
      "Nashi Pear",
      "Pink Pepper"
    ],
    "heartNotes": [
      "Lily-of-the-Valley",
      "Jasmine Sambac",
      "Orange Blossom"
    ],
    "baseNotes": [
      "Cedar",
      "Sandalwood"
    ],
    "seasons": [
      "Spring",
      "Ac Venues",
      "Mild Winter",
      "Monsoon Evenings"
    ],
    "time": "Day / Evening",
    "sprays": "2-3 sprays",
    "occasions": [
      "Lunches",
      "Smart Casuals",
      "Dates",
      "Office",
      "Pujas"
    ],
    "featured": false,
    "families": [
      "Citrus",
      "Floral",
      "Fruity"
    ],
    "accords": [
      "Floral",
      "Fresh",
      "Fruity",
      "Spicy"
    ]
  },
  {
    "id": "406",
    "slug": "giorgio-armani-musc-shamal",
    "brand": "Giorgio Armani",
    "name": "Musc Shamal",
    "gender": "for women and men",
    "topNotes": [
      "Aldehydes",
      "Citruses"
    ],
    "heartNotes": [
      "Musk",
      "Rose",
      "Jasmine"
    ],
    "baseNotes": [
      "Vanilla",
      "Amber",
      "Cedar"
    ],
    "seasons": [
      "Spring",
      "Summer",
      "Winter"
    ],
    "time": "Day / Evening",
    "sprays": "4-6",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal",
      "Office"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Citrus",
      "Floral"
    ],
    "accords": [
      "Floral",
      "Fresh",
      "Musky",
      "Sweet"
    ]
  },
  {
    "id": "407",
    "slug": "giorgio-armani-armani-prive-oud-royal",
    "brand": "Giorgio Armani",
    "name": "Armani Prive Oud Royal",
    "gender": "for women and men",
    "topNotes": [
      "Not separately listed"
    ],
    "heartNotes": [
      "Not separately listed"
    ],
    "baseNotes": [
      "Not separately listed"
    ],
    "seasons": [
      "Ac Venues",
      "Winter",
      "Monsoon Evenings"
    ],
    "time": "Evening",
    "sprays": "2-3 sprays",
    "occasions": [
      "Celebrations",
      "Receptions",
      "Dinner Dates",
      "Formal Events"
    ],
    "featured": false,
    "families": [
      "Aromatic"
    ],
    "accords": [
      "Fresh"
    ]
  },
  {
    "id": "408",
    "slug": "giorgio-armani-the-yulong",
    "brand": "Giorgio Armani",
    "name": "The Yulong",
    "gender": "for women and men",
    "topNotes": [
      "Mandarin Orange",
      "Petitgrain",
      "Cardamom"
    ],
    "heartNotes": [
      "Green Tea",
      "Black Tea",
      "Orange Blossom",
      "Jasmine"
    ],
    "baseNotes": [
      "Vetiver",
      "Ambrette (Musk Mallow)",
      "Iris"
    ],
    "seasons": [
      "Spring",
      "Summer",
      "Monsoon"
    ],
    "time": "Day",
    "sprays": "3-4 sprays; 2-3 indoors",
    "occasions": [
      "Travel",
      "Casual Daytime Events",
      "College",
      "Office",
      "Brunch"
    ],
    "featured": false,
    "families": [
      "Citrus",
      "Floral",
      "Spicy"
    ],
    "accords": [
      "Earthy",
      "Floral",
      "Fresh",
      "Green"
    ]
  },
  {
    "id": "409",
    "slug": "giorgio-armani-armani-prive-rouge-malachite",
    "brand": "Giorgio Armani",
    "name": "Armani Prive Rouge Malachite",
    "gender": "for women and men",
    "topNotes": [
      "Tuberose",
      "Pink Pepper",
      "Clary Sage"
    ],
    "heartNotes": [
      "Tuberose",
      "Jasmine Sambac",
      "Ylang-Ylang",
      "Benzoin",
      "Cashmeran",
      "Orange Blossom"
    ],
    "baseNotes": [
      "Tuberose",
      "Amber"
    ],
    "seasons": [
      "Spring",
      "Ac Venues",
      "Mild Winter",
      "Monsoon Evenings"
    ],
    "time": "Day / Evening",
    "sprays": "2-3 sprays",
    "occasions": [
      "Lunches",
      "Smart Casuals",
      "Dates",
      "Office",
      "Pujas"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Aromatic",
      "Citrus"
    ],
    "accords": [
      "Floral",
      "Fresh",
      "Herbal",
      "Spicy"
    ]
  },
  {
    "id": "410",
    "slug": "giorgio-armani-armani-prive-rouge-malachite-410",
    "brand": "Giorgio Armani",
    "name": "Armani Prive Rouge Malachite",
    "gender": "for women and men",
    "topNotes": [
      "Tuberose",
      "Pink Pepper",
      "Clary Sage"
    ],
    "heartNotes": [
      "Tuberose",
      "Jasmine Sambac",
      "Ylang-Ylang",
      "Benzoin",
      "Cashmeran",
      "Orange Blossom"
    ],
    "baseNotes": [
      "Tuberose",
      "Amber"
    ],
    "seasons": [
      "Spring",
      "Ac Venues",
      "Mild Winter",
      "Monsoon Evenings"
    ],
    "time": "Day / Evening",
    "sprays": "2-3 sprays",
    "occasions": [
      "Lunches",
      "Smart Casuals",
      "Dates",
      "Office",
      "Pujas"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Aromatic",
      "Citrus"
    ],
    "accords": [
      "Floral",
      "Fresh",
      "Herbal",
      "Spicy"
    ]
  },
  {
    "id": "411",
    "slug": "giorgio-armani-sable-nuit",
    "brand": "Giorgio Armani",
    "name": "Sable Nuit",
    "gender": "for women and men",
    "topNotes": [
      "Olibanum",
      "Pink Pepper"
    ],
    "heartNotes": [
      "Cedar",
      "Benzoin",
      "Labdanum",
      "Patchouli"
    ],
    "baseNotes": [
      "Olibanum",
      "Vanilla",
      "Ambroxan"
    ],
    "seasons": [
      "Monsoon",
      "Winter"
    ],
    "time": "Evening",
    "sprays": "2-3",
    "occasions": [
      "Date Night",
      "Formal"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Spicy",
      "Woody"
    ],
    "accords": [
      "Earthy",
      "Spicy",
      "Sweet",
      "Warm"
    ]
  },
  {
    "id": "412",
    "slug": "giorgio-armani-sensi",
    "brand": "Giorgio Armani",
    "name": "Sensi",
    "gender": "for women",
    "topNotes": [
      "Black locust",
      "Lime"
    ],
    "heartNotes": [
      "Almond",
      "Wheat",
      "Jasmine"
    ],
    "baseNotes": [
      "Benzoin",
      "Brazilian Rosewood"
    ],
    "seasons": [
      "Spring",
      "Summer",
      "Winter"
    ],
    "time": "Day / Evening",
    "sprays": "4-6",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal",
      "Office"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Citrus",
      "Floral"
    ],
    "accords": [
      "Floral",
      "Fresh",
      "Sweet",
      "Warm"
    ]
  },
  {
    "id": "413",
    "slug": "giorgio-armani-si",
    "brand": "Giorgio Armani",
    "name": "Si",
    "gender": "for women",
    "topNotes": [
      "Cassis"
    ],
    "heartNotes": [
      "May Rose",
      "Freesia"
    ],
    "baseNotes": [
      "Vanilla",
      "Patchouli",
      "Woody Notes",
      "Ambroxan"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Winter"
    ],
    "time": "Evening",
    "sprays": "2-3",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Floral",
      "Woody"
    ],
    "accords": [
      "Earthy",
      "Floral",
      "Sweet",
      "Warm"
    ]
  },
  {
    "id": "414",
    "slug": "archive-si-passione",
    "brand": "Archive",
    "name": "Si Passione",
    "gender": "for women",
    "topNotes": [
      "Pear",
      "Black Currant",
      "Pink Pepper",
      "Grapefruit"
    ],
    "heartNotes": [
      "Pineapple",
      "Rose",
      "Jasmine",
      "Heliotrope"
    ],
    "baseNotes": [
      "Vanilla",
      "Cedar",
      "Amberwood",
      "Patchouli"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer",
      "Winter"
    ],
    "time": "Day / Evening",
    "sprays": "4-6",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal",
      "Office"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Citrus",
      "Floral"
    ],
    "accords": [
      "Earthy",
      "Floral",
      "Fresh",
      "Fruity"
    ]
  },
  {
    "id": "415",
    "slug": "emporio-armani-stronger-with-you",
    "brand": "Emporio Armani Stronger With",
    "name": "You",
    "gender": "for men",
    "topNotes": [
      "Rum",
      "elemi",
      "Bergamot"
    ],
    "heartNotes": [
      "Lavender",
      "Davana"
    ],
    "baseNotes": [
      "Madagascar Vanilla",
      "Chestnut",
      "Cedar",
      "Patchouli"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer",
      "Winter"
    ],
    "time": "Day / Evening",
    "sprays": "4-6",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal",
      "Office"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Aromatic",
      "Citrus"
    ],
    "accords": [
      "Earthy",
      "Fresh",
      "Herbal",
      "Sweet"
    ]
  },
  {
    "id": "416",
    "slug": "archive-fragrance-416",
    "brand": "Archive",
    "name": "Fragrance 416",
    "gender": "for men",
    "topNotes": [
      "Chestnut",
      "Sugar"
    ],
    "heartNotes": [
      "Sage",
      "Lavender"
    ],
    "baseNotes": [
      "Vanilla",
      "Smoke"
    ],
    "seasons": [
      "Spring",
      "Ac Venues",
      "Mild Winter",
      "Monsoon Evenings"
    ],
    "time": "Day / Evening",
    "sprays": "2-3 sprays",
    "occasions": [
      "Lunches",
      "Smart Casuals",
      "Dates",
      "Office",
      "Pujas"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Aromatic",
      "Gourmand"
    ],
    "accords": [
      "Herbal",
      "Smoky",
      "Sweet",
      "Warm"
    ]
  },
  {
    "id": "417",
    "slug": "giorgio-valenti-armani-prive-vert-malachite",
    "brand": "Giorgio Valenti",
    "name": "Armani Prive Vert Malachite",
    "gender": "for women and men",
    "topNotes": [
      "Bitter Orange",
      "Petitgrain"
    ],
    "heartNotes": [
      "Jasmine Sambac",
      "Ylang-Ylang",
      "Pink Pepper"
    ],
    "baseNotes": [
      "Lily",
      "Vanilla",
      "Benzoin"
    ],
    "seasons": [
      "Spring",
      "Summer",
      "Winter"
    ],
    "time": "Day / Evening",
    "sprays": "4-6",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal",
      "Office"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Citrus",
      "Floral"
    ],
    "accords": [
      "Floral",
      "Fresh",
      "Spicy",
      "Sweet"
    ]
  },
  {
    "id": "418",
    "slug": "archive-rose-noire",
    "brand": "Archive",
    "name": "Rose Noire",
    "gender": "for men",
    "topNotes": [
      "Green Notes",
      "Citruses"
    ],
    "heartNotes": [
      "Nutmeg",
      "Pepper",
      "Watermelon"
    ],
    "baseNotes": [
      "Floral Notes",
      "Spicy Notes"
    ],
    "seasons": [
      "Spring",
      "Ac Venues",
      "Mild Winter",
      "Monsoon Evenings"
    ],
    "time": "Day / Evening",
    "sprays": "2-3 sprays",
    "occasions": [
      "Lunches",
      "Smart Casuals",
      "Dates",
      "Office",
      "Pujas"
    ],
    "featured": false,
    "families": [
      "Aquatic",
      "Citrus",
      "Floral"
    ],
    "accords": [
      "Floral",
      "Fresh",
      "Green",
      "Marine"
    ]
  },
  {
    "id": "419",
    "slug": "gisada-ambassador-men",
    "brand": "Gisada",
    "name": "Ambassador Men",
    "gender": "for men",
    "topNotes": [
      "Apple",
      "Green Mandarin",
      "Cardamom",
      "Violet"
    ],
    "heartNotes": [
      "Mango",
      "Lavender",
      "Black Pepper",
      "Patchouli",
      "Peony"
    ],
    "baseNotes": [
      "Vanilla",
      "Amber",
      "Vetiver",
      "Teak Wood",
      "Moss"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer",
      "Winter"
    ],
    "time": "Day / Evening",
    "sprays": "4-6",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal",
      "Office"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Aromatic",
      "Citrus"
    ],
    "accords": [
      "Earthy",
      "Floral",
      "Fresh",
      "Fruity"
    ]
  },
  {
    "id": "420",
    "slug": "gisada-ambassador-men-420",
    "brand": "Gisada",
    "name": "Ambassador Men",
    "gender": "for men",
    "topNotes": [
      "Apple",
      "Green Mandarin",
      "Cardamom",
      "Violet"
    ],
    "heartNotes": [
      "Mango",
      "Lavender",
      "Black Pepper",
      "Patchouli",
      "Peony"
    ],
    "baseNotes": [
      "Vanilla",
      "Amber",
      "Vetiver",
      "Teak Wood",
      "Moss"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer",
      "Winter"
    ],
    "time": "Day / Evening",
    "sprays": "4-6",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal",
      "Office"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Aromatic",
      "Citrus"
    ],
    "accords": [
      "Earthy",
      "Floral",
      "Fresh",
      "Fruity"
    ]
  },
  {
    "id": "421",
    "slug": "givenchy-amarige",
    "brand": "Givenchy",
    "name": "Amarige",
    "gender": "for women",
    "topNotes": [
      "Orange Blossom",
      "Peach",
      "Plum",
      "Neroli",
      "Brazilian Rosewood",
      "Mandarin Orange",
      "Violet"
    ],
    "heartNotes": [
      "Tuberose",
      "Mimosa",
      "Gardenia",
      "Ylang-Ylang",
      "Jasmine",
      "Black locust",
      "Carnation",
      "Red Berries",
      "Black Currant",
      "Rose",
      "Cassia",
      "Orchid"
    ],
    "baseNotes": [
      "Sandalwood",
      "Cedar",
      "Amber",
      "Musk",
      "Tonka Bean",
      "Vanilla"
    ],
    "seasons": [
      "Spring",
      "Ac Venues",
      "Mild Winter",
      "Monsoon Evenings"
    ],
    "time": "Day / Evening",
    "sprays": "2-3 sprays",
    "occasions": [
      "Lunches",
      "Smart Casuals",
      "Dates",
      "Office",
      "Pujas"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Citrus",
      "Floral"
    ],
    "accords": [
      "Floral",
      "Fresh",
      "Fruity",
      "Musky"
    ]
  },
  {
    "id": "422",
    "slug": "givenchy-gentleman-1974",
    "brand": "Givenchy",
    "name": "Gentleman 1974",
    "gender": "for men",
    "topNotes": [
      "Honey",
      "Cinnamon",
      "Rose",
      "Tarragon",
      "Bergamot",
      "Lemon"
    ],
    "heartNotes": [
      "Patchouli",
      "Cedar",
      "Orris Root",
      "Jasmine"
    ],
    "baseNotes": [
      "Patchouli",
      "Leather",
      "Civet",
      "Oakmoss",
      "Vetiver",
      "Musk",
      "Amber",
      "Vanilla"
    ],
    "seasons": [
      "Ac Venues",
      "Winter",
      "Cool Nights"
    ],
    "time": "Evening",
    "sprays": "1-2 sprays",
    "occasions": [
      "Receptions",
      "Winter Weddings",
      "Festive Evenings",
      "Formal Dinners"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Citrus",
      "Floral"
    ],
    "accords": [
      "Earthy",
      "Floral",
      "Fresh",
      "Leather"
    ]
  },
  {
    "id": "423",
    "slug": "givenchy-gentlemen-only-absolute",
    "brand": "Givenchy",
    "name": "Gentlemen Only Absolute",
    "gender": "for men",
    "topNotes": [
      "Bergamot"
    ],
    "heartNotes": [
      "Cinnamon",
      "Nutmeg",
      "Saffron"
    ],
    "baseNotes": [
      "Vanila",
      "Sandalwood"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer"
    ],
    "time": "Day",
    "sprays": "4-6",
    "occasions": [
      "Brunch",
      "Casual Daytime Events",
      "College",
      "Office",
      "Travel"
    ],
    "featured": false,
    "families": [
      "Citrus",
      "Spicy",
      "Woody"
    ],
    "accords": [
      "Fresh",
      "Spicy",
      "Woody"
    ]
  },
  {
    "id": "424",
    "slug": "when-to-wear-givenchy-iii",
    "brand": "When To Wear",
    "name": "Givenchy III",
    "gender": "for women",
    "topNotes": [
      "Galbanum",
      "Aldehydes",
      "Gardenia",
      "Bergamot",
      "Peach",
      "Mandarin Orange"
    ],
    "heartNotes": [
      "Hiacynth",
      "Orris Root",
      "Narcissus",
      "Jasmine",
      "Carnation",
      "Lily-of-the-Valley",
      "Rose"
    ],
    "baseNotes": [
      "Oakmoss",
      "Vetiver",
      "Sandalwood",
      "Patchouli",
      "Myrrh",
      "Amber",
      "Coconut"
    ],
    "seasons": [
      "Spring",
      "Summer",
      "Monsoon"
    ],
    "time": "Day",
    "sprays": "3-4 sprays; 2-3 indoors Sprays: 3-4 sprays; 2-3 indoors",
    "occasions": [
      "Travel",
      "Casual Daytime Events",
      "College",
      "Office",
      "Brunch"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Citrus",
      "Floral"
    ],
    "accords": [
      "Balsamic",
      "Earthy",
      "Floral",
      "Fresh"
    ]
  },
  {
    "id": "425",
    "slug": "givenchy-irresistible-givenchy",
    "brand": "Givenchy",
    "name": "Irresistible Givenchy",
    "gender": "for women",
    "topNotes": [
      "Pear",
      "Ambrette (Musk Mallow)"
    ],
    "heartNotes": [
      "Rose",
      "Iris"
    ],
    "baseNotes": [
      "Musk",
      "Virginia Cedar"
    ],
    "seasons": [
      "Spring",
      "Winter"
    ],
    "time": "Evening",
    "sprays": "3-4",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal"
    ],
    "featured": false,
    "families": [
      "Floral",
      "Fruity",
      "Woody"
    ],
    "accords": [
      "Floral",
      "Fruity",
      "Musky",
      "Powdery"
    ]
  },
  {
    "id": "426",
    "slug": "givenchy-irresistible-givenchy-426",
    "brand": "Givenchy",
    "name": "Irresistible Givenchy",
    "gender": "for women",
    "topNotes": [
      "Pear",
      "Ambrette (Musk Mallow)"
    ],
    "heartNotes": [
      "Rose",
      "Iris"
    ],
    "baseNotes": [
      "Musk",
      "Virginia Cedar"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer"
    ],
    "time": "Day",
    "sprays": "3-4",
    "occasions": [
      "Brunch",
      "Casual Daytime Events",
      "College",
      "Office",
      "Travel"
    ],
    "featured": false,
    "families": [
      "Floral",
      "Fruity",
      "Woody"
    ],
    "accords": [
      "Floral",
      "Fruity",
      "Musky",
      "Powdery"
    ]
  },
  {
    "id": "427",
    "slug": "givenchy-l-interdit",
    "brand": "Givenchy",
    "name": "L Interdit",
    "gender": "for women",
    "topNotes": [
      "Aldehydes",
      "Strawberry",
      "Spices",
      "Peach",
      "Bergamot",
      "Mandarin Orange"
    ],
    "heartNotes": [
      "Iris",
      "Violet",
      "Narcissus",
      "Orris Root",
      "Rose",
      "Ylang-Ylang",
      "Jasmine",
      "Lily-of-the-Valley"
    ],
    "baseNotes": [
      "Sandalwood",
      "Amber",
      "Musk",
      "Benzoin",
      "Vetiver",
      "Tonka Bean"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer",
      "Winter"
    ],
    "time": "Day / Evening",
    "sprays": "4-6",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal",
      "Office"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Citrus",
      "Floral"
    ],
    "accords": [
      "Earthy",
      "Floral",
      "Fresh",
      "Fruity"
    ]
  },
  {
    "id": "428",
    "slug": "givenchy-pi",
    "brand": "Givenchy",
    "name": "Pi",
    "gender": "for men",
    "topNotes": [
      "Mandarin Orange",
      "Tarragon",
      "Rosemary",
      "Basil"
    ],
    "heartNotes": [
      "Anise",
      "Neroli",
      "Geranium",
      "Lily-of-the-Valley"
    ],
    "baseNotes": [
      "Vanilla",
      "Almond",
      "Tonka Bean",
      "Benzoin",
      "Cedar"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer",
      "Winter"
    ],
    "time": "Day / Evening",
    "sprays": "4-6",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal",
      "Office"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Aromatic",
      "Citrus"
    ],
    "accords": [
      "Floral",
      "Fresh",
      "Herbal",
      "Spicy"
    ]
  },
  {
    "id": "429",
    "slug": "givenchy-pi-neo",
    "brand": "Givenchy",
    "name": "Pi Neo",
    "gender": "for men",
    "topNotes": [
      "Mandarin Orange",
      "Bergamot",
      "Anise",
      "Toscanol"
    ],
    "heartNotes": [
      "Cedar",
      "Myrtle",
      "Safraleine"
    ],
    "baseNotes": [
      "Patchouli",
      "Vanillin",
      "Cosmone"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer",
      "Winter"
    ],
    "time": "Day / Evening",
    "sprays": "4-6",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal",
      "Office"
    ],
    "featured": false,
    "families": [
      "Citrus",
      "Spicy",
      "Woody"
    ],
    "accords": [
      "Earthy",
      "Fresh",
      "Spicy",
      "Woody"
    ]
  },
  {
    "id": "430",
    "slug": "givenchy-xeryus-rouge",
    "brand": "Givenchy",
    "name": "Xeryus Rouge",
    "gender": "for men",
    "topNotes": [
      "Cactus",
      "Chinese Orange",
      "Tarragon"
    ],
    "heartNotes": [
      "Pimento",
      "African Geranium",
      "Cedar"
    ],
    "baseNotes": [
      "Sandalwood",
      "Cedar",
      "White Musk"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer"
    ],
    "time": "Day",
    "sprays": "4-6",
    "occasions": [
      "Brunch",
      "Casual Daytime Events",
      "College",
      "Office",
      "Travel"
    ],
    "featured": false,
    "families": [
      "Citrus",
      "Floral",
      "Woody"
    ],
    "accords": [
      "Floral",
      "Fresh",
      "Musky",
      "Woody"
    ]
  },
  {
    "id": "431",
    "slug": "goutal-eau-d-hadrien",
    "brand": "Goutal",
    "name": "Eau d Hadrien",
    "gender": "for women and men",
    "topNotes": [
      "Not separately listed"
    ],
    "heartNotes": [
      "Not separately listed"
    ],
    "baseNotes": [
      "Not separately listed"
    ],
    "seasons": [
      "Spring",
      "Summer",
      "Monsoon"
    ],
    "time": "Day",
    "sprays": "3-4 sprays; 2-3 indoors",
    "occasions": [
      "Travel",
      "Casual Daytime Events",
      "College",
      "Office",
      "Brunch"
    ],
    "featured": false,
    "families": [
      "Aromatic"
    ],
    "accords": [
      "Fresh"
    ]
  },
  {
    "id": "432",
    "slug": "gucci-a-gloaming-night",
    "brand": "Gucci",
    "name": "A Gloaming Night",
    "gender": "for women and men",
    "topNotes": [
      "Cinnamon"
    ],
    "heartNotes": [
      "Vetiver"
    ],
    "baseNotes": [
      "Patchouli"
    ],
    "seasons": [
      "Spring",
      "Ac Venues",
      "Mild Winter",
      "Monsoon Evenings"
    ],
    "time": "Day / Evening",
    "sprays": "2-3 sprays PAGE 44 / 118",
    "occasions": [
      "Lunches",
      "Smart Casuals",
      "Dates",
      "Office",
      "Pujas"
    ],
    "featured": false,
    "families": [
      "Spicy",
      "Woody"
    ],
    "accords": [
      "Earthy",
      "Spicy",
      "Woody"
    ]
  },
  {
    "id": "433",
    "slug": "grisi-not-reliably-matched",
    "brand": "Grisi",
    "name": "Not reliably matched",
    "gender": "Unisex",
    "topNotes": [
      "Reliable exact-page data not found in indexed sources"
    ],
    "heartNotes": [
      "Reliable exact-page data not found in indexed sources"
    ],
    "baseNotes": [
      "Reliable exact-page data not found in indexed sources"
    ],
    "seasons": [
      "Spring",
      "Ac Venues",
      "Mild Winter",
      "Monsoon Evenings"
    ],
    "time": "Day / Evening",
    "sprays": "2-3 sprays",
    "occasions": [
      "Lunches",
      "Smart Casuals",
      "Dates",
      "Office",
      "Pujas"
    ],
    "featured": false,
    "families": [
      "Aromatic"
    ],
    "accords": [
      "Fresh"
    ]
  },
  {
    "id": "434",
    "slug": "gucci-envy-for-men",
    "brand": "Gucci",
    "name": "Envy for Men",
    "gender": "for men",
    "topNotes": [
      "Ginger",
      "Cardamom",
      "Lavender",
      "Pepper",
      "Mahogany",
      "Coriander",
      "Mandarin Orange"
    ],
    "heartNotes": [
      "Sandalwood",
      "Cedar",
      "Carnation",
      "Jasmine",
      "Rose"
    ],
    "baseNotes": [
      "Incense",
      "Vanilla",
      "Amber",
      "Tobacco",
      "Vetiver",
      "Patchouli",
      "Leather",
      "Musk"
    ],
    "seasons": [
      "Ac Venues",
      "Winter",
      "Cool Nights"
    ],
    "time": "Evening",
    "sprays": "1-2 sprays",
    "occasions": [
      "Receptions",
      "Winter Weddings",
      "Festive Evenings",
      "Formal Dinners"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Aromatic",
      "Citrus"
    ],
    "accords": [
      "Balsamic",
      "Earthy",
      "Floral",
      "Fresh"
    ]
  },
  {
    "id": "435",
    "slug": "gucci-gucci-bloom",
    "brand": "Gucci",
    "name": "Gucci Bloom",
    "gender": "for women",
    "topNotes": [
      "Jasmine"
    ],
    "heartNotes": [
      "Tuberose"
    ],
    "baseNotes": [
      "Rangoon Creeper"
    ],
    "seasons": [
      "Spring"
    ],
    "time": "Day / Evening",
    "sprays": "3-4",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal",
      "Office"
    ],
    "featured": false,
    "families": [
      "Floral"
    ],
    "accords": [
      "Floral"
    ]
  },
  {
    "id": "436",
    "slug": "gucci-gucci-bloom-nettare-di-fiori",
    "brand": "Gucci",
    "name": "Gucci Bloom Nettare Di Fiori",
    "gender": "for women",
    "topNotes": [
      "Ginger",
      "Rose"
    ],
    "heartNotes": [
      "Tuberose",
      "Jasmine",
      "Honeysuckle",
      "Rangoon Creeper"
    ],
    "baseNotes": [
      "Musk",
      "Osmanthus",
      "Patchouli"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Winter"
    ],
    "time": "Evening",
    "sprays": "3-4",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal"
    ],
    "featured": false,
    "families": [
      "Floral",
      "Gourmand",
      "Spicy"
    ],
    "accords": [
      "Earthy",
      "Floral",
      "Musky",
      "Spicy"
    ]
  },
  {
    "id": "437",
    "slug": "gucci-flora-gorgeous-gardenia",
    "brand": "Gucci",
    "name": "Flora Gorgeous Gardenia",
    "gender": "for women",
    "topNotes": [
      "Pear Blossom",
      "Red Berries",
      "Italian Mandarin"
    ],
    "heartNotes": [
      "Gardenia",
      "Jasmine",
      "Frangipani"
    ],
    "baseNotes": [
      "Brown sugar",
      "Patchouli"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer"
    ],
    "time": "Day",
    "sprays": "4-6",
    "occasions": [
      "Casual",
      "Formal",
      "Office"
    ],
    "featured": false,
    "families": [
      "Citrus",
      "Floral",
      "Fruity"
    ],
    "accords": [
      "Earthy",
      "Floral",
      "Fresh",
      "Fruity"
    ]
  },
  {
    "id": "438",
    "slug": "archive-gucci-guilty",
    "brand": "Archive",
    "name": "Gucci Guilty",
    "gender": "for women",
    "topNotes": [
      "Pink Pepper",
      "Mandarin Orange",
      "Bergamot"
    ],
    "heartNotes": [
      "Lilac",
      "Peach",
      "Geranium",
      "Jasmine",
      "Black Currant"
    ],
    "baseNotes": [
      "Patchouli",
      "Amber",
      "White Musk",
      "Vanilla"
    ],
    "seasons": [
      "Spring",
      "Summer",
      "Monsoon"
    ],
    "time": "Day",
    "sprays": "3-4 sprays; 2-3 indoors",
    "occasions": [
      "Travel",
      "Casual Daytime Events",
      "College",
      "Office",
      "Brunch"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Citrus",
      "Floral"
    ],
    "accords": [
      "Earthy",
      "Floral",
      "Fresh",
      "Fruity"
    ]
  },
  {
    "id": "439",
    "slug": "gucci-gucci-pour-homme-ii",
    "brand": "Gucci",
    "name": "Gucci Pour Homme II",
    "gender": "for men",
    "topNotes": [
      "Violet Leaf",
      "Bergamot"
    ],
    "heartNotes": [
      "Black Tea",
      "Cinnamon",
      "Pimento"
    ],
    "baseNotes": [
      "Tobacco Leaf",
      "Myrrh",
      "Musk",
      "Olive Tree"
    ],
    "seasons": [
      "Spring",
      "Summer",
      "Winter"
    ],
    "time": "Day / Evening",
    "sprays": "4-6",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal",
      "Office"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Citrus",
      "Floral"
    ],
    "accords": [
      "Balsamic",
      "Floral",
      "Fresh",
      "Musky"
    ]
  },
  {
    "id": "440",
    "slug": "gucci-gucci-pour-homme-ii-440",
    "brand": "Gucci",
    "name": "Gucci Pour Homme II",
    "gender": "for men",
    "topNotes": [
      "Violet Leaf",
      "Bergamot"
    ],
    "heartNotes": [
      "Black Tea",
      "Cinnamon",
      "Pimento"
    ],
    "baseNotes": [
      "Tobacco Leaf",
      "Myrrh",
      "Musk",
      "Olive Tree"
    ],
    "seasons": [
      "Spring",
      "Summer",
      "Winter"
    ],
    "time": "Day / Evening",
    "sprays": "4-6",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal",
      "Office"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Citrus",
      "Floral"
    ],
    "accords": [
      "Balsamic",
      "Floral",
      "Fresh",
      "Musky"
    ]
  },
  {
    "id": "441",
    "slug": "gucci-gucci-rush",
    "brand": "Gucci",
    "name": "Gucci Rush",
    "gender": "for women",
    "topNotes": [
      "Peach",
      "Californian Gardenia",
      "African Freesia Petals"
    ],
    "heartNotes": [
      "Coriander",
      "Damask Rose",
      "Jasmine"
    ],
    "baseNotes": [
      "Patchouli",
      "Natural Vanilla",
      "Vetiver"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Winter"
    ],
    "time": "Evening",
    "sprays": "2-3",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Floral",
      "Fruity"
    ],
    "accords": [
      "Earthy",
      "Floral",
      "Fruity",
      "Spicy"
    ]
  },
  {
    "id": "442",
    "slug": "gucci-gucci-guilty-absolute",
    "brand": "Gucci",
    "name": "Gucci Guilty Absolute",
    "gender": "for men",
    "topNotes": [
      "Leather"
    ],
    "heartNotes": [
      "Cypress",
      "Patchouli"
    ],
    "baseNotes": [
      "Woody Notes",
      "Vetiver"
    ],
    "seasons": [
      "Spring",
      "Ac Venues",
      "Mild Winter",
      "Monsoon Evenings"
    ],
    "time": "Day / Evening",
    "sprays": "2-3 sprays Top: Leather \u00e2\u20ac\u00a2 Heart: Cypress and Patchouli \u00e2\u20ac\u00a2 Base: Woody Notes and Vetiver",
    "occasions": [
      "Lunches",
      "Smart Casuals",
      "Dates",
      "Office",
      "Pujas"
    ],
    "featured": false,
    "families": [
      "Leather",
      "Woody"
    ],
    "accords": [
      "Earthy",
      "Leather",
      "Woody"
    ]
  },
  {
    "id": "443",
    "slug": "gucci-guilty-absolute-pour-femme",
    "brand": "Gucci Guilty Absolute Pour",
    "name": "Femme",
    "gender": "for women",
    "topNotes": [
      "Blackberry",
      "Pink Pepper",
      "Bergamot"
    ],
    "heartNotes": [
      "Cypress",
      "Bulgarian Rose",
      "Woody Notes",
      "Vetiver"
    ],
    "baseNotes": [
      "Indian Patchouli",
      "Amber"
    ],
    "seasons": [
      "Spring",
      "Summer",
      "Monsoon"
    ],
    "time": "Day",
    "sprays": "3-4 sprays; 2-3 indoors",
    "occasions": [
      "Travel",
      "Casual Daytime Events",
      "College",
      "Office",
      "Brunch"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Citrus",
      "Floral"
    ],
    "accords": [
      "Earthy",
      "Floral",
      "Fresh",
      "Fruity"
    ]
  },
  {
    "id": "444",
    "slug": "gucci-intense-oud",
    "brand": "Gucci",
    "name": "Intense Oud",
    "gender": "for women and men",
    "topNotes": [
      "Frankincense",
      "Raspberry",
      "Saffron",
      "Pear"
    ],
    "heartNotes": [
      "Musk",
      "Damask Rose",
      "Orange Blossom"
    ],
    "baseNotes": [
      "Agarwood",
      "Leather",
      "Patchouli",
      "Ambergris"
    ],
    "seasons": [
      "Ac Venues",
      "Winter",
      "Cool Nights"
    ],
    "time": "Evening",
    "sprays": "1-2 sprays Gucci Guilty Eau de Parfum Intense Pour Femme for women",
    "occasions": [
      "Receptions",
      "Winter Weddings",
      "Festive Evenings",
      "Formal Dinners"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Citrus",
      "Floral"
    ],
    "accords": [
      "Balsamic",
      "Earthy",
      "Floral",
      "Fresh"
    ]
  },
  {
    "id": "445",
    "slug": "sprays-1-2-sprays-intense-pour-femme",
    "brand": "Sprays: 1-2 Sprays",
    "name": "Intense Pour Femme",
    "gender": "for women",
    "topNotes": [
      "Violet",
      "Mandora",
      "Litchi"
    ],
    "heartNotes": [
      "Plum",
      "Tuberose",
      "Ylang-Ylang"
    ],
    "baseNotes": [
      "Patchouli",
      "Vanilla",
      "Vetiver"
    ],
    "seasons": [
      "Spring",
      "Ac Venues",
      "Mild Winter",
      "Monsoon Evenings"
    ],
    "time": "Day / Evening",
    "sprays": "2-3 sprays",
    "occasions": [
      "Lunches",
      "Smart Casuals",
      "Dates",
      "Office",
      "Pujas"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Floral",
      "Fruity"
    ],
    "accords": [
      "Earthy",
      "Floral",
      "Fruity",
      "Powdery"
    ]
  },
  {
    "id": "446",
    "slug": "gucci-parfum",
    "brand": "Gucci",
    "name": "Parfum",
    "gender": "for women and men",
    "topNotes": [
      "Not separately listed"
    ],
    "heartNotes": [
      "Not separately listed"
    ],
    "baseNotes": [
      "Not separately listed"
    ],
    "seasons": [
      "Spring",
      "Ac Venues",
      "Mild Winter",
      "Monsoon Evenings"
    ],
    "time": "Day / Evening",
    "sprays": "2-3 sprays",
    "occasions": [
      "Lunches",
      "Smart Casuals",
      "Dates",
      "Office",
      "Pujas"
    ],
    "featured": false,
    "families": [
      "Aromatic"
    ],
    "accords": [
      "Fresh"
    ]
  },
  {
    "id": "447",
    "slug": "guerlain-angelique-noire",
    "brand": "Guerlain",
    "name": "Angelique Noire",
    "gender": "for women and men",
    "topNotes": [
      "Angelica",
      "Pear",
      "Pink Pepper"
    ],
    "heartNotes": [
      "Jasmine",
      "Caraway"
    ],
    "baseNotes": [
      "Vanilla",
      "Angelica",
      "Cedar"
    ],
    "seasons": [
      "Spring",
      "Winter"
    ],
    "time": "Evening",
    "sprays": "2-3",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Floral",
      "Fruity"
    ],
    "accords": [
      "Floral",
      "Fruity",
      "Spicy",
      "Sweet"
    ]
  },
  {
    "id": "448",
    "slug": "guerlain-aqua-allegoria-herba-fresca",
    "brand": "Guerlain",
    "name": "Aqua Allegoria Herba Fresca",
    "gender": "for women and men",
    "topNotes": [
      "Lemon",
      "Clover"
    ],
    "heartNotes": [
      "Mint",
      "Green Tea"
    ],
    "baseNotes": [
      "Lily-of-the-Valley",
      "Cyclamen"
    ],
    "seasons": [
      "Ac Venues",
      "Monsoon Evenings",
      "Winter"
    ],
    "time": "Evening",
    "sprays": "4-6",
    "occasions": [
      "Celebrations",
      "Dinner Dates",
      "Formal Events",
      "Receptions"
    ],
    "featured": false,
    "families": [
      "Aromatic",
      "Citrus",
      "Floral"
    ],
    "accords": [
      "Floral",
      "Fresh",
      "Green",
      "Herbal"
    ]
  },
  {
    "id": "449",
    "slug": "guerlain-aqua-allegoria-pamplelune",
    "brand": "Guerlain",
    "name": "Aqua Allegoria Pamplelune",
    "gender": "for women",
    "topNotes": [
      "Grapefruit",
      "Bergamot"
    ],
    "heartNotes": [
      "Cassia",
      "Petitgrain",
      "Neroli"
    ],
    "baseNotes": [
      "Patchouli",
      "Vanilla"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer",
      "Winter"
    ],
    "time": "Day / Evening",
    "sprays": "4-6",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal",
      "Office"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Citrus",
      "Woody"
    ],
    "accords": [
      "Earthy",
      "Fresh",
      "Sweet",
      "Warm"
    ]
  },
  {
    "id": "450",
    "slug": "archive-cherry-oud",
    "brand": "Archive",
    "name": "Cherry Oud",
    "gender": "for women and men",
    "topNotes": [
      "Cherry",
      "Fruity Notes"
    ],
    "heartNotes": [
      "Turkish Rose",
      "Bulgarian Rose"
    ],
    "baseNotes": [
      "Agarwood (Oud)",
      "Leather"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer"
    ],
    "time": "Day",
    "sprays": "2-3",
    "occasions": [
      "Brunch",
      "Casual Daytime Events",
      "College",
      "Office",
      "Travel"
    ],
    "featured": false,
    "families": [
      "Floral",
      "Fruity",
      "Leather"
    ],
    "accords": [
      "Floral",
      "Fruity",
      "Leather",
      "Woody"
    ]
  },
  {
    "id": "451",
    "slug": "guerlain-cuir-beluga",
    "brand": "Guerlain",
    "name": "Cuir Beluga",
    "gender": "for women and men",
    "topNotes": [
      "Tangerine",
      "Aldehydes"
    ],
    "heartNotes": [
      "Immortelle",
      "Patchouli"
    ],
    "baseNotes": [
      "Vanilla",
      "Suede",
      "Heliotrope",
      "Amber"
    ],
    "seasons": [
      "Ac Venues",
      "Monsoon Evenings",
      "Winter"
    ],
    "time": "Evening",
    "sprays": "2-3",
    "occasions": [
      "Celebrations",
      "Dinner Dates",
      "Formal Events",
      "Receptions"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Leather",
      "Woody"
    ],
    "accords": [
      "Earthy",
      "Leather",
      "Sweet",
      "Warm"
    ]
  },
  {
    "id": "452",
    "slug": "guerlain-heritage-eau-de-parfum",
    "brand": "Guerlain",
    "name": "Heritage Eau de Parfum",
    "gender": "for men",
    "topNotes": [
      "Lavender",
      "Juniper Berries",
      "Aldehydes",
      "Clary Sage",
      "Bergamot",
      "Lemon",
      "Violet",
      "Green Notes",
      "Petitgrain"
    ],
    "heartNotes": [
      "Patchouli",
      "Carnation",
      "Orris Root",
      "Balsam Fir",
      "Coriander",
      "Pepper",
      "Pink Pepper",
      "Geranium",
      "Rose",
      "Jasmine",
      "Lily-of-the-Valley",
      "Cyclamen"
    ],
    "baseNotes": [
      "Amber",
      "Sandalwood",
      "Cedar",
      "Oakmoss",
      "Musk",
      "Tonka Bean",
      "Vetiver"
    ],
    "seasons": [
      "Spring",
      "Summer",
      "Monsoon"
    ],
    "time": "Day",
    "sprays": "2-3 sprays Sprays: 3-4 sprays; 2-3 indoors",
    "occasions": [
      "Travel",
      "Casual Daytime Events",
      "College",
      "Office",
      "Brunch"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Aromatic",
      "Citrus"
    ],
    "accords": [
      "Earthy",
      "Floral",
      "Fresh",
      "Green"
    ]
  },
  {
    "id": "453",
    "slug": "guerlain-insolence",
    "brand": "Guerlain",
    "name": "Insolence",
    "gender": "for women",
    "topNotes": [
      "Raspberry",
      "Red Berries",
      "Bergamot",
      "Lemon"
    ],
    "heartNotes": [
      "Violet",
      "Rose",
      "Orange Blossom"
    ],
    "baseNotes": [
      "Iris",
      "Tonka Bean",
      "Resins",
      "Musk",
      "Sandalwood"
    ],
    "seasons": [
      "Spring",
      "Ac Venues",
      "Mild Winter",
      "Monsoon Evenings"
    ],
    "time": "Day / Evening",
    "sprays": "2-3 sprays",
    "occasions": [
      "Lunches",
      "Smart Casuals",
      "Dates",
      "Office",
      "Pujas"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Citrus",
      "Floral"
    ],
    "accords": [
      "Balsamic",
      "Floral",
      "Fresh",
      "Fruity"
    ]
  },
  {
    "id": "454",
    "slug": "guerlain-iris-pallida-extrait-6",
    "brand": "Guerlain",
    "name": "Iris Pallida Extrait 6",
    "gender": "for women and men",
    "topNotes": [
      "Not separately listed"
    ],
    "heartNotes": [
      "Not separately listed"
    ],
    "baseNotes": [
      "Not separately listed"
    ],
    "seasons": [
      "Ac Venues",
      "Winter",
      "Cool Nights"
    ],
    "time": "Evening",
    "sprays": "1-2 sprays",
    "occasions": [
      "Receptions",
      "Winter Weddings",
      "Festive Evenings",
      "Formal Dinners"
    ],
    "featured": false,
    "families": [
      "Aromatic"
    ],
    "accords": [
      "Fresh"
    ]
  },
  {
    "id": "455",
    "slug": "guerlain-l-homme-ideal-cologne",
    "brand": "Guerlain",
    "name": "L Homme Ideal Cologne",
    "gender": "for women",
    "topNotes": [
      "Anise",
      "Bergamot"
    ],
    "heartNotes": [
      "Carnation",
      "Neroli"
    ],
    "baseNotes": [
      "Iris",
      "Violet",
      "Vanilla",
      "Tonka",
      "Benzoin"
    ],
    "seasons": [
      "Spring",
      "Summer",
      "Winter"
    ],
    "time": "Day / Evening",
    "sprays": "4-6",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal",
      "Office"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Citrus",
      "Floral"
    ],
    "accords": [
      "Floral",
      "Fresh",
      "Powdery",
      "Spicy"
    ]
  },
  {
    "id": "456",
    "slug": "archive-fragrance-456",
    "brand": "Archive",
    "name": "Fragrance 456",
    "gender": "for men",
    "topNotes": [
      "Grapefruit",
      "Orange",
      "Bergamot",
      "Pink Pepper"
    ],
    "heartNotes": [
      "Almond",
      "Neroli"
    ],
    "baseNotes": [
      "Vetiver",
      "White Musk"
    ],
    "seasons": [
      "Spring",
      "Ac Venues",
      "Mild Winter",
      "Monsoon Evenings"
    ],
    "time": "Day / Evening",
    "sprays": "2-3 sprays",
    "occasions": [
      "Lunches",
      "Smart Casuals",
      "Dates",
      "Office",
      "Pujas"
    ],
    "featured": false,
    "families": [
      "Citrus",
      "Gourmand",
      "Spicy"
    ],
    "accords": [
      "Earthy",
      "Fresh",
      "Musky",
      "Spicy"
    ]
  },
  {
    "id": "457",
    "slug": "guerlain-l-homme-ideal",
    "brand": "Guerlain",
    "name": "L Homme Ideal",
    "gender": "for men",
    "topNotes": [
      "Citruses",
      "Orange Blossom",
      "Rosemary",
      "Bitter Orange"
    ],
    "heartNotes": [
      "Almond",
      "Tonka Bean"
    ],
    "baseNotes": [
      "Leather",
      "Cedar",
      "Vetiver"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer",
      "Winter"
    ],
    "time": "Day / Evening",
    "sprays": "4-6",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal",
      "Office"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Aromatic",
      "Citrus"
    ],
    "accords": [
      "Earthy",
      "Floral",
      "Fresh",
      "Herbal"
    ]
  },
  {
    "id": "458",
    "slug": "guerlain-mitsouko-eau-de-parfum",
    "brand": "Guerlain",
    "name": "Mitsouko Eau de Parfum",
    "gender": "for women",
    "topNotes": [
      "Bergamot",
      "Citruses",
      "Jasmine",
      "Rose"
    ],
    "heartNotes": [
      "Peach",
      "Ylang-Ylang",
      "Jasmine",
      "Rose",
      "Lilac"
    ],
    "baseNotes": [
      "Oakmoss",
      "Spices",
      "Cinnamon",
      "Vetiver",
      "Amber"
    ],
    "seasons": [
      "Ac Venues",
      "Cool Nights",
      "Winter"
    ],
    "time": "Evening",
    "sprays": "4-6",
    "occasions": [
      "Festive Evenings",
      "Formal Dinners",
      "Receptions",
      "Winter Weddings"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Citrus",
      "Floral"
    ],
    "accords": [
      "Earthy",
      "Floral",
      "Fresh",
      "Fruity"
    ]
  },
  {
    "id": "459",
    "slug": "guerlain-neroli-outrenoir",
    "brand": "Guerlain",
    "name": "Neroli Outrenoir",
    "gender": "for women and men",
    "topNotes": [
      "Petitgrain",
      "Bergamot",
      "Tangerine",
      "Lemon",
      "Grapefruit"
    ],
    "heartNotes": [
      "Tea",
      "Neroli",
      "Orange Blossom",
      "Smoke",
      "Earthy Notes"
    ],
    "baseNotes": [
      "Vanilla",
      "Myrrh",
      "Benzoin",
      "Ambrette (Musk Mallow)",
      "Oakmoss"
    ],
    "seasons": [
      "Spring",
      "Ac Venues",
      "Mild Winter",
      "Monsoon Evenings"
    ],
    "time": "Day / Evening",
    "sprays": "2-3 sprays",
    "occasions": [
      "Lunches",
      "Smart Casuals",
      "Dates",
      "Office",
      "Pujas"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Citrus",
      "Floral"
    ],
    "accords": [
      "Balsamic",
      "Earthy",
      "Floral",
      "Fresh"
    ]
  },
  {
    "id": "460",
    "slug": "guerlain-santal-royal",
    "brand": "Guerlain",
    "name": "Santal Royal",
    "gender": "for women and men",
    "topNotes": [
      "Jasmine",
      "Neroli"
    ],
    "heartNotes": [
      "Rose",
      "Peach",
      "Cinnamon"
    ],
    "baseNotes": [
      "Agarwood (Oud)",
      "Sandalwood",
      "Leather",
      "Amber",
      "Musk"
    ],
    "seasons": [
      "Ac Venues",
      "Winter",
      "Monsoon Evenings"
    ],
    "time": "Evening",
    "sprays": "2-3 sprays",
    "occasions": [
      "Celebrations",
      "Receptions",
      "Dinner Dates",
      "Formal Events"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Citrus",
      "Floral"
    ],
    "accords": [
      "Floral",
      "Fresh",
      "Fruity",
      "Leather"
    ]
  },
  {
    "id": "461",
    "slug": "shalimar-eau-de-parfum-spiritueuse-double-vanille",
    "brand": "Shalimar Eau De Parfum",
    "name": "Spiritueuse Double Vanille",
    "gender": "for women",
    "topNotes": [
      "Citruses",
      "Bergamot",
      "Lemon",
      "Cedar",
      "Mandarin Orange"
    ],
    "heartNotes": [
      "Iris",
      "Patchouli",
      "Vetiver",
      "Jasmine",
      "Rose"
    ],
    "baseNotes": [
      "Vanilla",
      "Incense",
      "Leather",
      "Opoponax",
      "Civet",
      "Sandalwood",
      "Tonka Bean",
      "Musk  for women  NOTES"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer",
      "Winter"
    ],
    "time": "Day / Evening",
    "sprays": "4-6",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal",
      "Office"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Citrus",
      "Floral"
    ],
    "accords": [
      "Balsamic",
      "Earthy",
      "Floral",
      "Fresh"
    ]
  },
  {
    "id": "462",
    "slug": "vanilla-incense-leather-opoponax-civet-sandalwood-tonka-bean-and-musk",
    "brand": "Archive",
    "name": "Bean and Musk",
    "gender": "for women",
    "topNotes": [
      "Incense",
      "Pink Pepper",
      "Bergamot"
    ],
    "heartNotes": [
      "Cedar",
      "Ylang- Ylang",
      "Bulgarian Rose",
      "Jasmine"
    ],
    "baseNotes": [
      "Vanilla",
      "Benzoin"
    ],
    "seasons": [
      "Spring",
      "Summer",
      "Winter"
    ],
    "time": "Day / Evening",
    "sprays": "4-6",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal",
      "Office"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Citrus",
      "Floral"
    ],
    "accords": [
      "Balsamic",
      "Floral",
      "Fresh",
      "Spicy"
    ]
  },
  {
    "id": "463",
    "slug": "guerlain-tobacco-honey",
    "brand": "Guerlain",
    "name": "Tobacco Honey",
    "gender": "for women and men",
    "topNotes": [
      "Honey",
      "Cloves",
      "Anise"
    ],
    "heartNotes": [
      "Tobacco",
      "Tonka",
      "Vanilla",
      "Sesame"
    ],
    "baseNotes": [
      "Agarwood (Oud)",
      "Sandalwood"
    ],
    "seasons": [
      "Winter"
    ],
    "time": "Evening",
    "sprays": "2-3",
    "occasions": [
      "Date Night",
      "Formal"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Gourmand",
      "Spicy"
    ],
    "accords": [
      "Spicy",
      "Sweet",
      "Warm",
      "Woody"
    ]
  },
  {
    "id": "464",
    "slug": "guerlain-tonka-imperiale",
    "brand": "Guerlain",
    "name": "Tonka Imperiale",
    "gender": "for women and men",
    "topNotes": [
      "Bitter Almond",
      "Rosemary",
      "Bergamot"
    ],
    "heartNotes": [
      "Tonka Bean",
      "Tobacco",
      "Jasmine"
    ],
    "baseNotes": [
      "Incense",
      "Cedar",
      "Pine"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer",
      "Winter"
    ],
    "time": "Day / Evening",
    "sprays": "4-6",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal",
      "Office"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Aromatic",
      "Citrus"
    ],
    "accords": [
      "Balsamic",
      "Floral",
      "Fresh",
      "Herbal"
    ]
  },
  {
    "id": "465",
    "slug": "guerlain-vanille-planifolia-extrait-21",
    "brand": "Guerlain",
    "name": "Vanille Planifolia Extrait 21",
    "gender": "for women and men",
    "topNotes": [
      "Not separately listed"
    ],
    "heartNotes": [
      "Not separately listed"
    ],
    "baseNotes": [
      "Not separately listed"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer"
    ],
    "time": "Day",
    "sprays": "3-4",
    "occasions": [
      "Casual",
      "Office"
    ],
    "featured": false,
    "families": [
      "Aromatic"
    ],
    "accords": [
      "Fresh"
    ]
  },
  {
    "id": "466",
    "slug": "archive-vetiver-vintage-edition",
    "brand": "Archive",
    "name": "Vetiver Vintage Edition",
    "gender": "for men",
    "topNotes": [
      "Lemon"
    ],
    "heartNotes": [
      "Vetiver",
      "Tobacco"
    ],
    "baseNotes": [
      "Tobacco",
      "Nutmeg",
      "Pepper"
    ],
    "seasons": [
      "Ac Venues",
      "Cool Nights",
      "Winter"
    ],
    "time": "Evening",
    "sprays": "4-6",
    "occasions": [
      "Festive Evenings",
      "Formal Dinners",
      "Receptions",
      "Winter Weddings"
    ],
    "featured": false,
    "families": [
      "Citrus",
      "Gourmand",
      "Spicy"
    ],
    "accords": [
      "Earthy",
      "Fresh",
      "Spicy",
      "Sweet"
    ]
  },
  {
    "id": "467",
    "slug": "guess-guess-man",
    "brand": "Guess",
    "name": "Guess Man",
    "gender": "for men",
    "topNotes": [
      "Wormwood"
    ],
    "heartNotes": [
      "Lavender",
      "White Pepper",
      "Ginger",
      "Nutmeg"
    ],
    "baseNotes": [
      "Fir",
      "Musk",
      "Sandalwood",
      "Amber",
      "Suede",
      "Peru Balsam"
    ],
    "seasons": [
      "Monsoon",
      "Winter"
    ],
    "time": "Evening",
    "sprays": "2-3",
    "occasions": [
      "Date Night",
      "Formal"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Aromatic",
      "Leather"
    ],
    "accords": [
      "Herbal",
      "Leather",
      "Musky",
      "Spicy"
    ]
  },
  {
    "id": "468",
    "slug": "guy-laroche-drakkar-noir",
    "brand": "Guy Laroche",
    "name": "Drakkar Noir",
    "gender": "for men",
    "topNotes": [
      "Lavender",
      "Lemon",
      "Bergamot",
      "Rosemary",
      "Mint",
      "Lemon Verbena",
      "Basil",
      "Artemisia"
    ],
    "heartNotes": [
      "Juniper",
      "Coriander",
      "Cinnamon",
      "Carnation",
      "Wormwood",
      "Angelica",
      "Jasmine"
    ],
    "baseNotes": [
      "Oakmoss",
      "Pine Tree Needles",
      "Leather",
      "Fir",
      "Sandalwood",
      "Vetiver",
      "Patchouli"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer"
    ],
    "time": "Day",
    "sprays": "4-6",
    "occasions": [
      "Casual",
      "Formal",
      "Office"
    ],
    "featured": false,
    "families": [
      "Aromatic",
      "Citrus",
      "Floral"
    ],
    "accords": [
      "Earthy",
      "Floral",
      "Fresh",
      "Herbal"
    ]
  },
  {
    "id": "469",
    "slug": "hadarah-not-reliably-matched",
    "brand": "Hadarah",
    "name": "Not reliably matched",
    "gender": "Unisex",
    "topNotes": [
      "Reliable exact-page data not found in indexed sources"
    ],
    "heartNotes": [
      "Reliable exact-page data not found in indexed sources"
    ],
    "baseNotes": [
      "Reliable exact-page data not found in indexed sources"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer"
    ],
    "time": "Day",
    "sprays": "3-4",
    "occasions": [
      "Casual",
      "Office"
    ],
    "featured": false,
    "families": [
      "Aromatic"
    ],
    "accords": [
      "Fresh"
    ]
  },
  {
    "id": "470",
    "slug": "hadarah-perfumes-farab",
    "brand": "Hadarah Perfumes",
    "name": "Farab",
    "gender": "for women and men",
    "topNotes": [
      "Olibanum",
      "Bergamot"
    ],
    "heartNotes": [
      "Agarwood (Oud)"
    ],
    "baseNotes": [
      "Tobacco Leaf",
      "Patchouli"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer",
      "Winter"
    ],
    "time": "Day / Evening",
    "sprays": "4-6",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal",
      "Office"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Citrus",
      "Gourmand"
    ],
    "accords": [
      "Earthy",
      "Fresh",
      "Sweet",
      "Warm"
    ]
  },
  {
    "id": "471",
    "slug": "halloween-halloween-magic",
    "brand": "Halloween",
    "name": "Halloween Magic",
    "gender": "for women",
    "topNotes": [
      "Pear Ice Cream",
      "Raspberry",
      "Yellow Mandarin"
    ],
    "heartNotes": [
      "Freesia",
      "Pink Peony",
      "Jasmine Sambac"
    ],
    "baseNotes": [
      "Vanilla",
      "Tonka Bean",
      "Patchouli"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer",
      "Winter"
    ],
    "time": "Day / Evening",
    "sprays": "4-6",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal",
      "Office"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Citrus",
      "Floral"
    ],
    "accords": [
      "Earthy",
      "Floral",
      "Fresh",
      "Fruity"
    ]
  },
  {
    "id": "472",
    "slug": "halloween-halloween-man-x",
    "brand": "Halloween",
    "name": "Halloween Man X",
    "gender": "for men",
    "topNotes": [
      "Cardamom",
      "Lavender",
      "Lemon"
    ],
    "heartNotes": [
      "Coffee",
      "Whiskey",
      "Cinnamon",
      "Leather",
      "Mineral notes"
    ],
    "baseNotes": [
      "Tonka Bean",
      "Amber",
      "Incense"
    ],
    "seasons": [
      "Spring",
      "Ac Venues",
      "Mild Winter",
      "Monsoon Evenings"
    ],
    "time": "Day / Evening",
    "sprays": "2-3 sprays",
    "occasions": [
      "Lunches",
      "Smart Casuals",
      "Dates",
      "Office",
      "Pujas"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Aromatic",
      "Citrus"
    ],
    "accords": [
      "Balsamic",
      "Fresh",
      "Herbal",
      "Leather"
    ]
  },
  {
    "id": "473",
    "slug": "hermessence-agar-ebene-hermessence-ambre-narguile",
    "brand": "Hermessence Agar Ebene",
    "name": "Hermessence Ambre Narguile",
    "gender": "for women and men",
    "topNotes": [
      "Not separately listed"
    ],
    "heartNotes": [
      "Not separately listed"
    ],
    "baseNotes": [
      "Not separately listed"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer"
    ],
    "time": "Day",
    "sprays": "3-4",
    "occasions": [
      "Casual",
      "Office"
    ],
    "featured": false,
    "families": [
      "Aromatic"
    ],
    "accords": [
      "Fresh"
    ]
  },
  {
    "id": "474",
    "slug": "-474",
    "brand": "Archive",
    "name": "Classified Fragrance",
    "gender": "Unisex",
    "topNotes": [
      "Not separately listed"
    ],
    "heartNotes": [
      "Not separately listed"
    ],
    "baseNotes": [
      "Not separately listed"
    ],
    "seasons": [
      "Spring",
      "Ac Venues",
      "Mild Winter",
      "Monsoon Evenings"
    ],
    "time": "Day / Evening",
    "sprays": "2-3 sprays",
    "occasions": [
      "Lunches",
      "Smart Casuals",
      "Dates",
      "Office",
      "Pujas"
    ],
    "featured": false,
    "families": [
      "Aromatic"
    ],
    "accords": [
      "Fresh"
    ]
  },
  {
    "id": "475",
    "slug": "hermes-hermessence-ambre-narguile",
    "brand": "Hermes",
    "name": "Hermessence Ambre Narguile",
    "gender": "for women and men",
    "topNotes": [
      "Not separately listed"
    ],
    "heartNotes": [
      "Not separately listed"
    ],
    "baseNotes": [
      "Not separately listed"
    ],
    "seasons": [
      "Ac Venues",
      "Winter",
      "Monsoon Evenings"
    ],
    "time": "Evening",
    "sprays": "2-3 sprays",
    "occasions": [
      "Celebrations",
      "Receptions",
      "Dinner Dates",
      "Formal Events"
    ],
    "featured": false,
    "families": [
      "Aromatic"
    ],
    "accords": [
      "Fresh"
    ]
  },
  {
    "id": "476",
    "slug": "hermes-bel-ami",
    "brand": "Hermes",
    "name": "Bel Ami",
    "gender": "for men",
    "topNotes": [
      "Sage",
      "Bergamot",
      "Cardamom",
      "Lemon",
      "Mandarin Orange"
    ],
    "heartNotes": [
      "Carnation",
      "Patchouli",
      "Cedar",
      "Basil",
      "Orris Root",
      "Jasmine"
    ],
    "baseNotes": [
      "Leather",
      "Oakmoss",
      "Styrax",
      "Vetiver",
      "Amber",
      "Vanilla",
      "Coconut"
    ],
    "seasons": [
      "Spring",
      "Ac Venues",
      "Mild Winter",
      "Monsoon Evenings"
    ],
    "time": "Day / Evening",
    "sprays": "2-3 sprays",
    "occasions": [
      "Lunches",
      "Smart Casuals",
      "Dates",
      "Office",
      "Pujas"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Aromatic",
      "Citrus"
    ],
    "accords": [
      "Earthy",
      "Floral",
      "Fresh",
      "Fruity"
    ]
  },
  {
    "id": "477",
    "slug": "hermes-bel-ami-vetiver",
    "brand": "Hermes",
    "name": "Bel Ami Vetiver",
    "gender": "for men",
    "topNotes": [
      "Not separately listed"
    ],
    "heartNotes": [
      "Not separately listed"
    ],
    "baseNotes": [
      "Not separately listed"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer"
    ],
    "time": "Day",
    "sprays": "3-4",
    "occasions": [
      "Casual",
      "Office"
    ],
    "featured": false,
    "families": [
      "Aromatic"
    ],
    "accords": [
      "Fresh"
    ]
  },
  {
    "id": "478",
    "slug": "hermes-hermessence-brin-de-reglisse",
    "brand": "Hermes",
    "name": "Hermessence Brin de Reglisse",
    "gender": "for women and men",
    "topNotes": [
      "Not separately listed"
    ],
    "heartNotes": [
      "Not separately listed"
    ],
    "baseNotes": [
      "Lavender",
      "Licorice",
      "Hay"
    ],
    "seasons": [
      "Spring",
      "Ac Venues",
      "Mild Winter",
      "Monsoon Evenings"
    ],
    "time": "Day / Evening",
    "sprays": "2-3 sprays",
    "occasions": [
      "Lunches",
      "Smart Casuals",
      "Dates",
      "Office",
      "Pujas"
    ],
    "featured": false,
    "families": [
      "Aromatic"
    ],
    "accords": [
      "Herbal"
    ]
  },
  {
    "id": "479",
    "slug": "hermessence-cedre-sambac-concentre-d-orange-verte",
    "brand": "Hermessence Cedre Sambac",
    "name": "Concentre d Orange Verte",
    "gender": "for women and men",
    "topNotes": [
      "Not separately listed"
    ],
    "heartNotes": [
      "Not separately listed"
    ],
    "baseNotes": [
      "Not separately listed"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer"
    ],
    "time": "Day",
    "sprays": "3-4",
    "occasions": [
      "Casual",
      "Office"
    ],
    "featured": false,
    "families": [
      "Aromatic"
    ],
    "accords": [
      "Fresh"
    ]
  },
  {
    "id": "480",
    "slug": "-480",
    "brand": "Archive",
    "name": "Classified Fragrance",
    "gender": "Unisex",
    "topNotes": [
      "Not separately listed"
    ],
    "heartNotes": [
      "Not separately listed"
    ],
    "baseNotes": [
      "Not separately listed"
    ],
    "seasons": [
      "Spring",
      "Ac Venues",
      "Mild Winter",
      "Monsoon Evenings"
    ],
    "time": "Day / Evening",
    "sprays": "2-3 sprays",
    "occasions": [
      "Lunches",
      "Smart Casuals",
      "Dates",
      "Office",
      "Pujas"
    ],
    "featured": false,
    "families": [
      "Aromatic"
    ],
    "accords": [
      "Fresh"
    ]
  },
  {
    "id": "481",
    "slug": "hermessence-cuir-d-ange-eau-de-basilic-pourpre",
    "brand": "Hermessence Cuir D Ange",
    "name": "Eau de Basilic Pourpre",
    "gender": "for women and men",
    "topNotes": [
      "Not separately listed"
    ],
    "heartNotes": [
      "Not separately listed"
    ],
    "baseNotes": [
      "Not separately listed"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer"
    ],
    "time": "Day",
    "sprays": "3-4",
    "occasions": [
      "Casual",
      "Office"
    ],
    "featured": false,
    "families": [
      "Aromatic"
    ],
    "accords": [
      "Fresh"
    ]
  },
  {
    "id": "482",
    "slug": "-482",
    "brand": "Archive",
    "name": "Classified Fragrance",
    "gender": "Unisex",
    "topNotes": [
      "Bergamot"
    ],
    "heartNotes": [
      "Basil",
      "Geranium"
    ],
    "baseNotes": [
      "Spices",
      "Patchouli"
    ],
    "seasons": [
      "Ac Venues",
      "Monsoon Evenings",
      "Winter"
    ],
    "time": "Evening",
    "sprays": "4-6",
    "occasions": [
      "Celebrations",
      "Dinner Dates",
      "Formal Events",
      "Receptions"
    ],
    "featured": false,
    "families": [
      "Aromatic",
      "Citrus",
      "Floral"
    ],
    "accords": [
      "Earthy",
      "Floral",
      "Fresh",
      "Herbal"
    ]
  },
  {
    "id": "483",
    "slug": "hermes-eau-de-citron-noir",
    "brand": "Hermes",
    "name": "Eau de Citron Noir",
    "gender": "for women and men",
    "topNotes": [
      "Not separately listed"
    ],
    "heartNotes": [
      "Not separately listed"
    ],
    "baseNotes": [
      "Not separately listed"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer"
    ],
    "time": "Day",
    "sprays": "3-4",
    "occasions": [
      "Casual",
      "Office"
    ],
    "featured": false,
    "families": [
      "Aromatic"
    ],
    "accords": [
      "Fresh"
    ]
  },
  {
    "id": "484",
    "slug": "hermes-eau-de-pamplemousse-rose",
    "brand": "Hermes",
    "name": "Eau de Pamplemousse Rose",
    "gender": "for women and men",
    "topNotes": [
      "Not separately listed"
    ],
    "heartNotes": [
      "Not separately listed"
    ],
    "baseNotes": [
      "Not separately listed"
    ],
    "seasons": [
      "Spring",
      "Ac Venues",
      "Mild Winter",
      "Monsoon Evenings"
    ],
    "time": "Day / Evening",
    "sprays": "2-3 sprays",
    "occasions": [
      "Lunches",
      "Smart Casuals",
      "Dates",
      "Office",
      "Pujas"
    ],
    "featured": false,
    "families": [
      "Aromatic"
    ],
    "accords": [
      "Fresh"
    ]
  },
  {
    "id": "485",
    "slug": "eau-des-merveilles-bleue-eau-des-merveilles",
    "brand": "Eau Des Merveilles Bleue",
    "name": "Eau des Merveilles",
    "gender": "for women",
    "topNotes": [
      "Not separately listed"
    ],
    "heartNotes": [
      "Not separately listed"
    ],
    "baseNotes": [
      "Not separately listed"
    ],
    "seasons": [
      "Spring",
      "Summer",
      "Monsoon"
    ],
    "time": "Day",
    "sprays": "3-4 sprays; 2-3 indoors for women",
    "occasions": [
      "Travel",
      "Casual Daytime Events",
      "College",
      "Office",
      "Brunch"
    ],
    "featured": false,
    "families": [
      "Aromatic"
    ],
    "accords": [
      "Fresh"
    ]
  },
  {
    "id": "486",
    "slug": "when-to-wear-sprays-3-4-sprays-2-3-indoors-486",
    "brand": "When To Wear",
    "name": "Sprays: 3-4 sprays; 2-3 indoors",
    "gender": "for women",
    "topNotes": [
      "Orange",
      "Elemi resin",
      "Lemon"
    ],
    "heartNotes": [
      "Amber",
      "Pepper",
      "Pink Pepper",
      "Violet"
    ],
    "baseNotes": [
      "Fir",
      "Cedar",
      "Madagascar Vetiver",
      "Oakmoss",
      "Benzoin"
    ],
    "seasons": [
      "Spring",
      "Ac Venues",
      "Mild Winter",
      "Monsoon Evenings"
    ],
    "time": "Day / Evening",
    "sprays": "2-3 sprays",
    "occasions": [
      "Lunches",
      "Smart Casuals",
      "Dates",
      "Office",
      "Pujas"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Citrus",
      "Floral"
    ],
    "accords": [
      "Balsamic",
      "Earthy",
      "Floral",
      "Fresh"
    ]
  },
  {
    "id": "487",
    "slug": "hermes-elixir-des-merveilles",
    "brand": "Hermes",
    "name": "Elixir des Merveilles",
    "gender": "for women",
    "topNotes": [
      "Not separately listed"
    ],
    "heartNotes": [
      "Not separately listed"
    ],
    "baseNotes": [
      "Not separately listed"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer"
    ],
    "time": "Day",
    "sprays": "3-4",
    "occasions": [
      "Casual",
      "Office"
    ],
    "featured": false,
    "families": [
      "Aromatic"
    ],
    "accords": [
      "Fresh"
    ]
  },
  {
    "id": "488",
    "slug": "hermes-hermessence-epice-marine",
    "brand": "Hermes",
    "name": "Hermessence Epice Marine",
    "gender": "for women and men",
    "topNotes": [
      "Not separately listed"
    ],
    "heartNotes": [
      "Not separately listed"
    ],
    "baseNotes": [
      "Not separately listed"
    ],
    "seasons": [
      "Spring",
      "Ac Venues",
      "Mild Winter",
      "Monsoon Evenings"
    ],
    "time": "Day / Evening",
    "sprays": "2-3 sprays",
    "occasions": [
      "Lunches",
      "Smart Casuals",
      "Dates",
      "Office",
      "Pujas"
    ],
    "featured": false,
    "families": [
      "Aromatic"
    ],
    "accords": [
      "Fresh"
    ]
  },
  {
    "id": "489",
    "slug": "hermes-galop-d-hermes",
    "brand": "Hermes",
    "name": "Galop d Hermes",
    "gender": "for women",
    "topNotes": [
      "Quince",
      "Saffron"
    ],
    "heartNotes": [
      "Turkish Rose",
      "Osmanthus"
    ],
    "baseNotes": [
      "Leather",
      "White Musk"
    ],
    "seasons": [
      "Spring",
      "Winter"
    ],
    "time": "Evening",
    "sprays": "2-3",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal"
    ],
    "featured": false,
    "families": [
      "Floral",
      "Leather",
      "Spicy"
    ],
    "accords": [
      "Floral",
      "Leather",
      "Musky",
      "Spicy"
    ]
  },
  {
    "id": "490",
    "slug": "hermes-h24",
    "brand": "Hermes",
    "name": "H24",
    "gender": "for men",
    "topNotes": [
      "Not separately listed"
    ],
    "heartNotes": [
      "Not separately listed"
    ],
    "baseNotes": [
      "Not separately listed"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer"
    ],
    "time": "Day",
    "sprays": "3-4",
    "occasions": [
      "Casual",
      "Office"
    ],
    "featured": false,
    "families": [
      "Aromatic"
    ],
    "accords": [
      "Fresh"
    ]
  },
  {
    "id": "491",
    "slug": "hermes-h24-herbes-vives",
    "brand": "Hermes",
    "name": "H24 Herbes Vives",
    "gender": "for men",
    "topNotes": [
      "Herbal Notes"
    ],
    "heartNotes": [
      "Pear"
    ],
    "baseNotes": [
      "Physcool\u00ae"
    ],
    "seasons": [
      "Spring"
    ],
    "time": "Day / Evening",
    "sprays": "3-4",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal",
      "Office"
    ],
    "featured": false,
    "families": [
      "Fruity"
    ],
    "accords": [
      "Fruity"
    ]
  },
  {
    "id": "492",
    "slug": "hermes-hiris",
    "brand": "Hermes",
    "name": "Hiris",
    "gender": "for women",
    "topNotes": [
      "Iris",
      "Coriander",
      "Carnation",
      "Amber"
    ],
    "heartNotes": [
      "Iris",
      "Neroli",
      "Rose"
    ],
    "baseNotes": [
      "Cedar",
      "Almond Tree",
      "Honey",
      "Vanilla"
    ],
    "seasons": [
      "Spring",
      "Ac Venues",
      "Mild Winter",
      "Monsoon Evenings"
    ],
    "time": "Day / Evening",
    "sprays": "2-3 sprays",
    "occasions": [
      "Lunches",
      "Smart Casuals",
      "Dates",
      "Office",
      "Pujas"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Citrus",
      "Floral"
    ],
    "accords": [
      "Floral",
      "Fresh",
      "Powdery",
      "Spicy"
    ]
  },
  {
    "id": "493",
    "slug": "hermes-hermessence-iris-ukiyoe",
    "brand": "Hermes",
    "name": "Hermessence Iris Ukiyoe",
    "gender": "for women and men",
    "topNotes": [
      "Not separately listed"
    ],
    "heartNotes": [
      "Not separately listed"
    ],
    "baseNotes": [
      "Not separately listed"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer"
    ],
    "time": "Day",
    "sprays": "3-4",
    "occasions": [
      "Casual",
      "Office"
    ],
    "featured": false,
    "families": [
      "Aromatic"
    ],
    "accords": [
      "Fresh"
    ]
  },
  {
    "id": "494",
    "slug": "archive-kelly-caleche",
    "brand": "Archive",
    "name": "Kelly Caleche",
    "gender": "for women",
    "topNotes": [
      "Grapefruit",
      "Narcissus",
      "Lily-of-the-Valley"
    ],
    "heartNotes": [
      "Rose",
      "Mimosa",
      "Tuberose"
    ],
    "baseNotes": [
      "Leather",
      "Iris"
    ],
    "seasons": [
      "Spring",
      "Ac Venues",
      "Mild Winter",
      "Monsoon Evenings"
    ],
    "time": "Day / Evening",
    "sprays": "2-3 sprays",
    "occasions": [
      "Lunches",
      "Smart Casuals",
      "Dates",
      "Office",
      "Pujas"
    ],
    "featured": false,
    "families": [
      "Citrus",
      "Floral",
      "Leather"
    ],
    "accords": [
      "Floral",
      "Fresh",
      "Leather",
      "Powdery"
    ]
  },
  {
    "id": "495",
    "slug": "hermes-l-ombre-des-merveilles",
    "brand": "Hermes",
    "name": "L Ombre Des Merveilles",
    "gender": "for women and men",
    "topNotes": [
      "Not separately listed"
    ],
    "heartNotes": [
      "Not separately listed"
    ],
    "baseNotes": [
      "Not separately listed  NOTES"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer"
    ],
    "time": "Day",
    "sprays": "3-4",
    "occasions": [
      "Casual",
      "Office"
    ],
    "featured": false,
    "families": [
      "Aromatic"
    ],
    "accords": [
      "Fresh"
    ]
  },
  {
    "id": "496",
    "slug": "top-not-separately-listed-heart-not-separately-listed-base-not-separately-listed-496",
    "brand": "Archive",
    "name": "Base: Not separately listed",
    "gender": "Unisex",
    "topNotes": [
      "Black Tea"
    ],
    "heartNotes": [
      "Incense"
    ],
    "baseNotes": [
      "Tonka Bean"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer"
    ],
    "time": "Day",
    "sprays": "2-3",
    "occasions": [
      "Brunch",
      "Casual Daytime Events",
      "College",
      "Office",
      "Travel"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental"
    ],
    "accords": [
      "Balsamic",
      "Sweet",
      "Warm"
    ]
  },
  {
    "id": "497",
    "slug": "hermes-hermessence-muguet-porcelain",
    "brand": "Hermes",
    "name": "Hermessence Muguet Porcelain",
    "gender": "for women and men",
    "topNotes": [
      "Green Notes",
      "Pear"
    ],
    "heartNotes": [
      "Lily-of-the-Valley",
      "Hedione",
      "Neroli"
    ],
    "baseNotes": [
      "Animal notes",
      "White Musk"
    ],
    "seasons": [
      "Spring",
      "Summer"
    ],
    "time": "Day",
    "sprays": "4-6",
    "occasions": [
      "Casual",
      "Office"
    ],
    "featured": false,
    "families": [
      "Citrus",
      "Floral",
      "Fruity"
    ],
    "accords": [
      "Floral",
      "Fresh",
      "Fruity",
      "Green"
    ]
  },
  {
    "id": "498",
    "slug": "archive-hermessence-musc-pallida",
    "brand": "Archive",
    "name": "Hermessence Musc Pallida",
    "gender": "for women and men",
    "topNotes": [
      "Not separately listed"
    ],
    "heartNotes": [
      "Not separately listed"
    ],
    "baseNotes": [
      "Not separately listed"
    ],
    "seasons": [
      "Spring",
      "Summer",
      "Monsoon"
    ],
    "time": "Day",
    "sprays": "3-4 sprays; 2-3 indoors",
    "occasions": [
      "Travel",
      "Casual Daytime Events",
      "College",
      "Office",
      "Brunch"
    ],
    "featured": false,
    "families": [
      "Aromatic"
    ],
    "accords": [
      "Fresh"
    ]
  },
  {
    "id": "499",
    "slug": "hermes-hermessence-myrrhe-eglantine",
    "brand": "Hermes",
    "name": "Hermessence Myrrhe Eglantine",
    "gender": "for women and men",
    "topNotes": [
      "Not separately listed"
    ],
    "heartNotes": [
      "Not separately listed"
    ],
    "baseNotes": [
      "Not separately listed  Eau de Neroli Dore  for women",
      "men  NOTES"
    ],
    "seasons": [
      "Spring",
      "Summer"
    ],
    "time": "Day",
    "sprays": "4-6",
    "occasions": [
      "Casual",
      "Office"
    ],
    "featured": true,
    "families": [
      "Citrus"
    ],
    "accords": [
      "Fresh"
    ]
  },
  {
    "id": "500",
    "slug": "base-not-separately-listed-eau-de-neroli-dore",
    "brand": "Base: Not Separately Listed",
    "name": "Eau de Neroli Dore",
    "gender": "for women and men",
    "topNotes": [
      "Bitter Orange"
    ],
    "heartNotes": [
      "Neroli"
    ],
    "baseNotes": [
      "Saffron"
    ],
    "seasons": [
      "Spring",
      "Ac Venues",
      "Mild Winter",
      "Monsoon Evenings"
    ],
    "time": "Day / Evening",
    "sprays": "2-3 sprays",
    "occasions": [
      "Lunches",
      "Smart Casuals",
      "Dates",
      "Office",
      "Pujas"
    ],
    "featured": false,
    "families": [
      "Citrus",
      "Spicy"
    ],
    "accords": [
      "Fresh",
      "Spicy"
    ]
  },
  {
    "id": "501",
    "slug": "page-51-118-hermessence-osmanthe-yunnan",
    "brand": "Page 51 / 118",
    "name": "Hermessence Osmanthe Yunnan",
    "gender": "for women and men",
    "topNotes": [
      "Tea",
      "Orange"
    ],
    "heartNotes": [
      "Osmanthus",
      "Freesia"
    ],
    "baseNotes": [
      "Apricot",
      "Leather"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer"
    ],
    "time": "Day",
    "sprays": "4-6",
    "occasions": [
      "Brunch",
      "Casual Daytime Events",
      "College",
      "Office",
      "Travel"
    ],
    "featured": false,
    "families": [
      "Citrus",
      "Floral",
      "Leather"
    ],
    "accords": [
      "Floral",
      "Fresh",
      "Leather"
    ]
  },
  {
    "id": "502",
    "slug": "when-to-wear-hermessence-paprika-brasil",
    "brand": "When To Wear",
    "name": "Hermessence Paprika Brasil",
    "gender": "for women and men",
    "topNotes": [
      "Pimento",
      "Paprika",
      "Cloves"
    ],
    "heartNotes": [
      "Iris",
      "Green Leaves"
    ],
    "baseNotes": [
      "Precious Woods",
      "Brazilian Redwood",
      "Mignonette"
    ],
    "seasons": [
      "Spring",
      "Summer",
      "Monsoon"
    ],
    "time": "Day",
    "sprays": "3-4 sprays; 2-3 indoors Sprays: 3-4 sprays; 2-3 indoors",
    "occasions": [
      "Travel",
      "Casual Daytime Events",
      "College",
      "Office",
      "Brunch"
    ],
    "featured": false,
    "families": [
      "Floral",
      "Spicy",
      "Woody"
    ],
    "accords": [
      "Floral",
      "Green",
      "Powdery",
      "Spicy"
    ]
  },
  {
    "id": "503",
    "slug": "hermes-hermessence-poivre-samarcande",
    "brand": "Hermes",
    "name": "Hermessence Poivre Samarcande",
    "gender": "for women and men",
    "topNotes": [
      "Not separately listed"
    ],
    "heartNotes": [
      "Not separately listed"
    ],
    "baseNotes": [
      "Not separately listed"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer"
    ],
    "time": "Day",
    "sprays": "3-4",
    "occasions": [
      "Casual",
      "Office"
    ],
    "featured": false,
    "families": [
      "Aromatic"
    ],
    "accords": [
      "Fresh"
    ]
  },
  {
    "id": "504",
    "slug": "archive-eau-de-rhubarbe-ecarlate",
    "brand": "Archive",
    "name": "Eau de Rhubarbe Ecarlate",
    "gender": "for women and men",
    "topNotes": [
      "Rhubarb"
    ],
    "heartNotes": [
      "Red Berries",
      "Lantana"
    ],
    "baseNotes": [
      "White Musk"
    ],
    "seasons": [
      "Spring",
      "Ac Venues",
      "Mild Winter",
      "Monsoon Evenings"
    ],
    "time": "Day / Evening",
    "sprays": "2-3 sprays",
    "occasions": [
      "Lunches",
      "Smart Casuals",
      "Dates",
      "Office",
      "Pujas"
    ],
    "featured": false,
    "families": [
      "Aromatic"
    ],
    "accords": [
      "Musky"
    ]
  },
  {
    "id": "505",
    "slug": "hermessence-rose-ikebana-hermessence-santal-massoia",
    "brand": "Hermessence Rose Ikebana",
    "name": "Hermessence Santal Massoia",
    "gender": "for women and men",
    "topNotes": [
      "Not separately listed"
    ],
    "heartNotes": [
      "Not separately listed"
    ],
    "baseNotes": [
      "Not separately listed"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer"
    ],
    "time": "Day",
    "sprays": "3-4",
    "occasions": [
      "Casual",
      "Office"
    ],
    "featured": false,
    "families": [
      "Aromatic"
    ],
    "accords": [
      "Fresh"
    ]
  },
  {
    "id": "506",
    "slug": "-506",
    "brand": "Archive",
    "name": "Classified Fragrance",
    "gender": "Unisex",
    "topNotes": [
      "Not separately listed"
    ],
    "heartNotes": [
      "Not separately listed"
    ],
    "baseNotes": [
      "Not separately listed"
    ],
    "seasons": [
      "Spring",
      "Summer",
      "Monsoon"
    ],
    "time": "Day",
    "sprays": "3-4 sprays; 2-3 indoors",
    "occasions": [
      "Travel",
      "Casual Daytime Events",
      "College",
      "Office",
      "Brunch"
    ],
    "featured": false,
    "families": [
      "Aromatic"
    ],
    "accords": [
      "Fresh"
    ]
  },
  {
    "id": "507",
    "slug": "hermes-terre-d-hermes-eau-tres-fraiche",
    "brand": "Hermes",
    "name": "Terre d Hermes Eau Tres Fraiche",
    "gender": "for men",
    "topNotes": [
      "Citron"
    ],
    "heartNotes": [
      "Juniper Berries",
      "Timur"
    ],
    "baseNotes": [
      "Woody Notes",
      "Mineral notes"
    ],
    "seasons": [
      "Winter"
    ],
    "time": "Evening",
    "sprays": "3-4",
    "occasions": [
      "Date Night",
      "Formal"
    ],
    "featured": false,
    "families": [
      "Woody"
    ],
    "accords": [
      "Woody"
    ]
  },
  {
    "id": "508",
    "slug": "archive-fragrance-508",
    "brand": "Archive",
    "name": "Fragrance 508",
    "gender": "for men",
    "topNotes": [
      "Orange",
      "Citruses",
      "Water Notes"
    ],
    "heartNotes": [
      "Geranium"
    ],
    "baseNotes": [
      "Woody Notes",
      "Cedar",
      "Patchouli"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer"
    ],
    "time": "Day",
    "sprays": "4-6",
    "occasions": [
      "Brunch",
      "Casual Daytime Events",
      "College",
      "Office",
      "Travel"
    ],
    "featured": false,
    "families": [
      "Aquatic",
      "Citrus",
      "Floral"
    ],
    "accords": [
      "Earthy",
      "Floral",
      "Fresh",
      "Marine"
    ]
  },
  {
    "id": "509",
    "slug": "hermes-terre-d-hermes",
    "brand": "Hermes",
    "name": "Terre d Hermes",
    "gender": "for men",
    "topNotes": [
      "Orange",
      "Grapefruit"
    ],
    "heartNotes": [
      "Pepper",
      "Pelargonium",
      "Flint"
    ],
    "baseNotes": [
      "Vetiver",
      "Cedar",
      "Patchouli",
      "Benzoin"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer",
      "Winter"
    ],
    "time": "Day / Evening",
    "sprays": "4-6",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal",
      "Office"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Citrus",
      "Spicy"
    ],
    "accords": [
      "Earthy",
      "Fresh",
      "Spicy",
      "Warm"
    ]
  },
  {
    "id": "510",
    "slug": "hermes-twilly-d-hermes",
    "brand": "Hermes",
    "name": "Twilly d Hermes",
    "gender": "for women",
    "topNotes": [
      "Ginger",
      "Bitter Orange",
      "Bergamot"
    ],
    "heartNotes": [
      "Tuberose",
      "Orange Blossom",
      "Jasmine"
    ],
    "baseNotes": [
      "Sandalwood",
      "Vanilla"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer"
    ],
    "time": "Day",
    "sprays": "4-6",
    "occasions": [
      "Brunch",
      "Casual Daytime Events",
      "College",
      "Office",
      "Travel"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Citrus",
      "Floral"
    ],
    "accords": [
      "Floral",
      "Fresh",
      "Spicy",
      "Sweet"
    ]
  },
  {
    "id": "511",
    "slug": "hermes-un-jardin-en-mediterranee",
    "brand": "Hermes",
    "name": "Un Jardin en Mediterranee",
    "gender": "for women and men",
    "topNotes": [
      "Not separately listed"
    ],
    "heartNotes": [
      "Not separately listed"
    ],
    "baseNotes": [
      "Not separately listed  NOTES"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer"
    ],
    "time": "Day",
    "sprays": "3-4",
    "occasions": [
      "Casual",
      "Office"
    ],
    "featured": false,
    "families": [
      "Aromatic"
    ],
    "accords": [
      "Fresh"
    ]
  },
  {
    "id": "512",
    "slug": "top-not-separately-listed-heart-not-separately-listed-base-not-separately-listed-512",
    "brand": "Archive",
    "name": "Base: Not separately listed",
    "gender": "Unisex",
    "topNotes": [
      "Bergamot",
      "Lemon",
      "Mandarin Orange"
    ],
    "heartNotes": [
      "Orange Blossom",
      "White Nerium Oleander"
    ],
    "baseNotes": [
      "Fig Leaf",
      "Cypress",
      "Red Cedar",
      "Juniper",
      "Pistachio",
      "Musk"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer"
    ],
    "time": "Day",
    "sprays": "4-6",
    "occasions": [
      "Brunch",
      "Casual Daytime Events",
      "College",
      "Office",
      "Travel"
    ],
    "featured": false,
    "families": [
      "Citrus",
      "Floral",
      "Fruity"
    ],
    "accords": [
      "Floral",
      "Fresh",
      "Fruity",
      "Musky"
    ]
  },
  {
    "id": "513",
    "slug": "hermes-un-jardin-sur-le-nil",
    "brand": "Hermes",
    "name": "Un Jardin Sur Le Nil",
    "gender": "for women and men",
    "topNotes": [
      "Not separately listed"
    ],
    "heartNotes": [
      "Not separately listed"
    ],
    "baseNotes": [
      "Not separately listed"
    ],
    "seasons": [
      "Spring",
      "Summer",
      "Monsoon"
    ],
    "time": "Day",
    "sprays": "3-4 sprays; 2-3 indoors",
    "occasions": [
      "Travel",
      "Casual Daytime Events",
      "College",
      "Office",
      "Brunch"
    ],
    "featured": false,
    "families": [
      "Aromatic"
    ],
    "accords": [
      "Fresh"
    ]
  },
  {
    "id": "514",
    "slug": "when-to-wear-sprays-3-4-sprays-2-3-indoors-514",
    "brand": "When To Wear",
    "name": "Sprays: 3-4 sprays; 2-3 indoors",
    "gender": "Unisex",
    "topNotes": [
      "Grapefruit",
      "Green Mango",
      "Tomato",
      "Carrot"
    ],
    "heartNotes": [
      "Lotus",
      "Bulrush",
      "Orange",
      "Hiacynth",
      "Peony"
    ],
    "baseNotes": [
      "Musk",
      "Iris",
      "Incense",
      "Labdanum",
      "Cinnamon"
    ],
    "seasons": [
      "Spring",
      "Ac Venues",
      "Mild Winter",
      "Monsoon Evenings"
    ],
    "time": "Day / Evening",
    "sprays": "2-3 sprays",
    "occasions": [
      "Lunches",
      "Smart Casuals",
      "Dates",
      "Office",
      "Pujas"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Citrus",
      "Floral"
    ],
    "accords": [
      "Balsamic",
      "Floral",
      "Fresh",
      "Fruity"
    ]
  },
  {
    "id": "515",
    "slug": "hermes-hermessence-vanille-galante",
    "brand": "Hermes",
    "name": "Hermessence Vanille Galante",
    "gender": "for women and men",
    "topNotes": [
      "Not separately listed"
    ],
    "heartNotes": [
      "Not separately listed"
    ],
    "baseNotes": [
      "Not separately listed"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer"
    ],
    "time": "Day",
    "sprays": "3-4",
    "occasions": [
      "Casual",
      "Office"
    ],
    "featured": false,
    "families": [
      "Aromatic"
    ],
    "accords": [
      "Fresh"
    ]
  },
  {
    "id": "516",
    "slug": "-516",
    "brand": "Archive",
    "name": "Classified Fragrance",
    "gender": "Unisex",
    "topNotes": [
      "Not separately listed"
    ],
    "heartNotes": [
      "Not separately listed"
    ],
    "baseNotes": [
      "Not separately listed"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer"
    ],
    "time": "Day",
    "sprays": "3-4",
    "occasions": [
      "Brunch",
      "Casual Daytime Events",
      "College",
      "Office",
      "Travel"
    ],
    "featured": false,
    "families": [
      "Aromatic"
    ],
    "accords": [
      "Fresh"
    ]
  },
  {
    "id": "517",
    "slug": "hermes-hermessence-vetiver-tonka",
    "brand": "Hermes",
    "name": "Hermessence Vetiver Tonka",
    "gender": "for women and men",
    "topNotes": [
      "Not separately listed"
    ],
    "heartNotes": [
      "Not separately listed"
    ],
    "baseNotes": [
      "Not separately listed  Voyage d Hermes  for women",
      "men  NOTES"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer"
    ],
    "time": "Day",
    "sprays": "3-4",
    "occasions": [
      "Casual",
      "Office"
    ],
    "featured": false,
    "families": [
      "Aromatic"
    ],
    "accords": [
      "Fresh"
    ]
  },
  {
    "id": "518",
    "slug": "base-not-separately-listed-voyage-d-hermes",
    "brand": "Base: Not Separately Listed",
    "name": "Voyage d Hermes",
    "gender": "for women and men",
    "topNotes": [
      "Cardamom",
      "Amalfi Lemon",
      "Spices",
      "Juniper Berries"
    ],
    "heartNotes": [
      "Tea",
      "Green Notes",
      "Floral Notes"
    ],
    "baseNotes": [
      "Woodsy Notes",
      "Musk",
      "Cedar"
    ],
    "seasons": [
      "Ac Venues",
      "Cool Nights",
      "Winter"
    ],
    "time": "Evening",
    "sprays": "4-6",
    "occasions": [
      "Festive Evenings",
      "Formal Dinners",
      "Receptions",
      "Winter Weddings"
    ],
    "featured": false,
    "families": [
      "Citrus",
      "Floral",
      "Spicy"
    ],
    "accords": [
      "Floral",
      "Fresh",
      "Green",
      "Musky"
    ]
  },
  {
    "id": "519",
    "slug": "hugo-boss-boss-bottled-elixir",
    "brand": "Hugo Boss",
    "name": "Boss Bottled Elixir",
    "gender": "for men",
    "topNotes": [
      "Frankincense",
      "Cardamom"
    ],
    "heartNotes": [
      "Patchouli",
      "Vetiver"
    ],
    "baseNotes": [
      "Labdanum",
      "Cedar"
    ],
    "seasons": [
      "Spring",
      "Ac Venues",
      "Mild Winter",
      "Monsoon Evenings"
    ],
    "time": "Day / Evening",
    "sprays": "2-3 sprays",
    "occasions": [
      "Lunches",
      "Smart Casuals",
      "Dates",
      "Office",
      "Pujas"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Spicy",
      "Woody"
    ],
    "accords": [
      "Balsamic",
      "Earthy",
      "Spicy",
      "Warm"
    ]
  },
  {
    "id": "520",
    "slug": "hugo-boss-boss-bottled",
    "brand": "Hugo Boss",
    "name": "Boss Bottled",
    "gender": "for men",
    "topNotes": [
      "Apple",
      "Plum",
      "Lemon",
      "Bergamot",
      "Oakmoss",
      "Geranium"
    ],
    "heartNotes": [
      "Cinnamon",
      "Mahogany",
      "Carnation"
    ],
    "baseNotes": [
      "Vanilla",
      "Sandalwood",
      "Cedar",
      "Vetiver",
      "Olive Tree"
    ],
    "seasons": [
      "Spring",
      "Summer",
      "Monsoon"
    ],
    "time": "Day",
    "sprays": "3-4 sprays; 2-3 indoors",
    "occasions": [
      "Travel",
      "Casual Daytime Events",
      "College",
      "Office",
      "Brunch"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Citrus",
      "Floral"
    ],
    "accords": [
      "Earthy",
      "Floral",
      "Fresh",
      "Fruity"
    ]
  },
  {
    "id": "521",
    "slug": "hugo-boss-boss-bottled-absolute",
    "brand": "Hugo Boss",
    "name": "Boss Bottled Absolute",
    "gender": "for men",
    "topNotes": [
      "Apple",
      "Plum",
      "Bergamot"
    ],
    "heartNotes": [
      "Cinnamon",
      "Cashmere Wood"
    ],
    "baseNotes": [
      "Olive Tree",
      "Sandalwood",
      "Musk",
      "Cedar",
      "Dry Wood"
    ],
    "seasons": [
      "Spring",
      "Summer",
      "Winter"
    ],
    "time": "Day / Evening",
    "sprays": "4-6",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal",
      "Office"
    ],
    "featured": false,
    "families": [
      "Citrus",
      "Fruity",
      "Spicy"
    ],
    "accords": [
      "Fresh",
      "Fruity",
      "Musky",
      "Spicy"
    ]
  },
  {
    "id": "522",
    "slug": "hugo-boss-boss-bottled-tonic",
    "brand": "Hugo Boss",
    "name": "Boss Bottled Tonic",
    "gender": "for men",
    "topNotes": [
      "Apple",
      "Bitter Orange",
      "Grapefruit",
      "Lemon"
    ],
    "heartNotes": [
      "Ginger",
      "Cinnamon",
      "Geranium",
      "Cloves"
    ],
    "baseNotes": [
      "Woodsy Notes",
      "Vetiver"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer"
    ],
    "time": "Day",
    "sprays": "4-6",
    "occasions": [
      "Brunch",
      "Casual Daytime Events",
      "College",
      "Office",
      "Travel"
    ],
    "featured": false,
    "families": [
      "Citrus",
      "Floral",
      "Fruity"
    ],
    "accords": [
      "Earthy",
      "Floral",
      "Fresh",
      "Fruity"
    ]
  },
  {
    "id": "523",
    "slug": "hugo-boss-boss-the-scent-for-her",
    "brand": "Hugo Boss",
    "name": "Boss The Scent For Her",
    "gender": "for women",
    "topNotes": [
      "Peach",
      "Freesia"
    ],
    "heartNotes": [
      "Osmanthus"
    ],
    "baseNotes": [
      "Cacao"
    ],
    "seasons": [
      "Spring"
    ],
    "time": "Day / Evening",
    "sprays": "3-4",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal",
      "Office"
    ],
    "featured": false,
    "families": [
      "Floral",
      "Fruity",
      "Gourmand"
    ],
    "accords": [
      "Floral",
      "Fruity",
      "Sweet"
    ]
  },
  {
    "id": "524",
    "slug": "hugo-boss-hugo-iced",
    "brand": "Hugo Boss",
    "name": "Hugo Iced",
    "gender": "for men",
    "topNotes": [
      "Mint",
      "Tea"
    ],
    "heartNotes": [
      "Bitter Orange",
      "Juniper"
    ],
    "baseNotes": [
      "Vetiver"
    ],
    "seasons": [
      "Spring",
      "Ac Venues",
      "Mild Winter",
      "Monsoon Evenings"
    ],
    "time": "Day / Evening",
    "sprays": "2-3 sprays",
    "occasions": [
      "Lunches",
      "Smart Casuals",
      "Dates",
      "Office",
      "Pujas"
    ],
    "featured": false,
    "families": [
      "Aromatic",
      "Citrus",
      "Woody"
    ],
    "accords": [
      "Earthy",
      "Fresh",
      "Herbal",
      "Woody"
    ]
  },
  {
    "id": "525",
    "slug": "memoirs-of-a-trespasser-absolute-aphrodisiac",
    "brand": "Memoirs Of A Trespasser",
    "name": "Absolute Aphrodisiac",
    "gender": "for women and men",
    "topNotes": [
      "Not separately listed"
    ],
    "heartNotes": [
      "Not separately listed"
    ],
    "baseNotes": [
      "Not separately listed"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer"
    ],
    "time": "Day",
    "sprays": "3-4",
    "occasions": [
      "Casual",
      "Office"
    ],
    "featured": false,
    "families": [
      "Aromatic"
    ],
    "accords": [
      "Fresh"
    ]
  },
  {
    "id": "526",
    "slug": "-526",
    "brand": "Archive",
    "name": "Classified Fragrance",
    "gender": "Unisex",
    "topNotes": [
      "Not separately listed"
    ],
    "heartNotes": [
      "Not separately listed"
    ],
    "baseNotes": [
      "Not separately listed"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer"
    ],
    "time": "Day",
    "sprays": "3-4",
    "occasions": [
      "Casual",
      "Office"
    ],
    "featured": false,
    "families": [
      "Aromatic"
    ],
    "accords": [
      "Fresh"
    ]
  },
  {
    "id": "527",
    "slug": "initio-parfums-prives-atomic-rose",
    "brand": "Initio Parfums Prives",
    "name": "Atomic Rose",
    "gender": "for women and men",
    "topNotes": [
      "Pink Pepper",
      "Bergamot"
    ],
    "heartNotes": [
      "Bulgarian Rose",
      "Turkish Rose",
      "Egyptian Jasmine"
    ],
    "baseNotes": [
      "Madagascar Vanilla",
      "Amber"
    ],
    "seasons": [
      "Spring",
      "Summer",
      "Winter"
    ],
    "time": "Day / Evening",
    "sprays": "4-6",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal",
      "Office"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Citrus",
      "Floral"
    ],
    "accords": [
      "Floral",
      "Fresh",
      "Spicy",
      "Sweet"
    ]
  },
  {
    "id": "528",
    "slug": "initio-parfums-prives-blessed-baraka",
    "brand": "Initio Parfums Prives",
    "name": "Blessed Baraka",
    "gender": "for women and men",
    "topNotes": [
      "Not separately listed"
    ],
    "heartNotes": [
      "Not separately listed"
    ],
    "baseNotes": [
      "Not separately listed"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer"
    ],
    "time": "Day",
    "sprays": "3-4",
    "occasions": [
      "Casual",
      "Office"
    ],
    "featured": false,
    "families": [
      "Aromatic"
    ],
    "accords": [
      "Fresh"
    ]
  },
  {
    "id": "529",
    "slug": "initio-parfums-prives-high-frequency",
    "brand": "Initio Parfums Prives",
    "name": "High Frequency",
    "gender": "for women and men",
    "topNotes": [
      "Not separately listed"
    ],
    "heartNotes": [
      "Not separately listed"
    ],
    "baseNotes": [
      "Not separately listed"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer"
    ],
    "time": "Day",
    "sprays": "3-4",
    "occasions": [
      "Casual",
      "Office"
    ],
    "featured": false,
    "families": [
      "Aromatic"
    ],
    "accords": [
      "Fresh"
    ]
  },
  {
    "id": "530",
    "slug": "initio-parfums-prives-musk-therapy",
    "brand": "Initio Parfums Prives",
    "name": "Musk Therapy",
    "gender": "for women and men",
    "topNotes": [
      "Not separately listed"
    ],
    "heartNotes": [
      "Not separately listed"
    ],
    "baseNotes": [
      "Not separately listed"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer"
    ],
    "time": "Day",
    "sprays": "3-4",
    "occasions": [
      "Brunch",
      "Casual Daytime Events",
      "College",
      "Office",
      "Travel"
    ],
    "featured": false,
    "families": [
      "Aromatic"
    ],
    "accords": [
      "Fresh"
    ]
  },
  {
    "id": "531",
    "slug": "initio-parfums-prives-oud-for-greatness",
    "brand": "Initio Parfums Prives",
    "name": "Oud for Greatness",
    "gender": "for women and men",
    "topNotes": [
      "Saffron",
      "Nutmeg",
      "Lavender"
    ],
    "heartNotes": [
      "Agarwood (Oud)"
    ],
    "baseNotes": [
      "Patchouli",
      "Musk"
    ],
    "seasons": [
      "Monsoon",
      "Winter"
    ],
    "time": "Evening",
    "sprays": "2-3",
    "occasions": [
      "Date Night",
      "Formal"
    ],
    "featured": false,
    "families": [
      "Aromatic",
      "Spicy",
      "Woody"
    ],
    "accords": [
      "Earthy",
      "Herbal",
      "Musky",
      "Spicy"
    ]
  },
  {
    "id": "532",
    "slug": "initio-parfums-prives-oud-for-happiness",
    "brand": "Initio Parfums Prives",
    "name": "Oud for Happiness",
    "gender": "for women and men",
    "topNotes": [
      "Bergamot",
      "Ginger"
    ],
    "heartNotes": [
      "Licorice",
      "Agarwood (Oud)",
      "Cedar"
    ],
    "baseNotes": [
      "Vanilla",
      "Musk",
      "Herbal Notes"
    ],
    "seasons": [
      "Spring",
      "Summer",
      "Winter"
    ],
    "time": "Day / Evening",
    "sprays": "4-6",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal",
      "Office"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Citrus",
      "Spicy"
    ],
    "accords": [
      "Fresh",
      "Musky",
      "Spicy",
      "Sweet"
    ]
  },
  {
    "id": "533",
    "slug": "initio-parfums-prives-paragon",
    "brand": "Initio Parfums Prives",
    "name": "Paragon",
    "gender": "for women and men",
    "topNotes": [
      "Lavender",
      "Sage",
      "Bergamot"
    ],
    "heartNotes": [
      "Plum",
      "Palo Santo",
      "Black Pepper"
    ],
    "baseNotes": [
      "Sandalwood",
      "Agarwood (Oud)"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer",
      "Winter"
    ],
    "time": "Day / Evening",
    "sprays": "4-6",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal",
      "Office"
    ],
    "featured": false,
    "families": [
      "Aromatic",
      "Citrus",
      "Fruity"
    ],
    "accords": [
      "Fresh",
      "Fruity",
      "Herbal",
      "Spicy"
    ]
  },
  {
    "id": "534",
    "slug": "initio-parfums-prives-psychedelic-love",
    "brand": "Initio Parfums Prives",
    "name": "Psychedelic Love",
    "gender": "for women and men",
    "topNotes": [
      "Ylang-Ylang",
      "Bergamot"
    ],
    "heartNotes": [
      "Heliotrope",
      "Hedione",
      "Bulgarian Rose"
    ],
    "baseNotes": [
      "Myrrh",
      "Sandalwood"
    ],
    "seasons": [
      "Spring",
      "Summer",
      "Monsoon"
    ],
    "time": "Day",
    "sprays": "3-4 sprays; 2-3 indoors",
    "occasions": [
      "Travel",
      "Casual Daytime Events",
      "College",
      "Office",
      "Brunch"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Citrus",
      "Floral"
    ],
    "accords": [
      "Balsamic",
      "Floral",
      "Fresh",
      "Warm"
    ]
  },
  {
    "id": "535",
    "slug": "initio-parfums-prives-rehab",
    "brand": "Initio Parfums Prives",
    "name": "Rehab",
    "gender": "for women and men",
    "topNotes": [
      "Lavender",
      "Bergamot"
    ],
    "heartNotes": [
      "Cedar",
      "Vetiver",
      "Patchouli"
    ],
    "baseNotes": [
      "Sandalwood",
      "Musk",
      "Guaiac Wood"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer",
      "Winter"
    ],
    "time": "Day / Evening",
    "sprays": "4-6",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal",
      "Office"
    ],
    "featured": false,
    "families": [
      "Aromatic",
      "Citrus",
      "Woody"
    ],
    "accords": [
      "Earthy",
      "Fresh",
      "Herbal",
      "Musky"
    ]
  },
  {
    "id": "536",
    "slug": "initio-parfums-prives-side-effect",
    "brand": "Initio Parfums Prives",
    "name": "Side Effect",
    "gender": "for women and men",
    "topNotes": [
      "Not separately listed"
    ],
    "heartNotes": [
      "Not separately listed"
    ],
    "baseNotes": [
      "Not separately listed"
    ],
    "seasons": [
      "Spring",
      "Summer",
      "Monsoon"
    ],
    "time": "Day",
    "sprays": "3-4 sprays; 2-3 indoors",
    "occasions": [
      "Travel",
      "Casual Daytime Events",
      "College",
      "Office",
      "Brunch"
    ],
    "featured": false,
    "families": [
      "Aromatic"
    ],
    "accords": [
      "Fresh"
    ]
  },
  {
    "id": "537",
    "slug": "issey-miyake-fusion-d-issey-extreme",
    "brand": "Issey Miyake",
    "name": "Fusion d Issey Extreme",
    "gender": "for men",
    "topNotes": [
      "Cardamom",
      "Bergamot"
    ],
    "heartNotes": [
      "Coconut",
      "Mint",
      "Mineral notes",
      "Lavender",
      "Solar Notes"
    ],
    "baseNotes": [
      "Sandalwood",
      "Patchouli"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer"
    ],
    "time": "Day",
    "sprays": "4-6",
    "occasions": [
      "Brunch",
      "Casual Daytime Events",
      "College",
      "Office",
      "Travel"
    ],
    "featured": false,
    "families": [
      "Aromatic",
      "Citrus",
      "Fruity"
    ],
    "accords": [
      "Earthy",
      "Fresh",
      "Fruity",
      "Herbal"
    ]
  },
  {
    "id": "538",
    "slug": "issey-miyake-l-eau-d-issey",
    "brand": "Issey Miyake",
    "name": "L eau d Issey",
    "gender": "for women",
    "topNotes": [
      "Lotus",
      "Melon",
      "Freesia",
      "Rose Water",
      "Rose",
      "Calone",
      "Cyclamen"
    ],
    "heartNotes": [
      "Lily-of-the-Valley",
      "Lily",
      "Water Peony",
      "Carnation"
    ],
    "baseNotes": [
      "Musk",
      "Tuberose",
      "Exotic Woods",
      "Osmanthus",
      "Cedar",
      "Sandalwood",
      "Amber"
    ],
    "seasons": [
      "Spring",
      "Summer",
      "Monsoon"
    ],
    "time": "Day",
    "sprays": "3-4 sprays; 2-3 indoors Sprays: 3-4 sprays; 2-3 indoors",
    "occasions": [
      "Travel",
      "Casual Daytime Events",
      "College",
      "Office",
      "Brunch"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Aquatic",
      "Floral"
    ],
    "accords": [
      "Floral",
      "Marine",
      "Musky",
      "Warm"
    ]
  },
  {
    "id": "539",
    "slug": "issey-miyake-l-eau-d-issey-pour-homme",
    "brand": "Issey Miyake",
    "name": "L Eau d Issey Pour Homme",
    "gender": "for men",
    "topNotes": [
      "Yuzu",
      "Lemon",
      "Bergamot",
      "Lemon Verbena",
      "Mandarin Orange",
      "Cypress",
      "Calone",
      "Coriander",
      "Tarragon",
      "Sage"
    ],
    "heartNotes": [
      "Blue Lotus",
      "Nutmeg",
      "Lily-of-the-Valley",
      "Bourbon Geranium",
      "Saffron",
      "Ceylon Cinnamon",
      "Mignonette"
    ],
    "baseNotes": [
      "Tahitian Vetiver",
      "Musk"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer"
    ],
    "time": "Day",
    "sprays": "4-6",
    "occasions": [
      "Casual",
      "Formal",
      "Office"
    ],
    "featured": false,
    "families": [
      "Aquatic",
      "Aromatic",
      "Citrus"
    ],
    "accords": [
      "Earthy",
      "Floral",
      "Fresh",
      "Herbal"
    ]
  },
  {
    "id": "540",
    "slug": "archive-fragrance-540",
    "brand": "Archive",
    "name": "Fragrance 540",
    "gender": "for men",
    "topNotes": [
      "Yuzu",
      "Lemon",
      "Bergamot",
      "Lemon Verbena",
      "Mandarin Orange",
      "Cypress",
      "Calone",
      "Coriander",
      "Tarragon",
      "Sage"
    ],
    "heartNotes": [
      "Blue Lotus",
      "Nutmeg",
      "Lily-of-the-Valley",
      "Bourbon Geranium",
      "Saffron",
      "Ceylon Cinnamon",
      "Mignonette"
    ],
    "baseNotes": [
      "Tahitian Vetiver",
      "Musk"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer"
    ],
    "time": "Day",
    "sprays": "4-6",
    "occasions": [
      "Casual",
      "Formal",
      "Office"
    ],
    "featured": false,
    "families": [
      "Aquatic",
      "Aromatic",
      "Citrus"
    ],
    "accords": [
      "Earthy",
      "Floral",
      "Fresh",
      "Herbal"
    ]
  },
  {
    "id": "541",
    "slug": "issey-miyake-l-eau-d-issey-541",
    "brand": "Issey Miyake",
    "name": "L eau d Issey",
    "gender": "for women",
    "topNotes": [
      "Lotus",
      "Melon",
      "Freesia",
      "Rose Water",
      "Rose",
      "Calone",
      "Cyclamen"
    ],
    "heartNotes": [
      "Lily-of-the-Valley",
      "Lily",
      "Water Peony",
      "Carnation"
    ],
    "baseNotes": [
      "Musk",
      "Tuberose",
      "Exotic Woods",
      "Osmanthus",
      "Cedar",
      "Sandalwood",
      "Amber"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer"
    ],
    "time": "Day",
    "sprays": "4-6",
    "occasions": [
      "Brunch",
      "Casual Daytime Events",
      "College",
      "Office",
      "Travel"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Aquatic",
      "Floral"
    ],
    "accords": [
      "Floral",
      "Marine",
      "Musky",
      "Warm"
    ]
  },
  {
    "id": "542",
    "slug": "issey-miyake-l-eau-majeure-d-issey",
    "brand": "Issey Miyake",
    "name": "L Eau Majeure d Issey",
    "gender": "for men",
    "topNotes": [
      "Grapefruit",
      "Bergamot",
      "Mint"
    ],
    "heartNotes": [
      "Sea Notes",
      "Hedione",
      "Tea"
    ],
    "baseNotes": [
      "Cashmeran",
      "Woody Notes",
      "Amberwood",
      "Cedar",
      "Coumarin"
    ],
    "seasons": [
      "Spring",
      "Summer",
      "Monsoon"
    ],
    "time": "Day",
    "sprays": "3-4 sprays; 2-3 indoors Sprays: 3-4 sprays; 2-3 indoors",
    "occasions": [
      "Travel",
      "Casual Daytime Events",
      "College",
      "Office",
      "Brunch"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Aquatic",
      "Aromatic"
    ],
    "accords": [
      "Fresh",
      "Herbal",
      "Marine",
      "Warm"
    ]
  },
  {
    "id": "543",
    "slug": "jacomo-eau-cendree",
    "brand": "Jacomo",
    "name": "Eau Cendree",
    "gender": "for men",
    "topNotes": [
      "Petitgrain",
      "Coriander",
      "Lavender",
      "Lemon",
      "Bergamot"
    ],
    "heartNotes": [
      "Carnation",
      "Geranium",
      "Clary Sage"
    ],
    "baseNotes": [
      "Cedar",
      "Patchouli",
      "Musk",
      "Vetiver",
      "Sandalwood"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer"
    ],
    "time": "Day",
    "sprays": "4-6",
    "occasions": [
      "Casual",
      "Formal",
      "Office"
    ],
    "featured": false,
    "families": [
      "Aromatic",
      "Citrus",
      "Floral"
    ],
    "accords": [
      "Earthy",
      "Floral",
      "Fresh",
      "Herbal"
    ]
  },
  {
    "id": "544",
    "slug": "jean-patou-patou-pour-homme-prive",
    "brand": "Jean Patou",
    "name": "Patou Pour Homme Prive",
    "gender": "for men",
    "topNotes": [
      "Lavender",
      "Galbanum",
      "Bergamot",
      "Mandarin Orange"
    ],
    "heartNotes": [
      "Floral Notes",
      "Pepper"
    ],
    "baseNotes": [
      "Hay",
      "Patchouli",
      "oak moss",
      "Vetiver",
      "Orris Root",
      "Vanille",
      "Virginia Cedar"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer"
    ],
    "time": "Day",
    "sprays": "4-6",
    "occasions": [
      "Brunch",
      "Casual Daytime Events",
      "College",
      "Office",
      "Travel"
    ],
    "featured": false,
    "families": [
      "Aromatic",
      "Citrus",
      "Floral"
    ],
    "accords": [
      "Earthy",
      "Floral",
      "Fresh",
      "Green"
    ]
  },
  {
    "id": "545",
    "slug": "jean-patou-sublime",
    "brand": "Jean Patou",
    "name": "Sublime",
    "gender": "for women",
    "topNotes": [
      "Ylang-Ylang",
      "Mandarin Orange",
      "Orange",
      "Bergamot"
    ],
    "heartNotes": [
      "Jasmine",
      "Rose",
      "Orange Blossom",
      "Lily-of-the-Valley"
    ],
    "baseNotes": [
      "Amber",
      "Musk",
      "Patchouli"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer"
    ],
    "time": "Day",
    "sprays": "4-6",
    "occasions": [
      "Brunch",
      "Casual Daytime Events",
      "College",
      "Office",
      "Travel"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Citrus",
      "Floral"
    ],
    "accords": [
      "Earthy",
      "Floral",
      "Fresh",
      "Musky"
    ]
  },
  {
    "id": "546",
    "slug": "jean-paul-gaultier-fleur-du-male",
    "brand": "Jean Paul Gaultier",
    "name": "Fleur du Male",
    "gender": "for men",
    "topNotes": [
      "Petitgrain"
    ],
    "heartNotes": [
      "Neroli"
    ],
    "baseNotes": [
      "Chamomile",
      "Basil"
    ],
    "seasons": [
      "Spring",
      "Summer",
      "Monsoon"
    ],
    "time": "Day",
    "sprays": "3-4 sprays; 2-3 indoors Sprays: 3-4 sprays; 2-3 indoors",
    "occasions": [
      "Travel",
      "Casual Daytime Events",
      "College",
      "Office",
      "Brunch"
    ],
    "featured": false,
    "families": [
      "Aromatic",
      "Citrus"
    ],
    "accords": [
      "Fresh",
      "Herbal"
    ]
  },
  {
    "id": "547",
    "slug": "jean-paul-gaultier-gaultier-2",
    "brand": "Jean Paul Gaultier",
    "name": "Gaultier 2",
    "gender": "for women and men",
    "topNotes": [
      "Not separately listed"
    ],
    "heartNotes": [
      "Not separately listed"
    ],
    "baseNotes": [
      "Not separately listed"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer"
    ],
    "time": "Day",
    "sprays": "3-4",
    "occasions": [
      "Casual",
      "Office"
    ],
    "featured": false,
    "families": [
      "Aromatic"
    ],
    "accords": [
      "Fresh"
    ]
  },
  {
    "id": "548",
    "slug": "jean-paul-gaultier-kokorico",
    "brand": "Jean Paul Gaultier",
    "name": "Kokorico",
    "gender": "for men",
    "topNotes": [
      "Fig Leaf"
    ],
    "heartNotes": [
      "Cacao",
      "Patchouli"
    ],
    "baseNotes": [
      "Vetiver",
      "Virginia Cedar"
    ],
    "seasons": [
      "Ac Venues",
      "Monsoon Evenings",
      "Winter"
    ],
    "time": "Evening",
    "sprays": "3-4",
    "occasions": [
      "Celebrations",
      "Dinner Dates",
      "Formal Events",
      "Receptions"
    ],
    "featured": false,
    "families": [
      "Fruity",
      "Gourmand",
      "Woody"
    ],
    "accords": [
      "Earthy",
      "Fruity",
      "Sweet",
      "Woody"
    ]
  },
  {
    "id": "549",
    "slug": "jean-paul-gaultier-la-belle-le-parfum",
    "brand": "Jean Paul Gaultier",
    "name": "La Belle Le Parfum",
    "gender": "for women",
    "topNotes": [
      "Pear"
    ],
    "heartNotes": [
      "Tonka Bean",
      "Jasmine"
    ],
    "baseNotes": [
      "Vanilla"
    ],
    "seasons": [
      "Spring",
      "Winter"
    ],
    "time": "Evening",
    "sprays": "2-3",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Floral",
      "Fruity"
    ],
    "accords": [
      "Floral",
      "Fruity",
      "Sweet",
      "Warm"
    ]
  },
  {
    "id": "550",
    "slug": "jean-paul-gaultier-le-beau",
    "brand": "Jean Paul Gaultier",
    "name": "Le Beau",
    "gender": "for men",
    "topNotes": [
      "Bergamot"
    ],
    "heartNotes": [
      "Coconut"
    ],
    "baseNotes": [
      "Tonka Bean"
    ],
    "seasons": [
      "Ac Venues",
      "Winter",
      "Monsoon Evenings"
    ],
    "time": "Evening",
    "sprays": "2-3 sprays",
    "occasions": [
      "Celebrations",
      "Receptions",
      "Dinner Dates",
      "Formal Events"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Citrus",
      "Fruity"
    ],
    "accords": [
      "Fresh",
      "Fruity",
      "Sweet",
      "Warm"
    ]
  },
  {
    "id": "551",
    "slug": "jean-paul-gaultier-le-male-aviator",
    "brand": "Jean Paul Gaultier",
    "name": "Le Male Aviator",
    "gender": "for men",
    "topNotes": [
      "Mint"
    ],
    "heartNotes": [
      "Violet Leaf"
    ],
    "baseNotes": [
      "Woodsy Notes"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Winter"
    ],
    "time": "Evening",
    "sprays": "3-4",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal"
    ],
    "featured": false,
    "families": [
      "Aromatic",
      "Floral",
      "Woody"
    ],
    "accords": [
      "Floral",
      "Herbal",
      "Powdery",
      "Woody"
    ]
  },
  {
    "id": "552",
    "slug": "jean-paul-gaultier-le-male-elixir",
    "brand": "Jean Paul Gaultier",
    "name": "Le Male Elixir",
    "gender": "for men",
    "topNotes": [
      "Lavender",
      "Mint"
    ],
    "heartNotes": [
      "Vanilla",
      "Benzoin"
    ],
    "baseNotes": [
      "Honey",
      "Tonka Bean",
      "Tobacco"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer"
    ],
    "time": "Day",
    "sprays": "2-3",
    "occasions": [
      "Brunch",
      "Casual Daytime Events",
      "College",
      "Office",
      "Travel"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Aromatic",
      "Gourmand"
    ],
    "accords": [
      "Herbal",
      "Sweet",
      "Warm"
    ]
  },
  {
    "id": "553",
    "slug": "jean-paul-gaultier-le-male",
    "brand": "Jean Paul Gaultier",
    "name": "Le Male",
    "gender": "for men",
    "topNotes": [
      "Lavender",
      "Mint",
      "Cardamom",
      "Bergamot",
      "Artemisia"
    ],
    "heartNotes": [
      "Cinnamon",
      "Orange Blossom",
      "Caraway"
    ],
    "baseNotes": [
      "Vanilla",
      "Tonka Bean",
      "Amber",
      "Sandalwood",
      "Cedar"
    ],
    "seasons": [
      "Spring",
      "Ac Venues",
      "Mild Winter",
      "Monsoon Evenings"
    ],
    "time": "Day / Evening",
    "sprays": "2-3 sprays Le Male Le Parfum for men",
    "occasions": [
      "Lunches",
      "Smart Casuals",
      "Dates",
      "Office",
      "Pujas"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Aromatic",
      "Citrus"
    ],
    "accords": [
      "Floral",
      "Fresh",
      "Herbal",
      "Spicy"
    ]
  },
  {
    "id": "554",
    "slug": "sprays-2-3-sprays-le-male-le-parfum",
    "brand": "Sprays: 2-3 Sprays",
    "name": "Le Male Le Parfum",
    "gender": "for men",
    "topNotes": [
      "Cardamom"
    ],
    "heartNotes": [
      "Lavender",
      "Iris"
    ],
    "baseNotes": [
      "Vanilla",
      "Oriental notes",
      "Woodsy Notes"
    ],
    "seasons": [
      "Ac Venues",
      "Winter",
      "Monsoon Evenings"
    ],
    "time": "Evening",
    "sprays": "2-3 sprays",
    "occasions": [
      "Celebrations",
      "Receptions",
      "Dinner Dates",
      "Formal Events"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Aromatic",
      "Floral"
    ],
    "accords": [
      "Floral",
      "Herbal",
      "Powdery",
      "Spicy"
    ]
  },
  {
    "id": "555",
    "slug": "jean-paul-gaultier-le-male-popeye-eau-fraiche",
    "brand": "Jean Paul Gaultier",
    "name": "Le Male Popeye Eau Fraiche",
    "gender": "for men",
    "topNotes": [
      "Mint",
      "Aldehydes",
      "Neroli"
    ],
    "heartNotes": [
      "Sage",
      "Sclarene"
    ],
    "baseNotes": [
      "Vanilla",
      "Tonka Bean",
      "Sandalwood  Scandal  for women  NOTES"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer",
      "Winter"
    ],
    "time": "Day / Evening",
    "sprays": "4-6",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal",
      "Office"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Aromatic",
      "Citrus"
    ],
    "accords": [
      "Fresh",
      "Herbal",
      "Sweet",
      "Warm"
    ]
  },
  {
    "id": "556",
    "slug": "base-vanilla-tonka-bean-and-sandalwood-scandal",
    "brand": "Archive",
    "name": "Scandal",
    "gender": "for women",
    "topNotes": [
      "Blood Orange",
      "Mandarin Orange"
    ],
    "heartNotes": [
      "Honey",
      "Gardenia",
      "Orange Blossom",
      "Jasmine",
      "Peach"
    ],
    "baseNotes": [
      "Beeswax",
      "Caramel",
      "Patchouli",
      "Licorice"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer"
    ],
    "time": "Day",
    "sprays": "4-6",
    "occasions": [
      "Casual",
      "Formal",
      "Office"
    ],
    "featured": false,
    "families": [
      "Citrus",
      "Floral",
      "Fruity"
    ],
    "accords": [
      "Earthy",
      "Floral",
      "Fresh",
      "Fruity"
    ]
  },
  {
    "id": "557",
    "slug": "jean-paul-gaultier-ultra-male",
    "brand": "Jean Paul Gaultier",
    "name": "Ultra Male",
    "gender": "for men",
    "topNotes": [
      "Pear",
      "Lavender",
      "Mint",
      "Bergamot",
      "Lemon"
    ],
    "heartNotes": [
      "Cinnamon",
      "Clary Sage",
      "Caraway"
    ],
    "baseNotes": [
      "Black Vanilla Husk",
      "Amber",
      "Patchouli",
      "Cedar"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer",
      "Winter"
    ],
    "time": "Day / Evening",
    "sprays": "4-6",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal",
      "Office"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Aromatic",
      "Citrus"
    ],
    "accords": [
      "Earthy",
      "Fresh",
      "Fruity",
      "Herbal"
    ]
  },
  {
    "id": "558",
    "slug": "bogner-fire-ice-for-men",
    "brand": "Bogner",
    "name": "Fire Ice for Men",
    "gender": "for men",
    "topNotes": [
      "Bergamot",
      "Grapefruit",
      "Amalfi Lemon",
      "Mandarin Orange",
      "Pink Pepper"
    ],
    "heartNotes": [
      "Birch",
      "Lily-of-the-Valley"
    ],
    "baseNotes": [
      "Sandalwood",
      "Patchouli",
      "oak moss",
      "Sea water",
      "Vanille",
      "Amber",
      "Musk"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer",
      "Winter"
    ],
    "time": "Day / Evening",
    "sprays": "4-6",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal",
      "Office"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Aquatic",
      "Citrus"
    ],
    "accords": [
      "Earthy",
      "Floral",
      "Fresh",
      "Marine"
    ]
  },
  {
    "id": "559",
    "slug": "jo-malone-london-grapefruit",
    "brand": "Jo Malone London",
    "name": "Grapefruit",
    "gender": "for women and men",
    "topNotes": [
      "Grapefruit",
      "Tangerine"
    ],
    "heartNotes": [
      "Rosemary",
      "Mint",
      "Paprika",
      "Jasmine"
    ],
    "baseNotes": [
      "Vetiver",
      "Oakmoss",
      "Patchouli"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer"
    ],
    "time": "Day",
    "sprays": "4-6",
    "occasions": [
      "Casual",
      "Formal",
      "Office"
    ],
    "featured": false,
    "families": [
      "Aromatic",
      "Citrus",
      "Floral"
    ],
    "accords": [
      "Earthy",
      "Floral",
      "Fresh",
      "Herbal"
    ]
  },
  {
    "id": "560",
    "slug": "jo-malone-london-earl-grey-cucumber",
    "brand": "Jo Malone London",
    "name": "Earl Grey Cucumber",
    "gender": "for women and men",
    "topNotes": [
      "Earl Grey Tea",
      "Bergamot"
    ],
    "heartNotes": [
      "Cucumber"
    ],
    "baseNotes": [
      "Musk",
      "Beeswax",
      "Vanilla"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer"
    ],
    "time": "Day",
    "sprays": "4-6",
    "occasions": [
      "Brunch",
      "Casual Daytime Events",
      "College",
      "Office",
      "Travel"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Citrus"
    ],
    "accords": [
      "Fresh",
      "Musky",
      "Sweet",
      "Warm"
    ]
  },
  {
    "id": "561",
    "slug": "jo-malone-london-english-pear-freesia",
    "brand": "Jo Malone London",
    "name": "English Pear Freesia",
    "gender": "for women",
    "topNotes": [
      "Pear",
      "Melon"
    ],
    "heartNotes": [
      "Freesia",
      "Rose"
    ],
    "baseNotes": [
      "Musk",
      "Patchouli",
      "Rhuburb",
      "Amber"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Winter"
    ],
    "time": "Evening",
    "sprays": "2-3",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Floral",
      "Fruity"
    ],
    "accords": [
      "Earthy",
      "Floral",
      "Fruity",
      "Musky"
    ]
  },
  {
    "id": "562",
    "slug": "jo-malone-london-jasmine-sambac-marigold",
    "brand": "Jo Malone London",
    "name": "Jasmine Sambac Marigold",
    "gender": "for women",
    "topNotes": [
      "Marigold"
    ],
    "heartNotes": [
      "Jasmine Sambac",
      "Ylang-Ylang",
      "Honey"
    ],
    "baseNotes": [
      "Benzoin"
    ],
    "seasons": [
      "Spring",
      "Summer",
      "Monsoon"
    ],
    "time": "Day",
    "sprays": "3-4 sprays; 2-3 indoors",
    "occasions": [
      "Travel",
      "Casual Daytime Events",
      "College",
      "Office",
      "Brunch"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Floral",
      "Gourmand"
    ],
    "accords": [
      "Floral",
      "Sweet",
      "Warm"
    ]
  },
  {
    "id": "563",
    "slug": "jo-malone-london-lime-basil-mandarin",
    "brand": "Jo Malone London",
    "name": "Lime Basil Mandarin",
    "gender": "for women and men",
    "topNotes": [
      "Lime",
      "Bergamot",
      "Mandarin Orange"
    ],
    "heartNotes": [
      "Basil",
      "Thyme",
      "Iris",
      "Lilac"
    ],
    "baseNotes": [
      "Vetiver",
      "Patchouli"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer"
    ],
    "time": "Day",
    "sprays": "4-6",
    "occasions": [
      "Casual",
      "Formal",
      "Office"
    ],
    "featured": false,
    "families": [
      "Aromatic",
      "Citrus",
      "Floral"
    ],
    "accords": [
      "Earthy",
      "Floral",
      "Fresh",
      "Herbal"
    ]
  },
  {
    "id": "564",
    "slug": "jo-malone-london-orange-blossom",
    "brand": "Jo Malone London",
    "name": "Orange Blossom",
    "gender": "for women and men",
    "topNotes": [
      "Tangerine Blossom"
    ],
    "heartNotes": [
      "Orange Blossom",
      "Lilac",
      "Water Lily"
    ],
    "baseNotes": [
      "Iris",
      "Vetiver"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer"
    ],
    "time": "Day",
    "sprays": "4-6",
    "occasions": [
      "Brunch",
      "Casual Daytime Events",
      "College",
      "Office",
      "Travel"
    ],
    "featured": false,
    "families": [
      "Aquatic",
      "Citrus",
      "Floral"
    ],
    "accords": [
      "Earthy",
      "Floral",
      "Fresh",
      "Marine"
    ]
  },
  {
    "id": "565",
    "slug": "jo-malone-london-peony-blush-suede",
    "brand": "Jo Malone London",
    "name": "Peony Blush Suede",
    "gender": "for women and men",
    "topNotes": [
      "Cloves"
    ],
    "heartNotes": [
      "Damask Rose"
    ],
    "baseNotes": [
      "Agarwood (Oud)",
      "Nougat"
    ],
    "seasons": [
      "Spring",
      "Winter"
    ],
    "time": "Evening",
    "sprays": "3-4",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal"
    ],
    "featured": false,
    "families": [
      "Floral",
      "Spicy",
      "Woody"
    ],
    "accords": [
      "Floral",
      "Spicy",
      "Woody"
    ]
  },
  {
    "id": "566",
    "slug": "archive-fragrance-566",
    "brand": "Archive",
    "name": "Fragrance 566",
    "gender": "for women",
    "topNotes": [
      "Red Apple"
    ],
    "heartNotes": [
      "Peony",
      "Rose",
      "Carnation",
      "Jasmine"
    ],
    "baseNotes": [
      "Suede"
    ],
    "seasons": [
      "Spring",
      "Winter"
    ],
    "time": "Evening",
    "sprays": "2-3",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal"
    ],
    "featured": false,
    "families": [
      "Floral",
      "Fruity",
      "Leather"
    ],
    "accords": [
      "Floral",
      "Fruity",
      "Leather"
    ]
  },
  {
    "id": "567",
    "slug": "jo-malone-london-pomegranate-noir",
    "brand": "Jo Malone London",
    "name": "Pomegranate Noir",
    "gender": "for women and men",
    "topNotes": [
      "Pomegranate",
      "Rhuburb",
      "Plum",
      "Raspberry",
      "Watermelon"
    ],
    "heartNotes": [
      "Clove",
      "Pink Pepper",
      "Guaiac Wood",
      "Olibanum",
      "Opoponax",
      "Rose",
      "Jasmine",
      "Lily-of-the-Valley"
    ],
    "baseNotes": [
      "Virginia Cedar",
      "Patchouli",
      "Musk",
      "Amber"
    ],
    "seasons": [
      "Spring",
      "Ac Venues",
      "Mild Winter",
      "Monsoon Evenings"
    ],
    "time": "Day / Evening",
    "sprays": "2-3 sprays",
    "occasions": [
      "Lunches",
      "Smart Casuals",
      "Dates",
      "Office",
      "Pujas"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Aquatic",
      "Floral"
    ],
    "accords": [
      "Earthy",
      "Floral",
      "Fruity",
      "Marine"
    ]
  },
  {
    "id": "568",
    "slug": "jo-malone-london-red-roses",
    "brand": "Jo Malone London",
    "name": "Red Roses",
    "gender": "for women",
    "topNotes": [
      "Lemon",
      "Mint"
    ],
    "heartNotes": [
      "Bulgarian Rose",
      "Violet Leaf"
    ],
    "baseNotes": [
      "Beeswax"
    ],
    "seasons": [
      "Spring",
      "Summer",
      "Monsoon"
    ],
    "time": "Day",
    "sprays": "3-4 sprays; 2-3 indoors",
    "occasions": [
      "Travel",
      "Casual Daytime Events",
      "College",
      "Office",
      "Brunch"
    ],
    "featured": false,
    "families": [
      "Aromatic",
      "Citrus",
      "Floral"
    ],
    "accords": [
      "Floral",
      "Fresh",
      "Herbal",
      "Powdery"
    ]
  },
  {
    "id": "569",
    "slug": "jo-malone-london-violet-amber-absolu",
    "brand": "Jo Malone London",
    "name": "Violet Amber Absolu",
    "gender": "for women and men",
    "topNotes": [
      "Ambrette (Musk Mallow)"
    ],
    "heartNotes": [
      "Orris",
      "Fig",
      "Poppy"
    ],
    "baseNotes": [
      "Tonka Bean",
      "Heliotrope",
      "Barley"
    ],
    "seasons": [
      "Spring",
      "Winter"
    ],
    "time": "Evening",
    "sprays": "2-3",
    "occasions": [
      "Date Night",
      "Formal"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Fruity"
    ],
    "accords": [
      "Fruity",
      "Musky",
      "Sweet",
      "Warm"
    ]
  },
  {
    "id": "570",
    "slug": "-570",
    "brand": "Archive",
    "name": "Classified Fragrance",
    "gender": "Unisex",
    "topNotes": [
      "Not separately listed"
    ],
    "heartNotes": [
      "Not separately listed"
    ],
    "baseNotes": [
      "Not separately listed"
    ],
    "seasons": [
      "Ac Venues",
      "Winter",
      "Monsoon Evenings"
    ],
    "time": "Evening",
    "sprays": "2-3 sprays",
    "occasions": [
      "Celebrations",
      "Receptions",
      "Dinner Dates",
      "Formal Events"
    ],
    "featured": false,
    "families": [
      "Aromatic"
    ],
    "accords": [
      "Fresh"
    ]
  },
  {
    "id": "571",
    "slug": "jo-malone-london-wood-sage-sea-salt",
    "brand": "Jo Malone London",
    "name": "Wood Sage Sea Salt",
    "gender": "for women and men",
    "topNotes": [
      "Not separately listed"
    ],
    "heartNotes": [
      "Not separately listed"
    ],
    "baseNotes": [
      "Not separately listed"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer"
    ],
    "time": "Day",
    "sprays": "3-4",
    "occasions": [
      "Casual",
      "Office"
    ],
    "featured": false,
    "families": [
      "Aromatic"
    ],
    "accords": [
      "Fresh"
    ]
  },
  {
    "id": "572",
    "slug": "zara-hip-hop-red-apple",
    "brand": "Zara",
    "name": "Hip Hop Red Apple",
    "gender": "for women",
    "topNotes": [
      "Not separately listed"
    ],
    "heartNotes": [
      "Not separately listed"
    ],
    "baseNotes": [
      "Not separately listed"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer"
    ],
    "time": "Day",
    "sprays": "3-4",
    "occasions": [
      "Brunch",
      "Casual Daytime Events",
      "College",
      "Office",
      "Travel"
    ],
    "featured": false,
    "families": [
      "Aromatic"
    ],
    "accords": [
      "Fresh"
    ]
  },
  {
    "id": "573",
    "slug": "joop-joop-femme",
    "brand": "Joop",
    "name": "Joop Femme",
    "gender": "for women",
    "topNotes": [
      "Aldehydes",
      "Coriander",
      "Fruity Notes",
      "Bergamot",
      "Lemon"
    ],
    "heartNotes": [
      "Jasmine",
      "Orange Blossom",
      "Rose",
      "Lily-of-the-Valley"
    ],
    "baseNotes": [
      "Sandalwood",
      "Civet",
      "Vanilla",
      "Amber",
      "Tonka Bean",
      "Musk",
      "Patchouli",
      "Oakmoss",
      "Cedar"
    ],
    "seasons": [
      "Ac Venues",
      "Winter",
      "Cool Nights"
    ],
    "time": "Evening",
    "sprays": "1-2 sprays",
    "occasions": [
      "Receptions",
      "Winter Weddings",
      "Festive Evenings",
      "Formal Dinners"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Citrus",
      "Floral"
    ],
    "accords": [
      "Earthy",
      "Floral",
      "Fresh",
      "Leather"
    ]
  },
  {
    "id": "574",
    "slug": "juliette-has-a-gun-midnight-oud",
    "brand": "Juliette Has A Gun",
    "name": "Midnight Oud",
    "gender": "for women",
    "topNotes": [
      "Damask Rose",
      "Saffron",
      "Papyrus",
      "Bergamot"
    ],
    "heartNotes": [
      "Agarwood (Oud)",
      "Moroccan Rose",
      "Castoreum",
      "Geranium"
    ],
    "baseNotes": [
      "Patchouli",
      "Musk",
      "Amber",
      "Sandalwood"
    ],
    "seasons": [
      "Spring",
      "Ac Venues",
      "Mild Winter",
      "Monsoon Evenings"
    ],
    "time": "Day / Evening",
    "sprays": "2-3 sprays",
    "occasions": [
      "Lunches",
      "Smart Casuals",
      "Dates",
      "Office",
      "Pujas"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Citrus",
      "Floral"
    ],
    "accords": [
      "Earthy",
      "Floral",
      "Fresh",
      "Leather"
    ]
  },
  {
    "id": "575",
    "slug": "juliette-has-a-gun-sunny-side-up",
    "brand": "Juliette Has A Gun",
    "name": "Sunny Side Up",
    "gender": "for women",
    "topNotes": [
      "Vanilla Absolute",
      "Amyris",
      "Jasmine"
    ],
    "heartNotes": [
      "Sandalwood",
      "Coconut Milk",
      "Orris Root",
      "Jasmine"
    ],
    "baseNotes": [
      "Iso E Super",
      "Ambrette (Musk Mallow)"
    ],
    "seasons": [
      "Spring",
      "Winter"
    ],
    "time": "Evening",
    "sprays": "2-3",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Floral",
      "Fruity"
    ],
    "accords": [
      "Floral",
      "Fruity",
      "Musky",
      "Sweet"
    ]
  },
  {
    "id": "576",
    "slug": "kajal-lamar",
    "brand": "Kajal",
    "name": "Lamar",
    "gender": "for women and men",
    "topNotes": [
      "Pineapple",
      "Red Berries",
      "Apple",
      "Cardamom",
      "Coriander"
    ],
    "heartNotes": [
      "Bulgarian Rose",
      "Turkish Rose",
      "Magnolia",
      "Jasmine Sambac"
    ],
    "baseNotes": [
      "Musk",
      "Vanilla",
      "Amber",
      "Cashmere Wood",
      "Cedar",
      "Moss"
    ],
    "seasons": [
      "Ac Venues",
      "Winter",
      "Monsoon Evenings"
    ],
    "time": "Evening",
    "sprays": "2-3 sprays",
    "occasions": [
      "Celebrations",
      "Receptions",
      "Dinner Dates",
      "Formal Events"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Floral",
      "Fruity"
    ],
    "accords": [
      "Floral",
      "Fruity",
      "Musky",
      "Spicy"
    ]
  },
  {
    "id": "577",
    "slug": "kajal-warde",
    "brand": "Kajal",
    "name": "Warde",
    "gender": "for women and men",
    "topNotes": [
      "Pine",
      "Black Currant",
      "Absinthe",
      "Artemisia"
    ],
    "heartNotes": [
      "Rose",
      "White Flowers",
      "Violet",
      "Jasmine",
      "Orange Blossom"
    ],
    "baseNotes": [
      "Balsam Fir",
      "Resins",
      "Patchouli",
      "Moss",
      "Agarwood (Oud)",
      "Musk"
    ],
    "seasons": [
      "Spring",
      "Ac Venues",
      "Mild Winter",
      "Monsoon Evenings"
    ],
    "time": "Day / Evening",
    "sprays": "2-3 sprays",
    "occasions": [
      "Lunches",
      "Smart Casuals",
      "Dates",
      "Office",
      "Pujas"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Aromatic",
      "Citrus"
    ],
    "accords": [
      "Balsamic",
      "Earthy",
      "Floral",
      "Fresh"
    ]
  },
  {
    "id": "578",
    "slug": "karl-lagerfeld-chloe-parfums-lagerfeld",
    "brand": "Karl Lagerfeld",
    "name": "Chloe Parfums Lagerfeld",
    "gender": "for women",
    "topNotes": [
      "Not separately listed"
    ],
    "heartNotes": [
      "Not separately listed"
    ],
    "baseNotes": [
      "Not separately listed"
    ],
    "seasons": [
      "Spring",
      "Summer",
      "Monsoon"
    ],
    "time": "Day",
    "sprays": "3-4 sprays; 2-3 indoors",
    "occasions": [
      "Travel",
      "Casual Daytime Events",
      "College",
      "Office",
      "Brunch"
    ],
    "featured": false,
    "families": [
      "Aromatic"
    ],
    "accords": [
      "Fresh"
    ]
  },
  {
    "id": "579",
    "slug": "perry-ellis-perry-man",
    "brand": "Perry Ellis",
    "name": "Perry Man",
    "gender": "for men",
    "topNotes": [
      "Bergamot",
      "Lime",
      "Neroli",
      "Apple"
    ],
    "heartNotes": [
      "Rose",
      "Patchouli",
      "Teak Wood"
    ],
    "baseNotes": [
      "Musk",
      "Vanilla",
      "Labdanum"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer",
      "Winter"
    ],
    "time": "Day / Evening",
    "sprays": "4-6",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal",
      "Office"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Citrus",
      "Floral"
    ],
    "accords": [
      "Earthy",
      "Floral",
      "Fresh",
      "Fruity"
    ]
  },
  {
    "id": "580",
    "slug": "perry-ellis-perry-man-580",
    "brand": "Perry Ellis",
    "name": "Perry Man",
    "gender": "for men",
    "topNotes": [
      "Bergamot",
      "Lime",
      "Neroli",
      "Apple"
    ],
    "heartNotes": [
      "Rose",
      "Patchouli",
      "Teak Wood"
    ],
    "baseNotes": [
      "Musk",
      "Vanilla",
      "Labdanum"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer",
      "Winter"
    ],
    "time": "Day / Evening",
    "sprays": "4-6",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal",
      "Office"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Citrus",
      "Floral"
    ],
    "accords": [
      "Earthy",
      "Floral",
      "Fresh",
      "Fruity"
    ]
  },
  {
    "id": "581",
    "slug": "aqua-kenzo-pour-femme-kenzo-homme-eau-de-parfum",
    "brand": "Aqua Kenzo Pour Femme",
    "name": "Kenzo Homme Eau de Parfum",
    "gender": "for women",
    "topNotes": [
      "Raspberry Leaf",
      "Mandarin Orange",
      "Lemon"
    ],
    "heartNotes": [
      "Magnolia",
      "Green Notes",
      "Jasmine",
      "Apple",
      "Hedione",
      "Rose"
    ],
    "baseNotes": [
      "Vetiver",
      "Vanilla",
      "Cashmere Wood",
      "Sandalwood",
      "Patchouli"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer",
      "Winter"
    ],
    "time": "Day / Evening",
    "sprays": "4-6",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal",
      "Office"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Citrus",
      "Floral"
    ],
    "accords": [
      "Earthy",
      "Floral",
      "Fresh",
      "Fruity"
    ]
  },
  {
    "id": "582",
    "slug": "archive-fragrance-582",
    "brand": "Archive",
    "name": "Fragrance 582",
    "gender": "for men",
    "topNotes": [
      "Mint",
      "Citruses",
      "Cardamom"
    ],
    "heartNotes": [
      "Sea Notes",
      "Sage",
      "Spices"
    ],
    "baseNotes": [
      "Sandalwood",
      "Vetiver",
      "Cedar",
      "Vanilla"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer"
    ],
    "time": "Day",
    "sprays": "4-6",
    "occasions": [
      "Brunch",
      "Casual Daytime Events",
      "College",
      "Office",
      "Travel"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Aquatic",
      "Aromatic"
    ],
    "accords": [
      "Earthy",
      "Fresh",
      "Herbal",
      "Marine"
    ]
  },
  {
    "id": "583",
    "slug": "kenzo-kenzo",
    "brand": "Kenzo",
    "name": "Kenzo",
    "gender": "for women",
    "topNotes": [
      "Peach",
      "Spices",
      "Orange Blossom",
      "Plum",
      "Mandarin Orange",
      "Bergamot"
    ],
    "heartNotes": [
      "Tuberose",
      "Sandalwood",
      "Coriander",
      "Caraway",
      "Gardenia",
      "Ylang-Ylang",
      "Carnation",
      "Jasmine",
      "Cedar",
      "Orris Root",
      "Rose",
      "Lily-of-the-Valley"
    ],
    "baseNotes": [
      "Oakmoss",
      "Amber",
      "Patchouli"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer",
      "Winter"
    ],
    "time": "Day / Evening",
    "sprays": "4-6",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal",
      "Office"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Citrus",
      "Floral"
    ],
    "accords": [
      "Earthy",
      "Floral",
      "Fresh",
      "Fruity"
    ]
  },
  {
    "id": "584",
    "slug": "kenzo-kenzo-homme-eau-de-parfum",
    "brand": "Kenzo",
    "name": "Kenzo Homme Eau de Parfum",
    "gender": "for men",
    "topNotes": [
      "Sea Notes"
    ],
    "heartNotes": [
      "Leather"
    ],
    "baseNotes": [
      "Patchouli"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer",
      "Winter"
    ],
    "time": "Day / Evening",
    "sprays": "4-6",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal",
      "Office"
    ],
    "featured": false,
    "families": [
      "Aquatic",
      "Leather",
      "Woody"
    ],
    "accords": [
      "Earthy",
      "Leather",
      "Marine",
      "Woody"
    ]
  },
  {
    "id": "585",
    "slug": "kenzo-kenzo-jungle-homme",
    "brand": "Kenzo",
    "name": "Kenzo Jungle Homme",
    "gender": "for men",
    "topNotes": [
      "Cinnamon",
      "Lime",
      "Bergamot",
      "Lemon"
    ],
    "heartNotes": [
      "Nutmeg",
      "Cardamom",
      "Pepper",
      "Mate",
      "Carnation",
      "Amber"
    ],
    "baseNotes": [
      "Guaiac Wood",
      "Sandalwood",
      "Cedar",
      "Benzoin",
      "Vetiver"
    ],
    "seasons": [
      "Spring",
      "Summer",
      "Monsoon"
    ],
    "time": "Day",
    "sprays": "3-4 sprays; 2-3 indoors",
    "occasions": [
      "Travel",
      "Casual Daytime Events",
      "College",
      "Office",
      "Brunch"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Citrus",
      "Floral"
    ],
    "accords": [
      "Earthy",
      "Floral",
      "Fresh",
      "Spicy"
    ]
  },
  {
    "id": "586",
    "slug": "kenzo-kenzo-world-intense",
    "brand": "Kenzo",
    "name": "Kenzo World Intense",
    "gender": "for women",
    "topNotes": [
      "Sea Notes",
      "Mahogany",
      "Sage",
      "Bergamot",
      "Lemon"
    ],
    "heartNotes": [
      "Pine",
      "Juniper Berries",
      "Carnation",
      "Nutmeg",
      "Lily-of-the-Valley",
      "Rose",
      "Caraway",
      "Jasmine",
      "Peach",
      "Orris Root"
    ],
    "baseNotes": [
      "Balsam Fir",
      "Sandalwood",
      "Cedar",
      "Musk",
      "Oakmoss",
      "Vetiver",
      "Amber"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer",
      "Winter"
    ],
    "time": "Day / Evening",
    "sprays": "4-6",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal",
      "Office"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Aquatic",
      "Aromatic"
    ],
    "accords": [
      "Earthy",
      "Floral",
      "Fresh",
      "Fruity"
    ]
  },
  {
    "id": "587",
    "slug": "kenzo-kenzo-pour-homme",
    "brand": "Kenzo",
    "name": "Kenzo pour Homme",
    "gender": "for men",
    "topNotes": [
      "Plum"
    ],
    "heartNotes": [
      "Peony",
      "Jasmine"
    ],
    "baseNotes": [
      "Vanilla"
    ],
    "seasons": [
      "Spring",
      "Ac Venues",
      "Mild Winter",
      "Monsoon Evenings"
    ],
    "time": "Day / Evening",
    "sprays": "2-3 sprays",
    "occasions": [
      "Lunches",
      "Smart Casuals",
      "Dates",
      "Office",
      "Pujas"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Floral",
      "Fruity"
    ],
    "accords": [
      "Floral",
      "Fruity",
      "Sweet",
      "Warm"
    ]
  },
  {
    "id": "588",
    "slug": "kerosene-followed",
    "brand": "Kerosene",
    "name": "Followed",
    "gender": "for women and men",
    "topNotes": [
      "Not separately listed"
    ],
    "heartNotes": [
      "Not separately listed"
    ],
    "baseNotes": [
      "Not separately listed"
    ],
    "seasons": [
      "Spring",
      "Ac Venues",
      "Mild Winter",
      "Monsoon Evenings"
    ],
    "time": "Day / Evening",
    "sprays": "2-3 sprays",
    "occasions": [
      "Lunches",
      "Smart Casuals",
      "Dates",
      "Office",
      "Pujas"
    ],
    "featured": false,
    "families": [
      "Aromatic"
    ],
    "accords": [
      "Fresh"
    ]
  },
  {
    "id": "589",
    "slug": "ajmal-khallab",
    "brand": "Ajmal",
    "name": "Khallab",
    "gender": "for women and men",
    "topNotes": [
      "Not separately listed"
    ],
    "heartNotes": [
      "Not separately listed"
    ],
    "baseNotes": [
      "Not separately listed"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer"
    ],
    "time": "Day",
    "sprays": "3-4",
    "occasions": [
      "Casual",
      "Office"
    ],
    "featured": false,
    "families": [
      "Aromatic"
    ],
    "accords": [
      "Fresh"
    ]
  },
  {
    "id": "590",
    "slug": "by-kilian-a-taste-of-heaven",
    "brand": "By Kilian",
    "name": "A Taste of Heaven",
    "gender": "for men",
    "topNotes": [
      "Not separately listed"
    ],
    "heartNotes": [
      "Not separately listed"
    ],
    "baseNotes": [
      "Not separately listed"
    ],
    "seasons": [
      "Spring",
      "Summer",
      "Monsoon"
    ],
    "time": "Day",
    "sprays": "3-4 sprays; 2-3 indoors",
    "occasions": [
      "Travel",
      "Casual Daytime Events",
      "College",
      "Office",
      "Brunch"
    ],
    "featured": false,
    "families": [
      "Aromatic"
    ],
    "accords": [
      "Fresh"
    ]
  },
  {
    "id": "591",
    "slug": "by-kilian-angels-share",
    "brand": "By Kilian",
    "name": "Angels Share",
    "gender": "for women and men",
    "topNotes": [
      "Cognac"
    ],
    "heartNotes": [
      "Cinnamon",
      "Tonka Bean",
      "Oak"
    ],
    "baseNotes": [
      "Vanilla",
      "Praline",
      "Sandalwood"
    ],
    "seasons": [
      "Winter"
    ],
    "time": "Evening",
    "sprays": "2-3",
    "occasions": [
      "Date Night",
      "Formal"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Gourmand",
      "Spicy"
    ],
    "accords": [
      "Spicy",
      "Sweet",
      "Warm",
      "Woody"
    ]
  },
  {
    "id": "592",
    "slug": "by-kilian-apple-brandy",
    "brand": "By Kilian",
    "name": "Apple Brandy",
    "gender": "for women and men",
    "topNotes": [
      "Not separately listed"
    ],
    "heartNotes": [
      "Not separately listed"
    ],
    "baseNotes": [
      "Not separately listed"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer"
    ],
    "time": "Day",
    "sprays": "3-4",
    "occasions": [
      "Casual",
      "Office"
    ],
    "featured": false,
    "families": [
      "Aromatic"
    ],
    "accords": [
      "Fresh"
    ]
  },
  {
    "id": "593",
    "slug": "by-kilian-apple-brandy-on-the-rocks",
    "brand": "By Kilian",
    "name": "Apple Brandy on the Rocks",
    "gender": "for women and men",
    "topNotes": [
      "Cardamom",
      "Bergamot"
    ],
    "heartNotes": [
      "Apple",
      "Rum",
      "Brandy",
      "Pineapple",
      "Vanilla",
      "Moss"
    ],
    "baseNotes": [
      "Ambroxan",
      "Cedar"
    ],
    "seasons": [
      "Spring",
      "Summer",
      "Winter"
    ],
    "time": "Day / Evening",
    "sprays": "4-6",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal",
      "Office"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Citrus",
      "Fruity"
    ],
    "accords": [
      "Fresh",
      "Fruity",
      "Spicy",
      "Sweet"
    ]
  },
  {
    "id": "594",
    "slug": "archive-back-to-black",
    "brand": "Archive",
    "name": "Back to Black",
    "gender": "for women and men",
    "topNotes": [
      "Not separately listed"
    ],
    "heartNotes": [
      "Not separately listed"
    ],
    "baseNotes": [
      "Not separately listed"
    ],
    "seasons": [
      "Spring",
      "Ac Venues",
      "Mild Winter",
      "Monsoon Evenings"
    ],
    "time": "Day / Evening",
    "sprays": "2-3 sprays",
    "occasions": [
      "Lunches",
      "Smart Casuals",
      "Dates",
      "Office",
      "Pujas"
    ],
    "featured": false,
    "families": [
      "Aromatic"
    ],
    "accords": [
      "Fresh"
    ]
  },
  {
    "id": "595",
    "slug": "by-kilian-boys-are-no-fun",
    "brand": "By Kilian",
    "name": "Boys Are No Fun",
    "gender": "for women and men",
    "topNotes": [
      "Coca-Cola",
      "Lime"
    ],
    "heartNotes": [
      "Cinnamon",
      "Apple",
      "Nutmeg"
    ],
    "baseNotes": [
      "Cedar",
      "Amberwood"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer"
    ],
    "time": "Day",
    "sprays": "4-6",
    "occasions": [
      "Brunch",
      "Casual Daytime Events",
      "College",
      "Office",
      "Travel"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Citrus",
      "Fruity"
    ],
    "accords": [
      "Fresh",
      "Fruity",
      "Spicy",
      "Warm"
    ]
  },
  {
    "id": "596",
    "slug": "when-to-wear-bamboo-harmony",
    "brand": "When To Wear",
    "name": "Bamboo Harmony",
    "gender": "for women and men",
    "topNotes": [
      "Bergamot",
      "Neroli",
      "Bitter Orange"
    ],
    "heartNotes": [
      "Tea",
      "Bamboo",
      "Mimosa",
      "Spices"
    ],
    "baseNotes": [
      "Fig Leaf",
      "Holly",
      "oak moss"
    ],
    "seasons": [
      "Spring",
      "Summer",
      "Monsoon"
    ],
    "time": "Day",
    "sprays": "3-4 sprays; 2-3 indoors Sprays: 3-4 sprays; 2-3 indoors",
    "occasions": [
      "Travel",
      "Casual Daytime Events",
      "College",
      "Office",
      "Brunch"
    ],
    "featured": false,
    "families": [
      "Citrus",
      "Floral",
      "Fruity"
    ],
    "accords": [
      "Floral",
      "Fresh",
      "Fruity",
      "Woody"
    ]
  },
  {
    "id": "597",
    "slug": "by-kilian-beyond-love",
    "brand": "By Kilian",
    "name": "Beyond Love",
    "gender": "for women",
    "topNotes": [
      "Not separately listed"
    ],
    "heartNotes": [
      "Not separately listed"
    ],
    "baseNotes": [
      "Not separately listed"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer"
    ],
    "time": "Day",
    "sprays": "3-4",
    "occasions": [
      "Casual",
      "Office"
    ],
    "featured": false,
    "families": [
      "Aromatic"
    ],
    "accords": [
      "Fresh"
    ]
  },
  {
    "id": "598",
    "slug": "by-kilian-black-phantom",
    "brand": "By Kilian",
    "name": "Black Phantom",
    "gender": "for women and men",
    "topNotes": [
      "Rum"
    ],
    "heartNotes": [
      "Dark Chocolate",
      "Coffee",
      "Almond",
      "Heliotrope"
    ],
    "baseNotes": [
      "Caramel",
      "Sugar Cane",
      "Sandalwood",
      "Vetiver"
    ],
    "seasons": [
      "Spring",
      "Ac Venues",
      "Mild Winter",
      "Monsoon Evenings"
    ],
    "time": "Day / Evening",
    "sprays": "2-3 sprays",
    "occasions": [
      "Lunches",
      "Smart Casuals",
      "Dates",
      "Office",
      "Pujas"
    ],
    "featured": false,
    "families": [
      "Gourmand",
      "Woody"
    ],
    "accords": [
      "Earthy",
      "Sweet",
      "Woody"
    ]
  },
  {
    "id": "599",
    "slug": "by-kilian-dark-lord",
    "brand": "By Kilian",
    "name": "Dark Lord",
    "gender": "for men",
    "topNotes": [
      "Pepper",
      "Sichuan Pepper",
      "Bergamot"
    ],
    "heartNotes": [
      "Rum",
      "Jasmine Sambac",
      "Davana"
    ],
    "baseNotes": [
      "Leather",
      "Vetiver",
      "Cypriol Oil or Nagarmotha",
      "Cedar",
      "Patchouli"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer",
      "Winter"
    ],
    "time": "Day / Evening",
    "sprays": "4-6",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal",
      "Office"
    ],
    "featured": false,
    "families": [
      "Citrus",
      "Floral",
      "Leather"
    ],
    "accords": [
      "Earthy",
      "Floral",
      "Fresh",
      "Leather"
    ]
  },
  {
    "id": "600",
    "slug": "by-kilian-forbidden-games",
    "brand": "By Kilian",
    "name": "Forbidden Games",
    "gender": "for women",
    "topNotes": [
      "Peach",
      "Apple",
      "Plum",
      "Cinnamon"
    ],
    "heartNotes": [
      "Bulgarian Rose",
      "Jasmine",
      "Bourbon Geranium"
    ],
    "baseNotes": [
      "Honey",
      "Vanilla",
      "Opoponax"
    ],
    "seasons": [
      "Spring",
      "Summer",
      "Monsoon"
    ],
    "time": "Day",
    "sprays": "3-4 sprays; 2-3 indoors",
    "occasions": [
      "Travel",
      "Casual Daytime Events",
      "College",
      "Office",
      "Brunch"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Floral",
      "Fruity"
    ],
    "accords": [
      "Floral",
      "Fruity",
      "Spicy",
      "Sweet"
    ]
  },
  {
    "id": "601",
    "slug": "by-kilian-good-girl-gone-bad",
    "brand": "By Kilian",
    "name": "Good Girl Gone Bad",
    "gender": "for women",
    "topNotes": [
      "Osmanthus",
      "Jasmine",
      "May Rose"
    ],
    "heartNotes": [
      "Indian Tuberose",
      "Narcissus"
    ],
    "baseNotes": [
      "Amber",
      "Cedar"
    ],
    "seasons": [
      "Spring",
      "Winter"
    ],
    "time": "Evening",
    "sprays": "2-3",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Floral",
      "Woody"
    ],
    "accords": [
      "Floral",
      "Warm",
      "Woody"
    ]
  },
  {
    "id": "602",
    "slug": "by-kilian-intoxicated",
    "brand": "By Kilian",
    "name": "Intoxicated",
    "gender": "for women and men",
    "topNotes": [
      "Cardamom"
    ],
    "heartNotes": [
      "Nutmeg",
      "Cinnamon"
    ],
    "baseNotes": [
      "Coffee",
      "Vanilla",
      "Caramel",
      "Mocha"
    ],
    "seasons": [
      "Winter"
    ],
    "time": "Evening",
    "sprays": "2-3",
    "occasions": [
      "Date Night",
      "Formal"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Gourmand",
      "Spicy"
    ],
    "accords": [
      "Spicy",
      "Sweet",
      "Warm"
    ]
  },
  {
    "id": "603",
    "slug": "by-kilian-l-heure-verte",
    "brand": "By Kilian",
    "name": "L Heure Verte",
    "gender": "for women and men",
    "topNotes": [
      "Absinthe"
    ],
    "heartNotes": [
      "Licorice",
      "Violet Leaf"
    ],
    "baseNotes": [
      "Patchouli",
      "Vetiver",
      "Woody Notes",
      "Sandalwood"
    ],
    "seasons": [
      "Spring",
      "Ac Venues",
      "Mild Winter",
      "Monsoon Evenings"
    ],
    "time": "Day / Evening",
    "sprays": "2-3 sprays",
    "occasions": [
      "Lunches",
      "Smart Casuals",
      "Dates",
      "Office",
      "Pujas"
    ],
    "featured": false,
    "families": [
      "Floral",
      "Woody"
    ],
    "accords": [
      "Earthy",
      "Floral",
      "Powdery",
      "Woody"
    ]
  },
  {
    "id": "604",
    "slug": "by-kilian-moonlight-in-heaven",
    "brand": "By Kilian",
    "name": "Moonlight in Heaven",
    "gender": "for women and men",
    "topNotes": [
      "Grapefruit",
      "Lemon",
      "Pink Pepper"
    ],
    "heartNotes": [
      "Mango",
      "Coconut",
      "Rice"
    ],
    "baseNotes": [
      "Vetiver",
      "Tonka Bean"
    ],
    "seasons": [
      "Spring",
      "Ac Venues",
      "Mild Winter",
      "Monsoon Evenings"
    ],
    "time": "Day / Evening",
    "sprays": "2-3 sprays",
    "occasions": [
      "Lunches",
      "Smart Casuals",
      "Dates",
      "Office",
      "Pujas"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Citrus",
      "Fruity"
    ],
    "accords": [
      "Earthy",
      "Fresh",
      "Fruity",
      "Spicy"
    ]
  },
  {
    "id": "605",
    "slug": "by-kilian-rolling-in-love",
    "brand": "By Kilian",
    "name": "Rolling in Love",
    "gender": "for women and men",
    "topNotes": [
      "Almond Milk",
      "Ambrette (Musk Mallow)"
    ],
    "heartNotes": [
      "Iris",
      "Freesia"
    ],
    "baseNotes": [
      "Tuberose",
      "Vanilla",
      "Tonka Bean",
      "Musk"
    ],
    "seasons": [
      "Ac Venues",
      "Winter",
      "Monsoon Evenings"
    ],
    "time": "Evening",
    "sprays": "2-3 sprays",
    "occasions": [
      "Celebrations",
      "Receptions",
      "Dinner Dates",
      "Formal Events"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Floral",
      "Gourmand"
    ],
    "accords": [
      "Floral",
      "Musky",
      "Powdery",
      "Sweet"
    ]
  },
  {
    "id": "606",
    "slug": "by-kilian-love-don-t-be-shy",
    "brand": "By Kilian",
    "name": "Love Don t Be Shy",
    "gender": "for women",
    "topNotes": [
      "Neroli",
      "Bergamot",
      "Pink Pepper",
      "Coriander"
    ],
    "heartNotes": [
      "Orange Blossom",
      "Honeysuckle",
      "Jasmine",
      "Iris",
      "Rose"
    ],
    "baseNotes": [
      "Sugar",
      "Vanilla",
      "Caramel",
      "Musk",
      "Civet",
      "Labdanum"
    ],
    "seasons": [
      "Ac Venues",
      "Winter",
      "Cool Nights"
    ],
    "time": "Evening",
    "sprays": "1-2 sprays",
    "occasions": [
      "Receptions",
      "Winter Weddings",
      "Festive Evenings",
      "Formal Dinners"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Citrus",
      "Floral"
    ],
    "accords": [
      "Floral",
      "Fresh",
      "Leather",
      "Musky"
    ]
  },
  {
    "id": "607",
    "slug": "by-kilian-playing-with-the-devil",
    "brand": "By Kilian",
    "name": "Playing With The Devil",
    "gender": "for women",
    "topNotes": [
      "Black Currant",
      "White Peach",
      "Litchi",
      "Blood Orange"
    ],
    "heartNotes": [
      "Pimento",
      "Pepper",
      "Rose",
      "Jasmine"
    ],
    "baseNotes": [
      "Vanila",
      "Sandalwood",
      "Patchouli",
      "Cedar",
      "Benzoin",
      "Tonka Bean"
    ],
    "seasons": [
      "Spring",
      "Summer",
      "Monsoon"
    ],
    "time": "Day",
    "sprays": "3-4 sprays; 2-3 indoors",
    "occasions": [
      "Travel",
      "Casual Daytime Events",
      "College",
      "Office",
      "Brunch"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Citrus",
      "Floral"
    ],
    "accords": [
      "Earthy",
      "Floral",
      "Fresh",
      "Fruity"
    ]
  },
  {
    "id": "608",
    "slug": "by-kilian-rose-oud",
    "brand": "By Kilian",
    "name": "Rose Oud",
    "gender": "for women and men",
    "topNotes": [
      "Bulgarian Rose",
      "Saffron",
      "Cinnamon"
    ],
    "heartNotes": [
      "Tincture of Rose",
      "Litchi"
    ],
    "baseNotes": [
      "Agarwood (Oud)",
      "Guaiac Wood",
      "Cedar",
      "Cypriol Oil or Nagarmotha"
    ],
    "seasons": [
      "Spring",
      "Ac Venues",
      "Mild Winter",
      "Monsoon Evenings"
    ],
    "time": "Day / Evening",
    "sprays": "2-3 sprays",
    "occasions": [
      "Lunches",
      "Smart Casuals",
      "Dates",
      "Office",
      "Pujas"
    ],
    "featured": false,
    "families": [
      "Floral",
      "Spicy",
      "Woody"
    ],
    "accords": [
      "Floral",
      "Spicy",
      "Woody"
    ]
  },
  {
    "id": "609",
    "slug": "by-kilian-smoke-for-the-soul",
    "brand": "By Kilian",
    "name": "Smoke for the Soul",
    "gender": "for women and men",
    "topNotes": [
      "Not separately listed"
    ],
    "heartNotes": [
      "Not separately listed"
    ],
    "baseNotes": [
      "Not separately listed"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer"
    ],
    "time": "Day",
    "sprays": "3-4",
    "occasions": [
      "Casual",
      "Office"
    ],
    "featured": false,
    "families": [
      "Aromatic"
    ],
    "accords": [
      "Fresh"
    ]
  },
  {
    "id": "610",
    "slug": "by-kilian-smoking-hot",
    "brand": "By Kilian",
    "name": "Smoking Hot",
    "gender": "for women and men",
    "topNotes": [
      "Apple",
      "Smoke",
      "Cinnamon"
    ],
    "heartNotes": [
      "Tobacco",
      "Moss"
    ],
    "baseNotes": [
      "Bourbon Vanilla",
      "Orcanox\u2122"
    ],
    "seasons": [
      "Spring",
      "Winter"
    ],
    "time": "Evening",
    "sprays": "2-3",
    "occasions": [
      "Date Night",
      "Formal"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Fruity",
      "Gourmand"
    ],
    "accords": [
      "Fruity",
      "Smoky",
      "Spicy",
      "Sweet"
    ]
  },
  {
    "id": "611",
    "slug": "by-kilian-smoking-hot-611",
    "brand": "By Kilian",
    "name": "Smoking Hot",
    "gender": "for women and men",
    "topNotes": [
      "Apple",
      "Smoke",
      "Cinnamon"
    ],
    "heartNotes": [
      "Tobacco",
      "Moss"
    ],
    "baseNotes": [
      "Bourbon Vanilla",
      "Orcanox\u2122"
    ],
    "seasons": [
      "Spring",
      "Winter"
    ],
    "time": "Evening",
    "sprays": "2-3",
    "occasions": [
      "Date Night",
      "Formal"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Fruity",
      "Gourmand"
    ],
    "accords": [
      "Fruity",
      "Smoky",
      "Spicy",
      "Sweet"
    ]
  },
  {
    "id": "612",
    "slug": "by-kilian-straight-to-heaven",
    "brand": "By Kilian",
    "name": "Straight to Heaven",
    "gender": "for men",
    "topNotes": [
      "Rum",
      "Dried Fruits"
    ],
    "heartNotes": [
      "Patchouli",
      "Nutmeg",
      "Jasmine"
    ],
    "baseNotes": [
      "Virginia Cedar",
      "Musk",
      "Amber",
      "Vanilla"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Winter"
    ],
    "time": "Evening",
    "sprays": "2-3",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Floral",
      "Spicy"
    ],
    "accords": [
      "Earthy",
      "Floral",
      "Musky",
      "Spicy"
    ]
  },
  {
    "id": "613",
    "slug": "by-kilian-kologne-shield-of-protection",
    "brand": "By Kilian",
    "name": "Kologne Shield of protection",
    "gender": "for women and men",
    "topNotes": [
      "Coriander",
      "Aldehydes",
      "Cardamon"
    ],
    "heartNotes": [
      "Rhubarb",
      "Lily- of-the-Valley",
      "Pink Rose"
    ],
    "baseNotes": [
      "Ambroxan",
      "oak moss",
      "Sandalwood"
    ],
    "seasons": [
      "Spring",
      "Winter"
    ],
    "time": "Evening",
    "sprays": "3-4",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal"
    ],
    "featured": false,
    "families": [
      "Floral",
      "Spicy",
      "Woody"
    ],
    "accords": [
      "Floral",
      "Spicy",
      "Woody"
    ]
  },
  {
    "id": "614",
    "slug": "-614",
    "brand": "Archive",
    "name": "Classified Fragrance",
    "gender": "Unisex",
    "topNotes": [
      "Green Mandarin",
      "Bitter Orange",
      "Mint"
    ],
    "heartNotes": [
      "Rosemary",
      "Petitgrain",
      "Neroli"
    ],
    "baseNotes": [
      "Cedar",
      "Green Sap",
      "Cashmere Wood"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer"
    ],
    "time": "Day",
    "sprays": "4-6",
    "occasions": [
      "Brunch",
      "Casual Daytime Events",
      "College",
      "Office",
      "Travel"
    ],
    "featured": false,
    "families": [
      "Aromatic",
      "Citrus",
      "Floral"
    ],
    "accords": [
      "Floral",
      "Fresh",
      "Green",
      "Herbal"
    ]
  },
  {
    "id": "615",
    "slug": "kkw-fragrance-not-stated",
    "brand": "Kkw Fragrance",
    "name": "Not stated",
    "gender": "Unisex",
    "topNotes": [
      "Bergamot",
      "Mandarin orange",
      "Peach nectar",
      "Pink pepper"
    ],
    "heartNotes": [
      "Comorian ylang-ylang",
      "Jasmine sambac absolute",
      "Turkish rose absolute"
    ],
    "baseNotes": [
      "Amber",
      "Australian sandalwood",
      "Haitian vetiver",
      "Musk"
    ],
    "seasons": [
      "Spring",
      "Ac Venues",
      "Mild Winter",
      "Monsoon Evenings"
    ],
    "time": "Day / Evening",
    "sprays": "2-3 sprays Baby Girl for women",
    "occasions": [
      "Lunches",
      "Smart Casuals",
      "Dates",
      "Office",
      "Pujas"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Citrus",
      "Floral"
    ],
    "accords": [
      "Earthy",
      "Floral",
      "Fresh",
      "Fruity"
    ]
  },
  {
    "id": "616",
    "slug": "sprays-2-3-sprays-baby-girl",
    "brand": "Sprays: 2-3 Sprays",
    "name": "Baby Girl",
    "gender": "for women",
    "topNotes": [
      "Fruits",
      "Citruses"
    ],
    "heartNotes": [
      "Peony",
      "Jasmine",
      "Lily-of- the-Valley"
    ],
    "baseNotes": [
      "Vetiver",
      "Musk",
      "Crystal Amber"
    ],
    "seasons": [
      "Spring",
      "Summer",
      "Monsoon"
    ],
    "time": "Day",
    "sprays": "3-4 sprays; 2-3 indoors",
    "occasions": [
      "Travel",
      "Casual Daytime Events",
      "College",
      "Office",
      "Brunch"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Citrus",
      "Floral"
    ],
    "accords": [
      "Earthy",
      "Floral",
      "Fresh",
      "Musky"
    ]
  },
  {
    "id": "617",
    "slug": "kkw-fragrance-kimoji-cherry",
    "brand": "Kkw Fragrance",
    "name": "Kimoji Cherry",
    "gender": "for women",
    "topNotes": [
      "Cherry",
      "Strawberry",
      "Raspberry"
    ],
    "heartNotes": [
      "Cherry Blossom",
      "Gardenia",
      "Vanilla Orchid"
    ],
    "baseNotes": [
      "Whipped Cream",
      "Vanilla",
      "Musk",
      "White Woods"
    ],
    "seasons": [
      "Spring",
      "Winter"
    ],
    "time": "Evening",
    "sprays": "2-3",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Floral",
      "Fruity"
    ],
    "accords": [
      "Floral",
      "Fruity",
      "Musky",
      "Sweet"
    ]
  },
  {
    "id": "618",
    "slug": "kkw-fragrance-ride-or-die",
    "brand": "Kkw Fragrance",
    "name": "Ride or Die",
    "gender": "for women",
    "topNotes": [
      "Blackberry",
      "Plum",
      "Mandarin Orange"
    ],
    "heartNotes": [
      "Night Blooming Jasmine",
      "Raspberry",
      "Gardenia"
    ],
    "baseNotes": [
      "Vanilla",
      "Caramel",
      "Tonka Bean"
    ],
    "seasons": [
      "Spring",
      "Ac Venues",
      "Mild Winter",
      "Monsoon Evenings"
    ],
    "time": "Day / Evening",
    "sprays": "2-3 sprays",
    "occasions": [
      "Lunches",
      "Smart Casuals",
      "Dates",
      "Office",
      "Pujas"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Citrus",
      "Floral"
    ],
    "accords": [
      "Floral",
      "Fresh",
      "Fruity",
      "Sweet"
    ]
  },
  {
    "id": "619",
    "slug": "lacoste-fragrances-amberbomb",
    "brand": "Lacoste Fragrances",
    "name": "Amberbomb",
    "gender": "for women and men",
    "topNotes": [
      "Coffee",
      "Plum",
      "Strawberry",
      "Coconut",
      "Apple"
    ],
    "heartNotes": [
      "Iris",
      "Lily of the Valley",
      "Jasmine",
      "Rose"
    ],
    "baseNotes": [
      "Leather",
      "Cypriol Oil or Nagarmotha",
      "Patchouli",
      "Sandalwood",
      "Cedar",
      "Amber",
      "Vanilla",
      "Tonka Bean",
      "White Musk"
    ],
    "seasons": [
      "Ac Venues",
      "Cool Nights",
      "Winter"
    ],
    "time": "Evening",
    "sprays": "2-3",
    "occasions": [
      "Festive Evenings",
      "Formal Dinners",
      "Receptions",
      "Winter Weddings"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Floral",
      "Fruity"
    ],
    "accords": [
      "Earthy",
      "Floral",
      "Fruity",
      "Leather"
    ]
  },
  {
    "id": "620",
    "slug": "when-to-wear-eau-de-lacoste",
    "brand": "When To Wear",
    "name": "Eau de Lacoste",
    "gender": "for women",
    "topNotes": [
      "Pineapple",
      "Mandarin Orange",
      "Bergamot"
    ],
    "heartNotes": [
      "Pineapple Leaf",
      "Jasmine Sambac",
      "Orange Blossom"
    ],
    "baseNotes": [
      "Vanilla",
      "Sandalwood",
      "Peru Balsam",
      "Vetiver"
    ],
    "seasons": [
      "Spring",
      "Summer",
      "Monsoon"
    ],
    "time": "Day",
    "sprays": "1-2 sprays Sprays: 3-4 sprays; 2-3 indoors",
    "occasions": [
      "Travel",
      "Casual Daytime Events",
      "College",
      "Office",
      "Brunch"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Citrus",
      "Floral"
    ],
    "accords": [
      "Earthy",
      "Floral",
      "Fresh",
      "Fruity"
    ]
  },
  {
    "id": "621",
    "slug": "lacoste-fragrances-limited-edition",
    "brand": "Lacoste Fragrances",
    "name": "Limited Edition",
    "gender": "for men",
    "topNotes": [
      "Grapefruit",
      "Rosemary",
      "Cedar Needles",
      "Cardamom"
    ],
    "heartNotes": [
      "Ylang-Ylang",
      "Tuberose"
    ],
    "baseNotes": [
      "Virginian Cedar",
      "Vetiver",
      "Leather",
      "Suede"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer"
    ],
    "time": "Day",
    "sprays": "4-6",
    "occasions": [
      "Brunch",
      "Casual Daytime Events",
      "College",
      "Office",
      "Travel"
    ],
    "featured": false,
    "families": [
      "Aromatic",
      "Citrus",
      "Floral"
    ],
    "accords": [
      "Earthy",
      "Floral",
      "Fresh",
      "Herbal"
    ]
  },
  {
    "id": "622",
    "slug": "when-to-wear-lacoste-live",
    "brand": "When To Wear",
    "name": "Lacoste Live",
    "gender": "for men",
    "topNotes": [
      "Lime"
    ],
    "heartNotes": [
      "Green Notes",
      "Watery Notes"
    ],
    "baseNotes": [
      "Licorice",
      "Guaiac Wood"
    ],
    "seasons": [
      "Spring",
      "Summer",
      "Monsoon"
    ],
    "time": "Day",
    "sprays": "3-4 sprays; 2-3 indoors Sprays: 3-4 sprays; 2-3 indoors",
    "occasions": [
      "Travel",
      "Casual Daytime Events",
      "College",
      "Office",
      "Brunch"
    ],
    "featured": false,
    "families": [
      "Aquatic",
      "Citrus",
      "Woody"
    ],
    "accords": [
      "Fresh",
      "Green",
      "Marine",
      "Woody"
    ]
  },
  {
    "id": "623",
    "slug": "lalique-encre-indigo",
    "brand": "Lalique",
    "name": "Encre Indigo",
    "gender": "for men",
    "topNotes": [
      "juniper berry",
      "Pink Pepper",
      "Bergamot"
    ],
    "heartNotes": [
      "Black Tea",
      "Saffron",
      "Bay Leaf"
    ],
    "baseNotes": [
      "Madagascar Vetiver",
      "Patchouli",
      "Ambergris"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer",
      "Winter"
    ],
    "time": "Day / Evening",
    "sprays": "4-6",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal",
      "Office"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Citrus",
      "Fruity"
    ],
    "accords": [
      "Earthy",
      "Fresh",
      "Fruity",
      "Spicy"
    ]
  },
  {
    "id": "624",
    "slug": "lalique-encre-noire-a-l-extreme",
    "brand": "Lalique",
    "name": "Encre Noire A L Extreme",
    "gender": "for men",
    "topNotes": [
      "Cypress",
      "Elemi resin",
      "Bergamot"
    ],
    "heartNotes": [
      "Haitian Vetiver",
      "Vetiver",
      "Incense",
      "Orris"
    ],
    "baseNotes": [
      "Benzoin",
      "Sandalwood",
      "Patchouli"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer"
    ],
    "time": "Day",
    "sprays": "4-6",
    "occasions": [
      "Brunch",
      "Casual Daytime Events",
      "College",
      "Office",
      "Travel"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Citrus",
      "Woody"
    ],
    "accords": [
      "Balsamic",
      "Earthy",
      "Fresh",
      "Warm"
    ]
  },
  {
    "id": "625",
    "slug": "lalique-ombre-noire",
    "brand": "Lalique",
    "name": "Ombre Noire",
    "gender": "for men",
    "topNotes": [
      "Fig Leaf",
      "Mint",
      "Bergamot"
    ],
    "heartNotes": [
      "Tobacco Leaf",
      "Cinnamon",
      "Papyrus"
    ],
    "baseNotes": [
      "Cognac",
      "Myrhh",
      "Olibanum",
      "Cedar",
      "Tonka Bean"
    ],
    "seasons": [
      "Spring",
      "Ac Venues",
      "Mild Winter",
      "Monsoon Evenings"
    ],
    "time": "Day / Evening",
    "sprays": "2-3 sprays",
    "occasions": [
      "Lunches",
      "Smart Casuals",
      "Dates",
      "Office",
      "Pujas"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Aromatic",
      "Citrus"
    ],
    "accords": [
      "Fresh",
      "Fruity",
      "Herbal",
      "Spicy"
    ]
  },
  {
    "id": "626",
    "slug": "lancome-la-nuit-tresor",
    "brand": "Lancome",
    "name": "La Nuit Tresor",
    "gender": "for women",
    "topNotes": [
      "Pear",
      "Tangerine",
      "Bergamot"
    ],
    "heartNotes": [
      "Strawberry",
      "Vanilla Orchid",
      "Black Rose",
      "Passionfruit"
    ],
    "baseNotes": [
      "Praline",
      "Caramel",
      "Litchi",
      "Vanilla",
      "Patchouli",
      "Incense",
      "Coffee",
      "Licorice",
      "Coumarin",
      "Papyrus"
    ],
    "seasons": [
      "Ac Venues",
      "Winter",
      "Cool Nights"
    ],
    "time": "Evening",
    "sprays": "1-2 sprays",
    "occasions": [
      "Receptions",
      "Winter Weddings",
      "Festive Evenings",
      "Formal Dinners"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Citrus",
      "Floral"
    ],
    "accords": [
      "Balsamic",
      "Earthy",
      "Floral",
      "Fresh"
    ]
  },
  {
    "id": "627",
    "slug": "lancome-la-vie-est-belle",
    "brand": "Lancome",
    "name": "La Vie Est Belle",
    "gender": "for women",
    "topNotes": [
      "Black Currant",
      "Pear"
    ],
    "heartNotes": [
      "Iris",
      "Jasmine",
      "Orange Blossom"
    ],
    "baseNotes": [
      "Praline",
      "Vanilla",
      "Patchouli",
      "Tonka Bean"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer",
      "Winter"
    ],
    "time": "Day / Evening",
    "sprays": "4-6",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal",
      "Office"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Citrus",
      "Floral"
    ],
    "accords": [
      "Earthy",
      "Floral",
      "Fresh",
      "Fruity"
    ]
  },
  {
    "id": "628",
    "slug": "lancome-la-vie-est-belle-628",
    "brand": "Lancome",
    "name": "La Vie Est Belle",
    "gender": "for women",
    "topNotes": [
      "Black Currant",
      "Pear"
    ],
    "heartNotes": [
      "Iris",
      "Jasmine",
      "Orange Blossom"
    ],
    "baseNotes": [
      "Praline",
      "Vanilla",
      "Patchouli",
      "Tonka Bean"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer",
      "Winter"
    ],
    "time": "Day / Evening",
    "sprays": "4-6",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal",
      "Office"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Citrus",
      "Floral"
    ],
    "accords": [
      "Earthy",
      "Floral",
      "Fresh",
      "Fruity"
    ]
  },
  {
    "id": "629",
    "slug": "lancome-la-vie-est-belle-629",
    "brand": "Lancome",
    "name": "La Vie Est Belle",
    "gender": "for women",
    "topNotes": [
      "Black Currant",
      "Pear"
    ],
    "heartNotes": [
      "Iris",
      "Jasmine",
      "Orange Blossom"
    ],
    "baseNotes": [
      "Praline",
      "Vanilla",
      "Patchouli",
      "Tonka Bean"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer",
      "Winter"
    ],
    "time": "Day / Evening",
    "sprays": "4-6",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal",
      "Office"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Citrus",
      "Floral"
    ],
    "accords": [
      "Earthy",
      "Floral",
      "Fresh",
      "Fruity"
    ]
  },
  {
    "id": "630",
    "slug": "lancome-l-autre-oud",
    "brand": "Lancome",
    "name": "L Autre Oud",
    "gender": "for women and men",
    "topNotes": [
      "Not separately listed"
    ],
    "heartNotes": [
      "Not separately listed"
    ],
    "baseNotes": [
      "Not separately listed"
    ],
    "seasons": [
      "Ac Venues",
      "Winter",
      "Monsoon Evenings"
    ],
    "time": "Evening",
    "sprays": "2-3 sprays",
    "occasions": [
      "Celebrations",
      "Receptions",
      "Dinner Dates",
      "Formal Events"
    ],
    "featured": false,
    "families": [
      "Aromatic"
    ],
    "accords": [
      "Fresh"
    ]
  },
  {
    "id": "631",
    "slug": "lancome-oud-bouquet",
    "brand": "Lancome",
    "name": "Oud Bouquet",
    "gender": "for women and men",
    "topNotes": [
      "Not separately listed"
    ],
    "heartNotes": [
      "Not separately listed"
    ],
    "baseNotes": [
      "Not separately listed"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer"
    ],
    "time": "Day",
    "sprays": "2-3",
    "occasions": [
      "Casual",
      "Office"
    ],
    "featured": false,
    "families": [
      "Aromatic"
    ],
    "accords": [
      "Fresh"
    ]
  },
  {
    "id": "632",
    "slug": "lancome-santal-kardamon",
    "brand": "Lancome",
    "name": "Santal Kardamon",
    "gender": "for women and men",
    "topNotes": [
      "Pink Pepper",
      "Mandarin Orange",
      "Bergamot"
    ],
    "heartNotes": [
      "Cardamom",
      "Liquor",
      "Orange Blossom",
      "Neroli",
      "Pepper"
    ],
    "baseNotes": [
      "Sandalwood",
      "Vanilla",
      "Leather",
      "Amberwood",
      "Cashmeran",
      "Birch",
      "Patchouli"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer",
      "Winter"
    ],
    "time": "Day / Evening",
    "sprays": "4-6",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal",
      "Office"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Citrus",
      "Floral"
    ],
    "accords": [
      "Earthy",
      "Floral",
      "Fresh",
      "Leather"
    ]
  },
  {
    "id": "633",
    "slug": "lancome-tresor",
    "brand": "Lancome",
    "name": "Tresor",
    "gender": "for women",
    "topNotes": [
      "Peach",
      "Rose",
      "Apricot Blossom",
      "Lilac",
      "Pineapple",
      "Lily-of- the-Valley",
      "Bergamot"
    ],
    "heartNotes": [
      "Rose",
      "Iris",
      "Heliotrope",
      "Jasmine"
    ],
    "baseNotes": [
      "Peach",
      "Apricot",
      "Vanilla",
      "Sandalwood",
      "Amber",
      "Musk"
    ],
    "seasons": [
      "Spring",
      "Ac Venues",
      "Mild Winter",
      "Monsoon Evenings"
    ],
    "time": "Day / Evening",
    "sprays": "2-3 sprays",
    "occasions": [
      "Lunches",
      "Smart Casuals",
      "Dates",
      "Office",
      "Pujas"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Citrus",
      "Floral"
    ],
    "accords": [
      "Floral",
      "Fresh",
      "Fruity",
      "Musky"
    ]
  },
  {
    "id": "634",
    "slug": "lancome-tresor-midnight-rose",
    "brand": "Lancome",
    "name": "Tresor Midnight Rose",
    "gender": "for women",
    "topNotes": [
      "Raspberry",
      "Rose"
    ],
    "heartNotes": [
      "Cassis",
      "Pink Pepper",
      "Peony",
      "Jasmine"
    ],
    "baseNotes": [
      "Vanille",
      "Musk",
      "Virginia Cedar"
    ],
    "seasons": [
      "Spring",
      "Summer",
      "Monsoon"
    ],
    "time": "Day",
    "sprays": "3-4 sprays; 2-3 indoors",
    "occasions": [
      "Travel",
      "Casual Daytime Events",
      "College",
      "Office",
      "Brunch"
    ],
    "featured": false,
    "families": [
      "Floral",
      "Fruity",
      "Spicy"
    ],
    "accords": [
      "Floral",
      "Fruity",
      "Musky",
      "Spicy"
    ]
  },
  {
    "id": "635",
    "slug": "lanvin-modern-princess",
    "brand": "Lanvin",
    "name": "Modern Princess",
    "gender": "for women",
    "topNotes": [
      "Red Apple",
      "Red Currant"
    ],
    "heartNotes": [
      "Freesia",
      "Jasmine"
    ],
    "baseNotes": [
      "Vanilla Orchid",
      "White Musk",
      "White Woods"
    ],
    "seasons": [
      "Spring",
      "Winter"
    ],
    "time": "Evening",
    "sprays": "2-3",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Floral",
      "Fruity"
    ],
    "accords": [
      "Floral",
      "Fruity",
      "Musky",
      "Sweet"
    ]
  },
  {
    "id": "636",
    "slug": "l-artisan-parfumeur-dzing",
    "brand": "L Artisan Parfumeur",
    "name": "Dzing",
    "gender": "for women and men",
    "topNotes": [
      "Not separately listed"
    ],
    "heartNotes": [
      "Not separately listed"
    ],
    "baseNotes": [
      "Not separately listed"
    ],
    "seasons": [
      "Spring",
      "Ac Venues",
      "Mild Winter",
      "Monsoon Evenings"
    ],
    "time": "Day / Evening",
    "sprays": "2-3 sprays",
    "occasions": [
      "Lunches",
      "Smart Casuals",
      "Dates",
      "Office",
      "Pujas"
    ],
    "featured": false,
    "families": [
      "Aromatic"
    ],
    "accords": [
      "Fresh"
    ]
  },
  {
    "id": "637",
    "slug": "l-artisan-parfumeur-mure-et-musc",
    "brand": "L Artisan Parfumeur",
    "name": "Mure et Musc",
    "gender": "for women and men",
    "topNotes": [
      "Basil",
      "Amalfi Lemon",
      "Mandarin Orange",
      "Orange"
    ],
    "heartNotes": [
      "Blackberry",
      "Red Berries"
    ],
    "baseNotes": [
      "Musk",
      "Oakmoss"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer"
    ],
    "time": "Day",
    "sprays": "4-6",
    "occasions": [
      "Casual",
      "Office"
    ],
    "featured": false,
    "families": [
      "Aromatic",
      "Citrus",
      "Fruity"
    ],
    "accords": [
      "Fresh",
      "Fruity",
      "Herbal",
      "Musky"
    ]
  },
  {
    "id": "638",
    "slug": "l-artisan-parfumeur-safran-troublant",
    "brand": "L Artisan Parfumeur",
    "name": "Safran Troublant",
    "gender": "for women and men",
    "topNotes": [
      "Not separately listed"
    ],
    "heartNotes": [
      "Not separately listed"
    ],
    "baseNotes": [
      "Not separately listed"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer"
    ],
    "time": "Day",
    "sprays": "3-4",
    "occasions": [
      "Brunch",
      "Casual Daytime Events",
      "College",
      "Office",
      "Travel"
    ],
    "featured": false,
    "families": [
      "Aromatic"
    ],
    "accords": [
      "Fresh"
    ]
  },
  {
    "id": "639",
    "slug": "l-artisan-parfumeur-tea-for-two",
    "brand": "L Artisan Parfumeur",
    "name": "Tea for Two",
    "gender": "for women and men",
    "topNotes": [
      "Tea",
      "Star Anise",
      "Bergamot"
    ],
    "heartNotes": [
      "Cinnamon",
      "Spices",
      "Ginger",
      "Gingerbread"
    ],
    "baseNotes": [
      "Tobacco",
      "Honey",
      "Leather",
      "Vanilla"
    ],
    "seasons": [
      "Spring",
      "Summer",
      "Winter"
    ],
    "time": "Day / Evening",
    "sprays": "4-6",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal",
      "Office"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Citrus",
      "Gourmand"
    ],
    "accords": [
      "Fresh",
      "Leather",
      "Spicy",
      "Sweet"
    ]
  },
  {
    "id": "640",
    "slug": "l-artisan-parfumeur-timbuktu",
    "brand": "L Artisan Parfumeur",
    "name": "Timbuktu",
    "gender": "for women and men",
    "topNotes": [
      "Mango",
      "Pink Pepper",
      "Cardamom"
    ],
    "heartNotes": [
      "Incense",
      "Papyrus",
      "Karo Karounde"
    ],
    "baseNotes": [
      "Vetiver",
      "Myrhh",
      "Patchouli",
      "Benzoin"
    ],
    "seasons": [
      "Spring",
      "Ac Venues",
      "Mild Winter",
      "Monsoon Evenings"
    ],
    "time": "Day / Evening",
    "sprays": "2-3 sprays",
    "occasions": [
      "Lunches",
      "Smart Casuals",
      "Dates",
      "Office",
      "Pujas"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Fruity",
      "Spicy"
    ],
    "accords": [
      "Balsamic",
      "Earthy",
      "Fruity",
      "Spicy"
    ]
  },
  {
    "id": "641",
    "slug": "lattafa-perfumes-bade-e-al-oud-amethyst",
    "brand": "Lattafa Perfumes",
    "name": "Bade e Al Oud Amethyst",
    "gender": "for women and men",
    "topNotes": [
      "Red Apple",
      "Pomegranate",
      "Spicy Notes"
    ],
    "heartNotes": [
      "Leather",
      "Iris",
      "Saffron",
      "pink tulip",
      "Tobacco"
    ],
    "baseNotes": [
      "Nougat",
      "Sugar",
      "White Honey",
      "Pistachio",
      "Rose",
      "Musk"
    ],
    "seasons": [
      "Spring"
    ],
    "time": "Day / Evening",
    "sprays": "2-3",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal",
      "Office"
    ],
    "featured": false,
    "families": [
      "Floral",
      "Fruity",
      "Gourmand"
    ],
    "accords": [
      "Floral",
      "Fruity",
      "Leather",
      "Musky"
    ]
  },
  {
    "id": "642",
    "slug": "-642",
    "brand": "Archive",
    "name": "Classified Fragrance",
    "gender": "Unisex",
    "topNotes": [
      "Pink Pepper",
      "Bergamot"
    ],
    "heartNotes": [
      "Turkish Rose",
      "Bulgarian Rose",
      "Jasmine"
    ],
    "baseNotes": [
      "Agarwood (Oud)",
      "Amber",
      "Vanilla"
    ],
    "seasons": [
      "Ac Venues",
      "Winter",
      "Monsoon Evenings"
    ],
    "time": "Evening",
    "sprays": "2-3 sprays Top: Pink Pepper and Bergamot \u00e2\u20ac\u00a2 Heart: Turkish Rose, Bulgarian Rose and Jasmine \u00e2\u20ac\u00a2 Base: Agarwood (Oud), Amber and Vanilla",
    "occasions": [
      "Celebrations",
      "Receptions",
      "Dinner Dates",
      "Formal Events"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Citrus",
      "Floral"
    ],
    "accords": [
      "Floral",
      "Fresh",
      "Spicy",
      "Sweet"
    ]
  },
  {
    "id": "643",
    "slug": "lattafa-perfumes-bade-e-al-oud-oud-for-glory",
    "brand": "Lattafa Perfumes",
    "name": "Bade e Al Oud Oud for Glory",
    "gender": "for women and men",
    "topNotes": [
      "Saffron",
      "Nutmeg",
      "Lavender"
    ],
    "heartNotes": [
      "Agarwood (Oud)",
      "Patchouli"
    ],
    "baseNotes": [
      "Agarwood (Oud)",
      "Patchouli",
      "Musk"
    ],
    "seasons": [
      "Monsoon",
      "Winter"
    ],
    "time": "Evening",
    "sprays": "2-3",
    "occasions": [
      "Date Night",
      "Formal"
    ],
    "featured": false,
    "families": [
      "Aromatic",
      "Spicy",
      "Woody"
    ],
    "accords": [
      "Earthy",
      "Herbal",
      "Musky",
      "Spicy"
    ]
  },
  {
    "id": "644",
    "slug": "archive-eclaire",
    "brand": "Archive",
    "name": "Eclaire",
    "gender": "for women",
    "topNotes": [
      "Caramel",
      "Sugar",
      "Milk"
    ],
    "heartNotes": [
      "Honey",
      "White Flowers"
    ],
    "baseNotes": [
      "Vanilla",
      "Praline",
      "Musk"
    ],
    "seasons": [
      "Spring",
      "Ac Venues",
      "Mild Winter",
      "Monsoon Evenings"
    ],
    "time": "Day / Evening",
    "sprays": "2-3 sprays",
    "occasions": [
      "Lunches",
      "Smart Casuals",
      "Dates",
      "Office",
      "Pujas"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Gourmand"
    ],
    "accords": [
      "Musky",
      "Sweet",
      "Warm"
    ]
  },
  {
    "id": "645",
    "slug": "lattafa-perfumes-ishq-al-shuyukh-gold",
    "brand": "Lattafa Perfumes",
    "name": "Ishq Al Shuyukh Gold",
    "gender": "for women and men",
    "topNotes": [
      "Caramel",
      "Saffron"
    ],
    "heartNotes": [
      "Suede",
      "Leather",
      "Tonka Bean"
    ],
    "baseNotes": [
      "Vanilla",
      "Amber",
      "Musk"
    ],
    "seasons": [
      "Ac Venues",
      "Winter",
      "Cool Nights"
    ],
    "time": "Evening",
    "sprays": "1-2 sprays",
    "occasions": [
      "Receptions",
      "Winter Weddings",
      "Festive Evenings",
      "Formal Dinners"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Gourmand",
      "Leather"
    ],
    "accords": [
      "Leather",
      "Musky",
      "Spicy",
      "Sweet"
    ]
  },
  {
    "id": "646",
    "slug": "le-labo-another-13",
    "brand": "Le Labo",
    "name": "Another 13",
    "gender": "for women and men",
    "topNotes": [
      "Pear",
      "Apple",
      "Citruses"
    ],
    "heartNotes": [
      "Ambrette (Musk Mallow)",
      "Amyl Salicylate",
      "Moss",
      "Jasmine"
    ],
    "baseNotes": [
      "Iso E Super",
      "Cetalox",
      "Ambrettolide",
      "Helvetolide"
    ],
    "seasons": [
      "Spring",
      "Ac Venues",
      "Mild Winter",
      "Monsoon Evenings"
    ],
    "time": "Day / Evening",
    "sprays": "2-3 sprays",
    "occasions": [
      "Lunches",
      "Smart Casuals",
      "Dates",
      "Office",
      "Pujas"
    ],
    "featured": false,
    "families": [
      "Citrus",
      "Floral",
      "Fruity"
    ],
    "accords": [
      "Floral",
      "Fresh",
      "Fruity",
      "Musky"
    ]
  },
  {
    "id": "647",
    "slug": "le-labo-bergamote-22",
    "brand": "Le Labo",
    "name": "Bergamote 22",
    "gender": "for women and men",
    "topNotes": [
      "Cinnamon",
      "Nutmeg",
      "Bergamot"
    ],
    "heartNotes": [
      "Dates",
      "Praline",
      "Tuberose",
      "Mahonial"
    ],
    "baseNotes": [
      "Vanilla",
      "Tonka Bean",
      "Amberwood",
      "Myrrh",
      "Benzoin",
      "Akigalawood"
    ],
    "seasons": [
      "Spring",
      "Summer",
      "Winter"
    ],
    "time": "Day / Evening",
    "sprays": "4-6",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal",
      "Office"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Citrus",
      "Floral"
    ],
    "accords": [
      "Balsamic",
      "Floral",
      "Fresh",
      "Spicy"
    ]
  },
  {
    "id": "648",
    "slug": "lattafa-perfumes-khamrah",
    "brand": "Lattafa Perfumes",
    "name": "Khamrah",
    "gender": "for women and men",
    "topNotes": [
      "Not separately listed"
    ],
    "heartNotes": [
      "Not separately listed"
    ],
    "baseNotes": [
      "Not separately listed"
    ],
    "seasons": [
      "Spring",
      "Ac Venues",
      "Mild Winter",
      "Monsoon Evenings"
    ],
    "time": "Day / Evening",
    "sprays": "2-3 sprays",
    "occasions": [
      "Lunches",
      "Smart Casuals",
      "Dates",
      "Office",
      "Pujas"
    ],
    "featured": false,
    "families": [
      "Aromatic"
    ],
    "accords": [
      "Fresh"
    ]
  },
  {
    "id": "649",
    "slug": "le-labo-baie-19",
    "brand": "Le Labo",
    "name": "Baie 19",
    "gender": "for women and men",
    "topNotes": [
      "Not separately listed"
    ],
    "heartNotes": [
      "Not separately listed"
    ],
    "baseNotes": [
      "Not separately listed"
    ],
    "seasons": [
      "Spring",
      "Summer",
      "Monsoon"
    ],
    "time": "Day",
    "sprays": "3-4 sprays; 2-3 indoors",
    "occasions": [
      "Travel",
      "Casual Daytime Events",
      "College",
      "Office",
      "Brunch"
    ],
    "featured": false,
    "families": [
      "Aromatic"
    ],
    "accords": [
      "Fresh"
    ]
  },
  {
    "id": "650",
    "slug": "le-labo-iris-39",
    "brand": "Le Labo",
    "name": "Iris 39",
    "gender": "for women and men",
    "topNotes": [
      "Not separately listed"
    ],
    "heartNotes": [
      "Not separately listed"
    ],
    "baseNotes": [
      "Not separately listed"
    ],
    "seasons": [
      "Spring",
      "Summer",
      "Monsoon"
    ],
    "time": "Day",
    "sprays": "3-4 sprays; 2-3 indoors",
    "occasions": [
      "Travel",
      "Casual Daytime Events",
      "College",
      "Office",
      "Brunch"
    ],
    "featured": false,
    "families": [
      "Aromatic"
    ],
    "accords": [
      "Fresh"
    ]
  },
  {
    "id": "651",
    "slug": "le-labo-lavande-31",
    "brand": "Le Labo",
    "name": "Lavande 31",
    "gender": "for women and men",
    "topNotes": [
      "Neroli",
      "Bergamot"
    ],
    "heartNotes": [
      "Lavender"
    ],
    "baseNotes": [
      "Musk",
      "Tonka",
      "Amber"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer",
      "Winter"
    ],
    "time": "Day / Evening",
    "sprays": "4-6",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal",
      "Office"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Aromatic",
      "Citrus"
    ],
    "accords": [
      "Fresh",
      "Herbal",
      "Musky",
      "Sweet"
    ]
  },
  {
    "id": "652",
    "slug": "le-labo-lys-41",
    "brand": "Le Labo",
    "name": "Lys 41",
    "gender": "for women",
    "topNotes": [
      "Not separately listed"
    ],
    "heartNotes": [
      "Not separately listed"
    ],
    "baseNotes": [
      "Not separately listed"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer"
    ],
    "time": "Day",
    "sprays": "3-4",
    "occasions": [
      "Casual",
      "Office"
    ],
    "featured": false,
    "families": [
      "Aromatic"
    ],
    "accords": [
      "Fresh"
    ]
  },
  {
    "id": "653",
    "slug": "le-labo-oud-27",
    "brand": "Le Labo",
    "name": "Oud 27",
    "gender": "for women and men",
    "topNotes": [
      "Not separately listed"
    ],
    "heartNotes": [
      "Not separately listed"
    ],
    "baseNotes": [
      "Not separately listed"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer"
    ],
    "time": "Day",
    "sprays": "2-3",
    "occasions": [
      "Casual",
      "Office"
    ],
    "featured": false,
    "families": [
      "Aromatic"
    ],
    "accords": [
      "Fresh"
    ]
  },
  {
    "id": "654",
    "slug": "le-labo-patchouli-24",
    "brand": "Le Labo",
    "name": "Patchouli 24",
    "gender": "for women and men",
    "topNotes": [
      "Patchouli"
    ],
    "heartNotes": [
      "Birch",
      "Styrax"
    ],
    "baseNotes": [
      "Vanilla"
    ],
    "seasons": [
      "Monsoon",
      "Winter"
    ],
    "time": "Evening",
    "sprays": "2-3",
    "occasions": [
      "Date Night",
      "Formal"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Woody"
    ],
    "accords": [
      "Earthy",
      "Sweet",
      "Warm",
      "Woody"
    ]
  },
  {
    "id": "655",
    "slug": "le-labo-rose-31",
    "brand": "Le Labo",
    "name": "Rose 31",
    "gender": "for women and men",
    "topNotes": [
      "Rose",
      "Cumin"
    ],
    "heartNotes": [
      "Rose",
      "Vetiver",
      "Cedar"
    ],
    "baseNotes": [
      "Musk",
      "Guaiac Wood",
      "Agarwood (Oud)",
      "Olibanum",
      "Labdanum"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Winter"
    ],
    "time": "Evening",
    "sprays": "2-3",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Floral",
      "Spicy"
    ],
    "accords": [
      "Earthy",
      "Floral",
      "Musky",
      "Spicy"
    ]
  },
  {
    "id": "656",
    "slug": "le-labo-santal-33",
    "brand": "Le Labo",
    "name": "Santal 33",
    "gender": "for women and men",
    "topNotes": [
      "Not separately listed"
    ],
    "heartNotes": [
      "Not separately listed"
    ],
    "baseNotes": [
      "Not separately listed"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer"
    ],
    "time": "Day",
    "sprays": "3-4",
    "occasions": [
      "Casual",
      "Office"
    ],
    "featured": false,
    "families": [
      "Aromatic"
    ],
    "accords": [
      "Fresh"
    ]
  },
  {
    "id": "657",
    "slug": "le-labo-santal-33-657",
    "brand": "Le Labo",
    "name": "Santal 33",
    "gender": "for women and men",
    "topNotes": [
      "Not separately listed"
    ],
    "heartNotes": [
      "Not separately listed"
    ],
    "baseNotes": [
      "Not separately listed"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer"
    ],
    "time": "Day",
    "sprays": "3-4",
    "occasions": [
      "Casual",
      "Office"
    ],
    "featured": false,
    "families": [
      "Aromatic"
    ],
    "accords": [
      "Fresh"
    ]
  },
  {
    "id": "658",
    "slug": "le-labo-tabac-28-miami",
    "brand": "Le Labo",
    "name": "Tabac 28 Miami",
    "gender": "for women and men",
    "topNotes": [
      "Not separately listed"
    ],
    "heartNotes": [
      "Not separately listed"
    ],
    "baseNotes": [
      "Not separately listed"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer"
    ],
    "time": "Day",
    "sprays": "3-4",
    "occasions": [
      "Casual",
      "Office"
    ],
    "featured": false,
    "families": [
      "Aromatic"
    ],
    "accords": [
      "Fresh"
    ]
  },
  {
    "id": "659",
    "slug": "le-labo-the-matcha-26",
    "brand": "Le Labo",
    "name": "The Matcha 26",
    "gender": "for women and men",
    "topNotes": [
      "Not separately listed"
    ],
    "heartNotes": [
      "Not separately listed"
    ],
    "baseNotes": [
      "Not separately listed"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer"
    ],
    "time": "Day",
    "sprays": "3-4",
    "occasions": [
      "Casual",
      "Office"
    ],
    "featured": false,
    "families": [
      "Aromatic"
    ],
    "accords": [
      "Fresh"
    ]
  },
  {
    "id": "660",
    "slug": "le-labo-the-noir-29",
    "brand": "Le Labo",
    "name": "The Noir 29",
    "gender": "for women and men",
    "topNotes": [
      "Fig",
      "Bay Leaf",
      "Bergamot"
    ],
    "heartNotes": [
      "Cedar",
      "Vetiver",
      "Musk"
    ],
    "baseNotes": [
      "Tobacco",
      "Hay"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer"
    ],
    "time": "Day",
    "sprays": "4-6",
    "occasions": [
      "Brunch",
      "Casual Daytime Events",
      "College",
      "Office",
      "Travel"
    ],
    "featured": false,
    "families": [
      "Citrus",
      "Fruity",
      "Gourmand"
    ],
    "accords": [
      "Earthy",
      "Fresh",
      "Fruity",
      "Musky"
    ]
  },
  {
    "id": "661",
    "slug": "le-labo-tonka-25",
    "brand": "Le Labo",
    "name": "Tonka 25",
    "gender": "for women and men",
    "topNotes": [
      "Not separately listed"
    ],
    "heartNotes": [
      "Not separately listed"
    ],
    "baseNotes": [
      "Not separately listed"
    ],
    "seasons": [
      "Spring",
      "Ac Venues",
      "Mild Winter",
      "Monsoon Evenings"
    ],
    "time": "Day / Evening",
    "sprays": "2-3 sprays",
    "occasions": [
      "Lunches",
      "Smart Casuals",
      "Dates",
      "Office",
      "Pujas"
    ],
    "featured": false,
    "families": [
      "Aromatic"
    ],
    "accords": [
      "Fresh"
    ]
  },
  {
    "id": "662",
    "slug": "le-labo-ylang-49",
    "brand": "Le Labo",
    "name": "Ylang 49",
    "gender": "for women",
    "topNotes": [
      "Not separately listed"
    ],
    "heartNotes": [
      "Not separately listed"
    ],
    "baseNotes": [
      "Not separately listed"
    ],
    "seasons": [
      "Spring",
      "Ac Venues",
      "Mild Winter",
      "Monsoon Evenings"
    ],
    "time": "Day / Evening",
    "sprays": "2-3 sprays PAGE 67 / 118",
    "occasions": [
      "Lunches",
      "Smart Casuals",
      "Dates",
      "Office",
      "Pujas"
    ],
    "featured": false,
    "families": [
      "Aromatic"
    ],
    "accords": [
      "Fresh"
    ]
  },
  {
    "id": "663",
    "slug": "le-labo-tubereuse-40-new-york",
    "brand": "Le Labo",
    "name": "Tubereuse 40 New York",
    "gender": "for women and men",
    "topNotes": [
      "African Orange Flower",
      "Bergamot",
      "Tangerine",
      "Petitgrain"
    ],
    "heartNotes": [
      "Tuberose",
      "Jasmine",
      "Mimosa",
      "Sandalwood",
      "Virginia Cedar",
      "Rose"
    ],
    "baseNotes": [
      "Ambrette (Musk Mallow)",
      "oak moss"
    ],
    "seasons": [
      "Spring",
      "Summer",
      "Monsoon"
    ],
    "time": "Day",
    "sprays": "3-4 sprays; 2-3 indoors",
    "occasions": [
      "Travel",
      "Casual Daytime Events",
      "College",
      "Office",
      "Brunch"
    ],
    "featured": false,
    "families": [
      "Citrus",
      "Floral",
      "Woody"
    ],
    "accords": [
      "Floral",
      "Fresh",
      "Musky",
      "Woody"
    ]
  },
  {
    "id": "664",
    "slug": "les-liquides-imaginaires-blanche-bete",
    "brand": "Les Liquides Imaginaires",
    "name": "Blanche Bete",
    "gender": "for women and men",
    "topNotes": [
      "Milk",
      "Ambrette (Musk Mallow)",
      "Mystikal"
    ],
    "heartNotes": [
      "Tuberose",
      "Jasmine",
      "Mahonial",
      "Incense"
    ],
    "baseNotes": [
      "Vanilla",
      "Musk",
      "Tonka Bean",
      "Cacao"
    ],
    "seasons": [
      "Ac Venues",
      "Winter",
      "Cool Nights"
    ],
    "time": "Evening",
    "sprays": "1-2 sprays",
    "occasions": [
      "Receptions",
      "Winter Weddings",
      "Festive Evenings",
      "Formal Dinners"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Floral",
      "Gourmand"
    ],
    "accords": [
      "Balsamic",
      "Floral",
      "Musky",
      "Sweet"
    ]
  },
  {
    "id": "665",
    "slug": "l-occitane-en-provence-roses-et-reines",
    "brand": "L Occitane En Provence",
    "name": "Roses et Reines",
    "gender": "for women",
    "topNotes": [
      "Bergamot",
      "Cassia"
    ],
    "heartNotes": [
      "Bulgarian Rose",
      "Grasse Rose",
      "Turkish Rose",
      "Moroccan Rose",
      "Raspberry",
      "Blackberry"
    ],
    "baseNotes": [
      "Musk",
      "Heliotrope",
      "White Cedar Extract"
    ],
    "seasons": [
      "Spring",
      "Summer"
    ],
    "time": "Day",
    "sprays": "4-6",
    "occasions": [
      "Casual",
      "Office"
    ],
    "featured": false,
    "families": [
      "Citrus",
      "Floral",
      "Fruity"
    ],
    "accords": [
      "Floral",
      "Fresh",
      "Fruity",
      "Green"
    ]
  },
  {
    "id": "666",
    "slug": "l-occitane-en-provence-verveine",
    "brand": "L Occitane En Provence",
    "name": "Verveine",
    "gender": "for women and men",
    "topNotes": [
      "Lemon",
      "Orange"
    ],
    "heartNotes": [
      "Lemon Verbena",
      "Petitgrain"
    ],
    "baseNotes": [
      "Geranium",
      "Rose"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer"
    ],
    "time": "Day",
    "sprays": "4-6",
    "occasions": [
      "Brunch",
      "Casual Daytime Events",
      "College",
      "Office",
      "Travel"
    ],
    "featured": false,
    "families": [
      "Citrus",
      "Floral"
    ],
    "accords": [
      "Floral",
      "Fresh"
    ]
  },
  {
    "id": "667",
    "slug": "loewe-solo-loewe-cedro",
    "brand": "Loewe",
    "name": "Solo Loewe Cedro",
    "gender": "for men",
    "topNotes": [
      "Mandarin Orange",
      "Pink Pepper"
    ],
    "heartNotes": [
      "Lavender",
      "Nutmeg"
    ],
    "baseNotes": [
      "Cedar",
      "Benzoin"
    ],
    "seasons": [
      "Spring",
      "Summer",
      "Monsoon"
    ],
    "time": "Day",
    "sprays": "3-4 sprays; 2-3 indoors",
    "occasions": [
      "Travel",
      "Casual Daytime Events",
      "College",
      "Office",
      "Brunch"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Aromatic",
      "Citrus"
    ],
    "accords": [
      "Fresh",
      "Herbal",
      "Spicy",
      "Warm"
    ]
  },
  {
    "id": "668",
    "slug": "loewe-esencia-pour-homme",
    "brand": "Loewe",
    "name": "Esencia pour Homme",
    "gender": "for men",
    "topNotes": [
      "Lavender",
      "Green Notes",
      "Juniper Berries",
      "Tarragon",
      "Bergamot",
      "Galbanum",
      "Lemon",
      "Artemisia",
      "Petitgrain"
    ],
    "heartNotes": [
      "Pine Tree Needles",
      "Basil",
      "Clary Sage",
      "Nutmeg",
      "Geranium",
      "Rose",
      "Neroli",
      "Black Currant",
      "Jasmine",
      "Lily-of-the-Valley"
    ],
    "baseNotes": [
      "Fir"
    ],
    "seasons": [
      "Spring",
      "Ac Venues",
      "Mild Winter",
      "Monsoon Evenings"
    ],
    "time": "Day / Evening",
    "sprays": "2-3 sprays",
    "occasions": [
      "Lunches",
      "Smart Casuals",
      "Dates",
      "Office",
      "Pujas"
    ],
    "featured": false,
    "families": [
      "Aromatic",
      "Citrus",
      "Floral"
    ],
    "accords": [
      "Floral",
      "Fresh",
      "Fruity",
      "Green"
    ]
  },
  {
    "id": "669",
    "slug": "loewe-loewe-7",
    "brand": "Loewe",
    "name": "Loewe 7",
    "gender": "for men",
    "topNotes": [
      "Pepper",
      "Apple"
    ],
    "heartNotes": [
      "Incense",
      "Neroli",
      "Rose",
      "Lily- of-the-Valley"
    ],
    "baseNotes": [
      "Cedar",
      "Vetiver",
      "Musk"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer",
      "Winter"
    ],
    "time": "Day / Evening",
    "sprays": "4-6",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal",
      "Office"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Citrus",
      "Floral"
    ],
    "accords": [
      "Balsamic",
      "Earthy",
      "Floral",
      "Fresh"
    ]
  },
  {
    "id": "670",
    "slug": "loewe-solo-loewe",
    "brand": "Loewe",
    "name": "Solo Loewe",
    "gender": "for men",
    "topNotes": [
      "Mandarin Orange",
      "Guava",
      "Lavender",
      "Lemon",
      "Bergamot",
      "Cashmirwood",
      "Rosemary",
      "Patchouli",
      "Thyme",
      "Costus"
    ],
    "heartNotes": [
      "Pink Pepper",
      "Tangerine",
      "Cinnamon",
      "Aldehydes",
      "Nutmeg",
      "Mint",
      "Caraway",
      "Anise"
    ],
    "baseNotes": [
      "Woodsy Notes",
      "Amber",
      "Vanilla",
      "Musk"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer",
      "Winter"
    ],
    "time": "Day / Evening",
    "sprays": "4-6",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal",
      "Office"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Aromatic",
      "Citrus"
    ],
    "accords": [
      "Earthy",
      "Floral",
      "Fresh",
      "Herbal"
    ]
  },
  {
    "id": "671",
    "slug": "lolita-lempicka-lolita-lempicka",
    "brand": "Lolita Lempicka",
    "name": "Lolita Lempicka",
    "gender": "for women",
    "topNotes": [
      "Star Anise",
      "Violet",
      "Ivy"
    ],
    "heartNotes": [
      "Licorice",
      "Cherry",
      "Iris",
      "Orris Root",
      "Amaryllis"
    ],
    "baseNotes": [
      "Vanilla",
      "Praline",
      "Tonka Bean",
      "White Musk",
      "Vetiver"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Winter"
    ],
    "time": "Evening",
    "sprays": "2-3",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Floral",
      "Fruity"
    ],
    "accords": [
      "Earthy",
      "Floral",
      "Fruity",
      "Musky"
    ]
  },
  {
    "id": "672",
    "slug": "lolita-lempicka-lolita-lempicka-672",
    "brand": "Lolita Lempicka",
    "name": "Lolita Lempicka",
    "gender": "for women",
    "topNotes": [
      "Star Anise",
      "Violet",
      "Ivy"
    ],
    "heartNotes": [
      "Licorice",
      "Cherry",
      "Iris",
      "Orris Root",
      "Amaryllis"
    ],
    "baseNotes": [
      "Vanilla",
      "Praline",
      "Tonka Bean",
      "White Musk",
      "Vetiver"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Winter"
    ],
    "time": "Evening",
    "sprays": "2-3",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Floral",
      "Fruity"
    ],
    "accords": [
      "Earthy",
      "Floral",
      "Fruity",
      "Musky"
    ]
  },
  {
    "id": "673",
    "slug": "tauer-perfumes-lonesome-rider",
    "brand": "Tauer Perfumes",
    "name": "Lonesome Rider",
    "gender": "for women and men",
    "topNotes": [
      "Not separately listed"
    ],
    "heartNotes": [
      "Not separately listed"
    ],
    "baseNotes": [
      "Not separately listed"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer"
    ],
    "time": "Day",
    "sprays": "3-4",
    "occasions": [
      "Casual",
      "Office"
    ],
    "featured": false,
    "families": [
      "Aromatic"
    ],
    "accords": [
      "Fresh"
    ]
  },
  {
    "id": "674",
    "slug": "louis-vuitton-afternoon-swim",
    "brand": "Louis Vuitton",
    "name": "Afternoon Swim",
    "gender": "for women and men",
    "topNotes": [
      "Not separately listed"
    ],
    "heartNotes": [
      "Not separately listed"
    ],
    "baseNotes": [
      "Not separately listed"
    ],
    "seasons": [
      "Ac Venues",
      "Winter",
      "Monsoon Evenings"
    ],
    "time": "Evening",
    "sprays": "2-3 sprays",
    "occasions": [
      "Celebrations",
      "Receptions",
      "Dinner Dates",
      "Formal Events"
    ],
    "featured": false,
    "families": [
      "Aromatic"
    ],
    "accords": [
      "Fresh"
    ]
  },
  {
    "id": "675",
    "slug": "louis-vuitton-apogee",
    "brand": "Louis Vuitton",
    "name": "Apogee",
    "gender": "for women",
    "topNotes": [
      "Tangerine",
      "Orange"
    ],
    "heartNotes": [
      "Lily-of-the-Valley",
      "Magnolia",
      "Rose",
      "Jasmine"
    ],
    "baseNotes": [
      "White Musk",
      "Guaiac Wood",
      "Sandalwood"
    ],
    "seasons": [
      "Spring",
      "Ac Venues",
      "Mild Winter",
      "Monsoon Evenings"
    ],
    "time": "Day / Evening",
    "sprays": "2-3 sprays",
    "occasions": [
      "Lunches",
      "Smart Casuals",
      "Dates",
      "Office",
      "Pujas"
    ],
    "featured": false,
    "families": [
      "Citrus",
      "Floral",
      "Woody"
    ],
    "accords": [
      "Floral",
      "Fresh",
      "Musky",
      "Woody"
    ]
  },
  {
    "id": "676",
    "slug": "louis-vuitton-attrape-reves",
    "brand": "Louis Vuitton",
    "name": "Attrape Reves",
    "gender": "for women",
    "topNotes": [
      "Litchi",
      "Ginger",
      "Bergamot"
    ],
    "heartNotes": [
      "Peony",
      "Turkish Rose",
      "Cacao"
    ],
    "baseNotes": [
      "Patchouli"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer"
    ],
    "time": "Day",
    "sprays": "4-6",
    "occasions": [
      "Brunch",
      "Casual Daytime Events",
      "College",
      "Office",
      "Travel"
    ],
    "featured": false,
    "families": [
      "Citrus",
      "Floral",
      "Gourmand"
    ],
    "accords": [
      "Earthy",
      "Floral",
      "Fresh",
      "Spicy"
    ]
  },
  {
    "id": "677",
    "slug": "louis-vuitton-au-hasard",
    "brand": "Louis Vuitton",
    "name": "Au Hasard",
    "gender": "for men",
    "topNotes": [
      "Aldehydes",
      "Bergamot",
      "Lemon"
    ],
    "heartNotes": [
      "Pear",
      "Cardamom",
      "Neroli",
      "Green Notes",
      "Freesia"
    ],
    "baseNotes": [
      "Musk",
      "Leather",
      "Sandalwood",
      "Cashmeran",
      "Ambrette (Musk Mallow)"
    ],
    "seasons": [
      "Spring",
      "Summer"
    ],
    "time": "Day",
    "sprays": "4-6",
    "occasions": [
      "Casual",
      "Office"
    ],
    "featured": false,
    "families": [
      "Citrus",
      "Floral",
      "Fruity"
    ],
    "accords": [
      "Floral",
      "Fresh",
      "Fruity",
      "Green"
    ]
  },
  {
    "id": "678",
    "slug": "louis-vuitton-cactus-garden",
    "brand": "Louis Vuitton",
    "name": "Cactus Garden",
    "gender": "for women and men",
    "topNotes": [
      "Not separately listed"
    ],
    "heartNotes": [
      "Not separately listed"
    ],
    "baseNotes": [
      "Not separately listed"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer"
    ],
    "time": "Day",
    "sprays": "3-4",
    "occasions": [
      "Brunch",
      "Casual Daytime Events",
      "College",
      "Office",
      "Travel"
    ],
    "featured": false,
    "families": [
      "Aromatic"
    ],
    "accords": [
      "Fresh"
    ]
  },
  {
    "id": "679",
    "slug": "louis-vuitton-california-dream",
    "brand": "Louis Vuitton",
    "name": "California Dream",
    "gender": "for women and men",
    "topNotes": [
      "Not separately listed"
    ],
    "heartNotes": [
      "Not separately listed"
    ],
    "baseNotes": [
      "Not separately listed"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer"
    ],
    "time": "Day",
    "sprays": "3-4",
    "occasions": [
      "Casual",
      "Office"
    ],
    "featured": false,
    "families": [
      "Aromatic"
    ],
    "accords": [
      "Fresh"
    ]
  },
  {
    "id": "680",
    "slug": "louis-vuitton-city-of-stars",
    "brand": "Louis Vuitton",
    "name": "City Of Stars",
    "gender": "for women and men",
    "topNotes": [
      "Lime",
      "Blood Orange",
      "Blood Mandarin",
      "Bergamot",
      "Lemon"
    ],
    "heartNotes": [
      "Tiare Flower"
    ],
    "baseNotes": [
      "Powdery Notes",
      "Musk",
      "Sandalwood"
    ],
    "seasons": [
      "Spring",
      "Ac Venues",
      "Mild Winter",
      "Monsoon Evenings"
    ],
    "time": "Day / Evening",
    "sprays": "2-3 sprays",
    "occasions": [
      "Lunches",
      "Smart Casuals",
      "Dates",
      "Office",
      "Pujas"
    ],
    "featured": false,
    "families": [
      "Citrus",
      "Woody"
    ],
    "accords": [
      "Fresh",
      "Musky",
      "Powdery",
      "Woody"
    ]
  },
  {
    "id": "681",
    "slug": "louis-vuitton-coeur-battant",
    "brand": "Louis Vuitton",
    "name": "Coeur Battant",
    "gender": "for women",
    "topNotes": [
      "Pear",
      "Cascalone",
      "Ambrette (Musk Mallow)"
    ],
    "heartNotes": [
      "Egyptian Jasmine",
      "Narcissus",
      "Ylang-Ylang"
    ],
    "baseNotes": [
      "Patchouli",
      "Moss"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer"
    ],
    "time": "Day",
    "sprays": "4-6",
    "occasions": [
      "Casual",
      "Formal",
      "Office"
    ],
    "featured": false,
    "families": [
      "Aquatic",
      "Floral",
      "Fruity"
    ],
    "accords": [
      "Earthy",
      "Floral",
      "Fruity",
      "Marine"
    ]
  },
  {
    "id": "682",
    "slug": "louis-vuitton-cosmic-cloud",
    "brand": "Louis Vuitton",
    "name": "Cosmic Cloud",
    "gender": "for women and men",
    "topNotes": [
      "Not separately listed"
    ],
    "heartNotes": [
      "Not separately listed"
    ],
    "baseNotes": [
      "Not separately listed"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer"
    ],
    "time": "Day",
    "sprays": "3-4",
    "occasions": [
      "Brunch",
      "Casual Daytime Events",
      "College",
      "Office",
      "Travel"
    ],
    "featured": false,
    "families": [
      "Aromatic"
    ],
    "accords": [
      "Fresh"
    ]
  },
  {
    "id": "683",
    "slug": "louis-vuitton-dancing-blossom",
    "brand": "Louis Vuitton",
    "name": "Dancing Blossom",
    "gender": "for women and men",
    "topNotes": [
      "Not separately listed"
    ],
    "heartNotes": [
      "Not separately listed"
    ],
    "baseNotes": [
      "Not separately listed"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer"
    ],
    "time": "Day",
    "sprays": "3-4",
    "occasions": [
      "Casual",
      "Office"
    ],
    "featured": false,
    "families": [
      "Aromatic"
    ],
    "accords": [
      "Fresh"
    ]
  },
  {
    "id": "684",
    "slug": "louis-vuitton-fleur-du-desert",
    "brand": "Louis Vuitton",
    "name": "Fleur du Desert",
    "gender": "for women and men",
    "topNotes": [
      "Honey",
      "Cinnamon"
    ],
    "heartNotes": [
      "Jasmine",
      "Rose",
      "Orange Blossom"
    ],
    "baseNotes": [
      "Agarwood (Oud)",
      "Ambroxan",
      "Ambrette (Musk Mallow)"
    ],
    "seasons": [
      "Spring",
      "Summer",
      "Winter"
    ],
    "time": "Day / Evening",
    "sprays": "4-6",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal",
      "Office"
    ],
    "featured": false,
    "families": [
      "Citrus",
      "Floral",
      "Gourmand"
    ],
    "accords": [
      "Floral",
      "Fresh",
      "Musky",
      "Spicy"
    ]
  },
  {
    "id": "685",
    "slug": "louis-vuitton-heures-d-absence",
    "brand": "Louis Vuitton",
    "name": "Heures d Absence",
    "gender": "for women",
    "topNotes": [
      "Jasmine Sambac",
      "May Rose"
    ],
    "heartNotes": [
      "Mimosa",
      "Pitosporum",
      "Raspberry"
    ],
    "baseNotes": [
      "Musk",
      "Vanilla",
      "Sandalwood"
    ],
    "seasons": [
      "Spring",
      "Ac Venues",
      "Mild Winter",
      "Monsoon Evenings"
    ],
    "time": "Day / Evening",
    "sprays": "2-3 sprays",
    "occasions": [
      "Lunches",
      "Smart Casuals",
      "Dates",
      "Office",
      "Pujas"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Floral",
      "Fruity"
    ],
    "accords": [
      "Floral",
      "Fruity",
      "Musky",
      "Sweet"
    ]
  },
  {
    "id": "686",
    "slug": "louis-vuitton-les-sables-roses",
    "brand": "Louis Vuitton",
    "name": "Les Sables Roses",
    "gender": "for women and men",
    "topNotes": [
      "Not separately listed"
    ],
    "heartNotes": [
      "Not separately listed"
    ],
    "baseNotes": [
      "Not separately listed"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer"
    ],
    "time": "Day",
    "sprays": "3-4",
    "occasions": [
      "Casual",
      "Office"
    ],
    "featured": false,
    "families": [
      "Aromatic"
    ],
    "accords": [
      "Fresh"
    ]
  },
  {
    "id": "687",
    "slug": "louis-vuitton-imagination",
    "brand": "Louis Vuitton",
    "name": "Imagination",
    "gender": "for men",
    "topNotes": [
      "Citron",
      "Calabrian bergamot",
      "Sicilian Orange"
    ],
    "heartNotes": [
      "Tunisian Neroli",
      "Nigerian Ginger",
      "Ceylon Cinnamon"
    ],
    "baseNotes": [
      "Chinese Black Tea",
      "Ambroxan",
      "Guaiac Wood",
      "Olibanum"
    ],
    "seasons": [
      "Spring",
      "Summer",
      "Monsoon"
    ],
    "time": "Day",
    "sprays": "3-4 sprays; 2-3 indoors",
    "occasions": [
      "Travel",
      "Casual Daytime Events",
      "College",
      "Office",
      "Brunch"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Citrus",
      "Spicy"
    ],
    "accords": [
      "Fresh",
      "Spicy",
      "Warm",
      "Woody"
    ]
  },
  {
    "id": "688",
    "slug": "louis-vuitton-l-immensite",
    "brand": "Louis Vuitton",
    "name": "L Immensite",
    "gender": "for men",
    "topNotes": [
      "Grapefruit",
      "Ginger",
      "Bergamot"
    ],
    "heartNotes": [
      "Water Notes",
      "Sage",
      "Rosemary",
      "Geranium"
    ],
    "baseNotes": [
      "Ambroxan",
      "Amber",
      "Labdanum"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer",
      "Winter"
    ],
    "time": "Day / Evening",
    "sprays": "4-6",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal",
      "Office"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Aquatic",
      "Aromatic"
    ],
    "accords": [
      "Floral",
      "Fresh",
      "Herbal",
      "Marine"
    ]
  },
  {
    "id": "689",
    "slug": "louis-vuitton-lvers",
    "brand": "Louis Vuitton",
    "name": "LVERS",
    "gender": "for women and men",
    "topNotes": [
      "Galbanum",
      "Bergamot"
    ],
    "heartNotes": [
      "Ginger",
      "Solar Notes"
    ],
    "baseNotes": [
      "Sandalwood",
      "Cedarwood"
    ],
    "seasons": [
      "Spring",
      "Summer",
      "Monsoon"
    ],
    "time": "Day",
    "sprays": "3-4 sprays; 2-3 indoors",
    "occasions": [
      "Travel",
      "Casual Daytime Events",
      "College",
      "Office",
      "Brunch"
    ],
    "featured": false,
    "families": [
      "Citrus",
      "Spicy",
      "Woody"
    ],
    "accords": [
      "Fresh",
      "Green",
      "Spicy",
      "Woody"
    ]
  },
  {
    "id": "690",
    "slug": "louis-vuitton-matiere-noire",
    "brand": "Louis Vuitton",
    "name": "Matiere Noire",
    "gender": "for women",
    "topNotes": [
      "Blackcurrant Syrup",
      "Watery Notes"
    ],
    "heartNotes": [
      "Rose",
      "Cyclamen",
      "Narcissus",
      "Jasmine Sambac"
    ],
    "baseNotes": [
      "Agarwood (Oud)",
      "Patchouli",
      "Incense",
      "Benzoin"
    ],
    "seasons": [
      "Spring",
      "Ac Venues",
      "Mild Winter",
      "Monsoon Evenings"
    ],
    "time": "Day / Evening",
    "sprays": "2-3 sprays",
    "occasions": [
      "Lunches",
      "Smart Casuals",
      "Dates",
      "Office",
      "Pujas"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Aquatic",
      "Floral"
    ],
    "accords": [
      "Balsamic",
      "Earthy",
      "Floral",
      "Fruity"
    ]
  },
  {
    "id": "691",
    "slug": "louis-vuitton-meteore",
    "brand": "Louis Vuitton",
    "name": "Meteore",
    "gender": "for men",
    "topNotes": [
      "Mandarin Orange",
      "Sicilian Orange",
      "Calabrian bergamot"
    ],
    "heartNotes": [
      "Pink Pepper",
      "Pepper",
      "Tunisian Neroli",
      "Indonesian Nutmeg",
      "Guatemalan Cardamom"
    ],
    "baseNotes": [
      "Java vetiver oil"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer",
      "Winter"
    ],
    "time": "Day / Evening",
    "sprays": "4-6",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal",
      "Office"
    ],
    "featured": false,
    "families": [
      "Citrus",
      "Spicy",
      "Woody"
    ],
    "accords": [
      "Earthy",
      "Fresh",
      "Spicy",
      "Woody"
    ]
  },
  {
    "id": "692",
    "slug": "louis-vuitton-myriad",
    "brand": "Louis Vuitton",
    "name": "Myriad",
    "gender": "for women and men",
    "topNotes": [
      "Saffron"
    ],
    "heartNotes": [
      "Bulgarian Rose",
      "Grasse Rose"
    ],
    "baseNotes": [
      "Assam Oud",
      "Ambrette",
      "White Musk",
      "Cacao"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer"
    ],
    "time": "Day",
    "sprays": "3-4",
    "occasions": [
      "Brunch",
      "Casual Daytime Events",
      "College",
      "Office",
      "Travel"
    ],
    "featured": false,
    "families": [
      "Floral",
      "Gourmand",
      "Spicy"
    ],
    "accords": [
      "Floral",
      "Green",
      "Musky",
      "Spicy"
    ]
  },
  {
    "id": "693",
    "slug": "louis-vuitton-nouveau-monde",
    "brand": "Louis Vuitton",
    "name": "Nouveau Monde",
    "gender": "for men",
    "topNotes": [
      "Not separately listed"
    ],
    "heartNotes": [
      "Not separately listed"
    ],
    "baseNotes": [
      "Not separately listed"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer"
    ],
    "time": "Day",
    "sprays": "3-4",
    "occasions": [
      "Casual",
      "Office"
    ],
    "featured": false,
    "families": [
      "Aromatic"
    ],
    "accords": [
      "Fresh"
    ]
  },
  {
    "id": "694",
    "slug": "louis-vuitton-nuit-de-feu",
    "brand": "Louis Vuitton",
    "name": "Nuit de Feu",
    "gender": "for women and men",
    "topNotes": [
      "Not separately listed"
    ],
    "heartNotes": [
      "Not separately listed"
    ],
    "baseNotes": [
      "Not separately listed"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer"
    ],
    "time": "Day",
    "sprays": "3-4",
    "occasions": [
      "Casual",
      "Office"
    ],
    "featured": false,
    "families": [
      "Aromatic"
    ],
    "accords": [
      "Fresh"
    ]
  },
  {
    "id": "695",
    "slug": "louis-vuitton-ombre-nomade",
    "brand": "Louis Vuitton",
    "name": "Ombre Nomade",
    "gender": "for women and men",
    "topNotes": [
      "Not separately listed"
    ],
    "heartNotes": [
      "Not separately listed"
    ],
    "baseNotes": [
      "Not separately listed"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer"
    ],
    "time": "Day",
    "sprays": "3-4",
    "occasions": [
      "Casual",
      "Office"
    ],
    "featured": false,
    "families": [
      "Aromatic"
    ],
    "accords": [
      "Fresh"
    ]
  },
  {
    "id": "696",
    "slug": "louis-vuitton-on-the-beach",
    "brand": "Louis Vuitton",
    "name": "On The Beach",
    "gender": "for women and men",
    "topNotes": [
      "Yuzu",
      "Neroli"
    ],
    "heartNotes": [
      "Rosemary",
      "Thyme",
      "Sand",
      "Cloves",
      "Pink Pepper"
    ],
    "baseNotes": [
      "Cypress"
    ],
    "seasons": [
      "Ac Venues",
      "Cool Nights",
      "Winter"
    ],
    "time": "Evening",
    "sprays": "4-6",
    "occasions": [
      "Festive Evenings",
      "Formal Dinners",
      "Receptions",
      "Winter Weddings"
    ],
    "featured": false,
    "families": [
      "Aromatic",
      "Citrus",
      "Floral"
    ],
    "accords": [
      "Floral",
      "Fresh",
      "Herbal",
      "Spicy"
    ]
  },
  {
    "id": "697",
    "slug": "louis-vuitton-orage",
    "brand": "Louis Vuitton",
    "name": "Orage",
    "gender": "for men",
    "topNotes": [
      "Bergamot",
      "Grapefruit"
    ],
    "heartNotes": [
      "Iris",
      "Pepper",
      "Hedione"
    ],
    "baseNotes": [
      "Patchouli",
      "Java vetiver oil",
      "Iso E Super",
      "White Musk"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer"
    ],
    "time": "Day",
    "sprays": "4-6",
    "occasions": [
      "Casual",
      "Formal",
      "Office"
    ],
    "featured": false,
    "families": [
      "Citrus",
      "Floral",
      "Spicy"
    ],
    "accords": [
      "Earthy",
      "Floral",
      "Fresh",
      "Musky"
    ]
  },
  {
    "id": "698",
    "slug": "louis-vuitton-pacific-chill",
    "brand": "Louis Vuitton",
    "name": "Pacific Chill",
    "gender": "for women and men",
    "topNotes": [
      "Citron",
      "Orange",
      "Mint",
      "Lemon",
      "Black Currant",
      "Coriander"
    ],
    "heartNotes": [
      "Apricot",
      "Basil",
      "Carrot Seeds",
      "May Rose"
    ],
    "baseNotes": [
      "Fig",
      "Dates",
      "Ambrette"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer"
    ],
    "time": "Day",
    "sprays": "4-6",
    "occasions": [
      "Brunch",
      "Casual Daytime Events",
      "College",
      "Office",
      "Travel"
    ],
    "featured": false,
    "families": [
      "Aromatic",
      "Citrus",
      "Floral"
    ],
    "accords": [
      "Floral",
      "Fresh",
      "Fruity",
      "Herbal"
    ]
  },
  {
    "id": "699",
    "slug": "louis-vuitton-stellar-times",
    "brand": "Louis Vuitton",
    "name": "Stellar Times",
    "gender": "for women and men",
    "topNotes": [
      "Not separately listed"
    ],
    "heartNotes": [
      "Not separately listed"
    ],
    "baseNotes": [
      "Not separately listed"
    ],
    "seasons": [
      "Spring",
      "Ac Venues",
      "Mild Winter",
      "Monsoon Evenings"
    ],
    "time": "Day / Evening",
    "sprays": "2-3 sprays",
    "occasions": [
      "Lunches",
      "Smart Casuals",
      "Dates",
      "Office",
      "Pujas"
    ],
    "featured": false,
    "families": [
      "Aromatic"
    ],
    "accords": [
      "Fresh"
    ]
  },
  {
    "id": "700",
    "slug": "louis-vuitton-sur-la-route",
    "brand": "Louis Vuitton",
    "name": "Sur la Route",
    "gender": "for men",
    "topNotes": [
      "Citruses",
      "Calabrian bergamot",
      "Lemon",
      "Pink Pepper"
    ],
    "heartNotes": [
      "Grass",
      "Nutmeg",
      "Hedione",
      "Cardamom"
    ],
    "baseNotes": [
      "Leather",
      "Cedar",
      "Patchouli",
      "Peru Balsam",
      "Iso E Super"
    ],
    "seasons": [
      "Spring",
      "Summer",
      "Monsoon"
    ],
    "time": "Day",
    "sprays": "3-4 sprays; 2-3 indoors VIDEH / MASTER PERFUME CATALOG",
    "occasions": [
      "Travel",
      "Casual Daytime Events",
      "College",
      "Office",
      "Brunch"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Citrus",
      "Leather"
    ],
    "accords": [
      "Earthy",
      "Fresh",
      "Green",
      "Leather"
    ]
  },
  {
    "id": "701",
    "slug": "louis-vuitton-symphony",
    "brand": "Louis Vuitton",
    "name": "Symphony",
    "gender": "for women and men",
    "topNotes": [
      "Not separately listed"
    ],
    "heartNotes": [
      "Not separately listed"
    ],
    "baseNotes": [
      "Not separately listed"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer"
    ],
    "time": "Day",
    "sprays": "3-4",
    "occasions": [
      "Casual",
      "Office"
    ],
    "featured": false,
    "families": [
      "Aromatic"
    ],
    "accords": [
      "Fresh"
    ]
  },
  {
    "id": "702",
    "slug": "lubin-l-eau-neuve",
    "brand": "Lubin",
    "name": "L Eau Neuve",
    "gender": "for women and men",
    "topNotes": [
      "Lemon",
      "Orange",
      "Bergamot",
      "Lavender"
    ],
    "heartNotes": [
      "Clary Sage",
      "Marjoram",
      "Coriander",
      "Caraway",
      "Jasmine",
      "Rose"
    ],
    "baseNotes": [
      "Oakmoss",
      "Cedar",
      "Sandalwood",
      "Patchouli",
      "White Musk"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer"
    ],
    "time": "Day",
    "sprays": "4-6",
    "occasions": [
      "Brunch",
      "Casual Daytime Events",
      "College",
      "Office",
      "Travel"
    ],
    "featured": false,
    "families": [
      "Aromatic",
      "Citrus",
      "Floral"
    ],
    "accords": [
      "Earthy",
      "Floral",
      "Fresh",
      "Herbal"
    ]
  },
  {
    "id": "703",
    "slug": "maisonalhambra-not-reliably-matched",
    "brand": "Maisonalhambra",
    "name": "Not reliably matched",
    "gender": "Unisex",
    "topNotes": [
      "Reliable exact-page data not found in indexed sources"
    ],
    "heartNotes": [
      "Reliable exact-page data not found in indexed sources"
    ],
    "baseNotes": [
      "Reliable exact-page data not found in indexed sources"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer"
    ],
    "time": "Day",
    "sprays": "3-4",
    "occasions": [
      "Casual",
      "Office"
    ],
    "featured": false,
    "families": [
      "Aromatic"
    ],
    "accords": [
      "Fresh"
    ]
  },
  {
    "id": "704",
    "slug": "maison-crivelli-hibiscus-mahajad",
    "brand": "Maison Crivelli",
    "name": "Hibiscus Mahajad",
    "gender": "for women and men",
    "topNotes": [
      "Not separately listed"
    ],
    "heartNotes": [
      "Not separately listed"
    ],
    "baseNotes": [
      "Not separately listed"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer"
    ],
    "time": "Day",
    "sprays": "3-4",
    "occasions": [
      "Casual",
      "Office"
    ],
    "featured": false,
    "families": [
      "Aromatic"
    ],
    "accords": [
      "Fresh"
    ]
  },
  {
    "id": "705",
    "slug": "maison-crivelli-oud-maracuja",
    "brand": "Maison Crivelli",
    "name": "Oud Maracuja",
    "gender": "for women and men",
    "topNotes": [
      "Passionfruit",
      "Fruity Notes",
      "Turkish Rose",
      "Saffron"
    ],
    "heartNotes": [
      "Agarwood (Oud)",
      "Indonesian Patchouli Leaf",
      "Benzoin"
    ],
    "baseNotes": [
      "Leather",
      "Akigalawood",
      "Amber",
      "Labdanum",
      "Vanilla"
    ],
    "seasons": [
      "Ac Venues",
      "Winter",
      "Cool Nights"
    ],
    "time": "Evening",
    "sprays": "1-2 sprays",
    "occasions": [
      "Receptions",
      "Winter Weddings",
      "Festive Evenings",
      "Formal Dinners"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Floral",
      "Fruity"
    ],
    "accords": [
      "Earthy",
      "Floral",
      "Fruity",
      "Leather"
    ]
  },
  {
    "id": "706",
    "slug": "maison-martin-margiela-by-the-fireplace",
    "brand": "Maison Martin Margiela",
    "name": "By the Fireplace",
    "gender": "for women and men",
    "topNotes": [
      "Soap",
      "Bergamot"
    ],
    "heartNotes": [
      "Lavender",
      "Jasmine",
      "Rose"
    ],
    "baseNotes": [
      "Coconut",
      "White Musk",
      "Patchouli"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer"
    ],
    "time": "Day",
    "sprays": "4-6",
    "occasions": [
      "Casual",
      "Formal",
      "Office"
    ],
    "featured": false,
    "families": [
      "Aromatic",
      "Citrus",
      "Floral"
    ],
    "accords": [
      "Earthy",
      "Floral",
      "Fresh",
      "Fruity"
    ]
  },
  {
    "id": "707",
    "slug": "maison-martin-margiela-bubble-bath",
    "brand": "Maison Martin Margiela",
    "name": "Bubble Bath",
    "gender": "for women and men",
    "topNotes": [
      "Cloves",
      "Pink Pepper",
      "Orange Blossom"
    ],
    "heartNotes": [
      "Chestnut",
      "Guaiac Wood",
      "Juniper"
    ],
    "baseNotes": [
      "Vanilla",
      "Peru Balsam",
      "Cashmeran"
    ],
    "seasons": [
      "Spring",
      "Ac Venues",
      "Mild Winter",
      "Monsoon Evenings"
    ],
    "time": "Day / Evening",
    "sprays": "2-3 sprays",
    "occasions": [
      "Lunches",
      "Smart Casuals",
      "Dates",
      "Office",
      "Pujas"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Citrus",
      "Floral"
    ],
    "accords": [
      "Floral",
      "Fresh",
      "Spicy",
      "Sweet"
    ]
  },
  {
    "id": "708",
    "slug": "maison-martin-margiela-jazz-club",
    "brand": "Maison Martin Margiela",
    "name": "Jazz Club",
    "gender": "for men",
    "topNotes": [
      "Pink Pepper",
      "Neroli",
      "Lemon"
    ],
    "heartNotes": [
      "Rum",
      "Java vetiver oil",
      "Clary Sage"
    ],
    "baseNotes": [
      "Tobacco Leaf",
      "Vanilla Bean",
      "Styrax"
    ],
    "seasons": [
      "Ac Venues",
      "Winter",
      "Monsoon Evenings"
    ],
    "time": "Evening",
    "sprays": "2-3 sprays",
    "occasions": [
      "Celebrations",
      "Receptions",
      "Dinner Dates",
      "Formal Events"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Aromatic",
      "Citrus"
    ],
    "accords": [
      "Earthy",
      "Fresh",
      "Herbal",
      "Spicy"
    ]
  },
  {
    "id": "709",
    "slug": "maison-martin-margiela-when-the-rain-stops",
    "brand": "Maison Martin Margiela",
    "name": "When the Rain Stops",
    "gender": "for women",
    "topNotes": [
      "Green Notes",
      "Bergamot",
      "Pink Pepper"
    ],
    "heartNotes": [
      "Watery Notes",
      "Rain Notes",
      "Turkish Rose",
      "Jasmine"
    ],
    "baseNotes": [
      "Pine Tree",
      "Moss",
      "Patchouli"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer"
    ],
    "time": "Day",
    "sprays": "4-6",
    "occasions": [
      "Casual",
      "Formal",
      "Office"
    ],
    "featured": false,
    "families": [
      "Aquatic",
      "Citrus",
      "Floral"
    ],
    "accords": [
      "Earthy",
      "Floral",
      "Fresh",
      "Green"
    ]
  },
  {
    "id": "710",
    "slug": "jo-malone-london-iris-white-musk",
    "brand": "Jo Malone London",
    "name": "Iris White Musk",
    "gender": "for women",
    "topNotes": [
      "Not separately listed"
    ],
    "heartNotes": [
      "Not separately listed"
    ],
    "baseNotes": [
      "Not separately listed"
    ],
    "seasons": [
      "Spring",
      "Summer",
      "Monsoon"
    ],
    "time": "Day",
    "sprays": "3-4 sprays; 2-3 indoors",
    "occasions": [
      "Travel",
      "Casual Daytime Events",
      "College",
      "Office",
      "Brunch"
    ],
    "featured": false,
    "families": [
      "Aromatic"
    ],
    "accords": [
      "Fresh"
    ]
  },
  {
    "id": "711",
    "slug": "mancera-aoud-exclusif",
    "brand": "Mancera",
    "name": "Aoud Exclusif",
    "gender": "for women and men",
    "topNotes": [
      "Saffron",
      "Labdanum",
      "Cumin",
      "Pepper"
    ],
    "heartNotes": [
      "Bulgarian Rose",
      "Indonesian Patchouli Leaf",
      "Violet"
    ],
    "baseNotes": [
      "Agarwood (Oud)",
      "Oriental notes"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Winter"
    ],
    "time": "Evening",
    "sprays": "2-3",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Floral",
      "Spicy"
    ],
    "accords": [
      "Earthy",
      "Floral",
      "Powdery",
      "Spicy"
    ]
  },
  {
    "id": "712",
    "slug": "mancera-aoud-lemon-mint",
    "brand": "Mancera",
    "name": "Aoud Lemon Mint",
    "gender": "for women and men",
    "topNotes": [
      "Lemon",
      "Almond",
      "Black Pepper",
      "Coriander"
    ],
    "heartNotes": [
      "Agarwood (Oud)",
      "Patchouli",
      "Egyptian Jasmine",
      "Mint"
    ],
    "baseNotes": [
      "Vanilla",
      "White Musk",
      "Amber",
      "Leather",
      "Vetiver"
    ],
    "seasons": [
      "Spring",
      "Ac Venues",
      "Mild Winter",
      "Monsoon Evenings"
    ],
    "time": "Day / Evening",
    "sprays": "2-3 sprays",
    "occasions": [
      "Lunches",
      "Smart Casuals",
      "Dates",
      "Office",
      "Pujas"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Aromatic",
      "Citrus"
    ],
    "accords": [
      "Earthy",
      "Floral",
      "Fresh",
      "Herbal"
    ]
  },
  {
    "id": "713",
    "slug": "mancera-black-gold",
    "brand": "Mancera",
    "name": "Black Gold",
    "gender": "for men",
    "topNotes": [
      "Lavender",
      "Cinnamon",
      "Nutmeg",
      "Citruses",
      "Agarwood (Oud)"
    ],
    "heartNotes": [
      "Violet",
      "Jasmine",
      "Patchouli Leaf",
      "Rose",
      "Sea Notes"
    ],
    "baseNotes": [
      "Leather",
      "Woody Notes",
      "White Musk",
      "Amber",
      "Vetiver"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer",
      "Winter"
    ],
    "time": "Day / Evening",
    "sprays": "4-6",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal",
      "Office"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Aquatic",
      "Aromatic"
    ],
    "accords": [
      "Earthy",
      "Floral",
      "Fresh",
      "Herbal"
    ]
  },
  {
    "id": "714",
    "slug": "mancera-cedrat-boise",
    "brand": "Mancera",
    "name": "Cedrat Boise",
    "gender": "for women and men",
    "topNotes": [
      "Sicilian Lemon",
      "Black Currant",
      "Bergamot",
      "Spicy Notes"
    ],
    "heartNotes": [
      "Fruity Notes",
      "Patchouli Leaf",
      "Water Jasmine"
    ],
    "baseNotes": [
      "Cedar",
      "Leather",
      "Sandalwood",
      "Vanilla",
      "White Musk",
      "Moss"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer",
      "Winter"
    ],
    "time": "Day / Evening",
    "sprays": "4-6",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal",
      "Office"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Aquatic",
      "Citrus"
    ],
    "accords": [
      "Earthy",
      "Floral",
      "Fresh",
      "Fruity"
    ]
  },
  {
    "id": "715",
    "slug": "mancera-hindu-kush",
    "brand": "Mancera",
    "name": "Hindu Kush",
    "gender": "for women and men",
    "topNotes": [
      "Incense",
      "Spices",
      "cannabis",
      "Labdanum"
    ],
    "heartNotes": [
      "Woody Notes",
      "Patchouli Leaf"
    ],
    "baseNotes": [
      "Amber",
      "Guaiac Wood",
      "Vanilla Pod",
      "White Musk"
    ],
    "seasons": [
      "Ac Venues",
      "Winter",
      "Cool Nights"
    ],
    "time": "Evening",
    "sprays": "1-2 sprays",
    "occasions": [
      "Receptions",
      "Winter Weddings",
      "Festive Evenings",
      "Formal Dinners"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Woody"
    ],
    "accords": [
      "Balsamic",
      "Earthy",
      "Musky",
      "Sweet"
    ]
  },
  {
    "id": "716",
    "slug": "mancera-lemon-line",
    "brand": "Mancera",
    "name": "Lemon Line",
    "gender": "for women and men",
    "topNotes": [
      "Lemon",
      "Lavender",
      "Orange"
    ],
    "heartNotes": [
      "White Flowers",
      "Geranium",
      "Amber"
    ],
    "baseNotes": [
      "oak moss",
      "White Musk"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer"
    ],
    "time": "Day",
    "sprays": "4-6",
    "occasions": [
      "Brunch",
      "Casual Daytime Events",
      "College",
      "Office",
      "Travel"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Aromatic",
      "Citrus"
    ],
    "accords": [
      "Floral",
      "Fresh",
      "Herbal",
      "Musky"
    ]
  },
  {
    "id": "717",
    "slug": "mancera-instant-crush",
    "brand": "Mancera",
    "name": "Instant Crush",
    "gender": "for women and men",
    "topNotes": [
      "Saffron",
      "Ginger",
      "Sicilian Mandarin",
      "Sicilian Bergamot"
    ],
    "heartNotes": [
      "Amberwood",
      "Moroccan Rose",
      "Egyptian Jasmine",
      "Indonesian Patchouli Leaf"
    ],
    "baseNotes": [
      "Madagascar Vanilla",
      "White Musk",
      "Sandalwood",
      "Oakmoss"
    ],
    "seasons": [
      "Spring",
      "Ac Venues",
      "Mild Winter",
      "Monsoon Evenings"
    ],
    "time": "Day / Evening",
    "sprays": "2-3 sprays",
    "occasions": [
      "Lunches",
      "Smart Casuals",
      "Dates",
      "Office",
      "Pujas"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Citrus",
      "Floral"
    ],
    "accords": [
      "Earthy",
      "Floral",
      "Fresh",
      "Musky"
    ]
  },
  {
    "id": "718",
    "slug": "mancera-red-tobacco",
    "brand": "Mancera",
    "name": "Red Tobacco",
    "gender": "for women and men",
    "topNotes": [
      "Cinnamon",
      "Agarwood (Oud)",
      "Incense",
      "Saffron",
      "Nutmeg",
      "Green Apple",
      "White Pear"
    ],
    "heartNotes": [
      "Patchouli",
      "Jasmine"
    ],
    "baseNotes": [
      "Tobacco",
      "Madagascar Vanilla",
      "Amber",
      "Sandalwood",
      "Guaiac Wood",
      "White Musk",
      "Haitian Vetiver"
    ],
    "seasons": [
      "Ac Venues",
      "Winter",
      "Cool Nights"
    ],
    "time": "Evening",
    "sprays": "3-4 sprays; 2-3 indoors Sprays: 1-2 sprays",
    "occasions": [
      "Receptions",
      "Winter Weddings",
      "Festive Evenings",
      "Formal Dinners"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Floral",
      "Fruity"
    ],
    "accords": [
      "Balsamic",
      "Earthy",
      "Floral",
      "Fruity"
    ]
  },
  {
    "id": "719",
    "slug": "mancera-roses-chocolate",
    "brand": "Mancera",
    "name": "Roses Chocolate",
    "gender": "for women and men",
    "topNotes": [
      "Peach",
      "Black Currant",
      "Mandarin Orange",
      "Bergamot"
    ],
    "heartNotes": [
      "Dark Chocolate",
      "Rose",
      "Violet"
    ],
    "baseNotes": [
      "Vanilla",
      "White Musk",
      "Cedar"
    ],
    "seasons": [
      "Spring",
      "Summer",
      "Winter"
    ],
    "time": "Day / Evening",
    "sprays": "4-6",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal",
      "Office"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Citrus",
      "Floral"
    ],
    "accords": [
      "Floral",
      "Fresh",
      "Fruity",
      "Musky"
    ]
  },
  {
    "id": "720",
    "slug": "marbert-marbert-man",
    "brand": "Marbert",
    "name": "Marbert Man",
    "gender": "for men",
    "topNotes": [
      "Artemisia",
      "Lavender",
      "Bergamot",
      "Basil"
    ],
    "heartNotes": [
      "White Honey",
      "Carnation",
      "Juniper Berries",
      "Rose",
      "Geranium",
      "Cinnamon"
    ],
    "baseNotes": [
      "Patchouli",
      "oak moss",
      "Leather",
      "Virginia Cedar",
      "Sandalwood",
      "Musk",
      "Amber"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer",
      "Winter"
    ],
    "time": "Day / Evening",
    "sprays": "4-6",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal",
      "Office"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Aromatic",
      "Citrus"
    ],
    "accords": [
      "Earthy",
      "Floral",
      "Fresh",
      "Herbal"
    ]
  },
  {
    "id": "721",
    "slug": "marc-antoine-barrois-b683",
    "brand": "Marc Antoine Barrois",
    "name": "B683",
    "gender": "for men",
    "topNotes": [
      "Saffron",
      "Black Pepper",
      "Nutmeg",
      "Red Chilli Pepper"
    ],
    "heartNotes": [
      "Violet Leaf",
      "Musk",
      "Labdanum",
      "Amber"
    ],
    "baseNotes": [
      "Ambroxan",
      "Patchouli",
      "Sandalwood",
      "Oakmoss"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Winter"
    ],
    "time": "Evening",
    "sprays": "2-3",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Floral",
      "Spicy"
    ],
    "accords": [
      "Earthy",
      "Floral",
      "Musky",
      "Powdery"
    ]
  },
  {
    "id": "722",
    "slug": "archive-encelade",
    "brand": "Archive",
    "name": "Encelade",
    "gender": "for women and men",
    "topNotes": [
      "Not separately listed"
    ],
    "heartNotes": [
      "Not separately listed"
    ],
    "baseNotes": [
      "Not separately listed"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer"
    ],
    "time": "Day",
    "sprays": "3-4",
    "occasions": [
      "Casual",
      "Office"
    ],
    "featured": false,
    "families": [
      "Aromatic"
    ],
    "accords": [
      "Fresh"
    ]
  },
  {
    "id": "723",
    "slug": "marc-antoine-barrois-ganymede",
    "brand": "Marc Antoine Barrois",
    "name": "Ganymede",
    "gender": "for women and men",
    "topNotes": [
      "Not separately listed"
    ],
    "heartNotes": [
      "Not separately listed"
    ],
    "baseNotes": [
      "Not separately listed"
    ],
    "seasons": [
      "Spring",
      "Ac Venues",
      "Mild Winter",
      "Monsoon Evenings"
    ],
    "time": "Day / Evening",
    "sprays": "2-3 sprays",
    "occasions": [
      "Lunches",
      "Smart Casuals",
      "Dates",
      "Office",
      "Pujas"
    ],
    "featured": false,
    "families": [
      "Aromatic"
    ],
    "accords": [
      "Fresh"
    ]
  },
  {
    "id": "724",
    "slug": "marc-jacobs-daisy-eau-so-intense",
    "brand": "Marc Jacobs",
    "name": "Daisy Eau So Intense",
    "gender": "for women",
    "topNotes": [
      "Strawberry",
      "Pear",
      "Bergamot"
    ],
    "heartNotes": [
      "Honey",
      "Jasmine",
      "Rose"
    ],
    "baseNotes": [
      "Vanilla",
      "Musk",
      "Benzoin",
      "Moss"
    ],
    "seasons": [
      "Spring",
      "Ac Venues",
      "Mild Winter",
      "Monsoon Evenings"
    ],
    "time": "Day / Evening",
    "sprays": "2-3 sprays",
    "occasions": [
      "Lunches",
      "Smart Casuals",
      "Dates",
      "Office",
      "Pujas"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Citrus",
      "Floral"
    ],
    "accords": [
      "Floral",
      "Fresh",
      "Fruity",
      "Musky"
    ]
  },
  {
    "id": "725",
    "slug": "marc-jacobs-daisy-love-skies",
    "brand": "Marc Jacobs",
    "name": "Daisy Love Skies",
    "gender": "for women",
    "topNotes": [
      "Salt",
      "Cloudberry",
      "Raspberry"
    ],
    "heartNotes": [
      "Whipped Cream",
      "Ambrette (Musk Mallow)",
      "Daisy"
    ],
    "baseNotes": [
      "Moss",
      "White Woods",
      "Amber"
    ],
    "seasons": [
      "Spring",
      "Summer",
      "Winter"
    ],
    "time": "Day / Evening",
    "sprays": "4-6",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal",
      "Office"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Aquatic",
      "Fruity"
    ],
    "accords": [
      "Fruity",
      "Marine",
      "Musky",
      "Warm"
    ]
  },
  {
    "id": "726",
    "slug": "marc-jacobs-daisy-eau-so-fresh",
    "brand": "Marc Jacobs",
    "name": "Daisy Eau So Fresh",
    "gender": "for women",
    "topNotes": [
      "Green Notes",
      "Raspberry",
      "Pear",
      "Grapefruit"
    ],
    "heartNotes": [
      "Violet",
      "Litchi",
      "Apple Blossom",
      "Rose",
      "Jasmine"
    ],
    "baseNotes": [
      "Musk",
      "Plum",
      "Virginia Cedar"
    ],
    "seasons": [
      "Spring",
      "Summer",
      "Monsoon"
    ],
    "time": "Day",
    "sprays": "3-4 sprays; 2-3 indoors",
    "occasions": [
      "Travel",
      "Casual Daytime Events",
      "College",
      "Office",
      "Brunch"
    ],
    "featured": false,
    "families": [
      "Citrus",
      "Floral",
      "Fruity"
    ],
    "accords": [
      "Floral",
      "Fresh",
      "Fruity",
      "Green"
    ]
  },
  {
    "id": "727",
    "slug": "marc-jacobs-daisy",
    "brand": "Marc Jacobs",
    "name": "Daisy",
    "gender": "for women",
    "topNotes": [
      "Violet Leaf",
      "Blood Grapefruit",
      "Strawberry"
    ],
    "heartNotes": [
      "Violet",
      "Gardenia",
      "Jasmine"
    ],
    "baseNotes": [
      "Musk",
      "White Woods",
      "Vanilla"
    ],
    "seasons": [
      "Spring",
      "Summer",
      "Monsoon"
    ],
    "time": "Day",
    "sprays": "3-4 sprays; 2-3 indoors",
    "occasions": [
      "Travel",
      "Casual Daytime Events",
      "College",
      "Office",
      "Brunch"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Citrus",
      "Floral"
    ],
    "accords": [
      "Floral",
      "Fresh",
      "Fruity",
      "Musky"
    ]
  },
  {
    "id": "728",
    "slug": "premi-re-2013-eau-de-parfum-not-stated",
    "brand": "Premi\u00e3\u00a8Re 2013 Eau De Parfum",
    "name": "Not stated",
    "gender": "Unisex",
    "topNotes": [
      "Peach",
      "Raspberry",
      "Rose"
    ],
    "heartNotes": [
      "Apricot",
      "Brown sugar",
      "Plum"
    ],
    "baseNotes": [
      "Jasmine",
      "Musk",
      "Sandalwood",
      "Rancid Oil"
    ],
    "seasons": [
      "Spring"
    ],
    "time": "Day / Evening",
    "sprays": "3-4",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal",
      "Office"
    ],
    "featured": false,
    "families": [
      "Floral",
      "Fruity",
      "Gourmand"
    ],
    "accords": [
      "Floral",
      "Fruity",
      "Musky",
      "Sweet"
    ]
  },
  {
    "id": "729",
    "slug": "mdci-parfums-chypre-palatin",
    "brand": "Mdci Parfums",
    "name": "Chypre Palatin",
    "gender": "for women and men",
    "topNotes": [
      "Galbanum",
      "Aldehydes",
      "Labdanum",
      "Clementine",
      "Hyacinth",
      "Lavender",
      "Sage"
    ],
    "heartNotes": [
      "Plum",
      "Rose",
      "Iris",
      "Jasmine",
      "Gardenia"
    ],
    "baseNotes": [
      "Tolu Balsam",
      "Oakmoss",
      "Castoreum",
      "Benzoin",
      "Immortelle",
      "Vanilla",
      "Leather",
      "Styrax",
      "Costus"
    ],
    "seasons": [
      "Ac Venues",
      "Winter",
      "Cool Nights"
    ],
    "time": "Evening",
    "sprays": "1-2 sprays",
    "occasions": [
      "Receptions",
      "Winter Weddings",
      "Festive Evenings",
      "Formal Dinners"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Aromatic",
      "Floral"
    ],
    "accords": [
      "Floral",
      "Fruity",
      "Green",
      "Herbal"
    ]
  },
  {
    "id": "730",
    "slug": "memo-paris-african-leather",
    "brand": "Memo Paris",
    "name": "African Leather",
    "gender": "for women and men",
    "topNotes": [
      "Not separately listed"
    ],
    "heartNotes": [
      "Not separately listed"
    ],
    "baseNotes": [
      "Not separately listed"
    ],
    "seasons": [
      "Spring",
      "Ac Venues",
      "Mild Winter",
      "Monsoon Evenings"
    ],
    "time": "Day / Evening",
    "sprays": "2-3 sprays",
    "occasions": [
      "Lunches",
      "Smart Casuals",
      "Dates",
      "Office",
      "Pujas"
    ],
    "featured": false,
    "families": [
      "Aromatic"
    ],
    "accords": [
      "Fresh"
    ]
  },
  {
    "id": "731",
    "slug": "memo-paris-argentina",
    "brand": "Memo Paris",
    "name": "Argentina",
    "gender": "for women and men",
    "topNotes": [
      "Not separately listed"
    ],
    "heartNotes": [
      "Not separately listed"
    ],
    "baseNotes": [
      "Not separately listed"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer"
    ],
    "time": "Day",
    "sprays": "3-4",
    "occasions": [
      "Casual",
      "Office"
    ],
    "featured": false,
    "families": [
      "Aromatic"
    ],
    "accords": [
      "Fresh"
    ]
  },
  {
    "id": "732",
    "slug": "memo-paris-kedu",
    "brand": "Memo Paris",
    "name": "Kedu",
    "gender": "for women and men",
    "topNotes": [
      "Grapefruit",
      "Neroli",
      "Mandarin Orange"
    ],
    "heartNotes": [
      "Mate",
      "Freesia",
      "Peony",
      "Rose"
    ],
    "baseNotes": [
      "Sesame",
      "White Musk",
      "Moss"
    ],
    "seasons": [
      "Spring",
      "Ac Venues",
      "Mild Winter",
      "Monsoon Evenings"
    ],
    "time": "Day / Evening",
    "sprays": "2-3 sprays",
    "occasions": [
      "Lunches",
      "Smart Casuals",
      "Dates",
      "Office",
      "Pujas"
    ],
    "featured": false,
    "families": [
      "Citrus",
      "Floral"
    ],
    "accords": [
      "Floral",
      "Fresh",
      "Musky"
    ]
  },
  {
    "id": "733",
    "slug": "memo-paris-lalibela",
    "brand": "Memo Paris",
    "name": "Lalibela",
    "gender": "for women",
    "topNotes": [
      "Coconut",
      "Orchid",
      "Rose",
      "Peony"
    ],
    "heartNotes": [
      "Vanilla",
      "Patchouli",
      "Jasmine",
      "Labdanum"
    ],
    "baseNotes": [
      "Incense",
      "Tobacco Leaf",
      "Precious Woods"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Winter"
    ],
    "time": "Evening",
    "sprays": "2-3",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Floral",
      "Fruity"
    ],
    "accords": [
      "Balsamic",
      "Earthy",
      "Floral",
      "Fruity"
    ]
  },
  {
    "id": "734",
    "slug": "memo-paris-marfa",
    "brand": "Memo Paris",
    "name": "Marfa",
    "gender": "for women and men",
    "topNotes": [
      "Orange Blossom",
      "Mandarin Orange"
    ],
    "heartNotes": [
      "Tuberose",
      "Ylang-Ylang",
      "Agave"
    ],
    "baseNotes": [
      "Vanilla",
      "Sandalwood",
      "White Musk",
      "Cedar"
    ],
    "seasons": [
      "Ac Venues",
      "Cool Nights",
      "Winter"
    ],
    "time": "Evening",
    "sprays": "4-6",
    "occasions": [
      "Festive Evenings",
      "Formal Dinners",
      "Receptions",
      "Winter Weddings"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Citrus",
      "Floral"
    ],
    "accords": [
      "Floral",
      "Fresh",
      "Musky",
      "Sweet"
    ]
  },
  {
    "id": "735",
    "slug": "memo-paris-vaadhoo",
    "brand": "Memo Paris",
    "name": "Vaadhoo",
    "gender": "for women and men",
    "topNotes": [
      "Ginger",
      "Basil",
      "Cassis"
    ],
    "heartNotes": [
      "Geranium",
      "Immortelle",
      "Jasmine"
    ],
    "baseNotes": [
      "Vetiver",
      "Patchouli",
      "Moss"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Winter"
    ],
    "time": "Evening",
    "sprays": "3-4",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal"
    ],
    "featured": false,
    "families": [
      "Aromatic",
      "Floral",
      "Spicy"
    ],
    "accords": [
      "Earthy",
      "Floral",
      "Herbal",
      "Spicy"
    ]
  },
  {
    "id": "736",
    "slug": "maison-francis-kurkdjian-724",
    "brand": "Maison Francis Kurkdjian",
    "name": "724",
    "gender": "for women and men",
    "topNotes": [
      "Aldehydes",
      "Calabrian bergamot"
    ],
    "heartNotes": [
      "Egyptian Jasmine",
      "Mock Orange",
      "Sweet Pea"
    ],
    "baseNotes": [
      "White Musk",
      "Sandalwood"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer"
    ],
    "time": "Day",
    "sprays": "4-6",
    "occasions": [
      "Brunch",
      "Casual Daytime Events",
      "College",
      "Office",
      "Travel"
    ],
    "featured": false,
    "families": [
      "Citrus",
      "Floral",
      "Woody"
    ],
    "accords": [
      "Floral",
      "Fresh",
      "Musky",
      "Woody"
    ]
  },
  {
    "id": "737",
    "slug": "odecla-rose",
    "brand": "Odecla",
    "name": "Rose",
    "gender": "for women and men",
    "topNotes": [
      "Bergamot",
      "Pepper",
      "Coriander"
    ],
    "heartNotes": [
      "Rose",
      "Green Notes",
      "Cyclamen"
    ],
    "baseNotes": [
      "White Flowers",
      "Musk",
      "Vanilla",
      "Woody Notes"
    ],
    "seasons": [
      "Spring",
      "Summer",
      "Monsoon"
    ],
    "time": "Day",
    "sprays": "3-4 sprays; 2-3 indoors",
    "occasions": [
      "Travel",
      "Casual Daytime Events",
      "College",
      "Office",
      "Brunch"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Citrus",
      "Floral"
    ],
    "accords": [
      "Floral",
      "Fresh",
      "Green",
      "Musky"
    ]
  },
  {
    "id": "738",
    "slug": "maison-francis-kurkdjian-absolue-pour-le-soir",
    "brand": "Maison Francis Kurkdjian",
    "name": "Absolue Pour le Soir",
    "gender": "for women and men",
    "topNotes": [
      "Not separately listed"
    ],
    "heartNotes": [
      "Not separately listed"
    ],
    "baseNotes": [
      "Not separately listed"
    ],
    "seasons": [
      "Spring",
      "Ac Venues",
      "Mild Winter",
      "Monsoon Evenings"
    ],
    "time": "Day / Evening",
    "sprays": "2-3 sprays",
    "occasions": [
      "Lunches",
      "Smart Casuals",
      "Dates",
      "Office",
      "Pujas"
    ],
    "featured": false,
    "families": [
      "Aromatic"
    ],
    "accords": [
      "Fresh"
    ]
  },
  {
    "id": "739",
    "slug": "maison-francis-kurkdjian-amyris-homme",
    "brand": "Maison Francis Kurkdjian",
    "name": "Amyris Homme",
    "gender": "for men",
    "topNotes": [
      "Not separately listed"
    ],
    "heartNotes": [
      "Not separately listed"
    ],
    "baseNotes": [
      "Not separately listed"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer"
    ],
    "time": "Day",
    "sprays": "3-4",
    "occasions": [
      "Casual",
      "Office"
    ],
    "featured": false,
    "families": [
      "Aromatic"
    ],
    "accords": [
      "Fresh"
    ]
  },
  {
    "id": "740",
    "slug": "archive-fragrance-740",
    "brand": "Archive",
    "name": "Fragrance 740",
    "gender": "for men",
    "topNotes": [
      "Sicilian Mandarin",
      "Rosemary"
    ],
    "heartNotes": [
      "Amyris",
      "Iris",
      "Milk Chocolate",
      "Coconut",
      "Coffee"
    ],
    "baseNotes": [
      "Tonka Bean",
      "Agarwood (Oud)"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer",
      "Winter"
    ],
    "time": "Day / Evening",
    "sprays": "4-6",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal",
      "Office"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Aromatic",
      "Citrus"
    ],
    "accords": [
      "Floral",
      "Fresh",
      "Fruity",
      "Herbal"
    ]
  },
  {
    "id": "741",
    "slug": "amyrisoil-not-reliably-matched",
    "brand": "Amyrisoil",
    "name": "Not reliably matched",
    "gender": "Unisex",
    "topNotes": [
      "Reliable exact-page data not found in indexed sources"
    ],
    "heartNotes": [
      "Reliable exact-page data not found in indexed sources"
    ],
    "baseNotes": [
      "Reliable exact-page data not found in indexed sources"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer"
    ],
    "time": "Day",
    "sprays": "3-4",
    "occasions": [
      "Casual",
      "Office"
    ],
    "featured": false,
    "families": [
      "Aromatic"
    ],
    "accords": [
      "Fresh"
    ]
  },
  {
    "id": "742",
    "slug": "maison-francis-kurkdjian-apom-pour-femme",
    "brand": "Maison Francis Kurkdjian",
    "name": "APOM Pour Femme",
    "gender": "for women",
    "topNotes": [
      "Not separately listed"
    ],
    "heartNotes": [
      "Not separately listed"
    ],
    "baseNotes": [
      "Not separately listed"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer"
    ],
    "time": "Day",
    "sprays": "3-4",
    "occasions": [
      "Casual",
      "Office"
    ],
    "featured": false,
    "families": [
      "Aromatic"
    ],
    "accords": [
      "Fresh"
    ]
  },
  {
    "id": "743",
    "slug": "aqua-media-cologne-forte-aqua-universalis-forte",
    "brand": "Aqua Media Cologne Forte",
    "name": "Aqua Universalis Forte",
    "gender": "for women and men",
    "topNotes": [
      "Verbena",
      "Bergamot"
    ],
    "heartNotes": [
      "Fennel",
      "Hedione"
    ],
    "baseNotes": [
      "Matcha Tea",
      "Musk",
      "Woodsy Notes"
    ],
    "seasons": [
      "Spring",
      "Summer",
      "Winter"
    ],
    "time": "Day / Evening",
    "sprays": "4-6",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal",
      "Office"
    ],
    "featured": false,
    "families": [
      "Citrus",
      "Woody"
    ],
    "accords": [
      "Fresh",
      "Musky",
      "Woody"
    ]
  },
  {
    "id": "744",
    "slug": "-744",
    "brand": "Archive",
    "name": "Classified Fragrance",
    "gender": "Unisex",
    "topNotes": [
      "Amalfi Lemon",
      "Bergamot"
    ],
    "heartNotes": [
      "White Flowers",
      "Jasmine",
      "Rose"
    ],
    "baseNotes": [
      "Musk",
      "Woodsy Notes"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer"
    ],
    "time": "Day",
    "sprays": "4-6",
    "occasions": [
      "Brunch",
      "Casual Daytime Events",
      "College",
      "Office",
      "Travel"
    ],
    "featured": false,
    "families": [
      "Citrus",
      "Floral",
      "Woody"
    ],
    "accords": [
      "Floral",
      "Fresh",
      "Musky",
      "Woody"
    ]
  },
  {
    "id": "745",
    "slug": "maison-francis-kurkdjian-parfum",
    "brand": "Maison Francis Kurkdjian",
    "name": "Parfum",
    "gender": "for women and men",
    "topNotes": [
      "Bitter Almond",
      "Saffron"
    ],
    "heartNotes": [
      "Egyptian Jasmine",
      "Cedar"
    ],
    "baseNotes": [
      "Ambergris",
      "Woody Notes",
      "Musk"
    ],
    "seasons": [
      "Ac Venues",
      "Winter",
      "Cool Nights"
    ],
    "time": "Evening",
    "sprays": "1-2 sprays Baccarat Rouge 540 for women and men",
    "occasions": [
      "Receptions",
      "Winter Weddings",
      "Festive Evenings",
      "Formal Dinners"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Floral",
      "Gourmand"
    ],
    "accords": [
      "Floral",
      "Musky",
      "Spicy",
      "Sweet"
    ]
  },
  {
    "id": "746",
    "slug": "sprays-1-2-sprays-baccarat-rouge-540",
    "brand": "Sprays: 1-2 Sprays",
    "name": "Baccarat Rouge 540",
    "gender": "for women and men",
    "topNotes": [
      "Saffron",
      "Jasmine"
    ],
    "heartNotes": [
      "Amberwood",
      "Ambergris"
    ],
    "baseNotes": [
      "Fir Resin",
      "Cedar"
    ],
    "seasons": [
      "Spring",
      "Ac Venues",
      "Mild Winter",
      "Monsoon Evenings"
    ],
    "time": "Day / Evening",
    "sprays": "2-3 sprays",
    "occasions": [
      "Lunches",
      "Smart Casuals",
      "Dates",
      "Office",
      "Pujas"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Floral",
      "Spicy"
    ],
    "accords": [
      "Balsamic",
      "Floral",
      "Spicy",
      "Warm"
    ]
  },
  {
    "id": "747",
    "slug": "maison-francis-kurkdjian-feminin-pluriel",
    "brand": "Maison Francis Kurkdjian",
    "name": "Feminin Pluriel",
    "gender": "for women",
    "topNotes": [
      "Not separately listed"
    ],
    "heartNotes": [
      "Not separately listed"
    ],
    "baseNotes": [
      "Not separately listed"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer"
    ],
    "time": "Day",
    "sprays": "3-4",
    "occasions": [
      "Casual",
      "Office"
    ],
    "featured": false,
    "families": [
      "Aromatic"
    ],
    "accords": [
      "Fresh"
    ]
  },
  {
    "id": "748",
    "slug": "maison-francis-kurkdjian-gentle-fluidity-gold",
    "brand": "Maison Francis Kurkdjian",
    "name": "Gentle Fluidity Gold",
    "gender": "for women and men",
    "topNotes": [
      "Not separately listed"
    ],
    "heartNotes": [
      "Not separately listed"
    ],
    "baseNotes": [
      "Not separately listed"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer"
    ],
    "time": "Day",
    "sprays": "3-4",
    "occasions": [
      "Casual",
      "Office"
    ],
    "featured": false,
    "families": [
      "Aromatic"
    ],
    "accords": [
      "Fresh"
    ]
  },
  {
    "id": "749",
    "slug": "maison-francis-kurkdjian-gentle-fluidity-silver",
    "brand": "Maison Francis Kurkdjian",
    "name": "Gentle Fluidity Silver",
    "gender": "for women and men",
    "topNotes": [
      "Not separately listed"
    ],
    "heartNotes": [
      "Not separately listed"
    ],
    "baseNotes": [
      "Not separately listed"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer"
    ],
    "time": "Day",
    "sprays": "3-4",
    "occasions": [
      "Casual",
      "Office"
    ],
    "featured": false,
    "families": [
      "Aromatic"
    ],
    "accords": [
      "Fresh"
    ]
  },
  {
    "id": "750",
    "slug": "maison-francis-kurkdjian-grand-soir",
    "brand": "Maison Francis Kurkdjian",
    "name": "Grand Soir",
    "gender": "for women and men",
    "topNotes": [
      "Not separately listed"
    ],
    "heartNotes": [
      "Not separately listed"
    ],
    "baseNotes": [
      "Not separately listed"
    ],
    "seasons": [
      "Spring",
      "Ac Venues",
      "Mild Winter",
      "Monsoon Evenings"
    ],
    "time": "Day / Evening",
    "sprays": "2-3 sprays",
    "occasions": [
      "Lunches",
      "Smart Casuals",
      "Dates",
      "Office",
      "Pujas"
    ],
    "featured": false,
    "families": [
      "Aromatic"
    ],
    "accords": [
      "Fresh"
    ]
  },
  {
    "id": "751",
    "slug": "maison-francis-kurkdjian-grand-soir-751",
    "brand": "Maison Francis Kurkdjian",
    "name": "Grand Soir",
    "gender": "for women and men",
    "topNotes": [
      "Not separately listed"
    ],
    "heartNotes": [
      "Not separately listed"
    ],
    "baseNotes": [
      "Not separately listed"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer"
    ],
    "time": "Day",
    "sprays": "3-4",
    "occasions": [
      "Casual",
      "Office"
    ],
    "featured": false,
    "families": [
      "Aromatic"
    ],
    "accords": [
      "Fresh"
    ]
  },
  {
    "id": "752",
    "slug": "archive-l-homme-a-la-rose",
    "brand": "Archive",
    "name": "L Homme A la Rose",
    "gender": "for men",
    "topNotes": [
      "Not separately listed"
    ],
    "heartNotes": [
      "Not separately listed"
    ],
    "baseNotes": [
      "Not separately listed"
    ],
    "seasons": [
      "Ac Venues",
      "Winter",
      "Monsoon Evenings"
    ],
    "time": "Evening",
    "sprays": "2-3 sprays",
    "occasions": [
      "Celebrations",
      "Receptions",
      "Dinner Dates",
      "Formal Events"
    ],
    "featured": false,
    "families": [
      "Aromatic"
    ],
    "accords": [
      "Fresh"
    ]
  },
  {
    "id": "753",
    "slug": "maison-francis-kurkdjian-masculin-pluriel",
    "brand": "Maison Francis Kurkdjian",
    "name": "Masculin Pluriel",
    "gender": "for men",
    "topNotes": [
      "Not separately listed"
    ],
    "heartNotes": [
      "Not separately listed"
    ],
    "baseNotes": [
      "Not separately listed"
    ],
    "seasons": [
      "Spring",
      "Ac Venues",
      "Mild Winter",
      "Monsoon Evenings"
    ],
    "time": "Day / Evening",
    "sprays": "2-3 sprays",
    "occasions": [
      "Lunches",
      "Smart Casuals",
      "Dates",
      "Office",
      "Pujas"
    ],
    "featured": false,
    "families": [
      "Aromatic"
    ],
    "accords": [
      "Fresh"
    ]
  },
  {
    "id": "754",
    "slug": "maison-francis-kurkdjian-oud-extrait-de-parfum",
    "brand": "Maison Francis Kurkdjian",
    "name": "Oud Extrait de Parfum",
    "gender": "for women and men",
    "topNotes": [
      "Saffron",
      "Elemi resin"
    ],
    "heartNotes": [
      "Vanilla",
      "Ambrette (Musk Mallow)",
      "Atlas Cedar"
    ],
    "baseNotes": [
      "Laotian Oud",
      "Indonesian Patchouli Leaf"
    ],
    "seasons": [
      "Ac Venues",
      "Winter",
      "Cool Nights"
    ],
    "time": "Evening",
    "sprays": "1-2 sprays",
    "occasions": [
      "Receptions",
      "Winter Weddings",
      "Festive Evenings",
      "Formal Dinners"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Spicy",
      "Woody"
    ],
    "accords": [
      "Balsamic",
      "Earthy",
      "Musky",
      "Spicy"
    ]
  },
  {
    "id": "755",
    "slug": "maison-francis-kurkdjian-parfum-755",
    "brand": "Maison Francis Kurkdjian",
    "name": "parfum",
    "gender": "for women and men",
    "topNotes": [
      "Not separately listed"
    ],
    "heartNotes": [
      "Not separately listed"
    ],
    "baseNotes": [
      "Not separately listed  Oud Satin Mood  for women",
      "men  NOTES"
    ],
    "seasons": [
      "Winter"
    ],
    "time": "Evening",
    "sprays": "3-4",
    "occasions": [
      "Date Night",
      "Formal"
    ],
    "featured": false,
    "families": [
      "Woody"
    ],
    "accords": [
      "Woody"
    ]
  },
  {
    "id": "756",
    "slug": "base-not-separately-listed-oud-satin-mood",
    "brand": "Base: Not Separately Listed",
    "name": "Oud Satin Mood",
    "gender": "for women and men",
    "topNotes": [
      "Not separately listed"
    ],
    "heartNotes": [
      "Not separately listed"
    ],
    "baseNotes": [
      "Not separately listed"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer"
    ],
    "time": "Day",
    "sprays": "2-3",
    "occasions": [
      "Casual",
      "Office"
    ],
    "featured": false,
    "families": [
      "Aromatic"
    ],
    "accords": [
      "Fresh"
    ]
  },
  {
    "id": "757",
    "slug": "maison-francis-kurkdjian-oud-silk-mood",
    "brand": "Maison Francis Kurkdjian",
    "name": "Oud Silk Mood",
    "gender": "for women and men",
    "topNotes": [
      "Bulgarian Rose",
      "Chamomile",
      "Bergamot"
    ],
    "heartNotes": [
      "Guaiac Wood",
      "Hedione"
    ],
    "baseNotes": [
      "Agarwood (Oud)",
      "Papyrus"
    ],
    "seasons": [
      "Spring",
      "Summer",
      "Winter"
    ],
    "time": "Day / Evening",
    "sprays": "4-6",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal",
      "Office"
    ],
    "featured": false,
    "families": [
      "Citrus",
      "Floral",
      "Woody"
    ],
    "accords": [
      "Floral",
      "Fresh",
      "Woody"
    ]
  },
  {
    "id": "758",
    "slug": "archive-petit-matin",
    "brand": "Archive",
    "name": "Petit Matin",
    "gender": "for women and men",
    "topNotes": [
      "Not separately listed"
    ],
    "heartNotes": [
      "Not separately listed"
    ],
    "baseNotes": [
      "Not separately listed"
    ],
    "seasons": [
      "Spring",
      "Summer",
      "Monsoon"
    ],
    "time": "Day",
    "sprays": "3-4 sprays; 2-3 indoors",
    "occasions": [
      "Travel",
      "Casual Daytime Events",
      "College",
      "Office",
      "Brunch"
    ],
    "featured": false,
    "families": [
      "Aromatic"
    ],
    "accords": [
      "Fresh"
    ]
  },
  {
    "id": "759",
    "slug": "michael-kors-extreme-night",
    "brand": "Michael Kors",
    "name": "Extreme Night",
    "gender": "for men",
    "topNotes": [
      "Nutmeg",
      "Black Pepper",
      "Bergamot"
    ],
    "heartNotes": [
      "Lily",
      "Clary Sage",
      "Cypress"
    ],
    "baseNotes": [
      "Sandalwood",
      "Orris",
      "Musk",
      "Vanilla",
      "Tonka Bean",
      "Cedar"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer",
      "Winter"
    ],
    "time": "Day / Evening",
    "sprays": "4-6",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal",
      "Office"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Aromatic",
      "Citrus"
    ],
    "accords": [
      "Floral",
      "Fresh",
      "Herbal",
      "Musky"
    ]
  },
  {
    "id": "760",
    "slug": "missguided-women",
    "brand": "Missguided",
    "name": "Women",
    "gender": "Unisex",
    "topNotes": [
      "Pistachio; pear; bergamot"
    ],
    "heartNotes": [
      "Almond milk; orange; magnolia; rose"
    ],
    "baseNotes": [
      "Tonka bean; vanilla; amber; patchouli; sandalwood; musk"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer",
      "Winter"
    ],
    "time": "Day / Evening",
    "sprays": "4-6",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal",
      "Office"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Citrus",
      "Floral"
    ],
    "accords": [
      "Earthy",
      "Floral",
      "Fresh",
      "Fruity"
    ]
  },
  {
    "id": "761",
    "slug": "montblanc-explorer",
    "brand": "Montblanc",
    "name": "Explorer",
    "gender": "for men",
    "topNotes": [
      "Bergamot",
      "Pink Pepper",
      "Clary Sage"
    ],
    "heartNotes": [
      "Haitian Vetiver",
      "Leather"
    ],
    "baseNotes": [
      "Ambroxan",
      "Akigalawood",
      "Indonesian Patchouli Leaf",
      "Cacao Pod"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer"
    ],
    "time": "Day",
    "sprays": "4-6",
    "occasions": [
      "Casual",
      "Formal",
      "Office"
    ],
    "featured": false,
    "families": [
      "Aromatic",
      "Citrus",
      "Gourmand"
    ],
    "accords": [
      "Earthy",
      "Fresh",
      "Herbal",
      "Leather"
    ]
  },
  {
    "id": "762",
    "slug": "montblanc-signature",
    "brand": "Montblanc",
    "name": "Signature",
    "gender": "for women",
    "topNotes": [
      "Clementine"
    ],
    "heartNotes": [
      "Magnolia",
      "Ylang-Ylang",
      "Peony"
    ],
    "baseNotes": [
      "Vanilla",
      "White Musk",
      "Benzoin"
    ],
    "seasons": [
      "Spring",
      "Winter"
    ],
    "time": "Evening",
    "sprays": "2-3",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Floral"
    ],
    "accords": [
      "Floral",
      "Musky",
      "Sweet",
      "Warm"
    ]
  },
  {
    "id": "763",
    "slug": "montblanc-starwalker",
    "brand": "Montblanc",
    "name": "Starwalker",
    "gender": "for men",
    "topNotes": [
      "Bamboo",
      "Bergamot",
      "Mandarin Orange"
    ],
    "heartNotes": [
      "Sandalwood",
      "White Musk",
      "Cedar"
    ],
    "baseNotes": [
      "Ginger",
      "Fir Resin",
      "Nutmeg",
      "Amber"
    ],
    "seasons": [
      "Spring",
      "Summer",
      "Winter"
    ],
    "time": "Day / Evening",
    "sprays": "4-6",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal",
      "Office"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Citrus",
      "Spicy"
    ],
    "accords": [
      "Balsamic",
      "Fresh",
      "Musky",
      "Spicy"
    ]
  },
  {
    "id": "764",
    "slug": "montale-aoud-forest",
    "brand": "Montale",
    "name": "Aoud Forest",
    "gender": "for women and men",
    "topNotes": [
      "Not separately listed"
    ],
    "heartNotes": [
      "Not separately listed"
    ],
    "baseNotes": [
      "Not separately listed"
    ],
    "seasons": [
      "Spring",
      "Ac Venues",
      "Mild Winter",
      "Monsoon Evenings"
    ],
    "time": "Day / Evening",
    "sprays": "2-3 sprays",
    "occasions": [
      "Lunches",
      "Smart Casuals",
      "Dates",
      "Office",
      "Pujas"
    ],
    "featured": false,
    "families": [
      "Aromatic"
    ],
    "accords": [
      "Fresh"
    ]
  },
  {
    "id": "765",
    "slug": "montale-aoud-lagoon",
    "brand": "Montale",
    "name": "Aoud Lagoon",
    "gender": "for women and men",
    "topNotes": [
      "Osmanthus",
      "Mandarin Orange"
    ],
    "heartNotes": [
      "Tiare Flower",
      "Lotus"
    ],
    "baseNotes": [
      "Guaiac Wood",
      "Vetiver",
      "Moss"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer"
    ],
    "time": "Day",
    "sprays": "4-6",
    "occasions": [
      "Brunch",
      "Casual Daytime Events",
      "College",
      "Office",
      "Travel"
    ],
    "featured": false,
    "families": [
      "Citrus",
      "Floral",
      "Woody"
    ],
    "accords": [
      "Earthy",
      "Floral",
      "Fresh",
      "Woody"
    ]
  },
  {
    "id": "766",
    "slug": "montale-arabians-tonka",
    "brand": "Montale",
    "name": "Arabians Tonka",
    "gender": "for women and men",
    "topNotes": [
      "Saffron",
      "Bergamot"
    ],
    "heartNotes": [
      "Agarwood (Oud)",
      "Bulgarian Rose"
    ],
    "baseNotes": [
      "Tonka Bean",
      "Sugar Cane",
      "Amber",
      "White Musk",
      "Oakmoss"
    ],
    "seasons": [
      "Ac Venues",
      "Winter",
      "Cool Nights"
    ],
    "time": "Evening",
    "sprays": "3-4 sprays; 2-3 indoors Sprays: 1-2 sprays",
    "occasions": [
      "Receptions",
      "Winter Weddings",
      "Festive Evenings",
      "Formal Dinners"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Citrus",
      "Floral"
    ],
    "accords": [
      "Floral",
      "Fresh",
      "Musky",
      "Spicy"
    ]
  },
  {
    "id": "767",
    "slug": "montale-black-aoud",
    "brand": "Montale",
    "name": "Black Aoud",
    "gender": "for men",
    "topNotes": [
      "Not separately listed"
    ],
    "heartNotes": [
      "Not separately listed"
    ],
    "baseNotes": [
      "Not separately listed"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer"
    ],
    "time": "Day",
    "sprays": "3-4",
    "occasions": [
      "Casual",
      "Office"
    ],
    "featured": false,
    "families": [
      "Aromatic"
    ],
    "accords": [
      "Fresh"
    ]
  },
  {
    "id": "768",
    "slug": "montale-greyland",
    "brand": "Montale",
    "name": "Greyland",
    "gender": "for women and men",
    "topNotes": [
      "Not separately listed"
    ],
    "heartNotes": [
      "Not separately listed"
    ],
    "baseNotes": [
      "Not separately listed"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer"
    ],
    "time": "Day",
    "sprays": "3-4",
    "occasions": [
      "Casual",
      "Office"
    ],
    "featured": false,
    "families": [
      "Aromatic"
    ],
    "accords": [
      "Fresh"
    ]
  },
  {
    "id": "769",
    "slug": "montale-honey-aoud",
    "brand": "Montale",
    "name": "Honey Aoud",
    "gender": "for women and men",
    "topNotes": [
      "Not separately listed"
    ],
    "heartNotes": [
      "Not separately listed"
    ],
    "baseNotes": [
      "Not separately listed"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer"
    ],
    "time": "Day",
    "sprays": "3-4",
    "occasions": [
      "Casual",
      "Office"
    ],
    "featured": false,
    "families": [
      "Aromatic"
    ],
    "accords": [
      "Fresh"
    ]
  },
  {
    "id": "770",
    "slug": "montale-intense-cafe",
    "brand": "Montale",
    "name": "Intense Cafe",
    "gender": "for women and men",
    "topNotes": [
      "Floral Notes"
    ],
    "heartNotes": [
      "Rose",
      "Coffee"
    ],
    "baseNotes": [
      "Vanila",
      "White Musk",
      "Amber"
    ],
    "seasons": [
      "Spring",
      "Winter"
    ],
    "time": "Evening",
    "sprays": "2-3",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Floral",
      "Gourmand"
    ],
    "accords": [
      "Floral",
      "Musky",
      "Sweet",
      "Warm"
    ]
  },
  {
    "id": "771",
    "slug": "montale-oud-pashmina",
    "brand": "Montale",
    "name": "Oud Pashmina",
    "gender": "for women and men",
    "topNotes": [
      "Not separately listed"
    ],
    "heartNotes": [
      "Not separately listed"
    ],
    "baseNotes": [
      "Not separately listed"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer"
    ],
    "time": "Day",
    "sprays": "2-3",
    "occasions": [
      "Casual",
      "Office"
    ],
    "featured": false,
    "families": [
      "Aromatic"
    ],
    "accords": [
      "Fresh"
    ]
  },
  {
    "id": "772",
    "slug": "montale-oud-tobacco",
    "brand": "Montale",
    "name": "Oud Tobacco",
    "gender": "for women and men",
    "topNotes": [
      "Sumac",
      "Citruses",
      "Cumin"
    ],
    "heartNotes": [
      "Agarwood (Oud)",
      "Orange Blossom",
      "Incense"
    ],
    "baseNotes": [
      "Tobacco",
      "Tonka Bean",
      "Agarwood (Oud)"
    ],
    "seasons": [
      "Spring",
      "Summer",
      "Winter"
    ],
    "time": "Day / Evening",
    "sprays": "4-6",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal",
      "Office"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Citrus",
      "Floral"
    ],
    "accords": [
      "Balsamic",
      "Floral",
      "Fresh",
      "Spicy"
    ]
  },
  {
    "id": "773",
    "slug": "montale-oudmazing",
    "brand": "Montale",
    "name": "Oudmazing",
    "gender": "for women and men",
    "topNotes": [
      "Agarwood (Oud)",
      "Fig",
      "Pear",
      "Sicilian Orange",
      "Sicilian Bergamot"
    ],
    "heartNotes": [
      "Patchouli Leaf",
      "Orris",
      "Egyptian Jasmine"
    ],
    "baseNotes": [
      "Grapes",
      "Madagascar Vanilla",
      "Leather",
      "White Musk"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer",
      "Winter"
    ],
    "time": "Day / Evening",
    "sprays": "4-6",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal",
      "Office"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Citrus",
      "Floral"
    ],
    "accords": [
      "Earthy",
      "Floral",
      "Fresh",
      "Fruity"
    ]
  },
  {
    "id": "774",
    "slug": "montale-roses-musk",
    "brand": "Montale",
    "name": "Roses Musk",
    "gender": "for women and men",
    "topNotes": [
      "Not separately listed"
    ],
    "heartNotes": [
      "Not separately listed"
    ],
    "baseNotes": [
      "Not separately listed"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer"
    ],
    "time": "Day",
    "sprays": "3-4",
    "occasions": [
      "Casual",
      "Office"
    ],
    "featured": false,
    "families": [
      "Aromatic"
    ],
    "accords": [
      "Fresh"
    ]
  },
  {
    "id": "775",
    "slug": "moschino-cheap-chic-i-love-love",
    "brand": "Moschino",
    "name": "Cheap Chic I Love Love",
    "gender": "for women",
    "topNotes": [
      "Grapefruit",
      "Orange",
      "Lemon",
      "Red Currant"
    ],
    "heartNotes": [
      "Sugar Cane",
      "Bulrush",
      "Lily-of-the-Valley",
      "Tea Rose",
      "Cinnamon"
    ],
    "baseNotes": [
      "Musk",
      "Cedar",
      "Thanaka Wood"
    ],
    "seasons": [
      "Spring",
      "Summer",
      "Winter"
    ],
    "time": "Day / Evening",
    "sprays": "4-6",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal",
      "Office"
    ],
    "featured": false,
    "families": [
      "Citrus",
      "Floral",
      "Fruity"
    ],
    "accords": [
      "Floral",
      "Fresh",
      "Fruity",
      "Musky"
    ]
  },
  {
    "id": "776",
    "slug": "moschino-gold-fresh-couture",
    "brand": "Moschino",
    "name": "Gold Fresh Couture",
    "gender": "for women",
    "topNotes": [
      "Pear",
      "Mango",
      "White Peach",
      "Rhubarb Leaf",
      "Mandarin Orange",
      "Grapefruit"
    ],
    "heartNotes": [
      "Orchid",
      "Jasmine",
      "Lily-of-the-Valley"
    ],
    "baseNotes": [
      "Vanilla",
      "Musk",
      "Akigalawood",
      "Sandalwood",
      "Patchouli"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer"
    ],
    "time": "Day",
    "sprays": "4-6",
    "occasions": [
      "Brunch",
      "Casual Daytime Events",
      "College",
      "Office",
      "Travel"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Citrus",
      "Floral"
    ],
    "accords": [
      "Earthy",
      "Floral",
      "Fresh",
      "Fruity"
    ]
  },
  {
    "id": "777",
    "slug": "moschino-toy-2",
    "brand": "Moschino",
    "name": "Toy 2",
    "gender": "for women",
    "topNotes": [
      "Apple",
      "Mandarin Orange",
      "Magnolia"
    ],
    "heartNotes": [
      "White Currant",
      "Peony",
      "Jasmine"
    ],
    "baseNotes": [
      "Musk",
      "Sandalwood",
      "Amberwood"
    ],
    "seasons": [
      "Spring",
      "Summer",
      "Winter"
    ],
    "time": "Day / Evening",
    "sprays": "4-6",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal",
      "Office"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Citrus",
      "Floral"
    ],
    "accords": [
      "Floral",
      "Fresh",
      "Fruity",
      "Musky"
    ]
  },
  {
    "id": "778",
    "slug": "moschino-toy-boy",
    "brand": "Moschino",
    "name": "Toy Boy",
    "gender": "for men",
    "topNotes": [
      "Pink Pepper",
      "Pear",
      "Indonesian Nutmeg",
      "elemi",
      "Bergamot"
    ],
    "heartNotes": [
      "Rose",
      "Clove",
      "Magnolia",
      "Flax"
    ],
    "baseNotes": [
      "Cashmeran",
      "Haitian Vetiver",
      "Sandalwood",
      "Sylkolide",
      "Amber"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer"
    ],
    "time": "Day",
    "sprays": "4-6",
    "occasions": [
      "Brunch",
      "Casual Daytime Events",
      "College",
      "Office",
      "Travel"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Citrus",
      "Floral"
    ],
    "accords": [
      "Earthy",
      "Floral",
      "Fresh",
      "Fruity"
    ]
  },
  {
    "id": "779",
    "slug": "mugler-a-men",
    "brand": "Mugler",
    "name": "A Men",
    "gender": "for men",
    "topNotes": [
      "Lavender",
      "Mint",
      "Fruity",
      "Spicy Notes",
      "Coriander",
      "Green Notes",
      "Bergamot"
    ],
    "heartNotes": [
      "Caramel",
      "Patchouli",
      "Honey",
      "Milk",
      "Cedar",
      "Jasmine",
      "Lily-of-the-Valley"
    ],
    "baseNotes": [
      "Coffee",
      "Patchouli",
      "Vanilla",
      "Tonka Bean",
      "Benzoin",
      "Amber",
      "Sandalwood"
    ],
    "seasons": [
      "Ac Venues",
      "Winter",
      "Cool Nights"
    ],
    "time": "Evening",
    "sprays": "1-2 sprays",
    "occasions": [
      "Receptions",
      "Winter Weddings",
      "Festive Evenings",
      "Formal Dinners"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Aromatic",
      "Citrus"
    ],
    "accords": [
      "Earthy",
      "Floral",
      "Fresh",
      "Green"
    ]
  },
  {
    "id": "780",
    "slug": "mugler-a-men-pure-coffee",
    "brand": "Mugler",
    "name": "A Men Pure Coffee",
    "gender": "for men",
    "topNotes": [
      "Not separately listed"
    ],
    "heartNotes": [
      "Not separately listed"
    ],
    "baseNotes": [
      "Not separately listed"
    ],
    "seasons": [
      "Spring",
      "Ac Venues",
      "Mild Winter",
      "Monsoon Evenings"
    ],
    "time": "Day / Evening",
    "sprays": "2-3 sprays VIDEH / MASTER PERFUME CATALOG",
    "occasions": [
      "Lunches",
      "Smart Casuals",
      "Dates",
      "Office",
      "Pujas"
    ],
    "featured": false,
    "families": [
      "Aromatic"
    ],
    "accords": [
      "Fresh"
    ]
  },
  {
    "id": "781",
    "slug": "mugler-a-men-pure-havane",
    "brand": "Mugler",
    "name": "A Men Pure Havane",
    "gender": "for men",
    "topNotes": [
      "White Honey",
      "Tobacco"
    ],
    "heartNotes": [
      "Vanille",
      "Cacao",
      "Patchouli"
    ],
    "baseNotes": [
      "Amber",
      "French labdanum",
      "Styrax"
    ],
    "seasons": [
      "Monsoon",
      "Winter"
    ],
    "time": "Evening",
    "sprays": "2-3",
    "occasions": [
      "Date Night",
      "Formal"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Gourmand",
      "Woody"
    ],
    "accords": [
      "Earthy",
      "Sweet",
      "Warm",
      "Woody"
    ]
  },
  {
    "id": "782",
    "slug": "mugler-alien",
    "brand": "Mugler",
    "name": "Alien",
    "gender": "for women",
    "topNotes": [
      "Jasmine Sambac"
    ],
    "heartNotes": [
      "Cashmeran"
    ],
    "baseNotes": [
      "Amber"
    ],
    "seasons": [
      "Ac Venues",
      "Winter",
      "Cool Nights"
    ],
    "time": "Evening",
    "sprays": "1-2 sprays",
    "occasions": [
      "Receptions",
      "Winter Weddings",
      "Festive Evenings",
      "Formal Dinners"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Floral"
    ],
    "accords": [
      "Floral",
      "Warm"
    ]
  },
  {
    "id": "783",
    "slug": "mugler-alien-hypersense",
    "brand": "Mugler",
    "name": "Alien Hypersense",
    "gender": "for women",
    "topNotes": [
      "Pear",
      "Green Mandarin"
    ],
    "heartNotes": [
      "Jasmine Sambac",
      "Indian Jasmine"
    ],
    "baseNotes": [
      "Cashmeran",
      "Musk",
      "Amberwood",
      "Driftwood"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer"
    ],
    "time": "Day",
    "sprays": "4-6",
    "occasions": [
      "Brunch",
      "Casual Daytime Events",
      "College",
      "Office",
      "Travel"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Citrus",
      "Floral"
    ],
    "accords": [
      "Floral",
      "Fresh",
      "Fruity",
      "Green"
    ]
  },
  {
    "id": "784",
    "slug": "mugler-alien-oud-majestueux",
    "brand": "Mugler",
    "name": "Alien Oud Majestueux",
    "gender": "for women",
    "topNotes": [
      "Saffron",
      "Cardamom"
    ],
    "heartNotes": [
      "Jasmine",
      "Cashmeran"
    ],
    "baseNotes": [
      "Agarwood (Oud)",
      "Amber"
    ],
    "seasons": [
      "Ac Venues",
      "Winter",
      "Monsoon Evenings"
    ],
    "time": "Evening",
    "sprays": "3-4 sprays; 2-3 indoors Sprays: 2-3 sprays",
    "occasions": [
      "Celebrations",
      "Receptions",
      "Dinner Dates",
      "Formal Events"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Floral",
      "Spicy"
    ],
    "accords": [
      "Floral",
      "Spicy",
      "Warm",
      "Woody"
    ]
  },
  {
    "id": "785",
    "slug": "mugler-angel",
    "brand": "Mugler",
    "name": "Angel",
    "gender": "for women",
    "topNotes": [
      "Cotton Candy",
      "Coconut",
      "Cassis",
      "Melon",
      "Jasmine",
      "Bergamot",
      "Pineapple",
      "Mandarin Orange"
    ],
    "heartNotes": [
      "Honey",
      "Red Berries",
      "Blackberry",
      "Plum",
      "Apricot",
      "Peach",
      "Jasmine",
      "Nutmeg",
      "Orchid",
      "Caraway",
      "Rose",
      "Lily-of-the-Valley"
    ],
    "baseNotes": [
      "Patchouli"
    ],
    "seasons": [
      "Ac Venues",
      "Winter",
      "Cool Nights"
    ],
    "time": "Evening",
    "sprays": "1-2 sprays",
    "occasions": [
      "Receptions",
      "Winter Weddings",
      "Festive Evenings",
      "Formal Dinners"
    ],
    "featured": false,
    "families": [
      "Citrus",
      "Floral",
      "Fruity"
    ],
    "accords": [
      "Earthy",
      "Floral",
      "Fresh",
      "Fruity"
    ]
  },
  {
    "id": "786",
    "slug": "mugler-aura-mugler",
    "brand": "Mugler",
    "name": "Aura Mugler",
    "gender": "for women",
    "topNotes": [
      "Rhubarb Leaf",
      "Bergamot"
    ],
    "heartNotes": [
      "Green Notes",
      "Orange Blossom",
      "Ylang-Ylang",
      "Pear"
    ],
    "baseNotes": [
      "Bourbon Vanilla",
      "Woody Notes",
      "Amberwood",
      "Sandalwood",
      "Coumarin"
    ],
    "seasons": [
      "Spring",
      "Ac Venues",
      "Mild Winter",
      "Monsoon Evenings"
    ],
    "time": "Day / Evening",
    "sprays": "2-3 sprays",
    "occasions": [
      "Lunches",
      "Smart Casuals",
      "Dates",
      "Office",
      "Pujas"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Citrus",
      "Floral"
    ],
    "accords": [
      "Floral",
      "Fresh",
      "Fruity",
      "Green"
    ]
  },
  {
    "id": "787",
    "slug": "mugler-a-men-pure-malt",
    "brand": "Mugler",
    "name": "A Men Pure Malt",
    "gender": "for men",
    "topNotes": [
      "Fruity Notes",
      "Orange",
      "Bergamot"
    ],
    "heartNotes": [
      "Malt",
      "Whiskey",
      "Patchouli",
      "Coffee",
      "Cedar"
    ],
    "baseNotes": [
      "Peat",
      "Vanilla",
      "Amber",
      "Musk"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer",
      "Winter"
    ],
    "time": "Day / Evening",
    "sprays": "4-6",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal",
      "Office"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Citrus",
      "Gourmand"
    ],
    "accords": [
      "Earthy",
      "Fresh",
      "Musky",
      "Sweet"
    ]
  },
  {
    "id": "788",
    "slug": "mugler-angel-nova",
    "brand": "Mugler",
    "name": "Angel Nova",
    "gender": "for women",
    "topNotes": [
      "Raspberry",
      "Litchi"
    ],
    "heartNotes": [
      "Damask Rose"
    ],
    "baseNotes": [
      "Akigalawood",
      "Benzoin"
    ],
    "seasons": [
      "Spring",
      "Ac Venues",
      "Mild Winter",
      "Monsoon Evenings"
    ],
    "time": "Day / Evening",
    "sprays": "2-3 sprays",
    "occasions": [
      "Lunches",
      "Smart Casuals",
      "Dates",
      "Office",
      "Pujas"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Floral",
      "Fruity"
    ],
    "accords": [
      "Floral",
      "Fruity",
      "Warm",
      "Woody"
    ]
  },
  {
    "id": "789",
    "slug": "mugler-mugler-cologne",
    "brand": "Mugler",
    "name": "Mugler Cologne",
    "gender": "for women and men",
    "topNotes": [
      "Neroli",
      "Bergamot",
      "Petitgrain"
    ],
    "heartNotes": [
      "African Orange Flower"
    ],
    "baseNotes": [
      "Musk"
    ],
    "seasons": [
      "Spring",
      "Summer",
      "Monsoon"
    ],
    "time": "Day",
    "sprays": "3-4 sprays; 2-3 indoors",
    "occasions": [
      "Travel",
      "Casual Daytime Events",
      "College",
      "Office",
      "Brunch"
    ],
    "featured": false,
    "families": [
      "Citrus"
    ],
    "accords": [
      "Fresh",
      "Musky"
    ]
  },
  {
    "id": "790",
    "slug": "serge-lutens-muscs-koublai-khan",
    "brand": "Serge Lutens",
    "name": "Muscs Koublai Khan",
    "gender": "for women and men",
    "topNotes": [
      "Not separately listed"
    ],
    "heartNotes": [
      "Not separately listed"
    ],
    "baseNotes": [
      "Not separately listed"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer"
    ],
    "time": "Day",
    "sprays": "3-4",
    "occasions": [
      "Casual",
      "Office"
    ],
    "featured": false,
    "families": [
      "Aromatic"
    ],
    "accords": [
      "Fresh"
    ]
  },
  {
    "id": "791",
    "slug": "serge-lutens-muscs-koublai-khan-791",
    "brand": "Serge Lutens",
    "name": "Muscs Koublai Khan",
    "gender": "for women and men",
    "topNotes": [
      "Not separately listed"
    ],
    "heartNotes": [
      "Not separately listed"
    ],
    "baseNotes": [
      "Not separately listed"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer"
    ],
    "time": "Day",
    "sprays": "3-4",
    "occasions": [
      "Casual",
      "Office"
    ],
    "featured": false,
    "families": [
      "Aromatic"
    ],
    "accords": [
      "Fresh"
    ]
  },
  {
    "id": "792",
    "slug": "myrurgia-maderas-de-oriente",
    "brand": "Myrurgia",
    "name": "Maderas de Oriente",
    "gender": "for women",
    "topNotes": [
      "Not separately listed"
    ],
    "heartNotes": [
      "Not separately listed"
    ],
    "baseNotes": [
      "Not separately listed"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer"
    ],
    "time": "Day",
    "sprays": "3-4",
    "occasions": [
      "Casual",
      "Office"
    ],
    "featured": false,
    "families": [
      "Aromatic"
    ],
    "accords": [
      "Fresh"
    ]
  },
  {
    "id": "793",
    "slug": "narciso-rodriguez-fleur-musc-for-her",
    "brand": "Narciso Rodriguez",
    "name": "Fleur Musc for Her",
    "gender": "for women",
    "topNotes": [
      "Pink Pepper"
    ],
    "heartNotes": [
      "Rose",
      "Musk",
      "Peony"
    ],
    "baseNotes": [
      "Patchouli",
      "Violet",
      "Amber"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Winter"
    ],
    "time": "Evening",
    "sprays": "2-3",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Floral",
      "Spicy"
    ],
    "accords": [
      "Earthy",
      "Floral",
      "Musky",
      "Powdery"
    ]
  },
  {
    "id": "794",
    "slug": "narciso-rodriguez-narciso",
    "brand": "Narciso Rodriguez",
    "name": "Narciso",
    "gender": "for women",
    "topNotes": [
      "Gardenia",
      "White Rose"
    ],
    "heartNotes": [
      "Musk"
    ],
    "baseNotes": [
      "White Cedar Extract",
      "Cedar",
      "Vetiver"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Winter"
    ],
    "time": "Evening",
    "sprays": "3-4",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal"
    ],
    "featured": false,
    "families": [
      "Floral",
      "Woody"
    ],
    "accords": [
      "Earthy",
      "Floral",
      "Musky",
      "Woody"
    ]
  },
  {
    "id": "795",
    "slug": "narciso-rodriguez-narciso-rodriguez-musc-for-her",
    "brand": "Narciso Rodriguez",
    "name": "Narciso Rodriguez Musc for Her",
    "gender": "for women",
    "topNotes": [
      "Not separately listed"
    ],
    "heartNotes": [
      "Not separately listed"
    ],
    "baseNotes": [
      "Not separately listed"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer"
    ],
    "time": "Day",
    "sprays": "3-4",
    "occasions": [
      "Casual",
      "Office"
    ],
    "featured": false,
    "families": [
      "Aromatic"
    ],
    "accords": [
      "Fresh"
    ]
  },
  {
    "id": "796",
    "slug": "nasomatto-absinth",
    "brand": "Nasomatto",
    "name": "Absinth",
    "gender": "for women and men",
    "topNotes": [
      "Not separately listed"
    ],
    "heartNotes": [
      "Not separately listed"
    ],
    "baseNotes": [
      "Not separately listed"
    ],
    "seasons": [
      "Spring",
      "Ac Venues",
      "Mild Winter",
      "Monsoon Evenings"
    ],
    "time": "Day / Evening",
    "sprays": "2-3 sprays",
    "occasions": [
      "Lunches",
      "Smart Casuals",
      "Dates",
      "Office",
      "Pujas"
    ],
    "featured": false,
    "families": [
      "Aromatic"
    ],
    "accords": [
      "Fresh"
    ]
  },
  {
    "id": "797",
    "slug": "nasomatto-baraonda",
    "brand": "Nasomatto",
    "name": "Baraonda",
    "gender": "for women and men",
    "topNotes": [
      "Not separately listed"
    ],
    "heartNotes": [
      "Not separately listed"
    ],
    "baseNotes": [
      "Not separately listed"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer"
    ],
    "time": "Day",
    "sprays": "3-4",
    "occasions": [
      "Casual",
      "Office"
    ],
    "featured": false,
    "families": [
      "Aromatic"
    ],
    "accords": [
      "Fresh"
    ]
  },
  {
    "id": "798",
    "slug": "nasomatto-black-afgano",
    "brand": "Nasomatto",
    "name": "Black Afgano",
    "gender": "for women and men",
    "topNotes": [
      "cannabis",
      "Green Notes"
    ],
    "heartNotes": [
      "Resins",
      "Woodsy Notes",
      "Tobacco",
      "Coffee"
    ],
    "baseNotes": [
      "Agarwood (Oud)",
      "Incense"
    ],
    "seasons": [
      "Spring",
      "Ac Venues",
      "Mild Winter",
      "Monsoon Evenings"
    ],
    "time": "Day / Evening",
    "sprays": "2-3 sprays",
    "occasions": [
      "Lunches",
      "Smart Casuals",
      "Dates",
      "Office",
      "Pujas"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Gourmand",
      "Woody"
    ],
    "accords": [
      "Balsamic",
      "Green",
      "Sweet",
      "Warm"
    ]
  },
  {
    "id": "799",
    "slug": "nasomatto-blamage",
    "brand": "Nasomatto",
    "name": "Blamage",
    "gender": "for women and men",
    "topNotes": [
      "Not separately listed"
    ],
    "heartNotes": [
      "Not separately listed"
    ],
    "baseNotes": [
      "Not separately listed"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer"
    ],
    "time": "Day",
    "sprays": "3-4",
    "occasions": [
      "Casual",
      "Office"
    ],
    "featured": false,
    "families": [
      "Aromatic"
    ],
    "accords": [
      "Fresh"
    ]
  },
  {
    "id": "800",
    "slug": "nasomatto-duro",
    "brand": "Nasomatto",
    "name": "Duro",
    "gender": "for men",
    "topNotes": [
      "Not separately listed"
    ],
    "heartNotes": [
      "Not separately listed"
    ],
    "baseNotes": [
      "Not separately listed"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer"
    ],
    "time": "Day",
    "sprays": "3-4",
    "occasions": [
      "Casual",
      "Office"
    ],
    "featured": false,
    "families": [
      "Aromatic"
    ],
    "accords": [
      "Fresh"
    ]
  },
  {
    "id": "801",
    "slug": "nasomatto-fantomas",
    "brand": "Nasomatto",
    "name": "Fantomas",
    "gender": "for women and men",
    "topNotes": [
      "Not separately listed"
    ],
    "heartNotes": [
      "Not separately listed"
    ],
    "baseNotes": [
      "Not separately listed"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer"
    ],
    "time": "Day",
    "sprays": "3-4",
    "occasions": [
      "Casual",
      "Office"
    ],
    "featured": false,
    "families": [
      "Aromatic"
    ],
    "accords": [
      "Fresh"
    ]
  },
  {
    "id": "802",
    "slug": "nasomatto-hindu-grass",
    "brand": "Nasomatto",
    "name": "Hindu Grass",
    "gender": "for women and men",
    "topNotes": [
      "Not separately listed"
    ],
    "heartNotes": [
      "Not separately listed"
    ],
    "baseNotes": [
      "Not separately listed"
    ],
    "seasons": [
      "Spring",
      "Ac Venues",
      "Mild Winter",
      "Monsoon Evenings"
    ],
    "time": "Day / Evening",
    "sprays": "2-3 sprays",
    "occasions": [
      "Lunches",
      "Smart Casuals",
      "Dates",
      "Office",
      "Pujas"
    ],
    "featured": false,
    "families": [
      "Aromatic"
    ],
    "accords": [
      "Fresh"
    ]
  },
  {
    "id": "803",
    "slug": "nasomatto-narcotic-venus",
    "brand": "Nasomatto",
    "name": "Narcotic Venus",
    "gender": "for women",
    "topNotes": [
      "Not separately listed"
    ],
    "heartNotes": [
      "Not separately listed"
    ],
    "baseNotes": [
      "Not separately listed"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer"
    ],
    "time": "Day",
    "sprays": "3-4",
    "occasions": [
      "Casual",
      "Office"
    ],
    "featured": false,
    "families": [
      "Aromatic"
    ],
    "accords": [
      "Fresh"
    ]
  },
  {
    "id": "804",
    "slug": "nasomatto-nuda",
    "brand": "Nasomatto",
    "name": "Nuda",
    "gender": "for women",
    "topNotes": [
      "Not separately listed"
    ],
    "heartNotes": [
      "Not separately listed"
    ],
    "baseNotes": [
      "Not separately listed"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer"
    ],
    "time": "Day",
    "sprays": "3-4",
    "occasions": [
      "Casual",
      "Office"
    ],
    "featured": false,
    "families": [
      "Aromatic"
    ],
    "accords": [
      "Fresh"
    ]
  },
  {
    "id": "805",
    "slug": "nasomatto-pardon",
    "brand": "Nasomatto",
    "name": "Pardon",
    "gender": "for men",
    "topNotes": [
      "Magnolia",
      "Flowers"
    ],
    "heartNotes": [
      "Dark Chocolate",
      "Tonka Bean",
      "Cinnamon"
    ],
    "baseNotes": [
      "Agarwood (Oud)",
      "Sandalwood"
    ],
    "seasons": [
      "Spring",
      "Winter"
    ],
    "time": "Evening",
    "sprays": "2-3",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Floral",
      "Gourmand"
    ],
    "accords": [
      "Floral",
      "Spicy",
      "Sweet",
      "Warm"
    ]
  },
  {
    "id": "806",
    "slug": "nasomatto-sadonaso",
    "brand": "Nasomatto",
    "name": "Sadonaso",
    "gender": "for women and men",
    "topNotes": [
      "Not separately listed"
    ],
    "heartNotes": [
      "Not separately listed"
    ],
    "baseNotes": [
      "Not separately listed"
    ],
    "seasons": [
      "Ac Venues",
      "Winter",
      "Monsoon Evenings"
    ],
    "time": "Evening",
    "sprays": "2-3 sprays",
    "occasions": [
      "Celebrations",
      "Receptions",
      "Dinner Dates",
      "Formal Events"
    ],
    "featured": false,
    "families": [
      "Aromatic"
    ],
    "accords": [
      "Fresh"
    ]
  },
  {
    "id": "807",
    "slug": "nasomatto-silver-musk",
    "brand": "Nasomatto",
    "name": "Silver Musk",
    "gender": "for women and men",
    "topNotes": [
      "Not separately listed"
    ],
    "heartNotes": [
      "Not separately listed"
    ],
    "baseNotes": [
      "Not separately listed"
    ],
    "seasons": [
      "Spring",
      "Ac Venues",
      "Mild Winter",
      "Monsoon Evenings"
    ],
    "time": "Day / Evening",
    "sprays": "2-3 sprays",
    "occasions": [
      "Lunches",
      "Smart Casuals",
      "Dates",
      "Office",
      "Pujas"
    ],
    "featured": false,
    "families": [
      "Aromatic"
    ],
    "accords": [
      "Fresh"
    ]
  },
  {
    "id": "808",
    "slug": "nicolai-parfumeur-createur-new-york-intense",
    "brand": "Nicolai Parfumeur Createur",
    "name": "New York Intense",
    "gender": "for women and men",
    "topNotes": [
      "Not separately listed"
    ],
    "heartNotes": [
      "Not separately listed"
    ],
    "baseNotes": [
      "Not separately listed"
    ],
    "seasons": [
      "Spring",
      "Ac Venues",
      "Mild Winter",
      "Monsoon Evenings"
    ],
    "time": "Day / Evening",
    "sprays": "2-3 sprays",
    "occasions": [
      "Lunches",
      "Smart Casuals",
      "Dates",
      "Office",
      "Pujas"
    ],
    "featured": false,
    "families": [
      "Aromatic"
    ],
    "accords": [
      "Fresh"
    ]
  },
  {
    "id": "809",
    "slug": "nina-ricci-patchouli-intense",
    "brand": "Nina Ricci",
    "name": "Patchouli Intense",
    "gender": "for women and men",
    "topNotes": [
      "Geranium",
      "Lavender",
      "Orange"
    ],
    "heartNotes": [
      "Patchouli",
      "Ceylon Cinnamon",
      "Rose"
    ],
    "baseNotes": [
      "Sandalwood",
      "Amber",
      "Vanilla"
    ],
    "seasons": [
      "Spring",
      "Ac Venues",
      "Mild Winter",
      "Monsoon Evenings"
    ],
    "time": "Day / Evening",
    "sprays": "2-3 sprays L Air du Temps for women",
    "occasions": [
      "Lunches",
      "Smart Casuals",
      "Dates",
      "Office",
      "Pujas"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Aromatic",
      "Citrus"
    ],
    "accords": [
      "Earthy",
      "Floral",
      "Fresh",
      "Herbal"
    ]
  },
  {
    "id": "810",
    "slug": "sprays-2-3-sprays-l-air-du-temps",
    "brand": "Sprays: 2-3 Sprays",
    "name": "L Air du Temps",
    "gender": "for women",
    "topNotes": [
      "Carnation",
      "Aldehydes",
      "Rose",
      "Neroli",
      "Brazilian Rosewood",
      "Peach",
      "Bergamot"
    ],
    "heartNotes": [
      "Carnation",
      "Cloves",
      "Gardenia",
      "Jasmine",
      "Ylang-Ylang",
      "Rose",
      "Violet",
      "Orris Root",
      "Rosemary",
      "Orchid"
    ],
    "baseNotes": [
      "Spices",
      "Iris",
      "Oakmoss",
      "Musk",
      "Sandalwood"
    ],
    "seasons": [
      "Spring",
      "Summer",
      "Monsoon"
    ],
    "time": "Day",
    "sprays": "3-4 sprays; 2-3 indoors VIDEH / MASTER PERFUME CATALOG",
    "occasions": [
      "Travel",
      "Casual Daytime Events",
      "College",
      "Office",
      "Brunch"
    ],
    "featured": false,
    "families": [
      "Aromatic",
      "Citrus",
      "Floral"
    ],
    "accords": [
      "Floral",
      "Fresh",
      "Fruity",
      "Herbal"
    ]
  },
  {
    "id": "811",
    "slug": "nina-ricci-les-monstres-de-nina-ricci-luna",
    "brand": "Nina Ricci",
    "name": "Les Monstres de Nina Ricci Luna",
    "gender": "for women",
    "topNotes": [
      "Pineapple",
      "Lime"
    ],
    "heartNotes": [
      "Floral Notes"
    ],
    "baseNotes": [
      "Caramel"
    ],
    "seasons": [
      "Spring",
      "Ac Venues",
      "Mild Winter",
      "Monsoon Evenings"
    ],
    "time": "Day / Evening",
    "sprays": "2-3 sprays",
    "occasions": [
      "Lunches",
      "Smart Casuals",
      "Dates",
      "Office",
      "Pujas"
    ],
    "featured": false,
    "families": [
      "Citrus",
      "Floral",
      "Fruity"
    ],
    "accords": [
      "Floral",
      "Fresh",
      "Fruity",
      "Sweet"
    ]
  },
  {
    "id": "812",
    "slug": "nishane-ani",
    "brand": "Nishane",
    "name": "Ani",
    "gender": "for women and men",
    "topNotes": [
      "Ginger",
      "Bergamot",
      "Pink Pepper",
      "Green Notes"
    ],
    "heartNotes": [
      "Cardamom",
      "Black Currant",
      "Turkish Rose"
    ],
    "baseNotes": [
      "Vanilla",
      "Benzoin",
      "Sandalwood",
      "Cedar",
      "Patchouli",
      "Ambergris",
      "Musk"
    ],
    "seasons": [
      "Ac Venues",
      "Winter",
      "Cool Nights"
    ],
    "time": "Evening",
    "sprays": "1-2 sprays PAGE 82 / 118",
    "occasions": [
      "Receptions",
      "Winter Weddings",
      "Festive Evenings",
      "Formal Dinners"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Citrus",
      "Floral"
    ],
    "accords": [
      "Earthy",
      "Floral",
      "Fresh",
      "Fruity"
    ]
  },
  {
    "id": "813",
    "slug": "nishane-ani-813",
    "brand": "Nishane",
    "name": "Ani",
    "gender": "for women and men",
    "topNotes": [
      "Ginger",
      "Bergamot",
      "Pink Pepper",
      "Green Notes"
    ],
    "heartNotes": [
      "Cardamom",
      "Black Currant",
      "Turkish Rose"
    ],
    "baseNotes": [
      "Vanilla",
      "Benzoin",
      "Sandalwood",
      "Cedar",
      "Patchouli",
      "Ambergris",
      "Musk"
    ],
    "seasons": [
      "Spring",
      "Ac Venues",
      "Mild Winter",
      "Monsoon Evenings"
    ],
    "time": "Day / Evening",
    "sprays": "2-3 sprays",
    "occasions": [
      "Lunches",
      "Smart Casuals",
      "Dates",
      "Office",
      "Pujas"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Citrus",
      "Floral"
    ],
    "accords": [
      "Earthy",
      "Floral",
      "Fresh",
      "Fruity"
    ]
  },
  {
    "id": "814",
    "slug": "nishane-ege-aigaio",
    "brand": "Nishane",
    "name": "EGE AIGAIO",
    "gender": "for women and men",
    "topNotes": [
      "Violet Leaves",
      "Yuzu",
      "Anise"
    ],
    "heartNotes": [
      "Mint",
      "Basil",
      "Cardamom"
    ],
    "baseNotes": [
      "Licorice",
      "Olibanum"
    ],
    "seasons": [
      "Spring",
      "Summer",
      "Monsoon"
    ],
    "time": "Day",
    "sprays": "3-4 sprays; 2-3 indoors",
    "occasions": [
      "Travel",
      "Casual Daytime Events",
      "College",
      "Office",
      "Brunch"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Aromatic",
      "Citrus"
    ],
    "accords": [
      "Floral",
      "Fresh",
      "Herbal",
      "Powdery"
    ]
  },
  {
    "id": "815",
    "slug": "nishane-fan-your-flames",
    "brand": "Nishane",
    "name": "Fan Your Flames",
    "gender": "for women and men",
    "topNotes": [
      "Coconut",
      "Rum"
    ],
    "heartNotes": [
      "Tobacco",
      "Tonka Bean"
    ],
    "baseNotes": [
      "Chinese Cedar",
      "Oakmoss"
    ],
    "seasons": [
      "Spring",
      "Winter"
    ],
    "time": "Evening",
    "sprays": "2-3",
    "occasions": [
      "Date Night",
      "Formal"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Fruity",
      "Gourmand"
    ],
    "accords": [
      "Fruity",
      "Sweet",
      "Warm",
      "Woody"
    ]
  },
  {
    "id": "816",
    "slug": "nishane-hacivat",
    "brand": "Nishane",
    "name": "Hacivat",
    "gender": "for women and men",
    "topNotes": [
      "Pineapple",
      "Grapefruit",
      "Bergamot"
    ],
    "heartNotes": [
      "Cedar",
      "Patchouli",
      "Jasmine"
    ],
    "baseNotes": [
      "Oakmoss",
      "Woody Notes"
    ],
    "seasons": [
      "Ac Venues",
      "Monsoon Evenings",
      "Winter"
    ],
    "time": "Evening",
    "sprays": "4-6",
    "occasions": [
      "Celebrations",
      "Dinner Dates",
      "Formal Events",
      "Receptions"
    ],
    "featured": false,
    "families": [
      "Citrus",
      "Floral",
      "Fruity"
    ],
    "accords": [
      "Earthy",
      "Floral",
      "Fresh",
      "Fruity"
    ]
  },
  {
    "id": "817",
    "slug": "nishane-nefs",
    "brand": "Nishane",
    "name": "Nefs",
    "gender": "for women and men",
    "topNotes": [
      "Honey",
      "Saffron",
      "Fig",
      "Violet",
      "Sage"
    ],
    "heartNotes": [
      "Rose",
      "Osmanthus",
      "Nutmeg",
      "Jasmine",
      "Geranium"
    ],
    "baseNotes": [
      "Agarwood (Oud)",
      "Whiskey",
      "Vanilla",
      "Leather",
      "Amber",
      "Gurjan balsam",
      "Cinnamon",
      "Cedar"
    ],
    "seasons": [
      "Ac Venues",
      "Winter",
      "Cool Nights"
    ],
    "time": "Evening",
    "sprays": "1-2 sprays",
    "occasions": [
      "Receptions",
      "Winter Weddings",
      "Festive Evenings",
      "Formal Dinners"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Aromatic",
      "Floral"
    ],
    "accords": [
      "Floral",
      "Fruity",
      "Herbal",
      "Leather"
    ]
  },
  {
    "id": "818",
    "slug": "nishane-tuberoza-x",
    "brand": "Nishane",
    "name": "Tuberoza X",
    "gender": "for women and men",
    "topNotes": [
      "Java vetiver oil",
      "Anise",
      "Bergamot",
      "Pepper"
    ],
    "heartNotes": [
      "Bourbon Vetiver",
      "Haitian Vetiver",
      "Neroli",
      "Tonka Bean"
    ],
    "baseNotes": [
      "Vetiver",
      "Leather",
      "Amber"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer",
      "Winter"
    ],
    "time": "Day / Evening",
    "sprays": "4-6",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal",
      "Office"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Citrus",
      "Leather"
    ],
    "accords": [
      "Earthy",
      "Fresh",
      "Leather",
      "Spicy"
    ]
  },
  {
    "id": "819",
    "slug": "nishane-sultan-vetiver",
    "brand": "Nishane",
    "name": "Sultan Vetiver",
    "gender": "for women and men",
    "topNotes": [
      "Mandarin Orange",
      "Ylang-Ylang"
    ],
    "heartNotes": [
      "Indian Tuberose",
      "Lipstick",
      "Violet"
    ],
    "baseNotes": [
      "Musk",
      "Velvet",
      "Amber",
      "Sandalwood"
    ],
    "seasons": [
      "Spring",
      "Ac Venues",
      "Mild Winter",
      "Monsoon Evenings"
    ],
    "time": "Day / Evening",
    "sprays": "2-3 sprays",
    "occasions": [
      "Lunches",
      "Smart Casuals",
      "Dates",
      "Office",
      "Pujas"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Citrus",
      "Floral"
    ],
    "accords": [
      "Floral",
      "Fresh",
      "Musky",
      "Powdery"
    ]
  },
  {
    "id": "820",
    "slug": "nishane-wulong-cha",
    "brand": "Nishane",
    "name": "Wulong Cha",
    "gender": "for women and men",
    "topNotes": [
      "Bergamot",
      "Orange",
      "Mandarin Orange",
      "Litsea Cubeba"
    ],
    "heartNotes": [
      "Oolong tea",
      "Nutmeg"
    ],
    "baseNotes": [
      "Fig",
      "Musk"
    ],
    "seasons": [
      "Spring",
      "Ac Venues",
      "Mild Winter",
      "Monsoon Evenings"
    ],
    "time": "Day / Evening",
    "sprays": "2-3 sprays",
    "occasions": [
      "Lunches",
      "Smart Casuals",
      "Dates",
      "Office",
      "Pujas"
    ],
    "featured": false,
    "families": [
      "Aquatic",
      "Citrus",
      "Fruity"
    ],
    "accords": [
      "Fresh",
      "Fruity",
      "Marine",
      "Musky"
    ]
  },
  {
    "id": "821",
    "slug": "nivea-not-stated",
    "brand": "Nivea",
    "name": "Not stated",
    "gender": "Unisex",
    "topNotes": [
      "NA"
    ],
    "heartNotes": [
      "NA"
    ],
    "baseNotes": [
      "NA"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer"
    ],
    "time": "Day",
    "sprays": "3-4",
    "occasions": [
      "Casual",
      "Office"
    ],
    "featured": false,
    "families": [
      "Aromatic"
    ],
    "accords": [
      "Fresh"
    ]
  },
  {
    "id": "822",
    "slug": "o-boticario-lily-lumiere",
    "brand": "O Boticario",
    "name": "Lily Lumiere",
    "gender": "for women",
    "topNotes": [
      "Neroli",
      "Bergamot",
      "Mandarin Orange",
      "Pink Pepper"
    ],
    "heartNotes": [
      "Orange Blossom",
      "Osmanthus"
    ],
    "baseNotes": [
      "Vanilla",
      "Amber",
      "Sandalwood",
      "Patchouli",
      "Praline"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer",
      "Winter"
    ],
    "time": "Day / Evening",
    "sprays": "4-6",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal",
      "Office"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Citrus",
      "Floral"
    ],
    "accords": [
      "Earthy",
      "Floral",
      "Fresh",
      "Spicy"
    ]
  },
  {
    "id": "823",
    "slug": "ormonde-jayne-4-montabaco-intensivo",
    "brand": "Ormonde Jayne",
    "name": "4 Montabaco Intensivo",
    "gender": "for women and men",
    "topNotes": [
      "Yuzu",
      "Sweet Orange",
      "Cardamom",
      "Black Pepper"
    ],
    "heartNotes": [
      "elemi",
      "Labdanum",
      "Breu-Branco"
    ],
    "baseNotes": [
      "Benzoin",
      "Madagascar Vanilla",
      "Atlas Cedar"
    ],
    "seasons": [
      "Spring",
      "Summer",
      "Winter"
    ],
    "time": "Day / Evening",
    "sprays": "4-6",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal",
      "Office"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Citrus",
      "Spicy"
    ],
    "accords": [
      "Fresh",
      "Spicy",
      "Sweet",
      "Warm"
    ]
  },
  {
    "id": "824",
    "slug": "-824",
    "brand": "Archive",
    "name": "Classified Fragrance",
    "gender": "Unisex",
    "topNotes": [
      "Mountain Air",
      "Orange Oil",
      "Bergamot",
      "Cardamom",
      "Juniper",
      "Clary Sage"
    ],
    "heartNotes": [
      "Tea",
      "Hedione",
      "Violet",
      "Magnolia",
      "Rose"
    ],
    "baseNotes": [
      "Iso E Super",
      "Tobacco",
      "Suede",
      "Ambergris",
      "Sandalwood",
      "Moss",
      "Tonka Bean"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer",
      "Winter"
    ],
    "time": "Day / Evening",
    "sprays": "4-6",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal",
      "Office"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Aromatic",
      "Citrus"
    ],
    "accords": [
      "Floral",
      "Fresh",
      "Herbal",
      "Leather"
    ]
  },
  {
    "id": "825",
    "slug": "ormonde-jayne-nawab-of-oudh",
    "brand": "Ormonde Jayne",
    "name": "Nawab of Oudh",
    "gender": "for women and men",
    "topNotes": [
      "Cardamom",
      "Orange",
      "Bergamot",
      "Green Notes",
      "Aldehydes"
    ],
    "heartNotes": [
      "Rose",
      "Pimento",
      "Cinnamon",
      "Orchid",
      "Magnolia",
      "Bay Leaf",
      "Hedione"
    ],
    "baseNotes": [
      "Agarwood (Oud)",
      "Ambergris",
      "Vetiver",
      "Labdanum",
      "Musk"
    ],
    "seasons": [
      "Spring",
      "Ac Venues",
      "Mild Winter",
      "Monsoon Evenings"
    ],
    "time": "Day / Evening",
    "sprays": "2-3 sprays",
    "occasions": [
      "Lunches",
      "Smart Casuals",
      "Dates",
      "Office",
      "Pujas"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Citrus",
      "Floral"
    ],
    "accords": [
      "Earthy",
      "Floral",
      "Fresh",
      "Green"
    ]
  },
  {
    "id": "826",
    "slug": "orto-parisi-bergamask",
    "brand": "Orto Parisi",
    "name": "Bergamask",
    "gender": "for women and men",
    "topNotes": [
      "Bergamot",
      "Lemon"
    ],
    "heartNotes": [
      "Lavender",
      "Orange Blossom",
      "Lily of the Valley"
    ],
    "baseNotes": [
      "Musk",
      "Cedar",
      "Tonka"
    ],
    "seasons": [
      "Spring",
      "Summer",
      "Monsoon"
    ],
    "time": "Day",
    "sprays": "3-4 sprays; 2-3 indoors",
    "occasions": [
      "Travel",
      "Casual Daytime Events",
      "College",
      "Office",
      "Brunch"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Aromatic",
      "Citrus"
    ],
    "accords": [
      "Floral",
      "Fresh",
      "Herbal",
      "Musky"
    ]
  },
  {
    "id": "827",
    "slug": "orto-parisi-boccanera",
    "brand": "Orto Parisi",
    "name": "Boccanera",
    "gender": "for women and men",
    "topNotes": [
      "Chili Pepper",
      "Black Pepper",
      "Ginger",
      "Cacao Pod"
    ],
    "heartNotes": [
      "Jasmine"
    ],
    "baseNotes": [
      "Chocolate",
      "Musk",
      "Leather",
      "Animal notes",
      "Cedar",
      "Patchouli",
      "Vanilla",
      "Sugar"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Winter"
    ],
    "time": "Evening",
    "sprays": "2-3",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Floral",
      "Gourmand"
    ],
    "accords": [
      "Earthy",
      "Floral",
      "Leather",
      "Musky"
    ]
  },
  {
    "id": "828",
    "slug": "orto-parisi-cuoium",
    "brand": "Orto Parisi",
    "name": "Cuoium",
    "gender": "for women and men",
    "topNotes": [
      "Animal notes",
      "Woody Notes"
    ],
    "heartNotes": [
      "Violet"
    ],
    "baseNotes": [
      "Leather",
      "Incense",
      "Cade oil",
      "Labdanum",
      "Cedar",
      "Patchouli",
      "Vanilla"
    ],
    "seasons": [
      "Spring",
      "Ac Venues",
      "Mild Winter",
      "Monsoon Evenings"
    ],
    "time": "Day / Evening",
    "sprays": "2-3 sprays",
    "occasions": [
      "Lunches",
      "Smart Casuals",
      "Dates",
      "Office",
      "Pujas"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Floral",
      "Leather"
    ],
    "accords": [
      "Balsamic",
      "Earthy",
      "Floral",
      "Leather"
    ]
  },
  {
    "id": "829",
    "slug": "orto-parisi-megamare",
    "brand": "Orto Parisi",
    "name": "Megamare",
    "gender": "for women and men",
    "topNotes": [
      "Bergamot",
      "Lemon"
    ],
    "heartNotes": [
      "Seaweed",
      "Calone",
      "Hedione"
    ],
    "baseNotes": [
      "Musk",
      "Ambroxan",
      "Cedar"
    ],
    "seasons": [
      "Spring",
      "Summer",
      "Winter"
    ],
    "time": "Day / Evening",
    "sprays": "4-6",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal",
      "Office"
    ],
    "featured": false,
    "families": [
      "Aquatic",
      "Citrus",
      "Woody"
    ],
    "accords": [
      "Fresh",
      "Marine",
      "Musky",
      "Woody"
    ]
  },
  {
    "id": "830",
    "slug": "orto-parisi-seminalis",
    "brand": "Orto Parisi",
    "name": "Seminalis",
    "gender": "for women and men",
    "topNotes": [
      "Not separately listed"
    ],
    "heartNotes": [
      "Not separately listed"
    ],
    "baseNotes": [
      "Not separately listed"
    ],
    "seasons": [
      "Spring",
      "Summer",
      "Monsoon"
    ],
    "time": "Day",
    "sprays": "3-4 sprays; 2-3 indoors",
    "occasions": [
      "Travel",
      "Casual Daytime Events",
      "College",
      "Office",
      "Brunch"
    ],
    "featured": false,
    "families": [
      "Aromatic"
    ],
    "accords": [
      "Fresh"
    ]
  },
  {
    "id": "831",
    "slug": "orto-parisi-stercus",
    "brand": "Orto Parisi",
    "name": "Stercus",
    "gender": "for women and men",
    "topNotes": [
      "Almond",
      "Aldehydes",
      "Anise"
    ],
    "heartNotes": [
      "Rose"
    ],
    "baseNotes": [
      "Agarwood",
      "Leather",
      "Musk",
      "Vanilla",
      "Heliotrope",
      "Cedar"
    ],
    "seasons": [
      "Spring",
      "Winter"
    ],
    "time": "Evening",
    "sprays": "2-3",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Floral",
      "Gourmand"
    ],
    "accords": [
      "Floral",
      "Leather",
      "Musky",
      "Spicy"
    ]
  },
  {
    "id": "832",
    "slug": "orto-parisi-terroni",
    "brand": "Orto Parisi",
    "name": "Terroni",
    "gender": "for women and men",
    "topNotes": [
      "Raspberry"
    ],
    "heartNotes": [
      "Birch",
      "Amber",
      "Benzoin"
    ],
    "baseNotes": [
      "Guaiac Wood",
      "Vetiver",
      "Cedar",
      "Musk",
      "Patchouli",
      "Tonka",
      "Moss",
      "Vanilla"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Winter"
    ],
    "time": "Evening",
    "sprays": "2-3",
    "occasions": [
      "Date Night",
      "Formal"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Fruity",
      "Woody"
    ],
    "accords": [
      "Earthy",
      "Fruity",
      "Musky",
      "Sweet"
    ]
  },
  {
    "id": "833",
    "slug": "paco-rabanne-black-xs",
    "brand": "Paco Rabanne",
    "name": "Black XS",
    "gender": "for men",
    "topNotes": [
      "Lemon",
      "Sage"
    ],
    "heartNotes": [
      "Praline",
      "Cinnamon",
      "Tolu Balsam",
      "Black Cardamom"
    ],
    "baseNotes": [
      "Brazilian Rosewood",
      "Patchouli",
      "Black Amber"
    ],
    "seasons": [
      "Spring",
      "Summer",
      "Monsoon"
    ],
    "time": "Day",
    "sprays": "3-4 sprays; 2-3 indoors",
    "occasions": [
      "Travel",
      "Casual Daytime Events",
      "College",
      "Office",
      "Brunch"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Aromatic",
      "Citrus"
    ],
    "accords": [
      "Earthy",
      "Floral",
      "Fresh",
      "Herbal"
    ]
  },
  {
    "id": "834",
    "slug": "paco-rabanne-black-xs-los-angeles-for-her",
    "brand": "Paco Rabanne",
    "name": "Black XS Los Angeles for Her",
    "gender": "for women",
    "topNotes": [
      "Bitter Orange",
      "Cranberry",
      "Coconut",
      "Tamarind",
      "Lemon"
    ],
    "heartNotes": [
      "Rum",
      "Orchid",
      "Hellebore flower",
      "Peach",
      "Jasmine",
      "Magnolia"
    ],
    "baseNotes": [
      "Vanilla",
      "Caramel",
      "Amber",
      "Woody Notes",
      "White Musk",
      "Patchouli"
    ],
    "seasons": [
      "Spring",
      "Ac Venues",
      "Mild Winter",
      "Monsoon Evenings"
    ],
    "time": "Day / Evening",
    "sprays": "2-3 sprays",
    "occasions": [
      "Lunches",
      "Smart Casuals",
      "Dates",
      "Office",
      "Pujas"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Citrus",
      "Floral"
    ],
    "accords": [
      "Earthy",
      "Floral",
      "Fresh",
      "Fruity"
    ]
  },
  {
    "id": "835",
    "slug": "paco-rabanne-fame",
    "brand": "Paco Rabanne",
    "name": "Fame",
    "gender": "for women",
    "topNotes": [
      "Mango",
      "Bergamot"
    ],
    "heartNotes": [
      "Jasmine",
      "Olibanum"
    ],
    "baseNotes": [
      "Vanilla",
      "Sandalwood"
    ],
    "seasons": [
      "Spring",
      "Summer",
      "Winter"
    ],
    "time": "Day / Evening",
    "sprays": "4-6",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal",
      "Office"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Citrus",
      "Floral"
    ],
    "accords": [
      "Floral",
      "Fresh",
      "Fruity",
      "Sweet"
    ]
  },
  {
    "id": "836",
    "slug": "paco-rabanne-invictus-aqua",
    "brand": "Paco Rabanne",
    "name": "Invictus Aqua",
    "gender": "for men",
    "topNotes": [
      "Yuzu",
      "Grapefruit",
      "Pink Pepper"
    ],
    "heartNotes": [
      "Sea water",
      "Violet Leaf"
    ],
    "baseNotes": [
      "Ambergris",
      "Amberwood",
      "Guaiac Wood"
    ],
    "seasons": [
      "Spring",
      "Ac Venues",
      "Mild Winter",
      "Monsoon Evenings"
    ],
    "time": "Day / Evening",
    "sprays": "2-3 sprays",
    "occasions": [
      "Lunches",
      "Smart Casuals",
      "Dates",
      "Office",
      "Pujas"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Aquatic",
      "Citrus"
    ],
    "accords": [
      "Floral",
      "Fresh",
      "Marine",
      "Powdery"
    ]
  },
  {
    "id": "837",
    "slug": "paco-rabanne-invictus",
    "brand": "Paco Rabanne",
    "name": "Invictus",
    "gender": "for men",
    "topNotes": [
      "Sea Notes",
      "Grapefruit",
      "Mandarin Orange"
    ],
    "heartNotes": [
      "Bay Leaf",
      "Jasmine"
    ],
    "baseNotes": [
      "Ambergris",
      "Guaiac Wood",
      "Oakmoss",
      "Patchouli"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer",
      "Winter"
    ],
    "time": "Day / Evening",
    "sprays": "4-6",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal",
      "Office"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Aquatic",
      "Citrus"
    ],
    "accords": [
      "Earthy",
      "Floral",
      "Fresh",
      "Marine"
    ]
  },
  {
    "id": "838",
    "slug": "paco-rabanne-invictus-legend",
    "brand": "Paco Rabanne",
    "name": "Invictus Legend",
    "gender": "for men",
    "topNotes": [
      "Sea Notes",
      "Sea Salt",
      "Grapefruit"
    ],
    "heartNotes": [
      "Bay Leaf",
      "Geranium",
      "Spices"
    ],
    "baseNotes": [
      "Red Amber",
      "Guaiac Wood"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer"
    ],
    "time": "Day",
    "sprays": "4-6",
    "occasions": [
      "Brunch",
      "Casual Daytime Events",
      "College",
      "Office",
      "Travel"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Aquatic",
      "Citrus"
    ],
    "accords": [
      "Floral",
      "Fresh",
      "Marine",
      "Warm"
    ]
  },
  {
    "id": "839",
    "slug": "paco-rabanne-invictus-839",
    "brand": "Paco Rabanne",
    "name": "Invictus",
    "gender": "for men",
    "topNotes": [
      "Sea Notes",
      "Grapefruit",
      "Mandarin Orange"
    ],
    "heartNotes": [
      "Bay Leaf",
      "Jasmine"
    ],
    "baseNotes": [
      "Ambergris",
      "Guaiac Wood",
      "Oakmoss",
      "Patchouli"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer",
      "Winter"
    ],
    "time": "Day / Evening",
    "sprays": "4-6",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal",
      "Office"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Aquatic",
      "Citrus"
    ],
    "accords": [
      "Earthy",
      "Floral",
      "Fresh",
      "Marine"
    ]
  },
  {
    "id": "840",
    "slug": "paco-rabanne-invictus-platinum",
    "brand": "Paco Rabanne",
    "name": "Invictus Platinum",
    "gender": "for men",
    "topNotes": [
      "Absinthe",
      "Grapefruit"
    ],
    "heartNotes": [
      "Mint",
      "Lavender"
    ],
    "baseNotes": [
      "Cypress",
      "Patchouli"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer"
    ],
    "time": "Day",
    "sprays": "4-6",
    "occasions": [
      "Brunch",
      "Casual Daytime Events",
      "College",
      "Office",
      "Travel"
    ],
    "featured": false,
    "families": [
      "Aromatic",
      "Citrus",
      "Woody"
    ],
    "accords": [
      "Earthy",
      "Fresh",
      "Herbal",
      "Woody"
    ]
  },
  {
    "id": "841",
    "slug": "paco-rabanne-lady-million",
    "brand": "Paco Rabanne",
    "name": "Lady Million",
    "gender": "for women",
    "topNotes": [
      "Raspberry",
      "Neroli",
      "Amalfi Lemon"
    ],
    "heartNotes": [
      "Jasmine",
      "African Orange Flower",
      "Gardenia"
    ],
    "baseNotes": [
      "White Honey",
      "Patchouli",
      "Amber"
    ],
    "seasons": [
      "Spring",
      "Summer",
      "Monsoon"
    ],
    "time": "Day",
    "sprays": "3-4 sprays; 2-3 indoors",
    "occasions": [
      "Travel",
      "Casual Daytime Events",
      "College",
      "Office",
      "Brunch"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Citrus",
      "Floral"
    ],
    "accords": [
      "Earthy",
      "Floral",
      "Fresh",
      "Fruity"
    ]
  },
  {
    "id": "842",
    "slug": "paco-rabanne-lady-million-prive",
    "brand": "Paco Rabanne",
    "name": "Lady Million Prive",
    "gender": "for women",
    "topNotes": [
      "Woody Notes",
      "Orange Blossom"
    ],
    "heartNotes": [
      "Vanilla",
      "Raspberry",
      "Heliotrope"
    ],
    "baseNotes": [
      "Cacao",
      "Honey",
      "Patchouli"
    ],
    "seasons": [
      "Spring",
      "Ac Venues",
      "Mild Winter",
      "Monsoon Evenings"
    ],
    "time": "Day / Evening",
    "sprays": "2-3 sprays",
    "occasions": [
      "Lunches",
      "Smart Casuals",
      "Dates",
      "Office",
      "Pujas"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Citrus",
      "Floral"
    ],
    "accords": [
      "Earthy",
      "Floral",
      "Fresh",
      "Fruity"
    ]
  },
  {
    "id": "843",
    "slug": "paco-rabanne-major-me",
    "brand": "Paco Rabanne",
    "name": "Major Me",
    "gender": "for women and men",
    "topNotes": [
      "Cherry",
      "Pepper"
    ],
    "heartNotes": [
      "Incense",
      "Agarwood (Oud)",
      "Patchouli"
    ],
    "baseNotes": [
      "Moss",
      "Benzoin"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Winter"
    ],
    "time": "Evening",
    "sprays": "2-3",
    "occasions": [
      "Date Night",
      "Formal"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Fruity",
      "Spicy"
    ],
    "accords": [
      "Balsamic",
      "Earthy",
      "Fruity",
      "Spicy"
    ]
  },
  {
    "id": "844",
    "slug": "paco-rabanne-1-million-golden-oud",
    "brand": "Paco Rabanne",
    "name": "1 Million Golden Oud",
    "gender": "for men",
    "topNotes": [
      "Saffron",
      "Nutmeg",
      "Black Pepper",
      "Bergamot"
    ],
    "heartNotes": [
      "Patchouli",
      "Gurjan balsam",
      "Sandalwood"
    ],
    "baseNotes": [
      "Leather",
      "Oud",
      "Cedarwood",
      "Labdanum"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer",
      "Winter"
    ],
    "time": "Day / Evening",
    "sprays": "4-6",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal",
      "Office"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Citrus",
      "Leather"
    ],
    "accords": [
      "Earthy",
      "Fresh",
      "Leather",
      "Spicy"
    ]
  },
  {
    "id": "845",
    "slug": "paco-rabanne-olympea-aqua",
    "brand": "Paco Rabanne",
    "name": "Olympea Aqua",
    "gender": "for women",
    "topNotes": [
      "Water Notes",
      "Calabrian bergamot",
      "Orange",
      "Petitgrain",
      "Grapefruit"
    ],
    "heartNotes": [
      "Ginger flower",
      "Jasmine",
      "Orange Blossom",
      "Peach",
      "Rose"
    ],
    "baseNotes": [
      "Salt",
      "Vanilla",
      "Ambergris",
      "Cashmere Wood",
      "Sandalwood",
      "Benzoin"
    ],
    "seasons": [
      "Spring",
      "Summer",
      "Winter"
    ],
    "time": "Day / Evening",
    "sprays": "4-6",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal",
      "Office"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Aquatic",
      "Citrus"
    ],
    "accords": [
      "Floral",
      "Fresh",
      "Fruity",
      "Marine"
    ]
  },
  {
    "id": "846",
    "slug": "paco-rabanne-olympea-blossom",
    "brand": "Paco Rabanne",
    "name": "Olympea Blossom",
    "gender": "for women",
    "topNotes": [
      "Damask Rose",
      "Pink Pepper"
    ],
    "heartNotes": [
      "Pear",
      "Sorbet",
      "Black Currant"
    ],
    "baseNotes": [
      "Vanilla",
      "Salt",
      "Cashmeran",
      "Patchouli"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer",
      "Winter"
    ],
    "time": "Day / Evening",
    "sprays": "4-6",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal",
      "Office"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Aquatic",
      "Floral"
    ],
    "accords": [
      "Earthy",
      "Floral",
      "Fruity",
      "Marine"
    ]
  },
  {
    "id": "847",
    "slug": "paco-rabanne-olympea",
    "brand": "Paco Rabanne",
    "name": "Olympea",
    "gender": "for women",
    "topNotes": [
      "Water Jasmine",
      "Green Mandarin",
      "Ginger flower"
    ],
    "heartNotes": [
      "Vanilla",
      "Salt"
    ],
    "baseNotes": [
      "Ambergris",
      "Cashmere Wood",
      "Sandalwood"
    ],
    "seasons": [
      "Spring",
      "Ac Venues",
      "Mild Winter",
      "Monsoon Evenings"
    ],
    "time": "Day / Evening",
    "sprays": "2-3 sprays",
    "occasions": [
      "Lunches",
      "Smart Casuals",
      "Dates",
      "Office",
      "Pujas"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Aquatic",
      "Citrus"
    ],
    "accords": [
      "Floral",
      "Fresh",
      "Green",
      "Marine"
    ]
  },
  {
    "id": "848",
    "slug": "paco-rabanne-olympea-legend",
    "brand": "Paco Rabanne",
    "name": "Olympea Legend",
    "gender": "for women",
    "topNotes": [
      "Plum",
      "Apricot",
      "Sea Salt"
    ],
    "heartNotes": [
      "Floral Notes",
      "Ginger flower"
    ],
    "baseNotes": [
      "Vanilla",
      "Tonka Bean",
      "Amber",
      "Sand"
    ],
    "seasons": [
      "Ac Venues",
      "Winter",
      "Monsoon Evenings"
    ],
    "time": "Evening",
    "sprays": "2-3 sprays",
    "occasions": [
      "Celebrations",
      "Receptions",
      "Dinner Dates",
      "Formal Events"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Aquatic",
      "Floral"
    ],
    "accords": [
      "Floral",
      "Fruity",
      "Marine",
      "Spicy"
    ]
  },
  {
    "id": "849",
    "slug": "paco-rabanne-olympea-849",
    "brand": "Paco Rabanne",
    "name": "Olympea",
    "gender": "for women",
    "topNotes": [
      "Water Jasmine",
      "Green Mandarin",
      "Ginger flower"
    ],
    "heartNotes": [
      "Vanilla",
      "Salt"
    ],
    "baseNotes": [
      "Ambergris",
      "Cashmere Wood",
      "Sandalwood"
    ],
    "seasons": [
      "Spring",
      "Summer",
      "Winter"
    ],
    "time": "Day / Evening",
    "sprays": "4-6",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal",
      "Office"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Aquatic",
      "Citrus"
    ],
    "accords": [
      "Floral",
      "Fresh",
      "Green",
      "Marine"
    ]
  },
  {
    "id": "850",
    "slug": "paco-rabanne-olympea-solar",
    "brand": "Paco Rabanne",
    "name": "Olympea Solar",
    "gender": "for women",
    "topNotes": [
      "Orange Blossom",
      "Orange Peel",
      "Mandarin Orange"
    ],
    "heartNotes": [
      "Tiare Flower",
      "Solar Notes",
      "White Flowers",
      "Oakmoss"
    ],
    "baseNotes": [
      "Ylang-Ylang",
      "Benzoin"
    ],
    "seasons": [
      "Spring",
      "Summer",
      "Winter"
    ],
    "time": "Day / Evening",
    "sprays": "4-6",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal",
      "Office"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Citrus",
      "Floral"
    ],
    "accords": [
      "Floral",
      "Fresh",
      "Warm",
      "Woody"
    ]
  },
  {
    "id": "851",
    "slug": "paco-rabanne-1-million-elixir",
    "brand": "Paco Rabanne",
    "name": "1 Million Elixir",
    "gender": "for men",
    "topNotes": [
      "Apple",
      "Davana"
    ],
    "heartNotes": [
      "Damask Rose",
      "Cedar",
      "Osmanthus"
    ],
    "baseNotes": [
      "Vanilla Absolute",
      "Tonka Bean",
      "Patchouli"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Winter"
    ],
    "time": "Evening",
    "sprays": "2-3",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Floral",
      "Fruity"
    ],
    "accords": [
      "Earthy",
      "Floral",
      "Fruity",
      "Sweet"
    ]
  },
  {
    "id": "852",
    "slug": "paco-rabanne-1-million",
    "brand": "Paco Rabanne",
    "name": "1 Million",
    "gender": "for men",
    "topNotes": [
      "Blood Mandarin",
      "Grapefruit",
      "Mint"
    ],
    "heartNotes": [
      "Cinnamon",
      "Spicy Notes",
      "Rose"
    ],
    "baseNotes": [
      "Amber",
      "Leather",
      "Woody Notes",
      "Indian Patchouli"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer",
      "Winter"
    ],
    "time": "Day / Evening",
    "sprays": "4-6",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal",
      "Office"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Aromatic",
      "Citrus"
    ],
    "accords": [
      "Earthy",
      "Floral",
      "Fresh",
      "Herbal"
    ]
  },
  {
    "id": "853",
    "slug": "paco-rabanne-1-million-853",
    "brand": "Paco Rabanne",
    "name": "1 Million",
    "gender": "for men",
    "topNotes": [
      "Blood Mandarin",
      "Grapefruit",
      "Mint"
    ],
    "heartNotes": [
      "Cinnamon",
      "Spicy Notes",
      "Rose"
    ],
    "baseNotes": [
      "Amber",
      "Leather",
      "Woody Notes",
      "Indian Patchouli"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer",
      "Winter"
    ],
    "time": "Day / Evening",
    "sprays": "4-6",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal",
      "Office"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Aromatic",
      "Citrus"
    ],
    "accords": [
      "Earthy",
      "Floral",
      "Fresh",
      "Herbal"
    ]
  },
  {
    "id": "854",
    "slug": "paco-rabanne-1-million-golden-oud-854",
    "brand": "Paco Rabanne",
    "name": "1 Million Golden Oud",
    "gender": "for men",
    "topNotes": [
      "Saffron",
      "Nutmeg",
      "Black Pepper",
      "Bergamot"
    ],
    "heartNotes": [
      "Patchouli",
      "Gurjan balsam",
      "Sandalwood"
    ],
    "baseNotes": [
      "Leather",
      "Oud",
      "Cedarwood",
      "Labdanum"
    ],
    "seasons": [
      "Spring",
      "Ac Venues",
      "Mild Winter",
      "Monsoon Evenings"
    ],
    "time": "Day / Evening",
    "sprays": "2-3 sprays",
    "occasions": [
      "Lunches",
      "Smart Casuals",
      "Dates",
      "Office",
      "Pujas"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Citrus",
      "Leather"
    ],
    "accords": [
      "Earthy",
      "Fresh",
      "Leather",
      "Spicy"
    ]
  },
  {
    "id": "855",
    "slug": "paco-rabanne-1-million-lucky",
    "brand": "Paco Rabanne",
    "name": "1 Million Lucky",
    "gender": "for men",
    "topNotes": [
      "Plum",
      "Ozonic notes",
      "Grapefruit",
      "Bergamot"
    ],
    "heartNotes": [
      "Hazelnut",
      "Honey",
      "Cedar",
      "Cashmere Wood",
      "Orange Blossom",
      "Jasmine"
    ],
    "baseNotes": [
      "Amberwood",
      "Patchouli",
      "Oakmoss",
      "Vetiver"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer",
      "Winter"
    ],
    "time": "Day / Evening",
    "sprays": "4-6",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal",
      "Office"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Citrus",
      "Floral"
    ],
    "accords": [
      "Earthy",
      "Floral",
      "Fresh",
      "Fruity"
    ]
  },
  {
    "id": "856",
    "slug": "paco-rabanne-1-million-prive",
    "brand": "Paco Rabanne",
    "name": "1 Million Prive",
    "gender": "for men",
    "topNotes": [
      "Cinnamon",
      "Blood Mandarin"
    ],
    "heartNotes": [
      "Tobacco",
      "Myrrh"
    ],
    "baseNotes": [
      "Tonka Bean",
      "Patchouli"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer"
    ],
    "time": "Day",
    "sprays": "4-6",
    "occasions": [
      "Brunch",
      "Casual Daytime Events",
      "College",
      "Office",
      "Travel"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Citrus",
      "Gourmand"
    ],
    "accords": [
      "Balsamic",
      "Earthy",
      "Fresh",
      "Spicy"
    ]
  },
  {
    "id": "857",
    "slug": "paco-rabanne-1-million-royal",
    "brand": "Paco Rabanne",
    "name": "1 Million Royal",
    "gender": "for men",
    "topNotes": [
      "Cardamom",
      "Tangerine",
      "Bergamot"
    ],
    "heartNotes": [
      "Lavender",
      "Violet Leaf",
      "Sage"
    ],
    "baseNotes": [
      "Benzoin",
      "Cedar",
      "Patchouli"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer",
      "Winter"
    ],
    "time": "Day / Evening",
    "sprays": "4-6",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal",
      "Office"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Aromatic",
      "Citrus"
    ],
    "accords": [
      "Earthy",
      "Floral",
      "Fresh",
      "Herbal"
    ]
  },
  {
    "id": "858",
    "slug": "paco-rabanne-phantom",
    "brand": "Paco Rabanne",
    "name": "Phantom",
    "gender": "for men",
    "topNotes": [
      "Lavender",
      "Lemon Zest",
      "Amalfi Lemon"
    ],
    "heartNotes": [
      "Lavender",
      "Earthy Notes",
      "Apple",
      "Smoke",
      "Patchouli"
    ],
    "baseNotes": [
      "Vanilla",
      "Lavender",
      "Vetiver"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer",
      "Winter"
    ],
    "time": "Day / Evening",
    "sprays": "4-6",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal",
      "Office"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Aromatic",
      "Citrus"
    ],
    "accords": [
      "Earthy",
      "Fresh",
      "Fruity",
      "Herbal"
    ]
  },
  {
    "id": "859",
    "slug": "paco-rabanne-phantom-859",
    "brand": "Paco Rabanne",
    "name": "Phantom",
    "gender": "for men",
    "topNotes": [
      "Lavender",
      "Lemon Zest",
      "Amalfi Lemon"
    ],
    "heartNotes": [
      "Lavender",
      "Earthy Notes",
      "Apple",
      "Smoke",
      "Patchouli"
    ],
    "baseNotes": [
      "Vanilla",
      "Lavender",
      "Vetiver"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer",
      "Winter"
    ],
    "time": "Day / Evening",
    "sprays": "4-6",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal",
      "Office"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Aromatic",
      "Citrus"
    ],
    "accords": [
      "Earthy",
      "Fresh",
      "Fruity",
      "Herbal"
    ]
  },
  {
    "id": "860",
    "slug": "paco-rabanne-pure-xs",
    "brand": "Paco Rabanne",
    "name": "Pure XS",
    "gender": "for men",
    "topNotes": [
      "Ginger",
      "Thyme",
      "Grapefruit",
      "Bergamot",
      "Green Accord"
    ],
    "heartNotes": [
      "Vanilla",
      "Liquor",
      "Cinnamon",
      "Leather",
      "Apple"
    ],
    "baseNotes": [
      "Myrrh",
      "Sugar",
      "Cedar",
      "Woody Notes",
      "Cashmeran",
      "Patchouli"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer",
      "Winter"
    ],
    "time": "Day / Evening",
    "sprays": "4-6",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal",
      "Office"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Aromatic",
      "Citrus"
    ],
    "accords": [
      "Balsamic",
      "Earthy",
      "Fresh",
      "Fruity"
    ]
  },
  {
    "id": "861",
    "slug": "paco-rabanne-ultraviolet",
    "brand": "Paco Rabanne",
    "name": "Ultraviolet",
    "gender": "for men",
    "topNotes": [
      "Mint",
      "Amber"
    ],
    "heartNotes": [
      "Vetiver",
      "Pepper",
      "Spicy Notes"
    ],
    "baseNotes": [
      "Oakmoss",
      "Vanilla"
    ],
    "seasons": [
      "Monsoon",
      "Winter"
    ],
    "time": "Evening",
    "sprays": "2-3",
    "occasions": [
      "Date Night",
      "Formal"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Aromatic",
      "Spicy"
    ],
    "accords": [
      "Earthy",
      "Herbal",
      "Spicy",
      "Sweet"
    ]
  },
  {
    "id": "862",
    "slug": "paco-rabanne-xs",
    "brand": "Paco Rabanne",
    "name": "XS",
    "gender": "for men",
    "topNotes": [
      "Bergamot",
      "Rosemary",
      "Mint",
      "Lemon",
      "Tarragon",
      "Mandarin Orange"
    ],
    "heartNotes": [
      "Juniper",
      "Brazilian Rosewood",
      "Sage",
      "Bourbon Geranium",
      "Coriander"
    ],
    "baseNotes": [
      "Sandalwood",
      "Musk",
      "Oakmoss",
      "Cedar",
      "Vanilla",
      "Patchouli",
      "Ambergris"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer",
      "Winter"
    ],
    "time": "Day / Evening",
    "sprays": "4-6",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal",
      "Office"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Aromatic",
      "Citrus"
    ],
    "accords": [
      "Earthy",
      "Floral",
      "Fresh",
      "Herbal"
    ]
  },
  {
    "id": "863",
    "slug": "parfums-de-marly-althair",
    "brand": "Parfums De Marly",
    "name": "Althair",
    "gender": "for men",
    "topNotes": [
      "Cinnamon",
      "Cardamom",
      "Orange Blossom",
      "Bergamot"
    ],
    "heartNotes": [
      "Bourbon Vanilla",
      "elemi"
    ],
    "baseNotes": [
      "Praline",
      "Musk",
      "Ambroxan",
      "Guaiac Wood"
    ],
    "seasons": [
      "Spring",
      "Summer",
      "Winter"
    ],
    "time": "Day / Evening",
    "sprays": "4-6",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal",
      "Office"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Citrus",
      "Floral"
    ],
    "accords": [
      "Floral",
      "Fresh",
      "Musky",
      "Spicy"
    ]
  },
  {
    "id": "864",
    "slug": "archive-athalia",
    "brand": "Archive",
    "name": "Athalia",
    "gender": "for women",
    "topNotes": [
      "Orange Blossom"
    ],
    "heartNotes": [
      "Iris"
    ],
    "baseNotes": [
      "White Musk",
      "Amber"
    ],
    "seasons": [
      "Spring",
      "Summer",
      "Winter"
    ],
    "time": "Day / Evening",
    "sprays": "4-6",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal",
      "Office"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Citrus",
      "Floral"
    ],
    "accords": [
      "Floral",
      "Fresh",
      "Musky",
      "Powdery"
    ]
  },
  {
    "id": "865",
    "slug": "parfums-de-marly-byerley",
    "brand": "Parfums De Marly",
    "name": "Byerley",
    "gender": "for men",
    "topNotes": [
      "Cardamom",
      "Bergamot"
    ],
    "heartNotes": [
      "Guaiac Wood",
      "Cedar"
    ],
    "baseNotes": [
      "Vetiver",
      "Resin"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer",
      "Winter"
    ],
    "time": "Day / Evening",
    "sprays": "4-6",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal",
      "Office"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Citrus",
      "Spicy"
    ],
    "accords": [
      "Balsamic",
      "Earthy",
      "Fresh",
      "Spicy"
    ]
  },
  {
    "id": "866",
    "slug": "archive-carlisle",
    "brand": "Archive",
    "name": "Carlisle",
    "gender": "for women and men",
    "topNotes": [
      "Nutmeg",
      "Green Apple",
      "Saffron"
    ],
    "heartNotes": [
      "Tonka Bean",
      "Rose",
      "Osmanthus",
      "Davana"
    ],
    "baseNotes": [
      "Patchouli",
      "Vanilla",
      "Opoponax"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Winter"
    ],
    "time": "Evening",
    "sprays": "2-3",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Floral",
      "Fruity"
    ],
    "accords": [
      "Earthy",
      "Floral",
      "Fruity",
      "Green"
    ]
  },
  {
    "id": "867",
    "slug": "parfums-de-marly-darley",
    "brand": "Parfums De Marly",
    "name": "Darley",
    "gender": "for men",
    "topNotes": [
      "Mint",
      "Bergamot",
      "Amalfi Lemon"
    ],
    "heartNotes": [
      "Lavender",
      "Cinnamon",
      "African Orange Flower",
      "Rose",
      "Rosemary"
    ],
    "baseNotes": [
      "Tonka Bean",
      "Sandalwood",
      "Amber",
      "Guaiac Wood",
      "Patchouli"
    ],
    "seasons": [
      "Spring",
      "Ac Venues",
      "Mild Winter",
      "Monsoon Evenings"
    ],
    "time": "Day / Evening",
    "sprays": "2-3 sprays Delina Exclusif for women",
    "occasions": [
      "Lunches",
      "Smart Casuals",
      "Dates",
      "Office",
      "Pujas"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Aromatic",
      "Citrus"
    ],
    "accords": [
      "Earthy",
      "Floral",
      "Fresh",
      "Herbal"
    ]
  },
  {
    "id": "868",
    "slug": "sprays-2-3-sprays-delina-exclusif",
    "brand": "Sprays: 2-3 Sprays",
    "name": "Delina Exclusif",
    "gender": "for women",
    "topNotes": [
      "Litchi",
      "Pear",
      "Bergamot"
    ],
    "heartNotes": [
      "Turkish Rose",
      "Agarwood (Oud)",
      "Incense"
    ],
    "baseNotes": [
      "Vanilla",
      "Amber",
      "Woody Notes"
    ],
    "seasons": [
      "Ac Venues",
      "Winter",
      "Cool Nights"
    ],
    "time": "Evening",
    "sprays": "1-2 sprays",
    "occasions": [
      "Receptions",
      "Winter Weddings",
      "Festive Evenings",
      "Formal Dinners"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Citrus",
      "Floral"
    ],
    "accords": [
      "Balsamic",
      "Floral",
      "Fresh",
      "Fruity"
    ]
  },
  {
    "id": "869",
    "slug": "parfums-de-marly-delina",
    "brand": "Parfums De Marly",
    "name": "Delina",
    "gender": "for women",
    "topNotes": [
      "Litchi",
      "Rhubarb",
      "Bergamot",
      "Nutmeg"
    ],
    "heartNotes": [
      "Turkish Rose",
      "Peony",
      "Musk",
      "Petalia",
      "Vanilla"
    ],
    "baseNotes": [
      "Cashmeran",
      "Incense",
      "Cedar",
      "Haitian Vetiver"
    ],
    "seasons": [
      "Spring",
      "Ac Venues",
      "Mild Winter",
      "Monsoon Evenings"
    ],
    "time": "Day / Evening",
    "sprays": "2-3 sprays Galloway for women and men",
    "occasions": [
      "Lunches",
      "Smart Casuals",
      "Dates",
      "Office",
      "Pujas"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Citrus",
      "Floral"
    ],
    "accords": [
      "Balsamic",
      "Earthy",
      "Floral",
      "Fresh"
    ]
  },
  {
    "id": "870",
    "slug": "sprays-2-3-sprays-galloway",
    "brand": "Sprays: 2-3 Sprays",
    "name": "Galloway",
    "gender": "for women and men",
    "topNotes": [
      "Citruses",
      "Pepper"
    ],
    "heartNotes": [
      "Orange Blossom",
      "Iris"
    ],
    "baseNotes": [
      "Musk",
      "Amber"
    ],
    "seasons": [
      "Spring",
      "Summer",
      "Monsoon"
    ],
    "time": "Day",
    "sprays": "3-4 sprays; 2-3 indoors",
    "occasions": [
      "Travel",
      "Casual Daytime Events",
      "College",
      "Office",
      "Brunch"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Citrus",
      "Floral"
    ],
    "accords": [
      "Floral",
      "Fresh",
      "Musky",
      "Powdery"
    ]
  },
  {
    "id": "871",
    "slug": "parfums-de-marly-godolphin",
    "brand": "Parfums De Marly",
    "name": "Godolphin",
    "gender": "for men",
    "topNotes": [
      "Fruity Notes",
      "Saffron",
      "Mate",
      "Thyme",
      "Cypress",
      "Green Notes"
    ],
    "heartNotes": [
      "Rose",
      "Orris",
      "Jasmine"
    ],
    "baseNotes": [
      "Leather",
      "Amber",
      "Vetiver",
      "Musk",
      "Virginia Cedar",
      "Vanille"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Winter"
    ],
    "time": "Evening",
    "sprays": "2-3",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Aromatic",
      "Floral"
    ],
    "accords": [
      "Earthy",
      "Floral",
      "Green",
      "Herbal"
    ]
  },
  {
    "id": "872",
    "slug": "parfums-de-marly-greenley",
    "brand": "Parfums De Marly",
    "name": "Greenley",
    "gender": "for women and men",
    "topNotes": [
      "Green Apple",
      "Calabrian bergamot",
      "Mandarin Orange"
    ],
    "heartNotes": [
      "Petitgrain",
      "Cedar",
      "Cashmeran",
      "Pomarose",
      "Violet"
    ],
    "baseNotes": [
      "Oakmoss",
      "Musk",
      "Amberwood"
    ],
    "seasons": [
      "Spring",
      "Ac Venues",
      "Mild Winter",
      "Monsoon Evenings"
    ],
    "time": "Day / Evening",
    "sprays": "2-3 sprays",
    "occasions": [
      "Lunches",
      "Smart Casuals",
      "Dates",
      "Office",
      "Pujas"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Citrus",
      "Floral"
    ],
    "accords": [
      "Floral",
      "Fresh",
      "Fruity",
      "Green"
    ]
  },
  {
    "id": "873",
    "slug": "parfums-de-marly-habdan",
    "brand": "Parfums De Marly",
    "name": "Habdan",
    "gender": "for women and men",
    "topNotes": [
      "Saffron",
      "Olibanum"
    ],
    "heartNotes": [
      "Apple",
      "Woody Notes",
      "Rose"
    ],
    "baseNotes": [
      "Myrhh",
      "Caramel",
      "Ambergris"
    ],
    "seasons": [
      "Spring",
      "Winter"
    ],
    "time": "Evening",
    "sprays": "2-3",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Floral",
      "Fruity"
    ],
    "accords": [
      "Floral",
      "Fruity",
      "Spicy",
      "Sweet"
    ]
  },
  {
    "id": "874",
    "slug": "parfums-de-marly-haltane",
    "brand": "Parfums De Marly",
    "name": "Haltane",
    "gender": "for men",
    "topNotes": [
      "Clary Sage",
      "Lavender",
      "Bergamot"
    ],
    "heartNotes": [
      "Saffron",
      "Praline"
    ],
    "baseNotes": [
      "Agarwood (Oud)",
      "Cedar"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer",
      "Winter"
    ],
    "time": "Day / Evening",
    "sprays": "4-6",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal",
      "Office"
    ],
    "featured": false,
    "families": [
      "Aromatic",
      "Citrus",
      "Gourmand"
    ],
    "accords": [
      "Fresh",
      "Herbal",
      "Spicy",
      "Sweet"
    ]
  },
  {
    "id": "875",
    "slug": "parfums-de-marly-herod",
    "brand": "Parfums De Marly",
    "name": "Herod",
    "gender": "for men",
    "topNotes": [
      "Cinnamon",
      "Pepperwood\u2122"
    ],
    "heartNotes": [
      "Tobacco Leaf",
      "Incense",
      "Osmanthus",
      "Labdanum"
    ],
    "baseNotes": [
      "Vanilla",
      "Iso E Super",
      "Cedar",
      "Musk",
      "Cypriol Oil or Nagarmotha",
      "Vetiver"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Winter"
    ],
    "time": "Evening",
    "sprays": "2-3",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Floral",
      "Gourmand"
    ],
    "accords": [
      "Balsamic",
      "Earthy",
      "Floral",
      "Musky"
    ]
  },
  {
    "id": "876",
    "slug": "archive-kalan",
    "brand": "Archive",
    "name": "Kalan",
    "gender": "for women and men",
    "topNotes": [
      "Spices",
      "Blood Orange",
      "Black Pepper"
    ],
    "heartNotes": [
      "Lavender",
      "Orange Blossom"
    ],
    "baseNotes": [
      "Woody Notes",
      "Moss",
      "White Sandalwood",
      "Tonka Bean",
      "Amber"
    ],
    "seasons": [
      "Ac Venues",
      "Winter",
      "Cool Nights"
    ],
    "time": "Evening",
    "sprays": "1-2 sprays",
    "occasions": [
      "Receptions",
      "Winter Weddings",
      "Festive Evenings",
      "Formal Dinners"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Aromatic",
      "Citrus"
    ],
    "accords": [
      "Floral",
      "Fresh",
      "Herbal",
      "Spicy"
    ]
  },
  {
    "id": "877",
    "slug": "parfums-de-marly-layton",
    "brand": "Parfums De Marly",
    "name": "Layton",
    "gender": "for women and men",
    "topNotes": [
      "Apple",
      "Lavender",
      "Bergamot",
      "Mandarin Orange"
    ],
    "heartNotes": [
      "Geranium",
      "Violet",
      "Jasmine"
    ],
    "baseNotes": [
      "Vanilla",
      "Cardamom",
      "Sandalwood",
      "Pepper",
      "Guaiac Wood",
      "Patchouli"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer"
    ],
    "time": "Day",
    "sprays": "4-6",
    "occasions": [
      "Brunch",
      "Casual Daytime Events",
      "College",
      "Office",
      "Travel"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Aromatic",
      "Citrus"
    ],
    "accords": [
      "Earthy",
      "Floral",
      "Fresh",
      "Fruity"
    ]
  },
  {
    "id": "878",
    "slug": "parfums-de-marly-layton-exclusif",
    "brand": "Parfums De Marly",
    "name": "Layton Exclusif",
    "gender": "for women and men",
    "topNotes": [
      "Almond",
      "Mandarin Orange",
      "Bergamot",
      "Watery Notes"
    ],
    "heartNotes": [
      "Civet",
      "Geranium",
      "Rose",
      "Gardenia",
      "Water Lily"
    ],
    "baseNotes": [
      "Guaiac Wood",
      "Laotian Oud",
      "Vanilla",
      "Coffee",
      "Sandalwood",
      "Indonesian Patchouli Leaf",
      "Amber",
      "Oakmoss",
      "Pink Pepper"
    ],
    "seasons": [
      "Ac Venues",
      "Winter",
      "Cool Nights"
    ],
    "time": "Evening",
    "sprays": "3-4 sprays; 2-3 indoors Sprays: 1-2 sprays",
    "occasions": [
      "Receptions",
      "Winter Weddings",
      "Festive Evenings",
      "Formal Dinners"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Aquatic",
      "Citrus"
    ],
    "accords": [
      "Earthy",
      "Floral",
      "Fresh",
      "Leather"
    ]
  },
  {
    "id": "879",
    "slug": "parfums-de-marly-lippizan",
    "brand": "Parfums De Marly",
    "name": "Lippizan",
    "gender": "for men",
    "topNotes": [
      "Clary Sage",
      "Thyme",
      "Tarragon",
      "Cardamom",
      "Amalfi Lemon",
      "Bergamot"
    ],
    "heartNotes": [
      "Vetiver",
      "Galbanum",
      "Virginia Cedar",
      "Rose",
      "Jasmine",
      "Iris",
      "Patchouli"
    ],
    "baseNotes": [
      "oak moss",
      "Leather",
      "Musk",
      "Amber",
      "Vanille"
    ],
    "seasons": [
      "Spring",
      "Ac Venues",
      "Mild Winter",
      "Monsoon Evenings"
    ],
    "time": "Day / Evening",
    "sprays": "2-3 sprays Meliora for women",
    "occasions": [
      "Lunches",
      "Smart Casuals",
      "Dates",
      "Office",
      "Pujas"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Aromatic",
      "Citrus"
    ],
    "accords": [
      "Earthy",
      "Floral",
      "Fresh",
      "Green"
    ]
  },
  {
    "id": "880",
    "slug": "sprays-2-3-sprays-meliora",
    "brand": "Sprays: 2-3 Sprays",
    "name": "Meliora",
    "gender": "for women",
    "topNotes": [
      "Black Currant",
      "Red Berries",
      "Cassis"
    ],
    "heartNotes": [
      "Rose",
      "Lily-of-the-Valley",
      "Ylang-Ylang"
    ],
    "baseNotes": [
      "Musk",
      "Vanilla"
    ],
    "seasons": [
      "Spring",
      "Summer",
      "Monsoon"
    ],
    "time": "Day",
    "sprays": "3-4 sprays; 2-3 indoors",
    "occasions": [
      "Travel",
      "Casual Daytime Events",
      "College",
      "Office",
      "Brunch"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Floral",
      "Fruity"
    ],
    "accords": [
      "Floral",
      "Fruity",
      "Musky",
      "Sweet"
    ]
  },
  {
    "id": "881",
    "slug": "parfums-de-marly-nisean",
    "brand": "Parfums De Marly",
    "name": "Nisean",
    "gender": "for women and men",
    "topNotes": [
      "Pink Pepper",
      "Grapefruit",
      "Lime"
    ],
    "heartNotes": [
      "Saffron",
      "Labdanum",
      "Flowers",
      "Olibanum",
      "Rose",
      "Geranium"
    ],
    "baseNotes": [
      "Precious Woods",
      "Patchouli Leaf",
      "Amber",
      "Cedar"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer",
      "Winter"
    ],
    "time": "Day / Evening",
    "sprays": "4-6",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal",
      "Office"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Citrus",
      "Floral"
    ],
    "accords": [
      "Earthy",
      "Floral",
      "Fresh",
      "Spicy"
    ]
  },
  {
    "id": "882",
    "slug": "parfums-de-marly-oajan",
    "brand": "Parfums De Marly",
    "name": "Oajan",
    "gender": "for women and men",
    "topNotes": [
      "Cinnamon",
      "Honey",
      "Osmanthus"
    ],
    "heartNotes": [
      "Benzoin",
      "Ambergris",
      "Labdanum",
      "Artemisia"
    ],
    "baseNotes": [
      "Tonka Bean",
      "Vanila",
      "Patchouli",
      "Musk"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Winter"
    ],
    "time": "Evening",
    "sprays": "2-3",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Aromatic",
      "Floral"
    ],
    "accords": [
      "Earthy",
      "Floral",
      "Herbal",
      "Musky"
    ]
  },
  {
    "id": "883",
    "slug": "parfums-de-marly-oriana",
    "brand": "Parfums De Marly",
    "name": "Oriana",
    "gender": "for women",
    "topNotes": [
      "Mandarin Orange",
      "Bergamot",
      "Grapefruit"
    ],
    "heartNotes": [
      "Orange Blossom",
      "Raspberry",
      "Black Currant"
    ],
    "baseNotes": [
      "Whipped Cream",
      "Marshamallow",
      "Musk",
      "Ambrette (Musk Mallow)"
    ],
    "seasons": [
      "Spring",
      "Summer"
    ],
    "time": "Day",
    "sprays": "4-6",
    "occasions": [
      "Casual",
      "Office"
    ],
    "featured": false,
    "families": [
      "Citrus",
      "Floral",
      "Fruity"
    ],
    "accords": [
      "Floral",
      "Fresh",
      "Fruity",
      "Musky"
    ]
  },
  {
    "id": "884",
    "slug": "palatine-women",
    "brand": "Palatine",
    "name": "Women",
    "gender": "Unisex",
    "topNotes": [
      "Pear; bergamot; mandarin; peach"
    ],
    "heartNotes": [
      "Violet; floral bouquet; lavender"
    ],
    "baseNotes": [
      "Musk; sandalwood; vanilla; patchouli"
    ],
    "seasons": [
      "Spring",
      "Summer",
      "Monsoon"
    ],
    "time": "Day",
    "sprays": "3-4 sprays; 2-3 indoors",
    "occasions": [
      "Travel",
      "Casual Daytime Events",
      "College",
      "Office",
      "Brunch"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Aromatic",
      "Citrus"
    ],
    "accords": [
      "Earthy",
      "Floral",
      "Fresh",
      "Fruity"
    ]
  },
  {
    "id": "885",
    "slug": "parfums-de-marly-pegasus-exclusif",
    "brand": "Parfums De Marly",
    "name": "Pegasus Exclusif",
    "gender": "for men",
    "topNotes": [
      "Cardamom",
      "Heliotrope",
      "Pink Pepper",
      "Bergamot"
    ],
    "heartNotes": [
      "Bitter Almond",
      "Lavender",
      "Geranium",
      "Jasmine"
    ],
    "baseNotes": [
      "Vanilla",
      "Guaiac Wood",
      "Agarwood (Oud)",
      "Sandalwood",
      "Amber"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer",
      "Winter"
    ],
    "time": "Day / Evening",
    "sprays": "4-6",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal",
      "Office"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Aromatic",
      "Citrus"
    ],
    "accords": [
      "Floral",
      "Fresh",
      "Herbal",
      "Spicy"
    ]
  },
  {
    "id": "886",
    "slug": "parfums-de-marly-pegasus",
    "brand": "Parfums De Marly",
    "name": "Pegasus",
    "gender": "for men",
    "topNotes": [
      "Heliotrope",
      "Cumin",
      "Bergamot"
    ],
    "heartNotes": [
      "Bitter Almond",
      "Lavender",
      "Jasmine"
    ],
    "baseNotes": [
      "Vanilla",
      "Sandalwood",
      "Amber"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer",
      "Winter"
    ],
    "time": "Day / Evening",
    "sprays": "4-6",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal",
      "Office"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Aromatic",
      "Citrus"
    ],
    "accords": [
      "Floral",
      "Fresh",
      "Herbal",
      "Spicy"
    ]
  },
  {
    "id": "887",
    "slug": "parfums-de-marly-percival",
    "brand": "Parfums De Marly",
    "name": "Percival",
    "gender": "for women and men",
    "topNotes": [
      "Lavender",
      "Mandarin Orange",
      "Bergamot",
      "Geranium"
    ],
    "heartNotes": [
      "Hedione",
      "Violet",
      "Jasmine",
      "Coriander",
      "Cinnamon"
    ],
    "baseNotes": [
      "Ambroxan",
      "Amberwood",
      "Musk",
      "Balsam Fir",
      "Clearwood"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer",
      "Winter"
    ],
    "time": "Day / Evening",
    "sprays": "4-6",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal",
      "Office"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Aromatic",
      "Citrus"
    ],
    "accords": [
      "Floral",
      "Fresh",
      "Herbal",
      "Musky"
    ]
  },
  {
    "id": "888",
    "slug": "parfums-de-marly-perseus",
    "brand": "Parfums De Marly",
    "name": "Perseus",
    "gender": "for men",
    "topNotes": [
      "Grapefruit",
      "Bergamot",
      "Black Currant"
    ],
    "heartNotes": [
      "Vetiver",
      "Green Mandarin",
      "Geranium"
    ],
    "baseNotes": [
      "Dry Wood",
      "Ambergris",
      "Cashmere Wood"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer"
    ],
    "time": "Day",
    "sprays": "4-6",
    "occasions": [
      "Brunch",
      "Casual Daytime Events",
      "College",
      "Office",
      "Travel"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Citrus",
      "Floral"
    ],
    "accords": [
      "Earthy",
      "Floral",
      "Fresh",
      "Fruity"
    ]
  },
  {
    "id": "889",
    "slug": "parfums-de-marly-safanad",
    "brand": "Parfums De Marly",
    "name": "Safanad",
    "gender": "for women",
    "topNotes": [
      "Pear",
      "Orange"
    ],
    "heartNotes": [
      "Orange Blossom",
      "Ylang-Ylang",
      "Iris"
    ],
    "baseNotes": [
      "Vanilla",
      "Amber",
      "Sandalwood"
    ],
    "seasons": [
      "Spring",
      "Summer",
      "Winter"
    ],
    "time": "Day / Evening",
    "sprays": "4-6",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal",
      "Office"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Citrus",
      "Floral"
    ],
    "accords": [
      "Floral",
      "Fresh",
      "Fruity",
      "Powdery"
    ]
  },
  {
    "id": "890",
    "slug": "archive-sedbury",
    "brand": "Archive",
    "name": "Sedbury",
    "gender": "for women",
    "topNotes": [
      "Clary Sage",
      "Lavender",
      "Tangerine",
      "Bergamot"
    ],
    "heartNotes": [
      "Tuberose",
      "Jasmine",
      "Iris"
    ],
    "baseNotes": [
      "Benzoin",
      "Vanilla",
      "Ambergris",
      "Vetiver",
      "Patchouli"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer",
      "Winter"
    ],
    "time": "Day / Evening",
    "sprays": "4-6",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal",
      "Office"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Aromatic",
      "Citrus"
    ],
    "accords": [
      "Earthy",
      "Floral",
      "Fresh",
      "Herbal"
    ]
  },
  {
    "id": "891",
    "slug": "parfums-de-marly-sedley",
    "brand": "Parfums De Marly",
    "name": "Sedley",
    "gender": "for women and men",
    "topNotes": [
      "Lemon",
      "Mint",
      "Bergamot",
      "Grapefruit",
      "Mandarin Orange"
    ],
    "heartNotes": [
      "Lavender",
      "Rosemary",
      "Geranium",
      "Olibanum"
    ],
    "baseNotes": [
      "Ambroxan",
      "Sandalowood",
      "Cashmeran",
      "Vetiver",
      "Cedar",
      "Patchouli"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer"
    ],
    "time": "Day",
    "sprays": "4-6",
    "occasions": [
      "Casual",
      "Formal",
      "Office"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Aromatic",
      "Citrus"
    ],
    "accords": [
      "Earthy",
      "Floral",
      "Fresh",
      "Herbal"
    ]
  },
  {
    "id": "892",
    "slug": "parfums-de-marly-valaya",
    "brand": "Parfums De Marly",
    "name": "Valaya",
    "gender": "for women",
    "topNotes": [
      "Aldehydes",
      "White Peach",
      "Bergamot",
      "Mandarin Orange"
    ],
    "heartNotes": [
      "Orange Blossom",
      "Petalia",
      "Lily-of-the-Valley",
      "Vetiver",
      "Nympheal\u2122",
      "Mahonia"
    ],
    "baseNotes": [
      "Musk",
      "Ambroxan",
      "Akigalawood",
      "Vanilla"
    ],
    "seasons": [
      "Spring",
      "Summer",
      "Monsoon"
    ],
    "time": "Day",
    "sprays": "3-4 sprays; 2-3 indoors Top: Aldehydes, White Peach, Bergamot and Mandarin Orange \u00e2\u20ac\u00a2 Heart: Orange Blossom, Petalia, Lily-of-the-Valley, Vetiver, Nympheal\u00e2\u201e\u00a2 and Mahonia \u00e2\u20ac\u00a2 Base: Musk, Ambroxan, Akigalawood and Vanilla",
    "occasions": [
      "Travel",
      "Casual Daytime Events",
      "College",
      "Office",
      "Brunch"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Citrus",
      "Floral"
    ],
    "accords": [
      "Earthy",
      "Floral",
      "Fresh",
      "Fruity"
    ]
  },
  {
    "id": "893",
    "slug": "parfums-vintage-emperor-extrait",
    "brand": "Parfums Vintage",
    "name": "Emperor Extrait",
    "gender": "for women and men",
    "topNotes": [
      "Pineapple",
      "Juniper Berries",
      "Apple"
    ],
    "heartNotes": [
      "Bergamot",
      "Jasmine",
      "Rose"
    ],
    "baseNotes": [
      "Birch",
      "Musk",
      "Ambergris",
      "Patchouli",
      "Vanilla"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer",
      "Winter"
    ],
    "time": "Day / Evening",
    "sprays": "4-6",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal",
      "Office"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Citrus",
      "Floral"
    ],
    "accords": [
      "Earthy",
      "Floral",
      "Fresh",
      "Fruity"
    ]
  },
  {
    "id": "894",
    "slug": "paris-hilton-gold-rush",
    "brand": "Paris Hilton",
    "name": "Gold Rush",
    "gender": "for women",
    "topNotes": [
      "Nectarine",
      "Lemon",
      "Bergamot"
    ],
    "heartNotes": [
      "Orchid",
      "Violet",
      "Rose Petals"
    ],
    "baseNotes": [
      "Praline",
      "Vanilla",
      "Cashmere Wood"
    ],
    "seasons": [
      "Ac Venues",
      "Cool Nights",
      "Winter"
    ],
    "time": "Evening",
    "sprays": "4-6",
    "occasions": [
      "Festive Evenings",
      "Formal Dinners",
      "Receptions",
      "Winter Weddings"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Citrus",
      "Floral"
    ],
    "accords": [
      "Floral",
      "Fresh",
      "Powdery",
      "Sweet"
    ]
  },
  {
    "id": "895",
    "slug": "paris-hilton-passport-paris",
    "brand": "Paris Hilton",
    "name": "Passport Paris",
    "gender": "for women",
    "topNotes": [
      "Peach",
      "Red Berries",
      "Mandarin Orange"
    ],
    "heartNotes": [
      "Jasmine",
      "Honeysuckle",
      "Peony"
    ],
    "baseNotes": [
      "Vanille",
      "Musk",
      "Patchouli",
      "Amber"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer",
      "Winter"
    ],
    "time": "Day / Evening",
    "sprays": "4-6",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal",
      "Office"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Citrus",
      "Floral"
    ],
    "accords": [
      "Earthy",
      "Floral",
      "Fresh",
      "Fruity"
    ]
  },
  {
    "id": "896",
    "slug": "paris-hilton-rose-rush",
    "brand": "Paris Hilton",
    "name": "Rose Rush",
    "gender": "for women",
    "topNotes": [
      "Rose Petals",
      "Litchi",
      "Neroli"
    ],
    "heartNotes": [
      "May Rose",
      "Peony",
      "Papaya"
    ],
    "baseNotes": [
      "White Musk",
      "Amber",
      "Cedar"
    ],
    "seasons": [
      "Spring",
      "Summer",
      "Winter"
    ],
    "time": "Day / Evening",
    "sprays": "4-6",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal",
      "Office"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Citrus",
      "Floral"
    ],
    "accords": [
      "Floral",
      "Fresh",
      "Musky",
      "Warm"
    ]
  },
  {
    "id": "897",
    "slug": "penhaligon-s-halfeti",
    "brand": "Penhaligon S",
    "name": "Halfeti",
    "gender": "for women and men",
    "topNotes": [
      "Cypress Leaf",
      "Saffron",
      "Cardamom",
      "Artemisia",
      "Bergamot",
      "Grapefruit"
    ],
    "heartNotes": [
      "Bulgarian Rose",
      "Nutmeg",
      "Jasmine"
    ],
    "baseNotes": [
      "Agarwood (Oud)",
      "Cedar",
      "Leather",
      "Sandalwood",
      "Amber",
      "Tonka Bean",
      "Vanilla",
      "Musk"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer",
      "Winter"
    ],
    "time": "Day / Evening",
    "sprays": "4-6",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal",
      "Office"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Aromatic",
      "Citrus"
    ],
    "accords": [
      "Floral",
      "Fresh",
      "Herbal",
      "Leather"
    ]
  },
  {
    "id": "898",
    "slug": "penhaligon-s-halfeti-leather",
    "brand": "Penhaligon S",
    "name": "Halfeti Leather",
    "gender": "for women and men",
    "topNotes": [
      "Plum",
      "Cardamom",
      "Lavender",
      "Bergamot",
      "Citruses",
      "Green Notes"
    ],
    "heartNotes": [
      "Nutmeg",
      "Rose",
      "Cinnamon",
      "Cumin",
      "Violet",
      "Jasmine"
    ],
    "baseNotes": [
      "Leather",
      "Agarwood (Oud)",
      "Incense",
      "Cedar",
      "Patchouli"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer",
      "Winter"
    ],
    "time": "Day / Evening",
    "sprays": "4-6",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal",
      "Office"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Aromatic",
      "Citrus"
    ],
    "accords": [
      "Balsamic",
      "Earthy",
      "Floral",
      "Fresh"
    ]
  },
  {
    "id": "899",
    "slug": "penhaligon-s-iris-prima",
    "brand": "Penhaligon S",
    "name": "Iris Prima",
    "gender": "for women and men",
    "topNotes": [
      "Bergamot",
      "Pink Pepper"
    ],
    "heartNotes": [
      "Iris",
      "Jasmine"
    ],
    "baseNotes": [
      "Leather",
      "Benzoin",
      "Vetiver",
      "Sandalwood",
      "Vanilla",
      "Amber"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer",
      "Winter"
    ],
    "time": "Day / Evening",
    "sprays": "4-6",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal",
      "Office"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Citrus",
      "Floral"
    ],
    "accords": [
      "Earthy",
      "Floral",
      "Fresh",
      "Leather"
    ]
  },
  {
    "id": "900",
    "slug": "penhaligon-s-terrible-teddy",
    "brand": "Penhaligon S",
    "name": "Terrible Teddy",
    "gender": "for men",
    "topNotes": [
      "Incense"
    ],
    "heartNotes": [
      "Leather"
    ],
    "baseNotes": [
      "Ambroxan"
    ],
    "seasons": [
      "Spring",
      "Ac Venues",
      "Mild Winter",
      "Monsoon Evenings"
    ],
    "time": "Day / Evening",
    "sprays": "2-3 sprays",
    "occasions": [
      "Lunches",
      "Smart Casuals",
      "Dates",
      "Office",
      "Pujas"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Leather"
    ],
    "accords": [
      "Balsamic",
      "Leather",
      "Warm"
    ]
  },
  {
    "id": "901",
    "slug": "penhaligon-s-the-blazing-mr-sam",
    "brand": "Penhaligon S",
    "name": "The Blazing Mr Sam",
    "gender": "for men",
    "topNotes": [
      "Cardamom",
      "Cinnamon"
    ],
    "heartNotes": [
      "Black Pepper",
      "Saffron",
      "Cumin"
    ],
    "baseNotes": [
      "Tobacco",
      "Vanilla",
      "Cedar",
      "Patchouli"
    ],
    "seasons": [
      "Monsoon",
      "Winter"
    ],
    "time": "Evening",
    "sprays": "2-3",
    "occasions": [
      "Date Night",
      "Formal"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Gourmand",
      "Spicy"
    ],
    "accords": [
      "Earthy",
      "Spicy",
      "Sweet",
      "Warm"
    ]
  },
  {
    "id": "902",
    "slug": "penhaligon-s-the-coveted-duchess-rose",
    "brand": "Penhaligon S",
    "name": "The Coveted Duchess Rose",
    "gender": "for women",
    "topNotes": [
      "Not separately listed"
    ],
    "heartNotes": [
      "Not separately listed"
    ],
    "baseNotes": [
      "Not separately listed"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer"
    ],
    "time": "Day",
    "sprays": "3-4",
    "occasions": [
      "Casual",
      "Office"
    ],
    "featured": false,
    "families": [
      "Aromatic"
    ],
    "accords": [
      "Fresh"
    ]
  },
  {
    "id": "903",
    "slug": "the-inimitable-william-penhaligon",
    "brand": "The Inimitable William",
    "name": "Penhaligon",
    "gender": "for men",
    "topNotes": [
      "Bergamot",
      "Jasmine"
    ],
    "heartNotes": [
      "Vetiver",
      "Cedar",
      "Incense"
    ],
    "baseNotes": [
      "Sandalwood",
      "Ambroxan"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer",
      "Winter"
    ],
    "time": "Day / Evening",
    "sprays": "4-6",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal",
      "Office"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Citrus",
      "Floral"
    ],
    "accords": [
      "Balsamic",
      "Earthy",
      "Floral",
      "Fresh"
    ]
  },
  {
    "id": "904",
    "slug": "penhaligon-s-the-omniscient-mr-thompson",
    "brand": "Penhaligon S",
    "name": "The Omniscient Mr Thompson",
    "gender": "for men",
    "topNotes": [
      "Lavender",
      "elemi",
      "Pink Pepper"
    ],
    "heartNotes": [
      "Orris",
      "Black Pepper",
      "Geranium"
    ],
    "baseNotes": [
      "Vanilla",
      "Sesame",
      "Oak"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Winter"
    ],
    "time": "Evening",
    "sprays": "2-3",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Aromatic",
      "Floral"
    ],
    "accords": [
      "Floral",
      "Herbal",
      "Spicy",
      "Sweet"
    ]
  },
  {
    "id": "905",
    "slug": "pierre-guillaume-paris-le-musc-la-peau-4-1",
    "brand": "Pierre Guillaume Paris",
    "name": "Le Musc La Peau 4 1",
    "gender": "for women and men",
    "topNotes": [
      "Not separately listed"
    ],
    "heartNotes": [
      "Not separately listed"
    ],
    "baseNotes": [
      "Not separately listed"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer"
    ],
    "time": "Day",
    "sprays": "3-4",
    "occasions": [
      "Casual",
      "Office"
    ],
    "featured": false,
    "families": [
      "Aromatic"
    ],
    "accords": [
      "Fresh"
    ]
  },
  {
    "id": "906",
    "slug": "prada-prada-amber-pour-homme-intense",
    "brand": "Prada",
    "name": "Prada Amber Pour Homme Intense",
    "gender": "for men",
    "topNotes": [
      "Not separately listed"
    ],
    "heartNotes": [
      "Not separately listed"
    ],
    "baseNotes": [
      "Not separately listed"
    ],
    "seasons": [
      "Spring",
      "Ac Venues",
      "Mild Winter",
      "Monsoon Evenings"
    ],
    "time": "Day / Evening",
    "sprays": "2-3 sprays",
    "occasions": [
      "Lunches",
      "Smart Casuals",
      "Dates",
      "Office",
      "Pujas"
    ],
    "featured": false,
    "families": [
      "Aromatic"
    ],
    "accords": [
      "Fresh"
    ]
  },
  {
    "id": "907",
    "slug": "prada-prada-amber-pour-homme-intense-907",
    "brand": "Prada",
    "name": "Prada Amber Pour Homme Intense",
    "gender": "for men",
    "topNotes": [
      "Not separately listed"
    ],
    "heartNotes": [
      "Not separately listed"
    ],
    "baseNotes": [
      "Not separately listed"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer"
    ],
    "time": "Day",
    "sprays": "3-4",
    "occasions": [
      "Casual",
      "Office"
    ],
    "featured": false,
    "families": [
      "Aromatic"
    ],
    "accords": [
      "Fresh"
    ]
  },
  {
    "id": "908",
    "slug": "archive-prada-candy",
    "brand": "Archive",
    "name": "Prada Candy",
    "gender": "for women",
    "topNotes": [
      "Caramel"
    ],
    "heartNotes": [
      "Powdery Notes",
      "Musk"
    ],
    "baseNotes": [
      "Benzoin",
      "Vanilla"
    ],
    "seasons": [
      "Winter"
    ],
    "time": "Evening",
    "sprays": "2-3",
    "occasions": [
      "Date Night",
      "Formal"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Gourmand"
    ],
    "accords": [
      "Musky",
      "Powdery",
      "Sweet",
      "Warm"
    ]
  },
  {
    "id": "909",
    "slug": "prada-cargo-de-nuit",
    "brand": "Prada",
    "name": "Cargo de Nuit",
    "gender": "for women and men",
    "topNotes": [
      "Not separately listed"
    ],
    "heartNotes": [
      "Not separately listed"
    ],
    "baseNotes": [
      "Not separately listed"
    ],
    "seasons": [
      "Ac Venues",
      "Winter",
      "Monsoon Evenings"
    ],
    "time": "Evening",
    "sprays": "2-3 sprays",
    "occasions": [
      "Celebrations",
      "Receptions",
      "Dinner Dates",
      "Formal Events"
    ],
    "featured": false,
    "families": [
      "Aromatic"
    ],
    "accords": [
      "Fresh"
    ]
  },
  {
    "id": "910",
    "slug": "prada-infusion-d-iris",
    "brand": "Prada",
    "name": "Infusion d Iris",
    "gender": "for women",
    "topNotes": [
      "African Orange Flower",
      "Neroli",
      "Orange",
      "Mandarin Orange"
    ],
    "heartNotes": [
      "Iris",
      "Galbanum",
      "Mastic or Lentisque"
    ],
    "baseNotes": [
      "Incense",
      "Virginia Cedar",
      "Benzoin",
      "Vetiver"
    ],
    "seasons": [
      "Spring",
      "Ac Venues",
      "Mild Winter",
      "Monsoon Evenings"
    ],
    "time": "Day / Evening",
    "sprays": "2-3 sprays VIDEH / MASTER PERFUME CATALOG",
    "occasions": [
      "Lunches",
      "Smart Casuals",
      "Dates",
      "Office",
      "Pujas"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Citrus",
      "Floral"
    ],
    "accords": [
      "Balsamic",
      "Earthy",
      "Floral",
      "Fresh"
    ]
  },
  {
    "id": "911",
    "slug": "prada-infusion-d-homme",
    "brand": "Prada",
    "name": "Infusion d Homme",
    "gender": "for men",
    "topNotes": [
      "Neroli",
      "Mandarin Orange"
    ],
    "heartNotes": [
      "Iris",
      "Vetiver",
      "Galbanum",
      "Cedar"
    ],
    "baseNotes": [
      "Powdery Notes",
      "Olibanum",
      "Benzoin"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer",
      "Winter"
    ],
    "time": "Day / Evening",
    "sprays": "4-6",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal",
      "Office"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Citrus",
      "Floral"
    ],
    "accords": [
      "Earthy",
      "Floral",
      "Fresh",
      "Green"
    ]
  },
  {
    "id": "912",
    "slug": "prada-infusion-d-iris-912",
    "brand": "Prada",
    "name": "Infusion d Iris",
    "gender": "for women",
    "topNotes": [
      "African Orange Flower",
      "Neroli",
      "Orange",
      "Mandarin Orange"
    ],
    "heartNotes": [
      "Iris",
      "Galbanum",
      "Mastic or Lentisque"
    ],
    "baseNotes": [
      "Incense",
      "Virginia Cedar",
      "Benzoin",
      "Vetiver"
    ],
    "seasons": [
      "Spring",
      "Summer",
      "Monsoon"
    ],
    "time": "Day",
    "sprays": "3-4 sprays; 2-3 indoors Top: African Orange Flower, Neroli, Orange and Mandarin Orange \u00e2\u20ac\u00a2 Heart: Iris, Galbanum and Mastic or Lentisque \u00e2\u20ac\u00a2 Base: Incense, Virginia Cedar, Benzoin and Vetiver",
    "occasions": [
      "Travel",
      "Casual Daytime Events",
      "College",
      "Office",
      "Brunch"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Citrus",
      "Floral"
    ],
    "accords": [
      "Balsamic",
      "Earthy",
      "Floral",
      "Fresh"
    ]
  },
  {
    "id": "913",
    "slug": "prada-prada-la-femme-l-eau",
    "brand": "Prada",
    "name": "Prada La Femme L Eau",
    "gender": "for women",
    "topNotes": [
      "Frangipani",
      "Mandarin Orange"
    ],
    "heartNotes": [
      "Tuberose",
      "Ylang-Ylang"
    ],
    "baseNotes": [
      "Woody Notes"
    ],
    "seasons": [
      "Spring",
      "Summer",
      "Winter"
    ],
    "time": "Day / Evening",
    "sprays": "4-6",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal",
      "Office"
    ],
    "featured": false,
    "families": [
      "Citrus",
      "Floral",
      "Woody"
    ],
    "accords": [
      "Floral",
      "Fresh",
      "Woody"
    ]
  },
  {
    "id": "914",
    "slug": "prada-prada-l-homme",
    "brand": "Prada",
    "name": "Prada L Homme",
    "gender": "for men",
    "topNotes": [
      "Neroli",
      "Black Pepper",
      "Cardamom",
      "Carrot Seeds"
    ],
    "heartNotes": [
      "Iris",
      "Violet",
      "Geranium",
      "Mate"
    ],
    "baseNotes": [
      "Amber",
      "Cedar",
      "Sandalwood",
      "Patchouli"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer",
      "Winter"
    ],
    "time": "Day / Evening",
    "sprays": "4-6",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal",
      "Office"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Citrus",
      "Floral"
    ],
    "accords": [
      "Earthy",
      "Floral",
      "Fresh",
      "Powdery"
    ]
  },
  {
    "id": "915",
    "slug": "prada-prada-l-homme-intense",
    "brand": "Prada",
    "name": "Prada L Homme Intense",
    "gender": "for men",
    "topNotes": [
      "Iris"
    ],
    "heartNotes": [
      "Amber",
      "Patchouli"
    ],
    "baseNotes": [
      "Tonka Bean",
      "Leather",
      "Sandalwood"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Winter"
    ],
    "time": "Evening",
    "sprays": "2-3",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Floral",
      "Leather"
    ],
    "accords": [
      "Earthy",
      "Floral",
      "Leather",
      "Powdery"
    ]
  },
  {
    "id": "916",
    "slug": "prada-luna-rossa-black",
    "brand": "Prada",
    "name": "Luna Rossa Black",
    "gender": "for men",
    "topNotes": [
      "Bergamot"
    ],
    "heartNotes": [
      "Angelica",
      "Patchouli"
    ],
    "baseNotes": [
      "Coumarin",
      "Amber",
      "Musk"
    ],
    "seasons": [
      "Ac Venues",
      "Winter",
      "Cool Nights"
    ],
    "time": "Evening",
    "sprays": "1-2 sprays",
    "occasions": [
      "Receptions",
      "Winter Weddings",
      "Festive Evenings",
      "Formal Dinners"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Citrus",
      "Woody"
    ],
    "accords": [
      "Earthy",
      "Fresh",
      "Musky",
      "Warm"
    ]
  },
  {
    "id": "917",
    "slug": "prada-luna-rossa-black-917",
    "brand": "Prada",
    "name": "Luna Rossa Black",
    "gender": "for men",
    "topNotes": [
      "Bergamot"
    ],
    "heartNotes": [
      "Angelica",
      "Patchouli"
    ],
    "baseNotes": [
      "Coumarin",
      "Amber",
      "Musk"
    ],
    "seasons": [
      "Spring",
      "Ac Venues",
      "Mild Winter",
      "Monsoon Evenings"
    ],
    "time": "Day / Evening",
    "sprays": "2-3 sprays",
    "occasions": [
      "Lunches",
      "Smart Casuals",
      "Dates",
      "Office",
      "Pujas"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Citrus",
      "Woody"
    ],
    "accords": [
      "Earthy",
      "Fresh",
      "Musky",
      "Warm"
    ]
  },
  {
    "id": "918",
    "slug": "prada-prada-candy-sugar-pop",
    "brand": "Prada",
    "name": "Prada Candy Sugar Pop",
    "gender": "for women",
    "topNotes": [
      "Bergamot",
      "Pepper"
    ],
    "heartNotes": [
      "Lavender",
      "Metallic notes",
      "Watery Notes",
      "Coal",
      "Soil Tincture"
    ],
    "baseNotes": [
      "Ambroxan",
      "Patchouli"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer"
    ],
    "time": "Day",
    "sprays": "4-6",
    "occasions": [
      "Casual",
      "Formal",
      "Office"
    ],
    "featured": false,
    "families": [
      "Aquatic",
      "Aromatic",
      "Citrus"
    ],
    "accords": [
      "Earthy",
      "Fresh",
      "Herbal",
      "Marine"
    ]
  },
  {
    "id": "919",
    "slug": "prada-luna-rossa-carbon",
    "brand": "Prada",
    "name": "Luna Rossa Carbon",
    "gender": "for men",
    "topNotes": [
      "Red Apple",
      "Citruses",
      "Bergamot Leaf",
      "Bergamot"
    ],
    "heartNotes": [
      "White Peach",
      "Floral Notes"
    ],
    "baseNotes": [
      "Vanilla",
      "Caramel"
    ],
    "seasons": [
      "Spring",
      "Summer",
      "Monsoon"
    ],
    "time": "Day",
    "sprays": "3-4 sprays; 2-3 indoors",
    "occasions": [
      "Travel",
      "Casual Daytime Events",
      "College",
      "Office",
      "Brunch"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Citrus",
      "Floral"
    ],
    "accords": [
      "Floral",
      "Fresh",
      "Fruity",
      "Sweet"
    ]
  },
  {
    "id": "920",
    "slug": "profumum-roma-acqua-di-sale",
    "brand": "Profumum Roma",
    "name": "Acqua di Sale",
    "gender": "for women and men",
    "topNotes": [
      "Not separately listed"
    ],
    "heartNotes": [
      "Not separately listed"
    ],
    "baseNotes": [
      "Not separately listed"
    ],
    "seasons": [
      "Spring",
      "Ac Venues",
      "Mild Winter",
      "Monsoon Evenings"
    ],
    "time": "Day / Evening",
    "sprays": "2-3 sprays",
    "occasions": [
      "Lunches",
      "Smart Casuals",
      "Dates",
      "Office",
      "Pujas"
    ],
    "featured": false,
    "families": [
      "Aromatic"
    ],
    "accords": [
      "Fresh"
    ]
  },
  {
    "id": "921",
    "slug": "profumum-roma-acqua-viva",
    "brand": "Profumum Roma",
    "name": "Acqua Viva",
    "gender": "for women and men",
    "topNotes": [
      "Not separately listed"
    ],
    "heartNotes": [
      "Not separately listed"
    ],
    "baseNotes": [
      "Not separately listed"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer"
    ],
    "time": "Day",
    "sprays": "3-4",
    "occasions": [
      "Casual",
      "Office"
    ],
    "featured": false,
    "families": [
      "Aromatic"
    ],
    "accords": [
      "Fresh"
    ]
  },
  {
    "id": "922",
    "slug": "profumum-roma-sorriso",
    "brand": "Profumum Roma",
    "name": "Sorriso",
    "gender": "for women and men",
    "topNotes": [
      "Not separately listed"
    ],
    "heartNotes": [
      "Not separately listed"
    ],
    "baseNotes": [
      "Not separately listed"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer"
    ],
    "time": "Day",
    "sprays": "3-4",
    "occasions": [
      "Casual",
      "Office"
    ],
    "featured": false,
    "families": [
      "Aromatic"
    ],
    "accords": [
      "Fresh"
    ]
  },
  {
    "id": "923",
    "slug": "ralph-lauren-polo-supreme-oud",
    "brand": "Ralph Lauren",
    "name": "Polo Supreme Oud",
    "gender": "for men",
    "topNotes": [
      "Cinnamon",
      "Pink Pepper"
    ],
    "heartNotes": [
      "Agarwood (Oud)"
    ],
    "baseNotes": [
      "Guaiac Wood",
      "Vetiver"
    ],
    "seasons": [
      "Monsoon",
      "Winter"
    ],
    "time": "Evening",
    "sprays": "2-3",
    "occasions": [
      "Date Night",
      "Formal"
    ],
    "featured": false,
    "families": [
      "Spicy",
      "Woody"
    ],
    "accords": [
      "Earthy",
      "Spicy",
      "Woody"
    ]
  },
  {
    "id": "924",
    "slug": "ralph-lauren-polo-blue",
    "brand": "Ralph Lauren",
    "name": "Polo Blue",
    "gender": "for men",
    "topNotes": [
      "Cucumber",
      "Melon",
      "Mandarin Orange"
    ],
    "heartNotes": [
      "Basil",
      "Sage",
      "Geranium"
    ],
    "baseNotes": [
      "Suede",
      "Woodsy Notes",
      "Musk"
    ],
    "seasons": [
      "Spring",
      "Ac Venues",
      "Mild Winter",
      "Monsoon Evenings"
    ],
    "time": "Day / Evening",
    "sprays": "2-3 sprays",
    "occasions": [
      "Lunches",
      "Smart Casuals",
      "Dates",
      "Office",
      "Pujas"
    ],
    "featured": false,
    "families": [
      "Aromatic",
      "Citrus",
      "Floral"
    ],
    "accords": [
      "Floral",
      "Fresh",
      "Herbal",
      "Leather"
    ]
  },
  {
    "id": "925",
    "slug": "ralph-lauren-polo-deep-blue-parfum",
    "brand": "Ralph Lauren",
    "name": "Polo Deep Blue Parfum",
    "gender": "for men",
    "topNotes": [
      "Green Mango",
      "Grapefruit",
      "Bergamot"
    ],
    "heartNotes": [
      "Cypress",
      "Clary Sage",
      "Geranium"
    ],
    "baseNotes": [
      "Sea Notes",
      "Ambroxan",
      "Fir Resin",
      "Musk",
      "Patchouli"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer",
      "Winter"
    ],
    "time": "Day / Evening",
    "sprays": "4-6",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal",
      "Office"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Aquatic",
      "Aromatic"
    ],
    "accords": [
      "Balsamic",
      "Earthy",
      "Floral",
      "Fresh"
    ]
  },
  {
    "id": "926",
    "slug": "ralph-lauren-polo",
    "brand": "Ralph Lauren",
    "name": "Polo",
    "gender": "for men",
    "topNotes": [
      "Juniper Berries",
      "Basil",
      "Artemisia",
      "Caraway",
      "Coriander",
      "Bergamot"
    ],
    "heartNotes": [
      "Pine Tree Needles",
      "Leather",
      "Chamomile",
      "Pepper",
      "Carnation",
      "Geranium",
      "Jasmine",
      "Rose"
    ],
    "baseNotes": [
      "Tobacco",
      "Oakmoss",
      "Patchouli",
      "Cedar",
      "Vetiver",
      "Musk",
      "Amber"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer",
      "Winter"
    ],
    "time": "Day / Evening",
    "sprays": "4-6",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal",
      "Office"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Aromatic",
      "Citrus"
    ],
    "accords": [
      "Earthy",
      "Floral",
      "Fresh",
      "Herbal"
    ]
  },
  {
    "id": "927",
    "slug": "ralph-lauren-polo-red-extreme",
    "brand": "Ralph Lauren",
    "name": "Polo Red Extreme",
    "gender": "for men",
    "topNotes": [
      "Not separately listed"
    ],
    "heartNotes": [
      "Not separately listed"
    ],
    "baseNotes": [
      "Not separately listed"
    ],
    "seasons": [
      "Spring",
      "Ac Venues",
      "Mild Winter",
      "Monsoon Evenings"
    ],
    "time": "Day / Evening",
    "sprays": "2-3 sprays",
    "occasions": [
      "Lunches",
      "Smart Casuals",
      "Dates",
      "Office",
      "Pujas"
    ],
    "featured": false,
    "families": [
      "Aromatic"
    ],
    "accords": [
      "Fresh"
    ]
  },
  {
    "id": "928",
    "slug": "ralph-lauren-safari-for-men",
    "brand": "Ralph Lauren",
    "name": "Safari for Men",
    "gender": "for men",
    "topNotes": [
      "Lavender",
      "Bergamot",
      "Aldehydes",
      "Coriander",
      "Artemisia",
      "Green Notes",
      "Neroli",
      "Lemon"
    ],
    "heartNotes": [
      "Tarragon",
      "Carnation",
      "Cinnamon",
      "Rose",
      "Jasmine",
      "Cyclamen"
    ],
    "baseNotes": [
      "Leather",
      "Oakmoss",
      "Sandalwood",
      "Cedar",
      "Musk",
      "Patchouli",
      "Amber"
    ],
    "seasons": [
      "Spring",
      "Ac Venues",
      "Mild Winter",
      "Monsoon Evenings"
    ],
    "time": "Day / Evening",
    "sprays": "2-3 sprays",
    "occasions": [
      "Lunches",
      "Smart Casuals",
      "Dates",
      "Office",
      "Pujas"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Aromatic",
      "Citrus"
    ],
    "accords": [
      "Earthy",
      "Floral",
      "Fresh",
      "Green"
    ]
  },
  {
    "id": "929",
    "slug": "ralph-lauren-romance-rose",
    "brand": "Ralph Lauren",
    "name": "Romance Rose",
    "gender": "for women",
    "topNotes": [
      "Litchi",
      "Red Apple",
      "Black Currant",
      "Bergamot"
    ],
    "heartNotes": [
      "May Rose",
      "Rose",
      "Jasmine",
      "White Violet"
    ],
    "baseNotes": [
      "Musk",
      "Patchouli",
      "Benzoin"
    ],
    "seasons": [
      "Spring",
      "Summer",
      "Monsoon"
    ],
    "time": "Day",
    "sprays": "3-4 sprays; 2-3 indoors",
    "occasions": [
      "Travel",
      "Casual Daytime Events",
      "College",
      "Office",
      "Brunch"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Citrus",
      "Floral"
    ],
    "accords": [
      "Earthy",
      "Floral",
      "Fresh",
      "Fruity"
    ]
  },
  {
    "id": "930",
    "slug": "ralph-lauren-polo-supreme-leather",
    "brand": "Ralph Lauren",
    "name": "Polo Supreme Leather",
    "gender": "for men",
    "topNotes": [
      "Nutmeg",
      "Cardamom"
    ],
    "heartNotes": [
      "Leather",
      "Saffron"
    ],
    "baseNotes": [
      "Tonka Bean",
      "Honey"
    ],
    "seasons": [
      "Ac Venues",
      "Winter",
      "Cool Nights"
    ],
    "time": "Evening",
    "sprays": "1-2 sprays",
    "occasions": [
      "Receptions",
      "Winter Weddings",
      "Festive Evenings",
      "Formal Dinners"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Gourmand",
      "Leather"
    ],
    "accords": [
      "Leather",
      "Spicy",
      "Sweet",
      "Warm"
    ]
  },
  {
    "id": "931",
    "slug": "ralph-lauren-polo-supreme-oud-931",
    "brand": "Ralph Lauren",
    "name": "Polo Supreme Oud",
    "gender": "for men",
    "topNotes": [
      "Cinnamon",
      "Pink Pepper"
    ],
    "heartNotes": [
      "Agarwood (Oud)"
    ],
    "baseNotes": [
      "Guaiac Wood",
      "Vetiver"
    ],
    "seasons": [
      "Monsoon",
      "Winter"
    ],
    "time": "Evening",
    "sprays": "2-3",
    "occasions": [
      "Date Night",
      "Formal"
    ],
    "featured": false,
    "families": [
      "Spicy",
      "Woody"
    ],
    "accords": [
      "Earthy",
      "Spicy",
      "Woody"
    ]
  },
  {
    "id": "932",
    "slug": "ralph-lauren-woman-by-ralph-lauren",
    "brand": "Ralph Lauren",
    "name": "Woman by Ralph Lauren",
    "gender": "for women",
    "topNotes": [
      "Pear",
      "Black Currant",
      "Rhubarb"
    ],
    "heartNotes": [
      "Tuberose",
      "Orange Blossom",
      "Turkish Rose"
    ],
    "baseNotes": [
      "Hazelnut",
      "Sandalwood",
      "Woody Notes"
    ],
    "seasons": [
      "Spring",
      "Ac Venues",
      "Mild Winter",
      "Monsoon Evenings"
    ],
    "time": "Day / Evening",
    "sprays": "2-3 sprays",
    "occasions": [
      "Lunches",
      "Smart Casuals",
      "Dates",
      "Office",
      "Pujas"
    ],
    "featured": false,
    "families": [
      "Citrus",
      "Floral",
      "Fruity"
    ],
    "accords": [
      "Floral",
      "Fresh",
      "Fruity",
      "Woody"
    ]
  },
  {
    "id": "933",
    "slug": "revlon-intimate",
    "brand": "Revlon",
    "name": "Intimate",
    "gender": "for women",
    "topNotes": [
      "Aldehydes",
      "Rose",
      "Gardenia",
      "Coriander",
      "Bergamot"
    ],
    "heartNotes": [
      "Sandalwood",
      "Patchouli",
      "Orris Root",
      "Jasmine",
      "Virginia Cedar"
    ],
    "baseNotes": [
      "oak moss",
      "Civetta",
      "Castoreum",
      "Musk",
      "Amber"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer",
      "Winter"
    ],
    "time": "Day / Evening",
    "sprays": "4-6",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal",
      "Office"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Citrus",
      "Floral"
    ],
    "accords": [
      "Earthy",
      "Floral",
      "Fresh",
      "Leather"
    ]
  },
  {
    "id": "934",
    "slug": "hinode-rebelle",
    "brand": "Hinode",
    "name": "Rebelle",
    "gender": "for women",
    "topNotes": [
      "Turkish Rose",
      "Lily"
    ],
    "heartNotes": [
      "Almond",
      "Orchid"
    ],
    "baseNotes": [
      "White Musk",
      "Vanilla"
    ],
    "seasons": [
      "Spring",
      "Winter"
    ],
    "time": "Evening",
    "sprays": "2-3",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Floral",
      "Gourmand"
    ],
    "accords": [
      "Floral",
      "Musky",
      "Sweet",
      "Warm"
    ]
  },
  {
    "id": "935",
    "slug": "robert-piguet-fracas",
    "brand": "Robert Piguet",
    "name": "Fracas",
    "gender": "for women",
    "topNotes": [
      "Peach",
      "Orange Blossom",
      "Hiacynth",
      "Green Leaves",
      "Mandarin Orange",
      "Bergamot"
    ],
    "heartNotes": [
      "Tuberose",
      "Jasmine",
      "Gardenia",
      "Osmanthus",
      "Narcissus",
      "Lily-of-the-Valley",
      "Carnation",
      "White Iris",
      "Violet Root",
      "Coriander",
      "Rose Geranium",
      "Rose"
    ],
    "baseNotes": [
      "Musk"
    ],
    "seasons": [
      "Spring",
      "Summer"
    ],
    "time": "Day",
    "sprays": "4-6",
    "occasions": [
      "Casual",
      "Office"
    ],
    "featured": false,
    "families": [
      "Citrus",
      "Floral",
      "Fruity"
    ],
    "accords": [
      "Floral",
      "Fresh",
      "Fruity",
      "Green"
    ]
  },
  {
    "id": "936",
    "slug": "roberto-capucci-rose",
    "brand": "Roberto Capucci",
    "name": "Rose",
    "gender": "for women",
    "topNotes": [
      "Pomegranate",
      "Tangerine"
    ],
    "heartNotes": [
      "Damask Rose",
      "Freesia",
      "Jasmine",
      "Ozonic notes"
    ],
    "baseNotes": [
      "Woody Notes"
    ],
    "seasons": [
      "Spring",
      "Summer",
      "Monsoon"
    ],
    "time": "Day",
    "sprays": "3-4 sprays; 2-3 indoors Top: Pomegranate and Tangerine \u00e2\u20ac\u00a2 Heart: Damask Rose, Freesia, Jasmine and Ozonic notes \u00e2\u20ac\u00a2 Base: Woody Notes",
    "occasions": [
      "Travel",
      "Casual Daytime Events",
      "College",
      "Office",
      "Brunch"
    ],
    "featured": false,
    "families": [
      "Floral",
      "Woody"
    ],
    "accords": [
      "Floral",
      "Woody"
    ]
  },
  {
    "id": "937",
    "slug": "rochas-eau-de-rochas-homme",
    "brand": "Rochas",
    "name": "Eau de Rochas Homme",
    "gender": "for men",
    "topNotes": [
      "Lime",
      "Lemon",
      "Lemon Verbena",
      "Bergamot",
      "Aldehydes",
      "Basil",
      "Mandarin Orange"
    ],
    "heartNotes": [
      "Coriander",
      "Jasmine",
      "Lily-of-the- Valley",
      "Freesia",
      "Carnation",
      "Violet",
      "Pine",
      "Wild Rose",
      "Artemisia"
    ],
    "baseNotes": [
      "Vetiver",
      "Oakmoss",
      "Cedar",
      "Musk",
      "Amber"
    ],
    "seasons": [
      "Spring",
      "Summer",
      "Monsoon"
    ],
    "time": "Day",
    "sprays": "3-4 sprays; 2-3 indoors",
    "occasions": [
      "Travel",
      "Casual Daytime Events",
      "College",
      "Office",
      "Brunch"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Aromatic",
      "Citrus"
    ],
    "accords": [
      "Earthy",
      "Floral",
      "Fresh",
      "Herbal"
    ]
  },
  {
    "id": "938",
    "slug": "roja-dove-a-goodnight-kiss",
    "brand": "Roja Dove",
    "name": "A Goodnight Kiss",
    "gender": "for women",
    "topNotes": [
      "Bergamot"
    ],
    "heartNotes": [
      "Heliotrope",
      "Jasmine",
      "Ylang-Ylang",
      "Rose",
      "Neroli",
      "Geranium",
      "Peach"
    ],
    "baseNotes": [
      "Orris",
      "Ambergris",
      "Musk",
      "Sandalwood",
      "Vanilla",
      "Patchouli"
    ],
    "seasons": [
      "Spring",
      "Ac Venues",
      "Mild Winter",
      "Monsoon Evenings"
    ],
    "time": "Day / Evening",
    "sprays": "2-3 sprays",
    "occasions": [
      "Lunches",
      "Smart Casuals",
      "Dates",
      "Office",
      "Pujas"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Citrus",
      "Floral"
    ],
    "accords": [
      "Earthy",
      "Floral",
      "Fresh",
      "Fruity"
    ]
  },
  {
    "id": "939",
    "slug": "roja-dove-amber-aoud-absolue-precieux",
    "brand": "Roja Dove",
    "name": "Amber Aoud Absolue Precieux",
    "gender": "for women and men",
    "topNotes": [
      "Lime",
      "Lemon",
      "Bergamot"
    ],
    "heartNotes": [
      "Rose de Mai",
      "Fig",
      "Jasmine",
      "Ylang-Ylang"
    ],
    "baseNotes": [
      "Patchouli",
      "Agarwood (Oud)",
      "Saffron",
      "Ambergris",
      "Benzoin",
      "Cinnamon",
      "Oakmoss",
      "Sandalwood",
      "Orris Root",
      "Birch",
      "Musk"
    ],
    "seasons": [
      "Spring",
      "Ac Venues",
      "Mild Winter",
      "Monsoon Evenings"
    ],
    "time": "Day / Evening",
    "sprays": "2-3 sprays Amber Aoud for women and men",
    "occasions": [
      "Lunches",
      "Smart Casuals",
      "Dates",
      "Office",
      "Pujas"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Citrus",
      "Floral"
    ],
    "accords": [
      "Earthy",
      "Floral",
      "Fresh",
      "Fruity"
    ]
  },
  {
    "id": "940",
    "slug": "sprays-2-3-sprays-amber-aoud",
    "brand": "Sprays: 2-3 Sprays",
    "name": "Amber Aoud",
    "gender": "for women and men",
    "topNotes": [
      "Bergamot",
      "Lime",
      "Lemon"
    ],
    "heartNotes": [
      "Rose",
      "Fig",
      "Ylang-Ylang",
      "Jasmine"
    ],
    "baseNotes": [
      "Agarwood (Oud)",
      "Ambergris",
      "Saffron",
      "Cinnamon",
      "Civet",
      "Sandalwood",
      "Orris Root",
      "Birch",
      "Musk",
      "Patchouli",
      "Oakmoss"
    ],
    "seasons": [
      "Ac Venues",
      "Winter",
      "Cool Nights"
    ],
    "time": "Evening",
    "sprays": "1-2 sprays",
    "occasions": [
      "Receptions",
      "Winter Weddings",
      "Festive Evenings",
      "Formal Dinners"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Citrus",
      "Floral"
    ],
    "accords": [
      "Earthy",
      "Floral",
      "Fresh",
      "Fruity"
    ]
  },
  {
    "id": "941",
    "slug": "roja-dove-amber-aoud",
    "brand": "Roja Dove",
    "name": "Amber Aoud",
    "gender": "for women and men",
    "topNotes": [
      "Bergamot",
      "Lime",
      "Lemon"
    ],
    "heartNotes": [
      "Rose",
      "Fig",
      "Ylang-Ylang",
      "Jasmine"
    ],
    "baseNotes": [
      "Agarwood (Oud)",
      "Ambergris",
      "Saffron",
      "Cinnamon",
      "Civet",
      "Sandalwood",
      "Orris Root",
      "Birch",
      "Musk",
      "Patchouli",
      "Oakmoss"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer",
      "Winter"
    ],
    "time": "Day / Evening",
    "sprays": "4-6",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal",
      "Office"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Citrus",
      "Floral"
    ],
    "accords": [
      "Earthy",
      "Floral",
      "Fresh",
      "Fruity"
    ]
  },
  {
    "id": "942",
    "slug": "roja-dove-apex",
    "brand": "Roja Dove",
    "name": "Apex",
    "gender": "for men",
    "topNotes": [
      "Orange",
      "Mandarin Orange",
      "Bergamot",
      "Lemon"
    ],
    "heartNotes": [
      "Pineapple",
      "Cistus Incanus",
      "Jasmine"
    ],
    "baseNotes": [
      "Cypress",
      "Balsam Fir",
      "Oakmoss",
      "Leather",
      "Patchouli",
      "Juniper Berries",
      "Olibanum",
      "Tobacco",
      "Cashmere Wood",
      "Labdanum",
      "Musk",
      "Amber",
      "Galbanum",
      "Elemi"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer",
      "Winter"
    ],
    "time": "Day / Evening",
    "sprays": "4-6",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal",
      "Office"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Citrus",
      "Floral"
    ],
    "accords": [
      "Earthy",
      "Floral",
      "Fresh",
      "Fruity"
    ]
  },
  {
    "id": "943",
    "slug": "roja-dove-britannia",
    "brand": "Roja Dove",
    "name": "Britannia",
    "gender": "for women and men",
    "topNotes": [
      "Citron",
      "Tangerine",
      "Mandarin Orange",
      "Bergamot"
    ],
    "heartNotes": [
      "Peach",
      "Heliotrope",
      "Violet",
      "Champaca",
      "Jasmine",
      "Rose de Mai",
      "Cassia"
    ],
    "baseNotes": [
      "Cacao",
      "Orris Root",
      "Ambergris",
      "Vanilla",
      "Cinnamon",
      "Sandalwood",
      "Cloves",
      "Musk",
      "Vetiver",
      "Patchouli"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer",
      "Winter"
    ],
    "time": "Day / Evening",
    "sprays": "4-6",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal",
      "Office"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Citrus",
      "Floral"
    ],
    "accords": [
      "Earthy",
      "Floral",
      "Fresh",
      "Fruity"
    ]
  },
  {
    "id": "944",
    "slug": "roja-dove-candy-aoud",
    "brand": "Roja Dove",
    "name": "Candy Aoud",
    "gender": "for women and men",
    "topNotes": [
      "Bergamot",
      "Grapefruit"
    ],
    "heartNotes": [
      "Banana",
      "Apple",
      "Pear",
      "Black Currant",
      "Rose"
    ],
    "baseNotes": [
      "Agarwood (Oud)",
      "Leather",
      "Amber",
      "Birch",
      "Rhubarb",
      "Saffron",
      "Patchouli",
      "Gurjan balsam",
      "Musk",
      "Sandalwood",
      "Cardamom",
      "Cashmere Wood",
      "Labdanum",
      "Oakmoss",
      "Amyris"
    ],
    "seasons": [
      "Spring",
      "Ac Venues",
      "Mild Winter",
      "Monsoon Evenings"
    ],
    "time": "Day / Evening",
    "sprays": "2-3 sprays Top: Bergamot and Grapefruit \u00e2\u20ac\u00a2 Heart: Banana, Apple, Pear, Black Currant and Rose \u00e2\u20ac\u00a2 Base: Agarwood (Oud), Leather, Amber, Birch, Rhubarb, Saffron, Patchouli, Gurjan balsam, Musk, Sandalwood, Cardamom, Cashmere Wood, Labdanum, Oakmoss, Amyris,",
    "occasions": [
      "Lunches",
      "Smart Casuals",
      "Dates",
      "Office",
      "Pujas"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Citrus",
      "Floral"
    ],
    "accords": [
      "Earthy",
      "Floral",
      "Fresh",
      "Fruity"
    ]
  },
  {
    "id": "945",
    "slug": "roja-dove-danger",
    "brand": "Roja Dove",
    "name": "Danger",
    "gender": "for women",
    "topNotes": [
      "Lemon Verbena",
      "Bergamot",
      "Mandarin Orange",
      "Grapefruit",
      "Lemon"
    ],
    "heartNotes": [
      "Ylang-Ylang",
      "Gardenia",
      "Violet",
      "Peach",
      "Jasmine",
      "May Rose"
    ],
    "baseNotes": [
      "Sandalwood",
      "Vanilla",
      "Orris Root",
      "Tonka Bean",
      "Cloves",
      "Musk",
      "Patchouli"
    ],
    "seasons": [
      "Spring",
      "Ac Venues",
      "Mild Winter",
      "Monsoon Evenings"
    ],
    "time": "Day / Evening",
    "sprays": "2-3 sprays",
    "occasions": [
      "Lunches",
      "Smart Casuals",
      "Dates",
      "Office",
      "Pujas"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Citrus",
      "Floral"
    ],
    "accords": [
      "Earthy",
      "Floral",
      "Fresh",
      "Fruity"
    ]
  },
  {
    "id": "946",
    "slug": "roja-dove-elysium-pour-femme",
    "brand": "Roja Dove",
    "name": "Elysium Pour Femme",
    "gender": "for women",
    "topNotes": [
      "Blackberry",
      "Bergamot",
      "Mandarin Orange",
      "Peach"
    ],
    "heartNotes": [
      "Freesia",
      "Magnolia",
      "Lily-of-the-Valley",
      "Jasmine",
      "Ylang-Ylang",
      "Geranium",
      "Peony",
      "Cyclamen",
      "Violet"
    ],
    "baseNotes": [
      "Musk",
      "Pink Pepper",
      "Sandalwood",
      "Cedarwood",
      "Vanilla"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer"
    ],
    "time": "Day",
    "sprays": "4-6",
    "occasions": [
      "Brunch",
      "Casual Daytime Events",
      "College",
      "Office",
      "Travel"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Citrus",
      "Floral"
    ],
    "accords": [
      "Floral",
      "Fresh",
      "Fruity",
      "Musky"
    ]
  },
  {
    "id": "947",
    "slug": "roja-dove-diaghilev",
    "brand": "Roja Dove",
    "name": "Diaghilev",
    "gender": "for women and men",
    "topNotes": [
      "Cumin",
      "Bergamot",
      "Lemon",
      "Tarragon",
      "Orange",
      "Lime"
    ],
    "heartNotes": [
      "Peach",
      "Ylang-Ylang",
      "Jasmine",
      "Rose",
      "Heliotrope",
      "Violet",
      "Tuberose",
      "Black Currant"
    ],
    "baseNotes": [
      "oak moss",
      "Civet",
      "Leather",
      "Musk",
      "Cloves",
      "Labdanum",
      "Peru Balsam",
      "Patchouli",
      "Benzoin",
      "Guaiac"
    ],
    "seasons": [
      "Ac Venues",
      "Winter",
      "Cool Nights"
    ],
    "time": "Evening",
    "sprays": "1-2 sprays",
    "occasions": [
      "Receptions",
      "Winter Weddings",
      "Festive Evenings",
      "Formal Dinners"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Citrus",
      "Floral"
    ],
    "accords": [
      "Earthy",
      "Floral",
      "Fresh",
      "Fruity"
    ]
  },
  {
    "id": "948",
    "slug": "elysium-pour-homme-parfum-cologne",
    "brand": "Elysium Pour Homme Parfum",
    "name": "Cologne",
    "gender": "for men",
    "topNotes": [
      "Grapefruit",
      "Lemon",
      "Bergamot",
      "Lime",
      "Thyme",
      "Artemisia",
      "Galbanum"
    ],
    "heartNotes": [
      "Vetiver",
      "Juniper Berries",
      "Black Currant",
      "Apple",
      "Pink Pepper",
      "Cedar",
      "Cypriol Oil or Nagarmotha",
      "Lily-of- the-Valley",
      "Rose",
      "Jasmine"
    ],
    "baseNotes": [
      "Ambergris",
      "Leather"
    ],
    "seasons": [
      "Ac Venues",
      "Winter",
      "Cool Nights"
    ],
    "time": "Evening",
    "sprays": "3-4 sprays; 2-3 indoors Sprays: 1-2 sprays",
    "occasions": [
      "Receptions",
      "Winter Weddings",
      "Festive Evenings",
      "Formal Dinners"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Aromatic",
      "Citrus"
    ],
    "accords": [
      "Earthy",
      "Floral",
      "Fresh",
      "Fruity"
    ]
  },
  {
    "id": "949",
    "slug": "roja-dove-enigma",
    "brand": "Roja Dove",
    "name": "Enigma",
    "gender": "for women",
    "topNotes": [
      "Peach",
      "Neroli",
      "Bergamot"
    ],
    "heartNotes": [
      "Rose",
      "Heliotrope",
      "Ylang-Ylang",
      "Jasmine",
      "Geranium"
    ],
    "baseNotes": [
      "Orris Root",
      "Vanilla",
      "Musk",
      "Ambergris",
      "Sandalwood",
      "Patchouli"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer",
      "Winter"
    ],
    "time": "Day / Evening",
    "sprays": "4-6",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal",
      "Office"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Citrus",
      "Floral"
    ],
    "accords": [
      "Earthy",
      "Floral",
      "Fresh",
      "Fruity"
    ]
  },
  {
    "id": "950",
    "slug": "roja-dove-enigma-pour-homme",
    "brand": "Roja Dove",
    "name": "Enigma Pour Homme",
    "gender": "for men",
    "topNotes": [
      "Black Pepper",
      "Neroli",
      "Bergamot"
    ],
    "heartNotes": [
      "Cognac",
      "Tobacco",
      "Ginger",
      "Jasmine"
    ],
    "baseNotes": [
      "Vanilla",
      "Benzoin",
      "Patchouli"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer",
      "Winter"
    ],
    "time": "Day / Evening",
    "sprays": "4-6",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal",
      "Office"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Citrus",
      "Floral"
    ],
    "accords": [
      "Earthy",
      "Floral",
      "Fresh",
      "Spicy"
    ]
  },
  {
    "id": "951",
    "slug": "roja-dove-lakme",
    "brand": "Roja Dove",
    "name": "Lakme",
    "gender": "for women and men",
    "topNotes": [
      "Aldehydes",
      "Citruses"
    ],
    "heartNotes": [
      "Taif Rose",
      "May Rose",
      "Lily-of-the-Valley",
      "Peach",
      "Magnolia"
    ],
    "baseNotes": [
      "Sandalwood",
      "Benzoin",
      "Orris",
      "Cashmere Wood",
      "Vanilla",
      "Pink Pepper",
      "Musk",
      "Labdanum",
      "Cypriol Oil or Nagarmotha",
      "Olibanum",
      "Ambergris"
    ],
    "seasons": [
      "Spring",
      "Summer",
      "Winter"
    ],
    "time": "Day / Evening",
    "sprays": "4-6",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal",
      "Office"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Citrus",
      "Floral"
    ],
    "accords": [
      "Floral",
      "Fresh",
      "Fruity",
      "Musky"
    ]
  },
  {
    "id": "952",
    "slug": "roja-dove-lakme-952",
    "brand": "Roja Dove",
    "name": "Lakme",
    "gender": "for women and men",
    "topNotes": [
      "Aldehydes",
      "Citruses"
    ],
    "heartNotes": [
      "Taif Rose",
      "May Rose",
      "Lily-of-the-Valley",
      "Peach",
      "Magnolia"
    ],
    "baseNotes": [
      "Sandalwood",
      "Benzoin",
      "Orris",
      "Cashmere Wood",
      "Vanilla",
      "Pink Pepper",
      "Musk",
      "Labdanum",
      "Cypriol Oil or Nagarmotha",
      "Olibanum",
      "Ambergris"
    ],
    "seasons": [
      "Spring",
      "Summer",
      "Winter"
    ],
    "time": "Day / Evening",
    "sprays": "4-6",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal",
      "Office"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Citrus",
      "Floral"
    ],
    "accords": [
      "Floral",
      "Fresh",
      "Fruity",
      "Musky"
    ]
  },
  {
    "id": "953",
    "slug": "roja-dove-manhattan",
    "brand": "Roja Dove",
    "name": "Manhattan",
    "gender": "for women and men",
    "topNotes": [
      "Bergamot",
      "Basil",
      "Lavender"
    ],
    "heartNotes": [
      "Coconut",
      "Heliotrope",
      "Violet",
      "Jasmine",
      "May Rose"
    ],
    "baseNotes": [
      "Tobacco",
      "Clove",
      "Vanilla",
      "Patchouli",
      "Cinnamon",
      "Ginger",
      "Musk",
      "Benzoin",
      "Pink Pepper",
      "Pine",
      "Cedar",
      "Vetiver",
      "Oakmoss"
    ],
    "seasons": [
      "Spring",
      "Ac Venues",
      "Mild Winter",
      "Monsoon Evenings"
    ],
    "time": "Day / Evening",
    "sprays": "2-3 sprays",
    "occasions": [
      "Lunches",
      "Smart Casuals",
      "Dates",
      "Office",
      "Pujas"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Aromatic",
      "Citrus"
    ],
    "accords": [
      "Earthy",
      "Floral",
      "Fresh",
      "Fruity"
    ]
  },
  {
    "id": "954",
    "slug": "roja-dove-oceania",
    "brand": "Roja Dove",
    "name": "Oceania",
    "gender": "for women and men",
    "topNotes": [
      "Grapefruit",
      "Lavender",
      "Lemon",
      "Bergamot",
      "Mandarin Orange",
      "Lime",
      "Rosemary",
      "Thyme",
      "Litsea Cubeba"
    ],
    "heartNotes": [
      "Violet",
      "Ylang-Ylang",
      "Geranium",
      "Jasmine",
      "Jasmine Sambac"
    ],
    "baseNotes": [
      "Moss",
      "Musk",
      "Juniper Berries",
      "Iris",
      "Cedar",
      "Vetiver",
      "Labdanum"
    ],
    "seasons": [
      "Spring",
      "Ac Venues",
      "Mild Winter",
      "Monsoon Evenings"
    ],
    "time": "Day / Evening",
    "sprays": "2-3 sprays",
    "occasions": [
      "Lunches",
      "Smart Casuals",
      "Dates",
      "Office",
      "Pujas"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Aquatic",
      "Aromatic"
    ],
    "accords": [
      "Earthy",
      "Floral",
      "Fresh",
      "Herbal"
    ]
  },
  {
    "id": "955",
    "slug": "roja-dove-reckless-pour-homme",
    "brand": "Roja Dove",
    "name": "Reckless Pour Homme",
    "gender": "for men",
    "topNotes": [
      "Bergamot",
      "Lemon"
    ],
    "heartNotes": [
      "Rose",
      "Ylang-Ylang",
      "Jasmine"
    ],
    "baseNotes": [
      "Agarwood (Oud)",
      "Musk",
      "Ambrette (Musk Mallow)",
      "Leather",
      "Precious Woods",
      "Birch",
      "Vanilla",
      "Tonka Bean",
      "Oakmoss",
      "Sandalwood",
      "Nutmeg"
    ],
    "seasons": [
      "Spring",
      "Summer",
      "Winter"
    ],
    "time": "Day / Evening",
    "sprays": "4-6",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal",
      "Office"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Citrus",
      "Floral"
    ],
    "accords": [
      "Floral",
      "Fresh",
      "Leather",
      "Musky"
    ]
  },
  {
    "id": "956",
    "slug": "roja-dove-musk-aoud",
    "brand": "Roja Dove",
    "name": "Musk Aoud",
    "gender": "for women and men",
    "topNotes": [
      "Citruses"
    ],
    "heartNotes": [
      "Peach",
      "Pear",
      "Rose de Mai",
      "Violet",
      "Jasmine"
    ],
    "baseNotes": [
      "Agarwood (Oud)",
      "Cotton Candy",
      "Ambergris",
      "Benzoin",
      "Saffron",
      "Styrax",
      "Musk",
      "Orris Root",
      "Birch",
      "Patchouli",
      "Cashmere Wood",
      "Labdanum",
      "Sandalwood",
      "Cloves",
      "Vanilla",
      "Cedar"
    ],
    "seasons": [
      "Ac Venues",
      "Cool Nights",
      "Winter"
    ],
    "time": "Evening",
    "sprays": "4-6",
    "occasions": [
      "Festive Evenings",
      "Formal Dinners",
      "Receptions",
      "Winter Weddings"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Citrus",
      "Floral"
    ],
    "accords": [
      "Earthy",
      "Floral",
      "Fresh",
      "Fruity"
    ]
  },
  {
    "id": "957",
    "slug": "roja-dove-qatar",
    "brand": "Roja Dove",
    "name": "Qatar",
    "gender": "for women and men",
    "topNotes": [
      "Bay Leaf",
      "Lavender",
      "Bergamot",
      "Lemon"
    ],
    "heartNotes": [
      "Artemisia",
      "Jasmine",
      "Rose"
    ],
    "baseNotes": [
      "Cypress",
      "Cinnamon",
      "Cardamom",
      "Black Pepper",
      "Oakmoss",
      "Ginger",
      "Incense",
      "Cedar",
      "Labdanum",
      "Vetiver",
      "Cloves",
      "Styrax",
      "Musk",
      "Sandalwood",
      "Tonka Bean"
    ],
    "seasons": [
      "Ac Venues",
      "Winter",
      "Cool Nights"
    ],
    "time": "Evening",
    "sprays": "1-2 sprays",
    "occasions": [
      "Receptions",
      "Winter Weddings",
      "Festive Evenings",
      "Formal Dinners"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Aromatic",
      "Citrus"
    ],
    "accords": [
      "Balsamic",
      "Earthy",
      "Floral",
      "Fresh"
    ]
  },
  {
    "id": "958",
    "slug": "roja-dove-scandal",
    "brand": "Roja Dove",
    "name": "Scandal",
    "gender": "for women",
    "topNotes": [
      "Bergamot",
      "Lavender"
    ],
    "heartNotes": [
      "Tuberose",
      "Gardenia",
      "Jasmine",
      "Orange Blossom",
      "Freesia",
      "Rose",
      "Lily-of-the-Valley"
    ],
    "baseNotes": [
      "Orris Root",
      "Musk",
      "Sandalwood"
    ],
    "seasons": [
      "Ac Venues",
      "Cool Nights",
      "Winter"
    ],
    "time": "Evening",
    "sprays": "4-6",
    "occasions": [
      "Festive Evenings",
      "Formal Dinners",
      "Receptions",
      "Winter Weddings"
    ],
    "featured": false,
    "families": [
      "Aromatic",
      "Citrus",
      "Floral"
    ],
    "accords": [
      "Floral",
      "Fresh",
      "Herbal",
      "Musky"
    ]
  },
  {
    "id": "959",
    "slug": "roja-dove-sweetie-aoud",
    "brand": "Roja Dove",
    "name": "Sweetie Aoud",
    "gender": "for women and men",
    "topNotes": [
      "Artemisia",
      "Bergamot"
    ],
    "heartNotes": [
      "Gourmand Accord",
      "May Rose",
      "Cistus Incanus"
    ],
    "baseNotes": [
      "Agarwood (Oud)",
      "Cardamom",
      "Gurjan balsam",
      "Amyris",
      "Olibanum",
      "Frankincense",
      "Labdanum",
      "Spanish Labdanum",
      "Guaiac Wood",
      "Juniper",
      "Patchouli",
      "Cumin",
      "Cedar"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer",
      "Winter"
    ],
    "time": "Day / Evening",
    "sprays": "4-6",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal",
      "Office"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Aromatic",
      "Citrus"
    ],
    "accords": [
      "Balsamic",
      "Earthy",
      "Floral",
      "Fresh"
    ]
  },
  {
    "id": "960",
    "slug": "rosendo-mateu-olfactive-expressi-sensual-musk",
    "brand": "Rosendo Mateu Olfactive Expressi",
    "name": "Sensual Musk",
    "gender": "for women and men",
    "topNotes": [
      "Spices",
      "Exotic floral notes"
    ],
    "heartNotes": [
      "Carnation",
      "Lily-of-the-Valley"
    ],
    "baseNotes": [
      "Amber",
      "Vanilla",
      "Musk"
    ],
    "seasons": [
      "Spring",
      "Winter"
    ],
    "time": "Evening",
    "sprays": "2-3",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Floral"
    ],
    "accords": [
      "Floral",
      "Musky",
      "Sweet",
      "Warm"
    ]
  },
  {
    "id": "961",
    "slug": "elizabeth-arden-green-tea-mimosa",
    "brand": "Elizabeth Arden",
    "name": "Green Tea Mimosa",
    "gender": "for women",
    "topNotes": [
      "Green Tea",
      "Citruses"
    ],
    "heartNotes": [
      "Mimosa"
    ],
    "baseNotes": [
      "Heliotrope",
      "Ambrette (Musk Mallow)"
    ],
    "seasons": [
      "Spring",
      "Summer",
      "Monsoon"
    ],
    "time": "Day",
    "sprays": "3-4 sprays; 2-3 indoors",
    "occasions": [
      "Travel",
      "Casual Daytime Events",
      "College",
      "Office",
      "Brunch"
    ],
    "featured": false,
    "families": [
      "Citrus",
      "Floral"
    ],
    "accords": [
      "Floral",
      "Fresh",
      "Green",
      "Musky"
    ]
  },
  {
    "id": "962",
    "slug": "serge-lutens-ambre-sultan",
    "brand": "Serge Lutens",
    "name": "Ambre Sultan",
    "gender": "for women and men",
    "topNotes": [
      "Lemon",
      "Calabrian bergamot",
      "Cardamom"
    ],
    "heartNotes": [
      "Lavender",
      "Cypriol Oil or Nagarmotha",
      "Atlas Cedar"
    ],
    "baseNotes": [
      "Tonka Bean",
      "Ambroxan",
      "Benzoin",
      "Patchouli"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer",
      "Winter"
    ],
    "time": "Day / Evening",
    "sprays": "4-6",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal",
      "Office"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Aromatic",
      "Citrus"
    ],
    "accords": [
      "Earthy",
      "Fresh",
      "Herbal",
      "Spicy"
    ]
  },
  {
    "id": "963",
    "slug": "salvatore-ferragamo-acqua-essenziale-blu",
    "brand": "Salvatore Ferragamo",
    "name": "Acqua Essenziale Blu",
    "gender": "for men",
    "topNotes": [
      "Not separately listed"
    ],
    "heartNotes": [
      "Not separately listed"
    ],
    "baseNotes": [
      "Not separately listed"
    ],
    "seasons": [
      "Spring",
      "Ac Venues",
      "Mild Winter",
      "Monsoon Evenings"
    ],
    "time": "Day / Evening",
    "sprays": "2-3 sprays",
    "occasions": [
      "Lunches",
      "Smart Casuals",
      "Dates",
      "Office",
      "Pujas"
    ],
    "featured": false,
    "families": [
      "Aromatic"
    ],
    "accords": [
      "Fresh"
    ]
  },
  {
    "id": "964",
    "slug": "serge-lutens-arabie",
    "brand": "Serge Lutens",
    "name": "Arabie",
    "gender": "for women and men",
    "topNotes": [
      "Not separately listed"
    ],
    "heartNotes": [
      "Not separately listed"
    ],
    "baseNotes": [
      "Not separately listed"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer"
    ],
    "time": "Day",
    "sprays": "3-4",
    "occasions": [
      "Casual",
      "Office"
    ],
    "featured": false,
    "families": [
      "Aromatic"
    ],
    "accords": [
      "Fresh"
    ]
  },
  {
    "id": "965",
    "slug": "serge-lutens-bois-de-violette",
    "brand": "Serge Lutens",
    "name": "Bois de Violette",
    "gender": "for women and men",
    "topNotes": [
      "Not separately listed"
    ],
    "heartNotes": [
      "Not separately listed"
    ],
    "baseNotes": [
      "Not separately listed"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer"
    ],
    "time": "Day",
    "sprays": "3-4",
    "occasions": [
      "Casual",
      "Office"
    ],
    "featured": false,
    "families": [
      "Aromatic"
    ],
    "accords": [
      "Fresh"
    ]
  },
  {
    "id": "966",
    "slug": "serge-lutens-bourreau-des-fleurs",
    "brand": "Serge Lutens",
    "name": "Bourreau Des Fleurs",
    "gender": "for women and men",
    "topNotes": [
      "Not separately listed"
    ],
    "heartNotes": [
      "Not separately listed"
    ],
    "baseNotes": [
      "Not separately listed"
    ],
    "seasons": [
      "Spring",
      "Summer",
      "Monsoon"
    ],
    "time": "Day",
    "sprays": "3-4 sprays; 2-3 indoors",
    "occasions": [
      "Travel",
      "Casual Daytime Events",
      "College",
      "Office",
      "Brunch"
    ],
    "featured": false,
    "families": [
      "Aromatic"
    ],
    "accords": [
      "Fresh"
    ]
  },
  {
    "id": "967",
    "slug": "serge-lutens-chergui",
    "brand": "Serge Lutens",
    "name": "Chergui",
    "gender": "for women and men",
    "topNotes": [
      "Not separately listed"
    ],
    "heartNotes": [
      "Not separately listed"
    ],
    "baseNotes": [
      "Not separately listed"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer"
    ],
    "time": "Day",
    "sprays": "3-4",
    "occasions": [
      "Casual",
      "Office"
    ],
    "featured": false,
    "families": [
      "Aromatic"
    ],
    "accords": [
      "Fresh"
    ]
  },
  {
    "id": "968",
    "slug": "serge-lutens-daim-blond",
    "brand": "Serge Lutens",
    "name": "Daim Blond",
    "gender": "for women and men",
    "topNotes": [
      "Not separately listed"
    ],
    "heartNotes": [
      "Not separately listed"
    ],
    "baseNotes": [
      "Not separately listed"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer"
    ],
    "time": "Day",
    "sprays": "3-4",
    "occasions": [
      "Casual",
      "Office"
    ],
    "featured": false,
    "families": [
      "Aromatic"
    ],
    "accords": [
      "Fresh"
    ]
  },
  {
    "id": "969",
    "slug": "serge-lutens-encens-et-lavande",
    "brand": "Serge Lutens",
    "name": "Encens et Lavande",
    "gender": "for women and men",
    "topNotes": [
      "Not separately listed"
    ],
    "heartNotes": [
      "Not separately listed"
    ],
    "baseNotes": [
      "Not separately listed"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer"
    ],
    "time": "Day",
    "sprays": "3-4",
    "occasions": [
      "Casual",
      "Office"
    ],
    "featured": false,
    "families": [
      "Aromatic"
    ],
    "accords": [
      "Fresh"
    ]
  },
  {
    "id": "970",
    "slug": "serge-lutens-fille-en-aiguilles",
    "brand": "Serge Lutens",
    "name": "Fille en Aiguilles",
    "gender": "for women and men",
    "topNotes": [
      "Not separately listed"
    ],
    "heartNotes": [
      "Not separately listed"
    ],
    "baseNotes": [
      "Not separately listed"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer"
    ],
    "time": "Day",
    "sprays": "3-4",
    "occasions": [
      "Casual",
      "Office"
    ],
    "featured": false,
    "families": [
      "Aromatic"
    ],
    "accords": [
      "Fresh"
    ]
  },
  {
    "id": "971",
    "slug": "serge-lutens-fleurs-d-oranger",
    "brand": "Serge Lutens",
    "name": "Fleurs d Oranger",
    "gender": "for women and men",
    "topNotes": [
      "Not separately listed"
    ],
    "heartNotes": [
      "Not separately listed"
    ],
    "baseNotes": [
      "Not separately listed"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer"
    ],
    "time": "Day",
    "sprays": "3-4",
    "occasions": [
      "Casual",
      "Office"
    ],
    "featured": false,
    "families": [
      "Aromatic"
    ],
    "accords": [
      "Fresh"
    ]
  },
  {
    "id": "972",
    "slug": "serge-lutens-la-fille-de-berlin",
    "brand": "Serge Lutens",
    "name": "La Fille de Berlin",
    "gender": "for women and men",
    "topNotes": [
      "Rose",
      "Geranium"
    ],
    "heartNotes": [
      "Palmarosa"
    ],
    "baseNotes": [
      "Honey",
      "Moss",
      "Patchouli"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Winter"
    ],
    "time": "Evening",
    "sprays": "3-4",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal"
    ],
    "featured": false,
    "families": [
      "Floral",
      "Gourmand",
      "Woody"
    ],
    "accords": [
      "Earthy",
      "Floral",
      "Sweet",
      "Woody"
    ]
  },
  {
    "id": "973",
    "slug": "serge-lutens-miel-de-bois",
    "brand": "Serge Lutens",
    "name": "Miel De Bois",
    "gender": "for women and men",
    "topNotes": [
      "Not separately listed"
    ],
    "heartNotes": [
      "Not separately listed"
    ],
    "baseNotes": [
      "Not separately listed"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer"
    ],
    "time": "Day",
    "sprays": "3-4",
    "occasions": [
      "Casual",
      "Office"
    ],
    "featured": false,
    "families": [
      "Aromatic"
    ],
    "accords": [
      "Fresh"
    ]
  },
  {
    "id": "974",
    "slug": "serge-lutens-rose-de-nuit",
    "brand": "Serge Lutens",
    "name": "Rose de Nuit",
    "gender": "for women and men",
    "topNotes": [
      "Not separately listed"
    ],
    "heartNotes": [
      "Not separately listed"
    ],
    "baseNotes": [
      "Not separately listed"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer"
    ],
    "time": "Day",
    "sprays": "3-4",
    "occasions": [
      "Casual",
      "Office"
    ],
    "featured": false,
    "families": [
      "Aromatic"
    ],
    "accords": [
      "Fresh"
    ]
  },
  {
    "id": "975",
    "slug": "serge-lutens-santal-blanc",
    "brand": "Serge Lutens",
    "name": "Santal Blanc",
    "gender": "for women and men",
    "topNotes": [
      "Not separately listed"
    ],
    "heartNotes": [
      "Not separately listed"
    ],
    "baseNotes": [
      "Not separately listed"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer"
    ],
    "time": "Day",
    "sprays": "3-4",
    "occasions": [
      "Casual",
      "Office"
    ],
    "featured": false,
    "families": [
      "Aromatic"
    ],
    "accords": [
      "Fresh"
    ]
  },
  {
    "id": "976",
    "slug": "serge-lutens-un-bois-vanille",
    "brand": "Serge Lutens",
    "name": "Un Bois Vanille",
    "gender": "for women and men",
    "topNotes": [
      "Not separately listed"
    ],
    "heartNotes": [
      "Not separately listed"
    ],
    "baseNotes": [
      "Not separately listed"
    ],
    "seasons": [
      "Spring",
      "Ac Venues",
      "Mild Winter",
      "Monsoon Evenings"
    ],
    "time": "Day / Evening",
    "sprays": "2-3 sprays",
    "occasions": [
      "Lunches",
      "Smart Casuals",
      "Dates",
      "Office",
      "Pujas"
    ],
    "featured": false,
    "families": [
      "Aromatic"
    ],
    "accords": [
      "Fresh"
    ]
  },
  {
    "id": "977",
    "slug": "shakira-s-kiss",
    "brand": "Shakira",
    "name": "S Kiss",
    "gender": "for women",
    "topNotes": [
      "Black Currant",
      "Lemon"
    ],
    "heartNotes": [
      "Pink Peony",
      "Honeysuckle"
    ],
    "baseNotes": [
      "Musk",
      "Sandalwood"
    ],
    "seasons": [
      "Spring",
      "Summer",
      "Monsoon"
    ],
    "time": "Day",
    "sprays": "3-4 sprays; 2-3 indoors",
    "occasions": [
      "Travel",
      "Casual Daytime Events",
      "College",
      "Office",
      "Brunch"
    ],
    "featured": false,
    "families": [
      "Citrus",
      "Floral",
      "Fruity"
    ],
    "accords": [
      "Floral",
      "Fresh",
      "Fruity",
      "Musky"
    ]
  },
  {
    "id": "978",
    "slug": "shiseido-basala",
    "brand": "Shiseido",
    "name": "Basala",
    "gender": "for men",
    "topNotes": [
      "Lavender",
      "Clary Sage",
      "Basil",
      "Rosemary",
      "Fruity Notes",
      "Artemisia",
      "Green Notes",
      "Bergamot",
      "Neroli"
    ],
    "heartNotes": [
      "Caraway",
      "Rose",
      "Cinnamon",
      "Fir",
      "Carnation",
      "Jasmine"
    ],
    "baseNotes": [
      "Leather",
      "Labdanum",
      "Cedar",
      "Oakmoss",
      "Amber",
      "Patchouli",
      "Musk",
      "Coconut"
    ],
    "seasons": [
      "Spring",
      "Ac Venues",
      "Mild Winter",
      "Monsoon Evenings"
    ],
    "time": "Day / Evening",
    "sprays": "2-3 sprays",
    "occasions": [
      "Lunches",
      "Smart Casuals",
      "Dates",
      "Office",
      "Pujas"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Aromatic",
      "Citrus"
    ],
    "accords": [
      "Earthy",
      "Floral",
      "Fresh",
      "Fruity"
    ]
  },
  {
    "id": "979",
    "slug": "not-reliably-matched-eau-de-campagne",
    "brand": "Not Reliably Matched",
    "name": "Eau de Campagne",
    "gender": "for women and men",
    "topNotes": [
      "Reliable exact-page data not found in indexed sources"
    ],
    "heartNotes": [
      "Reliable exact-page data not found in indexed sources"
    ],
    "baseNotes": [
      "Reliable exact-page data not found in indexed sources"
    ],
    "seasons": [
      "Spring",
      "Ac Venues",
      "Mild Winter",
      "Monsoon Evenings"
    ],
    "time": "Day / Evening",
    "sprays": "2-3 sprays",
    "occasions": [
      "Lunches",
      "Smart Casuals",
      "Dates",
      "Office",
      "Pujas"
    ],
    "featured": false,
    "families": [
      "Aromatic"
    ],
    "accords": [
      "Fresh"
    ]
  },
  {
    "id": "980",
    "slug": "when-to-wear-sprays-2-3-sprays",
    "brand": "When To Wear",
    "name": "Sprays: 2-3 sprays",
    "gender": "Unisex",
    "topNotes": [
      "Not separately listed"
    ],
    "heartNotes": [
      "Not separately listed"
    ],
    "baseNotes": [
      "Not separately listed"
    ],
    "seasons": [
      "Spring",
      "Summer",
      "Monsoon"
    ],
    "time": "Day",
    "sprays": "3-4 sprays; 2-3 indoors",
    "occasions": [
      "Travel",
      "Casual Daytime Events",
      "College",
      "Office",
      "Brunch"
    ],
    "featured": false,
    "families": [
      "Aromatic"
    ],
    "accords": [
      "Fresh"
    ]
  },
  {
    "id": "981",
    "slug": "sospiro-perfumes-vibrato",
    "brand": "Sospiro Perfumes",
    "name": "Vibrato",
    "gender": "for women and men",
    "topNotes": [
      "Grapefruit",
      "Bergamot",
      "Jasmine",
      "Magnolia"
    ],
    "heartNotes": [
      "Ginger",
      "Herbal Notes",
      "Powdery Notes"
    ],
    "baseNotes": [
      "Musk",
      "Cedar",
      "Amber",
      "Patchouli",
      "Orris Root"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer",
      "Winter"
    ],
    "time": "Day / Evening",
    "sprays": "4-6",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal",
      "Office"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Citrus",
      "Floral"
    ],
    "accords": [
      "Earthy",
      "Floral",
      "Fresh",
      "Musky"
    ]
  },
  {
    "id": "982",
    "slug": "the-spirit-of-dubai-baz",
    "brand": "The Spirit Of Dubai",
    "name": "Baz",
    "gender": "for women and men",
    "topNotes": [
      "Leather",
      "Plum",
      "Black Pepper",
      "Aldehydes",
      "Coriander",
      "Cardamom",
      "Pine",
      "Red Berries",
      "Fruity Notes",
      "Saffron",
      "Nutmeg",
      "Star Anise",
      "Coffee",
      "Bergamot",
      "Cinnamon",
      "Bitter Almond"
    ],
    "heartNotes": [
      "Birch Leaf",
      "Earthy Notes",
      "Incense",
      "Myrrh",
      "Resin",
      "Olibanum"
    ],
    "baseNotes": [
      "Oud",
      "Guaiac Wood",
      "Sandalwood",
      "Patchouli",
      "Vetiver",
      "Labdanum",
      "Castoreum",
      "Musk",
      "Amber",
      "Vanilla",
      "Tonka Bean",
      "Tobacco"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer"
    ],
    "time": "Day",
    "sprays": "4-6",
    "occasions": [
      "Brunch",
      "Casual Daytime Events",
      "College",
      "Office",
      "Travel"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Citrus",
      "Fruity"
    ],
    "accords": [
      "Balsamic",
      "Earthy",
      "Fresh",
      "Fruity"
    ]
  },
  {
    "id": "983",
    "slug": "stephane-humbert-lucas-777-god-of-fire",
    "brand": "Stephane Humbert Lucas 777",
    "name": "God of Fire",
    "gender": "for women and men",
    "topNotes": [
      "Mango",
      "Ginger",
      "Lemon",
      "Red Berries"
    ],
    "heartNotes": [
      "Woody Notes",
      "Coumarin",
      "Jasmine"
    ],
    "baseNotes": [
      "Musk",
      "Amber",
      "Agarwood (Oud)",
      "Cypriol Oil or Nagarmotha"
    ],
    "seasons": [
      "Spring",
      "Summer",
      "Winter"
    ],
    "time": "Day / Evening",
    "sprays": "4-6",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal",
      "Office"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Citrus",
      "Floral"
    ],
    "accords": [
      "Floral",
      "Fresh",
      "Fruity",
      "Musky"
    ]
  },
  {
    "id": "984",
    "slug": "archive-mortal-skin",
    "brand": "Archive",
    "name": "Mortal Skin",
    "gender": "for women and men",
    "topNotes": [
      "Ink",
      "Blackberry",
      "Incense",
      "Labdanum"
    ],
    "heartNotes": [
      "Myrrh",
      "Opoponax",
      "Iris",
      "Cardamom",
      "Artemisia"
    ],
    "baseNotes": [
      "Styrax",
      "Ambergris",
      "Atlas Cedar",
      "Cedar",
      "Sandalwood",
      "Birch",
      "Musk"
    ],
    "seasons": [
      "Spring",
      "Ac Venues",
      "Mild Winter",
      "Monsoon Evenings"
    ],
    "time": "Day / Evening",
    "sprays": "2-3 sprays",
    "occasions": [
      "Lunches",
      "Smart Casuals",
      "Dates",
      "Office",
      "Pujas"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Aromatic",
      "Floral"
    ],
    "accords": [
      "Balsamic",
      "Floral",
      "Fruity",
      "Herbal"
    ]
  },
  {
    "id": "985",
    "slug": "studioar-not-reliably-matched",
    "brand": "Studioar",
    "name": "Not reliably matched",
    "gender": "Unisex",
    "topNotes": [
      "Reliable exact-page data not found in indexed sources"
    ],
    "heartNotes": [
      "Reliable exact-page data not found in indexed sources"
    ],
    "baseNotes": [
      "Reliable exact-page data not found in indexed sources"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer"
    ],
    "time": "Day",
    "sprays": "3-4",
    "occasions": [
      "Casual",
      "Office"
    ],
    "featured": false,
    "families": [
      "Aromatic"
    ],
    "accords": [
      "Fresh"
    ]
  },
  {
    "id": "986",
    "slug": "tauer-perfumes-au-coeur-du-desert",
    "brand": "Tauer Perfumes",
    "name": "Au Coeur du Desert",
    "gender": "for women and men",
    "topNotes": [
      "Not separately listed"
    ],
    "heartNotes": [
      "Not separately listed"
    ],
    "baseNotes": [
      "Not separately listed"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer"
    ],
    "time": "Day",
    "sprays": "3-4",
    "occasions": [
      "Casual",
      "Office"
    ],
    "featured": false,
    "families": [
      "Aromatic"
    ],
    "accords": [
      "Fresh"
    ]
  },
  {
    "id": "987",
    "slug": "tauer-perfumes-03-lonestar-memories",
    "brand": "Tauer Perfumes",
    "name": "03 Lonestar Memories",
    "gender": "for women and men",
    "topNotes": [
      "Coriander",
      "Cumin",
      "Petitgrain",
      "Lavender"
    ],
    "heartNotes": [
      "Labdanum",
      "Birch",
      "Jasmine",
      "Geranium"
    ],
    "baseNotes": [
      "Amber",
      "Cedar",
      "Vetiver",
      "Patchouli",
      "Oakmoss"
    ],
    "seasons": [
      "Spring",
      "Ac Venues",
      "Mild Winter",
      "Monsoon Evenings"
    ],
    "time": "Day / Evening",
    "sprays": "2-3 sprays",
    "occasions": [
      "Lunches",
      "Smart Casuals",
      "Dates",
      "Office",
      "Pujas"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Aromatic",
      "Citrus"
    ],
    "accords": [
      "Earthy",
      "Floral",
      "Fresh",
      "Herbal"
    ]
  },
  {
    "id": "988",
    "slug": "ted-lapidus-lapidus-woman",
    "brand": "Ted Lapidus",
    "name": "Lapidus Woman",
    "gender": "for women",
    "topNotes": [
      "Freesia",
      "Bergamot"
    ],
    "heartNotes": [
      "Cyclamen",
      "Jasmine",
      "Orange Blossom"
    ],
    "baseNotes": [
      "Vanilla",
      "Amber",
      "Musk",
      "Patchouli"
    ],
    "seasons": [
      "Spring",
      "Ac Venues",
      "Mild Winter",
      "Monsoon Evenings"
    ],
    "time": "Day / Evening",
    "sprays": "2-3 sprays",
    "occasions": [
      "Lunches",
      "Smart Casuals",
      "Dates",
      "Office",
      "Pujas"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Citrus",
      "Floral"
    ],
    "accords": [
      "Earthy",
      "Floral",
      "Fresh",
      "Musky"
    ]
  },
  {
    "id": "989",
    "slug": "when-to-wear-sprays-2-3-sprays-989",
    "brand": "When To Wear",
    "name": "Sprays: 2-3 sprays",
    "gender": "Unisex",
    "topNotes": [
      "Clary Sage",
      "Geranium",
      "Carrot Seeds"
    ],
    "heartNotes": [
      "Leather",
      "Labdanum",
      "Jasmine"
    ],
    "baseNotes": [
      "Myrrh",
      "Vetiver",
      "Tonka Bean",
      "Sandalwood"
    ],
    "seasons": [
      "Ac Venues",
      "Winter",
      "Cool Nights"
    ],
    "time": "Evening",
    "sprays": "1-2 sprays",
    "occasions": [
      "Receptions",
      "Winter Weddings",
      "Festive Evenings",
      "Formal Dinners"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Aromatic",
      "Floral"
    ],
    "accords": [
      "Balsamic",
      "Earthy",
      "Floral",
      "Herbal"
    ]
  },
  {
    "id": "990",
    "slug": "thameen-carved-oud",
    "brand": "Thameen",
    "name": "Carved Oud",
    "gender": "for women and men",
    "topNotes": [
      "Guatemalan Cardamom",
      "Cypriol Oil or Nagarmotha",
      "Cypress",
      "Pink Pepper"
    ],
    "heartNotes": [
      "Agarwood (Oud)",
      "Cedar",
      "Patchouli",
      "Iris"
    ],
    "baseNotes": [
      "Musk",
      "Sandalwood",
      "Vanilla",
      "Amber",
      "Haitian Vetiver"
    ],
    "seasons": [
      "Ac Venues",
      "Winter",
      "Monsoon Evenings"
    ],
    "time": "Evening",
    "sprays": "2-3 sprays",
    "occasions": [
      "Celebrations",
      "Receptions",
      "Dinner Dates",
      "Formal Events"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Floral",
      "Spicy"
    ],
    "accords": [
      "Earthy",
      "Floral",
      "Musky",
      "Powdery"
    ]
  },
  {
    "id": "991",
    "slug": "the-house-of-oud-neverending",
    "brand": "The House Of Oud",
    "name": "Neverending",
    "gender": "for women and men",
    "topNotes": [
      "Spices",
      "Nutmeg",
      "Cumin",
      "Black Pepper",
      "Pink Grapefruit"
    ],
    "heartNotes": [
      "Suede",
      "Tuberose",
      "Jasmine"
    ],
    "baseNotes": [
      "Black Vanilla Husk",
      "Guaiac Wood",
      "Cypriol Oil or Nagarmotha",
      "Amber",
      "Musk",
      "Virginia Cedar"
    ],
    "seasons": [
      "Spring",
      "Ac Venues",
      "Mild Winter",
      "Monsoon Evenings"
    ],
    "time": "Day / Evening",
    "sprays": "2-3 sprays",
    "occasions": [
      "Lunches",
      "Smart Casuals",
      "Dates",
      "Office",
      "Pujas"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Citrus",
      "Floral"
    ],
    "accords": [
      "Floral",
      "Fresh",
      "Leather",
      "Musky"
    ]
  },
  {
    "id": "992",
    "slug": "thomas-kosmala-apres-l-amour",
    "brand": "Thomas Kosmala",
    "name": "Apres l Amour",
    "gender": "for women and men",
    "topNotes": [
      "Lemon Zest",
      "Bitter Orange Blossom"
    ],
    "heartNotes": [
      "Aromatic Spices"
    ],
    "baseNotes": [
      "Musk",
      "Amber",
      "Woody Notes"
    ],
    "seasons": [
      "Spring",
      "Summer",
      "Monsoon"
    ],
    "time": "Day",
    "sprays": "3-4 sprays; 2-3 indoors",
    "occasions": [
      "Travel",
      "Casual Daytime Events",
      "College",
      "Office",
      "Brunch"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Aromatic",
      "Citrus"
    ],
    "accords": [
      "Floral",
      "Fresh",
      "Herbal",
      "Musky"
    ]
  },
  {
    "id": "993",
    "slug": "tiziana-terenzi-andromeda",
    "brand": "Tiziana Terenzi",
    "name": "Andromeda",
    "gender": "for women and men",
    "topNotes": [
      "Ylang-Ylang",
      "Water Jasmine",
      "Bergamot",
      "Grass"
    ],
    "heartNotes": [
      "Peach",
      "Pear Blossom",
      "Lily",
      "White Heliotrope",
      "Damask Rose",
      "Violet Leaf"
    ],
    "baseNotes": [
      "Cashmere Wood",
      "Ebony",
      "Amber",
      "Tonka Bean",
      "Vanilla",
      "Coconut",
      "Sugar"
    ],
    "seasons": [
      "Spring",
      "Summer",
      "Winter"
    ],
    "time": "Day / Evening",
    "sprays": "4-6",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal",
      "Office"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Aquatic",
      "Citrus"
    ],
    "accords": [
      "Floral",
      "Fresh",
      "Fruity",
      "Green"
    ]
  },
  {
    "id": "994",
    "slug": "tiziana-terenzi-cassiopea",
    "brand": "Tiziana Terenzi",
    "name": "Cassiopea",
    "gender": "for women and men",
    "topNotes": [
      "Passionfruit",
      "Cassis",
      "Lemon",
      "Fern"
    ],
    "heartNotes": [
      "Tea Rose",
      "Carnation",
      "Lily-of-the-Valley"
    ],
    "baseNotes": [
      "Tonka Bean",
      "Musk",
      "Sandalwood"
    ],
    "seasons": [
      "Spring",
      "Summer",
      "Winter"
    ],
    "time": "Day / Evening",
    "sprays": "4-6",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal",
      "Office"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Citrus",
      "Floral"
    ],
    "accords": [
      "Floral",
      "Fresh",
      "Fruity",
      "Musky"
    ]
  },
  {
    "id": "995",
    "slug": "tiziana-terenzi-gumin",
    "brand": "Tiziana Terenzi",
    "name": "Gumin",
    "gender": "for women and men",
    "topNotes": [
      "Mandarin Orange",
      "Orange",
      "Pineapple",
      "Bergamot"
    ],
    "heartNotes": [
      "Ozonic notes",
      "Amber",
      "Violet",
      "Jasmine",
      "Rose"
    ],
    "baseNotes": [
      "Musk",
      "Sandalwood",
      "Birch",
      "Agarwood (Oud)"
    ],
    "seasons": [
      "Spring",
      "Summer",
      "Winter"
    ],
    "time": "Day / Evening",
    "sprays": "4-6",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal",
      "Office"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Citrus",
      "Floral"
    ],
    "accords": [
      "Floral",
      "Fresh",
      "Fruity",
      "Musky"
    ]
  },
  {
    "id": "996",
    "slug": "tiziana-terenzi-kaff",
    "brand": "Tiziana Terenzi",
    "name": "Kaff",
    "gender": "for women and men",
    "topNotes": [
      "Juniper",
      "White Iris",
      "Pink Pepper",
      "Bergamot",
      "Ginger"
    ],
    "heartNotes": [
      "Iris",
      "Leather",
      "Orris Root",
      "Ambergris",
      "Magnolia"
    ],
    "baseNotes": [
      "Vetiver",
      "Cedar",
      "Sandalwood",
      "Tonka Bean"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer",
      "Winter"
    ],
    "time": "Day / Evening",
    "sprays": "4-6",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal",
      "Office"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Citrus",
      "Floral"
    ],
    "accords": [
      "Earthy",
      "Floral",
      "Fresh",
      "Leather"
    ]
  },
  {
    "id": "997",
    "slug": "tiziana-terenzi-kirke",
    "brand": "Tiziana Terenzi",
    "name": "Kirke",
    "gender": "for women and men",
    "topNotes": [
      "Passionfruit",
      "Peach",
      "Pear",
      "Raspberry",
      "Cassis",
      "Sand"
    ],
    "heartNotes": [
      "Lily-of-the-Valley"
    ],
    "baseNotes": [
      "Musk",
      "Sandalwood",
      "Vanilla",
      "Patchouli",
      "Heliotrope"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Winter"
    ],
    "time": "Evening",
    "sprays": "2-3",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Floral",
      "Fruity"
    ],
    "accords": [
      "Earthy",
      "Floral",
      "Fruity",
      "Musky"
    ]
  },
  {
    "id": "998",
    "slug": "tiziana-terenzi-libra",
    "brand": "Tiziana Terenzi",
    "name": "Libra",
    "gender": "for women and men",
    "topNotes": [
      "Grapefruit",
      "Lemon",
      "Calabrian bergamot",
      "Bulgarian Rose",
      "Tuberose"
    ],
    "heartNotes": [
      "Ambergris",
      "Italian Orris Root",
      "Atlas Cedar",
      "Jasmine Sambac"
    ],
    "baseNotes": [
      "Musk",
      "Vanilla Flower",
      "Benzoin",
      "Haitian Vetiver",
      "Oakmoss",
      "Singapore Patchouli"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer",
      "Winter"
    ],
    "time": "Day / Evening",
    "sprays": "4-6",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal",
      "Office"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Citrus",
      "Floral"
    ],
    "accords": [
      "Earthy",
      "Floral",
      "Fresh",
      "Musky"
    ]
  },
  {
    "id": "999",
    "slug": "tiziana-terenzi-orion",
    "brand": "Tiziana Terenzi",
    "name": "Orion",
    "gender": "for women and men",
    "topNotes": [
      "Pineapple",
      "Apple",
      "Bergamot",
      "Red Currant"
    ],
    "heartNotes": [
      "Birch",
      "Thyme",
      "Patchouli",
      "Jasmine"
    ],
    "baseNotes": [
      "Cedar",
      "Incense",
      "Agarwood (Oud)",
      "Musk",
      "Amber"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer",
      "Winter"
    ],
    "time": "Day / Evening",
    "sprays": "4-6",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal",
      "Office"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Aromatic",
      "Citrus"
    ],
    "accords": [
      "Balsamic",
      "Earthy",
      "Floral",
      "Fresh"
    ]
  },
  {
    "id": "1000",
    "slug": "tiziana-terenzi-rosso-pompei",
    "brand": "Tiziana Terenzi",
    "name": "Rosso Pompei",
    "gender": "for women",
    "topNotes": [
      "Grapefruit",
      "Amalfi Lemon",
      "Grapes"
    ],
    "heartNotes": [
      "Ambergris",
      "Magnolia",
      "Jasmine",
      "Tuberose",
      "Lily-of-the-Valley"
    ],
    "baseNotes": [
      "Cedar",
      "Patchouli",
      "Woody Notes",
      "Sandalwood"
    ],
    "seasons": [
      "Ac Venues",
      "Cool Nights",
      "Winter"
    ],
    "time": "Evening",
    "sprays": "4-6",
    "occasions": [
      "Festive Evenings",
      "Formal Dinners",
      "Receptions",
      "Winter Weddings"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Citrus",
      "Floral"
    ],
    "accords": [
      "Earthy",
      "Floral",
      "Fresh",
      "Warm"
    ]
  },
  {
    "id": "1001",
    "slug": "tiziana-terenzi-rosso-pompei-1001",
    "brand": "Tiziana Terenzi",
    "name": "Rosso Pompei",
    "gender": "for women",
    "topNotes": [
      "Grapefruit",
      "Amalfi Lemon",
      "Grapes"
    ],
    "heartNotes": [
      "Ambergris",
      "Magnolia",
      "Jasmine",
      "Tuberose",
      "Lily-of-the-Valley"
    ],
    "baseNotes": [
      "Cedar",
      "Patchouli",
      "Woody Notes",
      "Sandalwood"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer",
      "Winter"
    ],
    "time": "Day / Evening",
    "sprays": "4-6",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal",
      "Office"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Citrus",
      "Floral"
    ],
    "accords": [
      "Earthy",
      "Floral",
      "Fresh",
      "Warm"
    ]
  },
  {
    "id": "1002",
    "slug": "tiziana-terenzi-tabit",
    "brand": "Tiziana Terenzi",
    "name": "Tabit",
    "gender": "for women and men",
    "topNotes": [
      "Green Notes",
      "Bergamot"
    ],
    "heartNotes": [
      "Peach",
      "Floral Notes",
      "Sand",
      "Coconut"
    ],
    "baseNotes": [
      "Musk",
      "Cotton Candy",
      "Woody Notes",
      "Vanilla",
      "Amber"
    ],
    "seasons": [
      "Ac Venues",
      "Winter",
      "Cool Nights"
    ],
    "time": "Evening",
    "sprays": "1-2 sprays",
    "occasions": [
      "Receptions",
      "Winter Weddings",
      "Festive Evenings",
      "Formal Dinners"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Citrus",
      "Floral"
    ],
    "accords": [
      "Floral",
      "Fresh",
      "Fruity",
      "Green"
    ]
  },
  {
    "id": "1003",
    "slug": "tiziana-terenzi-ursa",
    "brand": "Tiziana Terenzi",
    "name": "Ursa",
    "gender": "for women and men",
    "topNotes": [
      "Dried Fruits",
      "Rum",
      "elemi",
      "Nutmeg"
    ],
    "heartNotes": [
      "Patchouli",
      "Tobacco",
      "Incense",
      "Vetiver",
      "Olibanum"
    ],
    "baseNotes": [
      "Leather",
      "Agarwood (Oud)",
      "Vanilla"
    ],
    "seasons": [
      "Ac Venues",
      "Winter",
      "Cool Nights"
    ],
    "time": "Evening",
    "sprays": "1-2 sprays",
    "occasions": [
      "Receptions",
      "Winter Weddings",
      "Festive Evenings",
      "Formal Dinners"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Gourmand",
      "Leather"
    ],
    "accords": [
      "Balsamic",
      "Earthy",
      "Leather",
      "Spicy"
    ]
  },
  {
    "id": "1004",
    "slug": "tiziana-terenzi-vele",
    "brand": "Tiziana Terenzi",
    "name": "Vele",
    "gender": "for women and men",
    "topNotes": [
      "Green Leaves",
      "Mango",
      "Passionfruit",
      "Fir",
      "Red Currant"
    ],
    "heartNotes": [
      "Heliotrope",
      "Hyacinth",
      "Ylang-Ylang",
      "Hog Plum",
      "Jasmine",
      "Rose"
    ],
    "baseNotes": [
      "Papaya",
      "Vanilla",
      "Musk",
      "Amber",
      "Princess Tree or Paulownia",
      "Allspice"
    ],
    "seasons": [
      "Spring",
      "Ac Venues",
      "Mild Winter",
      "Monsoon Evenings"
    ],
    "time": "Day / Evening",
    "sprays": "2-3 sprays",
    "occasions": [
      "Lunches",
      "Smart Casuals",
      "Dates",
      "Office",
      "Pujas"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Floral",
      "Fruity"
    ],
    "accords": [
      "Floral",
      "Fruity",
      "Green",
      "Musky"
    ]
  },
  {
    "id": "1005",
    "slug": "tom-ford-amber-absolute",
    "brand": "Tom Ford",
    "name": "Amber Absolute",
    "gender": "for women and men",
    "topNotes": [
      "Not separately listed"
    ],
    "heartNotes": [
      "Not separately listed"
    ],
    "baseNotes": [
      "Not separately listed"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer"
    ],
    "time": "Day",
    "sprays": "3-4",
    "occasions": [
      "Casual",
      "Office"
    ],
    "featured": false,
    "families": [
      "Aromatic"
    ],
    "accords": [
      "Fresh"
    ]
  },
  {
    "id": "1006",
    "slug": "tom-ford-amber-absolute-1006",
    "brand": "Tom Ford",
    "name": "Amber Absolute",
    "gender": "for women and men",
    "topNotes": [
      "Not separately listed"
    ],
    "heartNotes": [
      "Not separately listed"
    ],
    "baseNotes": [
      "Not separately listed"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer"
    ],
    "time": "Day",
    "sprays": "3-4",
    "occasions": [
      "Casual",
      "Office"
    ],
    "featured": false,
    "families": [
      "Aromatic"
    ],
    "accords": [
      "Fresh"
    ]
  },
  {
    "id": "1007",
    "slug": "tom-ford-arabian-wood",
    "brand": "Tom Ford",
    "name": "Arabian Wood",
    "gender": "for women and men",
    "topNotes": [
      "Not separately listed"
    ],
    "heartNotes": [
      "Not separately listed"
    ],
    "baseNotes": [
      "Not separately listed"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer"
    ],
    "time": "Day",
    "sprays": "3-4",
    "occasions": [
      "Casual",
      "Office"
    ],
    "featured": false,
    "families": [
      "Aromatic"
    ],
    "accords": [
      "Fresh"
    ]
  },
  {
    "id": "1008",
    "slug": "tom-ford-azure-lime",
    "brand": "Tom Ford",
    "name": "Azure Lime",
    "gender": "for women and men",
    "topNotes": [
      "Not separately listed"
    ],
    "heartNotes": [
      "Not separately listed"
    ],
    "baseNotes": [
      "Not separately listed"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer"
    ],
    "time": "Day",
    "sprays": "3-4",
    "occasions": [
      "Brunch",
      "Casual Daytime Events",
      "College",
      "Office",
      "Travel"
    ],
    "featured": false,
    "families": [
      "Aromatic"
    ],
    "accords": [
      "Fresh"
    ]
  },
  {
    "id": "1009",
    "slug": "tom-ford-beau-de-jour",
    "brand": "Tom Ford",
    "name": "Beau de Jour",
    "gender": "for men",
    "topNotes": [
      "Lavender",
      "Lavender Extract"
    ],
    "heartNotes": [
      "Oakmoss",
      "Rosemary",
      "Mint",
      "Basil",
      "Geranium"
    ],
    "baseNotes": [
      "Patchouli",
      "Amber"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Winter"
    ],
    "time": "Evening",
    "sprays": "2-3",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Aromatic",
      "Floral"
    ],
    "accords": [
      "Earthy",
      "Floral",
      "Herbal",
      "Warm"
    ]
  },
  {
    "id": "1010",
    "slug": "tom-ford-bitter-peach",
    "brand": "Tom Ford",
    "name": "Bitter Peach",
    "gender": "for women and men",
    "topNotes": [
      "Peach",
      "Blood Orange",
      "Cardamom",
      "Heliotrope"
    ],
    "heartNotes": [
      "Rum",
      "Cognac",
      "Davana",
      "Jasmine"
    ],
    "baseNotes": [
      "Vanilla",
      "Indonesian Patchouli Leaf",
      "Tonka Bean",
      "Sandalwood",
      "Benzoin",
      "Cashmeran",
      "Styrax",
      "Labdanum",
      "Vetiver"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer"
    ],
    "time": "Day",
    "sprays": "4-6",
    "occasions": [
      "Brunch",
      "Casual Daytime Events",
      "College",
      "Office",
      "Travel"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Citrus",
      "Floral"
    ],
    "accords": [
      "Earthy",
      "Floral",
      "Fresh",
      "Fruity"
    ]
  },
  {
    "id": "1011",
    "slug": "tom-ford-black-orchid",
    "brand": "Tom Ford",
    "name": "Black Orchid",
    "gender": "for women",
    "topNotes": [
      "Truffle",
      "Gardenia",
      "Black Currant",
      "Ylang-Ylang",
      "Jasmine",
      "Bergamot",
      "Mandarin Orange",
      "Amalfi Lemon"
    ],
    "heartNotes": [
      "Orchid",
      "Spices",
      "Gardenia",
      "Fruity Notes",
      "Ylang-Ylang",
      "Jasmine",
      "Lotus"
    ],
    "baseNotes": [
      "Mexican chocolate",
      "Patchouli",
      "Vanille",
      "Incense",
      "Amber"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer",
      "Winter"
    ],
    "time": "Day / Evening",
    "sprays": "4-6",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal",
      "Office"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Citrus",
      "Floral"
    ],
    "accords": [
      "Balsamic",
      "Earthy",
      "Floral",
      "Fresh"
    ]
  },
  {
    "id": "1012",
    "slug": "tom-ford-black-orchid-1012",
    "brand": "Tom Ford",
    "name": "Black Orchid",
    "gender": "for women",
    "topNotes": [
      "Truffle",
      "Gardenia",
      "Black Currant",
      "Ylang-Ylang",
      "Jasmine",
      "Bergamot",
      "Mandarin Orange",
      "Amalfi Lemon"
    ],
    "heartNotes": [
      "Orchid",
      "Spices",
      "Gardenia",
      "Fruity Notes",
      "Ylang-Ylang",
      "Jasmine",
      "Lotus"
    ],
    "baseNotes": [
      "Mexican chocolate",
      "Patchouli",
      "Vanille",
      "Incense",
      "Amber"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer",
      "Winter"
    ],
    "time": "Day / Evening",
    "sprays": "4-6",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal",
      "Office"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Citrus",
      "Floral"
    ],
    "accords": [
      "Balsamic",
      "Earthy",
      "Floral",
      "Fresh"
    ]
  },
  {
    "id": "1013",
    "slug": "tom-ford-black-violet",
    "brand": "Tom Ford",
    "name": "Black Violet",
    "gender": "for women and men",
    "topNotes": [
      "Fruity Notes",
      "Citruses",
      "Bergamot"
    ],
    "heartNotes": [
      "Violet"
    ],
    "baseNotes": [
      "oak moss",
      "Woodsy Notes"
    ],
    "seasons": [
      "Spring",
      "Summer",
      "Winter"
    ],
    "time": "Day / Evening",
    "sprays": "4-6",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal",
      "Office"
    ],
    "featured": false,
    "families": [
      "Citrus",
      "Floral",
      "Woody"
    ],
    "accords": [
      "Floral",
      "Fresh",
      "Powdery",
      "Woody"
    ]
  },
  {
    "id": "1014",
    "slug": "tom-ford-bois-marocain",
    "brand": "Tom Ford",
    "name": "Bois Marocain",
    "gender": "for women and men",
    "topNotes": [
      "Not separately listed"
    ],
    "heartNotes": [
      "Not separately listed"
    ],
    "baseNotes": [
      "Not separately listed"
    ],
    "seasons": [
      "Spring",
      "Summer",
      "Monsoon"
    ],
    "time": "Day",
    "sprays": "3-4 sprays; 2-3 indoors",
    "occasions": [
      "Travel",
      "Casual Daytime Events",
      "College",
      "Office",
      "Brunch"
    ],
    "featured": false,
    "families": [
      "Aromatic"
    ],
    "accords": [
      "Fresh"
    ]
  },
  {
    "id": "1015",
    "slug": "tom-ford-cafe-rose",
    "brand": "Tom Ford",
    "name": "Cafe Rose",
    "gender": "for women and men",
    "topNotes": [
      "May Rose",
      "Saffron",
      "Black Pepper"
    ],
    "heartNotes": [
      "Turkish Rose",
      "Bulgarian Rose",
      "Coffee"
    ],
    "baseNotes": [
      "Patchouli",
      "Incense",
      "Sandalwood",
      "Amber"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Winter"
    ],
    "time": "Evening",
    "sprays": "2-3",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Floral",
      "Gourmand"
    ],
    "accords": [
      "Balsamic",
      "Earthy",
      "Floral",
      "Spicy"
    ]
  },
  {
    "id": "1016",
    "slug": "tom-ford-champaca-absolute",
    "brand": "Tom Ford",
    "name": "Champaca Absolute",
    "gender": "for women and men",
    "topNotes": [
      "Cognac",
      "Dyer\u2019s Greenweed",
      "Bergamot"
    ],
    "heartNotes": [
      "Champaca",
      "Orchid",
      "Jasmine",
      "Violet"
    ],
    "baseNotes": [
      "Marron glace",
      "Vanilla",
      "Sandalwood",
      "Amber"
    ],
    "seasons": [
      "Spring",
      "Summer",
      "Winter"
    ],
    "time": "Day / Evening",
    "sprays": "4-6",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal",
      "Office"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Citrus",
      "Floral"
    ],
    "accords": [
      "Floral",
      "Fresh",
      "Green",
      "Powdery"
    ]
  },
  {
    "id": "1017",
    "slug": "tom-ford-cherry-smoke",
    "brand": "Tom Ford",
    "name": "Cherry Smoke",
    "gender": "for women and men",
    "topNotes": [
      "Sour Cherry",
      "Saffron"
    ],
    "heartNotes": [
      "Leather",
      "Olive",
      "Chinese Osmanthus",
      "Apricot"
    ],
    "baseNotes": [
      "Smoke",
      "Woody Notes",
      "Cypriol Oil or Nagarmotha"
    ],
    "seasons": [
      "Spring",
      "Winter"
    ],
    "time": "Evening",
    "sprays": "2-3",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal"
    ],
    "featured": false,
    "families": [
      "Floral",
      "Fruity",
      "Leather"
    ],
    "accords": [
      "Floral",
      "Fruity",
      "Leather",
      "Smoky"
    ]
  },
  {
    "id": "1018",
    "slug": "tom-ford-costa-azzurra",
    "brand": "Tom Ford",
    "name": "Costa Azzurra",
    "gender": "for women and men",
    "topNotes": [
      "Driftwood",
      "Seaweed",
      "Agarwood (Oud)",
      "Celery Seeds",
      "Ambrette (Musk Mallow)",
      "Cardamom"
    ],
    "heartNotes": [
      "Lemon",
      "Lavender",
      "Juniper",
      "Yellow Mandarin",
      "Artemisia",
      "Myrtle"
    ],
    "baseNotes": [
      "Vetiver",
      "Oak",
      "Olibanum",
      "Mastic or Lentisque",
      "Incense",
      "Vanilla"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer",
      "Winter"
    ],
    "time": "Day / Evening",
    "sprays": "4-6",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal",
      "Office"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Aquatic",
      "Aromatic"
    ],
    "accords": [
      "Balsamic",
      "Earthy",
      "Fresh",
      "Herbal"
    ]
  },
  {
    "id": "1019",
    "slug": "tom-ford-ebene-fume",
    "brand": "Tom Ford",
    "name": "Ebene Fume",
    "gender": "for women and men",
    "topNotes": [
      "Incense",
      "Palo Santo",
      "Black Pepper",
      "Violet Leaf"
    ],
    "heartNotes": [
      "Leather",
      "Labdanum",
      "Cade oil",
      "Papyrus",
      "Rose"
    ],
    "baseNotes": [
      "Resins",
      "ebony tree",
      "Guaiac Wood"
    ],
    "seasons": [
      "Ac Venues",
      "Winter",
      "Cool Nights"
    ],
    "time": "Evening",
    "sprays": "1-2 sprays",
    "occasions": [
      "Receptions",
      "Winter Weddings",
      "Festive Evenings",
      "Formal Dinners"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Floral",
      "Leather"
    ],
    "accords": [
      "Balsamic",
      "Floral",
      "Leather",
      "Powdery"
    ]
  },
  {
    "id": "1020",
    "slug": "tom-ford-electric-cherry",
    "brand": "Tom Ford",
    "name": "Electric Cherry",
    "gender": "for women and men",
    "topNotes": [
      "Cherry",
      "Ginger"
    ],
    "heartNotes": [
      "Jasmine Sambac"
    ],
    "baseNotes": [
      "Pink Pepper",
      "Ambrettolide",
      "Musk"
    ],
    "seasons": [
      "Spring",
      "Ac Venues",
      "Mild Winter",
      "Monsoon Evenings"
    ],
    "time": "Day / Evening",
    "sprays": "2-3 sprays",
    "occasions": [
      "Lunches",
      "Smart Casuals",
      "Dates",
      "Office",
      "Pujas"
    ],
    "featured": false,
    "families": [
      "Floral",
      "Fruity",
      "Spicy"
    ],
    "accords": [
      "Floral",
      "Fruity",
      "Musky",
      "Spicy"
    ]
  },
  {
    "id": "1021",
    "slug": "tom-ford-fucking-fabulous",
    "brand": "Tom Ford",
    "name": "Fucking Fabulous",
    "gender": "for women and men",
    "topNotes": [
      "Lavender",
      "Clary Sage"
    ],
    "heartNotes": [
      "Leather",
      "Bitter Almond",
      "Vanilla",
      "Orris"
    ],
    "baseNotes": [
      "Leather",
      "Tonka Bean",
      "Cashmeran",
      "White Woods",
      "Amber"
    ],
    "seasons": [
      "Monsoon",
      "Winter"
    ],
    "time": "Evening",
    "sprays": "2-3",
    "occasions": [
      "Date Night",
      "Formal"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Aromatic",
      "Gourmand"
    ],
    "accords": [
      "Herbal",
      "Leather",
      "Sweet",
      "Warm"
    ]
  },
  {
    "id": "1022",
    "slug": "tom-ford-grey-vetiver",
    "brand": "Tom Ford",
    "name": "Grey Vetiver",
    "gender": "for men",
    "topNotes": [
      "Grapefruit",
      "Orange Blossom",
      "Sage"
    ],
    "heartNotes": [
      "Nutmeg",
      "Orris Root",
      "Pimento"
    ],
    "baseNotes": [
      "Vetiver",
      "Woodsy Notes",
      "Oakmoss",
      "Amber"
    ],
    "seasons": [
      "Ac Venues",
      "Cool Nights",
      "Winter"
    ],
    "time": "Evening",
    "sprays": "4-6",
    "occasions": [
      "Festive Evenings",
      "Formal Dinners",
      "Receptions",
      "Winter Weddings"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Aromatic",
      "Citrus"
    ],
    "accords": [
      "Earthy",
      "Floral",
      "Fresh",
      "Herbal"
    ]
  },
  {
    "id": "1023",
    "slug": "tom-ford-italian-cypress",
    "brand": "Tom Ford",
    "name": "Italian Cypress",
    "gender": "for women and men",
    "topNotes": [
      "Not separately listed"
    ],
    "heartNotes": [
      "Not separately listed"
    ],
    "baseNotes": [
      "Not separately listed"
    ],
    "seasons": [
      "Spring",
      "Summer",
      "Monsoon"
    ],
    "time": "Day",
    "sprays": "3-4 sprays; 2-3 indoors",
    "occasions": [
      "Travel",
      "Casual Daytime Events",
      "College",
      "Office",
      "Brunch"
    ],
    "featured": false,
    "families": [
      "Aromatic"
    ],
    "accords": [
      "Fresh"
    ]
  },
  {
    "id": "1024",
    "slug": "tom-ford-lavender-extreme",
    "brand": "Tom Ford",
    "name": "Lavender Extreme",
    "gender": "for women and men",
    "topNotes": [
      "Violet",
      "Lemon"
    ],
    "heartNotes": [
      "Lavender",
      "Cinnamon",
      "Geranium",
      "Rose"
    ],
    "baseNotes": [
      "Tonka Bean",
      "Coumarin"
    ],
    "seasons": [
      "Spring",
      "Ac Venues",
      "Mild Winter",
      "Monsoon Evenings"
    ],
    "time": "Day / Evening",
    "sprays": "2-3 sprays",
    "occasions": [
      "Lunches",
      "Smart Casuals",
      "Dates",
      "Office",
      "Pujas"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Aromatic",
      "Citrus"
    ],
    "accords": [
      "Floral",
      "Fresh",
      "Herbal",
      "Powdery"
    ]
  },
  {
    "id": "1025",
    "slug": "tom-ford-jasmin-rouge",
    "brand": "Tom Ford",
    "name": "Jasmin Rouge",
    "gender": "for women",
    "topNotes": [
      "Ginger",
      "Cinnamon",
      "Bergamot",
      "Cardamom",
      "Pepper",
      "Mandarin Orange"
    ],
    "heartNotes": [
      "Jasmine",
      "Ylang-Ylang",
      "Neroli",
      "Broom",
      "Clary Sage"
    ],
    "baseNotes": [
      "Amber",
      "Vanille",
      "Woodsy Notes",
      "Leather",
      "French labdanum"
    ],
    "seasons": [
      "Spring",
      "Ac Venues",
      "Mild Winter",
      "Monsoon Evenings"
    ],
    "time": "Day / Evening",
    "sprays": "2-3 sprays",
    "occasions": [
      "Lunches",
      "Smart Casuals",
      "Dates",
      "Office",
      "Pujas"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Aromatic",
      "Citrus"
    ],
    "accords": [
      "Floral",
      "Fresh",
      "Herbal",
      "Leather"
    ]
  },
  {
    "id": "1026",
    "slug": "tom-ford-lost-cherry",
    "brand": "Tom Ford",
    "name": "Lost Cherry",
    "gender": "for women and men",
    "topNotes": [
      "Bitter Almond",
      "Black Cherry",
      "Cherry Liqueur"
    ],
    "heartNotes": [
      "Sour Cherry",
      "Plum",
      "Turkish Rose",
      "Jasmine Sambac"
    ],
    "baseNotes": [
      "Vanilla",
      "Tonka Bean",
      "Cinnamon",
      "Peru Balsam",
      "Benzoin",
      "Sandalwood",
      "Cloves",
      "Cedar",
      "Patchouli",
      "Vetiver"
    ],
    "seasons": [
      "Ac Venues",
      "Winter",
      "Monsoon Evenings"
    ],
    "time": "Evening",
    "sprays": "2-3 sprays",
    "occasions": [
      "Celebrations",
      "Receptions",
      "Dinner Dates",
      "Formal Events"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Floral",
      "Fruity"
    ],
    "accords": [
      "Earthy",
      "Floral",
      "Fruity",
      "Spicy"
    ]
  },
  {
    "id": "1027",
    "slug": "mandarino-di-amalfi-acqua-mandarino-di-amalfi",
    "brand": "Mandarino Di Amalfi Acqua",
    "name": "Mandarino di Amalfi",
    "gender": "for women and men",
    "topNotes": [
      "Mandarin Orange",
      "Grapefruit",
      "Mint",
      "Bergamot",
      "Tarragon",
      "Black Currant"
    ],
    "heartNotes": [
      "Orange Blossom",
      "Lemon Leaf Oil",
      "Basil",
      "Clary Sage",
      "Wildflowers",
      "Thyme",
      "Jasmine",
      "Shiso",
      "Black Pepper",
      "Coriander"
    ],
    "baseNotes": [
      "Musk",
      "Vetiver",
      "Labdanum",
      "Civet",
      "Amber  NOTES"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer",
      "Winter"
    ],
    "time": "Day / Evening",
    "sprays": "4-6",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal",
      "Office"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Aromatic",
      "Citrus"
    ],
    "accords": [
      "Earthy",
      "Floral",
      "Fresh",
      "Fruity"
    ]
  },
  {
    "id": "1029",
    "slug": "tom-ford-metallique",
    "brand": "Tom Ford",
    "name": "Metallique",
    "gender": "for women",
    "topNotes": [
      "Aldehydes",
      "Pink Pepper",
      "Bergamot"
    ],
    "heartNotes": [
      "Heliotrope",
      "Hawthorn",
      "Lily-of-the-Valley"
    ],
    "baseNotes": [
      "Vanilla",
      "Ambrette (Musk Mallow)",
      "Peru Balsam",
      "Sandalwood"
    ],
    "seasons": [
      "Spring",
      "Summer",
      "Winter"
    ],
    "time": "Day / Evening",
    "sprays": "4-6",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal",
      "Office"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Citrus",
      "Floral"
    ],
    "accords": [
      "Floral",
      "Fresh",
      "Musky",
      "Spicy"
    ]
  },
  {
    "id": "1030",
    "slug": "tom-ford-moss-breches",
    "brand": "Tom Ford",
    "name": "Moss Breches",
    "gender": "for women and men",
    "topNotes": [
      "Not separately listed"
    ],
    "heartNotes": [
      "Not separately listed"
    ],
    "baseNotes": [
      "Not separately listed"
    ],
    "seasons": [
      "Spring",
      "Summer",
      "Monsoon"
    ],
    "time": "Day",
    "sprays": "3-4 sprays; 2-3 indoors",
    "occasions": [
      "Travel",
      "Casual Daytime Events",
      "College",
      "Office",
      "Brunch"
    ],
    "featured": false,
    "families": [
      "Aromatic"
    ],
    "accords": [
      "Fresh"
    ]
  },
  {
    "id": "1031",
    "slug": "tom-ford-neroli-portofino-acqua",
    "brand": "Tom Ford",
    "name": "Neroli Portofino Acqua",
    "gender": "for women and men",
    "topNotes": [
      "Bergamot",
      "Lemon",
      "Petitgrain"
    ],
    "heartNotes": [
      "Neroli",
      "Orange Blossom"
    ],
    "baseNotes": [
      "Amberwood",
      "White Musk"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer"
    ],
    "time": "Day",
    "sprays": "4-6",
    "occasions": [
      "Brunch",
      "Casual Daytime Events",
      "College",
      "Office",
      "Travel"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Citrus",
      "Floral"
    ],
    "accords": [
      "Floral",
      "Fresh",
      "Musky",
      "Warm"
    ]
  },
  {
    "id": "1032",
    "slug": "tom-ford-neroli-portofino",
    "brand": "Tom Ford",
    "name": "Neroli Portofino",
    "gender": "for women and men",
    "topNotes": [
      "Bergamot",
      "Mandarin Orange",
      "Lemon",
      "Bitter Orange",
      "Lavender",
      "Rosemary",
      "Myrtle"
    ],
    "heartNotes": [
      "African Orange Flower",
      "Neroli",
      "Jasmine",
      "Pitosporum"
    ],
    "baseNotes": [
      "Amber",
      "Angelica",
      "Ambrette (Musk Mallow)"
    ],
    "seasons": [
      "Spring",
      "Summer",
      "Monsoon"
    ],
    "time": "Day",
    "sprays": "3-4 sprays; 2-3 indoors Sprays: 3-4 sprays; 2-3 indoors",
    "occasions": [
      "Travel",
      "Casual Daytime Events",
      "College",
      "Office",
      "Brunch"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Aromatic",
      "Citrus"
    ],
    "accords": [
      "Floral",
      "Fresh",
      "Herbal",
      "Musky"
    ]
  },
  {
    "id": "1033",
    "slug": "tom-ford-noir-anthracite",
    "brand": "Tom Ford",
    "name": "Noir Anthracite",
    "gender": "for men",
    "topNotes": [
      "Sichuan Pepper",
      "Ginger",
      "Bergamot"
    ],
    "heartNotes": [
      "Spices",
      "Galbanum",
      "Jasmine"
    ],
    "baseNotes": [
      "Ebony",
      "Cedar",
      "Birch",
      "Leather",
      "Sandalwood",
      "Patchouli",
      "Amberwood"
    ],
    "seasons": [
      "Spring",
      "Ac Venues",
      "Mild Winter",
      "Monsoon Evenings"
    ],
    "time": "Day / Evening",
    "sprays": "2-3 sprays",
    "occasions": [
      "Lunches",
      "Smart Casuals",
      "Dates",
      "Office",
      "Pujas"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Citrus",
      "Floral"
    ],
    "accords": [
      "Earthy",
      "Floral",
      "Fresh",
      "Green"
    ]
  },
  {
    "id": "1034",
    "slug": "tom-ford-noir-extreme",
    "brand": "Tom Ford",
    "name": "Noir Extreme",
    "gender": "for men",
    "topNotes": [
      "Saffron"
    ],
    "heartNotes": [
      "Black Rose",
      "Truffle",
      "Floral Notes"
    ],
    "baseNotes": [
      "Patchouli",
      "Vanilla",
      "Agarwood (Oud)",
      "Oakmoss"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Winter"
    ],
    "time": "Evening",
    "sprays": "2-3",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Floral",
      "Spicy"
    ],
    "accords": [
      "Earthy",
      "Floral",
      "Spicy",
      "Sweet"
    ]
  },
  {
    "id": "1035",
    "slug": "tom-ford-noir-de-noir",
    "brand": "Tom Ford",
    "name": "Noir de Noir",
    "gender": "for women and men",
    "topNotes": [
      "Cardamom",
      "Nutmeg",
      "Saffron",
      "Mandarin Orange",
      "Neroli"
    ],
    "heartNotes": [
      "Kulfi",
      "Rose",
      "Mastic or Lentisque",
      "Orange Blossom",
      "Jasmine"
    ],
    "baseNotes": [
      "Vanilla",
      "Amber",
      "Woody Notes",
      "Sandalwood"
    ],
    "seasons": [
      "Ac Venues",
      "Winter",
      "Monsoon Evenings"
    ],
    "time": "Evening",
    "sprays": "2-3 sprays",
    "occasions": [
      "Celebrations",
      "Receptions",
      "Dinner Dates",
      "Formal Events"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Citrus",
      "Floral"
    ],
    "accords": [
      "Floral",
      "Fresh",
      "Spicy",
      "Sweet"
    ]
  },
  {
    "id": "1036",
    "slug": "tom-ford-noir",
    "brand": "Tom Ford",
    "name": "Noir",
    "gender": "for men",
    "topNotes": [
      "Violet",
      "Pink Pepper",
      "Caraway",
      "Bergamot",
      "Verbena"
    ],
    "heartNotes": [
      "Tuscan Iris",
      "Bulgarian Rose",
      "Black Pepper",
      "Nutmeg",
      "Geranium",
      "Clary Sage"
    ],
    "baseNotes": [
      "Indonesian Patchouli Leaf",
      "Amber",
      "Vanilla",
      "Civet",
      "Leather",
      "Opoponax",
      "Benzoin",
      "Vetiver"
    ],
    "seasons": [
      "Spring",
      "Ac Venues",
      "Mild Winter",
      "Monsoon Evenings"
    ],
    "time": "Day / Evening",
    "sprays": "2-3 sprays Top: Violet, Pink Pepper, Caraway, Bergamot and Verbena \u00e2\u20ac\u00a2 Heart: Tuscan Iris, Bulgarian Rose, Black Pepper, Nutmeg, Geranium and Clary Sage \u00e2\u20ac\u00a2 Base: Indonesian Patchouli Leaf, Amber, Vanilla, Civet, Leather, Opoponax, Benzoin, Vetiver and",
    "occasions": [
      "Lunches",
      "Smart Casuals",
      "Dates",
      "Office",
      "Pujas"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Aromatic",
      "Citrus"
    ],
    "accords": [
      "Earthy",
      "Floral",
      "Fresh",
      "Herbal"
    ]
  },
  {
    "id": "1037",
    "slug": "tom-ford-ombre-leather-parfum",
    "brand": "Tom Ford",
    "name": "Ombre Leather Parfum",
    "gender": "for women and men",
    "topNotes": [
      "Violet Leaf",
      "Cedar"
    ],
    "heartNotes": [
      "Jasmine Sambac",
      "Orris"
    ],
    "baseNotes": [
      "Leather",
      "Woody Notes",
      "Tobacco"
    ],
    "seasons": [
      "Spring",
      "Winter"
    ],
    "time": "Evening",
    "sprays": "2-3",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal"
    ],
    "featured": false,
    "families": [
      "Floral",
      "Gourmand",
      "Leather"
    ],
    "accords": [
      "Floral",
      "Leather",
      "Powdery",
      "Sweet"
    ]
  },
  {
    "id": "1038",
    "slug": "-1038",
    "brand": "Archive",
    "name": "Classified Fragrance",
    "gender": "Unisex",
    "topNotes": [
      "Violet Leaf",
      "Cedar"
    ],
    "heartNotes": [
      "Jasmine Sambac",
      "Orris"
    ],
    "baseNotes": [
      "Leather",
      "Woody Notes",
      "Tobacco"
    ],
    "seasons": [
      "Spring",
      "Winter"
    ],
    "time": "Evening",
    "sprays": "2-3",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal"
    ],
    "featured": false,
    "families": [
      "Floral",
      "Gourmand",
      "Leather"
    ],
    "accords": [
      "Floral",
      "Leather",
      "Powdery",
      "Sweet"
    ]
  },
  {
    "id": "1039",
    "slug": "tom-ford-orchid-soleil",
    "brand": "Tom Ford",
    "name": "Orchid Soleil",
    "gender": "for women",
    "topNotes": [
      "Cypress",
      "Pink Pepper",
      "Bitter Orange"
    ],
    "heartNotes": [
      "Tuberose",
      "Red Lily"
    ],
    "baseNotes": [
      "Whipped Cream",
      "Chestnut",
      "Vanilla",
      "Orchid",
      "Patchouli"
    ],
    "seasons": [
      "Spring",
      "Ac Venues",
      "Mild Winter",
      "Monsoon Evenings"
    ],
    "time": "Day / Evening",
    "sprays": "2-3 sprays",
    "occasions": [
      "Lunches",
      "Smart Casuals",
      "Dates",
      "Office",
      "Pujas"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Citrus",
      "Floral"
    ],
    "accords": [
      "Earthy",
      "Floral",
      "Fresh",
      "Spicy"
    ]
  },
  {
    "id": "1040",
    "slug": "tom-ford-oud-fleur",
    "brand": "Tom Ford",
    "name": "Oud Fleur",
    "gender": "for women and men",
    "topNotes": [
      "Not separately listed"
    ],
    "heartNotes": [
      "Not separately listed"
    ],
    "baseNotes": [
      "Not separately listed"
    ],
    "seasons": [
      "Ac Venues",
      "Winter",
      "Monsoon Evenings"
    ],
    "time": "Evening",
    "sprays": "2-3 sprays",
    "occasions": [
      "Celebrations",
      "Receptions",
      "Dinner Dates",
      "Formal Events"
    ],
    "featured": false,
    "families": [
      "Aromatic"
    ],
    "accords": [
      "Fresh"
    ]
  },
  {
    "id": "1041",
    "slug": "tom-ford-oud-minerale",
    "brand": "Tom Ford",
    "name": "Oud Minerale",
    "gender": "for women and men",
    "topNotes": [
      "Not separately listed"
    ],
    "heartNotes": [
      "Not separately listed"
    ],
    "baseNotes": [
      "Not separately listed"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer"
    ],
    "time": "Day",
    "sprays": "2-3",
    "occasions": [
      "Casual",
      "Office"
    ],
    "featured": false,
    "families": [
      "Aromatic"
    ],
    "accords": [
      "Fresh"
    ]
  },
  {
    "id": "1042",
    "slug": "tom-ford-oud-minerale-1042",
    "brand": "Tom Ford",
    "name": "Oud Minerale",
    "gender": "for women and men",
    "topNotes": [
      "Not separately listed"
    ],
    "heartNotes": [
      "Not separately listed"
    ],
    "baseNotes": [
      "Not separately listed"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer"
    ],
    "time": "Day",
    "sprays": "2-3",
    "occasions": [
      "Casual",
      "Office"
    ],
    "featured": false,
    "families": [
      "Aromatic"
    ],
    "accords": [
      "Fresh"
    ]
  },
  {
    "id": "1043",
    "slug": "tom-ford-oud-wood",
    "brand": "Tom Ford",
    "name": "Oud Wood",
    "gender": "for women and men",
    "topNotes": [
      "Not separately listed"
    ],
    "heartNotes": [
      "Not separately listed"
    ],
    "baseNotes": [
      "Not separately listed"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer"
    ],
    "time": "Day",
    "sprays": "2-3",
    "occasions": [
      "Casual",
      "Office"
    ],
    "featured": false,
    "families": [
      "Aromatic"
    ],
    "accords": [
      "Fresh"
    ]
  },
  {
    "id": "1044",
    "slug": "tom-ford-oud-wood-1044",
    "brand": "Tom Ford",
    "name": "Oud Wood",
    "gender": "for women and men",
    "topNotes": [
      "Not separately listed"
    ],
    "heartNotes": [
      "Not separately listed"
    ],
    "baseNotes": [
      "Not separately listed"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer"
    ],
    "time": "Day",
    "sprays": "2-3",
    "occasions": [
      "Casual",
      "Office"
    ],
    "featured": false,
    "families": [
      "Aromatic"
    ],
    "accords": [
      "Fresh"
    ]
  },
  {
    "id": "1045",
    "slug": "tom-ford-oud-wood-intense",
    "brand": "Tom Ford",
    "name": "Oud Wood Intense",
    "gender": "for women and men",
    "topNotes": [
      "Not separately listed"
    ],
    "heartNotes": [
      "Not separately listed"
    ],
    "baseNotes": [
      "Not separately listed"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer"
    ],
    "time": "Day",
    "sprays": "2-3",
    "occasions": [
      "Casual",
      "Office"
    ],
    "featured": false,
    "families": [
      "Aromatic"
    ],
    "accords": [
      "Fresh"
    ]
  },
  {
    "id": "1046",
    "slug": "tom-ford-patchouli-absolu",
    "brand": "Tom Ford",
    "name": "Patchouli Absolu",
    "gender": "for women and men",
    "topNotes": [
      "Not separately listed"
    ],
    "heartNotes": [
      "Not separately listed"
    ],
    "baseNotes": [
      "Not separately listed"
    ],
    "seasons": [
      "Ac Venues",
      "Winter",
      "Cool Nights"
    ],
    "time": "Evening",
    "sprays": "1-2 sprays",
    "occasions": [
      "Receptions",
      "Winter Weddings",
      "Festive Evenings",
      "Formal Dinners"
    ],
    "featured": false,
    "families": [
      "Aromatic"
    ],
    "accords": [
      "Fresh"
    ]
  },
  {
    "id": "1047",
    "slug": "tom-ford-plum-japonais",
    "brand": "Tom Ford",
    "name": "Plum Japonais",
    "gender": "for women",
    "topNotes": [
      "Cinnamon",
      "Saffron"
    ],
    "heartNotes": [
      "Japanese Plum",
      "Plum Blossom",
      "Immortelle",
      "Liquor",
      "Cypress",
      "Camellia"
    ],
    "baseNotes": [
      "Agarwood (Oud)",
      "Amber",
      "Benzoin",
      "Fir",
      "Vanilla"
    ],
    "seasons": [
      "Spring",
      "Ac Venues",
      "Mild Winter",
      "Monsoon Evenings"
    ],
    "time": "Day / Evening",
    "sprays": "2-3 sprays",
    "occasions": [
      "Lunches",
      "Smart Casuals",
      "Dates",
      "Office",
      "Pujas"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Floral",
      "Fruity"
    ],
    "accords": [
      "Floral",
      "Fruity",
      "Spicy",
      "Sweet"
    ]
  },
  {
    "id": "1048",
    "slug": "tom-ford-rose-prick",
    "brand": "Tom Ford",
    "name": "Rose Prick",
    "gender": "for women and men",
    "topNotes": [
      "Sichuan Pepper",
      "Turmeric"
    ],
    "heartNotes": [
      "May Rose",
      "Bulgarian Rose",
      "Turkish Rose"
    ],
    "baseNotes": [
      "Patchouli",
      "Tonka Bean"
    ],
    "seasons": [
      "Spring",
      "Ac Venues",
      "Mild Winter",
      "Monsoon Evenings"
    ],
    "time": "Day / Evening",
    "sprays": "2-3 sprays",
    "occasions": [
      "Lunches",
      "Smart Casuals",
      "Dates",
      "Office",
      "Pujas"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Floral",
      "Spicy"
    ],
    "accords": [
      "Earthy",
      "Floral",
      "Spicy",
      "Sweet"
    ]
  },
  {
    "id": "1049",
    "slug": "tom-ford-rose-d-amalfi",
    "brand": "Tom Ford",
    "name": "Rose D Amalfi",
    "gender": "for women and men",
    "topNotes": [
      "Pink Pepper",
      "Bergamot",
      "Indian Mandarin"
    ],
    "heartNotes": [
      "Rose"
    ],
    "baseNotes": [
      "Heliotrope",
      "Almond"
    ],
    "seasons": [
      "Spring",
      "Summer",
      "Monsoon"
    ],
    "time": "Day",
    "sprays": "3-4 sprays; 2-3 indoors",
    "occasions": [
      "Travel",
      "Casual Daytime Events",
      "College",
      "Office",
      "Brunch"
    ],
    "featured": false,
    "families": [
      "Citrus",
      "Floral",
      "Gourmand"
    ],
    "accords": [
      "Floral",
      "Fresh",
      "Spicy",
      "Sweet"
    ]
  },
  {
    "id": "1050",
    "slug": "tom-ford-sahara-noir",
    "brand": "Tom Ford",
    "name": "Sahara Noir",
    "gender": "for women",
    "topNotes": [
      "Labdanum",
      "Cypress",
      "Bitter Orange",
      "Calamus"
    ],
    "heartNotes": [
      "Incense",
      "Beeswax",
      "Cinnamon",
      "Papyrus",
      "Moroccan Rose",
      "Egyptian Jasmine"
    ],
    "baseNotes": [
      "Egyptian balsam",
      "Amber",
      "Labdanum",
      "Benzoin",
      "Agarwood (Oud)",
      "Cedar",
      "Vanilla"
    ],
    "seasons": [
      "Ac Venues",
      "Winter",
      "Cool Nights"
    ],
    "time": "Evening",
    "sprays": "1-2 sprays",
    "occasions": [
      "Receptions",
      "Winter Weddings",
      "Festive Evenings",
      "Formal Dinners"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Citrus",
      "Floral"
    ],
    "accords": [
      "Balsamic",
      "Floral",
      "Fresh",
      "Spicy"
    ]
  },
  {
    "id": "1051",
    "slug": "tom-ford-santal-blush",
    "brand": "Tom Ford",
    "name": "Santal Blush",
    "gender": "for women",
    "topNotes": [
      "Spices",
      "Cinnamon",
      "Caraway",
      "Fenugreek",
      "Carrot Seeds"
    ],
    "heartNotes": [
      "Ylang-Ylang",
      "Jasmine",
      "Rose"
    ],
    "baseNotes": [
      "Sandalwood",
      "Benzoin",
      "Virginia Cedar",
      "Musk",
      "Agarwood (Oud)"
    ],
    "seasons": [
      "Spring",
      "Winter"
    ],
    "time": "Evening",
    "sprays": "2-3",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Floral",
      "Spicy"
    ],
    "accords": [
      "Floral",
      "Musky",
      "Spicy",
      "Warm"
    ]
  },
  {
    "id": "1052",
    "slug": "tom-ford-sole-di-positano",
    "brand": "Tom Ford",
    "name": "Sole di Positano",
    "gender": "for women and men",
    "topNotes": [
      "Bitter Orange",
      "Mandarin Orange",
      "Calabrian bergamot",
      "Petitgrain",
      "Lemon"
    ],
    "heartNotes": [
      "Neroli",
      "Orange Blossom",
      "Jasmine",
      "Shiso",
      "Ylang-Ylang",
      "Lily-of-the-Valley"
    ],
    "baseNotes": [
      "Moss"
    ],
    "seasons": [
      "Spring",
      "Ac Venues",
      "Mild Winter",
      "Monsoon Evenings"
    ],
    "time": "Day / Evening",
    "sprays": "2-3 sprays",
    "occasions": [
      "Lunches",
      "Smart Casuals",
      "Dates",
      "Office",
      "Pujas"
    ],
    "featured": false,
    "families": [
      "Citrus",
      "Floral"
    ],
    "accords": [
      "Floral",
      "Fresh"
    ]
  },
  {
    "id": "1053",
    "slug": "tom-ford-soleil-blanc",
    "brand": "Tom Ford",
    "name": "Soleil Blanc",
    "gender": "for women and men",
    "topNotes": [
      "Pistachio",
      "Bergamot",
      "Cardamom",
      "Pink Pepper"
    ],
    "heartNotes": [
      "Tuberose",
      "Ylang-Ylang",
      "Jasmine"
    ],
    "baseNotes": [
      "Coconut",
      "Amber",
      "Tonka Bean",
      "Benzoin"
    ],
    "seasons": [
      "Spring",
      "Summer",
      "Winter"
    ],
    "time": "Day / Evening",
    "sprays": "4-6",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal",
      "Office"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Citrus",
      "Floral"
    ],
    "accords": [
      "Floral",
      "Fresh",
      "Fruity",
      "Spicy"
    ]
  },
  {
    "id": "1054",
    "slug": "tom-ford-soleil-neige",
    "brand": "Tom Ford",
    "name": "Soleil Neige",
    "gender": "for women and men",
    "topNotes": [
      "Bergamot",
      "Carrot Seeds"
    ],
    "heartNotes": [
      "White Flowers",
      "Orange Blossom",
      "Jasmine",
      "Rose",
      "Turkish Rose"
    ],
    "baseNotes": [
      "Benzoin",
      "Vanilla",
      "Labdanum"
    ],
    "seasons": [
      "Spring",
      "Summer",
      "Winter"
    ],
    "time": "Day / Evening",
    "sprays": "4-6",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal",
      "Office"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Citrus",
      "Floral"
    ],
    "accords": [
      "Floral",
      "Fresh",
      "Sweet",
      "Warm"
    ]
  },
  {
    "id": "1055",
    "slug": "tom-ford-tobacco-oud",
    "brand": "Tom Ford",
    "name": "Tobacco Oud",
    "gender": "for women and men",
    "topNotes": [
      "Whiskey"
    ],
    "heartNotes": [
      "Spicy Notes",
      "Cinnamon",
      "Coriander"
    ],
    "baseNotes": [
      "Tobacco",
      "Agarwood (Oud)",
      "Incense",
      "Sandalwood",
      "Patchouli",
      "Benzoin",
      "Vanilla",
      "Cedar"
    ],
    "seasons": [
      "Monsoon",
      "Winter"
    ],
    "time": "Evening",
    "sprays": "2-3",
    "occasions": [
      "Date Night",
      "Formal"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Gourmand",
      "Spicy"
    ],
    "accords": [
      "Balsamic",
      "Earthy",
      "Spicy",
      "Sweet"
    ]
  },
  {
    "id": "1056",
    "slug": "tom-ford-tobacco-vanille",
    "brand": "Tom Ford",
    "name": "Tobacco Vanille",
    "gender": "for women and men",
    "topNotes": [
      "Tobacco Leaf",
      "Spicy Notes"
    ],
    "heartNotes": [
      "Vanilla",
      "Cacao",
      "Tonka Bean",
      "Tobacco Blossom"
    ],
    "baseNotes": [
      "Dried Fruits",
      "Woody Notes"
    ],
    "seasons": [
      "Winter"
    ],
    "time": "Evening",
    "sprays": "2-3",
    "occasions": [
      "Date Night",
      "Formal"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Floral",
      "Gourmand"
    ],
    "accords": [
      "Floral",
      "Sweet",
      "Warm",
      "Woody"
    ]
  },
  {
    "id": "1057",
    "slug": "tom-ford-tobacco-vanille-1057",
    "brand": "Tom Ford",
    "name": "Tobacco Vanille",
    "gender": "for women and men",
    "topNotes": [
      "Tobacco Leaf",
      "Spicy Notes"
    ],
    "heartNotes": [
      "Vanilla",
      "Cacao",
      "Tonka Bean",
      "Tobacco Blossom"
    ],
    "baseNotes": [
      "Dried Fruits",
      "Woody Notes"
    ],
    "seasons": [
      "Winter"
    ],
    "time": "Evening",
    "sprays": "2-3",
    "occasions": [
      "Date Night",
      "Formal"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Floral",
      "Gourmand"
    ],
    "accords": [
      "Floral",
      "Sweet",
      "Warm",
      "Woody"
    ]
  },
  {
    "id": "1058",
    "slug": "tom-ford-tuscan-leather",
    "brand": "Tom Ford",
    "name": "Tuscan Leather",
    "gender": "for women and men",
    "topNotes": [
      "Raspberry",
      "Saffron",
      "Thyme"
    ],
    "heartNotes": [
      "Olibanum",
      "Jasmine"
    ],
    "baseNotes": [
      "Leather",
      "Suede",
      "Woody Notes",
      "Amber"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Winter"
    ],
    "time": "Evening",
    "sprays": "2-3",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Aromatic",
      "Floral"
    ],
    "accords": [
      "Floral",
      "Fruity",
      "Herbal",
      "Leather"
    ]
  },
  {
    "id": "1059",
    "slug": "tom-ford-vanilla-sex",
    "brand": "Tom Ford",
    "name": "Vanilla Sex",
    "gender": "for women and men",
    "topNotes": [
      "Bitter Almond"
    ],
    "heartNotes": [
      "Vanilla",
      "Floral Notes"
    ],
    "baseNotes": [
      "Vanilla Absolute",
      "Ultravanil\u2122",
      "Tonka Bean",
      "Sandalwood"
    ],
    "seasons": [
      "Spring",
      "Winter"
    ],
    "time": "Evening",
    "sprays": "2-3",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Floral",
      "Gourmand"
    ],
    "accords": [
      "Floral",
      "Sweet",
      "Warm",
      "Woody"
    ]
  },
  {
    "id": "1060",
    "slug": "tom-ford-vanille-fatale",
    "brand": "Tom Ford",
    "name": "Vanille Fatale",
    "gender": "for women and men",
    "topNotes": [
      "Rum",
      "Myrrh",
      "Olibanum",
      "Saffron",
      "Coriander",
      "Orange",
      "Lime"
    ],
    "heartNotes": [
      "Barley",
      "Coffee",
      "Plum",
      "Frangipani",
      "Narcissus",
      "Artemisia",
      "Rose"
    ],
    "baseNotes": [
      "Madagascar Vanilla",
      "Suede",
      "Tobacco",
      "Mahogany",
      "Patchouli",
      "Oakmoss",
      "Violet"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer",
      "Winter"
    ],
    "time": "Day / Evening",
    "sprays": "4-6",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal",
      "Office"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Aromatic",
      "Citrus"
    ],
    "accords": [
      "Balsamic",
      "Earthy",
      "Floral",
      "Fresh"
    ]
  },
  {
    "id": "1061",
    "slug": "tom-ford-velvet-orchid",
    "brand": "Tom Ford",
    "name": "Velvet Orchid",
    "gender": "for women",
    "topNotes": [
      "Rum",
      "Honey",
      "Mandarin Orange",
      "Bergamot"
    ],
    "heartNotes": [
      "Black Orchid",
      "Orchid",
      "Jasmine",
      "Heliotrope",
      "Hyacinth",
      "Rose Oil",
      "Narcissus",
      "Magnolia",
      "Orange Blossom"
    ],
    "baseNotes": [
      "Vanilla",
      "Myrrh",
      "Suede",
      "Sandalwood",
      "Peru Balsam",
      "Labdanum"
    ],
    "seasons": [
      "Spring",
      "Summer",
      "Winter"
    ],
    "time": "Day / Evening",
    "sprays": "4-6",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal",
      "Office"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Citrus",
      "Floral"
    ],
    "accords": [
      "Balsamic",
      "Floral",
      "Fresh",
      "Leather"
    ]
  },
  {
    "id": "1062",
    "slug": "tom-ford-vert-des-bois",
    "brand": "Tom Ford",
    "name": "Vert des Bois",
    "gender": "for women and men",
    "topNotes": [
      "Poplar (Populus) buds",
      "Olive Tree",
      "Anise",
      "Plum"
    ],
    "heartNotes": [
      "Mastic or Lentisque",
      "Jasmine"
    ],
    "baseNotes": [
      "Woody Notes",
      "Patchouli",
      "Tonka Bean"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Winter"
    ],
    "time": "Evening",
    "sprays": "2-3",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Floral",
      "Fruity"
    ],
    "accords": [
      "Earthy",
      "Floral",
      "Fruity",
      "Spicy"
    ]
  },
  {
    "id": "1063",
    "slug": "tom-ford-white-patchouli",
    "brand": "Tom Ford",
    "name": "White Patchouli",
    "gender": "for women",
    "topNotes": [
      "White Flowers",
      "Coriander",
      "Peony",
      "Bergamot"
    ],
    "heartNotes": [
      "Ambrette (Musk Mallow)",
      "Rose",
      "Jasmine"
    ],
    "baseNotes": [
      "Patchouli",
      "Woody Notes",
      "Incense"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer"
    ],
    "time": "Day",
    "sprays": "4-6",
    "occasions": [
      "Brunch",
      "Casual Daytime Events",
      "College",
      "Office",
      "Travel"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Citrus",
      "Floral"
    ],
    "accords": [
      "Balsamic",
      "Earthy",
      "Floral",
      "Fresh"
    ]
  },
  {
    "id": "1064",
    "slug": "tommy-hilfiger-tommy-girl",
    "brand": "Tommy Hilfiger",
    "name": "Tommy Girl",
    "gender": "for women",
    "topNotes": [
      "Apple Tree Blossom",
      "Mandarin Orange",
      "Camelia",
      "Black Currant"
    ],
    "heartNotes": [
      "Lemon",
      "Honeysuckle",
      "Grapefruit",
      "Rose",
      "Lily",
      "Mint",
      "Violet"
    ],
    "baseNotes": [
      "Magnolia",
      "Jasmine",
      "Cedar",
      "Sandalwood",
      "Leather"
    ],
    "seasons": [
      "Spring",
      "Summer",
      "Monsoon"
    ],
    "time": "Day",
    "sprays": "3-4 sprays; 2-3 indoors Sprays: 3-4 sprays; 2-3 indoors",
    "occasions": [
      "Travel",
      "Casual Daytime Events",
      "College",
      "Office",
      "Brunch"
    ],
    "featured": false,
    "families": [
      "Aromatic",
      "Citrus",
      "Floral"
    ],
    "accords": [
      "Floral",
      "Fresh",
      "Fruity",
      "Herbal"
    ]
  },
  {
    "id": "1065",
    "slug": "demeter-fragrance-birthday-cake",
    "brand": "Demeter Fragrance",
    "name": "Birthday Cake",
    "gender": "for women",
    "topNotes": [
      "Not separately listed"
    ],
    "heartNotes": [
      "Not separately listed"
    ],
    "baseNotes": [
      "Not separately listed"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer"
    ],
    "time": "Day",
    "sprays": "3-4",
    "occasions": [
      "Casual",
      "Office"
    ],
    "featured": false,
    "families": [
      "Aromatic"
    ],
    "accords": [
      "Fresh"
    ]
  },
  {
    "id": "1066",
    "slug": "tous-oh-the-origin",
    "brand": "Tous",
    "name": "Oh The Origin",
    "gender": "for women",
    "topNotes": [
      "Tangerine",
      "Lemon",
      "Black Currant",
      "Pink Pepper"
    ],
    "heartNotes": [
      "Rose",
      "Orris"
    ],
    "baseNotes": [
      "Ambroxan",
      "Musk",
      "Tonka Bean",
      "Vanilla"
    ],
    "seasons": [
      "Spring",
      "Summer",
      "Winter"
    ],
    "time": "Day / Evening",
    "sprays": "4-6",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal",
      "Office"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Citrus",
      "Floral"
    ],
    "accords": [
      "Floral",
      "Fresh",
      "Fruity",
      "Musky"
    ]
  },
  {
    "id": "1067",
    "slug": "valentino-intense",
    "brand": "Valentino",
    "name": "Intense",
    "gender": "for women",
    "topNotes": [
      "Bourbon Vanilla",
      "Amber"
    ],
    "heartNotes": [
      "Jasmine"
    ],
    "baseNotes": [
      "Benzoin"
    ],
    "seasons": [
      "Ac Venues",
      "Monsoon Evenings",
      "Winter"
    ],
    "time": "Evening",
    "sprays": "2-3",
    "occasions": [
      "Celebrations",
      "Dinner Dates",
      "Formal Events",
      "Receptions"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Floral"
    ],
    "accords": [
      "Floral",
      "Sweet",
      "Warm"
    ]
  },
  {
    "id": "1068",
    "slug": "when-to-wear-valentino-donna-born-in-roma",
    "brand": "When To Wear",
    "name": "Valentino Donna Born In Roma",
    "gender": "for women",
    "topNotes": [
      "Black Currant",
      "Pink Pepper",
      "Bergamot"
    ],
    "heartNotes": [
      "Jasmine",
      "Jasmine Sambac",
      "Jasmine Tea"
    ],
    "baseNotes": [
      "Bourbon Vanilla",
      "Cashmeran",
      "Guaiac Wood"
    ],
    "seasons": [
      "Spring",
      "Summer",
      "Monsoon"
    ],
    "time": "Day",
    "sprays": "2-3 sprays Sprays: 3-4 sprays; 2-3 indoors",
    "occasions": [
      "Travel",
      "Casual Daytime Events",
      "College",
      "Office",
      "Brunch"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Citrus",
      "Floral"
    ],
    "accords": [
      "Floral",
      "Fresh",
      "Fruity",
      "Spicy"
    ]
  },
  {
    "id": "1069",
    "slug": "valentino-valentino-uomo",
    "brand": "Valentino",
    "name": "Valentino Uomo",
    "gender": "for men",
    "topNotes": [
      "Bergamot",
      "Myrtle"
    ],
    "heartNotes": [
      "Hazelnut",
      "Chocolate",
      "Roasted Coffee Beans"
    ],
    "baseNotes": [
      "Leather",
      "Cedar"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer"
    ],
    "time": "Day",
    "sprays": "4-6",
    "occasions": [
      "Brunch",
      "Casual Daytime Events",
      "College",
      "Office",
      "Travel"
    ],
    "featured": false,
    "families": [
      "Citrus",
      "Gourmand",
      "Leather"
    ],
    "accords": [
      "Fresh",
      "Leather",
      "Sweet",
      "Woody"
    ]
  },
  {
    "id": "1070",
    "slug": "van-cleef-arpels-first",
    "brand": "Van Cleef Arpels",
    "name": "First",
    "gender": "for women",
    "topNotes": [
      "Aldehydes",
      "Bergamot",
      "Black Currant",
      "Peach",
      "Mandarin Orange",
      "Raspberry"
    ],
    "heartNotes": [
      "Narcissus",
      "Hiacynth",
      "Jasmine",
      "Lily-of- the-Valley",
      "Carnation",
      "Ylang-Ylang",
      "Orris Root",
      "Tuberose",
      "Turkish Rose",
      "Orchid"
    ],
    "baseNotes": [
      "Civet",
      "Oakmoss",
      "Honey"
    ],
    "seasons": [
      "Ac Venues",
      "Winter",
      "Cool Nights"
    ],
    "time": "Evening",
    "sprays": "3-4 sprays; 2-3 indoors Sprays: 1-2 sprays",
    "occasions": [
      "Receptions",
      "Winter Weddings",
      "Festive Evenings",
      "Formal Dinners"
    ],
    "featured": false,
    "families": [
      "Citrus",
      "Floral",
      "Fruity"
    ],
    "accords": [
      "Floral",
      "Fresh",
      "Fruity",
      "Leather"
    ]
  },
  {
    "id": "1071",
    "slug": "van-cleef-arpels-midnight-in-paris",
    "brand": "Van Cleef Arpels",
    "name": "Midnight in Paris",
    "gender": "for men",
    "topNotes": [
      "Leather",
      "Bergamot",
      "Amalfi Lemon",
      "Holly",
      "Rosemary"
    ],
    "heartNotes": [
      "Tea",
      "Styrax",
      "Lily-of-the-Valley"
    ],
    "baseNotes": [
      "Tonka Bean",
      "Incense",
      "Benzoin",
      "Almond",
      "Amber"
    ],
    "seasons": [
      "Ac Venues",
      "Winter",
      "Cool Nights"
    ],
    "time": "Evening",
    "sprays": "1-2 sprays",
    "occasions": [
      "Receptions",
      "Winter Weddings",
      "Festive Evenings",
      "Formal Dinners"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Aromatic",
      "Citrus"
    ],
    "accords": [
      "Balsamic",
      "Floral",
      "Fresh",
      "Herbal"
    ]
  },
  {
    "id": "1072",
    "slug": "versace-blue-jeans",
    "brand": "Versace",
    "name": "Blue Jeans",
    "gender": "for men",
    "topNotes": [
      "Citruses",
      "Bergamot",
      "Juniper",
      "Anise",
      "Brazilian Rosewood",
      "Basil"
    ],
    "heartNotes": [
      "Lavender",
      "Rose",
      "Carnation",
      "Jasmine",
      "Heliotrope",
      "Geranium",
      "Sage",
      "Fir",
      "Lily-of-the-Valley"
    ],
    "baseNotes": [
      "Vanilla",
      "Tonka Bean",
      "Sandalwood",
      "Iris",
      "Musk",
      "Amber",
      "Cedar",
      "Patchouli"
    ],
    "seasons": [
      "Spring",
      "Ac Venues",
      "Mild Winter",
      "Monsoon Evenings"
    ],
    "time": "Day / Evening",
    "sprays": "2-3 sprays",
    "occasions": [
      "Lunches",
      "Smart Casuals",
      "Dates",
      "Office",
      "Pujas"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Aromatic",
      "Citrus"
    ],
    "accords": [
      "Earthy",
      "Floral",
      "Fresh",
      "Herbal"
    ]
  },
  {
    "id": "1073",
    "slug": "van-cleef-arpels-tsar",
    "brand": "Van Cleef Arpels",
    "name": "Tsar",
    "gender": "for men",
    "topNotes": [
      "Green Notes",
      "Lavender",
      "Artemisia",
      "Rosemary",
      "Bergamot",
      "Coriander",
      "Cinnamon",
      "Neroli"
    ],
    "heartNotes": [
      "Pine Tree",
      "Juniper Berries",
      "Carnation",
      "Tarragon",
      "Geranium",
      "Caraway",
      "Jasmine",
      "Rose",
      "Orris Root",
      "Lily-of-the-Valley"
    ],
    "baseNotes": [
      "Oakmoss",
      "Leather"
    ],
    "seasons": [
      "Spring",
      "Ac Venues",
      "Mild Winter",
      "Monsoon Evenings"
    ],
    "time": "Day / Evening",
    "sprays": "2-3 sprays",
    "occasions": [
      "Lunches",
      "Smart Casuals",
      "Dates",
      "Office",
      "Pujas"
    ],
    "featured": false,
    "families": [
      "Aromatic",
      "Citrus",
      "Floral"
    ],
    "accords": [
      "Floral",
      "Fresh",
      "Green",
      "Herbal"
    ]
  },
  {
    "id": "1074",
    "slug": "versace-versace-pour-homme-dylan-blue",
    "brand": "Versace",
    "name": "Versace Pour Homme Dylan Blue",
    "gender": "for men",
    "topNotes": [
      "Calabrian bergamot",
      "Water Notes",
      "Grapefruit",
      "Fig Leaf"
    ],
    "heartNotes": [
      "Ambroxan",
      "Black Pepper",
      "Patchouli",
      "Violet Leaf",
      "Papyrus"
    ],
    "baseNotes": [
      "Incense",
      "Musk",
      "Tonka Bean",
      "Saffron"
    ],
    "seasons": [
      "Ac Venues",
      "Winter",
      "Cool Nights"
    ],
    "time": "Evening",
    "sprays": "1-2 sprays",
    "occasions": [
      "Receptions",
      "Winter Weddings",
      "Festive Evenings",
      "Formal Dinners"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Aquatic",
      "Citrus"
    ],
    "accords": [
      "Balsamic",
      "Earthy",
      "Floral",
      "Fresh"
    ]
  },
  {
    "id": "1075",
    "slug": "versace-pour-femme-dylan-turquoise",
    "brand": "Versace Pour Femme Dylan",
    "name": "Turquoise",
    "gender": "for women",
    "topNotes": [
      "Lemon",
      "Mandarin Orange",
      "Pink Pepper"
    ],
    "heartNotes": [
      "Guava",
      "Freesia",
      "Cassis",
      "Jasmine"
    ],
    "baseNotes": [
      "Clearwood",
      "Musk",
      "Cedar"
    ],
    "seasons": [
      "Spring",
      "Summer",
      "Monsoon"
    ],
    "time": "Day",
    "sprays": "3-4 sprays; 2-3 indoors",
    "occasions": [
      "Travel",
      "Casual Daytime Events",
      "College",
      "Office",
      "Brunch"
    ],
    "featured": false,
    "families": [
      "Citrus",
      "Floral",
      "Spicy"
    ],
    "accords": [
      "Floral",
      "Fresh",
      "Musky",
      "Spicy"
    ]
  },
  {
    "id": "1076",
    "slug": "versace-eros",
    "brand": "Versace",
    "name": "Eros",
    "gender": "for men",
    "topNotes": [
      "Mint",
      "Green Apple",
      "Lemon"
    ],
    "heartNotes": [
      "Tonka Bean",
      "Ambroxan",
      "Geranium"
    ],
    "baseNotes": [
      "Madagascar Vanilla",
      "Virginian Cedar",
      "Atlas Cedar",
      "Vetiver",
      "Oakmoss"
    ],
    "seasons": [
      "Spring",
      "Ac Venues",
      "Mild Winter",
      "Monsoon Evenings"
    ],
    "time": "Day / Evening",
    "sprays": "2-3 sprays",
    "occasions": [
      "Lunches",
      "Smart Casuals",
      "Dates",
      "Office",
      "Pujas"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Aromatic",
      "Citrus"
    ],
    "accords": [
      "Earthy",
      "Floral",
      "Fresh",
      "Fruity"
    ]
  },
  {
    "id": "1077",
    "slug": "versace-eros-flame",
    "brand": "Versace",
    "name": "Eros Flame",
    "gender": "for men",
    "topNotes": [
      "Mandarin Orange",
      "Madagascar Pepper",
      "Lemon",
      "Chinotto",
      "Rosemary"
    ],
    "heartNotes": [
      "Geranium",
      "Rose",
      "Pepperwood\u2122"
    ],
    "baseNotes": [
      "Vanilla",
      "Tonka Bean",
      "Sandalwood",
      "Texas Cedar",
      "Patchouli",
      "Oakmoss"
    ],
    "seasons": [
      "Spring",
      "Ac Venues",
      "Mild Winter",
      "Monsoon Evenings"
    ],
    "time": "Day / Evening",
    "sprays": "2-3 sprays",
    "occasions": [
      "Lunches",
      "Smart Casuals",
      "Dates",
      "Office",
      "Pujas"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Aromatic",
      "Citrus"
    ],
    "accords": [
      "Earthy",
      "Floral",
      "Fresh",
      "Herbal"
    ]
  },
  {
    "id": "1078",
    "slug": "versace-versace-man-eau-fraiche",
    "brand": "Versace",
    "name": "Versace Man Eau Fraiche",
    "gender": "for men",
    "topNotes": [
      "Lemon",
      "Bergamot",
      "Carambola (Star Fruit)",
      "Cardamom",
      "Brazilian Rosewood"
    ],
    "heartNotes": [
      "Cedar",
      "Tarragon",
      "Sage",
      "Pepper"
    ],
    "baseNotes": [
      "Musk",
      "Woodsy Notes",
      "Saffron",
      "Amber",
      "Sycamore"
    ],
    "seasons": [
      "Spring",
      "Summer",
      "Monsoon"
    ],
    "time": "Day",
    "sprays": "3-4 sprays; 2-3 indoors",
    "occasions": [
      "Travel",
      "Casual Daytime Events",
      "College",
      "Office",
      "Brunch"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Aromatic",
      "Citrus"
    ],
    "accords": [
      "Floral",
      "Fresh",
      "Herbal",
      "Musky"
    ]
  },
  {
    "id": "1079",
    "slug": "versace-versace-pour-femme-oud-oriental",
    "brand": "Versace",
    "name": "Versace Pour Femme Oud Oriental",
    "gender": "for men",
    "topNotes": [
      "Black Pepper",
      "Bitter Orange",
      "Neroli"
    ],
    "heartNotes": [
      "Saffron",
      "Cardamom",
      "Olibanum"
    ],
    "baseNotes": [
      "Agarwood (Oud)",
      "Patchouli",
      "Leatherwood"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer",
      "Winter"
    ],
    "time": "Day / Evening",
    "sprays": "4-6",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal",
      "Office"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Citrus",
      "Leather"
    ],
    "accords": [
      "Earthy",
      "Fresh",
      "Leather",
      "Spicy"
    ]
  },
  {
    "id": "1080",
    "slug": "archive-fragrance-1080",
    "brand": "Archive",
    "name": "Fragrance 1080",
    "gender": "for women",
    "topNotes": [
      "Rose",
      "Saffron",
      "Freesia"
    ],
    "heartNotes": [
      "Violet",
      "Heliotrope",
      "Patchouli"
    ],
    "baseNotes": [
      "Agarwood (Oud)",
      "Leather",
      "Sandalwood",
      "Vanilla"
    ],
    "seasons": [
      "Spring",
      "Ac Venues",
      "Mild Winter",
      "Monsoon Evenings"
    ],
    "time": "Day / Evening",
    "sprays": "2-3 sprays",
    "occasions": [
      "Lunches",
      "Smart Casuals",
      "Dates",
      "Office",
      "Pujas"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Floral",
      "Leather"
    ],
    "accords": [
      "Earthy",
      "Floral",
      "Leather",
      "Powdery"
    ]
  },
  {
    "id": "1081",
    "slug": "versace-the-dreamer",
    "brand": "Versace",
    "name": "The Dreamer",
    "gender": "for men",
    "topNotes": [
      "Juniper",
      "Tarragon",
      "Artemisia"
    ],
    "heartNotes": [
      "Iris",
      "Lily",
      "Flax"
    ],
    "baseNotes": [
      "Tobacco Blossom",
      "Amber"
    ],
    "seasons": [
      "Spring",
      "Ac Venues",
      "Mild Winter",
      "Monsoon Evenings"
    ],
    "time": "Day / Evening",
    "sprays": "2-3 sprays",
    "occasions": [
      "Lunches",
      "Smart Casuals",
      "Dates",
      "Office",
      "Pujas"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Aromatic",
      "Floral"
    ],
    "accords": [
      "Floral",
      "Herbal",
      "Powdery",
      "Sweet"
    ]
  },
  {
    "id": "1082",
    "slug": "versace-versace-pour-femme-dylan-blue",
    "brand": "Versace",
    "name": "Versace Pour Femme Dylan Blue",
    "gender": "for women",
    "topNotes": [
      "Granny Smith apple",
      "Black Currant",
      "Clover",
      "Forget me not",
      "Shiso"
    ],
    "heartNotes": [
      "Peach",
      "Petalia",
      "Rose Hip",
      "Rose",
      "Jasmine"
    ],
    "baseNotes": [
      "Musk",
      "White Woods",
      "Styrax",
      "Patchouli"
    ],
    "seasons": [
      "Spring",
      "Summer",
      "Monsoon"
    ],
    "time": "Day",
    "sprays": "3-4 sprays; 2-3 indoors",
    "occasions": [
      "Travel",
      "Casual Daytime Events",
      "College",
      "Office",
      "Brunch"
    ],
    "featured": false,
    "families": [
      "Floral",
      "Fruity",
      "Spicy"
    ],
    "accords": [
      "Earthy",
      "Floral",
      "Fruity",
      "Musky"
    ]
  },
  {
    "id": "1083",
    "slug": "versace-pour-femme-dylan-turquoise-1083",
    "brand": "Versace Pour Femme Dylan",
    "name": "Turquoise",
    "gender": "for women",
    "topNotes": [
      "Lemon",
      "Mandarin Orange",
      "Pink Pepper"
    ],
    "heartNotes": [
      "Guava",
      "Freesia",
      "Cassis",
      "Jasmine"
    ],
    "baseNotes": [
      "Clearwood",
      "Musk",
      "Cedar"
    ],
    "seasons": [
      "Spring",
      "Summer",
      "Monsoon"
    ],
    "time": "Day",
    "sprays": "3-4 sprays; 2-3 indoors",
    "occasions": [
      "Travel",
      "Casual Daytime Events",
      "College",
      "Office",
      "Brunch"
    ],
    "featured": false,
    "families": [
      "Citrus",
      "Floral",
      "Spicy"
    ],
    "accords": [
      "Floral",
      "Fresh",
      "Musky",
      "Spicy"
    ]
  },
  {
    "id": "1084",
    "slug": "victoria-s-secret-bombshell",
    "brand": "Victoria S Secret",
    "name": "Bombshell",
    "gender": "for women",
    "topNotes": [
      "Passionfruit",
      "Grapefruit",
      "Pineapple",
      "Tangerine",
      "Big Strawberry"
    ],
    "heartNotes": [
      "Peony",
      "Vanilla Orchid",
      "Red Berries",
      "Jasmine",
      "Lily-of-the-Valley"
    ],
    "baseNotes": [
      "Musk",
      "Woody Notes",
      "Oakmoss"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer"
    ],
    "time": "Day",
    "sprays": "4-6",
    "occasions": [
      "Brunch",
      "Casual Daytime Events",
      "College",
      "Office",
      "Travel"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Citrus",
      "Floral"
    ],
    "accords": [
      "Floral",
      "Fresh",
      "Fruity",
      "Musky"
    ]
  },
  {
    "id": "1085",
    "slug": "when-to-wear-bali-coconut-palm",
    "brand": "When To Wear",
    "name": "Bali Coconut Palm",
    "gender": "for women",
    "topNotes": [
      "Not separately listed"
    ],
    "heartNotes": [
      "Not separately listed"
    ],
    "baseNotes": [
      "Not separately listed"
    ],
    "seasons": [
      "Spring",
      "Ac Venues",
      "Mild Winter",
      "Monsoon Evenings"
    ],
    "time": "Day / Evening",
    "sprays": "2-3 sprays",
    "occasions": [
      "Lunches",
      "Smart Casuals",
      "Dates",
      "Office",
      "Pujas"
    ],
    "featured": false,
    "families": [
      "Aromatic"
    ],
    "accords": [
      "Fresh"
    ]
  },
  {
    "id": "1086",
    "slug": "victoria-s-secret-love-me",
    "brand": "Victoria S Secret",
    "name": "Love Me",
    "gender": "for women",
    "topNotes": [
      "Neroli"
    ],
    "heartNotes": [
      "French Narcissus"
    ],
    "baseNotes": [
      "Amber"
    ],
    "seasons": [
      "Spring",
      "Summer",
      "Monsoon"
    ],
    "time": "Day",
    "sprays": "3-4 sprays; 2-3 indoors Sprays: 3-4 sprays; 2-3 indoors",
    "occasions": [
      "Travel",
      "Casual Daytime Events",
      "College",
      "Office",
      "Brunch"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Citrus"
    ],
    "accords": [
      "Fresh",
      "Warm"
    ]
  },
  {
    "id": "1087",
    "slug": "victoria-s-secret-tease-flower",
    "brand": "Victoria S Secret",
    "name": "Tease Flower",
    "gender": "for women",
    "topNotes": [
      "Orchid",
      "Sugar"
    ],
    "heartNotes": [
      "Tulip"
    ],
    "baseNotes": [
      "Whipped Cream",
      "Vanilla"
    ],
    "seasons": [
      "Spring",
      "Winter"
    ],
    "time": "Evening",
    "sprays": "2-3",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Floral",
      "Gourmand"
    ],
    "accords": [
      "Floral",
      "Sweet",
      "Warm"
    ]
  },
  {
    "id": "1088",
    "slug": "viktor-rolf-antidote",
    "brand": "Viktor Rolf",
    "name": "Antidote",
    "gender": "for men",
    "topNotes": [
      "Guatemalan Cardamom",
      "Mint",
      "Bergamot",
      "Grapefruit",
      "Mandarin Orange"
    ],
    "heartNotes": [
      "Lavender",
      "Cinnamon",
      "Nutmeg",
      "Jasmine",
      "Orange Blossom",
      "Violet",
      "African Geranium",
      "Freesia"
    ],
    "baseNotes": [
      "Incense",
      "Vanilla",
      "Sandalwood",
      "Amber",
      "Leather",
      "Iris",
      "Patchouli"
    ],
    "seasons": [
      "Spring",
      "Ac Venues",
      "Mild Winter",
      "Monsoon Evenings"
    ],
    "time": "Day / Evening",
    "sprays": "2-3 sprays Top: Guatemalan Cardamom, Mint, Bergamot, Grapefruit and Mandarin Orange \u00e2\u20ac\u00a2 Heart: Lavender, Cinnamon, Nutmeg, Jasmine, Orange Blossom, Violet, African Geranium and Freesia \u00e2\u20ac\u00a2 Base: Incense, Vanilla, Sandalwood, Amber, Leather, Iris, Patchouli,",
    "occasions": [
      "Lunches",
      "Smart Casuals",
      "Dates",
      "Office",
      "Pujas"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Aromatic",
      "Citrus"
    ],
    "accords": [
      "Balsamic",
      "Earthy",
      "Floral",
      "Fresh"
    ]
  },
  {
    "id": "1089",
    "slug": "viktor-rolf-flowerbomb",
    "brand": "Viktor Rolf",
    "name": "Flowerbomb",
    "gender": "for women",
    "topNotes": [
      "Tea",
      "Bergamot",
      "Osmanthus"
    ],
    "heartNotes": [
      "Orchid",
      "Jasmine",
      "Rose",
      "Freesia",
      "African Orange Flower"
    ],
    "baseNotes": [
      "Patchouli",
      "Musk",
      "Vanilla"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer",
      "Winter"
    ],
    "time": "Day / Evening",
    "sprays": "4-6",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal",
      "Office"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Citrus",
      "Floral"
    ],
    "accords": [
      "Earthy",
      "Floral",
      "Fresh",
      "Musky"
    ]
  },
  {
    "id": "1090",
    "slug": "viktor-rolf-spicebomb",
    "brand": "Viktor Rolf",
    "name": "Spicebomb",
    "gender": "for men",
    "topNotes": [
      "Pink Pepper",
      "elemi",
      "Bergamot",
      "Grapefruit"
    ],
    "heartNotes": [
      "Cinnamon",
      "Saffron",
      "Paprika"
    ],
    "baseNotes": [
      "Tobacco",
      "Leather",
      "Vetiver"
    ],
    "seasons": [
      "Spring",
      "Summer",
      "Monsoon"
    ],
    "time": "Day",
    "sprays": "3-4 sprays; 2-3 indoors",
    "occasions": [
      "Travel",
      "Casual Daytime Events",
      "College",
      "Office",
      "Brunch"
    ],
    "featured": false,
    "families": [
      "Citrus",
      "Gourmand",
      "Leather"
    ],
    "accords": [
      "Earthy",
      "Fresh",
      "Leather",
      "Spicy"
    ]
  },
  {
    "id": "1091",
    "slug": "viktor-rolf-spicebomb-extreme",
    "brand": "Viktor Rolf",
    "name": "Spicebomb Extreme",
    "gender": "for men",
    "topNotes": [
      "Not separately listed"
    ],
    "heartNotes": [
      "Not separately listed"
    ],
    "baseNotes": [
      "Not separately listed"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer"
    ],
    "time": "Day",
    "sprays": "3-4",
    "occasions": [
      "Casual",
      "Office"
    ],
    "featured": false,
    "families": [
      "Aromatic"
    ],
    "accords": [
      "Fresh"
    ]
  },
  {
    "id": "1092",
    "slug": "widian-london",
    "brand": "Widian",
    "name": "London",
    "gender": "for women and men",
    "topNotes": [
      "Agarwood (Oud)",
      "Violet",
      "Cypress"
    ],
    "heartNotes": [
      "Raspberry",
      "Lily-of-the-Valley"
    ],
    "baseNotes": [
      "Leather",
      "Vanilla",
      "Amber",
      "Musk"
    ],
    "seasons": [
      "Spring",
      "Winter"
    ],
    "time": "Evening",
    "sprays": "2-3",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Floral",
      "Fruity"
    ],
    "accords": [
      "Floral",
      "Fruity",
      "Leather",
      "Musky"
    ]
  },
  {
    "id": "1093",
    "slug": "xerjoff-xj-1861-renaissance",
    "brand": "Xerjoff",
    "name": "XJ 1861 Renaissance",
    "gender": "for women and men",
    "topNotes": [
      "Amalfi Lemon",
      "Tangerine",
      "Bergamot",
      "Petitgrain"
    ],
    "heartNotes": [
      "Mint",
      "Lily-of-the-Valley",
      "Rose"
    ],
    "baseNotes": [
      "Musk",
      "Virginia Cedar",
      "Amber",
      "Patchouli"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer",
      "Winter"
    ],
    "time": "Day / Evening",
    "sprays": "4-6",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal",
      "Office"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Aromatic",
      "Citrus"
    ],
    "accords": [
      "Earthy",
      "Floral",
      "Fresh",
      "Herbal"
    ]
  },
  {
    "id": "1094",
    "slug": "xerjoff-40-knots",
    "brand": "Xerjoff",
    "name": "40 Knots",
    "gender": "for women and men",
    "topNotes": [
      "Not separately listed"
    ],
    "heartNotes": [
      "Not separately listed"
    ],
    "baseNotes": [
      "Not separately listed"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer"
    ],
    "time": "Day",
    "sprays": "3-4",
    "occasions": [
      "Brunch",
      "Casual Daytime Events",
      "College",
      "Office",
      "Travel"
    ],
    "featured": false,
    "families": [
      "Aromatic"
    ],
    "accords": [
      "Fresh"
    ]
  },
  {
    "id": "1095",
    "slug": "xerjoff-alexandria-ii",
    "brand": "Xerjoff",
    "name": "Alexandria II",
    "gender": "for women and men",
    "topNotes": [
      "Palisander Rosewood",
      "Lavender",
      "Cinnamon",
      "Apple"
    ],
    "heartNotes": [
      "Rose",
      "Cedar",
      "Lily-of-the-Valley"
    ],
    "baseNotes": [
      "Agarwood (Oud)",
      "Sandalwood",
      "Amber",
      "Vanilla",
      "Musk"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Winter"
    ],
    "time": "Evening",
    "sprays": "2-3",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Aromatic",
      "Floral"
    ],
    "accords": [
      "Floral",
      "Fruity",
      "Herbal",
      "Musky"
    ]
  },
  {
    "id": "1096",
    "slug": "xerjoff-alexandria-iii",
    "brand": "Xerjoff",
    "name": "Alexandria III",
    "gender": "for women and men",
    "topNotes": [
      "Palisander Rosewood",
      "Lavender",
      "Cinnamon"
    ],
    "heartNotes": [
      "Bulgarian Rose",
      "Cedar",
      "Lily-of-the-Valley"
    ],
    "baseNotes": [
      "Laotian Oud",
      "Thailand Oud",
      "Sandalwood",
      "Musk",
      "Amber",
      "Vanilla"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Winter"
    ],
    "time": "Evening",
    "sprays": "2-3",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Aromatic",
      "Floral"
    ],
    "accords": [
      "Floral",
      "Herbal",
      "Musky",
      "Spicy"
    ]
  },
  {
    "id": "1097",
    "slug": "xerjoff-amber-star",
    "brand": "Xerjoff",
    "name": "Amber Star",
    "gender": "for women and men",
    "topNotes": [
      "Ambergris",
      "Ylang-Ylang",
      "Cedar"
    ],
    "heartNotes": [
      "Myrrh",
      "Guaiac Wood",
      "Gurjan balsam"
    ],
    "baseNotes": [
      "Benzoin",
      "Vanilla",
      "Opoponax",
      "Sandalwood"
    ],
    "seasons": [
      "Ac Venues",
      "Winter",
      "Monsoon Evenings"
    ],
    "time": "Evening",
    "sprays": "2-3 sprays",
    "occasions": [
      "Celebrations",
      "Receptions",
      "Dinner Dates",
      "Formal Events"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Floral",
      "Woody"
    ],
    "accords": [
      "Balsamic",
      "Floral",
      "Sweet",
      "Warm"
    ]
  },
  {
    "id": "1098",
    "slug": "xerjoff-apollonia",
    "brand": "Xerjoff",
    "name": "Apollonia",
    "gender": "for women and men",
    "topNotes": [
      "White Flowers"
    ],
    "heartNotes": [
      "Orris"
    ],
    "baseNotes": [
      "White Musk"
    ],
    "seasons": [
      "Spring",
      "Ac Venues",
      "Mild Winter",
      "Monsoon Evenings"
    ],
    "time": "Day / Evening",
    "sprays": "2-3 sprays",
    "occasions": [
      "Lunches",
      "Smart Casuals",
      "Dates",
      "Office",
      "Pujas"
    ],
    "featured": false,
    "families": [
      "Aromatic"
    ],
    "accords": [
      "Musky"
    ]
  },
  {
    "id": "1099",
    "slug": "xerjoff-bouquet-ideale",
    "brand": "Xerjoff",
    "name": "Bouquet Ideale",
    "gender": "for women",
    "topNotes": [
      "Cinnamon",
      "Nutmeg"
    ],
    "heartNotes": [
      "Guaiac Wood",
      "Sandalwood",
      "Virginia Cedar",
      "Papyrus"
    ],
    "baseNotes": [
      "Vanille",
      "Coumarin",
      "Tobacco Blossom",
      "French labdanum",
      "Musk"
    ],
    "seasons": [
      "Winter"
    ],
    "time": "Evening",
    "sprays": "2-3",
    "occasions": [
      "Date Night",
      "Formal"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Floral",
      "Gourmand"
    ],
    "accords": [
      "Floral",
      "Musky",
      "Spicy",
      "Sweet"
    ]
  },
  {
    "id": "1100",
    "slug": "xerjoff-mefisto",
    "brand": "Xerjoff",
    "name": "Mefisto",
    "gender": "for men",
    "topNotes": [
      "Grapefruit",
      "Bergamot",
      "Amalfi Lemon"
    ],
    "heartNotes": [
      "Lavender",
      "Iris",
      "Rose"
    ],
    "baseNotes": [
      "Musk",
      "Sandalwood",
      "Virginia Cedar",
      "Amber"
    ],
    "seasons": [
      "Spring",
      "Ac Venues",
      "Mild Winter",
      "Monsoon Evenings"
    ],
    "time": "Day / Evening",
    "sprays": "2-3 sprays",
    "occasions": [
      "Lunches",
      "Smart Casuals",
      "Dates",
      "Office",
      "Pujas"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Aromatic",
      "Citrus"
    ],
    "accords": [
      "Floral",
      "Fresh",
      "Herbal",
      "Musky"
    ]
  },
  {
    "id": "1101",
    "slug": "xerjoff-cruz-del-sur",
    "brand": "Xerjoff",
    "name": "Cruz del Sur",
    "gender": "for women and men",
    "topNotes": [
      "Mandarin Orange",
      "Sea Notes"
    ],
    "heartNotes": [
      "Eucalyptus",
      "Rose"
    ],
    "baseNotes": [
      "Musk",
      "Patchouli",
      "Vanilla",
      "Amber"
    ],
    "seasons": [
      "Spring",
      "Ac Venues",
      "Mild Winter",
      "Monsoon Evenings"
    ],
    "time": "Day / Evening",
    "sprays": "2-3 sprays",
    "occasions": [
      "Lunches",
      "Smart Casuals",
      "Dates",
      "Office",
      "Pujas"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Aquatic",
      "Aromatic"
    ],
    "accords": [
      "Earthy",
      "Floral",
      "Fresh",
      "Herbal"
    ]
  },
  {
    "id": "1102",
    "slug": "xerjoff-dama-bianca",
    "brand": "Xerjoff",
    "name": "Dama Bianca",
    "gender": "for women",
    "topNotes": [
      "Kumquat",
      "Lime"
    ],
    "heartNotes": [
      "Violet",
      "Italian Iris",
      "Lilac",
      "Egyptian Jasmine",
      "Lily-of-the-Valley"
    ],
    "baseNotes": [
      "Vanilla",
      "Malt",
      "White Musk",
      "Ambrette (Musk Mallow)",
      "Sandalwood",
      "Cedar"
    ],
    "seasons": [
      "Spring",
      "Summer",
      "Monsoon"
    ],
    "time": "Day",
    "sprays": "3-4 sprays; 2-3 indoors",
    "occasions": [
      "Travel",
      "Casual Daytime Events",
      "College",
      "Office",
      "Brunch"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Citrus",
      "Floral"
    ],
    "accords": [
      "Floral",
      "Fresh",
      "Musky",
      "Powdery"
    ]
  },
  {
    "id": "1103",
    "slug": "xerjoff-erba-gold",
    "brand": "Xerjoff",
    "name": "Erba Gold",
    "gender": "for women and men",
    "topNotes": [
      "Brazilian Orange",
      "Sicilian Lemon",
      "Calabrian bergamot",
      "Ginger"
    ],
    "heartNotes": [
      "Melon",
      "Pear",
      "Green Apple",
      "Cinnamon",
      "Guatemalan Cardamom",
      "Cloves"
    ],
    "baseNotes": [
      "White Musk",
      "Amber",
      "Madagascar Vanilla",
      "Woody Notes"
    ],
    "seasons": [
      "Spring",
      "Summer",
      "Winter"
    ],
    "time": "Day / Evening",
    "sprays": "4-6",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal",
      "Office"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Citrus",
      "Fruity"
    ],
    "accords": [
      "Fresh",
      "Fruity",
      "Green",
      "Musky"
    ]
  },
  {
    "id": "1104",
    "slug": "xerjoff-erba-pura",
    "brand": "Xerjoff",
    "name": "Erba Pura",
    "gender": "for women and men",
    "topNotes": [
      "Sicilian Orange",
      "Calabrian bergamot",
      "Sicilian Lemon"
    ],
    "heartNotes": [
      "Fruits"
    ],
    "baseNotes": [
      "White Musk",
      "Madagascar Vanilla",
      "Amber"
    ],
    "seasons": [
      "Spring",
      "Summer",
      "Winter"
    ],
    "time": "Day / Evening",
    "sprays": "4-6",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal",
      "Office"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Citrus"
    ],
    "accords": [
      "Fresh",
      "Musky",
      "Sweet",
      "Warm"
    ]
  },
  {
    "id": "1105",
    "slug": "xerjoff-fiore-d-ulivo",
    "brand": "Xerjoff",
    "name": "Fiore d Ulivo",
    "gender": "for women",
    "topNotes": [
      "Amalfi Lemon",
      "Lotus",
      "Basil",
      "Ambrette (Musk Mallow)"
    ],
    "heartNotes": [
      "Olive Blossom",
      "Magnolia",
      "Jasmine"
    ],
    "baseNotes": [
      "Musk",
      "Benzoin",
      "Amber"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer"
    ],
    "time": "Day",
    "sprays": "4-6",
    "occasions": [
      "Brunch",
      "Casual Daytime Events",
      "College",
      "Office",
      "Travel"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Aromatic",
      "Citrus"
    ],
    "accords": [
      "Floral",
      "Fresh",
      "Herbal",
      "Musky"
    ]
  },
  {
    "id": "1106",
    "slug": "xerjoff-golden-dallah",
    "brand": "Xerjoff",
    "name": "Golden Dallah",
    "gender": "for women and men",
    "topNotes": [
      "Exotic Spices"
    ],
    "heartNotes": [
      "Incense",
      "Coffee",
      "Cambodian Oud",
      "Amber",
      "Rose"
    ],
    "baseNotes": [
      "Cacao",
      "Hazelnut",
      "Tonka Bean"
    ],
    "seasons": [
      "Ac Venues",
      "Winter",
      "Cool Nights"
    ],
    "time": "Evening",
    "sprays": "3-4 sprays; 2-3 indoors Sprays: 1-2 sprays",
    "occasions": [
      "Receptions",
      "Winter Weddings",
      "Festive Evenings",
      "Formal Dinners"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Floral",
      "Gourmand"
    ],
    "accords": [
      "Balsamic",
      "Floral",
      "Sweet",
      "Warm"
    ]
  },
  {
    "id": "1107",
    "slug": "xerjoff-italica",
    "brand": "Xerjoff",
    "name": "Italica",
    "gender": "for women and men",
    "topNotes": [
      "Almond",
      "Milk",
      "Saffron"
    ],
    "heartNotes": [
      "Vanilla",
      "Toffee"
    ],
    "baseNotes": [
      "Sandalwood",
      "Musk",
      "Cedar"
    ],
    "seasons": [
      "Winter"
    ],
    "time": "Evening",
    "sprays": "2-3",
    "occasions": [
      "Date Night",
      "Formal"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Gourmand",
      "Spicy"
    ],
    "accords": [
      "Musky",
      "Spicy",
      "Sweet",
      "Warm"
    ]
  },
  {
    "id": "1108",
    "slug": "xerjoff-kind-of-blue",
    "brand": "Xerjoff",
    "name": "Kind of Blue",
    "gender": "for women and men",
    "topNotes": [
      "Not separately listed"
    ],
    "heartNotes": [
      "Not separately listed"
    ],
    "baseNotes": [
      "Not separately listed"
    ],
    "seasons": [
      "Ac Venues",
      "Winter",
      "Monsoon Evenings"
    ],
    "time": "Evening",
    "sprays": "2-3 sprays",
    "occasions": [
      "Celebrations",
      "Receptions",
      "Dinner Dates",
      "Formal Events"
    ],
    "featured": false,
    "families": [
      "Aromatic"
    ],
    "accords": [
      "Fresh"
    ]
  },
  {
    "id": "1109",
    "slug": "xerjoff-la-capitale",
    "brand": "Xerjoff",
    "name": "La Capitale",
    "gender": "for women and men",
    "topNotes": [
      "Strawberry",
      "Caramel",
      "Peach",
      "Labdanum"
    ],
    "heartNotes": [
      "Leather",
      "Amber",
      "Saffron",
      "Ginger",
      "Rose"
    ],
    "baseNotes": [
      "Bourbon Vanilla",
      "Benzoin"
    ],
    "seasons": [
      "Spring",
      "Ac Venues",
      "Mild Winter",
      "Monsoon Evenings"
    ],
    "time": "Day / Evening",
    "sprays": "2-3 sprays",
    "occasions": [
      "Lunches",
      "Smart Casuals",
      "Dates",
      "Office",
      "Pujas"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Floral",
      "Fruity"
    ],
    "accords": [
      "Floral",
      "Fruity",
      "Leather",
      "Spicy"
    ]
  },
  {
    "id": "1110",
    "slug": "xerjoff-laylati",
    "brand": "Xerjoff",
    "name": "Laylati",
    "gender": "for women and men",
    "topNotes": [
      "Green Notes"
    ],
    "heartNotes": [
      "Cedar",
      "Patchouli"
    ],
    "baseNotes": [
      "Tobacco",
      "Musk",
      "Vanilla"
    ],
    "seasons": [
      "Ac Venues",
      "Winter",
      "Cool Nights"
    ],
    "time": "Evening",
    "sprays": "1-2 sprays Top: Green Notes \u00e2\u20ac\u00a2 Heart: Cedar and Patchouli \u00e2\u20ac\u00a2 Base: Tobacco, Musk and Vanilla",
    "occasions": [
      "Receptions",
      "Winter Weddings",
      "Festive Evenings",
      "Formal Dinners"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Gourmand",
      "Woody"
    ],
    "accords": [
      "Earthy",
      "Green",
      "Musky",
      "Sweet"
    ]
  },
  {
    "id": "1111",
    "slug": "xerjoff-lira",
    "brand": "Xerjoff",
    "name": "Lira",
    "gender": "for women",
    "topNotes": [
      "Blood Orange",
      "Bergamot",
      "Lavender"
    ],
    "heartNotes": [
      "Cinnamon",
      "Licorice",
      "Jasmine"
    ],
    "baseNotes": [
      "Caramel",
      "Vanille",
      "Musk"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer"
    ],
    "time": "Day",
    "sprays": "4-6",
    "occasions": [
      "Casual",
      "Office"
    ],
    "featured": false,
    "families": [
      "Aromatic",
      "Citrus",
      "Floral"
    ],
    "accords": [
      "Floral",
      "Fresh",
      "Herbal",
      "Musky"
    ]
  },
  {
    "id": "1112",
    "slug": "xerjoff-mefisto-gentiluomo",
    "brand": "Xerjoff",
    "name": "Mefisto Gentiluomo",
    "gender": "for men",
    "topNotes": [
      "Lavender",
      "Grapefruit",
      "Bergamot",
      "Lemon"
    ],
    "heartNotes": [
      "Violet",
      "Iris",
      "Rose"
    ],
    "baseNotes": [
      "Musk",
      "Cedar",
      "Amber"
    ],
    "seasons": [
      "Spring",
      "Ac Venues",
      "Mild Winter",
      "Monsoon Evenings"
    ],
    "time": "Day / Evening",
    "sprays": "2-3 sprays",
    "occasions": [
      "Lunches",
      "Smart Casuals",
      "Dates",
      "Office",
      "Pujas"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Aromatic",
      "Citrus"
    ],
    "accords": [
      "Floral",
      "Fresh",
      "Herbal",
      "Musky"
    ]
  },
  {
    "id": "1113",
    "slug": "xerjoff-more-than-words",
    "brand": "Xerjoff",
    "name": "More Than Words",
    "gender": "for women and men",
    "topNotes": [
      "Not separately listed"
    ],
    "heartNotes": [
      "Not separately listed"
    ],
    "baseNotes": [
      "Not separately listed"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer"
    ],
    "time": "Day",
    "sprays": "3-4",
    "occasions": [
      "Casual",
      "Office"
    ],
    "featured": false,
    "families": [
      "Aromatic"
    ],
    "accords": [
      "Fresh"
    ]
  },
  {
    "id": "1114",
    "slug": "xerjoff-naxos",
    "brand": "Xerjoff",
    "name": "Naxos",
    "gender": "Unisex",
    "topNotes": [
      "Lavender; bergamot; lemon"
    ],
    "heartNotes": [
      "Honey; cinnamon; cashmeran; jasmine sambac"
    ],
    "baseNotes": [
      "Tobacco leaf; vanilla; tonka bean"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer",
      "Winter"
    ],
    "time": "Day / Evening",
    "sprays": "4-6",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal",
      "Office"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Aromatic",
      "Citrus"
    ],
    "accords": [
      "Floral",
      "Fresh",
      "Herbal",
      "Spicy"
    ]
  },
  {
    "id": "1115",
    "slug": "xerjoff-nio",
    "brand": "Xerjoff",
    "name": "Nio",
    "gender": "for men",
    "topNotes": [
      "Bergamot",
      "Green Notes",
      "Neroli"
    ],
    "heartNotes": [
      "Cardamom",
      "Pink Pepper",
      "Jasmine",
      "Nutmeg"
    ],
    "baseNotes": [
      "Vetyver",
      "Virginia Cedar",
      "Guaiac Wood",
      "Patchouli",
      "Amber"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer",
      "Winter"
    ],
    "time": "Day / Evening",
    "sprays": "4-6",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal",
      "Office"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Citrus",
      "Floral"
    ],
    "accords": [
      "Earthy",
      "Floral",
      "Fresh",
      "Green"
    ]
  },
  {
    "id": "1116",
    "slug": "xerjoff-opera",
    "brand": "Xerjoff",
    "name": "Opera",
    "gender": "for women and men",
    "topNotes": [
      "Fruits",
      "Turkish Rose"
    ],
    "heartNotes": [
      "Ylang-Ylang",
      "Nutmeg",
      "Leather",
      "Amber"
    ],
    "baseNotes": [
      "Vanilla",
      "Patchouli",
      "Musk",
      "Virginia Cedar",
      "Haitian Vetiver"
    ],
    "seasons": [
      "Spring",
      "Summer",
      "Monsoon"
    ],
    "time": "Day",
    "sprays": "3-4 sprays; 2-3 indoors",
    "occasions": [
      "Travel",
      "Casual Daytime Events",
      "College",
      "Office",
      "Brunch"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Floral",
      "Leather"
    ],
    "accords": [
      "Earthy",
      "Floral",
      "Leather",
      "Musky"
    ]
  },
  {
    "id": "1117",
    "slug": "xerjoff-ouverture",
    "brand": "Xerjoff",
    "name": "Ouverture",
    "gender": "for women and men",
    "topNotes": [
      "Fig Leaf",
      "Orange",
      "Magnolia"
    ],
    "heartNotes": [
      "Cinnamon",
      "Ylang- Ylang",
      "Indian Jasmine",
      "Bulgarian Rose"
    ],
    "baseNotes": [
      "Sandalwood",
      "Vanilla",
      "Amber",
      "Cashmere Wood",
      "Incense"
    ],
    "seasons": [
      "Spring",
      "Summer",
      "Winter"
    ],
    "time": "Day / Evening",
    "sprays": "4-6",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal",
      "Office"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Citrus",
      "Floral"
    ],
    "accords": [
      "Balsamic",
      "Floral",
      "Fresh",
      "Fruity"
    ]
  },
  {
    "id": "1118",
    "slug": "xerjoff-pikovaya-dama",
    "brand": "Xerjoff",
    "name": "Pikovaya Dama",
    "gender": "for women and men",
    "topNotes": [
      "Aldehydes",
      "Neroli",
      "Bergamot",
      "Lemon",
      "Rose"
    ],
    "heartNotes": [
      "Iris",
      "Incense",
      "Cedar",
      "Nutmeg",
      "Coriander"
    ],
    "baseNotes": [
      "Musk",
      "Vanilla",
      "Sandalwood",
      "Patchouli"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer",
      "Winter"
    ],
    "time": "Day / Evening",
    "sprays": "4-6",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal",
      "Office"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Citrus",
      "Floral"
    ],
    "accords": [
      "Balsamic",
      "Earthy",
      "Floral",
      "Fresh"
    ]
  },
  {
    "id": "1119",
    "slug": "xerjoff-richwood",
    "brand": "Xerjoff",
    "name": "Richwood",
    "gender": "for women and men",
    "topNotes": [
      "Tangerine",
      "Bergamot",
      "Grapefruit"
    ],
    "heartNotes": [
      "Damask Rose",
      "Black Currant"
    ],
    "baseNotes": [
      "Patchouli",
      "Sandalwood",
      "Vanilla",
      "Labdanum",
      "Musk"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer",
      "Winter"
    ],
    "time": "Day / Evening",
    "sprays": "4-6",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal",
      "Office"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Citrus",
      "Floral"
    ],
    "accords": [
      "Earthy",
      "Floral",
      "Fresh",
      "Fruity"
    ]
  },
  {
    "id": "1120",
    "slug": "xerjoff-soprano",
    "brand": "Xerjoff",
    "name": "Soprano",
    "gender": "for women and men",
    "topNotes": [
      "Fruits",
      "Litchi",
      "Freesia",
      "Calabrian bergamot"
    ],
    "heartNotes": [
      "Bulgarian Rose",
      "Milk",
      "Osmanthus",
      "Egyptian Jasmine"
    ],
    "baseNotes": [
      "Agarwood (Oud)",
      "Patchouli",
      "Leather"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer",
      "Winter"
    ],
    "time": "Day / Evening",
    "sprays": "4-6",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal",
      "Office"
    ],
    "featured": false,
    "families": [
      "Citrus",
      "Floral",
      "Leather"
    ],
    "accords": [
      "Earthy",
      "Floral",
      "Fresh",
      "Leather"
    ]
  },
  {
    "id": "1121",
    "slug": "xerjoff-star-musk",
    "brand": "Xerjoff",
    "name": "Star Musk",
    "gender": "for women and men",
    "topNotes": [
      "Floral Notes",
      "Amber",
      "Mandarin Orange"
    ],
    "heartNotes": [
      "Iris",
      "Sandalwood",
      "Patchouli",
      "Carnation",
      "Cinnamon",
      "Vetiver"
    ],
    "baseNotes": [
      "Musk",
      "Vanilla",
      "Benzoin",
      "Opoponax",
      "Sandalwood"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer",
      "Winter"
    ],
    "time": "Day / Evening",
    "sprays": "4-6",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal",
      "Office"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Citrus",
      "Floral"
    ],
    "accords": [
      "Earthy",
      "Floral",
      "Fresh",
      "Musky"
    ]
  },
  {
    "id": "1122",
    "slug": "xerjoff-starlight",
    "brand": "Xerjoff",
    "name": "Starlight",
    "gender": "for women and men",
    "topNotes": [
      "Cardamom",
      "Bergamot"
    ],
    "heartNotes": [
      "Cinnamon",
      "Almond",
      "Cloves"
    ],
    "baseNotes": [
      "Amber",
      "Cedar"
    ],
    "seasons": [
      "Ac Venues",
      "Monsoon Evenings",
      "Winter"
    ],
    "time": "Evening",
    "sprays": "4-6",
    "occasions": [
      "Celebrations",
      "Dinner Dates",
      "Formal Events",
      "Receptions"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Citrus",
      "Gourmand"
    ],
    "accords": [
      "Fresh",
      "Spicy",
      "Sweet",
      "Warm"
    ]
  },
  {
    "id": "1123",
    "slug": "xerjoff-tony-iommi-monkey-special",
    "brand": "Xerjoff",
    "name": "Tony Iommi Monkey Special",
    "gender": "for women and men",
    "topNotes": [
      "Rum",
      "Passionfruit",
      "Bergamot",
      "Geranium"
    ],
    "heartNotes": [
      "Singapore Patchouli",
      "Cinnamon",
      "Leather",
      "Bulgarian Rose"
    ],
    "baseNotes": [
      "Caramel",
      "Vanilla",
      "Tonka Bean",
      "Sandalwood",
      "Labdanum",
      "Ambergris",
      "Musk"
    ],
    "seasons": [
      "Ac Venues",
      "Cool Nights",
      "Winter"
    ],
    "time": "Evening",
    "sprays": "4-6",
    "occasions": [
      "Festive Evenings",
      "Formal Dinners",
      "Receptions",
      "Winter Weddings"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Citrus",
      "Floral"
    ],
    "accords": [
      "Earthy",
      "Floral",
      "Fresh",
      "Fruity"
    ]
  },
  {
    "id": "1124",
    "slug": "when-to-wear-torino21",
    "brand": "When To Wear",
    "name": "Torino21",
    "gender": "for women and men",
    "topNotes": [
      "Mint",
      "Lemon",
      "Basil",
      "Thyme"
    ],
    "heartNotes": [
      "Black Currant",
      "Rosemary",
      "Lavender",
      "Jasmine"
    ],
    "baseNotes": [
      "Lemon Verbena",
      "Musk"
    ],
    "seasons": [
      "Spring",
      "Summer",
      "Monsoon"
    ],
    "time": "Day",
    "sprays": "1-2 sprays Sprays: 3-4 sprays; 2-3 indoors",
    "occasions": [
      "Travel",
      "Casual Daytime Events",
      "College",
      "Office",
      "Brunch"
    ],
    "featured": false,
    "families": [
      "Aromatic",
      "Citrus",
      "Floral"
    ],
    "accords": [
      "Floral",
      "Fresh",
      "Fruity",
      "Herbal"
    ]
  },
  {
    "id": "1125",
    "slug": "xerjoff-torino22",
    "brand": "Xerjoff",
    "name": "Torino22",
    "gender": "for women and men",
    "topNotes": [
      "Eucalyptus",
      "Saffron",
      "Bergamot"
    ],
    "heartNotes": [
      "Mate",
      "Clary Sage",
      "Guaiac Wood"
    ],
    "baseNotes": [
      "Dry Wood",
      "Musk"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer",
      "Winter"
    ],
    "time": "Day / Evening",
    "sprays": "4-6",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal",
      "Office"
    ],
    "featured": false,
    "families": [
      "Aromatic",
      "Citrus",
      "Spicy"
    ],
    "accords": [
      "Fresh",
      "Herbal",
      "Musky",
      "Spicy"
    ]
  },
  {
    "id": "1126",
    "slug": "xerjoff-torino23",
    "brand": "Xerjoff",
    "name": "Torino23",
    "gender": "for women and men",
    "topNotes": [
      "Bergamot",
      "Rose",
      "Cardamom",
      "Nutmeg"
    ],
    "heartNotes": [
      "Tuberose",
      "Neroli",
      "Ylang-Ylang",
      "Jasmine"
    ],
    "baseNotes": [
      "Cashmere Wood",
      "Musk",
      "Amber",
      "Cedarwood",
      "Patchouli"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer"
    ],
    "time": "Day",
    "sprays": "4-6",
    "occasions": [
      "Brunch",
      "Casual Daytime Events",
      "College",
      "Office",
      "Travel"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Citrus",
      "Floral"
    ],
    "accords": [
      "Earthy",
      "Floral",
      "Fresh",
      "Musky"
    ]
  },
  {
    "id": "1127",
    "slug": "xerjoff-torino",
    "brand": "Xerjoff",
    "name": "Torino",
    "gender": "for women and men",
    "topNotes": [
      "Brazilian Orange"
    ],
    "heartNotes": [
      "Black Pepper",
      "Neroli"
    ],
    "baseNotes": [
      "Guaiac Wood",
      "Bourbon Vanilla",
      "Haitian Vetiver",
      "Caramel"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer",
      "Winter"
    ],
    "time": "Day / Evening",
    "sprays": "4-6",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal",
      "Office"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Citrus",
      "Gourmand"
    ],
    "accords": [
      "Earthy",
      "Fresh",
      "Spicy",
      "Sweet"
    ]
  },
  {
    "id": "1128",
    "slug": "xerjoff-uden",
    "brand": "Xerjoff",
    "name": "Uden",
    "gender": "for men",
    "topNotes": [
      "Citruses",
      "Lemon",
      "Grapefruit"
    ],
    "heartNotes": [
      "Rum",
      "Guaiac Wood",
      "Sandalwood",
      "Rose"
    ],
    "baseNotes": [
      "Vanilla",
      "Coffee",
      "Musk",
      "Ambergris"
    ],
    "seasons": [
      "Spring",
      "Summer",
      "Winter"
    ],
    "time": "Day / Evening",
    "sprays": "4-6",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal",
      "Office"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Citrus",
      "Floral"
    ],
    "accords": [
      "Floral",
      "Fresh",
      "Musky",
      "Sweet"
    ]
  },
  {
    "id": "1129",
    "slug": "xerjoff-via-cavour-i",
    "brand": "Xerjoff",
    "name": "Via Cavour I",
    "gender": "for women and men",
    "topNotes": [
      "Quince",
      "White Peach"
    ],
    "heartNotes": [
      "Dark Chocolate",
      "Red Berries",
      "Moroccan Rose",
      "Rose",
      "Patchouli"
    ],
    "baseNotes": [
      "Caramel",
      "Agarwood (Oud)",
      "Madagascar Vanilla",
      "Amber",
      "Cashmeran",
      "Musk"
    ],
    "seasons": [
      "Ac Venues",
      "Winter",
      "Cool Nights"
    ],
    "time": "Evening",
    "sprays": "1-2 sprays",
    "occasions": [
      "Receptions",
      "Winter Weddings",
      "Festive Evenings",
      "Formal Dinners"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Floral",
      "Fruity"
    ],
    "accords": [
      "Earthy",
      "Floral",
      "Fruity",
      "Musky"
    ]
  },
  {
    "id": "1130",
    "slug": "xerjoff-warda-al-oud",
    "brand": "Xerjoff",
    "name": "Warda Al Oud",
    "gender": "for women and men",
    "topNotes": [
      "Bergamot"
    ],
    "heartNotes": [
      "Bulgarian Rose",
      "Damask Rose",
      "Osmanthus",
      "Jasmine"
    ],
    "baseNotes": [
      "Musk",
      "Agarwood (Oud)",
      "Amber",
      "Vanilla"
    ],
    "seasons": [
      "Spring",
      "Ac Venues",
      "Mild Winter",
      "Monsoon Evenings"
    ],
    "time": "Day / Evening",
    "sprays": "2-3 sprays",
    "occasions": [
      "Lunches",
      "Smart Casuals",
      "Dates",
      "Office",
      "Pujas"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Citrus",
      "Floral"
    ],
    "accords": [
      "Floral",
      "Fresh",
      "Musky",
      "Sweet"
    ]
  },
  {
    "id": "1131",
    "slug": "yves-saint-laurent-babycat",
    "brand": "Yves Saint Laurent",
    "name": "Babycat",
    "gender": "for women and men",
    "topNotes": [
      "Black",
      "Pink Pepper",
      "Black Pepper",
      "elemi",
      "Pink Pepper"
    ],
    "heartNotes": [
      "Olibanum",
      "Saffron"
    ],
    "baseNotes": [
      "Bourbon Vanilla",
      "Suede",
      "Cedar"
    ],
    "seasons": [
      "Winter"
    ],
    "time": "Evening",
    "sprays": "2-3",
    "occasions": [
      "Date Night",
      "Formal"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Leather",
      "Spicy"
    ],
    "accords": [
      "Leather",
      "Spicy",
      "Sweet",
      "Warm"
    ]
  },
  {
    "id": "1132",
    "slug": "yves-saint-laurent-black-opium",
    "brand": "Yves Saint Laurent",
    "name": "Black Opium",
    "gender": "for women",
    "topNotes": [
      "Pear",
      "Pink Pepper",
      "Orange Blossom"
    ],
    "heartNotes": [
      "Coffee",
      "Jasmine",
      "Bitter Almond",
      "Licorice"
    ],
    "baseNotes": [
      "Vanilla",
      "Patchouli",
      "Cashmere Wood",
      "Cedar"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer",
      "Winter"
    ],
    "time": "Day / Evening",
    "sprays": "4-6",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal",
      "Office"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Citrus",
      "Floral"
    ],
    "accords": [
      "Earthy",
      "Floral",
      "Fresh",
      "Fruity"
    ]
  },
  {
    "id": "1133",
    "slug": "yves-saint-laurent-black-opium-le-parfum",
    "brand": "Yves Saint Laurent",
    "name": "Black Opium Le Parfum",
    "gender": "for women",
    "topNotes": [
      "Cinnamon",
      "Pear",
      "Green Mandarin"
    ],
    "heartNotes": [
      "Solar Notes",
      "Jasmine Sambac",
      "Orange Blossom"
    ],
    "baseNotes": [
      "Madagascar Vanilla",
      "Bourbon Vanilla",
      "Vanilla Absolute",
      "Coffee",
      "Patchouli",
      "Vanilla Orchid"
    ],
    "seasons": [
      "Spring",
      "Ac Venues",
      "Mild Winter",
      "Monsoon Evenings"
    ],
    "time": "Day / Evening",
    "sprays": "2-3 sprays",
    "occasions": [
      "Lunches",
      "Smart Casuals",
      "Dates",
      "Office",
      "Pujas"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Citrus",
      "Floral"
    ],
    "accords": [
      "Earthy",
      "Floral",
      "Fresh",
      "Fruity"
    ]
  },
  {
    "id": "1134",
    "slug": "yves-saint-laurent-body-kouros",
    "brand": "Yves Saint Laurent",
    "name": "Body Kouros",
    "gender": "for men",
    "topNotes": [
      "Eucalyptus",
      "Incense"
    ],
    "heartNotes": [
      "Chinese Cedar",
      "Clary Sage"
    ],
    "baseNotes": [
      "Benzoin"
    ],
    "seasons": [
      "Ac Venues",
      "Winter",
      "Cool Nights"
    ],
    "time": "Evening",
    "sprays": "1-2 sprays",
    "occasions": [
      "Receptions",
      "Winter Weddings",
      "Festive Evenings",
      "Formal Dinners"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Aromatic",
      "Woody"
    ],
    "accords": [
      "Balsamic",
      "Herbal",
      "Warm",
      "Woody"
    ]
  },
  {
    "id": "1135",
    "slug": "yves-saint-laurent-caftan",
    "brand": "Yves Saint Laurent",
    "name": "Caftan",
    "gender": "for women and men",
    "topNotes": [
      "Pink Pepper",
      "Tangerine",
      "Bergamot"
    ],
    "heartNotes": [
      "Benzoin",
      "Olibanum",
      "Styrax"
    ],
    "baseNotes": [
      "Labdanum",
      "Musk"
    ],
    "seasons": [
      "Spring",
      "Summer",
      "Winter"
    ],
    "time": "Day / Evening",
    "sprays": "4-6",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal",
      "Office"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Citrus",
      "Spicy"
    ],
    "accords": [
      "Fresh",
      "Musky",
      "Spicy",
      "Warm"
    ]
  },
  {
    "id": "1136",
    "slug": "yves-saint-laurent-exquisite-musk",
    "brand": "Yves Saint Laurent",
    "name": "Exquisite Musk",
    "gender": "for women and men",
    "topNotes": [
      "Ginger"
    ],
    "heartNotes": [
      "Rose",
      "Nutmeg",
      "Cinnamon"
    ],
    "baseNotes": [
      "Benzoin",
      "Musk",
      "Patchouli",
      "Labdanum",
      "Ambergris",
      "Agarwood (Oud)"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Winter"
    ],
    "time": "Evening",
    "sprays": "2-3",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Floral",
      "Spicy"
    ],
    "accords": [
      "Earthy",
      "Floral",
      "Musky",
      "Spicy"
    ]
  },
  {
    "id": "1137",
    "slug": "yves-saint-laurent-in-love-again",
    "brand": "Yves Saint Laurent",
    "name": "In Love Again",
    "gender": "for women",
    "topNotes": [
      "Grapefruit",
      "Black Currant",
      "Cassia",
      "Blueberry",
      "Vodka",
      "Apple"
    ],
    "heartNotes": [
      "Grapefruit",
      "Rose",
      "Water Lily"
    ],
    "baseNotes": [
      "Tomato",
      "Blackberry",
      "Musk",
      "Sandalwood"
    ],
    "seasons": [
      "Spring",
      "Summer",
      "Monsoon"
    ],
    "time": "Day",
    "sprays": "3-4 sprays; 2-3 indoors",
    "occasions": [
      "Travel",
      "Casual Daytime Events",
      "College",
      "Office",
      "Brunch"
    ],
    "featured": false,
    "families": [
      "Aquatic",
      "Citrus",
      "Floral"
    ],
    "accords": [
      "Floral",
      "Fresh",
      "Fruity",
      "Marine"
    ]
  },
  {
    "id": "1138",
    "slug": "the-dua-brand-jazz",
    "brand": "The Dua Brand",
    "name": "Jazz",
    "gender": "for women and men",
    "topNotes": [
      "Not separately listed"
    ],
    "heartNotes": [
      "Not separately listed"
    ],
    "baseNotes": [
      "Not separately listed"
    ],
    "seasons": [
      "Spring",
      "Ac Venues",
      "Mild Winter",
      "Monsoon Evenings"
    ],
    "time": "Day / Evening",
    "sprays": "2-3 sprays",
    "occasions": [
      "Lunches",
      "Smart Casuals",
      "Dates",
      "Office",
      "Pujas"
    ],
    "featured": false,
    "families": [
      "Aromatic"
    ],
    "accords": [
      "Fresh"
    ]
  },
  {
    "id": "1139",
    "slug": "yves-saint-laurent-electrique",
    "brand": "Yves Saint Laurent",
    "name": "Electrique",
    "gender": "for men",
    "topNotes": [
      "Cardamom",
      "Ginger",
      "Bergamot"
    ],
    "heartNotes": [
      "Lavender",
      "Geranium"
    ],
    "baseNotes": [
      "Cedar",
      "Vetiver"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer"
    ],
    "time": "Day",
    "sprays": "4-6",
    "occasions": [
      "Brunch",
      "Casual Daytime Events",
      "College",
      "Office",
      "Travel"
    ],
    "featured": false,
    "families": [
      "Aromatic",
      "Citrus",
      "Floral"
    ],
    "accords": [
      "Earthy",
      "Floral",
      "Fresh",
      "Herbal"
    ]
  },
  {
    "id": "1140",
    "slug": "when-to-wear-la-nuit-de-l-homme",
    "brand": "When To Wear",
    "name": "La Nuit de l Homme",
    "gender": "for men",
    "topNotes": [
      "Cardamom"
    ],
    "heartNotes": [
      "Lavender",
      "Virginia Cedar",
      "Bergamot"
    ],
    "baseNotes": [
      "Vetiver",
      "Caraway"
    ],
    "seasons": [
      "Spring",
      "Summer",
      "Monsoon"
    ],
    "time": "Day",
    "sprays": "3-4 sprays; 2-3 indoors Sprays: 3-4 sprays; 2-3 indoors",
    "occasions": [
      "Travel",
      "Casual Daytime Events",
      "College",
      "Office",
      "Brunch"
    ],
    "featured": false,
    "families": [
      "Aromatic",
      "Citrus",
      "Spicy"
    ],
    "accords": [
      "Earthy",
      "Fresh",
      "Herbal",
      "Spicy"
    ]
  },
  {
    "id": "1141",
    "slug": "zara-il-homme",
    "brand": "Zara",
    "name": "Il Homme",
    "gender": "for men",
    "topNotes": [
      "Orange",
      "Bergamot",
      "Neroli"
    ],
    "heartNotes": [
      "Cardamom",
      "Cinnamon"
    ],
    "baseNotes": [
      "Sandalwood",
      "Amber",
      "Musk",
      "Vanille",
      "Tonka Bean"
    ],
    "seasons": [
      "Spring",
      "Ac Venues",
      "Mild Winter",
      "Monsoon Evenings"
    ],
    "time": "Day / Evening",
    "sprays": "2-3 sprays",
    "occasions": [
      "Lunches",
      "Smart Casuals",
      "Dates",
      "Office",
      "Pujas"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Citrus",
      "Spicy"
    ],
    "accords": [
      "Fresh",
      "Musky",
      "Spicy",
      "Sweet"
    ]
  },
  {
    "id": "1142",
    "slug": "dilis-parfum-libre",
    "brand": "Dilis Parfum",
    "name": "Libre",
    "gender": "for women",
    "topNotes": [
      "Bergamot",
      "Orange Blossom"
    ],
    "heartNotes": [
      "Tuberose",
      "Jasmine"
    ],
    "baseNotes": [
      "Vanilla",
      "Musk",
      "Cedar"
    ],
    "seasons": [
      "Spring",
      "Summer",
      "Monsoon"
    ],
    "time": "Day",
    "sprays": "3-4 sprays; 2-3 indoors",
    "occasions": [
      "Travel",
      "Casual Daytime Events",
      "College",
      "Office",
      "Brunch"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Citrus",
      "Floral"
    ],
    "accords": [
      "Floral",
      "Fresh",
      "Musky",
      "Sweet"
    ]
  },
  {
    "id": "1143",
    "slug": "yves-saint-laurent-la-nuit-de-l-homme-l-intense",
    "brand": "Yves Saint Laurent",
    "name": "La Nuit de L Homme L Intense",
    "gender": "for men",
    "topNotes": [
      "Iris",
      "Violet"
    ],
    "heartNotes": [
      "Vanilla",
      "Sage"
    ],
    "baseNotes": [
      "Tonka Bean",
      "Patchouli"
    ],
    "seasons": [
      "Ac Venues",
      "Winter",
      "Monsoon Evenings"
    ],
    "time": "Evening",
    "sprays": "2-3 sprays",
    "occasions": [
      "Celebrations",
      "Receptions",
      "Dinner Dates",
      "Formal Events"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Aromatic",
      "Floral"
    ],
    "accords": [
      "Earthy",
      "Floral",
      "Herbal",
      "Powdery"
    ]
  },
  {
    "id": "1144",
    "slug": "yves-saint-laurent-libre-intense",
    "brand": "Yves Saint Laurent",
    "name": "Libre Intense",
    "gender": "for women",
    "topNotes": [
      "Lavender",
      "Mandarin Orange",
      "Bergamot"
    ],
    "heartNotes": [
      "Lavender",
      "Tunisian Orange Blossom",
      "Jasmine Sambac",
      "Orchid"
    ],
    "baseNotes": [
      "Madagascar Vanilla",
      "Tonka Bean",
      "Ambergris",
      "Vetiver"
    ],
    "seasons": [
      "Spring",
      "Ac Venues",
      "Mild Winter",
      "Monsoon Evenings"
    ],
    "time": "Day / Evening",
    "sprays": "2-3 sprays",
    "occasions": [
      "Lunches",
      "Smart Casuals",
      "Dates",
      "Office",
      "Pujas"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Aromatic",
      "Citrus"
    ],
    "accords": [
      "Earthy",
      "Floral",
      "Fresh",
      "Herbal"
    ]
  },
  {
    "id": "1145",
    "slug": "yves-saint-laurent-m7",
    "brand": "Yves Saint Laurent",
    "name": "M7",
    "gender": "for men",
    "topNotes": [
      "Rosemary",
      "Mandarin Orange",
      "Bergamot"
    ],
    "heartNotes": [
      "Agarwood (Oud)",
      "Vetiver"
    ],
    "baseNotes": [
      "Amber",
      "Musk"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer",
      "Winter"
    ],
    "time": "Day / Evening",
    "sprays": "4-6",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal",
      "Office"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Aromatic",
      "Citrus"
    ],
    "accords": [
      "Earthy",
      "Floral",
      "Fresh",
      "Herbal"
    ]
  },
  {
    "id": "1146",
    "slug": "archive-la-collection-m7-oud-absolu",
    "brand": "Archive",
    "name": "La Collection M7 Oud Absolu",
    "gender": "for men",
    "topNotes": [
      "Mandarin Orange"
    ],
    "heartNotes": [
      "Patchouli"
    ],
    "baseNotes": [
      "Agarwood (Oud)",
      "Myrhh",
      "French labdanum"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer",
      "Winter"
    ],
    "time": "Day / Evening",
    "sprays": "4-6",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal",
      "Office"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Citrus",
      "Woody"
    ],
    "accords": [
      "Earthy",
      "Fresh",
      "Warm",
      "Woody"
    ]
  },
  {
    "id": "1147",
    "slug": "yves-saint-laurent-mon-paris",
    "brand": "Yves Saint Laurent",
    "name": "Mon Paris",
    "gender": "for women",
    "topNotes": [
      "Strawberry",
      "Raspberry",
      "Pear",
      "Orange",
      "Tangerine",
      "Calabrian bergamot",
      "Calone"
    ],
    "heartNotes": [
      "Peony",
      "Jasmine Sambac",
      "Chinese Jasmine",
      "Datura",
      "Orange Blossom"
    ],
    "baseNotes": [
      "Indonesian Patchouli Leaf",
      "Patchouli",
      "White Musk",
      "Vanila",
      "Ambroxan",
      "Moss"
    ],
    "seasons": [
      "Spring",
      "Summer",
      "Monsoon"
    ],
    "time": "Day",
    "sprays": "3-4 sprays; 2-3 indoors",
    "occasions": [
      "Travel",
      "Casual Daytime Events",
      "College",
      "Office",
      "Brunch"
    ],
    "featured": false,
    "families": [
      "Aquatic",
      "Citrus",
      "Floral"
    ],
    "accords": [
      "Earthy",
      "Floral",
      "Fresh",
      "Fruity"
    ]
  },
  {
    "id": "1148",
    "slug": "yves-saint-laurent-men",
    "brand": "Yves Saint Laurent",
    "name": "Men",
    "gender": "Unisex",
    "topNotes": [
      "Calabrian bergamot"
    ],
    "heartNotes": [
      "Tunisian orange blossom"
    ],
    "baseNotes": [
      "Ambrofix; patchouli"
    ],
    "seasons": [
      "Spring",
      "Ac Venues",
      "Mild Winter",
      "Monsoon Evenings"
    ],
    "time": "Day / Evening",
    "sprays": "2-3 sprays",
    "occasions": [
      "Lunches",
      "Smart Casuals",
      "Dates",
      "Office",
      "Pujas"
    ],
    "featured": false,
    "families": [
      "Citrus",
      "Floral",
      "Woody"
    ],
    "accords": [
      "Earthy",
      "Floral",
      "Fresh",
      "Woody"
    ]
  },
  {
    "id": "1149",
    "slug": "yves-saint-laurent-nu",
    "brand": "Yves Saint Laurent",
    "name": "Nu",
    "gender": "for women",
    "topNotes": [
      "Cardamom",
      "Bergamot"
    ],
    "heartNotes": [
      "Black Pepper",
      "Incense",
      "Orchid",
      "Jasmine"
    ],
    "baseNotes": [
      "Sandalwood",
      "Vetiver",
      "Musk",
      "Frankincense"
    ],
    "seasons": [
      "Spring",
      "Ac Venues",
      "Mild Winter",
      "Monsoon Evenings"
    ],
    "time": "Day / Evening",
    "sprays": "2-3 sprays Paris Women",
    "occasions": [
      "Lunches",
      "Smart Casuals",
      "Dates",
      "Office",
      "Pujas"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Citrus",
      "Floral"
    ],
    "accords": [
      "Balsamic",
      "Earthy",
      "Floral",
      "Fresh"
    ]
  },
  {
    "id": "1150",
    "slug": "when-to-wear-women",
    "brand": "When To Wear",
    "name": "Women",
    "gender": "Unisex",
    "topNotes": [
      "Mimosa; orange blossom; green notes; rose; cassia; hawthorn; bergamot; violet leaf"
    ],
    "heartNotes": [
      "Rose; violet; lily; lime blossom; ylang-ylang; jasmine; iris"
    ],
    "baseNotes": [
      "Iris; musk; heliotrope; sandalwood; amber; cedar"
    ],
    "seasons": [
      "Spring",
      "Summer",
      "Monsoon"
    ],
    "time": "Day",
    "sprays": "3-4 sprays; 2-3 indoors",
    "occasions": [
      "Travel",
      "Casual Daytime Events",
      "College",
      "Office",
      "Brunch"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Citrus",
      "Floral"
    ],
    "accords": [
      "Floral",
      "Fresh",
      "Green",
      "Musky"
    ]
  },
  {
    "id": "1151",
    "slug": "yves-saint-laurent-rive-gauche",
    "brand": "Yves Saint Laurent",
    "name": "Rive Gauche",
    "gender": "for women",
    "topNotes": [
      "Aldehydes",
      "Green Notes",
      "Honeysuckle",
      "Bergamot",
      "Peach",
      "Lemon"
    ],
    "heartNotes": [
      "Rose",
      "Iris",
      "Geranium",
      "Ylang-Ylang",
      "Lily-of-the- Valley",
      "Jasmine",
      "Magnolia",
      "Gardenia"
    ],
    "baseNotes": [
      "Oakmoss",
      "Tahitian Vetiver",
      "Musk",
      "Sandalwood",
      "Tonka Bean",
      "Amber"
    ],
    "seasons": [
      "Spring",
      "Ac Venues",
      "Mild Winter",
      "Monsoon Evenings"
    ],
    "time": "Day / Evening",
    "sprays": "2-3 sprays",
    "occasions": [
      "Lunches",
      "Smart Casuals",
      "Dates",
      "Office",
      "Pujas"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Citrus",
      "Floral"
    ],
    "accords": [
      "Earthy",
      "Floral",
      "Fresh",
      "Fruity"
    ]
  },
  {
    "id": "1152",
    "slug": "yves-saint-laurent-supreme-bouquet",
    "brand": "Yves Saint Laurent",
    "name": "Supreme Bouquet",
    "gender": "for women and men",
    "topNotes": [
      "Fruity Notes",
      "Pear",
      "Pink Pepper"
    ],
    "heartNotes": [
      "Tuberose",
      "Ylang-Ylang",
      "Jasmine"
    ],
    "baseNotes": [
      "Amber",
      "Patchouli",
      "Musk"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Winter"
    ],
    "time": "Evening",
    "sprays": "2-3",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Floral",
      "Fruity"
    ],
    "accords": [
      "Earthy",
      "Floral",
      "Fruity",
      "Musky"
    ]
  },
  {
    "id": "1153",
    "slug": "yves-saint-laurent-splendid-wood",
    "brand": "Yves Saint Laurent",
    "name": "Splendid Wood",
    "gender": "for women and men",
    "topNotes": [
      "Incense",
      "Cardamom"
    ],
    "heartNotes": [
      "Oriental Woodsy notes",
      "Jasmine Sambac"
    ],
    "baseNotes": [
      "Agarwood (Oud)",
      "Cypriol Oil or Nagarmotha",
      "Cedar"
    ],
    "seasons": [
      "Ac Venues",
      "Winter",
      "Cool Nights"
    ],
    "time": "Evening",
    "sprays": "1-2 sprays",
    "occasions": [
      "Receptions",
      "Winter Weddings",
      "Festive Evenings",
      "Formal Dinners"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Floral",
      "Spicy"
    ],
    "accords": [
      "Balsamic",
      "Floral",
      "Spicy",
      "Warm"
    ]
  },
  {
    "id": "1154",
    "slug": "ralph-lauren-tuxedo",
    "brand": "Ralph Lauren",
    "name": "Tuxedo",
    "gender": "for women",
    "topNotes": [
      "Ylang-Ylang",
      "Tarragon",
      "Bergamot",
      "Amalfi Lemon"
    ],
    "heartNotes": [
      "Peach",
      "Jasmine",
      "Narcissus",
      "Lily-of-the-Valley",
      "Clove",
      "Coriander",
      "Rose",
      "Gardenia"
    ],
    "baseNotes": [
      "Benzoin",
      "French labdanum",
      "oak moss",
      "Sandalwood",
      "Amber",
      "Vetiver",
      "Musk"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer",
      "Winter"
    ],
    "time": "Day / Evening",
    "sprays": "4-6",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal",
      "Office"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Citrus",
      "Floral"
    ],
    "accords": [
      "Earthy",
      "Floral",
      "Fresh",
      "Fruity"
    ]
  },
  {
    "id": "1155",
    "slug": "yves-saint-laurent-men-1155",
    "brand": "Yves Saint Laurent",
    "name": "Men",
    "gender": "Unisex",
    "topNotes": [
      "Apple; ginger; bergamot"
    ],
    "heartNotes": [
      "Sage; juniper berries; geranium"
    ],
    "baseNotes": [
      "Amberwood; tonka bean; cedar; vetiver; olibanum"
    ],
    "seasons": [
      "Spring",
      "Ac Venues",
      "Mild Winter",
      "Monsoon Evenings"
    ],
    "time": "Day / Evening",
    "sprays": "2-3 sprays",
    "occasions": [
      "Lunches",
      "Smart Casuals",
      "Dates",
      "Office",
      "Pujas"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Aromatic",
      "Citrus"
    ],
    "accords": [
      "Earthy",
      "Floral",
      "Fresh",
      "Fruity"
    ]
  },
  {
    "id": "1156",
    "slug": "zara-intense",
    "brand": "Zara",
    "name": "Intense",
    "gender": "for women",
    "topNotes": [
      "Bergamot",
      "Mandarin Orange"
    ],
    "heartNotes": [
      "Marigold",
      "Jasmine"
    ],
    "baseNotes": [
      "Vanilla"
    ],
    "seasons": [
      "Spring",
      "Summer",
      "Monsoon"
    ],
    "time": "Day",
    "sprays": "3-4 sprays; 2-3 indoors",
    "occasions": [
      "Travel",
      "Casual Daytime Events",
      "College",
      "Office",
      "Brunch"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Citrus",
      "Floral"
    ],
    "accords": [
      "Floral",
      "Fresh",
      "Sweet",
      "Warm"
    ]
  },
  {
    "id": "1157",
    "slug": "zadig-voltaire-this-is-her",
    "brand": "Zadig Voltaire",
    "name": "This is Her",
    "gender": "for women",
    "topNotes": [
      "Pink Pepper",
      "Silkwood Blossom",
      "Jasmine Sambac"
    ],
    "heartNotes": [
      "Whipped Cream",
      "Vanilla",
      "Chestnut"
    ],
    "baseNotes": [
      "Sandalwood",
      "Cashmere Wood"
    ],
    "seasons": [
      "Spring",
      "Winter"
    ],
    "time": "Evening",
    "sprays": "2-3",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Floral",
      "Spicy"
    ],
    "accords": [
      "Floral",
      "Spicy",
      "Sweet",
      "Warm"
    ]
  },
  {
    "id": "1158",
    "slug": "zara-amalfi-sunray",
    "brand": "Zara",
    "name": "Amalfi Sunray",
    "gender": "for women and men",
    "topNotes": [
      "Not separately listed"
    ],
    "heartNotes": [
      "Not separately listed"
    ],
    "baseNotes": [
      "Not separately listed"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer"
    ],
    "time": "Day",
    "sprays": "3-4",
    "occasions": [
      "Casual",
      "Office"
    ],
    "featured": false,
    "families": [
      "Aromatic"
    ],
    "accords": [
      "Fresh"
    ]
  },
  {
    "id": "1159",
    "slug": "zara-applejuice",
    "brand": "Zara",
    "name": "Applejuice",
    "gender": "for women",
    "topNotes": [
      "Apple",
      "Grapefruit",
      "Orange"
    ],
    "heartNotes": [
      "Peony",
      "Rose",
      "Jasmine",
      "Violet"
    ],
    "baseNotes": [
      "Musk",
      "Sandalwood",
      "Cedar"
    ],
    "seasons": [
      "Spring",
      "Summer"
    ],
    "time": "Day",
    "sprays": "4-6",
    "occasions": [
      "Casual",
      "Office"
    ],
    "featured": false,
    "families": [
      "Citrus",
      "Floral",
      "Fruity"
    ],
    "accords": [
      "Floral",
      "Fresh",
      "Fruity",
      "Musky"
    ]
  },
  {
    "id": "1160",
    "slug": "zara-cherry-smoothie",
    "brand": "Zara",
    "name": "Cherry Smoothie",
    "gender": "for women",
    "topNotes": [
      "Cherry",
      "Almond",
      "Plum"
    ],
    "heartNotes": [
      "Peru Balsam",
      "Heliotrope",
      "Hawthorn"
    ],
    "baseNotes": [
      "Vanilla",
      "Tonka Bean"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer"
    ],
    "time": "Day",
    "sprays": "2-3",
    "occasions": [
      "Brunch",
      "Casual Daytime Events",
      "College",
      "Office",
      "Travel"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Fruity",
      "Gourmand"
    ],
    "accords": [
      "Fruity",
      "Sweet",
      "Warm"
    ]
  },
  {
    "id": "1161",
    "slug": "zara-deep-garden",
    "brand": "Zara",
    "name": "Deep Garden",
    "gender": "for women",
    "topNotes": [
      "Pear"
    ],
    "heartNotes": [
      "Tuberose"
    ],
    "baseNotes": [
      "Tonka Bean"
    ],
    "seasons": [
      "Spring",
      "Winter"
    ],
    "time": "Evening",
    "sprays": "2-3",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Floral",
      "Fruity"
    ],
    "accords": [
      "Floral",
      "Fruity",
      "Sweet",
      "Warm"
    ]
  },
  {
    "id": "1162",
    "slug": "zara-for-him-red-edition",
    "brand": "Zara",
    "name": "For Him Red Edition",
    "gender": "for men",
    "topNotes": [
      "Orange"
    ],
    "heartNotes": [
      "Amber"
    ],
    "baseNotes": [
      "Evernyl"
    ],
    "seasons": [
      "Spring",
      "Summer",
      "Winter"
    ],
    "time": "Day / Evening",
    "sprays": "4-6",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal",
      "Office"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Citrus"
    ],
    "accords": [
      "Fresh",
      "Warm"
    ]
  },
  {
    "id": "1163",
    "slug": "zara-gardenia",
    "brand": "Zara",
    "name": "Gardenia",
    "gender": "for women",
    "topNotes": [
      "Orange Blossom"
    ],
    "heartNotes": [
      "Coffee"
    ],
    "baseNotes": [
      "Vanilla"
    ],
    "seasons": [
      "Spring",
      "Summer",
      "Winter"
    ],
    "time": "Day / Evening",
    "sprays": "4-6",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal",
      "Office"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Citrus",
      "Floral"
    ],
    "accords": [
      "Floral",
      "Fresh",
      "Sweet",
      "Warm"
    ]
  },
  {
    "id": "1164",
    "slug": "zara-golden-decade",
    "brand": "Zara",
    "name": "Golden Decade",
    "gender": "for women",
    "topNotes": [
      "Mandarin Orange"
    ],
    "heartNotes": [
      "Orange Blossom",
      "Jasmine",
      "Lavender"
    ],
    "baseNotes": [
      "Vanilla"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer",
      "Winter"
    ],
    "time": "Day / Evening",
    "sprays": "4-6",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal",
      "Office"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Aromatic",
      "Citrus"
    ],
    "accords": [
      "Floral",
      "Fresh",
      "Herbal",
      "Sweet"
    ]
  },
  {
    "id": "1165",
    "slug": "zara-not-reliably-matched",
    "brand": "Zara",
    "name": "Not reliably matched",
    "gender": "Unisex",
    "topNotes": [
      "Reliable exact-page data not found in indexed sources"
    ],
    "heartNotes": [
      "Reliable exact-page data not found in indexed sources"
    ],
    "baseNotes": [
      "Reliable exact-page data not found in indexed sources"
    ],
    "seasons": [
      "Spring",
      "Ac Venues",
      "Mild Winter",
      "Monsoon Evenings"
    ],
    "time": "Day / Evening",
    "sprays": "2-3 sprays Navy Black for men",
    "occasions": [
      "Lunches",
      "Smart Casuals",
      "Dates",
      "Office",
      "Pujas"
    ],
    "featured": false,
    "families": [
      "Aromatic"
    ],
    "accords": [
      "Fresh"
    ]
  },
  {
    "id": "1166",
    "slug": "sprays-2-3-sprays-navy-black",
    "brand": "Sprays: 2-3 Sprays",
    "name": "Navy Black",
    "gender": "for men",
    "topNotes": [
      "Bergamot"
    ],
    "heartNotes": [
      "Grapefruit"
    ],
    "baseNotes": [
      "Vetiver"
    ],
    "seasons": [
      "Spring",
      "Summer",
      "Monsoon"
    ],
    "time": "Day",
    "sprays": "3-4 sprays; 2-3 indoors",
    "occasions": [
      "Travel",
      "Casual Daytime Events",
      "College",
      "Office",
      "Brunch"
    ],
    "featured": false,
    "families": [
      "Citrus",
      "Woody"
    ],
    "accords": [
      "Earthy",
      "Fresh",
      "Woody"
    ]
  },
  {
    "id": "1167",
    "slug": "zara-red-temptation-for-her",
    "brand": "Zara",
    "name": "Red Temptation For Her",
    "gender": "for women",
    "topNotes": [
      "Saffron",
      "Bitter Orange",
      "Coriander"
    ],
    "heartNotes": [
      "Praline",
      "Jasmine"
    ],
    "baseNotes": [
      "Amber",
      "Moss",
      "Musk"
    ],
    "seasons": [
      "Spring",
      "Summer",
      "Winter"
    ],
    "time": "Day / Evening",
    "sprays": "4-6",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal",
      "Office"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Citrus",
      "Floral"
    ],
    "accords": [
      "Floral",
      "Fresh",
      "Musky",
      "Spicy"
    ]
  },
  {
    "id": "1168",
    "slug": "archive-red-vanilla",
    "brand": "Archive",
    "name": "Red Vanilla",
    "gender": "for women",
    "topNotes": [
      "Not separately listed"
    ],
    "heartNotes": [
      "Not separately listed"
    ],
    "baseNotes": [
      "Not separately listed"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer"
    ],
    "time": "Day",
    "sprays": "3-4",
    "occasions": [
      "Casual",
      "Office"
    ],
    "featured": false,
    "families": [
      "Aromatic"
    ],
    "accords": [
      "Fresh"
    ]
  },
  {
    "id": "1169",
    "slug": "rose-gourmand-for-her-vibrant-leather",
    "brand": "Rose Gourmand For Her",
    "name": "Vibrant Leather",
    "gender": "for women",
    "topNotes": [
      "Rose"
    ],
    "heartNotes": [
      "Amber"
    ],
    "baseNotes": [
      "Vanila  for men  NOTES"
    ],
    "seasons": [
      "Spring",
      "Winter"
    ],
    "time": "Evening",
    "sprays": "2-3",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Floral"
    ],
    "accords": [
      "Floral",
      "Warm"
    ]
  },
  {
    "id": "1170",
    "slug": "archive-top-rose-heart-amber-base-vanila",
    "brand": "Archive",
    "name": "Top: Rose  \u00e2\u20ac\u00a2  Heart: Amber  \u00e2\u20ac\u00a2  Base: Vanila",
    "gender": "for men",
    "topNotes": [
      "Lemon",
      "Bergamot"
    ],
    "heartNotes": [
      "Leather",
      "Bamboo"
    ],
    "baseNotes": [
      "Patchouli"
    ],
    "seasons": [
      "Ac Venues",
      "Monsoon Evenings",
      "Winter"
    ],
    "time": "Evening",
    "sprays": "4-6",
    "occasions": [
      "Celebrations",
      "Dinner Dates",
      "Formal Events",
      "Receptions"
    ],
    "featured": false,
    "families": [
      "Citrus",
      "Leather",
      "Woody"
    ],
    "accords": [
      "Earthy",
      "Fresh",
      "Leather",
      "Woody"
    ]
  },
  {
    "id": "1171",
    "slug": "zara-warm-black",
    "brand": "Zara",
    "name": "Warm Black",
    "gender": "for men",
    "topNotes": [
      "Ginger"
    ],
    "heartNotes": [
      "Vanilla"
    ],
    "baseNotes": [
      "Tonka Bean"
    ],
    "seasons": [
      "Ac Venues",
      "Monsoon Evenings",
      "Winter"
    ],
    "time": "Evening",
    "sprays": "2-3",
    "occasions": [
      "Celebrations",
      "Dinner Dates",
      "Formal Events",
      "Receptions"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Spicy"
    ],
    "accords": [
      "Spicy",
      "Sweet",
      "Warm"
    ]
  },
  {
    "id": "1172",
    "slug": "coty-tribe",
    "brand": "Coty",
    "name": "Tribe",
    "gender": "for women",
    "topNotes": [
      "Raspberry",
      "Apple",
      "Green Notes",
      "Peach",
      "Mandarin Orange",
      "Bergamot",
      "Lemon"
    ],
    "heartNotes": [
      "Cyclamen",
      "Rose",
      "Jasmine",
      "Lily- of-the-Valley"
    ],
    "baseNotes": [
      "Musk",
      "Oakmoss",
      "Cedar",
      "Amber",
      "Sandalwood"
    ],
    "seasons": [
      "Spring",
      "Summer",
      "Monsoon"
    ],
    "time": "Day",
    "sprays": "2-3 sprays Sprays: 3-4 sprays; 2-3 indoors PAGE 118 / 118",
    "occasions": [
      "Travel",
      "Casual Daytime Events",
      "College",
      "Office",
      "Brunch"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Citrus",
      "Floral"
    ],
    "accords": [
      "Floral",
      "Fresh",
      "Fruity",
      "Green"
    ]
  },
  {
    "id": "1173",
    "slug": "zoologist-perfumes-bat",
    "brand": "Zoologist Perfumes",
    "name": "Bat",
    "gender": "for women and men",
    "topNotes": [
      "Soil Tincture",
      "Banana",
      "Fruity Notes"
    ],
    "heartNotes": [
      "Tropical Fruits",
      "Fig",
      "Green Notes",
      "Resins",
      "Myrrh"
    ],
    "baseNotes": [
      "Musk",
      "Vetiver",
      "Leather",
      "Sandalwood",
      "Tonka Bean"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Winter"
    ],
    "time": "Evening",
    "sprays": "2-3",
    "occasions": [
      "Date Night",
      "Formal"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Fruity",
      "Leather"
    ],
    "accords": [
      "Balsamic",
      "Earthy",
      "Fruity",
      "Green"
    ]
  },
  {
    "id": "1174",
    "slug": "zoologist-perfumes-bee",
    "brand": "Zoologist Perfumes",
    "name": "Bee",
    "gender": "for women and men",
    "topNotes": [
      "Beeswax",
      "Ginger",
      "Orange"
    ],
    "heartNotes": [
      "Mimosa",
      "Broom",
      "Heliotrope",
      "Orange Blossom"
    ],
    "baseNotes": [
      "Vanilla",
      "Benzoin",
      "Tonka Bean",
      "Sandalwood",
      "Labdanum",
      "Musk"
    ],
    "seasons": [
      "Spring",
      "Summer",
      "Winter"
    ],
    "time": "Day / Evening",
    "sprays": "4-6",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal",
      "Office"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Citrus",
      "Floral"
    ],
    "accords": [
      "Floral",
      "Fresh",
      "Musky",
      "Spicy"
    ]
  },
  {
    "id": "1175",
    "slug": "zoologist-perfumes-camel",
    "brand": "Zoologist Perfumes",
    "name": "Camel",
    "gender": "for women and men",
    "topNotes": [
      "Dried Fruits",
      "Dates",
      "Olibanum",
      "Rose"
    ],
    "heartNotes": [
      "Myrhh",
      "Incense",
      "Amber",
      "Cinnamon",
      "Cedar",
      "Jasmine",
      "Orange Blossom"
    ],
    "baseNotes": [
      "Civet",
      "Agarwood (Oud)",
      "Musk",
      "Sandalwood",
      "Vanilla",
      "Vetiver",
      "Tonka Bean"
    ],
    "seasons": [
      "Monsoon",
      "Spring",
      "Summer",
      "Winter"
    ],
    "time": "Day / Evening",
    "sprays": "4-6",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal",
      "Office"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Citrus",
      "Floral"
    ],
    "accords": [
      "Balsamic",
      "Earthy",
      "Floral",
      "Fresh"
    ]
  },
  {
    "id": "1176",
    "slug": "zoologist-perfumes-macaque",
    "brand": "Zoologist Perfumes",
    "name": "Macaque",
    "gender": "for women and men",
    "topNotes": [
      "Green Apple",
      "Cedar",
      "Blood Mandarin"
    ],
    "heartNotes": [
      "Galbanum",
      "Jasmine Tea",
      "Palisander Rosewood",
      "Honey",
      "Ylang-Ylang",
      "Olibanum"
    ],
    "baseNotes": [
      "Green Tea",
      "Cedarmoss",
      "White Oud",
      "Musk"
    ],
    "seasons": [
      "Ac Venues",
      "Cool Nights",
      "Winter"
    ],
    "time": "Evening",
    "sprays": "4-6",
    "occasions": [
      "Festive Evenings",
      "Formal Dinners",
      "Receptions",
      "Winter Weddings"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Citrus",
      "Floral"
    ],
    "accords": [
      "Floral",
      "Fresh",
      "Fruity",
      "Green"
    ]
  },
  {
    "id": "1177",
    "slug": "zoologist-perfumes-moth",
    "brand": "Zoologist Perfumes",
    "name": "Moth",
    "gender": "for women and men",
    "topNotes": [
      "Clove",
      "Saffron",
      "Black Pepper",
      "Cumin",
      "Cinnamon",
      "Nutmeg",
      "Lemon"
    ],
    "heartNotes": [
      "Heliotrope",
      "Mimosa",
      "Iris",
      "Rose",
      "Jasmine",
      "Lily-of-the-Valley"
    ],
    "baseNotes": [
      "Honey",
      "Smoke",
      "Agarwood (Oud)",
      "Resins",
      "Musk",
      "Guaiac Wood",
      "Ambergris",
      "Cypriol Oil or Nagarmotha"
    ],
    "seasons": [
      "Spring",
      "Summer",
      "Winter"
    ],
    "time": "Day / Evening",
    "sprays": "4-6",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal",
      "Office"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Citrus",
      "Floral"
    ],
    "accords": [
      "Balsamic",
      "Floral",
      "Fresh",
      "Musky"
    ]
  },
  {
    "id": "1178",
    "slug": "zoologist-perfumes-sacred-scarab",
    "brand": "Zoologist Perfumes",
    "name": "Sacred Scarab",
    "gender": "for women and men",
    "topNotes": [
      "Aldehydes",
      "Civet",
      "Lemon"
    ],
    "heartNotes": [
      "Lotus",
      "Red Wine",
      "Plum"
    ],
    "baseNotes": [
      "Myrrh",
      "Incense",
      "Oakmoss",
      "Benzoin",
      "Amber",
      "Musk",
      "Labdanum",
      "Styrax",
      "Galbanum",
      "Raisin",
      "Cedar",
      "Cade oil"
    ],
    "seasons": [
      "Spring",
      "Summer",
      "Winter"
    ],
    "time": "Day / Evening",
    "sprays": "4-6",
    "occasions": [
      "Casual",
      "Date Night",
      "Formal",
      "Office"
    ],
    "featured": false,
    "families": [
      "Amber/Oriental",
      "Citrus",
      "Fruity"
    ],
    "accords": [
      "Balsamic",
      "Fresh",
      "Fruity",
      "Green"
    ]
  }
];

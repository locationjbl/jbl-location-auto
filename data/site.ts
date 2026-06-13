// =============================================================
//  ⚙️  CONFIGURATION DU SITE — MODIFIEZ TOUT ICI
// =============================================================
//  C'est le SEUL fichier que vous avez besoin de toucher pour
//  changer le contenu : nom, couleurs, lien Turo, voitures, etc.
//  Après chaque modification, la page se met à jour toute seule.
// =============================================================

export const site = {
  // --- Identité de l'entreprise ---
  nom: "JBL Location d'auto",
  slogan: "Louez la voiture parfaite, en quelques clics",
  description:
    "Location de véhicules fiables et bien entretenus. Réservez directement sur Turo, en toute simplicité.",

  // --- Lien vers votre profil Turo (bouton principal du site) ---
  turoProfil: "https://turo.com/ca/fr/host/27708929",

  // --- Coordonnées ---
  telephone: "438-969-0922",
  courriel: "locationjblinc@gmail.com",
  ville: "Saint-Hubert, QC",
  // Lieu affiché sur la carte (section Contact). Mettez une adresse précise
  // si vous le souhaitez, sinon le secteur suffit (plus discret).
  emplacement: "Saint-Hubert, Longueuil, QC",

  // --- Réseaux sociaux (laissez "" pour masquer) ---
  instagram: "",
  facebook: "",

  // --- Couleurs de la marque (extraites de votre logo) ---
  couleurs: {
    primaire: "#8BB9D6", // bleu ciel JBL (accents, boutons sur fond foncé)
    primaireFonce: "#6FA3C6", // version plus foncée (survol)
    fonce: "#203651", // bleu marin JBL (en-tête, héro, pied de page)
    texteSurPrimaire: "#203651", // texte affiché SUR le bleu ciel (marin pour le contraste)
  },

  // --- Logo ---
  // Fichiers déjà placés dans /public. Version blanche pour l'en-tête (fond marin).
  logo: "/jbl-logo-blanc.png",

  // --- Statistiques Turo (affichées dans la section Avis) ---
  turo: {
    note: "5.0",
    nbAvis: 371,
    nbVoyages: 414,
    hoteStar: true, // badge « Hôte Star »
  },
};

// =============================================================
//  ⭐  AVIS DE VOS CLIENTS  (récupérés depuis Turo)
// =============================================================
//  Ajoutez / modifiez librement. Laissez ce que vous voulez afficher.
// =============================================================

export type Avis = {
  nom: string;
  date: string;
  texte: string;
};

export const avis: Avis[] = [
  {
    nom: "Mathieu",
    date: "11 juin 2026",
    texte:
      "Tout c'est bien passé ! J'ai pris la voiture pour un mois et je recommande !",
  },
  {
    nom: "Richard",
    date: "31 mai 2026",
    texte:
      "This was my second time renting from Jeremy, and once again the experience was excellent. He is very friendly, professional, and always responds quickly whenever I have a question. The car was clean, well-maintained, and exactly as described. Jeremy is very supportive and makes the entire rental process smooth and stress-free. Highly recommended, and I would definitely rent from him again in the future.",
  },
  {
    nom: "Christopher",
    date: "11 juin 2026",
    texte: "Car was great and host was amazing",
  },
];

// =============================================================
//  🚗  VOS VOITURES  (récupérées automatiquement depuis Turo)
// =============================================================
//  Ajoutez / supprimez des blocs { ... } pour chaque véhicule.
//  - image     : URL d'une photo (Turo, Unsplash...) OU "/ma-photo.jpg"
//  - turoLien  : lien Turo de CETTE voiture (le bouton "Réserver")
//  - prixParJour : OPTIONNEL. Si vous le laissez vide (non renseigné),
//                  la carte affiche « Voir le tarif sur Turo » (toujours
//                  à jour). Mettez un nombre pour afficher « dès X$/jour ».
// =============================================================

export type Voiture = {
  nom: string;
  annee: number;
  categorie: string;
  prixParJour?: number; // optionnel — voir note ci-dessus
  image: string;
  turoLien: string;
  caracteristiques: string[];
};

// Petit raccourci pour les photos Turo (haute résolution 960x540)
const photo = (hash: string) =>
  `https://images.turo.com/media/vehicle/images/${hash}.960x540.jpg`;

export const voitures: Voiture[] = [
  {
    nom: "Toyota RAV4",
    annee: 2025,
    categorie: "VUS",
    image: photo("dBYXhGHgQoyjgyOx8N23aw"),
    turoLien: "https://turo.com/ca/fr/vus-location/canada/longueuil-qc/toyota/rav4/3111067",
    caracteristiques: ["VUS", "5 places", "AWD", "Automatique"],
  },
  {
    nom: "Toyota RAV4",
    annee: 2015,
    categorie: "VUS",
    image: photo("jT1paO1TQauX0UqMe9V5Cw"),
    turoLien: "https://turo.com/ca/fr/vus-location/canada/longueuil-qc/toyota/rav4/3495280",
    caracteristiques: ["VUS", "5 places", "Économique"],
  },
  {
    nom: "Toyota Highlander Hybrid",
    annee: 2026,
    categorie: "VUS hybride",
    image: photo("MzO6ie5JTsayObLj9wMgoQ"),
    turoLien: "https://turo.com/ca/fr/vus-location/canada/longueuil-qc/toyota/highlander-hybrid/3611367",
    caracteristiques: ["7 places", "Hybride", "AWD", "Spacieux"],
  },
  {
    nom: "Hyundai Tucson Hybrid",
    annee: 2025,
    categorie: "VUS hybride",
    image: photo("HLR7Tw_sQOqTaem55YUG3w"),
    turoLien: "https://turo.com/ca/fr/vus-location/canada/longueuil-qc/hyundai/tucson-hybrid/3716610",
    caracteristiques: ["VUS", "Hybride", "5 places", "AWD"],
  },
  {
    nom: "Volkswagen Atlas",
    annee: 2025,
    categorie: "VUS",
    image: photo("SIBdc1yBSIOwosZnhifP2w"),
    turoLien: "https://turo.com/ca/fr/vus-location/canada/longueuil-qc/volkswagen/atlas/3484737",
    caracteristiques: ["VUS", "7 places", "Spacieux", "Familiale"],
  },
  {
    nom: "Toyota RAV4 Hybrid",
    annee: 2026,
    categorie: "VUS hybride",
    image: photo("NrTweBWDTDGstSXBo_VDVA"),
    turoLien: "https://turo.com/ca/fr/vus-location/canada/longueuil-qc/toyota/rav4-hybrid/3611380",
    caracteristiques: ["VUS", "Hybride", "AWD", "Économe"],
  },
  {
    nom: "Toyota RAV4",
    annee: 2025,
    categorie: "VUS",
    image: photo("SGv8ZEMWSoqFjTxsC63a6w"),
    turoLien: "https://turo.com/ca/fr/vus-location/canada/longueuil-qc/toyota/rav4/3224626",
    caracteristiques: ["VUS", "5 places", "AWD", "Automatique"],
  },
  {
    nom: "Toyota Corolla Hybrid",
    annee: 2024,
    categorie: "Hybride",
    image: photo("p6w4VEkRQb-XEEWvkbp7LA"),
    turoLien: "https://turo.com/ca/fr/voiture-location/canada/longueuil-qc/toyota/corolla-hybrid/2875448",
    caracteristiques: ["Hybride", "Économe", "5 places", "Compacte"],
  },
  {
    nom: "Jeep Wrangler 4xe",
    annee: 2023,
    categorie: "VUS 4x4",
    image: photo("j5bJm11GSWePrqxWY5xBcw"),
    turoLien: "https://turo.com/ca/fr/vus-location/canada/longueuil-qc/jeep/wrangler-4xe/3273492",
    caracteristiques: ["4x4", "Hybride rechargeable", "Tout-terrain"],
  },
  {
    nom: "Subaru Legacy",
    annee: 2017,
    categorie: "Berline",
    image: photo("dYoeQm8_QxK_c-QANX1rMw"),
    turoLien: "https://turo.com/ca/fr/voiture-location/canada/longueuil-qc/subaru/legacy/3498824",
    caracteristiques: ["Berline", "AWD", "5 places"],
  },
  {
    nom: "Tesla Model 3",
    annee: 2022,
    categorie: "Électrique",
    image: photo("gP1HFPFTS2Gi1bk8GUVZBA"),
    turoLien: "https://turo.com/ca/fr/voiture-location/canada/longueuil-qc/tesla/model-3/1681478",
    caracteristiques: ["100% électrique", "Autopilote", "Écran tactile"],
  },
  {
    nom: "Subaru Forester",
    annee: 2017,
    categorie: "VUS",
    image: photo("pqsZF4X5QLeLVVpNPbzHLw"),
    turoLien: "https://turo.com/ca/fr/vus-location/canada/longueuil-qc/subaru/forester/3608207",
    caracteristiques: ["VUS", "AWD", "5 places"],
  },
  {
    nom: "Kia Sorento",
    annee: 2022,
    categorie: "VUS",
    image: photo("SCeTLMgZRF20dZ3CYjXpPg"),
    turoLien: "https://turo.com/ca/fr/vus-location/canada/longueuil-qc/kia/sorento/3253821",
    caracteristiques: ["VUS", "7 places", "Spacieux"],
  },
  {
    nom: "Mitsubishi Lancer",
    annee: 2017,
    categorie: "Berline",
    image: photo("z7_sTNdWS2aZGr43fzWv4w"),
    turoLien: "https://turo.com/ca/fr/voiture-location/canada/longueuil-qc/mitsubishi/lancer/3678405",
    caracteristiques: ["Berline", "Économique", "5 places"],
  },
  {
    nom: "Subaru Outback",
    annee: 2018,
    categorie: "VUS",
    image: photo("7pDq5b6gQMGgedgS2f1i5A"),
    turoLien: "https://turo.com/ca/fr/vus-location/canada/longueuil-qc/subaru/outback/3653839",
    caracteristiques: ["VUS", "AWD", "Familiale"],
  },
  {
    nom: "Toyota Yaris",
    annee: 2017,
    categorie: "Économique",
    image: photo("owv_UV3fTGuH-WL_ezkNTA"),
    turoLien: "https://turo.com/ca/fr/voiture-location/canada/longueuil-qc/toyota/yaris/3462894",
    caracteristiques: ["Économique", "Compacte", "Économe en essence"],
  },
];

# 📘 Guide de mon site — JBL Location d'auto

Petit mémo pour s'y retrouver facilement. (Aucun mot de passe ici — gardez vos accès dans un gestionnaire de mots de passe.)

---

## 🌍 Mon site en ligne

- **Adresse publique :** https://locationjbl.com (et www.locationjbl.com)
- **Adresse Vercel (secours) :** https://jbl-location-auto.vercel.app
- Le site est **statique, sécurisé (HTTPS)** et accessible partout dans le monde.

## 📂 Où sont les choses

| Quoi | Où |
|---|---|
| Dossier du projet sur mon PC | `C:\Users\boivi\OneDrive - Location JBL\Fichier source site web Claude` |
| Code source (open source, MIT) | https://github.com/locationjbl/jbl-location-auto |
| Hébergement / déploiement | Vercel (projet `jbl-location-auto`) |
| Nom de domaine | GoDaddy (`locationjbl.com`) |
| Réservations | Mon profil Turo : https://turo.com/ca/fr/host/27708929 |
| Courriel | Microsoft 365 — `gestion@locationjbl.com` |

## 🔑 Mes comptes (à garder de mon côté, jamais à partager)

- GitHub (utilisateur **locationjbl**)
- Vercel (connexion via GitHub)
- GoDaddy
- Microsoft 365
- Turo

---

## ✏️ Modifier le contenu du site

**Presque tout le contenu se change dans UN seul fichier :** [`data/site.ts`](data/site.ts)

On y trouve :
- **`site`** : nom, slogan, description, téléphone, courriel, ville, lien Turo, couleurs, logo, stats Turo.
- **`voitures`** : la liste des véhicules (nom, année, catégorie, photo, lien Turo, caractéristiques, prix optionnel).
- **`avis`** : les témoignages clients.

> 💡 Tarif : si une voiture n'a pas de `prixParJour`, la carte affiche « Tarif sur Turo ». Mettre un nombre affiche « dès X$/jour ».

## 🚀 Comment les changements arrivent en ligne

Le site se met à jour **automatiquement** : dès qu'une modification est envoyée (« poussée ») sur GitHub, **Vercel reconstruit et publie** le site en ~1 minute. Pas de manipulation à faire à la main.

## 🎨 Style du site

- Thème **sombre & luxe** ; couleurs de marque : bleu marin `#203651` + bleu ciel `#8BB9D6`.
- Police **Sora** (titres) + **Manrope** (texte).
- Animations avec **Framer Motion**. La seule section claire est la **Flotte** (pour faire ressortir les voitures).

---

## 🤖 Reprendre avec Claude la prochaine fois

- Rouvrez Claude **dans le dossier du projet** ci-dessus : il **se souvient** du projet (mémoire enregistrée).
- Exemples de demandes : « mets une de mes voitures en photo d'accueil », « ajoute des prix », « ajoute une voiture », « change ce texte ».
- 3 agents spécialisés sont prêts : **frontend-designer** (design), **code-reviewer** (qualité du code), **backend-engineer** (fonctions serveur).

## 💻 Lancer le site sur mon ordinateur (optionnel, pour tester)

Dans le dossier du projet :
```
npm install   (la première fois seulement)
npm run dev
```
Puis ouvrir http://localhost:3000 dans le navigateur.

---

*Dernière mise à jour : 13 juin 2026.*

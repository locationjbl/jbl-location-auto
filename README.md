# JBL Location d'auto — Site web

Site vitrine de **JBL Location d'auto**, entreprise de location de véhicules à
Saint-Hubert (Longueuil, QC). Le site présente la flotte et redirige les
réservations vers le profil Turo de l'entreprise.

🔗 **Réserver :** [profil Turo](https://turo.com/ca/fr/host/27708929)

## Stack technique

- [Next.js 15](https://nextjs.org/) (App Router) + React 19
- TypeScript
- [Tailwind CSS 4](https://tailwindcss.com/)
- Déployé sur [Vercel](https://vercel.com/)

## Démarrer en local

```bash
npm install
npm run dev
```

Le site est accessible sur http://localhost:3000.

## Modifier le contenu

Presque tout le contenu (nom, couleurs, coordonnées, voitures, avis) se modifie
dans un seul fichier : **[`data/site.ts`](data/site.ts)**. Il est commenté en
français.

- **Voitures** : tableau `voitures` — chaque véhicule a un nom, une année, une
  catégorie, une photo, des caractéristiques et son lien Turo.
- **Avis** : tableau `avis`.
- **Couleurs / coordonnées / logo** : objet `site`.

## Structure

```
app/            Pages et mise en page (App Router)
components/     Composants d'interface (Header, Hero, Fleet, Reviews, ...)
data/site.ts    ← Contenu éditable du site
public/         Logos et images statiques
```

## Licence

[MIT](LICENSE)

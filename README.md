# Nicolas Wibart — Portfolio DevOps

Portfolio statique : HTML, CSS compilé et modules JavaScript natifs. Aucun framework ni serveur applicatif nécessaire en production.

## Structure

- `index.html` : contenu du portfolio et schémas SVG.
- `articles/` : les trois articles et leurs URL existantes.
- `style/main.css` : composants, animations et responsive du portfolio.
- `style/article.css` : styles des articles.
- `style/tailwind.css` : source des utilitaires Tailwind.
- `style/utilities.css` : CSS généré, inclus pour servir directement le site.
- `script/` : point d’entrée et modules navigation, projets, contact, animations.
- `assets/` : images WebP, transparence conservée.
- `tools/` : validation des références et conversion des images.
- `docs/AUDIT.md` : constats, choix et limites de validation.

## Développement

Node.js 20+ et npm sont nécessaires uniquement pour compiler le CSS.

```sh
npm ci
npm run build
npm run check
npm run serve
```

Ouvrir http://localhost:8080. `npm run dev` reconstruit le CSS pendant les modifications. Recompiler après toute modification des classes HTML ou JavaScript, puis versionner `style/utilities.css`. GitHub Pages peut servir directement ces fichiers.

Pour ajouter une image PNG/JPEG dans `assets/`, utiliser `python3 tools/optimize-images.py` avec Pillow installé. Le script convertit en WebP, limite les dimensions à 1200 px et met à jour les références HTML. Il remplace les originaux locaux : conserver les sources haute résolution hors du dossier publié.

Le formulaire ouvre le logiciel de messagerie avec `mailto:` ; aucun message n’est envoyé par un serveur. Les polices Google Fonts et les icônes Iconify nécessitent encore une connexion extérieure.

## Palette

Palette crème, ivoire, encre, terre cuite et sauge pâle dans `style/theme.css`. Le fond du hero utilise des dégradés CSS statiques. Le portrait du haut utilise la source non détourée pour préserver les yeux et les détails du visage. La photo de la section parcours a été retirée.

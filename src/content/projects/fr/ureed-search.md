---
title: "Refonte du moteur de recherche Ureed"
summary: "Migration vers Elasticsearch : +40 % de pertinence et de rapidité pour 256 000+ utilisateurs actifs."
tags: [Elasticsearch, Django, PostgreSQL]
year: 2024
order: 3
icon: search
logo: "/logos/ureed.png"
brandColor: "#006df5"
# TODO Yacine : vraie URL du repo, ou supprimer la ligne
repo: "https://github.com/yacinehamitou/ureed-search"
---

## Contexte

Le moteur de recherche historique d'**Ureed** (recherche de freelances et de missions) montrait ses limites en pertinence comme en performance à mesure que la plateforme grandissait au-delà de 256 000 utilisateurs actifs.

## Ce que j'ai construit

- Refonte complète de la recherche sur **Elasticsearch** : modélisation des index, analyzers multilingues (la plateforme opère en arabe et en anglais), et requêtes combinant pertinence textuelle et critères métier.
- Synchronisation des données PostgreSQL → Elasticsearch fiable et incrémentale.
- Exposition via l'API Django/DRF existante, sans rupture pour les clients front.

## Résultats

- **+40 % de pertinence et de rapidité** des résultats de recherche.
- Recherche devenue un point fort de l'expérience produit plutôt qu'un point de friction.

## Stack

Elasticsearch · Python · Django · Django REST Framework · PostgreSQL · Celery

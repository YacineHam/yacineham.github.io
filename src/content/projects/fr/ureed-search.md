---
title: "Refonte du moteur de recherche Ureed"
summary: "Moteur de recherche refondu avec Elasticsearch : temps de réponse des requêtes réduit de 40 % grâce au passage en filter context."
tags: [Elasticsearch, Django, PostgreSQL]
year: 2024
order: 4
icon: search
logo: "/logos/ureed.png"
brandColor: "#006df5"
---

## Contexte

**Ureed** est une marketplace freelance de 256 000+ utilisateurs actifs, dont j'ai développé et maintenu le backend (Django / DRF, PostgreSQL). J'y ai refondu le moteur de recherche avec **Elasticsearch**.

## Ce que j'ai fait

- Refonte du moteur de recherche sur Elasticsearch.
- **Passage en filter context** : dans ce mode, Elasticsearch ne calcule pas de score de pertinence pour les clauses concernées et peut mettre leur résultat en cache. Les critères qui servent seulement à filtrer n'ont pas besoin de score.

## Résultat

Temps de réponse des requêtes **réduit de 40 %**.

## Stack

Elasticsearch · Python · Django / DRF · PostgreSQL

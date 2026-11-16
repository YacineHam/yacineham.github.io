---
title: "MIRIAD : recherche sémantique multimodale"
summary: "Contribution à la recherche sémantique sur transcriptions audio, plans vidéo et métadonnées documentaires : BM25 et kNN sur Elasticsearch, architecture multi-index, fusion RRF."
tags: [Elasticsearch, BM25, kNN, RRF, Multimodal]
year: 2026
order: 2
icon: layers
---

## Contexte

**MIRIAD** est un système de recherche sémantique multimodale sur lequel j'ai travaillé pendant ma mission à l'**INA** (Institut National de l'Audiovisuel). Il interroge trois types de contenus : les transcriptions audio, les plans vidéo et les métadonnées documentaires.

## Ma contribution

- **Recherche hybride sur Elasticsearch** : la recherche lexicale BM25 retrouve les correspondances exactes de termes, la recherche vectorielle kNN retrouve les contenus proches par le sens. MIRIAD combine les deux.
- **Architecture multi-index** : j'ai participé à la conception d'une architecture de recherche à trois niveaux, chunk, plan et thème.
- **Fusion par RRF** (Reciprocal Rank Fusion) : les listes de résultats sont fusionnées à partir des rangs, ce qui évite de comparer des scores qui n'ont pas la même échelle.

## Stack

Elasticsearch (BM25, kNN vectoriel) · RRF · Python

---
title: "Pipeline de parsing de CV par LLM"
summary: "Extraction et structuration automatiques des profils freelances sur une plateforme à 256 000+ utilisateurs. LLM, Django."
tags: [LLM, Python, Django, NLP]
year: 2025
order: 2
icon: cpu
logo: "/logos/ureed.png"
brandColor: "#006df5"
# TODO Yacine : vraie URL du repo, ou supprimer la ligne
repo: "https://github.com/yacinehamitou/cv-parsing-llm"
---

## Contexte

Sur la plateforme **Ureed** (256 000+ utilisateurs actifs), l'onboarding des freelances exigeait une saisie manuelle fastidieuse de leur profil. J'ai conçu un pipeline basé sur LLM qui automatise l'extraction et la structuration des profils à partir de leur CV.

## Ce que j'ai construit

- Pipeline d'ingestion de CV (PDF/DOCX) avec extraction de texte et normalisation.
- Prompting structuré et validation des sorties LLM pour extraire de façon fiable : expériences, compétences, langues, formations.
- Intégration au flux d'onboarding Django/DRF existant, avec fallback manuel en cas d'échec du parsing.

## Résultats

- Amélioration significative de l'expérience d'onboarding : un profil pré-rempli en quelques secondes au lieu d'une saisie manuelle complète.
- Meilleure qualité et homogénéité des données profils, au bénéfice du matching missions/freelances.

## Stack

Python · Django · Django REST Framework · LLM APIs · Celery · PostgreSQL

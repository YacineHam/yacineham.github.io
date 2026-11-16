---
title: "Pipeline de parsing de CV par LLM"
summary: "Pipeline LLM (Qwen via Ollama) à sortie JSON contrainte par schéma Pydantic, qui extrait et structure les profils freelances à l'onboarding d'Ureed (256 000+ utilisateurs actifs)."
tags: [LLM, Ollama, Pydantic, Django]
year: 2025
order: 3
icon: cpu
logo: "/logos/ureed.png"
brandColor: "#006df5"
---

## Contexte

**Ureed** est une marketplace freelance de 256 000+ utilisateurs actifs. À l'onboarding, chaque freelance doit renseigner son profil. J'ai construit un pipeline qui extrait et structure ce profil automatiquement à partir du CV.

## Ce que j'ai construit

- Un pipeline de parsing de CV par LLM, avec **Qwen servi par Ollama**.
- Une **sortie JSON contrainte par un schéma Pydantic** : le modèle doit produire un JSON conforme au schéma, ce qui rend la sortie directement exploitable par le backend.
- L'extraction et la structuration automatiques des profils freelances à l'onboarding.

## Stack

Python · Qwen · Ollama · Pydantic · Django / DRF

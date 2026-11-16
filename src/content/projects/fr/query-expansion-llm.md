---
title: "Expansion de requêtes par LLM pour la recherche documentaire"
summary: "Module qui reformule et enrichit les requêtes avec un LLM (Qwen via Ollama) avant la recherche. Plus pertinent que les requêtes brutes sur les cas testés. Sujet de mon mémoire de M2."
tags: [LLM, Ollama, Qwen, Recherche documentaire]
year: 2026
order: 1
icon: search
---

## Contexte

En mission à l'**INA** (Institut National de l'Audiovisuel) pour TATA Consultancy Services, j'ai développé de bout en bout le module d'expansion de requêtes de la recherche documentaire.

C'est aussi le sujet de mon mémoire de Master 2 MIAGE à l'Université Paris-Saclay : la réécriture de requêtes par LLM pour la recherche documentaire.

## Le problème

Une requête de recherche est souvent courte, et ses mots ne sont pas toujours ceux des documents que l'on cherche. L'expansion de requêtes consiste à reformuler et enrichir la requête avant de l'envoyer au moteur, pour retrouver des documents pertinents que la requête brute aurait manqués.

## Ce que j'ai construit

- Le module complet, de la requête saisie par l'utilisateur à la requête enrichie transmise au moteur de recherche.
- L'expansion est générée par un LLM, **Qwen servi par Ollama**.
- Une comparaison entre requêtes brutes et requêtes enrichies pour mesurer l'apport du module.

## Résultat

Sur les cas testés, les requêtes enrichies donnent des résultats plus pertinents que les requêtes brutes.

## Stack

Python · Qwen · Ollama

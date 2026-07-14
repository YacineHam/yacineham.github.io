---
title: "COPD Diagnosis — ML appliqué au diagnostic respiratoire"
summary: "Application web de diagnostic respiratoire avec pipeline ML complet : CNN, spectrogrammes MFCC, API REST."
tags: [Machine Learning, CNN, Django, React]
year: 2022
order: 4
icon: activity
# TODO Yacine : vraie URL du repo, ou supprimer la ligne
repo: "https://github.com/yacinehamitou/copd-diagnosis"
---

## Contexte

Projet de recherche mené à l'**URD-SE** (Unité de Recherche et Développement, Sidi Bel Abbès) : une application web d'aide au diagnostic des maladies respiratoires (BPCO/COPD) à partir d'enregistrements audio.

## Ce que j'ai construit

- **Pipeline ML de bout en bout** : prétraitement des fichiers audio (MKV), transformation en spectrogrammes MFCC, augmentation et normalisation des données.
- **Modèle CNN** de classification des maladies respiratoires, conçu et entraîné pour ce cas d'usage.
- **Application web Django + React** restituant les résultats de diagnostic via une API REST.

## Ce que j'en ai retiré

Premier projet où j'ai porté un système ML du notebook jusqu'à une application utilisable — c'est ce qui m'a orienté vers l'ingénierie backend appliquée aux systèmes de ML et de NLP.

## Stack

Python · Django · React · TensorFlow/Keras (CNN) · Librosa (MFCC) · API REST

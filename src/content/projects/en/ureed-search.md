---
title: "Ureed search engine overhaul"
summary: "Migration to Elasticsearch: +40% relevance and speed for 256,000+ active users."
tags: [Elasticsearch, Django, PostgreSQL]
year: 2024
order: 3
icon: search
logo: "/logos/ureed.png"
brandColor: "#006df5"
# TODO Yacine: real repo URL, or remove the line
repo: "https://github.com/yacinehamitou/ureed-search"
---

## Context

**Ureed**'s legacy search (finding freelancers and jobs) was hitting its limits in both relevance and performance as the platform grew past 256,000 active users.

## What I built

- Full search rebuild on **Elasticsearch**: index modeling, multilingual analyzers (the platform operates in Arabic and English), and queries combining text relevance with business criteria.
- Reliable, incremental PostgreSQL → Elasticsearch data synchronization.
- Served through the existing Django/DRF API with no breaking changes for front-end clients.

## Results

- **+40% relevance and speed** in search results.
- Search went from a point of friction to a strength of the product experience.

## Stack

Elasticsearch · Python · Django · Django REST Framework · PostgreSQL · Celery

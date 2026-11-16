---
title: "Ureed search engine rebuild"
summary: "Search engine rebuilt on Elasticsearch: query response time cut by 40% by moving to filter context."
tags: [Elasticsearch, Django, PostgreSQL]
year: 2024
order: 4
icon: search
logo: "/logos/ureed.png"
brandColor: "#006df5"
---

## Context

**Ureed** is a freelance marketplace with 256,000+ active users, whose backend I developed and maintained (Django / DRF, PostgreSQL). I rebuilt its search engine on **Elasticsearch**.

## What I did

- Rebuilt the search engine on Elasticsearch.
- **Moved to filter context**: in this mode Elasticsearch does not compute a relevance score for the clauses involved and can cache their result. Criteria that only filter do not need a score.

## Result

Query response time **cut by 40%**.

## Stack

Elasticsearch · Python · Django / DRF · PostgreSQL

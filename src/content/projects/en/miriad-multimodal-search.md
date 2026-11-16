---
title: "MIRIAD: multimodal semantic search"
summary: "Contribution to semantic search over audio transcripts, video shots and archive metadata: BM25 and kNN on Elasticsearch, multi-index architecture, RRF fusion."
tags: [Elasticsearch, BM25, kNN, RRF, Multimodal]
year: 2026
order: 2
icon: layers
---

## Context

**MIRIAD** is a multimodal semantic search system I worked on during my assignment at **INA** (French National Audiovisual Institute). It searches three kinds of content: audio transcripts, video shots and archive metadata.

## My contribution

- **Hybrid search on Elasticsearch**: BM25 lexical search finds exact term matches, kNN vector search finds content that is close in meaning. MIRIAD combines both.
- **Multi-index architecture**: I took part in designing a search architecture with three levels, chunk, shot and topic.
- **RRF fusion** (Reciprocal Rank Fusion): result lists are merged from their ranks, which avoids comparing scores that are not on the same scale.

## Stack

Elasticsearch (BM25, kNN vector search) · RRF · Python

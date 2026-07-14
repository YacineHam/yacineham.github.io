---
title: "LLM-based CV parsing pipeline"
summary: "Automated extraction and structuring of freelancer profiles on a platform with 256,000+ users. LLM, Django."
tags: [LLM, Python, Django, NLP]
year: 2025
order: 2
icon: cpu
logo: "/logos/ureed.png"
brandColor: "#006df5"
# TODO Yacine: real repo URL, or remove the line
repo: "https://github.com/yacinehamitou/cv-parsing-llm"
---

## Context

On the **Ureed** platform (256,000+ active users), freelancer onboarding required tedious manual profile entry. I designed an LLM-based pipeline that automates profile extraction and structuring straight from a freelancer's CV.

## What I built

- CV ingestion pipeline (PDF/DOCX) with text extraction and normalization.
- Structured prompting and LLM output validation to reliably extract experience, skills, languages and education.
- Integration into the existing Django/DRF onboarding flow, with a manual fallback when parsing fails.

## Results

- Significantly improved onboarding: a pre-filled profile in seconds instead of full manual entry.
- Better quality and consistency of profile data, improving job/freelancer matching downstream.

## Stack

Python · Django · Django REST Framework · LLM APIs · Celery · PostgreSQL

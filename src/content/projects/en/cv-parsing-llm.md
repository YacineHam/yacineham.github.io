---
title: "LLM resume parsing pipeline"
summary: "An LLM pipeline (Qwen via Ollama) with JSON output constrained by a Pydantic schema, extracting and structuring freelancer profiles at onboarding on Ureed (256,000+ active users)."
tags: [LLM, Ollama, Pydantic, Django]
year: 2025
order: 3
icon: cpu
logo: "/logos/ureed.png"
brandColor: "#006df5"
---

## Context

**Ureed** is a freelance marketplace with 256,000+ active users. At onboarding, every freelancer has to fill in a profile. I built a pipeline that extracts and structures that profile automatically from the resume.

## What I built

- An LLM resume parsing pipeline, with **Qwen served by Ollama**.
- **JSON output constrained by a Pydantic schema**: the model has to produce JSON that matches the schema, so the backend can use the output directly.
- Automatic extraction and structuring of freelancer profiles at onboarding.

## Stack

Python · Qwen · Ollama · Pydantic · Django / DRF

---
layout: homepage
title: Zilong Zhang
---

<section class="home-hero">
  <p class="eyebrow">STATISTICS · MACHINE LEARNING · TRUSTWORTHY AI</p>
  <h1>Reliable machine learning, grounded in statistics.</h1>
  <p class="hero-copy">I am a Ph.D. student in Statistics and Machine Learning at Georgia State University, advised by <a href="https://chikuang.github.io/">Dr. Chi-Kuang Yeh</a>. I develop statistical methods for evaluating AI systems and learning from complex, selectively labeled data.</p>
  <div class="hero-links">
    <a class="button-link" href="{{ '/publications/' | relative_url }}">Explore publications</a>
    <a class="text-link" href="{{ '/cv/' | relative_url }}">View full academic CV <span aria-hidden="true">→</span></a>
  </div>
</section>

## Research

<div class="focus-grid">
  <article class="focus-card">
    <span class="card-index">01</span>
    <h3>Trustworthy AI</h3>
    <p>Auditing LLM-as-a-judge systems, positive–unlabeled learning, and uncertainty-aware human review.</p>
  </article>
  <article class="focus-card">
    <span class="card-index">02</span>
    <h3>Functional time series</h3>
    <p>Long-run covariance estimation, adaptive bandwidth selection, and functional principal components.</p>
  </article>
  <article class="focus-card">
    <span class="card-index">03</span>
    <h3>Statistical ML</h3>
    <p>Graph learning and high-dimensional methods for biomedical and single-cell data.</p>
  </article>
</div>

<p class="research-note">I welcome opportunities in applied machine learning research, data science, and quantitative modeling.</p>

{% include_relative _includes/education.md %}

## News

- **Oct 2026:** Presented a poster on [Quantifying and Auditing LLM Evaluation via Positive–Unlabeled Learning](https://arxiv.org/abs/2606.19057) at [Georgia Statistics Day 2026](https://sites.gatech.edu/gsd2026/), Georgia Tech, Atlanta.
{% assign selected_publications = site.data.publications.main | where: "selected", true %}
{% for publication in selected_publications %}
- **{{ publication.conference_short }}:** [{{ publication.title }}]({{ publication.page | default: publication.pdf }}) — {{ publication.conference }}.
{% endfor %}

{% include publications.md selected_only=true heading="Selected Publications" %}

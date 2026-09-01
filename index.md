---
layout: homepage
title: Zilong Zhang
---

## Zilong Zhang

I am currently pursuing my Ph.D. in Statistics and Machine Learning in the Department of Mathematics and Statistics at Georgia State University,  where I am fortunate to be advised by <a href="https://chikuang.github.io/" style="color:#0099cc; font-weight:bold;">Dr. Chi-Kuang Yeh</a>.  

{% include_relative _includes/education.md %}

## Research Interests

- **Statistical Machine Learning:** graph neural networks, transfer learning, and statistical theory of deep learning  
- **Functional Data Analysis (FDA):** time series, functional principal component analysis, bandwidth selection
- **Bioinformatics / Computational Biology:** single-cell multi-omics integration, RNA–protein prediction, and molecular data analysis

## News

{% assign selected_publications = site.data.publications.main | where: "selected", true %}
{% for publication in selected_publications %}
- **{{ publication.conference_short }}:** [{{ publication.title }}]({{ publication.page | default: publication.pdf }}) — {{ publication.conference }}.
{% endfor %}

{% include publications.md selected_only=true heading="Selected Publications" %}

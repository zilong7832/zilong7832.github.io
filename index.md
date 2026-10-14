---
layout: homepage
title: Zilong Zhang
---

## Zilong Zhang

I am a Ph.D. student in Machine Learning & Data Science in <a href="https://mathstat.gsu.edu/">GSU Math & Statistics</a>, advised by <a href="https://chikuang.github.io/" style="font-weight:bold;">Dr. Chi-Kuang Yeh</a>. I previously earned an M.S. in Statistics at <a href="https://stt.msu.edu/">MSU Statistics & Probability</a> and a B.S. in Financial Mathematics at <a href="https://tongji.uibe.edu.cn/xygk/xyjs/index.htm">贸大统计学院</a>.

## Research Interests

My research develops statistical methods for reliable, uncertainty-aware inference, with functional data analysis at its core and a growing focus on the trustworthy evaluation of large language models.

- **Functional Data Analysis (FDA):** functional time series, long-run covariance estimation, bandwidth selection, and functional principal component analysis
- **Trustworthy LLM Evaluation:** auditing LLM-as-a-judge systems, positive–unlabeled learning for evaluation, and uncertainty quantification for AI evaluators
- **Statistical Machine Learning:** uncertainty quantification, statistical theory of deep learning, and graph neural networks with applications to biological and single-cell data

## News

- **Oct 2026:** Presented a poster on [Quantifying and Auditing LLM Evaluation via Positive–Unlabeled Learning](https://arxiv.org/abs/2606.19057) at [Georgia Statistics Day 2026](https://sites.gatech.edu/gsd2026/), Georgia Tech, Atlanta.
{% assign selected_publications = site.data.publications.main | where: "selected", true %}
{% for publication in selected_publications %}
- **{{ publication.conference_short }}:** [{{ publication.title }}]({{ publication.page | default: publication.pdf }}) — {{ publication.conference }}.
{% endfor %}

{% include publications.md selected_only=true heading="Selected Publications" %}

---
layout: page
title: Research
permalink: /research/
description: A collection of cybersecurity and threat intelligence research articles.
---

<p class="eyebrow">PUBLICATION ARCHIVE</p>

# Research archive

Technical notes and analysis covering threat intelligence, malware, ransomware operations, attacker infrastructure, and defensive detection.

<div class="archive-list">
{% for post in site.posts %}
  <article class="archive-item">
    <time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%b %d, %Y" }}</time>
    <div class="archive-content">
      <h2><a href="{{ post.url | relative_url }}">{{ post.title | escape }}</a></h2>
      {% if post.excerpt %}<p>{{ post.excerpt | strip_html | normalize_whitespace | truncate: 220 }}</p>{% endif %}
      <div class="post-tags">
        {% for category in post.categories limit:3 %}<span class="tag">{{ category | replace: '-', ' ' }}</span>{% endfor %}
        {% for tag in post.tags limit:3 %}<span class="tag">{{ tag | replace: '-', ' ' }}</span>{% endfor %}
      </div>
    </div>
    <a class="archive-arrow" href="{{ post.url | relative_url }}" aria-label="Read {{ post.title | escape }}">↗</a>
  </article>
{% else %}
  <p class="empty-state">No articles have been published yet.</p>
{% endfor %}
</div>

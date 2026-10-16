---
layout: page
title: Research Archive
permalink: /research/
description: Cybersecurity and threat intelligence research published by marktsec.
---
<div class="font-mono text-xs text-horo-gold font-semibold mb-5">ARCHIVE // RESEARCH PUBLICATIONS</div>
<h1 class="text-3xl md:text-5xl font-serif font-bold text-white leading-tight">Research <span class="gold-gradient-text italic">archive</span></h1>
<p class="text-slate-300 text-sm md:text-base leading-relaxed max-w-3xl mt-5">Technical analysis, threat intelligence reports, malware research, ransomware investigations, and defensive research notes.</p>
<div class="mt-10 space-y-4">{% for post in site.posts %}
<article class="gold-border rounded-xl p-6 md:p-7 group"><div class="flex flex-col md:flex-row md:items-start gap-5"><div class="md:w-32 shrink-0 font-mono text-xs text-slate-400">{{ post.date | date: "%b %d, %Y" }}</div><div class="flex-1"><div class="flex flex-wrap gap-2 mb-3">{% for category in post.categories %}<span class="px-2 py-1 rounded border border-horo-gold/30 bg-horo-gold/10 text-horo-gold font-mono text-[10px] uppercase">{{ category | replace: '-', ' ' }}</span>{% endfor %}</div><h2 class="font-serif text-xl md:text-2xl font-bold text-white group-hover:text-horo-gold transition"><a href="{{ post.url | relative_url }}">{{ post.title | escape }}</a></h2>{% if post.excerpt %}<p class="text-slate-300 text-sm leading-relaxed mt-2 max-w-3xl">{{ post.excerpt | strip_html | normalize_whitespace | truncate: 240 }}</p>{% endif %}<div class="flex flex-wrap gap-3 mt-4 font-mono text-xs text-slate-500">{% for tag in post.tags limit:5 %}<span>#{{ tag }}</span>{% endfor %}</div></div><a href="{{ post.url | relative_url }}" class="text-horo-gold font-mono text-xs font-semibold">READ →</a></div></article>
{% else %}<div class="gold-border rounded-xl p-8 text-center text-slate-400 font-mono text-sm">No research has been published yet.</div>{% endfor %}</div>

---
layout: home-lower.njk
title: Accessible Systems Homepage
description:
---

# Accessible Systems, inc.

<div class="homepage-row homepage-hero">
  <div>
    <p>Expert Digital Accessibility Services.</p>
    <a href="contact" class="btn">Contact us today!</a>
  </div>
  <img src="img/homepage-hero.png" alt="Keyboard with Accessibility button" />
</div>

<div class="homepage-row homepage-grid">
  {% for homepage-teaser in collections.homepage-teaser %}
  <div class="homepage-blurb {{ homepage-teaser.data.title | lower }}">
    {{homepage-teaser.data.icon}}
    <div>
      <h2>{{homepage-teaser.data.title}}</h2>
      <p>{{homepage-teaser.data.teaser}}</p>
      <a href="{{homepage-teaser.url}}" class="btn">{{homepage-teaser.data.title}} at ASI</a>
    </div>
  </div>
  {% endfor %}
</div>

<div class="homepage-row  homepage-grid-bottom">
  <div class="homepage-blurb">
    <h2>We look forward to serving your accessibility needs.</h2>
    <p>For more information, or if you would like an ASI representative to contact you, please take a moment to complete our contact form.</p>
    <svg viewBox="0 0 175 175" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><clipPath id="d"><circle cx="87.5" cy="87.5" r="87.5"/></clipPath><circle cx="87.5" cy="87.5" fill="#ec3788" r="87.5"/><circle cx="87.5" cy="87.5" fill="none" r="87.5"/><g clip-path="url(#d)"><path d="m42.8 119.45v12.34l65.01 65 93.84-84.21-70.48-70.47-36.31.55-21.31-.55-27.71 1.46z" fill="#ec3788" opacity=".5"/></g><path d="m56.25 113.54v5.21h62v-5.21zm31.25-26h26v10.38h-26zm-31.25 0v5.21h15.62v-5.25zm28.65-5.25a2.61 2.61 0 0 0 -2.61 2.61v15.62a2.6 2.6 0 0 0 2.61 2.6h31.25a2.6 2.6 0 0 0 2.6-2.6v-15.62a2.61 2.61 0 0 0 -2.6-2.61zm2.6-20.83h26v10.41h-26zm-31.25 0v5.21h15.62v-5.21zm28.65-5.21a2.61 2.61 0 0 0 -2.61 2.6v15.63a2.6 2.6 0 0 0 2.61 2.6h31.25a2.6 2.6 0 0 0 2.6-2.6v-15.63a2.61 2.61 0 0 0 -2.6-2.6zm-36.3-10.41h77.8a2.7 2.7 0 0 1 2.76 2.76v77.81a2.7 2.7 0 0 1 -2.76 2.76h-77.8a2.7 2.7 0 0 1 -2.76-2.76v-77.81a2.7 2.7 0 0 1 2.76-2.76zm0-5.22a8 8 0 0 0 -8 8v77.81a8 8 0 0 0 8 8h77.8a8 8 0 0 0 8-8v-77.83a8 8 0 0 0 -8-8z" fill="#fff"/></svg>
  </div>

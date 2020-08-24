---
layout: training.njk
title: Training
shortTitle: Training
tags: homepage-teaser
teaser: Proper training is key to ensuring accessibility and vital to the implementation of a successful accessibility strategy. We offer customized webinar classes tailored to your organization.
icon: <svg viewBox="0 0 175 175" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><clipPath id="c"><circle cx="87.5" cy="87.5" r="87.5"/></clipPath><circle cx="87.5" cy="87.5" fill="#33ab19" r="87.5"/><g clip-path="url(#c)"><path d="m51.54 119.42 65.01 65.01 76.95-65.15-70.47-70.48-8.56 8.68-24.86-22.49-1.94 18.23 11.25 9.96-26.58 1.4-15.57-15.68 4.81 13.45 7.1 6.87-4.59 20.28-8.84-7.48-17.48 3.91 25.03 23.29z" fill="#33ab19" opacity=".5"/></g><path d="m53.78 120.33a3.5 3.5 0 0 0 2.16-.83l8.13-8.14a3.05 3.05 0 0 0 -4.32-4.36l-8.13 8.14a3.1 3.1 0 0 0 0 4.32 3.18 3.18 0 0 0 2.16.87zm66.44 0a3.48 3.48 0 0 0 2.16-.83 3.1 3.1 0 0 0 0-4.32l-8-8a3.06 3.06 0 0 0 -4.32 4.33l8 8a5.2 5.2 0 0 0 2.16.82zm-80.06-33.22h13a3 3 0 1 0 0-6h-13a3 3 0 1 0 0 6zm71.6-23.93a3.5 3.5 0 0 0 2.16-.83l9.13-9.13a3.06 3.06 0 0 0 -4.32-4.33l-9.13 9.11a3.1 3.1 0 0 0 0 4.32 3.48 3.48 0 0 0 2.16.86zm-50.18-.83a2.77 2.77 0 0 0 2.16.83 3.53 3.53 0 0 0 2.17-.83 3.12 3.12 0 0 0 0-4.32l-9.14-9.14a3.06 3.06 0 1 0 -4.32 4.33zm57.31 21.93a3 3 0 0 0 3 3h13a3 3 0 1 0 0-6h-13a2.8 2.8 0 0 0 -3 3zm-31.22-31.06a3 3 0 0 0 3-3v-12.95a3 3 0 1 0 -6 0v12.95a3.09 3.09 0 0 0 3 3zm3 41.53 7.33-6.82a3.06 3.06 0 1 0 -4.15-4.49l-6.15 5.82-6.14-5.82a3.06 3.06 0 0 0 -4.16 4.49l7.31 6.82v18.25a3 3 0 1 0 6 0v-18.25zm5.82 41.71a3 3 0 0 0 -3-3h-12.8a3 3 0 0 0 0 6h12.79a3.09 3.09 0 0 0 2.99-3zm-26.93-10.46a3 3 0 0 0 3 3h28.57a3 3 0 1 0 0-6h-28.58a3 3 0 0 0 -2.99 3zm-5.15-54.67a22.1 22.1 0 0 1 9.64-9.47c9.14-4.65 19.1-4.48 27.24.66a26.14 26.14 0 0 1 12.63 22.6 27.11 27.11 0 0 1 -5.16 15.78 23.05 23.05 0 0 0 -4.32 13.29 3 3 0 0 1 -6 0 29.06 29.06 0 0 1 5.48-17 20 20 0 0 0 4-12.12 20.23 20.23 0 0 0 -9.8-17.45c-6.32-3.82-14.12-4-21.43-.33a15.74 15.74 0 0 0 -7 7c-4 7.81-3.66 16.28 1 22.93a28.35 28.35 0 0 1 5.31 16.78 3 3 0 1 1 -6 0 22.91 22.91 0 0 0 -4.15-13.29c-6-8.65-6.65-19.44-1.5-29.41z" fill="#fff"/></svg>
eleventyNavigation:
  key: Training
  order: 3
---

At Accessible Systems, Inc., we believe that proper training is key to ensuring accessibility and vital to the implementation of a successful Section 508 strategy. Our staff of industry experts has an in-depth knowledge of Section 508 requirements and a clear understanding of the needs of people with disabilities.

{% for Training in collections.Training %}

<section class="content {{ Training.data.anchor | lower }}" id="{{ Training.data.anchor | urlize | lower }}">
  {{Training.data.icon}}
  <div>
    <h2>{{Training.data.title}}</h2>
    <p>{{ Training.templateContent | safe }}</p>
  </div>
</section>
{% endfor %}

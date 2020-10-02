---
layout: home.njk
title: Accessible Systems Homepage
description: null
published: true
---

# Accessible Systems, inc.

<div class="homepage-hero">
  <div class="hero-text">
    <p>Expert Digital Accessibility Services.</p>
    <a href="contact" class="btn">Contact us today!</a>
  </div>
  <!-- <img src="img/homepage-hero.png" alt="Keyboard with Accessibility button" /> -->
  <div class="hero-graphic">
    <p>are you accessible?</p>
  </div>
</div>

<div class="homepage-row homepage-grid">
  {% for homepage-teaser in collections.homepage-teaser %}
  <div class="homepage-blurb {{ homepage-teaser.data.title | lower }}">
    {{homepage-teaser.data.icon}}
    <div>
      <h2>{{homepage-teaser.data.title}}</h2>
      <p>{{homepage-teaser.data.teaser}}</p>
      <a href="{{homepage-teaser.url}}" class="btn">More About {{homepage-teaser.data.shortTitle}}</a>
    </div>
  </div>
  {% endfor %}
</div>

<div class="homepage-row  homepage-grid-bottom">
  <div class="homepage-blurb">
    <h2>We look forward to serving your accessibility needs.</h2>
    <p>For more information, or if you would like Terri Youngblood Savage, the owner to contact you, please take a moment to complete our contact form.</p>
    <svg viewBox="0 0 175 175" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><clipPath id="d"><circle cx="87.5" cy="87.5" r="87.5"/></clipPath><circle cx="87.5" cy="87.5" fill="#ec3788" r="87.5"/><circle cx="87.5" cy="87.5" fill="none" r="87.5"/><g clip-path="url(#d)"><path d="m42.8 119.45v12.34l65.01 65 93.84-84.21-70.48-70.47-36.31.55-21.31-.55-27.71 1.46z" fill="#ec3788" opacity=".5"/></g><path d="m56.25 113.54v5.21h62v-5.21zm31.25-26h26v10.38h-26zm-31.25 0v5.21h15.62v-5.25zm28.65-5.25a2.61 2.61 0 0 0 -2.61 2.61v15.62a2.6 2.6 0 0 0 2.61 2.6h31.25a2.6 2.6 0 0 0 2.6-2.6v-15.62a2.61 2.61 0 0 0 -2.6-2.61zm2.6-20.83h26v10.41h-26zm-31.25 0v5.21h15.62v-5.21zm28.65-5.21a2.61 2.61 0 0 0 -2.61 2.6v15.63a2.6 2.6 0 0 0 2.61 2.6h31.25a2.6 2.6 0 0 0 2.6-2.6v-15.63a2.61 2.61 0 0 0 -2.6-2.6zm-36.3-10.41h77.8a2.7 2.7 0 0 1 2.76 2.76v77.81a2.7 2.7 0 0 1 -2.76 2.76h-77.8a2.7 2.7 0 0 1 -2.76-2.76v-77.81a2.7 2.7 0 0 1 2.76-2.76zm0-5.22a8 8 0 0 0 -8 8v77.81a8 8 0 0 0 8 8h77.8a8 8 0 0 0 8-8v-77.83a8 8 0 0 0 -8-8z" fill="#fff"/></svg>
  </div>

  <form id="contact" action="https://formsubmit.co/292013f29e46949b5eacb1085b445343" method="POST">
    <input type="hidden" name="_next" value="http://accessible-systems.com/">
    <input type="hidden" name="_subject" value="New Submission">
    <input type="hidden" name="_captcha" value="false">
    <input type="hidden" name="_template" value="box">
    <label for="honey" style="display:none;">Do not populate, thie field is to catch spammers</label>
    <input type="text" id="honey" name="_honey" style="display:none">
    <label for="name">Your name</label>
    <input type="text" id="name" name="Name" />
    <label for="email">Email</label>
    <input type="text" id="email" name="Email" />
    <label for="about">You'd like info about</label>
    <select id="about" name="About">
      <option value="Product Testing">Product Testing</option>
      <option value="Accessibility Consulting">Accessibility Consulting</option>
      <option value="Accessibility Training">Accessibility Training</option>
      <option value="Other">Other</option>
    </select>
    <label for="notes">Additional notes</label>
    <textarea id="notes" cols="15" rows="4" name="Additional Notes"></textarea>
    <div>
      <input type="submit" class="btn" value="Submit Form" />
    </div>
  </form>
</div>

<div class="homepage-row  logos">
  <h2>Some of Our Clients</h2>
  <div>
    <img src="img/logo-salesforce.png" alt="Salesforce">
    <img src="img/logo-avaya.png" alt="Avaya">
    <img src="img/logo-softwareag.jpg" alt="Software AG Government Solutions">
  </div>
  <div>
    <img src="img/logo-world-bank.jpg" alt="The World Bank">
    <img src="img/logo-ed.png" alt="U.S. Department of Education">
    <img src="img/logo-equal-opportunity.png" alt="U.S. Equal Employment Opportunity Commission">
    <img src="img/logo-doj.png" alt="U.S. Department of Justice">
  </div>
</div>

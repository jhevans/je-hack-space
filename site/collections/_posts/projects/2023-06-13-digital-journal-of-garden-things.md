---
layout: post
title: "Digital Journal of Garden Things"
---

This idea stemmed from the realisation that the little labels you get with plants could be so much more useful if you could back them up with a complete journal of everything you've done with and to that plant since you got it. QR Codes make this laughably easy to do, and what's more you can reassign the QR code once the plant has expired so the labels don't get wasted once the plant comes to the end of its life. 

The typical user journey I'm envisaging is:
1. Print off some generic labels using an app 
2. Start plonking them in the garden 
3. When you've plonked a label, scan it and plug in the details of what it's labelling, where it is, photos etc.
4. Return to the plant regularly, scan, photo, comment

If you were to start doing this on a regular basis you could amass a huge amount of relevant data both directly and indirectly. For example you could easily check what the weather had been doing, how much sun and shade it had received, how long it had been in the ground, how its growth has compared to previous plantings, how its growth compared to plantings of different cultivars, how it performed in different areas of the garden, how it performed as it was spaced, how it responded to drought and deluge.

There's a lot you could learn with just dumb web-dev but if you started introducing machine-learning techniques you'd open up even more possibilities, identifying possible problems, predicting how successful a given plant will be in a given spot, automatically mapping out a garden from photos, calculating shade and sunshine, providing recommendations.

Then there's the social and crowdsourcing potential, if you get lots of people using the app you could potentially connect people with similar plants so they can share knowledge.


## Minimal Viable Product

### _As a gardener I want to create a journal entry for a plant_

Acceptance Criteria:
- Can create new plant entry 
- URL is small enough to be serialised as a QR code
- Fields:
  - Type/Cultivar (optional)
  - Planted date (auto-generated but editable)

### _As a gardener I want to add an image for a plant_

Acceptance Criteria:
- Can add timestamped image to existing journal entry

### _As a gardener I want to print QR codes so that I can label my plants with them_

Acceptance Criteria:
- Can navigate to printable page containing full A4 sheet of newly generated QR codes
- Scanning one of these creates a new plant entry
- Scanning one of these again recalls the created plant entry


## Unknowns and prerequisites

- [x] How do I generate QR codes? What's the maximum length I can reasonably use?
  - Option 1: Do it in browser - https://davidshimjs.github.io/qrcodejs/
  - Option 2: Do it on server? Not sure this gives any benefit and just creates additional traffic
- [x] Does this influence how I should generate my unique ids? Can I just use UUID's or should I use some other algorithm?
  - Yes, there's no limit on how long you can make the url but it affects the size and resolution of the QR code. Shorter is better so use something like [nanoid](https://github.com/ai/nanoid/)
- [ ] Come up with a name
  - garden, grow, green, journal, things, life, pot, branch, stem, shoot, flower, sapling, trunk, bough, mulch, diary, leaf, ceres, demeter, brigid, frey, 
- [ ] Hosting at short url
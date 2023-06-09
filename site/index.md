---
layout: page
---

[<img src="static/images/owl.jpg"
     alt="Owl"
     style="margin-bottom:10pt; width:50%; margin-left: auto; margin-right:auto; display: block;" />](https://jhevans.github.io/je-hack-space/)
Owl by Bing Image Creator

## Description

An umbrella project for all my personal stuff.

## Architecture Decision Records
<ul>
  {% for adr in site.adrs %}
    <li>
      <a href="/je-hack-space{{ adr.url }}">{{ adr.title }}</a>
    </li>
  {% endfor %}
</ul>

## [Posts](/je-hack-space/posts)

## To do

- [x] Husky for git hooks
- [x] ESLint on commit
- [x] Run E2E on push
- [x] Define what you want to achieve with this
- [x] Set up Github pages with [Jekyll](https://jekyllrb.com/docs/)
- [x] Add [Renovate](https://www.mend.io/renovate/)
- [x] Get Jekyll working locallyz
- [x] Fix [URL prefix missing bug](https://github.com/jhevans/je-hack-space/issues/1)
- [x] Add link to Github pages in Readme.md
- [x] Run build in Github Actions
- [x] Add link to Github pages on application landing page
- [x] Fix VSCode Jest integration
- [x] Continue with [first steps](https://docs.nestjs.com/first-steps)
- [x] Start building some features

## Goals
Establish a project that you will keep adding to and make use of by:
  - Making it effortless to add to
  - Making it joyful to work with
  - Making it genuinely useful
  - Making it easily extendable

## Principles
- *Working beats good, good enough beats perfect*
  - The goal is always good code but I'm working within constraints and its more valuable to have bad code that does the thing than good code that's never finished. Get it working, then add tasks to refine and get it to good if you like. You're going to get more out of having useful features than refining code to perfection, so when it's 'good enough' move on.
- *Everything in baby steps*
  - I'm going to be time constrained when I'm working with this, I might get half an hour to and hour at a time typically, so I should break down the work into the smallest commits I possibly can so that I'm able to consistently nudge it forward. By maintaining progress it'll be a happier experience to work with it.
- *Making hard things easy beats doing hard things*
  - This is partly a sandbox for testing new techniques and tools that make the development process as a whole smoother. I should do linting, static analysis, hooks, CI etc and do it deliberately and early to catch as many issues as I can before they become issues. Furthermore this should be joyful to work with - so if something is hard and unpleasant, stop doing it and find a better way. 

## Features
- [x] Add AI generated logo
- [x] Basic blogging capability in Markdown
- [x] Widget showing current [Carbon intensity](https://carbon-intensity.github.io/api-definitions/#carbon-intensity-api-v2-0-0)
  - [x] Get some values back
  - [x] Make it look pretty (ish)
- [ ] Provide appropriate nudges to document stuff (see [ADR 001 - Use ADRs](./docs/adr/001%20-%20Use%20ADRs))
- [ ] Functional and aesthetically pleasing UI
- [ ] Only run tests if relevant folders have changed
- [ ] [Blog linting](https://www.ayyjohn.com/posts/linting-a-jekyll-blog-with-mega-linter)
- [ ] Private posts
- [ ] Cloud hosting


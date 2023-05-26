---
date: 25-05-2023
---

# Use ADRs

## Summary

Define a simple blogging set up

## Context

I'm in the habit of putting down thoughts and ideas that I want to keep hold of in Trello cards. This works well but has a few drawbacks, notably the lock in to Trello as a service. One of the motivations for this project is to embed the habit of ongoing work on this codebase so a logical way of doing this is to piggy back on an already established habit. In the long term my hope is that I will be able to have both public and private pages but in the interests of getting something working quickly I will focus on public first.


## Problem Exploration

There are a few decisions that I've already made which are our initial requirements:
- Must support Markdown
- Initially adding a new page should be as simple as committing to this git repo
- Do the simplest thing to start and refine later

Given Github Pages already fulfills both these criteria it seems like a perfect engine for this.

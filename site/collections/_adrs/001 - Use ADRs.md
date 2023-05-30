---
date: 25-05-2023
layout: post
title: Use ADRS
---


# Use ADRs

## Summary

Adopt Architecture Decision Records (ADRs) as a thing. 

## Context

I'm starting a new project and want to do good things that I can then apply to my day to day work. I am likely to be the only person who reads these ADRs but I'm conscious of the power of habit and I want to embed the habit of documenting little, often and early in an effort to make documentation less of a 'hard thing' and into a 'hard thing made easy'.

## Decision

I'll adopt ADRs both as a record of a decision made, the context it was made in and the process followed to reach the decision. This ADR will serve as a template for future ADRs.

## Reasoning

I've used a very similar method in my work at the MoJ and its proven very useful on a number of occasions. The benefits and drawbacks I've observed are:

### Pros
- Incredibly helpful when you remember a decision was made but can't remember the specifics of why
- Useful primer for new starters to the codebase
- Relatively lightweight method of documentation

### Cons
- You get back what you put in - requires discipline to get the most out of it
- Easy to forget if you don't embed it as habit
- Pareto principle applies - 80% of the docs you produce probably won't be useful, the remaining 20% will

Some of the cons listed come down to human factors which we can potentially influence with automation. To this end I'll add 'Provide appropriate nudges to document stuff' as a planned feature.
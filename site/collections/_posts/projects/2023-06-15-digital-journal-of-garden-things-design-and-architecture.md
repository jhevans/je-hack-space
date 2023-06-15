---
layout: post
title: "Digital Journal of Garden Things - Design and Architecture"
---

## Architecture
Here are the priorities when choosing an architecture:
- **Small** - The primary interaction that we need to make seamless is the scan photo, comment. This is going to be done outside where we may have poor internet so it needs to be built from the outset to have as little bundled nonsense as possible.
- **Fast** - People (i.e. me) will turn off with even the smallest amount of friction when it comes to updating this app, it needs to be lightning fast to update. Read operations are less critical but again it's all happening outside so it should populate gracefully over slow connections with no jumping around of components ([Content Jumping](https://css-tricks.com/content-jumping-avoid/)). It's as much about being fast to reason about as fast to load.
- **Simple** - From a development standpoint I want to keep the footprint small and productive. The more stuff I don't have to worry about the better.
- **Relational** - The added value beyond simple comments and the like will come as soon as you start to expose the relationships between different elements. As such, though a super-fast document or key value store might be more appealing initially there will come a time when the relationships between things needs to be modelled. A graph database might also be a benefit so the obvious choice, Postgres, becomes even more obvious given [Apache AGE](https://age.apache.org/) is a thing.


## Design
- **Intuitive** - It should be obvious what you can do without resorting to documentation. The principle of least surprise applies.
- **80/20** - The user journeys should be optimised for the 20% of stuff that delivers 80% of the value. The remaining 80% should then be optimised in the same way and so on.
- **Clean** - Show the 20% that the user is interested in and as little cruft other than this as possible

## Options
  [Fkit stack](https://www.youtube.com/watch?v=rFP7rUYtOOg&ab_channel=Fireship) - This is going to be starting point because:
  
  - ✔️ **Svelte** - Like the syntax, it's fast and small
  - ✔️ **Sveltekit** - No strong opinions here but it's the obvious choice to go with the previous one, KISS
  - ✔️ **Tailwind** - This is a new one on me but I've heard it mentioned a couple of times. It compiles to minimal CSS and makes CSS (which is hell) easier from what I understand so seems like a no-brainer
  - ❓ [**Firebase**](https://www.youtube.com/watch?v=vAoB4VbhRzM&ab_channel=Fireship) - This I'm not quite sure about - I could go for it initially and I'm sure I'd get quite a way before hitting any limits but I'd rather find a solid, hosted Postgres implementation if at all possible. The only option seems to be Supabase which has a lot going for it but doesn't have integrated hosting... Having looked into everything that Firebase does, e.g. auth, API builders, metrics etc. I do feel like it's going to be about ten times quicker getting going with it. It also has an offline mode which is going to be useful when it comes to poor connections. Less good is the ~500KB bundle size, thankfully cacheable.
  
  

  Other options:

  - ❓ [**Amplify**](https://www.youtube.com/watch?v=ucmbO2lWC2A&ab_channel=Fireship) - Very close between these two, they're both going to lock me in but I feel like Amplify would make it easier to extricate myself should I need to as the GraphQL layer is stack agnostic. Firebase is simpler to work with though and I think it'll be quicker to actually get some value out of it even if it reaches the limit of the database sooner. The js bundle for Amplify is nearly 1MB which is pretty poor, though cacheable.
  - ↗️ [**Supabase**](https://www.youtube.com/watch?v=WiwfiVdfRIc&ab_channel=Fireship) - This I think has real potential if ever I decide I do want to wean myself off Firestore/Dynamo or supplement it with a true relational database. For now though I just think using it would be additional overhead for zero initial benefit.
  - ✔️ [Vercel](https://vercel.com/storage/postgres) - Almost forgot to evaluate Vercel despite the fact it was the first one I was going to try - it has a Postgres stack as well as hosting and Sveltekit templates! Postgres is still in Beta and unfortunately Fireship hasn't done a deep dive on Vercel as yet but I think this may be the winner.

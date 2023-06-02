---
layout: post
title: "\"npm\" is not recognised as an internal or external command"
tags: windows
---

# A Schoolboy Error

tldr - The problem is exactly what you think it is, check your working

I kept getting this error message when running jest tests through the VSCode plugin in Windows. It's pretty self explanatory and familiar - npm isn't on the PATH env var that's in scope when the command gets run. The question was then why given that the `npm` command works fine in Git Bash which is set as the default editor.

I found [a Stack Overflow post](https://stackoverflow.com/questions/43983718/how-can-i-globally-set-the-path-environment-variable-in-vs-code/45637716#45637716) which gives a few indications as to ways to fix it. But I couldn't edit the default settings (not that I tried very hard) and editing the workspace settings didn't seem to work. I didn't like that idea anyway because outputting my local machine's PATH to the workspace settings is a definite anti-pattern. 

A solution that *did* work was to run VSCode using the `code` command from Git Bash. A bit clunky but makes sense that it would work as it's inheriting the PATH in a context where I know it's correct.

I'm just writing this now and thinking that literally the first thing I tried that I didn't even bother putting down because it's more or less the first thing you learn in coding school *should* have worked - i.e. update the User Path in Windows System Properties. I've just gone back and checked my work and found the problem. 

The path I should have had was `/c/Users/jheva/.nvm/versions/node/v20.2.0/bin` the path I did have ended in `/bin/npm`. I had it pointing to the executable not the directory 🙄

Planet of the apes syndrome strikes again 😑
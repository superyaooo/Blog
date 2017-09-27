---
layout: post
title: What to do when .gitignore is not ignoring files
tags: [git]
---
Have you ever added new files/paths into your .gitignore and couldn't figure out why git is still tracking the supposed-to-be-ignored files/paths when you push your code? Well, I have, and here's why and what to do.<!--more-->

Why:
* When you first pushed your code, the files were not included in the .gitignore thus were tracked by git. And since git only ignores unversioned files, it keeps tracking the files even when you added them into the .gitignore at a later time.

What to do to fix:
* <strong>Commit your current changes</strong> (so you don't lose them in the following process)
* Run the following command at the root of your git repo:
```
git rm -r --cached .
git add .
git commit -m "fix gitignore or whatever message you want to write"
```
* Push your changes to remote

The command "`git rm -r --cached .`" un-stages and removes all files from the index, and makes git stop tracking the files/paths you just added in the .gitignore file (see documentation [here](https://git-scm.com/docs/git-rm#git-rm---cached) ).

<em>Note:</em> You can also replace the above mentioned line with "`git rm -r --cached <filename/path>`" if you only want to do this to one file.

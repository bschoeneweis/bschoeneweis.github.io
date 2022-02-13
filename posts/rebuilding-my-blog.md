---
title: 'Rebuilding my blog from scratch with Next.js'
date: '2022-01-22'
tags: ['nextjs', 'react', 'javascript']
description: 'Rebuilding my blog from a Gatsby.js templated site to a custom Next.js site from scratch.'
---

## Version `0.1.x`

The first iteration of my blog was built using a pre-configured [GatsbyJS](https://www.gatsbyjs.com/) site template.  I chose a template ([Novela by Narative](https://novela.narative.co/)) that checked all my boxes for an easy tool to start sharing my writing.

- The theme was modern and sleek
- Everything was mobile-friendly
- Lots of plug-and-play options and prebuilt components that flowed together well
  - Article metadata that connected to an author bio page
  - Reading time estimates and progress bars
  - Easy image optimizations
  - A config for a Google Analytics tag
- Deployment was straightforward with GitHub pages
  
But most importantly, all I had to do was add Markdown pages to a directory to get started.  At the time, I didn't really know much about GatsbyJS, other than it being a popular static site generator, and my modern JavaScript knowledge was introductory at-best (albeit growing each and everyday).  So this seemed like the perfect route forward.

## The problem

As I began writing more and more posts, I began noting different features I wanted to include on my site.  These weren't terribly complex additions, but rather simple things like adding tags to group common posts or wanting to change the styling of the inline code snippets.

**I soon discovered that trying to color outside the lines when using a cookiecutter template can make things very complex, very quickly.**

I found myself digging into nested modules in my `node_modules` folder where I would need to overload different functions and components to get what I wanted.  It was added complexity than I didn't foresee when I signed up to use a template.  Plus, this site could eventually house more than just a blog, and the template I chose wasn't designed to accommodate much else.

## What now?

If you haven't noticed from the timestamp on my last article, I haven't written a post in ~5 months.  This is largely because I was interviewing for new positions and eventually joined the team at [Radar](https://radar.com) as a Product Engineer!  Preparation for interviews and taking a break after accepting this new position occupied much of the time I would normally spend writing.

The reason I mention this is because one of the technologies we use at Radar is [Next.js](https://nextjs.org/).  Next.js was something I was already trying to learn in my free time, but I've been able to gain a good amount of experience with it since I've started my new role, and my modern JavaScript fundamentals and understanding have grown drastically in the past several month (expect a lot more JavaScript posts going forward).

Seeing the power of Next.js and knowing I wanted my blog to be more flexible, I decided to recreate my blog from scratch using Next.js!

---

## Next.js

A quick prelude on [Next.js](https://nextjs.org/) for those who have never used it.  [Vercel](https://vercel.com/), the creators of Next.js (and a company to keep 👀 on) says it best, Next.js is...

> "The [React](https://reactjs.org/) Framework for Production"

Next.js comes with a ton of great built-in features including:
- Static + server-side rendering
- Smart bundling and code-splitting, TypeScript support, Routing, Fast Refresh, CSS + Sass support all without complex configs
- Image optimization
- Intuitive code organization (because there are a million-plus ways to organize a React project)
- Static HTML exports (this one is important for our purposes)
- So much more...

**It really is an awesome framework.**

The [Next.js hands-on tutorial](https://nextjs.org/learn/basics/create-nextjs-app) coincidentally enough is setting up a blog with Next.js, so following this tutorial will set you up with a great and simplistic starter blog (but not quite ready for deployment unless using Vercel).

A few things this tutorial covers:
- Creating the Next.js app
- Basics like in-app navigation, styling, adding images and more
- Setting up metadata, blog pages, and pre-rendering
- Markdown -> HTML
- Reworking your app to use dynamic routing

The tutorial is great so I won't cover anything that's already covered there.  If you're interested in using Next.js, you should definitely go through it.

## Beyond the basics

The [Next.js tutorial](https://nextjs.org/learn/basics/create-nextjs-app) is a great starting point, but I wanted to get my blog to a place where it was comparable to the previous iteration, along with the new features that encouraged my to take this project on in the first place.
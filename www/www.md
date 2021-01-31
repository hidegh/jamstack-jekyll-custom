---
layout: post
title: Blogging Like a Hacker
---

**Www** static content!

Althoug static content is fully processed via **FrontMatter** (if header exists), also it's written to the output **_site** directory...\
...yet when using static content inside **Liquid**, the output itself won't be available to inject,\
...**we are able just to inject the original HTML/MD content**

So:
- no output property
- only plain content will be "injected"

Usage reuires a **newly introducec pipe operator**:\
{% raw %} {{ site.pages \| find: "path", "www/www.md" \| property: "content" \| markdownify }} {% endraw %}

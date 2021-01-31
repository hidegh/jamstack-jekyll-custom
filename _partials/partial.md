---
title: Partial
---

**Partial** content.

This works a bit differently than static pages.

If used in a collection defined after the partial collection, then the full FrontMatter output will be displayed. This means we can use it only in a custom collections defined after the partials collection inside _config.yml

If used elsewhere, it'll behave similarly to static pages - the original HTML/MD will be injectrd.

Usage: {% raw %} {{ partials \| find: "path", "_partials/partial.md" }} {% endraw %}


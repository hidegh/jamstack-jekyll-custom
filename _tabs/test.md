---
title: Test
order: 5

---

This is a **test** tab content!


## About tab

...it's content can be included as it's rendered before the sample tab!
{% assign at =  site.tabs | find: "path", "_tabs/about.md" %}

About tab's Layout: {{ at.layout }}

{{ at }}

<textarea class="w-100">{{ at | jsonify | strip_html }}</textarea>


## Simple tab

...when including this tab, we won't see the desired ouput, just the pure HTML/MD content of it, as the output is generated later (after this test tab)!
{% assign st =  site.tabs | find: "path", "_tabs/simple.md" %}

About tab's Layout: {{ st.layout }}

{{ st }}

<textarea class="w-100">{{ st | jsonify | strip_html }}</textarea>


## Partials collection

Partial collection content is rendered after the tabs, so it's safe to include it here.

{% assign p =  site.partials | find: "path", "_partials/partial.md" %}

Partial's layout: {{ p.layout }}

{{ p }}

<textarea class="w-100">{{ p | jsonify | strip_html }}</textarea>


## Static content

Static content is reusable everywhere, it should have no Liquid syntax.

Although **FrontMatter** does process static pages, when creating all the output, via Liquid just the original content (HTML or MD) is available at "runtime".

{% assign s =  site.pages | find: "path", "www/www.md" %}

Www static page's layout: {{ s.layout }}

{{ s | property: "content" | markdownify }}

<textarea class="w-100">{{ s | jsonify | strip_html }}</textarea>

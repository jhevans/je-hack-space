---
permalink: /adrs/
---

<ul>
  {% for adr in site.adrs %}
    <li>
      <a href="{{ adr.url }}">{{ adr.title }}</a>
    </li>
  {% endfor %}
</ul>
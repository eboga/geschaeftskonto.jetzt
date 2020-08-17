## FAQ

### Examples

```twig
{% if page.faq %}
    {%- assign faq = site.translations[site.lang] | property: page.faq -%}
    {%- include faq.html faqs=faq it=true -%}
{% endif %}
```

```twig
<div class="c-FAQ c-FAQ--it c-FAQ--ib" markdown="0">
    {%- assign faq = site.translations[site.lang].faqs.foobar -%}
    {%- include faq.html faqs=faq wrapper=false -%}
</div>
```
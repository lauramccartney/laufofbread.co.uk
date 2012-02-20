---
---

var portfolio = [
    {% for post in site.categories.portfolio  %}{ 
        title: "{{ post.title }}",
        description: "{{ post.content }}",
        id: "{{ post.id | remove_first:'/' | replace:'/','-' | escape }}",
        hero: "{{ post.hero }}"
    }{% if forloop.last %}{% else %},{% endif %}
    {% endfor %}
]


var portfolio_index = {
    {% for post in site.categories.portfolio  %}"{{ post.id | remove_first:'/' | replace:'/','-' | escape }}" : {{ forloop.index0 }}{% if forloop.last %}{% else %},{% endif %}
    {% endfor %}
}
---
---

var portfolio = [
    {% for post in site.categories.portfolio  %}{ 
        title: "{{ post.title }}",
        description: "{{ post.content }}",
        id: "{{ post.id | remove_first:'/' | replace:'/','-' | escape }}"
    }{% if forloop.last %}{% else %},{% endif %}
    {% endfor %}
]
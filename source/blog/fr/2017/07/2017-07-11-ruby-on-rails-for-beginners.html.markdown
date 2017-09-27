---
title: Ruby on Rails pour les novices
date: 2017-07-11 18:12 BST
subtitle: Quisquam consequatur ratione iure id officia cupiditate nulla
summary: Part 2 nisi maxime eius, vitae commodi explicabo omnis consectetur, ex dolorem? Totam debitis corporis eius.
description: Part 2 totam dicta consequatur, accusamus laborum eius illum a, tempore, ducimus labore hic nobis nemo quibusdam veritatis quis.
category: code
header_image:
lang: fr
tags: art, programming, ruby
---

Lorem ipsum [first article](http://www.nicolasdotto.com/blog/loremipsum/) Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis quisquam perspiciatis doloribus porro repudiandae ipsum sed quam eius officiis! Accusantium facere, possimus perferendis! Alias maiores veritatis delectus repellendus laboriosam nobis.

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis ipsam deleniti quae, animi non odit cupiditate, corrupti ab. 

Lorem ipsum dolor sit amet [this series](http://www.nicolasdotto.com/blog/loremipsum/) lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda nemo iure temporibus ducimus, omnis expedita rem voluptas neque unde molestiae fugit ratione reprehenderit, aspernatur, commodi soluta alias dicta, repudiandae corporis.

Totam quas voluptas unde nulla alias, cumque similique impedit vitae sint:
[Middleman Docs]        (https://middlemanapp.com/basics/install/) sunt possimus animi illum! Temporibus ipsa adipisci sequi perspiciatis. Animi, ea ut "[Github Pages](https://pages.github.com)" perferendis voluptatibus quia dolor eos possimus facilis. Recusandae.
Ullam, [lorem ipsum dolor sit amet](http://www.nicolasdotto.com/starting-is-hard/) ea id natus assumenda explicabo blanditiis distinctio odio ducimus iusto quasi amet facilis, aperiam, necessitatibus modi harum eius! Amet, odit, illo.

## Titre principal 1
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis nemo vero aspernatur nulla commodi voluptates voluptatum illo labore dignissimos:

<pre><code class="language-bash">
$ gem install middleman
</code></pre>

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, assumenda aperiam accusamus quas expedita? Facere, libero, natus fugiat est labore quibusdam culpa id ipsum `$ gem install middleman-blog` lorem ipsum dolor sit amet, consectetur adipisicing elit.

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti consequuntur debitis architecto fuga tenetur quod officia error, ipsa nesciunt, minima odio, laborum veniam `mkdir` fugit hic nobis. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque aspernatur praesentium similique iusto sed fugit explicabo eligendi, officia, eum tenetur qui ab [Github Pages](https://pages.github.com) lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime dolorum harum vero similique cumque iste facilis, distinctio ratione excepturi voluptatem voluptate corporis molestias molestiae nostrum blanditiis.

## Titre principal 2
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt aspernatur modi rem tempora atque quisquam fugit incidunt enim fugiat neque deserunt, voluptatem totam excepturi mollitia ut unde laboriosam eaque ratione. Obcaecati labore suscipit dignissimos, vel nesciunt itaque eius hic laboriosam voluptatibus fugiat? Ipsum voluptates sequi neque architecto quaerat:

<pre><code class="language-bash">
$ middleman init your_project_name
</code></pre>

Lorem ipsum dolor sit amet, 'lorem*quibusdam*ipsum', error nihil labore sunt numquam ratione ducimus dicta, molestiae rerum neque labore `nicolasdotto.github.io`. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae ducimus quasi accusantium debitis `--template=blog` lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci molestias tempora animi facilis labore, enim, corrupti est? Id quam dolorem ab, distinctio eveniet consequatur.

## Titre principal 3
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum, dolore fuga. Rem praesentium quidem necessitatibus hic distinctio officia consequatur quasi maiores dolore sunt inventore, explicabo temporibus nam, dignissimos velit quae.

### Sous-titre 1
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis, maiores, ex! Voluptate illo facere, dignissimos autem repellendus consequatur dolor magnam beatae minus? Dolorem eos aut voluptas distinctio non illum id:

- [middleman-blog](https://github.com/middleman/middleman-blog) (lorem ipsum dolor sit amet, consectetur adipisicing elit)
- [nokogiri](https://github.com/sparklemotion/nokogiri) (lorem ipsum dolor sit amet, consectetur adipisicing elit)
- [redcarpet](https://github.com/vmg/redcarpet) (lorem ipsum architecto voluptas molestias voluptatum cumque mollitia voluptatibus praesentium)
- [middleman-syntax](https://github.com/middleman/middleman-syntax) (lorem ipsa maxime, ratione doloribus eaque, vitae esse, aliquid, ipsum)
- [middleman-autoprefixer](https://github.com/middleman/middleman-autoprefixer) (lorem illum quidem nemo, praesentium eveniet nam, iure labore itaque provident blanditiis eaque)
- [middleman-deploy](https://github.com/middleman-contrib/middleman-deploy) (lorem ipsum eius adipisci officia sint ab magni voluptatem assumenda)
- [middleman-search\_engine\_sitemap](https://github.com/Aupajo/middleman-search_engine_sitemap) (lorem ipsum voluptate corrupti iure iste voluptatem doloribus)

Saepe dolore quasi sunt consectetur quam nemo nulla rerum `gem "name_of_extension"` lorem ipsum. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis esse totam enim amet beatae alias nihil ullam quos `$ bundle install`. Iure laboriosam perferendis assumenda, laudantium, ipsum consequuntur qui animi neque error aspernatur necessitatibus, officia. 

### Sous-titre 2
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium, officia reprehenderit rerum cupiditate earum magni, iste facere excepturi voluptas, veritatis a nihil aliquid nisi modi tempora consequatur culpa dolore vitae.

Eos laboriosam sit accusantium tenetur iusto est reiciendis:

<pre><code class="language-ruby">
activate :blog do |blog|
    blog.prefix = 'blog'
    blog.sources = 'articles/{year}-{month}-{day}-{title}.html'
    blog.permalink = '{title}'
    blog.default_extension = '.markdown'
    blog.layout = '/blog/blog_layout'
    blog.tag_template = 'tag.html'
    blog.calendar_template = 'calendar.html'
    # Enable pagination
    blog.paginate = true
    blog.per_page = 10
    blog.page_link = 'page/{num}.html'
    blog.custom_collections = {
        category: {
            link: '/categories/{category}.html',
            template: '/category.html'
        }
    }
end
</pre></code>

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam consequuntur praesentium veniam pariatur, eligendi, voluptate placeat nihil repudiandae autem sit cum eius tempora. Minima illo excepturi numquam consequuntur ipsa, cumque. Lorem ipsum dolor sit amet, consectetur adipisicing elit. 

Porro alias est exercitationem corporis non nulla [check it out](https://github.com/nicolasdotto/nicolasdotto.github.io/blog/source/config.rb). Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero voluptas natus enim, deserunt quaerat aut repellat, voluptatibus consectetur laborum numquam voluptates `relative_links` lorem ipsum `relative_links` dolor sit `directory_indexes`.

## Pour conclure
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius quos aliquam assumenda, sequi vel, esse ipsum. Dignissimos repellat explicabo vero minima qui libero laborum error, esse tenetur architecto exercitationem voluptate.
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores laborum modi labore ut. Eius aut nobis magni odit, accusantium, numquam obcaecati quia, (voluptates atque omnis) sunt officia rerum facilis explicabo.

Neque maxime nisi recusandae dolor laboriosam pariatur incidunt itaque sapient [Github](https://github.com/nicolasdotto/nicolasdotto.github.io), [email](http://www.nicolasdotto.com#contact) or [Twitter](http://www.twitter.com/nicodosw11).

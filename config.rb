set :site_url, "http://www.nicolasdotto.com"
set :site_description, "Nicolas Dotto London Based Freelance Web Developer"

# Search_Engine_Sitemap
set :url_root, 'http://www.nicolasdotto.com'
activate :search_engine_sitemap, default_change_frequency: "weekly"

Time.zone = 'London'
activate :i18n, :langs => [:en, :fr]
###
# Blog settings
###

# Add blogging to Middleman Install
activate :blog do |blog|
  # blog.prefix = 'blog'
  blog.name              = 'en'
  blog.new_article_template = File.expand_path('../source/blog/en/blog-article-template.erb', __FILE__)
  # blog.sources           = 'blog/{lang}/{year}-{month}-{day}-{title}.html'
  blog.sources           = "blog/en/{year}/{month}/{year}-{month}-{day}-{title}.html"
  blog.permalink         = "blog/{lang}/{year}/{month}/{day}/{title}.html"
  blog.default_extension = '.markdown'
  blog.layout            = 'blog-article-scatter' #blog-article-table
  # blog.tag_template = 'tag.html'
  blog.tag_template      = "blog/en/tag.html"
  blog.taglink           = "en/tags/{tag}.html"
  # blog.calendar_template = 'calendar.html'
  blog.calendar_template = "blog/en/calendar.html"
  blog.year_link         = "en/{year}.html"
  blog.month_link        = "en/{year}/{month}.html"
  # Enable pagination
  blog.paginate = true
  # blog.per_page = 3
  # blog.page_link = 'page/{num}.html'
  blog.page_link = 'page/{num}'
  blog.custom_collections = {
    category: {
      link: 'en/categories/{category}.html',
      template: '/blog/en/category.html'
    }
  }
end

activate :blog do |blog|
  blog.name              = 'fr'
  # blog.sources           = 'blog/{lang}/{year}-{month}-{day}-{title}.html'
  blog.sources           = "blog/fr/{year}/{month}/{year}-{month}-{day}-{title}.html"
  blog.permalink         = "blog/{lang}/{year}/{month}/{day}/{title}.html"
  blog.default_extension = '.markdown'
  blog.layout            = "blog-article-scatter" #blog-article-table
  blog.calendar_template = "blog/fr/calendar.html"
  blog.year_link         = "fr/{year}.html"
  blog.month_link        = "fr/{year}/{month}.html"
  blog.tag_template      = "blog/fr/tag.html"
  blog.taglink           = "fr/tags/{tag}.html"
  # Enable pagination
  blog.paginate = true
  # blog.per_page = 3
  # blog.page_link = 'page/{num}.html'
  blog.page_link = 'page/{num}'
  blog.custom_collections = {
    category: {
      link: 'fr/categories/{category}.html',
      template: '/blog/fr/category.html'
    }
  }
end

activate :blog do |blog|
  blog.prefix = "finance"
  blog.name = "finance"
  blog.permalink = ":title.html"
  # blog.permalink = ":year/:month/:day/:title.html"
  blog.sources = ":year-:month-:day-:title.html"
  blog.taglink = "tags/:tag.html"
  blog.year_link = ":year.html"
  # blog.month_link = ":year/:month.html"
  # blog.day_link = ":year/:month/:day.html"
  blog.layout = "blog-article-table"
  # blog.tag_template = "tag.html"
  # blog.calendar_template = "calendar.html"
  blog.tag_template = "finance/tag.html"
  blog.calendar_template = "finance/calendar.html"

  blog.summary_separator = /(READMORE)/
  blog.summary_length = 250
  # blog.new_article_template = "source/article-templates/article-template.erb"
  blog.new_article_template = File.expand_path('../source/article-templates/article-template.erb', __FILE__)
  blog.default_extension = ".markdown"

  blog.paginate = true
  blog.per_page = 10
  blog.page_link = 'page/:num'
#   # blog.custom_collections = {
#   #   category: {
#   #     link: '/categories/{category}',
#   #     template: '/category.html'
#   #   }
#   # }
end

# # Activate the middleman-search extension and customize it.
# activate :search do |search|
#   # I only want to search blog articles, not about/ or books/ or anything.
#   search.resources = ['blog/']

#   # Search fields are indexed by default, but not stored. Storing takes up
#   # space, so we should only store what is needed to render search results: the
#   # title, the date, and the URL. We'll index the content but no store it.
#   # Additionally, we apply a "boost" to the title and content fields.
#   search.fields = {
#     title:   {boost: 100, store: true, required: true},
#     date:    {index: false, store: true},
#     content: {boost: 50},
#     url:     {index: false, store: true}
#   }
# end

activate :search do |search|
  search.resources = ['blog/']
  # search.index_path = 'search/lunr-index.json'
  search.fields = {
    title:   {boost: 100, store: true, required: true},
    date:    {index: false, store: true},
    # content: {boost: 50},
    url:     {index: false, store: true}
    # header_image: {index: false, store: true},
    # description: {index: false, store: true}
  }

  search_skip = ['Articles Tagged', 'Posts by Tag']

  search.before_index = Proc.new do |to_index, to_store, resource|
    if search_skip.any?{|ss| ss == resource.data.title}
      throw(:skip)
    end
    to_store[:group] = resource.path.split('/').first
  end
end

activate :asset_hash do |asset_hash|
  asset_hash.ignore = [/demos/]
  asset_hash.exts = %w[ .css .js .png .jpg .eot .svg .ttf .woff .json ]
end

# Set Markdown Engine and add Syntax Highlighting
require 'redcarpet'
set :markdown_engine, :redcarpet
set :markdown, :layout_engine => :erb
set :markdown,
  :fenced_code_blocks => true ,
  :smartypants => true ,
  :autolink => true,
  :tables => true,
  :strikethrough => true,
  :hard_wrap => true,
  :highlight => true
activate :syntax
# activate :syntax, css_class: 'language'#, line_numbers: true
#See more at: http://oscarfunes.com/2013/04/11/middleman-pt2/#sthash.cY3f6ofl.dpuf

# Automatically add vendor prefixes to CSS rules in stylesheets served by Middleman
activate :autoprefixer

# Use relative URLs
activate :relative_assets
# set :relative_links, true

# Pretty URLs
activate :directory_indexes

###
# Page options, layouts, aliases and proxies
###

# Per-page layout changes:
#
# With no layout
page '/*.xml', layout: false
page '/*.json', layout: false
page '/*.txt', layout: false
# page "/blog/*", layout: "blog-article-table"
# page "/fr/blog.html", layout: "blog-article-table"
# page "index.html", layout: false
# page "/about.html", layout: "blog"

# With alternative layout
# page "/path/to/file.html", layout: :otherlayout

# Proxy pages (http://middlemanapp.com/basics/dynamic-pages/)
# proxy "/this-page-has-no-template.html", "/template-file.html", locals: {
#  which_fake_page: "Rendering a fake page with a local variable" }

# General configuration

# Reload the browser automatically whenever files change
# configure :development do
#   activate :livereload
# end

###
# Helpers
###

# Methods defined in the helpers block are available in templates
# helpers do
#   def some_helper
#     "Helping"
#   end
# end

helpers do
  def tag_list(array, prefix)
    array ||= []
    array = [*array.split(/\s+,\s+/)].compact unless array.is_a? Array
    array.map{|tag| link_to tag, "#{prefix}/tags/#{tag}/" }.join ", "
  end
  def nav_link(name, url, options={})
    options = {
      class: "",
      active_if: url,
      page: current_page.url,
    }.update options
      active_url = options.delete(:active_if)
      active = Regexp === active_url ? current_page.url =~ active_url : current_page.url == active_url
      options[:class] += " active" if active
      link_to name, url, options
  end
end

###
# Bower Components
###
# after_configuration do
  # sprockets.append_path File.join root, 'bower_components'
  # sprockets.append_path File.join root, 'source/vendor'
# end
activate :sprockets
# sprockets.append_path 'bower_components/bootstrap-sass/assets/fonts'
# sprockets.append_path 'bower_components'
sprockets.append_path 'source/vendor'

# Build-specific configuration
configure :build do
  # Minify CSS on build
  # activate :minify_css

  # Minify Javascript on build
  # activate :minify_javascript
end

# Middleman Deploy
activate :deploy do |deploy|
  deploy.deploy_method = :git
  # deploy.branch = 'master'
  deploy.branch = 'gh-pages'
  deploy.build_before = true
end

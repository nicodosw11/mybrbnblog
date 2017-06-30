set :site_url, "http://www.nicolasdotto.com"
set :site_description, "Nicolas Dotto London Based Freelance Web Developer"

# Search_Engine_Sitemap
set :url_root, 'http://www.nicolasdotto.com'
activate :search_engine_sitemap, default_change_frequency: "weekly"

Time.zone = 'London'

###
# Blog settings
###

# Add blogging to Middleman Install
activate :blog do |blog|
  blog.prefix = 'blog'
  blog.name = 'articles'
  blog.new_article_template = "source/blog/article-templates/article-template.erb"
  blog.sources = 'articles/{year}-{month}-{day}-{title}.html'
  blog.permalink = '{title}'
  blog.default_extension = '.markdown'
  blog.layout = 'blog'
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
page "/blog/*", layout: "blog"
# page "index.html", layout: false
# page "/about.html", layout: "blog"

# With alternative layout
# page "/path/to/file.html", layout: :otherlayout

# Proxy pages (http://middlemanapp.com/basics/dynamic-pages/)
# proxy "/this-page-has-no-template.html", "/template-file.html", locals: {
#  which_fake_page: "Rendering a fake page with a local variable" }

# General configuration

# Reload the browser automatically whenever files change
configure :development do
  activate :livereload
end

###
# Helpers
###

# Methods defined in the helpers block are available in templates
# helpers do
#   def some_helper
#     "Helping"
#   end
# end

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

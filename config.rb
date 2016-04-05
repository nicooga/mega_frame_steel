set :css_dir, "styles"
set :js_dir, "scripts"
set :images_dir, "images"
set :layout, false

configure :development do
  activate :livereload
end

configure :build do
  activate :minify_css
  activate :minify_javascript
end

activate :external_pipeline,
  name: :bower,
  command: "bower install",
  source: "vendor/assets/bower"

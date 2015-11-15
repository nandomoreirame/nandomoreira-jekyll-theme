# encoding: UTF-8
require "rubygems"
require "tmpdir"
require "bundler/setup"
require "jekyll"

# Change your GitHub reponame
GITHUB_REPONAME = "nandomoreirame/nandomoreira-jekyll-theme"
GITHUB_REPO_BRANCH = "gh-pages"

SOURCE = "source/"
DEST   = "_site"
CONFIG = {
  'layouts' => File.join(SOURCE, "_layouts"),
  'posts' => File.join(SOURCE, "_posts"),
  'post_ext' => "md",
  'categories' => File.join(SOURCE, "categories"),
  'tags' => File.join(SOURCE, "tags")
}

task default: %w[publish]

desc "Generate blog files"
task :generate do
  Jekyll::Site.new(Jekyll.configuration({
    "source"      => "source/",
    "destination" => "_site",
    "config"      => "_config.yml"
  })).process
end

desc "Generate and publish blog to gh-pages"
task :publish => [:generate] do
  Dir.mktmpdir do |tmp|
    cp_r "_site/.", tmp

    pwd = Dir.pwd
    Dir.chdir tmp

    system "git init"
    system "git checkout --orphan #{GITHUB_REPO_BRANCH}"
    system "git add ."
    message = "Site updated at #{Time.now.utc}"
    system "git commit -am #{message.inspect}"
    system "git remote add origin git@github.com:#{GITHUB_REPONAME}.git"
    system "git push origin #{GITHUB_REPO_BRANCH} --force"

    Dir.chdir pwd
  end
end

desc "Begin a new post in #{CONFIG['posts']}"
task :post do
  abort("rake aborted: '#{CONFIG['posts']}' directory not found.") unless FileTest.directory?(CONFIG['posts'])
  title = ENV["title"] || "Novo post"

  tags = ""
  categories = ""

  # tags
  env_tags = ENV["tags"] || ""
  tags = strtag(env_tags)

  # categorias
  env_cat = ENV["category"] || ""
  categories = strtag(env_cat)

  # slug do post
  slug = mount_slug(title)

  begin
    date = (ENV['date'] ? Time.parse(ENV['date']) : Time.now).strftime('%Y-%m-%d')
    time = (ENV['date'] ? Time.parse(ENV['date']) : Time.now).strftime('%T')
  rescue => e
    puts "Error - date format must be YYYY-MM-DD, please check you typed it correctly!"
    exit -1
  end

  filename = File.join(CONFIG['posts'], "#{date}-#{slug}.#{CONFIG['post_ext']}")
  if File.exist?(filename)
    abort("rake aborted!") if ask("#{filename} already exists. Do you want to overwrite?", ['y', 'n']) == 'n'
  end

  puts "Creating new post: #{filename}"
  open(filename, 'w') do |post|
    post.puts "---"
    post.puts "layout: post"
    post.puts "title: \"#{title.gsub(/-/,' ')}\""
    post.puts "permalink: #{slug}"
    post.puts "date: #{date} #{time}"
    post.puts "comments: true"
    post.puts "description: \"#{title}\""
    post.puts 'keywords: ""'
    post.puts "categories:"
    post.puts "#{categories}"
    post.puts "tags:"
    post.puts "#{tags}"
    post.puts "---"
  end
end # task :post


desc "Create a new page."
task :page do
  name = ENV["name"] || "new-page.md"
  filename = File.join(SOURCE, "#{name}")
  filename = File.join(filename, "index.html") if File.extname(filename) == ""
  title = File.basename(filename, File.extname(filename)).gsub(/[\W\_]/, " ").gsub(/\b\w/){$&.upcase}
  if File.exist?(filename)
    abort("rake aborted!") if ask("#{filename} already exists. Do you want to overwrite?", ['y', 'n']) == 'n'
  end

  slug = mount_slug(title)

  mkdir_p File.dirname(filename)
  puts "Creating new page: #{filename}"
  open(filename, 'w') do |post|
    post.puts "---"
    post.puts "layout: page"
    post.puts "title: \"#{title}\""
    post.puts 'description: ""'
    post.puts 'keywords: ""'
    post.puts "permalink: \"#{slug}\""
    post.puts "slug: \"#{slug}\""
    post.puts "---"
    post.puts "{% include JB/setup %}"
  end
end # task :page


desc "Begin a new category in #{CONFIG['categories']}"
task :category do
  abort("rake aborted: '#{CONFIG['categories']}' directory not found.") unless FileTest.directory?(CONFIG['categories'])
  title = ENV["title"] || "new-category"
  slug  = mount_slug(title)

  filename = File.join(CONFIG['categories'], "category-#{slug}.html")
  if File.exist?(filename)
    abort("rake aborted!") if ask("#{filename} already exists. Do you want to overwrite?", ['y', 'n']) == 'n'
  end

  puts "Creating new category: #{filename}"
  open(filename, 'w') do |category|
    category.puts "---"
    category.puts "layout: category"
    category.puts "title: \"#{title.gsub(/-/,' ')}\""
    category.puts "slug: #{slug}"
    category.puts "permalink: /category/#{slug}/"
    category.puts "---"
  end

  puts "Write in categories.yml file"
  open("#{SOURCE}_data/categories.yml", 'ab+') do |category|
    category.puts ""
    category.puts "- slug: #{slug}"
    category.puts "  name: #{title}"
  end
  puts "Successfully created!"
end # task :category


desc "Begin a new tag in #{CONFIG['tags']}"
task :tag do
  abort("rake aborted: '#{CONFIG['tags']}' directory not found.") unless FileTest.directory?(CONFIG['tags'])
  title = ENV["title"] || "new-tag"
  slug  = mount_slug(title)

  filename = File.join(CONFIG['tags'], "tag-#{slug}.html")
  if File.exist?(filename)
    abort("rake aborted!") if ask("#{filename} already exists. Do you want to overwrite?", ['y', 'n']) == 'n'
  end

  puts "Creating new tag: #{filename}"
  open(filename, 'w') do |tag|
    tag.puts "---"
    tag.puts "layout: tag"
    tag.puts "title: \"#{title.gsub(/-/,' ')}\""
    tag.puts "slug: #{slug}"
    tag.puts "permalink: /tag/#{slug}/"
    tag.puts "---"
  end

  puts "Write in tags.yml file"
  open("#{SOURCE}_data/tags.yml", 'ab+') do |tag|
    tag.puts ""
    tag.puts "- slug: #{slug}"
    tag.puts "  name: #{title}"
  end
  puts "Successfully created!"
end # task :tag

def mount_slug(title)
  slug = str_clean(title)
  slug = slug.downcase.strip.gsub(' ', '-').gsub(/[^\w-]/, '')

  return slug
end

def str_clean(title)
  return title.tr("ÀÁÂÃÄÅàáâãäåĀāĂăĄąÇçĆćĈĉĊċČčÐðĎďĐđÈÉÊËèéêëĒēĔĕĖėĘęĚěĜĝĞğĠġĢģĤĥĦħÌÍÎÏìíîïĨĩĪīĬĭĮįİıĴĵĶķĸĹĺĻļĽľĿŀŁłÑñŃńŅņŇňŉŊŋÒÓÔÕÖØòóôõöøŌōŎŏŐőŔŕŖŗŘřŚśŜŝŞşŠšſŢţŤťŦŧÙÚÛÜùúûüŨũŪūŬŭŮůŰűŲųŴŵÝýÿŶŷŸŹźŻżŽž", "AAAAAAaaaaaaAaAaAaCcCcCcCcCcDdDdDdEEEEeeeeEeEeEeEeEeGgGgGgGgHhHhIIIIiiiiIiIiIiIiIiJjKkkLlLlLlLlLlNnNnNnNnnNnOOOOOOooooooOoOoOoRrRrRrSsSsSsSssTtTtTtUUUUuuuuUuUuUuUuUuUuWwYyyYyYZzZzZz")
end

def strtag(str_tags)
  tags = "";

  if !str_tags.nil?
    arr_tags = str_tags.split(",")
    arr_tags.each do |t|
      tags = tags + "- " + t.delete(' ') + "\n"
    end
  end

  return tags
end

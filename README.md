# [nandomoreira.me](http://nandomoreira.me/)

My personal website where I talk about front-end development like HTML5, CSS3, JavaScript and Wordpress, PHP and more.

## Setup

> :warning:
  It requires inslated node/npm and ruby/rubygems installed

### In the terminal run the commands

```
$ sudo npm i -g gulp bower browser-sync
$ sudo gem install bundler
$ bundle install
$ npm install
```

## Using Rake tasks

```
$ rake post title="TITLE OF THE POST"
$ rake page name="about.md"
$ rake category title="Programing"
$ rake tag title="Jekyll"
```

## Using Jekyll

### Running the server:

```
$ jekyll server
```

Access, [localhost:4000](http://localhost:4000/)

## Using Gulp

### Rum gulp

```
$ gulp
```

---

## Deploy in Github pages in 2 steps

1. Change the variables `GITHUB_REPONAME` and `GITHUB_REPO_BRANCH` in `Rakefile`
2. Run `rake` or `rake publish` for build and publish on Github

---

* [Jekyll](http://jekyllrb.com/);
* [Jekyll Documentation](http://jekyllrb.com/docs/home/);
* [Como definir URLs curtas no Jekyll](http://nandomoreira.me/urls-curtas-no-jekyll/);
* [Adicionando Disqus ao seu projeto Jekyll](http://nandomoreira.me/adicionando-disqus-ao-seu-projeto-jekyll/);

---

### Copyright and license

It is under [the MIT license](/LICENSE).

> :warning:
  Please remove metas `<meta name="robots" content="noindex">` and `<meta name="googlebot" content="noindex">` in `_layouts/default.html`

Enjoy! :yum:
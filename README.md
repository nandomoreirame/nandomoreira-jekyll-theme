# nandomoreira.me jekyll theme



### [Preview](https://nandomoreirame.github.io/nandomoreira-jekyll-theme/)

## Setup

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

* [Jekyll](http://jekyllrb.com/)
* [Jekyll Documentation](http://jekyllrb.com/docs/home/)

---

### Copyright and license

It is under [the MIT license](/LICENSE).

Enjoy! :yum:

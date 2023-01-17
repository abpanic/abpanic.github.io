### Dbugr-jekyll - A Beautiful Jekyll Theme for your Portfolio
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-14-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->

[![Gem Version](https://badge.fury.io/rb/devlopr.svg)](https://badge.fury.io/rb/devlopr)
![workflow-badge](https://github.com/abpanic/netlify-portfolio/actions/workflows/deploy.yml/badge.svg)
[![Netlify Status](https://api.netlify.com/api/v1/badges/1f96da66-7a80-4313-8790-5f656b1ec832/deploy-status)](https://app.netlify.com/sites/dbugr/deploys)
[![MIT license](https://img.shields.io/badge/License-MIT-blue.svg)](https://lbesson.mit-license.org/)


You can use Dbugr as a starter for building your own Site. we purposely keep the styling minimal and bare to make it easier to add your own flare and markup. (Under Active Development) !

![Dbugr jekyll](https://github.com/abpanic/netlify-portfolio/blob/master/assets/img/screenshot.PNG?raw=true)

Dbugr uses Markdown Files to generate data like Blog Posts, Gallery, Shop Products etc. No external database is required.


### Launch your Static Site using Dbugr template in minutes :rocket:

To get started follow this [Tutorial](https://dbugr.netlify.app/get-started)

or if you want to try fast :

### Follow this steps in browser (takes 5-10 mins): 
1. Fork this Repo with your name as  your_username.github.io
2. Visit your Fork repo at https://github.com/your_username/your_username.github.io
3. Press "." in keyboard (this will open up vs-code editor in browser) of the repo.
4. Customize config.yml file according to your needs (eg. change your Name, Email... etc.)
5. Commit your changes, and push 
6. Wait for CI/CD to build your website. Visit Github Actions to see the build process.
7. Once Ready, Your website will be ready at https://your_username.github.io :sparkles: 
8. Happy Hacking your new site ! For Local changes you can clone locally.


## Local Development Steps :

### Clone Locally:

```s
$ git clone https://github.com/your_github_username/your_github_username.github.io.git
$ cd your_github_username
```
### For Linux : (Ubuntu 20.04)

To work locally with ubuntu, follow this commands.

Install Ruby :
```s
$ sudo apt install ruby-full
$ ruby --version
ruby 2.7.0p0 (2019-12-25 revision 647ee6f091) [x86_64-linux-gnu]

$ gem install jekyll bundler
$ bundle update
$ bundle install
$ bundle exec jekyll -v
jekyll 4.2.2

$ bundle exec jekyll serve --livereload
```

### For Windows :

To work locally with windows machine, follow this commands. You might need to download and install [ruby (with devkit)](https://www.ruby-lang.org/en/downloads/) and [git](https://git-scm.com/downloads).

```s
$ ruby -v 
(ruby 3.1.2p20 (2022-04-12 revision 4491bb740a) [universal.x86_64-darwin21])

$ gem install jekyll bundler

$ bundler -v
Bundler version 2.3.23

$ bundle update
$ bundle install
$ bundle exec jekyll -v 
jekyll 4.2.2

$ bundle exec jekyll serve --livereload
```

If you are running into permission issues running bundler, try the following:

```s
$ sudo rm -rf _site
$ bundle update
$ bundle install
$ bundle exec jekyll serve
```
Start the server locally at http://127.0.0.1:4000/ or http://localhost:4000/

### For MacOS :
Run the following in your terminal :

1. Install Homebrew

`/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"`

2. Install churby and ruby-install with Homebrew

`brew install chruby ruby-install`

3. Install latest ruby version 

`ruby-install ruby`

4. This will take a few minutes, and once it’s done, configure your shell to automatically use chruby:

```sh
echo "source $(brew --prefix)/opt/chruby/share/chruby/chruby.sh" >> ~/.zshrc
echo "source $(brew --prefix)/opt/chruby/share/chruby/auto.sh" >> ~/.zshrc
echo "chruby ruby-3.1.2" >> ~/.zshrc
```
If you’re using Bash, replace *.zshrc* with *.bash_profile*.

Quit and relaunch Terminal, then check that everything is working:

`$ ruby -v`
ruby 3.1.2p20 (2022-04-12 revision 4491bb740a) [x86_64-darwin21]

5. Install latest gems

```s
$ gem install jekyll bundler

$ bundler -v
Bundler version 2.3.23

$ bundle update

$ bundle exec jekyll -v 
jekyll 4.2.2

$ bundle exec jekyll serve --livereload
```


### Security 

We use codeQL and dependabot alerts for vulnerabality analysis & fixes.

```s
$ bundle audit
```


### Deploy your netlify-portfolio blog - One Click Deploy


[![Deploy with ZEIT Now](https://zeit.co/button)](https://zeit.co/new/project?template=https://github.com/sujaykundu777/netlify-portfolio)
[![Deploy with Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/sujaykundu777/netlify-portfolio)
[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/sujaykundu777/netlify-portfolio)

### Github Actions

This Project has actions to auto deploy jekyll to github pages and firebase. The deployment target can be set by editing the `DEPLOY_STRATEGY` file. Valid values are:
- `none`: default value. use this if you don't want to deploy the site.
- `gh-pages`: deploys to github pages. This uses a custom action available in the Marketplace - [Jekyll Deploy Action](https://github.com/marketplace/actions/deploy-jekyll-site)
- `firebase`: deploys to firebase. Before you can use this you need to first create a firebase project [here](https://console.firebase.google.com/). You can signup for a Free Spark Plan. Then, in your github repo's settings, go to the secrets section and add the following:
  * `FIREBASE_TOKEN`: your firebase token. you can get this by running `firebase login:ci` with the firebase cli.
  * `FIREBASE_PROJECT_ID`: the project id of the project you just created

### Demo (Hosted Apps)


- Github Pages Demo - [here](https://abpanic.github.io/)
- Netlify Demo - [here](https://dbugr.netlify.app)


#### Features :

- Local CMS Admin Support using [Jekyll Admin](https://jekyll.github.io/jekyll-admin/)
- Headless CMS Admin Support using [Netlify CMS](https://sujaykundu.com/blog/how-to-setup-netlify-cms-with-github-pages-hosted-jekyll-blog/)
- Supports Latest [Jekyll 4.x](https://jekyllrb.com) and [Bundler](https://bundler.io)
- Stylesheet built using Sass
- Comments using [Hyvor](https://talk.hyvor.com/) and [Disqus](https://disqus.com/)
- SEO-optimized
- Real Time Search - [Algolia](https://sujaykundu.com/blog/adding-real-time-search-to-jekyll-site-using-algolia/)
- Send Newsletters using [Mailchimp](https://mailchimp.com/)
- Contact Forms Support for [Getform](https://getform.io), [Formspree](https://formspree.io/)
- Coding Activity using [Wakatime](https://wakatime.com/)
- Hosting Support for [Github Pages](https://pages.github.com), [Netlify](https://netlify.com)
- CI/CD Support using [GitHub](https://sujaykundu.com/blog/deploy-jekyll-blog-using-github-pages-and-travis-ci/)

#### Jekyll Admin
You can easily manage the site locally using the Jekyll admin : [http://localhost:4000/admin](http://localhost:4000/admin)

![Jekyll Admin](https://github.com/sujaykundu777/netlify-portfolio/blob/master/assets/img/jekyll-admin.PNG?raw=true)


You can check out for all changelogs [here](https://devlopr.olvy.co/)

## Pull the latest changes

```s
git remote -v
git remote add upstream https://github.com/sujaykundu777/netlify-portfolio.git
git fetch upstream
git checkout master
git merge upstream/master
git push
```

## Using Docker :

Building the Image :

`docker build -t my-netlify-portfolio-blog .`

Running the container :

`docker run -d -p 4000:4000 -it --volume="$PWD:/srv/jekyll" --name "my_blog" my-netlify-portfolio-blog:latest jekyll serve --watch`

## Using Docker Compose :

### Development :

You can run the app in development mode : (your changes will be reflected --watch moded)

Serve the site at http://localhost:4000 :

`docker-compose -f docker-compose-dev.yml up --build --remove-orphans`

### Production :

You can run the app in production mode : (your changes will be reflected --watch moded)

Serve the site at http://localhost:4000 :

`docker-compose -f docker-compose-prod.yml up --build --remove-orphans`

Stop the app :
`docker-compose -f docker-compose-prod.yml down`
Once everything is good and ready to go live -

`docker-compose -f docker-compose-prod.yml up --build --detach`


##Contributions
Contributions are more than just welcome. Fork this repo and create a new branch, then submit a pull request

- 1.Fork it [http://github.com/abpanic/netlify-portfolio/fork](http://github.com/abpanic/netlify-portfolio/fork)

- 2.Create your feature branch
`git checkout -b my-new-feature`

- 3.Commit your changes
`git commit -am 'Add some feature'`

- 4.Push to the branch
`git push origin my-new-feature`

- 5.Create new Pull Request

### For Help :

You can contact me, if you need any help via [Email](mailto:abhilash.panicker@outlook.com). If you like the project. Don't forget to :star: !

## Licence

The theme is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).


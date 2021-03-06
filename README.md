#Optimizely marketing website

##Overview

This is the repository for the future Optimizely marketing website. The website is built on static architecture, meaning that there is no backend component to the production environment. Every URL is just a static .html file. The .html files are generated very similar to how many websites compile .js and .css files. The .html files are compiled once on a machine and then transferred to the origin server. In production the origin server will be S3.

The entire website is built on top of [Grunt](http://gruntjs.com), the JavaScript task runner for [Node](http://nodejs.org).

###HTML

This website does not have a true CMS. Instead it runs off of a templating system called [Assemble](http://assemble.io).

Our Assemble implementation uses Assemble's default templating engine [Handlebars](http://handlesbarsjs.com) to compile .hbs files into .html files.

###CSS

We use [Sass](https://github.com/sindresorhus/grunt-sass) to compile our CSS files.

##Quick start

###Step 1: Install node.js (and npm)

You can easily install both with the installer found on the [Node](http://nodejs.org/) website.

###Step 2: Fork this repo

[Fork and clone](https://help.github.com/articles/fork-a-repo) this repo.

###Step 3: Install npm dependencies

Navigate to the repo directory. In the command line execute the following command:

`npm i`

###Step 4: Install bower dependencies

Navigate to the repo directory. In the command line execute the following:

`bower install`

###Step 5: Start a local server

In the root of the repo, execute this command: `grunt server`

# BlogBox
BlogBox is a minimal, bold, responsive, and easy-to-use Jekyll theme. It’s a perfect fit for artists, photographers, or creative bloggers looking for a bold design theme.

[Live Demo](https://blogbox.netlify.app/)

# Premium Jekyll Themes

You can find our premium Jekyll themes here -> [jekyllthemes.io](https://jekyllthemes.io/developers/just-good-themes)

## Preview

[![Blogbox preview](/blogbox_preview.jpeg "Blogbox preview")](https://blogbox.netlify.app/)

## Theme features

+ Responsive layout – your blog will be accessible on various devices (iPhone, iPad, Android, etc.)
+ Clean, well commented code, easy to customize
+ Optional fixed navigation
+ Author information
+ Tag page support
+ Code syntax highlighter
+ Newsletter, latest posts and tag cloud widgets
+ Sharing post integration
+ Social media icons

## Local Installation
> How to install and use the theme

_Note: this theme cannot be installed as a gem in your Gemfile and config, therefore the only way to use this theme is to clone the entire repo and put your content in it among the styling._

Install Jekyll as per [Jekyll docs](https://jekyllrb.com/docs/).

Clone the repo or your fork.

Navigate to the repo.

Install the dependencies:

```sh
$ bundle config set --local path vendor/bundle
$ bundle install
```

Start a dev server, with verbose error traces:

```sh
$ bundle exec jekyll serve --trace
```

## Development
> How to set up and run the theme as a standalone site locally

Follow the steps in the section above.

## Deployment

Please see the [Deployment Methods](https://jekyllrb.com/docs/deployment-methods/) page on the Jekyll website.

### Manual Deployment

Jekyll outputs your static site to the `_site`. directory by default. You can transfer the contents of this directory to almost any hosting provider to get your site live. This can be tedious, so some automated deploy approaches are listed below.

### Netlify

This theme is prepared to be hosted on [Netlify](https://www.netlify.com/). All you need to do is create a new public or private repository on GitHub or GitLab. Upload the theme to the repository and link your repo to Netlify. Please check this [blog post](https://www.netlify.com/blog/2015/10/28/a-step-by-step-guide-jekyll-3.0-on-netlify/#step-2-link-to-your-github) for step-by-step guidelines.

### Amazon S3

If you want to host your site on Amazon S3, you can do so by using the [s3_website application](https://github.com/laurilehmijoki/s3_website). It will push your site to Amazon S3, where it can be served like any web server, dynamically scaling to almost unlimited traffic. Well, S3 itself is not built for speed so you probably want to put some CDN like CloudFront on top of your S3 objects.

### GitHub Pages

See the [GitHub Actions](https://jekyllrb.com/docs/continuous-integration/github-actions/) deploy guide on Jekyll docs to build with GitHub Actions and host with GitHub Pages.

## License

Licensed under [MIT](/LICENSE).

# Connectivity Atlas

### Contributing:

Please see [contributing.md](https://github.com/developmentseed/connectivity-atlas/blob/develop/contributing.md) for guidelines on contributing. All Pull Requests should be made against the `develop` branch.

### Install:

- Install [Bundler](http://bundler.io/)
- `$ bundle install` (this will install Jekyll and other libraries needed for the site)

### Serve the site locally:

`$ bundle exec jekyll serve --baseurl '' -w` -- this rebuilds the site whenever a change is made, you will need to reload

### Deployment:

The site is served via GitHub Pages based on content within the `gh-pages` branch.


### Data sources:

Maps are served via [mapbox-gl.js](https://github.com/mapbox/mapbox-gl-js/). Additional data sources can be added by creating an item in the Sources collection and updating the [YAML](http://jekyllrb.com/docs/frontmatter/) front matter. 
- Source filenames should match the id of the source. 
- Vector styles specifc to the source should be included.
- The source-url should be the location of the vector tile set. 

```
layout: source
title: US Crude Oil Pipelines
attribution: unknown
attribution-url: unknown
id: CrudeOil_Pipelines_US_Nov2014
source-url: mapbox://mappingfuture.h8ttvs4i
layer: CrudeOil_Pipelines_US_Nov2014
tags:
  - line
themes: oil
line-color: '#e50fee'
line-width: 0.9
```



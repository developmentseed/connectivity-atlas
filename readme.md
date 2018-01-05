# Connectivity Atlas

:alert: :alert: This repo does not currently have a maintainer. Contact [@developmentseed](https://github.com/developmentseed/) if you have any questions.

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
- Vector styles specific to the source should be included.
- The source-url should be the location of the vector tile set.

```
title: US Natural Gas
attribution: EIA
attribution-url: http://www.eia.gov/maps/layer_info-m.cfm
id: NaturalGas_InterIntrastate_Pipelines_US
source-url: mapbox://mappingfuture.b2hs38fr
layer: NaturalGas_InterIntrastate_Pipelines_US
tags:
  - line
themes: oil
line-color: '#c7125a'
line-width: 0.8
```

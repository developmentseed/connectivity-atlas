#Contribution guidelines

## Contributing Data
This is a collaborative data project. We rely on contributions of open data to be more complete and up-to-date.

### Adding Data Sources
If you know your way around github and Mapbox, you can contribute additional data directly. Maps are served via [mapbox-gl.js](https://github.com/mapbox/mapbox-gl-js/). Additional data sources can be added by creating an item in the Sources collection and updating the [YAML](http://jekyllrb.com/docs/frontmatter/) front matter.
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

### Suggesting data sources
If you have data to contribute but can't add it directly, [create an issue](https://github.com/developmentseed/connectivity-atlas/issues) in the project repository with a link to the dataset and as much description as you can provide. Please tag the issues `data sources`.

## Other ways to contribute
There are many other ways to contribute to a project, below are some examples:

- Report bugs, ideas, requests for features by [creating issues](https://github.com/developmentseed/connectivity-atlas/issues) in the project repository.
- Fork the code and play with it, whether you later choose to make a pull request or not.
- Create pull requests of changes that you think are laudatory. From typos to major design flaws, you will find a target-rich environment for improvements.

## Style
There is no set style for this project, but please try to match existing coding styles as closely as possible.

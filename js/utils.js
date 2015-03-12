/* global _ */
var utils;

(function() {
  'use strict';

  utils = {
    // Build new style file from tags
    generateStyleFromTags: function (style, themes) {
      var self = this;

      var newStyle = style;

      // Break into an array
      themes = self.getThemesArray(themes);

      // Replace sources
      var hold = {};
      _.each(style.sources, function (source, key) {
        if (_.intersection(self.getThemesArray(source.themes), themes).length >=1) {
          hold[key] = _.clone(source);
        }
      });
      newStyle.sources = hold;

      // Replace layers
      newStyle.layers = _.filter(style.layers, function (layer) {
        return _.intersection(self.getThemesArray(layer.themes), themes).length >=1;
      });

      return newStyle;
    },

    // Build new style file from source id
    generateStyleFromSourceID: function (style, sourceID) {
      var newStyle = style;

      // Replace sources
      var clone = _.clone(style.sources[sourceID]);
      newStyle.sources = {};
      newStyle.sources[sourceID] = clone;

      // Replace layers
      newStyle.layers = _.filter(style.layers, function (layer) {
        return layer.id === sourceID;
      });

      return newStyle;
    },

    // Generate themes array
    getThemesArray: function (themes) {
      themes = themes.split(',');
      themes = _.map(themes, function (theme) {
        return theme.trim();
      });

      return themes;
    }
  };
})();

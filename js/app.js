---
---
/* global mapboxgl, _, utils, themes, sourceID */
'use strict';


$(document).ready(function() {

    $('.loader').show();

    mapboxgl.accessToken ='pk.eyJ1IjoiZG1jY2FyZXkiLCJhIjoiRl9FV3ZXNCJ9.l1rdsm-F9Vwzcimtf1qMHg';
    mapboxgl.util.getJSON('{{ site.baseurl }}/js/style.json', function(err, style) {

    $('.loader').hide();

    if (err) throw err;
    // Filter style.json if necessary
    if (typeof themes !== 'undefined') {
        style = utils.generateStyleFromTags(style, themes);
    } else if (typeof sourceID !== 'undefined') {
        style = utils.generateStyleFromSourceID(style, sourceID);
    }

    var activeLayers = [];
    var featureHover = true;

    style.layers.forEach(function(layer) {
        layer.interactive = true;
        $('.menu-sources').append('<li><a class="active" href="' + layer.id +
            '">' + layer.title + '</a></li>');
        activeLayers.push(layer.id);
    });

       var map = new mapboxgl.Map({
        container: 'map',
        style: style,
        center: [20, -20],
        zoom: 2
    });


    map.addControl(new mapboxgl.Navigation());


	    /**
		 * Show layer info on hover
		 */
        map.on('mousemove', function(e) {

           $('#features').hide();

            map.featuresAt(e.point, {
                radius: 5
            }, function(err, features) {
                if (err) throw err;

				var title = null;
                var id = features[0].layer.id;

                style.layers.forEach(function(layer) {
                   if (id == layer.id) {
                     title = layer.title;
                   }
                });

                if (id !== undefined) {
                     $('#features').show();
                    document.getElementById('features').innerHTML = title + '<br><a class="btn btn-primary" href="{{ site.baseurl }}/source/' + id + '">View source</a>';
                }


            });
        });


		$('#map').on('mousemove', function(e) {
		  if (featureHover == true) {
		    $('#features').css({
       				left:  e.pageX,
       		 		top:   e.pageY
   		   		});
   		   	}
		});

		$(map).on('click', function(e) {
		   if (featureHover == true) {
		     featureHover = false;
		   } else {
		     featureHover = true;
		   }
		});


		/**
		 * Toggle sources on and off
		 */
        $(document).on('click', '.menu-sources li a', function(e) {
            e.preventDefault();
            var id = $(this).attr('href');
            console.log(id);
            var i = _.indexOf(activeLayers, id, false);
            console.log(activeLayers);


            if (i > -1) {
                map.removeLayer(id);
                activeLayers.splice(i, 1);
                $(this).removeClass('active');
            } else {
                $(this).addClass('active');
                style.layers.forEach(function(l) {
                    if (l.id === id) {
                        map.addLayer(l);
                        console.log(l);
                        activeLayers.push(id);
                    }
                });

            }

            console.log(activeLayers);

        });
    });
});

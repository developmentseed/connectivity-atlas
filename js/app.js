---
---
/* global mapboxgl, _, utils, themes, sourceID */
'use strict';

$(document).ready(function() {

    mapboxgl.accessToken ='pk.eyJ1IjoiZG1jY2FyZXkiLCJhIjoiRl9FV3ZXNCJ9.l1rdsm-F9Vwzcimtf1qMHg';
    mapboxgl.util.getJSON('{{ site.baseurl }}/js/style.json', function(err, style) {

    if (err) throw err;
    // Filter style.json if necessary
    if (typeof themes !== 'undefined') {
        style = utils.generateStyleFromTags(style, themes);
    } else if (typeof sourceID !== 'undefined') {
        style = utils.generateStyleFromSourceID(style, sourceID);
    }
    console.log(style);

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
        center: [40, -90],
        zoom: 3
    });
    /*
    map.easeTo([40, -90], 6, 180, {
        'duration': 20000
    });
	*/

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
				
				var title = null,
				    operator = null,
				    id = null;
				
                var title = features[0].properties.name;
                var operator = features[0].properties.OperatorNa;
                var id = features[0].layer.id;
                if (title !== undefined) {
                     $('#features').show();
                    document.getElementById('features').innerHTML =
                        '<h2>River</h2>' + title + '<br><a class="btn btn-primary" href="{{ site.baseurl }}/source/' + id + '">View layer</a>';
                }
                if (operator !== undefined) {
                   $('#features').show();
                    document.getElementById('features').innerHTML =
                        '<h2>Pipeline</h2>' + operator + '<br><a class="btn btn-primary" href="{{ site.baseurl }}/source/' + id + '">View layer</a>';

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

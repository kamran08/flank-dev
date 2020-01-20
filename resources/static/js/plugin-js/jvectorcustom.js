
// ! function($) {
// 	"use strict";

// 	var VectorMap = function() {
// 	};

// 	VectorMap.prototype.init = function() {

// 		//world map
//         $('#world-map').vectorMap({
//             map: 'world_mill',
//             series: {
//                 regions: [{
//                     values: {
//                         IN:'#03A9F5',
//                         US:'#03A9F5',
//                         BD: '#64D595',
//                         CA: '#FF4961',
//                         DE: '#FFD700',
//                         MT: 'green',
//                     }
//                 }]
//             },
//             backgroundColor: "transparent",
//             normalizeFunction: 'polynomial',
//             hoverOpacity: 0.7,
//             hoverColor: false,
//             markerStyle: {
//                 initial: {
//                     fill: '#F8E23B',
//                     stroke: 'red'
//                 }
//             },
//             markers: [
//                 {latLng: [41.90, 12.45], name: 'Vatican City'},
//                 {latLng: [43.73, 7.41], name: 'Monaco'},
//                 {latLng: [-0.52, 166.93], name: 'Nauru'},
//                 {latLng: [-8.51, 179.21], name: 'Tuvalu'},
//                 {latLng: [43.93, 12.46], name: 'San Marino'},
//                 {latLng: [47.14, 9.52], name: 'Liechtenstein'},
//                 {latLng: [7.11, 171.06], name: 'Marshall Islands'},
//                 {latLng: [17.3, -62.73], name: 'Saint Kitts and Nevis'},
//                 {latLng: [3.2, 73.22], name: 'Maldives'},
//                 {latLng: [12.05, -61.75], name: 'Grenada'},
//                 {latLng: [13.16, -61.23], name: 'Saint Vincent and the Grenadines'},
//                 {latLng: [13.16, -59.55], name: 'Barbados'},
//                 {latLng: [17.11, -61.85], name: 'Antigua and Barbuda'},
//                 {latLng: [-4.61, 55.45], name: 'Seychelles'},
//                 {latLng: [7.35, 134.46], name: 'Palau'},
//                 {latLng: [42.5, 1.51], name: 'Andorra'},
//                 {latLng: [14.01, -60.98], name: 'Saint Lucia'},
//                 {latLng: [6.91, 158.18], name: 'Federated States of Micronesia'},
//                 {latLng: [1.3, 103.8], name: 'Singapore'},
//                 {latLng: [1.46, 173.03], name: 'Kiribati'},
//                 {latLng: [-21.13, -175.2], name: 'Tonga'},
//                 {latLng: [15.3, -61.38], name: 'Dominica'},
//                 {latLng: [-20.2, 57.5], name: 'Mauritius'},
//                 {latLng: [26.02, 50.55], name: 'Bahrain'},
//                 {latLng: [0.33, 6.73], name: 'São Tomé and Príncipe'}
//             ],
//         });


// 	},
// 	$.VectorMap = new VectorMap, $.VectorMap.Constructor =
// 	VectorMap
// }(window.jQuery),

// //initializing
// function($) {
// 	"use strict";
// 	$.VectorMap.init()
// }(window.jQuery);

// $(function() {
//     $('#usMap').vectorMap({
//         map: 'us_aea_en',
//         hoverColor: false,
//         hoverOpacity: 0.5, 
//         onRegionClick: function(e, code){
//             alert( code.replace("US-", "") );
//         }, 
//         regionStyle: {
//         initial: {
//           fill: '#128da7'
//         },
//         hover: {
//             fill: "#A0D1DC"
//           }
//       }
//     });
// });

$(function(){
    $('#world-map').vectorMap({
        map: 'world_mill',
        zoomButtons: false,
        hoverColor: false,
        hoverOpacity: 0.5,
        regionStyle: {
            initial: {
              fill: '#828E8F'
            },
            hover: {
                fill: "#0087E5"
              }
          }
    });

    $('#world-map-markers').vectorMap({
        map: 'world_mill',
        zoomButtons: false,
        scaleColors: ['#C8EEFF', '#0071A4'],
        normalizeFunction: 'polynomial',
        hoverOpacity: 0.7,
        hoverColor: false,
        markerStyle: {
          initial: {
            fill: '#F8E23B',
            stroke: '#383f47'
          }
        },
        regionStyle: {
            initial: {
                fill: '#828E8F'
            },
            hover: {
                fill: "#0087E5"
            }
        },
        markers: [
          {latLng: [41.90, 12.45], name: 'Vatican City'},
          {latLng: [43.73, 7.41], name: 'Monaco'},
          {latLng: [-0.52, 166.93], name: 'Nauru'},
          {latLng: [-8.51, 179.21], name: 'Tuvalu'},
          {latLng: [43.93, 12.46], name: 'San Marino'},
          {latLng: [47.14, 9.52], name: 'Liechtenstein'},
          {latLng: [7.11, 171.06], name: 'Marshall Islands'},
          {latLng: [17.3, -62.73], name: 'Saint Kitts and Nevis'},
          {latLng: [3.2, 73.22], name: 'Maldives'},
          {latLng: [35.88, 14.5], name: 'Malta'},
          {latLng: [12.05, -61.75], name: 'Grenada'},
          {latLng: [13.16, -61.23], name: 'Saint Vincent and the Grenadines'},
          {latLng: [13.16, -59.55], name: 'Barbados'},
          {latLng: [17.11, -61.85], name: 'Antigua and Barbuda'},
          {latLng: [-4.61, 55.45], name: 'Seychelles'},
          {latLng: [7.35, 134.46], name: 'Palau'},
          {latLng: [42.5, 1.51], name: 'Andorra'},
          {latLng: [14.01, -60.98], name: 'Saint Lucia'},
          {latLng: [6.91, 158.18], name: 'Federated States of Micronesia'},
          {latLng: [1.3, 103.8], name: 'Singapore'},
          {latLng: [1.46, 173.03], name: 'Kiribati'},
          {latLng: [-21.13, -175.2], name: 'Tonga'},
          {latLng: [15.3, -61.38], name: 'Dominica'},
          {latLng: [-20.2, 57.5], name: 'Mauritius'},
          {latLng: [26.02, 50.55], name: 'Bahrain'},
          {latLng: [0.33, 6.73], name: 'São Tomé and Príncipe'}
        ]
      });

    $('#usMap').vectorMap({
        map: 'us_aea_en',
        zoomButtons: false,
        hoverColor: false,
        hoverOpacity: 0.5, 
        onRegionClick: function(e, code){
            alert( code.replace("US-", "") );
        }, 
        regionStyle: {
        initial: {
            fill: '#828E8F'
        },
        hover: {
            fill: "#0087E5"
            }
        }
    });

    $('#ukMap').vectorMap({
        map: 'uk_countries_mill',
        zoomButtons: false,
        hoverColor: false,
        hoverOpacity: 0.5, 
        onRegionClick: function(e, code){
            alert( code.replace("US-", "") );
        }, 
        regionStyle: {
        initial: {
            fill: '#828E8F'
        },
        hover: {
            fill: "#0087E5"
            }
        }
    });
});
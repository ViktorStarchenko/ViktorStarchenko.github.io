
// var ctx = document.getElementById("myChart").getContext('2d');
// var myChart = new Chart(ctx, {
//     type: 'line',
//     data: {
//         labels: ["UI/UX Design 75%", "web development 90%", "marketing 65%"],
//         datasets: [{
//             label: '# of Votes',
//             data: [75, 19, 3, 5, 2, 3],
//             backgroundColor: [
//                 '#10c9c3',
//                 '#10c9c3',
//                 '#10c9c3'
//             ],
//             borderColor: [
//                 '#10c9c3',
//                 '#10c9c3',
//                 '#10c9c3'
//             ],
//             borderWidth: 1
//         }]
//     },
//     options: {
//         scales: {
//             yAxes: [{
//                 ticks: {
//                     beginAtZero:true
//                 }
//             }]
//         }
//     }
// });	

// Highcharts.chart('myChart', {
//     chart: {
//         type: 'bar'
//     },
//     title: {
//         text: 'Historic World Population by Region'
//     },
//     subtitle: {
//         text: 'Source: <a href="https://en.wikipedia.org/wiki/World_population">Wikipedia.org</a>'
//     },
//     xAxis: {
//         categories: ['Africa', 'America', 'Asia', 'Europe', 'Oceania'],
//         title: {
//             text: null
//         }
//     },
//     yAxis: {
//         min: 0,
//         title: {
//             text: 'Population (millions)',
//             align: 'high'
//         },
//         labels: {
//             overflow: 'justify'
//         }
//     },
//     tooltip: {
//         valueSuffix: ' millions'
//     },
//     plotOptions: {
//         bar: {
//             dataLabels: {
//                 enabled: true
//             }
//         }
//     },
//     legend: {
//         layout: 'vertical',
//         align: 'right',
//         verticalAlign: 'top',
//         x: -40,
//         y: 80,
//         floating: true,
//         borderWidth: 1,
//         backgroundColor: ((Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'),
//         shadow: true
//     },
//     credits: {
//         enabled: false
//     },
//     series: [{
//         name: 'Year 1800',
//         data: [107, 31, 635, 203, 2]
//     }, {
//         name: 'Year 1900',
//         data: [133, 156, 947, 408, 6]
//     }, {
//         name: 'Year 2000',
//         data: [814, 841, 3714, 727, 31]
//     }, {
//         name: 'Year 2016',
//         data: [1216, 1001, 4436, 738, 40]
//     }]
// });
// Highcharts Demos › Basic bar
// LINE CHARTS
// AREA CHARTS
// COLUMN AND BAR CHARTS
// Basic bar
// Stacked bar
// Bar with negative stack
// Basic column
// Column with negative values
// Stacked column
// Stacked and grouped column
// Stacked percentage column
// Column with rotated labels
// Column with drilldown
// Fixed placement columns
// Data defined in a HTML table
// Column range
// PIE CHARTS
// SCATTER AND BUBBLE CHARTS
// COMBINATIONS
// STYLED MODE (CSS STYLING)
// DYNAMIC CHARTS
// 3D CHARTS
// GAUGES
// HEAT AND TREE MAPS
// MORE CHART TYPES
// Population (millions)
// Historic World Population by Region
// Source: Wikipedia.org
// 3131
// 635635
// 203203
// 133133
// 156156
// 947947
// 408408
// 66
// 814814
// 841841
// 3 7143 714
// 1 2161 216
// 1 0011 001
// 4 4364 436
// 738738
// 4040
// Year 1800
// Year 1900
// Year 2000
// Year 2016
// Africa
// America
// Asia
// Europe
// Oceania
// 0
// 500
// 1000
// 1500
// 2000
// 2500
// 3000
// 3500
// 4000
// 4500
// 5000
// America● Year 2000: 841 millions
// VIEW OPTIONS  EDIT IN JSFIDDLE  EDIT IN CODEPEN  EDIT IN HIGHCHARTS CLOUD 


Highcharts.chart('myChart', {

    chart: {
        type: 'solidgauge',
        height: '110%',
        events: {
            render: renderIcons
        }
    },

    title: {
        text: 'Activity',
        style: {
            fontSize: '24px'
        }
    },

    tooltip: {
        borderWidth: 0,
        backgroundColor: 'none',
        shadow: false,
        style: {
            fontSize: '16px'
        },
        pointFormat: '{series.name}<br><span style="font-size:2em; color: {point.color}; font-weight: bold">{point.y}%</span>',
        positioner: function (labelWidth) {
            return {
                x: (this.chart.chartWidth - labelWidth) / 2,
                y: (this.chart.plotHeight / 2) + 15
            };
        }
    },

    pane: {
        startAngle: 0,
        endAngle: 360,
        background: [{ // Track for Move
            outerRadius: '112%',
            innerRadius: '88%',
            backgroundColor: Highcharts.Color(Highcharts.getOptions().colors[0])
                .setOpacity(0.3)
                .get(),
            borderWidth: 0
        }, { // Track for Exercise
            outerRadius: '87%',
            innerRadius: '63%',
            backgroundColor: Highcharts.Color(Highcharts.getOptions().colors[1])
                .setOpacity(0.3)
                .get(),
            borderWidth: 0
        }, { // Track for Stand
            outerRadius: '62%',
            innerRadius: '38%',
            backgroundColor: Highcharts.Color(Highcharts.getOptions().colors[2])
                .setOpacity(0.3)
                .get(),
            borderWidth: 0
        }]
    },

    yAxis: {
        min: 0,
        max: 100,
        lineWidth: 0,
        tickPositions: []
    },

    plotOptions: {
        solidgauge: {
            dataLabels: {
                enabled: false
            },
            linecap: 'round',
            stickyTracking: false,
            rounded: true
        }
    },

    series: [{
        name: 'Move',
        data: [{
            color: Highcharts.getOptions().colors[0],
            radius: '112%',
            innerRadius: '88%',
            y: 80
        }]
    }, {
        name: 'Exercise',
        data: [{
            color: Highcharts.getOptions().colors[1],
            radius: '87%',
            innerRadius: '63%',
            y: 65
        }]
    }, {
        name: 'Stand',
        data: [{
            color: Highcharts.getOptions().colors[2],
            radius: '62%',
            innerRadius: '38%',
            y: 50
        }]
    }]
});
// adds social class to get social chart
// let element = document.getElementsByClassName("chart-area");
// for(var i = 0; i < element.length; i++)
// {
//     element[i].className += " social";
// }

let subhead = document.getElementsByClassName("chart-subhead"),
    headline = document.getElementById("chart-head");
    if (!headline) {
        for(var i = 0; i < subhead.length; i++) {
            subhead[i].className += " strong";
        }       
     }

let data = [
    {
        "Plan":       "Standard level",
        "Term":   "10 years",
        "Monthly payment":     "$383",
        "Total amount": "$46,015"
    },
    {
        "Plan":       "Standard graduated",
        "Term":   "10 years",
        "Monthly payment":     "$216-647",
        "Total amount": "$48,297"
    },
    {
        "Plan":       "Standard extended",
        "Term":   "25 years",
        "Monthly payment":     "$206",
        "Total amount": "$61,697"
    },
    {
        "Plan":       "Income based",
        "Term":   "20-25 years",
        "Monthly payment":     "$266-383",
        "Total amount": "$49,278"
    },
    {
        "Plan":       "Income contingent",
        "Term":   "25 years",
        "Monthly payment":     "$276-324",
        "Total amount": "$50,450"
    },
    {
        "Plan":       "Pay as you earn",
        "Term":   "20 years",
        "Monthly payment":     "$177-383",
        "Total amount": "$54,135"
    },
    {
        "Plan":       "Revised pay as you earn",
        "Term":   "20-25 years",
        "Monthly payment":     "$177-471",
        "Total amount": "$54,058"
    }
]

const table = $('#chart-container').DataTable( {
    data: data,
    columns: [
        { data: 'Plan', title: 'Plan' },
        { data: 'Term', title: 'Term' },
        { data: 'Monthly payment', title: 'Monthly payment' },
        { data: 'Total amount', title: 'Total amount' }
    ],
    paging: false,
    searching: false,
    order: [3,'asc']
} );

// Highcharts.setOptions({
//     lang: {
//       thousandsSep: ','
//     }
// });


// document.addEventListener('DOMContentLoaded', function () {
//     const myChart = Highcharts.chart('chart-container', {
//         chart: {
//             type: 'bar',
//             styledMode: true,
//             spacingBottom: 25,
//             spacingRight: 100
//         }, 
//         title: {
//             text: null
//         },
//         data: {
//             googleSpreadsheetKey: '1YOKb5l2VM4aAB2r20N_1aT_1vEajYrP3U-U3A6lZbC0'
//         },
//         legend: {
//             align: 'right',
//             symbolRadius: 0,
//             verticalAlign: 'top',
//             x: 10,
//             itemMarginTop: -10
//         },
//         xAxis: {
//             labels: {
//                 style: {
//                     whiteSpace: 'nowrap'
//                 }
//             },
//             tickLength: 5
//         },
//         yAxis: {
//             title: false,
//             labels: {
//                 useHTML: true,
//                 overflow: 'allow'
//             }
//         },
//         credits: {
//             enabled: false
//         },
//         tooltip: {
//             shadow: false,
//             padding: 10
//         },
//         responsive: {
//             rules: [{
//               condition: {
//                 maxWidth: 500
//               },
//               chartOptions: {
//                 chart: {
//                   spacingRight: 10
//                 },
//                 legend: {
//                     align: 'left',
//                     x: -18
//                 },
//                 tooltip: {
//                     enabled: false
//                 }
//               }
//             }]
//         }
//     });
// });
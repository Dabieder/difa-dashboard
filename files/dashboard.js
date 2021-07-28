// let contextPolar1 = document.getElementById("polarChartLE1").getContext("2d");
// let contextPolar2 = document.getElementById("polarChartLE2").getContext("2d");
// let contextPolar3 = document.getElementById("polarChartLE3").getContext("2d");

function createRadarChart(elementName, title) {
    console.log("Creating Radar Dashboard");
    let context = document.getElementById(elementName);
    let chart = echarts.init(context);

    let options = {
        color: colors,
        tooltip: {
            trigger: "item"
        },
        legend: {
            top: "5%",
            left: "center"
        },
        radar: {
            indicator: [
                { name: "Einheit 1", min: 0, max: 10 },
                { name: "Einheit 2", min: 0, max: 10 },
                { name: "Einheit 3", min: 0, max: 10 },
                { name: "Einheit 4", min: 0, max: 10 },
                { name: "Einheit 5", min: 0, max: 10 },
            ]
        },
        series: [
            {
                name: "Selbstreguliertes Lernen",
                type: "radar",
                data: [
                    {
                        name: "Elaboration",
                        value: getRandomNumbers(5, 0, 10)
                    },
                    {
                        name: "Regulation",
                        value: getRandomNumbers(5, 0, 10)
                    },
                    {
                        name: "Monitoring",
                        value: getRandomNumbers(5, 0, 10)
                    },
                    {
                        name: "Planung",
                        value: getRandomNumbers(5, 0, 10)
                    }
                ]
            }

        ]
    }

    options && chart.setOption(options);
}

function createBarChart(elementName) {
    console.log("Creating Bar Charts");
    let context = document.getElementById(elementName);
    let chart = echarts.init(context);

    let options = {
        color: colors,
        legend: {
            data: ["Lernzeit", "Lerninteresse", "Lernfreude"]
        },
        xAxis: [
            {
                type: "category",
                data: ["Einheit 1", "Einheit 2", "Einheit 3", "Einheit 4", "Einheit 5"]
            }
        ],
        yAxis: [
            {
                type: 'value'
            }
        ],
        series: [
            {
                name: "Lernzeit",
                type: "bar",
                barGap: 0.1,
                data: getRandomNumbers(5, 0, 10)
            },
            {
                name: "Lerninteresse",
                type: "bar",
                barGap: 0.1,
                data: getRandomNumbers(5, 0, 10)
            },
            {
                name: "Lernfreude",
                type: "bar",
                barGap: 0.1,
                data: getRandomNumbers(5, 0, 10)
            },
        ]
    }

    options && chart.setOption(options);
}


// let radarChartOptions = {
//     scale: {
//         min: 0,
//         max: 10
//     }
// };

// new Chart(contextPolar1, {
//     type: 'radar',
//     data: {
//         labels: labels,
//         datasets: [{
//             label: "Lernzeit",
//             data: getRandomNumbers(5, 1, 10),
//             borderColor: colors[0],
//         },]
//     },
//     options: radarChartOptions
// });



// new Chart(contextPolar2, {
//     type: 'radar',
//     data: {
//         labels: labels,
//         datasets: [{
//             label: "Lerninteresse",
//             data: getRandomNumbers(5, 1, 10),
//             borderColor: colors[2],
//         },]
//     },
//     options: radarChartOptions
// });


// new Chart(contextPolar3, {
//     type: 'radar',
//     data: {
//         labels: labels,
//         datasets: [{
//             label: "Lernfreude",
//             data: getRandomNumbers(5, 1, 10),
//             borderColor: colors[4],
//         },]
//     },
//     options: radarChartOptions
// });


var contextBarChartReading = document.getElementById("barChartMDC").getContext("2d");

new Chart(contextBarChartReading, {
    type: 'bar',
    data: {
        labels: ["Text 1", "Text 2", "Text 3", "Text 4", "Text 5"],
        datasets: [
            {
                label: "Ihre Zeit",
                data: getRandomNumbers(5, -10, 10),
                backgroundColor: colors[2],
            },]
    },
    options: {
        responsive: false,
        scales: {
            y: {
                min: -10,
                max: 10,
                beginAtZero: true
            }
        }
    }
});


function createLEBarChart() {

    var chartDom = document.getElementById('canvas-eng');
    var myChart = echarts.init(chartDom);
    var option;

    option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        legend: {
            orient: "vertical",
            data: ['Aufmerksamkeit', 'Anstrengungsbereitschaft', 'Interesse am Lerngegenstand']
        },
        toolbox: {
            show: true,
            orient: 'vertical',
            left: 'right',
            top: 'center',
            feature: {
                mark: { show: true },
                dataView: { show: true, readOnly: false },
                magicType: { show: true, type: ['line', 'bar'] },
                restore: { show: true },
                saveAsImage: { show: true }
            }
        },
        xAxis: [
            {
                type: 'category',
                axisTick: { show: false },
                data: ['Einheit 1', 'Einheit 2', 'Einheit 3', 'Einheit 4', 'Einheit 5']
            }
        ],
        yAxis: [
            {
                type: 'value'
            }
        ],
        series: [
            {
                name: 'Aufmerksamkeit',
                type: 'bar',
                barGap: 0.1,
                emphasis: {
                    focus: 'series'
                },
                data: getRandomNumbers(5, 0, 10)
            },
            {
                name: 'Anstrengungsbereitschaft',
                type: 'bar',
                barGap: 0.1,
                emphasis: {
                    focus: 'series'
                },
                data: getRandomNumbers(5, 0, 10)
            },
            {
                name: 'Interesse am Lerngegenstand',
                type: 'bar',
                barGap: 0.1,
                emphasis: {
                    focus: 'series'
                },
                data: getRandomNumbers(5, 0, 10)
            }
        ]
    };

    option && myChart.setOption(option);
}


createRadarChart("radarSRL");
// createBarChart("barChartLE");
createLEBarChart();
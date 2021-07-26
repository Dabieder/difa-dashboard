
let colors = [
    "#003f5c",
    "#2f4b7c",
    "#665191",
    "#a05195",
    "#d45087",
    "#f95d6a",
    "#ff7c43",
    "#ffa600",
];

let labels = ['Einheit 1', 'Einheit 2', 'Einheit 3', "Einheit 4", "Einheit 5"];

function getRandomNumbers(count, min, max) {

    let numbers = []
    for (let i = 0; i < count; i++) {
        let rndInt = Math.floor(Math.random() * (max - min + 1) + min)
        numbers.push(rndInt);
    }
    console.log(numbers);
    return numbers;
}

let contextRadar = document.getElementById("radarChartLE").getContext("2d");

var myChart = new Chart(contextRadar, {
    type: 'radar',
    data: {
        labels: labels,
        datasets: [{
            label: "Lernzeit",
            data: [2, 5, 2, 4, 7],
            borderColor: colors[0],
        },
        {
            label: "Lerninteresse",
            data: [1, 2, 1, 3, 6],
            borderColor: colors[1],
        },
        {
            label: "Lernfreude",
            data: [3, 4, 1, 2, 2],
            borderColor: colors[2],
        },]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});



let contextPolar1 = document.getElementById("polarChartLE1").getContext("2d");
let contextPolar2 = document.getElementById("polarChartLE2").getContext("2d");
let contextPolar3 = document.getElementById("polarChartLE3").getContext("2d");

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


let radarChartOptions = {
    scale: {
        min: 0,
        max: 10
    }
};

new Chart(contextPolar1, {
    type: 'radar',
    data: {
        labels: labels,
        datasets: [{
            label: "Lernzeit",
            data: getRandomNumbers(5, 1, 10),
            borderColor: colors[0],
        },]
    },
    options: radarChartOptions
});



new Chart(contextPolar2, {
    type: 'radar',
    data: {
        labels: labels,
        datasets: [{
            label: "Lerninteresse",
            data: getRandomNumbers(5, 1, 10),
            borderColor: colors[2],
        },]
    },
    options: radarChartOptions
});


new Chart(contextPolar3, {
    type: 'radar',
    data: {
        labels: labels,
        datasets: [{
            label: "Lernfreude",
            data: getRandomNumbers(5, 1, 10),
            borderColor: colors[4],
        },]
    },
    options: radarChartOptions
});


var contextBarChartReading = document.getElementById("barChartMDC").getContext("2d");

new Chart(contextBarChartReading, {
    type: 'bar',
    data: {
        labels: ["Einheit 1", "Einheit 2", "Einheit 3", "Einheit 5"],
        datasets: [{
            label: "Zeitintensität des Textes",
            data: getRandomNumbers(4, 1, 10),
            backgroundColor: colors[0],
        },
        {
            label: "Ihre Zeit",
            data: getRandomNumbers(4, 1, 10),
            backgroundColor: colors[2],
        },]
    },
    options: {
        responsive: false,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

var contextDonutReadingIntegration = document.getElementById("donutChartMDCIntegration").getContext("2d");

new Chart(contextDonutReadingIntegration,
    {
        type: 'doughnut',
        data: {
            labels: ["Luft nach oben", "Erledigt"],
            datasets: [{
                data: [300, 50],
                labels: ["Luft nach oben", "Erledigt"],
                backgroundColor: [
                    'rgb(222, 99, 55)',
                    'rgb(54, 222, 66)',
                ],
            }],
        },
        options: {
            responsive: false,
            cutout: "80%",
            title: {
                display: true,
                text: "Wissens-Integration"
            },
            plugins: {
                legend: {
                    position: 'bottom',
                },
            }
        }
    }
);

var contextDonutMDCMeta = document.getElementById("donutChartMDCMeta").getContext("2d");

new Chart(contextDonutMDCMeta,
    {
        type: 'doughnut',
        label: "Käse",
        borderWidth: 1,
        data: {
            labels: ["Luft nach oben", "Erledigt"],
            datasets: [{
                label: "Wurst",
                borderWidth: 1,
                data: [222, 15],

                backgroundColor: [
                    'rgb(222, 99, 55)',
                    'rgb(54, 222, 66)',
                ],
            }],
        },
        options: {
            responsive: false,
            cutout: "80%",
            borderWidth: 1,
            title: {
                display: true,
                text: "Umgang mit Meta-Information"
            },
            plugins: {
                legend: {
                    position: 'bottom',
                },
            }
        }
    }
);

createRadarChart("radarSRL");
createBarChart("barChartLE");
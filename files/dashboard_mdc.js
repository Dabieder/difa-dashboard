var contextBarChartReading = document.getElementById("barChartMDC").getContext("2d");

function createBarChartMDC() {
    var chartDom = document.getElementById('main');
    var myChart = echarts.init(chartDom);
    var option;

    var labelRight = {
        position: 'right'
    };
    option = {
        title: {
            text: 'Leseanalyse',
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        grid: {
            top: 80,
            bottom: 30
        },
        xAxis: {
            type: 'category',
            position: 'center',
            splitLine: {
                lineStyle: {
                    type: 'dashed'
                }
            }
        },
        yAxis: {
            type: 'value',
            min: -10,
            max: 10,
            axisLine: { show: false },
            axisLabel: { show: false },
            axisTick: { show: false },
            splitLine: { show: false },
            data: ['Text 1', 'Text 2', 'Text 3', 'Text 4', 'Text 5']
        },
        series: [
            {
                name: '生活费',
                type: 'bar',
                stack: '总量',
                label: {
                    show: true,
                    formatter: '{b}'
                },
                data: [
                    { value: -3, label: labelRight },
                    { value: -2, label: labelRight },
                    { value: 2, label: labelRight },
                    { value:5, label: labelRight },
                    { value: 7, label: labelRight },
                ]
            }
        ]
    };

    option && myChart.setOption(option);
}

new Chart(contextBarChartReading, {
    type: 'bar',
    data: {
        labels: ["Text 1", "Text 2", "Text 3", "Text 4", "Text 5"],
        datasets: [
            {
                label: "Ihre Zeit im Vergleich zur durchschnittlichen Bearbeitungszeit",
                data: getRandomNumbers(4, -10, 10),
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

const toolBoxOptions = {
    show: true,
    orient: 'vertical',
    left: 'right',
    top: 'center',
    feature: {
        mark: { show: false },
        dataView: { show: true, readOnly: false },
        magicType: { show: true, type: ['line', 'bar'] },
        restore: { show: true },
        saveAsImage: { show: true }
    }
};

const xAxisOptions = {
    type: 'category',
    data: ['Einheit 1', 'Einheit 2', 'Einheit 3', 'Einheit 4', 'Einheit 5']
};

const yAxisOptions = {
    type: "value"
}

const barOptions = {
    type: "bar",
    barGap: 0.1,
}

function createLEBarChart(highlightIndex) {

    let chartDom = document.getElementById('canvas-eng');
    let myChart = echarts.init(chartDom);
    let option;

    let constructs = ['Aufmerksamkeit', 'Anstrengungsbereitschaft', 'Interesse am Lerngegenstand'];
    let series = [];
    for (let i = 0; i < constructs.length; i++) {
        let data = getRandomNumbers(NUM_ASSIGNMENTS, 1, 10);

        data = highlightOnlyOne(data, highlightIndex, colors[i]);

        series.push({
            name: constructs[i],
            data,
            ...barOptions
        });
    }

    option = {
        color: colors,
        tooltip: {
            show: true,
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        legend: {
            orient: "vertical",
            data: ['Aufmerksamkeit', 'Anstrengungsbereitschaft', 'Interesse am Lerngegenstand']
        },
        xAxis: [
            xAxisOptions
        ],
        yAxis: [
            yAxisOptions
        ],
        series
    };

    option && myChart.setOption(option);
}


function createSRLBarChart(highlightIndex) {
    console.log("Creating an SRL Bar Chart");

    let chartDom = document.getElementById('canvas-srl');
    let myChart = echarts.init(chartDom);
    let option;

    let constructs = ['Elaboration', 'Regulation', 'Monitoring', 'Planung'];
    let series = [];
    for (let i = 0; i < constructs.length; i++) {
        let data = getRandomNumbers(NUM_ASSIGNMENTS, 1, 10);

        data = highlightOnlyOne(data, highlightIndex, colors[i]);

        series.push({
            name: constructs[i],
            data,
            ...barOptions,
            tooltip: {
                triger: "item",
                show: true,
            },
        });
    }

    option = {
        color: colors,
        legend: {
            orient: "horizontal",
            data: constructs
        },
        tooltip: {
            triger: "item",
            show: true,
        },
        xAxis: [
            xAxisOptions
        ],
        yAxis: [
            yAxisOptions
        ],
        series
    };

    option = {
        title: {
            text: 'Waterfall Chart',
            subtext: 'Living Expenses in Shenzhen'
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            },
            formatter: function (params) {
                var tar = params[1];
                return tar.name + '<br/>' + tar.seriesName + ' : ' + tar.value;
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            splitLine: { show: false },
            data: ['Total', 'Rent', 'Utilities', 'Transportation', 'Meals', 'Other']
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                name: 'Placeholder',
                type: 'bar',
                stack: 'Total',
                itemStyle: {
                    borderColor: 'transparent',
                    color: 'transparent'
                },
                emphasis: {
                    itemStyle: {
                        borderColor: 'transparent',
                        color: 'transparent'
                    }
                },
                data: [0, 1700, 1400, 1200, 300, 0]
            },
            {
                name: 'Life Cost',
                type: 'bar',
                stack: 'Total',
                label: {
                    show: true,
                    position: 'inside'
                },
                data: [2900, 1200, 300, 200, 900, 300]
            }
        ]
    };

    option && myChart.setOption(option);
}


function createMDCBarChart(highlightIndex) {

    let chartDom = document.getElementById('canvas-bar-mdc');
    let myChart = echarts.init(chartDom);
    let option;

    let min = 0;
    let max = 100;

    let constructs = ['Wissensintegration', 'Nutzung von Quellen', 'Mindestlesezeit erreicht'];
    let series = [];
    let tooltips = ["So gut ist es Ihnen gelungen, Inhalte zu vergleichen und zu integrieren",
        "So gut ist es Ihnen gelungen, Quelleninformationen zu nutzen",
        "Anteil der Texte bei denen die Mindestlesezeit erreicht wurde"

    ];
    for (let i = 0; i < constructs.length; i++) {
        let data = getRandomNumbers(NUM_ASSIGNMENTS, min, max);

        data = highlightOnlyOne(data, highlightIndex, colors[i]);

        series.push({
            name: constructs[i],
            data,
            ...barOptions,
            tooltip: {
                formatter: tooltips[i]
            }
        });
    }

    option = {
        title: {
            text: "Akademisches Lesen"
        },
        color: colors,
        legend: {
            bottom: 10,
            orient: "horizontal",
            data: constructs
        },
        tooltip: {
            show: true
            // trigger: "item",
            // formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        xAxis: [
            xAxisOptions
        ],
        yAxis: [
            yAxisOptions
        ],
        series
    };

    option && myChart.setOption(option);
}

function createMDCDoughnutChart(canvasId, title) {
    let chartDom = document.getElementById(canvasId);
    let myChart = echarts.init(chartDom);

    let numCharts = 5;
    let percentage = 100.0 / numCharts;
    let data = [];
    let series = [];
    let titles = [{
        text: title,
        left: 'center'
    },];


    let pieChartOptions = {
        type: 'pie',
        radius: ['20%', '30%'],
        label: {
            show: false,
            position: 'center'
        },
        emphasis: {
            label: {
                show: true,
                fontSize: '40',
                fontWeight: 'bold'
            }
        },
    }

    let values = getRandomNumbers(NUM_ASSIGNMENTS, 0, 100);
    for (let i = 0; i < numCharts; i++) {
        data.push([
            { value: values[i], name: '' },
            { value: 100 - values[i], name: '' }
        ]);

        series.push({
            ...pieChartOptions,
            data: data[i],
            center: [`${percentage * (i) + percentage / 2}%`, '30%']
        })

        titles.push({
            subtext: 'Text' + (i + 1),
            left: `${percentage * i + percentage / 2}%`,
            top: "50%",
            textAlign: 'center'
        })

        titles.push({
            subtext: `${values[i]}:00`,
            left: `${percentage * i + percentage / 2}%`,
            top: "60%",
            textAlign: 'center'
        })
    }




    console.log(percentage);
    console.log(series);



    let option = {
        title: titles,
        series: series
    };

    option && myChart.setOption(option);

}

function redrawDashboard(highlightIndex) {
    createSRLBarChart(highlightIndex);
    // createRadarChart("radarSRL");
    // createBarChart("barChartLE");
    createLEBarChart(highlightIndex);
    createMDCBarChart(highlightIndex);

    createMDCDoughnutChart("mdc-text-doughnuts", "Lesezeiten");
}

function submitGoals() {
    console.log("Submitting Goals");

    let textarea = document.getElementById("textarea-goals");
    textarea.readOnly = !textarea.readOnly;

    let submitButton = document.getElementById("submit-goals");
    submitButton.innerHTML = textarea.readOnly ? "Bearbeiten" : "Speichern";

    let description = textarea.readOnly ?
        "Ihr Ziel für diesen Kurs ist:" :
        "Schreiben Sie hier, aus welchen Gründen Sie diesen Kurs besuchen";
    document.getElementById("description-goal-setting").innerHTML = description;
}

let NUM_ASSIGNMENTS = 4;
// redrawDashboard(0);
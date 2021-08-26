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

function createLEBarChart(highlightIndex) {

    var chartDom = document.getElementById('canvas-eng');
    var myChart = echarts.init(chartDom);
    var option;

    let constructs = ['Aufmerksamkeit', 'Anstrengungsbereitschaft', 'Interesse am Lerngegenstand'];
    let series = [];
    for (let i = 0; i < constructs.length; i++) {
        let data = getRandomNumbers(NUM_ASSIGNMENTS, 1, 10);

        data = highlightOnlyOne(data, highlightIndex, colors[i]);

        series.push({
            name: constructs[i],
            type: 'bar',
            barGap: 0.1,
            emphasis: {
                focus: 'group'
            },
            data
        });
    }

    option = {
        color: colors,
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
        toolbox: toolBoxOptions,
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
        series
    };

    option && myChart.setOption(option);
}


function createSRLBarChart(highlightIndex) {
    console.log("Creating an SRL Bar Chart");

    var chartDom = document.getElementById('canvas-srl');
    var myChart = echarts.init(chartDom);
    var option;

    let constructs = ['Elaboration', 'Regulation', 'Monitoring', 'Planung'];
    let series = [];
    for (let i = 0; i < constructs.length; i++) {
        let data = getRandomNumbers(NUM_ASSIGNMENTS, 1, 10);

        data = highlightOnlyOne(data, highlightIndex, colors[i]);

        series.push({
            name: constructs[i],
            type: 'bar',
            barGap: 0.1,
            emphasis: {
                focus: 'category'
            },
            data
        });
    }

    option = {
        color: colors,
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        legend: {
            orient: "horizontal",
            data: constructs
        },
        toolbox: toolBoxOptions,
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
        series
    };

    option && myChart.setOption(option);
}


function createMDCBarChart(highlightIndex) {

    var chartDom = document.getElementById('canvas-bar-mdc');
    var myChart = echarts.init(chartDom);
    var option;

    let min = -10;
    let max = 10;

    constructs = ['Ihre Zeit']
    let numbers = getRandomNumbers(5, min, max);
    let seriesData = [];
    for (let i = 0; i < 5; i++) {
        let color = numbers[i] > 0 ? "#44cc44" : '#cc4444';
        seriesData.push({
            value: numbers[i],
            itemStyle: {
                color
            },
            type: 'bar'
        })
    }

    console.log(seriesData);
    option = {
        toolbox: toolBoxOptions,
        xAxis: [
            {
                type: 'category',
                data: ['Text 1', 'Text 2', 'Text 3', 'Text 4', 'Text 5']
            }
        ],
        yAxis: [
            {
                type: 'value',
                min,
                max
            }
        ],
        series: [
            {
                data: seriesData,
                type: "bar"
            },
        ]
    };

    option && myChart.setOption(option);
}

function createLELineChart() {
    var chartDom = document.getElementById('canvas-eng');
    var myChart = echarts.init(chartDom);
    var option;

    let constructs = ['Aufmerksamkeit', 'Anstrengungsbereitschaft', 'Interesse am Lerngegenstand'];
    let series = [];
    for (let i = 0; i < constructs.length; i++) {
        let data = getRandomNumbers(NUM_ASSIGNMENTS, 1, 10);

        series.push({
            name: constructs[i],
            type: 'line',
            barGap: 0.1,
            emphasis: {
                focus: 'group'
            },
            data
        });
    }

    option = {
        color: colors,
        tooltip: {
            trigger: 'axis',
        },
        legend: {
            orient: "vertical",
            data: constructs
        },
        toolbox: toolBoxOptions,
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
        series
    };

    option && myChart.setOption(option);
}


function createSRLLineChart() {
    var chartDom = document.getElementById('canvas-srl');
    var myChart = echarts.init(chartDom);
    var option;

    let constructs = ['Elaboration', 'Regulation', 'Monitoring', 'Planung'];
    let series = [];
    for (let i = 0; i < constructs.length; i++) {
        let data = getRandomNumbers(NUM_ASSIGNMENTS, 1, 5);

        series.push({
            name: constructs[i],
            type: 'line',
            barGap: 0.1,
            emphasis: {
                focus: 'group'
            },
            data
        });
    }

    option = {
        color: colors,
        tooltip: {
            trigger: 'axis',
        },
        legend: {
            orient: "vertical",
            data: constructs
        },
        toolbox: toolBoxOptions,
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
        series
    };

    option && myChart.setOption(option);
}


function redrawDashboard(highlightIndex) {
    createSRLBarChart(highlightIndex);
    // createRadarChart("radarSRL");
    // createBarChart("barChartLE");
    createLEBarChart(highlightIndex);
    createMDCBarChart(highlightIndex);
}

function drawTrend(from, to) {
    createLELineChart();
    createSRLLineChart();
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
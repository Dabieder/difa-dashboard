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
    axisTick: { show: false },
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
            ...barOptions
        });
    }

    option = {
        color: colors,
        legend: {
            orient: "horizontal",
            data: constructs
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


function createMDCBarChart(highlightIndex) {

    let chartDom = document.getElementById('canvas-bar-mdc');
    let myChart = echarts.init(chartDom);
    let option;

    let min = 0;
    let max = 100;

    let constructs = ['Wissensintegration', 'Nutzung von Quellen', 'Mindestlesezeit erreicht'];
    let series = [];
    for (let i = 0; i < constructs.length; i++) {
        let data = getRandomNumbers(NUM_ASSIGNMENTS, min, max);

        data = highlightOnlyOne(data, highlightIndex, colors[i]);

        series.push({
            name: constructs[i],
            data,
            ...barOptions
        });
    }

    option = {
        color: colors,
        legend: {
            orient: "horizontal",
            data: constructs
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
    let option;

    option = {
        tooltip: {
            trigger: 'item'
        },
        legend: {
            top: '5%',
            left: 'center'
        },
        series: [
            {
                name: '访问来源',
                type: 'pie',
                radius: ['40%', '70%'],
                avoidLabelOverlap: false,
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
                labelLine: {
                    show: false
                },
                data: [
                    {value: 1048, name: '搜索引擎'},
                    {value: 735, name: '直接访问'},
                    {value: 580, name: '邮件营销'},
                    {value: 484, name: '联盟广告'},
                    {value: 300, name: '视频广告'}
                ]
            }
        ]
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
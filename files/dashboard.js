const toolBoxOptions = {
    show: true,
    orient: "vertical",
    left: "right",
    top: "center",
    feature: {
        mark: { show: false },
        dataView: { show: true, readOnly: false },
        magicType: { show: true, type: ["line", "bar"] },
        restore: { show: true },
        saveAsImage: { show: true },
    },
};

const xAxisOptions = {
    type: "category",
    data: ["Einheit 1", "Einheit 2", "Einheit 3", "Einheit 4", "Einheit 5"],
};

const yAxisOptions = {
    type: "value",
};

const barOptions = {
    type: "bar",
    barGap: 0.1,
};

function createLEBarChart(highlightIndex) {
    let chartDom = document.getElementById("canvas-eng");
    let myChart = echarts.init(chartDom);
    let option;

    let constructs = [
        "Aufmerksamkeit",
        "Anstrengungsbereitschaft",
        "Interesse am Lerngegenstand",
    ];
    let series = [];
    for (let i = 0; i < constructs.length; i++) {
        let data = getRandomNumbers(NUM_ASSIGNMENTS, 1, 10);

        data = highlightOnlyOne(data, highlightIndex, colors[i]);

        series.push({
            name: constructs[i],
            data,
            ...barOptions,
        });
    }

    option = {
        color: colors,
        tooltip: {
            show: true,
            trigger: "axis",
            axisPointer: {
                type: "shadow",
            },
        },
        legend: {
            bottom: 10,
            orient: "horizontal",
            data: [
                "Aufmerksamkeit",
                "Anstrengungsbereitschaft",
                "Interesse am Lerngegenstand",
            ],
        },
        xAxis: [xAxisOptions],
        yAxis: [yAxisOptions],
        series,
    };

    option && myChart.setOption(option);
}

function createSRLBarChart(highlightIndex) {
    console.log("Creating an SRL Bar Chart");

    let chartDom = document.getElementById("canvas-srl");
    let myChart = echarts.init(chartDom);
    let option;

    let constructs = ["Elaboration", "Regulation", "Monitoring", "Planung"];
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
            bottom: 10,
            orient: "horizontal",
            data: constructs,
        },
        tooltip: {
            triger: "item",
            show: true,
        },
        xAxis: [xAxisOptions],
        yAxis: [yAxisOptions],
        series,
    };

    option && myChart.setOption(option);
}

function createMDCBarChart(highlightIndex) {
    let chartDom = document.getElementById("canvas-bar-mdc");
    let myChart = echarts.init(chartDom);
    let option;

    let min = 0;
    let max = 100;

    let constructs = [
        "Wissensintegration",
        "Nutzung von Quellen",
        "Mindestlesezeit erreicht",
    ];
    let series = [];
    let tooltips = [
        "So gut ist es Ihnen gelungen, Inhalte zu vergleichen und zu integrieren",
        "So gut ist es Ihnen gelungen, Quelleninformationen zu nutzen",
        "Anteil der Texte bei denen die Mindestlesezeit erreicht wurde",
    ];
    for (let i = 0; i < constructs.length; i++) {
        let data = getRandomNumbers(highlightIndex + 1, min, max);

        data = highlightOnlyOne(data, highlightIndex, colors[i]);

        series.push({
            name: constructs[i],
            data,
            ...barOptions,
            tooltip: {
                formatter: tooltips[i],
            },
        });
    }

    option = {
        // title: {
        // //   text: "Akademisches Lesen",
        // },
        color: colors,
        legend: {
            bottom: 10,
            orient: "horizontal",
            data: constructs,
        },
        tooltip: {
            show: true,
            // trigger: "item",
            // formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        xAxis: [xAxisOptions],
        yAxis: [yAxisOptions],
        series,
    };

    option && myChart.setOption(option);
}

function createMDCDoughnutChart(canvasId, title) {
    let chartDom = document.getElementById(canvasId);
    let myChart = echarts.init(chartDom);

    let numCharts = 1;
    let percentage = 100.0 / numCharts;
    let data = [];
    let series = [];
    let titles = [];

    let values = getRandomNumbers(1, 30, 120);
    for (let i = 0; i < numCharts; i++) {
        data.push([
            { value: values[i], name: "" },
            { value: 100 - values[i], name: "" },
        ]);

        let title = `${values[i]}:00`;
        let fontSize = 12;
        let subtextColor = "#000000"; 
        let radius = ["50%", "80%"];
        let top = "30%";
        
        if (values[i] >= 100) {
            title = "✓";
            fontSize = 22;
            radius= ["0%", "80%"];
            subtextColor = "#ffffff";
            top = "25%";
        }

        let pieChartOptions = {
            type: "pie",
            radius,
            label: {
                show: true,
                position: "center",
            },
            emphasis: {
                label: {
                    show: true,
                    fontSize: "40",
                    fontWeight: "bold",
                },
            },
        };


        series.push({
            ...pieChartOptions,
            data: data[i],
            center: [`50%`, "50%"],
        });



        titles.push({
            subtext: title,
            left: `45%`,
            top,
            textAlign: "center",
            subtextStyle: {
                fontSize,
                fontWeight: "bold",
                color: subtextColor
            }
        });
    }

    console.log(percentage);
    console.log(series);

    let option = {
        color: ["#665191", "#dbdbdb"],
        title: titles,
        series: series,
    };

    option && myChart.setOption(option);
}

function redrawDashboard(highlightIndex) {
    createSRLBarChart(highlightIndex);
    // createRadarChart("radarSRL");
    // createBarChart("barChartLE");
    createLEBarChart(highlightIndex);
    createMDCBarChart(highlightIndex);

    //   createMDCDoughnutChart("mdc-text-doughnuts", "Lesezeiten");

    createMDCDoughnutChart("mdc-text-doughnut-1", "Lesezeiten");
    createMDCDoughnutChart("mdc-text-doughnut-2", "Lesezeiten");
    createMDCDoughnutChart("mdc-text-doughnut-3", "Lesezeiten");
    createMDCDoughnutChart("mdc-text-doughnut-4", "Lesezeiten");
    createMDCDoughnutChart("mdc-text-doughnut-5", "Lesezeiten");
}

function submitGoals() {
    console.log("Submitting Goals");

    let textarea = document.getElementById("textarea-goals");
    textarea.readOnly = !textarea.readOnly;

    let submitButton = document.getElementById("submit-goals");
    submitButton.innerHTML = textarea.readOnly ? "Bearbeiten" : "Speichern";

    let description = textarea.readOnly
        ? "Ihr Ziel für diesen Kurs ist:"
        : "Schreiben Sie hier, aus welchen Gründen Sie diesen Kurs besuchen";
    document.getElementById("description-goal-setting").innerHTML = description;
}

let NUM_ASSIGNMENTS = 4;
// redrawDashboard(0);

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
                { name: "Elaboration", min: 0, max: 10 },
                { name: "Regulation", min: 0, max: 10 },
                { name: "Planung", min: 0, max: 10 },
                { name: "Monitoring", min: 0, max: 10 },
            ]
        },
        series: [
            {
                name: "Selbstreguliertes Lernen",
                type: "radar",
                data: [
                    {
                        name: "Lerneinheit 1",
                        value: getRandomNumbers(5, 0, 10)
                    },
                    {
                        name: "Lerneinheit 2",
                        value: getRandomNumbers(5, 0, 10)
                    },
                    {
                        name: "Lerneinheit 3",
                        value: getRandomNumbers(5, 0, 10)
                    },
                    {
                        name: "Lerneinheit 4",
                        value: getRandomNumbers(5, 0, 10)
                    },
                    {
                        name: "Lerneinheit 5",
                        value: getRandomNumbers(5, 0, 10)
                    }
                ]
            }

        ]
    }

    options && chart.setOption(options);
}

function createLineChart(elementName) {
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
                { name: "Elaboration", min: 0, max: 10 },
                { name: "Regulation", min: 0, max: 10 },
                { name: "Planung", min: 0, max: 10 },
                { name: "Monitoring", min: 0, max: 10 },
            ]
        },
        series: [
            {
                name: "Selbstreguliertes Lernen",
                type: "radar",
                data: [
                    {
                        name: "Lerneinheit 1",
                        value: getRandomNumbers(5, 0, 10)
                    },
                    {
                        name: "Lerneinheit 2",
                        value: getRandomNumbers(5, 0, 10)
                    },
                    {
                        name: "Lerneinheit 3",
                        value: getRandomNumbers(5, 0, 10)
                    },
                    {
                        name: "Lerneinheit 4",
                        value: getRandomNumbers(5, 0, 10)
                    },
                    {
                        name: "Lerneinheit 5",
                        value: getRandomNumbers(5, 0, 10)
                    }
                ]
            }

        ]
    }

    options && chart.setOption(options);
}

// createRadarChart("radarSRL");
createLineChart("radarSrl");
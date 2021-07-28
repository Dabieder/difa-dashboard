function createRadarChart(elementName, title) {

    values = getRandomNumbers(5, 1, 10);

    let chart = echarts.init(document.getElementById(elementName));
    let options = {
        // title: {
        //     // text: title
        // },
        legend: {
            data: [title],
            left: "bottom"
        },
        radar: {
            indicator: [
                {name: "Einheit 1", max: 10, },
                {name: "Einheit 2", max: 10, },
                {name: "Einheit 3", max: 10, },
                {name: "Einheit 4", max: 10, },
                {name: "Einheit 5", max: 10, }
            ]
        },
        series: [{
            name: title,
            type: "radar",
            data: [
                {
                    value: values,
                    name: title
                }
            ]
        }]
    }
    chart.setOption(options);
}
createRadarChart("polarChartLE1", "Lernfreude");
createRadarChart("polarChartLE2", "Lerninteresse");
createRadarChart("polarChartLE3", "Lernzeit");


// let contextPolar1 = document.getElementById("polarChartLE1").getContext("2d");
// let contextPolar2 = document.getElementById("polarChartLE2").getContext("2d");
// let contextPolar3 = document.getElementById("polarChartLE3").getContext("2d");
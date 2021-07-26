
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

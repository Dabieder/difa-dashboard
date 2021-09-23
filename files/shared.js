
let colors = [
    "#003f5c",
    "#2f9bac",
    "#665191",
    "#a05195",
    "#d45087",
    "#f95d6a",
    "#ff7c43",
    "#ffa600",
];

let colorsDiverging = [
    "#6929c4",

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

function getGrayList(list) {
    let numbers = []
    for (let i = 0; i < list.length; i++) {
        if (i == index) {
            numbers.push(
                {
                    value: list[i],
                    itemStyle: {
                        color: '#aaaaaa'
                    }
                }
            )
        } else {
            numbers.push(list[i])
        }
    }
    return numbers;
}

function highlightOnlyOne(list, index, color) {

    let numbers = []
    for (let i = 0; i < list.length; i++) {
        if (i == index) {
            numbers.push(
                {
                    value: list[i],
                    itemStyle: {
                        color: color
                    }
                }
            )
        } else {
            numbers.push(
                {
                    value: list[i],
                    itemStyle: {
                        color: '#aaaaaa44'
                    }
                }
            )
        }
    }
    return numbers;
}
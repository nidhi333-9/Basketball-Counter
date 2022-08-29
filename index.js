let scorehNum = document.getElementById("scoreh-num");
let scoregNum = document.getElementById("scoreg-num");
let saveBtn = document.getElementById("save-btn");
let count = 0;
let countEl = 0;

function addOne() {
    count += 1;
    scorehNum.textContent = count;
}
function addTwo() {
    count += 2;
    scorehNum.textContent = count;
}
function addThree() {
    count += 3;
    scorehNum.textContent = count;
}

function addOneg() {
    countEl += 1;
    scoregNum.textContent = countEl;
}
function addTwog() {
    countEl += 2;
    scoregNum.textContent = countEl;
}
function addThreeg() {
    countEl += 3;
    scoregNum.textContent = countEl;
}

function save() {

    console.log(`The Home Score is ${count} & the Guest Score is ${countEl}`)
}




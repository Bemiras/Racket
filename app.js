document.getElementById('okButton').addEventListener('click', checkPassword);
document.addEventListener('click',checkControls);

const inputs = document.querySelectorAll('input[type="checkbox"], input[type="range"], input[value="Launch"]');
for (let i of inputs) {
    i.disabled = true;
}

function checkPassword () {
    if (document.getElementById('password').value === '1') {
        for (let i of inputs) {
            i.disabled = false;
        }
        document.getElementById('password').disabled = true;
        document.getElementById('okButton').disabled = true;
        document.getElementById('launchButton').disabled = true;
    }
}
function checkControls(){
    let startCheckbox = checkCheckbox();
    let startRange = checkRange();
    let startRacket = startCheckbox * startRange;

    if(startRacket === 1){
        document.getElementById('launchButton').disabled = false;
    } else {
        document.getElementById('launchButton').disabled = true;
    }

}

function checkCheckbox(startRacketCheckbox){
    const inputsCheckbox = document.querySelectorAll('input[type="checkbox"]');
    let start = 0;

    for (let i of inputsCheckbox) {
        if(i.checked){
            start++;
        } else start = 0;
    }

    if(start === 6){
        return startRacketCheckbox = 1;
    } else {
        return startRacketCheckbox = 0;
    }
}

function checkRange(startRacketRange){
    const inputsRange = document.querySelectorAll('input[type="range"]');
    let start = 0;

    for (let i of inputsRange) {
        if(i.value == 100){
            start++;
        } else start = 0;
    }

    if(start === 5){
        return startRacketRange = 1;
    } else {
        return startRacketRange = 0;
    }
}

function runRacket(){
    document.getElementById("racket").style.animation = "mymove 10s infinite";
    document.getElementById("racket").style.animationIterationCount = 1;
}
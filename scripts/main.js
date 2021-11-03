console.log("Loading");


/* elements */
let flipButton = document.querySelector("#flip-button");
let clearButton = document.querySelector("#clear-button");
let pennyImage = document.querySelector('#penny-image');
let headsCounterCell = document.getElementById("heads-counter");
let tailsCounterCell = document.getElementById("tails-counter");
let headsPercentageCell = document.getElementById("heads-percentage");
let tailsPercentageCell = document.getElementById("tails=percentage");
let statusBanner = document.getElementById("status-banner");

/* variables */
let headsCounter = parseInt(localStorage.getItem("headsCounter"));
let tailsCounter = parseInt(localStorage.getItem("tailsCounter"));

/* constants */
const initNumberValue = 0;
const initPercentageValue = "0 %";

/* init */
headsCounterCell.textContent = headsCounter;
console.log('headsCounter: '+headsCounter);
console.log('headsCounter Type: '+ typeof headsCounter);
tailsCounterCell.textContent = tailsCounter;
console.log('tailsCounter: '+tailsCounter);
console.log('tailsCounter Type: '+ typeof tailsCounter);
setPercentage();

/* event listeners */

flipButton.addEventListener('click',function() {
    var flip = Math.floor(Math.random() * 2);        
    if(flip === 0)
    {
        pennyImage.setAttribute('src',"./images/penny-heads.jpg");
        headsCounter++;        
        console.log('headsCounter Type: '+ typeof headsCounter);
        headsCounterCell.textContent = headsCounter;
        statusBanner.textContent = "Flip Heads!";
        localStorage.setItem("headsCounter",headsCounter);
    }
    else
    {
        pennyImage.setAttribute('src',"./images/penny-tails.jpg");
        tailsCounter++;
        console.log('tailsCounter Type: '+ typeof tailsCounter);
        tailsCounterCell.textContent = tailsCounter;
        statusBanner.textContent = "Flip Tails!";
        localStorage.setItem("tailsCounter",tailsCounter);
    }
    setPercentage();
});

clearButton.addEventListener('click',function() {
    headsCounterCell.textContent = initNumberValue;
    headsCounter = initNumberValue;
    localStorage.setItem("headsCounter",initNumberValue);
    headsPercentageCell.textContent = initPercentageValue;
    tailsCounterCell.textContent = initNumberValue;
    tailsCounter = initNumberValue;
    localStorage.setItem("tailsCounter",initNumberValue);
    tailsPercentageCell.textContent = initPercentageValue;
});

function setPercentage()
{
    console.log(headsCounter);
    console.log(tailsCounter); 

    if(headsCounter === 0) {
        headsPercentageCell.textContent = initPercentageValue;
    }
    else{
        headsPercentageCell.textContent = Math.floor((headsCounter / (headsCounter + tailsCounter))*100) + "%";
    }

    if(tailsCounter === 0) {
        tailsPercentageCell.textContent = initPercentageValue;
    }
    else{
        tailsPercentageCell.textContent = Math.floor((tailsCounter / (headsCounter + tailsCounter))*100) + "%";
    }   
}
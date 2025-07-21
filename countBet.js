//Carries over the player list from page 1
const storedData = localStorage.getItem('playerNameList');
const rngPlayerList = JSON.parse(storedData);
const rngPlayerNameList = rngPlayerList.join(", ");

const betTitle = localStorage.getItem('betTitle');
document.getElementById('betTitle').textContent = betTitle; // Display bet title on the page


//Creates grid of names and input boxes
const names = rngPlayerList;

const nameRow = document.getElementById("name-row");
const inputRow = document.getElementById("guess-row");
const betRow = document.getElementById("bet-row");
let i=1;
names.forEach((name, index) => {
  const nameElem = document.createElement("div");
  nameElem.textContent = name;
  nameElem.className = "name-box";
  nameElem.id = `playerName${index}`;  // e.g., playerName1
  nameRow.appendChild(nameElem);

  const inputElem = document.createElement("input");
  inputElem.type = "text";
  inputElem.className = "input-box";
  inputElem.id = `playerGuess${index}`;  // e.g., playerGuess1
  inputRow.appendChild(inputElem);

  const betElem = document.createElement("input");
  betElem.type = "text";
  betElem.className = "bet-box";
  betElem.id = `playerbet${index}`;  // e.g., playerbet1
  betRow.appendChild(betElem);
  i++
});

let counter = 0;
countingBetButton.addEventListener('click', () => {
counter++;
document.getElementById('counter').innerHTML = "Counter: " + counter;
})

let newBet = 0;
let betAmount = 0;
let differenceList = [];
finishButton.addEventListener('click', () => {
    for (let i = 0; i < names.length; i++) {
        let guessInput = document.getElementById(`playerGuess${i}`).value;
        let difference = Math.abs(counter - guessInput);
        differenceList.push(difference);

    newBet = document.getElementById(`playerbet${i}`).value;
    betAmount += parseInt(newBet);
  }

const winnerNumber = Math.min(...differenceList);
const winnerPlayerNumber = differenceList.indexOf(winnerNumber);
const winnerPlayerName = rngPlayerList[winnerPlayerNumber];
document.getElementById('winnerName').innerHTML = winnerPlayerName;
document.getElementById('winnerNumber').innerHTML = winnerNumber;
document.getElementById('earnings').innerHTML = "$" + betAmount;

})
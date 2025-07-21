// Get references to HTML elements
const playerList = [];



// When Add Player button is pressed, adds name to playerList and updates the display
addPlayerButton.addEventListener('click', () => {
    const playerName = document.getElementById('playerName').value;
    localStorage.setItem('betTitle', document.getElementById('betTitle').value); // Save bet title to localStorage
    if (playerName) {
        playerList.push(playerName);
        document.getElementById('playerName').value = ''; // Clear the input field
        document.getElementById('playerNameList').innerHTML = playerList.join(", ");
        localStorage.setItem('playerNameList', JSON.stringify(playerList));
    }
}
)




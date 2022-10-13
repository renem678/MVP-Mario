let gameResults = document.getElementById("results");
let charResults = document.getElementById("characters");
let container = document.getElementById("gameVotes");
let container1 = document.getElementById("charVotes");
let charBtn = document.getElementById("charBtn");
let gameBtn = document.getElementById("gameBtn");
let voteBtn = document.getElementById("voteBtn");
let vBtn = document.getElementById("vBtn");
let div1 = document.querySelector("div");

function loadGame() {
  gameResults.innerHTML = "";
  fetch("http://localhost:5002/api/game_list")
    .then((data) => data.json())
    .then((game_list) => {
      game_list.forEach((game_list) => {
        const newDiv = document.createElement("div");
        const imgG = document.createElement("img");
        imgG.src = game_list.url_info;
        const gameName = document.createElement("h3");
        gameName.textContent = game_list.game_name;
        gameResults.append(newDiv);
        newDiv.append(imgG);
        newDiv.append(gameName);
      });
    });
}

function loadChar() {
  charResults.innerHTML = "";
  fetch("http://localhost:5002/api/character_list")
    .then((data) => data.json())
    .then((character_list) => {
      character_list.forEach((character_list) => {
        const newDiv2 = document.createElement("div");
        const imgC = document.createElement("img");
        const charName = document.createElement("h3");
        charName.textContent = character_list.char_name;
        imgC.src = character_list.url_info1;
        charResults.append(newDiv2);
        newDiv2.append(imgC);
        newDiv2.append(charName);
      });
    });
}

function addVote1() {
  container.innerHTML = "";
  container.style.backgroundColor = "white";
  fetch("http://localhost:5002/api/game_list")
    .then((data) => data.json())
    .then((game_list) => {
      game_list.forEach((game_list) => {
        const resCont = document.createElement("h4");
        container.append(resCont);
      });
    });
}

gameBtn.addEventListener("click", () => {
  if (div1.style.display === "none") {
    div1.style.display = "block";
  } else {
    div1.style.display = "none";
  }
});

charBtn.addEventListener("click", loadChar);
gameBtn.addEventListener("click", loadGame);
voteBtn.addEventListener("click", addVote1);

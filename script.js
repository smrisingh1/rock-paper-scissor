var you;
var yourPoints = 0;
var opponent;
var opponentPoints = 0;

var tochoice = ["rock", "paper", "scissor"];

window.onload = function () {
  for (let i = 0; i < 3; i++) {
    // <img id="rock" src="rock.png">
    let choice = document.createElement("img");
    choice.id = tochoice[i];
    choice.src = tochoice[i] + ".png";
    choice.addEventListener("click", selectChoice);
    document.getElementById("choices").append(choice);
  }
};

function selectChoice() {
  you = this.id;
  document.getElementById("your-choice").src = you + ".png";

  //random for oppponent
  opponent = tochoice[Math.floor(Math.random() * 3)]; //0- .999999 * 3 = 0-2.99999
  document.getElementById("opponent-choice").src = opponent + ".png";

  //check for winner
  if (you == opponent) {
    yourPoints += 0;
    opponentPoints += 0;
  } else {
    if (you == "rock") {
      if (opponent == "scissor") {
        yourPoints += 1;
      } else if (opponent == "paper") {
        opponentPoints += 1;
      }
    } else if (you == "scissor") {
      if (opponent == "paper") {
        yourPoints += 1;
      } else if (opponent == "rock") {
        opponentPoints += 1;
      }
    } else if (you == "paper") {
      if (opponent == "rock") {
        yourPoints += 1;
      } else if (opponent == "scissor") {
        opponentPoints += 1;
      }
    }
  }

  document.getElementById("your-points").innerText = yourPoints;
  document.getElementById("opponent-points").innerText = opponentPoints;
}

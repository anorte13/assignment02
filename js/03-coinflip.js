let randomNum = Math.random(Math.random());
let choice = prompt("Please pick either heads or tails");
let coin;
if (randomNum > 0.5) {
  coin = "heads";
  if (choice === "heads") {
    alert(`The flip was ${coin} and you chose ${choice}...you win!`);
  } else if (choice === "tails") {
    alert(`The flip was ${coin} and you chose ${choice}...you lose!`);
  }
} else if (randomNum < 0.5) {
  coin = "tails";
  if (choice === "heads") {
    alert(`The flip was ${coin} and you chose ${choice}...you lose!`);
  } else if (choice === "tails") {
    alert(`The flip was ${coin} and you chose ${choice}...you win!`);
  }
}

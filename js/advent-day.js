const dayHeader = document.querySelector(".day"),
  path = window.location.pathname.split("/"),
  day = path[path.length - 2];

dayHeader.innerText = `Day ${day}`;
document.title = `Day ${day} | Taco's Advent of Code 2020`;

const buttons = document.getElementsByClassName("buttons")[0],
  solvers = [];

function runPart(event) {
  if (event.target.tagName === "BUTTON") {
    const targetId = event.target.id,
      regex = /[0-9]+$/,
      id = targetId.match(regex)[0] - 1,
      resultDiv = document.querySelector(".result");

    var input;

    if (document.querySelector("#use-sample").checked) {
      input = document.querySelector("#sample").innerText;
    } else {
      input = document.querySelector("#input").innerText;
    }
    const solver = solvers[id].solve(input);

    resultDiv.innerText = solver;
  }
}

buttons.addEventListener("click", runPart);

class Problem {
  constructor(callback) {
    this.answer = "";
    this.solve = callback;
  }
}

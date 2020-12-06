const dayHeader = document.querySelector(".day"),
  path = window.location.pathname.split("/"),
  day = path[path.length - 2];

  dayHeader.innerText = `Day ${day}`;

const buttons = document.getElementsByClassName("buttons")[0],
  solvers = [];

function runPart(event) {
  if (event.target.tagName === "BUTTON") {
    const targetId = event.target.id,
      regex = /[0-9]+$/,
      id = targetId.match(regex)[0] - 1,
      resultDiv = document.querySelector(".result");

    const solver = solvers[id].solve();

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

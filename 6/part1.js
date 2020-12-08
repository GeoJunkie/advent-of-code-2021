solvers.push(
  new Problem(() => {
    const input = document.querySelector("#input").innerText.split("\n\n");

    let sum = 0;

    for (i = 0; i < input.length; i++) {
      const group = input[i];
      let answers = {};

      for (j = 0; j < group.length; j++) {
          question = group[j];
        if (question !== "\n") {
          answers[question] = true;
        }
      }
      sum += Object.keys(answers).length;
    }
    return sum;
  })
);

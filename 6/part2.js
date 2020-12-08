solvers.push(
  new Problem(() => {
    const input = document.querySelector("#input").innerText.split("\n\n");

    let sum = 0;

    for (let i = 0; i < input.length; i++) {
      const group = input[i],
        people = group.split("\n");
      let answers = {};

      for (let j = 0; j < people.length; j++) {
        const person = people[j];
        for (let k = 0; k < person.length; k++) {
          const answer = person[k];
          if (answers[answer]) {
            answers[answer] += 1;
          } else {
            answers[answer] = 1;
          }
        }
      }
      const keys = Object.keys(answers);
      for (l = 0; l < keys.length; l++) {
        if (answers[keys[l]] === people.length) {
          sum++;
        }
      }
    }
    return sum;
  })
);

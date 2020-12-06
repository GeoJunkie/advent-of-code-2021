solvers.push(
  new Problem(() => {
    const input = document.querySelector("#input").innerText.split("\n");
    for (let i = 0; i < input.length; i++) {
      for (let j = i + 1; j < input.length; j++) {
          const x = Number(input[i]), y = Number(input[j]);
        if (x + y === 2020) {
          console.log(`${x} + ${y} = 2020`);
          console.log(`${x} * ${y} = ${x * y}`);
          return x * y;
        }
      }
    }
  })
);

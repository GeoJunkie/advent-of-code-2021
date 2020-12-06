solvers.push(
  new Problem(() => {
    const input = document.querySelector("#input").innerText.split("\n");
    const slopes = [
      [1, 1],
      [3, 1],
      [5, 1],
      [7, 1],
      [1, 2],
    ];

    let rideCounts = [];
    for (let ride = 0; ride < slopes.length; ride++) {
      let right = slopes[ride][0],
        down = slopes[ride][1];

      let trees = 0;

      for (let i = 0; i < input.length / down; i++) {
        const line = i * down,
          position = (i * right) % input[line].length;
        // console.log(ride, i, position, input, input[i][position]);
        if (input[line][position] === "#") {
          trees++;
        }
      }
      // console.log( trees );

      rideCounts.push(trees);
    }

    let result = 1;
    rideCounts.forEach((count) => (result *= count));
    return result;
  })
);

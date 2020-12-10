solvers.push(
  new Problem((rawInput) => {
    const input = rawInput.split("\n");

    
    // For this one, we'll update each command and run through.
    // When we get to the end, we've found the right one.
    for (i = 0; i < input.length; i++) {
        const [operation, argument] = input[i].split(" ");
        var testRun = [...input];
        if (operation === "jmp") {
            testRun[i] = `nop ${argument}`;
        } else if (operation === "nop") {
            if (Number(argument) === 0) {
                continue;
            } else {
                testRun[i] = `jmp ${argument}`;
            }
        } else {
            continue;
        }
        var processedLines = [],
          accumulator = 0;
        (executedData = {
          value: 0,
          move: 0,
        }),
          (nextLine = 0);
      do {
          processedLines.push(nextLine);
          nextCommand = testRun[nextLine];
          executedData = executeCommand(nextCommand);
          nextLine += executedData.move;
          accumulator += executedData.value;
      } while (
        (!processedLines.includes(nextLine)) && nextLine < testRun.length
      );

      if (nextLine === testRun.length) {
        return accumulator;
      }
    }
  })
);

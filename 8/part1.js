solvers.push(
  new Problem((rawInput) => {
    const input = rawInput.split("\n");

    var processedLines = [],
      accumulator = 0;
    (executedData = {
      value: 0,
      move: 0,
    }),
      (nextLine = 0);

    do {
      accumulator += executedData.value;
      processedLines.push(nextLine);
      nextCommand = input[nextLine];
      executedData = executeCommand(nextCommand);
      nextLine += executedData.move;
    } while (!processedLines.includes(nextLine));

    return accumulator;
  })
);

function executeCommand(command) {
  const [operation, argument] = command.split(" ");

  var value, move;

  switch (operation) {
    case "nop":
        value = 0;
        move = 1;
      break;
    case "acc":
        value = Number(argument);
        move = 1;
      break;
    case "jmp":
        value = 0;
        move = Number(argument);
      break;
    default:
      return "ERROR!";
      break;
  }
  return {
    value: value,
    move: move,
  };
}

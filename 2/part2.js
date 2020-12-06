solvers.push(
  new Problem(() => {
    const input = document.querySelector("#input").innerText.split("\n");
    var compliantPasswords = 0;

    // Read input
    for (line of input) {
      const [count, characterColon, password] = line.split(" "),
        [start, end] = count.split("-"),
        character = characterColon[0];

      // Count instances of the character

      const char1 = password[start - 1],
        char2 = password[end - 1];

      if (char1 !== char2 && (char1 === character || char2 === character)) {
        compliantPasswords++;
      }
    }

    // Display the total count
    return compliantPasswords;
  })
);

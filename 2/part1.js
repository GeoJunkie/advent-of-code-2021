solvers.push(new Problem( () => {
    const input = document.querySelector('#input').innerText.split('\n');
    var compliantPasswords = 0;
    // Read input
    for (line of input) {

        const [count, characterColon, password] = line.split(' '),
            [minCount, maxCount] = count.split('-'),
            character = characterColon[0];

        
      // Count instances of the character
      const regExp = new RegExp(character, "g");
      const matches = password.matchAll(regExp),
        matchCount = [...matches].length;
  
      if (matchCount >= minCount && matchCount <= maxCount) {
        compliantPasswords++;
      }
    }
  
    // Return the total count
    return compliantPasswords;
  }));
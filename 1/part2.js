solvers.push(new Problem( () => {
    const input = document.querySelector('#input').innerText.split('\n');
    
    numbers = input.map( value => Number(value));
    for (let i = 0; i < numbers.length; i++) {
      for (let j = i + 1; j < numbers.length; j++) {
        for (let k = j + 1; k < numbers.length; k++) {
          if (numbers[i] + numbers[j] + numbers[k] === 2020) {
            console.log(`${numbers[i]} + ${numbers[j]} + ${numbers[k]} = 2020`);
            console.log(
              `${numbers[i]} * ${numbers[j]} * ${numbers[k]} = ${
                numbers[i] * numbers[j] * numbers[k]
              }`
              );
              return numbers[i] * numbers[j] * numbers[k];
          }
        }
      }
    }
  
}));
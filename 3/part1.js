solvers.push(new Problem( () => {
    const input = document.querySelector('#input').innerText.split('\n');
    let trees = 0;

    for (let i = 0; i < input.length; i++) {
      const position = (i * 3) % input[i].length;
      if (input[i][position] === "#") {
        trees++;
      }
    }
  
    return trees;
  }));
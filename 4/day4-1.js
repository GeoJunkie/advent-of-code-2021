function day4part1(){
    const inputFile = '4/sample.txt';
        
    const input = readInput(inputFile);

    input.addEventListener('change', day4part1go());
}

function day4part1go() {
    console.log('go!');
}
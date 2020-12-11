
solvers.push(new Problem( (rawInput) => {
    const input = rawInput.split('\n');

    const PREAMBLE_LENGTH = input.length <= 20 ? 5 : 25;

    var stack = input.slice(0, PREAMBLE_LENGTH);

    for (let i = PREAMBLE_LENGTH; i < input.length; i++) {
        if (! isValidItem(Number(input[i]), stack)) {
            return input[i];
        } else {
            stack.shift();
            stack.push(input[i]);
        }
    }

    return("You should not be here!!");
}));

function isValidItem( number, stack ) {
    for (let i = 0; i < stack.length; i++ ) {
        for (let  j = 0; j < stack.length; j++ ) {
            if ( i !== j && Number(stack[i]) + Number(stack[j]) === number ) {
                return true;
            }
        }
    }
    return false;
}
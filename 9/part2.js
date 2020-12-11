
solvers.push(new Problem( (rawInput) => {
    const input = rawInput.split('\n');

    const PREAMBLE_LENGTH = input.length <= 20 ? 5 : 25;

    var stack = input.slice(0, PREAMBLE_LENGTH);

    for (let i = PREAMBLE_LENGTH; i < input.length; i++) {
        if (! isValidItem(Number(input[i]), stack)) {
            return findSum(input, i);
        } else {
            stack.shift();
            stack.push(input[i]);
        }
    }

    return("You should not be here!!");
}));

function findSum( stack, index) {
    let target = Number(stack[index]);
    for ( let i = 0; i < stack.length; i++ ) {
        let sum = Number(stack[i]),
        set = [ Number(stack[i]) ];
        
        for (let j = i+1; j <= stack.length && sum <= target; j++) {
            const element = Number(stack[j]);
            sum += element;
            set.push(element);
            if (sum === target) {
                set.sort((a, b) => a-b);
                return set.pop() + set.shift();
            }
        }
    }
    return ('INVALID');
}
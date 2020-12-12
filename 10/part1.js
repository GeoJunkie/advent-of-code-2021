solvers.push(new Problem( (rawInput) => {
    const input = rawInput.split('\n'),
        ratings = input.map(x => Number(x)).sort((a,b)=>a-b);
    const differences = {
        1: 0,
        2: 0,
        3: 1 // The adapter will always add a rating of 3
    };

    let lastRating = 0; // Start with the adapter
    for (const rating of ratings) {
        const difference = rating - lastRating;
        differences[difference] += 1;
        lastRating = rating;
    }
    return( differences[1] * differences[3]);
}));
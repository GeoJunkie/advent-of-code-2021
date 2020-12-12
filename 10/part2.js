solvers.push(new Problem( (rawInput) => {
    const input = rawInput.split('\n'),
    ratings = input.map(x => Number(x)).sort((a,b)=>a-b);

    // Add outlet and device
    ratings.unshift(0);
    ratings.push(Math.max(...ratings) + 3);
    let combinations = 0;
    return countChains( ratings );

}));
    // Find all permutations where there is a difference of 3 or less between all adapters

    /** DP Information 
     * 
     * State: All items on the chain meet: i[n] - i[n-1] <= 3
     * 
     * List must be sorted
     * 
     * Track: Number of chains of length S where State is true
     * 
    */
    
    /** 
     * Counts the number of possible chains where the following is true for each item:
     * ratings[0] = true
     * ratings[n] - ratings[n-1] <= 3
     * 
     * This function uses memoization
     * 
     * @param {integer array} list       The numbers to check (sorted)
     * @param {integer} index               The index of the current rating in the chain
     * @param {integer array} chainCounts   Array of counts found so far for each element 
    */
    function countChains( list, index = 0, chainCounts = [] ) {
        if (chainCounts[index] !== undefined ) {
            return chainCounts[index];
        } else if ( list.length === 1 ) {
            // We've reached the end. Yay!
            chainCounts[index] = 1;
            return 1;
        } else if ( list[1] - list[0] > 3 ) {
            chainCounts[index] = 0;
            return 0;
        } else {
            let paths = 0;
            for (let i = 1; list[i] - list[0] <= 3; i++) {
                paths += countChains( list.slice(i) ); 
            }
            chainCounts[index] = paths;
            return paths;
        }
    }

    function countChainsRecursion( list ) {
        if ( list.length === 1 ) {
            // We've reached the end. Yay!
            return 1;
        } else if ( list[1] - list[0] > 3 ) {
            // This path is no good
            return 0;
        } else {
            let paths = 0;
            for (let i = 1; list[i] - list[0] <= 3; i++) {
                paths += countChains( list.slice(i) ); 
            }
            return paths;
        }
    }
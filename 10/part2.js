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
     * This function uses the bottom-up approach
     * 
     * Inspiration: https://www.geeksforgeeks.org/count-possible-paths-source-destination-exactly-k-edges/
     * 
     * "The idea is to build a 3D table where first dimension is source, second dimension is destination, third dimension is number of edges from source to destination, and the value is count of walks."
     * 
     * 
     * Logic:
     * 
     * You can determine total paths by summing the paths of each incoming link
     * 
     * Graphic Example: https://d.pr/i/VK6yPV
     * 
     * For each number
     *  Find possible incoming paths (every number where this - previous <= 3)
     *  Sum each previous path count
     * 
     * Assumptions:
     * 
     * The list is sorted
     * There is a possible chain all the way through (skipping error checking for the puzzle)
     * 
     * @param {integer array} list       The numbers to check (sorted)
    */
    function countChains( list ) {
        const chains = [1];

        for (let index = 1; index < list.length; index++) {
            // Step backwards to find all incoming paths that meet the criteria
            let lookBack = index - 1,
                sum = 0;
            while ( list[index] - list[lookBack] <= 3 ) {
                sum += chains[lookBack];
                lookBack--;
            }
            chains[index] = sum;
        }
        return chains[chains.length - 1];
    }


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
    function countChainsMemoization( list, index = 0, chainCounts = [] ) {
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
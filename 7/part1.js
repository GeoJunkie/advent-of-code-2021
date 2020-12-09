solvers.push(new Problem( () => {
    const input = document.querySelector('#input').innerText.split('\n');

    // Parse the rules
    const rules = {};
    for ( let rule of input ) {
        // Trim the trailing period
        rule = rule.slice(0, rule.length - 1);
        let [ container, contains ] = rule.split(' bags contain ');
        // Define the rules for each contained bag
        if ( contains === 'no other bags' ) {
            rules[container] = [];
        } else {
            rules[container] = [];
            let innerBags = contains.split(', ');
            for ( const bag of innerBags ) {
                bagColor = bag.replace(/[0-9] ([a-z ]+) bags?/, '$1');
                rules[container].push(bagColor);
            }
        }
    }

    console.log( rules );
    // For each color bag, check the colors it contains
    const bags = Object.keys(rules);

    let goldBagCount = 0;

    for ( const bag of bags ) {
        goldBagCount += searchBags( rules, bag, 'shiny gold');
    }

    return(goldBagCount);
}));

/**
 * 
 * @param {object} rules
 * @param {string} bagToSearch 
 * @param {string} color 
 * 
 * @returns {boolean} If the bagToSearch can hold at least one bag of color
 */
function searchBags( rules, bagToSearch, colortoFind ) {
    const thisBag = rules[bagToSearch];
    if ( thisBag.length === 0 ) {
        return false;
    }

    // true if one of them is shiny gold
    if ( thisBag.includes(colortoFind)) {
        return true;
    }

    // Recursively check the bags inside the bag
    for ( const bag of thisBag ) {
        if (searchBags( rules, bag, colortoFind)) {
            return true;
        }
    }
    return false;
}
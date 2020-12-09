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
                const [bagCount, bagColor] = bag.replace(/([0-9]) ([a-z ]+) bags?/, '$1|$2').split('|');
                const bagRule = {
                    'color': bagColor,
                    'count': Number(bagCount)
                }
                rules[container].push(bagRule);
            }
        }
    }

    return countBags(rules, 'shiny gold')
}));

/**
 * 
 * @param {object} rules
 * @param {string} colorToFind
 * 
 * @returns {integer} Count of the total bags inside this bag
 */
function countBags( rules, colorToFind ) {
    const thisBag = rules[colorToFind];
    if ( thisBag.length === 0 ) {
        return 0;
    }

    let bagCount = 0;
    // Add number of bags, and recursively check the bags inside the bag
    for ( const bag of thisBag ) {
        bagCount += bag.count + (bag.count * countBags(rules, bag.color));
    }
    return bagCount;
}
solvers.push(new Problem( () => {
    const input = document.querySelector('#input').innerText.split('\n');

    var maxSeatId = 0;

    for ( let i = 0; i < input.length; i++ ) {
        let rows = Array.from(Array(128).keys()),
        columns = Array.from(Array(8).keys()),
        seat = input[i];

        for ( let j = 0; j < seat.length; j++ ) {
            indicator = seat[j];
            if ( indicator === 'F' || indicator === 'B' ) {
                rows = checkSeat( indicator, rows );
            } else {
                columns = checkSeat( indicator, columns );
            }
        }

        seatId = rows[0] * 8 + columns[0];

        console.log(`${seat}: Row ${rows[0]}, Column ${columns[0]}, seat ID ${seatId}`);

        if ( seatId > maxSeatId ) {
            maxSeatId = seatId;
        }
    }
    return(maxSeatId);
}));

function checkSeat( indicator, range ) {
    if ( indicator === 'F' || indicator === 'L' ) {
        return range.slice(0, range.length / 2);
    } else if ( indicator === 'B' || indicator === 'R' ) {
        return range.slice(range.length / 2);
    } else {
        // If we're here, it's bad
        return false;
    }
}
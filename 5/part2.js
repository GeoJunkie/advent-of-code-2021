solvers.push(
  new Problem(() => {
    const input = document.querySelector("#input").innerText.split("\n");

    var seats = [];

    for (let i = 0; i < input.length; i++) {
      let rows = Array.from(Array(128).keys()),
        columns = Array.from(Array(8).keys()),
        seat = input[i];

      for (let j = 0; j < seat.length; j++) {
        indicator = seat[j];
        if (indicator === "F" || indicator === "B") {
          rows = checkSeat(indicator, rows);
        } else {
          columns = checkSeat(indicator, columns);
        }
      }

      seatId = rows[0] * 8 + columns[0];

      console.log(
        `${seat}: Row ${rows[0]}, Column ${columns[0]}, seat ID ${seatId}`
      );

      seats.push(seatId);
    }

    seats.sort( ( a, b ) => a - b );

    for (let i = 1; i < seats.length; i++) {
      let seat = seats[i];
      if (seats[i - 1] !== seat - 1 || seats[i + 1] !== seat + 1) {
        return seat;
      }
    }
  })
);

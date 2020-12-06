solvers.push(
  new Problem(() => {
    const input = document.querySelector("#input").innerText.split("\n\n");
    let regex = RegExp("[ \n]", "g");

    var validPassports = 0;

    for (i = 0; i < input.length; i++) {
      const passportData = input[i].split(regex);

      let passport = {};

      for (j = 0; j < passportData.length; j++) {
        const [key, value] = passportData[j].split(":");
        passport[key] = value;
      }
      console.log(passport);
      if (
        passport.byr &&
        passport.iyr &&
        passport.eyr &&
        passport.hgt &&
        passport.hcl &&
        passport.ecl &&
        passport.pid
      ) {
        validPassports++;
        console.log("GOOD");
      }
    }

    return validPassports;
  })
);

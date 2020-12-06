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

        var validation;
        switch (key) {
          case "byr":
            passport[key] = validateRange(value, 1920, 2002);
            break;
          case "iyr":
            passport[key] = validateRange(value, 2010, 2020);
            break;
          case "eyr":
            passport[key] = validateRange(value, 2020, 2030);
            break;
          case "hgt":
            let height = value.slice(0, value.length - 2),
              scale = value.slice(value.length - 2);
            if (scale === "cm") {
              passport[key] = validateRange(height, 150, 193);
            } else if (scale === "in") {
              passport[key] = validateRange(height, 59, 76);
            } else {
              passport[key] = false;
            }
            break;
          case "hcl":
            validation = "^#[0-9a-f]{6}$";
            passport[key] = validateString(value, validation);
            break;
          case "ecl":
            let validEyeColors = [
              "amb",
              "blu",
              "brn",
              "gry",
              "grn",
              "hzl",
              "oth",
            ];
            passport[key] = validEyeColors.includes(value);
            break;
          case "pid":
            validation = "^[0-9]{9}$";
            passport[key] = validateString(value, validation);
            break;
        }
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
function validateRange(number, min, max) {
  return number >= min && number <= max;
}

function validateString(string, regExpString) {
  const regExp = RegExp(regExpString);
  return string.search(regExp) > -1;
}

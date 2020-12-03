function runDay(event) {
  if (event.target.className === "completed") {
    const targetId = event.target.id,
        [day, part] = targetId.split("-"),
        functionName = `day${day}part${part}()`,
        theFunction = new Function(functionName);
    // Execute the function for this day/part
    theFunction.call();
  }
}

const daysList = document.querySelector("ul.daysList");

daysList.addEventListener("click", runDay);

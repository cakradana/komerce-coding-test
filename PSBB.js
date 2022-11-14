const firstInput = 5;
const secondInput = "1 2 4 3 3";

// const firstInput = 8;
// const secondInput = "2 3 4 4 2 1 3 1";

// const firstInput = 5;
// const secondInput = "1 2";

const maxPassengers = 4;

function minNumberOfBuses(numberOfFamilies, numberOfMembersEachFamily) {
  const arrMembers = numberOfMembersEachFamily.split(" ");
  let result = 0;

  if (numberOfFamilies != arrMembers.length) {
    return "Input must be equal with count of family";
  } else {
    const sumOfAllMembers = arrMembers.reduce(
      (previousValue, currentValue) =>
        parseInt(previousValue) + parseInt(currentValue),
      0
    );

    result = Math.ceil(sumOfAllMembers / maxPassengers);

    return `Minimum bus required is : ${result}`;
  }
}

console.log(minNumberOfBuses(firstInput, secondInput));

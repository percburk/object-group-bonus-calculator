const employees = [
  {
    name: "Atticus",
    employeeNumber: "2405",
    annualSalary: "47000",
    reviewRating: 3,
  },
  {
    name: "Jem",
    employeeNumber: "62347",
    annualSalary: "63500",
    reviewRating: 4,
  },
  {
    name: "Scout",
    employeeNumber: "6243",
    annualSalary: "74750",
    reviewRating: 5,
  },
  {
    name: "Robert",
    employeeNumber: "26835",
    annualSalary: "66000",
    reviewRating: 1,
  },
  {
    name: "Mayella",
    employeeNumber: "89068",
    annualSalary: "35000",
    reviewRating: 1,
  },
];

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// Take small steps! Don't write a for loop and two functions that do all of the calculations right away.
// This problem is massive! Break the problem down. Use the debugger.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.

$(document).ready(readyNow);

const bonuses = [];

function readyNow() {
  $("#calculateBonus").on("click", onClick);
}

function onClick() {
  bonusLoop(employees);
  displayBonus();
}

function bonusLoop(array) {
  for (i = 0; i < array.length; i++) {
    console.log(bonusCalculator(array[i]));
    bonuses.push(bonusCalculator(array[i]));
  }
  return bonuses;
}

function bonusCalculator(employee) {
  let employeeBonus = {};
  employeeBonus.name = employee.name;
  if (employee.reviewRating <= 2) {
    employeeBonus.bonusPercentage = 0;
  } else if (employee.reviewRating === 3) {
    employeeBonus.bonusPercentage = 0.04;
  } else if (employee.reviewRating === 4) {
    employeeBonus.bonusPercentage = 0.06;
  } else if (employee.reviewRating === 5) {
    employeeBonus.bonusPercentage = 0.1;
  }

  if (employee.employeeNumber.length === 4) {
    employeeBonus.bonusPercentage += 0.05;
  }

  if (employee.annualSalary > 65000) {
    employeeBonus.bonusPercentage -= 0.01;
  }

  if (employeeBonus.bonusPercentage > 0.13) {
    employeeBonus.bonusPercentage = 0.13;
  } else if (employeeBonus.bonusPercentage < 0) {
    employeeBonus.bonusPercentage = 0;
  }

  employeeBonus.totalBonus = Math.round(
    employeeBonus.bonusPercentage * employee.annualSalary
  );
  employeeBonus.totalCompensation =
    employeeBonus.totalBonus + Number(employee.annualSalary);

  return employeeBonus;
}

function displayBonus() {
  let el = $("#bonusList");
  el.empty();
  for (object of bonuses) {
    el.append(
      `<p class="p">Employee Name: ${object.name}</p>
      <ul class="ul">
        <li class="li">Bonus Percentage: ${object.bonusPercentage * 100}%</li>
        <li class="li">Total Bonus: $${object.totalBonus}</li>
        <li class="li">Total Compensation: $${object.totalCompensation}</li>
      </ul>`
    );
  }
}

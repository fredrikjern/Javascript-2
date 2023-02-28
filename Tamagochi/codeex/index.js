class Employee {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  changeName() {
    let firstNameInput = document.querySelector("#firstName").value;
    let lastNameInput = document.querySelector("#lastName").value;
    this.firstName = firstNameInput;
    this.lastName = lastNameInput;
    renderEmployees();
  }
}

class Admin extends Employee {
  deleteDB() {
    employeeList = [];
    renderEmployees();
  }
}

let employeeList = [];

let renderEmployees = () => {
  let ul = document.querySelector("#employeeList");
  ul.innerHTML = "";

  employeeList.forEach((employee) => {
    let li = document.createElement("li");
    li.textContent = `${employee.firstName} ${employee.lastName}`;
    //change name-knapp
    let editBtn = document.createElement("button");
    editBtn.textContent = "Ändra namn";
    editBtn.addEventListener("click", function () {
      employee.changeName();
    });
    li.append(editBtn);

    //deleteAll-knapp OM employee är av klassen Admin
    if (employee.constructor.name === "Admin") {
      let deleteBtn = document.createElement("button");
      deleteBtn.textContent = "Delete Database";
      deleteBtn.addEventListener("click", function () {
        employee.deleteDB();
      });
      li.append(deleteBtn);
    }

    ul.append(li);
  });
};

let addEmployee = () => {
  //skapa en instans av Employee/Admin utifrån input-fält
  let firstName = document.querySelector("#firstName").value;
  let lastName = document.querySelector("#lastName").value;

  let admin = document.querySelector("#admin").checked;

  let newEmployee;
  if (!admin) {
    newEmployee = new Employee(firstName, lastName);
  } else {
    newEmployee = new Admin(firstName, lastName);
  }

  //Lägg till i array över anställda
  employeeList.push(newEmployee);

  //Visa ut samtliga anställda i DOM:en
  renderEmployees();
};

let addBtn = document.querySelector("#add");
addBtn.addEventListener("click", addEmployee);

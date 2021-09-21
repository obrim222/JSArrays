let userList = [
  {
    firstname: "John",
    lastname: "O",
    age: 20,
  },
  {
    firstname: "Johno",
    lastname: "Ob",
    age: 50,
  },
];

var firstname = [];
var lastnames = [];
var ages = [];

var firstNameInput = document.getElementById("fn-box");
var LastNameInput = document.getElementById("ln-box");
var AgeInput = document.getElementById("age-box");

var messageBox = document.getElementById("display");

const getUserlist = function () {
  for (let i = 0; i < userList.length; i++) {
    console.log(userList[i]);
  }
};

function insert() {
  firstname.push(firstNameInput.value);
  lastnames.push(LastNameInput.value);
  ages.push(AgeInput.value);

  insert2();
}

function insert2() {
  userList.push({
    firstname: firstname[0],
    lastname: lastnames[0],
    age: ages[0],
  });
}

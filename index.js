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
  
  var firstName = document.getElementById('fn-box').value;
  var lastName = document.getElementById('ln-box').value;
  var age = document.getElementById('age-box').value;
  console.log("FirstName:", firstName, "LastName:", lastName, "Age:", age);
  //create User Object
  let person = {firstname: firstName, lastname: lastName, age: age};
  userList.push(person);
  console.log(userList);
  //insert2();
  alert("Welcome: " + firstName + " there are " + userList.length + " users connected !");
}

function insert2() {
  userList.push({
    firstname: firstname[0],
    lastname: lastnames[0],
    age: ages[0],
  });
}

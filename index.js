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
  for(let i =0; i < userList.length; i++) {
    document.getElementById("tableBody").insertAdjacentHTML("beforeend","<tr><td>"+userList[i].firstname+"</td><td>"+userList[i].lastname+"</td><td>"+userList[i].age+"</td></tr>");
  }
};

const getLastUser = function () {
  i = userList.length-1;
  document.getElementById("tableBody").insertAdjacentHTML("beforeend","<tr><td>"+userList[i].firstname+"</td><td>"+userList[i].lastname+"</td><td>"+userList[i].age+"</td></tr>");
};

const welcomeMessage = function () {
  let i = userList.length-1;
  document.getElementById("message").outerHTML ="<div id='message'><p> Welcome "+userList[i].firstname+" "+userList[i].lastname+" ,we are happy that you are here !! </p></div>";
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
  //getUserlist();
  getLastUser();
  welcomeMessage();
}

function insert2() {
  userList.push({
    firstname: firstname[0],
    lastname: lastnames[0],
    age: ages[0],
  });
}

import {getUsers, addUser} from "./script.js";

const profileBoard = document.getElementById("profile-board");
const name = document.getElementById("name");
const sex = document.getElementById("sex");
const age = document.getElementById("age");
<<<<<<< HEAD
const createBtn = document.getElementById("create-citizen-btn");
=======
const createBtn = document.getElementById("add-user-btn");
>>>>>>> 801d078 (Refactoring)

function displayProfiles() {
  let users = getUsers();
 // console.log(citizens);
 users.forEach(user => {
  let child = document.createElement("div");
  child.classList.add("profile");
  child.innerHTML = `<p>Name: ${user.name}</p>
  <p>Sex: ${user.sex}</p>
  <p>Age: ${user.age}</p>`;
  profileBoard.append(child);
}); 
}

window.addEventListener("DOMContentLoaded", displayProfiles);

createBtn.addEventListener("click", (e)=> {
  e.preventDefault();
  if(name.value && sex.value && age.value ) {
<<<<<<< HEAD
    addCitizen(name.value, sex.value, age.value);
    profileBoard.innerHTML = "";
  displayProfiles();
    name.value = "";
    sex.value = "";
    age.value = "";
=======
    addUser(name.value, sex.value, age.value);
    profileBoard.innerHTML = "";
  displayProfiles();
  name.value = "";
  age.value = "";
>>>>>>> 801d078 (Refactoring)
     } else {
       alert("Provide required values!");
     }
  });
  

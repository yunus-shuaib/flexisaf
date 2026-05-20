import {getCitizens, addCitizen} from "./script.js";

const profileBoard = document.getElementById("profile-board");
const name = document.getElementById("name");
const sex = document.getElementById("sex");
const age = document.getElementById("age");
const createBtn = document.getElementById("create-citizen-btn");

displayProfiles();

function displayProfiles() {
  let citizens = getCitizens();
 // console.log(citizens);
 citizens.forEach(citizen => {
  let child = document.createElement("div");
  child.classList.add("profile");
  child.innerHTML = `<p>Name: ${citizen.name}</p>
  <p>Sex: ${citizen.sex}</p>
  <p>Age: ${citizen.age}</p>`;
  profileBoard.append(child);
}); 
}

//window.addEventListener("DOMContentLoaded", displayProfiles);

createBtn.addEventListener("click", ()=> {
  if(name.value && sex.value && age.value ) {
    addCitizen(name.value, sex.value, age.value);
  displayProfiles();
     } else {
       alert("Provide required values!");
     }
  });
  
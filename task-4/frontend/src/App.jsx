import Profile from "./Profile";
import cancelBtn from "./assets/cancel.svg"
import {useState, useEffect, Fragment} from "react";

function App() {

const [users, setUsers] = useState([]);
const [showCreate, setShowCreate] = useState(false);
const [newUser, setNewUser] = useState();

const VITE_API_URL = import.meta.env.VITE_API_URL + "/users";

async function getUsers() {
  try{
   const response = await fetch(VITE_API_URL);
   const data = await response.json();
   setUsers(data);
  } catch(error) {
    console.error("Error fetching data!");
  }
};

useEffect(()=> {
  getUsers();
}, []);

async function handleSubmit(e) {
e.preventDefault();
try {
const newUser = {name: e.target.username.value, age: e.target.age.value, gender: e.target.gender.value};
const response = await fetch(VITE_API_URL, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(newUser),
});
if(response.ok) {
setNewUser(); 
getUsers();
setShowCreate(!showCreate);
e.target.reset();
}
} catch(error) {
 console.error("Error adding user!") 
}
}

async function handleDelete(id) {
  try {
    const response = await fetch(`${VITE_API_URL}/${id}`, {
      method: "DELETE",
    });
    if(response.ok) {
setUsers(prevUsers => prevUsers.filter(u => u.id !== id));
    }
  } catch(error) {
    console.error("Error deleting user!")
  }
}

  return <Fragment>
      <div className="container position-relative">
      <div className="row gx-0 position-relative">
            <h1 className="alert alert-primary my-3 text-center">Users</h1>
        <div className="col">
    {users.map((user) => {
      return <div className="col rounded-3 bg-primary p-4 mb-4 text-white" key={user.id}>
         <Profile name={user.name}             gender={user.gender} age={user.age}/>
         <button onClick={()=>handleDelete(user.id)} className="btn btn-danger">Delete</button>
              </div>
      })
      }
      </div>
      <button className="btn btn-primary" onClick={()=> setShowCreate(!showCreate)}>Add</button>
    </div>
        <div className={showCreate ? "showForm" : "hideForm"}>
    <form onSubmit={handleSubmit} className="row gx-0 bg-black p-3 text-emphasis rounded-3 w-75">
      <img src={cancelBtn} alt="cancel button" onClick={()=> setShowCreate(false)} style={{backgroundColor:"white",
        width:"1.5em",
        height:"1.5em",
        marginLeft: "auto",
      }}/>
        <label className="form-label">Name: </label>
        <input type="text" id="name" className="form-control" name="username" required placeholder="Enter name..."/>
        <label className="form-label">Age: </label>
        <input type="number" id="age" className="form-control" name="age" required placeholder="Enter age..."/>
         <label className="form-label">Gender: </label>
        <div className="row gx-0 d-flex">
        <select id="gender" name="gender"  className="form-select col">
      
            <option value="male">Male</option>
            <option value="female">Female</option>
        </select>
        <button type="submit" className="btn btn-success col">Create</button>
        </div>
    </form>
    </div>
    </div>
  </Fragment>
}

export default App

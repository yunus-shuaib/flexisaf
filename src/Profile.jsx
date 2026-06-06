import manImg from "./assets/man.png"
import womanImg from "./assets/woman.png"

{/*export default function Profile({name, gender, age}) {
    return (     
        <h1>Name: {name}</h1>
        <p>Gender: {gender}</p>
        <p>Age: {age}</p>
    )
}*/}

import { Component } from "react";

export default class Profile extends Component {
  render() {
    // Destructure props from this.props for cleaner code
    const { name, gender, age} = this.props;

    return <div className="ProfileConteiner">
      <div>
        <h2>Name: {name}</h2>
        <p>Gender: {gender}</p>
        <p>Age: {age}</p>
      </div>
      <img src={gender === "male" ? manImg : womanImg} alt="avatar"/>
    </div>
  }
}


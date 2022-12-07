import React, { useState } from "react";
import "./FormUser.css";
import axios from "axios";

const FormUser = (props) => {
  function closeW() {
    props.setW(false);
  }
  function createUser() {
    let name = document.getElementById("name").value;
    let lastName = document.getElementById("lastName").value;
    let phoneNumber = document.getElementById("phone").value;
    let email = document.getElementById("email").value;
    if (name == "" || lastName == "" || phoneNumber == "" || email == "") {
      console.log("DATA NULL");
    } else {
      const user = {
        firstName: name,
        lastName: lastName,
        phoneNumber: phoneNumber,
        email: email,
      };
      console.log(user);

      axios.post("http://localhost:9000/users", user);
    }
  }
  return (
    <div className="baseContainer">
      <div className="formDiv">
        <div className="miniContainer">
          <div className="contentDiv">
            <form>
              <h1 id="tittle">Create user</h1>
              <div>
                <input type="text" placeholder="Name" id="name" required />
                <br />
                <input
                  type="text"
                  placeholder="Last name"
                  id="lastName"
                  required
                />
                <br />
                <input
                  type="text"
                  placeholder="Phone number"
                  id="phone"
                  required
                />
                <br />
                <input type="text" placeholder="e-mail" id="email" required />
                <br />
                <input
                  className="button"
                  type="submit"
                  value="Create"
                  onClick={createUser}
                />
                <input className="button" type="reset" value="Reset" />
              </div>
              <div className="getUsers">
                <input type="button" value="Close" onClick={closeW}></input>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormUser;

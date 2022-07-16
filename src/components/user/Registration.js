import axios from 'axios';
import React, { useState } from 'react';

function Registration() {
  const [name, setname] = useState();
  const [username, setusername] = useState();
  const [email, setemail] = useState();
  const [password, setpassword] = useState();
  const [confirmpassword, setconfirmpassword] = useState();

  function PasswordConfimation() {
    if (password === confirmpassword) {
      return 'Matched';
    } else {
      return 'Not Matched';
    }
  }

  function RegisterEvent(e) {
    e.preventDefault();
    axios
      .post('http://localhost:4000/api/registration', {
        name: name,
        username: username,
        email: email,
        password: password,
      })
      .then((res) => {
        console.log('values added');
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div className="form-container">
      <form className="form-body">
        <input type="text" placeholder="Name" onChange={(e) => setname(e.target.value)} name="name" />
        <br></br>
        <input type="text" placeholder="Username" name="username" onChange={(e) => setusername(e.target.value)} />
        <br></br>
        <input type="email" placeholder="Email" name="email" onChange={(e) => setemail(e.target.value)} />
        <br></br>
        <input type="password" placeholder="Password" name="password" onChange={(e) => setpassword(e.target.value)} />
        <br></br>
        <span>{PasswordConfimation()}</span>
        <br></br>
        <input type="password" placeholder="Confirm Password" onChange={(e) => setconfirmpassword(e.target.value)} />
        <br></br>
        <button type="submit" onClick={RegisterEvent}>
          Register
        </button>
      </form>
    </div>
  );
}

export default Registration;

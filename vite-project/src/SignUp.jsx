import React, { useState } from "react";

function SignUp() {
  const [formInfo, setFormInfo] = useState({
    email: "",
    passWord: "",
    confirmPassWord: "",
    wantToJoin: true,
  });
 function handleInfo(event) {
    const {name, value, type, checked} = event.target
    setFormInfo(prevInfo => {
        return {
            ...prevInfo,
            [name] : type === "checkbox" ? checked : value

        }
    })
 }

  function handleSubmit(event) {
    event.preventDefault()
    if(formInfo.passWord=== formInfo.confirmPassWord) {
        console.log("Successfully signed up")
    } else {
        console.log("Passwords do not match")
    }
    
    if(formInfo.wantToJoin) {
        console.log("Thanks for signing up for our newsletter!")
    }
  }

  return (
    <div className="">
      <form className="" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email address"
          name="email"
          onChange={handleInfo}
          value={formInfo.email}
        />
        <input 
        type="password"
         placeholder="Password"
          className="form--input"
          name="passWord"
          onChange={handleInfo} 
          value={formInfo.passWord}
          />
        <input
          type="password"
          placeholder="Confirm password"
          name="confirmPassWord"
          onChange={handleInfo}
          value={formInfo.confirmPassWord}
          className=""
        />

        <div className="form--marketing">
          <input 
          id="okayToEmail"
           type="checkbox" 
           checked = {formInfo.wantToJoin}
           onChange={handleInfo}
           name="wantToJoin"
           
           />
          <label htmlFor="okayToEmail">I want to join the newsletter</label>
        </div>
        <button className="">Sign up</button>
      </form>
    </div>
  );
}

export default SignUp;

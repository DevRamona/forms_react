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
    <main className="bg-purple-800 p-8 flex justify-center">
      <div className="w-3/12 text-black bg-white p-3 border rounded-md ">
      <form className="" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email address"
          name="email"
          className="border border-black p-2 rounded-lg mb-3"
          onChange={handleInfo}
          value={formInfo.email}
        />
        <input 
        type="password"
         placeholder="Password"
          className="border border-black p-2 rounded-lg mb-3"
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
          className="border border-black p-2 rounded-lg mb-3"
        />

        <div className="form--marketing">
          <input 
          id="okayToEmail"
           type="checkbox" 
           checked = {formInfo.wantToJoin}
           onChange={handleInfo}
           name="wantToJoin"
           className=""
           
           />
          <label htmlFor="okayToEmail">I want to join the newsletter</label>
        </div>
        <button className="border px-6 mt-3 py-2 bg-purple-600 rounded-md">Sign up</button>
      </form>
    </div>
    </main>
    
    
  );
}

export default SignUp;

import React, {useState} from "react";






function Forms() {
    const[formData, setFormData] = useState({
        firstName : "",
         secondName : "",
         email : "", 
         comments : "",
        isFriendly : true,
        employment : ""
    })
   

    function handleChange(event) {
        const {name, value, type, checked} = event.target
        setFormData(prevData => {
            return {
                ...prevData,
                [name] : type === "checkbox" ? checked : value
            }
        })
     
    }
    function handleSubmit(event) {
        event.preventDefault()
        console.log(formData)
    }
  return (
    <form onSubmit={handleSubmit}>
        <input
        type="text"
        placeholder="First Name"
        onChange={handleChange}
        value = {formData.firstName}
        name="firstName"
        />

<input
        type="text"
        placeholder="Second Name"
        onChange={handleChange}
        value = {formData.secondName}
        name="secondName"
        />
        <input
        type="text"
        placeholder="email"
        onChange={handleChange}
        value = {formData.email}
        name="email"
        />
        <textarea
        onChange={handleChange}
        value={formData.comments}
        name="comments"
        />
        <input
        type="checkbox"
        id="isFriendly"
        checked = {formData.isFriendly}
        onChange= {handleChange}
        name="isFriendly"/>
        
        <label htmlFor="">Are you friendly ?</label> <br></br>
        <fieldset>
                <legend>Current employment status</legend>
                
                <input 
                    type="radio"
                    id="unemployed"
                    name = "employment"
                    value= "unemployed"
                    onChange= {handleChange}
                    checked = {formData.employment === "employment"}
                />
                <label htmlFor="unemployed">Unemployed</label>
                <br />
                
                <input 
                    type="radio"
                    id="part-time"
                    name = "employment"
                     value= "part-time"
                     onChange= {handleChange}
                     checked = {formData.employment === "part-time"}
                />
                <label htmlFor="part-time">Part-time</label>
                <br />
                
                <input 
                    type="radio"
                    id="full-time"
                     name = "employment"
                      value= "full-time"
                      onChange= {handleChange}
                      checked = {formData.employment === "full-time"}
                />
                <label htmlFor="full-time">Full-time</label>
                <br />
                
            </fieldset>
            <br />
            <br />
            <button>Submit</button>

    </form>
  )
}

export default Forms
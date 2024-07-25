import React, {useState} from "react";






function Forms() {
    const[formData, setFormData] = useState({firstName : "", secondName : "", email : "", comments : ""})
    console.log(formData)

    function handleChange(event) {
        setFormData(prevData => {
            return {
                ...prevData,
                [event.target.name] : event.target.value
            }
        })
     
    }
  return (
    <form>
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
    </form>
  )
}

export default Forms
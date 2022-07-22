import React, { Fragment,useRef } from 'react'
import {FaUserAlt} from "react-icons/fa";
import {AiTwotonePhone} from "react-icons/ai"
const Form = ({createUser}) => {
  const newNameInput = useRef("");
  const newPhoneInput = useRef("");
  const newGenderInput = useRef("");
  const handleSubmit=e=>{
    e.preventDefault();
    const enteredName = newNameInput.current.value;
    const enteredPhone = newPhoneInput.current.value;
    const enteredGender = newGenderInput.current.value;
    createUser(enteredGender,enteredName,enteredPhone);
    e.target.reset();


  }
    return (
    <Fragment>
      <div>
        <h1 className='text-center text-danger'>Register a Contact </h1>
          <form  className='d-flex flex-column align-items-center justify-content-center' onSubmit={handleSubmit}>
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1"><FaUserAlt/> </span>
          <input 
          type="text" 
          required 
          className="form-control"
           placeholder="Username" 
           ref={newNameInput}
           />
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1"><AiTwotonePhone/> </span>
          <input
           type="number" 
           required className="form-control" 
           placeholder="Phone" 
           ref={newPhoneInput}
           />
        </div>
        <div className="input-group mb-3">
        <select className="form-select"
         required aria-label="Default select example"
         ref={newGenderInput}
         >
          <option selected>Choose..</option>
          <option value="male">male</option>
          <option value="female">female</option>
          <option value={null}>rather not say</option>
        </select>
        </div>
        <div className="input-group mb-3">
        <button type="submit" class="btn btn-danger mb-3 w-100">Add the User</button>
        </div>
          </form>
      </div>

    </Fragment>
  )
}

export default Form
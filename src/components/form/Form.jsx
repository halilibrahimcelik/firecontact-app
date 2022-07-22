import React, { Fragment } from 'react'
import {FaUserAlt} from "react-icons/fa";
import {AiTwotonePhone} from "react-icons/ai"
const Form = () => {
  return (
    <Fragment>
      <div>
        <h1 className='text-center text-danger'>Register a Contact </h1>
          <form  className='d-flex flex-column align-items-center justify-content-center'>
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1"><FaUserAlt/> </span>
          <input type="text" className="form-control" placeholder="Username" />
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1"><AiTwotonePhone/> </span>
          <input type="text" className="form-control" placeholder="Phone" />
        </div>
        <div className="input-group mb-3">
        <select className="form-select" aria-label="Default select example">
          <option selected>Choose..</option>
          <option value="male">male</option>
          <option value="female">female</option>
          <option value={null}>rather not say</option>
        </select>
        </div>
        <div className="input-group mb-3 r">
        <button type="submit" class="btn btn-danger mb-3 w-100">Add the User</button>
        </div>
          </form>
      </div>

    </Fragment>
  )
}

export default Form
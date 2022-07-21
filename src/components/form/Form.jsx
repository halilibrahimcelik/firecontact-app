import React, { Fragment } from 'react'
import {FaUserAlt} from "react-icons/fa";
import {AiTwotonePhone} from "react-icons/ai"
const Form = () => {
  return (
    <Fragment>
        <form  className='col-4 d-flex flex-column align-items-center justify-content-center'>
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
<button type="submit" class="btn btn-primary mb-3">Add the User</button>
</div>

        </form>

    </Fragment>
  )
}

export default Form
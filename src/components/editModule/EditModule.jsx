import React, { Fragment, useRef } from "react";
import {toast} from "react-toastify"

const EditModule = (props) => {
   const { updateUser,identity,name,gender,phone}=props



  const newNameInput = useRef();
  const newPhoneInput = useRef();
  const newGenderInput = useRef();

  const handleSubmit = (e) => {
      e.preventDefault();

   
   
    const enteredName = newNameInput.current.value;
    const enteredPhone = newPhoneInput.current.value;
    const enteredGender = newGenderInput.current.value;
    console.log(enteredGender);
    console.log(enteredName);
    console.log(enteredPhone);
    e.target.reset();


 updateUser(identity, enteredGender, enteredName, enteredPhone);
 toast.success('Edited', {
    position: "top-left",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    });

  };


  return (
    <Fragment>
      <div className="modal" tabIndex="-1" id="edit-modal">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Edit Contact Info</h5>
            </div>
            <div className="modal-body">
              <form onSubmit={handleSubmit}>
                <label htmlFor="exampleInputEmail1" 
              
                className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  ref={newNameInput}
                  id="exampleInputEmail1"
              
                />
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Phone
                </label>
                <input
                  type="number"
                  className="form-control"
                  ref={newPhoneInput}
                  id="exampleInputEmail1"
                />
                <select
                  className="form-select"
                  aria-label="Default select example"
                  ref={newGenderInput}
                >
                  <option defaultValue>Open this select menu</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>

                <div className="modal-footer">
                  <button data-bs-dismiss="modal" className="btn btn-success">
                    Edited
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default EditModule;

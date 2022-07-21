import React, { Fragment } from 'react';
import {FaEdit} from "react-icons/fa";
import {MdDelete} from "react-icons/md"

const Table = () => {
  return (
    <Fragment>
        <table className="col-sm table table-striped ">
  <thead>
    <tr>
      <th scope="col">Username</th>
      <th scope="col">Phone Number</th>
      <th scope="col">Gender</th>
      <th scope="col">Delete</th>
      <th scope="col">Edit</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td> <MdDelete/> </td>
      <td> <FaEdit/> </td>
    </tr>
   
   
   
  </tbody>
</table>

    </Fragment>
  )
}

export default Table
import React, { Fragment, useState } from "react";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import EditModule from "../editModule/EditModule";
import { toast } from "react-toastify";
const Table = ({ users, updateUser, deleteUser }) => {
  const [identity, selectedId] = useState("");
  const handleDelete = (id) => {
    deleteUser(id);
    toast.success("You have succesfully deleted a contact!", {
      position: "top-right",
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
      <div className="col-sm">
        <h1 className="text-danger text-center">Contact List</h1>
        <table className="table table-striped ">
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
            {users
              .sort((a, b) => a.index - b.index)
              .map((user) => {
                const { id, name, gender, phone } = user;
                return (
                  <tr key={id}>
                    <th scope="row">{name} </th>
                    <td>{phone} </td>
                    <td>{gender} </td>
                    <td onClick={() => handleDelete(id)}>
                      {" "}
                      <MdDelete />{" "}
                    </td>
                    <td data-bs-toggle="modal" data-bs-target="#edit-modal">
                      <FaEdit onClick={() => selectedId(id)} />
                    </td>
                    <td>
                      <EditModule
                        users={users}
                        identity={identity}
                        updateUser={updateUser}
                      />
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </Fragment>
  );
};

export default Table;

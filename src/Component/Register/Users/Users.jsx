import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import Swal from "sweetalert2";
const Users = () => {
  const loadedUsers = useLoaderData();
  const [users, setUsers] = useState(loadedUsers);
  const handleUserDelete = (id) =>
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        // delete from DB
        fetch(`https://emporium-espresso-server.vercel.app/user/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
              // update state to remove deleted user
              setUsers(users.filter((user) => user._id !== id));
            }
          });
      }
    });

  return (
    <div>
      Total Users : {users.length}
      <div>
        <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Email</th>
                <th>Created Time</th>
                <th>Last Login Time</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {users.map((user,index) => (
                <tr key={user._id}>
                  <th>{index+1}</th>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.createdAt}</td>
                  <td>{user.lastSignInTime}</td>
                  <td>
                    <button className="flex items-center justify-center w-12 mb-2 h-12 rounded-lg bg-[#3C393B] text-white hover:bg-[#c0a070]">
                      <MdEdit className="text-2xl" />
                    </button>
                    <button
                      onClick={() => handleUserDelete(user._id)}
                      className="flex items-center justify-center w-12 h-12 rounded-lg bg-[#EA4744] text-white hover:bg-[#c0a070]"
                    >
                      <MdDelete className="text-2xl" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Users;

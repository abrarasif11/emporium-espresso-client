import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";
const Users = () => {
  const loadedUsers = useLoaderData();
  const [users, setUsers] = useState(loadedUsers);
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
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {users.map((user) => (
                <tr key={user._id}>
                  <th>1</th>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.createdAt}</td>
                  <td>
                    <button className="flex items-center justify-center w-12 mb-2 h-12 rounded-lg bg-[#D2B48C] text-white hover:bg-[#c0a070]">
                      <MdEdit className="text-2xl" />
                    </button>
                    <button className="flex items-center justify-center w-12 h-12 rounded-lg bg-[#D2B48C] text-white hover:bg-[#c0a070]">
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

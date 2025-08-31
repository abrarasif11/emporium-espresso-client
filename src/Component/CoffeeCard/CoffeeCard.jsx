import React from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { FaEye } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
  const { name, photo, details, quantity, _id } = coffee;

  const handleDelete = (_id) => {
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
        fetch(`http://localhost:5000/coffee/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Coffee has been deleted.",
                icon: "success",
              });
              const remaining = coffees.filter((cof) => cof._id !== _id);
              setCoffees(remaining);
            }
          });
      }
    });
  };

  return (
    <div className="card card-side bg-base-100 m-10 shadow-xl">
      <figure>
        <img src={photo} alt="coffee" />
      </figure>
      <div className="pr-4  ml-5 justify-between flex w-full">
        <div>
          <h2 className="card-title">{name}</h2>
          <p className="font-semibold">Coffee Details : {details}</p>
          <p className="font-semibold">Quantity Available : {quantity}</p>
        </div>
        <div className="card-actions justify-end">
          <div className="join join-vertical space-y-4 ">
            <button className="flex items-center justify-center w-12 h-12 rounded-lg bg-[#D2B48C] text-white hover:bg-[#c0a070]">
              <FaEye className="text-2xl" />
            </button>
            <Link to={`updateCoffee/${_id}`}>
              <button className="flex items-center justify-center w-12 h-12 rounded-lg bg-[#D2B48C] text-white hover:bg-[#3C393B]">
              <MdEdit />
              </button>
            </Link>
            <button
              onClick={() => handleDelete(_id)}
              className="flex items-center justify-center w-12 h-12 rounded-lg bg-[#D2B48C] text-white hover:bg-[#EA4744]"
            >
              <MdDelete />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;

import React from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee }) => {
  const { name, photo, details, quantity, _id } = coffee;

  const handleDelete = (_id) => {
    console.log(_id);
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
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
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
      <div className="pr-4 justify-between flex w-full">
        <div>
          <h2 className="card-title">{name}</h2>
          <p>{details}</p>
          <p>{quantity}</p>
        </div>
        <div className="card-actions justify-end">
          <div className="join join-vertical space-y-4 ">
            <button className="btn join-item bg-[#D2B48C] text-white">
              Eye
            </button>
            <Link to={`updateCoffee/${_id}`}>
              <button className="btn join-item bg-[#3C393B] text-white">
                Edit
              </button>
            </Link>
            <button
              onClick={() => handleDelete(_id)}
              className="btn join-item bg-[#EA4744] text-white"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;

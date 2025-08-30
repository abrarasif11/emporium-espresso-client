import React from "react";
import Swal from 'sweetalert2'
const AddCoffee = () => {
  const handleAddCoffee = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const quantity = form.quantity.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;

    const newCoffee = {
      name,
      quantity,
      supplier,
      taste,
      category,
      details,
      photo,
    };
    console.log(newCoffee);
  // send data to server 

    fetch("http://localhost:5000/coffee", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if(data.insertedId){
          Swal.fire({
            title: 'Success!',
            text: 'Coffee Added Successfully',
            icon: 'success',
            confirmButtonText: 'Done'
          })
        }
      

      }
       
    );
  };
  return (
    <div className="bg-[#F4F3F0] p-24">
      <h2 className="text-3xl font-extrabold">Add New Coffee</h2>
      <form onSubmit={handleAddCoffee}>
        {/* row  */}
        <div className="md:flex gap-3">
          <div className="md:w-1/2">
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Coffee Name?</legend>
              <input
                type="text"
                name="name"
                className="input w-full"
                placeholder="Coffee Name"
              />
            </fieldset>
          </div>
          <div className="md:w-1/2">
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Available Quantity?</legend>
              <input
                type="text"
                name="quantity"
                className="input w-full"
                placeholder="Available Quantity"
              />
            </fieldset>
          </div>
        </div>
        {/* row  */}
        <div className="md:flex gap-3">
          <div className="md:w-1/2">
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Supplier Name?</legend>
              <input
                type="text"
                name="supplier"
                className="input w-full"
                placeholder="Coffee Supplier"
              />
            </fieldset>
          </div>
          <div className="md:w-1/2">
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Taste?</legend>
              <input
                type="text"
                name="taste"
                className="input w-full"
                placeholder="Coffee Taste"
              />
            </fieldset>
          </div>
        </div>
        {/* row  */}
        <div className="md:flex gap-3">
          <div className="md:w-1/2">
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Category?</legend>
              <input
                type="text"
                name="category"
                className="input w-full"
                placeholder="Coffee Category"
              />
            </fieldset>
          </div>
          <div className="md:w-1/2">
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Details?</legend>
              <input
                type="text"
                name="details"
                className="input w-full"
                placeholder="Coffee Details"
              />
            </fieldset>
          </div>
        </div>
        {/* photo url  */}
        <div className="">
          <div className="w-full">
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Photo URL?</legend>
              <input
                type="text"
                name="photo"
                className="input w-full"
                placeholder="Photo URL"
              />
            </fieldset>
          </div>
        </div>
        <input
          type="submit"
          className="btn btn-block bg-[#D2B48C] mt-5"
          value="Add Coffee"
        />
      </form>
    </div>
  );
};

export default AddCoffee;

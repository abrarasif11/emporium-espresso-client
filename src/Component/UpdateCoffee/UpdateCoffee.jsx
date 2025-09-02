import React from 'react'
import { useLoaderData } from 'react-router-dom'
import Swal from 'sweetalert2';

const UpdateCoffee = () => {
  const updateCoffees = useLoaderData();
  const { name, photo, details, quantity, _id , supplier, taste, category} = updateCoffees;
    const handleUpdateCoffee = (e) => {
      e.preventDefault();
      const form = e.target;
      const name = form.name.value;
      const quantity = form.quantity.value;
      const supplier = form.supplier.value;
      const taste = form.taste.value;
      const category = form.category.value;
      const details = form.details.value;
      const photo = form.photo.value;
  
      const updateCoffee = {
        name,
        quantity,
        supplier,
        taste,
        category,
        details,
        photo,
      };
      console.log(updateCoffee);
    // send data to server 
  
      fetch(`https://emporium-espresso-server.vercel.app/coffee/${_id}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(updateCoffee),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if(data.modifiedCount > 0){
            Swal.fire({
              title: 'Success!',
              text: 'Coffee Updated Successfully',
              icon: 'success',
              confirmButtonText: 'Done'
            })
          }
        
  
        }
         
      );
    };

  return (
    <div className="bg-[#F4F3F0] p-24">
      <h2 className="text-3xl font-extrabold">Update Coffee :{name}</h2>
      <form onSubmit={handleUpdateCoffee}>
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
                defaultValue={name}
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
                defaultValue={quantity}
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
                defaultValue={supplier}
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
                defaultValue={taste}
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
                defaultValue={category}
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
                defaultValue={details}
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
                defaultValue={photo}
              />
            </fieldset>
          </div>
        </div>
        <input
          type="submit"
          className="btn btn-block bg-[#D2B48C] mt-5"
          value="Update Coffee"
        />
      </form>
    </div>
  )
}

export default UpdateCoffee

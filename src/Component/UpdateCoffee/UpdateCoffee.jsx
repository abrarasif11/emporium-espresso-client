import React from 'react'
import { useLoaderData } from 'react-router-dom'

const UpdateCoffee = () => {
  const updateCoffees = useLoaderData()
  return (
    <div>
      <h1>Update Your Coffee : {updateCoffees.length}</h1>
    </div>
  )
}

export default UpdateCoffee

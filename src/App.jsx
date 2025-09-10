import { useLoaderData } from 'react-router-dom'
import './App.css'
import CoffeeCard from './Component/CoffeeCard/CoffeeCard'
import { useState } from 'react';

function App() {
  const loadedCoffees = useLoaderData();

  // Ensure it's always an array
  const [coffees, setCoffees] = useState(Array.isArray(loadedCoffees) ? loadedCoffees : []);

  return (
    <>
      <h1 className='mt-20 mb-20 text-center'>
        Emporium Espresso : {coffees.length}
      </h1>

      <div className='grid md:grid-cols-2 gap-4'>
        {Array.isArray(coffees) && coffees.length > 0 ? (
          coffees.map((coffee) => (
            <CoffeeCard
              key={coffee._id}
              coffees={coffees}
              setCoffees={setCoffees}
              coffee={coffee}
            />
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-2">
            No coffees available
          </p>
        )}
      </div>
    </>
  )
}

export default App

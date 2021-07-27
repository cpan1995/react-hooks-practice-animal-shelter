import React, { useEffect, useState } from "react";

import Filters from "./Filters";
import PetBrowser from "./PetBrowser";

function App() {
  const [pets, setPets] = useState([]);
  const [filters, setFilters] = useState({ type: "all" });

  useEffect(()=> {
    if(filters.type === 'all'){
      fetch('http://localhost:3001/pets')
      .then(response => response.json())
      .then(data => setPets(data))
    }
    else{
      fetch(`http://localhost:3001/pets/?type=${filters.type}`)
      .then(response => response.json())
      .then(data => setPets(data))
    }
  }, [filters])

  function onAdoptPet(id){
    let newObject = {}
    let newArray = pets.map(pet => {
      if (pet.id === id){
        pet.isAdopted = true
        newObject = pet
        return pet
      }
      else{
        return pet
      }
    })
    console.log(newObject)
    fetch(`http://localhost:3001/pets/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        isAdopted: newObject.isAdopted
      })
    })
    .then(setPets(newArray))
  }

  function onChangeType(filterChange){
    setFilters({type: filterChange})
  }
  return (
    <div className="ui container">
      <header>
        <h1 className="ui dividing header">React Animal Shelter</h1>
      </header>
      <div className="ui container">
        <div className="ui grid">
          <div className="four wide column">
            <Filters onChangeType={onChangeType}/>
          </div>
          <div className="twelve wide column">
            <PetBrowser pets = {pets} onAdoptPet = {onAdoptPet} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

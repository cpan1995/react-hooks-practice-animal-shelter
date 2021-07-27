import React from "react";

import Pet from "./Pet";

function PetBrowser({pets, onAdoptPet}) {
  let petsCards  = pets.map(eachPet => {
    return(<Pet key = {eachPet.id} isAdopted = {eachPet.isAdopted} id = {eachPet.id} name = {eachPet.name} weight = {eachPet.weight} type = {pets.type} gender = {pets.gender} onAdoptPet= {onAdoptPet}/>)
  })

  return <div className="ui cards">{petsCards}</div>;
}

export default PetBrowser;

import React from "react";

function Pet({id , name, weight, age, type, gender, onAdoptPet, isAdopted}) {
  function handleClick(){
    onAdoptPet(id)
  }

  return (
    <div className="card">
      <div className="content">
        <span className="header">
          {
            (gender === 'female') ? '♀' :'♂'
          }
          {name}
        </span>
        <div className="meta">
          <span className="date">{type}</span>
        </div>
        <div className="description">
          <p>Age: {age}</p>
          <p>Weight: {weight}</p>
        </div>
      </div>
      <div className="extra content">
        <button className={isAdopted ? "ui primary button" : "ui disabled button"}>Already adopted</button>
        <button onClick= {handleClick} className={!isAdopted ? "ui primary button" : "ui disabled button"}>Adopt pet</button>
      </div>
    </div>
  );
}

export default Pet;

import React, {useState} from "react";

function Filters({onChangeType}) {

  const [currentFilter, setFilter] = useState("All")

  function onChangeSelection(e){
    console.log(e.target.value)
    setFilter(e.target.value)
  }
  
  function onFindPetsClick(){
    onChangeType(currentFilter)
  }

  return (
    <div className="ui form">
      <h3>Animal type</h3>
      <div className="field">
        <select name="type" id="type" onChange = {onChangeSelection} value = {currentFilter}>
          <option value="all">All</option>
          <option value="cat">Cats</option>
          <option value="dog">Dogs</option>
          <option value="micropig">Micropigs</option>
        </select>
      </div>

      <div className="field">
        <button onClick = {onFindPetsClick} className="ui secondary button">Find pets</button>
      </div>
    </div>
  );
}

export default Filters;

import React from "react"
import SteakData from "../../src/data/DinnerSteak.json"
import EntreeData from "../../src/data/DinnerEntree.json"

//This is not the right way to do it, need to split
// into seperate Steak and Entree components
// as done in DinnerSteak.js and DinnerEntree.js

const MenuDinner = () => {
  return (
    <div>
      <h2>{SteakData.title}</h2>
      <ul>
        {SteakData.content.map((data, index) => (
          <li key={`content_item_${index}`}>
            {data.name}
            {data.desc}
            {data.price}
          </li>
        ))}
      </ul>
      <h2>{EntreeData.title}</h2>
      <ul>
        {EntreeData.content.map((data, index) => (
          <li key={`content_item_${index}`}>
            {data.name}
            {data.desc}
            {data.price}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default MenuDinner

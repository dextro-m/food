import React from "react"
import SteakData from "../../src/data/DinnerSteak.json"

const MenuDinner = () => {
  return (
    <div>
      <h1>{SteakData.title}</h1>
      <ul>
        {SteakData.content.map((data, index) => (
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

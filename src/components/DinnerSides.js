import React from "react"
import SidesData from "../data/DinnerSides.json"

const DinnerSides = () => {
  return (
    <div>
      <h2>{SidesData.title}</h2>
      <ul>
        {SidesData.content.map((data, index) => (
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

export default DinnerSides

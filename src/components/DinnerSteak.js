import React from "react"
import SteakData from "../data/DinnerSteak.json"

const DinnerSteak = () => {
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
    </div>
  )
}

export default DinnerSteak

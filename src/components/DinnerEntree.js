import React from "react"
import EntreeData from "../data/DinnerEntree.json"

const DinnerEntree = () => {
  return (
    <div>
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

export default DinnerEntree

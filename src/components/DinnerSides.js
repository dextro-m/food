import React from "react"
import SidesData from "../data/DinnerSides.json"
import MenuStyle from "../styles/MenuStyles"

const DinnerSides = () => {
  return (
    <MenuStyle>
      <h2>{SidesData.title}</h2>
      <ul>
        {SidesData.content.map((data, index) => (
          <li key={`content_item_${index}`}>
            <h3 className="name">
              {data.name}
              <h4 className="price">{data.price}</h4>
            </h3>
            <h5 className="desc"> {data.desc} </h5>
          </li>
        ))}
      </ul>
    </MenuStyle>
  )
}

export default DinnerSides

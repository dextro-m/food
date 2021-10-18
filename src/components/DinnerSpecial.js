import React from "react"
import SpecialData from "../data/DinnerSpecial.json"
import MenuStyle from "../styles/MenuStyles"

const DinnerSpecial = () => {
  return (
    <MenuStyle>
      <h2>{SpecialData.title}</h2>
      <ul>
        {SpecialData.content.map((data, index) => (
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

export default DinnerSpecial

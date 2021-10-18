import React from "react"
import StartData from "../data/DinnerStart.json"
import MenuStyle from "../styles/MenuStyles"

const DinnerStart = () => {
  return (
    <MenuStyle>
      <h2>{StartData.title}</h2>
      <ul>
        {StartData.content.map((data, index) => (
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

export default DinnerStart

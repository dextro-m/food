import React from "react"
import RedData from "../data/WineRed.json"
import MenuStyle from "../styles/MenuStyles"

const WineRed = () => {
  return (
    <MenuStyle>
      <h2>{RedData.title}</h2>
      <ul>
        {RedData.content.map((data, index) => (
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

export default WineRed

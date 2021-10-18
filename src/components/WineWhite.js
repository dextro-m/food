import React from "react"
import WhiteData from "../data/WineWhite.json"
import MenuStyle from "../styles/MenuStyles"

const WineWhite = () => {
  return (
    <MenuStyle>
      <h2>{WhiteData.title}</h2>
      <ul>
        {WhiteData.content.map((data, index) => (
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

export default WineWhite

import React from "react"
import MenuStyle from "../styles/MenuStyles"

function MenuItems({ MenuData }) {
  return (
    <MenuStyle>
      <h2>{MenuData.title}</h2>
      <ul>
        {MenuData.content.map((data, index) => (
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

export default MenuItems

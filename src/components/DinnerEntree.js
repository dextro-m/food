import React from "react"
import EntreeData from "../data/DinnerEntree.json"
import MenuStyle from "../styles/MenuStyles"

const DinnerEntree = () => {
  return (
    <MenuStyle>
      <h2>{EntreeData.title}</h2>
      <ul>
        {EntreeData.content.map((data, index) => (
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

export default DinnerEntree

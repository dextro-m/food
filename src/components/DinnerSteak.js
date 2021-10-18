import React from "react"
import SteakData from "../data/DinnerSteak.json"
import styled from "styled-components"
import MenuStyle from "../styles/MenuStyles"

const DinnerSteak = () => {
  return (
    <MenuStyle>
      <h2>{SteakData.title}</h2>
      <ul>
        {SteakData.content.map((data, index) => (
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

// Moved this into MenuItems.js function, since it is
// used by all the other menu items

// return (
//   <MenuStyle>
//     <h2>{SteakData.title}</h2>
//     <ul>
//       {SteakData.content.map((data, index) => (
//         <li key={`content_item_${index}`}>
//           <h3 className="name">
//             {data.name}
//             <h4 className="price">{data.price}</h4>
//           </h3>
//           <h5 className="desc"> {data.desc} </h5>
//         </li>
//       ))}
//     </ul>
//   </MenuStyle>
// )

// Moved this to MenuStyle.js style component
//
// const Wrapper = styled.div`
//   color: red;

//   h2 {
//     padding-left: 1.2rem;
//   }
//   ul {
//     list-style-type: none; // Remove bullets
//     li {
//       .name {
//         font-size: clamp(1rem, 2.2vw, 1.2rem);
//         color: orange;
//         .price {
//           font-size: clamp(0.8rem, 1.8vw, 1rem);
//           //display: inline-block; //keep on same row
//           float: right;
//           padding-right: 2rem;
//         }
//       }
//     }
//   }
// `

export default DinnerSteak

import styled from "styled-components"
import "@fontsource/roboto"

const MenuStyle = styled.div`
  color: red;
  min-width: 40vw;
  h2 {
    padding-left: 1.2rem;
  }
  ul {
    list-style-type: none; // Remove bullets
    li {
      .name {
        font-size: clamp(1rem, 2.2vw, 1.2rem);
        color: orange;
        .price {
          font-size: clamp(0.8rem, 1.8vw, 1rem);
          //display: inline-block; //keep on same row
          float: right;
          padding-right: 2rem;
        }
      }
      .desc {
        font-size: clamp(0.8rem, 1.8vw, 1rem);
        max-width: 30vw;
      }
    }
  }
`

export default MenuStyle

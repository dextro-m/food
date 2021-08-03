import styled from "styled-components"
import { Link } from "gatsby"

// Light Blue color #024a7b
// Dark  Blue color #273e5e

export const Button = styled(Link)`
  background: ${({ primary }) => (primary ? "#024a7b" : "#273e5e")};
  white-space: no-wrap;
  padding: ${({ big }) => (big ? "16px 40px" : "10px 32px")};
  color: #fff;
  font-size: ${({ big }) => (big ? "20px" : "16px")};
  outline: none;
  border: none;
  min-width: 100px;
  cursor: pointer;
  text-decoration: none;
  transition: 0.3s !important; //the other animations were over writting this @42:53 video
  border-radius: ${({ round }) => (round ? "50px" : "none")};

  &:hover {
    background: ${({ primary }) => (primary ? "#273e5e" : "#024a7b")};
    transform: translateY(-2px); //makes it move just a bit
  }
`

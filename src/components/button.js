import styled from "styled-components"

// Light Blue color #024a7b
// Dark  Blue color #273e5e

export const Button = styled.a`
  background: #024a7b;
  white-space: no-wrap;
  padding: 0.8em 1.5em;
  color: #fff;
  font-size: 1rem;
  outline: none;
  display: inline-block; //needed for the transform: translateY to work
  border: none;
  min-width: 100px;
  cursor: pointer;
  text-decoration: none;
  transition: 0.2s !important; //the other animations were over writting this @42:53 video
  border-radius: 50px;

  &:hover {
    background: #273e5e;
    transform: translateY(-2px); //makes it move just a bit
  }
`

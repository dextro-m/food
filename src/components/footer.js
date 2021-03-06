import React from "react"
import styled from "styled-components"

const Footer = () => {
  return (
    <FooterStyles>
      © 2021 - Megnel Technologies. All rights reserved.
    </FooterStyles>
  )
}

export default Footer

const FooterStyles = styled.footer`
  display: flex;
  height: 50px;
  align-items: center;
  margin: 0 auto;
  background: #2e2e2e;
  color: #fff;
  font-size: 0.7rem;
  justify-content: center;
  max-width: 1024px;
  //z-index: -1;
  //position: relative; //This makes the footer visible over the Hero Image
  //border: solid 2px blue;
`

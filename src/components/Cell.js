import React from "react"
import styled from "styled-components"
import assets from "../assets/assetImport"
const CellGroup = styled.div`
  display: grid;
  grid-template-columns: 60px auto;
  align-items: center;
  grid-gap: 25px;
`
const CellImage = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 10px;
  background-image: url(${assets.Circular_React});
  background-size: cover;
`
const CellTitle = styled.div`
  font-size: 20px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  padding: 30px 0;
`

const Cell = ({ image, title }) => {
  return (
    <CellGroup>
      <CellImage image={image}></CellImage>
      <CellTitle>{title}</CellTitle>
    </CellGroup>
  )
}

export default Cell

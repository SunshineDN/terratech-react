/* eslint-disable react/prop-types */
import { Container, FirstRectangleLeft, FirstRectangleRight, SecondRectangleLeft, SecondRectangleRight } from "./styles"
import { ReactComponent as LeafIcon } from "../../assets/Folhagem.svg"

const SectionOffset = ({ position }) => {
  return (
    position === "right" ? (
    <Container>
      <FirstRectangleRight />
      <SecondRectangleRight>
        <LeafIcon />
      </SecondRectangleRight>
    </Container>
    ) : (
    <Container>
      <FirstRectangleLeft />
      <SecondRectangleLeft>
        <LeafIcon />
      </SecondRectangleLeft>
    </Container>
  ))
}

export default SectionOffset
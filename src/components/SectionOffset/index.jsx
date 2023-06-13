import { Container, FirstRectangle, SecondRectangle } from "./styles"
import { ReactComponent as LeafIcon } from "../../assets/Folhagem.svg"

const SectionOffset = () => {
  return (
    <Container>
      <FirstRectangle />
      <SecondRectangle>
        <LeafIcon />
      </SecondRectangle>
    </Container>
  )
}

export default SectionOffset
import {
  AboutWrapper,
  AboutWrapperBody,
  AboutWrapperParogrof,
  AboutWrapperText,
  AboutWrapperTitle,
  Container,
  AboutWrapperImg, AboutWrapperImgSection
} from "./style";
import url from '../../../assets/img/about-person.svg'
function AboutHeader() {
  return (
      <Container className="container">
        <AboutWrapper>
          <AboutWrapperBody>
            <AboutWrapperTitle>
              2007-2021
            </AboutWrapperTitle>
            <AboutWrapperText>
              We share knowledge with the world
            </AboutWrapperText>
            <AboutWrapperParogrof>
              Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent fermentum quam mauris. Fusce tempor
              et augue a aliquet. Donec non ipsum non risus egestas tincidunt at vitae nulla.
            </AboutWrapperParogrof>
          </AboutWrapperBody>
          <AboutWrapperImgSection>
            <AboutWrapperImg src={url}/>
          </AboutWrapperImgSection>
        </AboutWrapper>
      </Container>
  );
}

export default AboutHeader;
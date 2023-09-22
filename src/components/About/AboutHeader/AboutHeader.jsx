import {
  AboutWrapper,
  AboutWrapperBody,
  AboutWrapperImg,
  AboutWrapperImgSection,
  AboutWrapperParogrof,
  AboutWrapperText,
  AboutWrapperTitle,
  Container
} from "./style";
import url from '../../../assets/img/about-person.svg'
import {NavLink} from "react-router-dom";

function AboutHeader() {
  return (
      <div>
        <div className="bredadcrumb-section">
          <div className="container">
            <div className="breadcrumb-menu">
              <h3>About</h3>
              <ul>
                <li><NavLink href="index.html">Home</NavLink></li>
                <li><NavLink href="#">/</NavLink></li>
                <li><NavLink href="about.html">About</NavLink></li>
              </ul>
            </div>
          </div>
        </div>
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
                Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent fermentum quam mauris. Fusce
                tempor
                et augue a aliquet. Donec non ipsum non risus egestas tincidunt at vitae nulla.
              </AboutWrapperParogrof>
            </AboutWrapperBody>
            <AboutWrapperImgSection>
              <AboutWrapperImg src={url}/>
            </AboutWrapperImgSection>
          </AboutWrapper>
        </Container>
      </div>
  );
}

export default AboutHeader;
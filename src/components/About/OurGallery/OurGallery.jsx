import {Container, Wrapper, WrapperButton, WrapperLeft, WrapperSubtitle, WrapperText, WrapperTitle,} from './style.js'
import {Col, Row} from "antd";
import arrowRightWhite from '../../../assets/icons/arrow-right-white.svg'
import arrowRight from '../../../assets/icons/arrow-right.svg'
function OurGallery() {
  return (
      <>
        <Wrapper>
          <Container className="container">
            <Row>
              <Col span={12}>
                <WrapperLeft>
                  <WrapperTitle>
                    OUR GALLERY
                  </WrapperTitle>
                  <WrapperText>
                    We’ve been here almost 17 years
                  </WrapperText>
                  <WrapperSubtitle>
                    Fusce lobortis leo augue, sit amet tristique nisi commodo in. Aliquam ac libero quis tellus
                    venenatis imperdiet. Sed sed nunc libero. Curabitur in urna ligula. torquent per conubia nostra.
                  </WrapperSubtitle>
                  <WrapperButton>
                    Join our team <img className="img-1" src={arrowRightWhite} alt="Arrow Right"/> <img className="img-2" src={arrowRight} alt="Arrow Right"/>
                  </WrapperButton>
                </WrapperLeft>
              </Col>
              <Col span={12}>

              </Col>
            </Row>
          </Container>
        </Wrapper>
      </>
  );
}

export default OurGallery;
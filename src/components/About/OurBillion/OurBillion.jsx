import {
  Container,
  Wrapper,
  WrapperContainer,
  WrapperContainerSubtitle,
  WrapperContainerText,
  WrapperContainerTitle,
  WrapperImg,
} from './style.js'
import {Col, Row} from "antd";
import twoImgPeople from '../../../assets/img/two-business-partners-working-office 1.svg'

function OurBillion() {
  return (
      <>
        <Wrapper>
          <Container className="container">
            <Row justify="space-around" gutter={20}>
              <Col span={12} className="gutter-row"
              style={{
                display: "flex",
                alignItems: "end"
              }}>
                <WrapperImg src={twoImgPeople}/>
              </Col>
              <Col span={12} className="gutter-row">
                <WrapperContainer>
                  <WrapperContainerTitle>
                    OUR ONE BILLION MISSION
                  </WrapperContainerTitle>
                  <WrapperContainerText>
                    Our one billion mission sounds bold, We agree.
                  </WrapperContainerText>
                  <WrapperContainerSubtitle>
                    "We cannot solve our problems with the same thinking we used when we created them."—Albert Einstein.
                    Institutions are slow to change. Committees are where good ideas and innovative thinking go to die.
                    Choose agility over dogma. Embrace and drive change. We need to wipe the slate clean and begin with
                    bold, radical thinking.
                  </WrapperContainerSubtitle>
                </WrapperContainer>
              </Col>
            </Row>
          </Container>
        </Wrapper>
      </>
  );
}

export default OurBillion;
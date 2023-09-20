import {AboutSkills, Container, Icon, SiteItem, SiteItems, Subtitle, Title, Wrapper} from "./style.js";
import {Avatar, Card, Col, Row} from "antd";
import {useState} from "react";

const {Meta} = Card

function AboutSites(props) {
  const items = useState(props)
  return (<div style={{
    borderTop: "1px solid var(--border-30)"
  }}>
    <Container className="container">
      <Wrapper $f={33}>
        <Title>We Just keep growing with 6.3k Companies</Title>
        <Subtitle>
          Nullam egestas tellus at enim ornare tristique. Class aptent taciti sociosqu ad litora torquent
        </Subtitle>
      </Wrapper>
      <Wrapper $f={65} $fx="flex" $fd="column">
        <SiteItems>
          <SiteItem>
            <Icon.Google/>
          </SiteItem>
          <SiteItem>
            <Icon.Lenovo/>
          </SiteItem>
          <SiteItem>
            <Icon.Lexmark/>
          </SiteItem>
          <SiteItem>
            <Icon.Microsoft/>
          </SiteItem>
        </SiteItems>
        <SiteItems>
          <SiteItem>
            <Icon.Netflix/>
          </SiteItem>
          <SiteItem>
            <Icon.Slack/>
          </SiteItem>
          <SiteItem>
            <Icon.Verizon/>
          </SiteItem>
          <SiteItem>
            <Icon.Youtube/>
          </SiteItem>
        </SiteItems>
      </Wrapper>
    </Container>
    <AboutSkills className="container">
      <Row
          style={{
            display: "flex", justifyContent: "space-between"
          }}
          gutter={0}
      >
        {items[0].data.map(item => {
          return (<>
            <Col
                key={item.id}
                span={4}
                className="getter-row"
            >
              <Card
                  style={{
                    border: "none"
                  }}
              >
                <Meta
                    avatar={<Avatar src={item.icon}/>}
                    title={item.text}
                    description={item.subtitle}
                >
                </Meta>
              </Card>
            </Col>
          </>)
        })}
      </Row>
    </AboutSkills>
  </div>);
}

export default AboutSites;
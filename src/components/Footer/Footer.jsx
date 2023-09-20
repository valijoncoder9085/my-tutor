import {
  Container,
  Wrapper,
  WrapperFooter,
  WrapperFooterContainer,
  WrapperFooterLeft,
  WrapperFooterRight,
  WrapperLink,
  WrapperLogo,
  WrapperLogoAppBtn,
  WrapperLogoImg,
  WrapperLogoLink,
  WrapperLogoText,
  WrapperLogoUl,
  WrapperLogoUlLi,
  WrapperLogoUlLiImg,
  WrapperTop
} from './style.js'
import {Select, Space} from "antd";
import logoWhite from '../../assets/logo-white.svg'
import facebook from '../../assets/icons/socil/facebook.svg'
import youtube from '../../assets/icons/socil/youtube.svg'
import instagram from '../../assets/icons/socil/instagram.svg'
import linkedin from '../../assets/icons/socil/linkedin.svg'
import twitter from '../../assets/icons/socil/twitter.svg'
import playStore from '../../assets/img/play-store.svg'
import appStore from '../../assets/img/app-store.svg'
import {NavLink} from "react-router-dom";

function Footer() {
  const provinceData = [
    {
      label: 'English',
      value: "en"
    },
    {
      label: 'Russia',
      value: "ru"
    },
    {
      label: 'Uzbek',
      value: "uz"
    },
  ];
  const handleProvinceChange = (value) => {
    console.log(value)
  };
  return (
      <>
        <Wrapper>
          <WrapperTop className="container">
            <Container>
              <WrapperLogo>
                <WrapperLogoImg src={logoWhite}/>
                <WrapperLogoText>
                  Aliquam rhoncus ligula est, non pulvinar elit
                  convallis nec. Donec mattis odio at.
                </WrapperLogoText>
                <WrapperLogoLink>
                  <WrapperLogoUl>
                    <WrapperLogoUlLi>
                      <a href="">
                        <WrapperLogoUlLiImg src={facebook}/>
                      </a>
                    </WrapperLogoUlLi>
                    <WrapperLogoUlLi>
                      <a href="">
                        <WrapperLogoUlLiImg src={youtube}/>
                      </a>
                    </WrapperLogoUlLi>
                    <WrapperLogoUlLi>
                      <a href="">
                        <WrapperLogoUlLiImg src={instagram}/>
                      </a>
                    </WrapperLogoUlLi>
                    <WrapperLogoUlLi>
                      <a href='https://uz.linkedin.com/'>
                        <WrapperLogoUlLiImg src={linkedin}/>
                      </a>
                    </WrapperLogoUlLi>
                    <WrapperLogoUlLi>
                      <a href='#'>
                        <WrapperLogoUlLiImg src={twitter}/>
                      </a>
                    </WrapperLogoUlLi>
                  </WrapperLogoUl>
                </WrapperLogoLink>
              </WrapperLogo>
              <WrapperLink>
                <div>
                  <h1>Top 4 Category</h1>
                  <ul>
                    <li>
                      <NavLink>
                        Development
                      </NavLink>
                    </li>
                    <li>
                      <NavLink>
                        Finance & Accounting
                      </NavLink>
                    </li>
                    <li>
                      <NavLink>
                        Design
                      </NavLink>
                    </li>
                    <li>
                      <NavLink>
                        Business
                      </NavLink>
                    </li>
                  </ul>
                </div>
                <div>
                  <h1>Quick Links</h1>
                  <ul>
                    <li>
                      <NavLink>
                        About
                      </NavLink>
                    </li>
                    <li>
                      <NavLink>
                        Become Instructor
                      </NavLink>
                    </li>
                    <li>
                      <NavLink>
                        Contact
                      </NavLink>
                    </li>
                    <li>
                      <NavLink>
                        Career
                      </NavLink>
                    </li>
                  </ul>
                </div>
                <div>
                  <h1>Support</h1>
                  <ul>
                    <li>
                      <NavLink>
                        Help Center
                      </NavLink>
                    </li>
                    <li>
                      <NavLink>
                        FAQs
                      </NavLink>
                    </li>
                    <li>
                      <NavLink>
                        Terms & Condition
                      </NavLink>
                    </li>
                    <li>
                      <NavLink>
                        Privacy Policy
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </WrapperLink>
              <WrapperLogoAppBtn>
                <h1>
                  Downlaod our app
                </h1>
                <div>
                  <button>
                    <img src={appStore} alt="App store"/>
                  </button>
                </div>
                <div>
                  <button>
                    <img src={playStore} alt="Play store"/>
                  </button>
                </div>
              </WrapperLogoAppBtn>
            </Container>
          </WrapperTop>
          <WrapperFooter>
            <WrapperFooterContainer className="container">
              <Container>
                <WrapperFooterLeft>
                  © 2021 - Eduflex. Designed by<span> Templatecookie</span>. All rights reserved
                </WrapperFooterLeft>
                <WrapperFooterRight>
                  <Space>
                    <Select
                        defaultValue={provinceData[0].label}
                        options={provinceData}
                        style={{
                          width: "200px",
                        }}
                        onChange={handleProvinceChange}
                    >
                    </Select>
                  </Space>
                </WrapperFooterRight>
              </Container>
            </WrapperFooterContainer>
          </WrapperFooter>
        </Wrapper>
      </>
  );
}

export default Footer;
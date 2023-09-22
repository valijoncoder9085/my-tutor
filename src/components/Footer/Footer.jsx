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
import apple1 from '../../assets/img/apple2.svg'
import playGoogle from '../../assets/img/google-play.png'
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
        {/*<Wrapper>*/}
        {/*  <WrapperTop className="container">*/}
        {/*    <Container>*/}
        {/*      <WrapperLogo>*/}
        {/*        <WrapperLogoImg src={logoWhite}/>*/}
        {/*        <WrapperLogoText>*/}
        {/*          Aliquam rhoncus ligula est, non pulvinar elit*/}
        {/*          convallis nec. Donec mattis odio at.*/}
        {/*        </WrapperLogoText>*/}
        {/*        <WrapperLogoLink>*/}
        {/*          <WrapperLogoUl>*/}
        {/*            <WrapperLogoUlLi>*/}
        {/*              <a href="">*/}
        {/*                <WrapperLogoUlLiImg src={facebook}/>*/}
        {/*              </a>*/}
        {/*            </WrapperLogoUlLi>*/}
        {/*            <WrapperLogoUlLi>*/}
        {/*              <a href="">*/}
        {/*                <WrapperLogoUlLiImg src={youtube}/>*/}
        {/*              </a>*/}
        {/*            </WrapperLogoUlLi>*/}
        {/*            <WrapperLogoUlLi>*/}
        {/*              <a href="">*/}
        {/*                <WrapperLogoUlLiImg src={instagram}/>*/}
        {/*              </a>*/}
        {/*            </WrapperLogoUlLi>*/}
        {/*            <WrapperLogoUlLi>*/}
        {/*              <a href='https://uz.linkedin.com/'>*/}
        {/*                <WrapperLogoUlLiImg src={linkedin}/>*/}
        {/*              </a>*/}
        {/*            </WrapperLogoUlLi>*/}
        {/*            <WrapperLogoUlLi>*/}
        {/*              <a href='#'>*/}
        {/*                <WrapperLogoUlLiImg src={twitter}/>*/}
        {/*              </a>*/}
        {/*            </WrapperLogoUlLi>*/}
        {/*          </WrapperLogoUl>*/}
        {/*        </WrapperLogoLink>*/}
        {/*      </WrapperLogo>*/}
        {/*      <WrapperLink>*/}
        {/*        <div>*/}
        {/*          <h1>Top 4 Category</h1>*/}
        {/*          <ul>*/}
        {/*            <li>*/}
        {/*              <NavLink>*/}
        {/*                Development*/}
        {/*              </NavLink>*/}
        {/*            </li>*/}
        {/*            <li>*/}
        {/*              <NavLink>*/}
        {/*                Finance & Accounting*/}
        {/*              </NavLink>*/}
        {/*            </li>*/}
        {/*            <li>*/}
        {/*              <NavLink>*/}
        {/*                Design*/}
        {/*              </NavLink>*/}
        {/*            </li>*/}
        {/*            <li>*/}
        {/*              <NavLink>*/}
        {/*                Business*/}
        {/*              </NavLink>*/}
        {/*            </li>*/}
        {/*          </ul>*/}
        {/*        </div>*/}
        {/*        <div>*/}
        {/*          <h1>Quick Links</h1>*/}
        {/*          <ul>*/}
        {/*            <li>*/}
        {/*              <NavLink>*/}
        {/*                About*/}
        {/*              </NavLink>*/}
        {/*            </li>*/}
        {/*            <li>*/}
        {/*              <NavLink>*/}
        {/*                Become Instructor*/}
        {/*              </NavLink>*/}
        {/*            </li>*/}
        {/*            <li>*/}
        {/*              <NavLink>*/}
        {/*                Contact*/}
        {/*              </NavLink>*/}
        {/*            </li>*/}
        {/*            <li>*/}
        {/*              <NavLink>*/}
        {/*                Career*/}
        {/*              </NavLink>*/}
        {/*            </li>*/}
        {/*          </ul>*/}
        {/*        </div>*/}
        {/*        <div>*/}
        {/*          <h1>Support</h1>*/}
        {/*          <ul>*/}
        {/*            <li>*/}
        {/*              <NavLink>*/}
        {/*                Help Center*/}
        {/*              </NavLink>*/}
        {/*            </li>*/}
        {/*            <li>*/}
        {/*              <NavLink>*/}
        {/*                FAQs*/}
        {/*              </NavLink>*/}
        {/*            </li>*/}
        {/*            <li>*/}
        {/*              <NavLink>*/}
        {/*                Terms & Condition*/}
        {/*              </NavLink>*/}
        {/*            </li>*/}
        {/*            <li>*/}
        {/*              <NavLink>*/}
        {/*                Privacy Policy*/}
        {/*              </NavLink>*/}
        {/*            </li>*/}
        {/*          </ul>*/}
        {/*        </div>*/}
        {/*      </WrapperLink>*/}
        {/*      <WrapperLogoAppBtn>*/}
        {/*        <h1>*/}
        {/*          Downlaod our app*/}
        {/*        </h1>*/}
        {/*        <div>*/}
        {/*          <button>*/}
        {/*            <img src={appStore} alt="App store"/>*/}
        {/*          </button>*/}
        {/*        </div>*/}
        {/*        <div>*/}
        {/*          <button>*/}
        {/*            <img src={playStore} alt="Play store"/>*/}
        {/*          </button>*/}
        {/*        </div>*/}
        {/*      </WrapperLogoAppBtn>*/}
        {/*    </Container>*/}
        {/*  </WrapperTop>*/}
        {/*  <WrapperFooter>*/}
        {/*    <WrapperFooterContainer className="container">*/}
        {/*      <Container>*/}
        {/*        <WrapperFooterLeft>*/}
        {/*          © 2021 - Eduflex. Designed by<span> Templatecookie</span>. All rights reserved*/}
        {/*        </WrapperFooterLeft>*/}
        {/*        <WrapperFooterRight>*/}
        {/*          <Space>*/}
        {/*            <Select*/}
        {/*                defaultValue={provinceData[0].label}*/}
        {/*                options={provinceData}*/}
        {/*                style={{*/}
        {/*                  width: "200px",*/}
        {/*                }}*/}
        {/*                onChange={handleProvinceChange}*/}
        {/*            >*/}
        {/*            </Select>*/}
        {/*          </Space>*/}
        {/*        </WrapperFooterRight>*/}
        {/*      </Container>*/}
        {/*    </WrapperFooterContainer>*/}
        {/*  </WrapperFooter>*/}
        {/*</Wrapper>*/}
        <div className="footer-section">
          <div className="container">
            <div className="footer-top">
              <div className="row">
                <div className="col-xl-4">
                  <div className="footer-textarea">
                    <div className="footer-logo">
                      <svg width="221" height="46" viewBox="0 0 221 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.4375 17.25L24 5.75L45.5625 17.25L24 28.75L2.4375 17.25Z" stroke="#FF6636"/>
                        <path d="M34.7812 43.125V23L24 17.25" stroke="#FF6636"/>
                        <path
                            d="M40.5313 19.9335V29.7302C40.5319 30.0403 40.4316 30.3422 40.2456 30.5904C39.0351 32.2012 33.9283 38.094 24 38.094C14.0717 38.094 8.96486 32.2012 7.75437 30.5904C7.5684 30.3422 7.46816 30.0403 7.46875 29.7302V19.9335"
                            stroke="#FF6636"/>
                        <path
                            d="M58.84 36H76.3513V31.9358H63.6883V24.6307H75.3451V20.5665H63.6883V13.3006H76.2468V9.23636H58.84V36ZM87.3289 36.3528C90.7789 36.3528 92.334 34.3011 93.0789 32.8375H93.3664V36H98.0186V9.23636H93.2749V19.2466H93.0789C92.3601 17.796 90.8834 15.6659 87.3419 15.6659C82.7027 15.6659 79.0567 19.2989 79.0567 25.9898C79.0567 32.6023 82.5982 36.3528 87.3289 36.3528ZM88.6488 32.4716C85.5255 32.4716 83.8789 29.7273 83.8789 25.9636C83.8789 22.2261 85.4993 19.5472 88.6488 19.5472C91.6936 19.5472 93.3664 22.0693 93.3664 25.9636C93.3664 29.858 91.6675 32.4716 88.6488 32.4716ZM114.749 27.558C114.749 30.6159 112.567 32.1318 110.476 32.1318C108.202 32.1318 106.686 30.5244 106.686 27.9761V15.9273H101.956V28.708C101.956 33.5301 104.7 36.2614 108.647 36.2614C111.652 36.2614 113.769 34.6801 114.684 32.4324H114.893V36H119.48V15.9273H114.749V27.558ZM131.97 43.9455C137.394 43.9455 141.392 41.4625 141.392 36.3267V15.9273H136.727V19.2466H136.466C135.747 17.796 134.244 15.6659 130.703 15.6659C126.063 15.6659 122.417 19.2989 122.417 25.8983C122.417 32.4455 126.063 35.7125 130.69 35.7125C134.127 35.7125 135.734 33.8699 136.466 32.3932H136.701V36.196C136.701 39.1494 134.741 40.3648 132.049 40.3648C129.2 40.3648 127.945 39.0187 127.37 37.8426L123.11 38.875C123.973 41.6847 126.861 43.9455 131.97 43.9455ZM132.01 32.0011C128.886 32.0011 127.24 29.5705 127.24 25.8722C127.24 22.2261 128.86 19.5472 132.01 19.5472C135.054 19.5472 136.727 22.0693 136.727 25.8722C136.727 29.7011 135.028 32.0011 132.01 32.0011ZM157.931 27.558C157.931 30.6159 155.748 32.1318 153.657 32.1318C151.383 32.1318 149.867 30.5244 149.867 27.9761V15.9273H145.137V28.708C145.137 33.5301 147.881 36.2614 151.828 36.2614C154.833 36.2614 156.95 34.6801 157.865 32.4324H158.074V36H162.661V15.9273H157.931V27.558ZM172.198 36.4051C175.347 36.4051 177.229 34.9284 178.092 33.2426H178.249V36H182.796V22.5659C182.796 17.2602 178.471 15.6659 174.642 15.6659C170.421 15.6659 167.18 17.5477 166.134 21.2068L170.551 21.8341C171.022 20.4619 172.355 19.2858 174.668 19.2858C176.863 19.2858 178.066 20.4097 178.066 22.383V22.4614C178.066 23.8205 176.641 23.8858 173.1 24.2648C169.205 24.683 165.481 25.846 165.481 30.3676C165.481 34.3142 168.369 36.4051 172.198 36.4051ZM173.426 32.929C171.453 32.929 170.042 32.0273 170.042 30.2892C170.042 28.4727 171.623 27.7148 173.74 27.4142C174.981 27.2443 177.464 26.9307 178.079 26.4341V28.7994C178.079 31.0341 176.275 32.929 173.426 32.929ZM186.449 36H191.18V24.1994C191.18 21.6511 193.101 19.8477 195.701 19.8477C196.499 19.8477 197.492 19.9915 197.897 20.1222V15.7705C197.466 15.692 196.721 15.6398 196.198 15.6398C193.898 15.6398 191.977 16.9466 191.245 19.2727H191.036V15.9273H186.449V36ZM206.558 36.3528C210.008 36.3528 211.563 34.3011 212.308 32.8375H212.595V36H217.248V9.23636H212.504V19.2466H212.308C211.589 17.796 210.113 15.6659 206.571 15.6659C201.932 15.6659 198.286 19.2989 198.286 25.9898C198.286 32.6023 201.827 36.3528 206.558 36.3528ZM207.878 32.4716C204.755 32.4716 203.108 29.7273 203.108 25.9636C203.108 22.2261 204.728 19.5472 207.878 19.5472C210.923 19.5472 212.595 22.0693 212.595 25.9636C212.595 29.858 210.897 32.4716 207.878 32.4716Z"
                            fill="white"/>
                      </svg>
                    </div>
                    <p>Aliquam rhoncus ligula est, non pulvinar elit convallis nec. Donec mattis odio at.</p>
                    <div className="social-icon footer-social">
                      <ul>
                        <li>
                          <a href="#">
                            <img src={facebook} alt="facebook"/>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img src={instagram} alt="instagram"/>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img src={linkedin} alt="linkedin"/>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img src={twitter} alt="twitter"/>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img src={youtube} alt="youtube"/>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-xl-2 col-lg-3 col-md-3 col-6">
                  <div className="footer-widget">
                    <div className="footer-menu-title">
                      <h4>Explore our</h4>
                    </div>
                    <div className="footer-menu">
                      <ul>
                        <li>
                          <a href="#">
                            Labal
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                              <path d="M2.5 8H13.5" stroke="white"/>
                              <path d="M9 3.5L13.5 8L9 12.5" stroke="white"/>
                            </svg>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            Events
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                              <path d="M2.5 8H13.5" stroke="white"/>
                              <path d="M9 3.5L13.5 8L9 12.5" stroke="white"/>
                            </svg>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            News & Articles
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                              <path d="M2.5 8H13.5" stroke="white"/>
                              <path d="M9 3.5L13.5 8L9 12.5" stroke="white"/>
                            </svg>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            Sitemap
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                              <path d="M2.5 8H13.5" stroke="white"/>
                              <path d="M9 3.5L13.5 8L9 12.5" stroke="white"/>
                            </svg>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-xl-2 col-lg-3 col-md-3 col-6">
                  <div className="footer-widget">
                    <div className="footer-menu-title">
                      <h4>Quick Links</h4>
                    </div>
                    <div className="footer-menu">
                      <ul>
                        <li>
                          <a href="#">
                            About
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                              <path d="M2.5 8H13.5" stroke="white"/>
                              <path d="M9 3.5L13.5 8L9 12.5" stroke="white"/>
                            </svg>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            Become Instructor
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                              <path d="M2.5 8H13.5" stroke="white"/>
                              <path d="M9 3.5L13.5 8L9 12.5" stroke="white"/>
                            </svg>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            Contact
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                              <path d="M2.5 8H13.5" stroke="white"/>
                              <path d="M9 3.5L13.5 8L9 12.5" stroke="white"/>
                            </svg>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            Career
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                              <path d="M2.5 8H13.5" stroke="white"/>
                              <path d="M9 3.5L13.5 8L9 12.5" stroke="white"/>
                            </svg>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-xl-2 col-lg-3 col-md-3 col-sm-6">
                  <div className="footer-widget">
                    <div className="footer-menu-title">
                      <h4>Support</h4>
                    </div>
                    <div className="footer-menu">
                      <ul>
                        <li>
                          <a href="#">
                            Help Center
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                              <path d="M2.5 8H13.5" stroke="white"/>
                              <path d="M9 3.5L13.5 8L9 12.5" stroke="white"/>
                            </svg>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            FAQs
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                              <path d="M2.5 8H13.5" stroke="white"/>
                              <path d="M9 3.5L13.5 8L9 12.5" stroke="white"/>
                            </svg>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            Terms & Condition
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                              <path d="M2.5 8H13.5" stroke="white"/>
                              <path d="M9 3.5L13.5 8L9 12.5" stroke="white"/>
                            </svg>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            Privacy Policy
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                              <path d="M2.5 8H13.5" stroke="white"/>
                              <path d="M9 3.5L13.5 8L9 12.5" stroke="white"/>
                            </svg>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-xl-2 col-lg-3 col-md-3">
                  <div className="footer-widget">
                    <div className="footer-menu-title dowmload-app">
                      <h4>Downlaod our app</h4>
                    </div>
                    <div className="app-btn-column">
                      <a className="app-btn" href="#">
                        <div className="app-btn-wrap">
                          <div className="app-icon">
                            <img src={apple1} alt=""/>
                          </div>
                          <div className="app-data">
                            <p>Download now</p>
                            <h5>App Store</h5>
                          </div>
                        </div>
                      </a>
                      <a className="app-btn" href="#">
                        <div className="app-btn-wrap">
                          <div className="app-icon">
                            <img src={playGoogle} alt=""/>
                          </div>
                          <div className="app-data">
                            <p>Download now</p>
                            <h5>Play Store</h5>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="container">
              <div className="row">
                <div className="col-sm-6 order-2 order-sm-0 d-flex align-items-center">
                  <div className="copywright-text">
                    <p>&copy; 2021 - Etutor. Designed by <a href="#">Templatecookie.</a> All rights reserved</p>
                  </div>
                </div>
                <div className="col-sm-6 order-1 order-sm-0 d-flex justify-content-end">
                  <div className="select-box">
                    <select className="custom-select sources" title="English">
                      <option>English</option>
                      <option>Germany</option>
                      <option>Spanish</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
  );
}

export default Footer;
// import {Bg, Container, Content, Icon, NavBtn, NavInput, NavItem, NavItems, NavSelect, Wrapper} from "./style";
// import {NavLink} from "react-router-dom";
import {NavLink} from "react-router-dom";
import logo from "../../assets/img/logo.svg"
import search from "../../assets/img/search.svg"
import profile from "../../assets/img/profile.png"

const Navbar = () => {
  return (<>
    <div className="offcanves-menu">
      <div className="mobile-header">
        <div className="mobile-logo">
          <NavLink to={"/"}>
            <img src={logo} alt="brand-logo"/>
          </NavLink>
        </div>
        <span className="close">
               <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 6L18.7279 18.7279" stroke="#1D2026"/>
                  <path d="M6.00006 19L18.728 6.27208" stroke="#1D2026"/>
               </svg>
            </span>
      </div>
      <div className="search-field-wrap mobile-search">
        <form action="#">
          <div className="form-searchbox">
          <span className="icon">
                  <img src={search} alt=""/>
                  </span>
            <input type="text" placeholder="What do you want learn"/>
          </div>
        </form>
      </div>
      <ul>
        <li><NavLink to={"/"}>Home</NavLink></li>
        <li><NavLink to={"/courses"}>Browse Courses</NavLink></li>
        <li><NavLink to={"/about"}>About</NavLink></li>
        <li><NavLink to={"/contact"}>Contact</NavLink></li>
        <li><NavLink to={"/become-instructor"}>Become an Instructor</NavLink></li>
      </ul>
      <h3>ACCOUNTS</h3>
      <ul>
        <li><a href="#">Dashboard</a></li>
        <li><a href="#">Courses</a></li>
        <li>
          <a href="#">Message <span>3</span></a>
        </li>
        <li><a href="#">Purchase History</a></li>
        <li><a href="#">Account Setting</a></li>
      </ul>
      <div className="mobile-user-wrap">
        <div className="mobile-use-left">
          <div className="mobile-user-thumb">
            <a href="#"><img src={profile} alt=""/></a>
          </div>
          <div className="mobile-user-data">
            <a href="#">
              <h5>Kevin Gilbert</h5>
            </a>
            <a href="#">
              <p>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 11.25H6.75V9L13.5 2.25L15.75 4.5L9 11.25Z" stroke="#8C94A3"/>
                  <path d="M11.8125 3.9375L14.0625 6.1875" stroke="#8C94A3"/>
                  <path
                      d="M15.1875 8.4375V14.625C15.1875 14.7742 15.1282 14.9173 15.0227 15.0227C14.9173 15.1282 14.7742 15.1875 14.625 15.1875H3.375C3.22582 15.1875 3.08274 15.1282 2.97725 15.0227C2.87176 14.9173 2.8125 14.7742 2.8125 14.625V3.375C2.8125 3.22582 2.87176 3.08274 2.97725 2.97725C3.08274 2.87176 3.22582 2.8125 3.375 2.8125H9.5625"
                      stroke="#8C94A3"/>
                </svg>
                Edit Profile
              </p>
            </a>
          </div>
        </div>
        <div className="mobile-cart">
          <div className="header-cart-wrap">
            <ul>
              <li>
                <a className="bell-icon" href="#">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M5.26855 9.75C5.26731 8.86051 5.44213 7.97957 5.78294 7.15796C6.12375 6.33635 6.62381 5.59031 7.25429 4.96286C7.88476 4.33541 8.6332 3.83895 9.45644 3.5021C10.2797 3.16525 11.1615 2.99467 12.0509 3.00019C15.7625 3.02778 18.7312 6.11282 18.7312 9.83474V10.5C18.7312 13.8577 19.4337 15.8062 20.0524 16.8711C20.1191 16.9849 20.1546 17.1142 20.1553 17.2461C20.156 17.378 20.1219 17.5077 20.0565 17.6222C19.991 17.7367 19.8966 17.8319 19.7826 17.8982C19.6686 17.9646 19.5392 17.9997 19.4073 18H4.59173C4.45985 17.9997 4.33038 17.9645 4.2164 17.8982C4.10242 17.8318 4.00795 17.7366 3.94252 17.6221C3.8771 17.5076 3.84303 17.3778 3.84376 17.2459C3.84449 17.1141 3.87999 16.9847 3.94667 16.8709C4.56573 15.806 5.26855 13.8575 5.26855 10.5L5.26855 9.75Z"
                        stroke="#1D2026"/>
                    <path
                        d="M9 18V18.75C9 19.5456 9.31607 20.3087 9.87868 20.8713C10.4413 21.4339 11.2044 21.75 12 21.75C12.7956 21.75 13.5587 21.4339 14.1213 20.8713C14.6839 20.3087 15 19.5456 15 18.75V18"
                        stroke="#1D2026"/>
                  </svg>
                </a>
              </li>
              <li>
                <a href="#">
                  <svg width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M11 17.25C11 17.25 1.625 12 1.625 5.62501C1.62519 4.49826 2.01561 3.40635 2.72989 2.53493C3.44416 1.66351 4.4382 1.06636 5.54299 0.845015C6.64778 0.623669 7.79514 0.791788 8.78999 1.32079C9.78484 1.84979 10.5658 2.70702 11 3.74673L11 3.74673C11.4342 2.70702 12.2152 1.84979 13.21 1.32079C14.2049 0.79179 15.3522 0.62367 16.457 0.845015C17.5618 1.06636 18.5558 1.66351 19.2701 2.53493C19.9844 3.40635 20.3748 4.49826 20.375 5.62501C20.375 12 11 17.25 11 17.25Z"
                        stroke="#1D2026"/>
                  </svg>
                </a>
              </li>
              <li>
                <a href="#">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M8.25 20.25C8.25 20.6642 7.91421 21 7.5 21C7.08579 21 6.75 20.6642 6.75 20.25C6.75 19.8358 7.08579 19.5 7.5 19.5C7.91421 19.5 8.25 19.8358 8.25 20.25Z"
                        fill="#1D2026" stroke="#1D2026"/>
                    <path
                        d="M17.25 21.75C18.0784 21.75 18.75 21.0784 18.75 20.25C18.75 19.4216 18.0784 18.75 17.25 18.75C16.4216 18.75 15.75 19.4216 15.75 20.25C15.75 21.0784 16.4216 21.75 17.25 21.75Z"
                        fill="#1D2026"/>
                    <path
                        d="M3.96429 6.75H20.7857L18.3108 15.4121C18.2213 15.7255 18.0321 16.0012 17.7718 16.1975C17.5116 16.3938 17.1945 16.5 16.8685 16.5H7.88145C7.55549 16.5 7.23839 16.3938 6.97816 16.1975C6.71792 16.0012 6.52872 15.7255 6.43917 15.4121L3.04827 3.54396C3.0035 3.38725 2.90889 3.24939 2.77878 3.15124C2.64866 3.05309 2.49011 3 2.32713 3H0.75"
                        stroke="#1D2026"/>
                  </svg>
                  <span className="count">2</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div className="offcanvas-overlay"></div>
    <header className="header-section">
      <div className="header-top">
        <div className="responsive-logo">
          <NavLink to={"/"}>
            <img src={logo} alt="brand-logo"/>
          </NavLink>
        </div>
        <div className="main-menu">
          <ul>
            <li><NavLink className="active" to={"/"}>Home</NavLink></li>
            <li><NavLink to={"/courses"}>Courses</NavLink></li>
            <li><NavLink to={"/about"}>About</NavLink></li>
            <li><NavLink to={"/contact"}>Contact</NavLink></li>
            <li><NavLink to={"/become-instructor"}>Become an Instructor</NavLink></li>
          </ul>
        </div>
        <div className="header-right">
          <div className="select-item">
            <div className="select-box">
              <select className="custom-select sources" title="USD">
                <option>Euro</option>
                <option>Pound</option>
              </select>
            </div>
          </div>
          <div className="select-item">
            <div className="select-box">
              <select className="custom-select sources" title="English">
                <option>English</option>
                <option>Germany</option>
                <option>Spanish</option>
              </select>
            </div>
          </div>
        </div>
        <div className="menu-bar">
          <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 5.54468H21" stroke="#1D2026"/>
            <path d="M3 12.5447H21" stroke="#1D2026"/>
            <path d="M3 19.5447H21" stroke="#1D2026"/>
          </svg>
        </div>
      </div>
      <div className="header-bottom">
        <div className="header-bottom-left">
          <div className="header-bottom-left-wrap">
            <div className="main-logo">
              <a href={"/"}>
                <img src={logo} alt="brand-logo"/>
              </a>
            </div>
            <div className="borwser-dropdown">
              <div className="select-box">
                <select className="custom-select sources" title="Browse">
                  <option>Mozila</option>
                  <option>Chrome</option>
                  <option>Safari</option>
                </select>
              </div>
            </div>
            <div className="search-field-wrap">
              <form action="#">
                <div className="form-searchbox">
                <span className="icon">
                           <img src={search} alt=""/>
                           </span>
                  <input type="text" placeholder="What do you want learn"/>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="header-bottom-right">
          <div className="header-cart-wrap">
            <ul>
              <li>
                <a className="notification-icon" href="#">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M5.26855 9.75C5.26731 8.86051 5.44213 7.97957 5.78294 7.15796C6.12375 6.33635 6.62381 5.59031 7.25429 4.96286C7.88476 4.33541 8.6332 3.83895 9.45644 3.5021C10.2797 3.16525 11.1615 2.99467 12.0509 3.00019C15.7625 3.02778 18.7312 6.11282 18.7312 9.83474V10.5C18.7312 13.8577 19.4337 15.8062 20.0524 16.8711C20.1191 16.9849 20.1546 17.1142 20.1553 17.2461C20.156 17.378 20.1219 17.5077 20.0565 17.6222C19.991 17.7367 19.8966 17.8319 19.7826 17.8982C19.6686 17.9646 19.5392 17.9997 19.4073 18H4.59173C4.45985 17.9997 4.33038 17.9645 4.2164 17.8982C4.10242 17.8318 4.00795 17.7366 3.94252 17.6221C3.8771 17.5076 3.84303 17.3778 3.84376 17.2459C3.84449 17.1141 3.87999 16.9847 3.94667 16.8709C4.56573 15.806 5.26855 13.8575 5.26855 10.5L5.26855 9.75Z"
                        stroke="#1D2026"/>
                    <path
                        d="M9 18V18.75C9 19.5456 9.31607 20.3087 9.87868 20.8713C10.4413 21.4339 11.2044 21.75 12 21.75C12.7956 21.75 13.5587 21.4339 14.1213 20.8713C14.6839 20.3087 15 19.5456 15 18.75V18"
                        stroke="#1D2026"/>
                  </svg>
                  <div className="card card-activity notification-box">
                    <div className="card-header">
                      <h2 className="card-title">Recent Activity</h2>
                      <p className="mark-read">Mark as Read</p>
                    </div>
                    <div className="card-body">
                      <ul className="activity">
                        <li className="activity-item">
                          <div className="activity-icon">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                              <path
                                  d="M2.83927 11.0622C2.09381 9.80558 1.83274 8.32 2.10509 6.88447C2.37744 5.44894 3.16447 4.16221 4.3184 3.26589C5.47232 2.36958 6.91376 1.92534 8.37204 2.0166C9.83033 2.10785 11.2051 2.72833 12.2383 3.7615C13.2715 4.79468 13.892 6.16949 13.9832 7.62777C14.0745 9.08606 13.6303 10.5275 12.734 11.6814C11.8377 12.8354 10.5509 13.6224 9.1154 13.8947C7.67988 14.1671 6.1943 13.906 4.93763 13.1606L4.93764 13.1605L2.86536 13.7526C2.77962 13.7771 2.68889 13.7782 2.60257 13.7559C2.51626 13.7335 2.43749 13.6885 2.37444 13.6254C2.31139 13.5624 2.26634 13.4836 2.24398 13.3973C2.22161 13.311 2.22273 13.2202 2.24723 13.1345L2.83931 11.0622L2.83927 11.0622Z"
                                  fill="white"/>
                              <path
                                  d="M8 8.75C8.41421 8.75 8.75 8.41421 8.75 8C8.75 7.58579 8.41421 7.25 8 7.25C7.58579 7.25 7.25 7.58579 7.25 8C7.25 8.41421 7.58579 8.75 8 8.75Z"
                                  fill="#FF6636"/>
                              <path
                                  d="M5 8.75C5.41421 8.75 5.75 8.41421 5.75 8C5.75 7.58579 5.41421 7.25 5 7.25C4.58579 7.25 4.25 7.58579 4.25 8C4.25 8.41421 4.58579 8.75 5 8.75Z"
                                  fill="#FF6636"/>
                              <path
                                  d="M11 8.75C11.4142 8.75 11.75 8.41421 11.75 8C11.75 7.58579 11.4142 7.25 11 7.25C10.5858 7.25 10.25 7.58579 10.25 8C10.25 8.41421 10.5858 8.75 11 8.75Z"
                                  fill="#FF6636"/>
                            </svg>

                          </div>
                          <div className="activity-info">
                            <p><span className="username">Kevin</span> comments on your lecture “What is ux” in “2021
                              ui/ux design with figma”</p>
                            <span className="time">Just now</span>
                          </div>
                        </li>
                        <li className="activity-item">
                          <div className="activity-icon">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                              <path
                                  d="M8.27569 11.9208L11.4279 13.9179C11.8308 14.1732 12.3311 13.7935 12.2115 13.3232L11.3008 9.74052C11.2752 9.64073 11.2782 9.53573 11.3096 9.4376C11.3409 9.33946 11.3994 9.25218 11.4781 9.18577L14.3049 6.83306C14.6763 6.52392 14.4846 5.90751 14.0074 5.87654L10.3159 5.63696C10.2165 5.62986 10.1211 5.59465 10.0409 5.53545C9.96069 5.47625 9.89896 5.39548 9.86289 5.30255L8.48612 1.83549C8.44869 1.73685 8.38215 1.65194 8.29532 1.59201C8.2085 1.53209 8.1055 1.5 8 1.5C7.89451 1.5 7.79151 1.53209 7.70468 1.59201C7.61786 1.65194 7.55131 1.73685 7.51389 1.83549L6.13712 5.30255C6.10104 5.39548 6.03932 5.47625 5.95912 5.53545C5.87892 5.59465 5.78355 5.62986 5.68412 5.63696L1.99263 5.87654C1.51544 5.90751 1.32373 6.52392 1.69515 6.83306L4.52186 9.18577C4.60063 9.25218 4.65907 9.33946 4.69044 9.4376C4.72181 9.53573 4.72485 9.64073 4.6992 9.74052L3.85459 13.063C3.71111 13.6274 4.31143 14.083 4.79495 13.7767L7.72431 11.9208C7.8067 11.8683 7.90234 11.8405 8 11.8405C8.09767 11.8405 8.19331 11.8683 8.27569 11.9208Z"
                                  fill="white"/>
                            </svg>

                          </div>
                          <div className="activity-info">
                            <p><span className="username">Kevin</span> comments on your lecture “What is ux” in “2021
                              ui/ux design with figma”</p>
                            <span className="time">5 min ago</span>
                          </div>
                        </li>
                        <li className="activity-item">
                          <div className="activity-icon">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                              <path opacity="0.2"
                                    d="M11.5007 5H2.50073C2.22459 5 2.00073 5.22386 2.00073 5.5V12.5C2.00073 12.7761 2.22459 13 2.50073 13H11.5007C11.7769 13 12.0007 12.7761 12.0007 12.5V5.5C12.0007 5.22386 11.7769 5 11.5007 5Z"
                                    fill="white"/>
                              <path
                                  d="M11.5007 5H2.50073C2.22459 5 2.00073 5.22386 2.00073 5.5V12.5C2.00073 12.7761 2.22459 13 2.50073 13H11.5007C11.7769 13 12.0007 12.7761 12.0007 12.5V5.5C12.0007 5.22386 11.7769 5 11.5007 5Z"
                                  fill="white"/>
                              <path
                                  d="M4.00073 3H13.5007C13.6333 3 13.7605 3.05268 13.8543 3.14645C13.9481 3.24021 14.0007 3.36739 14.0007 3.5V11"
                                  stroke="white"/>
                            </svg>

                          </div>
                          <div className="activity-info">
                            <p><span className="username">Kevin</span> comments on your lecture “What is ux” in “2021
                              ui/ux design with figma”</p>
                            <span className="time">6 min ago</span>
                          </div>
                        </li>
                        <li className="activity-item">
                          <div className="activity-icon">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                              <path
                                  d="M2.83927 11.0622C2.09381 9.80558 1.83274 8.32 2.10509 6.88447C2.37744 5.44894 3.16447 4.16221 4.3184 3.26589C5.47232 2.36958 6.91376 1.92534 8.37204 2.0166C9.83033 2.10785 11.2051 2.72833 12.2383 3.7615C13.2715 4.79468 13.892 6.16949 13.9832 7.62777C14.0745 9.08606 13.6303 10.5275 12.734 11.6814C11.8377 12.8354 10.5509 13.6224 9.1154 13.8947C7.67988 14.1671 6.1943 13.906 4.93763 13.1606L4.93764 13.1605L2.86536 13.7526C2.77962 13.7771 2.68889 13.7782 2.60257 13.7559C2.51626 13.7335 2.43749 13.6885 2.37444 13.6254C2.31139 13.5624 2.26634 13.4836 2.24398 13.3973C2.22161 13.311 2.22273 13.2202 2.24723 13.1345L2.83931 11.0622L2.83927 11.0622Z"
                                  fill="white"/>
                              <path
                                  d="M8 8.75C8.41421 8.75 8.75 8.41421 8.75 8C8.75 7.58579 8.41421 7.25 8 7.25C7.58579 7.25 7.25 7.58579 7.25 8C7.25 8.41421 7.58579 8.75 8 8.75Z"
                                  fill="#FF6636"/>
                              <path
                                  d="M5 8.75C5.41421 8.75 5.75 8.41421 5.75 8C5.75 7.58579 5.41421 7.25 5 7.25C4.58579 7.25 4.25 7.58579 4.25 8C4.25 8.41421 4.58579 8.75 5 8.75Z"
                                  fill="#FF6636"/>
                              <path
                                  d="M11 8.75C11.4142 8.75 11.75 8.41421 11.75 8C11.75 7.58579 11.4142 7.25 11 7.25C10.5858 7.25 10.25 7.58579 10.25 8C10.25 8.41421 10.5858 8.75 11 8.75Z"
                                  fill="#FF6636"/>
                            </svg>

                          </div>
                          <div className="activity-info">
                            <p><span className="username">Kevin</span> comments on your lecture “What is ux” in “2021
                              ui/ux design with figma”</p>
                            <span className="time">Just now</span>
                          </div>
                        </li>
                        <li className="activity-item">
                          <div className="activity-icon">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                              <path
                                  d="M8.27569 11.9208L11.4279 13.9179C11.8308 14.1732 12.3311 13.7935 12.2115 13.3232L11.3008 9.74052C11.2752 9.64073 11.2782 9.53573 11.3096 9.4376C11.3409 9.33946 11.3994 9.25218 11.4781 9.18577L14.3049 6.83306C14.6763 6.52392 14.4846 5.90751 14.0074 5.87654L10.3159 5.63696C10.2165 5.62986 10.1211 5.59465 10.0409 5.53545C9.96069 5.47625 9.89896 5.39548 9.86289 5.30255L8.48612 1.83549C8.44869 1.73685 8.38215 1.65194 8.29532 1.59201C8.2085 1.53209 8.1055 1.5 8 1.5C7.89451 1.5 7.79151 1.53209 7.70468 1.59201C7.61786 1.65194 7.55131 1.73685 7.51389 1.83549L6.13712 5.30255C6.10104 5.39548 6.03932 5.47625 5.95912 5.53545C5.87892 5.59465 5.78355 5.62986 5.68412 5.63696L1.99263 5.87654C1.51544 5.90751 1.32373 6.52392 1.69515 6.83306L4.52186 9.18577C4.60063 9.25218 4.65907 9.33946 4.69044 9.4376C4.72181 9.53573 4.72485 9.64073 4.6992 9.74052L3.85459 13.063C3.71111 13.6274 4.31143 14.083 4.79495 13.7767L7.72431 11.9208C7.8067 11.8683 7.90234 11.8405 8 11.8405C8.09767 11.8405 8.19331 11.8683 8.27569 11.9208Z"
                                  fill="white"/>
                            </svg>

                          </div>
                          <div className="activity-info">
                            <p><span className="username">Kevin</span> comments on your lecture “What is ux” in “2021
                              ui/ux design with figma”</p>
                            <span className="time">5 min ago</span>
                          </div>
                        </li>
                        <li className="activity-item">
                          <div className="activity-icon">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                              <path opacity="0.2"
                                    d="M11.5007 5H2.50073C2.22459 5 2.00073 5.22386 2.00073 5.5V12.5C2.00073 12.7761 2.22459 13 2.50073 13H11.5007C11.7769 13 12.0007 12.7761 12.0007 12.5V5.5C12.0007 5.22386 11.7769 5 11.5007 5Z"
                                    fill="white"/>
                              <path
                                  d="M11.5007 5H2.50073C2.22459 5 2.00073 5.22386 2.00073 5.5V12.5C2.00073 12.7761 2.22459 13 2.50073 13H11.5007C11.7769 13 12.0007 12.7761 12.0007 12.5V5.5C12.0007 5.22386 11.7769 5 11.5007 5Z"
                                  fill="white"/>
                              <path
                                  d="M4.00073 3H13.5007C13.6333 3 13.7605 3.05268 13.8543 3.14645C13.9481 3.24021 14.0007 3.36739 14.0007 3.5V11"
                                  stroke="white"/>
                            </svg>

                          </div>
                          <div className="activity-info">
                            <p><span className="username">Kevin</span> comments on your lecture “What is ux” in “2021
                              ui/ux design with figma”</p>
                            <span className="time">6 min ago</span>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <a href="#">
                  <svg width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M11 17.25C11 17.25 1.625 12 1.625 5.62501C1.62519 4.49826 2.01561 3.40635 2.72989 2.53493C3.44416 1.66351 4.4382 1.06636 5.54299 0.845015C6.64778 0.623669 7.79514 0.791788 8.78999 1.32079C9.78484 1.84979 10.5658 2.70702 11 3.74673L11 3.74673C11.4342 2.70702 12.2152 1.84979 13.21 1.32079C14.2049 0.79179 15.3522 0.62367 16.457 0.845015C17.5618 1.06636 18.5558 1.66351 19.2701 2.53493C19.9844 3.40635 20.3748 4.49826 20.375 5.62501C20.375 12 11 17.25 11 17.25Z"
                        stroke="#1D2026"/>
                  </svg>
                </a>
              </li>
              <li>
                <a href="#">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M8.25 20.25C8.25 20.6642 7.91421 21 7.5 21C7.08579 21 6.75 20.6642 6.75 20.25C6.75 19.8358 7.08579 19.5 7.5 19.5C7.91421 19.5 8.25 19.8358 8.25 20.25Z"
                        fill="#1D2026" stroke="#1D2026"/>
                    <path
                        d="M17.25 21.75C18.0784 21.75 18.75 21.0784 18.75 20.25C18.75 19.4216 18.0784 18.75 17.25 18.75C16.4216 18.75 15.75 19.4216 15.75 20.25C15.75 21.0784 16.4216 21.75 17.25 21.75Z"
                        fill="#1D2026"/>
                    <path
                        d="M3.96429 6.75H20.7857L18.3108 15.4121C18.2213 15.7255 18.0321 16.0012 17.7718 16.1975C17.5116 16.3938 17.1945 16.5 16.8685 16.5H7.88145C7.55549 16.5 7.23839 16.3938 6.97816 16.1975C6.71792 16.0012 6.52872 15.7255 6.43917 15.4121L3.04827 3.54396C3.0035 3.38725 2.90889 3.24939 2.77878 3.15124C2.64866 3.05309 2.49011 3 2.32713 3H0.75"
                        stroke="#1D2026"/>
                  </svg>
                </a>
              </li>
            </ul>
          </div>
          <div className="header-btn-wrap">
            <NavLink className="header-btn orange-btn" to={"/sign-up"}>Create Account</NavLink>
            <NavLink className="header-btn div-orange-btn" to={"/sign-in"}>Sign In</NavLink>
          </div>
        </div>
      </div>
    </header>
    {/*<Bg>*/}
    {/*  <Container>*/}
    {/*    <Wrapper>*/}
    {/*      <NavItems>*/}
    {/*        <NavItem>*/}
    {/*          <NavLink to={'/'}>*/}
    {/*            Home*/}
    {/*          </NavLink>*/}
    {/*        </NavItem>*/}
    {/*        <NavItem>*/}
    {/*          <NavLink to={'/courses'}>*/}
    {/*            Courses*/}
    {/*          </NavLink>*/}
    {/*        </NavItem>*/}
    {/*        <NavItem>*/}
    {/*          <NavLink to={'/about'}>*/}
    {/*            About*/}
    {/*          </NavLink>*/}
    {/*        </NavItem>*/}
    {/*        <NavItem>*/}
    {/*          <NavLink to={'/contact'}>*/}
    {/*            Contact*/}
    {/*          </NavLink>*/}
    {/*        </NavItem>*/}
    {/*        <NavItem>*/}
    {/*          <NavLink to={'/become'}>*/}
    {/*            Become an Instructor*/}
    {/*          </NavLink>*/}
    {/*        </NavItem>*/}
    {/*      </NavItems>*/}
    {/*      <NavItems>*/}
    {/*        <NavSelect>*/}
    {/*          <option value="usd">USD</option>*/}
    {/*          <option value="rus">RUB</option>*/}
    {/*          <option value="uzb">SUM</option>*/}
    {/*        </NavSelect>*/}
    {/*        <NavSelect>*/}
    {/*          <option value="eng">Eng</option>*/}
    {/*          <option value="rus">Rus</option>*/}
    {/*          <option value="uzb">Uzb</option>*/}
    {/*        </NavSelect>*/}
    {/*      </NavItems>*/}
    {/*    </Wrapper>*/}
    {/*  </Container>*/}
    {/*</Bg>*/}
    {/*<Container>*/}
    {/*  <Wrapper $gap={4}>*/}
    {/*    <Content $jc="flex-start">*/}
    {/*      <Icon.Logo/>*/}
    {/*      <NavSelect $w={200} $h={48} $b="true">*/}
    {/*        <option value="eng">Eng</option>*/}
    {/*        <option value="rus">Rus</option>*/}
    {/*        <option value="uzb">Uzb</option>*/}
    {/*      </NavSelect>*/}
    {/*      <NavInput*/}
    {/*          $w={424}*/}
    {/*          $h={48}*/}
    {/*          placeholder="What do you want learn..."*/}
    {/*      />*/}
    {/*    </Content>*/}
    {/*    <Content $jc="flex-end">*/}
    {/*      <Icon.Bell/>*/}
    {/*      <Icon.Heart/>*/}
    {/*      <Icon.Shop/>*/}
    {/*      <NavBtn $w={168} $bg="#FFEEE8" $cl="#FF6636">*/}
    {/*        Create Acount*/}
    {/*      </NavBtn>*/}
    {/*      <NavBtn $w={100} $bg="#FF6636" $cl="#FFFFFF" $ml={12}>*/}
    {/*        Sign In*/}
    {/*      </NavBtn>*/}
    {/*    </Content>*/}
    {/*  </Wrapper>*/}
    {/*</Container>*/}
  </>);
};

export default Navbar;

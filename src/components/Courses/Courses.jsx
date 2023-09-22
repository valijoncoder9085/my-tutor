import search from "../../assets/img/search.svg"
import course1 from "../../assets/img/course1.jpg"
import course2 from "../../assets/img/course2.jpg"
import course3 from "../../assets/img/course3.jpg"
import course4 from "../../assets/img/course4.jpg"

function Courses() {
  return (
      <>
        <div className="course-section section-padding">
          <div className="container">
            <div className="top-action-header-section">
              <div className="top-action-header">
                <div className="top-action-header-left">
                  <button className="actions-filter" id="filter">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 11.25L12 20.25"/>
                      <path d="M12 3.75L12 8.25" stroke="#1D2026"/>
                      <path d="M18.75 18.75L18.7501 20.25" stroke="#1D2026"/>
                      <path d="M18.7501 3.75L18.75 15.75" stroke="#1D2026"/>
                      <path d="M21 15.75H16.5" stroke="#1D2026"/>
                      <path d="M5.25007 15.75L5.25 20.25" stroke="#1D2026"/>
                      <path d="M5.25 3.75L5.25007 12.75" stroke="#1D2026"/>
                      <path d="M3.00024 12.75H7.50024" stroke="#1D2026"/>
                      <path d="M14.25 8.25H9.75" stroke="#1D2026"/>
                    </svg>
                    Filter
                    <span>3</span>
                  </button>
                  <form action="#" className="form">
                    <div className="form-searchbox">
                <span className="icon">
                                        <img src={search} alt=""/>
                                    </span>
                      <input type="text" placeholder="What do you want learn"/>
                    </div>
                  </form>
                </div>
                <div className="top-action-header-right">
                  <div className="sort-by">Sort by:</div>
                  <div className="select-box">
                    <select className="custom-select sources" title="Trending">
                      <option>January</option>
                      <option>February</option>
                      <option>March</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="bottom-action-header">
                <div className="suggetions">
                  <p>Suggestion:</p>
                  <ul>
                    <li><a href="#">user interface</a></li>
                    <li><a href="#">user experience</a></li>
                    <li><a href="#">web design</a></li>
                    <li><a href="#">interface</a></li>
                    <li><a href="#">app</a></li>
                  </ul>
                </div>
                <div className="search-result">
                  <p><span>3,145,684</span> results find for “ui/ux design”</p>
                </div>
              </div>
            </div>
            <div className="row shop-content">
              <div className="col-xl-3">
                <div className="course-sidebar-wrap shop-content">
                  <div className="colurse-sidebar-item">
                    <div className="accordion" id="accordionExample">
                      <div className="accordion-item main-item">
                        <h2 className="accordion-header" id="headingOne01">
                          <button className="accordion-button header-btn" type="button" data-bs-toggle="collapse"
                                  data-bs-target="#collapseOne01" aria-expanded="true" aria-controls="collapseOne01">
                            Category
                          </button>
                        </h2>
                        <div id="collapseOne01" className="accordion-collapse collapse show"
                             aria-labelledby="headingOne01" data-bs-parent="#accordionExample">
                          <div className="accordion-body body-top">
                            <div className="accordion" id="accordionExample2">
                              <div className="accordion-item">
                                <h2 className="accordion-header" id="headingOne1">
                                  <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                          data-bs-target="#collapseOne1" aria-expanded="true"
                                          aria-controls="collapseOne1">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                      <path d="M14.625 9.375H9.375V14.625H14.625V9.375Z" stroke="#FF6636"/>
                                      <path
                                          d="M18.75 4.5H5.25C4.83579 4.5 4.5 4.83579 4.5 5.25V18.75C4.5 19.1642 4.83579 19.5 5.25 19.5H18.75C19.1642 19.5 19.5 19.1642 19.5 18.75V5.25C19.5 4.83579 19.1642 4.5 18.75 4.5Z"
                                          stroke="#FF6636"/>
                                      <path d="M19.5 9.75H21.75" stroke="#FF6636"/>
                                      <path d="M19.5 14.25H21.75" stroke="#FF6636"/>
                                      <path d="M2.25 9.75H4.5" stroke="#FF6636"/>
                                      <path d="M2.25 14.25H4.5" stroke="#FF6636"/>
                                      <path d="M14.25 19.5V21.75" stroke="#FF6636"/>
                                      <path d="M9.75 19.5V21.75" stroke="#FF6636"/>
                                      <path d="M14.25 2.25V4.5" stroke="#FF6636"/>
                                      <path d="M9.75 2.25V4.5" stroke="#FF6636"/>
                                    </svg>
                                    Development
                                  </button>
                                </h2>
                                <div id="collapseOne1" className="accordion-collapse collapse show"
                                     aria-labelledby="headingOne1" data-bs-parent="#accordionExample2">
                                  <div className="accordion-body">
                                    <form action="#">
                                      <div className="check-field-wrap">
                                        <div className="form-group">
                                          <input type="checkbox" id="1"/>
                                          <label htmlFor="1">Web development <span>574</span></label>
                                        </div>
                                        <div className="form-group">
                                          <input type="checkbox" id="2"/>
                                          <label htmlFor="2">Data Science <span>568</span></label>
                                        </div>
                                        <div className="form-group">
                                          <input type="checkbox" id="3"/>
                                          <label htmlFor="3">Mobile Development <span>1345</span></label>
                                        </div>
                                        <div className="form-group">
                                          <input type="checkbox" id="4"/>
                                          <label htmlFor="4">Software Testing <span>317</span></label>
                                        </div>
                                        <div className="form-group">
                                          <input type="checkbox" id="5"/>
                                          <label htmlFor="5">Software Engineering <span>574</span></label>
                                        </div>
                                        <div className="form-group">
                                          <input type="checkbox" id="6"/>
                                          <label htmlFor="6">Software Development<span>558 </span></label>
                                        </div>
                                      </div>
                                    </form>
                                  </div>
                                </div>
                              </div>
                              <div className="accordion-item">
                                <h2 className="accordion-header" id="headingOne2">
                                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                          data-bs-target="#collapseOne2" aria-expanded="true"
                                          aria-controls="collapseOne2">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                      <path
                                          d="M22.5673 11.4172L20.25 12.5759L17.25 6.83067L19.5909 5.66024C19.7667 5.5723 19.9701 5.55695 20.1572 5.61749C20.3443 5.67802 20.5001 5.80961 20.5911 5.9839L22.8967 10.3992C22.9428 10.4875 22.9708 10.5841 22.9792 10.6834C22.9876 10.7826 22.9761 10.8825 22.9454 10.9773C22.9148 11.0721 22.8655 11.1598 22.8006 11.2353C22.7357 11.3108 22.6564 11.3727 22.5673 11.4172V11.4172Z"
                                          stroke="#8C94A3"/>
                                      <path
                                          d="M3.74994 12.4753L1.43266 11.3166C1.34357 11.2721 1.26425 11.2103 1.19932 11.1347C1.13439 11.0592 1.08516 10.9715 1.0545 10.8767C1.02383 10.782 1.01235 10.682 1.02072 10.5828C1.02909 10.4835 1.05714 10.387 1.10325 10.2987L3.40883 5.88332C3.49985 5.70902 3.65567 5.57744 3.84275 5.5169C4.02982 5.45636 4.23319 5.47171 4.40906 5.55965L6.74994 6.73008L3.74994 12.4753Z"
                                          stroke="#8C94A3"/>
                                      <path
                                          d="M20.25 12.5761L18.75 14.3309L15.3003 17.7806C15.2087 17.8722 15.095 17.9385 14.9701 17.9731C14.8453 18.0076 14.7137 18.0093 14.588 17.9779L9.15458 16.6195C9.05266 16.594 8.95724 16.5474 8.87448 16.4827L3.75 12.4756"
                                          stroke="#8C94A3"/>
                                      <path
                                          d="M18.75 14.3311L14.625 11.3311L13.425 12.2311C12.9058 12.6205 12.2742 12.8311 11.625 12.8311C10.9759 12.8311 10.3443 12.6205 9.82504 12.2311L9.31685 11.8499C9.23088 11.7854 9.15978 11.7032 9.10834 11.6089C9.05691 11.5146 9.02635 11.4103 9.01873 11.3031C9.01112 11.1959 9.02662 11.0883 9.06419 10.9877C9.10177 10.887 9.16053 10.7956 9.23652 10.7196L12.9054 7.05072C12.975 6.98108 13.0577 6.92584 13.1487 6.88814C13.2397 6.85045 13.3372 6.83105 13.4357 6.83105H17.25"
                                          stroke="#8C94A3"/>
                                      <path
                                          d="M6.80396 6.73047L11.6152 5.32783C11.7871 5.27772 11.9712 5.29075 12.1343 5.36455L15.3751 6.83095"
                                          stroke="#8C94A3"/>
                                      <path
                                          d="M10.5 19.9558L7.67443 19.2494C7.55977 19.2207 7.4535 19.1654 7.3643 19.0878L5.25 17.25"
                                          stroke="#8C94A3"/>
                                    </svg>

                                    Business
                                  </button>
                                </h2>
                                <div id="collapseOne2" className="accordion-collapse collapse"
                                     aria-labelledby="headingOne2" data-bs-parent="#accordionExample2">
                                  <div className="accordion-body">
                                    <form action="#">
                                      <div className="check-field-wrap">
                                        <div className="form-group">
                                          <input type="checkbox" id="7"/>
                                          <label htmlFor="7">Web development <span>574</span></label>
                                        </div>
                                        <div className="form-group">
                                          <input type="checkbox" id="8"/>
                                          <label htmlFor="8">Data Science <span>568</span></label>
                                        </div>
                                        <div className="form-group">
                                          <input type="checkbox" id="9"/>
                                          <label htmlFor="9">Mobile Development <span>1345</span></label>
                                        </div>
                                        <div className="form-group">
                                          <input type="checkbox" id="10"/>
                                          <label htmlFor="10">Software Testing <span>317</span></label>
                                        </div>
                                        <div className="form-group">
                                          <input type="checkbox" id="11"/>
                                          <label htmlFor="11">Software Engineering <span>574</span></label>
                                        </div>
                                        <div className="form-group">
                                          <input type="checkbox" id="12"/>
                                          <label htmlFor="12">Software Development Tools<span>558 </span></label>
                                        </div>
                                      </div>
                                    </form>
                                  </div>
                                </div>
                              </div>
                              <div className="accordion-item">
                                <h2 className="accordion-header" id="headingOne3">
                                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                          data-bs-target="#collapseOne3" aria-expanded="true"
                                          aria-controls="collapseOne3">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                      <path
                                          d="M21 5.25H3C2.58579 5.25 2.25 5.58579 2.25 6V18C2.25 18.4142 2.58579 18.75 3 18.75H21C21.4142 18.75 21.75 18.4142 21.75 18V6C21.75 5.58579 21.4142 5.25 21 5.25Z"
                                          stroke="#8C94A3"/>
                                      <path d="M15.7495 15.75H18.7495" stroke="#8C94A3"/>
                                      <path d="M11.2495 15.75H12.7495" stroke="#8C94A3"/>
                                      <path d="M2.24951 9.08008H21.7495" stroke="#8C94A3"/>
                                    </svg>
                                    Finance & Accounting
                                  </button>
                                </h2>
                                <div id="collapseOne3" className="accordion-collapse collapse"
                                     aria-labelledby="headingOne3" data-bs-parent="#accordionExample2">
                                  <div className="accordion-body">
                                    <form action="#">
                                      <div className="check-field-wrap">
                                        <div className="form-group">
                                          <input type="checkbox" id="13"/>
                                          <label htmlFor="13">Web development <span>574</span></label>
                                        </div>
                                        <div className="form-group">
                                          <input type="checkbox" id="14"/>
                                          <label htmlFor="14">Data Science <span>568</span></label>
                                        </div>
                                        <div className="form-group">
                                          <input type="checkbox" id="15"/>
                                          <label htmlFor="15">Mobile Development <span>1345</span></label>
                                        </div>
                                        <div className="form-group">
                                          <input type="checkbox" id="16"/>
                                          <label htmlFor="16">Software Testing <span>317</span></label>
                                        </div>
                                        <div className="form-group">
                                          <input type="checkbox" id="17"/>
                                          <label htmlFor="17">Software Engineering <span>574</span></label>
                                        </div>
                                        <div className="form-group">
                                          <input type="checkbox" id="18"/>
                                          <label htmlFor="18">Software Development Tools<span>558 </span></label>
                                        </div>
                                      </div>
                                    </form>
                                  </div>
                                </div>
                              </div>
                              <div className="accordion-item">
                                <h2 className="accordion-header" id="headingOne4">
                                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                          data-bs-target="#collapseOne4" aria-expanded="true"
                                          aria-controls="collapseOne4">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                      <path d="M3.75 20.25V3.75" stroke="#A1A5B3"/>
                                      <path d="M3.75 5.25H15.75V9.75" stroke="#A1A5B3"/>
                                      <path d="M20.25 9.75H3.75V14.25H20.25V9.75Z" stroke="#A1A5B3"/>
                                      <path d="M12.75 14.25V18.75H3.75" stroke="#A1A5B3"/>
                                    </svg>
                                    IT & Software
                                  </button>
                                </h2>
                                <div id="collapseOne4" className="accordion-collapse collapse"
                                     aria-labelledby="headingOne4" data-bs-parent="#accordionExample2">
                                  <div className="accordion-body">
                                    <form action="#">
                                      <div className="check-field-wrap">
                                        <div className="form-group">
                                          <input type="checkbox" id="19"/>
                                          <label htmlFor="19">Web development <span>574</span></label>
                                        </div>
                                        <div className="form-group">
                                          <input type="checkbox" id="20"/>
                                          <label htmlFor="20">Data Science <span>568</span></label>
                                        </div>
                                        <div className="form-group">
                                          <input type="checkbox" id="21"/>
                                          <label htmlFor="21">Mobile Development <span>1345</span></label>
                                        </div>
                                        <div className="form-group">
                                          <input type="checkbox" id="22"/>
                                          <label htmlFor="22">Software Testing <span>317</span></label>
                                        </div>
                                        <div className="form-group">
                                          <input type="checkbox" id="23"/>
                                          <label htmlFor="23">Software Engineering <span>574</span></label>
                                        </div>
                                        <div className="form-group">
                                          <input type="checkbox" id="24"/>
                                          <label htmlFor="24">Software Development Tools<span>558 </span></label>
                                        </div>
                                      </div>
                                    </form>
                                  </div>
                                </div>
                              </div>
                              <div className="accordion-item">
                                <h2 className="accordion-header" id="headingOne5">
                                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                          data-bs-target="#collapseOne5" aria-expanded="true"
                                          aria-controls="collapseOne5">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                      <path
                                          d="M19.5 13.875C19.5 15.8641 18.7098 17.7718 17.3033 19.1783C15.8968 20.5848 13.9891 21.375 12 21.375C10.0109 21.375 8.10322 20.5848 6.6967 19.1783C5.29018 17.7718 4.5 15.8641 4.5 13.875V10.125C4.5 8.13588 5.29018 6.22822 6.6967 4.8217C8.10322 3.41518 10.0109 2.625 12 2.625C13.9891 2.625 15.8968 3.41518 17.3033 4.8217C18.7098 6.22822 19.5 8.13588 19.5 10.125V13.875Z"
                                          stroke="#A1A5B3"/>
                                      <path d="M19.5 12H4.5" stroke="#A1A5B3"/>
                                      <path
                                          d="M15 8.625C15 8.83211 14.8321 9 14.625 9C14.4179 9 14.25 8.83211 14.25 8.625C14.25 8.41789 14.4179 8.25 14.625 8.25C14.8321 8.25 15 8.41789 15 8.625Z"
                                          fill="#A1A5B3" stroke="#A1A5B3"/>
                                      <path
                                          d="M9.75 8.625C9.75 8.83211 9.58211 9 9.375 9C9.16789 9 9 8.83211 9 8.625C9 8.41789 9.16789 8.25 9.375 8.25C9.58211 8.25 9.75 8.41789 9.75 8.625Z"
                                          fill="#A1A5B3" stroke="#A1A5B3"/>
                                      <path d="M5.25 2.625L7.15446 4.40025" stroke="#A1A5B3"/>
                                      <path d="M18.75 2.625L16.8455 4.40031" stroke="#A1A5B3"/>
                                    </svg>

                                    Office Productivity
                                  </button>
                                </h2>
                                <div id="collapseOne5" className="accordion-collapse collapse"
                                     aria-labelledby="headingOne5" data-bs-parent="#accordionExample2">
                                  <div className="accordion-body">
                                    <form action="#">
                                      <div className="check-field-wrap">
                                        <div className="form-group">
                                          <input type="checkbox" id="25"/>
                                          <label htmlFor="25">Web development <span>574</span></label>
                                        </div>
                                        <div className="form-group">
                                          <input type="checkbox" id="26"/>
                                          <label htmlFor="26">Data Science <span>568</span></label>
                                        </div>
                                        <div className="form-group">
                                          <input type="checkbox" id="27"/>
                                          <label htmlFor="27">Mobile Development <span>1345</span></label>
                                        </div>
                                        <div className="form-group">
                                          <input type="checkbox" id="28"/>
                                          <label htmlFor="28">Software Testing <span>317</span></label>
                                        </div>
                                        <div className="form-group">
                                          <input type="checkbox" id="29"/>
                                          <label htmlFor="29">Software Engineering <span>574</span></label>
                                        </div>
                                        <div className="form-group">
                                          <input type="checkbox" id="30"/>
                                          <label htmlFor="30">Software Development Tools<span>558 </span></label>
                                        </div>
                                      </div>
                                    </form>
                                  </div>
                                </div>
                              </div>
                              <div className="accordion-item">
                                <h2 className="accordion-header" id="headingOne6">
                                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                          data-bs-target="#collapseOne6" aria-expanded="true"
                                          aria-controls="collapseOne6">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                      <path d="M7.125 9.75H16.875" stroke="#A1A5B3"/>
                                      <path d="M7.125 12.75H16.875" stroke="#A1A5B3"/>
                                      <path
                                          d="M3 19.5V5.25C3 5.05109 3.07902 4.86032 3.21967 4.71967C3.36032 4.57902 3.55109 4.5 3.75 4.5H20.25C20.4489 4.5 20.6397 4.57902 20.7803 4.71967C20.921 4.86032 21 5.05109 21 5.25V19.5L18 18L15 19.5L12 18L9 19.5L6 18L3 19.5Z"
                                          stroke="#A1A5B3"/>
                                    </svg>

                                    Personal Development
                                  </button>
                                </h2>
                                <div id="collapseOne6" className="accordion-collapse collapse"
                                     aria-labelledby="headingOne6" data-bs-parent="#accordionExample2">
                                  <div className="accordion-body">
                                    <form action="#">
                                      <div className="check-field-wrap">
                                        <div className="form-group">
                                          <input type="checkbox" id="31"/>
                                          <label htmlFor="31">Web development <span>574</span></label>
                                        </div>
                                        <div className="form-group">
                                          <input type="checkbox" id="32"/>
                                          <label htmlFor="32">Data Science <span>568</span></label>
                                        </div>
                                        <div className="form-group">
                                          <input type="checkbox" id="33"/>
                                          <label htmlFor="33">Mobile Development <span>1345</span></label>
                                        </div>
                                        <div className="form-group">
                                          <input type="checkbox" id="34"/>
                                          <label htmlFor="34">Software Testing <span>317</span></label>
                                        </div>
                                        <div className="form-group">
                                          <input type="checkbox" id="35"/>
                                          <label htmlFor="35">Software Engineering <span>574</span></label>
                                        </div>
                                        <div className="form-group">
                                          <input type="checkbox" id="36"/>
                                          <label htmlFor="36">Software Development Tools<span>558 </span></label>
                                        </div>
                                      </div>
                                    </form>
                                  </div>
                                </div>
                              </div>
                              <div className="accordion-item">
                                <h2 className="accordion-header" id="headingOne7">
                                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                          data-bs-target="#collapseOne7" aria-expanded="true"
                                          aria-controls="collapseOne7">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                      <path
                                          d="M10.875 15C11.9105 15 12.75 14.1605 12.75 13.125C12.75 12.0895 11.9105 11.25 10.875 11.25C9.83947 11.25 9 12.0895 9 13.125C9 14.1605 9.83947 15 10.875 15Z"
                                          stroke="#A1A5B3"/>
                                      <path d="M3.00049 21.0007L9.54911 14.4512" stroke="#A1A5B3"/>
                                      <path
                                          d="M3.00049 21L16.0735 18.8212C16.2033 18.7995 16.3252 18.7441 16.4268 18.6605C16.5284 18.5768 16.6063 18.4679 16.6525 18.3447L18.7505 12.75L11.2505 5.25L5.65578 7.34802C5.53255 7.39423 5.42365 7.47206 5.34002 7.57368C5.25638 7.6753 5.20097 7.79715 5.17933 7.92697L3.00049 21Z"
                                          stroke="#A1A5B3"/>
                                      <path
                                          d="M18.7505 12.7499L21.2202 10.2802C21.2898 10.2106 21.345 10.1279 21.3827 10.0369C21.4204 9.9459 21.4398 9.84838 21.4398 9.74989C21.4398 9.65139 21.4204 9.55387 21.3827 9.46287C21.345 9.37188 21.2898 9.2892 21.2202 9.21956L14.7808 2.78022C14.6402 2.63956 14.4494 2.56055 14.2505 2.56055C14.0516 2.56055 13.8608 2.63956 13.7202 2.78022L11.2505 5.24989"
                                          stroke="#A1A5B3"/>
                                    </svg>
                                    Design
                                  </button>
                                </h2>
                                <div id="collapseOne7" className="accordion-collapse collapse"
                                     aria-labelledby="headingOne7" data-bs-parent="#accordionExample2">
                                  <div className="accordion-body">
                                    <form action="#">
                                      <div className="check-field-wrap">
                                        <div className="form-group">
                                          <input type="checkbox" id="37"/>
                                          <label htmlFor="37">Web development <span>574</span></label>
                                        </div>
                                        <div className="form-group">
                                          <input type="checkbox" id="38"/>
                                          <label htmlFor="38">Data Science <span>568</span></label>
                                        </div>
                                        <div className="form-group">
                                          <input type="checkbox" id="39"/>
                                          <label htmlFor="39">Mobile Development <span>1345</span></label>
                                        </div>
                                        <div className="form-group">
                                          <input type="checkbox" id="40"/>
                                          <label htmlFor="40">Software Testing <span>317</span></label>
                                        </div>
                                        <div className="form-group">
                                          <input type="checkbox" id="41"/>
                                          <label htmlFor="41">Software Engineering <span>574</span></label>
                                        </div>
                                        <div className="form-group">
                                          <input type="checkbox" id="42"/>
                                          <label htmlFor="42">Software Development Tools<span>558 </span></label>
                                        </div>
                                      </div>
                                    </form>
                                  </div>
                                </div>
                              </div>
                              <div className="accordion-item">
                                <h2 className="accordion-header" id="headingOne8">
                                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                          data-bs-target="#collapseOne8" aria-expanded="true"
                                          aria-controls="collapseOne8">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                      <path
                                          d="M2.99951 4.75V17.75C2.99951 17.8664 3.02662 17.9813 3.07869 18.0854C3.13076 18.1896 3.20636 18.2801 3.29951 18.35C3.39266 18.4199 3.50079 18.4671 3.61535 18.4879C3.7299 18.5087 3.84774 18.5026 3.95951 18.47L20.4595 13.6575C20.6153 13.6121 20.7521 13.5173 20.8495 13.3875C20.9469 13.2577 20.9995 13.0998 20.9995 12.9375V9.5625C20.9995 9.40022 20.9469 9.24232 20.8495 9.1125C20.7521 8.98268 20.6153 8.88794 20.4595 8.8425L3.95951 4.03C3.84774 3.9974 3.7299 3.99127 3.61535 4.0121C3.50079 4.03293 3.39266 4.08014 3.29951 4.15C3.20636 4.21986 3.13076 4.31045 3.07869 4.41459C3.02662 4.51873 2.99951 4.63357 2.99951 4.75V4.75Z"
                                          stroke="#A1A5B3"/>
                                      <path
                                          d="M17.25 14.5934V17.9998C17.25 18.1988 17.171 18.3895 17.0303 18.5302C16.8897 18.6708 16.6989 18.7498 16.5 18.7498H13.5C13.3011 18.7498 13.1103 18.6708 12.9697 18.5302C12.829 18.3895 12.75 18.1988 12.75 17.9998V6.59375"
                                          stroke="#A1A5B3"/>
                                    </svg>

                                    Marketing
                                  </button>
                                </h2>
                                <div id="collapseOne8" className="accordion-collapse collapse"
                                     aria-labelledby="headingOne8" data-bs-parent="#accordionExample2">
                                  <div className="accordion-body">
                                    <form action="#">
                                      <div className="check-field-wrap">
                                        <div className="form-group">
                                          <input type="checkbox" id="43"/>
                                          <label htmlFor="43">Web development <span>574</span></label>
                                        </div>
                                        <div className="form-group">
                                          <input type="checkbox" id="44"/>
                                          <label htmlFor="44">Data Science <span>568</span></label>
                                        </div>
                                      </div>
                                    </form>
                                  </div>
                                </div>
                              </div>
                              <div className="accordion-item">
                                <h2 className="accordion-header" id="headingOne9">
                                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                          data-bs-target="#collapseOne9" aria-expanded="true"
                                          aria-controls="collapseOne9">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                      <path
                                          d="M21 16.6237V7.37598C21 7.2429 20.9646 7.11222 20.8974 6.99734C20.8302 6.88247 20.7337 6.78754 20.6177 6.72229L12.3677 2.08167C12.2554 2.01852 12.1288 1.98535 12 1.98535C11.8712 1.98535 11.7446 2.01852 11.6323 2.08167L3.3823 6.72229C3.26632 6.78754 3.16978 6.88247 3.10259 6.99734C3.03541 7.11222 3 7.2429 3 7.37598V16.6237C3 16.7568 3.03541 16.8875 3.10259 17.0023C3.16978 17.1172 3.26632 17.2121 3.3823 17.2774L11.6323 21.918C11.7446 21.9812 11.8712 22.0143 12 22.0143C12.1288 22.0143 12.2554 21.9812 12.3677 21.918L20.6177 17.2774C20.7337 17.2121 20.8302 17.1172 20.8974 17.0023C20.9646 16.8875 21 16.7568 21 16.6237Z"
                                          stroke="#A1A5B3"/>
                                      <path d="M16.5958 14.2979V9.42291L7.5 4.40625" stroke="#A1A5B3"/>
                                      <path d="M20.8967 6.99605L12.0891 11.9998L3.104 6.99512" stroke="#A1A5B3"/>
                                      <path d="M12.089 12L12.001 22.0145" stroke="#A1A5B3"/>
                                    </svg>
                                    Lifestyle
                                  </button>
                                </h2>
                                <div id="collapseOne9" className="accordion-collapse collapse"
                                     aria-labelledby="headingOne9" data-bs-parent="#accordionExample2">
                                  <div className="accordion-body">
                                    <form action="#">
                                      <div className="check-field-wrap">
                                        <div className="form-group">
                                          <input type="checkbox" id="45"/>
                                          <label htmlFor="45">Web development <span>574</span></label>
                                        </div>
                                        <div className="form-group">
                                          <input type="checkbox" id="46"/>
                                          <label htmlFor="46">Data Science <span>568</span></label>
                                        </div>
                                      </div>
                                    </form>
                                  </div>
                                </div>
                              </div>
                              <div className="accordion-item">
                                <h2 className="accordion-header" id="headingOne10">
                                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                          data-bs-target="#collapseOne10" aria-expanded="true"
                                          aria-controls="collapseOne10">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                      <path
                                          d="M19.5 19.5H4.5C4.10218 19.5 3.72064 19.342 3.43934 19.0607C3.15804 18.7794 3 18.3978 3 18V7.5C3 7.10218 3.15804 6.72064 3.43934 6.43934C3.72064 6.15804 4.10218 6 4.5 6H7.49945L8.99945 3.75H14.9995L16.4995 6H19.5C19.8978 6 20.2794 6.15804 20.5607 6.43934C20.842 6.72064 21 7.10218 21 7.5V18C21 18.3978 20.842 18.7794 20.5607 19.0607C20.2794 19.342 19.8978 19.5 19.5 19.5Z"
                                          stroke="#A1A5B3"/>
                                      <path
                                          d="M12 15.75C13.864 15.75 15.375 14.239 15.375 12.375C15.375 10.511 13.864 9 12 9C10.136 9 8.625 10.511 8.625 12.375C8.625 14.239 10.136 15.75 12 15.75Z"
                                          stroke="#A1A5B3"/>
                                    </svg>
                                    Photography & Video
                                  </button>
                                </h2>
                                <div id="collapseOne10" className="accordion-collapse collapse"
                                     aria-labelledby="headingOne10" data-bs-parent="#accordionExample2">
                                  <div className="accordion-body">
                                    <form action="#">
                                      <div className="check-field-wrap">
                                        <div className="form-group">
                                          <input type="checkbox" id="47"/>
                                          <label htmlFor="47">Web development <span>574</span></label>
                                        </div>
                                        <div className="form-group">
                                          <input type="checkbox" id="48"/>
                                          <label htmlFor="48">Data Science <span>568</span></label>
                                        </div>
                                      </div>
                                    </form>
                                  </div>
                                </div>
                              </div>
                              <div className="accordion-item">
                                <h2 className="accordion-header" id="headingOne11">
                                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                          data-bs-target="#collapseOne11" aria-expanded="true"
                                          aria-controls="collapseOne11">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                      <path
                                          d="M21.1365 12H18.1365C17.7387 12 17.3571 12.158 17.0758 12.4393C16.7945 12.7207 16.6365 13.1022 16.6365 13.5V17.25C16.6365 17.6478 16.7945 18.0294 17.0758 18.3107C17.3571 18.592 17.7387 18.75 18.1365 18.75H19.6365C20.0343 18.75 20.4158 18.592 20.6971 18.3107C20.9784 18.0294 21.1365 17.6478 21.1365 17.25V12ZM21.1365 12C21.1365 10.8124 20.9014 9.63647 20.4449 8.5401C19.9883 7.44373 19.3192 6.44856 18.4763 5.61196C17.6333 4.77536 16.6331 4.11388 15.5333 3.66564C14.4335 3.21739 13.2558 2.99125 12.0682 3.00026C10.8806 2.99125 9.70299 3.21739 8.60319 3.66564C7.50339 4.11388 6.50318 4.77536 5.66021 5.61196C4.81725 6.44856 4.1482 7.44373 3.69163 8.5401C3.23506 9.63647 3 10.8124 3 12V17.25C3 17.6478 3.15804 18.0294 3.43934 18.3107C3.72064 18.592 4.10218 18.75 4.5 18.75H6C6.39782 18.75 6.77936 18.592 7.06066 18.3107C7.34196 18.0294 7.5 17.6478 7.5 17.25V13.5C7.5 13.1022 7.34196 12.7207 7.06066 12.4393C6.77936 12.158 6.39782 12 6 12H3"
                                          stroke="#A1A5B3"/>
                                      <path
                                          d="M21.1365 17.25V19.5C21.1365 20.2956 20.8204 21.0587 20.2578 21.6213C19.6952 22.1839 18.9321 22.5 18.1365 22.5H12.75"
                                          stroke="#A1A5B3"/>
                                    </svg>
                                    Music
                                  </button>
                                </h2>
                                <div id="collapseOne11" className="accordion-collapse collapse"
                                     aria-labelledby="headingOne11" data-bs-parent="#accordionExample2">
                                  <div className="accordion-body">
                                    <form action="#">
                                      <div className="check-field-wrap">
                                        <div className="form-group">
                                          <input type="checkbox" id="49"/>
                                          <label htmlFor="49">Web development <span>574</span></label>
                                        </div>
                                        <div className="form-group">
                                          <input type="checkbox" id="50"/>
                                          <label htmlFor="50">Data Science <span>568</span></label>
                                        </div>
                                      </div>
                                    </form>
                                  </div>
                                </div>
                              </div>
                              <div className="accordion-item">
                                <h2 className="accordion-header" id="headingOne12">
                                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                          data-bs-target="#collapseOne12" aria-expanded="true"
                                          aria-controls="collapseOne12">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                      <path
                                          d="M20.25 6.75H3.75C3.33579 6.75 3 7.08579 3 7.5V19.5C3 19.9142 3.33579 20.25 3.75 20.25H20.25C20.6642 20.25 21 19.9142 21 19.5V7.5C21 7.08579 20.6642 6.75 20.25 6.75Z"
                                          stroke="#A1A5B3"/>
                                      <path
                                          d="M15.75 6.75V5.25C15.75 4.85218 15.592 4.47064 15.3107 4.18934C15.0294 3.90804 14.6478 3.75 14.25 3.75H9.75C9.35218 3.75 8.97064 3.90804 8.68934 4.18934C8.40804 4.47064 8.25 4.85218 8.25 5.25V6.75"
                                          stroke="#A1A5B3"/>
                                      <path d="M12 10.875V16.125" stroke="#A1A5B3"/>
                                      <path d="M14.625 13.5H9.375" stroke="#A1A5B3"/>
                                    </svg>
                                    Health & Fitness
                                  </button>
                                </h2>
                                <div id="collapseOne12" className="accordion-collapse collapse"
                                     aria-labelledby="headingOne12" data-bs-parent="#accordionExample2">
                                  <div className="accordion-body">
                                    <form action="#">
                                      <div className="check-field-wrap">
                                        <div className="form-group">
                                          <input type="checkbox" id="100"/>
                                          <label htmlFor="100">Web development <span>574</span></label>
                                        </div>
                                        <div className="form-group">
                                          <input type="checkbox" id="99"/>
                                          <label htmlFor="99">Data Science <span>568</span></label>
                                        </div>
                                      </div>
                                    </form>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="colurse-sidebar-item">
                    <div className="accordion" id="accordionExample3">
                      <div className="accordion-item main-item">
                        <h2 className="accordion-header" id="headingOne02">
                          <button className="accordion-button header-btn collapsed" type="button"
                                  data-bs-toggle="collapse" data-bs-target="#collapseOne02" aria-expanded="true"
                                  aria-controls="collapseOne02">
                            Tools
                          </button>
                        </h2>
                        <div id="collapseOne02" className="accordion-collapse collapse" aria-labelledby="headingOne02"
                             data-bs-parent="#accordionExample3">
                          <div className="accordion-body border_top">
                            <form action="#">
                              <div className="check-field-wrap">
                                <div className="form-group">
                                  <input type="checkbox" id="51"/>
                                  <label htmlFor="51">HTML 5 <span>568</span></label>
                                </div>
                                <div className="form-group">
                                  <input type="checkbox" id="52"/>
                                  <label htmlFor="52">CSS 3 <span>1345</span></label>
                                </div>
                                <div className="form-group">
                                  <input type="checkbox" id="53"/>
                                  <label htmlFor="53">React <span>317</span></label>
                                </div>
                                <div className="form-group">
                                  <input type="checkbox" id="54"/>
                                  <label htmlFor="54">Webflow <span>574</span></label>
                                </div>
                                <div className="form-group">
                                  <input type="checkbox" id="55"/>
                                  <label htmlFor="55">Node.js<span>558 </span></label>
                                </div>
                                <div className="form-group">
                                  <input type="checkbox" id="56"/>
                                  <label htmlFor="56">Laravel<span>558 </span></label>
                                </div>
                                <div className="form-group">
                                  <input type="checkbox" id="57"/>
                                  <label htmlFor="57">Saas<span>558 </span></label>
                                </div>
                                <div className="form-group">
                                  <input type="checkbox" id="58"/>
                                  <label htmlFor="58">Wordpress<span>558 </span></label>
                                </div>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="colurse-sidebar-item">
                    <div className="accordion" id="accordionExample4">
                      <div className="accordion-item main-item">
                        <h2 className="accordion-header" id="headingOne03">
                          <button className="accordion-button header-btn collapsed" type="button"
                                  data-bs-toggle="collapse" data-bs-target="#collapseOne03" aria-expanded="true"
                                  aria-controls="collapseOne03">
                            Rating
                          </button>
                        </h2>
                        <div id="collapseOne03" className="accordion-collapse collapse" aria-labelledby="headingOne03"
                             data-bs-parent="#accordionExample4">
                          <div className="accordion-body border_top">
                            <form action="#">
                              <div className="check-field-wrap">
                                <div className="form-group">
                                  <input type="checkbox" id="59"/>
                                  <label htmlFor="59">
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                      <path
                                          d="M8.27569 11.9208L11.4279 13.9179C11.8308 14.1732 12.3311 13.7935 12.2115 13.3232L11.3008 9.74052C11.2752 9.64073 11.2782 9.53573 11.3096 9.4376C11.3409 9.33946 11.3994 9.25218 11.4781 9.18577L14.3049 6.83306C14.6763 6.52392 14.4846 5.90751 14.0074 5.87654L10.3159 5.63696C10.2165 5.62986 10.1211 5.59465 10.0409 5.53545C9.96069 5.47625 9.89896 5.39548 9.86289 5.30255L8.48612 1.83549C8.44869 1.73685 8.38215 1.65194 8.29532 1.59201C8.2085 1.53209 8.1055 1.5 8 1.5C7.89451 1.5 7.79151 1.53209 7.70468 1.59201C7.61786 1.65194 7.55131 1.73685 7.51389 1.83549L6.13712 5.30255C6.10104 5.39548 6.03932 5.47625 5.95912 5.53545C5.87892 5.59465 5.78355 5.62986 5.68412 5.63696L1.99263 5.87654C1.51544 5.90751 1.32373 6.52392 1.69515 6.83306L4.52186 9.18577C4.60063 9.25218 4.65907 9.33946 4.69044 9.4376C4.72181 9.53573 4.72485 9.64073 4.6992 9.74052L3.85459 13.063C3.71111 13.6274 4.31143 14.083 4.79495 13.7767L7.72431 11.9208C7.8067 11.8683 7.90234 11.8405 8 11.8405C8.09767 11.8405 8.19331 11.8683 8.27569 11.9208Z"
                                          fill="#FD8E1F"/>
                                    </svg>
                                    5 Star <span>568</span>
                                  </label>
                                </div>
                                <div className="form-group">
                                  <input type="checkbox" id="60"/>
                                  <label htmlFor="60">
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                      <path
                                          d="M8.27569 11.9208L11.4279 13.9179C11.8308 14.1732 12.3311 13.7935 12.2115 13.3232L11.3008 9.74052C11.2752 9.64073 11.2782 9.53573 11.3096 9.4376C11.3409 9.33946 11.3994 9.25218 11.4781 9.18577L14.3049 6.83306C14.6763 6.52392 14.4846 5.90751 14.0074 5.87654L10.3159 5.63696C10.2165 5.62986 10.1211 5.59465 10.0409 5.53545C9.96069 5.47625 9.89896 5.39548 9.86289 5.30255L8.48612 1.83549C8.44869 1.73685 8.38215 1.65194 8.29532 1.59201C8.2085 1.53209 8.1055 1.5 8 1.5C7.89451 1.5 7.79151 1.53209 7.70468 1.59201C7.61786 1.65194 7.55131 1.73685 7.51389 1.83549L6.13712 5.30255C6.10104 5.39548 6.03932 5.47625 5.95912 5.53545C5.87892 5.59465 5.78355 5.62986 5.68412 5.63696L1.99263 5.87654C1.51544 5.90751 1.32373 6.52392 1.69515 6.83306L4.52186 9.18577C4.60063 9.25218 4.65907 9.33946 4.69044 9.4376C4.72181 9.53573 4.72485 9.64073 4.6992 9.74052L3.85459 13.063C3.71111 13.6274 4.31143 14.083 4.79495 13.7767L7.72431 11.9208C7.8067 11.8683 7.90234 11.8405 8 11.8405C8.09767 11.8405 8.19331 11.8683 8.27569 11.9208Z"
                                          fill="#FD8E1F"/>
                                    </svg>
                                    4 Star & up <span>568</span>
                                  </label>
                                </div>
                                <div className="form-group">
                                  <input type="checkbox" id="61"/>
                                  <label htmlFor="61">
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                      <path
                                          d="M8.27569 11.9208L11.4279 13.9179C11.8308 14.1732 12.3311 13.7935 12.2115 13.3232L11.3008 9.74052C11.2752 9.64073 11.2782 9.53573 11.3096 9.4376C11.3409 9.33946 11.3994 9.25218 11.4781 9.18577L14.3049 6.83306C14.6763 6.52392 14.4846 5.90751 14.0074 5.87654L10.3159 5.63696C10.2165 5.62986 10.1211 5.59465 10.0409 5.53545C9.96069 5.47625 9.89896 5.39548 9.86289 5.30255L8.48612 1.83549C8.44869 1.73685 8.38215 1.65194 8.29532 1.59201C8.2085 1.53209 8.1055 1.5 8 1.5C7.89451 1.5 7.79151 1.53209 7.70468 1.59201C7.61786 1.65194 7.55131 1.73685 7.51389 1.83549L6.13712 5.30255C6.10104 5.39548 6.03932 5.47625 5.95912 5.53545C5.87892 5.59465 5.78355 5.62986 5.68412 5.63696L1.99263 5.87654C1.51544 5.90751 1.32373 6.52392 1.69515 6.83306L4.52186 9.18577C4.60063 9.25218 4.65907 9.33946 4.69044 9.4376C4.72181 9.53573 4.72485 9.64073 4.6992 9.74052L3.85459 13.063C3.71111 13.6274 4.31143 14.083 4.79495 13.7767L7.72431 11.9208C7.8067 11.8683 7.90234 11.8405 8 11.8405C8.09767 11.8405 8.19331 11.8683 8.27569 11.9208Z"
                                          fill="#FD8E1F"/>
                                    </svg>
                                    3 Star & up <span>568</span>
                                  </label>
                                </div>
                                <div className="form-group">
                                  <input type="checkbox" id="62"/>
                                  <label htmlFor="62">
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                      <path
                                          d="M8.27569 11.9208L11.4279 13.9179C11.8308 14.1732 12.3311 13.7935 12.2115 13.3232L11.3008 9.74052C11.2752 9.64073 11.2782 9.53573 11.3096 9.4376C11.3409 9.33946 11.3994 9.25218 11.4781 9.18577L14.3049 6.83306C14.6763 6.52392 14.4846 5.90751 14.0074 5.87654L10.3159 5.63696C10.2165 5.62986 10.1211 5.59465 10.0409 5.53545C9.96069 5.47625 9.89896 5.39548 9.86289 5.30255L8.48612 1.83549C8.44869 1.73685 8.38215 1.65194 8.29532 1.59201C8.2085 1.53209 8.1055 1.5 8 1.5C7.89451 1.5 7.79151 1.53209 7.70468 1.59201C7.61786 1.65194 7.55131 1.73685 7.51389 1.83549L6.13712 5.30255C6.10104 5.39548 6.03932 5.47625 5.95912 5.53545C5.87892 5.59465 5.78355 5.62986 5.68412 5.63696L1.99263 5.87654C1.51544 5.90751 1.32373 6.52392 1.69515 6.83306L4.52186 9.18577C4.60063 9.25218 4.65907 9.33946 4.69044 9.4376C4.72181 9.53573 4.72485 9.64073 4.6992 9.74052L3.85459 13.063C3.71111 13.6274 4.31143 14.083 4.79495 13.7767L7.72431 11.9208C7.8067 11.8683 7.90234 11.8405 8 11.8405C8.09767 11.8405 8.19331 11.8683 8.27569 11.9208Z"
                                          fill="#FD8E1F"/>
                                    </svg>
                                    2 Star & up <span>568</span>
                                  </label>
                                </div>
                                <div className="form-group">
                                  <input type="checkbox" id="63"/>
                                  <label htmlFor="63">
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                      <path
                                          d="M8.27569 11.9208L11.4279 13.9179C11.8308 14.1732 12.3311 13.7935 12.2115 13.3232L11.3008 9.74052C11.2752 9.64073 11.2782 9.53573 11.3096 9.4376C11.3409 9.33946 11.3994 9.25218 11.4781 9.18577L14.3049 6.83306C14.6763 6.52392 14.4846 5.90751 14.0074 5.87654L10.3159 5.63696C10.2165 5.62986 10.1211 5.59465 10.0409 5.53545C9.96069 5.47625 9.89896 5.39548 9.86289 5.30255L8.48612 1.83549C8.44869 1.73685 8.38215 1.65194 8.29532 1.59201C8.2085 1.53209 8.1055 1.5 8 1.5C7.89451 1.5 7.79151 1.53209 7.70468 1.59201C7.61786 1.65194 7.55131 1.73685 7.51389 1.83549L6.13712 5.30255C6.10104 5.39548 6.03932 5.47625 5.95912 5.53545C5.87892 5.59465 5.78355 5.62986 5.68412 5.63696L1.99263 5.87654C1.51544 5.90751 1.32373 6.52392 1.69515 6.83306L4.52186 9.18577C4.60063 9.25218 4.65907 9.33946 4.69044 9.4376C4.72181 9.53573 4.72485 9.64073 4.6992 9.74052L3.85459 13.063C3.71111 13.6274 4.31143 14.083 4.79495 13.7767L7.72431 11.9208C7.8067 11.8683 7.90234 11.8405 8 11.8405C8.09767 11.8405 8.19331 11.8683 8.27569 11.9208Z"
                                          fill="#FD8E1F"/>
                                    </svg>
                                    1 Star & up <span>568</span>
                                  </label>
                                </div>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="colurse-sidebar-item">
                    <div className="accordion" id="accordionExample5">
                      <div className="accordion-item main-item">
                        <h2 className="accordion-header" id="headingOne04">
                          <button className="accordion-button header-btn collapsed" type="button"
                                  data-bs-toggle="collapse" data-bs-target="#collapseOne04" aria-expanded="true"
                                  aria-controls="collapseOne04">
                            Course level
                          </button>
                        </h2>
                        <div id="collapseOne04" className="accordion-collapse collapse" aria-labelledby="headingOne04"
                             data-bs-parent="#accordionExample5">
                          <div className="accordion-body border_top">
                            <form action="#">
                              <div className="check-field-wrap">
                                <div className="form-group">
                                  <input type="checkbox" id="64"/>
                                  <label htmlFor="64">All Level <span>568</span></label>
                                </div>
                                <div className="form-group">
                                  <input type="checkbox" id="65"/>
                                  <label htmlFor="65">Beginner <span>568</span></label>
                                </div>
                                <div className="form-group">
                                  <input type="checkbox" id="66"/>
                                  <label htmlFor="66">Intermediate <span>568</span></label>
                                </div>
                                <div className="form-group">
                                  <input type="checkbox" id="67"/>
                                  <label htmlFor="67">Expert <span>568</span></label>
                                </div>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="colurse-sidebar-item">
                    <div className="accordion" id="accordionExample6">
                      <div className="accordion-item main-item">
                        <h2 className="accordion-header" id="headingOne05">
                          <button className="accordion-button header-btn collapsed" type="button"
                                  data-bs-toggle="collapse" data-bs-target="#collapseOne05" aria-expanded="true"
                                  aria-controls="collapseOne05">
                            Price
                          </button>
                        </h2>
                        <div id="collapseOne05" className="accordion-collapse collapse" aria-labelledby="headingOne05"
                             data-bs-parent="#accordionExample6">
                          <div className="accordion-body border_top">
                            <form action="#">
                              <div className="range-middle">
                                <div className="multi-range-slider">
                                  <input type="range" id="input-left" min="0" max="100" value="25"/>
                                  <input type="range" id="input-right" min="0" max="100" value="75"/>
                                  <div className="slider">
                                    <div className="track"></div>
                                    <div className="range"></div>
                                    <div className="thumb left"></div>
                                    <div className="thumb right"></div>
                                  </div>
                                </div>
                              </div>
                              <div className="price-field-wrap">
                                <div className="default-input-field">
                                  <input type="text" placeholder="min:"/>
                                  <div className="dollar">
                                    $
                                  </div>
                                </div>
                                <div className="default-input-field">
                                  <input type="text" placeholder="min:"/>
                                  <div className="dollar">
                                    $
                                  </div>
                                </div>
                              </div>
                              <div className="check-field-wrap">
                                <div className="form-group">
                                  <input type="checkbox" id="68"/>
                                  <label htmlFor="68">Paid <span>568</span></label>
                                </div>
                                <div className="form-group">
                                  <input type="checkbox" id="69"/>
                                  <label htmlFor="69">Free <span>568</span></label>
                                </div>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="colurse-sidebar-item">
                    <div className="accordion" id="accordionExample7">
                      <div className="accordion-item main-item">
                        <h2 className="accordion-header" id="headingOne06">
                          <button className="accordion-button header-btn collapsed" type="button"
                                  data-bs-toggle="collapse" data-bs-target="#collapseOne06" aria-expanded="true"
                                  aria-controls="collapseOne06">
                            Duration
                          </button>
                        </h2>
                        <div id="collapseOne06" className="accordion-collapse collapse" aria-labelledby="headingOne06"
                             data-bs-parent="#accordionExample7">
                          <div className="accordion-body border_top">
                            <form action="#">
                              <div className="check-field-wrap">
                                <div className="form-group">
                                  <input type="checkbox" id="70"/>
                                  <label htmlFor="70">6-12 Months <span>568</span></label>
                                </div>
                                <div className="form-group">
                                  <input type="checkbox" id="71"/>
                                  <label htmlFor="71">3-6 Months <span>568</span></label>
                                </div>
                                <div className="form-group">
                                  <input type="checkbox" id="72"/>
                                  <label htmlFor="72">1-3 Months <span>568</span></label>
                                </div>
                                <div className="form-group">
                                  <input type="checkbox" id="73"/>
                                  <label htmlFor="73">1-4 Weeks <span>568</span></label>
                                </div>
                                <div className="form-group">
                                  <input type="checkbox" id="74"/>
                                  <label htmlFor="74">1-7 Days <span>568</span></label>
                                </div>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-9">
                <div className="row shop__product-items">
                  <div className="col-md-6 col-xl-4">
                    <div className="course-item-4">
                      <div className="course-item-5-card">
                        <a href="single-course.html" className="course-item-5-card-img"><img
                            src={course1} alt=""/></a>
                        <div className="course-item-5-card-info">
                          <button className="course-item-5-card-info-tag">Design</button>
                          <p className="course-item-5-card-info-price">$57</p>
                        </div>
                        <a href="single-course.html" className="course-item-5-card-head">The Python Mega Course: Build
                          10 Real World Applications</a>
                        <div className="course-item-5-card-footer">
                          <p className="course-item-5-card-footer-review align-self-center">
                            <svg width="14" height="13" viewBox="0 0 14 13" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                              <path
                                  d="M7.27569 10.9208L10.4279 12.9179C10.8308 13.1732 11.3311 12.7935 11.2115 12.3232L10.3008 8.74052C10.2752 8.64073 10.2782 8.53573 10.3096 8.4376C10.3409 8.33946 10.3994 8.25218 10.4781 8.18577L13.3049 5.83306C13.6763 5.52392 13.4846 4.90751 13.0074 4.87654L9.31588 4.63696C9.21645 4.62986 9.12109 4.59465 9.04089 4.53545C8.96069 4.47625 8.89896 4.39548 8.86289 4.30255L7.48612 0.835486C7.44869 0.736852 7.38215 0.651935 7.29532 0.592013C7.2085 0.532092 7.1055 0.5 7 0.5C6.89451 0.5 6.79151 0.532092 6.70468 0.592013C6.61786 0.651935 6.55131 0.736852 6.51389 0.835486L5.13712 4.30255C5.10104 4.39548 5.03932 4.47625 4.95912 4.53545C4.87892 4.59465 4.78355 4.62986 4.68412 4.63696L0.992627 4.87654C0.515435 4.90751 0.323731 5.52392 0.695149 5.83306L3.52186 8.18577C3.60063 8.25218 3.65907 8.33946 3.69044 8.4376C3.72181 8.53573 3.72485 8.64073 3.6992 8.74052L2.85459 12.063C2.71111 12.6274 3.31143 13.083 3.79495 12.7767L6.72431 10.9208C6.8067 10.8683 6.90234 10.8405 7 10.8405C7.09767 10.8405 7.19331 10.8683 7.27569 10.9208Z"
                                  fill="#FD8E1F"/>
                            </svg>
                            5.0
                          </p>
                          <p className="course-item-5-card-footer-student">265.7K <span>students</span></p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-xl-4">
                    <div className="course-item-4">
                      <div className="course-item-5-card">
                        <a href="single-course.html" className="course-item-5-card-img"><img
                            src={course2} alt=""/></a>
                        <div className="course-item-5-card-info">
                          <button className="course-item-5-card-info-tag tag-color2">Developments</button>
                          <p className="course-item-5-card-info-price">$57</p>
                        </div>
                        <a href="single-course.html" className="course-item-5-card-head">Facebook Ads & Facebook
                          Marketing MASTERY 2021 Cours...</a>
                        <div className="course-item-5-card-footer">
                          <p className="course-item-5-card-footer-review align-self-center">
                            <svg width="14" height="13" viewBox="0 0 14 13" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                              <path
                                  d="M7.27569 10.9208L10.4279 12.9179C10.8308 13.1732 11.3311 12.7935 11.2115 12.3232L10.3008 8.74052C10.2752 8.64073 10.2782 8.53573 10.3096 8.4376C10.3409 8.33946 10.3994 8.25218 10.4781 8.18577L13.3049 5.83306C13.6763 5.52392 13.4846 4.90751 13.0074 4.87654L9.31588 4.63696C9.21645 4.62986 9.12109 4.59465 9.04089 4.53545C8.96069 4.47625 8.89896 4.39548 8.86289 4.30255L7.48612 0.835486C7.44869 0.736852 7.38215 0.651935 7.29532 0.592013C7.2085 0.532092 7.1055 0.5 7 0.5C6.89451 0.5 6.79151 0.532092 6.70468 0.592013C6.61786 0.651935 6.55131 0.736852 6.51389 0.835486L5.13712 4.30255C5.10104 4.39548 5.03932 4.47625 4.95912 4.53545C4.87892 4.59465 4.78355 4.62986 4.68412 4.63696L0.992627 4.87654C0.515435 4.90751 0.323731 5.52392 0.695149 5.83306L3.52186 8.18577C3.60063 8.25218 3.65907 8.33946 3.69044 8.4376C3.72181 8.53573 3.72485 8.64073 3.6992 8.74052L2.85459 12.063C2.71111 12.6274 3.31143 13.083 3.79495 12.7767L6.72431 10.9208C6.8067 10.8683 6.90234 10.8405 7 10.8405C7.09767 10.8405 7.19331 10.8683 7.27569 10.9208Z"
                                  fill="#FD8E1F"/>
                            </svg>
                            5.0
                          </p>
                          <p className="course-item-5-card-footer-student">265.7K <span>students</span></p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-xl-4">
                    <div className="course-item-4">
                      <div className="course-item-5-card">
                        <a href="single-course.html" className="course-item-5-card-img"><img
                            src={course3} alt=""/></a>
                        <div className="course-item-5-card-info">
                          <button className="course-item-5-card-info-tag tag-color3">Business</button>
                          <p className="course-item-5-card-info-price">$57</p>
                        </div>
                        <a href="single-course.html" className="course-item-5-card-head">2021 Complete Python Bootcamp
                          From Zero to Hero in Python</a>
                        <div className="course-item-5-card-footer">
                          <p className="course-item-5-card-footer-review align-self-center">
                            <svg width="14" height="13" viewBox="0 0 14 13" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                              <path
                                  d="M7.27569 10.9208L10.4279 12.9179C10.8308 13.1732 11.3311 12.7935 11.2115 12.3232L10.3008 8.74052C10.2752 8.64073 10.2782 8.53573 10.3096 8.4376C10.3409 8.33946 10.3994 8.25218 10.4781 8.18577L13.3049 5.83306C13.6763 5.52392 13.4846 4.90751 13.0074 4.87654L9.31588 4.63696C9.21645 4.62986 9.12109 4.59465 9.04089 4.53545C8.96069 4.47625 8.89896 4.39548 8.86289 4.30255L7.48612 0.835486C7.44869 0.736852 7.38215 0.651935 7.29532 0.592013C7.2085 0.532092 7.1055 0.5 7 0.5C6.89451 0.5 6.79151 0.532092 6.70468 0.592013C6.61786 0.651935 6.55131 0.736852 6.51389 0.835486L5.13712 4.30255C5.10104 4.39548 5.03932 4.47625 4.95912 4.53545C4.87892 4.59465 4.78355 4.62986 4.68412 4.63696L0.992627 4.87654C0.515435 4.90751 0.323731 5.52392 0.695149 5.83306L3.52186 8.18577C3.60063 8.25218 3.65907 8.33946 3.69044 8.4376C3.72181 8.53573 3.72485 8.64073 3.6992 8.74052L2.85459 12.063C2.71111 12.6274 3.31143 13.083 3.79495 12.7767L6.72431 10.9208C6.8067 10.8683 6.90234 10.8405 7 10.8405C7.09767 10.8405 7.19331 10.8683 7.27569 10.9208Z"
                                  fill="#FD8E1F"/>
                            </svg>
                            5.0
                          </p>
                          <p className="course-item-5-card-footer-student">265.7K <span>students</span></p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-xl-4">
                    <div className="course-item-4">
                      <div className="course-item-5-card">
                        <a href="single-course.html" className="course-item-5-card-img"><img
                            src={course4} alt=""/></a>
                        <div className="course-item-5-card-info">
                          <button className="course-item-5-card-info-tag tag-color2">Marketing</button>
                          <p className="course-item-5-card-info-price">$57</p>
                        </div>
                        <a href="single-course.html" className="course-item-5-card-head">The Complete Digital Marketing
                          Course - 12 Courses in 1</a>
                        <div className="course-item-5-card-footer">
                          <p className="course-item-5-card-footer-review align-self-center">
                            <svg width="14" height="13" viewBox="0 0 14 13" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                              <path
                                  d="M7.27569 10.9208L10.4279 12.9179C10.8308 13.1732 11.3311 12.7935 11.2115 12.3232L10.3008 8.74052C10.2752 8.64073 10.2782 8.53573 10.3096 8.4376C10.3409 8.33946 10.3994 8.25218 10.4781 8.18577L13.3049 5.83306C13.6763 5.52392 13.4846 4.90751 13.0074 4.87654L9.31588 4.63696C9.21645 4.62986 9.12109 4.59465 9.04089 4.53545C8.96069 4.47625 8.89896 4.39548 8.86289 4.30255L7.48612 0.835486C7.44869 0.736852 7.38215 0.651935 7.29532 0.592013C7.2085 0.532092 7.1055 0.5 7 0.5C6.89451 0.5 6.79151 0.532092 6.70468 0.592013C6.61786 0.651935 6.55131 0.736852 6.51389 0.835486L5.13712 4.30255C5.10104 4.39548 5.03932 4.47625 4.95912 4.53545C4.87892 4.59465 4.78355 4.62986 4.68412 4.63696L0.992627 4.87654C0.515435 4.90751 0.323731 5.52392 0.695149 5.83306L3.52186 8.18577C3.60063 8.25218 3.65907 8.33946 3.69044 8.4376C3.72181 8.53573 3.72485 8.64073 3.6992 8.74052L2.85459 12.063C2.71111 12.6274 3.31143 13.083 3.79495 12.7767L6.72431 10.9208C6.8067 10.8683 6.90234 10.8405 7 10.8405C7.09767 10.8405 7.19331 10.8683 7.27569 10.9208Z"
                                  fill="#FD8E1F"/>
                            </svg>
                            5.0
                          </p>
                          <p className="course-item-5-card-footer-student">265.7K <span>students</span></p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-xl-4">
                    <div className="course-item-4">
                      <div className="course-item-5-card">
                        <a href="single-course.html" className="course-item-5-card-img"><img
                            src={course1} alt=""/></a>
                        <div className="course-item-5-card-info">
                          <button className="course-item-5-card-info-tag">Design</button>
                          <p className="course-item-5-card-info-price">$57</p>
                        </div>
                        <a href="single-course.html" className="course-item-5-card-head">The Python Mega Course: Build
                          10 Real World Applications</a>
                        <div className="course-item-5-card-footer">
                          <p className="course-item-5-card-footer-review align-self-center">
                            <svg width="14" height="13" viewBox="0 0 14 13" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                              <path
                                  d="M7.27569 10.9208L10.4279 12.9179C10.8308 13.1732 11.3311 12.7935 11.2115 12.3232L10.3008 8.74052C10.2752 8.64073 10.2782 8.53573 10.3096 8.4376C10.3409 8.33946 10.3994 8.25218 10.4781 8.18577L13.3049 5.83306C13.6763 5.52392 13.4846 4.90751 13.0074 4.87654L9.31588 4.63696C9.21645 4.62986 9.12109 4.59465 9.04089 4.53545C8.96069 4.47625 8.89896 4.39548 8.86289 4.30255L7.48612 0.835486C7.44869 0.736852 7.38215 0.651935 7.29532 0.592013C7.2085 0.532092 7.1055 0.5 7 0.5C6.89451 0.5 6.79151 0.532092 6.70468 0.592013C6.61786 0.651935 6.55131 0.736852 6.51389 0.835486L5.13712 4.30255C5.10104 4.39548 5.03932 4.47625 4.95912 4.53545C4.87892 4.59465 4.78355 4.62986 4.68412 4.63696L0.992627 4.87654C0.515435 4.90751 0.323731 5.52392 0.695149 5.83306L3.52186 8.18577C3.60063 8.25218 3.65907 8.33946 3.69044 8.4376C3.72181 8.53573 3.72485 8.64073 3.6992 8.74052L2.85459 12.063C2.71111 12.6274 3.31143 13.083 3.79495 12.7767L6.72431 10.9208C6.8067 10.8683 6.90234 10.8405 7 10.8405C7.09767 10.8405 7.19331 10.8683 7.27569 10.9208Z"
                                  fill="#FD8E1F"/>
                            </svg>
                            5.0
                          </p>
                          <p className="course-item-5-card-footer-student">265.7K <span>students</span></p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-xl-4">
                    <div className="course-item-4">
                      <div className="course-item-5-card">
                        <a href="single-course.html" className="course-item-5-card-img"><img
                            src={course2} alt=""/></a>
                        <div className="course-item-5-card-info">
                          <button className="course-item-5-card-info-tag tag-color2">Developments</button>
                          <p className="course-item-5-card-info-price">$57</p>
                        </div>
                        <a href="single-course.html" className="course-item-5-card-head">Facebook Ads & Facebook
                          Marketing MASTERY 2021 Cours...</a>
                        <div className="course-item-5-card-footer">
                          <p className="course-item-5-card-footer-review align-self-center">
                            <svg width="14" height="13" viewBox="0 0 14 13" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                              <path
                                  d="M7.27569 10.9208L10.4279 12.9179C10.8308 13.1732 11.3311 12.7935 11.2115 12.3232L10.3008 8.74052C10.2752 8.64073 10.2782 8.53573 10.3096 8.4376C10.3409 8.33946 10.3994 8.25218 10.4781 8.18577L13.3049 5.83306C13.6763 5.52392 13.4846 4.90751 13.0074 4.87654L9.31588 4.63696C9.21645 4.62986 9.12109 4.59465 9.04089 4.53545C8.96069 4.47625 8.89896 4.39548 8.86289 4.30255L7.48612 0.835486C7.44869 0.736852 7.38215 0.651935 7.29532 0.592013C7.2085 0.532092 7.1055 0.5 7 0.5C6.89451 0.5 6.79151 0.532092 6.70468 0.592013C6.61786 0.651935 6.55131 0.736852 6.51389 0.835486L5.13712 4.30255C5.10104 4.39548 5.03932 4.47625 4.95912 4.53545C4.87892 4.59465 4.78355 4.62986 4.68412 4.63696L0.992627 4.87654C0.515435 4.90751 0.323731 5.52392 0.695149 5.83306L3.52186 8.18577C3.60063 8.25218 3.65907 8.33946 3.69044 8.4376C3.72181 8.53573 3.72485 8.64073 3.6992 8.74052L2.85459 12.063C2.71111 12.6274 3.31143 13.083 3.79495 12.7767L6.72431 10.9208C6.8067 10.8683 6.90234 10.8405 7 10.8405C7.09767 10.8405 7.19331 10.8683 7.27569 10.9208Z"
                                  fill="#FD8E1F"/>
                            </svg>
                            5.0
                          </p>
                          <p className="course-item-5-card-footer-student">265.7K <span>students</span></p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-xl-4">
                    <div className="course-item-4">
                      <div className="course-item-5-card">
                        <a href="single-course.html" className="course-item-5-card-img"><img
                            src={course3} alt=""/></a>
                        <div className="course-item-5-card-info">
                          <button className="course-item-5-card-info-tag tag-color3">Business</button>
                          <p className="course-item-5-card-info-price">$57</p>
                        </div>
                        <a href="single-course.html" className="course-item-5-card-head">2021 Complete Python Bootcamp
                          From Zero to Hero in Python</a>
                        <div className="course-item-5-card-footer">
                          <p className="course-item-5-card-footer-review align-self-center">
                            <svg width="14" height="13" viewBox="0 0 14 13" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                              <path
                                  d="M7.27569 10.9208L10.4279 12.9179C10.8308 13.1732 11.3311 12.7935 11.2115 12.3232L10.3008 8.74052C10.2752 8.64073 10.2782 8.53573 10.3096 8.4376C10.3409 8.33946 10.3994 8.25218 10.4781 8.18577L13.3049 5.83306C13.6763 5.52392 13.4846 4.90751 13.0074 4.87654L9.31588 4.63696C9.21645 4.62986 9.12109 4.59465 9.04089 4.53545C8.96069 4.47625 8.89896 4.39548 8.86289 4.30255L7.48612 0.835486C7.44869 0.736852 7.38215 0.651935 7.29532 0.592013C7.2085 0.532092 7.1055 0.5 7 0.5C6.89451 0.5 6.79151 0.532092 6.70468 0.592013C6.61786 0.651935 6.55131 0.736852 6.51389 0.835486L5.13712 4.30255C5.10104 4.39548 5.03932 4.47625 4.95912 4.53545C4.87892 4.59465 4.78355 4.62986 4.68412 4.63696L0.992627 4.87654C0.515435 4.90751 0.323731 5.52392 0.695149 5.83306L3.52186 8.18577C3.60063 8.25218 3.65907 8.33946 3.69044 8.4376C3.72181 8.53573 3.72485 8.64073 3.6992 8.74052L2.85459 12.063C2.71111 12.6274 3.31143 13.083 3.79495 12.7767L6.72431 10.9208C6.8067 10.8683 6.90234 10.8405 7 10.8405C7.09767 10.8405 7.19331 10.8683 7.27569 10.9208Z"
                                  fill="#FD8E1F"/>
                            </svg>
                            5.0
                          </p>
                          <p className="course-item-5-card-footer-student">265.7K <span>students</span></p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-xl-4">
                    <div className="course-item-4">
                      <div className="course-item-5-card">
                        <a href="single-course.html" className="course-item-5-card-img"><img
                            src={course4} alt=""/></a>
                        <div className="course-item-5-card-info">
                          <button className="course-item-5-card-info-tag tag-color2">Marketing</button>
                          <p className="course-item-5-card-info-price">$57</p>
                        </div>
                        <a href="single-course.html" className="course-item-5-card-head">The Complete Digital Marketing
                          Course - 12 Courses in 1</a>
                        <div className="course-item-5-card-footer">
                          <p className="course-item-5-card-footer-review align-self-center">
                            <svg width="14" height="13" viewBox="0 0 14 13" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                              <path
                                  d="M7.27569 10.9208L10.4279 12.9179C10.8308 13.1732 11.3311 12.7935 11.2115 12.3232L10.3008 8.74052C10.2752 8.64073 10.2782 8.53573 10.3096 8.4376C10.3409 8.33946 10.3994 8.25218 10.4781 8.18577L13.3049 5.83306C13.6763 5.52392 13.4846 4.90751 13.0074 4.87654L9.31588 4.63696C9.21645 4.62986 9.12109 4.59465 9.04089 4.53545C8.96069 4.47625 8.89896 4.39548 8.86289 4.30255L7.48612 0.835486C7.44869 0.736852 7.38215 0.651935 7.29532 0.592013C7.2085 0.532092 7.1055 0.5 7 0.5C6.89451 0.5 6.79151 0.532092 6.70468 0.592013C6.61786 0.651935 6.55131 0.736852 6.51389 0.835486L5.13712 4.30255C5.10104 4.39548 5.03932 4.47625 4.95912 4.53545C4.87892 4.59465 4.78355 4.62986 4.68412 4.63696L0.992627 4.87654C0.515435 4.90751 0.323731 5.52392 0.695149 5.83306L3.52186 8.18577C3.60063 8.25218 3.65907 8.33946 3.69044 8.4376C3.72181 8.53573 3.72485 8.64073 3.6992 8.74052L2.85459 12.063C2.71111 12.6274 3.31143 13.083 3.79495 12.7767L6.72431 10.9208C6.8067 10.8683 6.90234 10.8405 7 10.8405C7.09767 10.8405 7.19331 10.8683 7.27569 10.9208Z"
                                  fill="#FD8E1F"/>
                            </svg>
                            5.0
                          </p>
                          <p className="course-item-5-card-footer-student">265.7K <span>students</span></p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-xl-4">
                    <div className="course-item-4">
                      <div className="course-item-5-card">
                        <a href="single-course.html" className="course-item-5-card-img"><img
                            src={course1} alt=""/></a>
                        <div className="course-item-5-card-info">
                          <button className="course-item-5-card-info-tag">Design</button>
                          <p className="course-item-5-card-info-price">$57</p>
                        </div>
                        <a href="single-course.html" className="course-item-5-card-head">The Python Mega Course: Build
                          10 Real World Applications</a>
                        <div className="course-item-5-card-footer">
                          <p className="course-item-5-card-footer-review align-self-center">
                            <svg width="14" height="13" viewBox="0 0 14 13" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                              <path
                                  d="M7.27569 10.9208L10.4279 12.9179C10.8308 13.1732 11.3311 12.7935 11.2115 12.3232L10.3008 8.74052C10.2752 8.64073 10.2782 8.53573 10.3096 8.4376C10.3409 8.33946 10.3994 8.25218 10.4781 8.18577L13.3049 5.83306C13.6763 5.52392 13.4846 4.90751 13.0074 4.87654L9.31588 4.63696C9.21645 4.62986 9.12109 4.59465 9.04089 4.53545C8.96069 4.47625 8.89896 4.39548 8.86289 4.30255L7.48612 0.835486C7.44869 0.736852 7.38215 0.651935 7.29532 0.592013C7.2085 0.532092 7.1055 0.5 7 0.5C6.89451 0.5 6.79151 0.532092 6.70468 0.592013C6.61786 0.651935 6.55131 0.736852 6.51389 0.835486L5.13712 4.30255C5.10104 4.39548 5.03932 4.47625 4.95912 4.53545C4.87892 4.59465 4.78355 4.62986 4.68412 4.63696L0.992627 4.87654C0.515435 4.90751 0.323731 5.52392 0.695149 5.83306L3.52186 8.18577C3.60063 8.25218 3.65907 8.33946 3.69044 8.4376C3.72181 8.53573 3.72485 8.64073 3.6992 8.74052L2.85459 12.063C2.71111 12.6274 3.31143 13.083 3.79495 12.7767L6.72431 10.9208C6.8067 10.8683 6.90234 10.8405 7 10.8405C7.09767 10.8405 7.19331 10.8683 7.27569 10.9208Z"
                                  fill="#FD8E1F"/>
                            </svg>
                            5.0
                          </p>
                          <p className="course-item-5-card-footer-student">265.7K <span>students</span></p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-xl-4">
                    <div className="course-item-4">
                      <div className="course-item-5-card">
                        <a href="single-course.html" className="course-item-5-card-img"><img
                            src={course2} alt=""/></a>
                        <div className="course-item-5-card-info">
                          <button className="course-item-5-card-info-tag tag-color2">Developments</button>
                          <p className="course-item-5-card-info-price">$57</p>
                        </div>
                        <a href="single-course.html" className="course-item-5-card-head">Facebook Ads & Facebook
                          Marketing MASTERY 2021 Cours...</a>
                        <div className="course-item-5-card-footer">
                          <p className="course-item-5-card-footer-review align-self-center">
                            <svg width="14" height="13" viewBox="0 0 14 13" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                              <path
                                  d="M7.27569 10.9208L10.4279 12.9179C10.8308 13.1732 11.3311 12.7935 11.2115 12.3232L10.3008 8.74052C10.2752 8.64073 10.2782 8.53573 10.3096 8.4376C10.3409 8.33946 10.3994 8.25218 10.4781 8.18577L13.3049 5.83306C13.6763 5.52392 13.4846 4.90751 13.0074 4.87654L9.31588 4.63696C9.21645 4.62986 9.12109 4.59465 9.04089 4.53545C8.96069 4.47625 8.89896 4.39548 8.86289 4.30255L7.48612 0.835486C7.44869 0.736852 7.38215 0.651935 7.29532 0.592013C7.2085 0.532092 7.1055 0.5 7 0.5C6.89451 0.5 6.79151 0.532092 6.70468 0.592013C6.61786 0.651935 6.55131 0.736852 6.51389 0.835486L5.13712 4.30255C5.10104 4.39548 5.03932 4.47625 4.95912 4.53545C4.87892 4.59465 4.78355 4.62986 4.68412 4.63696L0.992627 4.87654C0.515435 4.90751 0.323731 5.52392 0.695149 5.83306L3.52186 8.18577C3.60063 8.25218 3.65907 8.33946 3.69044 8.4376C3.72181 8.53573 3.72485 8.64073 3.6992 8.74052L2.85459 12.063C2.71111 12.6274 3.31143 13.083 3.79495 12.7767L6.72431 10.9208C6.8067 10.8683 6.90234 10.8405 7 10.8405C7.09767 10.8405 7.19331 10.8683 7.27569 10.9208Z"
                                  fill="#FD8E1F"/>
                            </svg>
                            5.0
                          </p>
                          <p className="course-item-5-card-footer-student">265.7K <span>students</span></p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-xl-4">
                    <div className="course-item-4">
                      <div className="course-item-5-card">
                        <a href="single-course.html" className="course-item-5-card-img"><img
                            src={course3} alt=""/></a>
                        <div className="course-item-5-card-info">
                          <button className="course-item-5-card-info-tag tag-color3">Business</button>
                          <p className="course-item-5-card-info-price">$57</p>
                        </div>
                        <a href="single-course.html" className="course-item-5-card-head">2021 Complete Python Bootcamp
                          From Zero to Hero in Python</a>
                        <div className="course-item-5-card-footer">
                          <p className="course-item-5-card-footer-review align-self-center">
                            <svg width="14" height="13" viewBox="0 0 14 13" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                              <path
                                  d="M7.27569 10.9208L10.4279 12.9179C10.8308 13.1732 11.3311 12.7935 11.2115 12.3232L10.3008 8.74052C10.2752 8.64073 10.2782 8.53573 10.3096 8.4376C10.3409 8.33946 10.3994 8.25218 10.4781 8.18577L13.3049 5.83306C13.6763 5.52392 13.4846 4.90751 13.0074 4.87654L9.31588 4.63696C9.21645 4.62986 9.12109 4.59465 9.04089 4.53545C8.96069 4.47625 8.89896 4.39548 8.86289 4.30255L7.48612 0.835486C7.44869 0.736852 7.38215 0.651935 7.29532 0.592013C7.2085 0.532092 7.1055 0.5 7 0.5C6.89451 0.5 6.79151 0.532092 6.70468 0.592013C6.61786 0.651935 6.55131 0.736852 6.51389 0.835486L5.13712 4.30255C5.10104 4.39548 5.03932 4.47625 4.95912 4.53545C4.87892 4.59465 4.78355 4.62986 4.68412 4.63696L0.992627 4.87654C0.515435 4.90751 0.323731 5.52392 0.695149 5.83306L3.52186 8.18577C3.60063 8.25218 3.65907 8.33946 3.69044 8.4376C3.72181 8.53573 3.72485 8.64073 3.6992 8.74052L2.85459 12.063C2.71111 12.6274 3.31143 13.083 3.79495 12.7767L6.72431 10.9208C6.8067 10.8683 6.90234 10.8405 7 10.8405C7.09767 10.8405 7.19331 10.8683 7.27569 10.9208Z"
                                  fill="#FD8E1F"/>
                            </svg>
                            5.0
                          </p>
                          <p className="course-item-5-card-footer-student">265.7K <span>students</span></p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-xl-4">
                    <div className="course-item-4">
                      <div className="course-item-5-card">
                        <a href="single-course.html" className="course-item-5-card-img"><img
                            src={course4} alt=""/></a>
                        <div className="course-item-5-card-info">
                          <button className="course-item-5-card-info-tag tag-color2">Marketing</button>
                          <p className="course-item-5-card-info-price">$57</p>
                        </div>
                        <a href="single-course.html" className="course-item-5-card-head">The Complete Digital Marketing
                          Course - 12 Courses in 1</a>
                        <div className="course-item-5-card-footer">
                          <p className="course-item-5-card-footer-review align-self-center">
                            <svg width="14" height="13" viewBox="0 0 14 13" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                              <path
                                  d="M7.27569 10.9208L10.4279 12.9179C10.8308 13.1732 11.3311 12.7935 11.2115 12.3232L10.3008 8.74052C10.2752 8.64073 10.2782 8.53573 10.3096 8.4376C10.3409 8.33946 10.3994 8.25218 10.4781 8.18577L13.3049 5.83306C13.6763 5.52392 13.4846 4.90751 13.0074 4.87654L9.31588 4.63696C9.21645 4.62986 9.12109 4.59465 9.04089 4.53545C8.96069 4.47625 8.89896 4.39548 8.86289 4.30255L7.48612 0.835486C7.44869 0.736852 7.38215 0.651935 7.29532 0.592013C7.2085 0.532092 7.1055 0.5 7 0.5C6.89451 0.5 6.79151 0.532092 6.70468 0.592013C6.61786 0.651935 6.55131 0.736852 6.51389 0.835486L5.13712 4.30255C5.10104 4.39548 5.03932 4.47625 4.95912 4.53545C4.87892 4.59465 4.78355 4.62986 4.68412 4.63696L0.992627 4.87654C0.515435 4.90751 0.323731 5.52392 0.695149 5.83306L3.52186 8.18577C3.60063 8.25218 3.65907 8.33946 3.69044 8.4376C3.72181 8.53573 3.72485 8.64073 3.6992 8.74052L2.85459 12.063C2.71111 12.6274 3.31143 13.083 3.79495 12.7767L6.72431 10.9208C6.8067 10.8683 6.90234 10.8405 7 10.8405C7.09767 10.8405 7.19331 10.8683 7.27569 10.9208Z"
                                  fill="#FD8E1F"/>
                            </svg>
                            5.0
                          </p>
                          <p className="course-item-5-card-footer-student">265.7K <span>students</span></p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-xl-4">
                    <div className="course-item-4">
                      <div className="course-item-5-card">
                        <a href="single-course.html" className="course-item-5-card-img"><img
                            src={course3} alt=""/></a>
                        <div className="course-item-5-card-info">
                          <button className="course-item-5-card-info-tag">Design</button>
                          <p className="course-item-5-card-info-price">$57</p>
                        </div>
                        <a href="single-course.html" className="course-item-5-card-head">The Python Mega Course: Build
                          10 Real World Applications</a>
                        <div className="course-item-5-card-footer">
                          <p className="course-item-5-card-footer-review align-self-center">
                            <svg width="14" height="13" viewBox="0 0 14 13" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                              <path
                                  d="M7.27569 10.9208L10.4279 12.9179C10.8308 13.1732 11.3311 12.7935 11.2115 12.3232L10.3008 8.74052C10.2752 8.64073 10.2782 8.53573 10.3096 8.4376C10.3409 8.33946 10.3994 8.25218 10.4781 8.18577L13.3049 5.83306C13.6763 5.52392 13.4846 4.90751 13.0074 4.87654L9.31588 4.63696C9.21645 4.62986 9.12109 4.59465 9.04089 4.53545C8.96069 4.47625 8.89896 4.39548 8.86289 4.30255L7.48612 0.835486C7.44869 0.736852 7.38215 0.651935 7.29532 0.592013C7.2085 0.532092 7.1055 0.5 7 0.5C6.89451 0.5 6.79151 0.532092 6.70468 0.592013C6.61786 0.651935 6.55131 0.736852 6.51389 0.835486L5.13712 4.30255C5.10104 4.39548 5.03932 4.47625 4.95912 4.53545C4.87892 4.59465 4.78355 4.62986 4.68412 4.63696L0.992627 4.87654C0.515435 4.90751 0.323731 5.52392 0.695149 5.83306L3.52186 8.18577C3.60063 8.25218 3.65907 8.33946 3.69044 8.4376C3.72181 8.53573 3.72485 8.64073 3.6992 8.74052L2.85459 12.063C2.71111 12.6274 3.31143 13.083 3.79495 12.7767L6.72431 10.9208C6.8067 10.8683 6.90234 10.8405 7 10.8405C7.09767 10.8405 7.19331 10.8683 7.27569 10.9208Z"
                                  fill="#FD8E1F"/>
                            </svg>
                            5.0
                          </p>
                          <p className="course-item-5-card-footer-student">265.7K <span>students</span></p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-xl-4">
                    <div className="course-item-4">
                      <div className="course-item-5-card">
                        <a href="single-course.html" className="course-item-5-card-img"><img
                            src={course2} alt=""/></a>
                        <div className="course-item-5-card-info">
                          <button className="course-item-5-card-info-tag tag-color2">Developments</button>
                          <p className="course-item-5-card-info-price">$57</p>
                        </div>
                        <a href="single-course.html" className="course-item-5-card-head">Facebook Ads & Facebook
                          Marketing MASTERY 2021 Cours...</a>
                        <div className="course-item-5-card-footer">
                          <p className="course-item-5-card-footer-review align-self-center">
                            <svg width="14" height="13" viewBox="0 0 14 13" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                              <path
                                  d="M7.27569 10.9208L10.4279 12.9179C10.8308 13.1732 11.3311 12.7935 11.2115 12.3232L10.3008 8.74052C10.2752 8.64073 10.2782 8.53573 10.3096 8.4376C10.3409 8.33946 10.3994 8.25218 10.4781 8.18577L13.3049 5.83306C13.6763 5.52392 13.4846 4.90751 13.0074 4.87654L9.31588 4.63696C9.21645 4.62986 9.12109 4.59465 9.04089 4.53545C8.96069 4.47625 8.89896 4.39548 8.86289 4.30255L7.48612 0.835486C7.44869 0.736852 7.38215 0.651935 7.29532 0.592013C7.2085 0.532092 7.1055 0.5 7 0.5C6.89451 0.5 6.79151 0.532092 6.70468 0.592013C6.61786 0.651935 6.55131 0.736852 6.51389 0.835486L5.13712 4.30255C5.10104 4.39548 5.03932 4.47625 4.95912 4.53545C4.87892 4.59465 4.78355 4.62986 4.68412 4.63696L0.992627 4.87654C0.515435 4.90751 0.323731 5.52392 0.695149 5.83306L3.52186 8.18577C3.60063 8.25218 3.65907 8.33946 3.69044 8.4376C3.72181 8.53573 3.72485 8.64073 3.6992 8.74052L2.85459 12.063C2.71111 12.6274 3.31143 13.083 3.79495 12.7767L6.72431 10.9208C6.8067 10.8683 6.90234 10.8405 7 10.8405C7.09767 10.8405 7.19331 10.8683 7.27569 10.9208Z"
                                  fill="#FD8E1F"/>
                            </svg>
                            5.0
                          </p>
                          <p className="course-item-5-card-footer-student">265.7K <span>students</span></p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-xl-4">
                    <div className="course-item-4">
                      <div className="course-item-5-card">
                        <a href="single-course.html" className="course-item-5-card-img"><img
                            src={course3} alt=""/></a>
                        <div className="course-item-5-card-info">
                          <button className="course-item-5-card-info-tag tag-color3">Business</button>
                          <p className="course-item-5-card-info-price">$57</p>
                        </div>
                        <a href="single-course.html" className="course-item-5-card-head">2021 Complete Python Bootcamp
                          From Zero to Hero in Python</a>
                        <div className="course-item-5-card-footer">
                          <p className="course-item-5-card-footer-review align-self-center">
                            <svg width="14" height="13" viewBox="0 0 14 13" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                              <path
                                  d="M7.27569 10.9208L10.4279 12.9179C10.8308 13.1732 11.3311 12.7935 11.2115 12.3232L10.3008 8.74052C10.2752 8.64073 10.2782 8.53573 10.3096 8.4376C10.3409 8.33946 10.3994 8.25218 10.4781 8.18577L13.3049 5.83306C13.6763 5.52392 13.4846 4.90751 13.0074 4.87654L9.31588 4.63696C9.21645 4.62986 9.12109 4.59465 9.04089 4.53545C8.96069 4.47625 8.89896 4.39548 8.86289 4.30255L7.48612 0.835486C7.44869 0.736852 7.38215 0.651935 7.29532 0.592013C7.2085 0.532092 7.1055 0.5 7 0.5C6.89451 0.5 6.79151 0.532092 6.70468 0.592013C6.61786 0.651935 6.55131 0.736852 6.51389 0.835486L5.13712 4.30255C5.10104 4.39548 5.03932 4.47625 4.95912 4.53545C4.87892 4.59465 4.78355 4.62986 4.68412 4.63696L0.992627 4.87654C0.515435 4.90751 0.323731 5.52392 0.695149 5.83306L3.52186 8.18577C3.60063 8.25218 3.65907 8.33946 3.69044 8.4376C3.72181 8.53573 3.72485 8.64073 3.6992 8.74052L2.85459 12.063C2.71111 12.6274 3.31143 13.083 3.79495 12.7767L6.72431 10.9208C6.8067 10.8683 6.90234 10.8405 7 10.8405C7.09767 10.8405 7.19331 10.8683 7.27569 10.9208Z"
                                  fill="#FD8E1F"/>
                            </svg>
                            5.0
                          </p>
                          <p className="course-item-5-card-footer-student">265.7K <span>students</span></p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-xl-4">
                    <div className="course-item-4">
                      <div className="course-item-5-card">
                        <a href="single-course.html" className="course-item-5-card-img"><img
                            src={course4} alt=""/></a>
                        <div className="course-item-5-card-info">
                          <button className="course-item-5-card-info-tag tag-color2">Marketing</button>
                          <p className="course-item-5-card-info-price">$57</p>
                        </div>
                        <a href="single-course.html" className="course-item-5-card-head">The Complete Digital Marketing
                          Course - 12 Courses in 1</a>
                        <div className="course-item-5-card-footer">
                          <p className="course-item-5-card-footer-review align-self-center">
                            <svg width="14" height="13" viewBox="0 0 14 13" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                              <path
                                  d="M7.27569 10.9208L10.4279 12.9179C10.8308 13.1732 11.3311 12.7935 11.2115 12.3232L10.3008 8.74052C10.2752 8.64073 10.2782 8.53573 10.3096 8.4376C10.3409 8.33946 10.3994 8.25218 10.4781 8.18577L13.3049 5.83306C13.6763 5.52392 13.4846 4.90751 13.0074 4.87654L9.31588 4.63696C9.21645 4.62986 9.12109 4.59465 9.04089 4.53545C8.96069 4.47625 8.89896 4.39548 8.86289 4.30255L7.48612 0.835486C7.44869 0.736852 7.38215 0.651935 7.29532 0.592013C7.2085 0.532092 7.1055 0.5 7 0.5C6.89451 0.5 6.79151 0.532092 6.70468 0.592013C6.61786 0.651935 6.55131 0.736852 6.51389 0.835486L5.13712 4.30255C5.10104 4.39548 5.03932 4.47625 4.95912 4.53545C4.87892 4.59465 4.78355 4.62986 4.68412 4.63696L0.992627 4.87654C0.515435 4.90751 0.323731 5.52392 0.695149 5.83306L3.52186 8.18577C3.60063 8.25218 3.65907 8.33946 3.69044 8.4376C3.72181 8.53573 3.72485 8.64073 3.6992 8.74052L2.85459 12.063C2.71111 12.6274 3.31143 13.083 3.79495 12.7767L6.72431 10.9208C6.8067 10.8683 6.90234 10.8405 7 10.8405C7.09767 10.8405 7.19331 10.8683 7.27569 10.9208Z"
                                  fill="#FD8E1F"/>
                            </svg>
                            5.0
                          </p>
                          <p className="course-item-5-card-footer-student">265.7K <span>students</span></p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-xl-4">
                    <div className="course-item-4">
                      <div className="course-item-5-card">
                        <a href="single-course.html" className="course-item-5-card-img"><img
                            src={course1} alt=""/></a>
                        <div className="course-item-5-card-info">
                          <button className="course-item-5-card-info-tag">Design</button>
                          <p className="course-item-5-card-info-price">$57</p>
                        </div>
                        <a href="single-course.html" className="course-item-5-card-head">The Python Mega Course: Build
                          10 Real World Applications</a>
                        <div className="course-item-5-card-footer">
                          <p className="course-item-5-card-footer-review align-self-center">
                            <svg width="14" height="13" viewBox="0 0 14 13" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                              <path
                                  d="M7.27569 10.9208L10.4279 12.9179C10.8308 13.1732 11.3311 12.7935 11.2115 12.3232L10.3008 8.74052C10.2752 8.64073 10.2782 8.53573 10.3096 8.4376C10.3409 8.33946 10.3994 8.25218 10.4781 8.18577L13.3049 5.83306C13.6763 5.52392 13.4846 4.90751 13.0074 4.87654L9.31588 4.63696C9.21645 4.62986 9.12109 4.59465 9.04089 4.53545C8.96069 4.47625 8.89896 4.39548 8.86289 4.30255L7.48612 0.835486C7.44869 0.736852 7.38215 0.651935 7.29532 0.592013C7.2085 0.532092 7.1055 0.5 7 0.5C6.89451 0.5 6.79151 0.532092 6.70468 0.592013C6.61786 0.651935 6.55131 0.736852 6.51389 0.835486L5.13712 4.30255C5.10104 4.39548 5.03932 4.47625 4.95912 4.53545C4.87892 4.59465 4.78355 4.62986 4.68412 4.63696L0.992627 4.87654C0.515435 4.90751 0.323731 5.52392 0.695149 5.83306L3.52186 8.18577C3.60063 8.25218 3.65907 8.33946 3.69044 8.4376C3.72181 8.53573 3.72485 8.64073 3.6992 8.74052L2.85459 12.063C2.71111 12.6274 3.31143 13.083 3.79495 12.7767L6.72431 10.9208C6.8067 10.8683 6.90234 10.8405 7 10.8405C7.09767 10.8405 7.19331 10.8683 7.27569 10.9208Z"
                                  fill="#FD8E1F"/>
                            </svg>
                            5.0
                          </p>
                          <p className="course-item-5-card-footer-student">265.7K <span>students</span></p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-xl-4">
                    <div className="course-item-4">
                      <div className="course-item-5-card">
                        <a href="single-course.html" className="course-item-5-card-img"><img
                            src={course2} alt=""/></a>
                        <div className="course-item-5-card-info">
                          <button className="course-item-5-card-info-tag tag-color2">Developments</button>
                          <p className="course-item-5-card-info-price">$57</p>
                        </div>
                        <a href="single-course.html" className="course-item-5-card-head">Facebook Ads & Facebook
                          Marketing MASTERY 2021 Cours...</a>
                        <div className="course-item-5-card-footer">
                          <p className="course-item-5-card-footer-review align-self-center">
                            <svg width="14" height="13" viewBox="0 0 14 13" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                              <path
                                  d="M7.27569 10.9208L10.4279 12.9179C10.8308 13.1732 11.3311 12.7935 11.2115 12.3232L10.3008 8.74052C10.2752 8.64073 10.2782 8.53573 10.3096 8.4376C10.3409 8.33946 10.3994 8.25218 10.4781 8.18577L13.3049 5.83306C13.6763 5.52392 13.4846 4.90751 13.0074 4.87654L9.31588 4.63696C9.21645 4.62986 9.12109 4.59465 9.04089 4.53545C8.96069 4.47625 8.89896 4.39548 8.86289 4.30255L7.48612 0.835486C7.44869 0.736852 7.38215 0.651935 7.29532 0.592013C7.2085 0.532092 7.1055 0.5 7 0.5C6.89451 0.5 6.79151 0.532092 6.70468 0.592013C6.61786 0.651935 6.55131 0.736852 6.51389 0.835486L5.13712 4.30255C5.10104 4.39548 5.03932 4.47625 4.95912 4.53545C4.87892 4.59465 4.78355 4.62986 4.68412 4.63696L0.992627 4.87654C0.515435 4.90751 0.323731 5.52392 0.695149 5.83306L3.52186 8.18577C3.60063 8.25218 3.65907 8.33946 3.69044 8.4376C3.72181 8.53573 3.72485 8.64073 3.6992 8.74052L2.85459 12.063C2.71111 12.6274 3.31143 13.083 3.79495 12.7767L6.72431 10.9208C6.8067 10.8683 6.90234 10.8405 7 10.8405C7.09767 10.8405 7.19331 10.8683 7.27569 10.9208Z"
                                  fill="#FD8E1F"/>
                            </svg>
                            5.0
                          </p>
                          <p className="course-item-5-card-footer-student">265.7K <span>students</span></p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-xl-4">
                    <div className="course-item-4">
                      <div className="course-item-5-card">
                        <a href="single-course.html" className="course-item-5-card-img"><img
                            src={course3} alt=""/></a>
                        <div className="course-item-5-card-info">
                          <button className="course-item-5-card-info-tag tag-color3">Business</button>
                          <p className="course-item-5-card-info-price">$57</p>
                        </div>
                        <a href="single-course.html" className="course-item-5-card-head">2021 Complete Python Bootcamp
                          From Zero to Hero in Python</a>
                        <div className="course-item-5-card-footer">
                          <p className="course-item-5-card-footer-review align-self-center">
                            <svg width="14" height="13" viewBox="0 0 14 13" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                              <path
                                  d="M7.27569 10.9208L10.4279 12.9179C10.8308 13.1732 11.3311 12.7935 11.2115 12.3232L10.3008 8.74052C10.2752 8.64073 10.2782 8.53573 10.3096 8.4376C10.3409 8.33946 10.3994 8.25218 10.4781 8.18577L13.3049 5.83306C13.6763 5.52392 13.4846 4.90751 13.0074 4.87654L9.31588 4.63696C9.21645 4.62986 9.12109 4.59465 9.04089 4.53545C8.96069 4.47625 8.89896 4.39548 8.86289 4.30255L7.48612 0.835486C7.44869 0.736852 7.38215 0.651935 7.29532 0.592013C7.2085 0.532092 7.1055 0.5 7 0.5C6.89451 0.5 6.79151 0.532092 6.70468 0.592013C6.61786 0.651935 6.55131 0.736852 6.51389 0.835486L5.13712 4.30255C5.10104 4.39548 5.03932 4.47625 4.95912 4.53545C4.87892 4.59465 4.78355 4.62986 4.68412 4.63696L0.992627 4.87654C0.515435 4.90751 0.323731 5.52392 0.695149 5.83306L3.52186 8.18577C3.60063 8.25218 3.65907 8.33946 3.69044 8.4376C3.72181 8.53573 3.72485 8.64073 3.6992 8.74052L2.85459 12.063C2.71111 12.6274 3.31143 13.083 3.79495 12.7767L6.72431 10.9208C6.8067 10.8683 6.90234 10.8405 7 10.8405C7.09767 10.8405 7.19331 10.8683 7.27569 10.9208Z"
                                  fill="#FD8E1F"/>
                            </svg>
                            5.0
                          </p>
                          <p className="course-item-5-card-footer-student">265.7K <span>students</span></p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-xl-4">
                    <div className="course-item-4">
                      <div className="course-item-5-card">
                        <a href="single-course.html" className="course-item-5-card-img"><img
                            src={course2} alt=""/></a>
                        <div className="course-item-5-card-info">
                          <button className="course-item-5-card-info-tag tag-color2">Marketing</button>
                          <p className="course-item-5-card-info-price">$57</p>
                        </div>
                        <a href="single-course.html" className="course-item-5-card-head">The Complete Digital Marketing
                          Course - 12 Courses in 1</a>
                        <div className="course-item-5-card-footer">
                          <p className="course-item-5-card-footer-review align-self-center">
                            <svg width="14" height="13" viewBox="0 0 14 13" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                              <path
                                  d="M7.27569 10.9208L10.4279 12.9179C10.8308 13.1732 11.3311 12.7935 11.2115 12.3232L10.3008 8.74052C10.2752 8.64073 10.2782 8.53573 10.3096 8.4376C10.3409 8.33946 10.3994 8.25218 10.4781 8.18577L13.3049 5.83306C13.6763 5.52392 13.4846 4.90751 13.0074 4.87654L9.31588 4.63696C9.21645 4.62986 9.12109 4.59465 9.04089 4.53545C8.96069 4.47625 8.89896 4.39548 8.86289 4.30255L7.48612 0.835486C7.44869 0.736852 7.38215 0.651935 7.29532 0.592013C7.2085 0.532092 7.1055 0.5 7 0.5C6.89451 0.5 6.79151 0.532092 6.70468 0.592013C6.61786 0.651935 6.55131 0.736852 6.51389 0.835486L5.13712 4.30255C5.10104 4.39548 5.03932 4.47625 4.95912 4.53545C4.87892 4.59465 4.78355 4.62986 4.68412 4.63696L0.992627 4.87654C0.515435 4.90751 0.323731 5.52392 0.695149 5.83306L3.52186 8.18577C3.60063 8.25218 3.65907 8.33946 3.69044 8.4376C3.72181 8.53573 3.72485 8.64073 3.6992 8.74052L2.85459 12.063C2.71111 12.6274 3.31143 13.083 3.79495 12.7767L6.72431 10.9208C6.8067 10.8683 6.90234 10.8405 7 10.8405C7.09767 10.8405 7.19331 10.8683 7.27569 10.9208Z"
                                  fill="#FD8E1F"/>
                            </svg>
                            5.0
                          </p>
                          <p className="course-item-5-card-footer-student">265.7K <span>students</span></p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-xl-4">
                    <div className="course-item-4">
                      <div className="course-item-5-card">
                        <a href="single-course.html" className="course-item-5-card-img"><img
                            src={course1} alt=""/></a>
                        <div className="course-item-5-card-info">
                          <button className="course-item-5-card-info-tag">Design</button>
                          <p className="course-item-5-card-info-price">$57</p>
                        </div>
                        <a href="single-course.html" className="course-item-5-card-head">The Python Mega Course: Build
                          10 Real World Applications</a>
                        <div className="course-item-5-card-footer">
                          <p className="course-item-5-card-footer-review align-self-center">
                            <svg width="14" height="13" viewBox="0 0 14 13" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                              <path
                                  d="M7.27569 10.9208L10.4279 12.9179C10.8308 13.1732 11.3311 12.7935 11.2115 12.3232L10.3008 8.74052C10.2752 8.64073 10.2782 8.53573 10.3096 8.4376C10.3409 8.33946 10.3994 8.25218 10.4781 8.18577L13.3049 5.83306C13.6763 5.52392 13.4846 4.90751 13.0074 4.87654L9.31588 4.63696C9.21645 4.62986 9.12109 4.59465 9.04089 4.53545C8.96069 4.47625 8.89896 4.39548 8.86289 4.30255L7.48612 0.835486C7.44869 0.736852 7.38215 0.651935 7.29532 0.592013C7.2085 0.532092 7.1055 0.5 7 0.5C6.89451 0.5 6.79151 0.532092 6.70468 0.592013C6.61786 0.651935 6.55131 0.736852 6.51389 0.835486L5.13712 4.30255C5.10104 4.39548 5.03932 4.47625 4.95912 4.53545C4.87892 4.59465 4.78355 4.62986 4.68412 4.63696L0.992627 4.87654C0.515435 4.90751 0.323731 5.52392 0.695149 5.83306L3.52186 8.18577C3.60063 8.25218 3.65907 8.33946 3.69044 8.4376C3.72181 8.53573 3.72485 8.64073 3.6992 8.74052L2.85459 12.063C2.71111 12.6274 3.31143 13.083 3.79495 12.7767L6.72431 10.9208C6.8067 10.8683 6.90234 10.8405 7 10.8405C7.09767 10.8405 7.19331 10.8683 7.27569 10.9208Z"
                                  fill="#FD8E1F"/>
                            </svg>
                            5.0
                          </p>
                          <p className="course-item-5-card-footer-student">265.7K <span>students</span></p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-xl-4">
                    <div className="course-item-4">
                      <div className="course-item-5-card">
                        <a href="single-course.html" className="course-item-5-card-img"><img
                            src={course3} alt=""/></a>
                        <div className="course-item-5-card-info">
                          <button className="course-item-5-card-info-tag tag-color2">Developments</button>
                          <p className="course-item-5-card-info-price">$57</p>
                        </div>
                        <a href="single-course.html" className="course-item-5-card-head">Facebook Ads & Facebook
                          Marketing MASTERY 2021 Cours...</a>
                        <div className="course-item-5-card-footer">
                          <p className="course-item-5-card-footer-review align-self-center">
                            <svg width="14" height="13" viewBox="0 0 14 13" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                              <path
                                  d="M7.27569 10.9208L10.4279 12.9179C10.8308 13.1732 11.3311 12.7935 11.2115 12.3232L10.3008 8.74052C10.2752 8.64073 10.2782 8.53573 10.3096 8.4376C10.3409 8.33946 10.3994 8.25218 10.4781 8.18577L13.3049 5.83306C13.6763 5.52392 13.4846 4.90751 13.0074 4.87654L9.31588 4.63696C9.21645 4.62986 9.12109 4.59465 9.04089 4.53545C8.96069 4.47625 8.89896 4.39548 8.86289 4.30255L7.48612 0.835486C7.44869 0.736852 7.38215 0.651935 7.29532 0.592013C7.2085 0.532092 7.1055 0.5 7 0.5C6.89451 0.5 6.79151 0.532092 6.70468 0.592013C6.61786 0.651935 6.55131 0.736852 6.51389 0.835486L5.13712 4.30255C5.10104 4.39548 5.03932 4.47625 4.95912 4.53545C4.87892 4.59465 4.78355 4.62986 4.68412 4.63696L0.992627 4.87654C0.515435 4.90751 0.323731 5.52392 0.695149 5.83306L3.52186 8.18577C3.60063 8.25218 3.65907 8.33946 3.69044 8.4376C3.72181 8.53573 3.72485 8.64073 3.6992 8.74052L2.85459 12.063C2.71111 12.6274 3.31143 13.083 3.79495 12.7767L6.72431 10.9208C6.8067 10.8683 6.90234 10.8405 7 10.8405C7.09767 10.8405 7.19331 10.8683 7.27569 10.9208Z"
                                  fill="#FD8E1F"/>
                            </svg>
                            5.0
                          </p>
                          <p className="course-item-5-card-footer-student">265.7K <span>students</span></p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-xl-4">
                    <div className="course-item-4">
                      <div className="course-item-5-card">
                        <a href="single-course.html" className="course-item-5-card-img"><img src={course1}
                                                                                             alt=""/></a>
                        <div className="course-item-5-card-info">
                          <button className="course-item-5-card-info-tag tag-color3">Business</button>
                          <p className="course-item-5-card-info-price">$57</p>
                        </div>
                        <a href="single-course.html" className="course-item-5-card-head">2021 Complete Python Bootcamp
                          From
                          Zero to Hero in Python</a>
                        <div className="course-item-5-card-footer">
                          <p className="course-item-5-card-footer-review align-self-center">
                            <svg width="14" height="13" viewBox="0 0 14 13" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                              <path
                                  d="M7.27569 10.9208L10.4279 12.9179C10.8308 13.1732 11.3311 12.7935 11.2115 12.3232L10.3008 8.74052C10.2752 8.64073 10.2782 8.53573 10.3096 8.4376C10.3409 8.33946 10.3994 8.25218 10.4781 8.18577L13.3049 5.83306C13.6763 5.52392 13.4846 4.90751 13.0074 4.87654L9.31588 4.63696C9.21645 4.62986 9.12109 4.59465 9.04089 4.53545C8.96069 4.47625 8.89896 4.39548 8.86289 4.30255L7.48612 0.835486C7.44869 0.736852 7.38215 0.651935 7.29532 0.592013C7.2085 0.532092 7.1055 0.5 7 0.5C6.89451 0.5 6.79151 0.532092 6.70468 0.592013C6.61786 0.651935 6.55131 0.736852 6.51389 0.835486L5.13712 4.30255C5.10104 4.39548 5.03932 4.47625 4.95912 4.53545C4.87892 4.59465 4.78355 4.62986 4.68412 4.63696L0.992627 4.87654C0.515435 4.90751 0.323731 5.52392 0.695149 5.83306L3.52186 8.18577C3.60063 8.25218 3.65907 8.33946 3.69044 8.4376C3.72181 8.53573 3.72485 8.64073 3.6992 8.74052L2.85459 12.063C2.71111 12.6274 3.31143 13.083 3.79495 12.7767L6.72431 10.9208C6.8067 10.8683 6.90234 10.8405 7 10.8405C7.09767 10.8405 7.19331 10.8683 7.27569 10.9208Z"
                                  fill="#FD8E1F"/>
                            </svg>
                            5.0
                          </p>
                          <p className="course-item-5-card-footer-student">265.7K <span>students</span></p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-xl-4">
                    <div className="course-item-4">
                      <div className="course-item-5-card">
                        <a href="single-course.html" className="course-item-5-card-img"><img src={course4}
                                                                                             alt=""/></a>
                        <div className="course-item-5-card-info">
                          <button className="course-item-5-card-info-tag tag-color2">Marketing</button>
                          <p className="course-item-5-card-info-price">$57</p>
                        </div>
                        <a href="single-course.html" className="course-item-5-card-head">The Complete Digital Marketing
                          Course - 12 Courses in 1</a>
                        <div className="course-item-5-card-footer">
                          <p className="course-item-5-card-footer-review align-self-center">
                            <svg width="14" height="13" viewBox="0 0 14 13" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                              <path
                                  d="M7.27569 10.9208L10.4279 12.9179C10.8308 13.1732 11.3311 12.7935 11.2115 12.3232L10.3008 8.74052C10.2752 8.64073 10.2782 8.53573 10.3096 8.4376C10.3409 8.33946 10.3994 8.25218 10.4781 8.18577L13.3049 5.83306C13.6763 5.52392 13.4846 4.90751 13.0074 4.87654L9.31588 4.63696C9.21645 4.62986 9.12109 4.59465 9.04089 4.53545C8.96069 4.47625 8.89896 4.39548 8.86289 4.30255L7.48612 0.835486C7.44869 0.736852 7.38215 0.651935 7.29532 0.592013C7.2085 0.532092 7.1055 0.5 7 0.5C6.89451 0.5 6.79151 0.532092 6.70468 0.592013C6.61786 0.651935 6.55131 0.736852 6.51389 0.835486L5.13712 4.30255C5.10104 4.39548 5.03932 4.47625 4.95912 4.53545C4.87892 4.59465 4.78355 4.62986 4.68412 4.63696L0.992627 4.87654C0.515435 4.90751 0.323731 5.52392 0.695149 5.83306L3.52186 8.18577C3.60063 8.25218 3.65907 8.33946 3.69044 8.4376C3.72181 8.53573 3.72485 8.64073 3.6992 8.74052L2.85459 12.063C2.71111 12.6274 3.31143 13.083 3.79495 12.7767L6.72431 10.9208C6.8067 10.8683 6.90234 10.8405 7 10.8405C7.09767 10.8405 7.19331 10.8683 7.27569 10.9208Z"
                                  fill="#FD8E1F"/>
                            </svg>
                            5.0
                          </p>
                          <p className="course-item-5-card-footer-student">265.7K <span>students</span></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="pag text-center mt-2">
                  <div className="pag-arrow pag-arrow-left">
                    <a href="#">
                      <svg className="align-self-center" width="18" height="16" viewBox="0 0 18 16" fill="none"
                           xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.25 8H0.75" stroke="#FF6636"></path>
                        <path d="M7.5 1.25L0.75 8L7.5 14.75" stroke="#FF6636"></path>
                      </svg>
                    </a>
                  </div>
                  <div className="pag-content">
                    <ul>
                      <li className="active"><a href="#">01</a></li>
                      <li><a href="#">02</a></li>
                      <li><a href="#">03</a></li>
                      <li><a href="#">04</a></li>
                      <li><a href="#">05</a></li>
                    </ul>
                  </div>
                  <div className="pag-arrow pag-arrow-right">
                    <a href="#">
                      <svg className="align-self-center" width="24" height="24" viewBox="0 0 24 24" fill="none"
                           xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.75 12H20.25" stroke="#FF6636"></path>
                        <path d="M13.5 5.25L20.25 12L13.5 18.75" stroke="#FF6636"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
  );
}

export default Courses;
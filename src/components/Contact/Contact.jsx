import {NavLink} from "react-router-dom";
import contactThumb1 from "../../assets/img/contact/contact-thumb1.png"
import thumb1 from "../../assets/img/contact/thumb1.jpg"
import thumb2 from "../../assets/img/contact/thumb2.jpg"
import thumb3 from "../../assets/img/contact/thumb3.jpg"
import thumb4 from "../../assets/img/contact/thumb4.jpg"

function Contact() {
  return (
      <>
        <div>
          <div className="bredadcrumb-section">
            <div className="container">
              <div className="breadcrumb-menu">
                <h3>About</h3>
                <ul>
                  <li><NavLink to={"/"}>Home</NavLink></li>
                  <li><NavLink to="#">/</NavLink></li>
                  <li><NavLink to={"/contact"}>Contact</NavLink></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="contact-us-section">
          <div className="container">
            <div className="row">
              <div className="col-lg-7 order-lg-2">
                <div className="about-thumb responsive_bottom">
                  <img src={contactThumb1} alt=""/>
                </div>
              </div>
              <div className="col-lg-5 d-flex align-items-center">
                <div className="about-content contact-content">
                  <h2>Connect with us</h2>
                  <p>Want to chat? We’d love to hear from you! Get in touch with our Customer Success Team to inquire
                    about speaking events, advertising rates, or just say hello.</p>
                  <a className="button button--md button-i mt-4" href="#">
              <span>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path d="M21 5.25L12 13.5L3 5.25" stroke="white"/>
                                        <path
                                            d="M3 5.25H21V18C21 18.1989 20.921 18.3897 20.7803 18.5303C20.6397 18.671 20.4489 18.75 20.25 18.75H3.75C3.55109 18.75 3.36032 18.671 3.21967 18.5303C3.07902 18.3897 3 18.1989 3 18V5.25Z"
                                            stroke="white"
                                        />
                                        <path d="M10.3636 12L3.2312 18.538" stroke="white"/>
                                        <path d="M20.7687 18.5381L13.6362 12" stroke="white"/>
                                    </svg>
                                </span>
                    Copy Email
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="branches-section section-padding">
          <div className="container">
            <div className="section-title">
              <h2>Our branches all over the world.</h2>
              <p>
                Phasellus sed quam eu eros faucibus cursus. Quisque mauris<br />
                urna, imperdiet id leo quis, luctus auctor nisi.
              </p>
            </div>
            <div className="row">
              <div className="col-xl-3 col-lg-6 col-md-6">
                <div className="branches-wrap">
                  <div className="branches-thumb">
                    <img src={thumb1} alt="" />
                    <div className="branches-data">
                      <h5>mAIN BRANCHE</h5>
                      <a href="#">
                        <h4>Los Angeles, California</h4>
                      </a>
                      <p>1702 Olympic Boulevard Santa Monica, CA 90404</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-6 col-md-6">
                <div className="branches-wrap">
                  <div className="branches-thumb">
                    <img src={thumb2} alt="" />
                    <div className="branches-data">
                      <h5>mAIN BRANCHE</h5>
                      <a href="#">
                        <h4>Tokyo, Japan</h4>
                      </a>
                      <p>901 N Pitt Str., Suite 170 Tokyo, VA 22314, Japan</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-6 col-md-6">
                <div className="branches-wrap">
                  <div className="branches-thumb">
                    <img src={thumb3} alt="" />
                    <div className="branches-data">
                      <h5>mAIN BRANCHE</h5>
                      <a href="#">
                        <h4>Moscow, Russia</h4>
                      </a>
                      <p>Anjeliersstraat 470H, 1015 NL Moscow, Russia</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-6 col-md-6">
                <div className="branches-wrap">
                  <div className="branches-thumb">
                    <img src={thumb4} alt="" />
                    <div className="branches-data">
                      <h5>mAIN BRANCHE</h5>
                      <a href="#">
                        <h4>Mumbai, India</h4>
                      </a>
                      <p>36 East 20th St, 6th Floor Mumbai, India</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="contact-section section-padding">
          <div className="container">
            <div className="section-title">
              <h2>Contact Us</h2>
            </div>
            <div className="row">
              <div className="col-lg-6">
                <div className="contact-info-wrap">
                  <div className="contact-title mb-2">
                    <h5>
                      Will you be in Los Angeles or any other<br />
                      branches any time soon? Stop by the office! We'd love to meet.
                    </h5>
                  </div>
                  <div className="contact-info-item">
                    <h5>Address</h5>
                    <p>
                      1702 Olympic Boulevard<br />
                      Santa Monica, CA 90404
                    </p>
                  </div>
                  <div className="contact-info-item">
                    <h5>Phone Number</h5>
                    <p>
                      <a href="#">(480) 555-0103</a><br />
                      <a href="#">(219) 555-0114</a>
                    </p>
                  </div>
                  <div className="contact-info-item">
                    <h5>Email address</h5>
                    <p>
                      <a href="mailto:someone@yoursite.com">help.Etutor@gmail.com</a> <br />
                      <a href="mailto:someone@yoursite.com">career.Etutor@gamil.com</a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="contact-wrap">
                  <div className="contact-title">
                    <h5>Get In touch</h5>
                    <p>Feel free contact with us, we love to make new partners & friends</p>
                  </div>
                  <form action="#">
                    <div className="row">
                      <div className="col-lg-6 col-md-6 col-sm-6">
                        <div className="form-field mb-3">
                          <label>Full name</label>
                          <div className="field-wrapper">
                            <input type="text" placeholder="Full name" />
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-6">
                        <div className="form-field mb-3">
                          <label>Last name</label>
                          <div className="field-wrapper">
                            <input type="text" placeholder="Last name" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="form-field mb-3">
                      <label>Email</label>
                      <div className="field-wrapper">
                        <input type="email" placeholder="Email Address" />
                      </div>
                    </div>
                    <div className="form-field mb-3">
                      <label>Subject</label>
                      <div className="field-wrapper">
                        <input type="email" placeholder="Message Subject" />
                      </div>
                    </div>
                    <div className="default-input-field">
                      <label>Message</label>
                      <textarea name="textarea" placeholder="Message Subject"></textarea>
                    </div>
                    <button className="button button--md button-i--r">
                      Send Message
                      <span>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M20.5816 11.3465L4.74585 2.47843C4.61262 2.40383 4.4598 2.37166 4.30781 2.38624C4.15582 2.40081 4.0119 2.46143 3.89528 2.55999C3.77866 2.65855 3.6949 2.79035 3.65519 2.93779C3.61549 3.08523 3.62173 3.24127 3.67309 3.38506L6.66006 11.7486C6.71832 11.9117 6.71832 12.09 6.66006 12.2531L3.67309 20.6166C3.62173 20.7604 3.61549 20.9165 3.65519 21.0639C3.6949 21.2113 3.77866 21.3431 3.89528 21.4417C4.0119 21.5403 4.15582 21.6009 4.30781 21.6155C4.45981 21.63 4.61263 21.5979 4.74585 21.5233L20.5816 12.6552C20.6979 12.5901 20.7948 12.4951 20.8622 12.3801C20.9296 12.2651 20.9652 12.1342 20.9652 12.0008C20.9652 11.8675 20.9296 11.7366 20.8622 11.6216C20.7948 11.5066 20.6979 11.4116 20.5816 11.3465V11.3465Z"
                                                stroke="white"

                                            />
                                            <path d="M6.75 12H12.75" stroke="white"/>
                                        </svg>
                                    </span>

                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="map-section">
          <div id="map">

          </div>
        </div>
      </>
  );
}

export default Contact;
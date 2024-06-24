// import React from "react";
// import img from "../../images/whole.png";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
// import "./Navbar.css";

// const Navbar = () => {
//   return (
//     // <div style={{boxShadow: "rgba(0, 0, 0, 0.12) 0px 1px 2px 0px"}}>
//     //   <div className="container d-none d-lg-flex  align-items-center justify-content-between p-3">
//     //     <a href="/">
//     //       <img
//     //         src={img}
//     //         width="162.57px"
//     //         height="24px"
//     //         alt="Logo"
//     //       />
//     //     </a>
//     //     <form className="d-flex" style={{width: "360px", borderRadius: "21px"}}>
//     //       <button className="custom-search" type="submit">
//     //         <img
//     //           alt="Search"
//     //           src="data:image/svg+xml,%3csvg%20width='22'%20height='22'%20viewBox='0%200%2022%2022'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='baseline-search-24px'%20clip-path='url(%23clip0_1_1172)'%3e%3cpath%20id='Vector'%20d='M14.2083%2012.8333H13.4842L13.2275%2012.5858C14.1258%2011.5408%2014.6667%2010.1842%2014.6667%208.70833C14.6667%205.4175%2011.9992%202.75%208.70833%202.75C5.4175%202.75%202.75%205.4175%202.75%208.70833C2.75%2011.9992%205.4175%2014.6667%208.70833%2014.6667C10.1842%2014.6667%2011.5408%2014.1258%2012.5858%2013.2275L12.8333%2013.4842V14.2083L17.4167%2018.7825L18.7825%2017.4167L14.2083%2012.8333ZM8.70833%2012.8333C6.42583%2012.8333%204.58333%2010.9908%204.58333%208.70833C4.58333%206.42583%206.42583%204.58333%208.70833%204.58333C10.9908%204.58333%2012.8333%206.42583%2012.8333%208.70833C12.8333%2010.9908%2010.9908%2012.8333%208.70833%2012.8333Z'%20fill='%237A7A7A'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_1_1172'%3e%3crect%20width='22'%20height='22'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e"
//     //           width="22"
//     //           height="22"
//     //         />
//     //       </button>
//     //       <input
//     //         className="form-control custom-input-search"
//     //         type="search"
//     //         placeholder="Search for your favorite groups in ATG"
//     //         aria-label="Search"
//     //       />
//     //     </form>
//     //     <div className="d-flex align-items-center gap-1">
//     //       <button
//     //         className="btn custom-btn-create p-0 m-0"
//     //         data-bs-toggle="modal"
//     //         data-bs-target="#exampleModal"
//     //       >
//     //         create Account. <span className="text-primary fw-bold">It's Free!</span>
//     //       </button>
//     //       <div className="d-flex align-items-center">
//     //         <img
//     //           className="rounded-circle"
//     //           alt="Profile"
//     //           src="data:image/svg+xml,%3csvg%20width='22'%20height='22'%20viewBox='0%200%2022%2022'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='baseline-arrow_drop_down-24px'%20clip-path='url(%23clip0_1_1136)'%3e%3cpath%20id='Vector'%20d='M6.41667%209.16669L11%2013.75L15.5833%209.16669H6.41667Z'%20fill='black'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_1_1136'%3e%3crect%20width='22'%20height='22'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e"
//     //         />
//     //       </div>
//     //       <div
//     //         className="modal fade"
//     //         id="exampleModal"
//     //         tabindex="-1"
//     //         aria-labelledby="exampleModalLabel"
//     //         style={{display: "none"}}
//     //         aria-hidden="true"
//     //       >
//     //         <div className="modal-dialog modal-lg modal-dialog-centered position-relative">
//     //           <button
//     //             type="button"
//     //             className="btn position-absolute"
//     //             data-bs-dismiss="modal"
//     //             style={{top: "10px", right: "-25px"}}
//     //           >
//     //             <img
//     //               src="data:image/svg+xml,%3csvg%20width='28'%20height='28'%20viewBox='0%200%2028%2028'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='baseline-cancel-24px'%20clip-path='url(%23clip0_1_2255)'%3e%3cpath%20id='Vector'%20d='M14%202.33331C7.54838%202.33331%202.33337%207.54831%202.33337%2014C2.33337%2020.4516%207.54838%2025.6666%2014%2025.6666C20.4517%2025.6666%2025.6667%2020.4516%2025.6667%2014C25.6667%207.54831%2020.4517%202.33331%2014%202.33331ZM19.8334%2018.1883L18.1884%2019.8333L14%2015.645L9.81171%2019.8333L8.16671%2018.1883L12.355%2014L8.16671%209.81164L9.81171%208.16665L14%2012.355L18.1884%208.16665L19.8334%209.81164L15.645%2014L19.8334%2018.1883Z'%20fill='white'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_1_2255'%3e%3crect%20width='28'%20height='28'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e"
//     //               alt="close"
//     //             />
//     //           </button>
//     //           <div className="modal-content">
//     //             <div className="modal-header custom-modal-header d-flex justify-content-center mb-4 ">
//     //               Let's learn, share &amp; inspire each other with our passion
//     //               for computer engineering. Sign up now 🤘🏼
//     //             </div>
//     //             <div className="px-4">
//     //               <div className="d-flex justify-content-between  align-items-center mb-4">
//     //                 <h4 className="d-flex fw-bold">Create Account</h4>
//     //                 <button className="btn">
//     //                   Already have an account?
//     //                   <span className="text-primary">Sign In</span>
//     //                 </button>
//     //               </div>
//     //               <div className="container text-center">
//     //                 <div className="row">
//     //                   <div className="col">
//     //                     <div className="d-flex flex-column gap-2">
//     //                       <div className="d-flex">
//     //                         <input
//     //                           type="text"
//     //                           className="form-control custom-input"
//     //                           placeholder="First Name"
//     //                         />
//     //                         <input
//     //                           type="text"
//     //                           className="form-control custom-input"
//     //                           placeholder="Last Name"
//     //                         />
//     //                       </div>
//     //                       <input
//     //                         type="email"
//     //                         className="form-control custom-input"
//     //                         placeholder="Email"
//     //                       />
//     //                       <div className="d-flex align-items-center justify-content-between  position-relative">
//     //                         <input
//     //                           type="password"
//     //                           className="form-control custom-input"
//     //                           placeholder="Password"
//     //                         />
//     //                         <button
//     //                           className="btn position-absolute"
//     //                           style={{right: "10px"}}
//     //                         >
//     //                           <img
//     //                             src="data:image/svg+xml,%3csvg%20width='18'%20height='18'%20viewBox='0%200%2018%2018'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='icon/action/visibility_24px'%3e%3cpath%20id='icon/action/visibility_24px_2'%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M0.75%209C2.0475%205.7075%205.25%203.375%209%203.375C12.75%203.375%2015.9525%205.7075%2017.25%209C15.9525%2012.2925%2012.75%2014.625%209%2014.625C5.25%2014.625%202.0475%2012.2925%200.75%209ZM15.615%209C14.3775%206.4725%2011.8425%204.875%209%204.875C6.1575%204.875%203.6225%206.4725%202.385%209C3.6225%2011.5275%206.1575%2013.125%209%2013.125C11.8425%2013.125%2014.3775%2011.5275%2015.615%209ZM9%207.125C10.035%207.125%2010.875%207.965%2010.875%209C10.875%2010.035%2010.035%2010.875%209%2010.875C7.965%2010.875%207.125%2010.035%207.125%209C7.125%207.965%207.965%207.125%209%207.125ZM5.625%209C5.625%207.14%207.14%205.625%209%205.625C10.86%205.625%2012.375%207.14%2012.375%209C12.375%2010.86%2010.86%2012.375%209%2012.375C7.14%2012.375%205.625%2010.86%205.625%209Z'%20fill='%23525252'/%3e%3c/g%3e%3c/svg%3e"
//     //                             alt="eye"
//     //                             width="18px"
//     //                             height="18px"
//     //                           />
//     //                         </button>
//     //                       </div>
//     //                       <input
//     //                         type="password"
//     //                         className="form-control mb-4 custom-input"
//     //                         placeholder="Confirm password"
//     //                       />
//     //                       <button
//     //                         className="btn btn-primary rounded-5 d-flex justify-content-center align-items-center mb-4"
//     //                         data-bs-dismiss="modal"
//     //                       >
//     //                         Create Account
//     //                       </button>
//     //                       <div className="d-flex flex-column gap-2">
//     //                         <button className="btn d-flex align-items-center justify-content-center gap-2 button-signup-group">
//     //                           <img
//     //                             src="/assets/facebook-ImnSLa_q.svg"
//     //                             alt="facebook"
//     //                           />
//     //                           Sign Up with Facebook
//     //                         </button>
//     //                         <button className="btn d-flex align-items-center gap-2 button-signup-group justify-content-center">
//     //                           <img
//     //                             src="data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_1_2217)'%3e%3cpath%20d='M3.54594%209.66905L2.989%2011.7482L0.953406%2011.7912C0.345063%2010.6629%200%209.37192%200%208.00005C0%206.67345%200.322625%205.42245%200.8945%204.32092H0.894938L2.70719%204.65317L3.50106%206.45455C3.33491%206.93895%203.24434%207.45895%203.24434%208.00005C3.24441%208.5873%203.35078%209.14995%203.54594%209.66905Z'%20fill='%23FBBB00'/%3e%3cpath%20d='M15.8602%206.50562C15.9521%206.98955%2016%207.48933%2016%208.00012C16%208.57287%2015.9398%209.13155%2015.8251%209.67046C15.4357%2011.5043%2014.4181%2013.1056%2013.0084%2014.2388L13.008%2014.2384L10.7253%2014.1219L10.4023%2012.1052C11.3377%2011.5566%2012.0687%2010.6981%2012.4537%209.67046H8.1759V6.50562H12.5161H15.8602Z'%20fill='%23518EF8'/%3e%3cpath%20d='M13.0081%2014.2382L13.0085%2014.2386C11.6375%2015.3406%209.89596%2015.9999%208.00015%2015.9999C4.95355%2015.9999%202.30477%2014.2971%200.953552%2011.7911L3.54608%209.66895C4.22168%2011.472%205.96102%2012.7555%208.00015%2012.7555C8.87662%2012.7555%209.69774%2012.5186%2010.4023%2012.105L13.0081%2014.2382Z'%20fill='%2328B446'/%3e%3cpath%20d='M13.1064%201.84175L10.5148%203.9635C9.78553%203.50769%208.92353%203.24438%208.00003%203.24438C5.91475%203.24438%204.14288%204.58678%203.50113%206.4545L0.894969%204.32088H0.894531C2.22597%201.75384%204.90816%200%208.00003%200C9.94112%200%2011.7209%200.691438%2013.1064%201.84175Z'%20fill='%23F14336'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_1_2217'%3e%3crect%20width='16'%20height='16'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e"
//     //                             alt="google"
//     //                           />
//     //                           Sign Up with Google
//     //                         </button>
//     //                       </div>
//     //                     </div>
//     //                   </div>
//     //                   <div className="col">
//     //                     <div className="d-flex flex-column">
//     //                       <img
//     //                         src="/assets/signup-OCG-APNN.svg"
//     //                         alt="atg-illustration"
//     //                       />
//     //                       <p className="info-signup">
//     //                         By signing up, you agree to our Terms &amp;
//     //                         conditions, Privacy policy
//     //                       </p>
//     //                     </div>
//     //                   </div>
//     //                 </div>
//     //               </div>
//     //             </div>
//     //           </div>
//     //         </div>
//     //       </div>
//     //     </div>
//     //   </div>
//     // </div>
//   );
// };

// export default Navbar;

import React, { useState } from "react";
import { Button, Modal, Form, Container, Row, Col } from "react-bootstrap";
import img from "../../images/whole.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.css"

function Navbar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div style={{ boxShadow: "rgba(0, 0, 0, 0.12) 0px 1px 2px 0px" }}>
      <div className="container d-none d-lg-flex align-items-center justify-content-between p-3">
        <a href="/">
          <img src={img} width="162.57px" height="24px" alt="Logo" />
        </a>
        <form
          className="d-flex"
          style={{ width: "360px", borderRadius: "21px" }}
        >
          {" "}
          <button className="custom-search" type="submit">
            <img
              alt="Search"
              src="data:image/svg+xml,%3csvg%20width='22'%20height='22'%20viewBox='0%200%2022%2022'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='baseline-search-24px'%20clip-path='url(%23clip0_1_1172)'%3e%3cpath%20id='Vector'%20d='M14.2083%2012.8333H13.4842L13.2275%2012.5858C14.1258%2011.5408%2014.6667%2010.1842%2014.6667%208.70833C14.6667%205.4175%2011.9992%202.75%208.70833%202.75C5.4175%202.75%202.75%205.4175%202.75%208.70833C2.75%2011.9992%205.4175%2014.6667%208.70833%2014.6667C10.1842%2014.6667%2011.5408%2014.1258%2012.5858%2013.2275L12.8333%2013.4842V14.2083L17.4167%2018.7825L18.7825%2017.4167L14.2083%2012.8333ZM8.70833%2012.8333C6.42583%2012.8333%204.58333%2010.9908%204.58333%208.70833C4.58333%206.42583%206.42583%204.58333%208.70833%204.58333C10.9908%204.58333%2012.8333%206.42583%2012.8333%208.70833C12.8333%2010.9908%2010.9908%2012.8333%208.70833%2012.8333Z'%20fill='%237A7A7A'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_1_1172'%3e%3crect%20width='22'%20height='22'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e"
              width="22"
              height="22"
            />
          </button>
          <input
            className="form-control custom-input-search"
            type="search"
            placeholder="Search for your favorite groups in ATG"
            aria-label="Search"
          />
        </form>
        <div className="d-flex align-items-center gap-1">
          <Button
            className="btn custom-btn-create p-0 m-0"
            onClick={handleShow}
          >
            Create Account.{" "}
            <span className="text-primary fw-bold">It's Free!</span>
          </Button>
          <div className="d-flex align-items-center">
            <img
              className="rounded-circle"
              alt="Profile"
              src="data:image/svg+xml,%3csvg%20width='22'%20height='22'%20viewBox='0%200%2022%2022'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='baseline-arrow_drop_down-24px'%20clip-path='url(%23clip0_1_1136)'%3e%3cpath%20id='Vector'%20d='M6.41667%209.16669L11%2013.75L15.5833%209.16669H6.41667Z'%20fill='black'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_1_1136'%3e%3crect%20width='22'%20height='22'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e"
            />
          </div>
          <Modal show={show} onHide={handleClose} centered>
            <Modal.Header closeButton>
              <Modal.Title>
                Let's learn, share & inspire each other with our passion for
                computer engineering. Sign up now 🤘🏼
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Container>
                <Row className="justify-content-between mb-4">
                  <Col>
                    <h4 className="fw-bold">Create Account</h4>
                  </Col>
                  <Col className="text-end">
                    <Button className="btn" variant="link">
                      Already have an account?{" "}
                      <span className="text-primary">Sign In</span>
                    </Button>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form>
                      <Form.Group className="mb-3" controlId="formFirstName">
                        <Form.Control type="text" placeholder="First Name" />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="formLastName">
                        <Form.Control type="text" placeholder="Last Name" />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="formEmail">
                        <Form.Control type="email" placeholder="Email" />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="formPassword">
                        <Form.Control type="password" placeholder="Password" />
                      </Form.Group>
                      <Form.Group
                        className="mb-3"
                        controlId="formConfirmPassword"
                      >
                        <Form.Control
                          type="password"
                          placeholder="Confirm Password"
                        />
                      </Form.Group>
                      <Button
                        variant="primary"
                        type="submit"
                        className="w-100 rounded-5 mb-3"
                      >
                        Create Account
                      </Button>
                      <Button variant="outline-primary" className="w-100 mb-2">
                        Sign Up with Facebook
                      </Button>
                      <Button variant="outline-danger" className="w-100">
                        Sign Up with Google
                      </Button>
                      <p className="text-center mt-3">
                        By signing up, you agree to our Terms & conditions,
                        Privacy policy
                      </p>
                    </Form>
                  </Col>
                  <Col className="d-none d-md-block">
                    <img
                      src="/assets/signup-OCG-APNN.svg"
                      alt="atg-illustration"
                      className="img-fluid"
                    />
                  </Col>
                </Row>
              </Container>
            </Modal.Body>
          </Modal>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

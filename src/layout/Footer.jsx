import { Link } from "react-router-dom";
import Modal, { ModalAgent } from "../components/modal";
import { useState } from "react";
import { _adr } from "../rout";

const Footer = ({ msisdn }) => {
  const mdb = window["mdb"];
  return (
    <>
      <footer>
        <div className="container">
          <div className="holder-top-footer">
            <div className="row">
              <div className="col-md-6">
                <a className="holder-logo">
                  <img
                    src={process.env.PUBLIC_URL + "/content/images/logo.webp"}
                    alt=""
                  />
                </a>
              </div>
              <div className="col-md-6 m-auto d-none d-sm-block">
                <div className="holder-show-social">
                  <div className="row">
                    <div className="col-xl-10">
                      <ul className="nav nav-pills nav-justified">
                        <li className="nav-item">
                          <a href="https://www.aparat.com/satrap.pos">
                            <i className="icon-aparat"></i>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a href="#">
                            <i className="icon-whatsapp"></i>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a href="https://instagram.com/mysatrap.pos?igshid=NTc4MTIwNjQ2YQ==">
                            <i className="icon-instagram"></i>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a href="https://www.linkedin.com/company/mysatrap/?viewAsMember=true">
                            <i className="icon-linkedIn"></i>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a href="#">
                            <i className="icon-telegram"></i>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a href="#">
                            <i className="icon-youTube"></i>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a href="#">
                            <i className="icon-twitter"></i>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a href="#">
                            <i className="icon-facebook"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="holder-footer-content">
            <div className="row">
              <div className="col-xl-3 col-lg-3 col-md-4 col-6">
                <div className="holder-list">
                  <h3>راهکارهای ساتراپ</h3>
                  <ul className="list-unstyled">
                    <li>
                      <Link to={_adr.Root + _adr.Management}>
                        راهکار مدیریت رستوران
                      </Link>
                    </li>
                    <li>
                      <Link to={_adr.Root + _adr.Managementshop}>
                        راهکار مدیریت فروشگاه
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-2 col-lg-2 col-md-4">
                <div className="holder-list">
                  <h3>پیوستن به ساتراپ</h3>
                  <ul className="list-unstyled">
                    <li>
                      <a
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          let popRequest =
                            document.getElementById("popRequestAgent");
                          new mdb.Modal(popRequest).show();
                        }}
                      >
                        درخواست نمایندگی
                      </a>
                    </li>
                    <li className="d-none">
                      <a href="#">موقعیت‌ها شغلی</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-2 col-lg-2 col-md-4 col-6">
                <div className="holder-list">
                  <h3>پیوند‌های مفید</h3>
                  <ul className="list-unstyled">
                    <li>
                      <Link to={_adr.Root + _adr.About}>درباره ساتراپ</Link>
                    </li>
                    <li>
                      <a href="https://blog.mysatrap.com">وبلاگ</a>
                    </li>
                    <li>
                      <Link to={_adr.Root + _adr.Agent}>فهرست نمایندگی‌ها</Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-xl-5 col-lg-5">
                <div className="holder-contactus">
                  <h3>تماس با ما</h3>
                  <ul className="list-unstyled">
                    <li>
                      <a href="#">
                        <i className="icon-marker"></i> خیابان ولیعصر، پایین‌تر
                        از چهارراه پارک‌وی، کوچه مهناز، پلاک ۸
                      </a>
                    </li>
                    <li>
                      <a href="tel:02196622220">
                        <i className="icon-phone"></i>{" "}
                        <span dir="ltr">۰۲۱-۹۶۶۲۲۲۲۰</span>
                      </a>
                    </li>
                    <li>
                      <a href="mail:contact@mysatrap.com">
                        <i className="icon-mail"></i>{" "}
                        <span dir="ltr"> contact@mysatrap.com </span>
                      </a>
                    </li>
                  </ul>
                  <div className="holder-show-social d-block d-sm-none">
                    <div className="row">
                      <div className="col-xl-10">
                        <ul className="nav nav-pills nav-justified">
                          <li className="nav-item">
                            <a href="https://www.aparat.com/satrap.pos">
                              <i className="icon-aparat"></i>
                            </a>
                          </li>
                          <li className="nav-item">
                            <a href="#">
                              <i className="icon-whatsapp"></i>
                            </a>
                          </li>
                          <li className="nav-item">
                            <a href="https://instagram.com/mysatrap.pos?igshid=NTc4MTIwNjQ2YQ==">
                              <i className="icon-instagram"></i>
                            </a>
                          </li>
                          <li className="nav-item">
                            <a href="https://www.linkedin.com/company/mysatrap/?viewAsMember=true">
                              <i className="icon-linkedIn"></i>
                            </a>
                          </li>
                          <li className="nav-item">
                            <a href="#">
                              <i className="icon-telegram"></i>
                            </a>
                          </li>
                          <li className="nav-item">
                            <a href="#">
                              <i className="icon-youTube"></i>
                            </a>
                          </li>
                          <li className="nav-item">
                            <a href="#">
                              <i className="icon-twitter"></i>
                            </a>
                          </li>
                          <li className="nav-item">
                            <a href="#">
                              <i className="icon-facebook"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="holder-icon-certificate">
                    <ul className="nav nav-pills nav-justified">
                      <li className="nav-item">
                        <img
                          src={
                            process.env.PUBLIC_URL +
                            "/content/images/cert/enamad.png"
                          }
                          alt=""
                        />
                      </li>
                      <li className="nav-item">
                        <img
                          src={
                            process.env.PUBLIC_URL +
                            "/content/images/cert/danesh.png"
                          }
                          alt=""
                        />
                      </li>
                      <li className="nav-item">
                        <img
                          src={
                            process.env.PUBLIC_URL +
                            "/content/images/cert/etehadie.png"
                          }
                          alt=""
                        />
                      </li>
                      <li className="nav-item">
                        <img
                          src={
                            process.env.PUBLIC_URL +
                            "/content/images/cert/anformatic.png"
                          }
                          alt=""
                        />
                      </li>
                      <li className="nav-item">
                        <img
                          src={
                            process.env.PUBLIC_URL +
                            "/content/images/cert/nezam-senfi.png"
                          }
                          alt=""
                        />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <Modal msisdn={!!msisdn ? msisdn : ""} />
      <ModalAgent msisdn={!!msisdn ? msisdn : ""} />
    </>
  );
};

export default Footer;

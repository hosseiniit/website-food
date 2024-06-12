import Header from "./../layout/header";
import Footer from "./../layout/Footer";
import Animista, { AnimistaTypes } from "react-animista";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { _adr } from "../rout";
const Home = () => {
  useEffect(() => {}, []);
  return (
    <>
      <Header />
      <div className="home-container">
        <div className="holder-banner">
          <div className="container">
            <div className="container-banner">
              <div className="holder-banner-home">
                <div className="holder-reletive">
                  <div className="holder-icon">
                    <div className="row">
                      <div className="col-md-3 col-6">
                        <div className="list-text">
                          <div className="item">
                            <img
                              src={
                                process.env.PUBLIC_URL +
                                "/content/images/home/wallet.png"
                              }
                              alt=""
                            />
                          </div>
                          <div className="item right-text">
                            <img
                              src={
                                process.env.PUBLIC_URL +
                                "/content/images/home/vafadari.png"
                              }
                              alt=""
                            />
                          </div>
                          <div className="item">
                            <img
                              src={
                                process.env.PUBLIC_URL +
                                "/content/images/home/anbardari.png"
                              }
                              alt=""
                            />
                          </div>
                          <div className="holder-arrow">
                            <img
                              src={
                                process.env.PUBLIC_URL +
                                "/content/images/home/arrow.png"
                              }
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 m-auto">
                        <div className="holder-title">
                          نرم افزار جامع مبتنی بر فضای ابری مناسب برای همه
                          &nbsp;
                          <span>رستوران‌ها </span>و<span>فروشگاه‌ها</span>
                        </div>
                      </div>
                      <div className="col-md-3 col-6">
                        <div className="list-text">
                          <div className="item">
                            <img
                              src={
                                process.env.PUBLIC_URL +
                                "/content/images/home/sell-onlinee.png"
                              }
                              alt=""
                            />
                          </div>
                          <div className="item left-text">
                            <img
                              src={
                                process.env.PUBLIC_URL +
                                "/content/images/home/accounting.png"
                              }
                              alt=""
                            />
                          </div>
                          <div className="item">
                            <img
                              src={
                                process.env.PUBLIC_URL +
                                "/content/images/home/give-request.png"
                              }
                              alt=""
                            />
                          </div>
                          <div className="holder-arrow">
                            <img
                              src={
                                process.env.PUBLIC_URL +
                                "/content/images/home/arrow.png"
                              }
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="holder-preview">
                  <div className="item">
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "/content/images/home/side-0.png"
                      }
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                  <div className="item">
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "/content/images/home/side-1.png"
                      }
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                  <div className="item">
                    <img
                      src={
                        process.env.PUBLIC_URL + "/content/images/home/side.png"
                      }
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="holder-services">
          <div className="container">
            <span className="line"></span>
            <h2>ویژگی‌های ساتراپ</h2>
            <span>راهکار ابری مدیریت یکپارچه کسب و کار</span>
            <div className="holder-show-item">
              <div className="row">
                <div className="col-md-4">
                  <div className="item">
                    <div className="holder-icon">
                      <i className="icon-getway">
                        <span className="path1"></span>
                        <span className="path2"></span>
                      </i>
                    </div>
                    <div className="holder-text">
                      <h3>روش‌های نوین پرداخت</h3>
                      <p>ارائه ۶ روش متفاوت پرداخـت</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="item">
                    <div className="holder-icon">
                      <i className="icon-opration">
                        <span className="path1"></span>
                        <span className="path2"></span>
                      </i>
                    </div>
                    <div className="holder-text">
                      <h3>سرعت در عملکرد</h3>
                      <p>حفـظ سـرعت در عملکـرد در طـول زمـان</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="item">
                    <div className="holder-icon">
                      <i className="icon-cloud">
                        <span className="path1"></span>
                        <span className="path2"></span>
                      </i>
                    </div>
                    <div className="holder-text">
                      <h3>تکنولوژی ابری</h3>
                      <p>
                        کاهش چشمگیر هزینه‌‌ها بادسترسی به نرم‌افزار در هر زمان و
                        مکان
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="item">
                    <div className="holder-icon">
                      <i className="icon-casting">
                        <span className="path1"></span>
                        <span className="path2"></span>
                      </i>
                    </div>
                    <div className="holder-text">
                      <h3>استفاده بر روی هر دستگاه</h3>
                      <p>
                        امکان استفاده بر روی لپتاپ، تبلت، تلفن همراه، پوز
                        فروشگاهی و ...
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="item">
                    <div className="holder-icon">
                      <i className="icon-security">
                        <span className="path1"></span>
                        <span className="path2"></span>
                      </i>
                    </div>
                    <div className="holder-text">
                      <h3>امنیت بالا</h3>
                      <p>
                        تضمین امنیت اطلاعات با نگهداری بر روی دیتاسنترهای
                        قدرتمند
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="item">
                    <div className="holder-icon">
                      <i className="icon-installation">
                        <span className="path1"></span>
                        <span className="path2"></span>
                      </i>
                    </div>
                    <div className="holder-text">
                      <h3>استقرار و راه اندازی آسان</h3>
                      <p>راه‌اندازی و استقرار نرم‌افزار درکمترین زمان ممکن</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="holder-property">
          <div className="container">
            <div className="item">
              <div className="holder-over">
                <span className="d-none d-sm-block">
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/content/images/home/arrow-big.png"
                    }
                    alt=""
                  />
                </span>
                <div className="row">
                  <div className="col-md-7">
                    <div className="holder-text">
                      <h3>مدیریت رستوران</h3>
                      <p>
                        عملیات روزانه رستوران خود را از خرید مواد اولیه و
                        انبارداری تا
                        <br />
                        سفارش‌گیری، پرداخت و باشگاه مشتریان، به آسانی مدیریت
                        کنید.
                        <br />
                      </p>
                      <strong>امکانات نرم‌افزار مدیریت رستوران ساتراپ:</strong>
                      <ul className="list-unstyled">
                        <li>منو دیجیتال</li>
                        <li>سفارش آنلاین</li>
                        <li>مدیریت شعب</li>
                        <li>مرکز تماس</li>
                        <li>انبارداری</li>
                        <li>حسابداری</li>
                        <li>باشگاه مشتریان</li>
                      </ul>
                      <div className="holder-button">
                        <Link to={_adr.Root + _adr.Management} className="btn">
                          اطلاعات بیشتر
                        </Link>
                      </div>
                      <div className="text-center d-block d-sm-none">
                        <img
                          src={
                            process.env.PUBLIC_URL +
                            "/content/images/home/arrow-big.png"
                          }
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-5">
                    <div className="holder-img">
                      <figure>
                        <img
                          src={
                            process.env.PUBLIC_URL +
                            "/content/images/home/managment-soft.png"
                          }
                          className="img-fluid"
                          alt=""
                        />
                      </figure>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="holder-over">
                <span className="d-none d-sm-block">
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/content/images/home/arrow-big.png"
                    }
                    alt=""
                  />
                </span>
                <div className="row">
                  <div className="col-xl-5 col-lg-5 col-md-5">
                    <div className="holder-text">
                      <h3>مدیریت فروشگاه</h3>
                      <p>
                        فروش خود را به صورت یکپارچه با انبار، حسابداری و باشگاه
                        مشتریان مدیریت کنید و با بهبود تجربه فروش، بیشتر
                        بفروشید.
                        <br />
                      </p>
                      <strong>امکانات نرم‌افزار فروش فروشگاهی:</strong>
                      <ul className="list-unstyled">
                        <li>نرم افزار فروش فروشگاهی نسخه اندروید</li>
                        <li>باشگاه مشتریان</li>
                        <li>انبارداری</li>
                        <li>حسابداری</li>
                      </ul>
                      <div className="holder-button">
                        <Link
                          to={_adr.Root + _adr.Managementshop}
                          className="btn"
                        >
                          اطلاعات بیشتر
                        </Link>
                      </div>
                      <div className="text-center d-block d-sm-none">
                        <img
                          src={
                            process.env.PUBLIC_URL +
                            "/content/images/home/arrow-big.png"
                          }
                          alt=""
                        />
                      </div>
                    </div>
                  </div>

                  <div className="col-xl-2 col-lg-2 col-md-2"></div>
                  <div className="col-xl-5 col-lg-5 col-md-5">
                    <div className="holder-img">
                      <figure>
                        <img
                          src={
                            process.env.PUBLIC_URL +
                            "/content/images/home/managment-shop.png"
                          }
                          className="img-fluid"
                          alt=""
                        />
                      </figure>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="holder-parallax">
          <div className="container">
            <div className="parallax-holder">
              <div className="parallax-text-over">
                <div className="row">
                  <div className="col-md-6 m-auto">
                    <div className="holder-text">
                      <h3>تکنولوژی ساتراپ</h3>
                      <p>
                        ساتراپ به شما کمک می کند تا از بهترین تکنولوژی ها جهت
                        تسهیل
                        <br />
                        فعالیت روزانه کسب و کار خود استفاده کنید و با کنترل همه
                        جانبه ، کسب
                        <br />و کار خود را به بهترین شکل مدیریت کنید.
                      </p>
                      <div className="holder-button">
                        <Link to={_adr.Root + _adr.About} className="btn">
                          اطلاعات بیشتر
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="holder-img">
                      <figure>
                        <img
                          src={
                            process.env.PUBLIC_URL +
                            "/content/images/home/hand-tablet.png"
                          }
                          className="img-fluid"
                          alt=""
                        />
                      </figure>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="holder-partners">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="holder-text text-center">
                  <h2>همکاران و شرکا ساتراپ</h2>
                </div>
              </div>
              <div className="col-md-12">
                <div className="holder-show-logo">
                  <div className="row">
                    <div className="col-md-2 col-2">
                      <div className="item">
                        <img
                          src={
                            process.env.PUBLIC_URL +
                            "/content/images/home/logo/irankish.png"
                          }
                          className="img-fluid"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="col-md-2 col-2">
                      <div className="item">
                        <img
                          src={
                            process.env.PUBLIC_URL +
                            "/content/images/home/logo/sep.png"
                          }
                          className="img-fluid"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="col-md-2 col-2">
                      <div className="item">
                        <img
                          src={
                            process.env.PUBLIC_URL +
                            "/content/images/home/logo/zarin-plus.png"
                          }
                          className="img-fluid"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="col-md-2 col-2">
                      <div className="item">
                        <img
                          src={
                            process.env.PUBLIC_URL +
                            "/content/images/home/logo/snap-group.png"
                          }
                          className="img-fluid"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="col-md-2 col-2">
                      <div className="item">
                        <img
                          src={
                            process.env.PUBLIC_URL +
                            "/content/images/home/logo/asanpardakht.png"
                          }
                          className="img-fluid"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="col-md-2 col-2">
                      <div className="item">
                        <img
                          src={
                            process.env.PUBLIC_URL +
                            "/content/images/home/logo/pasargad-bank.png"
                          }
                          className="img-fluid"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="col-md-2 col-2">
                      <div className="item">
                        <img
                          src={
                            process.env.PUBLIC_URL +
                            "/content/images/home/logo/parsi-map.png"
                          }
                          className="img-fluid"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="col-md-2 col-2">
                      <div className="item">
                        <img
                          src={
                            process.env.PUBLIC_URL +
                            "/content/images/home/logo/digify.png"
                          }
                          className="img-fluid"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="col-md-2 col-2">
                      <div className="item">
                        <img
                          src={
                            process.env.PUBLIC_URL +
                            "/content/images/home/logo/behpardakht.png"
                          }
                          className="img-fluid"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="col-md-2 col-2">
                      <div className="item">
                        <img
                          src={
                            process.env.PUBLIC_URL +
                            "/content/images/home/logo/accountick.png"
                          }
                          className="img-fluid"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="col-md-2 col-2">
                      <div className="item">
                        <img
                          src={
                            process.env.PUBLIC_URL +
                            "/content/images/home/logo/webjar.png"
                          }
                          className="img-fluid"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="col-md-2 col-2">
                      <div className="item">
                        <img
                          src={
                            process.env.PUBLIC_URL +
                            "/content/images/home/logo/allopayk.png"
                          }
                          className="img-fluid"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                  <div className="holder-button">
                    <Link to={_adr.Root + _adr.About} className="btn">
                      درباره ما
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;

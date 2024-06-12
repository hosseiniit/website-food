import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export class SlideManagment extends Component {
  state = {};
  render() {
    const settings = {
      arrows: false,
      slidesToShow: 5,
      slidesToScroll: 5,
      centerMode: false,
      variableWidth: false,
      infinite: false,
      dots: false,
      dir: true,
      responsive: [
        {
          breakpoint: 1030,
          settings: {
            arrows: false,
            slidesToShow: 4,
            slidesToScroll: 4,
            centerMode: true,
            variableWidth: false,
            infinite: true,
          },
        },
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            slidesToShow: 3,
            slidesToScroll: 3,
            centerMode: true,
            variableWidth: false,
            infinite: true,
          },
        },
        {
          breakpoint: 425,
          settings: {
            arrows: false,
            slidesToShow: 2,
            slidesToScroll: 2,
            centerMode: true,
            variableWidth: false,
            infinite: true,
          },
        },
        {
          breakpoint: 375,
          settings: {
            arrows: true,
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <>
        <div className="holder-slider" dir="rtl">
          <Slider {...settings}>
            <div className="holder-item">
              <div className="item">
                <div className="holder-image">
                  <figure>
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "/content/images/managment/slide-01.jpg"
                      }
                      className="img-fluid"
                      alt=""
                    />
                  </figure>
                  <a href="#">رستوران</a>
                </div>
              </div>
            </div>
            <div className="holder-item">
              <div className="item">
                <div className="holder-image">
                  <figure>
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "/content/images/managment/slide-02.jpg"
                      }
                      className="img-fluid"
                      alt=""
                    />
                  </figure>
                  <a href="#">رستوران‌های زنجیره‌ای</a>
                </div>
              </div>
            </div>
            <div className="holder-item">
              <div className="item">
                <div className="holder-image">
                  <figure>
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "/content/images/managment/slide-03.jpg"
                      }
                      className="img-fluid"
                      alt=""
                    />
                  </figure>
                  <a href="#">فودکورت</a>
                </div>
              </div>
            </div>
            <div className="holder-item">
              <div className="item">
                <div className="holder-image">
                  <figure>
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "/content/images/managment/slide-04.jpg"
                      }
                      className="img-fluid"
                      alt=""
                    />
                  </figure>
                  <a href="#">فست فود</a>
                </div>
              </div>
            </div>
            <div className="holder-item">
              <div className="item">
                <div className="holder-image">
                  <figure>
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "/content/images/managment/slide-05.jpg"
                      }
                      className="img-fluid"
                      alt=""
                    />
                  </figure>
                  <a href="#">کافی شاپ</a>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </>
    );
  }
}
export class SlideManagmentShop extends Component {
  state = {};
  render() {
    const settings = {
      arrows: false,
      slidesToShow: 5,
      slidesToScroll: 5,
      centerMode: false,
      variableWidth: false,
      infinite: true,
      dots: false,
      dir: true,
      responsive: [
        {
          breakpoint: 1030,
          settings: {
            arrows: false,
            slidesToShow: 4,
            slidesToScroll: 4,
          },
        },
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            slidesToShow: 3,
            slidesToScroll: 3,
          },
        },
        {
          breakpoint: 425,
          settings: {
            arrows: false,
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 375,
          settings: {
            arrows: false,
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <>
        <div className="holder-slider" dir="rtl">
          <Slider {...settings}>
            <div className="holder-item">
              <div className="item">
                <div className="holder-image">
                  <figure>
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "/content/images/managment/rest/slide-01.jpg"
                      }
                      className="img-fluid"
                      alt=""
                    />
                  </figure>
                  <a href="#">قنادی</a>
                </div>
              </div>
            </div>
            <div className="holder-item">
              <div className="item">
                <div className="holder-image">
                  <figure>
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "/content/images/managment/rest/slide-02.jpg"
                      }
                      className="img-fluid"
                      alt=""
                    />
                  </figure>
                  <a href="#">وسایل خانه</a>
                </div>
              </div>
            </div>
            <div className="holder-item">
              <div className="item">
                <div className="holder-image">
                  <figure>
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "/content/images/managment/rest/slide-03.jpg"
                      }
                      className="img-fluid"
                      alt=""
                    />
                  </figure>
                  <a href="#">فروش لباس</a>
                </div>
              </div>
            </div>
            <div className="holder-item">
              <div className="item">
                <div className="holder-image">
                  <figure>
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "/content/images/managment/rest/slide-04.jpg"
                      }
                      className="img-fluid"
                      alt=""
                    />
                  </figure>
                  <a href="#">فروشگاه مواد پروتئینی</a>
                </div>
              </div>
            </div>
            <div className="holder-item">
              <div className="item">
                <div className="holder-image">
                  <figure>
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "/content/images/managment/rest/slide-05.jpg"
                      }
                      className="img-fluid"
                      alt=""
                    />
                  </figure>
                  <a href="#">فروشگاه‌های زنجیره‌ای</a>
                </div>
              </div>
            </div>
            <div className="holder-item">
              <div className="item">
                <div className="holder-image">
                  <figure>
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "/content/images/managment/rest/slide-04.jpg"
                      }
                      className="img-fluid"
                      alt=""
                    />
                  </figure>
                  <a href="#">فروشگاه مواد پروتئینی</a>
                </div>
              </div>
            </div>
            <div className="holder-item">
              <div className="item">
                <div className="holder-image">
                  <figure>
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "/content/images/managment/rest/slide-05.jpg"
                      }
                      className="img-fluid"
                      alt=""
                    />
                  </figure>
                  <a href="#">فروشگاه‌های زنجیره‌ای</a>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </>
    );
  }
}
export class SlideBenfits extends Component {
  render() {
    const settings = {
      arrows: true,
      slidesToShow: 5,
      slidesToScroll: 5,
      centerMode: false,
      variableWidth: false,
      infinite: false,
      dots: false,
      dir: true,
      responsive: [
        {
          breakpoint: 1030,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            arrows: false,
            centerMode: true,
            variableWidth: false,
            infinite: true,
          },
        },
        {
          breakpoint: 425,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            centerMode: true,
            variableWidth: false,
            infinite: true,
          },
        },
      ],
    };
    return (
      <>
        <div className="holder-slider" dir="rtl">
          <Slider {...settings}>
            <div className="holder-item">
              <div className="item">
                <div className="holder-text">
                  <h3>کاهش هزینه</h3>
                  <p>عدم نیاز به سرور و سیستم‌های پیچیده</p>
                </div>
              </div>
            </div>
            <div className="holder-item">
              <div className="item">
                <div className="holder-text">
                  <h3>گزارشگیری زنده</h3>
                  <p>امکان گزارشگیری زنده بدون محدودیت زمان و مکان</p>
                </div>
              </div>
            </div>
            <div className="holder-item">
              <div className="item">
                <div className="holder-text">
                  <h3>مدیریت شعب</h3>
                  <p>امکان مدیریت شعب به یکپارچه</p>
                </div>
              </div>
            </div>
            <div className="holder-item">
              <div className="item">
                <div className="holder-text">
                  <h3>حامی محیط زیست</h3>
                  <p>حذف منو کاغذی و ...</p>
                </div>
              </div>
            </div>
            <div className="holder-item">
              <div className="item">
                <div className="holder-text">
                  <h3>مدرن و بروز</h3>
                  <p>امکان بروزرسانی سیستم به صورت برخط</p>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </>
    );
  }
}
export class SlideBenfitsRest extends Component {
  render() {
    const settings = {
      arrows: true,
      slidesToShow: 3,
      slidesToScroll: 3,
      centerMode: false,
      variableWidth: false,
      infinite: false,
      dots: false,
      dir: true,
      responsive: [
        {
          breakpoint: 425,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 375,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <>
        <div className="holder-slider" dir="rtl">
          <Slider {...settings}>
            <div className="holder-item">
              <div className="item">
                <div className="holder-text">
                  <h3>کاهش هزینه</h3>
                  <p>عدم نیاز به سرور و سیستم‌های پیچیده</p>
                </div>
              </div>
            </div>

            <div className="holder-item">
              <div className="item">
                <div className="holder-text">
                  <h3>چند سطحی بودن گروه کالاها</h3>
                  <p>امکان تعریف چند سطح از گروه کالا بر اساس مجموعه کالاها</p>
                </div>
              </div>
            </div>
            <div className="holder-item">
              <div className="item">
                <div className="holder-text">
                  <h3>مدرن و بروز</h3>
                  <p>امکان بروزرسانی سیستم به صورت برخط</p>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </>
    );
  }
}
export class SlideSublayer extends Component {
  render() {
    const settings = {
      arrows: true,
      slidesToShow: 7,
      slidesToScroll: 7,
      centerMode: false,
      variableWidth: false,
      infinite: false,
      dots: false,
      dir: true,
      responsive: [
        {
          breakpoint: 1030,
          settings: {
            slidesToShow: 6,
            slidesToScroll: 6,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
            arrows: false,
            centerMode: true,
            variableWidth: false,
            infinite: true,
          },
        },
        {
          breakpoint: 425,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            arrows: false,
            centerMode: true,
            variableWidth: false,
            infinite: true,
          },
        },
        {
          breakpoint: 375,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            centerMode: true,
            variableWidth: false,
            infinite: true,
          },
        },
      ],
    };
    return (
      <>
        <div className="holder-slider" dir="rtl">
          <Slider {...settings}>
            <div className="holder-item">
              <div className="item">
                <a href="#">
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/content/images/managment/logo/logo-01.png"
                    }
                    className="img-fluid"
                    alt=""
                  />
                </a>
              </div>
            </div>
            <div className="holder-item">
              <div className="item">
                <a href="#">
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/content/images/managment/logo/logo-02.png"
                    }
                    className="img-fluid"
                    alt=""
                  />
                </a>
              </div>
            </div>
            <div className="holder-item">
              <div className="item">
                <a href="#">
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/content/images/managment/logo/logo-03.png"
                    }
                    className="img-fluid"
                    alt=""
                  />
                </a>
              </div>
            </div>
            <div className="holder-item">
              <div className="item">
                <a href="#">
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/content/images/managment/logo/logo-04.png"
                    }
                    className="img-fluid"
                    alt=""
                  />
                </a>
              </div>
            </div>
            <div className="holder-item">
              <div className="item">
                <a href="#">
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/content/images/managment/logo/logo-05.png"
                    }
                    className="img-fluid"
                    alt=""
                  />
                </a>
              </div>
            </div>
            <div className="holder-item">
              <div className="item">
                <a href="#">
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/content/images/managment/logo/logo-06.png"
                    }
                    className="img-fluid"
                    alt=""
                  />
                </a>
              </div>
            </div>
            <div className="holder-item">
              <div className="item">
                <a href="#">
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/content/images/managment/logo/logo-07.png"
                    }
                    className="img-fluid"
                    alt=""
                  />
                </a>
              </div>
            </div>
          </Slider>
        </div>
      </>
    );
  }
}
export class SlideSublayerRestorant extends Component {
  render() {
    const settings = {
      arrows: true,
      slidesToShow: 7,
      slidesToScroll: 7,
      centerMode: false,
      variableWidth: false,
      infinite: false,
      dots: false,
      dir: true,
      responsive: [
        {
          breakpoint: 1030,
          settings: {
            slidesToShow: 6,
            slidesToScroll: 6,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
            arrows: false,
            centerMode: true,
            variableWidth: false,
            infinite: true,
          },
        },
        {
          breakpoint: 425,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            arrows: false,
            centerMode: true,
            variableWidth: false,
            infinite: true,
          },
        },
        {
          breakpoint: 375,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            centerMode: true,
            variableWidth: false,
            infinite: true,
          },
        },
      ],
    };
    return (
      <>
        <div className="holder-slider" dir="rtl">
          <Slider {...settings}>
            <div className="holder-item">
              <div className="item">
                <a href="#">
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/content/images/managment/logo-1/01.png"
                    }
                    className="img-fluid"
                    alt=""
                  />
                </a>
              </div>
            </div>
            <div className="holder-item">
              <div className="item">
                <a href="#">
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/content/images/managment/logo-1/02.png"
                    }
                    className="img-fluid"
                    alt=""
                  />
                </a>
              </div>
            </div>
            <div className="holder-item">
              <div className="item">
                <a href="#">
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/content/images/managment/logo-1/03.png"
                    }
                    className="img-fluid"
                    alt=""
                  />
                </a>
              </div>
            </div>
            <div className="holder-item">
              <div className="item">
                <a href="#">
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/content/images/managment/logo-1/04.png"
                    }
                    className="img-fluid"
                    alt=""
                  />
                </a>
              </div>
            </div>
            <div className="holder-item">
              <div className="item">
                <a href="#">
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/content/images/managment/logo-1/05.png"
                    }
                    className="img-fluid"
                    alt=""
                  />
                </a>
              </div>
            </div>
            <div className="holder-item">
              <div className="item">
                <a href="#">
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/content/images/managment/logo-1/06.png"
                    }
                    className="img-fluid"
                    alt=""
                  />
                </a>
              </div>
            </div>
            <div className="holder-item">
              <div className="item">
                <a href="#">
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/content/images/managment/logo-1/07.png"
                    }
                    className="img-fluid"
                    alt=""
                  />
                </a>
              </div>
            </div>
          </Slider>
        </div>
      </>
    );
  }
}
export class SliderAgent extends Component {
  render() {
    const settings = {
      arrows: true,
      slidesToShow: 4,
      slidesToScroll: 4,
      centerMode: false,
      variableWidth: false,
      infinite: false,
      dots: false,
      dir: true,
      responsive: [
        {
          breakpoint: 780,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 425,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <>
        <div className="holder-slider-agent" dir="rtl">
          <Slider {...settings}>
            <div className="holder-item">
              <div className="item">
                <div className="holder-img">
                  <img
                    src={
                      process.env.PUBLIC_URL + "/content/images/aboutus/map.png"
                    }
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div className="holder-text">
                  <h2>نمایندگی ﺗﻬﺮان</h2>
                  <ul className="list-unstyled">
                    <li>
                      <i className="icon-marker"></i>
                      ﺗﻬﺮان، نیاوران، جنب پمپ بنزین نیاوران، کوچه تناولی، پلاک
                      ۱۸، واحد ۴۰۴
                    </li>
                    <li>
                      {" "}
                      <i className="icon-phone"></i>
                      <a href="tel:09129596074">09129596074</a>
                    </li>
                    <li>
                      <i className="icon-print"></i>
                      <a href="tel:02126253976">021-26253976</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="holder-item">
              <div className="item">
                <div className="holder-img">
                  <img
                    src={
                      process.env.PUBLIC_URL + "/content/images/aboutus/map.png"
                    }
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div className="holder-text">
                  <h2>نمایندگی اصفهان</h2>
                  <ul className="list-unstyled">
                    <li>
                      <i className="icon-marker"></i>
                      اصفهان، چهار باغ بالا، مجتمع کوثر، فاز ۱، طبقه ۴، واحد ۶۰۱
                    </li>
                    <li>
                      {" "}
                      <i className="icon-phone"></i>
                      <a href="tel:09133708533">09133708533</a>
                    </li>
                    <li>
                      <i className="icon-print"></i>
                      <a href="tel:03135035">031-35035</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="holder-item">
              <div className="item">
                <div className="holder-img">
                  <img
                    src={
                      process.env.PUBLIC_URL + "/content/images/aboutus/map.png"
                    }
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div className="holder-text">
                  <h2>نمایندگی اصفهان</h2>
                  <ul className="list-unstyled">
                    <li>
                      <i className="icon-marker"></i>
                      اصفهان، هشت بهشت غربی، حد فاصل چهارراه ملک و نشاط، ساختمان
                      شماره ۱۰۰
                    </li>
                    <li>
                      {" "}
                      <i className="icon-phone"></i>
                      <a href="tel:09120470913">09120470913</a>
                    </li>
                    <li>
                      <i className="icon-print"></i>
                      <a href="tel:03137190000">031-37190000</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="holder-item">
              <div className="item">
                <div className="holder-img">
                  <img
                    src={
                      process.env.PUBLIC_URL + "/content/images/aboutus/map.png"
                    }
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div className="holder-text">
                  <h2>نمایندگی یزد</h2>
                  <ul className="list-unstyled">
                    <li>
                      <i className="icon-marker"></i>
                      يزد، ميدان فرهنگ، خيابان استاد احمد آرام
                    </li>
                    <li>
                      {" "}
                      <i className="icon-phone"></i>
                      <a href="tel:09133566243">09133566243</a>
                    </li>
                    <li>
                      <i className="icon-print"></i>
                      <a href="tel:02191012500">021-91012500</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="holder-item">
              <div className="item">
                <div className="holder-img">
                  <img
                    src={
                      process.env.PUBLIC_URL + "/content/images/aboutus/map.png"
                    }
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div className="holder-text">
                  <h2>نمایندگی قم</h2>
                  <ul className="list-unstyled">
                    <li>
                      <i className="icon-marker"></i>
                      قم، خیابان خجسته، پاساژ آسیا، طبقه ۴، پلاک ۵۸
                    </li>
                    <li>
                      {" "}
                      <i className="icon-phone"></i>
                      <a href="tel:09127472470">09127472470</a>
                    </li>
                    <li>
                      <i className="icon-print"></i>
                      <a href="tel:0253400058">025-3400058</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="holder-item">
              <div className="item">
                <div className="holder-img">
                  <img
                    src={
                      process.env.PUBLIC_URL + "/content/images/aboutus/map.png"
                    }
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div className="holder-text">
                  <h2>نمایندگی سمنان</h2>
                  <ul className="list-unstyled">
                    <li>
                      <i className="icon-marker"></i>
                      سمنان، مهدیشهر، میدان نماز، بلوار جوادیان، نبش خیابان شهید
                      جعفری، ساختمان کیان، طبقه همکف
                    </li>
                    <li>
                      {" "}
                      <i className="icon-phone"></i>
                      <a href="tel:09122145638">09122145638</a>
                    </li>
                    <li>
                      <i className="icon-print"></i>
                      <a href="tel:02333342570">023-33342570</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </>
    );
  }
}

export class SliderCertificate extends Component {
  render() {
    const settings = {
      arrows: true,
      slidesToShow: 4,
      slidesToScroll: 4,
      centerMode: false,
      variableWidth: false,
      infinite: false,
      dots: false,
      dir: true,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 425,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <>
        <div className="holder-slider-cert" dir="rtl">
          <Slider {...settings}>
            <div className="holder-item">
              <div className="item">
                <figure>
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/content/images/aboutus/certification/cert-01.jpg"
                    }
                    className="img-fluid"
                    alt=""
                  />
                </figure>
                <div className="holder-text">
                  <span>Nobel Certification ISO 9001:2008</span>
                </div>
              </div>
            </div>
            <div className="holder-item">
              <div className="item">
                <figure>
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/content/images/aboutus/certification/cert-02.jpg"
                    }
                    className="img-fluid"
                    alt=""
                  />
                </figure>
                <div className="holder-text">
                  <span>Nobel Certification ISO 9001:2008</span>
                </div>
              </div>
            </div>
            <div className="holder-item">
              <div className="item">
                <figure>
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/content/images/aboutus/certification/cert-03.jpg"
                    }
                    className="img-fluid"
                    alt=""
                  />
                </figure>
                <div className="holder-text">
                  <span>Nobel Certification ISO 9001:2008</span>
                </div>
              </div>
            </div>
            <div className="holder-item">
              <div className="item">
                <figure>
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/content/images/aboutus/certification/cert-04.jpg"
                    }
                    className="img-fluid"
                    alt=""
                  />
                </figure>
                <div className="holder-text">
                  <span>Nobel Certification ISO 9001:2008</span>
                </div>
              </div>
            </div>
            <div className="holder-item">
              <div className="item">
                <figure>
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/content/images/aboutus/certification/cert-01.jpg"
                    }
                    className="img-fluid"
                    alt=""
                  />
                </figure>
                <div className="holder-text">
                  <span>Nobel Certification ISO 9001:2008</span>
                </div>
              </div>
            </div>
            <div className="holder-item">
              <div className="item">
                <figure>
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/content/images/aboutus/certification/cert-02.jpg"
                    }
                    className="img-fluid"
                    alt=""
                  />
                </figure>
                <div className="holder-text">
                  <span>Nobel Certification ISO 9001:2008</span>
                </div>
              </div>
            </div>
            <div className="holder-item">
              <div className="item">
                <figure>
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/content/images/aboutus/certification/cert-03.jpg"
                    }
                    className="img-fluid"
                    alt=""
                  />
                </figure>
                <div className="holder-text">
                  <span>Nobel Certification ISO 9001:2008</span>
                </div>
              </div>
            </div>
            <div className="holder-item">
              <div className="item">
                <figure>
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/content/images/aboutus/certification/cert-04.jpg"
                    }
                    className="img-fluid"
                    alt=""
                  />
                </figure>
                <div className="holder-text">
                  <span>Nobel Certification ISO 9001:2008</span>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </>
    );
  }
}

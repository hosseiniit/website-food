import Header from "./../layout/header";
import Footer from "./../layout/Footer";
import { SlideBenfits, SlideManagment, SlideSublayer } from "./slide-managment";
import { useEffect, useState } from "react";
import { setStyleMDB, validationMessage } from "../func/tools";
import "./../style/managment.css";
import { useFormik } from "formik";
import * as yup from "yup";
import Modal from "./modal";
const Management = () => {
  const mdb = window["mdb"];
  const [showTabOption, setShowTabOption] = useState("opt1");
  const [modalValue, setModalValue] = useState("");
  const formik = useFormik({
    initialValues: {
      username: "",
      msisdn: "",
    },
    validationSchema: yup.object({
      username: yup.string().required(validationMessage.required),
      msisdn: yup.string().required(validationMessage.required),
    }),
    onSubmit: async (values) => {},
  });
  useEffect(() => {
    setStyleMDB();
  }, []);
  const HandlePop = (e) => {
    e.preventDefault();
    let popRequest = document.getElementById("popRequest");
    new mdb.Modal(popRequest).show();
  };
  const handleChangeOpt = (value) => {
    setShowTabOption(value);
  };
  return (
    <>
      <div className="managment-holder">
        <div className="holder-banner">
          <div className="holder-header">
            <Header />
          </div>
          <div className="holder-banner-over">
            <div className="holder-fix">
              <div className="container">
                <div className="holder-text-over-banner">
                  <div className="holder-text">
                    <h3>
                      نرم‌افزار مدیریت رستورانی <span>ساتراپ</span>
                    </h3>
                    <p>
                      عملیات روزانه رستوران خود را از خرید مواد اولیه و
                      انبارداری تا سفارش‌گیری، پرداخت و باشگاه مشتریان، به آسانی
                      مدیریت کنید.
                    </p>
                    <div className="row justify-content-center">
                      <div className="col-xl-5 col-lg-6 col-md-8">
                        <div className="holder-input-form">
                          <div className="row-item">
                            <div className="holder-input">
                              <div className="form-outline">
                                <input
                                  type="text"
                                  id="form12"
                                  className="form-control"
                                />
                                <label className="form-label" htmlFor="form12">
                                  شماره تلفن خود را برای تماس وارد کنید
                                </label>
                              </div>
                            </div>
                            <div className="holder-button">
                              <button
                                type="submit"
                                className="btn"
                                onClick={(e) => {
                                  e.preventDefault();
                                  let popRequest =
                                    document.getElementById("popRequest");
                                  new mdb.Modal(popRequest).show();
                                  setModalValue(
                                    document.getElementById("form12").value,
                                  );
                                }}
                              >
                                درخواست مشاوره رایگان
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="holder-show-more">
                  <h4>برای چه کسب‌‌و‌کارهایی مناسب است؟</h4>
                </div>
              </div>
              <div className="holder-slider-banner">
                <div className="holder-slide-ab">
                  <div className="container">
                    <SlideManagment />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="managment-warraper">
          <div className="gap-managment"></div>
          <div className="show-feature">
            <div className="container">
              <h2>قابلیت‌های نرم‌افزار مدیریت رستوران </h2>
              <div className="show-list">
                <div className="row">
                  <div className="col-md-4">
                    <div className="holder-item">
                      <div className="item">
                        <a
                          role="button"
                          className="holder-arrow collapsed"
                          data-toggle="collapse"
                          href="#coll01"
                          aria-expanded="false"
                          aria-controls="coll01"
                          onClick={(e) => {
                            e.preventDefault();
                          }}
                        >
                          <i className="icon-expand"></i>
                          <i className="icon-collapse"></i>
                        </a>
                        <div className="holder-icon">
                          <i className="icon-new-getway">
                            <span className="path1"></span>
                            <span className="path2"></span>
                            <span className="path3"></span>
                          </i>
                        </div>
                        <h3>فروش</h3>
                        <div
                          className="collapse"
                          id="coll01"
                          aria-expanded="false"
                        >
                          <ul>
                            <li>سالن</li>
                            <li>حضوری</li>
                            <li>بیرون‌بر</li>
                            <li>سفارش‌گیری گارسون</li>
                            <li>کیوسک سفارش‌گیری</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="holder-item">
                      <div className="item">
                        <a
                          role="button"
                          className="holder-arrow collapsed"
                          data-toggle="collapse"
                          href="#coll02"
                          aria-expanded="false"
                          aria-controls="coll02"
                          onClick={(e) => {
                            e.preventDefault();
                          }}
                        >
                          <i className="icon-expand"></i>
                          <i className="icon-collapse"></i>
                        </a>
                        <div className="holder-icon">
                          <i className="icon-pickup">
                            <span className="path1"></span>
                            <span className="path2"></span>
                            <span className="path3"></span>
                          </i>
                        </div>
                        <h3>پرداخت</h3>
                        <div
                          className="collapse"
                          id="coll02"
                          aria-expanded="false"
                        >
                          <ul>
                            <li>امکان اتصال به دستگاه POS</li>
                            <li>
                              امکان پرداخت از طریق اپلیکیشن آپ و پوش پرداخت
                            </li>
                            <li>
                              امکان پرداخت اینترنتی از طریق ارسال پیامک لینک
                              پرداخت
                            </li>
                            <li>سفارش‌گیری گارسون</li>
                            <li>کیوسک سفارش‌گیری</li>
                            <li>امکان پرداخت از طریق کیف پول </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="holder-item">
                      <div className="item">
                        <a
                          role="button"
                          className="holder-arrow collapsed"
                          data-toggle="collapse"
                          href="#coll03"
                          aria-expanded="false"
                          aria-controls="coll03"
                          onClick={(e) => {
                            e.preventDefault();
                          }}
                        >
                          <i className="icon-expand"></i>
                          <i className="icon-collapse"></i>
                        </a>
                        <div className="holder-icon">
                          <i className="icon-management-warehouse">
                            <span className="path1"></span>
                            <span className="path2"></span>
                            <span className="path3"></span>
                            <span className="path4"></span>
                          </i>
                        </div>
                        <h3>مدیریت انبار</h3>
                        <div
                          className="collapse"
                          id="coll03"
                          aria-expanded="false"
                        >
                          <ul>
                            <li>یکپارچگی فرایند با سیستم فروش</li>
                            <li>
                              ثبت ورود و خروج انواع کالاها اعم از ماده اولیه،
                              نیمه ساخته و محصول
                            </li>
                            <li>
                              پشتیبانی از انبارداری چند شعبه‌ای همراه با
                              قیمت‌گذاری، انبارگردانی و مدیریت تولید
                            </li>
                            <li>
                              ارائه گزارش‌های متنوع مرور، کاردکس، خرید و فروش
                              فصلی، تامین کالا و ...
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="holder-item">
                      <div className="item">
                        <a
                          role="button"
                          className="holder-arrow collapsed"
                          data-toggle="collapse"
                          href="#coll04"
                          aria-expanded="false"
                          aria-controls="coll04"
                          onClick={(e) => {
                            e.preventDefault();
                          }}
                        >
                          <i className="icon-expand"></i>
                          <i className="icon-collapse"></i>
                        </a>
                        <div className="holder-icon">
                          <i className="icon-management-agent">
                            <span className="path1"></span>
                            <span className="path2"></span>
                            <span className="path3"></span>
                            <span className="path4"></span>
                          </i>
                        </div>
                        <h3>مدیریت شعب</h3>
                        <div
                          className="collapse"
                          id="coll04"
                          aria-expanded="false"
                        >
                          <ul>
                            <li>امکان مدیریت شعب به صورت یکپارچه</li>
                            <li>
                              امکان انجام تغییرات و اعمال آن بر روی کلیه شعب{" "}
                            </li>
                            <li>دریافت انواع گزارش به صورت کلی و تفکیکی</li>
                            <li>
                              امکان یکپارچگی انبار و حسابداری شعب با دفتر مرکزی
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="holder-item">
                      <div className="item">
                        <a
                          role="button"
                          className="holder-arrow collapsed"
                          data-toggle="collapse"
                          href="#coll05"
                          aria-expanded="false"
                          aria-controls="coll05"
                          onClick={(e) => {
                            e.preventDefault();
                          }}
                        >
                          <i className="icon-expand"></i>
                          <i className="icon-collapse"></i>
                        </a>
                        <div className="holder-icon">
                          <i className="icon-application">
                            <span className="path1"></span>
                            <span className="path2"></span>
                            <span className="path3"></span>
                          </i>
                        </div>
                        <h3>سامانه نوبت‌دهی و رزرواسیون</h3>
                        <div
                          className="collapse"
                          id="coll05"
                          aria-expanded="false"
                        >
                          <ul>
                            <li>امکان ثبت نوبت توسط مشتری</li>
                            <li>امکان رزرواسیون میز و دریافت بیعانه</li>
                            <li>
                              امکان نمایش نام مشتری و میز رزرو شده هنگام ثبت
                              سفارش
                            </li>
                            <li>امکان اختصاص میز به مشتریان براساس ثبت نوبت</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="holder-item">
                      <div className="item">
                        <a
                          role="button"
                          className="holder-arrow collapsed"
                          data-toggle="collapse"
                          href="#coll06"
                          aria-expanded="false"
                          aria-controls="coll06"
                          onClick={(e) => {
                            e.preventDefault();
                          }}
                        >
                          <i className="icon-expand"></i>
                          <i className="icon-collapse"></i>
                        </a>
                        <div className="holder-icon">
                          <i className="icon-delivery">
                            <span className="path1"></span>
                            <span className="path2"></span>
                            <span className="path3"></span>
                          </i>
                        </div>
                        <h3>مدیریت پیک</h3>
                        <div
                          className="collapse"
                          id="coll06"
                          aria-expanded="false"
                        >
                          <ul>
                            <li>امکان تعریف محله بر روی نقشه</li>
                            <li>امکان تعریف کرایه پیک براساس محله</li>
                            <li>امکان تعریف کرایه پیک بر اساس گروه مشتریان</li>
                            <li>
                              امکان تخصیص پیک به سفارش‌های تلفنی / آنلاین
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="holder-item">
                      <div className="item">
                        <a
                          role="button"
                          className="holder-arrow collapsed"
                          data-toggle="collapse"
                          href="#coll07"
                          aria-expanded="false"
                          aria-controls="coll07"
                          onClick={(e) => {
                            e.preventDefault();
                          }}
                        >
                          <i className="icon-expand"></i>
                          <i className="icon-collapse"></i>
                        </a>
                        <div className="holder-icon">
                          <i className="icon-analyst-report">
                            <span className="path1"></span>
                            <span className="path2"></span>
                            <span className="path3"></span>
                          </i>
                        </div>
                        <h3>گزارشات</h3>
                        <div
                          className="collapse"
                          id="coll07"
                          aria-expanded="false"
                        >
                          <ul>
                            <li>گزارش فروش روزانه</li>
                            <li>گزارش عملکرد پیک</li>
                            <li>گزارش عملکرد کارکنان</li>
                            <li>گزارش گردش کیف پول</li>
                            <li>گزارشات تغییرات قیمت</li>
                            <li>گزارش نظرسنجی پیامکی</li>

                            <li>گزارش جزئیات سفارش‌ها</li>
                            <li>
                              گزارش صندوق نقد بر اساس زمان عملیات، نوع و مبلغ
                              عملیات و ...
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="holder-item">
                      <div className="item">
                        <a
                          role="button"
                          className="holder-arrow collapsed"
                          data-toggle="collapse"
                          href="#coll08"
                          aria-expanded="false"
                          aria-controls="coll08"
                          onClick={(e) => {
                            e.preventDefault();
                          }}
                        >
                          <i className="icon-expand"></i>
                          <i className="icon-collapse"></i>
                        </a>
                        <div className="holder-icon">
                          <i className="icon-discount">
                            <span className="path1"></span>
                            <span className="path2"></span>
                            <span className="path3"></span>
                          </i>
                        </div>
                        <h3>وفاداری مشتریان</h3>
                        <div
                          className="collapse"
                          id="coll08"
                          aria-expanded="false"
                        >
                          <ul>
                            <li>امکان ایجاد کد تخفیف</li>
                            <li>امکان گروه بندی مشتریان</li>
                            <li>
                              امکان اختصاص خودکار اعتبار به کیف پول ساتراپ هریک
                              از مشتریان
                            </li>
                            <li>
                              امکان اعمال تخفیف پلکانی ـ درصدی به گروه مشتریان
                            </li>
                            <li>
                              امکان به اشتراک‌گذاری اعتبار کیف پول مشتریان میان
                              شعب مختلف فروشگاه
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="holder-item">
                      <div className="item">
                        <a
                          role="button"
                          className="holder-arrow collapsed"
                          data-toggle="collapse"
                          href="#coll09"
                          aria-expanded="false"
                          aria-controls="coll09"
                          onClick={(e) => {
                            e.preventDefault();
                          }}
                        >
                          <i className="icon-expand"></i>
                          <i className="icon-collapse"></i>
                        </a>
                        <div className="holder-icon">
                          <i className="icon-digital-menu">
                            <span className="path1"></span>
                            <span className="path2"></span>
                            <span className="path3"></span>
                            <span className="path4"></span>
                          </i>
                        </div>
                        <h3>منو دیجیتال</h3>
                        <div
                          className="collapse"
                          id="coll09"
                          aria-expanded="false"
                        >
                          <ul>
                            <li>رنگ‌بندی متناسب با برند</li>
                            <li>امکان سفارش‌گیری برای رستوران‌های زنجیره‌ای</li>

                            <li>امکان ثبت سفارش به صورت حضوری و بیرون‌بر</li>
                            <li>درگاه پرداخت آنلاین</li>
                            <li>چند زبانه بودن</li>
                            <li>
                              امکان استفاده از کیف پول اعتباری ساتراپ و آپ
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="holder-item">
                      <div className="item">
                        <a
                          role="button"
                          className="holder-arrow collapsed"
                          data-toggle="collapse"
                          href="#coll10"
                          aria-expanded="false"
                          aria-controls="coll10"
                          onClick={(e) => {
                            e.preventDefault();
                          }}
                        >
                          <i className="icon-expand"></i>
                          <i className="icon-collapse"></i>
                        </a>
                        <div className="holder-icon">
                          <i className="icon-callcenter">
                            <span className="path1"></span>
                            <span className="path2"></span>
                            <span className="path3"></span>
                          </i>
                        </div>
                        <h3>مرکز تماس</h3>
                        <div
                          className="collapse"
                          id="coll10"
                          aria-expanded="false"
                        >
                          <ul>
                            <li>
                              امکان دریافت سفارش‌های تلفنی از طریق مرکز تماس و
                              ثبت آن در نزدیک‌ترین شعبه به محل مشتری
                            </li>
                            <li>امکان ثبت اطلاعات مشترکین در تمامی شعب</li>
                            <li>ثبت مستقیم سفارشات در صندوق هر شعبه</li>
                            <li>
                              امکان تخصیص پیک به سفارش‌های تلفنی / آنلاین
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="pannel">
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <div className="holder-img">
                    <figure>
                      <img
                        src={
                          process.env.PUBLIC_URL +
                          "/content/images/managment/pannel.png"
                        }
                        className="img-fluid"
                        alt=""
                      />
                    </figure>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="holder-text">
                    <h2>مدیریت رستوران</h2>
                    <p>
                      عملیات روزانه رستوران خود را از خرید مواد اولیه و
                      انبارداری تا سفارش‌گیری، پرداخت و باشگاه مشتریان، به آسانی
                      مدیریت کنید. امکانات نرم‌افزار مدیریت رستوران ساتراپ:
                      <br />
                      <br />
                      <br />
                      امکانات نرم‌افزار مدیریت رستوران ساتراپ:
                    </p>
                    <div className="holder-list">
                      <ul className="list-unstyled">
                        <li>
                          <a className="btn btn-outline-primary" href="#">
                            منو دیجیتال رستوران و کافی‌شاپ
                          </a>
                        </li>
                        <li>
                          <a className="btn btn-outline-primary" href="#">
                            سفارش آنلاین
                          </a>
                        </li>
                        <li>
                          <a className="btn btn-outline-primary" href="#">
                            مرکز تماس
                          </a>
                        </li>
                        <li>
                          <a className="btn btn-outline-primary" href="#">
                            مدیریت شعب
                          </a>
                        </li>
                        <li>
                          <a className="btn btn-outline-primary" href="#">
                            انبارداری
                          </a>
                        </li>
                        <li>
                          <a className="btn btn-outline-primary" href="#">
                            باشگاه مشتریان
                          </a>
                        </li>
                        <li>
                          <a className="btn btn-outline-primary" href="#">
                            حسابداری
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="holder-button">
                      <a href="#" className="btn">
                        خرید نرم‌افزار مدیریت رستوران
                        <i className="icon-arrow-left"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="benefits-container">
          <div className="container-fluid">
            <h2>مزایای استفاده از منوی دیجیتال</h2>
            <div className="show-list">
              <SlideBenfits />
            </div>
          </div>
        </div>
        <div className="benefits-container">
          <div className="container-fluid">
            <h2>مشتریان ساتراپ</h2>
            <div className="show-list-sublayer">
              <SlideSublayer />
            </div>
          </div>
        </div>
        <div className="holder-cloud-satrap">
          <div className="container">
            <div className="holder-text">
              <h2>راهکار‌های ابری ساتراپ را تجربه کنید!</h2>
              <p>
                برای کسب اطلاعات بیشتر پیرامون ساتراپ و دریافت کاتالوگ محصولات
                با ما تماس بگیرید و یا برای تجربه کار با نرم‌افزار، دمو را
                مشاهده کنید.
              </p>
              <div className="holder-button">
                <a
                  href="#"
                  className="btn"
                  onClick={(e) => {
                    e.preventDefault();
                    let popRequest = document.getElementById("popRequest");
                    new mdb.Modal(popRequest).show();
                  }}
                >
                  تماس با ما
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="holder-price">
          <div className="container">
            <div className="header">
              <h2>ماژول‌ها و امکانات نرم‌افزار مدیریت رستوران ساتراپ</h2>
              <p></p>
            </div>
            <div className="holder-body">
              <div className="row">
                <div className="col-md-6">
                  <div className="holder-box">
                    <h2>امکانات مورد نظرتان را انتخاب کنید:</h2>
                    <div className="holder-accordion">
                      <div className="accordion" id="accordionExample">
                        <div className="accordion-item">
                          <h2 className="accordion-header" id="headingOne">
                            <button
                              className="accordion-button"
                              type="button"
                              data-toggle="collapse"
                              data-target="#collapseOne"
                              aria-expanded="true"
                              aria-controls="collapseOne"
                              onClick={() => {
                                handleChangeOpt("opt1");
                              }}
                            >
                              فروش آنلاین
                            </button>
                          </h2>
                          <div
                            id="collapseOne"
                            className="accordion-collapse collapse show"
                            aria-labelledby="headingOne"
                            data-parent="#accordionExample"
                          >
                            <div className="accordion-body">
                              با گذشت زمان و آنلاین شدن کسب و کارها، ایده‌ی منو
                              دیجیتال پیاده سازی شد. از این طریق علاوه‌بر کنترل
                              هزینه و زمان می‌توانید محتوا و دیزاین خود را بروز
                              نگه دارید. با استفاده از امکاناتی که فروش آنلاین
                              منو دیجیتال ساتراپ به مشتریان می‌دهد علاوه بر ثبت
                              سفارش به صورت حضوری، امکان سفارش‌گیری به صورت
                              غیرحضوری و ارسال سفارشات از طریق پیک امکان پذیر
                              است.
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <h2 className="accordion-header" id="headingTwo">
                            <button
                              className="accordion-button collapsed"
                              type="button"
                              data-toggle="collapse"
                              data-target="#collapseTwo"
                              aria-expanded="false"
                              aria-controls="collapseTwo"
                              onClick={() => {
                                handleChangeOpt("opt2");
                              }}
                            >
                              ماژول انبارداری
                            </button>
                          </h2>
                          <div
                            id="collapseTwo"
                            className="accordion-collapse collapse"
                            aria-labelledby="headingTwo"
                            data-parent="#accordionExample"
                          >
                            <div className="accordion-body">
                              ساتراپ با هدف ارایه خدمات یکپارچه به کسب و کارهای
                              خرده فروشی در کنار سیستم فروشگاهی و رستورانی با
                              ارایه سیستم مدیریت انبار، فرایندهای انبارداری را
                              تا حد ممکن و با انعطاف‌پذیری بالا به صورت اتوماتیک
                              پیاده‌سازی نموده و امکانات منحصر به فردی اعم از
                              نگهداری موجودی، درخواست و تامین به موقع کالا برای
                              کنترل موجودی، قیمت‌گذاری و حسابداری انبار،
                              انبارگردانی و.. را فراهم می‌سازد.
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <h2 className="accordion-header" id="headingThree">
                            <button
                              className="accordion-button collapsed"
                              type="button"
                              data-toggle="collapse"
                              data-target="#collapseThree"
                              aria-expanded="false"
                              aria-controls="collapseThree"
                              onClick={() => {
                                handleChangeOpt("opt3");
                              }}
                            >
                              ماژول حسابداری
                            </button>
                          </h2>
                          <div
                            id="collapseThree"
                            className="accordion-collapse collapse"
                            aria-labelledby="headingThree"
                            data-parent="#accordionExample"
                          >
                            <div className="accordion-body">
                              ماژول حسابداری به صورت یکپارچه با راهکار نرم‌افزار
                              مدیریت فروش رستوران و فروشگاهی ساتراپ طراحی شده
                              است و شما را از داشتن چند نرم‌افزار برای مدیریت
                              مجموعه خود بی نیاز می‌کندو با امکان صدور اتوماتیک
                              اسناد مالی، خطاهای کاربری را کاهش می‌دهد و بدین
                              ترتیب می‌توانید سرعت عملکرد و حس اطمینان نسبت به
                              اطلاعات مالی بیشتری را تجربه کنید.
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <h2 className="accordion-header" id="heading3">
                            <button
                              className="accordion-button collapsed"
                              type="button"
                              data-toggle="collapse"
                              data-target="#collapse4"
                              aria-expanded="false"
                              aria-controls="collapse4"
                              onClick={() => {
                                handleChangeOpt("opt4");
                              }}
                            >
                              باشگاه مشتریان
                            </button>
                          </h2>
                          <div
                            id="collapse4"
                            className="accordion-collapse collapse"
                            aria-labelledby="heading4"
                            data-parent="#accordionExample"
                          >
                            <div className="accordion-body">
                              باشگاه مشتریان به مجموعه ای از راهکارها، تکنیک‌ها
                              و برنامه‌هایی گفته می‌شود که هدف اصلی آن
                              وفادارسازی مشتریان است، به طورکلی برنامه‌های
                              وفاداری ابزاری ضروری برای همه کسب و کارهای مدرن در
                              جهت افزایش سطح تعامل با مشتری، بهبود، حفظ و
                              ارائه‌ی راه های خلاقانه برای کمپین‌های بازاریابی
                              است، که خریداران را ترغیب می‌کند که به فروشگاه ها
                              و رستوران‌هایی که قبلاً از آن‌ها خرید کرده‌اند
                              برای خرید مجدد مراجعه کنند.نرم افزار باشگاه
                              مشتریان با استفاده از هوش مصنوعی و تحلیل رفتار
                              مشتریان بهترین راهکار را برای وفادارسازی مشتریان
                              به شما ارائه می‌کند. نرم افزار باشگاه مشتریان
                              ساتراپ با هدف یکپارچگی برنامه‌های وفاداری در حوزه
                              فین‌تک و نرم‌افزارهای فروش ایجاد گردیده است به
                              زبان نرم افزار باشگاه مشتریان ساتراپ به عنوان یک
                              تجمیع کننده اطلاعات مشتریان امکان اتصال به
                              شرکت‌های سرویس دهنده خدمات پرداخت (PSP / پرداخت
                              یار) و طرفی امکان اتصال به نرم افزارهای فروش مورد
                              استفاده در کسب و کارهای خرده فروشی را دارا می باشد
                              تا با جمع آوری اطلاعات تراکنشی / خرید مشتریان
                              بتواند سناریو های مختلف برنامه وفاداری بعد از
                              تعریف در نرم‌افزار به صورت خودکار انجام دهد.
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="holder-tab">
                    <div className="tab-content" id="ex2-content">
                      <div
                        className="tab-pane fade show active"
                        id="ex2-tabs-1"
                        role="tabpanel"
                        aria-labelledby="ex2-tab-1"
                      >
                        <div className="holder-list-check">
                          {showTabOption === "opt1" && (
                            <>
                              <ul className="list-unstyled">
                                <li>
                                  <i className="icon-tick"></i>
                                  اتصال یکپارچه به نرم افزار فروش صندوق
                                </li>
                                <li>
                                  <i className="icon-tick"></i>
                                  امکان پارک دامنه شما بر روی وب‌سایت
                                </li>
                                <li>
                                  <i className="icon-tick"></i>
                                  تنظیم زمان‌بندی، سفارشگیری، نحوه تسویه و ...
                                  از طریق نرم‌افزار صندوق
                                </li>
                                <li>
                                  <i className="icon-tick"></i>
                                  امکان اتصال به درگاه پرداخت اینترنتی
                                </li>
                                <li>
                                  <i className="icon-tick"></i>
                                  امکان انتخاب شعب بر اساس موقعیت مکانی مشتری
                                </li>
                              </ul>
                              <div className="holder-button">
                                <a href="#" className="btn" onClick={HandlePop}>
                                  درخواست دمو
                                </a>
                              </div>
                            </>
                          )}
                          {showTabOption === "opt2" && (
                            <>
                              <ul className="list-unstyled">
                                <li>
                                  <i className="icon-tick"></i>
                                  ثبت اطلاعات طرف حساب (تامین کنندگان)
                                </li>
                                <li>
                                  <i className="icon-tick"></i>
                                  کدگذاری اتوماتیک به ازای کالاها
                                </li>
                                <li>
                                  <i className="icon-tick"></i>
                                  تعریف و مدیریت انبارهای گوناگون (مصرفی،
                                  مرجوعی، ضایعات و ...)
                                </li>
                                <li>
                                  <i className="icon-tick"></i>
                                  امکان ثبت درخواست تامین کالا و ثبت رسید براساس
                                  تامین کالای تایید شده
                                </li>
                                <li>
                                  <i className="icon-tick"></i>
                                  امکان ثبت درخواست تامین کالا و ثبت رسید براساس
                                  تامین کالای تایید شده
                                </li>
                                <li>
                                  <i className="icon-tick"></i>
                                  امکان ثبت دوره‌های مختلف انبارگردانی
                                </li>
                                <li>
                                  <i className="icon-tick"></i>
                                  امکان پشتیبانی از انواع بارکد و ثبت اسناد با
                                  بارکد
                                </li>
                              </ul>
                              <div className="holder-button">
                                <a href="#" className="btn" onClick={HandlePop}>
                                  درخواست دمو
                                </a>
                              </div>
                            </>
                          )}
                          {showTabOption === "opt3" && (
                            <>
                              <ul className="list-unstyled">
                                <li>
                                  <i className="icon-tick"></i>
                                  امکان تعریف حساب‌ها در8 سطح: سه سطح اصلی
                                  گروه،کل و معین و 5 سطح تفصیلی
                                </li>
                                <li>
                                  <i className="icon-tick"></i>
                                  ثبت اسناد اتوماتیک از سیستم فروش و انبار و
                                  شناسایی اسناد ارسالی از سایر سیستم ها
                                </li>
                                <li>
                                  <i className="icon-tick"></i>
                                  امکان مدیریت شعب برای ثبت اسناد عمومی و اسناد
                                  سایر سیستم ها
                                </li>
                                <li>
                                  <i className="icon-tick"></i>
                                  امکان بستن حساب‌ها و افتتاح دوره مالی جدید با
                                  ثبت اسناد سود و زیان،تعدیل ماهیت ،اختتامیه
                                  وافتتاحیه به صورت اتوماتیک
                                </li>
                                <li>
                                  <i className="icon-tick"></i>
                                  تهیه‌ی سند کل برای دوره‌های زمانی مورد انتخاب
                                  کاربر جهت سهولت ثبت دفاتر قانونی (دفتر
                                  روزنامه،دفتر کل)
                                </li>
                                <li>
                                  <i className="icon-tick"></i>
                                  گزارش مرور حساب‌ها در تمامی سطوح به شکل ساده و
                                  تحلیلی، بررسی گردش حساب‌ها، اسناد حسابداری
                                </li>
                                <li>
                                  <i className="icon-tick"></i>
                                  گزارش‌های ساده و تحلیلی دفاتر و ترازها(دو
                                  ستونی، چهارستونی، شش ستونی، هشت ستونی)
                                </li>
                                <li>
                                  <i className="icon-tick"></i>
                                  تهیه ی گزارش صورت سود و زیان
                                </li>
                              </ul>
                              <div className="holder-button">
                                <a href="#" className="btn" onClick={HandlePop}>
                                  درخواست دمو
                                </a>
                              </div>
                            </>
                          )}
                          {showTabOption === "opt4" && (
                            <>
                              <div className="holder-button">
                                <ul className="list-unstyled">
                                  <li>
                                    <i className="icon-tick"></i>
                                    امکان ایجاد کد تخفیف
                                  </li>
                                  <li>
                                    <i className="icon-tick"></i>
                                    امکان گروه بندی مشتریان
                                  </li>
                                  <li>
                                    <i className="icon-tick"></i>
                                    امکان اختصاص خودکار اعتبار به کیف پول ساتراپ
                                    هریک از مشتریان
                                  </li>
                                  <li>
                                    <i className="icon-tick"></i>
                                    امکان اعمال تخفیف پلکانی ـ درصدی به گروه
                                    مشتریان
                                  </li>
                                  <li>
                                    <i className="icon-tick"></i>
                                    امکان به اشتراک‌گذاری اعتبار کیف پول مشتریان
                                    میان شعب مختلف فروشگاه
                                  </li>
                                </ul>
                                <a href="#" className="btn" onClick={HandlePop}>
                                  درخواست دمو
                                </a>
                              </div>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer msisdn={modalValue} />
    </>
  );
};

export default Management;

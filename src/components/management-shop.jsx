import Header from "../layout/header";
import Footer from "../layout/Footer";
import {
  SlideBenfitsRest,
  SlideManagmentShop,
  SlideSublayer,
  SlideSublayerRestorant,
} from "./slide-managment";
import { useEffect } from "react";
import { setStyleMDB, validationMessage } from "../func/tools";
import "./../style/managmentshop.css";
import { useFormik } from "formik";
import * as yup from "yup";
import { useState } from "react";
const Management = () => {
  const mdb = window["mdb"];
  const [modalValue, setModalValue] = useState("");
  const [showTabOption, setShowTabOption] = useState("opt1");
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
      <div className="managmentshop-holder">
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
                      نرم‌افزار مدیریت فروشگاه <span>ساتراپ</span>
                    </h3>
                    <p>
                      عملیات روزانه فروشگاه خود را از خرید مواد اولیه و
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
                                  id="form13"
                                  className="form-control"
                                />
                                <label className="form-label" htmlFor="form13">
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
                                    document.getElementById("form13").value,
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
                  {/* <a href="#">
                    <i className="icon-arrow-down"></i>
                  </a> */}
                </div>
              </div>
              <div className="holder-slider-banner">
                <div className="holder-slide-ab">
                  <SlideManagmentShop />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="managment-warraper">
          <div className="gap-managment"></div>
          <div className="show-feature">
            <div className="container">
              <h2>قابلیت‌های نرم‌افزار مدیریت فروشگاه</h2>
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
                          <i className="icon-managment-request">
                            <span className="path1"></span>
                            <span className="path2"></span>
                            <span className="path3"></span>
                          </i>
                        </div>
                        <h3>مدیریت پرداخت</h3>
                        <div
                          className="collapse"
                          id="coll01"
                          aria-expanded="false"
                        >
                          <ul>
                            <li>امکان اتصال به دستگاه POS بانکی</li>
                            <li>امکان پرداخت از طریق اعتبار کیف پول ساتراپ</li>
                            <li>
                              امکان پرداخت اینترنتی از طریق ارسال پیامک لینک
                              پرداخت
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
                          <i className="icon-managment-payment">
                            <span className="path1"></span>
                            <span className="path2"></span>
                            <span className="path3"></span>
                          </i>
                        </div>
                        <h3>مدیریت سفارش‌ها</h3>
                        <div
                          className="collapse"
                          id="coll02"
                          aria-expanded="false"
                        >
                          <ul>
                            <li>امکان مشاهده سفارشات باز</li>
                            <li>
                              امکان ثبت خودکار اسنپ شاپ و اسنپ فود در نرم افزار
                            </li>
                            <li>
                              امکان مدیریت / مشاهده سفارشات دریافتی از طریق
                              کانال‌های مختلف{" "}
                            </li>
                            <li>
                              امکان ثبت سفارش از طریق انواع دستگاه بارکدخوان و
                              جستجو بر اساس کد/نام کالا و خدمات
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
                          <i className="icon-managment-report">
                            <span className="path1"></span>
                            <span className="path2"></span>
                            <span className="path3"></span>
                          </i>
                        </div>
                        <h3>گزارشات</h3>
                        <div
                          className="collapse"
                          id="coll03"
                          aria-expanded="false"
                        >
                          <ul>
                            <li>گزارش فروش روزانه</li>
                            <li>گزارش حسابداری</li>
                            <li>گزارشات جزئیات فروش</li>
                            <li>گزارش تغییرات قیمت کالا</li>
                            <li>گزارش فروش براساس کاربر</li>
                            <li>گزارش مغایرت موجودی و فروش</li>
                            <li>گزارش عدم وجود مغایرت مالی واریزی و شاپرک</li>
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
                          <i className="icon-user-managment">
                            <span className="path1"></span>
                            <span className="path2"></span>
                            <span className="path3"></span>
                            <span className="path4"></span>
                          </i>
                        </div>
                        <h3>مدیریت کاربران</h3>
                        <div
                          className="collapse"
                          id="coll05"
                          aria-expanded="false"
                        >
                          <ul>
                            <li>ثبت تاریخچه ورود کاربران</li>
                            <li>امکان تعریف سطح دسترسی براساس نقش کاربران</li>
                            <li>
                              امکان تعریف اشخاص و اختصاص دسترسی به آنها ( مدیر
                              داخلی، صندوق دار و.... )
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
                          <i className="icon-product-managment">
                            <span className="path1"></span>
                            <span className="path2"></span>
                            <span className="path3"></span>
                            <span className="path4"></span>
                          </i>
                        </div>
                        <h3>مدیریت کالا/خدمات</h3>
                        <div
                          className="collapse"
                          id="coll06"
                          aria-expanded="false"
                        >
                          <ul>
                            <li>امکان تعریف چند بارکد برای کالا/خدمات</li>
                            <li>امکان تعریف بی‌نهایت گروه کالا/خدمات</li>
                            <li>امکان تعریف واریانت برای کالا/خدمات</li>
                            <li>امکان تعریف چند قیمت به ازای هر کالا/ خدمات</li>
                            <li>امکان تعریف و گروه‌بندی بی‌نهایت کالا/خدمات</li>
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
                          <i className="icon-delivery">
                            <span className="path1"></span>
                            <span className="path2"></span>
                            <span className="path3"></span>
                          </i>
                        </div>
                        <h3>مدیریت پیک</h3>
                        <div
                          className="collapse"
                          id="coll07"
                          aria-expanded="false"
                        >
                          <ul>
                            <li>امکان تعریف محله بر روی نقشه</li>
                            <li>امکان تعریف کرایه پیک براساس محله</li>
                            <li>
                              امکان تعریف کرایه پیک متفاوت بر اساس گروه مشتریان
                            </li>
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
                          <i className="icon-managment-loyalty">
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
                            <li>امکان گروه بندی مشتریان</li>
                            <li>
                              امکان اختصاص خودکار اعتبار به کیف پول ساتراپ هریک
                              از مشتریان
                            </li>
                            <li>
                              امکان اعمال تخفیف پلکانی ـ درصدی به گروه مشتریان
                            </li>
                            <li>
                              امکان به اشتراک گذاری اعتبار کیف پول مشتریان میان
                              شعب مختلف فروشگاه
                            </li>
                            <li>
                              امکان تعریف سناریوهای افزایش/کاهش اعتبار بر روی
                              کیف پول ساتراپ مشتریان
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
                          "/content/images/managment/rest/panel-shop.png"
                        }
                        className="img-fluid"
                        alt=""
                      />
                    </figure>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="holder-text">
                    <h2>مدیریت فروشگاه</h2>
                    <p>
                      فروش خود را به صورت یکپارچه با انبار، حسابداری و باشگاه
                      مشتریان مدیریت کنید و با بهبود تجربه فروش، بیشتر بفروشید.
                      <br />
                      <br />
                      امکانات نرم‌افزار مدیریت فروشگاه ساتراپ:
                    </p>
                    <div className="holder-list">
                      <ul className="list-unstyled">
                        <li>
                          <a className="btn btn-outline-primary" href="#">
                            نرم‌افزار فروش فروشگاهی
                          </a>
                        </li>
                        <li>
                          <a className="btn btn-outline-primary" href="#">
                            فروش فروشگاهی نسخه اندروید
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
                        <li>
                          <a className="btn btn-outline-primary" href="#">
                            انبارداری
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="holder-button">
                      <a
                        href="#"
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
                        خرید نرم‌افزار مدیریت فروشگاه
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
            <h2>مزایای استفاده از نرم‌افزار مدیریت فروشگاه</h2>
            <div className="show-list">
              <div className="container">
                <SlideBenfitsRest />
              </div>
            </div>
          </div>
        </div>
        <div className="benefits-container">
          <div className="container-fluid">
            <h2>مشتریان ساتراپ</h2>
            <div className="show-list-sublayer">
              <SlideSublayerRestorant />
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
                    setModalValue(document.getElementById("form12").value);
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
              <h2>لیست قیمت نرم‌افزار مدیریت فروشگاه ساتراپ</h2>
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
                              ماژول انبارداری
                            </button>
                          </h2>
                          <div
                            id="collapseOne"
                            className="accordion-collapse collapse show"
                            aria-labelledby="headingOne"
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
                              ماژول حسابداری
                            </button>
                          </h2>
                          <div
                            id="collapseTwo"
                            className="accordion-collapse collapse"
                            aria-labelledby="headingTwo"
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
                              باشگاه مشتریان
                            </button>
                          </h2>
                          <div
                            id="collapseThree"
                            className="accordion-collapse collapse"
                            aria-labelledby="headingThree"
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
                              فروش آنلاین
                            </button>
                          </h2>
                          <div
                            id="collapse4"
                            className="accordion-collapse collapse"
                            aria-labelledby="heading4"
                            data-parent="#accordionExample"
                          >
                            <div className="accordion-body">
                              با نرم افزار اندروید فروش فروشگاهی ساتراپ این
                              امکان به کسب وکارهای خرده فروشی کوچک و متوسط داده
                              می شود که در هزینه راه اندازی و استقرار نرم افزار
                              فروش خود صرفه جویی کرده و بدون نیاز به خرید سه
                              دستگاه کامپیوتر ، پرینتر و کارت خوان ، مراحل ثبت
                              سفارش، صدور فاکتور مشتریان و دریافت وجه تنها از
                              طریق یک دستگاه کارتخوان اندرویدی صورت پذیرد که
                              علاوه بر صرفه جویی در هزینه ها باعث افزایش سرعت
                              العمل و رفع مشکل محدودیت فضا می شود
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
                                  امکان کنترل موجودی انبار در زمان ثبت سفارش
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
                          {showTabOption === "opt2" && (
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
                          {showTabOption === "opt3" && (
                            <>
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
                              <div className="holder-button">
                                <a href="#" className="btn" onClick={HandlePop}>
                                  درخواست دمو
                                </a>
                              </div>
                            </>
                          )}
                          {showTabOption === "opt4" && (
                            <>
                              <ul className="list-unstyled">
                                <li>
                                  <i className="icon-tick"></i>
                                  امکان مشاهده داشبورد فروش لحظه‌ای
                                </li>
                                <li>
                                  <i className="icon-tick"></i>
                                  قابلیت استفاده برای فروشگاه‌های چند شعبه‌ای
                                </li>
                                <li>
                                  <i className="icon-tick"></i>
                                  امکان افزودن کالا به سبد خرید از طریق اسکن
                                  بارکد
                                </li>
                                <li>
                                  <i className="icon-tick"></i>
                                  یکپارچگی نسخه نرم‌افزار پوز انرویدی و نرم
                                  افزار فروش فروشگاهی
                                </li>
                                <li>
                                  <i className="icon-tick"></i>
                                  امکان ورود کاربران تعریف شده در نرم‌افزار
                                  فروشگاهی به نرم افزار پوز
                                </li>
                              </ul>
                              <div className="holder-button">
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

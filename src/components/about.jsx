import Header from "./../layout/header";
import Footer from "./../layout/Footer";
import "./../style/about.css";
import { SliderAgent, SliderCertificate } from "./slide-managment";
import { useEffect } from "react";
const About = () => {
  useEffect(() => {}, []);
  return (
    <>
      <Header />
      <div className="holder-about">
        <div className="holder-banner-container">
          <div className="container">
            <div className="holder-banner">
              <div className="holder-text-over">
                <div className="holder-text">
                  <div className="row">
                    <div className="col-md-6 d-block d-sm-none">
                      <div style={{ height: "150px" }}></div>
                    </div>
                    <div className="col-md-6">
                      <div className="holder-text-banner">
                        <h2>درباره تکنولوژی ساتراپ</h2>
                        <p>
                          ساتراپ به شما کمک می کند تا از بهترین تکنولوژی ها جهت
                          تسهیل فعالیت روزانه کسب و کار خود استفاده کنید و با
                          کنترل همه جانبه ، کسب و کار خود را به بهترین شکل
                          مدیریت کنید.
                        </p>
                        <div className="holder-button">
                          <a
                            href={
                              process.env.PUBLIC_URL +
                              "/content/images/satrap.zip"
                            }
                            className="btn"
                          >
                            <i className="icon-download"></i> دانلود بروشور
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="holder-content">
            <div className="row justify-content-center">
              <div className="col-xl-8">
                <div className="text-center">
                  <h3>چشم‌انداز</h3>
                  <p>
                    شرکت نگین رایان ساتراپ با هدف تولید و توسعه راهکار ابری
                    مدیریت یکپارچه کسب و کار فعالیت خود را آغاز نمود و با فراهم
                    کردن محیطی پویا، خلاق، با برخورداری از بهترین متخصصین و
                    توسعه دهندگان در این حوزه، همواره در بهره‌گیری از آخرین و
                    بروزترین تکنولوژی‌ها پیشگام بوده است.
                  </p>
                  <br />
                  <h3>ماموریت</h3>
                  <p>
                    ارائه راهکارهای نرم‌افزاری ابری برای مدیریت عملیات از هرجا و
                    بر روی هر ابزاری (صندوق،لپتاپ،موبایل،تبلت و ...) و کاهش
                    هزینه‌ها و در نهایت فراهم آوردن یک هاب فروش یکپارچه برای
                    جذب و نگهداری مشتری و افزایش فروش.
                    <br />
                    پیشرو در ارائه راهکارهای نرم افزاری ابری خدمات برتر، متعالی
                    و شایسته اعتماد در حوزه نرم‌افزارهای ابری برای صنف‌های
                    فروشگاهی و رستورانی با تمرکز بر ارزش آفرینی و احترام به
                    مشریان جهت تحقق افزایش فروش وجذب و نگهداری مشتریانشان.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="holder-colleage d-none">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-10">
                <div className="holder-item">
                  <div className="row">
                    <div className="col-xl-6 col-lg-6 col-md-4">
                      <div className="holder-title">
                        <h2>ﺗﯿﻢ ﻣﺘﺨﺼﺺ ساتراپ</h2>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-4">
                      <div className="item-person">
                        <figure>
                          <img
                            src={
                              process.env.PUBLIC_URL +
                              "/content/images/aboutus/work/p-01.jpg"
                            }
                            className="img-fluid"
                            alt=""
                          />
                        </figure>
                        <div className="over-text">
                          <h2>محمدرضایی</h2>
                          <span>کارشناس فروش</span>
                          <p>
                            اﺳﺘﻔﺎده از ﻃﺮاﺣﺎن ﮔﺮاﻓﯿﮏ اﺳﺖ. ﺳﺎدﮔﯽ ﻧﺎﻣﻔﻬﻮم از ﺻﻨﻌﺖ
                            ﭼﺎپ و ﺑﺎ ﻟﻮرم اﯾﭙﺴﻮم ﻣﺘﻦ ﺳﺎﺧﺘﮕﯽ ﺑﺎ ﺗﻮﻟﯿﺪ اﺳﺘﻔﺎده از
                            ﻃﺮاﺣﺎن ﮔﺮاﻓﯿﮏ اﺳﺖ. ﺳﺎدﮔﯽ ﻧﺎﻣﻔﻬﻮم از ﺻﻨﻌﺖ ﭼﺎپ و ﺑﺎ
                            ﻟﻮرم اﯾﭙﺴﻮم ﻣﺘﻦ ﺳﺎﺧﺘﮕﯽ ﺑﺎ ﺗﻮﻟﯿﺪ
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-4">
                      <div className="item-person">
                        <figure>
                          <img
                            src={
                              process.env.PUBLIC_URL +
                              "/content/images/aboutus/work/p-02.jpg"
                            }
                            className="img-fluid"
                            alt=""
                          />
                        </figure>
                        <div className="over-text">
                          <h2>محمدرضایی</h2>
                          <span>کارشناس فروش</span>
                          <p>
                            اﺳﺘﻔﺎده از ﻃﺮاﺣﺎن ﮔﺮاﻓﯿﮏ اﺳﺖ. ﺳﺎدﮔﯽ ﻧﺎﻣﻔﻬﻮم از ﺻﻨﻌﺖ
                            ﭼﺎپ و ﺑﺎ ﻟﻮرم اﯾﭙﺴﻮم ﻣﺘﻦ ﺳﺎﺧﺘﮕﯽ ﺑﺎ ﺗﻮﻟﯿﺪ اﺳﺘﻔﺎده از
                            ﻃﺮاﺣﺎن ﮔﺮاﻓﯿﮏ اﺳﺖ. ﺳﺎدﮔﯽ ﻧﺎﻣﻔﻬﻮم از ﺻﻨﻌﺖ ﭼﺎپ و ﺑﺎ
                            ﻟﻮرم اﯾﭙﺴﻮم ﻣﺘﻦ ﺳﺎﺧﺘﮕﯽ ﺑﺎ ﺗﻮﻟﯿﺪ
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-4">
                      <div className="item-person">
                        <figure>
                          <img
                            src={
                              process.env.PUBLIC_URL +
                              "/content/images/aboutus/work/p-03.jpg"
                            }
                            className="img-fluid"
                            alt=""
                          />
                        </figure>
                        <div className="over-text">
                          <h2>محمدرضایی</h2>
                          <span>کارشناس فروش</span>
                          <p>
                            اﺳﺘﻔﺎده از ﻃﺮاﺣﺎن ﮔﺮاﻓﯿﮏ اﺳﺖ. ﺳﺎدﮔﯽ ﻧﺎﻣﻔﻬﻮم از ﺻﻨﻌﺖ
                            ﭼﺎپ و ﺑﺎ ﻟﻮرم اﯾﭙﺴﻮم ﻣﺘﻦ ﺳﺎﺧﺘﮕﯽ ﺑﺎ ﺗﻮﻟﯿﺪ اﺳﺘﻔﺎده از
                            ﻃﺮاﺣﺎن ﮔﺮاﻓﯿﮏ اﺳﺖ. ﺳﺎدﮔﯽ ﻧﺎﻣﻔﻬﻮم از ﺻﻨﻌﺖ ﭼﺎپ و ﺑﺎ
                            ﻟﻮرم اﯾﭙﺴﻮم ﻣﺘﻦ ﺳﺎﺧﺘﮕﯽ ﺑﺎ ﺗﻮﻟﯿﺪ
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-4">
                      <div className="item-person">
                        <figure>
                          <img
                            src={
                              process.env.PUBLIC_URL +
                              "/content/images/aboutus/work/p-03.jpg"
                            }
                            className="img-fluid"
                            alt=""
                          />
                        </figure>
                        <div className="over-text">
                          <h2>محمدرضایی</h2>
                          <span>کارشناس فروش</span>
                          <p>
                            اﺳﺘﻔﺎده از ﻃﺮاﺣﺎن ﮔﺮاﻓﯿﮏ اﺳﺖ. ﺳﺎدﮔﯽ ﻧﺎﻣﻔﻬﻮم از ﺻﻨﻌﺖ
                            ﭼﺎپ و ﺑﺎ ﻟﻮرم اﯾﭙﺴﻮم ﻣﺘﻦ ﺳﺎﺧﺘﮕﯽ ﺑﺎ ﺗﻮﻟﯿﺪ اﺳﺘﻔﺎده از
                            ﻃﺮاﺣﺎن ﮔﺮاﻓﯿﮏ اﺳﺖ. ﺳﺎدﮔﯽ ﻧﺎﻣﻔﻬﻮم از ﺻﻨﻌﺖ ﭼﺎپ و ﺑﺎ
                            ﻟﻮرم اﯾﭙﺴﻮم ﻣﺘﻦ ﺳﺎﺧﺘﮕﯽ ﺑﺎ ﺗﻮﻟﯿﺪ
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-4">
                      <div className="item-text">
                        <div className="center-auto">
                          <h2>۴</h2>
                          <h3>نمایندگی</h3>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-4">
                      <div className="item-person">
                        <figure>
                          <img
                            src={
                              process.env.PUBLIC_URL +
                              "/content/images/aboutus/work/p-03.jpg"
                            }
                            className="img-fluid"
                            alt=""
                          />
                        </figure>
                        <div className="over-text">
                          <h2>محمدرضایی</h2>
                          <span>کارشناس فروش</span>
                          <p>
                            اﺳﺘﻔﺎده از ﻃﺮاﺣﺎن ﮔﺮاﻓﯿﮏ اﺳﺖ. ﺳﺎدﮔﯽ ﻧﺎﻣﻔﻬﻮم از ﺻﻨﻌﺖ
                            ﭼﺎپ و ﺑﺎ ﻟﻮرم اﯾﭙﺴﻮم ﻣﺘﻦ ﺳﺎﺧﺘﮕﯽ ﺑﺎ ﺗﻮﻟﯿﺪ اﺳﺘﻔﺎده از
                            ﻃﺮاﺣﺎن ﮔﺮاﻓﯿﮏ اﺳﺖ. ﺳﺎدﮔﯽ ﻧﺎﻣﻔﻬﻮم از ﺻﻨﻌﺖ ﭼﺎپ و ﺑﺎ
                            ﻟﻮرم اﯾﭙﺴﻮم ﻣﺘﻦ ﺳﺎﺧﺘﮕﯽ ﺑﺎ ﺗﻮﻟﯿﺪ
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-4">
                      <div className="item-person">
                        <figure>
                          <img
                            src={
                              process.env.PUBLIC_URL +
                              "/content/images/aboutus/work/p-03.jpg"
                            }
                            className="img-fluid"
                            alt=""
                          />
                        </figure>
                        <div className="over-text">
                          <h2>محمدرضایی</h2>
                          <span>کارشناس فروش</span>
                          <p>
                            اﺳﺘﻔﺎده از ﻃﺮاﺣﺎن ﮔﺮاﻓﯿﮏ اﺳﺖ. ﺳﺎدﮔﯽ ﻧﺎﻣﻔﻬﻮم از ﺻﻨﻌﺖ
                            ﭼﺎپ و ﺑﺎ ﻟﻮرم اﯾﭙﺴﻮم ﻣﺘﻦ ﺳﺎﺧﺘﮕﯽ ﺑﺎ ﺗﻮﻟﯿﺪ اﺳﺘﻔﺎده از
                            ﻃﺮاﺣﺎن ﮔﺮاﻓﯿﮏ اﺳﺖ. ﺳﺎدﮔﯽ ﻧﺎﻣﻔﻬﻮم از ﺻﻨﻌﺖ ﭼﺎپ و ﺑﺎ
                            ﻟﻮرم اﯾﭙﺴﻮم ﻣﺘﻦ ﺳﺎﺧﺘﮕﯽ ﺑﺎ ﺗﻮﻟﯿﺪ
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-4">
                      <div className="item-text">
                        <div className="center-auto">
                          <h2>+30,000</h2>
                          <h3>فروش سالیانه</h3>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-4">
                      <div className="item-person">
                        <figure>
                          <img
                            src={
                              process.env.PUBLIC_URL +
                              "/content/images/aboutus/work/p-03.jpg"
                            }
                            className="img-fluid"
                            alt=""
                          />
                        </figure>
                        <div className="over-text">
                          <h2>محمدرضایی</h2>
                          <span>کارشناس فروش</span>
                          <p>
                            اﺳﺘﻔﺎده از ﻃﺮاﺣﺎن ﮔﺮاﻓﯿﮏ اﺳﺖ. ﺳﺎدﮔﯽ ﻧﺎﻣﻔﻬﻮم از ﺻﻨﻌﺖ
                            ﭼﺎپ و ﺑﺎ ﻟﻮرم اﯾﭙﺴﻮم ﻣﺘﻦ ﺳﺎﺧﺘﮕﯽ ﺑﺎ ﺗﻮﻟﯿﺪ اﺳﺘﻔﺎده از
                            ﻃﺮاﺣﺎن ﮔﺮاﻓﯿﮏ اﺳﺖ. ﺳﺎدﮔﯽ ﻧﺎﻣﻔﻬﻮم از ﺻﻨﻌﺖ ﭼﺎپ و ﺑﺎ
                            ﻟﻮرم اﯾﭙﺴﻮم ﻣﺘﻦ ﺳﺎﺧﺘﮕﯽ ﺑﺎ ﺗﻮﻟﯿﺪ
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-4">
                      <div className="item-text">
                        <div className="center-auto">
                          <h2>+20,000</h2>
                          <h3>مشتریان ما</h3>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-4">
                      <div className="item-text">
                        <div className="center-auto">
                          <h2>+20</h2>
                          <h3>راهکارهای نوین</h3>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-4">
                      <div className="item-person">
                        <figure>
                          <img
                            src={
                              process.env.PUBLIC_URL +
                              "/content/images/aboutus/work/p-03.jpg"
                            }
                            className="img-fluid"
                            alt=""
                          />
                        </figure>
                        <div className="over-text">
                          <h2>محمدرضایی</h2>
                          <span>کارشناس فروش</span>
                          <p>
                            اﺳﺘﻔﺎده از ﻃﺮاﺣﺎن ﮔﺮاﻓﯿﮏ اﺳﺖ. ﺳﺎدﮔﯽ ﻧﺎﻣﻔﻬﻮم از ﺻﻨﻌﺖ
                            ﭼﺎپ و ﺑﺎ ﻟﻮرم اﯾﭙﺴﻮم ﻣﺘﻦ ﺳﺎﺧﺘﮕﯽ ﺑﺎ ﺗﻮﻟﯿﺪ اﺳﺘﻔﺎده از
                            ﻃﺮاﺣﺎن ﮔﺮاﻓﯿﮏ اﺳﺖ. ﺳﺎدﮔﯽ ﻧﺎﻣﻔﻬﻮم از ﺻﻨﻌﺖ ﭼﺎپ و ﺑﺎ
                            ﻟﻮرم اﯾﭙﺴﻮم ﻣﺘﻦ ﺳﺎﺧﺘﮕﯽ ﺑﺎ ﺗﻮﻟﯿﺪ
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-4">
                      <div className="item-person">
                        <figure>
                          <img
                            src={
                              process.env.PUBLIC_URL +
                              "/content/images/aboutus/work/p-03.jpg"
                            }
                            className="img-fluid"
                            alt=""
                          />
                        </figure>
                        <div className="over-text">
                          <h2>محمدرضایی</h2>
                          <span>کارشناس فروش</span>
                          <p>
                            اﺳﺘﻔﺎده از ﻃﺮاﺣﺎن ﮔﺮاﻓﯿﮏ اﺳﺖ. ﺳﺎدﮔﯽ ﻧﺎﻣﻔﻬﻮم از ﺻﻨﻌﺖ
                            ﭼﺎپ و ﺑﺎ ﻟﻮرم اﯾﭙﺴﻮم ﻣﺘﻦ ﺳﺎﺧﺘﮕﯽ ﺑﺎ ﺗﻮﻟﯿﺪ اﺳﺘﻔﺎده از
                            ﻃﺮاﺣﺎن ﮔﺮاﻓﯿﮏ اﺳﺖ. ﺳﺎدﮔﯽ ﻧﺎﻣﻔﻬﻮم از ﺻﻨﻌﺖ ﭼﺎپ و ﺑﺎ
                            ﻟﻮرم اﯾﭙﺴﻮم ﻣﺘﻦ ﺳﺎﺧﺘﮕﯽ ﺑﺎ ﺗﻮﻟﯿﺪ
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-4">
                      <div className="item-person">
                        <figure>
                          <img
                            src={
                              process.env.PUBLIC_URL +
                              "/content/images/aboutus/work/p-03.jpg"
                            }
                            className="img-fluid"
                            alt=""
                          />
                        </figure>
                        <div className="over-text">
                          <h2>محمدرضایی</h2>
                          <span>کارشناس فروش</span>
                          <p>
                            اﺳﺘﻔﺎده از ﻃﺮاﺣﺎن ﮔﺮاﻓﯿﮏ اﺳﺖ. ﺳﺎدﮔﯽ ﻧﺎﻣﻔﻬﻮم از ﺻﻨﻌﺖ
                            ﭼﺎپ و ﺑﺎ ﻟﻮرم اﯾﭙﺴﻮم ﻣﺘﻦ ﺳﺎﺧﺘﮕﯽ ﺑﺎ ﺗﻮﻟﯿﺪ اﺳﺘﻔﺎده از
                            ﻃﺮاﺣﺎن ﮔﺮاﻓﯿﮏ اﺳﺖ. ﺳﺎدﮔﯽ ﻧﺎﻣﻔﻬﻮم از ﺻﻨﻌﺖ ﭼﺎپ و ﺑﺎ
                            ﻟﻮرم اﯾﭙﺴﻮم ﻣﺘﻦ ﺳﺎﺧﺘﮕﯽ ﺑﺎ ﺗﻮﻟﯿﺪ
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="holder-slider">
          <div className="container">
            <div className="holder-title">
              <h2>ﻧﻤﺎﯾﻨﺪگیﻫﺎی ﻣﺎ</h2>
            </div>
            <SliderAgent />
          </div>
        </div>
        <div className="holder-certificate d-none">
          <div className="container">
            <div className="holder-title">
              <h2>تقدیرنامه‌های ساتراپ</h2>
            </div>
            <SliderCertificate />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;

import Header from "./../layout/header";
import Footer from "./../layout/Footer";
import "./../style/agents.css";
import { useEffect } from "react";
import { setStyleMDB } from "../func/tools";
const Agents = () => {
  useEffect(() => {
    setStyleMDB();
  }, []);
  const handleSearch = (e) => {
    var elem = document.querySelectorAll(".holder-agents .body-content .item");
    elem.forEach((element) => {
      if (element.innerText.search(new RegExp(e.target.value, "i")) < 0) {
        element.hidden = true;
      } else {
        element.hidden = false;
      }
    });
  };
  return (
    <>
      <Header />
      <div className="holder-agents">
        <div className="container">
          <div className="header-page">
            <h2>نمایندگی‌های ساتراپ</h2>
            <span>نمایندگی‌های فعال در ایران</span>
            <div className="row justify-content-center">
              <div className="col-xl-4 col-lg-4 col-md-6">
                <div className="holder-input-search">
                  <div className="row-item">
                    <div className="holder-input">
                      <i className="icon-magnifier"></i>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="جستجو کنید"
                        onKeyUp={handleSearch}
                      />
                    </div>
                    <div className="holder-perovince d-none">
                      <select
                        className="select"
                        data-placeholder="همه استان‌ها"
                        data-filter="true"
                      >
                        <option value="0"></option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="body-content">
            <div className="holder-item">
              <div className="row">
                <div className="col-md-3">
                  <div className="item">
                    <figure>
                      <img
                        src={
                          process.env.PUBLIC_URL +
                          "/content/images/aboutus/map.png"
                        }
                        className="img-fluid"
                        alt=""
                      />
                    </figure>
                    <div className="text-hold">
                      <h2>نمایندگی ﺗﻬﺮان</h2>
                      <ul className="list-unstyled">
                        <li>
                          <i className="icon-marker"></i>
                          ﺗﻬﺮان، نیاوران، جنب پمپ بنزین نیاوران، کوچه تناولی،
                          پلاک ۱۸، واحد ۴۰۴
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
                <div className="col-md-3">
                  <div className="item">
                    <figure>
                      <img
                        src={
                          process.env.PUBLIC_URL +
                          "/content/images/aboutus/map.png"
                        }
                        className="img-fluid"
                        alt=""
                      />
                    </figure>
                    <div className="text-hold">
                      <h2>نمایندگی اصفهان</h2>
                      <ul className="list-unstyled">
                        <li>
                          <i className="icon-marker"></i>
                          اصفهان، چهار باغ بالا، مجتمع کوثر، فاز ۱، طبقه ۴، واحد
                          ۶۰۱
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
                <div className="col-md-3">
                  <div className="item">
                    <figure>
                      <img
                        src={
                          process.env.PUBLIC_URL +
                          "/content/images/aboutus/map.png"
                        }
                        className="img-fluid"
                        alt=""
                      />
                    </figure>
                    <div className="text-hold">
                      <h2>نمایندگی اصفهان</h2>
                      <ul className="list-unstyled">
                        <li>
                          <i className="icon-marker"></i>
                          اصفهان، هشت بهشت غربی، حد فاصل چهارراه ملک و نشاط،
                          ساختمان شماره ۱۰۰
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
                <div className="col-md-3">
                  <div className="item">
                    <figure>
                      <img
                        src={
                          process.env.PUBLIC_URL +
                          "/content/images/aboutus/map.png"
                        }
                        className="img-fluid"
                        alt=""
                      />
                    </figure>
                    <div className="text-hold">
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
                <div className="col-md-3">
                  <div className="item">
                    <figure>
                      <img
                        src={
                          process.env.PUBLIC_URL +
                          "/content/images/aboutus/map.png"
                        }
                        className="img-fluid"
                        alt=""
                      />
                    </figure>
                    <div className="text-hold">
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
                <div className="col-md-3">
                  <div className="item">
                    <figure>
                      <img
                        src={
                          process.env.PUBLIC_URL +
                          "/content/images/aboutus/map.png"
                        }
                        className="img-fluid"
                        alt=""
                      />
                    </figure>
                    <div className="text-hold">
                      <h2>نمایندگی سمنان</h2>
                      <ul className="list-unstyled">
                        <li>
                          <i className="icon-marker"></i>
                          سمنان، مهدیشهر، میدان نماز، بلوار جوادیان، نبش خیابان
                          شهید جعفری، ساختمان کیان، طبقه همکف
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
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Agents;

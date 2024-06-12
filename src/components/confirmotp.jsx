import { useFormik } from "formik";
import * as yup from "yup";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./../style/login.css";
import { useEffect, useState } from "react";
import {
  ShowNotify,
  convertPersian,
  isEmpty,
  validationMessage,
} from "../func/tools";
import axios from "axios";
import { TokenAuz, urlService } from "../func/services";
import { Root, _adr } from "../rout";
const OTP = () => {
  const [remainTime, setRemainTime] = useState(180);
  const [showNumber, setShowNumber] = useState(0);
  const location = useLocation();
  const nav = useNavigate();
  const [keyCode, setKeyCode] = useState("");
  const [userName, setUserName] = useState("");
  const [isProccess, setIsProccess] = useState(false);
  useEffect(() => {}, []);
  const formik = useFormik({
    initialValues: {
      code: "",
    },
    validationSchema: yup.object({
      code: yup.string().required(validationMessage.required),
    }),
    onSubmit: (values) => {
      setIsProccess(true);
      let param = {
        code: values.code,
        key: keyCode.split(/--/)[0],
        UserName: userName,
      };
      axios
        .post(urlService + "/home/ApiLoginOTP", param, {
          headers: {
            RequestVerificationToken: TokenAuz,
          },
          withCredentials: true,
        })
        .then((response) => {
          if (response.data.needToChangePass == true) {
            window.location.href = "/resetpassword";
          }
          if (response.data.merchantAccess === false) {
            ShowNotify("کاربری شما فعال نمی باشد.");
          } else if (response.data.denied === true) {
            ShowNotify("حساب کاربری شما مجوز دسترسی ندارد. ");
          } else if (response.data.lockout === true) {
            ShowNotify(
              "حساب کاربری شما به طور موقت مسدود شده است. لطفا بعدا تلاش کنید.",
            );
          } else if (
            response.data.count == 0 &&
            response.data.needToChangePass == false
          ) {
            ShowNotify("نام کاربری یا رمز عبور صحیح نمی باشد");
          } else if (response.data.count == 1) {
            var tokenModel = {
              profileId: response.userId,
              merchantId: response.mid,
            };
            GenerateToken(tokenModel);
          } else if (response.data.count > 1) {
            if (window.location.href.includes("stage")) {
              window.location.href = `https://mysatrapstage.com/Home/SelectMerchant?userId=${response.data?.userId}`;
            } else {
              window.location.href = `https://mysatrap.com/Home/SelectMerchant?userId=${response.data?.userId}`;
            }
          }
        })
        .catch((error) => {
          setIsProccess(false);
          ShowNotify(error.code);
        });
    },
  });
  useEffect(() => {
    if (!isEmpty(location.state)) {
      let keycode = location.state?.keycode;
      let username = location.state?.username;
      setKeyCode(keycode);
      setUserName(username);
      setShowNumber(keycode.split(/--/)[1]);
    } else {
      nav(_adr.Root + _adr.Login, { replace: true });
    }
  }, []);
  useEffect(() => {
    const timer = setInterval(function () {
      if (remainTime <= 0) {
        clearInterval(timer);
        nav(_adr.Root + _adr.Login, { replace: true });
      } else {
        setRemainTime((prev) => prev - 1);
      }
    }, 1000);
    return () => clearInterval(timer);
  }, [remainTime]);

  const GenerateToken = async (param) => {
    await axios
      .post(urlService + "/home/GenerateToken", param, {
        headers: {
          RequestVerificationToken: TokenAuz,
        },
        withCredentials: true,
      })
      .then((res) => {
        if (res.data.status) {
          if (res.data.mcid === 1 || res.data.mcid === 5) {
            let form = document.createElement("form");
            form.setAttribute("method", "POST");
            form.setAttribute("action", res.data.redirectUrl);
            form.setAttribute("target", "_self");
            var hiddenField1 = document.createElement("input");
            hiddenField1.setAttribute("name", "ek");
            hiddenField1.setAttribute("value", res.data.data.ek);
            var hiddenField2 = document.createElement("input");
            hiddenField2.setAttribute("name", "value");
            hiddenField2.setAttribute("value", res.data.data.value);
            //console.log(response);
            form.appendChild(hiddenField1);
            form.appendChild(hiddenField2);
            document.body.appendChild(form);
            form.submit();
            document.body.removeChild(form);
          } else if (res.data.mcid !== 3) {
            var form = document.createElement("form");
            form.setAttribute("method", "POST");
            form.setAttribute(
              "action",
              "https://s2.mysatrap" +
                (window.location.href.includes("stage") ? "stage" : "") +
                ".com/login/home/S2Login",
            );
            form.setAttribute("target", "_self");
            var hiddenField1 = document.createElement("input");
            hiddenField1.setAttribute("name", "token");
            hiddenField1.setAttribute("value", res.data.data);
            form.appendChild(hiddenField1);
            document.body.appendChild(form);
            form.submit();
            document.body.removeChild(form);
          } else {
            var url = res.data.redirectUrl + res.data.data;
            document.location.href = url;
          }
        }
      });
  };
  return (
    <>
      <div className="container-login">
        <div className="row-page">
          <div className="holder-form">
            <div className="holder-back">
              <Link to={_adr.Root} className="btn">
                بازگشت
              </Link>
            </div>
            <div className="warrper-auto">
              <div className="container-form">
                <div className="row justify-content-center">
                  <div className="col-xl-6 col-lg-8 col-md-10">
                    <div className="header-title">
                      <div className="holder-brand d-block d-sm-none">
                        <img
                          src={
                            process.env.PUBLIC_URL +
                            "/content/images/logo-white.png"
                          }
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="body-content">
                      <div className="header-title">
                        <h4>رمزیک‌بارمصرف را وارد کنید</h4>
                        <div className="holder-msisdn">
                          <div className="row-item">
                            <div className="holder-icon">
                              <i className="icon-ring"></i>
                            </div>
                            <div className="msisdn">
                              <span dir="ltr">{showNumber}</span>
                            </div>
                            <div className="holder-button">
                              <Link to={_adr.Root + _adr.Otp}>
                                <i className="icon-pencil-create"></i>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>

                      <form onSubmit={formik.handleSubmit}>
                        <div className="mb-3">
                          <div className="holder-otp">
                            <div className="otp-control">
                              <i className="icon-time"></i>{" "}
                              <span dir="ltr">{remainTime}</span>
                            </div>
                            <label className="form-label" htmlFor="code">
                              رمزیک‌بارمصرف
                            </label>
                            <input
                              type="text"
                              name="code"
                              id="code"
                              dir="ltr"
                              onBlur={formik.handleBlur}
                              value={formik.values.code}
                              onChange={(e) => {
                                e.target.value = convertPersian(e.target.value);
                                formik.handleChange(e);
                              }}
                              inputMode="numeric"
                              placeholder="رمزیک‌بارمصرف خود را وارد کنید"
                              className="form-control"
                            />
                            {formik.touched.code && formik.errors.code ? (
                              <span
                                className="error invalid-feedback"
                                style={{ display: "inline" }}
                              >
                                {formik.errors.code}
                              </span>
                            ) : (
                              ""
                            )}
                          </div>
                        </div>

                        <div className="holder-button">
                          <button
                            type="submit"
                            className={isProccess ? "btn disabled" : "btn"}
                            disabled={isProccess}
                          >
                            {isProccess ? <>درحال پردازش</> : <>ورود به حساب</>}
                          </button>
                          <Link to={_adr.Root + _adr.Login} className="btn">
                            ورود با رمز عبور
                          </Link>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="holder-img">
            <div className="bg-img"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OTP;

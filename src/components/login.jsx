import { useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import "./../style/login.css";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import * as yup from "yup";
import {
  ShowNotify,
  convertPersian,
  isJsonString,
  validationMessage,
} from "../func/tools";
import { TokenAuz, urlService } from "../func/services";
import { _adr } from "../rout";

const Login = () => {
  const refPass = useRef();
  const nav = useNavigate();
  const [isProcess, setIsProcess] = useState(false);
  const formik = useFormik({
    initialValues: {
      UserName: "",
      Password: "",
      hash: "",
      code: "",
    },
    validationSchema: yup.object({
      UserName: yup.string().required(validationMessage.required),
      Password: yup.string().required(validationMessage.required),
      hash: yup.string().required(validationMessage.required),
      code: yup.string().required(validationMessage.required),
    }),
    onSubmit: async (values) => {
      setIsProcess(true);
      let pass = {
        UserName: values.UserName,
        Password: values.Password,
        Captcha: { hash: values.hash, code: values.code },
      };
      await axios
        .post(urlService + "/home/ApiLogin", pass, {
          headers: {
            "Content-Type": "application/json; charset=utf-8",
            RequestVerificationToken: TokenAuz,
          },
          withCredentials: true,
        })
        .then((res) => {
          if (res.data?.needToChangePass) {
            //change to password
          }
          if (res.data?.merchantAccess === false) {
            ShowNotify("کاربری شما فعال نمی‌باشد");
          }
          if (res.data?.denied) {
            ShowNotify("حساب کاربری شما مجوز دسترسی ندارد");
          }
          if (res.data?.lockout) {
            ShowNotify(
              "حساب کاربری شما به طور موقت مسدود شده است. لطفا بعدا تلاش کنید.",
            );
          }
          if (res.data?.count === 0 && !res.data?.needToChangePass) {
            ShowNotify("نام کاربری یا رمز عبور صحیح نمی باشد");
          }
          if (res.data?.count === 1) {
            let parm = { profileId: res.data.userId, merchantId: res.data.mid };
            GenerateToken(parm);
          }
          if (res.data?.count > 1) {
            if (window.location.href.includes("stage")) {
              window.location.href = `https://mysatrapstage.com/Home/SelectMerchant?userId=${res.data?.userId}`;
            } else {
              window.location.href = `https://mysatrap.com/Home/SelectMerchant?userId=${res.data?.userId}`;
            }
          } else {
            formik.setFieldValue("code", "");
            CaptchaImg();
          }
          if (res.captchaError) {
            ShowNotify("کد امنیتی اشتباه می باشد");
          }
        })
        .catch((error) => {
          ShowNotify(error.message);
        });
      setIsProcess(false);
    },
  });
  useEffect(() => {
    CaptchaImg();
  }, []);
  const CaptchaImg = async () => {
    await axios
      .post(urlService + "/captcha/GetCaptcha", {
        withCredentials: true,
      })
      .then((res) => {
        if (isJsonString(JSON.stringify(res.data))) {
          let img = document.getElementById("captchaimg");
          img.src = "data:image/png;base64," + res.data.item1;
          formik.setFieldValue("hash", res.data.item2);
        }
      })
      .catch((error) => {
        ShowNotify(error.code);
      });
  };
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
  const handleShowPassword = (e) => {
    if (e.target.classList.contains("icon-eye-slash")) {
      e.target.classList.add("icon-eye");
      e.target.classList.remove("icon-eye-slash");
      refPass.current.type = "text";
    } else {
      e.target.classList.add("icon-eye-slash");
      e.target.classList.remove("icon-eye");
      refPass.current.type = "password";
    }
  };
  return (
    <>
      <div className="container-login">
        <div className="row-page">
          <div className="holder-form">
            <div className="holder-back">
              <Link to={"/"} className="btn">
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
                      <h3>خوش آمدید</h3>
                      <p>برای ورود نام کاربری و رمز عبور خود را وارد نمایید.</p>
                    </div>
                    <div className="body-content">
                      <form onSubmit={formik.handleSubmit}>
                        <div className="mb-4">
                          <label className="form-label" htmlFor="UserName">
                            نام کاربری
                          </label>
                          <input
                            type="text"
                            name="UserName"
                            id="UserName"
                            placeholder="نام کاربری خود را وارد کنید"
                            dir="ltr"
                            className="form-control"
                            autoComplete="off"
                            onChange={(e) => {
                              e.target.value = convertPersian(e.target.value);
                              formik.handleChange(e);
                            }}
                            onBlur={formik.handleBlur}
                            value={formik.values.UserName}
                          />
                          {formik.touched.UserName && formik.errors.UserName ? (
                            <span
                              className="error invalid-feedback"
                              style={{ display: "inline" }}
                            >
                              {formik.errors.UserName}
                            </span>
                          ) : (
                            ""
                          )}
                        </div>
                        <div className="mb-4">
                          <label className="form-label" htmlFor="Password">
                            رمز ورود
                          </label>
                          <div className="holder-icon-pass">
                            <input
                              type="password"
                              name="Password"
                              id="Password"
                              placeholder="رمز عبور خود را وارد کنید"
                              dir="ltr"
                              className="form-control"
                              autoComplete="off"
                              onChange={(e) => {
                                e.target.value = convertPersian(e.target.value);
                                formik.handleChange(e);
                              }}
                              onBlur={formik.handleBlur}
                              value={formik.values.Password}
                              ref={refPass}
                            />
                            <i
                              className="icon-eye-slash"
                              onClick={handleShowPassword}
                            ></i>
                          </div>
                          {formik.touched.Password && formik.errors.Password ? (
                            <span
                              className="error invalid-feedback"
                              style={{ display: "inline" }}
                            >
                              {formik.errors.Password}
                            </span>
                          ) : (
                            ""
                          )}
                        </div>
                        <div className="mb-4">
                          <div className="row">
                            <div className="col-6">
                              <div className="form-check form-switch">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  id="rememberme"
                                  name="rememberme"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="rememberme"
                                >
                                  مرا به خاطر بسپار
                                </label>
                              </div>
                            </div>
                            <div className="col-6">
                              <Link
                                to={_adr.Root + _adr.Forgetpassword}
                                className="forgetme"
                              >
                                فراموشی رمز ورود
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div className="mb-4">
                          <div className="holder-captcha">
                            <label className="form-label" htmlFor="code">
                              کد امنیتی
                            </label>
                            <input
                              type="text"
                              name="code"
                              id="code"
                              inputMode="numeric"
                              placeholder=""
                              className="form-control"
                              autoComplete="off"
                              onChange={(e) => {
                                e.target.value = convertPersian(e.target.value);
                                formik.handleChange(e);
                              }}
                              onBlur={formik.handleBlur}
                              value={formik.values.code}
                              maxLength={5}
                            />
                            <img
                              id="captchaimg"
                              onClick={CaptchaImg}
                              src={""}
                              className="img-fluid"
                              alt=""
                            />
                          </div>
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
                        <div className="holder-button">
                          <button
                            type="submit"
                            className={`btn ${isProcess ? "disabled" : ""}`}
                            disabled={isProcess ? true : false}
                          >
                            {isProcess ? <>درحال پردازش</> : <>ورود</>}
                          </button>
                          <Link className="btn" to={_adr.Root + _adr.Otp}>
                            ورود با شماره
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

export default Login;

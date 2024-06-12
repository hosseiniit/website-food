import { useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import "./../style/login.css";
import { useEffect } from "react";
import axios from "axios";
import * as yup from "yup";
import {
  ShowNotify,
  convertPersian,
  isJsonString,
  validationMessage,
} from "../func/tools";
import { useState } from "react";
import { TokenAuz, urlService } from "../func/services";
import { _adr } from "../rout";
const OTP = () => {
  const nav = useNavigate();
  const [isProccess, setIsProccess] = useState(false);
  const formik = useFormik({
    initialValues: {
      UserName: "",
      hash: "",
      code: "",
    },
    validationSchema: yup.object({
      UserName: yup
        .string()
        .required(validationMessage.required)
        .matches("^\\d{11}$", validationMessage.regex),
      hash: yup.string().required(validationMessage.required),
      code: yup.string().required(validationMessage.required),
    }),
    onSubmit: (values) => {
      setIsProccess(true);
      let pass = {
        UserName: values.UserName,
        Captcha: { hash: values.hash, code: values.code },
      };
      axios
        .post(urlService + "/home/ApiBeginLoginOTP", pass, {
          headers: {
            RequestVerificationToken: TokenAuz,
          },
          withCredentials: true,
        })
        .then((res) => {
          setIsProccess(false);
          if (res.data.errorMessage) {
            ShowNotify(res.data.errorMessage);
          } else {
            nav(_adr.Root + _adr.ConfirmOtp, {
              state: {
                keycode: res.data.key,
                username: values.UserName,
              },
            });
          }
        })
        .catch((error) => {
          setIsProccess(false);
          ShowNotify(error.code);
        });
    },
  });
  useEffect(() => {
    CaptchaImg();
  }, []);
  const CaptchaImg = () => {
    axios
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
  return (
    <>
      <div className="container-login">
        <div className="row-page">
          <div className="holder-form">
            <div className="holder-back">
              <Link to={_adr.Root + _adr.Login} className="btn">
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
                      <p>شماره موبایل خود را وارد کنید</p>
                    </div>
                    <div className="body-content">
                      <form onSubmit={formik.handleSubmit}>
                        <div className="mb-4">
                          <label className="form-label" htmlFor="UserName">
                            شماره موبایل
                          </label>
                          <input
                            type="text"
                            name="UserName"
                            id="UserName"
                            placeholder="شماره موبایل خود را وارد کنید"
                            className="form-control"
                            dir="ltr"
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
                            className={isProccess ? "btn disabled" : "btn"}
                            disabled={isProccess}
                          >
                            {isProccess ? (
                              <>درحال پردازش</>
                            ) : (
                              <>ارسال رمز یک‌ بار مصرف</>
                            )}
                          </button>
                          <Link className="btn" to={_adr.Root + _adr.Login}>
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

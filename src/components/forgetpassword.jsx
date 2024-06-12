import { useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import "./../style/login.css";
import { useEffect } from "react";
import axios from "axios";
import * as yup from "yup";
import { ShowNotify, isJsonString, validationMessage } from "../func/tools";
import { _adr } from "../rout";
import { urlService } from "../func/services";
const OTP = () => {
  const nav = useNavigate();
  const formik = useFormik({
    initialValues: {
      usernameOrMobile: "",
      hash: "",
      code: "",
    },
    validationSchema: yup.object({
      usernameOrMobile: yup.string().required(validationMessage.required),
      hash: yup.string().required(validationMessage.required),
      code: yup.string().required(validationMessage.required),
    }),
    onSubmit: (values) => {
      let pass = {
        usernameOrMobile: values.usernameOrMobile,
        hash: values.hash,
        code: values.code,
      };
      axios
        .post(urlService + "/home/ApiBeginChangePassword", pass, {
          withCredentials: true,
        })
        .then((res) => {
          nav(_adr.Root + _adr.ChangePassword, {
            state: {
              key: res.data.key,
            },
          });
        })
        .catch((error) => {
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
                      <p>برای ورود شماره موبایل و کد عبور خود را وارد کنید</p>
                    </div>
                    <div className="body-content">
                      <form onSubmit={formik.handleSubmit}>
                        <div className="mb-4">
                          <label
                            className="form-label"
                            htmlFor="usernameOrMobile"
                          >
                            شماره موبایل یا ایمیل
                          </label>
                          <input
                            type="text"
                            name="usernameOrMobile"
                            id="usernameOrMobile"
                            placeholder="شماره موبایل یا ایمیل خود را وارد کنید"
                            className="form-control"
                            dir="ltr"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.usernameOrMobile}
                          />
                          {formik.touched.usernameOrMobile &&
                          formik.errors.usernameOrMobile ? (
                            <span
                              className="error invalid-feedback"
                              style={{ display: "inline" }}
                            >
                              {formik.errors.usernameOrMobile}
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
                              onChange={formik.handleChange}
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
                          <button type="submit" className="btn">
                            بازیابی رمزعبور
                          </button>
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

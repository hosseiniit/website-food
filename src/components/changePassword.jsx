import { useFormik } from "formik";
import {
  Link,
  useLocation,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import "./../style/login.css";
import { useEffect, useRef } from "react";
import axios from "axios";
import * as yup from "yup";
import { ShowNotify, isJsonString, validationMessage } from "../func/tools";
import { _adr } from "../rout";
import { urlService } from "../func/services";
import { useState } from "react";
const ChangePassword = () => {
  const searchLocation = useLocation();
  const { key } = searchLocation.state;
  const [msisdn, setMsisdn] = useState("");
  const nav = useNavigate();
  const refPass = useRef();
  const formik = useFormik({
    initialValues: {
      newPass: "",
      code: "",
    },
    validationSchema: yup.object({
      newPass: yup.string().required(validationMessage.required),
      code: yup.string().required(validationMessage.required),
    }),
    onSubmit: (values) => {
      let param = {
        password: values.newPass,
        key: key.split("--")[0],
        code: values.code,
      };
      axios
        .post(urlService + "/home/ApiChangePassword", param, {
          withCredentials: true,
        })
        .then((res) => {
          if (res?.data?.errorMessage) {
            ShowNotify(res?.data?.errorMessage);
          } else {
            nav(_adr.Root + _adr.Login, { replace: true });
          }
        })
        .catch((error) => {
          ShowNotify(error.code);
        });
    },
  });
  useEffect(() => {
    setMsisdn(key.split("--")[1]);
  }, []);
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
                      <h3>بازیابی کلمه عبور</h3>
                      <p></p>
                    </div>
                    <div className="body-content">
                      <div className="header-title">
                        <h4>
                          لطفا کلمه عبور جدید و همچنین رمزیک‌بارمصرف ارسال شده
                          راه وارد نمایید
                        </h4>
                        <div className="holder-msisdn">
                          <div className="row-item">
                            <div className="holder-icon">
                              <i className="icon-ring"></i>
                            </div>
                            <div className="msisdn">
                              <span dir="ltr">{msisdn}</span>
                            </div>
                            <div className="holder-button">
                              <Link to={_adr.Root + _adr.Forgetpassword}>
                                <i className="icon-pencil-create"></i>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                      <form onSubmit={formik.handleSubmit}>
                        <div className="mb-4">
                          <label
                            className="form-label"
                            htmlFor="usernameOrMobile"
                          >
                            کلمه عبور جدید
                          </label>
                          <div className="holder-icon-pass">
                            <input
                              type="password"
                              name="newPass"
                              id="newPass"
                              placeholder="کلمه عبور خود را واردنمایید"
                              className="form-control"
                              dir="ltr"
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                              value={formik.values.newPass}
                              ref={refPass}
                            />
                            <i
                              className="icon-eye-slash"
                              onClick={handleShowPassword}
                            ></i>
                          </div>
                          {formik.touched.newPass && formik.errors.newPass ? (
                            <span
                              className="error invalid-feedback"
                              style={{ display: "inline" }}
                            >
                              {formik.errors.newPass}
                            </span>
                          ) : (
                            ""
                          )}
                        </div>
                        <div className="mb-4">
                          <div className="holder-captcha">
                            <label className="form-label" htmlFor="code">
                              رمزیک‌بارمصرف ارسال شده
                            </label>
                            <input
                              type="text"
                              name="code"
                              id="code"
                              dir="ltr"
                              inputMode="numeric"
                              placeholder="رمزیک‌بارمصرف پیامک شده را واردنمایید"
                              className="form-control"
                              autoComplete="off"
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                              value={formik.values.code}
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
                            تغییر کلمه عبور
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

export default ChangePassword;

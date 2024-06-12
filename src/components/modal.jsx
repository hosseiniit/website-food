import { useFormik } from "formik";
import * as yup from "yup";
import {
  ShowNotify,
  convertPersian,
  isEmpty,
  isJsonString,
  setStyleMDB,
  validationMessage,
} from "../func/tools";
import { useEffect } from "react";
import axios from "axios";
import { urlService } from "../func/services";
import LoadingCaptchaCode from "./loading";
import { useState } from "react";
const Modal = ({ msisdn }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [img, setImg] = useState("");
  const mdb = window["mdb"];
  const formik = useFormik({
    initialValues: {
      modalFullName: "",
      modalMsisdn: "",
      modalhash: "",
      modalcode: "",
    },
    validationSchema: yup.object({
      modalFullName: yup.string().required(validationMessage.required),
      modalMsisdn: yup
        .string()
        .required(validationMessage.required)
        .matches("^\\d{11}$", validationMessage.regex),
    }),
    onSubmit: async (values) => {
      let pass = {
        Fullname: values.modalFullName,
        BusinessType: 1,
        Phone: values.modalMsisdn,
        Email: "",
        Description: "",
        City: "",
        Captcha: {
          Code: values.modalcode,
          Hash: values.modalhash,
        },
      };

      await axios
        .post(urlService + "/Home/RequestDemo", pass, {
          headers: {
            "Content-Type": "application/json; charset=utf-8",
          },
          withCredentials: true,
        })
        .then((res) => {
          if (res.data) {
            ShowNotify("درخواست شما ارسال شد", "success");
            new mdb.Modal.getInstance(
              document.getElementById("popRequest"),
            ).hide();
            formik.setFieldValue("modalFullName", "");
            formik.setFieldValue("modalMsisdn", "");
            formik.setFieldValue("modalhash", "");
            formik.setFieldValue("modalcode", "");
          } else {
            ShowNotify("درخواست شما ارسال نشد");
          }
        })
        .catch((error) => {
          ShowNotify(error.message);
        });
    },
  });
  useEffect(() => {
    // if (!!msisdn) {
    setStyleMDB();
    CaptchaImg();
    // }
  }, []);
  const CaptchaImg = async () => {
    await axios
      .post(urlService + "/captcha/GetCaptcha", {
        withCredentials: true,
      })
      .then((res) => {
        if (isJsonString(JSON.stringify(res.data))) {
          setImg("data:image/png;base64," + res.data.item1);
          formik.setFieldValue("hash", res.data.item2);
          setIsLoading(false);
        }
      })
      .catch((error) => {
        ShowNotify(error.code);
      });
  };
  useEffect(() => {
    formik.setFieldValue("modalMsisdn", !!msisdn ? msisdn : "");
  }, [msisdn]);
  return (
    <>
      <div
        className="modal fade"
        id="popRequest"
        tabIndex="-1"
        aria-labelledby="popRequest"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="holder-modal-managment">
              <div className="holder-close">
                <a
                  href="#"
                  className="btn-close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <i className="icon-close"></i>
                </a>
              </div>
              <div className="holder-text-managment">
                <h2>درخواست مشاوره و دمو نرم‌افزار</h2>
                <br />
                <p>
                  برای تکمیل فرآیند درخواست مشاوره و دمو نرم‌افزار کافیست
                  اطلاعات خود را پر کنید.تا ۲۴ ساعت آینده با شما تماس می‌گیریم.
                </p>
                <div className="holder-form">
                  <form onSubmit={formik.handleSubmit}>
                    <div className="mb-3">
                      <label htmlFor="modalFullName" className="form-label">
                        نام و نام خانوادگی
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="modalFullName"
                        name="modalFullName"
                        value={formik.values.modalFullName}
                        onChange={(e) => {
                          e.target.value = convertPersian(e.target.value);
                          formik.handleChange(e);
                        }}
                        onBlur={formik.handleBlur}
                        placeholder="نام و نام خانوادگی خود را وارد کنید"
                      />
                      {formik.touched.modalFullName &&
                      formik.errors.modalFullName ? (
                        <span
                          className="error invalid-feedback"
                          style={{ display: "inline" }}
                        >
                          {formik.errors.modalFullName}
                        </span>
                      ) : (
                        ""
                      )}
                    </div>
                    <div className="mb-3">
                      <label htmlFor="modalMsisdn" className="form-label">
                        شماره تماس
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="modalMsisdn"
                        name="modalMsisdn"
                        placeholder="شماره تماس خود را وارد کنید"
                        value={formik.values.modalMsisdn}
                        onChange={(e) => {
                          e.target.value = convertPersian(e.target.value);
                          formik.handleChange(e);
                        }}
                        onBlur={formik.handleBlur}
                        dir="ltr"
                      />
                      {formik.touched.modalMsisdn &&
                      formik.errors.modalMsisdn ? (
                        <span
                          className="error invalid-feedback"
                          style={{ display: "inline" }}
                        >
                          {formik.errors.modalMsisdn}
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
                        {isLoading ? (
                          <LoadingCaptchaCode />
                        ) : (
                          <img
                            id="captchaimg"
                            onClick={CaptchaImg}
                            src={img}
                            className="img-fluid"
                            alt=""
                          />
                        )}
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
                        ارسال
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;

export const ModalAgent = ({ msisdn }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [img, setImg] = useState("");
  const mdb = window["mdb"];
  const formik = useFormik({
    initialValues: {
      modalFullName: "",
      modalMsisdn: "",
    },
    validationSchema: yup.object({
      modalFullName: yup.string().required(validationMessage.required),
      modalMsisdn: yup
        .string()
        .required(validationMessage.required)
        .matches("^\\d{11}$", validationMessage.regex),
    }),
    onSubmit: async (values) => {
      let pass = {
        Fullname: values.modalFullName,
        BusinessType: 1,
        Phone: values.modalMsisdn,
        Email: "",
        Description: "",
        City: "",
        Captcha: {
          Code: values.modalcode,
          Hash: values.modalhash,
        },
      };

      await axios
        .post(urlService + "/Home/RequestDemo", pass, {
          headers: {
            "Content-Type": "application/json; charset=utf-8",
          },
          withCredentials: true,
        })
        .then((res) => {
          if (res.data) {
            ShowNotify("درخواست شما ارسال شد", "success");
            new mdb.Modal.getInstance(
              document.getElementById("popRequestAgent"),
            ).hide();
            formik.setFieldValue("modalFullName", "");
            formik.setFieldValue("modalMsisdn", "");
            formik.setFieldValue("modalhash", "");
            formik.setFieldValue("modalcode", "");
          } else {
            ShowNotify("درخواست شما ارسال نشد");
          }
        })
        .catch((error) => {
          ShowNotify(error.message);
        });
    },
  });
  useEffect(() => {
    // if (!!msisdn) {
    setStyleMDB();
    CaptchaImg();
    // }
  }, []);
  const CaptchaImg = async () => {
    await axios
      .post(urlService + "/captcha/GetCaptcha", {
        withCredentials: true,
      })
      .then((res) => {
        if (isJsonString(JSON.stringify(res.data))) {
          setImg("data:image/png;base64," + res.data.item1);
          let img = document.getElementById("captchaimgDealer");
          formik.setFieldValue("hash", res.data.item2);
          setIsLoading(false);
        }
      })
      .catch((error) => {
        ShowNotify(error.code);
      });
  };
  useEffect(() => {
    formik.setFieldValue("modalMsisdn", !!msisdn ? msisdn : "");
  }, [msisdn]);
  return (
    <>
      <div
        className="modal fade"
        id="popRequestAgent"
        tabIndex="-1"
        aria-labelledby="popRequestAgent"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="holder-modal-managment">
              <div className="holder-close">
                <a
                  href="#"
                  className="btn-close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <i className="icon-close"></i>
                </a>
              </div>
              <div className="holder-text-managment">
                <h2>درخواست نمایندگی</h2>
                <br />
                <p>
                  اگر علاقه‌مندید به شبکه فروش ما بپیوندید، اطلاعات خود را در
                  فرم زیر را پر کنید تا همکاران ما پس از بررسی‌های لازم در اسرع
                  وقت با شما تماس بگیرند.
                </p>
                <div className="holder-form">
                  <form onSubmit={formik.handleSubmit}>
                    <div className="mb-3">
                      <label htmlFor="modalFullName" className="form-label">
                        نام و نام خانوادگی
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="modalFullName"
                        name="modalFullName"
                        value={formik.values.modalFullName}
                        onChange={(e) => {
                          e.target.value = convertPersian(e.target.value);
                          formik.handleChange(e);
                        }}
                        onBlur={formik.handleBlur}
                        placeholder="نام و نام خانوادگی خود را وارد کنید"
                      />
                      {formik.touched.modalFullName &&
                      formik.errors.modalFullName ? (
                        <span
                          className="error invalid-feedback"
                          style={{ display: "inline" }}
                        >
                          {formik.errors.modalFullName}
                        </span>
                      ) : (
                        ""
                      )}
                    </div>
                    <div className="mb-3">
                      <label htmlFor="modalMsisdn" className="form-label">
                        شماره تماس
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="modalMsisdn"
                        name="modalMsisdn"
                        placeholder="شماره تماس خود را وارد کنید"
                        value={formik.values.modalMsisdn}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                      />
                      {formik.touched.modalMsisdn &&
                      formik.errors.modalMsisdn ? (
                        <span
                          className="error invalid-feedback"
                          style={{ display: "inline" }}
                        >
                          {formik.errors.modalMsisdn}
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
                        {isLoading ? (
                          <LoadingCaptchaCode />
                        ) : (
                          <img
                            id="captchaimg"
                            onClick={CaptchaImg}
                            src={img}
                            className="img-fluid"
                            alt=""
                          />
                        )}
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
                        ارسال
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

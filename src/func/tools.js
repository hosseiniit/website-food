import axios from "axios";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const persianJs = window["persianJs"];
const mdb = window["mdb"];
const MySwal = withReactContent(Swal);

export function isEmpty(value) {
  return typeof value === "undefined" || value === null || value === "";
}

export const typeforupload = {
  ResidencyCard: "ResidencyCard",
  Passport: "Passport",
  BirthCertificate: "BirthCertificate",
  DrivingLicense: "DrivingLicense",
  CertNoCard: "CertNoCard",
  SIMCardPuck: "SIMCardPuck",
  Other: "Other",
  RequestDoc: "RequestDoc",
};

export function commaDigits(num) {
  return num.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
}
export function convertCurrency(digit, make = false) {
  if (make) return parseInt(digit) * 10; //ŲŖŲØŲÆŪŁ„ ŲØŁ‡ Ų±ŪŲ§Ł„
  else return parseInt(digit) / 10; //ŲŖŲØŲÆŪŁ„ ŲØŁ‡ ŲŖŁŁ…Ų§Ł†
}

const optionNotify = {
  position: "top-right",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  theme: "light",
  rtl: true,
};
export function ShowNotify(message, type = "error") {
  switch (type) {
    case "success":
      toast.success(message, optionNotify);
      break;
    case "warning":
      toast.warning(message, optionNotify);
      break;
    case "info":
      toast.info(message, optionNotify);
      break;
    case "promis":
      toast("🦄 Wow so easy!", optionNotify);
      break;
    default:
      toast.error(message, optionNotify);
      break;
  }
}
export function ErrorExpireToken() {
  ShowModal(
    "You have timed out to benefit from this step. Please try again.",
    "error",
    "Error",
    () => {
      // let planid = !isEmpty(sessionStorage.getItem("planid"))
      //   ? sessionStorage.getItem("planid")
      //   : 0;

      window.location = "/mobile/landing";
      // "/mobile/bundle" + (planid !== 0 ? `?planid=${planid}` : "");
      return;
    },
  );
}
export function ErrorServices() {
  ShowModal("سرویس درحال حاضر در دسترس نمی‌باشد.", "error", "خطا", () => {
    // let planid = !isEmpty(sessionStorage.getItem("planid"))
    //   ? sessionStorage.getItem("planid")
    //   : 0;
    //window.location = "/mobile/landing";
    // "/mobile/bundle" + (planid !== 0 ? `?planid=${planid}` : "");

    return;
  });
}
export function ErrorServicesBank() {
  ShowModal("The service is currently unavailable.", "error", "Error", () => {
    // let planid = !isEmpty(sessionStorage.getItem("planid"))
    //   ? sessionStorage.getItem("planid")
    //   : 0;
    window.location = "/mobile/landing";
    // "/mobile/bundle" + (planid !== 0 ? `?planid=${planid}` : "");

    return;
  });
}
export function ShowModal(
  text = "",
  icon = "error",
  title = "Error",
  callback = null,
) {
  MySwal.fire({
    icon: icon,
    title: title,
    text: text,
    confirmButtonText: "OK",
    confirmButtonColor: "#E64225",
    showLoaderOnConfirm: true,
    allowEscapeKey: false,
    allowOutsideClick: false,
  }).then(() => {
    callback();
  });
}
export function formatMsisdn(msisdn) {
  if (!isEmpty(msisdn)) {
    msisdn = msisdn.toString();
    return (
      msisdn.substr(0, 3) +
      " " +
      msisdn.substr(3, 3) +
      " " +
      msisdn.substr(6, 2) +
      " " +
      msisdn.substr(8, 2)
    );
  } else {
    return "";
  }
}
export const validationMessage = {
  required: "تکمیل این فیلد اجباری است.",
  remote: "لطفا این فیلد را تصحیح کنید.",
  email: "لطفا یک ایمیل صحیح وارد کنید.",
  url: "لطفا آدرس صحیح وارد کنید.",
  date: "لطفا تاریخ صحیح وارد کنید.",
  dateFA: "لطفا یک تاریخ صحیح وارد کنید.",
  dateISO: "لطفا تاریخ صحیح وارد کنید (ISO).",
  number: "لطفا عدد صحیح وارد کنید.",
  digits: "لطفا تنها رقم وارد کنید.",
  creditcard: "لطفا کریدیت کارت صحیح وارد کنید.",
  equalTo: "لطفا مقدار برابری وارد کنید.",
  extension: "فایل وارد شده صحیح نمی‌باشد.",
  alphanumeric: "لطفا مقدار را عدد (انگلیسی) وارد کنید.",
  regex: "فرمت وارد شده صحیح نمی‌باشد",
  cert: "کدملی وارد شده صحیح نمی باشد",
  onlypersian: "لطفا با حروف فارسی اطلاعات درخواستی را وارد کنید.",
  regexPersian:
    "^[\u0600-\u0605 ؐ-ؚ\u061Cـ ۖ-\u06DD ۟-ۤ ۧ ۨ ۪-ۭ ً-ٕ ٟ ٖ-ٞ ٰ ، ؍ ٫ ٬ ؛ ؞ ؟ ۔ ٭ ٪ ؉ ؊ ؈ ؎ ؏۞ ۩ ؆ ؇ ؋ ٠۰ ١۱ ٢۲ ٣۳ ٤۴ ٥۵ ٦۶ ٧۷ ٨۸ ٩۹ ءٴ۽ آ أ ٲ ٱ ؤ إ ٳ ئ ا ٵ ٮ ب ٻ پ ڀة-ث ٹ ٺ ټ ٽ ٿ ج ڃ ڄ چ ڿ ڇ ح خ ځ ڂ څ د ذ ڈ-ڐ ۮ ر ز ڑ-ڙ ۯ س ش ښ-ڜ ۺ ص ض ڝ ڞۻ ط ظ ڟ ع غ ڠ ۼ ف ڡ-ڦ ٯ ق ڧ ڨ ك ک-ڴ ػ ؼ ل ڵ-ڸ م۾ ن ں-ڽ ڹ ه ھ ہ-ۃ ۿ ەۀ وۥ ٶۄ-ۇ ٷ ۈ-ۋ ۏ ى يۦ ٸ ی-ێ ې ۑ ؽ-ؿ ؠ ے ۓ \u061D]+$",
  // maxlength: string.format("لطفا بیشتر از {0} حرف وارد نکنید."),
  // minlength: $.validator.format("لطفا کمتر از {0} حرف وارد نکنید."),
  // rangelength: $.validator.format("لطفا مقداری بین {0} تا {1} حرف وارد کنید."),
  // range: $.validator.format("لطفا مقداری بین {0} تا {1} حرف وارد کنید."),
  // max: $.validator.format("لطفا مقداری کمتر از {0} وارد کنید."),
  // min: $.validator.format("لطفا مقداری بیشتر از {0} وارد کنید."),
  // minWords: $.validator.format("لطفا حداقل {0} کلمه وارد کنید."),
  // maxWords: $.validator.format("لطفا حداکثر {0} کلمه وارد کنید."),
};

export const getPersianDate = (format, setdate) => {
  let week = new Array([
    "يكشنبه",
    "دوشنبه",
    "سه شنبه",
    "چهارشنبه",
    "پنج شنبه",
    "جمعه",
    "شنبه",
  ]);
  let months = new Array([
    "فروردين",
    "ارديبهشت",
    "خرداد",
    "تير",
    "مرداد",
    "شهريور",
    "مهر",
    "آبان",
    "آذر",
    "دي",
    "بهمن",
    "اسفند",
  ]);
  let today = new Date(setdate);
  let d = today.getDay();
  let day = today.getDate();
  let month = today.getMonth() + 1;
  let year = today.getYear();
  year = window.navigator.userAgent.indexOf("MSIE") > 0 ? year : 1900 + year;
  if (year === 0) {
    year = 2000;
  }
  if (year < 100) {
    year += 1900;
  }
  let y = 1;
  for (let i = 0; i < 3000; i += 4) {
    if (year === i) {
      y = 2;
    }
  }
  for (let i = 1; i < 3000; i += 4) {
    if (year === i) {
      y = 3;
    }
  }
  if (y === 1) {
    year -= month < 3 || (month === 3 && day < 21) ? 622 : 621;
    switch (month) {
      case 1:
        if (day < 21) {
          month = 10;
          day += 10;
        } else {
          month = 11;
          day -= 20;
        }

        break;
      case 2:
        if (day < 20) {
          month = 11;
          day += 11;
        } else {
          month = 12;
          day -= 19;
        }

        break;
      case 3:
        if (day < 21) {
          month = 12;
          day += 9;
        } else {
          month = 1;
          day -= 20;
        }

        break;
      case 4:
        if (day < 21) {
          month = 1;
          day += 11;
        } else {
          month = 2;
          day -= 20;
        }

        break;
      case 6:
        if (day < 22) {
          month -= 3;
          day += 10;
        } else {
          month -= 2;
          day -= 21;
        }

        break;
      case 9:
        if (day < 23) {
          month -= 3;
          day += 9;
        } else {
          month -= 2;
          day -= 22;
        }

        break;
      case 10:
        if (day < 23) {
          month = 7;
          day += 8;
        } else {
          month = 8;
          day -= 22;
        }

        break;
      case 12:
        if (day < 22) {
          month -= 3;
          day += 9;
        } else {
          month -= 2;
          day -= 21;
        }
        break;
      default:
        break;
    }
  }
  if (y === 2) {
    year -= month < 3 || (month === 3 && day < 20) ? 622 : 621;
    switch (month) {
      case 1:
        if (day < 21) {
          month = 10;
          day += 10;
        } else {
          month = 11;
          day -= 20;
        }

        break;
      case 2:
        if (day < 20) {
          month = 11;
          day += 11;
        } else {
          month = 12;
          day -= 19;
        }

        break;
      case 3:
        if (day < 20) {
          month = 12;
          day += 10;
        } else {
          month = 1;
          day -= 19;
        }

        break;
      case 4:
        if (day < 20) {
          month = 1;
          day += 12;
        } else {
          month = 2;
          day -= 19;
        }

        break;
      case 5:
        if (day < 21) {
          month = 2;
          day += 11;
        } else {
          month = 3;
          day -= 20;
        }

        break;
      case 6:
        if (day < 21) {
          month = 3;
          day += 11;
        } else {
          month = 4;
          day -= 20;
        }

        break;
      case 7:
        if (day < 22) {
          month = 4;
          day += 10;
        } else {
          month = 5;
          day -= 21;
        }

        break;
      case 8:
        if (day < 22) {
          month = 5;
          day += 10;
        } else {
          month = 6;
          day -= 21;
        }

        break;
      case 9:
        if (day < 22) {
          month = 6;
          day += 10;
        } else {
          month = 7;
          day -= 21;
        }

        break;
      case 10:
        if (day < 22) {
          month = 7;
          day += 9;
        } else {
          month = 8;
          day -= 21;
        }

        break;
      case 11:
        if (day < 21) {
          month = 8;
          day += 10;
        } else {
          month = 9;
          day -= 20;
        }

        break;
      case 12:
        if (day < 21) {
          month = 9;
          day += 10;
        } else {
          month = 10;
          day -= 20;
        }

        break;
      default:
        break;
    }
  }
  if (y === 3) {
    year -= month < 3 || (month === 3 && day < 21) ? 622 : 621;
    switch (month) {
      case 1:
        if (day < 20) {
          month = 10;
          day += 11;
        } else {
          month = 11;
          day -= 19;
        }

        break;
      case 2:
        if (day < 19) {
          month = 11;
          day += 12;
        } else {
          month = 12;
          day -= 18;
        }

        break;
      case 3:
        if (day < 21) {
          month = 12;
          day += 10;
        } else {
          month = 1;
          day -= 20;
        }

        break;
      case 4:
        if (day < 21) {
          month = 1;
          day += 11;
        } else {
          month = 2;
          day -= 20;
        }

        break;
      case 5:
      case 6:
        if (day < 22) {
          month -= 3;
          day += 10;
        } else {
          month -= 2;
          day -= 21;
        }

        break;
      case 7:
      case 8:
      case 9:
        if (day < 23) {
          month -= 3;
          day += 9;
        } else {
          month -= 2;
          day -= 22;
        }

        break;
      case 10:
        if (day < 23) {
          month = 7;
          day += 8;
        } else {
          month = 8;
          day -= 22;
        }

        break;
      case 11:
      case 12:
        if (day < 22) {
          month -= 3;
          day += 9;
        } else {
          month -= 2;
          day -= 21;
        }
        break;
      default:
        break;
    }
  }
  if (format === null || format === undefined)
    return `${week[d]} ${day} ${months[month - 1]} ${year}`;
  if (format === "y/m/d")
    return `${year}/${("0" + month).slice(-2)}/${("0" + day).slice(-2)}`;
  if (format === "d/m/y")
    return `${day}/${("0" + month).slice(-2)}/${("0" + day).slice(-2)}`;
  if (format === "y") return `${year}`;
  if (format === "m") return `${month}`;
  if (format === "d") return `${day}`;
};

export function gregorian_to_jalali(gy, gm, gd) {
  var g_d_m, jy, jm, jd, gy2, days;
  g_d_m = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];
  gy2 = gm > 2 ? gy + 1 : gy;
  days =
    355666 +
    365 * gy +
    ~~((gy2 + 3) / 4) -
    ~~((gy2 + 99) / 100) +
    ~~((gy2 + 399) / 400) +
    gd +
    g_d_m[gm - 1];
  jy = -1595 + 33 * ~~(days / 12053);
  days %= 12053;
  jy += 4 * ~~(days / 1461);
  days %= 1461;
  if (days > 365) {
    jy += ~~((days - 1) / 365);
    days = (days - 1) % 365;
  }
  if (days < 186) {
    jm = 1 + ~~(days / 31);
    jd = 1 + (days % 31);
  } else {
    jm = 7 + ~~((days - 186) / 30);
    jd = 1 + ((days - 186) % 30);
  }
  return [jy, jm, jd];
}
export function jalali_to_gregorian(jy, jm, jd) {
  var sal_a, gy, gm, gd, days;
  jy += 1595;
  days =
    -355668 +
    365 * jy +
    ~~(jy / 33) * 8 +
    ~~(((jy % 33) + 3) / 4) +
    jd +
    (jm < 7 ? (jm - 1) * 31 : (jm - 7) * 30 + 186);
  gy = 400 * ~~(days / 146097);
  days %= 146097;
  if (days > 36524) {
    gy += 100 * ~~(--days / 36524);
    days %= 36524;
    if (days >= 365) days++;
  }
  gy += 4 * ~~(days / 1461);
  days %= 1461;
  if (days > 365) {
    gy += ~~((days - 1) / 365);
    days = (days - 1) % 365;
  }
  gd = days + 1;
  sal_a = [
    0,
    31,
    (gy % 4 === 0 && gy % 100 !== 0) || gy % 400 === 0 ? 29 : 28,
    31,
    30,
    31,
    30,
    31,
    31,
    30,
    31,
    30,
    31,
  ];
  for (gm = 0; gm < 13 && gd > sal_a[gm]; gm++) gd -= sal_a[gm];
  return [gy, gm, gd];
}

export function UpdateInput() {
  document
    .querySelectorAll(".form-outline .form-control")
    .forEach((element) => {
      if (!element.classList.contains("active") && element.value.length > 0) {
        element.classList.add("active");
      }
    });
}

export const setStyleMDB = () => {
  document.querySelectorAll(".form-outline").forEach((formOutline) => {
    new mdb.Input(formOutline).update();
  });
  if (isEmpty(document.querySelector(".select-wrapper")))
    document.querySelectorAll("select.select").forEach((formOutline) => {
      new mdb.Select(formOutline);
    });

  if (!isEmpty(document.querySelectorAll(".accordion"))) {
    document.querySelectorAll(".accordion").forEach((formOutline) => {
      new mdb.Collapse.getInstance(formOutline);
    });
  }

  if (!isEmpty(document.querySelectorAll(".modal"))) {
    document.querySelectorAll(".modal").forEach((formOutline) => {
      new mdb.Modal.getInstance(formOutline);
    });
  }
};

export const getMinAndMaxDateBirthday = () => {
  let d = new Date();
  let year = d.getFullYear();
  let month = d.getMonth();
  let day = d.getDate();
  let c = new Date(year - 18, month, day);
  let _tMonth = c.getMonth(),
    _tDay = c.getDate();
  var MaxDate = {
    year: parseInt(getPersianDate("y", c)),
    month: 11 + 1,
    day: 30,
  };
  c = new Date(year - 100, month, day);
  var MinDate = {
    year: parseInt(getPersianDate("y", c)),
    month: month + 1,
    day: day,
  };
  return { MaxDate, MinDate };
};
export const SUPPORTED_FORMATS_IMAGES = [
  "image/jpg",
  "image/jpeg",
  "image/png",
];
export function checkIfFilesAreCorrectType(files?: [File]): boolean {
  let valid = false;
  if (files) {
    files.map((file) => {
      if (!["application/pdf", "image/jpeg", "image/png"].includes(file.type)) {
        valid = false;
      }
    });
  }
  return valid;
}
export const getMobileOS = () => {
  const ua = navigator.userAgent;
  if (/android/i.test(ua)) {
    return "android";
  } else if (
    /iPad|iPhone|iPod/.test(ua) ||
    (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1)
  ) {
    return "ios";
  }
  return "pwa";
};
export function isJsonString(str) {
  try {
    JSON.parse(str);
  } catch (e) {
    return false;
  }
  return true;
}

export const convertPersian = (text) => {
  if (!isEmpty(text)) {
    return persianJs(text).toEnglishNumber();
  } else {
    return "";
  }
};

import axios from "axios";
import { ErrorServices, isEmpty } from "./tools.js";
export const urlService = window.location.href.includes("stage")
  ? "https://mysatrapstage.com"
  : "https://mysatrap.com";

export function setToken(values) {
  var response = values;
  var setToken = {
    token: response.token.token,
    expireUTCTime: response.token.expireUTCTime,
  };
  sessionStorage.setItem("token", JSON.stringify(setToken));
  axios.defaults.headers.common["token"] = setToken.token;
  axios.defaults.headers.common["Authorization"] = "Bearer " + setToken.token;
}
export const TokenAuz =
  "CfDJ8O-2tV0tliVGoIOTvz54EPiQ7d8juZS69DhPp3TGNlU-9qdx4KJ-e6VV5qSBC-M4jG-klURJQkjnjQTmW7mXs2K9zr1sxpm0Owi9o9w_P-V2sqn_rHkpH9QDIpOQErYKWgTXQmbHrrE7W5UWCrKMWoA";
export const captchaToken =
  "03AIIukzi82j6kHP4CFcC_MIbaoGWKdkj3Akd_acQBULo9pjPIltV1ewSmMsetwp2tWd3b9g1i7CYhU3vK0_7_QzCytARHPEVQrUQiqDaK1CO5nJ99XwmuLVTj1cq7mnw5Z9WZEFXVy__Vi_useYMNExNcpb-fk3jTTv-Tx7xdJWZepo6K0LLPPlujjs4GKXMJn39q4EDGJafJ-RMLg9QzVbEZaBJKeZEertRyrnqMR-cvxHtRtrLhGhHLYEq9P5sijxE9dtt7ecuBtPUr68uuQaNG8zxIK3Lw3JQEBYtwcyLlEyvpTLXaQvgK6JyyY_AKVK4HspDHMjZLmZQipMAF92mDipgtshqebWwbdxS1D99dDPBznA3QvsXIL1yZ97s37L9ZvWlygOekEr7bMCNHbsvBF_VlsGrnWTP2NcQbWNv2E-WQEGs1Jwx2zet-dAlEHXlNYw_AjlhNa_b0GHpY2ttfLFr9WJWtZfg1lTvZo4gkOCXOEIi01htol0cGyG19kXMTivBn3WcQ";

export function CheckToken() {
  if (!isEmpty(sessionStorage.getItem("token"))) {
    setToken({ token: JSON.parse(sessionStorage.getItem("token")) });
    var pass = JSON.parse(sessionStorage.getItem("token"));
    if (!isEmpty(pass.token) && !isEmpty(pass.expireUTCTime)) {
      var year = parseInt(pass.expireUTCTime.split("T")[0].split("-")[0]),
        month = parseInt(pass.expireUTCTime.split("T")[0].split("-")[1]),
        day = parseInt(pass.expireUTCTime.split("T")[0].split("-")[2]),
        hours = parseInt(
          pass.expireUTCTime.split("T")[1].split(".")[0].split(":")[0],
        ),
        minutes = parseInt(
          pass.expireUTCTime.split("T")[1].split(".")[0].split(":")[1],
        ),
        second = parseInt(
          pass.expireUTCTime.split("T")[1].split(".")[0].split(":")[2],
        );
      var utcDate = new Date(
        Date.UTC(year, month - 1, day, hours, minutes, second),
      );
      var distance = utcDate - new Date();
      if (distance <= 120) {
        return false;
      } else {
        return true;
      }
    } else {
      return false;
    }
  } else {
    return false;
  }
}
export async function CreateAPITokenBySession(tokencaptcha) {
  if (!CheckToken()) {
    var param = {
      token: "99900000000",
      platform: "pwa",
      lang: "fa",
      additional_data: "",
      //captcha: tokencaptcha,
    };
    await axios
      // .post(urlService + "/public/Security/CreateAPITokenBySession", param)
      .post(urlService + "/public/Security/LoginAsanAp", param)
      .then((response) => {
        if (!response.data.HasError) {
          setToken(response.data.Result);
        } else {
          console.log(response.data.Message);
        }
      })
      .catch((error) => {
        console.log("An error occurred:", error.response);
        ErrorServices();
      });
  }
}
export const getToken = () => {
  if (!isEmpty(sessionStorage.getItem("token"))) {
    var pars = JSON.parse(sessionStorage.getItem("token"));
    return pars.token;
  } else {
    return "";
  }
};
// export class CreateAPITokenBySession extends Component {
//   static contextType = configContext;
//   state = {};
//   async componentDidMount() {
//     if (!CheckToken()) {
//       var param = {
//         captcha: this.context.tokencaptcha,
//       };
//       const response = await axios.get(
//         "/data/CreateAPITokenBySession.json"
//         //this.context.urlService + "/public/Security/CreateAPITokenBySession",
//         //param
//       );
//       if (!response.data.HasError) {
//         setToken(response.data.Result);
//       } else {
//         console.log(response.data.Message);
//       }
//     }
//   }
//   render() {
//     return null;
//   }
// }
export const callServiceAsan = (title = "", callback) => {
  window.asanPardakht.application.setPageTitle(title);
  window.asanPardakht.application.callMeOnBackButtonPress(() => {
    callback();
  });
};
export const CallLoggerAsan = (eventName, attributeName = {}) => {
  window.asanPardakht.application.sendWebengageEvent(eventName, attributeName);
};

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./components/home";
import Management from "./components/management";
import Managementshop from "./components/management-shop";
import About from "./components/about";
import Agent from "./components/agents";
import Login from "./components/login";
import Otp from "./components/otp";
import Forgetpassword from "./components/forgetpassword";
import ConfirmOtp from "./components/confirmotp";
import { _adr } from "./rout";
import ChangePassword from "./components/changePassword";
import { useEffect } from "react";
export const ScrollToTop = () => {
  // Extracts pathname property(key) from an object
  const { pathname } = useLocation();

  // Automatically scrolls to top whenever pathname changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
};
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to={_adr.Root + _adr.Home} />} />
          <Route
            path={_adr.Root}
            element={<Navigate to={_adr.Root + _adr.Home} />}
          />
          <Route path={_adr.Root + _adr.Home} element={<Home />} />
          <Route path={_adr.Root + _adr.Management} element={<Management />} />
          <Route
            path={_adr.Root + _adr.Managementshop}
            element={<Managementshop />}
          />
          <Route path={_adr.Root + _adr.About} element={<About />} />
          <Route path={_adr.Root + _adr.Agent} element={<Agent />} />
          <Route path={_adr.Root + _adr.Login} element={<Login />} />
          <Route path={_adr.Root + _adr.Otp} element={<Otp />} />
          <Route
            path={_adr.Root + _adr.Forgetpassword}
            element={<Forgetpassword />}
          />
          <Route path={_adr.Root + _adr.ConfirmOtp} element={<ConfirmOtp />} />
          <Route
            path={_adr.Root + _adr.ChangePassword}
            element={<ChangePassword />}
          />
        </Routes>
        <ScrollToTop />
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;

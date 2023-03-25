import logo from "./logotrns.png";
import "./App.css";
import { useMediaQuery } from "react-responsive";

function App() {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });
  // const isBigScreen = useMediaQuery({ query: "(min-width: 1824px)" });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });

  return (
    <div className="body" id="root">
      <div className="background">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className="container">
        <img
          src={logo}
          alt="Logo"
          className={isTabletOrMobile ? "logo-small" : "logo-normal"}
        />
        <h1 className={isTabletOrMobile ? "text-small" : "text-normal"}>
          Coming Soon
        </h1>
        <h3 className={isTabletOrMobile ? "text-small" : "text-normal"}>
          Medicamento Site Is Nearly Ready
        </h3>
        <div className="progress-bar">
          <span></span>
        </div>
        <div className="sm">
          <a href="https://www.facebook.com/Medicamento.eg/">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=kamalmahainy@gmail.com&su=SUBJECT&body=BODY&bcc=someone.else@example.com">
            <i className="fa fa-envelope" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;

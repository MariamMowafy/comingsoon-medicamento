import logo from "./logotrns.png";
import "./App.css";
// import { AppBar, Toolbar, Typography } from "@material-ui/core";

function App() {
  return (
    <div class="body" id="root">
      <div class="background">
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
        <img src={logo} alt="Logo" />
        <h1>Coming Soon</h1>
        <h3>Medicamento Site Is Nearly Ready</h3>
        <div class="progress-bar">
          <span></span>
        </div>
        <div class="sm">
          <a href="https://www.facebook.com/Medicamento.eg/">
            {/* <i class="fab fa-facebook-f"></i> */}
            <i class="fab fa-facebook-f"></i>
          </a>
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=kamalmahainy@gmail.com&su=SUBJECT&body=BODY&bcc=someone.else@example.com">
            <i class="fa fa-envelope" aria-hidden="true"></i>
          </a>
          {/* <a href="#">
            <i class="fab fa-instagram"></i>
          </a> */}
          {/* <a href="#">
            <i class="fab fa-twitter"></i>
          </a> */}
        </div>
      </div>
    </div>
  );
}

export default App;

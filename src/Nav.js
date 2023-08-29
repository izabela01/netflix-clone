import { React, useState } from "react";
import "./Nav.css";

function Nav() {
  const [show, handleShow] = useState(false);

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  return (
    <div className="nav nav_black">
      <div className="nav_contents">
        <img
          className="nav_logo"
          src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt="Logo of Netflix"
        ></img>
        <img
          className="nav_avatar"
          src="https://static.vecteezy.com/system/resources/previews/008/667/688/original/the-head-of-a-pink-haired-girl-with-blue-eyes-young-female-face-smiling-avatar-cartoon-woman-with-short-hair-illustration-isolated-on-white-background-vector.jpg"
          alt="picture of an avatar"
        ></img>
      </div>
      <h1>This is the nav</h1>
    </div>
  );
}

export default Nav;

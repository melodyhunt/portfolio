import "./sidebar.scss";

import React from "react";

import { AiFillLinkedin, AiFillGithub, AiOutlineMail } from "react-icons/ai";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <a
        className="iconito"
        href="https://github.com/melodyhunt"
        target="_blank"
        without
        rel="noreferrer"
      >
        <AiFillGithub />
      </a>
      <a
        className="iconito"
        href="https://www.linkedin.com/in/maria-melody-hunt-23924523b/"
        target="_blank"
        without
        rel="noreferrer"
      >
        <AiFillLinkedin />
      </a>
      <a className="iconito" href="mailto:mariamelodyhunt@gmail.com">
        <AiOutlineMail />
      </a>
    </div>
  );
};
export default Sidebar;

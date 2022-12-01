import "./footer.scss";
import { AiFillLinkedin, AiFillGithub, AiOutlineMail } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="footer">
      <a
        className="iconit"
        href="https://github.com/melodyhunt"
        target="_blank"
        without
        rel="noreferrer"
      >
        <AiFillGithub />
      </a>
      <a
        className="iconit"
        href="https://www.linkedin.com/in/maria-melody-hunt-23924523b/"
        target="_blank"
        without
        rel="noreferrer"
      >
        <AiFillLinkedin />
      </a>
      <a className="iconit" href="mailto:mariamelodyhunt@gmail.com">
        <AiOutlineMail />
      </a>
    </div>
  );
};
export default Footer;

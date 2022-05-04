import { Clafiya } from "@components/icons";
import s from "./Logo.module.css";

const Logo = ({ className = "", ...props }) => (
  <div className={s.root}>
    <Clafiya />
    <h1 className={s["clafiya-text"]}>Clafiya</h1>
  </div>
);

export default Logo;

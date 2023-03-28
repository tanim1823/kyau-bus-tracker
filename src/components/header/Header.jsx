import { Link } from "react-router-dom";

const inactive = {
  textDecoration: "none",
  color: "black",
};
const active = {
  fontWeight: "500",
  fontFamily: "tahoma",
};

const Header = () => {
  return (
    <div className=" bg-success text-light pb-2">
      <div className="container d-flex gap-2">
        <Link to={"/"}>
          <img
            src="/logo.png"
            alt="KYAU Logo"
            width={40}
            height={40}
            className="mt-2"
          />
        </Link>
        <span>
          <h5 className="mt-1"> Khwaja Yunus Ali University</h5>
          <span>FOUNDER: DR. M. M. AMJAD HUSSAIN</span>
        </span>
      </div>
    </div>
  );
};

export default Header;

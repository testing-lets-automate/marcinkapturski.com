import { Link } from "react-scroll";
import Image from "components/atoms/Image/Image";
import logo from "../../../assets/logo.png";

const Logo = () => {
  return (
    <Link
      className="navbar-brand"
      activeClass="active"
      spy
      to="hero-area"
      data-testid="logo-image"
    >
      <Image src={logo} className={"img-fluid imggrey"} alt={"Logo"} />
    </Link>
  );
};

export default Logo;

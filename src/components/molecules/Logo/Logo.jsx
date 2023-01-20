import { Link } from "react-scroll";
import Image from "components/atoms/Image/Image";
import logo from "../../../assets/logo.png";

const Logo = () => {
  return (
    <Link className="navbar-brand" activeClass="active" spy to="hero-area">
      <Image
        src={logo}
        className={"img-fluid imggrey"}
        alt={"Logo"}
        datatestid="logo-image"
      />
    </Link>
  );
};

export default Logo;

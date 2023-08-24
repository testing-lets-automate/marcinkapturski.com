import Image from "components/atoms/Image/Image";
import logo from "../../../assets/logo.png";

const Logo = () => {
  return (
    <a className="navbar-brand" href="/" data-testid="navigation_item">
      <Image
        src={logo}
        className={"logo-img"}
        alt={"Logo"}
        datatestid="logo-image"
      />
    </a>
  );
};

export default Logo;

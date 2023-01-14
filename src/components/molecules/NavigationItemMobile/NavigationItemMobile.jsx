import { Link } from "react-scroll";

const NavigationItemMobile = ({ url, name }) => {
  return (
    <>
      <li className="nav-item">
        <Link
          className="nav-link transition"
          smooth
          activeClass="active"
          spy
          to={url}
        >
          {name}
        </Link>
      </li>
    </>
  );
};

export default NavigationItemMobile;

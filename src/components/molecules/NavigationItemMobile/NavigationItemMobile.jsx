import { Link } from "react-scroll";

const NavigationItemMobile = ({ url, name }) => {
  return (
    <>
      <li className="nav-item">
        <a
          className="nav-link transition"
          smooth
          activeClass="active"
          href={url}
          data-testid="navigation_item"
        >
          {name}
        </a>
      </li>
    </>
  );
};

export default NavigationItemMobile;

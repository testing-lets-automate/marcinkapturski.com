import { Link } from "react-scroll";

const NavigationItem = ({ url, name }) => {
  return (
    <>
      <li className="nav-item">
        <Link
          className="nav-link transition"
          activeClass="active"
          spy
          to={url}
          data-testid="navigation_item"
        >
          {name}
        </Link>
      </li>
    </>
  );
};

export default NavigationItem;

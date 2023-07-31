const NavigationItem = ({ url, name }) => {
  return (
    <>
      <li className="nav-item">
        <a
          className="nav-link transition"
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

export default NavigationItem;

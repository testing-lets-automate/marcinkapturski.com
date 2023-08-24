const NavigationItemPost = ({ url, name }) => {
  return (
    <>
      <li className="nav-item">
        <a
          href={url}
          className="nav-link transition"
          to={url}
          data-testid="navigation_item"
        >
          {name}
        </a>
      </li>
    </>
  );
};

export default NavigationItemPost;

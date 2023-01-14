const SocialIcons = ({ text }) => {
  return (
    <>
      <div className="float-text">
        <div className="de_social-icons">
          <span className="buton">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/marcinkapturski/marcinkapturski.com"
            >
              <i className="fa fa-github fa-lg"></i>
            </a>
          </span>
        </div>
        <span>{text}</span>
      </div>
    </>
  );
};

export default SocialIcons;

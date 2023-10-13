const SocialIcons = ({ text }) => {
  return (
    <>
      <div className="float-text">
        <div className="de_social-icons">
          <span className="buton">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.freelancer.com/u/marcinkapturski"
            >
              <i class="fa-solid fa-user"></i>
            </a>
          </span>
          <span className="buton">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/marcin-kapturski/"
            >
              <i className="fa fa-linkedin fa-lg"></i>
            </a>
          </span>
          <span className="buton">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/marcinkapturski"
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

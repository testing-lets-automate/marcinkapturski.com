const ButtonSubmit = ({ sitekey, type, id, className, text }) => {
  return (
    <div id="submit" className="mt30">
      <div id="recaptcha" className="mt30">
        <div class="g-recaptcha" data-sitekey={sitekey}></div>
      </div>
      <div id="submit" className="mt30">
        <button type={type} id={id} className={className}>
          {text}
        </button>
      </div>
    </div>
  );
};

export default ButtonSubmit;

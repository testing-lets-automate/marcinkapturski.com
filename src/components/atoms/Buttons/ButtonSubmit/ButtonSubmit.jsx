const ButtonSubmit = ({ type, id, className, text }) => {
  return (
    <div id="submit" className="mt30">
      <div id="submit" className="mt30">
        <button type={type} id={id} className={className}>
          {text}
        </button>
      </div>
    </div>
  );
};

export default ButtonSubmit;

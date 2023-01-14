const Input = ({ name, id, placeholder }) => {
  return (
    <input
      type="text"
      name={name}
      id={id}
      className="form-control"
      placeholder={placeholder}
      required
    />
  );
};

export default Input;

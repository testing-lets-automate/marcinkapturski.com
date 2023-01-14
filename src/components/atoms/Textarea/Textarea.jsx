const Textarea = ({ placeholder }) => {
  return (
    <textarea
      name="message"
      id="message"
      className="form-control"
      placeholder={placeholder}
      required
    ></textarea>
  );
};

export default Textarea;

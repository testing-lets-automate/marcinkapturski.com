const Text = ({ id, text }) => {
  return (
    <div id={id} className="hide">
      {text}
    </div>
  );
};

export default Text;

const Burgermenu = ({ showmenu, btn_icon }) => {
  return (
    <button
      className="burgermenu"
      type="button"
      onClick={() => btn_icon(!showmenu)}
    >
      <i className="fa fa-bars" aria-hidden="true"></i>
    </button>
  );
};

export default Burgermenu;

import { Link } from "react-scroll";

const LinkSmooth = ({ to }) => {
  return (
    <Link smooth spy to={to}>
      <span className="mouse transition" id="fly">
        <span className="scroll"></span>
      </span>
    </Link>
  );
};

export default LinkSmooth;

const Heading = ({ text }) => {
  return (
    <div className="row">
      <div
        className="col-md-12 text-center"
        data-aos="fade-up"
        data-aos-once="true"
        data-aos-delay="0"
        data-aos-duration="1000"
        data-aos-easing="ease"
      >
        <h2>{text}</h2>
        <div className="space-border"></div>
      </div>
    </div>
  );
};

export default Heading;

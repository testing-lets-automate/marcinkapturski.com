const Image = ({ src, className, alt }) => {
  return (
    <div>
      <img src={src} className={className} alt={alt} data-testid="page-image" />
    </div>
  );
};

export default Image;

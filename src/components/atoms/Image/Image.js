const Image = ({ src, className, alt, datatestid }) => {
  return (
    <div>
      <img src={src} className={className} alt={alt} data-testid={datatestid} />
    </div>
  );
};

export default Image;

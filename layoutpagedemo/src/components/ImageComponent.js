import elon from "../elon.png";

const ImageComponent = (props) => {
  console.log(props);
  return (
    <div className="image-container">
      <img className="elonimage" src={elon} alt="elon" />
      <div className="image-wall"></div>
    </div>
  );
};

export default ImageComponent;

import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import { imageBase } from "../../config/Constant";

const CustomCarouselGuest = ({images, propertyId}) => {
  
  return (
    <Carousel interval={null}>
      {images.map((image, index) => (
        <Carousel.Item key={index}>
          <Link to={`/location/${propertyId}`} state={{property_id:propertyId}}>
            <img
              src={`${imageBase}${image}`}
              className="d-block w-100"
              alt={`Slide ${index + 1}`}
            />
          </Link>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default CustomCarouselGuest;

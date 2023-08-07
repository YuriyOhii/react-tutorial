import PropTypes from 'prop-types';
import defaultPic from "./default.jpg";
export default function Painting({ url = defaultPic, title = 'unknown', author = 'unknown', price, quantity }) {
  return (
    <div>
      <img src={url ?? defaultPic} alt={title} width="480" />
      <h2>{title}</h2>
      <p>Athor{author}</p>
      <p>Price: {price} credits</p>
      <p>Avaluability:{quantity < 10 ? `Few left` : `In stock`}</p>
      <button type="button">Add to the cart</button>
    </div>
  );
};

Painting.propTypes = {
    url: PropTypes.string,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,

}

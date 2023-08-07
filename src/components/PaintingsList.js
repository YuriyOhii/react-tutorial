import PropTypes from "prop-types";
import Painting from "./Painting";

export default function PaintingList({ data }) {
  return (
    <ul>
      {data.map((el, index) => (
        <li key={index}>
          <Painting
            url={el.url}
            title={el.title}
            author={el.author.tag}
            price={el.price}
            quantity={el.quantity}
          />
        </li>
      ))}
    </ul>
  );
}

PaintingList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.string.isRequired })),
};

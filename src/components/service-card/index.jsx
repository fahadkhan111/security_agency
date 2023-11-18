import PropTypes from "prop-types";

export default function Card({ card, index }) {
  return (
    <div key={index} className="w-full bg-bgLight shadow  border p-2">
      <img className="px-2 pt-2 h-48 w-full" src={card.imageURL} alt="" />
      <h5 className="mt-1 p-2 h-10 w-full text-center font-extrabold bg-primary text-white rounded-sm">
          {card.title}
        </h5>
      <p className="mt-2 p-3 font-normal text-lightGray text-md text-justify">
          {card.description}
        </p>
    </div>
  );
}
Card.propTypes = {
  index: PropTypes.number.isRequired, // Require index as a number
  card: PropTypes.shape({
    imageURL: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

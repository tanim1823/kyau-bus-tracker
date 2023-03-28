import { Link } from "react-router-dom";

const Card = ({ bus, handleClick }) => {
  return (
    <div
      className="card container mt-2 mb-3"
      style={{ width: "200px", background: "rgba(0 0, 0 , 0.3)" }}
    >
      <div className="card-body">
        <h5 className="card-title">{bus.title}</h5>
        <img
          src={bus.image}
          className="card-img-top"
          alt={bus.title}
          width="100"
          height={"100"}
        />
        <Link to={"/map"}>
          <button
            className="mt-2 btn btn-outline-warning"
            onClick={() => handleClick(bus.id)}
          >
            Current Location
          </button>
        </Link>
      </div>
    </div>
  );
};
export default Card;

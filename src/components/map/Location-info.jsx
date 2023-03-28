import { useSelector } from "react-redux";

const LocationInfo = () => {
  const busDetails = useSelector((state) => state.busDetails);
  return (
    <div
      className="container  pt-2 text-light"
      style={{
        background: "rgba(0,0,0,0.7)",
        fontFamily: "tahoma",
      }}
    >
      <p className="text-center text-info">{busDetails.title}</p>
      <p className=""> Previous Location: </p>
      <p className="text-danger">Current Location: </p>
      <p className="">Next Location: </p>
    </div>
  );
};

export default LocationInfo;

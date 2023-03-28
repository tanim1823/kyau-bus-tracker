import { useSelector } from "react-redux";

const SensorData = () => {
  const sensorData = useSelector((state) => state.sensorData);
  const center = {
    lat: sensorData["Latitude"],
    lng: sensorData["Longitude"],
  };
  return (
    <div className="container text-light m-2 d-flex gap-2">
      <p className=" text-warning">Latitude: {center.lat}</p>
      <p>|</p>
      <p className="text-warning">Longitude: {center.lng}</p>
    </div>
  );
};

export default SensorData;

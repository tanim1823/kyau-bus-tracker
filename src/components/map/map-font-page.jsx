import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import App from "../../map-api/App";
import LocationInfo from "./Location-info";
import Map from "./Map";
import SensorData from "./sensorData";

const background = {
  background: "url('/image/background.jpg')",
  width: "100%",
  maxHeight: "30px",
  /* Center and scale the image nicely */
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
};

const MapSection = () => {
  const busDetails = useSelector((state) => state.busDetails);
  const navigate = useNavigate();
  useEffect(() => {
    Object.values(busDetails)[0].length === 0 && navigate("/");
  }, []);
  return (
    <div style={background}>
      <LocationInfo />
      <Map />
      <SensorData />
    </div>
  );
};

export default MapSection;

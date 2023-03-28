import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";
import MainContent from "./components/front-page/Main-Content";
import Header from "./components/header/Header";
import MapSection from "./components/map/map-font-page";
import fetchSensorData from "./redux/sensorData/thunk/fetchSendorData";

const App = () => {
  const dispatch = useDispatch();
  const sensorData = useSelector((state) => state.sensorData);
  useEffect(() => {
    dispatch(fetchSensorData);
    console.log(sensorData);
  }, [sensorData]);
  return (
    <div>
      <Header />

      {/* {error && <AlertMessage message={error} />} */}
      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="/map" element={<MapSection />} />
      </Routes>
    </div>
  );
};
export default App;

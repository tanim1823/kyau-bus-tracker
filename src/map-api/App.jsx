import SensorData from "./SensorData";
import Map from "./Map";

var GPS;
var Latitude;
var Longitude;

function App() {
  GPS = localStorage.getItem("GPS");
  Latitude = localStorage.getItem("Latitude");
  Longitude = localStorage.getItem("Longitude");

  console.log("GPS value = " + GPS);
  console.log("Latitude value = " + Latitude);
  console.log("Longitude value = " + Longitude);

  return (
    <div className="App">
      <SensorData />
      <Map />
    </div>
  );
}

export default App;

import { loaded } from "../actions";

const URL = "https://dht-11-7fe63-default-rtdb.firebaseio.com/Location.json";
const fetchSensorData = async (dispatch) => {
  const response = await fetch(URL);
  const sensorData = await response.json();
  dispatch(loaded(sensorData));
};

export default fetchSensorData;

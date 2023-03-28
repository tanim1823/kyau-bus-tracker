import { useSelector } from "react-redux";
import { useState, useCallback } from "react";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";

const API = "AIzaSyDhmZWa5XEv5aPnp29a79tTDElIQIHuSRY";

const containerStyle = {
  width: "100%",
  height: "400px",
};
const zoom = 10;

const Map = () => {
  const sensorData = useSelector((state) => state.sensorData);
  const [map, setMap] = useState(null);
  const center = {
    lat: sensorData["Latitude"],
    lng: sensorData["Longitude"],
  };

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: API,
  });

  const onLoad = useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
    setMap(map);
  }, []);

  const onUnmount = useCallback(function callback(map) {
    setMap(null);
  }, []);

  return isLoaded ? (
    <div className="container">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={zoom}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        <Marker
          position={center}
          title={"Now at"}
          icon={
            "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png"
          }
        />
        <></>
      </GoogleMap>
    </div>
  ) : (
    <></>
  );
};

export default Map;

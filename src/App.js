import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Map from "./components/Map";

function App() {
  const [ipDetails, setIpDetails] = useState({});
  const [lat, setLat] = useState(""); // Default latitude
  const [lon, setLon] = useState(""); // Default longitude

  useEffect(() => {
    axios.get("https://ipapi.co/json/").then((res) => {
      setIpDetails(res.data);
      setLat(res.data.latitude);
      setLon(res.data.longitude);
    });
  }, []);
  return (
    <>
      <h1 className="heading">IP Address Finder</h1>
      <div className="App">
        <div className="left">
          <h4>What is my IPv4 address?</h4>
          <h1 id="ip">{ipDetails.ip}</h1>
          <h4>Approximate location: </h4>

          <p>
            {ipDetails.city}, {ipDetails.region},{ipDetails.country_name}.
          </p>

          <h4>Internet Service Provider(ISP):</h4>

          <p>{ipDetails.org}</p>
        </div>
        {lon && <Map lat={lat} lon={lon} />}
      </div>
    </>
  );
}

export default App;

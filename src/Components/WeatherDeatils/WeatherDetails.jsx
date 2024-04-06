import{useState} from "react"
import styles from "./WeatherDetails.module.css"

export default function WeatherDetails() {
  const [temp, setTemp] = useState(5);
  const [city, setCity] = useState("Palakkad");
  const [country, setCountry] = useState("India");
  const [latitude, setLatitude] = useState(8.5);
  const [longitude, setLongitude] = useState(2.5);
  const [humidity, setHumidity] = useState(10);
  const [windspeed, setWindspeed] = useState(150);

  return (
    <main className={styles.WeatherDetailscontainer}>
      <div className={styles.weathericon}>
        <img src="/weather-icon.jpg" alt="climate" />
      </div>
      {/* weather details */}
      <section>
        {/* temperature */}
        <div className={styles.temperature}>{temp}°C</div>
        {/* city */}
        <div className={styles.city}>{city}</div>

        {/* country */}
        <div className={styles.country}>{country}</div>
        {/* latitude and longtitude */}
        <div className={styles.latitudecontainer}>
          <div className={styles.latitude}>
            <span>latitude</span> <span>{latitude}</span>
          </div>
          <div className={styles.longitude}>
            <span>longitude</span> <span>{longitude}</span>
          </div>
        </div>
        {/* humidity and wind speed */}
        <div className={styles.humiditycontainer}>
          {/* humidity */}
          <div className={styles.humidity}>
            <img className={styles.humidityimg} src="/humidity-icon.jpg" />
            <span>{humidity}%</span>
            <span>Humidity</span>
          </div>
          {/* wind speed */}
          <div className={styles.windspeed}>
            <img className={styles.windspeedimg} src="/windspeed.jpg" />
            <span>{windspeed}km/h</span>
            <span>Wind Speed</span>
          </div>
        </div>
      </section>
    </main>
  );
}

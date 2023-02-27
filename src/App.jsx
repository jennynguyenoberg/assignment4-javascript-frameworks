import { useRef, useState } from "react";
import './App.css'
import { ThreeDots } from 'react-loader-spinner';
import arrow from './assets/arrow.svg';
import image from './assets/image.jpg'
import cloud from './assets/cloudy-line.svg';
import drizzle from './assets/drizzle-line.svg';
import error from './assets/error-warning-line.svg';
import foggy from './assets/foggy-line.svg';
import haze from './assets/haze-line.svg';
import mist from './assets/mist-fill.svg';
import rain from './assets/rainy-line.svg';
import snow from './assets/snowy-line.svg';
import smoke from './assets/smoke-line.svg';
import clear from './assets/sun-line.svg';

function App() {
  const API_KEY = "d984405be9ebc2c29ecdfad401088d0c";
  const [loading, setLoading] = useState(false);
  const inputRef = useRef(null);
  const [apiData, setApiData] = useState(null);
  const [showWeather, setShowWeather] = useState(null);

  const WeatherTypes = [
    { type: "Clouds", src: cloud },
    { type: "Drizzle", src: drizzle },
    { type: "Foggy", src: foggy },
    { type: "Haze", src: haze },
    { type: "Mist", src: mist },
    { type: "Rain", src: rain },
    { type: "Snow", src: snow },
    { type: "Smoke", src: smoke },
    { type: "Clear", src: clear }
  ];

  function fetchWeather() {
    const API_ADRESS = `https://api.openweathermap.org/data/2.5/weather?q=${inputRef.current.value}&units=metric&appid=${API_KEY}`;

    fetch(API_ADRESS)
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        setApiData(null);
        if (data.cod == 404 || data.cod == 400) {
          // ARRAY OF OBJ
          setShowWeather([
            { type: "City Not Found", src: error },
          ]);
        }
        setShowWeather(
          WeatherTypes.filter(
            (weather) => weather.type === data.weather[0].main
          )
        );
        console.log(data);
        setApiData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };

  return (
    <div className="main-container">

      <div className="left-container">
        <a className="asset_img"><img src={image} alt="item image" /></a>
        <div className="bottom-left-left-container">
          <p>Code by Jenny Nguyen Öberg.</p>
          <p>Design and 3D-image by <a href="http://www.nrly.co/">Nathan Riley</a>.</p>
        </div>
      </div>
      <div className="right-container">
        <div className="right-placeholder-text">
          <div class="bottom-left">&#169;2023</div>
          <div class="top-left">surreal<br />visual<br />collection</div>
          <div class="top-right">lockdown<br />twenty/20</div>
        </div>
        <div className="content-container">
          <div className="row">
            <div className="column6">
              <input type="text" ref={inputRef} placeholder="Enter a city name" />
              <button onClick={fetchWeather}>
                <img src={arrow} alt="..." />
              </button>
            </div>
          </div>
          {loading ?
            <ThreeDots /> : (
              showWeather && (
                <div className="main">
                  <div className="row">
                    <div className="subhead">(Isolation)</div>
                    {apiData && (
                      <div className="h1">
                        <h1 className="city-name">
                          {apiData?.name}
                        </h1>
                      </div>
                    )}
                  </div>
                  <div className="row">
                    <div class="column1">
                      <p className="paragraph">a conceptual image series reflecting on the simple experiences that we might miss during the period of lockdown.</p>
                    </div>
                    {apiData && (
                      <>
                        <div className="column2">
                          <p className="title">Temperature</p>
                          <p className="text">{Math.floor(apiData?.main?.temp)}&#176;</p>
                        </div>
                      </>
                    )}
                    <div class="column3">
                      <p className="title">Description</p>
                      <p className="text">{showWeather[0]?.type}</p>
                    </div>
                    {apiData && (
                      <>
                        <div className="column4">
                          <p className="title">Min</p>
                          <p className="text">{Math.floor(apiData?.main?.temp_min)}&#176;</p>
                        </div>
                      </>
                    )}
                    {apiData && (
                      <>
                        <div className="column5">
                          <p className="title">Max</p>
                          <p className="text">{Math.floor(apiData?.main?.temp_max)}&#176;</p>
                        </div>
                      </>
                    )}
                  </div>
                  <div class="weather-icon">
                    <img src={showWeather[0]?.src} />
                  </div>
                </div>
              )
            )}
        </div>
      </div>
    </div>
  );
};

export default App;
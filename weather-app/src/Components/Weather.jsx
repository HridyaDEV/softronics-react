import React, { useState, useEffect } from "react";
import axios from "axios";

// import icons

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { IoWaterOutline } from "react-icons/io5";
import { LuWind, LuThermometerSun } from "react-icons/lu";
import { CiCloudOn } from "react-icons/ci";
import { MdVisibility } from "react-icons/md";
import { PiSpeedometerLight } from "react-icons/pi";
import Timeline from "./Timeline";

// Import images
import clear from "../assets/images/clear.jpg";
import clouds from "../assets/images/clouds.jpg";
import rainy from "../assets/images/rainy.jpg";
import thunderstorm from "../assets/images/thunderstorm.jpg";
import snow from "../assets/images/snow.jpg";
import mist from "../assets/images/mist.jpg";
import fog from "../assets/images/fog.jpg";
import haze from "../assets/images/haze.jpg"
import appback from "../assets/images/default.jpg";

// Backgrounds for weather conditions
const weatherBackgrounds = {
    Clear: clear,
    Clouds: clouds,
    Rain: rainy,
    Drizzle: rainy,
    Thunderstorm: thunderstorm,
    Haze: haze,
    Snow: snow,
    Mist: mist,
    Fog: fog,
    Default: appback,
};

const Weather = () => {
    const [city, setCity] = useState("Kozhikode");
    const [weatherData, setWeatherData] = useState(null);
    const [background, setBackground] = useState(weatherBackgrounds.Default);
    const [error, setError] = useState("");

    const handleSearch = async () => {
        if (!city) return;

        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=0cf3d05c6cb443424f42856d18e090b3`;

        try {
            const response = await axios.get(url);

            if (response.status === 200) {
                const data = response.data;

                const weatherCondition = data.weather[0].main;
                setBackground(weatherBackgrounds[weatherCondition] || weatherBackgrounds.Default);

                setWeatherData({
                    temperature: data.main.temp,
                    feelsLike: data.main.feels_like,
                    humidity: data.main.humidity,
                    wind: data.wind.speed,
                    cloudiness: data.clouds.all,
                    sunrise: data.sys.sunrise,
                    sunset: data.sys.sunset,
                    description: data.weather[0].description,
                    icon: data.weather[0].icon,
                    visibility: data.visibility,
                    pressure: data.main.pressure,
                    timezone: data.timezone,
                });
                setError("");
            } else {
                setError("City not found!");
                setWeatherData(null);
            }
        } catch (error) {
            setError("Error fetching weather data.");
            setWeatherData(null);
        }
    };

    useEffect(() => {
        handleSearch();
    }, []);

    return (
        <div
            className="min-h-screen bg-cover bg-no-repeat flex flex-col items-center justify-center text-white"
            style={{ backgroundImage: `url(${background})` }}
        >
            <header className="top-0 left-0 w-full p-4 text-center bg-opacity-50 z-50">
                <h1 className="text-4xl font-extrabold tracking-wide drop-shadow-lg">
                    Weather<span className="text-yellow-300">App</span>
                </h1>
            </header>

            <div className="relative flex flex-col items-center w-full max-w-3xl p-6 bg-white bg-opacity-35 backdrop-blur-md rounded-3xl shadow-lg text-gray-900">
                {/* Search Area */}
                <div className="relative z-10 w-full mb-6">
                    <div className="flex w-full">
                        <FontAwesomeIcon
                            icon={faSearch}
                            className="absolute top-1/2 left-4 transform -translate-y-1/2 text-gray-400 text-lg"
                        />
                        <input
                            type="text"
                            placeholder="Search city..."
                            className="flex-grow pl-12 pr-4 py-3 text-base border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300 ease-in-out"
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                        />
                        <button
                            className="px-5 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-r-lg shadow-md transition-all duration-300 ease-in-out"
                            onClick={handleSearch}
                        >
                            Search
                        </button>
                    </div>
                </div>

                {/* Main Content Area */}
                <div className="flex flex-col lg:flex-row w-full">
                    {/* Left Section: Main Details */}
                    <div className="flex flex-col items-center w-full lg:w-2/3 p-6 text-center">
                        {error.length > 0 ? (
                            <div className="mb-6 text-white font-semibold">{error}</div>
                        ) : (
                            <>
                                <h2 className="text-2xl font-semibold mb-2">{city}</h2>
                                <div className="flex justify-center items-center mb-4">
                                    <img
                                        src={`https://openweathermap.org/img/wn/${weatherData?.icon}@2x.png`}
                                        alt="Weather Icon"
                                        className="w-16 h-16"
                                    />
                                    <p className="text-5xl font-bold ml-4">{weatherData?.temperature}°C</p>
                                </div>
                                <p className="text-lg font-medium text-gray-200 capitalize">
                                    {weatherData?.description}
                                </p>
                                <div className="relative z-10 w-full flex justify-center mt-10 p-5">
                                    <Timeline
                                        sunrise={weatherData?.sunrise}
                                        sunset={weatherData?.sunset}
                                        currentTime={new Date().getTime() / 1000} // Current time in seconds
                                        timezone={weatherData?.timezone}
                                    />
                                </div>
                            </>
                         )}
                    </div>
               
                    <>
                    
                    {/* Right Section: Feature Cards */}
                    <div className="grid grid-cols-2 gap-4 w-full lg:w-1/3 ">
                        <div className="flex flex-col items-center p-4 rounded-lg shadow-md">
                            <IoWaterOutline className="text-3xl mb-2 text-white" />
                            <p className="text-sm font-medium text-white">Humidity</p>
                            <p className="text-lg font-bold text-gray-900">{weatherData?.humidity}%</p>
                        </div>
                        <div className="flex flex-col items-center p-3 rounded-lg shadow-md">
                            <LuWind className="text-4xl mb-2 text-white" />
                            <p className="text-sm font-medium text-white">Wind</p>
                            <p className="text-lg font-bold text-gray-900">{weatherData?.wind} km/h</p>
                        </div>
                        <div className="flex flex-col items-center p-4 rounded-lg shadow-md">
                            <CiCloudOn className="text-3xl mb-2 text-white" />
                            <p className="text-sm font-medium text-white">Cloudiness</p>
                            <p className="text-lg font-bold text-gray-900">{weatherData?.cloudiness}%</p>
                        </div>
                        <div className="flex flex-col items-center p-4 rounded-lg shadow-md">
                            <LuThermometerSun className="text-3xl mb-2 text-white" />
                            <p className="text-sm font-medium text-white">Feels Like</p>
                            <p className="text-lg font-bold text-gray-900">{weatherData?.feelsLike}°C</p>
                        </div>
                        <div className="flex flex-col items-center p-4 rounded-lg shadow-md">
                            <MdVisibility className="text-3xl mb-2 text-white" />
                            <p className="text-sm font-medium text-white">Visibility</p>
                            <p className="text-lg font-bold text-gray-900">{weatherData?.visibility} m</p>
                        </div>
                        <div className="flex flex-col items-center p-4 rounded-lg shadow-md">
                            <PiSpeedometerLight className="text-3xl mb-2 text-white" />
                            <p className="text-sm font-medium text-white">Pressure</p>
                            <p className="text-lg font-bold text-gray-900">{weatherData?.pressure} hPa</p>
                        </div>
                    </div>
                    </>
                   
                </div>
            </div>
        </div>
    );
};

export default Weather;

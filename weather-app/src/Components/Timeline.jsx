import { useEffect, useState } from "react";
import { FiSunrise, FiSunset } from "react-icons/fi";
import { IoIosSunny } from "react-icons/io";

const Timeline = ({ sunrise, sunset, currentTime, timezone }) => {
    const [progress, setProgress] = useState(0);

    const sunriseTimestamp = new Date((sunrise + timezone) * 1000).getTime();
    const sunsetTimestamp = new Date((sunset + timezone) * 1000).getTime();

    // Calculate total daylight duration
    const totalDaylight = sunsetTimestamp - sunriseTimestamp;

    // Helper function to convert UNIX timestamp to HH:MM format
    function convertUnixToTime(unixTimestamp) {
        const date = new Date(unixTimestamp * 1000);
        const hours = date.getHours();
        const minutes = date.getMinutes();
        return `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}`;
    }

    // Update progress when currentTime changes
    useEffect(() => {
        const updateProgress = () => {
            const currentTimestamp = currentTime * 1000; // Convert UNIX time to milliseconds

            if (currentTimestamp < sunriseTimestamp) {
                setProgress(0); // Before sunrise
            } else if (currentTimestamp > sunsetTimestamp) {
                setProgress(100); // After sunset
            } else {
                const elapsedTime = currentTimestamp - sunriseTimestamp;
                const newProgress = (elapsedTime / totalDaylight) * 100;
                setProgress(newProgress); // Update progress
            }
        };

        // Initial progress update
        updateProgress();

    }, [sunriseTimestamp, sunsetTimestamp, totalDaylight, currentTime]); // Dependencies to update progress on currentTime change

    return (
        <div className="w-full flex flex-col items-center justify-center rounded-lg shadow-md p-4">
            {/* Sunrise and Sunset Section */}
            <div className="w-full flex items-center justify-between mb-4">
                <div className="flex flex-col items-center">
                    <FiSunrise className="text-yellow-300 text-2xl" />
                    <p>Sunrise</p>
                    <p className="text-sm text-gray-700 mt-2">
                        {convertUnixToTime(sunrise)} {/* Display sunrise time */}
                    </p>
                </div>

                <div className="flex flex-col items-center">
                    <FiSunset className="text-orange-500 text-2xl" />
                    <p>Sunset</p>
                    <p className="text-sm text-gray-700 mt-2">
                        {convertUnixToTime(sunset)} {/* Display sunset time */}
                    </p>
                </div>
            </div>

            {/* Progress Bar with Moving Sun */}
            <div className="w-full h-2 bg-gray-300 rounded-lg mx-2 mb-4 relative">
                <div
                    className="h-2 bg-gray-500 rounded-lg"
                    style={{
                        width: `${progress}%`,
                        transition: "width 1s linear",
                    }}
                ></div>

                {/* Moving Sun */}
                <div
                    className="absolute top-1/2 transform -translate-y-1/2"
                    style={{
                        left: `calc(${progress}% - 10px)`,
                        transition: "left 1s linear",
                    }}
                >
                    <IoIosSunny className="text-yellow-300 text-4xl" />
                </div>
            </div>
        </div>
    );
};

export default Timeline;

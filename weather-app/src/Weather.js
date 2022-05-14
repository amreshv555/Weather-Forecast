import React, { useState } from "react";
import axios from "axios";


const states = [
    { id: 1, stateName: "Wisconsin", latitude: 44.5, longitude: -89.5 },
    { id: 2, stateName: "West Virginia", latitude: 39, longitude: -80.5 },
    { id: 3, stateName: "Vermont", latitude: 44, longitude: -72.699997 },
    { id: 4, stateName: "Texas", latitude: 31, longitude: -100 },
    { id: 5, stateName: "South Dakota", latitude: 44.5, longitude: -100 },
    { id: 6, stateName: "Rhode Island", latitude: 41.742325, longitude: -71.742332 },
    { id: 7, stateName: "Oregon", latitude: 44, longitude: -120.5 },
    { id: 8, stateName: "New York", latitude: 43, longitude: -75 },
    { id: 9, stateName: "New Hampshire", latitude: 44, longitude: -71.5 },
    { id: 10, stateName: "Nebraska", latitude: 41.5, longitude: -100 }
]

const Weather = () => {

    const [weather, setWeather] = useState(states);

    const fetchData = (event) => {
        event.preventDefault();
        const currentData = weather.filter((e) => e.stateName === event.target.value);
        const obj = currentData[0];

        getdata(obj.latitude, obj.longitude)

    }

    const getdata = async (latitude,longitude) => {
        const temp =await axios.get(`https://api.weather.gov/points/${latitude},${longitude}`);
        console.log(temp.data)
    }
    return (
        <div>
            <select onChange={fetchData}>
                <option>Select State</option>
                {
                    weather.map((state) => {
                        return <option key={state.id} value={state.stateName}>{state.stateName}</option>
                    })
                }
            </select>

        </div>
    );
}

export default Weather;


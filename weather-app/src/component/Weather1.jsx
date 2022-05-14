import React, { useEffect, useState } from 'react';
import axios from 'axios';

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
const Weather1 = () => {
    const [weather, setWeather] = useState(states);

    const [selectedCountry, setSelectedCountry] = useState({});

    const [sid, setSid] = useState(null);
    useEffect(() => {
        const fetchApi =async () =>{
          const url = `https://api.weather.gov/points/39.7456,-97.0892`;
          const response = await fetch(url);
          console.log(response);
        }
    }
    )

    const fetchData = (event) => {
        event.preventDefault();
        const currentData = weather.filter((e) => e.id === event.target.value);
        // let selectedCountry = currentData[0];
        setSelectedCountry(currentData[0])
        console.log(selectedCountry.stateName);
        console.log(selectedCountry.latitude);
        console.log(selectedCountry.longitude);

        // getdata();
    }

    // const getdata = async () => {
    //     const temp = axios.get(`https://api.weather.gov/points/${selectedCountry.latitude},${selectedCountry.longitude}`);
    //     console.log(temp)
    // }

    return (
        <div>
            <div>
                <select className="dropdown" onChange={() => setSid()}>
                    <option value="Select State">Select State</option>
                    {
                        weather.map((country) => {
                            // return <option name='geocode' value={[st.latitude,st.longitude]}>{st.stateName}</option>
                            return <option key={country.id} value={country.id}>{country.stateName}</option>
                        })
                    }

                </select>

                {/* <button onClick={() => fetchData(event.target.value)}></button> */}

            </div>
        </div>
    )
}

export default Weather1;
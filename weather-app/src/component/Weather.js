import React, { useState } from "react";
import axios from "axios";
import './style.css'


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
    const [selectState,setSelectState] = useState('');
    // const [periods, setPeriods] = useState([]);

    const fetchData = (event) => {
        event.preventDefault();
        const currentData = weather.filter((e) => e.stateName === event.target.value);
        setSelectState(event.target.value);
        console.log(selectState);
        const obj = currentData[0];

        getdata(obj.latitude, obj.longitude)

    }
    // const datafromback = async(latitude, longitude) => {
    //     const temp = await axios.get(`https://localhost:8080/weather/${latitude},${longitude}`);

    // }

    const getdata = async (latitude, longitude) => {
        const temp = await axios.get(`https://api.weather.gov/points/${latitude},${longitude}`);
        // console.log(temp);
        const forecasting = temp.data?.properties?.forecast;
        // console.log(forecasting);
        getForecast(forecasting);
    }
    const getForecast = async (forcast) => {
        const res = await axios.get(forcast);
        console.log(res);
        const res2 = res.data?.properties?.periods;
        // res2.map((res) => setPeriods(...periods, res))
        console.log(res2);
    }

    return (
        <div className="body">
            <div>
                <select onChange={fetchData} className="dropdown">
                    <option>Select State</option>
                    {
                        weather.map((state) => {
                            return <option key={state.id} value={state.stateName}>{state.stateName}</option>
                        })
                    }
                </select>

            </div>
            <div>
                <div className="body">
                    <h5>Forecast</h5>
                </div>
                {!selectState===null ?  {
                    // periods.map((state) => {
                    //     return <div key={state.id} className="card">
                    //         <div className="card-body">
                    //             <h6 className="card-title">{}</h6>
                    //             <p className="card-text">{}</p>
                    //             <p className="card-text">{}</p>
                    //             <p className="card-text">{}</p>
                    //         </div>
                    //     </div>
                    // })
                } : <div> </div>}
               
            </div>



        </div>
          
        
    );
}

export default Weather;


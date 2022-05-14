import React, { Component } from 'react';
import axios from 'axios';
import './style.css';


class Weather123 extends Component {
    constructor(){
        super();
       this.state = {
            stateName: [
    
                { stateName: "Wisconsin", latitude: 44.5, longitude: -89.5 },
                { stateName: "West Virginia", latitude: 39, longitude: -80.5 },
                { stateName: "Vermont", latitude: 44, longitude: -72.699997 },
                { stateName: "Texas", latitude: 31, longitude: -100 },
                { stateName: "South Dakota", latitude: 44.5, longitude: -100 },
                { stateName: "Rhode Island", latitude: 41.742325, longitude: -71.742332 },
                { stateName: "Oregon", latitude: 44, longitude: -120.5 },
                { stateName: "New York", latitude: 43, longitude: -75 },
                { stateName: "New Hampshire", latitude: 44, longitude: -71.5 },
                { stateName: "Nebraska", latitude: 41.5, longitude: -100 }
    
            ],
            
    
    
        }
    
    }
    
    obj = {
        
    }


    stateChange = (event) => {
        this.obj = this.state.stateName.filter((e) => e.stateName === event.target.value);
        console.log(this.obj)
        
    
        // const temp = axios.get(`https://api.weather.gov/points/${this.state.obj.latitude},${this.state.obj.longitude}`);
        // console.log(temp);
    }

    render() {

        return (
            <div>

                <div>
                    <select defaultValue={'DEFAULT'} onChange={this.stateChange} className="dropdown">
                        <option value="DEFAULT" disabled>Select State</option>
                        {
                            this.state.stateName.map((st) => {
                                // return <option name='geocode' value={[st.latitude,st.longitude]}>{st.stateName}</option>
                                return <option value={st.stateName}>{st.stateName}</option>
                            })
                        }

                    </select>
                   
                </div>


            </div>
        );
    }
}

export default Weather123;
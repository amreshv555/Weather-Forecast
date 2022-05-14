
import Geocode from 'react-geocode';
import './App.css';
import Weather from './component/Weather';
import Weather1 from './component/Weather1';


function App() {
 
  

  // Geocode.setApiKey("AIzaSyCwUnMF_JnBAtrP1djIqoFUGWo-hvNbZsk");
  // Geocode.setLanguage('en');
  // Geocode.setRegion("es");
  // Geocode.setLocationType("ROOFTOP");
  // Geocode.enableDebug();


  // Geocode.fromAddress("Eiffel Tower").then(
  //   (response) => {
  //     const { lat, lng } = response.results[0].geometry.location;
  //     console.log(lat, lng);
  //   },
  //   (error) => {
  //     console.error(error);
  //   }
  // );

  return (
<div>
  <h3 className='header'>WEATHER APP</h3>
  <br/>
  {/* <Weather1 /> */}
  <Weather/>
</div>
  );
}

export default App;

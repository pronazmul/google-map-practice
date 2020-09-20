import React from 'react';
import './App.css';
import {GoogleMap, withGoogleMap, withScriptjs} from 'react-google-maps'


function App() {
  
function Map(){
  return <GoogleMap defaultZoom={10} defaultCenter={{lat:22.841930, lng:89.558060}}/>
}
const wrappedMap = withScriptjs(withGoogleMap(Map))

  return (
      <div style={{height:'100vh', width:'100vw'}}>
        <h1 className='jumbotron text-center py-3 display-3 font-width-bold'>Google Map Practice</h1>
          <wrappedMap 
          googleMapUrl={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places`}
          loadingElement={<div style={{height:'100%'}}/>}
          containerElement={<div style={{height:'100%'}}/>}
          mapElement={<div style={{height:'100%'}}/>}
          />
      </div>
  );
}

export default App;

import React, {Component} from 'react';
import {connect} from 'react-redux';
 class WeatherList extends Component{

renderWeather(cityData){
console.log(cityData);
  return(
    <tr>
      <td>{cityData.city.name}</td>
      </tr>
  );
}

render()
{
return (
<table className="table table-hover">
  <thead>
  <tr>
  <th> city</th>
  <th> Temperature</th>
  <th> Pressure</th>
  <th> Humidity</th>
  </tr>
  </thead>
  {this.props.weather.map(this.renderWeather)}
  <tbody>
  </tbody>
  </table>

);


}




}

function mapStateToProps({weather}){

  return {weather};// identical to weather : weather
}

export default connect(mapStateToProps)(WeatherList);

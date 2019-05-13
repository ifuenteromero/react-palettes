import React from 'react';
import './App.css';
import Card from './components/Card'

let datos;
class App extends React.Component {
  constructor(props) {
    super(props);
    this.getData();
    this.state = {
      datos: [],
    }

  }
  getData() {
    fetch('https://raw.githubusercontent.com/Adalab/Easley-ejercicios-de-fin-de-semana/master/data/palettes.json')
      .then(res => res.json())
      .then(data => this.setState({
        datos: data.palettes,

      }));


  }

  render() {
    datos = this.state.datos;
    return (
      <ul>
        <Card datos = {datos}/>
      </ul>
    );
  }

}

export default App;

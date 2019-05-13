import React, {Component} from 'react';
import Name from './Name';
import From from './From';
import Palettes from './Palettes';
class Card extends Component{
    render(){
        
        const {datos} = this.props;
        return(
            datos.map((dato,ind) =>
                <li >
                  <Name name = {dato.name} index = {ind}/>
                  <From from ={dato.from}/>
                  <Palettes colors ={dato.colors}/>
                  </li>
      
             )
             
        );
    }



}




export default Card;
import React from 'react';
class Palettes extends React.Component{
    render(){
       
        const colors = this.props.colors;
        console.log(colors);
        return(
            <div className="Palette">
         {colors.map(color =>
                <div className="Square" style={{ backgroundColor: `#${color}` }}>{`#${color}`}</div>)}
                </div>
        );
    }


}



export default Palettes;
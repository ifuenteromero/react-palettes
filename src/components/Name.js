import React from 'react';

class Name extends React.Component{
    render(){
        //console.log(this.props);
        return(
            <h1>{this.props.name}</h1>
        );
    }
}



export default Name;
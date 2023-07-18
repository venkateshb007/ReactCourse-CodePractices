import React from 'react';

class ParentCard extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        return(
            <React.Fragment>
                <h1>Parent Component</h1>
            </React.Fragment>
        )
    }
}

export default ParentCard;
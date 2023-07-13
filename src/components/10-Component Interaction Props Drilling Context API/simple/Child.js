import React from "react";

class Child extends React.Component{
    constructor(props){
        super(props);
        this.state = {
        cText : 'Hello, Iam from Child'
        }
    }

    clickSend = () => {
        this.props.sendData(this.state.cText)
    }

    render() {
        return(
            <React.Fragment>
                <section className="p-3">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div className="card">
                                    <div className="card-body rgba-green-light">
                                        <p className="h4">Child</p>
                                        <small>{this.props.pText}</small> <br />
                                        <button onClick={this.clickSend} className="btn btn-success btm-sm">Send</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        )
    }
}



export default Child;
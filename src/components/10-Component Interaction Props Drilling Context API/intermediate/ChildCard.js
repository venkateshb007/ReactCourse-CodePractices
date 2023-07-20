import React from 'react';

class ChildCard extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        return(
            <React.Fragment>
                <section className="p-3">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div className="card">
                                    <div className="card-header rgba-green-light">
                                        <p className="h4">Child Card</p>
                                        <small>text from parent</small>
                                    </div>
                                    <div className="card-body rgba-green-light">
                                        <form className='form-inline' action="">
                                            <div className="from-group">
                                                <input type="text" className="form-control" />
                                            </div>
                                        </form>
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

export default ChildCard;
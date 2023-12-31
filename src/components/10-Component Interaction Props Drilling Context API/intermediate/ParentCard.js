import React from 'react';
import ChildCard from './ChildCard';

class ParentCard extends React.Component{
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
                            <div className="col ">
                                <div className="card ">
                                    <div className="card-header rgba-amber-light">
                                        <p className="h4 ">Parent Card</p>
                                        <small>text from child</small>
                                    </div>
                                    <div className="card-body  rgba-amber-light">
                                        <form className='form-inline' action="">
                                            <div className="from-group">
                                                <input type="text" className="form-control" />
                                            </div>
                                        </form>
                                            <ChildCard/>
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

export default ParentCard;
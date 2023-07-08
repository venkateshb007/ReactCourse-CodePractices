import React from 'react'

class Counter extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            
                counter : 0,
                
           
        }
    }

    incrementCounter = () => {
        this.setState({
            counter : this.state.counter + 1
        })
    }

    // decrementCounter = () => {
    //     this.setState({
    //         counter : this.state.count.counter - 1
    //     })
    // }

render (){
    return (
        <React.Fragment>
           <section className="p-3">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <div className="card">
                            <div className="card-header bg-secondary text-white">
                                <p className="h4">Counter</p>
                            </div>
                            <div className="card-body">
                                <h2>{this.state.counter}</h2>
                                <button className='btn btn-secondary btn-sm' onClick={this.incrementCounter}>Increment</button>
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
export default Counter;
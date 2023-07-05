import React from "react";

class WishMessage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        message : 'Hello'
    }
  }

  //Without Parameter
  sayGoodMorning = () =>{
    this.setState({
      message : "GoodMorning"
    })
  }

  //With Parameter
  sayGoodAfternoon = (value) =>{
    this.setState({
      message : value
    })
  }

  //Nested or anonymous function 
  // sayGoodEvening = () => {
  //   this.setState({
  //     message:"GoodEvening"
  //   })
  // }

  render() {
    return (
      <React.Fragment>
        <section className="p-3">
          <div className="container">
            <div className="row">
              <div className="col-md-8">
                <div className="card">
                  <div className="card-header bg-secondary text-white">
                    <p className="h4">Wish Message</p>
                  </div>
                  <div className="card-body">
                    <h2>{this.state.message}</h2>
                    <button onClick={this.sayGoodMorning} className="btn btn-success btn-sm">Good Morning</button>
                    <button onClick={this.sayGoodAfternoon.bind(this, "GoodAfternoon")} className="btn btn-warning btn-sm">Good Afternoon</button>
                    <button onClick={()=>{this.setState({message:"GoodEvening"})}} className="btn btn-danger btn-sm">Good Evening</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default WishMessage;

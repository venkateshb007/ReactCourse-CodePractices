import React from "react";

class AuthCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
    };
  }

  login=()=>{
    this.setState({
        isLoggedIn : true
    })
  }

  logout=()=>{
    this.setState({
        isLoggedIn : false
    })
  }

  render() {
    return (
      <React.Fragment>
        <section className="p-3">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="card">
                  <div className="card-header bg-secondary text-white">
                    <p className="h4">Authentication Card</p>
                  </div>
                  <div className="card-body">

                    {
                        this.state.isLoggedIn ?  <button onClick={this.logout} className="btn btn-danger btn-sm">Logout</button> : <button onClick={this.login} className="btn btn-success btn-sm">Login</button> 
                    }
                    
                    
                    {this.state.isLoggedIn ? (
                      <React.Fragment>
                        <div>
                          <p className="h3">Welcome Venky!</p>
                          <small>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Error, velit repellat dolorum optio facere
                            harum! Illum in totam sunt at.
                          </small>
                        </div>
                      </React.Fragment>
                    ) : (
                      <React.Fragment>
                        <div>
                          <p className="h3">Welcome Guest user!</p>
                          <small>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Error, velit repellat dolorum optio facere
                            harum! Illum in totam sunt at.
                          </small>
                        </div>
                      </React.Fragment>
                    )}
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
export default AuthCard;

import React from "react";

class ChangeUserName extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        username : 'venky'
    }
  }

  updateInput = (event) => {
    this.setState({
        username : event.target.value
    })
  }

  render() {
    return (
      <React.Fragment>
        <section className="p-3">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <div className="card">
                  <div className="card-header bg-secondary text-white">
                    <p className="h4">Change User Name</p>
                  </div>
                  <div className="card-body">
                    <form action="">
                      <div className="form-group">
                        <input
                        value={this.state.username}
                        onChange={this.updateInput}
                        type="text" className="form-control" />
                      </div>
                    </form>
                  </div>
                  <div className="card-footer">
                    <p className="h4">{this.state.username}</p>
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
export default ChangeUserName;

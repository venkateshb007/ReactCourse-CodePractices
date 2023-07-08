import React from "react";

class ChangePassword extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputType: "password",
    };
  }

  updateCheck = () => {
    if (this.state.inputType === "password") {
      //update to text box
      this.setState({
        inputType: "text",
      });
    } else {
      //update to password
      this.setState({
        inputType: "password",
      });
    }
  };

  render() {
    return (
      <React.Fragment>
        <section className="p-3">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="card">
                  <div className="card-header bg-secondary text-white">
                    <p className="h4">Change Password</p>
                  </div>
                  <div className="card-body">
                    <form action="">
                      <div className="input-group mb-3">
                        <input
                          type={this.state.inputType}
                          className="form-control"
                        />
                        <div className="input-group-append">
                          <div className="input-group-text">
                            <input
                              className="mr-2"
                              type="checkbox"
                              onChange={this.updateCheck}
                            />
                            Show Password
                          </div>
                        </div>
                      </div>
                    </form>
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
export default ChangePassword;

import React from "react";

class RegistrationFrom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        username: "",
        email: "",
        password: "",
        designation: "",
        terms: false,
      },
    };
  }

  updateInput = (event) => {
    if (event.target.type === "checkbox") {
      this.setState({
        user: {
          ...this.state.user,
          [event.target.name]: event.target.checked,
        },
      });
    } else {
      this.setState({
        user: {
          ...this.state.user,
          [event.target.name]: event.target.value,
        },
      });
    }
  };

  submitRegister = (event) => {
    event.preventDefault();
    console.log(this.state.user);
  }

  render() {
    return (
      <React.Fragment>
        {/* <pre>{JSON.stringify(this.state)}</pre> */}
        <section className="p-3">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <div className="card">
                  <div className="card-header bg-danger text-white">
                    <p className="h4">Registration Form</p>
                  </div>
                  <div className="card-body rgba-red-light">
                    <form onSubmit={this.submitRegister}>
                      <div className="form-group">
                        <input
                          name="username"
                          value={this.state.user.username}
                          onChange={this.updateInput}
                          type="text"
                          className="form-control"
                          placeholder="username"
                        />
                      </div>
                      <div className="form-group">
                        <input
                          name="email"
                          value={this.state.user.email}
                          onChange={this.updateInput}
                          type="email"
                          className="form-control"
                          placeholder="email"
                        />
                      </div>
                      <div className="form-group">
                        <input
                          name="password"
                          value={this.state.user.password}
                          onChange={this.updateInput}
                          type="password"
                          className="form-control"
                          placeholder="password"
                        />
                      </div>
                      <div className="form-group">
                        <select
                          name="designation"
                          value={this.state.user.designation}
                          onChange={this.updateInput}
                          id=""
                          className="form-control"
                        >
                          <option value="">Select Designation</option>
                          <option value="Software Engineer">
                            Software Engineer
                          </option>
                          <option value="sr.Software Engineer">
                            Sr.Software Engineer
                          </option>
                          <option value="Tech Lead">Tech Lead</option>
                          <option value="Project Manager">
                            Project Manager
                          </option>
                          <option value="Sr.Project Manager">
                            Sr.Project Manager
                          </option>
                          <option value="Group Manager">Group Manager</option>
                          <option value="Ast.Director">Ast.Director</option>
                          <option value="Director">Director</option>
                        </select>
                      </div>
                      <div className="form-group">
                        <div className="form-check">
                          <input
                            type="checkbox"
                            name="terms"
                            onChange={this.updateInput}
                            className="form-check-input"
                            id="defaultCheck1"
                          />
                          <label
                            htmlFor="defaultCheck1"
                            className="form-check-label"
                          >
                            Accept Term & Conditions
                          </label>
                        </div>
                      </div>
                      <div>
                        <input
                          type="submit"
                          className="btn btn-danger btn-sm"
                          value="Register"
                        />
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
export default RegistrationFrom;

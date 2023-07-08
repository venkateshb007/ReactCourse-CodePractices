import React from "react";

class HobbySelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hobby: {
        eating: false,
        coding: false,
        sleeping: false,
      },
    };
  }

  updateCheck = (event) => {
    this.setState({
      hobby: {
        ...this.state.hobby,
        [event.target.name]: event.target.checked,
      },
    });
  };

  render() {
    return (
      <React.Fragment>
        {/* <pre>{JSON.stringify(this.state)}</pre> */}
        <section className="p-3">
          <div className="container">
            <div className="row">
              <div className="col-md-7">
                <div className="card">
                  <div className="card-header bg-warning text-white">
                    <p className="h4">Hobby Selector</p>
                  </div>
                  <div className="card-body">
                    <div className="row">
                      <div className="col-md-3">
                        <div className="form-check">
                          <input
                            name="eating"
                            onChange={this.updateCheck}
                            type="checkbox"
                            id="defaultCheck1"
                            className="form-check-input"
                          />
                          <label
                            htmlFor="defaultCheck1"
                            className="form-check-label"
                          >
                            Eating
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            name="coding"
                            onChange={this.updateCheck}
                            type="checkbox"
                            id="defaultCheck2"
                            className="form-check-input"
                          />
                          <label
                            htmlFor="defaultCheck2"
                            className="form-check-label"
                          >
                            Coding
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            name="sleeping"
                            onChange={this.updateCheck}
                            type="checkbox"
                            id="defaultCheck3"
                            className="form-check-input"
                          />
                          <label
                            htmlFor="defaultCheck3"
                            className="form-check-label"
                          >
                            Sleeping
                          </label>
                        </div>
                      </div>
                      <div className="col-md-9">
                        {this.state.hobby.eating && (
                          <div className="card m-1 animated jello">
                            <div className="card-body bg-warning text-white">
                              <p className="h4">
                                <i className="fa fa-check-circle">Eating</i>
                              </p>
                              <small>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Mollitia minima quae
                                laudantium nihil exercitationem, voluptatem
                                veniam debitis laboriosam perspiciatis voluptas?
                              </small>
                            </div>
                          </div>
                        )}
                        {this.state.hobby.coding && (
                          <div className="card m-1 animated jello">
                            <div className="card-body bg-success text-white">
                              <p className="h4">
                                <i className="fa fa-check-circle">Coding</i>
                              </p>
                              <small>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Mollitia minima quae
                                laudantium nihil exercitationem, voluptatem
                                veniam debitis laboriosam perspiciatis voluptas?
                              </small>
                            </div>
                          </div>
                        )}
                        {this.state.hobby.sleeping && (
                          <div className="card m-1 animated jello">
                            <div className="card-body bg-danger text-white">
                              <p className="h4">
                                <i className="fa fa-check-circle">Sleeping</i>
                              </p>
                              <small>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Mollitia minima quae
                                laudantium nihil exercitationem, voluptatem
                                veniam debitis laboriosam perspiciatis voluptas?
                              </small>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
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
export default HobbySelector;

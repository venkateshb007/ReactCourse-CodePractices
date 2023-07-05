import React from "react";

class SelectBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCar: "",
    };
  }

  updateSelected = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    return (
      <React.Fragment>
        <section className="p-3">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <div className="card">
                  <div className="card-header bg-secondary text-white">
                    <p className="h4">Select A Car</p>
                  </div>
                  <div className="card-body">
                    <div className="row">
                      <div className="col">
                        <form action="">
                          <div className="form-group">
                            <select
                              // onChange={e => this.setState({selectedCar:e.target.value})} or we can write function outside
                              name="selectedCar"
                              onChange={this.updateSelected}
                              className="form-control"
                            >
                              <option value="">Select a Car</option>
                              <option value="BMW">BMW</option>
                              <option value="Audi">Audi</option>
                              <option value="Swift">Swift</option>
                              <option value="Kia">Kia</option>
                              <option value="Benz">Benz</option>
                              <option value="Lamborghini">Lamborghini</option>
                              <option value="Ferrari">Ferrari</option>
                              <option value="Mini Cooper">Mini Cooper</option>
                            </select>
                          </div>
                        </form>
                      </div>
                      <div className="col">
                        <p className="h4">{this.state.selectedCar}</p>
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
export default SelectBox;

import React from "react";

class SmsApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      maxCount : 100,
      text : ''
    };
  }

  updateText = (event) => {
    
    this.setState({
        ...this.state,
        text : event.target.value
    })
  }


  render() {
    return (
      <React.Fragment>
        <pre>{JSON.stringify(this.state)}</pre>
        <section className="p-3">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <div className="card">
                  <div className="card-header bg-secondary text-white">
                    <p className="h4">SMS Application</p>
                  </div>
                  <div className="card-body">
                    <form action="">
                      <div className="form-group">
                        <textarea value={this.state.text}
                        onChange={this.updateText}
                        maxLength={this.state.maxCount}
                        rows="4" className="from-control" placeholder="your text here"></textarea>
                      </div>
                    </form>
                    <div>
                        <p className="h5">The Characters Remaining : {this.state.maxCount - this.state.text.length}</p>
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
export default SmsApp;

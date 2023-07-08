import React from "react";

class StudentState extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      students: [
        {
          name: "venky",
          age: 25,
          degree: "btech",
        },
        {
          name: "kamal",
          age: 25,
          degree: "be",
        },
        {
          name: "baganna",
          age: 25,
          degree: "ba",
        },
      ],
    };
  }

  render() {
    return (
      <React.Fragment>
        <section className="p-3">
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="card my-3">
                  <div className="card-body  bg-light">
                    <ul className="list-group">
                      <li className="list-group-item">
                        Name : {this.state.students[0].name}
                      </li>
                      <li className="list-group-item">
                        Age : {this.state.students[0].age}
                      </li>
                      <li className="list-group-item">
                        Degree : {this.state.students[0].degree}
                      </li>
                    </ul>
                  </div>
                  </div>

                  <div className="card my-3">
                    <div className="card-body  bg-light">
                      <ul className="list-group">
                        <li className="list-group-item">
                          Name : {this.state.students[1].name}
                        </li>
                        <li className="list-group-item">
                          Age : {this.state.students[1].age}
                        </li>
                        <li className="list-group-item">
                          Degree : {this.state.students[1].degree}
                        </li>
                      </ul>
                    </div>
                  </div>

                    <div className="card my-3">
                  <div className="card-body  bg-light">
                      <ul className="list-group">
                        <li className="list-group-item">
                          Name : {this.state.students[2].name}
                        </li>
                        <li className="list-group-item">
                          Age : {this.state.students[2].age}
                        </li>
                        <li className="list-group-item">
                          Degree : {this.state.students[2].degree}
                        </li>
                      </ul>
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

export default StudentState;

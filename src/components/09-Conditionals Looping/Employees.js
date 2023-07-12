import React from "react";

class Employees extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      employees: [
        {
          id: "A1",
          name: "Venky",
          age: "26",
          designation: "Software Engineer",
          location: "Bengaluru",
        },
        {
          id: "A2",
          name: "Raj Patil",
          age: "87",
          designation: "Software Engineer",
          location: "Kembavi",
        },
        {
          id: "A3",
          name: "Abhilash",
          age: "28",
          designation: "Business Man",
          location: "kalaburagi",
        },
        {
          id: "A4",
          name: "Bhojaraj",
          age: "52",
          designation: "Mechanical Engineer",
          location: "Sedam",
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
                {
                  this.state.employees.map((employee)=>{
                    return (
                      <div key={employee.id} className="card bg-danger m-2">
                  <div className="card-body">
                    <ul className="list-group">
                      <li className="list-group-item">
                        ID : {employee.id}
                      </li>
                      <li className="list-group-item">
                        NAME : {employee.name}
                      </li>
                      <li className="list-group-item">
                        AGE : {employee.age}
                      </li>
                      <li className="list-group-item">
                        DESIGNATION : {employee.designation}
                      </li>
                      <li className="list-group-item">
                        LOCATION : {employee.location}
                      </li>
                    </ul>
                  </div>
                </div>
                    )
                  })
                }
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}
export default Employees;

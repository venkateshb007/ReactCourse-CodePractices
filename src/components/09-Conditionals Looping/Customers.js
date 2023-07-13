import React from "react";
import { CustomersList } from "./CustomersList";

class Customers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      customers : CustomersList
    };
  }

  render() {
    return (
      <React.Fragment>
        <section className="p-3">
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="card">
                  <p className="h3 text-primary text-center">Customers List</p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <table className="table table-hover text-center table-stripped table-primary">
                  <thead>
                    <tr>
                      <th>SNO</th>
                      <th>NAME</th>
                      <th>EMAIL</th>
                      <th>PHONE</th>
                      <th>ADDRESS</th>
                    </tr>
                  </thead>
                  <tbody >
                    {
                      this.state.customers.map((customers) => {
                      return(
                        <tr>
                      <td>{customers.id}</td>
                      <td>{customers.name}</td>
                      <td>{customers.email}</td>
                      <td>{customers.phone}</td>
                      <td>{customers.address}</td>
                    </tr>
                      )
                      })
                    }
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}
export default Customers;
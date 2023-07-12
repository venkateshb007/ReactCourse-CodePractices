=> 01
=> 02
=> 03
-------------------------------------
-------------------------------------
=> 04 
our own components => class, functional 
apply css
apply bootstrap
simple website
------------------
.css
.jsx/html/js

<react.fragment>

inline css => <nav  style = {{backgroundColor : "red"}}></nav>
----------------------------------
props => data pass to child component
props cannot be changed we can change in state

// to read the props.given name
//{new Date().toLocaleTimeString()} = this shows the current time 

//<CssCard message="Venky"/>
//<h3>{props.message}</h3>

class based => dynamic function => static
Hooks => functional component dynamic
------------------------------------
------------------------------------

=> 05
react with bootstrap
-----------------------------
bootstrap.css - index,js configure
mdb.css
style.css
------------
jquery.js - index.html
popper.js
bootstrap.js
mdb.js
----------------

custom styles..
MDbootstrap
bootstrap
css
---------------
npm i mdbootstrap

npm install
------------

icon-font-awesome 
npm install @fortawesome/fontawesome-free
----------------
add google link for icons in index.html
https://use.fontawesome.com/releases/v5.15.1/css/all.css
----------
https://use.fontawesome.com/releases/v6.4.0/css/all.css
---------------

configure in index.js

=====================
==07==
Props and State
==>
to transfer data from parent to child 

Event Bindings
Forms Bindings


State => the data which we can maintain component itself called state

 ==
 <Student name="Venkatesh" age="25"/>

 props are read only values you can nto change 

=================================
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
=================================================================

import React from 'react'

class StudentProps extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <React.Fragment>
                <section className="p-3">
                    <div className="container">
                        <div className="row">
                            <div className="card bg-light">
                                <div className="card-body ">
                                    <ul className="list-group">
                                        <li className="list-group-item">
                                            Name: {this.props.name}
                                        </li>
                                        <li className="list-group-item">
                                            Age: {this.props.age}
                                        </li>
                                        <li className="list-group-item">
                                            Degree: {this.props.degree}
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        )
    }
}
export default StudentProps;

=====================================================

import React from 'react';
import StudentState from './components/StudentState';
// import StudentProps from './components/StudentProps';

function App() {
  return (
   <React.Fragment>
      <nav className="navbar navbar-dark bg-dark navbar-expand-sm">

        <a href="/" className="navbar-brand">React with Props and State</a>

      </nav>
      {/* <StudentProps name="Venkatesh" age="25" degree="BE"/>
      <StudentProps name="Bhaganna" age="25" degree="Mtech"/>
      <StudentProps name="KamalPatel" age="25" degree="BA"/> */}

      <StudentState/>

   </React.Fragment>
  );
}

export default App;


=========================================================

Data binding

 react with events binding
 form binding

====
Counter Example
let mobile = {
  brand : 'apple',
  price : '3500'
}

console.log(mobile.price); // 3500

mobile.price =4500;
console.log(mobile.price); //4500


{
  counter:0
}

set is an object so we use setState as object

the spread operator => the spread operator is to merge two operations  
if we have one object in that we have to update one value and keep remaining as it is then we have to use spread operator ...this.state----

 count : {
                counter : 0,
                name : "venky",
                age:25,
                designation : 'software engineer'
            }



count : {
         ...this.state.count,                      // by writing this the remaining properties  will be same 
          counter : this.state.count.counter + 1    //the counter will update
          college : "Hyderabad"                      //it will merge to count
         }
==============
import React from 'react'

class Counter extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            count : {
                counter : 0,
                name : "venky",
                age:25,
                designation : 'software engineer'
            }
        }
    }

    incrementCounter = () => {
        this.setState({
            count : {
                ...this.state.count,
                counter : this.state.count.counter + 1
            }
        })
    }

    // decrementCounter = () => {
    //     this.setState({
    //         counter : this.state.count.counter - 1
    //     })
    // }

render (){
    return (
        <React.Fragment>
            <pre>{JSON.stringify(this.state)}</pre>
            <h2>{this.state.count.counter}</h2>
            <button onClick={this.incrementCounter}>Increment</button>
            {/* <button onClick={this.decrementCounter}>Decrement</button> */}
        </React.Fragment>
    )
}
}
export default Counter;

==============================================
import React from "react";

class SmsApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
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
                    <p className="h4">SMS APP</p>
                  </div>
                  <div className="card-body">
                    <form action="">
                      
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
export default SmsApp;

=====================================================

09 React Conditionals and Looping

map function
let employee = [
    {
      id : 'A1',
      name : 'Venky',
      age : '26',
      designation : 'Software Engineer',
      location : 'Bengaluru'
    },
    {
      id : 'A2',
      name : 'Raj Patil',
      age : '87',
      designation : 'Software Engineer',
      location : 'Bengaluru'
    },
    {
      id : 'A3',
      name : 'Abhilash',
      age : '28',
      designation : 'Business Man',
      location : 'kalaburagi'
    },
    {
      id : 'A4',
      name : 'Bhojaraj',
      age : '52',
      designation : 'Mechanical Engineer',
      location : 'Sedam'
    },
  ]

let employeeIds = employee.map((employee)=>{
    return employee.id;
})

console.log(employeeIds);
===========================
import React from "react";

class Employees extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      employee: [
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
          location: "Bengaluru",
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
                <div className="card bg-danger m-1">
                  <div className="card-body">
                    <ul className="list-group">
                      <li className="list-group-item">
                        ID : {this.state.employee[0].id}
                      </li>
                      <li className="list-group-item">
                        NAME : {this.state.employee[0].name}
                      </li>
                      <li className="list-group-item">
                        AGE : {this.state.employee[0].age}
                      </li>
                      <li className="list-group-item">
                        DESIGNATION : {this.state.employee[0].designation}
                      </li>
                      <li className="list-group-item">
                        LOCATION : {this.state.employee[0].location}
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
export default Employees;
===========================
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
                      <div className="card bg-danger m-1">
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

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
    return employee.name;
})

console.log(employeeIds);
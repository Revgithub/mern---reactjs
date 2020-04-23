
import React from 'react';
import NewEmployee from './EmployeeData/NewEmployee';
import ListEmployee from './EmployeeData/ListEmployee';

class Employee extends React.Component {
  render() {
    return (<div>
      
      <h1 style={{textAlign:"center"}}>Employee Dashboard</h1>
       <br/>
       <NewEmployee/>
      <ListEmployee/>
    </div>)
  }
}
export default Employee

import React from 'react';
import { Button } from 'react-bootstrap';
import "./Employee.css";
import axios from 'axios';

class NewEmployee extends React.Component {
  
    state = {
      isPermanent: false,
      name:'',
      salary:'',
      address:'',
      permanentAddress:''
    };
  

  handlePermanentAddress = (e) => {
      e.preventDefault();
  this.setState({isPermanent:true});
  document.getElementById("permanent").checked = true;
  }

  saveEmployee = () => {
    axios.post('http://localhost:3001/employee/createEmployee',this.state)
    .then(res => {
           alert('Employee saved successfully');
           window.location.reload();
        })
    .catch(error => {
          this.setState({isError:true,errorMessage:error.response.data.message})
        })
  }

  render() {
    return (
      <div className="row justify-content-center">
        <div className="formDiv col-sm-4">
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            name="Name"
            placeholder="Employee name.."
            onChange={(e) => this.setState({name:e.target.value})}
            required
          />
        </div>

        <div className="formDiv col-sm-4">
          <label htmlFor="salary">Salary</label>
          <input
            type="number"
            id="salary"
            name="salary"
            onChange={(e) => this.setState({salary:e.target.value})}
            required
            placeholder="Employee salary.."
          />
        </div>
        <div className="formDiv col-sm-4">
          <label htmlFor="salary">Address</label>
          <textarea
            rows="4"
            cols="50"
            id="Address"
            name="Address"
            required
            placeholder="Employee address.."
            onChange={(e) => this.setState({address:e.target.value})}
          />
        </div>
        <div className="row">
          <div className="formDiv col-sm-4">
            <input type="radio" id="permanent" name="permanent address" value="isPermanent" onChange={(e) => this.handlePermanentAddress(e)} />{" "}
            Permanent address
{          (this.state.isPermanent)?(            <textarea
              rows="4"
              cols="50"
              id="Address"
              name="Address"
              placeholder="Employee address.."
              onChange={(e) => this.setState({permanentAddress:e.target.value})}
            />
):null}
          </div>
        </div>
        <input onClick={this.saveEmployee} disabled={(this.state.name === '' || this.state.salary === '' || this.state.address === '')} type="submit" value="Submit" />
      </div>
    );
  }
}
export default NewEmployee




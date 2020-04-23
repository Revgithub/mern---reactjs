import axios from 'axios';
import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
 

class ListEmployee extends React.Component {


    state = {
        formData:[],
        name:'',
        salary:'',
        address:'',
        _id:''
    }

    componentDidMount(){
        axios.get('http://localhost:3001/employee/fetchEmployees')
        .then(res => {
            console.log(res);
           this.setState({formData:[...res.data.data]});
            })
        .catch(error => {
              console.log(error);
            })
    }

    deleteItem = (id) => {
        console.log(id)
        axios.post('http://localhost:3001/employee/deleteEmployee',{'_id':id})
        .then(res => {
          alert('Deleted successfully');
          window.location.reload();
            })
        .catch(error => {
              console.log(error);
            })
    }

    editItem = (id) => {
        if(id !== this.state._id){

            let isName = this.state.name.split().some(x => x);
            if(isName) id.name = this.state.name;
            let isSalary = this.state.salary.split().some(x => x);
            if(isSalary) id.salary = this.state.salary;
            let isAddress = this.state.address.split().some(x => x);
            if(isAddress) id.address = this.state.address;
            axios.put('http://localhost:3001/employee/updateEmployee',id)
            .then(res => {
              window.location.reload();
                })
            .catch(error => {
                  console.log(error);
                })
    
        }
           }

  render() {
      return (
            <div className="container">

                <table className="table">
                    <thead>
                        <tr>
                            <th> Name</th>
                            <th> salary</th>
                            <th> addres</th>
                            <th> Action </th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.formData.map((singleEmp, index) => (
                            <tr key={index}>
                                <td > <input id="1" type="text" defaultValue = {singleEmp.name}  onChange={(e) => this.setState({name:e.target.value})}/> </td>
                                <td> <input id ="2" type="text" defaultValue ={singleEmp.salary} onChange={(e) => this.setState({salary:e.target.value})} /></td>
                                <td> <input id="3" type="text" defaultValue ={singleEmp.address} onChange={(e) => this.setState({address:e.target.value})}/></td>
                                <td> <button  className="btn btn-primary mr-2" onClick={()=> this.editItem(singleEmp)}> Update </button><button className="btn btn-secondary" onClick={()=>this.deleteItem(singleEmp._id)}> Delete </button></td>
                            </tr>
                        ))
                        }

                    </tbody>
                </table>

            </div>
        );
  }
}
export default ListEmployee;
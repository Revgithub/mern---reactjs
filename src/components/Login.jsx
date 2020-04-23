import axios from 'axios';
import React, { Component } from 'react';
import { Link, Redirect } from "react-router-dom";
import { Alert } from 'react-bootstrap';

class LoginPage extends Component {
    constructor() {
        super();
        this.state = {
          username:'',
          password:'',
          isError:false,
          errorMessage:''
        }
    }

     authenticate = () => {
         this.setState({isError:false,errorMessage:''})
         let formData = {username:this.state.username,password:this.state.password}
        axios.post('http://localhost:3001/auth/login',formData)
        .then(res => {
            this.props.history.push('/employee') 
            })
        .catch(error => {
              this.setState({isError:true,errorMessage:error.response.data.message})
            })
}
    
    render() {
        return (
          <div className="col-sm-8 mx-auto" style={{ marginTop: "165px" }}>
            {(this.state.isError) ? <Alert variant="danger">{this.state.errorMessage} </Alert> :null}

            <div className="form-inline my-2">
              <label className="m-2 col-sm-2" htmlFor="userName">
                Username:
              </label>
              <input
                type="text"
                className="form-control"
                onChange={(e) => this.setState({ username: e.target.value,isError:false,errorMessage:'' })}
                id="username"
                name="email"
              />
            </div>
            <div className="form-inline my-2">
              <label className="m-2 col-sm-2" htmlFor="password">
                Password:
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                onChange={(e) => this.setState({ password: e.target.value,isError:false,errorMessage:'' })}
                name="password"
              />
            </div>
            <div className="my-4 form-inline" style={{ marginLeft: "62px" }}>
              <button
                type="submit"
                disabled={
                  this.state.username === "" || this.state.password === ""
                }
                onClick={(e) => this.authenticate()}
                className="btn btn-primary col-sm-2 ml-10 mr-2"
              >
                Login
              </button>
              <button type="reset" className="btn btn-secondary col-sm-2">
                Cancel
              </button>
            </div>
          </div>
        );
    }
}

export default LoginPage;
import React, { Component } from 'react';
import{Route,NavLink,Switch,Redirect} from 'react-router-dom';
import Login from '../components/Login';
import Employee from '../components/Employee';








class Router extends Component {


    render () {
        return (
            <div>
            <Switch>
                  
                   <Route exact path="/login"  component ={Login}/>
                   <Route exact path="/"  component ={Login}/> 
                   <Route exact path="/employee"  component ={Employee}/> 
                   <Route render={() => <h1>404 not found</h1>}/>
                   {/* <Route path="/" component={Posts}/> */}
                   {/* <Redirect from ="/" to="/posts"></Redirect>  */}
                   </Switch>
      </div>   
        )
    }


}

export default Router;
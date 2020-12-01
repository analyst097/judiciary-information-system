import React, {Component} from 'react';
import axios from 'axios';
import {withRouter} from 'react-router-dom';

 class Login extends Component{
    constructor(props){
        super(props);

        this.state = {
            username : '',
            type: '',
            password: ''
        }

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangeType = this.onChangeType.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

   createItem() {
        localStorage.setItem("mytime", Date.now());
      }
      
    readValue() {
        var x = localStorage.getItem("mytime");
        document.getElementById("demo").innerHTML = x;
      }

    onChangeUsername(e){
        this.setState({
            username: e.target.value
        });
    }
    onChangePassword(e){
        this.setState({
            password: e.target.value
        });
    }
    onChangeType(e){
        this.setState({
            type: e.target.value
        });
    }
    onSubmit(e){
        e.preventDefault();

        const user = {
            username: this.state.username,
            password: this.state.password,
            type: this.state.type
        }
        
        console.log(user);        
        // fetch('http://localhost:5000/users/login', user)
        fetch('http://localhost:5000/users/login',{
            method:'POST',
            body:JSON.stringify(user),
            headers:{
                'Content-Type':'application/json'
            }
        })
        .then(res =>{ return res.json()})
        .then(data=>{
                if(data.success){

                    window.location='/caseList';

                    alert("Login successful");

                    console.log(data);

                    // if(user.type === 'registrar'){
                     
                    // }
                    // else{
                       
                    // }

                    localStorage.setItem("username", "exists");
                 
                }
                else{
                    alert("Invalid credentials");
                }
            })
            .catch(err=>console.log(err))
        
        this.setState({
            username:'',
            password:'',
            type:''
        })

        console.log(localStorage.getItem('registrar'));
    }
    render(){
        return(
            <div id="loginform">
            <h3>Login form</h3>
            <form onSubmit={this.onSubmit}>
            <div className="form-group">
                    <select className="form-control" 
                        onChange={this.onChangeType}
                        value={this.state.type}
                        required >
                        <option>Lawyer</option>
                        <option>Registrar</option>
                        <option>Judge</option>
                    </select>
                </div>
                <div className="form-group">
                    <label>Username :</label>
                    <input type="text"
                            required
                            className="form-control"
                            value={this.state.username}
                            onChange={this.onChangeUsername} />
                </div>
                <div className="form-group">
                    <label>Password :</label>
                    <input type="password"
                            required
                            className="form-control"
                            value={this.state.password}
                            onChange={this.onChangePassword} />
                </div>
                <div className="form-group">
                        <input
                            type="submit"
                            className="btn"
                            value="Login" />
                    </div>
            </form>
            </div>
        );
    }
}

export default withRouter(Login);
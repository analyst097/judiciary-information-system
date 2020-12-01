import React, {Component} from 'react';
import axios from 'axios';

export default class CreateUsers extends Component{
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

        axios.post('http://localhost:5000/users/add', user)
            .then(res => {
                console.log(res.data)
                alert("Sucessful");
            });

        this.setState({
            username:'',
            password:'',
            type:''
        })

    }
    render(){
        return(
            <div id="regform">
            <h3>Register User</h3>
            <form onSubmit={this.onSubmit}>
            <div className="form-group">
                    <select className="form-control" 
                        onChange={this.onChangeType}
                        value={this.state.type}
                        required >
                        <option></option>
                        <option>Registrar</option>
                        <option>Judge</option>
                        <option>Lawyer</option>
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
                    <input type="text"
                            required
                            className="form-control"
                            value={this.state.password}
                            onChange={this.onChangePassword} />
                </div>
                <div className="form-group">
                        <input
                            type="submit"
                            className="btn"
                            value="Create User" />
                    </div>
            </form>
            </div>
        );
    }
}

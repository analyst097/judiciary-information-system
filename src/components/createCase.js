import React, {Component} from 'react';
import DatePicker from 'react-datepicker';
import axios from 'axios';
import "react-datepicker/dist/react-datepicker.css";

export default class CreateCase extends Component{
    
    constructor(props){
        super(props);

        this.state = {
            def_name : '',
            def_addr: '',
            crime_type: '',
            crime_date: new Date(),
            crime_location: '',
            ao_name:'',
            arrest_date: new Date(),
            judge_name:'',
            lawyer_name:'',
            prosecutor_name:'',
            start_date: new Date(),
            end_date: new Date(),
            status: '',
            summary:''
        }

        this.onChangeDefName = this.onChangeDefName.bind(this);
        this.onChangeDefAddr = this.onChangeDefAddr.bind(this);
        this.onChangeCrimeType = this.onChangeCrimeType.bind(this);
        this.onChangeCrimeDate = this.onChangeCrimeDate.bind(this);
        this.onChangeCrimeLoc = this.onChangeCrimeLoc.bind(this);
        this.onChangeAoName = this.onChangeAoName.bind(this);
        this.onChangeArrestDate = this.onChangeArrestDate.bind(this);
        this.onChangeJudgeName = this.onChangeJudgeName.bind(this);
        this.onChangeLawyerName = this.onChangeLawyerName.bind(this);
        this.onChangeProsecutorName = this.onChangeProsecutorName.bind(this);
        this.onChangeStartDate = this.onChangeStartDate.bind(this);
        this.onChangeEndDate = this.onChangeEndDate.bind(this);
        this.onChangeStatus = this.onChangeStatus.bind(this);
        this.onChangeSummary = this.onChangeSummary.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChangeDefName(e){
        this.setState({
            def_name: e.target.value
        });
    }

    onChangeDefAddr(e){
        this.setState({
            def_addr: e.target.value
        });
    }
    
    onChangeCrimeType(e){
        this.setState({
            crime_type: e.target.value
        });
    }
    onChangeCrimeDate(date){
        this.setState({
            crime_date: date
        });
    }
    onChangeCrimeLoc(e){
        this.setState({
            crime_location: e.target.value
        });
    }

    onChangeAoName(e){
        this.setState({
            ao_name: e.target.value
        });
    }
    
    onChangeArrestDate(date){
        this.setState({
            arrest_date: date
        });
    }
    onChangeJudgeName(e){
        this.setState({
            judge_name: e.target.value
        });
    }
 
    
    onChangeLawyerName(e){
        this.setState({
            lawyer_name: e.target.value
        });
    }

    onChangeProsecutorName(e){
        this.setState({
            prosecutor_name: e.target.value
        });
    }
  
    onChangeStartDate(date){
        this.setState({
            start_date: date
        });
    }
    onChangeEndDate(date){
        this.setState({
            end_date: date
        });
    }
    
    onChangeStatus(e){
        this.setState({
            status: e.target.value
        });
    }

    onChangeSummary(e){
        this.setState({
            summary: e.target.value
        });
    }
 
    
    onSubmit(e){
        e.preventDefault();

        const exercise = {
            def_name: this.state.def_name,
            def_addr: this.state.def_addr,
            crime_type: this.state.crime_type,
            crime_date: this.state.crime_date,
            crime_location: this.state.crime_location,
            ao_name: this.state.ao_name,
            arrest_date: this.state.arrest_date,
            judge_name: this.state.judge_name,
            lawyer_name: this.state.lawyer_name,
            prosecutor_name: this.state.prosecutor_name,
            start_date: this.state.start_date,
            end_date: this.state.end_date,
            status: this.state.status,
            summary: this.state.summary,

        }
        
        console.log(exercise);

        axios.post('http://localhost:5000/exercises/add', exercise)
        .then(res => console.log(res.data))
        .catch(err=> console.log(err));

        this.setState({
            def_name : '',
            def_addr: '',
            crime_type: '',
            crime_date: new Date(),
            crime_location: '',
            ao_name:'',
            arrest_date: new Date(),
            judge_name:'',
            lawyer_name:'',
            prosecutor_name:'',
            start_date: new Date(),
            end_date: null,
            status: '',
            summary:''
        })

        // window.location = '/create';
    }
    
    render(){
        return(
            <div>
                <h3>Create Case</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Defandant's name: </label>
                        <input
                            type="text"
                            required
                            className="form-control"
                            value={this.state.def_name}
                            onChange={this.onChangeDefName} />
                    </div>
                    <div className="form-group">
                        <label>Defandant's address: </label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.def_addr}
                            onChange={this.onChangeDefAddr} />
                    </div>

                    <div className="form-group">
                        <label>Crime type: </label>
                        <input
                            type="text"
                            required
                            className="form-control"
                            value={this.state.crime_type}
                            onChange={this.onChangeCrimeType} />
                    </div>
                    <div className="form-group">
                        <label>Crime Date: 
                            <DatePicker 
                                selected={this.state.crime_date}
                                onChange={this.onChangeCrimeDate}
                                />
                        </label>
                    </div>
                    <div className="form-group">
                        <label>Crime Location: </label>
                        <input
                            type="text"
                            required
                            className="form-control"
                            value={this.state.crime_location}
                            onChange={this.onChangeCrimeLoc} />
                    </div>
                    <div className="form-group">
                        <label>Arresting Officer name: </label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.ao_name}
                            onChange={this.onChangeAoName} />
                    </div>
                    <div className="form-group">
                        <label>Arrest Date: 
                        <DatePicker 
                                selected={this.state.arrest_date}
                                onChange={this.onChangeArrestDate}
                                />
                        </label>
                    </div>
                    <div className="form-group">
                        <label>Judge Name: </label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.judge_name}
                            onChange={this.onChangeJudgeName} />
                    </div>
                    <div className="form-group">
                        <label>Lawyer Name: </label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.lawyer_name}
                            onChange={this.onChangeLawyerName} />
                    </div>
                    <div className="form-group">
                        <label>Prosecutor Name: </label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.prosecutor_name}
                            onChange={this.onChangeProsecutorName} />
                    </div>
                    <div className="form-group">
                        <label>Start Date: </label>
                        <DatePicker 
                                selected={this.state.start_date}
                                onChange={this.onChangeStartDate}
                                />
                    </div>
                    <div className="form-group">
                        <label>End Date: </label>
                        <DatePicker 
                                selected={this.state.end_date}
                                onChange={this.onChangeEndDate}
                            />
                    </div>
                    <div className="form-group">
                        <label>Status: </label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.status}
                            onChange={this.onChangeStatus} />
                    </div>
                    <div className="form-group">
                        <label>Summary: </label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.summary}
                            onChange={this.onChangeSummary} />
                    </div>
                    <div className="form-group">
                        <input
                            type="submit"
                            className="btn"
                            value="Create Case" />
                    </div>
                </form>
        </div>
        );
    }
}

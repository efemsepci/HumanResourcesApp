import React, { Component } from 'react'
import {Link} from "react-router-dom"
import PersonnelService from '../services/PersonnelService';


export default class AddPersonnelComponent extends Component {
    constructor(props){
        super(props)
        this.state={
            firstName:'',
            lastName:'',
            gender:'',
            birthDate:'',
            maritalStatus:'',
            tcNo:'',
            graduationStatus:'',
            department:'',
            job:'',
            isWorking:'',
            imageBase64:null,
            allTc:[],
            errorMessage:""
        }
        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.changeGenderHandler = this.changeGenderHandler.bind(this);
        this.changeBirthDateHandler = this.changeBirthDateHandler.bind(this);
        this.changeMaritalStatusHandler = this.changeMaritalStatusHandler.bind(this);
        this.changeTcNOHandler = this.changeTcNOHandler.bind(this);
        this.changeGraduationStatusHandler = this.changeGraduationStatusHandler.bind(this);
        this.changeDepartmentHandler = this.changeDepartmentHandler.bind(this);
        this.changeJobHandler = this.changeJobHandler.bind(this);
        this.changeIsWorkingHandler = this.changeIsWorkingHandler.bind(this);
        this.changeImageHandler = this.changeImageHandler.bind(this);

        this.addPersonnel = this.addPersonnel.bind(this);

        this.tcNoControl = this.tcNoControl.bind(this);
    }

    componentDidMount() {
        PersonnelService.getPersonnel()
      .then(data => {
        const tcNumbers = data.data.map(person => person.tcNo);
        this.setState({ allTc: tcNumbers });
      })
      .catch(error => {
        console.error('Error fetching tcnos:', error);
      });
    }

    addPersonnel = (e) =>{
        e.preventDefault();
        console.log(this.state.allTc);
        let personnel = {firstName: this.state.firstName, lastName: this.state.lastName, gender: this.state.gender, birthDate: this.state.birthDate, maritalStatus: this.state.maritalStatus, tcNo: this.state.tcNo, graduationStatus: this.state.graduationStatus, department: this.state.department, job: this.state.job, isWorking: this.state.isWorking, imageBase64: this.state.imageBase64
        };

        if(this.tcNoControl(personnel.tcNo)){
            PersonnelService.createPersonnel(personnel)
        }
        else{
            this.setState({errorMessage: "Invalid TC!"});
        }
    }



    tcNoControl = (tc) =>{

        for(var i = 0; i<this.state.allTc.length; i++){
            if(this.state.allTc[i] == tc) return false;
        }
        
        var odd = 0, even = 0, result = 0, tcSum=0;

        if(tc.length != 11) return false;
        if(tc[0] == '0') return false;

        odd = parseInt(tc[0]) + parseInt(tc[2]) + parseInt(tc[4]) + parseInt(tc[6]) + parseInt(tc[8]);
        even = parseInt(tc[1]) + parseInt(tc[3]) + parseInt(tc[5]) + parseInt(tc[7]);
        odd = 7*odd;
        result = Math.abs(odd-even);
        if(result % 10 != parseInt(tc[9])) return false;

        for(var i = 0; i<10; i++){
            tcSum += parseInt(tc[i]);
        }
        if(tcSum % 10 != parseInt(tc[10])) return false;

        return true;

    }

    changeFirstNameHandler = (event) => {
        this.setState({firstName: event.target.value});
    }
    changeLastNameHandler = (event) => {
        this.setState({lastName: event.target.value});
    }
    changeGenderHandler = (event) => {
        this.setState({gender: event.target.value});
    }
    changeBirthDateHandler = (event) => {
        this.setState({birthDate: event.target.value});
    }
    changeMaritalStatusHandler = (event) => {
        this.setState({maritalStatus: event.target.value});
    }
    changeTcNOHandler = (event) => {
        this.setState({tcNo: event.target.value});
    }
    changeGraduationStatusHandler = (event) => {
        this.setState({graduationStatus: event.target.value});
    }
    changeDepartmentHandler = (event) => {
        this.setState({department: event.target.value});
    }
    changeJobHandler = (event) => {
        this.setState({job: event.target.value});
    }
    changeIsWorkingHandler = (event) => {
        this.setState({isWorking: event.target.value});
    }
    changeImageHandler = (event) => {
        console.log(event.target.files)
        const data = new FileReader();
        data.addEventListener('load', () =>{
            this.setState({imageBase64: data.result}, () => {
                console.log(this.state.imageBase64);
            })
        })
        data.readAsDataURL(event.target.files[0]);
        
    }
  render() {


    return (
      <div>
        <div className = "container">
        <Link to="/personnel" className="btn btn-primary">Go Back</Link>
            <div className='row'>
                <div className = "card col-md-6 offset-md-3 offset-md-3">
                    <h3 className='text-cenet'>Add Personnel</h3>
                    <div className='card-body'>
                        <form>
                            <div className='form-group'>
                                <label>First Name</label>
                                <input maxLength={255} placeholder='First Name' name='firstName' className='form-control' value={this.state.firstName} onChange={this.changeFirstNameHandler}/>
                            </div>
                            <div className='form-group'>
                                <label>Last Name</label>
                                <input maxLength={255} placeholder='Last Name' name='lastName' className='form-control' value={this.state.lastName} onChange={this.changeLastNameHandler}/>
                            </div>
                            <div className='form-group'>
                                <label>Gender</label>
                                <div onChange={this.changeGenderHandler}>
                                    <input type="radio" value="M" name="gender" /> Male
                                    <input style={{marginLeft:"10px"}} type="radio" value="F" name="gender" /> Female
                                    <input style={{marginLeft:"10px"}} type="radio" value="O" name="gender" /> Other
                                </div>
                            </div>
                            <div className='form-group'>
                                <label>Birth Date</label>
                                <input type="date" maxLength={10} name='birthDate' className='form-control' value={this.state.birthDate} onChange={this.changeBirthDateHandler}/>
                            </div>
                            <div className='form-group'>
                                <label>Marital Status</label>
                                <div onChange={this.changeMaritalStatusHandler}>
                                    <input type="radio" value="evli" name="maritalStatus" /> Evli
                                    <input style={{marginLeft:"10px"}} type="radio" value="bekar" name="maritalStatus" /> Bekar
                                </div>
                            </div>
                            <div className='form-group'>
                                <label>TCKN</label>
                                <input maxLength={255} placeholder='TCKN' name='tcNo' className='form-control' value={this.state.tcNo} onChange={this.changeTcNOHandler}/>
                            </div>
                            <div className='form-group'>
                                <p style={{color: 'red'}}>{this.state.errorMessage}</p>
                             </div>
                            <div className='form-group'>
                                <label>Graduation Status</label>
                                <select style={{marginLeft:"10px"}} onChange = {this.changeGraduationStatusHandler} value = {this.state.graduationStatus}>
                                    <option selected hidden>Select Graduation Status</option>
                                    <option value = 'UNDER_GRADUATE'>Under Graduate</option>
                                    <option value = 'ASSOCIATE_DEGREE'>Associate Degree</option>
                                    <option value = 'POST_GRADUATE'>Post Graduate</option>
                                    <option value = 'DOCTORATE'>Doctorate</option>
                                </select>
                            </div>
                            <div className='form-group'>
                                <label>Department</label>
                                <select style={{marginLeft:"10px"}} onChange = {this.changeDepartmentHandler} value = {this.state.department}>
                                    <option selected hidden>Select Department</option>
                                    <option value = 'SOFTWARE_DEVELOPMENT'>Software Development</option>
                                    <option value = 'RESEARCH_DEVELOPMENT'>Research Development</option>
                                </select>
                            </div>
                            <div className='form-group'>
                                <label>Job</label>
                                <select style={{marginLeft:"10px"}} onChange = {this.changeJobHandler} value = {this.state.job}>
                                    <option selected hidden>Select Job</option>
                                    <option value = 'SOFTWARE_DEVELOPER'>Software Developer</option>
                                    <option value = 'ASSISTANT_DIRECTOR'>Assistant Director</option>
                                    <option value = 'DIRECTOR'>Director</option>
                                </select>
                            </div>
                            <div className='form-group'>
                                <label>Is Working</label>
                                <div onChange={this.changeIsWorkingHandler}>
                                    <input type="radio" value="Yes" name="isWorking" /> Yes
                                    <input style={{marginLeft:"10px"}} type="radio" value="No" name="isWorking" /> No
                                </div>
                            </div>
                            <div className='form-group'>
                                <label>Photo</label>
                                <input style={{marginLeft:"10px"}} type='file' accept="/image/*" onChange={this.changeImageHandler}></input>
                            </div>
                            <Link to="/personnel" className="btn btn-success" onClick={this.addPersonnel}>Save</Link>
                            <Link to="/personnel" className="btn btn-danger">Cancel</Link>
                        </form>
                    </div>
                </div>
            </div>
        </div>
      </div>
    )
  }
}

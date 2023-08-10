import React, { useEffect, useState } from 'react';
import { useParams , Link} from 'react-router-dom';
import PersonnelService from '../services/PersonnelService';


const UpdatePersonnelComponent = () =>{
    const {id} = useParams();

    const [personnel, setPersonnel] = useState({
        firstName: '',
        lastName: '',
        gender: '',
        birthDate: '',
        maritalStatus: '',
        tcNo: '',
        graduationStatus: '',
        department: '',
        job: '',
        isWorking: '',
        imageBase64:null
    });
    


    useEffect(() => {
        PersonnelService.getPersonnelById(id)
        .then(data => {
          setPersonnel(data.data);
        })
        .catch(error => {
          console.error('Error fetching personnel details:', error);
            
        });
      }, [id])

      const tcControl = (tc) =>{
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


      const handleUpdate = (e) =>{
        e.preventDefault();

        const updatedPersonnel = {
            id: id,
            firstName: personnel.firstName,
            lastName: personnel.lastName,
            gender: personnel.gender,
            birthDate: personnel.birthDate,
            maritalStatus: personnel.maritalStatus,
            tcNo: personnel.tcNo,
            graduationStatus: personnel.graduationStatus,
            department: personnel.department,
            job: personnel.job,
            isWorking: personnel.isWorking,
            imageBase64: personnel.imageBase64
          }

          if(tcControl(updatedPersonnel.tcNo)){
            PersonnelService.updatePersonnel(updatedPersonnel, id)
          .then(res => {
              console.log("Personnel updated succesfully", res);
          })
          .catch((error) => {
              console.error('Error updating personnel:', error);
            });
          }
          else{
            alert('Invalid tc!')
          }

            }

        const changeImageHandler = (e) =>{
            console.log(e.target.files)
            const data = new FileReader();
            data.addEventListener('load', () =>{
            setPersonnel({...personnel, imageBase64: data.result})
        })
        data.readAsDataURL(e.target.files[0]);
        }

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
                                  <input name='firstName' className='form-control' value={personnel.firstName} onChange={(e) => setPersonnel({...personnel, firstName: e.target.value})}/>
                              </div>
                              <div className='form-group'>
                                  <label>Last Name</label>
                                  <input placeholder='Last Name' name='lastName' className='form-control' value={personnel.lastName} onChange={(e) => setPersonnel({...personnel, lastName: e.target.value})}/>
                              </div>
                              <div className='form-group'>
                                  <label>Gender</label>
                                  <select onChange={(e) => setPersonnel({...personnel, gender: e.target.value})} value = {personnel.gender}>
                                      <option selected hidden>Select a option</option>
                                      <option value = 'M'>M</option>
                                      <option value = 'F'>F</option>
                                  </select>
                              </div>
                              <div className='form-group'>
                                  <label>Birth Date</label>
                                  <input placeholder='XX.XX.XXXX' name='birthDate' className='form-control' value={personnel.birthDate} onChange={(e) => setPersonnel({...personnel, birthDate: e.target.value})}/>
                              </div>
                              <div className='form-group'>
                                  <label>Marital Status</label>
                                  <select onChange={(e) => setPersonnel({...personnel, maritalStatus: e.target.value})} value = {personnel.maritalStatus}>
                                      <option selected hidden>Select a option</option>
                                      <option value = 'evli'>Evli</option>
                                      <option value = 'bekar'>Bekar</option>
                                  </select>
                              </div>
                              <div className='form-group'>
                                  <label>TCKN</label>
                                  <input placeholder='TCKN' name='tcNo' className='form-control' value={personnel.tcNo} onChange={(e) => setPersonnel({...personnel, tcNo: e.target.value})}/>
                              </div>
                              <div className='form-group'>
                                  <label>Graduation Status</label>
                                  <select onChange = {(e) => setPersonnel({...personnel, graduationStatus: e.target.value})} value = {personnel.graduationStatus}>
                                      <option selected hidden>Select a option</option>
                                      <option value = 'UNDER_GRADUATE'>Under Graduate</option>
                                      <option value = 'ASSOCIATE_DEGREE'>Associate Degree</option>
                                      <option value = 'POST_GRADUATE'>Post Graduate</option>
                                      <option value = 'DOCTORATE'>Doctorate</option>
                                  </select>
                              </div>
                              <div className='form-group'>
                                  <label>Department</label>
                                  <select onChange = {(e) => setPersonnel({...personnel, department: e.target.value})} value = {personnel.department}>
                                      <option selected hidden>Select a option</option>
                                      <option value = 'SOFTWARE_DEVELOPMENT'>Software Development</option>
                                      <option value = 'RESEARCH_DEVELOPMENT'>Research Development</option>
                                  </select>
                              </div>
                              <div className='form-group'>
                                  <label>Job</label>
                                  <select onChange = {(e) => setPersonnel({...personnel, job: e.target.value})} value = {personnel.job}>
                                      <option selected hidden>Select a option</option>
                                      <option value = 'SOFTWARE_DEVELOPER'>Software Developer</option>
                                      <option value = 'ASSISTANT_DIRECTOR'>Assistant Director</option>
                                      <option value = 'DIRECTOR'>Director</option>
                                  </select>
                              </div>
                              <div className='form-group'>
                                  <label>is working</label>
                                  <select onChange={(e) => setPersonnel({...personnel, isWorking: e.target.value})} value = {personnel.isWorking}>
                                      <option selected hidden>Select a option</option>
                                      <option value = 'Yes'>Yes</option>
                                      <option value = 'No'>No</option>
                                  </select>
                              </div>
                              <div className='form-group'>
                                <label>Photo</label>
                                <input type='file' accept="/image/*" onChange={changeImageHandler}></input>
                            </div>
                              <Link to="/personnel" className="btn btn-success" onClick={handleUpdate} >Update</Link>
                              <Link to="/personnel" className="btn btn-danger">Cancel</Link>
                          </form>
                      </div>
                  </div>
              </div>
          </div>
        </div>
      )
    

}

export default UpdatePersonnelComponent;
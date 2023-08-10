import React, { useEffect, useState } from 'react';
import { useParams , Link} from 'react-router-dom';
import PersonnelService from '../services/PersonnelService';


const PersonnelDetailsComponent = () =>{
  
  const {id}  = useParams();
  const [personnelData, setPersonnelData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    PersonnelService.getPersonnelById(id)
    .then(res => {
      setPersonnelData(res.data);
      setLoading(false);
    })
    .catch(error => {
      console.error('Error fetching personnel details:', error);
        setLoading(false);
    });
  }, [id])

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!personnelData) {
    return <div>Personnel not found.</div>;
  }

  console.log(personnelData);

  

  return (
    <div>
      <h2 className="text-center">Personnel Info</h2>
      <Link to="/personnel" className="btn btn-primary">Go Back</Link>
      <div className = "form-group">
          <form className = "table table-striped table-bordered">
              <thead>
                  <tr>
                      <th>Id</th>
                      <th>First Name</th>
                      <th>Last Name</th>
                      <th>Gender</th>
                      <th>Birth Date</th>
                      <th>Marital Status</th>
                      <th>TC No</th>
                      <th>Graduation Status</th>
                      <th>Department</th>
                      <th>Job</th>
                      <th>Is Working</th>
                  </tr>
              </thead>
              <tbody>
                  
                          <tr key = {personnelData.id}>
                              <td>{personnelData.id}</td>
                              <td>{personnelData.firstName}</td>
                              <td>{personnelData.lastName}</td>
                              <td>{personnelData.gender}</td>
                              <td>{personnelData.birthDate}</td>
                              <td>{personnelData.maritalStatus}</td>
                              <td>{personnelData.tcNo}</td>
                              <td>{personnelData.graduationStatus}</td>
                              <td>{personnelData.department}</td>
                              <td>{personnelData.job}</td>
                              <td>{personnelData.isWorking}</td>
                          </tr>
                      
                  
              </tbody>
          </form>
          <div className='container' style={{alignItems:'center'}}>
            <h2>Photo</h2>
          <img src={personnelData.imageBase64} height = "200px" width="200px"></img>
          </div>
      </div>
    </div>
  )
};

export default PersonnelDetailsComponent;
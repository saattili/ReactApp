import femaleProfile from './images/femaleProfile.jpg';
import maleProfile from './images/maleProfile.jpg';

const Employees = ({employees,selectedTeam,handleTeamChange,handleEmployeeCards}) => {
 

  return (
    <main className='container'>
      <div className='row justify-content-center mt-3 mb-3'>
        <div className='col-12'>
          <select name="Team" className="form-select form-select-lg mb-3 mr-3" value={selectedTeam} onChange={handleTeamChange}>
            <option value="Dev">Development</option>
            <option value="Support">Support</option>
            <option value="Devops">Dev-Ops</option>
            <option value="HR">Human Resources</option>
            <option value="Admin">Administration</option>

          </select>
        </div>
      </div>
      <div className='row justify-content-center mt-3 mb-3'>
        <div className='col-12'>
          <div className="card-collection">
            {
              employees.map((employee) => (
                <div id={employee.id} className={employee.team === selectedTeam ? "standout card m-3" : "card m-3"} style={{ cursor: "pointer" }} onClick={handleEmployeeCards}>
                  {(employee.gender == "male") ? <img src={maleProfile} className="card-img-top" /> : <img src={femaleProfile} className="card-img-top" />}
                  <div className="card-body">
                    <h5 className="card-title">Full Name:{employee.fullName}</h5>
                    <p className="card-text"><b>Team Name:</b> {employee.team}</p>

                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>

    </main >

  );

}

export default Employees;
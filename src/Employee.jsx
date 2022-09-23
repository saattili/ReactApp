import { useState } from 'react';
import femaleProfile from './images/femaleProfile.jpg';
import maleProfile from './images/maleProfile.jpg';

const Employees = () => {
  const [selectedTeam, setTeam] = useState("Development")
  const [employees, setEmployee] = useState([
    {
      id: 1,
      fullName: "Madhav",
      totalExp: 7,
      team: "Dev",
      gender: "male"

    },
    {
      id: 1,
      fullName: "Rebacca",
      totalExp: 9,
      team: "QA",
      gender: "female"

    },
    {
      id: 1,
      fullName: "Edward",
      totalExp: 7,
      team: "Devops",
      gender: "male"

    },
    {
      id: 1,
      fullName: "Nicole",
      totalExp: 8.5,
      team: "Developer",
      gender: "female"

    },
    {
      id: 1,
      fullName: "Martin",
      totalExp: 1,
      team: "Admin",
      gender: "male"

    },
    {
      id: 1,
      fullName: "Daniel",
      totalExp: 2,
      team: "Human Resources",
      gender: "male"

    },
  ]);

  function handleTeamChange(event) {
    setTeam(event.target.value);
    console.log(selectedTeam);
  }
  return (
    <main className='container'>
      <div className='row justify-content-center mt-3 mb-3'>
        <div className='col-12'>
          Team : <select name="Team" className="form-select form-select-lg mb-3" value={selectedTeam} onChange={handleTeamChange}>
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
                <div id={employee.id} className="card m-2" style={{ cursor: "pointer" }}>
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
import { useState } from 'react';
import femaleProfile from './images/femaleProfile.jpg';
import maleProfile from './images/maleProfile.jpg';

const Employees = () => {
  const [selectedTeam, setTeam] = useState("Dev")
  const [employees, setEmployee] = useState([
    {
      id: 100,
      fullName: "Madhav",
      totalExp: 7,
      team: "Dev",
      gender: "male"

    },
    {
      id: 200,
      fullName: "Rebacca",
      totalExp: 9,
      team: "HR",
      gender: "female"

    },
    {
      id: 300,
      fullName: "Edward",
      totalExp: 7,
      team: "Dev",
      gender: "male"

    },
    {
      id: 400,
      fullName: "Nicole",
      totalExp: 8.5,
      team: "Dev",
      gender: "female"

    },
    {
      id: 500,
      fullName: "Martin",
      totalExp: 1,
      team: "Admin",
      gender: "male"

    },
    {
      id: 600,
      fullName: "Lara",
      totalExp: 2,
      team: "Support",
      gender: "female"

    },
    {
      id: 700,
      fullName: "Dave",
      totalExp: 6,
      team: "Devops",
      gender: "male"

    },
    {
      id: 800,
      fullName: "Jaffa",
      totalExp: 10,
      team: "HR",
      gender: "female"

    },
    {
      id: 900,
      fullName: "Daniel",
      totalExp: 2,
      team: "Devops",
      gender: "male"

    },
    {
      id: 1000,
      fullName: "Kufli",
      totalExp: 1,
      team: "Admin",
      gender: "male"

    },
    {
      id: 1100,
      fullName: "Chaata",
      totalExp: 1,
      team: "Admin",
      gender: "male"

    },
    {
      id: 1200,
      fullName: "Martin",
      totalExp: 1,
      team: "Support",
      gender: "male"

    },
  ]);

  function handleTeamChange(event) {
    setTeam(event.target.value);

  }

  function handleEmployeeCards(event) {
    const updatedEmployeeList = employees.map((employee) => employee.id === parseInt(event.currentTarget.id) ?
      (employee.team === selectedTeam) ? { ...employee, team: '' } : { ...employee, team: selectedTeam } : employee);

    setEmployee(updatedEmployeeList);


  }


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
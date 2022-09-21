import { useState } from 'react';
import femaleProfile from './images/femaleProfile.jpg';
import maleProfile from './images/maleProfile.jpg';

const Employees = () => {
  const [employees, setEmployee] = useState([
    {
      id: 1,
      fullName: "Madhav",
      totalExp: 7,
      team: "Dev"

    },
    {
      id: 1,
      fullName: "Rebacca",
      totalExp: 9,
      team: "QA"

    },
    {
      id: 1,
      fullName: "Moss",
      totalExp: 4,
      team: "Support"

    },
  ]);
  return (
    <main className='container'>
      <div className='row justify-content-center mt-0 mb-3'>
        <div className='col-12'>
          <div className="card-collection">
            {
              employees.map((employee) => (
                <div id={employee.id} className="card m-2">
                  <img src={femaleProfile} className="card-img-top"></img>
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
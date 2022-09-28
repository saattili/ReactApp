import './App.css'
import Header from './Header';
import Employees from './Employee';
//import Content from './Content';
import Footer from './Footer';
import { useState } from 'react';

export default function App() {


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

  function getSelectedTeam(employee) {
    return employee.team === selectedTeam
  }

  return (

    <div >
      <Header selectedTeam = {selectedTeam} teamMemberCount={employees.filter(getSelectedTeam).length}/>
      <Employees employees={employees} selectedTeam={selectedTeam} handleTeamChange={handleTeamChange} handleEmployeeCards={handleEmployeeCards} />
      <Footer />
    </div>

  )
}

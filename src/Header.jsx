const Header = ({selectedTeam,teamMemberCount}) => {
  return (
    <header>
      <h1 className="mt-4 p4 bg-success" >Team Allocation Deatils </h1>
      <h2>Team <i><b>{selectedTeam}</b></i> has {teamMemberCount} Members</h2>
    </header>
  )
}

export default Header
// Write your code here
import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {eachteam} = props
  const {teamImageUrl, name, id} = eachteam

  return (
    <Link to={`/team-matches/${id}`}>
      <li className="eachteam-con">
        <img src={teamImageUrl} className="teamimg" alt={name} />
        <p className="teamName">{name}</p>
      </li>
    </Link>
  )
}
export default TeamCard

// Write your code here
import './index.css'

const MatchCard = props => {
  const {eachcard} = props
  const {competingTeam, competingTeamLogo, result, matchStatus} = eachcard
  const coloris = matchStatus === 'Won' ? 'won' : 'lost'

  return (
    <li className="matchCard">
      <img
        className="matchlogo"
        alt={`competing team ${competingTeam}`}
        src={competingTeamLogo}
      />
      <p className="matchteamName">{competingTeam}</p>
      <p className="matchteamtext-content">{result}</p>
      <p className={`matchteamtext-content2 ${coloris}`}>{matchStatus}</p>
    </li>
  )
}
export default MatchCard

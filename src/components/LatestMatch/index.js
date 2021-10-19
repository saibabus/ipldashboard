// Write your code here
import './index.css'

const LatestMatch = props => {
  const {latestMatchesData} = props

  const {
    competingTeam,
    competingTeamLogo,
    date,
    venue,
    umpires,
    result,
    secondInnings,
    manOfTheMatch,
    firstInnings,
  } = latestMatchesData
  return (
    <div className="latestMatchcon">
      <div className="teamname-logo-con">
        <div className="teamDetails">
          <p className="teamName">{competingTeam}</p>
          <p className="teamtext-content">{date}</p>
          <p className="teamtext-content">{venue}</p>
          <p className="teamtext-content">{result}</p>
        </div>
        <img
          className="teamlogo"
          src={competingTeamLogo}
          alt={`latest match ${competingTeam}`}
        />
      </div>
      <hr className="hr-line" />
      <div className="teamDetails2">
        <p className="teamtext-content">First Innings</p>
        <p className="teamtext-content">{firstInnings}</p>
        <p className="teamtext-content">Second Innings</p>
        <p className="teamtext-content">{secondInnings}</p>
        <p className="teamtext-content">Man Of TheMatch</p>
        <p className="teamtext-content">{manOfTheMatch}</p>
        <p className="teamtext-content">Umpires</p>
        <p className="teamtext-content">{umpires}</p>
      </div>
    </div>
  )
}
export default LatestMatch

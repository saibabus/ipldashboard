// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import MatchCard from '../MatchCard'
import LatestMatch from '../LatestMatch'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'

class TeamMatches extends Component {
  state = {
    isloading: true,
    teamBannerImg: '',
    latestMatchesData: {},
    recentMatchesData: [],
  }

  componentDidMount() {
    this.getfetcheddata()
  }

  getfetcheddata = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    console.log(data)
    const teamBannerUrl = data.team_banner_url
    const latestMatchDetailsRaw = data.latest_match_details
    const recentMatchesRaw = data.recent_matches

    const latestMatchDetails = {
      competingTeam: latestMatchDetailsRaw.competing_team,
      competingTeamLogo: latestMatchDetailsRaw.competing_team_logo,
      date: latestMatchDetailsRaw.date,
      id: latestMatchDetailsRaw.id,
      manOfTheMatch: latestMatchDetailsRaw.man_of_the_match,
      matchStatus: latestMatchDetailsRaw.match_status,
      secondInnings: latestMatchDetailsRaw.second_innings,
      result: latestMatchDetailsRaw.result,
      umpires: latestMatchDetailsRaw.umpires,
      venue: latestMatchDetailsRaw.venue,
      firstInnings: latestMatchDetailsRaw.first_innings,
    }
    const recentMatches = recentMatchesRaw.map(eachmatch => ({
      competingTeam: eachmatch.competing_team,
      competingTeamLogo: eachmatch.competing_team_logo,
      date: eachmatch.date,
      id: eachmatch.id,
      manOfTheMatch: eachmatch.man_of_the_match,
      matchStatus: eachmatch.match_status,
      secondInnings: eachmatch.second_innings,
      result: eachmatch.result,
      umpires: eachmatch.umpires,
      venue: eachmatch.venue,
      firstInnings: eachmatch.first_innings,
    }))
    this.setState({
      isloading: false,
      latestMatchesData: latestMatchDetails,
      recentMatchesData: recentMatches,
      teamBannerImg: teamBannerUrl,
    })
  }

  render() {
    const {
      isloading,
      teamBannerImg,
      latestMatchesData,
      recentMatchesData,
    } = this.state
    return (
      <div className="teamMatch-contaniner">
        {isloading ? (
          <div testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <div>
            <img
              src={teamBannerImg}
              alt="team banner"
              className="teambannerImg"
            />
            <p className="latestmatch-text">Latest Matches</p>
            <LatestMatch latestMatchesData={latestMatchesData} />
            <ul className="matchcardCon">
              {recentMatchesData.map(eachcard => (
                <MatchCard eachcard={eachcard} key={eachcard.id} />
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}
export default TeamMatches

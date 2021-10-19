// Write your code here
import {Component} from 'react'
import {Link} from 'react-router-dom'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import TeamCard from '../TeamCard'

import './index.css'

class Home extends Component {
  state = {isloading: true, teamsData: []}

  componentDidMount() {
    this.getfetchingdata()
  }

  getfetchingdata = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const {teams} = data

    console.log(teams)
    const updateddata = teams.map(eachteam => ({
      id: eachteam.id,
      teamImageUrl: eachteam.team_image_url,
      name: eachteam.name,
    }))
    this.setState({teamsData: updateddata, isloading: false})
    console.log(updateddata)
  }

  render() {
    const {teamsData, isloading} = this.state
    return (
      <Link to="/">
        <div className="home-container">
          <div className="log-text-con">
            <img
              className="logo"
              alt="ipl logo"
              src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            />
            <h1 className="ipl-heading">IPL Dashboard</h1>
          </div>
          {isloading ? (
            <div testid="loader">
              <Loader type="Oval" color="#ffffff" height={50} width={50} />
            </div>
          ) : (
            <ul className="teamcards-container">
              {teamsData.map(eachteam => (
                <TeamCard eachteam={eachteam} key={eachteam.id} />
              ))}
            </ul>
          )}
        </div>
      </Link>
    )
  }
}
export default Home

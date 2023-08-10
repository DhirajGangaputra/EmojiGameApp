import './index.css'

const NavBar = props => {
  const {currentScore, topScore} = props

  return (
    <nav className="navbar-container">
      <div className="logo-and-content-container">
        <div className="logo-and-heading-container">
          <img
            className="logo-image"
            src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
            alt="emoji logo"
          />
          <h1 className="logo-heading">Emoji Game</h1>
        </div>
        <div className="score-container">
          <p className="score">Score: {currentScore}</p>
          <p className="score">Top Score: {topScore}</p>
        </div>
      </div>
    </nav>
  )
}
export default NavBar

import './index.css'

const WinOrLoseCard = props => {
  const {isWon, score, onClickPlayAgain} = props
  const imageUrl = isWon
    ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'

  const gameStatus = isWon ? 'YOU WIN' : 'YOU LOSE'

  const scoreLabel = isWon ? 'Best Score' : 'Score'

  return (
    <div className="win-or-lose-card-container">
      <div className="content-container">
        <h1 className="game-status">{gameStatus}</h1>
        <p className="score-label">{scoreLabel}</p>
        <p className="score-value">{score}/12</p>
        <button
          type="button"
          className="play-again-btn"
          onClick={onClickPlayAgain}
        >
          Play Again
        </button>
      </div>
      <div>
        <img src={imageUrl} className="win-or-lose-image" alt="win or lose" />
      </div>
    </div>
  )
}
export default WinOrLoseCard

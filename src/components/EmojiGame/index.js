import {Component} from 'react'

import EmojiCard from '../EmojiCard'
import NavBar from '../NavBar'
import WinOrLoseCard from '../WinOrLoseCard'

import './index.css'

class EmojiGame extends Component {
  state = {
    clickedEmojisList: [],
    isGameInProgress: true,
    topScore: 0,
  }

  onResetGame = () => {
    this.setState({clickedEmojisList: [], isGameInProgress: true})
  }

  getShuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  finishGameAndSetTopScore = currentScore => {
    const {topScore} = this.state
    let newTopScore = topScore

    if (currentScore > topScore) {
      newTopScore = currentScore
    }
    this.setState({topScore: newTopScore, isGameInProgress: false})
  }

  onClickEmoji = id => {
    const {emojisList} = this.props
    const {clickedEmojisList} = this.state

    if (clickedEmojisList.includes(id)) {
      this.finishGameAndSetTopScore(clickedEmojisList.length)
    } else {
      if (emojisList.length - 1 === clickedEmojisList.length) {
        this.finishGameAndSetTopScore(emojisList.length)
      }
      this.setState(prevState => ({
        clickedEmojisList: [...prevState.clickedEmojisList, id],
      }))
    }
  }

  render() {
    const {clickedEmojisList, isGameInProgress, topScore} = this.state
    const {emojisList} = this.props
    const shuffledEmojisList = this.getShuffledEmojisList()
    const isWon = clickedEmojisList.length === emojisList.length
    return (
      <div className="app-container">
        <NavBar
          currentScore={clickedEmojisList.length}
          isGameInProgress={isGameInProgress}
          topScore={topScore}
        />
        <div className="emoji-body-container">
          {isGameInProgress ? (
            <ul className="emoji-card-container">
              {shuffledEmojisList.map(each => (
                <EmojiCard
                  key={each.id}
                  emojiDetails={each}
                  onClickEmoji={this.onClickEmoji}
                />
              ))}
            </ul>
          ) : (
            <WinOrLoseCard
              isWon={isWon}
              onClickPlayAgain={this.onResetGame}
              score={clickedEmojisList.length}
            />
          )}
        </div>
      </div>
    )
  }
}
export default EmojiGame

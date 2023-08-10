import './index.css'

const EmojiCard = props => {
  const {emojiDetails, onClickEmoji} = props
  const {id, emojiName, emojiUrl} = emojiDetails

  const onClickEmojiCard = () => {
    onClickEmoji(id)
  }
  return (
    <li className="emoji-card">
      <button type="button" onClick={onClickEmojiCard} className="emoji-btn">
        <img src={emojiUrl} alt={emojiName} className="emoji-icon" />
      </button>
    </li>
  )
}
export default EmojiCard

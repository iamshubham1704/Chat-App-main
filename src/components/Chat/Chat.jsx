import React, { useEffect } from 'react'
import "./chat.css"
import EmojiPicker from 'emoji-picker-react'

const chat = () => {
  const [open, setOpen] = React.useState(false);
  const endRef = React.useRef(null)

  useEffect(()=>{
    endRef.current.scrollIntoView({ behavior: 'smooth' })
  })

  const handleEmoji = e => {
    setText((prev) => prev + e.emoji);
    setOpen(false)
  }

  const [text, setText] = React.useState("");

  return (
    <div className='chat'>
      <div className="top">
        <div className="user">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <span>User</span>
            <p>Lorem ipsum dolor sit </p>
          </div>
        </div>
        <div className="icons">
          <img src="./phone.png" alt="" />
          <img src="./video.png" alt="" />
          <img src="./info.png" alt="" />
        </div>
      </div>
      <div className="centre">
        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae saepe molestias suscipit quas, quisquam neque recusandae maxime corporis error atque numquam quasi natus.</p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message own">
          <div className="texts">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae saepe molestias suscipit quas, quisquam neque recusandae maxime corporis error atque numquam quasi natus.</p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae saepe molestias suscipit quas, quisquam neque recusandae maxime corporis error atque numquam quasi natus.</p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message own">
          <div className="texts">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae saepe molestias suscipit quas, quisquam neque recusandae maxime corporis error atque numquam quasi natus.</p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message own">
          <div className="texts">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae saepe molestias suscipit quas, quisquam neque recusandae maxime corporis error atque numquam quasi natus.</p>
            <span>1 min ago</span>
          </div>
        </div>
        <div ref={endRef}></div>
      </div>
      <div className="bottom">
        <div className="icons">
          <img src="./image.png" alt="" />
          <img src="./camera.png" alt="" />
          <img src="./mic.png" alt="" />
        </div>
        <input type="text"
          placeholder='Type a message...'
          value={text}
          onChange={e => setText(e.target.value)} />

        <div className="emoji">
          <img src="./emoji.png" alt="" onClick={() => setOpen(prev => !prev)} />
          <div className="picker">
            <EmojiPicker open={open} onEmojiClick={handleEmoji} />
          </div>
        </div>
        <button className='sendButton'>Send</button>
      </div>
    </div>
  )
}

export default chat;
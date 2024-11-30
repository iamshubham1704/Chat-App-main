import React from 'react'
import './detail.css'

const detail = () => {
  return (
    <div className='detail'>
      <div className="user">
        <img src="./avatar.png" alt="" />
        <h2>User</h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos quos ullam necessitatibus architecto placeat!</p>
      </div>
      <div className="info">
        <div className="option">
          <div className="title">
            <span>Chat Setttings</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Privacy & Help</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Shared Photos</span>
            <img src="./arrowDown.png" alt="" />
          </div>
          <div className="photos">
            <div className="photoItem">
              <div className="photoDetail">
                <img src="" alt="" />
                <span>photo_2024_2.png</span>
              <img  src="./download.png" alt="" className='icon' />
              </div>
            </div>
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Shared Files</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>
        <button>Block User</button>
      </div>
    </div>
  )
}

export default detail
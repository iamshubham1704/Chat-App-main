import React from 'react'
import "./userInfo.css"

const Userinfo = () => {
  return (
    <div className='userInfo'>
        <div className="user">
            <img src="./avatar.png" alt="" srcset="" />
            <h2>User</h2>
        </div>
        <div className="icons">
            <img src="./more.png" alt="" srcset="" />
            <img src="./video.png" alt="" srcset="" />
            <img src="./edit.png" alt="" srcset="" />
        </div>
    </div>
  )
}

export default Userinfo
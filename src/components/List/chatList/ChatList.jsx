import React from 'react'
import "./chatList.css"
import AddUser from './AddUser/AddUser'

const chatList = () => {
    const [addMode, setAddMode] = React.useState(false)
  return (
    <div className='chatList'>
        <div className="search">
            <div className="searchBar">
                <img src="/search.png" alt="" srcset="" />
                <input type="text" placeholder='Search' />
            </div>
            <img
            src={addMode ? "./minus.png" : "./plus.png"}
            alt=''
            className='add'
            onClick={() => setAddMode((prev) => !prev)} />
        </div>
        <div className="item">
            <img src="./avatar.png" alt="" />
            <div className="texts">
                <span>User</span>
                <p>Hello</p>
            </div>
            <img src="./avatar.png" alt="" />
            <div className="texts">
                <span>User</span>
                <p>Hello</p>
            </div>
            <img src="./avatar.png" alt="" />
            <div className="texts">
                <span>User</span>
                <p>Hello</p>
            </div>
            <img src="./avatar.png" alt="" />
            <div className="texts">
                <span>User</span>
                <p>Hello</p>
            </div>
        </div>
        {addMode && <AddUser/>}
    </div>
  )
}

export default chatList
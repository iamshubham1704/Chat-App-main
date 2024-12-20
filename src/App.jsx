import React from 'react';
import Detail from "./components/Detail/Detail";
import Chat from './components/Chat/Chat';
import List from './components/List/List';
import Login from './components/Login/Login';
import Notification from './components/Notification/Notification';

const App = () => {

  const user = false
  return (
    <div className='Container'>
      {
        user ? (
          <>
            <List />
            <Chat />
            <Detail />
          </>
        ) : (<Login />)
      }
      <Notification/>


    </div>
  )
}

export default App
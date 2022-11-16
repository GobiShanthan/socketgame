import {useEffect} from 'react'
const { io } = require("socket.io-client");


const Game = () => {
  let name='GOBI'

  useEffect(()=>{
    const socket = io()

  })

  function sendName(){
    io.emit('name', name);
  }

  return (
    <>
        <div>Game</div>
        <button onClick={sendName} >Send Name</button>
    </>

  )
}

export default Game
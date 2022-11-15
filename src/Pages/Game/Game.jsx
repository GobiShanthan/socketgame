import {useEffect} from 'react'
const { io } = require("socket.io-client");



const Game = () => {


  useEffect(()=>{
    const socket = io()
    console.log(socket)
  })


  return (
    <div>Game</div>
  )
}

export default Game
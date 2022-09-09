import React from 'react'
import { useSocketCtx } from '../context/SocketProvider'

const Socket = () => {
  const { online, connectSocket, disconnectSocket } = useSocketCtx()

  return (
    <div>
      <h1>{online ? 'CONECTADO' : 'DESCONECTADO'}</h1>

      <button onClick={connectSocket} className="p-2 bg-green-500">
        CONECTAR
      </button>
      <button onClick={disconnectSocket} className="p-2 bg-red-500">
        DESCONECTAR
      </button>
    </div>
  )
}

export default Socket

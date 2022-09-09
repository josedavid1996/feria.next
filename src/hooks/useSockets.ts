import { useCallback, useEffect, useState } from 'react'
import { io, Socket } from 'socket.io-client'

const useSocket = (serverPath: string) => {
  const [socket, setSocket] = useState<Socket | null>(null)
  const [online, setOnline] = useState(false)

  const connectSocket = useCallback(
    (sala: string) => {
      const token = localStorage.getItem('token') ?? null

      if (!token) return null

      const socketTemp = io(serverPath, {
        forceNew: true,
        autoConnect: true,
        transports: ['websocket'],
        query: { authorization: token, sala }
      })

      setSocket(socketTemp)
    },
    [serverPath]
  )

  const disconnectSocket = useCallback(() => {
    socket?.disconnect()
  }, [socket])

  useEffect(() => {
    socket?.on('connect', () => {
      setOnline(true)
    })
  }, [socket])

  useEffect(() => {
    socket?.on('disconnect', () => {
      setOnline(false)
    })
  }, [socket])

  return {
    online,
    socket,
    connectSocket,
    disconnectSocket
  }
}

export default useSocket

import { useRouter } from 'next/router'
import {
  useRef,
  ReactNode,
  useEffect,
  useContext,
  useCallback,
  createContext
} from 'react'

import enviroment from '../enviroment'
import useSocket from '../hooks/useSockets'

interface Props {
  children?: ReactNode
}
const SocketContext = createContext<{
  online: boolean
  disconnectSocket: () => void
  connectSocket: (sala: string) => void
}>({
  online: false,
  connectSocket: () => {},
  disconnectSocket: () => {}
})

const SocketProvider = (props: Props) => {
  const router = useRouter()
  const onlineRef = useRef(false)
  const { online, connectSocket, disconnectSocket } = useSocket(enviroment.url)

  const handleRouteChange = useCallback(
    (pathname: string, sala?: string) => {
      const isSala = pathname === '/salas/[slug]'

      if (!onlineRef.current && isSala) {
        connectSocket(sala!)
        onlineRef.current = true
        console.log('CONNECTED')
      }

      if (onlineRef.current && !isSala) {
        disconnectSocket()
        onlineRef.current = false
        console.log('DISCONNECTED')
      }
    },
    [connectSocket, disconnectSocket]
  )

  useEffect(() => {
    handleRouteChange(router.pathname, router.query?.slug as string)
  }, [router.pathname, router.query?.slug, handleRouteChange])

  return (
    <SocketContext.Provider value={{ online, connectSocket, disconnectSocket }}>
      {props.children}
    </SocketContext.Provider>
  )
}

export default SocketProvider

export const useSocketCtx = () => useContext(SocketContext)

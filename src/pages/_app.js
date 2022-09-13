import Head from 'next/head'
import '../../styles/index.css'
import 'swiper/css/bundle'
import { useEffect, useState } from 'react'
import { ApolloProvider } from '@apollo/client'

import client from '../apollo'
import { refreshToken } from '../api'
import SocketProvider from '../context/SocketProvider'
import { ArchivosContext } from '../context/archivos'

function MyApp({ Component, pageProps }) {
  const [archivos, setArchivos] = useState(true)
  useEffect(() => {
    refreshToken().then((res) => {
      if (!res?.refreshToken?.data && res?.refreshToken?.errors) {
        // TODO: Setter errores si es necesario
        return
      }
      console.log(res?.refreshToken?.data)
      if (res?.refreshToken?.data) {
        const { token, ...usuario } = res?.refreshToken?.data

        localStorage.setItem('token', token)
      } else {
        return null
      }

      // TODO: Guardar datos del usuario en un estado global si es necesario
    })

    // descarga de archivos
  }, [])

  // if (typeof window !== 'undefined') {
  //   caches.has('archivos').then((res) => {
  //     if (res) {
  //       return setArchivos(false)
  //     } else {
  //       caches.open('archivos').then((cache) => {
  //         cache
  //           .addAll([
  //             '/image/exterior-image.jpg',
  //             '/image/video/Exterior.mp4',
  //             '/image/video/exteriorLobby.mp4',
  //             '/image/360/lobby.webp',
  //             'image/video/Lobby_animado.mp4'
  //           ])
  //           .then(() => setArchivos(false))
  //       })
  //     }
  //   })
  //   // caches.open('archivos').then((cache) => {})
  // }
  // console.log({ archivos })
  return (
    <ArchivosContext.Provider
      value={{
        archivos,
        setArchivos
      }}
    >
      <SocketProvider>
        <ApolloProvider client={client}>
          <Component {...pageProps} />
        </ApolloProvider>
      </SocketProvider>
    </ArchivosContext.Provider>
  )
}

export default MyApp

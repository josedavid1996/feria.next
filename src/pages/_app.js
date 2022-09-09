import Head from 'next/head'
import '../../styles/index.css'
import 'swiper/css/bundle'
import { useEffect, useState } from 'react'
import { ApolloProvider } from '@apollo/client'

import client from '../apollo'
import { refreshToken } from '../api'
import SocketProvider from '../context/SocketProvider'

function MyApp({ Component, pageProps }) {
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
  }, [])

  return (
    <SocketProvider>
      <ApolloProvider client={client}>
        <Component {...pageProps} />
      </ApolloProvider>
    </SocketProvider>
  )
}

export default MyApp

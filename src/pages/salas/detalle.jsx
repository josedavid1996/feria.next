import React, { useEffect, useState } from 'react'
import { Entity, Scene } from '@belivvr/aframe-react'
import { PagineTemplate } from '../../components/PagineTemplate'
import Head from 'next/head'
import { useRouter } from 'next/router'

const isServer = () => typeof window === 'undefined'
const Detalle = (props) => {
  const { query } = useRouter()
  // console.log(props)

  const [appRendered, setAppRendered] = useState(false)
  useEffect(() => {
    if (!isServer()) {
      require('aframe')
      setAppRendered(true)
    }
  }, [])
  return (
    <>
      <Head>
        <title>Detalles</title>
      </Head>
      <div className="detalle">
        {appRendered && (
          <Scene>
            {/* <a-sky
              src="/image/360/detalle.webp"
              rotation="0 -90 0"
              position="0 0 200"
            ></a-sky> */}
            {/* <a-entity cursor="rayOrigin:mouse"></a-entity> */}
          </Scene>
        )}
      </div>
      <PagineTemplate idioma={props} messege={true}>
        <div
          id="modal"
          className=" flex absolute top-0 right-0 bottom-0 left-0  
          justify-center items-center z-20"
        >
          <div className=" w-[90%] lg:w-[70%] h-[60vh]  bg-white  overflow-y-scroll md:overflow-y-auto mt-4 sm:mt-0">
            <iframe
              className="w-full h-full"
              src={query.video}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            ></iframe>
          </div>
        </div>
      </PagineTemplate>
    </>
  )
}

export default Detalle

export async function getStaticProps({ locale }) {
  const response = await import(`../../lang/${locale}.json`)

  return {
    props: {
      ModalCalendario: response.ModalCalendario,
      ModalMapa: response.ModalMapa,
      ModalQuestion: response.ModalQuestion,
      Template: response.default.Template,
      HeaderIdiomas: response.default.HeaderIdiomas,
      Sala: response.default.Sala
    }
  }
}

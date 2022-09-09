import React, { useEffect, useState } from 'react'
import { Entity, Scene } from '@belivvr/aframe-react'
import Head from 'next/head'
import Image from 'next/image'
import { PagineTemplate } from '../../../components/PagineTemplate'
import { IconBack, IconClose, IconPatrocinador } from '../../../icons'
import { useRouter } from 'next/router'
import Link from 'next/link'
import ModalStand from '../../../components/ModalStand'

const isServer = () => typeof window === 'undefined'

const Patrocinador = (props) => {
  const [appRendered, setAppRendered] = useState(false)
  // const [isModal, setIsModal] = useState(false)
  const router = useRouter()
  // console.log(router)
  const { modalTitulo, volver, tituloPatrocinador } = props.Patrocinador
  useEffect(() => {
    if (!isServer()) {
      require('aframe')
      setAppRendered(true)
    }
  }, [])
  return (
    <>
      <Head>
        <title>Patrocinador</title>
      </Head>
      {/* <video
        // onPlay={endVideoExterior}
        // onEnded={endVideoExterior}
        id="video"
        src="/image/video/intro-video_stands.mp4"
        autoPlay
        loop
        muted
        className={`
           'block' 
           w-full absolute top-0 left-0 h-screen sm:h-full object-cover bottom-0`}
        poster="/image/intro-video-stands.jpg"
        preload="true"
      ></video> */}
      {/* <div>
        {appRendered && (
          <Scene>
            <a-sky
              src="/image/360/patrocinadores.webp"
              rotation="0 -90 0"
            ></a-sky>
          </Scene>
        )}
      </div> */}
      {/* <h1 className="text-white text-3xl">Hola</h1> */}
      <div className="standBack ">
        <PagineTemplate idioma={props} retornar="exposicion">
          <ModalStand
            volver={volver}
            modalTitulo={modalTitulo}
            tituloPatrocinador={tituloPatrocinador}
          >
            <Link href="patrocinador/cargill">
              <a className="hover:scale-105 transition-transform duration-500">
                <Image
                  id="cargill"
                  priority
                  className="cursor-pointer "
                  src="/image/patrocinador/cargill.png"
                  alt="cargil"
                  width="173px"
                  height="78px"
                />
              </a>
            </Link>

            <Link href="patrocinador/cmi">
              <a className="hover:scale-105 transition-transform duration-500">
                <Image
                  id="cmi"
                  className="cursor-pointer "
                  src="/image/patrocinador/cmi.png"
                  alt="cmi"
                  width="213px"
                  height="53px"
                />
              </a>
            </Link>
            <Link href="patrocinador/trouw">
              <a className="hover:scale-105 transition-transform duration-500">
                <Image
                  id="trouw"
                  className="cursor-pointer "
                  src="/image/patrocinador/trouw.png"
                  alt="trouw"
                  width="229px"
                  height="49px"
                />
              </a>
            </Link>
          </ModalStand>
        </PagineTemplate>
      </div>
    </>
  )
}

export default Patrocinador
export async function getStaticProps({ locale }) {
  const response = await import(`../../../lang/${locale}.json`)

  return {
    props: {
      ModalCalendario: response.ModalCalendario,
      ModalMapa: response.ModalMapa,
      ModalQuestion: response.ModalQuestion,
      Template: response.default.Template,
      HeaderIdiomas: response.default.HeaderIdiomas,
      Exposicion: response.default.Exposicion,
      Patrocinador: response.default.Patrocinador
    }
  }
}

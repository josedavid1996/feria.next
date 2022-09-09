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

const AuspiciadorB = (props) => {
  const [appRendered, setAppRendered] = useState(false)
  const { modalTitulo, volver, tituloPatrocinador } = props.AuspiciadorB
  const router = useRouter()
  useEffect(() => {
    if (!isServer()) {
      require('aframe')
      setAppRendered(true)
    }
  }, [])
  return (
    <>
      <Head>
        <title>Auspiciador B</title>
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
        poster="/image/intro-video_stands.jpg"
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

      <div className="standBack ">
        <PagineTemplate idioma={props} retornar>
          <ModalStand
            volver={volver}
            modalTitulo={modalTitulo}
            tituloPatrocinador={tituloPatrocinador}
          >
            <Link href="auspiciador-b/aviagen">
              <a className="hover:scale-105 transition-transform duration-500">
                <Image
                  className="cursor-pointer"
                  src="/image/auspiciadorB/aviagen.webp"
                  alt="avigen"
                  width="200px"
                  height="100px"
                />
              </a>
            </Link>
            <Link href="auspiciador-b/hendrix">
              <a className="hover:scale-105 transition-transform duration-500">
                <Image
                  className="cursor-pointer"
                  src="/image/auspiciadorB/hendrix.webp"
                  alt="hendrix"
                  width="200px"
                  height="80px"
                />
              </a>
            </Link>
            <Link href="auspiciador-b/hubbard">
              <a className="hover:scale-105 transition-transform duration-500">
                <Image
                  className="cursor-pointer"
                  src="/image/auspiciadorB/hubbard.webp"
                  alt="hubbard"
                  width="200px"
                  height="80px"
                />
              </a>
            </Link>
            <Link href="auspiciador-b/msd">
              <a className="hover:scale-105 transition-transform duration-500">
                <Image
                  className="cursor-pointer"
                  src="/image/auspiciadorB/msd.webp"
                  alt="msd"
                  width="200px"
                  height="80px"
                />
              </a>
            </Link>
          </ModalStand>
          {/* <div
          id="modal"
          className={`flex absolute top-0 right-0 bottom-0 left-0   justify-center items-center z-20`}
        >
          <div className=" w-[90%] lg:w-[70%] h-[60vh] md:h-auto bg-white  overflow-y-scroll md:overflow-y-auto mt-4 sm:mt-0">
            <div className="bg-secundary-100 px-[18px] py-2 flex justify-between items-center sticky top-0">
              <div className="flex items-center">
                <IconPatrocinador className="w-[17px] h-[15px] md:w-[27px] md:h-[25px] mr-1  text-black" />
                <p className="text-base tracking-widest font-open md:text-xl font-bold leading-7 text-secundary-400">
                  {modalTitulo}
                </p>
              </div>
              <div
                className="flex cursor-pointer"
                id="close"
                onClick={() => router.back()}
              >
                <p className="tracking-tracking-[0.08rem] font-open text-xs md:text-sm font-semibold text-secundary-400 mr-2">
                  {volver}
                </p>
                <IconBack className="w-[15px] h-[13px] md:w-[25px] md:h-[23px] text-black" />
              </div>
            </div>
            <div
              id="card-patrocinador"
              className=" h-[60vh] w-[100%] rounded-[10px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-items-center items-center relative"
            >
              <div className="absolute top-[1rem]">
                <p className=" text-center font-light text-[25px] leading-[30px]  text-black mb-11 text-conferencista">
                  {tituloPatrocinador}
                </p>
              </div>
              <Link href="auspiciador-b/aviagen">
                <a>
                  <Image
                    className="cursor-pointer"
                    src="/image/auspiciadorB/aviagen.webp"
                    alt="avigen"
                    width="200px"
                    height="100px"
                  />
                </a>
              </Link>
              <Link href="auspiciador-b/hendrix">
                <a>
                  <Image
                    className="cursor-pointer"
                    src="/image/auspiciadorB/hendrix.webp"
                    alt="hendrix"
                    width="200px"
                    height="80px"
                  />
                </a>
              </Link>
              <Link href="auspiciador-b/hubbard">
                <a>
                  <Image
                    className="cursor-pointer"
                    src="/image/auspiciadorB/hubbard.webp"
                    alt="hubbard"
                    width="200px"
                    height="80px"
                  />
                </a>
              </Link>
              <Link href="auspiciador-b/msd">
                <a>
                  <Image
                    className="cursor-pointer"
                    src="/image/auspiciadorB/msd.webp"
                    alt="msd"
                    width="200px"
                    height="80px"
                  />
                </a>
              </Link>
            </div>
          </div>
        </div> */}
        </PagineTemplate>
      </div>
    </>
  )
}

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
      AuspiciadorB: response.default.AuspiciadorB
    }
  }
}

export default AuspiciadorB

import React, { useEffect, useState } from 'react'
import { Entity, Scene } from '@belivvr/aframe-react'
import Head from 'next/head'
import { PagineTemplate } from '../../components/PagineTemplate'
import { IconBack, IconCalender, IconPatrocinador } from '../../icons'
import { useRouter } from 'next/router'
import Link from 'next/link'

const isServer = () => typeof window === 'undefined'

const Exposicion = (props) => {
  const [appRendered, setAppRendered] = useState(false)
  const [isModal, setIsModal] = useState(false)
  const [isBotonIntro, setIsBotonIntro] = useState(false)

  const router = useRouter()
  const {
    botonIntro,
    volver,
    modalTitulo,
    cardTitulo1,
    cardTitulo2,
    cardTitulo3,
    cardTitulo4,
    cardTitulo5,
    cardTitulo6,
    cardTitulo7
  } = props.Exposicion
  useEffect(() => {
    if (!isServer()) {
      require('aframe')
      setAppRendered(true)
    }
  }, [])
  const { query } = useRouter()

  useEffect(() => {
    if (query.modal) {
      setIsModal(true)
    }
  }, [query])
  return (
    <>
      <Head>
        <title>Exposicion</title>
      </Head>
      <video
        // onPlay={endVideoExterior}
        // onEnded={endVideoExterior}
        id="video"
        src="https://feria-ovum1.s3.amazonaws.com/intro-video_stands.mp4"
        autoPlay
        playsInline
        // loop
        onEnded={() => {
          setIsModal(true)
          setIsBotonIntro(true)
        }}
        muted
        className={`
           ${isBotonIntro ? 'hidden' : 'hidden sm:block'}
           w-full absolute top-0 left-0 h-screen sm:h-full object-cover bottom-0`}
        poster="/image/intro-video-stands.jpg"
        preload="true"
      ></video>

      <video
        // onPlay={endVideoExterior}
        // onEnded={endVideoExterior}
        id="video"
        src="https://feria-ovum1.s3.amazonaws.com/intro-video_standsMobile.mp4"
        autoPlay
        loop
        playsInline
        muted
        className={`
           ${isBotonIntro ? 'hidden' : 'block sm:hidden'}
           w-full absolute top-0 left-0 h-screen sm:h-full object-cover bottom-0`}
        poster="/image/intro-video-stands-mobile.jpg"
        preload="true"
      ></video>
      {/* <div>
        {appRendered && (
          <Scene>
            <a-sky src="/image/360/exposicion.webp" rotation="0 -90 0"></a-sky>
          </Scene>
        )}
      </div> */}
      <div className={`${isBotonIntro ? 'standBack ' : 'hidden'}`}></div>
      <PagineTemplate idioma={props}>
        <div
          id="modal"
          className={`absolute top-0 right-0 bottom-0 left-0 ${
            isModal ? 'flex' : 'hidden'
          }  justify-center items-center z-20`}
        >
          <div className=" w-[90%] lg:w-[70%] h-[60vh]  bg-white  overflow-y-scroll md:overflow-y-auto mt-4 sm:mt-0">
            <div className="bg-secundary-100 px-[18px] py-2 flex justify-between items-center sticky top-0">
              <div className="flex items-center">
                <IconCalender className="w-[17px] h-[15px] md:w-[27px] md:h-[25px] mr-1  text-black" />
                <p className="text-base tracking-widest font-open md:text-xl font-bold leading-7 text-secundary-400">
                  {modalTitulo}
                </p>
              </div>
              <div
                className="flex cursor-pointer"
                id="close"
                onClick={() => {
                  setIsModal(false)
                  setIsBotonIntro(false)
                }}
              >
                <p className="tracking-tracking-[0.08rem] font-open text-xs md:text-sm font-semibold text-secundary-400 mr-2">
                  {volver}
                </p>
                <IconBack className="w-[15px] h-[13px] md:w-[25px] md:h-[23px] text-black" />
              </div>
            </div>
            {/* <div className="flex justify-center mt-8">
              <Link href="exposicion/patrocinador">
                <div className="cursor-pointer w-[250px]  md:w-[314px] h-[112px] bg-secundary-700 flex justify-center items-center  rounded-tl-[30px] rounded-br-[30px] hover:scale-105 transition-transform duration-500">
                  <p className="text-[25px] leading-[30px] text-white font-light">
                    {cardTitulo1}
                  </p>
                </div>
              </Link>
            </div> */}
            <div className="w-full cards-exposicion gap-y-[34px] gap-x-[27px] mt-8 max-w-[1200px] mx-auto px-4 pb-4">
              <Link href="exposicion/patrocinador">
                <div className="cursor-pointer w-[250px]  md:w-[314px] h-[112px] bg-secundary-700 flex justify-center items-center  rounded-tl-[30px] rounded-br-[30px] hover:scale-105 transition-transform duration-500">
                  <p className="text-[25px] leading-[30px] text-white font-light">
                    {cardTitulo1}
                  </p>
                </div>
              </Link>
              <Link href="exposicion/auspiciador-a">
                <div className="cursor-pointer w-[250px]  md:w-[314px] h-[112px] bg-[#63CC55] flex justify-center items-center rounded-tl-[30px] rounded-br-[30px] hover:scale-105 transition-transform duration-500">
                  <p className="text-[25px] leading-[30px] font-light">
                    {cardTitulo2} <span className="font-bold">A</span>
                  </p>
                </div>
              </Link>

              <Link href="exposicion/auspiciador-b">
                <div className="cursor-pointer w-[250px]  md:w-[314px] h-[112px] bg-secundary-500 flex justify-center items-center rounded-tl-[30px] rounded-br-[30px] hover:scale-105 transition-transform duration-500">
                  <p className="text-[25px] leading-[30px] font-light">
                    {cardTitulo3} <span className="font-bold">B</span>
                  </p>
                </div>
              </Link>

              <Link href="exposicion/auspiciador-c">
                <div className="cursor-pointer w-[250px]  md:w-[314px] h-[112px] bg-secundary-200 flex justify-center items-center rounded-tl-[30px] rounded-br-[30px] hover:scale-105 transition-transform duration-500">
                  <p className="text-[25px] leading-[30px] text-white font-light">
                    {cardTitulo4} <span className="font-bold">C</span>
                  </p>
                </div>
              </Link>

              <Link href="exposicion/auspiciador-d">
                <div className="cursor-pointer w-[250px]  md:w-[314px] h-[112px] bg-primary-100 flex justify-center items-center rounded-tl-[30px] rounded-br-[30px] hover:scale-105 transition-transform duration-500">
                  <p className="text-[25px] leading-[30px] text-white font-light">
                    {cardTitulo5} <span className="font-bold">D</span>
                  </p>
                </div>
              </Link>

              {/* <Link href="exposicion/auspiciador-e">
                <div className="cursor-pointer w-[250px]  md:w-[314px] h-[112px] bg-[#F4EB60] flex justify-center items-center rounded-tl-[30px] rounded-br-[30px] hover:scale-105 transition-transform duration-500">
                  <p className="text-[25px] leading-[30px] font-light">
                    {cardTitulo6} <span className="font-bold">E</span>
                  </p>
                </div>
              </Link> */}
              <Link href="exposicion/stand-basico">
                <div className="cursor-pointer w-[250px]  md:w-[314px] h-[112px] bg-[#173D35] flex justify-center items-center  rounded-tl-[30px] rounded-br-[30px] hover:scale-105 transition-transform duration-500">
                  <p className="text-[25px] leading-[30px] text-white font-light">
                    {cardTitulo7}
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </PagineTemplate>
      <button
        id="showButton"
        onClick={() => {
          setIsModal(true)
          setIsBotonIntro(true)
        }}
        className={`${
          isBotonIntro || query.modal ? 'hidden' : 'flex'
        } btn w-[200px] h-[35px] md:w-[187px] md:h-[42px] text-white bg-primary-100 items-center justify-center text-base md:text-[20px] leading-[21.79px font-open font-semibold tracking-widest absolute bottom-[170px] sm:bottom-[134px] md:bottom-[125px] mx-auto right-0 left-0 rounded-[20px]`}
      >
        {botonIntro}
      </button>
    </>
  )
}

export default Exposicion

export async function getStaticProps({ locale }) {
  const response = await import(`../../lang/${locale}.json`)

  return {
    props: {
      Exposicion: response.default.Exposicion,
      ModalCalendario: response.default.ModalCalendario,
      ModalMapa: response.default.ModalMapa,
      ModalQuestion: response.default.ModalQuestion,
      Template: response.default.Template,
      HeaderIdiomas: response.default.HeaderIdiomas
    }
  }
}

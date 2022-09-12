import Head from 'next/head'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import Idiomas from '../components/Idiomas'
import ModalLogin from '../components/ModalLogin'
import {
  IconClose,
  IconMenu,
  IconSettings,
  IconSpeaker,
  IconUser,
  IconWhatsapp
} from '../icons'
// import styles from '../../styles/Home.module.css'

export default function Home(props) {
  const [isModal, setisModal] = useState(false)
  const [isMenu, setIsMenu] = useState(false)
  const [isVideo, setIsVideo] = useState(true)
  const [isSettings, setIsSettings] = useState(false)
  const [showLogin, setShowLogin] = useState(false)
  const [videoExterior, setVideoExterior] = useState(true)
  const [isActive, setIsActive] = useState(true)
  const [isLoader, setIsLoader] = useState(true)
  const { titulo, TextButton, TextButtonRegistrarse, subtitulo } = props.Inicio
  const { campo1, campo2, textButton, textPassword } = props.ModalInicio
  const videoRef = useRef(null)
  const exteriorLobbyRef = useRef(null)
  const changeVideo = () => {
    setIsVideo(false)
    // exteriorLobby.play()
    exteriorLobbyRef.current.play()
  }
  const endVideoLobby = () => {
    setisModal(true)
  }
  const endVideoExterior = () => {
    setVideoExterior(false)
  }

  if (typeof window !== 'undefined') {
    caches.open('images').then((cache) => {
      // cache.add('/image/exterior-image.jpg')
      cache.addAll(['/image/exterior-image.jpg', '/image/video/Exterior.mp4'])

      cache
        .match('/image/video/Exterior.mp4')
        .then((res) => res?.url)
        .then((image) => {
          videoRef.current.setAttribute('src', image)
          setIsLoader(false)
        })
    })
  }
  console.log(videoRef.current)
  return (
    <>
      <Head>
        {/* <link rel="shortcut icon" href="logo.png" type="image/x-icon" /> */}
        <title>OVUM</title>
        {/* <meta name="description" content="Generated by create next app" /> */}
      </Head>

      <video
        ref={videoRef}
        onPlay={endVideoExterior}
        // onEnded={endVideoExterior}
        id="video"
        // src="image/video/Exterior.mp4"
        autoPlay
        loop
        muted
        playsInline
        className={`${
          isVideo ? 'hidden sm:block' : 'hidden'
        } w-full absolute top-0 left-0 h-screen sm:h-full object-cover bottom-0`}
        poster="image/exterior-image.jpg"
        preload="true"
      ></video>

      <video
        onPlay={endVideoExterior}
        // onEnded={endVideoExterior}
        id="video"
        src="image/video/ExteriorLoopMobile.mp4"
        autoPlay
        loop
        muted
        playsInline
        className={`${
          isVideo ? 'block sm:hidden' : 'hidden'
        } w-full absolute top-0 left-0 h-screen sm:h-full object-cover bottom-0`}
        poster="image/exterior-image-mobile.jpg"
        preload="true"
      ></video>

      <video
        src="image/video/exteriorLobby.mp4"
        autoPlay
        ref={exteriorLobbyRef}
        preload="true"
        onEnded={endVideoLobby}
        muted
        playsInline
        poster="image/exterior-image.jpg"
        className={`${
          isVideo ? 'hidden' : 'hidden sm:block'
        } w-full absolute top-0 left-0 h-screen sm:h-full object-cover bottom-0`}
      ></video>

      <video
        src="image/video/ExteriorLobbyMobile.mp4"
        autoPlay
        ref={exteriorLobbyRef}
        preload="true"
        onEnded={endVideoLobby}
        muted
        playsInline
        poster="image/exterior-image-mobile.jpg"
        className={`${
          isVideo ? 'hidden' : 'block sm:hidden'
        } w-full absolute top-0 left-0 h-screen sm:h-full object-cover bottom-0`}
      ></video>

      <main className="relative overflow-hidden">
        <div className=" w-full relative min-h-screen">
          <header className="px-4 md:px-[52px] flex justify-between items-start  pt-8 md:items-center">
            <div></div>
            {/* Text  */}
            <div className="z-20">
              <h3 className="text-center text-white font-light text-xl md:text-[18px] leading-[21.78px] tracking-widest  z-20 ">
                {titulo}
              </h3>
              <p className="text-center font-open font-light text-sm tracking-[0.15rem] text-white">
                {subtitulo}
              </p>
            </div>

            {/* Group */}
            <div className="flex items-center gap-x-4 flex-row ml-2">
              {/* Icon sonido */}
              <IconSpeaker className="speaker text-white min-w-[25px] min-h-[20px]  z-20  md:mb-0 cursor-pointer mr-2" />
              {/* Ingresar */}
              <IconUser
                className="w-[25px] h-[27px] mr-1 cursor-pointer z-20 hover:translate-y-[-4px] transition-all duration-500 "
                onClick={() => {
                  setisModal(true)
                  setIsSettings(false)
                }}
              />
              <IconSettings
                className="text-white w-[25px] h-[25px] cursor-pointer hover:rotate-[30deg] transition-transform duration-500  z-20"
                onClick={() => {
                  setIsSettings(!isSettings)
                  setisModal(false)
                }}
              />
              {/* Idiomas */}
              <div
                className={`${
                  isSettings ? 'translate-x-[0px]' : 'translate-x-[-100%]'
                } absolute top-0 right-0 bottom-0 left-0  transition-transform duration-500`}
              >
                <Idiomas idiomas={props} setIsSettings={setIsSettings} />
              </div>
            </div>

            {/* IconMenu */}
            {/* <IconMenu
              className="text-white w-[80px] h-[45px] cursor-pointer z-30 md:hidden"
              onClick={() => setIsMenu(!isMenu)}
            /> */}
          </header>

          {/* Footer */}
          <div className="flex absolute bottom-[80px] md:bottom-[60px] mx-auto right-0 left-0 justify-center  ">
            <Link href="https://elovum.com/registro">
              <a
                target="_blank"
                className="btn w-[170px]  sm:w-[200px] h-[30px] md:w-[220px] md:h-[45px] text-white bg-primary-100 flex items-center justify-center text-base md:text-[20px] leading-[27px] font-open font-light tracking-widest border-r border-white rounded-tl-lg"
                id="showButton"
              >
                {TextButtonRegistrarse}
              </a>
            </Link>
            <button
              className="btn w-[170px]   sm:w-[200px] h-[30px] md:w-[220px] md:h-[45px] text-white bg-primary-100 flex items-center justify-center text-base md:text-[20px] leading-[27px] font-open font-light tracking-widest rounded-tr-lg"
              id="showButton"
              disabled={videoExterior}
              onClick={changeVideo}
            >
              {videoExterior ? 'Cargando...' : TextButton}
            </button>
          </div>
          {/* <p
      class="absolute left-6 md:left-[75px] bottom-7 font-open text-xs md:text-base leading-[22px] tracking-widest text-white z-20">
      SAN PEDRO
      SULA - HONDURAS</p>  */}

          <Link
            href="https://api.whatsapp.com/send?phone=3158521478&text=Entre%20a%20la%20feria"
            target="_blank"
          >
            <a>
              <IconWhatsapp className="cursor-pointer absolute z-20 bottom-[26px] left-6 md:left-[60px] w-[46px] h-[46px]  md:w-[62px] md:h-[60px] hover:translate-y-[-8px] transition-all duration-500" />
            </a>
          </Link>
        </div>
      </main>

      {/* Modal  */}
      {/* <div
        id="modal"
        className={`absolute hidden top-0 right-0 bottom-0 left-0 z-10  justify-center items-center ${
          isModal ? 'flex' : 'hidden'
        }`}
      >
        <div className="w-[350px] sm:w-[393px]  bg-white rounded-[13px] pt-[15px] pr-[22px] pb-[22px] pl-[20px] relative z-30">
          <IconClose
            className="w-6 h-6 absolute top-1 right-1 cursor-pointer"
            onClick={() => {
              setisModal(false)
            }}
          />
          <div className="relative w-[300px] h-[150px]  sm:w-[350px] sm:h-[167px] mb-[15px]">
            <Image
              src="/image/image-modal.png"
              className="w-full h-[full "
              layout="fill"
              alt="logo-modal"
            />
          </div>
          <form id="form" className=" flex flex-col items-center ">
            <div className="mb-[14.84px] flex">
              <label
                forhtml=""
                className="text-[15px] font-light leading-[21px] mr-9 font-open"
              >
                {campo1}
              </label>
              <input
                type="email"
                className="w-[231px] h-[34px] border-[0.8px] border-[#C4C4C4] rounded-[8.7px] pl-4 focus:border-[0.8px] focus:border-primary-100 outline-none"
              />
            </div>
            <div className="mb-[28.8px] flex">
              <label
                forhtml=""
                className="text-[15px] font-light leading-[21px] mr-[10px] font-open"
              >
                {campo2}
              </label>
              <input
                type="password"
                className="w-[231px] h-[34px] border-[0.8px] border-[#C4C4C4] rounded-[8.7px] pl-4 focus:border-[0.8px] focus:border-primary-100 outline-none"
              />
            </div>
            <Link href="/lobby">
              <a
                type="submit"
                className="btn bg-primary-100 w-[130px] h-[30px] flex justify-center items-center text-white font-normal leading-[21px] font-open tracking-widest text-[15px] mx-auto rounded-xl mb-[10px] cursor-pointer"
              >
                {textButton}
              </a>
            </Link>

            <Link href="/recuperar">
              <a className="text-center text-[15px] font-light leading-[21px] font-open cursor-pointer hover:text-primary-100">
                {textPassword}
              </a>
            </Link>
          </form>

          <p className="text-[#D91A15] text-center leading-[21px] text-[17px] font-light mt-5 hidden">
            Los datos que ingresaste son incorrectos, intentalo de nuevo
          </p>
        </div>
      </div> */}

      <ModalLogin
        isModal={isModal}
        setisModal={setisModal}
        campo1={campo1}
        campo2={campo2}
        textButton={textButton}
        textPassword={textPassword}
      />

      <div
        className={`${
          isLoader ? 'block' : 'hidden'
        } absolute  top-0 right-0 bottom-0 left-0 z-[9999] bg-slate-500`}
      >
        <h1 className="font-bold text-7xl text-white ">Cargando...</h1>
      </div>
    </>
  )
}
export async function getStaticProps({ locale }) {
  console.log('locale', locale)
  const response = await import(`../lang/${locale}.json`)

  return {
    props: {
      HeaderIdiomas: response.default.HeaderIdiomas,
      Inicio: response.default.Inicio,
      ModalInicio: response.default.ModalInicio
    }
  }
}

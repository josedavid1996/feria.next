import React, { useContext, useEffect, useRef, useState } from 'react'
import { Entity, Scene } from '@belivvr/aframe-react'
import {
  IconCheck,
  IconConferencistas,
  IconExposicion,
  IconOvum,
  IconProgramaBlack,
  IconQuestion,
  IconSala,
  IconSettings,
  IconSpeaker,
  IconUser,
  IconWhatsapp
} from '../../icons'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Head from 'next/head'
import ModalCalender from '../../components/ModalCalender'
import ModalQuestion from '../../components/ModalQuestion'
import ModalMaps from '../../components/ModalMaps'
import Idiomas from '../../components/Idiomas'
import Image from 'next/image'
import { ArchivosContext } from '../../context/archivos'

const isServer = () => typeof window === 'undefined'
const Lobby = (props) => {
  const [appRendered, setAppRendered] = useState(false)
  const [maps, setMaps] = useState(false)
  const [calender, setCalender] = useState(false)
  const [question, setQuestion] = useState(false)
  const salaRef = useRef(null)
  const exposicionRef = useRef(null)
  const ovumRef = useRef(null)
  const conferencistaRef = useRef(null)
  const programaRef = useRef(null)
  const mapsRef = useRef(null)
  const [isSettings, setIsSettings] = useState(false)
  const [isSesion, setIsSesion] = useState(false)
  const [sky, setSky] = useState('lobby')
  const [tamano, setTamano] = useState(1)
  const [positionSky, setPositionSky] = useState(0)
  const [positionSala, setPositionSala] = useState(7.2)
  const [positionExposicion, setPositionExposicion] = useState(6.2)
  const [positionOvum, setPositionOvum] = useState(5.6)
  const [positionConferencista, setPositionConferencista] = useState(5.9)
  const [positionPrograma, setPositionPrograma] = useState(6.4)
  const [positionMaps, setPositionMaps] = useState(1)
  const [positionQuestions, setPositionQuestions] = useState(0.5)
  const [positionCalender, setPositionCalender] = useState(0.5)
  const [showMobile, setShowMobile] = useState(false)
  const [imageLobby, setImageLobby] = useState('')
  const [isLoader, setIsLoader] = useState(true)
  const { archivos, setArchivos } = useContext(ArchivosContext)

  const lobbyRef = useRef(null)
  const lobbyVideo = useRef(null)

  // if (typeof window !== 'undefined') {
  //   caches.open('lobby').then((cache) => {
  //     // cache.add('/image/exterior-image.jpg')
  //     cache.addAll(['/image/360/lobby.webp']).then(() => {
  //       return cache.match('/image/360/lobby.webp').then((resp) => {
  //         console.log(resp)
  //         setImageLobby(resp.url)
  //         setIsLoader(false)
  //       })
  //     })
  //   })
  // }
  // console.log(imageLobby)
  const router = useRouter()
  const { textHeader1, textHeader2, ButtonHeader, toast } = props.Lobby
  // console.log(props)

  useEffect(() => {
    if (!isServer()) {
      require('aframe')
      setAppRendered(true)
    }
  }, [])
  // aframe.registerComponent('example-mesh', {
  //   init: function () {
  //     var el = this.el
  //     el.setObject3D('mesh', new THREE.Mesh())
  //     el.getObject3D('mesh') // Returns THREE.Mesh that was just created.
  //   }
  // })
  useEffect(() => {
    setMaps(false)
  }, [])
  // POSICIONES CUANDO LLEGUES A MENOS DE 360 PX
  useEffect(() => {
    if (window.screen.availWidth <= 960) {
      setSky('mobile-lobby')
      setTamano(1.5)
      setPositionSky(-200)
      setPositionSala('n')
      setPositionExposicion('n')
      setPositionOvum('n')
      setPositionConferencista('n')
      setPositionPrograma('n')
      setPositionQuestions('n')
      setPositionCalender('n')
      setPositionMaps('n')
      setShowMobile(true)
    }
  }, [])

  // if (typeof window !== 'undefined') {
  //   if (archivos === false) {
  //     caches
  //       .match('/image/360/lobby.webp')
  //       .then((res) => lobbyRef.current.setAttribute('src', res.url))
  //     caches
  //       .match('/image/video/Lobby_animado.mp4')
  //       .then((res) => lobbyVideo.current.setAttribute('src', res.url))
  //     // console.log(videoRef.current, exteriorLobbyRef.current)
  //   }
  // }
  // if (typeof window !== 'undefined') {
  //   if (archivos === false) {
  //     caches
  //       .match('/image/360/lobby.webp')
  //       .then((res) => videoRef.current.setAttribute('src', res.url))
  //     caches
  //       .match('/image/video/Lobby_animado.mp4')
  //       .then((res) => exteriorLobbyRef.current.setAttribute('src', res.url))
  //     // console.log(videoRef.current, exteriorLobbyRef.current)
  //   }
  // }
  return (
    <>
      <Head>
        <title>Lobby</title>
      </Head>
      <video
        ref={lobbyVideo}
        // onPlay={endVideoExterior}
        // onEnded={endVideoExterior}
        id="video"
        src="https://feria-ovum1.s3.amazonaws.com/Lobby_animado.mp4"
        autoPlay
        loop
        playsInline
        muted
        className={`
           'hidden xlg:block' 
           w-full absolute top-0 left-0 h-screen sm:h-full object-cover bottom-0`}
        poster="image/lobby.jpg"
        preload="true"
      ></video>

      {/* IMAGEN 390 */}
      {/* <div
        className={`${
          isLoader ? 'block' : 'hidden'
        } fixed  top-0 right-0 bottom-0 left-0 z-[9999] bg-slate-500`}
      >
        <h1 className="font-bold text-7xl text-white ">Cargando...</h1>
      </div> */}
      <div className="block xlg:hidden">
        {appRendered && (
          <Scene>
            <a-assets>
              <a-asset-item
                id="sala-obj"
                src="/image/3d/sala.obj"
              ></a-asset-item>
              <a-asset-item
                id="sala-mtl"
                src="/image/3d/sala.mtl"
              ></a-asset-item>
              <a-asset-item
                id="ovum-obj"
                src="/image/3d/ovum.obj"
              ></a-asset-item>
              <a-asset-item
                id="ovum-mtl"
                src="/image/3d/ovum.mtl"
              ></a-asset-item>

              <a-asset-item
                id="programa-obj"
                src="/image/3d/programa.obj"
              ></a-asset-item>
              <a-asset-item
                id="programa-mtl"
                src="/image/3d/programa.mtl"
              ></a-asset-item>

              <a-asset-item
                id="conferencista-obj"
                src="/image/3d/conferencista.obj"
              ></a-asset-item>
              <a-asset-item
                id="conferencista-mtl"
                src="/image/3d/conferencista.mtl"
              ></a-asset-item>

              <a-asset-item
                id="exposicion-obj"
                src="/image/3d/exposicion.obj"
              ></a-asset-item>
              <a-asset-item
                id="exposicion-mtl"
                src="/image/3d/exposicion.mtl"
              ></a-asset-item>
            </a-assets>
            {/* <a-obj-model
            src="#sala-obj"
            mtl="#sala-mtl"
            position="-21 6 -18"
            rotation="170 -20 90"
            class="indicador"
            onClick={(e) => router.push('/salas')}
            animation="property: rotation; to: 170 340 90; loop: true; dur: 10000;easing:linear"
          ></a-obj-model> */}

            {/* SALA */}
            <a-image
              src="/image/indicadores/salaImage.png"
              position={`-18 ${positionSala} -18`}
              height={tamano}
              width={tamano}
              class="indicador"
              onClick={(e) => router.push('/salas')}
            ></a-image>
            {/* ==== */}

            {/* <a-obj-model
            id="exposicion"
            ref={exposicionRef}
            src="#exposicion-obj"
            mtl="#exposicion-mtl"
            class="indicador"
            position="-9.5 5.5 -18"
            rotation="170 -50 90"
            animation="property: rotation; to: 170 310 90; loop: true; dur: 10000;easing:linear"
            onClick={(e) => router.push('/exposicion')}
          ></a-obj-model> */}

            {/* ESPOSICION */}
            <a-image
              src="/image/indicadores/exposicionImage.png"
              position={`-8.2 ${positionExposicion} -18`}
              height="1"
              width="1"
              class="indicador"
              onClick={(e) => router.push('/exposicion')}
            ></a-image>
            {/* ==== */}

            {/* <a-obj-model
            id="ovum"
            src="#ovum-obj"
            mtl="#ovum-mtl"
            position="0.2 6 -17"
            class="indicador"
            rotation="6.9 -89 -90"
            animation="property: rotation; to: 6.9 271 -90; loop: true; dur: 10000;easing:linear"
          ></a-obj-model> */}

            {/* OVUM */}
            <a-image
              src="/image/indicadores/uvomImage.png"
              position={`0.1 ${positionOvum} -17`}
              height="1"
              width="1"
              class="indicador"
              onClick={(e) => router.push('/ovum')}
            ></a-image>
            {/* ==== */}
            {/* 
          <a-obj-model
            id="conferencistas"
            ref={conferencistaRef}
            mtl="#conferencista-mtl"
            src="#conferencista-obj"
            class="indicador"
            position="8 5 -17"
            rotation="6.2 -113 -90"
            animation="property: rotation; to: 6.2 247 -90; loop: true; dur: 10000;easing:linear"
            onClick={(e) => router.push('/conferencista')}
          ></a-obj-model> */}
            {/* CONFERENCISTAS */}
            <a-image
              src="/image/indicadores/conferencistasImage.png"
              position={`8 ${positionConferencista} -17`}
              height="1"
              width="1"
              class="indicador"
              onClick={(e) => router.push('/conferencista')}
            ></a-image>
            {/* ==== */}
            {/* <a-obj-model
            id="programa"
            ref={programaRef}
            src="#programa-obj"
            mtl="#programa-mtl"
            position="15.5 5 -15"
            class="indicador"
            rotation="11.48 -46.53 -89"
            animation="property: rotation; to: 11.48 313,47 -89; loop: true; dur: 10000;easing:linear"
            onClick={(e) => router.push('/programas')}
          ></a-obj-model> */}

            {/* PROGRAMA */}
            <a-image
              src="/image/indicadores/programaImage.png"
              position={`15 ${positionPrograma} -15`}
              height={tamano}
              width={tamano}
              class="indicador"
              onClick={(e) => router.push('/programas')}
            ></a-image>
            {/* ==== */}
            <a-image
              id="calenderCon"
              src="/image/calender.png"
              height={tamano}
              width={tamano}
              position={`-1.8 ${positionCalender} -11`}
              class="indicador"
              rotation="0 0 0"
              animation="property: opacity;from: 0;  to: 1;dur: 1000"
              onClick={() => {
                setCalender(true)
                setQuestion(false)
                setMaps(false)
              }}
            ></a-image>

            <a-image
              id="questionCon"
              src="/image/question.png"
              height={tamano}
              width={tamano}
              position={`1.8 ${positionQuestions}  -11`}
              rotation="0 0 0"
              class="indicador"
              animation="property: opacity;from: 0;  to: 1;dur: 1000"
              onClick={() => {
                setQuestion(true)
                setMaps(false)
                setCalender(false)
              }}
            ></a-image>
            <a-image
              id="mapsCon"
              src="/image/maps.png"
              height={tamano}
              width={tamano}
              class="indicador"
              position={`0 ${positionMaps} -11`}
              rotation="0 0 0"
              onClick={() => {
                setQuestion(false)
                setCalender(false)
                setMaps(true)
              }}
              animation="property: opacity;from: 0;  to: 1;dur: 1000"
            ></a-image>

            <a-sky
              src="https://feria-ovum1.s3.amazonaws.com/lobby.webp"
              rotation="0 -90 0"
              position={`0 ${positionSky} -18`}
            ></a-sky>
            <a-entity
              cursor="rayOrigin:mouse"
              raycaster="objects: .indicador"
            ></a-entity>
          </Scene>
        )}
        {/* Header */}
        <header className="absolute top-[34px] px-[32px] md:px-[52px] flex flex-col-reverse sm:flex-row items-end sm:justify-between sm:items-center  flex-wrap  md:flex-nowrap w-full z-30">
          <div className="flex items-center">
            {/* Icon sonido  */}
            <IconSpeaker className="text-white w-[25px] h-[20px] mr-4 " />
            {/* Text  */}
            <h3 className="text-center text-white font-light text-[12px] md:text-[14px] md:leading-[25px] tracking-widest">
              {textHeader1}
              <br />
              <span className="font-bold">{textHeader2}</span>
            </h3>
          </div>
          {/* Usuario */}

          {/* Group */}
          <div className="flex items-center gap-x-4 flex-row ml-2">
            {/* Ingresar */}
            <IconUser
              className="w-[25px] h-[27px] mr-1 cursor-pointer z-20 hover:translate-y-[-4px] transition-all duration-500 "
              onClick={() => {
                setIsSettings(false)
                setIsSesion(!isSesion)
              }}
            />
            <IconSettings
              className="text-white w-[25px] h-[25px] cursor-pointer hover:rotate-[30deg] transition-transform duration-500  z-20"
              onClick={() => {
                setIsSettings(!isSettings)
              }}
            />
          </div>

          {/* Button Cerrar Sesion */}
          {/* <Link href="/">
            <a
              className={`${
                isSesion ? 'block' : 'hidden'
              } text-white text-base font-normal leading-[19px]  mb-2 sm:mb-0 bg-[#00000090] py-2 px-4 rounded-lg cursor-pointer  btn text-center absolute top-12 right-4 transition-display duration-700 z-30`}
            >
              {ButtonHeader}
            </a>
          </Link> */}

          {/* <div className="flex mb-2 justify-between  items-center w-full sm:w-auto sm:flex-row-reverse">
            <a
              onClick={(e) => router.push('/')}
              className=" text-white text-base font-normal leading-[19px]  mb-2 sm:mb-0 bg-[#00000090] py-2 px-4 rounded-lg cursor-pointer  btn text-center"
            >
              {ButtonHeader}
            </a>
            <IconSettings
              className="text-white w-6 h-6 cursor-pointer hover:rotate-[30deg] transition-transform duration-500 sm:hidden"
              onClick={() => setIsSettings(!isSettings)}
            />
            <div
              className={`absolute bg-primary-100 ${
                isSettings ? 'right-4' : 'right-[-100%]'
              } top-12 rounded-[8px] pl-2 transition-right duration-1000 sm:static sm:bg-transparent sm:pl-0`}
            >
              <Idiomas idiomas={props} />
            </div>
          </div> */}
        </header>
        {/* Idiomas */}
        <div
          className={`${
            isSettings ? 'translate-x-[0px]' : 'translate-x-[-100%]'
          } absolute top-0 right-0 bottom-0 left-0  transition-transform duration-500`}
        >
          <Idiomas idiomas={props} setIsSettings={setIsSettings} />
        </div>

        {/* Footer */}

        {showMobile && (
          <div className="w-full h-[90vh] flex flex-col justify-end">
            <div className="grid grid-cols-2 relative  gap-2 justify-items-center">
              <div
                className="w-[151px] h-[35px] rounded-full bg-[#173D35] flex justify-center items-center cursor-pointer"
                onClick={(e) => router.push('/salas')}
              >
                <IconSala className="w-4 h-4 " />
                <p className="font-open font-bold text-[10px] text-white inline ml-2">
                  Salas de Conferencias
                </p>
              </div>
              <div
                className="w-[151px] h-[35px] rounded-full bg-[#6CBE4C] flex justify-center items-center cursor-pointer"
                onClick={(e) => router.push('/exposicion')}
              >
                <IconExposicion className="w-4 h-4 " />
                <p className="font-open font-bold text-[10px] text-white inline ml-2">
                  Exposición comercial
                </p>
              </div>
              <div
                className="w-[151px] h-[35px] rounded-full bg-[#FFC60B] flex justify-center items-center cursor-pointer"
                onClick={(e) => router.push('/ovum')}
              >
                <IconOvum className="w-4 h-4 " />
                <p className="font-open font-bold text-[10px] text-white inline ml-2">
                  Ovum2022
                </p>
              </div>
              <div
                className="w-[151px] h-[35px] rounded-full bg-[#007598] flex justify-center items-center cursor-pointer"
                onClick={(e) => router.push('/conferencista')}
              >
                <IconConferencistas className="w-4 h-4 " />
                <p className="font-open font-bold text-[10px] text-white inline ml-2">
                  Conferencistas
                </p>
              </div>
              <div
                className="w-[151px] h-[35px] rounded-full bg-[#F3EC60] flex justify-center items-center col-span-2 cursor-pointer"
                onClick={(e) => router.push('/programas')}
              >
                <IconProgramaBlack className="w-4 h-4 text-[#173D35] cursor-pointer" />
                <p className="font-open font-bold text-[10px] text-[#173D35] inline ml-2">
                  Programa Científico
                </p>
              </div>
            </div>

            <div className="flex justify-center mt-6">
              <div className="relative  cursor-pointer z-10 mr-4">
                <Image
                  src="/image/calender.png"
                  alt="calender"
                  width="51px"
                  height="51px"
                  onClick={() => {
                    setCalender(true)
                    setQuestion(false)
                    setMaps(false)
                  }}
                />
              </div>
              <div className="relative  cursor-pointer z-10 mr-4">
                <Image
                  src="/image/maps.png"
                  alt="maps"
                  width="51px"
                  height="51px"
                  onClick={() => {
                    setCalender(false)
                    setQuestion(false)
                    setMaps(true)
                  }}
                />
              </div>
              <div className="relative  cursor-pointer z-10">
                <Image
                  src="/image/question.png"
                  alt="question"
                  width="51px"
                  height="51px"
                  onClick={() => {
                    setCalender(false)
                    setQuestion(true)
                    setMaps(false)
                  }}
                />
              </div>
            </div>
          </div>
        )}
        <Link
          href="https://api.whatsapp.com/send?phone=3158521478&text=Entre%20a%20la%20feria"
          target="_blank"
        >
          <a>
            <IconWhatsapp className="cursor-pointer absolute z-30 bottom-[26px] left-6 md:left-[60px] w-[46px] h-[56px]  md:w-[60px] md:h-[60px] hover:translate-y-[-8px] transition-all duration-500" />
          </a>
        </Link>
      </div>

      {/* SIN IMAGEN 360 */}

      <div className="hidden xlg:block relative">
        {/* Header */}
        <header className="absolute top-[34px] px-[32px] md:px-[52px] flex flex-col-reverse sm:flex-row items-start sm:justify-between sm:items-center  flex-wrap  md:flex-nowrap w-full z-30">
          <div className="flex items-center">
            {/* Icon sonido  */}
            <IconSpeaker className="text-white w-[25px] h-[20px] mr-4 " />
            {/* Text  */}
            <h3 className="text-center text-white font-light text-[12px] md:text-[14px]md:leading-[25px] tracking-widest">
              {textHeader1}
              <br />
              <span className="font-bold">{textHeader2}</span>
            </h3>
          </div>
          {/* Usuario */}

          {/* Group */}
          <div className="flex items-center gap-x-4 flex-row ml-2">
            {/* Ingresar */}
            <IconUser
              className="w-[25px] h-[27px] mr-1 cursor-pointer z-20 hover:translate-y-[-4px] transition-all duration-500 "
              onClick={() => {
                setIsSettings(false)
                setIsSesion(!isSesion)
              }}
            />
            <IconSettings
              className="text-white w-[25px] h-[25px] cursor-pointer hover:rotate-[30deg] transition-transform duration-500  z-20"
              onClick={() => {
                setIsSettings(!isSettings)
              }}
            />
          </div>

          {/* Button Cerrar Sesion */}
          <Link href="/">
            <a
              className={`${
                isSesion ? 'block' : 'hidden'
              } text-white text-base font-normal leading-[19px]  mb-2 sm:mb-0 bg-[#00000090] py-2 px-4 rounded-lg cursor-pointer  btn text-center absolute top-12 right-4 transition-display duration-700 z-20`}
            >
              {ButtonHeader}
            </a>
          </Link>

          {/* <div className="flex mb-2 justify-between  items-center w-full sm:w-auto sm:flex-row-reverse">
            <a
              onClick={(e) => router.push('/')}
              className=" text-white text-base font-normal leading-[19px]  mb-2 sm:mb-0 bg-[#00000090] py-2 px-4 rounded-lg cursor-pointer  btn text-center"
            >
              {ButtonHeader}
            </a>
            <IconSettings
              className="text-white w-6 h-6 cursor-pointer hover:rotate-[30deg] transition-transform duration-500 sm:hidden"
              onClick={() => setIsSettings(!isSettings)}
            />
            <div
              className={`absolute bg-primary-100 ${
                isSettings ? 'right-4' : 'right-[-100%]'
              } top-12 rounded-[8px] pl-2 transition-right duration-1000 sm:static sm:bg-transparent sm:pl-0`}
            >
              <Idiomas idiomas={props} />
            </div>
          </div> */}
        </header>
        {/* Idiomas */}
        <div
          className={`${
            isSettings ? 'translate-x-[0px]' : 'translate-x-[-100%]'
          } absolute top-0 right-0 bottom-0 left-0  transition-transform duration-500`}
        >
          <Idiomas idiomas={props} setIsSettings={setIsSettings} />
        </div>

        <div className="relative sala cursor-pointer z-10">
          <Image
            src="/image/indicadores/salaImage.png"
            alt="sala"
            width="37px"
            height="37px"
            onClick={(e) => router.push('/salas')}
          />
        </div>
        <div className="relative exposicion cursor-pointer z-10">
          <Image
            src="/image/indicadores/exposicionImage.png"
            alt="exposicion"
            width="37px"
            height="37px"
            onClick={(e) => router.push('/exposicion')}
          />
        </div>
        <div className="relative ovum cursor-pointer z-10">
          <Image
            src="/image/indicadores/uvomImage.png"
            alt="ovum"
            width="37px"
            height="37px"
            onClick={(e) => router.push('/ovum')}
          />
        </div>
        <div className="relative conferencista cursor-pointer z-10">
          <Image
            src="/image/indicadores/conferencistasImage.png"
            alt="conferencista"
            width="37px"
            height="37px"
            onClick={(e) => router.push('/conferencista')}
          />
        </div>
        <div className="relative programa cursor-pointer z-10">
          <Image
            src="/image/indicadores/programaImage.png"
            alt="programa"
            width="37px"
            height="37px"
            onClick={(e) => router.push('/programa')}
          />
        </div>
        <div className="relative calenderImage cursor-pointer z-10">
          <Image
            src="/image/calender.png"
            alt="calender"
            width="51px"
            height="51px"
            onClick={() => {
              setCalender(true)
              setQuestion(false)
              setMaps(false)
            }}
          />
        </div>
        <div className="relative mapsImage cursor-pointer z-10">
          <Image
            src="/image/maps.png"
            alt="maps"
            width="51px"
            height="51px"
            onClick={() => {
              setCalender(false)
              setQuestion(false)
              setMaps(true)
            }}
          />
        </div>
        <div className="relative questionImage cursor-pointer z-10">
          <Image
            src="/image/question.png"
            alt="question"
            width="51px"
            height="51px"
            onClick={() => {
              setCalender(false)
              setQuestion(true)
              setMaps(false)
            }}
          />
        </div>
        {/* Footer */}
        <div className="relative z-30 bottom-[-477px] left-[-16px] md:left-[54px] w-[46px] h-[46px]  md:w-[60px] md:h-[60px]">
          <Link
            href="https://api.whatsapp.com/send?phone=3158521478&text=Entre%20a%20la%20feria"
            target="_blank"
          >
            <a className="w-[46px] h-[46px]  md:w-[60px] md:h-[60px] absolute cursor-pointer  z-0  hover:translate-y-[-8px] transition-all duration-500">
              {/* <IconWhatsapp className="w-full h-full z-30" /> */}
              <Image
                src="/whatsApp.png"
                alt="logo"
                width="56px"
                height="56px"
              />
            </a>
          </Link>
        </div>
      </div>

      {/* Toast  */}
      <div
        id="toast"
        className="toast absolute top-[-60px]  py-4 px-10 bg-primary-100 rounded-full z-50"
      >
        <div className="relative w-full h-full">
          <span className="absolute top-[-23px] left-[-3.1rem] w-[40px] h-[40px]  bg-[#7D005E] flex justify-center items-center rounded-full">
            <IconCheck className="w-[60%] h-[60%]" />
          </span>
          <p className="text-white font-bold leading-[21px] font-open tracking-widest ">
            {toast}
          </p>
        </div>
      </div>

      {/* Modal Maps */}
      <ModalMaps maps={maps} setMaps={setMaps} dataIdioma={props.ModalMapa} />

      {/* Modal Calender */}
      <ModalCalender
        calender={calender}
        setCalender={setCalender}
        dataIdioma={props.ModalCalendario}
      />

      {/* Modal Question  */}
      <ModalQuestion
        question={question}
        setQuestion={setQuestion}
        dataIdioma={props.ModalQuestion}
      />
    </>
  )
}

export default Lobby

export async function getStaticProps({ locale }) {
  const response = await import(`../../lang/${locale}.json`)

  return {
    props: {
      Lobby: response.default.Lobby,
      ModalCalendario: response.default.ModalCalendario,
      ModalMapa: response.default.ModalMapa,
      ModalQuestion: response.default.ModalQuestion,
      HeaderIdiomas: response.default.HeaderIdiomas
    }
  }
}

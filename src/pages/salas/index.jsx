import React, { useEffect, useState } from 'react'
import { Entity, Scene } from '@belivvr/aframe-react'
import { PagineTemplate } from '../../components/PagineTemplate'
import Head from 'next/head'
import Link from 'next/link'
import { IconBack, IconCalender, IconPatrocinador } from '../../icons'
import Image from 'next/image'
import { useRouter } from 'next/router'

const isServer = () => typeof window === 'undefined'
const Salas = (props) => {
  const {
    botonIntro,
    sala1,
    sala2,
    sala3,
    sala4,
    volver,
    modalTitulo,
    videoRoatan7,
    videoRoatan8,
    videoRoatan9,
    videoCopan7,
    videoCopan8,
    videoCopan9,
    videoOmoa7,
    videoOmoa8,
    videoOmoa9,
    videoYojoa7,
    videoYojoa8,
    videoYojoa9
  } = props.Sala

  const [appRendered, setAppRendered] = useState(false)
  const [dia, setdia] = useState(new Date().getDate())
  const [mes, setMes] = useState(new Date().getMonth())
  const [hoyRoatan, setHoyRoatan] = useState(videoRoatan7)
  const [hoyCopan, setHoyCopan] = useState(videoCopan7)
  const [hoyOmoa, setHoyOmoa] = useState(videoOmoa7)
  const [hoyYojoa, setHoyYojoa] = useState(videoYojoa7)
  const [isModal, setIsModal] = useState(false)
  const [buttonIntro, setButtonIntro] = useState(false)

  // useEffect(() => {
  //   if (mes <= 8 && dia <= 7) {
  //     setHoyRoatan(videoRoatan7)
  //     setHoyCopan(videoCopan7)
  //     setHoyOmoa(videoOmoa7)
  //     setHoyYojoa(videoYojoa7)
  //   }
  //   if (mes === 8 && dia === 8) {
  //     setHoyRoatan(videoRoatan8)
  //     setHoyCopan(videoCopan8)
  //     setHoyOmoa(videoOmoa8)
  //     setHoyYojoa(videoYojoa8)
  //   }
  //   if (mes === 8 && dia === 9) {
  //     setHoyRoatan(videoRoatan9)
  //     setHoyCopan(videoCopan9)
  //     setHoyOmoa(videoOmoa9)
  //     setHoyYojoa(videoYojoa9)
  //   }
  // }, [videoRoatan7, videoRoatan8, videoRoatan9, dia])

  useEffect(() => {
    if (!isServer()) {
      require('aframe')
      setAppRendered(true)
    }
  }, [])
  const { query } = useRouter()
  // console.log(query)

  useEffect(() => {
    if (query.modal) {
      setIsModal(true)
    }
  }, [query])

  return (
    <>
      <Head>
        <title>Salas</title>
      </Head>
      <div>
        <video
          id="video"
          // src={`/image/video/${
          //   buttonIntro ? 'PasilloLoop' : 'PasilloConferencia'
          // }.mp4`}
          src={`https://next-feria.s3.amazonaws.com/${
            buttonIntro ? 'Pasilloloop' : 'PasilloConferencia'
          }.mp4`}
          autoPlay
          playsInline
          muted
          onEnded={() => {
            setIsModal(true)
            setButtonIntro(true)
          }}
          className={`hidden sm:block
           w-full absolute top-0 left-0 h-screen sm:h-full object-cover bottom-0`}
          poster="/image/PasilloLoop.jpg"
          preload="true"
        ></video>
        <video
          id="video"
          // src={`/image/video/${
          //   buttonIntro ? 'PasilloLoopMobile' : 'PasilloConferenciaMobile'
          // }.mp4`}
          src={`https://next-feria.s3.amazonaws.com/${
            buttonIntro ? 'PasilloLoopMobile' : 'PasilloConferenciaMobile'
          }.mp4`}
          autoPlay
          loop
          muted
          playsInline
          className={`block sm:hidden
           w-full absolute top-0 left-0 h-screen sm:h-full object-cover bottom-0`}
          poster="/image/PasilloLoopMobile.jpg"
          preload="true"
        ></video>
        {/* <div>
          {appRendered && (
            <Scene>
              <a-sky src="/image/360/sala.webp" rotation="0 -90 0"></a-sky>
            </Scene>
          )}
        </div> */}
        <PagineTemplate idioma={props}>
          <div
            id="modal"
            className={` absolute top-0 right-0 bottom-0 left-0 ${
              isModal ? 'flex' : 'hidden'
            }  justify-center items-center z-20`}
          >
            {/* <iframe
              title="OVUM2022"
              className="w-[90%] md:w-[70%] h-[608px] mt-4 sm:mt-0"
              src="https://crn.interpret.world/loginlink?token=https://crn.interpret.world/loginlink?token=CONGRESSCOLOMBIADEMO"
              height="280"
              allow="camera *; microphone *"
            ></iframe> */}
            <div className=" w-[90%] lg:w-[70%] h-[60vh] md:h-auto bg-white  overflow-y-scroll md:overflow-y-auto mt-4 sm:mt-0">
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
                    setButtonIntro(false)
                  }}
                >
                  <p className="tracking-tracking-[0.08rem] font-open text-xs md:text-sm font-semibold text-secundary-400 mr-2">
                    {volver}
                  </p>
                  <IconBack className="w-[15px] h-[13px] md:w-[25px] md:h-[23px] text-black" />
                </div>
              </div>

              <div className="w-full grid grid-cols-1 sm:grid-cols-2 justify-items-center items-center gap-y-[34px] gap-x-[27px] mt-8 max-w-[1200px] mx-auto px-4 pb-4 md:pb-8">
                <Link
                  href={{
                    pathname: 'salas/roatan'
                  }}
                >
                  <div className="cursor-pointer w-[250px]  md:w-[314px] h-[112px] bg-secundary-700 flex justify-center items-center rounded-tl-[30px] rounded-br-[30px] justify-self-end hover:scale-105 transition-transform duration-500">
                    <p className="font-ligh text-[25px] text-white leading-[30px] flex items-center gap-2">
                      {sala1} <span className="font-bold">Roatán</span>
                      <Image
                        src="/image/sala-imagenes/hoja.png"
                        alt="roatan"
                        width="38px"
                        height="41px"
                      />
                    </p>
                  </div>
                </Link>

                <Link
                  href={{
                    pathname: 'salas/copan'
                  }}
                >
                  <div className="cursor-pointer w-[250px]  md:w-[314px] h-[112px] bg-secundary-600 flex justify-center items-center rounded-tl-[30px] rounded-br-[30px] justify-self-start hover:scale-105 transition-transform duration-500">
                    <p className="font-ligh text-[25px]  leading-[30px] flex items-center gap-2 text-[#173D35]">
                      {sala2} <span className="font-bold">Copan </span>
                      <Image
                        src="/image/sala-imagenes/olas.png"
                        alt="roatan"
                        width="44px"
                        height="39px"
                      />
                    </p>
                  </div>
                </Link>

                <Link
                  href={{
                    pathname: 'salas/omoa'
                  }}
                >
                  <div className="cursor-pointer w-[250px]  md:w-[314px] h-[112px] bg-secundary-500 flex justify-center items-center rounded-tl-[30px] rounded-br-[30px] justify-self-end hover:scale-105 transition-transform duration-500">
                    <p className="font-ligh text-[25px]  leading-[30px] flex items-center gap-2 text-[#173D35]">
                      {sala3} <span className="font-bold">Omoa</span>
                      <Image
                        src="/image/sala-imagenes/olas.png"
                        alt="roatan"
                        width="44px"
                        height="39px"
                      />
                    </p>
                  </div>
                </Link>
                <Link
                  href={{
                    pathname: 'salas/yohoa'
                  }}
                >
                  <div className="cursor-pointer w-[250px]  md:w-[314px] h-[112px] bg-secundary-200 flex justify-center items-center rounded-tl-[30px] rounded-br-[30px] justify-self-start hover:scale-105 transition-transform duration-500">
                    <p className="font-ligh text-[25px] text-white leading-[30px] flex items-center gap-2">
                      {sala4} <span className="font-bold">Yohoa</span>
                      <Image
                        src="/image/sala-imagenes/hoja.png"
                        alt="roatan"
                        width="38px"
                        height="41px"
                      />
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
            setButtonIntro(true)
          }}
          className={`${
            buttonIntro || query.modal ? 'hidden' : 'block'
          } btn w-[200px] h-[35px] md:w-[187px] md:h-[42px] text-white bg-primary-100 flex items-center justify-center text-base md:text-[20px] leading-[21.79px font-open font-semibold tracking-widest absolute bottom-[170px] sm:bottom-[134px] md:bottom-[125px] mx-auto right-0 left-0 rounded-[20px]`}
        >
          {botonIntro}
        </button>
      </div>
    </>
  )
}

export default Salas
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

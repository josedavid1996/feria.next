import React, { useEffect, useState } from 'react'
import { Entity, Scene } from '@belivvr/aframe-react'
import { PagineTemplate } from '../../components/PagineTemplate'
import { IconBack, IconCalender, IconPrograma } from '../../icons'
import Head from 'next/head'
import Router, { useRouter } from 'next/router'
import Image from 'next/image'
import ModalTemplate from '../../components/ModalTemplate'

const isServer = () => typeof window === 'undefined'

const ImgProgramaGeneral = () => {
  const { locale } = useRouter()
  // switch (locale) {
  //   case 'es-pe':
  //     return (
  //       <div className="w-full h-full p-4">
  //         <embed
  //           src="/image/programa-general/desktop-es.pdf"
  //           type="application/pdf"
  //           width="100%"
  //           height="100%"
  //         />
  //       </div>
  //     )
  //   case 'en-US':
  //     return (
  //       <div className="w-full">
  //         <Image
  //           src="/image/programa-general/desktop-us.jpg"
  //           alt="desktop-us"
  //           layout="fill"
  //           objectFit="contain"
  //         />
  //       </div>
  //     )
  //   case 'pt-br':
  //     return (
  //       <div className="w-full">
  //         <Image
  //           src="/image/programa-general/desktop-br.jpg"
  //           alt="desktop-br"
  //           layout="fill"
  //           objectFit="contain"
  //         />
  //       </div>
  //     )

  //   default:
  //     return (
  //       <div className="w-full">
  //         <Image
  //           src="/image/programa-general/desktop-es.jpg"
  //           alt="desktop-es"
  //           layout="fill"
  //           objectFit="contain"
  //         />
  //       </div>
  //     )
  // }
}

const Programas = (props) => {
  const [appRendered, setAppRendered] = useState(false)
  const { botonIntro, volver, modalTitulo } = props.Programa
  const [isModal, setIsModal] = useState(false)
  const [pdfIdioma, setPdfIdioma] = useState('espanol')
  const [dia, setdia] = useState(new Date().getDate())
  const [mes, setMes] = useState(new Date().getMonth())
  const { locale } = useRouter()
  useEffect(() => {
    switch (locale) {
      case 'es-pe':
        setPdfIdioma('espanol')
        return
      case 'en-US':
        setPdfIdioma('ingles')
        return
      case 'pt-br':
        setPdfIdioma('portugues')
        return
    }
  }, [pdfIdioma, locale])

  useEffect(() => {
    if (!isServer()) {
      require('aframe')
      setAppRendered(true)
    }
  }, [])
  const back = () => Router.back()
  return (
    <>
      <Head>
        <title>Programas</title>
      </Head>
      <div className="lobby">
        {appRendered && (
          <Scene>
            {/* <a-sky
              src="/image/360/sala1.webp"
              rotation="0 -90 0"
              position="0 0 250"
            ></a-sky> */}
            {/* <a-entity cursor="rayOrigin:mouse"></a-entity> */}
          </Scene>
        )}
      </div>
      <PagineTemplate idioma={props}>
        <ModalTemplate
          volver={volver}
          modalTitulo={modalTitulo}
          icon={
            <IconCalender className="w-[17px] h-[15px] md:w-[27px] md:h-[25px] mr-2 md:mr-[13px]  text-white" />
          }
          isModal={true}
          cerrar={back}
          color={'bg-primary-100'}
          colorText="text-white"
        >
          <div className="w-[80%] h-[90%] p-4 mx-auto">
            <embed
              src={`/image/programaCientifico/${pdfIdioma}/programa-${
                dia <= 7 ? '7' : dia > 9 ? '9' : dia
              }.pdf`}
              type="application/pdf"
              width="100%"
              height="100%"
            />
          </div>
        </ModalTemplate>
        {/* <div
          id="modal"
          className={`absolute top-0 right-0 bottom-0 left-0 z-10  ${
            isModal ? 'flex' : 'hidden'
          } justify-center items-center z-20`}
        >
          <div className="w-[90%] md:w-[70%] h-[608px] bg-white overflow-hidden mt-4 sm:mt-0">
            <div className="bg-secundary-100 px-[18px] py-2 flex justify-between items-center">
              <div className="flex items-center">
                <IconCalender className="w-[17px] h-[15px] md:w-[27px] md:h-[25px] mr-1 md:mr-[28px] text-black" />
                <p className="text-base tracking-widest font-open md:text-xl font-bold leading-7 text-secundary-400">
                  {modalTitulo}
                </p>
              </div>
              <div
                className="flex cursor-pointer"
                id="close"
                onClick={() => setIsModal(false)}
              >
                <p className="tracking-tracking-[0.08rem] font-open text-xs md:text-sm font-semibold text-secundary-400 mr-2">
                  {volver}
                </p>
                <IconBack className="w-[15px] h-[13px] md:w-[25px] md:h-[23px] text-black" />
              </div>
            </div>
            <div className="flex justify-center items-center  w-full h-[558px] relative">
              <ImgProgramaGeneral />
            </div>
          </div>
        </div> */}
      </PagineTemplate>
      {/* <button
        id="showButton"
        onClick={() => setIsModal(true)}
        className={`${
          isModal ? 'hidden' : 'flex'
        } btn w-[200px] h-[35px] md:w-[187px] md:h-[42px] text-white bg-primary-100  items-center justify-center text-base md:text-[20px] leading-[21.79px font-open font-semibold tracking-widest absolute bottom-[170px] sm:bottom-[134px] md:bottom-[125px] mx-auto right-0 left-0`}
      >
        {botonIntro}
      </button> */}
    </>
  )
}

export default Programas
export async function getStaticProps({ locale }) {
  const response = await import(`../../lang/${locale}.json`)

  return {
    props: {
      Programa: response.default.Programa,
      ModalCalendario: response.default.ModalCalendario,
      ModalMapa: response.default.ModalMapa,
      ModalQuestion: response.default.ModalQuestion,
      Template: response.default.Template,
      HeaderIdiomas: response.default.HeaderIdiomas
    }
  }
}

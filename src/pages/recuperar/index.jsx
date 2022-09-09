import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import {
  IconArrowPas,
  IconSecurity,
  IconSettings,
  IconSpeaker
} from '../../icons'
import Idiomas from '../../components/Idiomas'
import { PagineTemplate } from '../../components/PagineTemplate'

const Recuperar = (props) => {
  const { textHeader, parrafo1, campo1, textButton, textFooter } =
    props.RecuperarContraseña

  return (
    <>
      <Head>
        <title>Recuperar contraseña</title>
      </Head>
      <PagineTemplate idioma={props}>
        <video
          src="image/video/Exteriorlobby.mp4"
          autoPlay
          loop
          muted
          className="hidden w-full absolute top-0 left-0 h-full object-cover md:block "
        ></video>
        <video
          src="image/video/exteriosLobby-mobile.mp4"
          autoPlay
          loop
          muted
          className="w-full absolute top-0 left-0 h-full object-cover md:hidden"
        ></video>
        <div
          id="modal"
          className=" absolute top-0 right-0 bottom-0 left-0 z-10  justify-center items-center flex"
        >
          <div className="w-[350px] sm:w-[400px]  bg-white rounded-[13px] pt-[15px] pr-[22px] pb-[22px] pl-[20px] relative flex flex-col items-center">
            <span className="mb-[15px] w-[60px] h-[60px] rounded-full bg-[#E5B8DA] flex justify-center items-center">
              <IconSecurity className="w-[60%] h-[60%]" />
            </span>
            <h3 className="mb-[15px] text-3xl font-semibold  text-center">
              {textHeader}
            </h3>
            <p className="text-center text-[15px] font-light leading-[21px] mr-9 font-open mb-[15px]">
              {parrafo1}
            </p>
            <form id="form" className=" flex flex-col items-center ">
              <div className="mb-[14.84px] flex">
                <label
                  forhtml="email"
                  className="text-[15px] font-light leading-[21px] mr-9 font-open"
                >
                  {campo1}
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-[231px] h-[34px] border-[0.8px] border-[#C4C4C4] rounded-[8.7px] pl-4 focus:border-[0.8px] focus:border-primary-100 outline-none"
                />
              </div>

              <button
                type="submit"
                className="btn bg-primary-100 f text-white font-normal leading-[21px] font-open tracking-widest text-[15px] mx-auto rounded-xl mb-[10px] cursor-pointer py-2 px-4"
              >
                {textButton}
              </button>
            </form>
            <Link href="/">
              <a className="text-center text-[15px] font-light leading-[21px] mr-9 font-open mb-[15px] hover:text-primary-100 flex items-center cursor-pointer">
                <IconArrowPas className="h-4 w-4 mr-4" />
                {textFooter}
              </a>
            </Link>
          </div>
        </div>
      </PagineTemplate>
    </>
  )
}

export default Recuperar
export async function getStaticProps({ locale }) {
  const response = await import(`../../lang/${locale}.json`)

  return {
    props: {
      RecuperarContraseña: response.default.RecuperarContraseña,
      ModalCalendario: response.default.ModalCalendario,
      ModalMapa: response.default.ModalMapa,
      ModalQuestion: response.default.ModalQuestion,
      Template: response.default.Template,
      HeaderIdiomas: response.default.HeaderIdiomas
    }
  }
}

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import {
  IconBack,
  IconCalender,
  IconMaps,
  IconQuestion,
  IconSettings,
  IconSpeaker,
  IconUser,
  IconWhatsapp
} from '../icons'
import ModalMaps from './ModalMaps'
import ModalCalender from './ModalCalender'
import ModalQuestion from './ModalQuestion'
import Idiomas from './Idiomas'
import IconMessege from '../icons/IconMessege'

export const PagineTemplate = ({
  children,
  idioma,
  messege,
  data,
  retornar
}) => {
  const [question, setQuestion] = useState(false)
  const [maps, setMaps] = useState(false)
  const [calender, setCalender] = useState(false)
  const [isSettings, setIsSettings] = useState(false)
  const [isSesion, setIsSesion] = useState(false)
  const router = useRouter()

  const { textHeader1, textHeader2, ButtonHeader } = idioma.Template
  return (
    <>
      <div className="absolute hidden lg:block  top-0 right-0 z-20">
        <Image
          src="/image/soporte.png"
          alt="soporte"
          width="300px"
          height="175px"
        />
      </div>
      {children}

      {/* Header  */}
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
        <div className="flex items-center gap-x-4 flex-row ml-2 lg:translate-x-[-192px]">
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
            } text-white text-base font-normal leading-[19px]  mb-2 sm:mb-0 bg-[#00000090] py-2 px-4 rounded-lg cursor-pointer  btn text-center absolute top-12 right-4 transition-display duration-700 z-20 lg:right-[13rem]`}
          >
            {ButtonHeader}
          </a>
        </Link> */}
        {/* <div className="flex mb-2 justify-between  lg:translate-x-[-192px] items-center w-full sm:w-auto sm:flex-row-reverse">
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
            <Idiomas idiomas={idioma} data={data} />
          </div>
        </div> */}
      </header>

      {/* Idiomas */}
      <div
        className={`${
          isSettings ? 'translate-x-[0px] z-40' : 'translate-x-[-100%]'
        } absolute top-0 right-0 bottom-0 left-0  transition-transform duration-500`}
      >
        <Idiomas idiomas={idioma} setIsSettings={setIsSettings} data={data} />
      </div>
      {/* Footer */}

      <div className="absolute z-30 bottom-[26px] left-6 md:left-[60px] flex flex-row-reverse gap-[18px]  items-center sm:items-center ">
        {messege && (
          <span
            id="question"
            className="cursor-pointer w-[40px] h-[40px] md:w-[50px] md:h-[50px] bg-[#FFC60B] flex justify-center  items-center rounded-full hover:translate-y-[-8px] transition-all duration-500"
          >
            <IconMessege className="w-[60%] h-[60%]" />
          </span>
        )}
        <span
          id="question"
          onClick={() => {
            setQuestion(true)
            setMaps(false)
            setCalender(false)
          }}
          className="cursor-pointer w-[40px] h-[40px] md:w-[50px] md:h-[50px] bg-primary-100 flex justify-center  items-center rounded-full hover:translate-y-[-8px] transition-all duration-500"
        >
          <IconQuestion className="w-[60%] h-[60%]" />
        </span>
        <span
          id="maps"
          onClick={() => {
            setMaps(true)
            setQuestion(false)
            setCalender(false)
          }}
          className="cursor-pointer w-[40px] h-[40px] md:w-[50px] md:h-[50px] bg-primary-100 flex justify-center  items-center rounded-full hover:translate-y-[-8px] transition-all duration-500"
        >
          <IconMaps className="w-[60%] h-[60%]" />
        </span>
        <span
          id="calender"
          onClick={() => {
            setCalender(true)
            setQuestion(false)
            setMaps(false)
          }}
          className="cursor-pointer w-[40px] h-[40px] md:w-[50px] md:h-[50px] bg-primary-100 flex justify-center  items-center rounded-full hover:translate-y-[-8px] transition-all duration-500"
        >
          <IconCalender className="w-[60%] h-[60%] text-white" />
        </span>
        <span
          onClick={() => {
            if (retornar) {
              router.push({
                pathname: './',
                query: { modal: 'modal' }
              })
            } else if (router.query.modal === 'modal') {
              router.push('/lobby')
            } else {
              router.back()
            }

            // if (router.query) {
            //   router.back()
            // }
          }}
          id="back"
          className="cursor-pointer w-[40px] h-[40px] md:w-[50px] md:h-[50px] bg-primary-100 flex justify-center  items-center rounded-full hover:translate-y-[-8px] transition-all duration-500 text-white"
        >
          <IconBack className="w-[60%] h-[60%]" />
        </span>
        {/* <a
          href="https://api.whatsapp.com/send?phone=3158521478&text=Entre%20a%20la%20feria"
          target="_blank"
          className="hover:translate-y-[-8px] transition-all duration-500"
        >
          <img
            src="image/whatsApp.svg"
            alt="whatsApp"
            className="cursor-pointer w-[56px] h-[56px]  md:w-[96px] md:h-[96px]"
          />
        </a> */}
        <Link
          href="https://api.whatsapp.com/send?phone=3158521478&text=Entre%20a%20la%20feria"
          target="_blank"
        >
          <a>
            <IconWhatsapp className="cursor-pointer w-[46px] h-[46px]  md:w-[60px] md:h-[62px] hover:translate-y-[-8px] transition-all duration-500" />
          </a>
        </Link>
      </div>

      {/* Modal Maps */}
      <ModalMaps maps={maps} setMaps={setMaps} dataIdioma={idioma.ModalMapa} />

      {/* Modal Calender */}
      <ModalCalender
        calender={calender}
        setCalender={setCalender}
        dataIdioma={idioma.ModalCalendario}
      />

      {/* Modal Question  */}
      <ModalQuestion
        question={question}
        setQuestion={setQuestion}
        dataIdioma={idioma.ModalQuestion}
      />
    </>
  )
}

// export async function getStaticProps({ locale }) {
//   const response = await import(`../lang/${locale}.json`)

//   return {
//     props: {
//       ModalCalendario: response.default.ModalCalendario,
//       ModalMapa: response.default.ModalMapa,
//       ModalQuestion: response.default.ModalQuestion
//     }
//   }
// }

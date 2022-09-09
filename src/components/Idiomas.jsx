import React, { useEffect } from 'react'
// import i18next from 'i18next'
import { useRouter } from 'next/router'
import { IconClose } from '../icons'
import Image from 'next/image'
import Link from 'next/link'
const Idiomas = ({ idiomas, data, setIsSettings }) => {
  const router = useRouter()

  // console.log('router', router)
  const cambiarIdioma = (idioma) => {
    // i18next.changeLanguage(idioma)
    if (data?.slug) {
      console.log({ data })

      router.push(
        `${data.patrocinador}/${data.slug}`,
        `${data.patrocinador}/${data.slug}`,
        {
          locale: idioma,
          query: { titulo: data.titulo }
        }
      )
    } else {
      router.push(router.pathname, router.pathname, {
        locale: idioma
      })
    }
  }
  // console.log(data)

  return (
    // <div className="flex items-center">
    //   <ul className="relative inline-flex p-2 text-sm font-normal z-70 gap-x-1">
    //     <li
    //       className="transition-all duration-300 transform cursor-pointer hover:-translate-y-1 text-white"
    //       onClick={() => cambiarIdioma('es-pe')}
    //     >
    //       {idiomas.HeaderIdiomas.value1}
    //     </li>
    //     <li className="text-white">-</li>
    //     <li
    //       className="transition-all duration-300 transform cursor-pointer hover:-translate-y-1 text-white"
    //       onClick={() => cambiarIdioma('en-US')}
    //     >
    //       {idiomas.HeaderIdiomas.value2}
    //     </li>
    //     <li className="text-white">-</li>
    //     <li
    //       className="transition-all duration-300 transform cursor-pointer hover:-translate-y-1 text-white"
    //       onClick={() => cambiarIdioma('pt-br')}
    //     >
    //       {idiomas.HeaderIdiomas.value3}
    //     </li>
    //   </ul>
    // </div>
    <>
      {/* Modal  */}
      <div
        id="modal"
        className="bg-[#0005] flex absolute top-0 right-0 bottom-0 left-0 justify-center items-center "
      >
        <div className="w-[350px] sm:w-[393px]  bg-[#0005] rounded-[13px] pt-[15px] pr-[22px] pb-[22px] pl-[20px] relative z-30 flex items-center flex-col border-4 border-white ">
          <IconClose
            className="w-6 h-6 absolute top-1 right-1 cursor-pointer text-white"
            onClick={() => {
              // setisModal(false)
              setIsSettings(false)
            }}
          />
          {/* ESPAÑOL */}
          <div className="flex flex-col items-center mt-4">
            <Image
              src="/image/banderas/espana.png"
              width="150px"
              height="100"
              alt="españa"
            />
            <li
              className="font-semibold text-[18px] cursor-pointer text-white hover:-translate-y-1 transition-transform duration-1000 list-none"
              onClick={() => cambiarIdioma('es-pe')}
            >
              {idiomas.HeaderIdiomas.value1}
            </li>
          </div>
          {/* INGLES */}
          <div className="flex flex-col items-center mt-4">
            <Image
              src="/image/banderas/estados-unidos.png"
              width="150px"
              height="120"
              alt="ingles"
            />
            <li
              className="font-semibold text-[18px] cursor-pointer text-white hover:-translate-y-1 transition-transform duration-1000 list-none"
              onClick={() => cambiarIdioma('en-US')}
            >
              {idiomas.HeaderIdiomas.value2}
            </li>
          </div>
          <div className="flex flex-col items-center mt-4">
            <Image
              src="/image/banderas/brasil.png"
              width="150px"
              height="120"
              alt="ingles"
            />
            <li
              className="font-semibold text-[18px] cursor-pointer text-white hover:-translate-y-1 transition-transform duration-1000 list-none"
              onClick={() => cambiarIdioma('pt-br')}
            >
              {idiomas.HeaderIdiomas.value3}
            </li>
          </div>
        </div>
      </div>
    </>
  )
}

export default Idiomas

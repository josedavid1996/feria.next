import Image from 'next/image'
import { useRouter } from 'next/router'
import React from 'react'
import { IconBack, IconCalender } from '../icons'
import ModalTemplate from './ModalTemplate'

const ImgProgramaGeneral = () => {
  const { locale } = useRouter()
  switch (locale) {
    case 'es-pe':
      return (
        <div className="w-full">
          <Image
            src="/image/programa-general/Programa-General-espanol.jpg"
            alt="desktop-sp"
            layout="fill"
            objectFit="contain"
          />
        </div>
      )
    case 'en-US':
      return (
        <div className="w-full">
          <Image
            src="/image/programa-general/Programa-General-ingles.jpg"
            alt="desktop-us"
            layout="fill"
            objectFit="contain"
          />
        </div>
      )
    case 'pt-br':
      return (
        <div className="w-full">
          <Image
            src="/image/programa-general/Programa-General-portugues.jpg"
            alt="desktop-br"
            layout="fill"
            objectFit="contain"
          />
        </div>
      )

    default:
      return (
        <div className="w-full">
          <Image
            src="/image/programa-general/desktop-es.jpg"
            alt="desktop-es"
            layout="fill"
            objectFit="contain"
          />
        </div>
      )
  }
}
const ModalCalender = ({ calender, setCalender, dataIdioma }) => {
  const {
    titulo,
    volver,
    tituloParrafo1,
    parrafo1,
    tituloParrafo2,
    parrafo2,
    tituloParrafo3,
    parrafo3
  } = dataIdioma

  const back = () => setCalender(false)
  return (
    <ModalTemplate
      volver={volver}
      modalTitulo={titulo}
      icon={
        <IconCalender className="w-[17px] h-[15px] md:w-[27px] md:h-[25px] mr-2 md:mr-[13px]  text-white" />
      }
      isModal={calender}
      cerrar={back}
      color={'bg-primary-100'}
      colorText="text-white"
      fondo="lobby"
    >
      <div className="pt-7 sm:pt-[50px] px-5 sm:px-[74px] pb-7 sm:pb-[58] mb-4 relative h-full">
        <ImgProgramaGeneral />
      </div>
    </ModalTemplate>
    // <div
    //   id="modal-calender"
    //   className={`bg-opacity absolute top-0 right-0 bottom-0 left-0 z-10 ${
    //     calender ? 'flex' : 'hidden'
    //   } justify-center items-center z-20`}
    // >
    //   <div className="w-[90%] md:w-[70%] h-[608px] bg-white ">
    //     <div className="bg-primary-100 px-[18px] py-2 flex justify-between items-center">
    //       <div className="flex items-center">
    //         <IconCalender className="w-[17px] h-[15px] md:w-[27px] md:h-[25px] mr-2 md:mr-[28px]" />
    //         <p className="text-base tracking-widest font-open md:text-xl font-bold leading-7 text-white">
    //           {titulo}
    //         </p>
    //       </div>
    //       <div
    //         className="flex cursor-pointer"
    //         id="close-calender"
    //         onClick={() => setCalender(false)}
    //       >
    //         <p className="tracking-tracking-[0.08rem] font-open text-xs md:text-sm font-semibold text-white  mr-2">
    //           {volver}
    //         </p>
    //         <IconBack className="w-[15px] h-[13px] md:w-[25px] md:h-[23px] text-white" />
    //       </div>
    //     </div>
    //     {/* modal parrafo  */}
    //     <div className="pt-7 sm:pt-[50px] px-5 sm:px-[74px] pb-7 sm:pb-[58] mb-4">
    //       <div className="mb-4">
    //         <h4 className="font-open font-bold text-[13px] leading-[17px] tracking-[0.15rem]">
    //           {tituloParrafo1}
    //         </h4>
    //         <p className="font-open font-normal text-[13px] leading-[17px] tracking-[0.15rem]">
    //           {parrafo1}
    //         </p>
    //       </div>
    //       <div className="mb-4">
    //         <h4 className="font-open font-bold text-[13px] leading-[17px] tracking-[0.15rem]">
    //           {tituloParrafo2}
    //         </h4>
    //         <p className="font-open font-normal text-[13px] leading-[17px] tracking-[0.15rem]">
    //           {parrafo2}
    //         </p>
    //       </div>
    //       <div className="mb-4">
    //         <h4 className="font-open font-bold text-[13px] leading-[17px] tracking-[0.15rem]">
    //           {tituloParrafo3}
    //         </h4>
    //         <p className="font-open font-normal text-[13px] leading-[17px] tracking-[0.15rem]">
    //           {parrafo3}
    //         </p>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  )
}

export default ModalCalender

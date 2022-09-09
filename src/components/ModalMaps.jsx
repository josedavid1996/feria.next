import React from 'react'
import { IconBack, IconMaps } from '../icons'
import Image from 'next/image'
import ModalTemplate from './ModalTemplate'

const ModalMaps = ({ maps, setMaps, dataIdioma }) => {
  const {
    titulo,
    volver,
    subTitulo1,
    subTitulo2
    // tituloParrafo1,
    // parrafo1,
    // tituloParrafo2,
    // parrafo2,
    // tituloParrafo3,
    // parrafo3
  } = dataIdioma
  const back = () => setMaps(false)
  return (
    <ModalTemplate
      volver={volver}
      modalTitulo={titulo}
      icon={
        <IconMaps className="w-[17px] h-[15px] md:w-[27px] md:h-[25px] mr-2 md:mr-[13px]  text-white" />
      }
      isModal={maps}
      cerrar={back}
      color={'bg-secundary-600'}
      colorText="text-white"
      fondo="standBack"
    >
      <div className="flex flex-col items-center h-full w-full">
        <p className="font-open font-semibold text-[23px] leading-[31px] tracking-[0.15rem] mt-[20px] mb-[13px]">
          {subTitulo1} <span className="font-bold">{subTitulo2} </span>
        </p>
        <div className="h-[70%] w-[70%]">
          <embed
            src="/image/plano-oficial.pdf"
            type="application/pdf"
            width="100%"
            height="100%"
          />
        </div>
      </div>
    </ModalTemplate>
    // <div
    //   id="modal-maps"
    //   className={`bg-opacity absolute top-0 right-0 bottom-0 left-0 z-10 ${
    //     maps ? 'flex' : 'hidden'
    //   } justify-center items-center z-20`}
    // >
    //   <div className="w-[90%] md:w-[70%] h-[608px] bg-white">
    //     <div className="bg-secundary-600 px-[18px] py-2 flex justify-between items-center">
    //       <div className="flex items-center">
    //         <IconMaps className="min-w-[17px] min-h-[15px] md:min-w-[27px] md:min-h-[25px] mr-2 md:mr-[28px]" />
    //         <p className="text-base tracking-widest font-normal font-open md:text-xl md:font-semibold leading-7 text-white">
    //           {titulo}
    //         </p>
    //       </div>
    //       <div
    //         className="flex cursor-pointer"
    //         id="close-maps"
    //         onClick={() => setMaps(false)}
    //       >
    //         <p className="tracking-tracking-[0.08rem] font-open text-xs md:text-sm font-semibold text-white  mr-2">
    //           {volver}
    //         </p>
    //         <IconBack className="w-[15px] h-[13px] md:w-[25px] md:h-[23px] text-white" />
    //       </div>
    //     </div>
    //     {/* modal parrafo */}
    //     <div className="relative w-[90%] h-[90%] mx-auto">
    //       <Image
    //         src="/image/mapa.png"
    //         alt="mapa"
    //         layout="fill"
    //         className="w-full h-full right-0 left-0 object-contain "
    //       />
    //     </div>
    //     {/* <div className="pt-7 sm:pt-[50px] px-5 sm:px-[74px] pb-7 sm:pb-[58] mb-4">

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
    //     </div> */}
    //   </div>
    // </div>
  )
}

export default ModalMaps

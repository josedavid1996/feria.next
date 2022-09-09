import React from 'react'
import { IconBack } from '../icons'

const ModalTemplate = ({
  icon,
  modalTitulo,
  cerrar,
  volver,
  children,
  isModal,
  color,
  colorText,
  fondo
}) => {
  return (
    <div
      id="modal"
      className={`${fondo} absolute top-0 right-0 bottom-0 left-0   ${
        isModal ? 'flex' : 'hidden'
      }  justify-center items-center z-20`}
    >
      <div className=" w-[90%] lg:w-[70%] h-[60vh]  bg-white  overflow-y-scroll md:overflow-y-auto mt-4 sm:mt-0 max-w-[1000px]">
        <div
          className={`${color} px-[18px] py-2 flex justify-between items-center sticky top-0 z-20`}
        >
          <div className="flex items-center">
            {icon}
            <p
              className={`text-base tracking-widest font-open md:text-xl font-bold leading-7 ${colorText}`}
            >
              {modalTitulo}
            </p>
          </div>
          <div className="flex cursor-pointer" id="close" onClick={cerrar}>
            <p
              className={`tracking-tracking-[0.08rem] font-open text-xs md:text-sm font-semibold ${colorText} mr-2`}
            >
              {volver}
            </p>
            <IconBack
              className={`w-[15px] h-[13px] md:w-[25px] md:h-[23px] ${colorText}`}
            />
          </div>
        </div>
        {children}
      </div>
    </div>
  )
}

export default ModalTemplate

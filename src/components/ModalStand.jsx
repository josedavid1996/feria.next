import { useRouter } from 'next/router'
import React from 'react'
import { IconBack, IconCalender } from '../icons'

const ModalStand = ({ volver, modalTitulo, tituloPatrocinador, children }) => {
  const router = useRouter()
  return (
    <div
      id="modal"
      className={`absolute top-0 right-0 bottom-0 left-0 flex  justify-center items-center z-20`}
    >
      <div className=" w-[90%] lg:w-[70%] h-[60vh]  bg-white  overflow-y-scroll md:overflow-y-auto mt-4 sm:mt-0">
        <div className="bg-secundary-100 px-[18px] py-2 flex justify-between items-center sticky top-0 z-20">
          <div className="flex items-center">
            <IconCalender className="w-[17px] h-[15px] md:w-[27px] md:h-[25px] mr-1  text-black" />
            <p className="text-base tracking-widest font-open md:text-xl font-bold leading-7 text-secundary-400">
              {modalTitulo}
            </p>
          </div>
          <div
            className="flex cursor-pointer"
            id="close"
            onClick={() =>
              router.push({
                pathname: './',
                query: { modal: 'modal' }
              })
            }
          >
            <p className="tracking-tracking-[0.08rem] font-open text-xs md:text-sm font-semibold text-secundary-400 mr-2">
              {volver}
            </p>
            <IconBack className="w-[15px] h-[13px] md:w-[25px] md:h-[23px] text-black" />
          </div>
        </div>
        <div className="sticky top-[44px] z-20 bg-white pt-[35px]">
          <p className=" text-center font-light text-[25px] leading-[30px]  text-black mb-11 text-conferencista">
            {tituloPatrocinador}
          </p>
        </div>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-items-center items-center gap-y-[34px] gap-x-[27px] mt-8 max-w-[1000px] mx-auto px-4 pb-4">
          {children}
        </div>
      </div>
    </div>
  )
}

export default ModalStand

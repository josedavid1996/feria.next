import Head from 'next/head'
import Image from 'next/image'
import Router, { useRouter } from 'next/router'
import React, { useState } from 'react'
import ModalTemplate from '../../components/ModalTemplate'
import { PagineTemplate } from '../../components/PagineTemplate'
import { IconBack, IconCalender } from '../../icons'

const Ovum = (props) => {
  const [isModal, setIsModal] = useState(true)
  const { volver, modalTitulo, parrafo1, parrafo2, parrafo3, parrafo4 } =
    props.Ovum
  const back = () => Router.back()
  // const back = () => setIsModal(false)
  return (
    <>
      <Head>
        <title>Ovum</title>
      </Head>
      <div className="lobby">
        <PagineTemplate idioma={props}>
          <ModalTemplate
            volver={volver}
            modalTitulo={modalTitulo}
            icon={
              <IconCalender className="w-[17px] h-[15px] md:w-[27px] md:h-[25px] mr-1  text-secundary-400" />
            }
            cerrar={back}
            isModal={isModal}
            color={'bg-secundary-100'}
            colorText="text-secundary-400"
          >
            <div className="pt-[44px] pr-[20px] md:pr-[138px] pb-[118px] pl-[20px] md:pl-[96px] flex justify-center  flex-col items-center">
              <p className="parrafo font-open text-[15px] leading-[21px] font-light mb-4">
                {parrafo1}
              </p>
              <p className="parrafo font-open text-[15px] leading-[21px] font-light mb-4">
                {parrafo2}
              </p>
              <p className="parrafo font-open text-[15px] leading-[21px] font-light mb-4">
                {parrafo3}
              </p>
              <p className="parrafo font-open text-[15px] leading-[21px] font-light mb-2">
                {parrafo4}
              </p>
              <Image
                src="/image/firma.png"
                alt="firma"
                width="274px"
                height="101px"
              />
            </div>
          </ModalTemplate>
        </PagineTemplate>
      </div>
    </>
  )
}

export default Ovum

export async function getStaticProps({ locale }) {
  const response = await import(`../../lang/${locale}.json`)

  return {
    props: {
      ModalCalendario: response.default.ModalCalendario,
      ModalMapa: response.default.ModalMapa,
      ModalQuestion: response.default.ModalQuestion,
      Template: response.default.Template,
      HeaderIdiomas: response.default.HeaderIdiomas,
      Ovum: response.default.Ovum
    }
  }
}

import React, { useEffect, useState } from 'react'
import { Entity, Scene } from '@belivvr/aframe-react'
import Head from 'next/head'
import Image from 'next/image'
import { PagineTemplate } from '../../../components/PagineTemplate'
import {
  IconBack,
  IconCalender,
  IconClose,
  IconPatrocinador
} from '../../../icons'
import { useRouter } from 'next/router'
import Link from 'next/link'
import ModalStand from '../../../components/ModalStand'

const isServer = () => typeof window === 'undefined'

const AuspiciadorE = (props) => {
  const [appRendered, setAppRendered] = useState(false)
  const router = useRouter()
  const { modalTitulo, volver, tituloPatrocinador } = props.AuspiciadorE
  useEffect(() => {
    if (!isServer()) {
      require('aframe')
      setAppRendered(true)
    }
  }, [])
  return (
    <>
      <Head>
        <title>Auspiciador E</title>
      </Head>
      {/* <div>
        {appRendered && (
          <Scene>
            <a-sky
              src="/image/360/patrocinadores.webp"
              rotation="0 -90 0"
            ></a-sky>
          </Scene>
        )}
      </div> */}

      <div className="standBack ">
        <PagineTemplate idioma={props} retornar>
          <ModalStand
            volver={volver}
            modalTitulo={modalTitulo}
            tituloPatrocinador={tituloPatrocinador}
          ></ModalStand>
        </PagineTemplate>
      </div>
    </>
  )
}

export default AuspiciadorE
export async function getStaticProps({ locale }) {
  const response = await import(`../../../lang/${locale}.json`)

  return {
    props: {
      ModalCalendario: response.ModalCalendario,
      ModalMapa: response.ModalMapa,
      ModalQuestion: response.ModalQuestion,
      Template: response.default.Template,
      HeaderIdiomas: response.default.HeaderIdiomas,
      AuspiciadorE: response.default.AuspiciadorE
    }
  }
}

import React, { useEffect, useState } from 'react'
import { Entity, Scene } from '@belivvr/aframe-react'
import Head from 'next/head'
import Image from 'next/image'
import { PagineTemplate } from '../../../components/PagineTemplate'
import { IconBack, IconClose, IconPatrocinador } from '../../../icons'
import { useRouter } from 'next/router'
import Link from 'next/link'
import ModalStand from '../../../components/ModalStand'

const isServer = () => typeof window === 'undefined'

const StandBasico = (props) => {
  const [appRendered, setAppRendered] = useState(false)
  // const [isModal, setIsModal] = useState(false)
  const router = useRouter()
  const { modalTitulo, volver, tituloPatrocinador } = props.StandBasico
  useEffect(() => {
    if (!isServer()) {
      require('aframe')
      setAppRendered(true)
    }
  }, [])
  return (
    <>
      <Head>
        <title>{tituloPatrocinador}</title>
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
      {/* <h1 className="text-white text-3xl">Hola</h1> */}

      <div className="standBack ">
        <PagineTemplate idioma={props} retornar>
          <ModalStand
            volver={volver}
            modalTitulo={modalTitulo}
            tituloPatrocinador={tituloPatrocinador}
          >
            <Link
              href="#"
              // href="stand-basico/abt"
            >
              <a>
                <Image
                  priority
                  className="cursor-pointer"
                  src="/image/standBasico/abt.png"
                  alt="abt"
                  width="173px"
                  height="78px"
                />
              </a>
            </Link>

            <Link
              href="#"
              // href="stand-basico/agritech"
            >
              <a>
                <Image
                  id="agritech"
                  className="cursor-pointer"
                  src="/image/standBasico/agritech.png"
                  alt="agritech"
                  width="180px"
                  height="80px"
                />
              </a>
            </Link>
            <Link
              href="#"
              //  href="stand-basico/agroin"
            >
              <a>
                <Image
                  className="cursor-pointer"
                  src="/image/standBasico/agroin.png"
                  alt="agroin"
                  width="180px"
                  height="49px"
                />
              </a>
            </Link>
            <Link
              href="#"
              // href="stand-basico/alimento"
            >
              <a>
                <Image
                  className="cursor-pointer"
                  src="/image/standBasico/alimento.png"
                  alt="alimento"
                  width="180px"
                  height="49px"
                />
              </a>
            </Link>
            <Link
              href="#"
              // href="stand-basico/alke"
            >
              <a>
                <Image
                  className="cursor-pointer"
                  src="/image/standBasico/alke.png"
                  alt="alke"
                  width="180px"
                  height="49px"
                />
              </a>
            </Link>
            <Link
              href="#"
              // href="stand-basico/alkemy"
            >
              <a>
                <Image
                  className="cursor-pointer"
                  src="/image/standBasico/alkemy.png"
                  alt="alkemy"
                  width="180px"
                  height="49px"
                />
              </a>
            </Link>
            <Link
              href="#"
              // href="stand-basico/avioeste"
            >
              <a>
                <Image
                  className="cursor-pointer"
                  src="/image/standBasico/avioeste.png"
                  alt="avioeste"
                  width="180px"
                  height="70px"
                />
              </a>
            </Link>
            <Link
              href="#"
              // href="stand-basico/baf"
            >
              <a>
                <Image
                  className="cursor-pointer"
                  src="/image/standBasico/baf.png"
                  alt="baf"
                  width="180px"
                  height="60px"
                />
              </a>
            </Link>
            <Link
              href="#"
              // href="stand-basico/bandas-avicolas"
            >
              <a>
                <Image
                  className="cursor-pointer"
                  src="/image/standBasico/bandas-avicolas.png"
                  alt="bandas-avicolas"
                  width="180px"
                  height="60px"
                />
              </a>
            </Link>
            <Link
              href="#"
              // href="stand-basico/bayle"
            >
              <a>
                <Image
                  className="cursor-pointer"
                  src="/image/standBasico/bayle.png"
                  alt="bayle"
                  width="180px"
                  height="70px"
                />
              </a>
            </Link>
            <Link
              href="#"
              // href="stand-basico/bio-chek"
            >
              <a>
                <Image
                  className="cursor-pointer"
                  src="/image/standBasico/bio-chek.png"
                  alt="bio-chek"
                  width="180px"
                  height="70px"
                />
              </a>
            </Link>
            <Link
              href="#"
              // href="stand-basico/biovet"
            >
              <a>
                <Image
                  className="cursor-pointer"
                  src="/image/standBasico/biovet.png"
                  alt="biovet"
                  width="180px"
                  height="70px"
                />
              </a>
            </Link>
            <Link
              href="#"
              // href="stand-basico/bourlot"
            >
              <a>
                <Image
                  className="cursor-pointer"
                  src="/image/standBasico/bourlot.png"
                  alt="bourlot"
                  width="180px"
                  height="70px"
                />
              </a>
            </Link>
            <Link
              href="#"
              // href="stand-basico/covesa"
            >
              <a>
                <Image
                  className="cursor-pointer"
                  src="/image/standBasico/covesa.png"
                  alt="covesa"
                  width="180px"
                  height="70px"
                />
              </a>
            </Link>
            <Link
              href="#"
              // href="stand-basico/de-anda"
            >
              <a>
                <Image
                  className="cursor-pointer"
                  src="/image/standBasico/de-anda.png"
                  alt="de-anda"
                  width="180px"
                  height="70px"
                />
              </a>
            </Link>
            <Link
              href="#"
              // href="stand-basico/dominant"
            >
              <a>
                <Image
                  className="cursor-pointer"
                  src="/image/standBasico/dominant.png"
                  alt="dominant"
                  width="180px"
                  height="70px"
                />
              </a>
            </Link>
            <Link
              href="#"
              // href="stand-basico/emtech"
            >
              <a>
                <Image
                  className="cursor-pointer"
                  src="/image/standBasico/emtech.png"
                  alt="emtech"
                  width="180px"
                  height="70px"
                />
              </a>
            </Link>
            <Link
              href="#"
              // href="stand-basico/ferraz"
            >
              <a>
                <Image
                  className="cursor-pointer"
                  src="/image/standBasico/ferraz.png"
                  alt="ferraz"
                  width="180px"
                  height="70px"
                />
              </a>
            </Link>
            <Link
              href="#"
              // href="stand-basico/globe"
            >
              <a>
                <Image
                  className="cursor-pointer"
                  src="/image/standBasico/globe.png"
                  alt="globe"
                  width="180px"
                  height="70px"
                />
              </a>
            </Link>
            <Link
              href="#"
              // href="stand-basico/igusol"
            >
              <a>
                <Image
                  className="cursor-pointer"
                  src="/image/standBasico/igusol.png"
                  alt="igusol"
                  width="180px"
                  height="70px"
                />
              </a>
            </Link>
            <Link
              href="#"
              // href="stand-basico/indiv"
            >
              <a>
                <Image
                  className="cursor-pointer"
                  src="/image/standBasico/indiv.png"
                  alt="indiv"
                  width="180px"
                  height="70px"
                />
              </a>
            </Link>
            <Link
              href="#"
              // href="stand-basico/induvet"
            >
              <a>
                <Image
                  className="cursor-pointer"
                  src="/image/standBasico/induvet.png"
                  alt="induvet"
                  width="180px"
                  height="70px"
                />
              </a>
            </Link>
            <Link
              href="#"
              // href="stand-basico/ippe"
            >
              <a>
                <Image
                  className="cursor-pointer"
                  src="/image/standBasico/ippe.png"
                  alt="ippe"
                  width="180px"
                  height="70px"
                />
              </a>
            </Link>
            <Link
              href="#"
              // href="stand-basico/itpsa"
            >
              <a>
                <Image
                  className="cursor-pointer"
                  src="/image/standBasico/itpsa.png"
                  alt="itpsa"
                  width="120px"
                  height="90px"
                />
              </a>
            </Link>
            <Link
              href="#"
              // href="stand-basico/jacobs"
            >
              <a>
                <Image
                  className="cursor-pointer"
                  src="/image/standBasico/jacobs.png"
                  alt="jacobs"
                  width="180px"
                  height="70px"
                />
              </a>
            </Link>
            <Link
              href="#"
              // href="stand-basico/kersia"
            >
              <a>
                <Image
                  className="cursor-pointer"
                  src="/image/standBasico/kersia.png"
                  alt="kersia"
                  width="180px"
                  height="70px"
                />
              </a>
            </Link>
            <Link
              href="#"
              // href="stand-basico/kroms"
            >
              <a>
                <Image
                  className="cursor-pointer"
                  src="/image/standBasico/kroms.png"
                  alt="kroms"
                  width="180px"
                  height="70px"
                />
              </a>
            </Link>
            <Link
              href="#"
              // href="stand-basico/marcel"
            >
              <a>
                <Image
                  className="cursor-pointer"
                  src="/image/standBasico/marcel.png"
                  alt="marcel"
                  width="180px"
                  height="70px"
                />
              </a>
            </Link>
            <Link
              href="#"
              // href="stand-basico/maximus"
            >
              <a>
                <Image
                  className="cursor-pointer"
                  src="/image/standBasico/maximus.png"
                  alt="maximus"
                  width="180px"
                  height="70px"
                />
              </a>
            </Link>
            <Link
              href="#"
              // href="stand-basico/minmosa"
            >
              <a>
                <Image
                  className="cursor-pointer"
                  src="/image/standBasico/minmosa.png"
                  alt="minmosa"
                  width="180px"
                  height="70px"
                />
              </a>
            </Link>
            <Link
              href="#"
              // href="stand-basico/moba"
            >
              <a>
                <Image
                  className="cursor-pointer"
                  src="/image/standBasico/moba.png"
                  alt="moba"
                  width="180px"
                  height="70px"
                />
              </a>
            </Link>
            <Link
              href="#"
              // href="stand-basico/natural"
            >
              <a>
                <Image
                  className="cursor-pointer"
                  src="/image/standBasico/natural.png"
                  alt="natural"
                  width="180px"
                  height="70px"
                />
              </a>
            </Link>
            <Link
              href="#"
              // href="stand-basico/peruvian"
            >
              <a>
                <Image
                  className="cursor-pointer"
                  src="/image/standBasico/peruvian.png"
                  alt="peruvian"
                  width="180px"
                  height="70px"
                />
              </a>
            </Link>
            <Link
              href="#"
              // href="stand-basico/petersime"
            >
              <a>
                <Image
                  className="cursor-pointer"
                  src="/image/standBasico/petersime.png"
                  alt="petersime"
                  width="180px"
                  height="70px"
                />
              </a>
            </Link>
            <Link
              href="#"
              // href="stand-basico/phosphea"
            >
              <a>
                <Image
                  className="cursor-pointer"
                  src="/image/standBasico/phosphea.png"
                  alt="phosphea"
                  width="180px"
                  height="70px"
                />
              </a>
            </Link>
            <Link
              href="#"
              // href="stand-basico/premex"
            >
              <a>
                <Image
                  className="cursor-pointer"
                  src="/image/standBasico/premex.png"
                  alt="premex"
                  width="180px"
                  height="70px"
                />
              </a>
            </Link>
            <Link
              href="#"
              // href="stand-basico/raizup"
            >
              <a>
                <Image
                  className="cursor-pointer"
                  src="/image/standBasico/raizup.png"
                  alt="raizup"
                  width="180px"
                  height="70px"
                />
              </a>
            </Link>
            <Link
              href="#"
              // href="stand-basico/realva"
            >
              <a>
                <Image
                  className="cursor-pointer"
                  src="/image/standBasico/realva.png"
                  alt="realva"
                  width="180px"
                  height="70px"
                />
              </a>
            </Link>
            <Link
              href="#"
              // href="stand-basico/sanovo"
            >
              <a>
                <Image
                  className="cursor-pointer"
                  src="/image/standBasico/sanovo.png"
                  alt="sanovo"
                  width="180px"
                  height="70px"
                />
              </a>
            </Link>
            <Link
              href="#"
              // href="stand-basico/royal-pas"
            >
              <a>
                <Image
                  className="cursor-pointer"
                  src="/image/standBasico/royal-pas.png"
                  alt="royal-pas"
                  width="180px"
                  height="70px"
                />
              </a>
            </Link>
            <Link
              href="#"
              // href="stand-basico/suagrovet"
            >
              <a>
                <Image
                  className="cursor-pointer"
                  src="/image/standBasico/suagrovet.png"
                  alt="suagrovet"
                  width="180px"
                  height="70px"
                />
              </a>
            </Link>
            <Link
              href="#"
              // href="stand-basico/tea"
            >
              <a>
                <Image
                  className="cursor-pointer"
                  src="/image/standBasico/tea.png"
                  alt="tea"
                  width="180px"
                  height="70px"
                />
              </a>
            </Link>
            <Link
              href="#"
              // href="stand-basico/tekpro"
            >
              <a>
                <Image
                  className="cursor-pointer"
                  src="/image/standBasico/tekpro.png"
                  alt="tekpro"
                  width="180px"
                  height="70px"
                />
              </a>
            </Link>
            <Link
              href="#"
              // href="stand-basico/zinpro"
            >
              <a>
                <Image
                  className="cursor-pointer"
                  src="/image/standBasico/zinpro.png"
                  alt="zinpro"
                  width="100px"
                  height="90px"
                />
              </a>
            </Link>
          </ModalStand>
          {/* <div
          id="modal"
          className={`flex absolute top-0 right-0 bottom-0 left-0   justify-center items-center z-20`}
        >
          <div className=" w-[90%] lg:w-[70%] h-[60vh] md:h-auto bg-white  overflow-y-scroll md:overflow-y-auto mt-4 sm:mt-0 max-w-[1000px]">
            <div className="bg-secundary-100 px-[18px] py-2 flex justify-between items-center sticky top-0 z-20">
              <div className="flex items-center">
                <IconPatrocinador className="w-[17px] h-[15px] md:w-[27px] md:h-[25px] mr-1  text-black" />
                <p className="text-base tracking-widest font-open md:text-xl font-bold leading-7 text-secundary-400">
                  {modalTitulo}
                </p>
              </div>
              <div
                className="flex cursor-pointer"
                id="close"
                onClick={() => router.back()}
              >
                <p className="tracking-tracking-[0.08rem] font-open text-xs md:text-sm font-semibold text-secundary-400 mr-2">
                  {volver}
                </p>
                <IconBack className="w-[15px] h-[13px] md:w-[25px] md:h-[23px] text-black" />
              </div>
            </div>
            <div
              id="card-patrocinador"
              className=" h-auto max-h-[400px] w-[100%] rounded-[10px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3   justify-items-center items-center relative gap-6 mt-12"
            >
              <div className="fixed top-[-2.5rem]">
                <p className=" text-center font-light text-[25px] leading-[30px]  text-black mb-11 text-conferencista z-[999]">
                  {tituloPatrocinador}
                </p>
              </div>
              <Link href="stand-basico/abt">
                <a>
                  <Image
                    priority
                    className="cursor-pointer"
                    src="/image/standBasico/abt.png"
                    alt="abt"
                    width="173px"
                    height="78px"
                  />
                </a>
              </Link>

              <Link href="stand-basico/agritech">
                <a>
                  <Image
                    id="agritech"
                    className="cursor-pointer"
                    src="/image/standBasico/agritech.png"
                    alt="agritech"
                    width="180px"
                    height="80px"
                  />
                </a>
              </Link>
              <Link href="stand-basico/agroin">
                <a>
                  <Image
                    className="cursor-pointer"
                    src="/image/standBasico/agroin.png"
                    alt="agroin"
                    width="180px"
                    height="49px"
                  />
                </a>
              </Link>
              <Link href="stand-basico/alimento">
                <a>
                  <Image
                    className="cursor-pointer"
                    src="/image/standBasico/alimento.png"
                    alt="alimento"
                    width="180px"
                    height="49px"
                  />
                </a>
              </Link>
              <Link href="stand-basico/alke">
                <a>
                  <Image
                    className="cursor-pointer"
                    src="/image/standBasico/alke.png"
                    alt="alke"
                    width="180px"
                    height="49px"
                  />
                </a>
              </Link>
              <Link href="stand-basico/alkemy">
                <a>
                  <Image
                    className="cursor-pointer"
                    src="/image/standBasico/alkemy.png"
                    alt="alkemy"
                    width="180px"
                    height="49px"
                  />
                </a>
              </Link>
              <Link href="stand-basico/avioeste">
                <a>
                  <Image
                    className="cursor-pointer"
                    src="/image/standBasico/avioeste.png"
                    alt="avioeste"
                    width="180px"
                    height="70px"
                  />
                </a>
              </Link>
              <Link href="stand-basico/baf">
                <a>
                  <Image
                    className="cursor-pointer"
                    src="/image/standBasico/baf.png"
                    alt="baf"
                    width="180px"
                    height="60px"
                  />
                </a>
              </Link>
              <Link href="stand-basico/bandas-avicolas">
                <a>
                  <Image
                    className="cursor-pointer"
                    src="/image/standBasico/bandas-avicolas.png"
                    alt="bandas-avicolas"
                    width="180px"
                    height="60px"
                  />
                </a>
              </Link>
              <Link href="stand-basico/bayle">
                <a>
                  <Image
                    className="cursor-pointer"
                    src="/image/standBasico/bayle.png"
                    alt="bayle"
                    width="180px"
                    height="70px"
                  />
                </a>
              </Link>
              <Link href="stand-basico/bio-chek">
                <a>
                  <Image
                    className="cursor-pointer"
                    src="/image/standBasico/bio-chek.png"
                    alt="bio-chek"
                    width="180px"
                    height="70px"
                  />
                </a>
              </Link>
              <Link href="stand-basico/biovet">
                <a>
                  <Image
                    className="cursor-pointer"
                    src="/image/standBasico/biovet.png"
                    alt="biovet"
                    width="180px"
                    height="70px"
                  />
                </a>
              </Link>
              <Link href="stand-basico/bourlot">
                <a>
                  <Image
                    className="cursor-pointer"
                    src="/image/standBasico/bourlot.png"
                    alt="bourlot"
                    width="180px"
                    height="70px"
                  />
                </a>
              </Link>
              <Link href="stand-basico/covesa">
                <a>
                  <Image
                    className="cursor-pointer"
                    src="/image/standBasico/covesa.png"
                    alt="covesa"
                    width="180px"
                    height="70px"
                  />
                </a>
              </Link>
              <Link href="stand-basico/de-anda">
                <a>
                  <Image
                    className="cursor-pointer"
                    src="/image/standBasico/de-anda.png"
                    alt="de-anda"
                    width="180px"
                    height="70px"
                  />
                </a>
              </Link>
              <Link href="stand-basico/dominant">
                <a>
                  <Image
                    className="cursor-pointer"
                    src="/image/standBasico/dominant.png"
                    alt="dominant"
                    width="180px"
                    height="70px"
                  />
                </a>
              </Link>
              <Link href="stand-basico/emtech">
                <a>
                  <Image
                    className="cursor-pointer"
                    src="/image/standBasico/emtech.png"
                    alt="emtech"
                    width="180px"
                    height="70px"
                  />
                </a>
              </Link>
              <Link href="stand-basico/ferraz">
                <a>
                  <Image
                    className="cursor-pointer"
                    src="/image/standBasico/ferraz.png"
                    alt="ferraz"
                    width="180px"
                    height="70px"
                  />
                </a>
              </Link>
              <Link href="stand-basico/globe">
                <a>
                  <Image
                    className="cursor-pointer"
                    src="/image/standBasico/globe.png"
                    alt="globe"
                    width="180px"
                    height="70px"
                  />
                </a>
              </Link>
              <Link href="stand-basico/igusol">
                <a>
                  <Image
                    className="cursor-pointer"
                    src="/image/standBasico/igusol.png"
                    alt="igusol"
                    width="180px"
                    height="70px"
                  />
                </a>
              </Link>
              <Link href="stand-basico/indiv">
                <a>
                  <Image
                    className="cursor-pointer"
                    src="/image/standBasico/indiv.png"
                    alt="indiv"
                    width="180px"
                    height="70px"
                  />
                </a>
              </Link>
              <Link href="stand-basico/induvet">
                <a>
                  <Image
                    className="cursor-pointer"
                    src="/image/standBasico/induvet.png"
                    alt="induvet"
                    width="180px"
                    height="70px"
                  />
                </a>
              </Link>
              <Link href="stand-basico/ippe">
                <a>
                  <Image
                    className="cursor-pointer"
                    src="/image/standBasico/ippe.png"
                    alt="ippe"
                    width="180px"
                    height="70px"
                  />
                </a>
              </Link>
              <Link href="stand-basico/itpsa">
                <a>
                  <Image
                    className="cursor-pointer"
                    src="/image/standBasico/itpsa.png"
                    alt="itpsa"
                    width="120px"
                    height="90px"
                  />
                </a>
              </Link>
              <Link href="stand-basico/jacobs">
                <a>
                  <Image
                    className="cursor-pointer"
                    src="/image/standBasico/jacobs.png"
                    alt="jacobs"
                    width="180px"
                    height="70px"
                  />
                </a>
              </Link>
              <Link href="stand-basico/kersia">
                <a>
                  <Image
                    className="cursor-pointer"
                    src="/image/standBasico/kersia.png"
                    alt="kersia"
                    width="180px"
                    height="70px"
                  />
                </a>
              </Link>
              <Link href="stand-basico/kroms">
                <a>
                  <Image
                    className="cursor-pointer"
                    src="/image/standBasico/kroms.png"
                    alt="kroms"
                    width="180px"
                    height="70px"
                  />
                </a>
              </Link>
              <Link href="stand-basico/marcel">
                <a>
                  <Image
                    className="cursor-pointer"
                    src="/image/standBasico/marcel.png"
                    alt="marcel"
                    width="180px"
                    height="70px"
                  />
                </a>
              </Link>
              <Link href="stand-basico/maximus">
                <a>
                  <Image
                    className="cursor-pointer"
                    src="/image/standBasico/maximus.png"
                    alt="maximus"
                    width="180px"
                    height="70px"
                  />
                </a>
              </Link>
              <Link href="stand-basico/minmosa">
                <a>
                  <Image
                    className="cursor-pointer"
                    src="/image/standBasico/minmosa.png"
                    alt="minmosa"
                    width="180px"
                    height="70px"
                  />
                </a>
              </Link>
              <Link href="stand-basico/moba">
                <a>
                  <Image
                    className="cursor-pointer"
                    src="/image/standBasico/moba.png"
                    alt="moba"
                    width="180px"
                    height="70px"
                  />
                </a>
              </Link>
              <Link href="stand-basico/natural">
                <a>
                  <Image
                    className="cursor-pointer"
                    src="/image/standBasico/natural.png"
                    alt="natural"
                    width="180px"
                    height="70px"
                  />
                </a>
              </Link>
              <Link href="stand-basico/peruvian">
                <a>
                  <Image
                    className="cursor-pointer"
                    src="/image/standBasico/peruvian.png"
                    alt="peruvian"
                    width="180px"
                    height="70px"
                  />
                </a>
              </Link>
              <Link href="stand-basico/petersime">
                <a>
                  <Image
                    className="cursor-pointer"
                    src="/image/standBasico/petersime.png"
                    alt="petersime"
                    width="180px"
                    height="70px"
                  />
                </a>
              </Link>
              <Link href="stand-basico/phosphea">
                <a>
                  <Image
                    className="cursor-pointer"
                    src="/image/standBasico/phosphea.png"
                    alt="phosphea"
                    width="180px"
                    height="70px"
                  />
                </a>
              </Link>
              <Link href="stand-basico/premex">
                <a>
                  <Image
                    className="cursor-pointer"
                    src="/image/standBasico/premex.png"
                    alt="premex"
                    width="180px"
                    height="70px"
                  />
                </a>
              </Link>
              <Link href="stand-basico/raizup">
                <a>
                  <Image
                    className="cursor-pointer"
                    src="/image/standBasico/raizup.png"
                    alt="raizup"
                    width="180px"
                    height="70px"
                  />
                </a>
              </Link>
              <Link href="stand-basico/realva">
                <a>
                  <Image
                    className="cursor-pointer"
                    src="/image/standBasico/realva.png"
                    alt="realva"
                    width="180px"
                    height="70px"
                  />
                </a>
              </Link>
              <Link href="stand-basico/sanovo">
                <a>
                  <Image
                    className="cursor-pointer"
                    src="/image/standBasico/sanovo.png"
                    alt="sanovo"
                    width="180px"
                    height="70px"
                  />
                </a>
              </Link>
              <Link href="stand-basico/royal-pas">
                <a>
                  <Image
                    className="cursor-pointer"
                    src="/image/standBasico/royal-pas.png"
                    alt="royal-pas"
                    width="180px"
                    height="70px"
                  />
                </a>
              </Link>
              <Link href="stand-basico/suagrovet">
                <a>
                  <Image
                    className="cursor-pointer"
                    src="/image/standBasico/suagrovet.png"
                    alt="suagrovet"
                    width="180px"
                    height="70px"
                  />
                </a>
              </Link>
              <Link href="stand-basico/tea">
                <a>
                  <Image
                    className="cursor-pointer"
                    src="/image/standBasico/tea.png"
                    alt="tea"
                    width="180px"
                    height="70px"
                  />
                </a>
              </Link>
              <Link href="stand-basico/tekpro">
                <a>
                  <Image
                    className="cursor-pointer"
                    src="/image/standBasico/tekpro.png"
                    alt="tekpro"
                    width="180px"
                    height="70px"
                  />
                </a>
              </Link>
              <Link href="stand-basico/zinpro">
                <a>
                  <Image
                    className="cursor-pointer"
                    src="/image/standBasico/zinpro.png"
                    alt="zinpro"
                    width="100px"
                    height="90px"
                  />
                </a>
              </Link>
            </div>
          </div>
        </div> */}
        </PagineTemplate>
      </div>
    </>
  )
}

export default StandBasico
export async function getStaticProps({ locale }) {
  const response = await import(`../../../lang/${locale}.json`)

  return {
    props: {
      ModalCalendario: response.ModalCalendario,
      ModalMapa: response.ModalMapa,
      ModalQuestion: response.ModalQuestion,
      Template: response.default.Template,
      HeaderIdiomas: response.default.HeaderIdiomas,
      Exposicion: response.default.Exposicion,
      StandBasico: response.default.StandBasico
    }
  }
}

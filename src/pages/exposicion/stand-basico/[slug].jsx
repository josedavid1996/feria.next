import React, { useEffect, useState } from 'react'
import { Entity, Scene } from '@belivvr/aframe-react'
import images from '../../../assets/data.json'
import { PagineTemplate } from '../../../components/PagineTemplate'
import { IconBack, IconCalender, IconPrograma } from '../../../icons'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Head from 'next/head'

const isServer = () => typeof window === 'undefined'
const StandBasico = (props) => {
  const [appRendered, setAppRendered] = useState(false)
  const [sky, setSky] = useState('0 0 0')
  const [titulo, setTitulo] = useState()
  const [isText, setIsText] = useState(false)
  const [isVideo, setIsVideo] = useState(false)
  const data = props.data
  const patrocinador = '/exposicion/stand-basico'
  const {
    modalTitulo,
    volver,
    informacion,
    contacto,
    telefono,
    ingresarEmail,
    ingresaConsulta,
    enviar
  } = props.PatrocinadorSlug
  const { locale } = useRouter()
  // const valores = images.map((item) => console.log(item))
  const cambioIdioma = images.data.find((item) => item.image === data)
  useEffect(() => {
    switch (locale) {
      case 'es-pe':
        return setTitulo(cambioIdioma.tituloEspa)
      case 'en-US':
        return setTitulo(cambioIdioma.tituloIngle)
      case 'pt-br':
        return setTitulo(cambioIdioma.tituloPort)
      default:
        return setTitulo(cambioIdioma.tituloEspa)
    }
  }, [locale])

  useEffect(() => {
    if (!isServer()) {
      require('aframe')
      setAppRendered(true)
    }
  }, [])

  useEffect(() => {
    if (window.screen.availWidth <= 360) {
      setSky('0 0 -300')
    }
  }, [])
  return (
    <>
      <Head>
        <title>{data}</title>
      </Head>
      <div>
        {appRendered && (
          <Scene>
            <a-image
              src="/image/stand-arrow.png"
              height="1.5"
              width="1.5"
              class="indicador"
              position="-10.2 1 -11"
              rotation="0 0 0"
              animation="property: opacity;from: 0;  to: 1;dur: 1000"
              onClick={() => {
                setIsText(true)
              }}
            ></a-image>
            <a-image
              src="/image/stand-arrow.png"
              height="1"
              width="1"
              class="indicador"
              position="-2 0 -11"
              rotation="0 0 0"
              animation="property: opacity;from: 0;  to: 1;dur: 1000"
              onClick={() => {
                setIsText(true)
              }}
            ></a-image>
            <a-image
              src="/image/stand-arrow.png"
              height="1.5"
              width="2"
              class="indicador"
              position="15 -2 -11"
              rotation="0 0 0"
              animation="property: opacity;from: 0;  to: 1;dur: 1000"
              onClick={() => {
                setIsText(true)
              }}
            ></a-image>
            <a-image
              src="/image/stand-video.png"
              height="1"
              width="1"
              class="indicador"
              position="-2.5 2 -11"
              rotation="0 0 0"
              onClick={() => {
                setIsVideo(true)
              }}
              animation="property: opacity;from: 0;  to: 1;dur: 1000"
            ></a-image>
            <a-image
              src="/image/stand-video.png"
              height="1"
              width="1"
              class="indicador"
              position="5 2 -11"
              rotation="0 0 0"
              onClick={() => {
                setIsVideo(true)
              }}
              animation="property: opacity;from: 0;  to: 1;dur: 1000"
            ></a-image>
            <a-sky
              src={`/image/360/patrocinador/${data}.webp`}
              rotation="0 -90 0"
              position={sky}
            ></a-sky>
            <a-entity
              cursor="rayOrigin:mouse"
              raycaster="objects: .indicador"
            ></a-entity>
          </Scene>
        )}
      </div>
      <PagineTemplate idioma={props} data={{ patrocinador, slug: data }}>
        {/* MODAL TEXTO */}
        <div
          id="modal"
          className={`absolute top-0 right-0 bottom-0 left-0 z-10  ${
            isText ? 'flex' : 'hidden'
          } justify-center items-center `}
        >
          <div className="w-[90%] md:w-[70%] h-[608px] bg-white overflow-hidden mt-4 sm:mt-0">
            <div className="bg-[#AFAFAF] px-[18px] py-2 flex justify-between items-center">
              <div className="flex items-center">
                <IconCalender className="w-[17px] h-[15px] md:w-[27px] md:h-[25px] mr-1 md:mr-[28px] text-black" />
                <p className="text-base tracking-widest font-open md:text-xl font-bold leading-7 text-secundary-400">
                  {modalTitulo} / {data}
                </p>
              </div>
              <div
                className="flex cursor-pointer"
                id="close"
                onClick={() => setIsText(false)}
              >
                <p className="tracking-tracking-[0.08rem] font-open text-xs md:text-sm font-semibold text-secundary-400 mr-2">
                  {volver}
                </p>
                <IconBack className="w-[15px] h-[13px] md:w-[25px] md:h-[23px] text-black" />
              </div>
            </div>
            <div className="flex flex-col  md:flex-row w-full h-[558px] relative py-[37px] pl-[58px] pr-[41px] overflow-y-scroll">
              <div className="w-full md:w-[60%] md:pr-5 border-b md:border-r border-[#DADADA]">
                <div className="mb-[23px]">
                  <Image
                    src={`/image/patrocinador/${data}.png`}
                    alt="trouw"
                    width="229px"
                    height="47px"
                  />
                </div>
                <p className="parrafo text-[13px] leading-[15px] font-light">
                  Trouw Nutrition, es una empresa de origen holandés,
                  perteneciente al grupo Nutreco, con más de 90 años de
                  liderazgo en nutrición animal. Trouw Nutrition es una compañía
                  basada en ciencia y enfocada en la nutrición de precisión.
                  Cuenta con 5 centros de investigación, 12 granjas de
                  validación alrededor del mundo, y presencia en más de 105
                  países, cubriendo América Latina. Su misión es Alimentar el
                  Futuro, por lo que sus actividades de Investigación y
                  Desarrollo están diseñadas para traducir la ciencia en
                  soluciones nutricionales innovadoras y aplicables a las
                  condiciones locales de manera práctica, rentable y sostenible.
                  Trouw Nutrition se caracteriza por su enfoque integrado que
                  comprende la nutrición, el manejo y la salud animal. Este
                  enfoque le permite brindar programas, compuestos de soluciones
                  y servicios, específicamente diseñados para las condiciones de
                  cada granja donde no solo se enfocan en resolver los retos
                  presentes, sino apoyar las mejoras y monitorear el progreso.
                </p>
              </div>
              <div className="w-full md:w-[40%] pt-4 md:pt-0 md:pl-[30px]">
                <h3 className="font-bold text-[#173D35] text-xl mb-4">
                  {informacion}
                </h3>
                <h5 className="text-[13px] leading-[15px] font-light mb-2">
                  {contacto}:
                </h5>
                <p className="text-[13px] leading-[15px] font-light text-secundary-300 mb-4">
                  www.trouwnutritionlatam.com/es-la/Contactanos/
                </p>
                <h5 className="text-[13px] leading-[15px] font-light mb-2">
                  {telefono}:
                </h5>
                <h5 className="text-[13px] leading-[15px] font-light mb-2">
                  +502 2416 4450
                </h5>

                <form className="mt-[23px]">
                  <input
                    placeholder={ingresarEmail}
                    className="border border-[#DADADA] w-full h-[37px] bg-[#F4F5F7] rounded-[15px] p-4 mb-3"
                  />
                  <input
                    className="border border-[#DADADA] w-full h-[78px] bg-[#F4F5F7] rounded-[15px] p-4 mb-[15px]"
                    placeholder={ingresaConsulta}
                  />
                  <Link href="#">
                    <a
                      type="submit"
                      className="btn bg-primary-100 w-[180px] h-[42px] flex justify-center items-center text-white font-normal leading-[21px] font-open tracking-widest text-[15px] mx-auto rounded-[20px] mb-[10px] cursor-pointer"
                    >
                      {enviar}
                    </a>
                  </Link>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/* === */}

        {/* MODAL VIDEO */}
        <div
          id="modal"
          className={`absolute top-0 right-0 bottom-0 left-0 z-10  ${
            isVideo ? 'flex' : 'hidden'
          } justify-center items-center `}
        >
          <div className="w-[90%] md:w-[70%] h-[608px] bg-white overflow-hidden mt-4 sm:mt-0">
            <div className="bg-[#AFAFAF] px-[18px] py-2 flex justify-between items-center">
              <div className="flex items-center">
                <IconCalender className="w-[17px] h-[15px] md:w-[27px] md:h-[25px] mr-1 md:mr-[28px] text-black" />
                <p className="text-base tracking-widest font-open md:text-xl font-bold leading-7 text-secundary-400">
                  {modalTitulo} / {data}
                </p>
              </div>
              <div
                className="flex cursor-pointer"
                id="close"
                onClick={() => setIsVideo(false)}
              >
                <p className="tracking-tracking-[0.08rem] font-open text-xs md:text-sm font-semibold text-secundary-400 mr-2">
                  Volver
                </p>
                <IconBack className="w-[15px] h-[13px] md:w-[25px] md:h-[23px] text-black" />
              </div>
            </div>
            <div className="flex justify-center items-center w-full h-[558px] relative ">
              <iframe
                className="w-[80%] h-[80%]"
                src="https://www.youtube.com/embed/L7kMNys_7YQ?autoplay=1&rel=0&mute=1&loop=1&enablejsapi=1"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              ></iframe>
            </div>
          </div>
        </div>
        {/* === */}
      </PagineTemplate>
    </>
  )
}

// export async function getStaticPaths() {
//   try {
//     const data = images.data
//     const paths = data.map(({ image }) => ({
//       params: { slug: `${image}` }
//     }))
//     return {
//       paths,
//       fallback: false
//     }
//   } catch (error) {
//     console.log(error)
//   }
// }
export async function getServerSideProps({ params, locale }) {
  const response = await import(`../../../lang/${locale}.json`)
  try {
    const data = params.slug

    // const data = await res.json()
    return {
      props: {
        data,
        ModalCalendario: response.ModalCalendario,
        ModalMapa: response.ModalMapa,
        ModalQuestion: response.ModalQuestion,
        Template: response.default.Template,
        HeaderIdiomas: response.default.HeaderIdiomas,
        PatrocinadorSlug: response.default.PatrocinadorSlug
      }
    }
  } catch (error) {
    console.log(error)
  }
}

export default StandBasico

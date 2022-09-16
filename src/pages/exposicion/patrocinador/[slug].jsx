import React, { useEffect, useRef, useState } from 'react'
import { Entity, Scene } from '@belivvr/aframe-react'
import images from '../../../assets/data.json'
import { PagineTemplate } from '../../../components/PagineTemplate'
import {
  IconBack,
  IconCalender,
  IconFacebook,
  IconInstagram,
  IconLinkedin,
  IconPrograma,
  IconTwitter
} from '../../../icons'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Head from 'next/head'

const isServer = () => typeof window === 'undefined'
const Patrocinador = (props) => {
  const [appRendered, setAppRendered] = useState(false)
  const [sky, setSky] = useState('0 0 0')
  const [titulo, setTitulo] = useState()
  const [isText, setIsText] = useState(false)
  const [isVideo, setIsVideo] = useState(false)
  const [isPdf, setIsPdf] = useState(false)
  const [arrow1, setArrow1] = useState('-10.2 1 -11')
  const [arrow2, setArrow2] = useState('-2 0 -11')
  const [arrow3, setArrow3] = useState('15 -2 -11')
  const [video1, setVideo1] = useState('-2.5 2 -11')
  const [video2, setVideo2] = useState('5 2 -11')
  const [resolucion, setResolucion] = useState(10)

  const imgRef = useRef(null)
  // console.log(imgRef.current.setAttribute(src))

  // const newURL = imgRef.current?.getAttribute('data-src')
  // // imgRef.current.src = newURL
  // if (imgRef.current === null) {
  //   console.log('por fiiiiiiin')
  // }

  const data = props.data
  const patrocinador = '/exposicion/patrocinador'

  const {
    modalTitulo,
    volver,
    informacion,
    contacto,
    telefono,
    direccion,
    ingresarEmail,
    ingresaConsulta,
    facebook,
    twitter,
    linkedin,
    Instagram,
    enviar
  } = props.PatrocinadorSlug
  const { locale } = useRouter()
  const router = useRouter()
  // const valores = images.map((item) => console.log(item))
  const datos = images.data.find((item) => item.image === data)
  const {
    width,
    height,
    telefonoEmpresa,
    web,
    direccionEmpresa,
    video,
    pdf,
    facebookEmpresa,
    twitterEmpresa,
    linkedinEmpresa,
    InstagramEmpresa
  } = datos
  // console.log(datos)
  useEffect(() => {
    switch (locale) {
      case 'es-pe':
        return setTitulo(datos.parrafoEspa)
      case 'en-US':
        return setTitulo(datos.parrafoIngle)
      case 'pt-br':
        return setTitulo(datos.parrafoPort)
      default:
        return setTitulo(datos.parrafoEspa)
    }
  }, [locale, datos])

  useEffect(() => {
    if (!isServer()) {
      require('aframe')
      setAppRendered(true)
    }
  }, [])

  // if (appRendered) {
  //   AFRAME.registerComponent('cargo', {
  //     init: function () {
  //       const $sky = document.querySelector('#sky')
  //       console.log($sky.src)
  //       // const newURL = $sky.getAttribute('data-src')
  //       // console.log(newURL)
  //       // $sky.setAttribute('src', newURL)
  //     }
  //   })
  // }

  useEffect(() => {
    if (window.screen.availWidth <= 360) {
      setSky('0 0 -300')
      setArrow1('-5.5 1.1 -11')
      setArrow2('-1.8 1 -11')
      setArrow3('7 0 -11')
      setVideo1('-1.5 2.3 -11')
      setVideo2('3 2 -11')
    }
  }, [])

  // useEffect(() => {
  //   if (typeof window !== 'undefined') {
  //     console.log(document)
  //     const images = document.querySelectorAll('.img')
  //     console.log(images)
  //     const imgOptions = {}

  //     const imgObserver = new IntersectionObserver((entries, imgObserver) => {
  //       entries.forEach((entry) => {
  //         if (!entry.isIntersecting) return

  //         const img = entry.target
  //         img.src = img.src.replace('w=10&', 'w=800&')
  //         imgObserver.unobserve(entry.target)
  //       })
  //     }, imgOptions)

  //     images.forEach((img) => {
  //       imgObserver.observe(img)
  //       console.log(img)
  //     })
  //   }
  // }, [])

  return (
    <>
      <Head>
        <title>{data}</title>
      </Head>

      <div>
        {appRendered && (
          <Scene>
            <a-assets>
              <img
                crossOrigin="anonymous"
                className="img"
                ref={imgRef}
                onLoad={() => setResolucion(800)}
                id="sky"
                src="https://images.unsplash.com/photo-1596263576925-d90d63691097?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=10&q=80"
                data-src="https://images.unsplash.com/photo-1596263576925-d90d63691097?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                alt="lobbyMobile"
              />
            </a-assets>
            <a-image
              src="/image/stand-arrow.png"
              height="1"
              width="1"
              class="indicador"
              position={arrow1}
              rotation="0 0 0"
              animation="property: opacity;from: 0;  to: 1;dur: 1000"
              onClick={() => {
                setIsText(true)
              }}
            ></a-image>
            {pdf && (
              <a-image
                src="/image/stand-arrow.png"
                height="1"
                width="1"
                class="indicador"
                position={arrow2}
                rotation="0 0 0"
                animation="property: opacity;from: 0;  to: 1;dur: 1000"
                onClick={() => {
                  setIsPdf(true)
                }}
              ></a-image>
            )}
            <a-image
              src="/image/stand-arrow.png"
              height="1.5"
              width="2"
              class="indicador"
              position={arrow3}
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
              position={video1}
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
              position={video2}
              rotation="0 0 0"
              onClick={() => {
                setIsVideo(true)
              }}
              animation="property: opacity;from: 0;  to: 1;dur: 1000"
            ></a-image>
            <a-sky
              // onLoad={console.log('cargue')}
              // cargo
              src={`/image/360/patrocinador/${data}.webp`}
              // src={`https://images.unsplash.com/photo-1596263576925-d90d63691097?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=${resolucion}&q=80`}
              // src="#sky"
              // color="#00ff00"
              rotation="0 -90 0"
              position={sky}
              data-src="https://images.unsplash.com/photo-1596263576925-d90d63691097?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
              id="sky"
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
          className={`absolute top-0 right-0 bottom-0 left-0 z-20  ${
            isText ? 'flex' : 'hidden'
          } justify-center items-center `}
        >
          <div className="w-[90%] md:w-[70%] h-[60vh] bg-white mt-4 sm:mt-0 overflow-auto">
            <div className="bg-[#AFAFAF] px-[18px] py-2 flex justify-between items-center sticky top-0 z-30">
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
            <div className="flex flex-col  md:flex-row w-full h-[558px] relative py-[37px] pl-[58px] pr-[41px] ">
              <div className="w-full md:w-[60%] md:pr-5 border-b md:border-b-0 md:border-r border-[#DADADA]">
                <div className="mb-[23px]">
                  <Image
                    src={`/image/patrocinador/${data}.png`}
                    alt="trouw"
                    width={width ? width : '229px'}
                    height={height ? height : '47px'}
                  />
                </div>
                <p className="parrafo text-[13px] leading-[15px] font-light">
                  {titulo}
                </p>
              </div>
              <div className="w-full md:w-[40%] pt-4 md:pt-0 md:pl-[30px]">
                <h3 className="font-bold text-[#173D35] text-xl mb-4">
                  {informacion}
                </h3>
                {/* WEB */}
                <h5 className="text-[13px] leading-[15px] font-light mb-2">
                  {contacto}:
                </h5>
                <Link href={web}>
                  <a
                    target="_blank"
                    className="text-[13px] leading-[15px] font-light text-secundary-300 mb-4 block"
                  >
                    {web}
                  </a>
                </Link>
                {/* REDES SOCIALES */}
                <div className="flex">
                  {/* FACEBOOK */}
                  {facebookEmpresa.length !== 0 && (
                    <>
                      <Link href={facebookEmpresa}>
                        <a
                          target="_blank"
                          className="text-[13px] leading-[15px] font-light text-secundary-300 mb-4 block mr-4"
                        >
                          <IconFacebook className="w-6 h-6 transition-all duration-500  cursor-pointer hover:text-[#6CBE4C80]" />
                        </a>
                      </Link>
                    </>
                  )}

                  {/* TWITTER */}
                  {twitterEmpresa.length !== 0 && (
                    <>
                      <Link href={twitterEmpresa}>
                        <a
                          target="_blank"
                          className="text-[13px] leading-[15px] font-light text-secundary-300 mb-4 block mr-4"
                        >
                          <IconTwitter className="w-6 h-6 transition-all duration-500  cursor-pointer hover:text-[#6CBE4C80]" />
                        </a>
                      </Link>
                    </>
                  )}
                  {/* LINKEDIN*/}
                  {linkedinEmpresa.length !== 0 && (
                    <>
                      <Link href={linkedinEmpresa}>
                        <a
                          target="_blank"
                          className="text-[13px] leading-[15px] font-light text-secundary-300 mb-4 block mr-4"
                        >
                          <IconLinkedin className="w-6 h-6 transition-all duration-500  cursor-pointer hover:text-[#6CBE4C80]" />
                        </a>
                      </Link>
                    </>
                  )}
                  {/* INSTAGRAM */}
                  {InstagramEmpresa.length !== 0 && (
                    <>
                      <Link href={InstagramEmpresa}>
                        <a
                          target="_blank"
                          className="text-[13px] leading-[15px] font-light text-secundary-300 mb-4 block mr-4"
                        >
                          <IconInstagram className="w-6 h-6 transition-all duration-500  cursor-pointer hover:text-[#6CBE4C80]" />
                        </a>
                      </Link>
                    </>
                  )}
                </div>

                {/* TELEFONO */}
                <h5 className="text-[13px] leading-[15px] font-light mb-2">
                  {telefono}:
                </h5>
                <h5 className="text-[13px] leading-[15px] font-light mb-2">
                  {telefonoEmpresa}
                </h5>

                {/* DIRRECCION */}
                {direccionEmpresa.length !== 0 && (
                  <>
                    <h5 className="text-[13px] leading-[15px] font-light mb-2">
                      {direccion}:
                    </h5>
                    <h5 className="text-[13px] leading-[15px] font-light mb-2">
                      {direccionEmpresa}
                    </h5>
                  </>
                )}
                {data === 'cmi' && (
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
                )}
              </div>
            </div>
          </div>
        </div>
        {/* === */}

        {/* MODAL VIDEO */}
        <div
          id="modal"
          className={`absolute top-0 right-0 bottom-0 left-0 z-20  ${
            isVideo ? 'flex' : 'hidden'
          } justify-center items-center `}
        >
          <div className="w-[90%] md:w-[70%] h-[60vh] bg-white overflow-scroll mt-4 sm:mt-0 ">
            <div className="bg-[#AFAFAF] px-[18px] py-2 flex justify-between items-center sticky top-0 z-30">
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
                  {volver}
                </p>
                <IconBack className="w-[15px] h-[13px] md:w-[25px] md:h-[23px] text-black" />
              </div>
            </div>
            <div className="flex justify-center items-center w-full h-[60vh] relative ">
              <iframe
                className="w-[80%] h-[80%]"
                src={video}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              ></iframe>
            </div>
          </div>
        </div>
        {/* === */}

        {/* MODAL PDF */}

        {pdf && (
          <div
            id="modal"
            className={`absolute top-0 right-0 bottom-0 left-0 z-20  ${
              isPdf ? 'flex' : 'hidden'
            } justify-center items-center `}
          >
            <div className="w-[90%] md:w-[70%] h-[60vh] bg-white overflow-scroll mt-4 sm:mt-0 ">
              <div className="bg-[#AFAFAF] px-[18px] py-2 flex justify-between items-center sticky top-0 z-30">
                <div className="flex items-center">
                  {/* <IconCalender className="w-[17px] h-[15px] md:w-[27px] md:h-[25px] mr-1 md:mr-[28px] text-black" /> */}
                  <p className="text-base tracking-widest font-open md:text-xl font-bold leading-7 text-secundary-400">
                    {modalTitulo} / {data}
                  </p>
                </div>
                <div
                  className="flex cursor-pointer"
                  id="close"
                  onClick={() => setIsPdf(false)}
                >
                  <p className="tracking-tracking-[0.08rem] font-open text-xs md:text-sm font-semibold text-secundary-400 mr-2">
                    {volver}
                  </p>
                  <IconBack className="w-[15px] h-[13px] md:w-[25px] md:h-[23px] text-black" />
                </div>
              </div>
              <div className="flex justify-center items-center w-full h-[60vh] relative ">
                <div className="h-[80%] w-[90%]">
                  <embed
                    src={`/image/pdfStand/${pdf}.pdf`}
                    type="application/pdf"
                    width="100%"
                    height="100%"
                  />
                </div>
              </div>
            </div>
          </div>
        )}
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
        PatrocinadorSlug: response.default.PatrocinadorSlug,
        cargill: response.cargill,
        cmi: response.cmi
      }
    }
  } catch (error) {
    console.log(error)
  }
}

export default Patrocinador

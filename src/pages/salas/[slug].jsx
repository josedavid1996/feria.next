import Head from 'next/head'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { PagineTemplate } from '../../components/PagineTemplate'

const DetalleSlug = (props) => {
  const data = props.data
  const patrocinador = '/salas'
  const [video, setVideo] = useState()
  const [urlChat, setUrlChat] = useState('')
  const [dia, setdia] = useState(new Date().getDate())
  const [mes, setMes] = useState(new Date().getMonth())

  const rou = useRouter()
  const slug = rou.query.slug
  const {
    videoRoatan7,
    videoRoatan8,
    videoRoatan9,
    videoCopan7,
    videoCopan8,
    videoCopan9,
    videoOmoa7,
    videoOmoa8,
    videoOmoa9,
    videoYojoa7,
    videoYojoa8,
    videoYojoa9
  } = props.Sala

  useEffect(() => {
    if (slug === 'roatan') {
      setUrlChat('8bG3HHCJPcE')
    }
    if (slug === 'opan') {
      setUrlChat('hw8nEt-wUCI')
    }
    if (slug === 'omoa') {
      setUrlChat('1E0qIv-Yw34')
    }
    if (slug === 'yohoa') {
      setUrlChat('AUE1Kw3jJes')
    }
  }, [slug])

  useEffect(() => {
    if (data === 'roatan') {
      if (mes <= 8 && dia <= 7) {
        setVideo(videoRoatan7)
      }
      if (mes === 8 && dia === 8) {
        setVideo(videoRoatan8)
      }
      if (mes === 8 && dia === 9) {
        setVideo(videoRoatan9)
      }
    }
    if (data === 'copan') {
      if (mes <= 8 && dia <= 7) {
        setVideo(videoCopan7)
      }
      if (mes === 8 && dia === 8) {
        setVideo(videoCopan8)
      }
      if (mes === 8 && dia === 9) {
        setVideo(videoCopan9)
      }
    }
    if (data === 'omoa') {
      if (mes <= 8 && dia <= 7) {
        setVideo(videoOmoa7)
      }
      if (mes === 8 && dia === 8) {
        setVideo(videoOmoa8)
      }
      if (mes === 8 && dia === 9) {
        setVideo(videoOmoa9)
      }
    }
    if (data === 'yohoa') {
      // setVideo(videoYojoa7)
      if (mes <= 8 && dia <= 7) {
        setVideo(videoYojoa7)
      }
      if (mes === 8 && dia === 8) {
        setVideo(videoYojoa8)
      }
      if (mes === 8 && dia === 9) {
        setVideo(videoYojoa9)
      }
    }
  }, [video, videoRoatan7, data, dia, mes])

  console.log(video)

  return (
    <>
      <Head>
        <title>{data}</title>
      </Head>
      <div className="detalle">
        <PagineTemplate
          idioma={props}
          messege={true}
          data={{ patrocinador, slug: data }}
          retornar
        >
          <div
            id="modal"
            className=" flex absolute top-0 right-0 bottom-0 left-0  
          justify-center items-center z-20"
          >
            <div className=" w-[90%] lg:w-[70%] h-[60vh] flex flex-col sm:flex-row bg-white  overflow-y-scroll md:overflow-y-auto mt-4 sm:mt-0">
              <iframe
                className="w-full sm:w-3/4 h-full"
                src={video}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              ></iframe>

              <iframe
                className="w-full h-full sm:w-1/4 "
                src={`https://www.youtube.com/live_chat?v=${urlChat}&embed_domain=ovum-feria.vercel.app`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              ></iframe>
            </div>
          </div>
        </PagineTemplate>
      </div>
    </>
  )
}

export default DetalleSlug

export async function getServerSideProps({ params, locale }) {
  const response = await import(`../../lang/${locale}.json`)
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
        Sala: response.default.Sala
      }
    }
  } catch (error) {
    console.log(error)
  }
}

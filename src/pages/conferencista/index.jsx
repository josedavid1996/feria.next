import React, { useEffect, useState } from 'react'
import { Entity, Scene } from '@belivvr/aframe-react'
import { PagineTemplate } from '../../components/PagineTemplate'
import Head from 'next/head'
import Image from 'next/image'
// import dynamic from ' next/dynamic'
import { IconArrowLeft } from '../../icons'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { Pagination, Navigation } from 'swiper'
import Link from 'next/link'

const isServer = () => typeof window === 'undefined'

const Conferencista = (props) => {
  const [appRendered, setAppRendered] = useState(false)

  const {
    titulo,
    cardSubtitulo1,
    cardParrafo1,
    fecha1,
    sala1,
    cardSubtitulo2,
    cardParrafo2,
    fecha2,
    sala2,
    cardSubtitulo3,
    cardParrafo3,
    fecha3,
    sala3,
    cardSubtitulo4,
    cardParrafo4,
    fecha4,
    sala4,
    cards
  } = props.Conferencista

  useEffect(() => {
    if (!isServer()) {
      require('aframe')
      setAppRendered(true)
    }
  }, [])
  return (
    <>
      <Head>
        <title>Conferencista</title>
      </Head>
      <div className="conferencistas">
        {appRendered && (
          <Scene>
            {/* <a-sky
              src="/image/360/sala1.webp"
              rotation="0 -90 0"
              position="0 0 250"
            ></a-sky> */}
            {/* <a-entity cursor="rayOrigin:mouse"></a-entity> */}
          </Scene>
        )}
      </div>
      <PagineTemplate idioma={props}>
        {/* Modal  */}
        <div
          id="modal"
          className="absolute top-0 right-0 bottom-0 left-0 z-20  flex justify-center items-center "
        >
          <div className="w-[80%] max-w-[1050px]  mt-4 sm:mt-0 overflow-hidden ">
            <p className=" text-center font-light text-[25px] leading-[30px]  text-white mb-11 text-conferencista">
              {titulo}
            </p>
            {/* Carrousel  */}

            <Swiper
              style={{
                '--swiper-navigation-color': '#7d005e'
              }}
              slidesPerView={1}
              spaceBetween={15}
              // navigation={true}
              pagination={{
                clickable: true
              }}
              // slidesPerGroup={1}
              // loop={true}
              // loopFillGroupWithBlank={true}
              breakpoints={{
                700: {
                  slidesPerView: 2,
                  spaceBetween: 15
                },
                950: {
                  slidesPerView: 3,
                  spaceBetween: 10
                },
                1300: {
                  slidesPerView: 4,
                  spaceBetween: 10
                }
              }}
              modules={[Navigation]}
              navigation={true}
              // className="mySwiper"
            >
              {cards.map((card, index) => {
                return (
                  <SwiperSlide key={index}>
                    <div className="w-[280px] bg-white p-4 flex flex-col items-center rounded-2xl relative mx-auto  justify-between h-full">
                      <Image
                        src={`/image/fotoConferencista/${card.foto}.png`}
                        className="w-[197px] h-[197px] rounded-full mb-4"
                        width="197px"
                        height="197px"
                        priority
                        alt="foto-1"
                      />
                      <h3 className="text-[22px] leading-[33px] font-normal text-black ">
                        {card.nombre}
                      </h3>
                      <p className="text-center font-light text-[15px] leading-[19px]  font-open">
                        {card.cardParrafo}
                      </p>
                      <div>
                        <p className="text-[15px] leading-[21px] text-[#1C6096] font-light font-open">
                          {card.fecha}
                        </p>
                        <Link href={card.link} className="">
                          <a className="text-primary-100 font-bold cursor-pointer hover:text-primary-200 font-open text-center text-[15px]">
                            {card.sala}
                          </a>
                        </Link>
                      </div>
                    </div>
                  </SwiperSlide>
                )
              })}
            </Swiper>
          </div>
        </div>
      </PagineTemplate>
    </>
  )
}

export default Conferencista
export async function getStaticProps({ locale }) {
  const response = await import(`../../lang/${locale}.json`)

  return {
    props: {
      Conferencista: response.default.Conferencista,
      ModalCalendario: response.default.ModalCalendario,
      ModalMapa: response.default.ModalMapa,
      ModalQuestion: response.default.ModalQuestion,
      Template: response.default.Template,
      HeaderIdiomas: response.default.HeaderIdiomas
    }
  }
}

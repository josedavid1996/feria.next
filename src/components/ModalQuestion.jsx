import React from 'react'
import { IconBack, IconQuestion } from '../icons'
import ModalTemplate from './ModalTemplate'

const ModalQuestion = ({ question, setQuestion, dataIdioma }) => {
  const {
    titulo,
    volver,
    informacion,
    pregunta1,
    pregunta2,
    pregunta3,
    pregunta4,
    pregunta5,
    pregunta6,
    pregunta7,
    pregunta8,
    pregunta9,
    pregunta10,
    pregunta11,
    pregunta12,
    pregunta13
  } = dataIdioma

  const back = () => setQuestion(false)
  return (
    <ModalTemplate
      volver={volver}
      modalTitulo={titulo}
      icon={
        <IconQuestion className="w-[17px] h-[15px] md:w-[27px] md:h-[25px] mr-2 md:mr-[13px]  text-white" />
      }
      isModal={question}
      cerrar={back}
      color={'bg-primary-100'}
      colorText="text-white"
      fondo="lobby"
    >
      <div className="pt-7 sm:pt-[50px] px-5 sm:px-[74px] text-[#4e5057] pb-7 sm:pb-[58] mb-4">
        <span className="font-semibold text-[#173D35]">{pregunta1.titulo}</span>
        <br />
        {pregunta1.texto1}
        <br /> <br />
        <span className="font-semibold text-[#173D35]">{pregunta2.titulo}</span>
        <br />
        {pregunta2.texto1}.
        <br /> <br />
        <span className="font-semibold text-[#173D35]">{pregunta3.titulo}</span>
        <br /> {pregunta3.texto1}
        <br /> <br />
        <span className="font-semibold text-[#173D35]">{pregunta4.titulo}</span>
        <br /> {pregunta4.texto1}
        <br /> <br /> {pregunta4.texto2}
        <br /> <br />{' '}
        <span className="font-semibold text-[#173D35]">
          {pregunta5.entrada}
        </span>
        <br />{' '}
        <span className="font-semibold text-[#173D35]">{pregunta5.titulo}</span>
        <br />
        {pregunta5.texto1}
        <span className="border-b border-black">
          {/* <Link href='/registro'>www.elovum.com/registro. </Link> */}
          www.elovum.com/registro.
        </span>
        {pregunta5.texto2}
        <br /> <br />
        <span className="font-semibold text-[#173D35]">{pregunta6.titulo}</span>
        <br /> {pregunta6.texto1}
        <br /> <br />
        {pregunta6.texto2}
        <br /> {pregunta6.texto3}
        <br />
        {pregunta6.texto4}
        <br /> {pregunta6.texto5}
        <br /> {pregunta6.texto6}
        <span className="border-b border-black">
          {/* <Link href='/registro'>www.elovum.com/registro</Link> */}
          www.elovum.com/registro.
        </span>
        <br /> <br />
        <span className="font-semibold text-[#173D35]">{pregunta7.titulo}</span>
        <br /> {pregunta7.texto1}
        <br />
        <br /> {pregunta7.texto2}
        <br />
        <br />
        <span className="font-semibold text-[#173D35]">
          {' '}
          {pregunta8.entrada}
        </span>
        <br />
        <span className="font-semibold text-[#173D35]">{pregunta8.titulo}</span>
        <br /> {pregunta8.texto1}
        <p>https://elovum.com/TARIFAS-DE-HOTELES.pdf</p>
        <br />
        <br />{' '}
        <span className="font-semibold text-[#173D35]">
          {' '}
          {pregunta9.entrada}
        </span>
        <br />
        <span className="font-semibold text-[#173D35]">{pregunta9.titulo}</span>
        <br /> {pregunta9.texto1}
        <br />
        <br />
        <span className="font-semibold text-[#173D35]">
          {pregunta10.titulo}
        </span>
        <br /> {pregunta10.texto1}
        <br />
        <br />{' '}
        <span className="font-semibold text-[#173D35]">
          {pregunta11.entrada}
        </span>
        <br />
        <br />
        <span className="font-semibold text-[#173D35]">
          {pregunta11.titulo}
        </span>
        <br /> {pregunta11.texto1}
        <span className="border-b border-black">www.elovum.com/lo-ultimo</span>
        {pregunta11.texto2}
        <br />
        <br />
        <span className="font-semibold text-[#173D35]">
          {pregunta12.titulo}
        </span>
        <br />
        {pregunta12.texto1}
        <br />
        {pregunta12.texto2}
        <br />
        {pregunta12.texto3}
        <br /> {pregunta12.texto4}
        <br />
        {pregunta12.texto5}
        <br />
        <br />{' '}
        <span className="font-semibold text-[#173D35]">
          {pregunta13.entrada}
        </span>
        <br />
        <span className="font-semibold text-[#173D35]">
          {pregunta13.titulo}
        </span>
        <br /> {pregunta13.texto1}
        <br />
        <br />
        <span className="font-semibold">{pregunta13.itemBold1}</span>
        {pregunta13.item1}
        <br />
        <span className="font-semibold">{pregunta13.itemBold2}</span>
        {pregunta13.item2}
        <br />
        <span className="font-semibold">{pregunta13.itemBold3}</span>
        {pregunta13.item3}
        <br />
        <span className="font-semibold">{pregunta13.itemBold4}</span>
        {pregunta13.item4}
        <br />
        {pregunta13.texto2}
        <br />
        <br />
        <span className="font-semibold text-[#173D35]">{informacion}</span>
        <br />
        <p className="mt-2">WhatsApp: +504 3297-4088</p>
        <p>E-mail: operaciones@anavih.com</p>
      </div>
    </ModalTemplate>
  )
}

export default ModalQuestion

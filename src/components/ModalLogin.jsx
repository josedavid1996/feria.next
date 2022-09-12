import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { Formik } from 'formik'
import isEmail from 'validator/lib/isEmail'
import isEmpty from 'validator/lib/isEmpty'

import mapGqlErrors from '../utils/mapGqlErrors'
import { useLoginMutation } from '../generated/graphql'
import { IconClose } from '../icons'
import { useRouter } from 'next/router'

const ModalLogin = ({
  isModal,
  setisModal,
  campo1,
  campo2,
  textButton,
  textPassword
}) => {
  const router = useRouter()
  const [login, { loading }] = useLoginMutation()
  const [validacion, setValidacion] = useState('')
  return (
    <div
      id="modal"
      className={`absolute top-0 right-0 bottom-0 left-0 z-10  justify-center items-center ${
        isModal ? 'flex' : 'hidden'
      }`}
    >
      <div className="w-[350px] sm:w-[393px]  bg-white rounded-[13px] pt-[15px] pr-[22px] pb-[22px] pl-[20px] relative z-30">
        <IconClose
          className="w-6 h-6 absolute top-1 right-1 cursor-pointer"
          onClick={() => {
            setisModal(false)
          }}
        />
        <div className="relative w-[300px] h-[150px]  sm:w-[350px] sm:h-[167px] mb-[15px]">
          <Image
            src="/image/image-modal.png"
            className="w-full h-[full "
            layout="fill"
            alt="logo-modal"
          />
        </div>
        <Formik
          initialValues={{ email: '', password: '' }}
          validate={(values) => {
            const errors = {}

            if (!isEmail(values.email)) {
              errors.email = 'Ingrese email valido'
            }

            if (isEmpty(values.password)) {
              errors.password = 'Este campo es requerido'
            }
            console.log(errors)
            return errors
          }}
          onSubmit={async (values, { setErrors }) => {
            const res = await login({ variables: { input: values } })

            if (res.data.login.errors) {
              const newErrors = mapGqlErrors(res.data.login.errors)
              setErrors(newErrors)
              return
            }

            const { token, ...usuario } = res.data.login.data
            localStorage.setItem('token', token)

            // TODO: Guardar datos del usuario en un estado global si es necesario

            router.push('/lobby')
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit
          }) => (
            <form
              id="form"
              onSubmit={handleSubmit}
              className=" flex flex-col items-center"
            >
              <div className="mb-[14.84px] flex">
                <label
                  htmlFor=""
                  className="text-[15px] font-light leading-[21px] mr-9 font-open"
                >
                  {campo1}
                </label>
                <input
                  type="email"
                  name="email"
                  value={values.email}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  className="w-[231px] h-[34px] border-[0.8px] border-[#C4C4C4] rounded-[8.7px] pl-4 focus:border-[0.8px] focus:border-primary-100 outline-none"
                />
              </div>
              {/* {console.log(touched.email, errors.email)} */}
              {touched.email && errors.email && setValidacion(errors.email)}
              <div className="mb-[28.8px] flex">
                <label
                  htmlFor=""
                  className="text-[15px] font-light leading-[21px] mr-[10px] font-open"
                >
                  {campo2}
                </label>
                <input
                  type="password"
                  name="password"
                  value={values.password}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  className="w-[231px] h-[34px] border-[0.8px] border-[#C4C4C4] rounded-[8.7px] pl-4 focus:border-[0.8px] focus:border-primary-100 outline-none"
                />
              </div>
              {touched.password &&
                errors.password &&
                setValidacion(errors.email)}
              <button
                type="submit"
                disabled={loading}
                className="btn bg-primary-100 w-[130px] h-[30px] flex justify-center items-center text-white font-normal leading-[21px] font-open tracking-widest text-[15px] mx-auto rounded-xl mb-[10px] cursor-pointer"
              >
                {textButton}
              </button>

              <Link href="/recuperar">
                <a className="text-center text-[15px] font-light leading-[21px] font-open cursor-pointer hover:text-primary-100">
                  {textPassword}
                </a>
              </Link>
            </form>
          )}
        </Formik>
        {validacion?.length !== 0 && (
          <p className="text-[#D91A15] text-center leading-[21px] text-[17px] font-light mt-5">
            {validacion}
          </p>
          // <p>{errors.password}</p>}
        )}
      </div>
    </div>
  )
}

export default ModalLogin

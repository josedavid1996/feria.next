import React, { useEffect, useState } from 'react'
import { Entity, Scene, Sky } from '@belivvr/aframe-react'

const isServer = () => typeof window === 'undefined'
const Camino = () => {
  const [appRendered, setAppRendered] = useState(false)
  const [position, setPosition] = useState('')
  const [image, setImage] = useState('360-1')
  const [animacion, setAnimacion] = useState('')
  useEffect(() => {
    if (!isServer()) {
      require('aframe')
      setAppRendered(true)
    }
  }, [])
  return (
    <>
      {appRendered && (
        <Scene>
          <a-image
            src="/image/indicadores/salaImage.png"
            position={`2 0 -15`}
            height="1"
            width="1"
            class="indicador"
            scale="1 1 1"
            animation="property: scale; from: 1 1 1;to:1.3 1.3 1.3;easing: linear; loop: true; dur: 1000"
            onClick={() => {
              setAnimacion(
                'property: position; to:0 0 300;easing: linear; dur: 1000'
              )
              setTimeout(() => {
                setImage('cobb')
              }, 1000)
            }}
          ></a-image>
          <a-sky
            src={`/image/${image}.jpg`}
            opacity=""
            rotation="0 -90 0"
            position="0 0 -300"
            animation={animacion}
          ></a-sky>
          <a-entity
            cursor="rayOrigin:mouse"
            raycaster="objects: .indicador"
          ></a-entity>
        </Scene>
      )}
    </>
  )
}

export default Camino

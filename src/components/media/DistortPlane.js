import React, {useRef} from 'react'
import * as THREE from 'three'
import {useLoader, useFrame, useThree} from 'react-three-fiber'
import state from '../../store'
import lerp from 'lerp'

import './materials/DistortMaterial'

// A 3D plane representing an HTML image element with CSS positioning
// The image uses a custom material which allows for shader manipulation

function DistortPlane({color = 'white', ...props}) {
    const material = useRef()
    const texture = useLoader(THREE.TextureLoader, props.src) // BREAKS IF THIS IS REMOVED???
    var images = document.getElementsByClassName('image-plane')
    images = Array.from(images) //convert to array

    const image = images.filter((el) => el.dataset.id === props.image_id)[0]

    const imageSize = new THREE.Vector2(0, 0)
    const imageOffset = new THREE.Vector2(0, 0)

    const {width, height, left} = image.getBoundingClientRect()

    imageSize.set(width, height)
    imageOffset.set(left - window.innerWidth / 2 + width / 2, 0.0)

    const imageTexture = useLoader(THREE.TextureLoader, image.src)

    let last = state.top.current
    useFrame(() => {
        const {top} = state
        const scrollSpeed = top.current - last

        material.current.shift = lerp(material.current.shift, -scrollSpeed / 150, 0.05)
        last = top.current
    })

    return (
        <mesh
            position={[imageOffset.x, imageOffset.y, 0]}
            scale={[imageSize.x, imageSize.y, 1]}
        >
            <planeBufferGeometry attach="geometry" args={[1, 1, 32, 32]} />
            <distortMaterial
                ref={material}
                attach="material"
                color={color}
                map={imageTexture}
                transparent={true}
            />
        </mesh>
    )
}

export default DistortPlane

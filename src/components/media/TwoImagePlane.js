import React, {useRef} from 'react'
import * as THREE from 'three'
import {useLoader, useFrame} from 'react-three-fiber'
import state from '../../store'
import lerp from 'lerp'
import {useBlock} from '../Blocks'

import './materials/MorphMaterial'

// A 3D plane representing an HTML image element with CSS positioning
// The image uses a custom material which allows for shader manipulation

function TwoImagePlane({color = 'white', ...props}) {
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

    const imageTexture = useLoader(THREE.TextureLoader, props.src)
    const previousImageTexture = useLoader(THREE.TextureLoader, props.src_prev)

    const {viewportHeight, offset} = useBlock()

    useFrame(() => {
        const {top} = state
        let offsetMapped = 0

        if (props.continue) {
            offsetMapped = (offset * viewportHeight - top.current) / viewportHeight
        } else {
            offsetMapped = Math.max(
                0,
                (offset * viewportHeight - top.current) / viewportHeight
            )
        }

        // same lerp used in blocks.js
        material.current.uMixValue = lerp(material.current.uMixValue, offsetMapped, 0.1)
    })

    return (
        <mesh
            position={[imageOffset.x, imageOffset.y, 0]}
            scale={[imageSize.x, imageSize.y, 1]}
        >
            <planeBufferGeometry attach="geometry" args={[1, 1, 32, 32]} />
            <morphMaterial
                ref={material}
                attach="material"
                uTexture={imageTexture}
                uPreviousTexture={previousImageTexture}
                transparent={true}
            />
        </mesh>
    )
}

export default TwoImagePlane

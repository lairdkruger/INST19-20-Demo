import React, {useRef} from 'react'
import * as THREE from 'three'
import '../materials/ParagraphMaterial'
import {useLoader, useFrame} from 'react-three-fiber'
import state from '../../store'
import lerp from 'lerp'
import {useBlock} from '../Blocks'

// A 3D plane representing an HTML image element with CSS positioning
// The image uses a custom material which allows for shader manipulation

function ParagraphPlane({color = 'white', ...props}) {
    const material = useRef()
    const texture = useLoader(THREE.TextureLoader, props.src) // BREAKS IF THIS IS REMOVED???
    var images = document.getElementsByClassName('image-plane')
    images = Array.from(images) //convert to array

    const image = images.filter((el) => el.dataset.id === props.image_id)[0]

    const imageTexture = useLoader(THREE.TextureLoader, image.src)
    const imageSize = new THREE.Vector2(0, 0)
    const imageOffset = new THREE.Vector2(0, 0)

    const {width, height, top, left} = image.getBoundingClientRect()

    console.log(width, height)

    imageSize.set(width, height)
    imageOffset.set(left - window.innerWidth / 2 + width / 2, 0.0)

    const offset = props.scrollOffset
    const {viewportHeight} = useBlock()

    let last = state.top.current
    useFrame(() => {
        const {top} = state
        const offsetMapped =
            (offset * viewportHeight - top.current) / (viewportHeight * offset)
        material.current.shift = offsetMapped
        material.current.offset =
            (offset * viewportHeight - top.current) / (viewportHeight * offset)

        last = top.current
    })

    return (
        <mesh
            position={[imageOffset.x, imageOffset.y, 0]}
            scale={[imageSize.x, imageSize.y, 1]}
        >
            <planeBufferGeometry attach="geometry" args={[1, 1, 32, 32]} />
            <paragraphMaterial
                ref={material}
                attach="material"
                color={color}
                map={imageTexture}
                transparent={true}
            />
        </mesh>
    )
}

export default ParagraphPlane

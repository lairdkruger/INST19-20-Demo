import React, {useRef, useState} from 'react'
import {useThree, useFrame} from 'react-three-fiber'
import lerp from 'lerp'

import '../materials/LightbarMaterial'

function Lightbar(props) {
    const bar = useRef()
    const material = useRef()

    const {viewport} = useThree()
    const [minWidth, maxWidth] = [-viewport.width / 1.75, viewport.width / 1.75]
    const [minInterval, maxInterval] = [300, 5000]

    const zPos = (1 / props.bar.width) * 100

    const [hovered, setHovered] = useState(false)

    let xPos = 0
    let alpha = 0

    // returns random float between lower and upper bounds
    function random(lowerBound, upperBound) {
        return lowerBound + Math.random() * (upperBound + 1 - lowerBound)
    }

    // random position for each bar at random intervals
    function doSomething() {
        xPos = random(minWidth, maxWidth)
        alpha = Math.random() / 5
    }

    ;(function loop() {
        setTimeout(function () {
            doSomething()
            loop()
        }, random(minInterval, maxInterval))
    })()

    // lerp bar to its new position
    useFrame(() => {
        bar.current.position.x = lerp(bar.current.position.x, xPos, 0.01)
        if (hovered) {
            material.current.uOpacity = 1.0
        } else {
            material.current.uOpacity = lerp(material.current.uOpacity, alpha, 0.01)
        }
    })

    return (
        <mesh
            ref={bar}
            onPointerOver={(e) => setHovered(true)}
            onPointerOut={(e) => setHovered(false)}
            position={[0, 0, zPos]}
        >
            <planeBufferGeometry
                attach="geometry"
                args={[props.bar.width, props.bar.height]}
            />
            <lightbarMaterial
                ref={material}
                attach="material"
                uColor={props.bar.color}
                transparent={true}
            />
        </mesh>
    )
}

export default Lightbar

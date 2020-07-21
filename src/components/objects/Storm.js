import React, {useRef, useEffect} from 'react'
import {useFrame, useThree} from 'react-three-fiber'
import lerp from 'lerp'
import state from '../../store'

import '../materials/SmokeMaterial'

function Storm(props) {
    const smoke = useRef()
    const wire = useRef()
    const smokeMaterial = useRef()
    const wireMaterial = useRef()

    useEffect(() => {
        if (wireMaterial) {
            wireMaterial.current.isWire = 1.0
        }
    }, [])

    const lerpFactor = 0.025
    const intensity = 75
    const restingMovement = 2.5

    const {
        viewport: {width, height},
    } = useThree()

    const radius = Math.max(width / 4, height / 4)

    let last = state.top.current
    let start = Date.now()

    useFrame(() => {
        const {top} = state
        const scrollSpeed = top.current - last
        smokeMaterial.current.time = 0.00025 * (Date.now() - start)
        wireMaterial.current.time = 0.00025 * (Date.now() - start)

        smokeMaterial.current.lowFreqAmp = lerp(
            smokeMaterial.current.lowFreqAmp,
            (Math.abs(scrollSpeed) * radius) / intensity + restingMovement,
            lerpFactor
        )
        smokeMaterial.current.highFreqAmp = lerp(
            smokeMaterial.current.highFreqAmp,
            (Math.abs(scrollSpeed) * radius) / intensity + restingMovement,
            lerpFactor
        )

        wireMaterial.current.lowFreqAmp = lerp(
            wireMaterial.current.lowFreqAmp,
            (Math.abs(scrollSpeed) * radius) / intensity + restingMovement,
            lerpFactor
        )
        wireMaterial.current.highFreqAmp = lerp(
            wireMaterial.current.highFreqAmp,
            (Math.abs(scrollSpeed) * radius) / intensity + restingMovement,
            lerpFactor
        )

        last = top.current
    })

    return (
        <group {...props} position={[width / 2, 0, 0]}>
            <mesh ref={smoke}>
                <icosahedronBufferGeometry args={[radius, 5]} attach="geometry" />
                <smokeMaterial ref={smokeMaterial} attach="material" transparent={true} />
            </mesh>

            <mesh ref={wire}>
                <icosahedronBufferGeometry args={[radius + 0.02, 3]} attach="geometry" />
                <smokeMaterial
                    ref={wireMaterial}
                    attach="material"
                    wireframe={true}
                    transparent={true}
                />
            </mesh>
        </group>
    )
}

export default Storm

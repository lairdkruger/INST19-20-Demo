import React from 'react'
import {useThree} from 'react-three-fiber'

function BackgroundPlane(props) {
    const {viewport} = useThree()

    return (
        <group {...props}>
            <mesh {...props}>
                <planeBufferGeometry
                    attach="geometry"
                    args={[viewport.width, viewport.height]}
                />
                <meshBasicMaterial attach="material" color="#000000" transparent />
            </mesh>
        </group>
    )
}

export default BackgroundPlane

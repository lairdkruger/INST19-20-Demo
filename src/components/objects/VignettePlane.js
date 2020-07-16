import React from 'react'
import {useThree} from 'react-three-fiber'

import '../materials/VignetteMaterial'

function VignettePlane(props) {
    const {viewport} = useThree()

    return (
        <group {...props}>
            <mesh>
                <planeBufferGeometry
                    attach="geometry"
                    args={[viewport.width, viewport.height * 1.05]}
                />
                <vignetteMaterial
                    attach="material"
                    uColor={props.color}
                    toneMapped={false}
                    transparent
                />
            </mesh>
        </group>
    )
}

export default VignettePlane

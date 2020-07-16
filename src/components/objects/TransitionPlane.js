import React from 'react'
import {useThree} from 'react-three-fiber'

import '../materials/TransitionMaterial'

function TransitionPlane(props) {
    const {viewport} = useThree()

    return (
        <group {...props}>
            <mesh>
                <planeBufferGeometry
                    attach="geometry"
                    args={[viewport.width, viewport.height - 0.2]}
                />
                <transitionMaterial
                    attach="material"
                    uColor={props.color}
                    toneMapped={false}
                    transparent
                />
            </mesh>
        </group>
    )
}

export default TransitionPlane

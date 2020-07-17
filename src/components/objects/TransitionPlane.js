import React from 'react'
import {useThree} from 'react-three-fiber'

import '../materials/TransitionMaterial'

function TransitionPlane(props) {
    const {viewport} = useThree()

    return (
        <group>
            <mesh scale-y={props.upsideDown ? -1 : 1}>
                <planeBufferGeometry
                    attach="geometry"
                    args={[viewport.width, viewport.height * 1.02 - 0.2]}
                />
                <transitionMaterial
                    attach="material"
                    uColor={props.color}
                    toneMapped={false}
                    transparent={true}
                />
            </mesh>
        </group>
    )
}

export default TransitionPlane

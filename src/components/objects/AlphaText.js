import React from 'react'
import {useThree, extend} from 'react-three-fiber'
import {Text} from 'troika-three-text'

import '../materials/AlphaTextMaterial'

extend({Text})

function AlphaText(props) {
    const {viewport} = useThree()

    return (
        <text
            text={props.content}
            fontSize={40}
            maxWidth={window.width}
            lineHeight={1.0}
            letterSpacing={-0.08}
            textAlign={'justify'}
            font="https://fonts.gstatic.com/s/raleway/v14/1Ptrg8zYS_SKggPNwK4vaqI.woff"
            anchorX="center"
            anchorY="middle"
        ></text>
    )
}

export default AlphaText

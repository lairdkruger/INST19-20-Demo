import React, {createContext, useRef, useContext} from 'react'
import {useFrame, useThree} from 'react-three-fiber'
import lerp from 'lerp'
import state from '../store'

// Nestable content block for a declarative scroll rig
// Based on Paul Henschel's work:
// https://tympanus.net/codrops/2019/12/16/scroll-refraction-and-shader-effects-in-three-js-and-react/

// Offset: section index (eg: offset = 2 will be the third content section)
// Factor: sets block's speed when page is scrolled

const offsetContext = createContext(0)

function Block({children, offset, factor, ...props}) {
    // Fetch parent offset and the height of a single section
    const {offset: parentOffset, sectionHeight, aspect, canvasHeight} = useBlock()
    const ref = useRef()
    offset = offset !== undefined ? offset : parentOffset

    // Runs every frame and lerps the inner block into its place
    useFrame(() => {
        const curY = ref.current.position.y
        const curTop = Math.min(
            state.top.current / aspect,
            canvasHeight * (state.pages - 1)
        )

        ref.current.position.y = lerp(curY, (curTop / state.zoom) * factor, 0.1)
    })

    setInterval(function () {
        // console.log(canvasHeight * (state.pages - 1))
    }, 1000)

    return (
        <offsetContext.Provider value={offset}>
            <group {...props} position={[0, -sectionHeight * offset * factor, 0]}>
                <group ref={ref}>{children}</group>
            </group>
        </offsetContext.Provider>
    )
}

function useBlock() {
    const {sections, pages, zoom} = state
    const {size, viewport} = useThree()
    const offset = useContext(offsetContext)
    const viewportWidth = viewport.width
    const viewportHeight = viewport.height
    const canvasWidth = viewportWidth / zoom
    const canvasHeight = viewportHeight / zoom
    const mobile = size.width < 700
    const margin = canvasWidth * (mobile ? 0.2 : 0.1)
    const contentMaxWidth = canvasWidth * (mobile ? 0.8 : 0.6)
    const sectionHeight = canvasHeight * ((pages - 1) / (sections - 1))
    const aspect = size.height / viewportHeight
    return {
        aspect,
        viewport,
        offset,
        viewportWidth,
        viewportHeight,
        canvasWidth,
        canvasHeight,
        mobile,
        margin,
        contentMaxWidth,
        sectionHeight,
    }
}

export {Block, useBlock}

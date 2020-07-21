import React, {useRef} from 'react'
import {Color} from 'three'
import {useThree} from 'react-three-fiber'
import Lightbar from './Lightbar'

function Lightbars(props) {
    const bars = useRef()

    const {viewport} = useThree()

    const height = props.green ? viewport.height * 5 : viewport.height * 3

    const barsStore = [
        {
            id: 'bar1',
            width: viewport.width / 10,
            height: height,
            color: new Color('#F84006'),
        },
        {
            id: 'bar2',
            width: viewport.width / 8,
            height: height,
            color: new Color('#E10906'),
        },
        {
            id: 'bar3',
            width: viewport.width / 7,
            height: height,
            color: new Color('#BA0301'),
        },
        {
            id: 'bar4',
            width: viewport.width / 4,
            height: height,
            color: new Color('#7A0707'),
        },
        {
            id: 'bar5',
            width: viewport.width / 1.5,
            height: height,
            color: new Color('#450202'),
        },
        {
            id: 'bar6',
            width: viewport.width / 1.3,
            height: height,
            color: new Color('#400303'),
        },

        {
            id: 'bar7',
            width: viewport.width / 12,
            height: height,
            color: new Color('#F84006'),
        },
        {
            id: 'bar8',
            width: viewport.width / 9,
            height: height,
            color: new Color('#E10906'),
        },
        {
            id: 'bar9',
            width: viewport.width / 6,
            height: height,
            color: new Color('#BA0301'),
        },
        {
            id: 'bar10',
            width: viewport.width / 3,
            height: height,
            color: new Color('#7A0707'),
        },
        {
            id: 'bar11',
            width: viewport.width / 1.5,
            height: height,
            color: new Color('#450202'),
        },
        {
            id: 'bar12',
            width: viewport.width / 1.3,
            height: height,
            color: new Color('#400303'),
        },
        {
            id: 'bar13',
            width: viewport.width / 13,
            height: height,
            color: new Color('#FB7A29'),
        },
        {
            id: 'bar14',
            width: viewport.width / 8,
            height: height,
            color: new Color('#E10906'),
        },
        {
            id: 'bar15',
            width: viewport.width / 5,
            height: height,
            color: new Color('#BA0301'),
        },
        {
            id: 'bar16',
            width: viewport.width / 3,
            height: height,
            color: new Color('#7A0707'),
        },
        {
            id: 'bar17',
            width: viewport.width / 1.5,
            height: height,
            color: new Color('#450202'),
        },
        {
            id: 'bar18',
            width: viewport.width / 1.3,
            height: height,
            color: new Color('#400303'),
        },
    ]

    const barsStore_Green = [
        {
            id: 'bar1',
            width: viewport.width / 10,
            height: height,
            color: new Color('#078C03'),
        },
        {
            id: 'bar2',
            width: viewport.width / 8,
            height: height,
            color: new Color('#055902'),
        },
        {
            id: 'bar3',
            width: viewport.width / 7,
            height: height,
            color: new Color('#01640A'),
        },
        {
            id: 'bar4',
            width: viewport.width / 4,
            height: height,
            color: new Color('#035302'),
        },
        {
            id: 'bar5',
            width: viewport.width / 1.5,
            height: height,
            color: new Color('#034001'),
        },
        {
            id: 'bar6',
            width: viewport.width / 1.3,
            height: height,
            color: new Color('#022601'),
        },

        {
            id: 'bar7',
            width: viewport.width / 12,
            height: height,
            color: new Color('#078C03'),
        },
        {
            id: 'bar8',
            width: viewport.width / 9,
            height: height,
            color: new Color('#055902'),
        },
        {
            id: 'bar9',
            width: viewport.width / 6,
            height: height,
            color: new Color('#01640A'),
        },
        {
            id: 'bar10',
            width: viewport.width / 3,
            height: height,
            color: new Color('#035302'),
        },
        {
            id: 'bar11',
            width: viewport.width / 1.5,
            height: height,
            color: new Color('#034001'),
        },
        {
            id: 'bar12',
            width: viewport.width / 1.3,
            height: height,
            color: new Color('#022601'),
        },
        {
            id: 'bar13',
            width: viewport.width / 13,
            height: height,
            color: new Color('#078C03'),
        },
        {
            id: 'bar14',
            width: viewport.width / 8,
            height: height,
            color: new Color('#055902'),
        },
        {
            id: 'bar15',
            width: viewport.width / 5,
            height: height,
            color: new Color('#01640A'),
        },
        {
            id: 'bar16',
            width: viewport.width / 3,
            height: height,
            color: new Color('#035302'),
        },
        {
            id: 'bar17',
            width: viewport.width / 1.5,
            height: height,
            color: new Color('#034001'),
        },
        {
            id: 'bar18',
            width: viewport.width / 1.3,
            height: height,
            color: new Color('#022601'),
        },
    ]

    let barsReturned

    if (props.green) {
        barsReturned = (
            <group ref={bars} {...props}>
                {barsStore_Green.map((bar) => (
                    <Lightbar key={bar.id} bar={bar} />
                ))}
            </group>
        )
    } else {
        barsReturned = (
            <group ref={bars} {...props}>
                {barsStore.map((bar) => (
                    <Lightbar key={bar.id} bar={bar} />
                ))}
            </group>
        )
    }

    return barsReturned
}

export default Lightbars

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
            color: new Color('#90EE90'),
        },
        {
            id: 'bar2',
            width: viewport.width / 8,
            height: height,
            color: new Color('#77dd77'),
        },
        {
            id: 'bar3',
            width: viewport.width / 7,
            height: height,
            color: new Color('#2e8b57'),
        },
        {
            id: 'bar4',
            width: viewport.width / 6,
            height: height,
            color: new Color('#035302'),
        },
        {
            id: 'bar5',
            width: viewport.width / 3.5,
            height: height,
            color: new Color('#00693e'),
        },
        {
            id: 'bar6',
            width: viewport.width / 3.3,
            height: height,
            color: new Color('#355e3b'),
        },

        {
            id: 'bar7',
            width: viewport.width / 12,
            height: height,
            color: new Color('#90EE90'),
        },
        {
            id: 'bar8',
            width: viewport.width / 9,
            height: height,
            color: new Color('#2e8b57'),
        },
        {
            id: 'bar9',
            width: viewport.width / 7,
            height: height,
            color: new Color('#355e3b'),
        },
        {
            id: 'bar10',
            width: viewport.width / 5,
            height: height,
            color: new Color('#035302'),
        },
        {
            id: 'bar11',
            width: viewport.width / 2.5,
            height: height,
            color: new Color('#1b4d3e'),
        },
        {
            id: 'bar12',
            width: viewport.width / 2.3,
            height: height,
            color: new Color('#4d5d53'),
        },
        {
            id: 'bar13',
            width: viewport.width / 13,
            height: height,
            color: new Color('#77dd77'),
        },
        {
            id: 'bar14',
            width: viewport.width / 8,
            height: height,
            color: new Color('#2e8b57'),
        },
        {
            id: 'bar15',
            width: viewport.width / 7,
            height: height,
            color: new Color('#355e3b'),
        },
        {
            id: 'bar16',
            width: viewport.width / 6,
            height: height,
            color: new Color('#1b4d3e'),
        },
        {
            id: 'bar17',
            width: viewport.width / 3.5,
            height: height,
            color: new Color('#4d5d53'),
        },
        {
            id: 'bar18',
            width: viewport.width / 3.3,
            height: height,
            color: new Color('#4d5d53'),
        },
    ]

    const barsStore_White = [
        {
            id: 'bar1',
            width: viewport.width / 10,
            height: height,
            color: new Color('#DCDCDC'),
        },
        {
            id: 'bar2',
            width: viewport.width / 8,
            height: height,
            color: new Color('#C0C0C0'),
        },
        {
            id: 'bar3',
            width: viewport.width / 7,
            height: height,
            color: new Color('#989898'),
        },
        {
            id: 'bar4',
            width: viewport.width / 4,
            height: height,
            color: new Color('#696969'),
        },
        {
            id: 'bar5',
            width: viewport.width / 1.5,
            height: height,
            color: new Color('#343434'),
        },
        {
            id: 'bar6',
            width: viewport.width / 1.3,
            height: height,
            color: new Color('#121212'),
        },

        {
            id: 'bar7',
            width: viewport.width / 12,
            height: height,
            color: new Color('#D3D3D3'),
        },
        {
            id: 'bar8',
            width: viewport.width / 9,
            height: height,
            color: new Color('#BEBEBE'),
        },
        {
            id: 'bar9',
            width: viewport.width / 6,
            height: height,
            color: new Color('#808080'),
        },
        {
            id: 'bar10',
            width: viewport.width / 3,
            height: height,
            color: new Color('#555555'),
        },
        {
            id: 'bar11',
            width: viewport.width / 1.5,
            height: height,
            color: new Color('#363636'),
        },
        {
            id: 'bar12',
            width: viewport.width / 1.3,
            height: height,
            color: new Color('#262626'),
        },
        {
            id: 'bar13',
            width: viewport.width / 13,
            height: height,
            color: new Color('#CDCDCD'),
        },
        {
            id: 'bar14',
            width: viewport.width / 8,
            height: height,
            color: new Color('#D6D6D6'),
        },
        {
            id: 'bar15',
            width: viewport.width / 5,
            height: height,
            color: new Color('#909090'),
        },
        {
            id: 'bar16',
            width: viewport.width / 3,
            height: height,
            color: new Color('#707070'),
        },
        {
            id: 'bar17',
            width: viewport.width / 1.5,
            height: height,
            color: new Color('#505050'),
        },
        {
            id: 'bar18',
            width: viewport.width / 1.3,
            height: height,
            color: new Color('#303030'),
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
    } else if (props.white) {
        barsReturned = (
            <group ref={bars} {...props}>
                {barsStore_White.map((bar) => (
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

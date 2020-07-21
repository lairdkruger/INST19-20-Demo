import {createRef} from 'react'

// sections: how many block sections there are
// pages: length of the scroll area (1 = 1vh)
const state = {
    sections: 17,
    pages: 17,
    zoom: 1,
    top: createRef(),
}

export default state

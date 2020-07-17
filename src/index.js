import {render} from 'react-dom'
import React, {useState, useEffect, useRef, Suspense} from 'react'
import {Canvas} from 'react-three-fiber'

import {Block} from './components/Blocks'
import HtmlContent from './components/HtmlContent'

import state from './store'
import './styles.css'
import FlatLighting from './components/lighting/FlatLighting'
import Postprocessing from './components/postprocessing/Postprocessing'

import Storm from './components/objects/Storm'
import Lightbars from './components/objects/Lightbars'

import BasicPlane from './components/media/BasicPlane'
import DistortPlane from './components/media/DistortPlane'

import TransitionPlane from './components/objects/TransitionPlane'
import BackgroundPlane from './components/objects/BackgroundPlane'
import VignettePlane from './components/objects/VignettePlane'

function App() {
    const [events, setEvents] = useState()
    const domContent = useRef()
    const scrollArea = useRef()
    // Scroll an area by updating state.top.current
    const onScroll = (e) => (state.top.current = e.target.scrollTop)
    useEffect(() => void onScroll({target: scrollArea.current}), [])

    // Flatten default camera
    const perspective = 800
    const fov = (180 * (2 * Math.atan(window.innerHeight / 2 / perspective))) / Math.PI

    return (
        <>
            <Canvas
                gl={{
                    alpha: true,
                    powerPreference: 'high-performance',
                    antialias: false,
                    stencil: false,
                    depth: false,
                }}
                onCreated={({gl, events}) => {
                    // Export canvas events, we will put them onto the scroll area (hovers, clicks etc)
                    setEvents(events)
                }}
                camera={{position: [0, 0, perspective], fov: fov}}
            >
                <FlatLighting />

                {/* Stationary (Menu) Block */}
                <Block factor={0.0} offset={0}>
                    <HtmlContent portal={domContent}>
                        <div className="side-text-box">
                            <h1 className="side-text">inst.19-20</h1>
                        </div>
                    </HtmlContent>
                </Block>

                {/* Lightbars */}
                <Block factor={1.0} offset={0}>
                    <Lightbars position={[0, 0, -5]} />
                    <VignettePlane color={'#000000'} />
                    <HtmlContent portal={domContent} className="section-box">
                        <div className="album-image-box">
                            <img
                                data-id="album_cover"
                                className="image-plane"
                                src="media/images/album_cover.jpg"
                                alt="album cover for Jack Woodbury's debut album inst.19-20"
                            />
                        </div>
                    </HtmlContent>
                    <Suspense
                        fallback={
                            <HtmlContent>
                                <h1>Loading Image</h1>
                            </HtmlContent>
                        }
                    >
                        <DistortPlane
                            src="media/images/album_cover.jpg"
                            image_id="album_cover"
                        />
                    </Suspense>
                </Block>

                {/* First Paragraph Block */}
                <Block factor={1.0} offset={1}>
                    <TransitionPlane />
                    <VignettePlane color={'#000000'} />

                    <HtmlContent portal={domContent} className="paragraph-section">
                        <p className="paragraph">
                            The works collected on inst.19-20 are derived from two
                            audiovisual installations created during 2019 and early 2020.
                            Titled -A Tree Falls- and -CORROSE-, these installations
                            explore and acoustically signify the compositional influence
                            of the audience and loudspeaker, respectively.
                        </p>
                        <p className="paragraph">
                            Installed, each work presents and disrupts a series of
                            electro-acoustic compositions. In A Tree Falls, this
                            disruption stems from the audience’s interaction with the
                            work. In CORROSE, by comparison, the disruption comes from
                            damaged and augmented loudspeakers. inst.19-20 gathers these
                            works, free of their installed and disrupted context.
                        </p>
                        <p className="paragraph">
                            inst.19-20's eight tracks were composed as part of Jack’s
                            Master of Fine Arts studies at the New Zealand School of
                            Music. The material is largely generated using processed
                            recordings of piano and tubular bells, alongside field
                            recordings of Wellington’s Ohariu Valley. Compositionally, the
                            album employs generative looping software, the juxtaposition
                            of noise/glitch and ambient material, and terraced dynamics.
                        </p>
                        <p className="paragraph">
                            A Tree Falls, one of the installations from which inst.19-20
                            is derived, was presented at the Australasian Computer Music
                            Conference in Melbourne in 2019. A paper discussing the work
                            was published at the International Computer Music Conference
                            in New York in 2019 (written in collaboration with composer Mo
                            Zareei).
                        </p>
                    </HtmlContent>
                </Block>

                {/* Short Intro */}
                <Block factor={1.0} offset={2}>
                    <HtmlContent portal={domContent} className="paragraph-section-right">
                        <p className="paragraph">
                            From here will be the different sections exploring the
                            different installations with accompanying videos / visual
                            things.
                        </p>
                    </HtmlContent>
                </Block>

                {/* Corrose  */}
                <Block factor={1.0} offset={3}>
                    <HtmlContent portal={domContent} className="paragraph-section-right">
                        <p className="paragraph">Paragraphs on Corrose.</p>

                        <div className="corrose-image-box">
                            <img
                                data-id="corrose-image"
                                className="image-plane"
                                src="media/images/corrose.jpg"
                                alt="album cover for Jack Woodbury's debut album inst.19-20"
                            />
                        </div>
                    </HtmlContent>

                    <Suspense
                        fallback={
                            <HtmlContent>
                                <h1>Loading Image</h1>
                            </HtmlContent>
                        }
                    >
                        <BasicPlane
                            src="media/images/corrose.jpg"
                            image_id="corrose-image"
                        />
                    </Suspense>
                </Block>

                {/* A Tree Falls */}
                <Block factor={1.0} offset={5}>
                    <HtmlContent portal={domContent} className="paragraph-section-right">
                        <p className="paragraph">Paragraphs on A Tree Falls.</p>

                        <div className="atf-image-box">
                            <img
                                data-id="atf-image"
                                className="image-plane"
                                src="media/images/a_tree_falls.jpg"
                                alt="album cover for Jack Woodbury's debut album inst.19-20"
                            />
                        </div>
                    </HtmlContent>

                    <Suspense
                        fallback={
                            <HtmlContent>
                                <h1>Loading Image</h1>
                            </HtmlContent>
                        }
                    >
                        <BasicPlane
                            src="media/images/a_tree_falls.jpg"
                            image_id="atf-image"
                        />
                    </Suspense>
                </Block>

                <Block factor={1.0} offset={7}>
                    <HtmlContent portal={domContent} className="paragraph-section-right">
                        <p className="paragraph">Infomation and background on Jack</p>
                    </HtmlContent>
                </Block>

                <Block factor={-1.0} offset={7}>
                    <HtmlContent portal={domContent} className="section-box">
                        <div className="profile-image-box">
                            <img
                                data-id="profile-image"
                                className="image-plane"
                                src="media/images/profile.jpg"
                                alt="album cover for Jack Woodbury's debut album inst.19-20"
                            />
                        </div>
                    </HtmlContent>
                    <Suspense
                        fallback={
                            <HtmlContent>
                                <h1>Loading Image</h1>
                            </HtmlContent>
                        }
                    >
                        <BasicPlane
                            src="media/images/profile.jpg"
                            image_id="profile-image"
                        />
                    </Suspense>
                </Block>

                <Block factor={1.0} offset={9}>
                    <VignettePlane color={'#000000'} />
                    <TransitionPlane upsideDown={true} />

                    <HtmlContent portal={domContent} className="paragraph-section-right">
                        <p className="paragraph">Links to buy album.</p>
                    </HtmlContent>
                </Block>

                {/* Lightbars */}
                <Block factor={1.0} offset={10}>
                    <Lightbars position={[0, 0, -5]} />
                </Block>

                {/* <Suspense fallback={null}>
                    <Postprocessing />
                </Suspense> */}
            </Canvas>

            {/* container with events */}
            <div className="scrollArea" ref={scrollArea} onScroll={onScroll} {...events}>
                {/* content container containing all html elements */}
                <div style={{position: 'sticky', top: 0}} ref={domContent} />
                {/* sizer for the scroll area */}
                <div style={{height: `${state.pages * 100}vh`}} />
            </div>
        </>
    )
}

render(<App />, document.querySelector('#root'))

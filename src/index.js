import {render} from 'react-dom'
import React, {useState, useEffect, useRef, Suspense} from 'react'
import {Canvas} from 'react-three-fiber'

import {Block} from './components/Blocks'
import HtmlContent from './components/HtmlContent'

import state from './store'
import './styles.css'
import FlatLighting from './components/lighting/FlatLighting'

import Lightbars from './components/objects/Lightbars'

import BasicPlane from './components/media/BasicPlane'
import DistortPlane from './components/media/DistortPlane'
import TwoImagePlane from './components/media/TwoImagePlane'

import TransitionPlane from './components/objects/TransitionPlane'
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
                    <HtmlContent portal={domContent} className="section-centered">
                        <p className="scroll-text">scroll</p>
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

                    <HtmlContent portal={domContent} className="section-centered">
                        <p className="opening-paragraph">
                            The works collected on inst.19-20 are derived from two
                            audiovisual installations created during 2019 and early 2020.
                            Titled “A Tree Falls” and “CORROSE” these installations
                            explore and acoustically signify the compositional influence
                            of the audience and loudspeaker, respectively.
                        </p>
                        <p className="opening-paragraph">
                            Installed, each work presents and disrupts a series of
                            electro-acoustic compositions. In A Tree Falls, this
                            disruption stems from the audience’s interaction with the
                            work. In CORROSE, by comparison, the disruption comes from
                            damaged and augmented loudspeakers.
                        </p>
                    </HtmlContent>
                </Block>

                {/* Short Intro */}
                <Block factor={1.0} offset={2}>
                    <HtmlContent portal={domContent} className="section-centered">
                        <p className="paragraph">
                            inst.19-20 gathers these works, free of their installed and
                            disrupted context.
                        </p>
                    </HtmlContent>
                </Block>

                {/* Corrose  */}
                {/* Corrose Title  */}
                <Block factor={1.0} offset={3.5}>
                    <HtmlContent portal={domContent} className="section-centered">
                        <p className="info-title">CORROSE</p>
                    </HtmlContent>
                </Block>

                <Block factor={-1.5} offset={3.5}>
                    <HtmlContent portal={domContent} className="section-centered">
                        <div className="project-main-image-box">
                            <img
                                data-id="corrose-main-image"
                                className="image-plane"
                                src="media/images/corrose_main.jpg"
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
                        <TwoImagePlane
                            src="media/images/black.png"
                            src_prev="media/images/corrose_main.jpg"
                            image_id="corrose-main-image"
                            continue
                        />
                    </Suspense>
                </Block>

                {/* Corrose Infomation 1 */}
                <Block factor={1.0} offset={5}>
                    <HtmlContent portal={domContent} className="section-centered">
                        <p className="info-paragraph">
                            CORROSE is an audiovisual installation comprised of eight
                            damaged and/or augmented loudspeaker drivers.
                        </p>

                        <div className="corrose-image-1">
                            <img
                                data-id="corrose-image-1"
                                className="image-plane"
                                src="media/images/corrose_1.jpg"
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
                        <TwoImagePlane
                            src="media/images/black.png"
                            src_prev="media/images/corrose_1.jpg"
                            image_id="corrose-image-1"
                        />
                    </Suspense>
                </Block>

                {/* Corrose Infomation 2 */}
                <Block factor={1.0} offset={6.5}>
                    <HtmlContent portal={domContent} className="section-centered">
                        <p className="info-paragraph invert">
                            CORROSE argues that all loudspeakers have a characteristic
                            sound, one that distorts a composition at the point of
                            listening. This impact is often subtle, but inherently limits
                            the composer's control. Through damage and augmentation,
                            however, their impact is rendered clearly audible.
                        </p>

                        <div className="corrose-image-2">
                            <img
                                data-id="corrose-image-2"
                                className="image-plane"
                                src="media/images/corrose_2.jpg"
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
                        <TwoImagePlane
                            src="media/images/black.png"
                            src_prev="media/images/corrose_2.jpg"
                            image_id="corrose-image-2"
                        />
                    </Suspense>
                </Block>

                {/* A Tree Falls  */}
                {/* A Tree Falls Title  */}
                <Block factor={1.0} offset={8.5}>
                    <TransitionPlane upsideDown />

                    <HtmlContent portal={domContent} className="section-centered">
                        <p className="info-title">A Tree Falls</p>
                    </HtmlContent>
                </Block>

                <Block factor={-1.5} offset={8.5}>
                    <HtmlContent portal={domContent} className="section-centered">
                        <div className="project-main-image-box">
                            <img
                                data-id="corrose-main-image"
                                className="image-plane"
                                src="media/images/atf_main.jpg"
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
                        <TwoImagePlane
                            src="media/images/black.png"
                            src_prev="media/images/atf_main.jpg"
                            image_id="corrose-main-image"
                            continue
                        />
                    </Suspense>
                </Block>

                {/* A Tree Falls Infomation 1  */}
                <Block factor={1.0} offset={10}>
                    <HtmlContent portal={domContent} className="section-centered">
                        <p className="info-paragraph">
                            A Tree Falls is a multichannel interactive audio installation,
                            a musing on the role of audience proximity in the soundscape
                            compositional process. It uses ultrasonic sensors to determine
                            an audience’s proximity to the loudspeaker array. When a
                            sensor is triggered, the array outputs glitch material to
                            signify the audience’s potentially destructive interaction.
                        </p>

                        <div className="atf-image-1">
                            <img
                                data-id="atf-image-1"
                                className="image-plane"
                                src="media/images/atf_1.jpg"
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
                        <TwoImagePlane
                            src="media/images/black.png"
                            src_prev="media/images/atf_1.jpg"
                            image_id="atf-image-1"
                        />
                    </Suspense>
                </Block>

                <Block factor={1.0} offset={10.5}>
                    <Lightbars position={[0, 0, -5]} green />
                </Block>

                {/* A Tree Falls Infomation 2  */}
                <Block factor={1.0} offset={11.5}>
                    <HtmlContent portal={domContent} className="section-centered">
                        <p className="info-paragraph invert">
                            The work's namesake is the thought experiment ‘if a tree falls
                            in the forest and no one is around to hear it, does it make a
                            sound?’ A Tree Falls argues that it is not so much a question
                            of the sound’s physical propagation, rather, whether the sound
                            phenomenologically changes if someone is ‘around to hear it.’
                        </p>

                        <div className="atf-image-2">
                            <img
                                data-id="atf-image-2"
                                className="image-plane"
                                src="media/images/atf_2.jpg"
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
                        <TwoImagePlane
                            src="media/images/black.png"
                            src_prev="media/images/atf_2.jpg"
                            image_id="atf-image-2"
                        />
                    </Suspense>
                </Block>

                <Block factor={1.0} offset={12.5}>
                    <TransitionPlane />
                </Block>

                {/* Jack */}
                <Block factor={1.0} offset={14}>
                    <HtmlContent portal={domContent} className="section-centered">
                        <div className="side-text-box-right">
                            <h1 className="side-text-right">about jack</h1>
                        </div>
                        <p className="paragraph">
                            Jack is an electro-acoustic composer and audio engineer based
                            in Wellington, New Zealand. His current practice engages with
                            the notion of compositional influence through audiovisual
                            installations. Jack recently completed a Master of Fine Arts
                            (Creative Practice) in Music at the Victoria University of
                            Wellington (New Zealand School of Music – Te Kōkī).
                        </p>
                        <p className="paragraph">
                            His work has been presented in the UK, USA, Australia, and New
                            Zealand.
                        </p>
                    </HtmlContent>
                </Block>

                <Block factor={-1.0} offset={14}>
                    <HtmlContent portal={domContent} className="section-centered">
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

                {/* Links To Buy */}
                <Block factor={1.0} offset={16}>
                    <VignettePlane color={'#000000'} />
                    <TransitionPlane upsideDown={true} />

                    <HtmlContent portal={domContent} className="section-centered">
                        <div className="support-text-box">
                            <p className="support-text">Support inst.19-20</p>
                            <a
                                className="support-text"
                                href="https://rattle-records.bandcamp.com/album/inst-19-20"
                                target="_blank"
                            >
                                here
                            </a>
                        </div>
                    </HtmlContent>
                </Block>

                {/* Lightbars */}
                <Block factor={1.0} offset={17}>
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

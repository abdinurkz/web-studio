import React, {useEffect, useRef} from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import {
    staggerText,
    staggerReveal,
    fadeInUp,
    handleHover,
    handleHoverExit,
    staggerRevealClose
} from './Animations'

// @ts-ignore
const Hamburger: React.FC = ({ state }) => {


    let menuLayer: any = useRef(null)
    let reveal1: any  = useRef(null)
    let reveal2: any | null = useRef(null)
    let line1: any  = useRef(null)
    let line2: any  = useRef(null)
    let line3: any  = useRef(null)

    useEffect(() => {
        if (state.clicked === false) {
            staggerRevealClose(reveal2, reveal1);
            gsap.to(menuLayer, { duration: 1, css: { display: 'none' } })
        } else if (
            state.clicked === true ||
            (state.clicked === true && state.initial === null)
        ) {
            gsap.to(menuLayer, { duration: 0, css: { display: 'block' } });
            gsap.to([reveal1, reveal2], {
                duration: 0,
                opacity: 1,
                height: '100%'
            });
            staggerReveal(reveal1, reveal2);
            staggerText(line1, line2, line3);
        }
    }, [state])

    return (
        <div ref={el => (menuLayer = el)} className='hamburger-menu'>
            <div
                ref={el => (reveal1 = el)}
                className='menu-secondary-background-color'
            />
            <div ref={el => (reveal2 = el)} className='menu-layer'>
                <div className='container'>
                    <div className='wrapper'>
                        <div className='menu-links'>
                            <nav>
                                <ul>
                                    <li>
                                        <Link
                                            onMouseEnter={e => handleHover(e)}
                                            onMouseOut={e => handleHoverExit(e)}
                                            ref={el => (line1 = el)}
                                            to='/opportunities'>
                                            Opportunities
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            onMouseEnter={e => handleHover(e)}
                                            onMouseOut={e => handleHoverExit(e)}
                                            ref={el => (line2 = el)}
                                            to='/solutions'>
                                            Solutions
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            onMouseEnter={e => handleHover(e)}
                                            onMouseOut={e => handleHoverExit(e)}
                                            ref={el => (line3 = el)}
                                            to='/contact-us'>
                                            Contact us
                                        </Link>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hamburger

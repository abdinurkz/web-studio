import gsap from 'gsap'
import React from 'react'


export const staggerReveal = (node1: React.ReactNode, node2: React.ReactNode) => {
    gsap.from([node1, node2], {
        duration: 0.8,
        height: 0,
        transformOrigin: 'right top',
        skewY: 2,
        ease: 'power3.inOut',
        stagger: {
            amount: 0.1
        }
    });
};

export const staggerRevealClose = (node1: React.ReactNode, node2: React.ReactNode) => {
    gsap.to([node1, node2], {
        duration: 0.8,
        height: 0,
        ease: 'power3.inOut',
        stagger: {
            amount: 0.07
        }
    });
};

export const staggerText = (node1: React.ReactNode, node2: React.ReactNode, node3: React.ReactNode) => {
    gsap.from([node1, node2, node3], {
        duration: 0.8,
        y: 100,
        delay: 0.1,
        ease: 'power3.inOut',
        stagger: {
            amount: 0.3
        }
    });
};

export const fadeInUp = (node: any) => {
    gsap.from(node, {
        y: 60,
        duration: 1,
        delay: 0.2,
        opacity: 0,
        ease: "power3.inOut"
    });
};

export const handleHover = (e: React.MouseEvent) => {
    gsap.to(e.target, {
        duration: 0.3,
        y: 3,
        skewX: 4,
        ease: 'power1.inOut'
    });
};

export const handleHoverExit = (e: React.MouseEvent) => {
    gsap.to(e.target, {
        duration: 0.3,
        y: -3,
        skewX: 0,
        ease: 'power1.inOut'
    });
};


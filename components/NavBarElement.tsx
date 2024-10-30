import React, { useEffect, useRef } from 'react'
import styles from '@/styles/NavBarElement_style/NavBarElement.module.css'
import { useRouter } from 'next/navigation'

let bI1 = true
let bI2 = true

const mainAnimLogic = (e: any, target: any, p: any, p1: any, scrollYParam_: number, index: number) => {
    if (window.innerWidth > 1000) {
        if (window.scrollY <= scrollYParam_ + 1200) {
            if (index === 1) { bI1 = true } else { bI2 = true }
            const checkFixedPos = () => { if (target.style.position == 'fixed') { target.style.top = null; target.style.position = 'relative' } }

            let element = {
                top: target.getBoundingClientRect().top,
                bottom: target.getBoundingClientRect().bottom
            }

            let x = (window.innerWidth <= 1450) ? 120 : 160
            const K = (window.innerWidth <= 1600) ? (window.innerWidth <= 1300) ? (window.innerWidth <= 1100) ? 0.2 : 0.3 : 0.4 : 0.5
            const K1 = (window.innerWidth <= 1450) ? (window.innerWidth <= 1200) ? 0.68 : 0.75 : 1

            let level = Math.ceil((window.scrollY - scrollYParam_) / 100)

            if (level <= 0) {
                target.style.opacity = 0
            }

            if (window.scrollY >= scrollYParam_) {
                if (level >= 1) {
                    target.style.opacity = 0.2

                    p.style.left = x + 'px'
                    p1.style.right = x + 'px'

                    checkFixedPos()
                }
                if (level >= 2) {
                    target.style.opacity = 0.6

                    checkFixedPos()
                }
                if (level >= 3) {
                    target.style.opacity = 1

                    if (index === 1) {
                        checkFixedPos()
                    } else {
                        if (element.top <= 450) {
                            if (target.style.position != 'fixed') {
                                target.style.top = `${450}px`
                                target.style.position = 'fixed'
                            }
                        }
                    }
                }

                if (level >= 4) {
                    p.style.left = x - (window.scrollY - scrollYParam_) * (K) + 'px'
                    p1.style.right = x - (window.scrollY - scrollYParam_) * (K1) + 'px'

                    if (index === 1) {
                        checkFixedPos()
                    }
                }
                if (level >= 5) {
                    if (index === 1) {
                        checkFixedPos()
                    }
                }
                if (level >= 6) {
                    if (index === 1) {
                        if (element.top <= 200) {
                            if (target.style.position != 'fixed') {
                                target.style.top = `${200}px`
                                target.style.position = "fixed"
                            }
                        }
                    }
                }
                if (level >= 11) {
                    p.style.left = (window.innerWidth <= 1750) ? ((window.innerWidth <= 1600) ? ((window.innerWidth) ? ((window.innerWidth <= 1300) ? ((window.innerWidth <= 1150) ? '-175px' : '-250px') : '-300px') : '-300px') : '-375px') : '-450px'
                    p1.style.right = (window.innerWidth <= 1750) ? ((window.innerWidth <= 1600) ? ((window.innerWidth) ? (window.innerWidth <= 1300) ? (window.innerWidth) ? '-575px' : '-650px' : '-750px' : '-850px') : '-925px') : '-1000px'
                }
            }
        } else {
            if (bI1 && index === 1) {
                bI1 = false
                target.style.opacity = 1
                target.style.position = "fixed"
                target.style.top = `${200}px`
                p.style.left = (window.innerWidth <= 1750) ? ((window.innerWidth <= 1600) ? ((window.innerWidth) ? ((window.innerWidth <= 1300) ? ((window.innerWidth <= 1150) ? '-175px' : '-250px') : '-300px') : '-300px') : '-375px') : '-450px'
                p1.style.right = (window.innerWidth <= 1750) ? ((window.innerWidth <= 1600) ? ((window.innerWidth) ? (window.innerWidth <= 1300) ? (window.innerWidth) ? '-575px' : '-650px' : '-750px' : '-850px') : '-925px') : '-1000px'
            }
            if (bI2 && index === 2) {
                bI2 = false
                target.style.opacity = 1
                target.style.position = "fixed"
                target.style.top = `${450}px`
                p.style.left = (window.innerWidth <= 1750) ? ((window.innerWidth <= 1600) ? ((window.innerWidth) ? ((window.innerWidth <= 1300) ? ((window.innerWidth <= 1150) ? '-175px' : '-250px') : '-300px') : '-300px') : '-375px') : '-450px'
                p1.style.right = (window.innerWidth <= 1750) ? ((window.innerWidth <= 1600) ? ((window.innerWidth) ? (window.innerWidth <= 1300) ? (window.innerWidth) ? '-575px' : '-650px' : '-750px' : '-850px') : '-925px') : '-1000px'
            }
        }
    }
}

const NavBarAnimation = (index: number, scrollYParam_: number) => {
    let target = document.getElementById('Mp_' + index)
    let p = document.getElementById('p_' + index)
    let p1 = document.getElementById('p1_' + index)

    mainAnimLogic(window, target, p, p1, scrollYParam_, index)

    window.addEventListener("resize", (e) => { bI1 = true; bI2 = true; mainAnimLogic(e, target, p, p1, scrollYParam_, index) })
    window.addEventListener("scroll", (e) => mainAnimLogic(e, target, p, p1, scrollYParam_, index))
}

interface NBE {
    index: number,
    image: string,
    scrollYParam: number
}

const NavBarElement = ({ index, image, scrollYParam }: NBE) => {

    let a = true

    useEffect(() => {
        if (a) {
            a = false
            NavBarAnimation(index, scrollYParam)
        }
    }, [])

    const { push } = useRouter()
    const ind = useRef(index)

    return (
        <div id={`main_${index}`} className={styles.main}>
            <div id={`Mp_${index}`} className={styles.submain}>
                <div onClick={() => { if (ind.current === 1) { push("/#main_1") } else { push("/#main_2") } }}>
                    <img id={`p_${index}`} className={`${styles.p} ${styles._p}`} src={image} />
                </div>
                <div>
                    <img id={`p1_${index}`} className={`${styles.p1} ${styles._p1}`} src="./static/web/p1.png" />
                </div>
            </div>
            <div className={styles.submain1}>
                <div onClick={() => { if (ind.current === 1) { push("/#main_1") } else { push("/#main_2") } }}>
                    <img className={`${styles.p} ${styles._p}`} src={image} />
                </div>
                <div>
                    <img className={`${styles.p1} ${styles._p1}`} src="./static/web/p1.png" />
                </div>
            </div>
        </div>
    )
}

export default NavBarElement

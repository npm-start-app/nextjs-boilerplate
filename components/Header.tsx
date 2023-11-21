import React, { useEffect, useRef } from 'react'
import styles from '@/styles/Header_style/Header.module.css'
import { useRouter } from 'next/navigation'

const parallaxEffect = (ref: any) => {
    const img: any = ref.current

    const particles = -20

    const speed = 0.05

    let positionX = 0, positionY = 0
    let coordXprocent = 0, coordYprocent = 0

    const setMouseParallaxStyle = () => {
        if (window.innerWidth > 1000) {
            if (scrollY <= 800) {
                const distX = coordXprocent - positionX
                const distY = coordYprocent - positionY

                positionX = positionX + (distX * speed)
                positionY = positionY + (distY * speed)

                img.style.cssText = `transform: translate(${positionX / particles}%, ${positionY / particles}%);`
            }
        }

        requestAnimationFrame(setMouseParallaxStyle)
    }
    setMouseParallaxStyle()

    window.addEventListener("mousemove", function (e) {
        if (window.innerWidth > 1000) {
            if (window.scrollY <= 800) {
                const parallaxWidth = img.offsetWidth
                const parallaxHeight = img.offsetHeight

                const coordX = e.pageX - parallaxWidth / 2
                const coordY = e.pageY - parallaxHeight / 2

                coordXprocent = coordX / parallaxWidth * 100
                coordYprocent = coordY / parallaxHeight * 100
            }
        }
    })
}

const Header = () => {

    let a = true

    const ref = useRef(null)
    
    useEffect(() => {
        if (a) {
            a = false
            parallaxEffect(ref)
        }
    }, [])

    const { push } = useRouter()

    return (
        <div className={styles.header}>
            <div className={styles.sectionDiv}>
                <section className={styles.firstSection}>
                    <img ref={ref} src="./static/web/f.png"/>
                    <div onClick={() => push("/#projects")} className={styles.book}>
                        <div className={styles.cover}></div>
                        <h2>Port- <span>folio</span></h2>
                        <span className={styles.writer}>Created By <i>Nons8ns</i></span>
                    </div>
                </section>
                <div className={styles.space}></div>
            </div>
        </div>
    )
}

export default Header

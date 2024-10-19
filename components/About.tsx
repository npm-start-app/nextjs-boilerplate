import React, { useEffect } from 'react'
import styles from '@/styles/About_style/About.module.css'

const mainAnimLogic = () => {
    const animItems = document.getElementsByClassName(styles._anim)

    if (animItems.length > 0) {
        const animOnScroll = () => {
            for (let index = 0; index < animItems.length; index++) {
                const animItem: any = animItems[index]
                const animItemHeight = animItem.offsetHeight
                const animItemoffset = offset(animItem).top
                const animStart = 4

                let animItemPoint = window.innerHeight - animItemHeight / animStart
                if (animItemHeight > window.innerHeight) {
                    animItemPoint = window.innerHeight - window.innerHeight / animStart
                }

                if ((pageYOffset - 150 > animItemoffset - animItemPoint) && pageYOffset + 150 < (animItemoffset + animItemHeight)) {
                    animItem.classList.add(styles["_active" + index])
                } else {
                    animItem.classList.remove(styles["_active" + index])
                }
            }
        }
        const offset = (el: any) => {
            const rect = el.getBoundingClientRect(),
                scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
                scrollTop = window.pageYOffset || document.documentElement.scrollTop
            return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
        }
        animOnScroll()
    }
}

const AboutAnimation = () => {
    mainAnimLogic()
    window.addEventListener("scroll", mainAnimLogic)
}

const About = () => {

    let a = true

    useEffect(() => {
        if (a) {
            a = false
            AboutAnimation()
        }
    }, [])

    return (
        <div id="about" className={styles.about}>
            <div className={styles.subAbout}>
                <div className={styles.ImgName}>
                    <img className={`${styles.avatar} ${styles._anim}`} src="./static/web/ll1.jpg" />
                    <div className={`${styles.name} ${styles._anim}`}>Nons8ns</div>
                </div>
                <div className={styles.textAbout}>
                    <div className={`${styles.specialize} ${styles._anim}`}>Programming Enthusiast</div>
                    <p className={`${styles.text} ${styles._anim}`}>An amateur programmer who has a lot of ideas, but as a rule, he takes on only some
                        of them due to his laziness. And those ideas that he took up are either incomplete or work
                        perfectly; there is no second truth and there cannot be</p>
                </div>
            </div>
        </div>
    )
}

export default About

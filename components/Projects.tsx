import React, { useEffect } from 'react'
import styles from '@/styles/Projects_style/Projects.module.css'

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

                if ((pageYOffset + 100 > animItemoffset - animItemPoint) && pageYOffset < (animItemoffset + animItemHeight)) {
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

const ProjectsAnimation = () => {
    mainAnimLogic()
    window.addEventListener("scroll", mainAnimLogic)
}

const Projects = () => {

    let a = true

    useEffect(() => {
        if (a) {
            a = false
            ProjectsAnimation()
        }
    }, [])

    return (
        <div id="projects" className={styles.Mprojects}>
            <div className={styles.projects}>
                <div className={`${styles.pr} ${styles.pr1} ${styles._anim}`}>
                    <div className={styles.prT}>
                        Data Base
                    </div>
                </div>
                <div className={`${styles.pr} ${styles.pr2} ${styles._anim}`}>
                    <div className={styles.prT}>
                        Math Service
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects

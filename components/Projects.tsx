import React, { useEffect, useRef } from 'react'
import styles from '@/styles/Projects_style/Projects.module.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDatabase } from '@fortawesome/free-solid-svg-icons'

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

const ProjectsAnimation = () => {
    mainAnimLogic()
    window.addEventListener("scroll", mainAnimLogic)
}

function getRandomInt(min: number, max: number) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
}

const Projects = () => {
    let dbTimer = 0
    let k = 1

    let a = true

    useEffect(() => {
        if (a) {
            a = false

            let dataBaseTextAnim = setInterval(() => {
                const abc = 'qwertyuiopasdfghjklzxcvbnm'
                const ABC = 'QWERTYUIOPASDFGHJKLZXCVBNM'
                const _123 = '123456789,./;\'"`\\:'

                const symbols = [abc, ABC, _123]

                dbTimer += (1 * k)

                for (let i = 0; i < 8; i++) {
                    let type = getRandomInt(0, 3)
                    document.getElementsByClassName('dataBase_span_' + i)[0].innerHTML = symbols[type][getRandomInt(0, symbols[type].length)]
                }

                let time = 5

                if (dbTimer > time * 14) {
                    k = -1
                }
                if (dbTimer < 0) {
                    k = 1
                }
                if (dbTimer > time * 10) {
                    document.getElementsByClassName('dataBase_span_7')[0].innerHTML = 'e'
                }
                if (dbTimer > time * 9) {
                    document.getElementsByClassName('dataBase_span_6')[0].innerHTML = 's'
                }
                if (dbTimer > time * 8) {
                    document.getElementsByClassName('dataBase_span_5')[0].innerHTML = 'a'
                }
                if (dbTimer > time * 7) {
                    document.getElementsByClassName('dataBase_span_4')[0].innerHTML = 'B'
                }
                if (dbTimer > time * 6) {
                    document.getElementsByClassName('dataBase_span_3')[0].innerHTML = 'a'
                }
                if (dbTimer > time * 5) {
                    document.getElementsByClassName('dataBase_span_2')[0].innerHTML = 't'
                }
                if (dbTimer > time * 4) {
                    document.getElementsByClassName('dataBase_span_1')[0].innerHTML = 'a'
                }
                if (dbTimer > time * 3) {
                    document.getElementsByClassName('dataBase_span_0')[0].innerHTML = 'D'
                }
            }, 100)

            ProjectsAnimation()
        }
    }, [])

    return (
        <div id="projects" className={styles.Mprojects}>
            <div className={`${styles.project} ${styles.project0}`} style={{ height: '500px' }}>
                <div className={styles.project0_text}>
                    <div className={styles.project0_text_0}>afafja<span className='dataBase_span_0' style={{ color: '#ffc200', fontSize: '20px' }}>D</span>lfoafopajfokajfmaopfw;kqpokrfoqjopjwfp<span className='dataBase_span_1' style={{ color: '#ffc200', fontSize: '20px' }}>a</span>;kl[]</div>
                    <div className={styles.project0_text_1}>pw<span className='dataBase_span_2' style={{ color: '#ffc200', fontSize: '20px' }}>t</span>3opo-0kfwek-0wel3[fakmwkomwssL<span className='dataBase_span_3' style={{ color: '#ffc200', fontSize: '20px' }}>a</span>555afajfoif32omoo</div>
                    <div className={styles.project0_text_2}>900-90-9<span className='dataBase_span_4' style={{ color: '#ffc200', fontSize: '20px' }}>B</span>-9))_(JOFAFANJOQMAKSN<span className='dataBase_span_5' style={{ color: '#ffc200', fontSize: '20px' }}>a</span>oihsdvbwjkenjiosjvdk</div>
                    <div className={styles.project0_text_3}>46578654..z.c,<span className='dataBase_span_6' style={{ color: '#ffc200', fontSize: '20px' }}>s</span>;lq4w4qa5s7cal;qascqw\q<span className='dataBase_span_7' style={{ color: '#ffc200', fontSize: '20px' }}>e</span>7clal;c,as;s</div>
                </div>
                <a className={`${styles._anim} ${styles.a}`} href='https://php-data-base.vercel.app/'>
                    <div className={`${styles.i} ${styles._anim}`}><FontAwesomeIcon icon={faDatabase} /></div>
                    <p className={`${styles.text} ${styles._anim}`}>DataBase</p>
                </a>
            </div>

            <div className={styles.project}>
                <div className={styles.project1_background}>
                    <img src='./static/web/port_img.png' />
                    <div className={styles.project1_background_text}>
                        <div className={`${styles.project1_text} ${styles._anim}`}>
                            Aeroscha: New Story
                        </div>
                        <div className={`${styles.project1_ver} ${styles._anim}`}>Version 0.1</div>
                        <button className={`${styles.project1_button} ${styles._anim}`}>Download (soon)</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects

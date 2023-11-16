import React from 'react'
import styles from '@/styles/About_style/About.module.css'

const About = () => {
    return (
        <div className={styles.about}>
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

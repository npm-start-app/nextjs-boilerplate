import React from 'react'
import styles from '@/styles/Header_style/Header.module.css'

const Header = () => {
    return (
        <div className={styles.header}>
            <div className={styles.sectionDiv}>
                <section className={styles.firstSection}>
                    <img id="gg" src="./static/web/f.png" />
                    <div className={styles.book}>
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

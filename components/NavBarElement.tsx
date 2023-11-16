import React from 'react'
import styles from '@/styles/NavBarElement_style/NavBarElement.module.css'

const NavBarElement = () => {
    return (
        <div id="main" className={styles.main}>
            <div id="Mp" className={styles.submain}>
                <div>
                    <img id="p" className={`${styles.p} ${styles._p}`} src="./static/web/pAbout.png" />
                </div>
                <div>
                    <img id="p1" className={`${styles.p1} ${styles._p1}`} src="./static/web/p1.png" />
                </div>
            </div>
        </div>
    )
}

export default NavBarElement

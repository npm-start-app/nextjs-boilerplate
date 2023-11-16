import React from 'react'
import styles from '@/styles/Projects_style/Projects.module.css'

const Projects = () => {
    return (
        <div className={styles.Mprojects}>
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

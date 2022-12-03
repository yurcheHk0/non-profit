import React from "react";

import { isMobile } from "react-device-detect";

import styles from "./Footer.module.scss"

export default
function Footer() {
    return <div className={`${styles.footer} ${isMobile ? styles.mobile : ''}`}>
        <div className={styles.left}>
            <div className={styles.logo} /> Перемога скоро, працюємо!  🇺🇦
        </div>
        <div className={styles.right}>
            <div className={styles.btn}>
                Підтримати
            </div>
        </div>

    </div>
}

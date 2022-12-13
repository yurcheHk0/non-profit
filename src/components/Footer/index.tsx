import React from "react";

import { isMobile } from "react-device-detect";

import styles from "./Footer.module.scss"

import AnchorLink from 'react-anchor-link-smooth-scroll';

export default
function Footer() {
    return <div className={`${styles.footer} ${isMobile ? styles.mobile : ''}`}>
        <div className={styles.left}>
            <div className={styles.logo} /> Перемога скоро, працюємо!  🇺🇦
        </div>
        <div className={styles.right}>
            <div className={styles.btn}>
            <AnchorLink href='#fundraising'>Підтримати</AnchorLink>
            </div>
        </div>

    </div>
}

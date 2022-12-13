import React from "react";

import { isMobile } from "react-device-detect";

import styles from "./header.module.scss";

import DesktopMenu from "./Menu/DesktopMenu";
import MobileMenu from "./Menu/MobileMenu";
import AnchorLink from 'react-anchor-link-smooth-scroll';

export default
function Header() {
    return <div className={`${styles.header} ${isMobile ? styles.mobile : ''}`}>
        <div className={styles.top}>
            <div className={styles.logo}>
                <div className={styles.icon} />
                <div className={styles.title}>
                    Не словом, а ділом. <br />
                    Фонд.
                </div>
            </div>
            {isMobile ? <MobileMenu /> : <DesktopMenu />}
        </div>
        <div className={styles.bottom}>
            <div className={styles.title}>
                Не словом, а ділом
            </div>
            <div className={styles.description}>
                Ми благодійна організація яка виникла як волонтерський рух, що допомогає військовим формуванням України та її громадянам
            </div>
            <div
                className={styles.button}
                onClick={() => console.log('Долучитися')}
            >
                 <AnchorLink href='#fundraising'>Долучитися</AnchorLink>
            </div>
            <div className={styles.arrow} >
                <AnchorLink href='#activity'></AnchorLink>
            </div>
        </div>
    </div>
}

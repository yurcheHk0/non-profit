import React from "react";

import { isMobile } from "react-device-detect";

import { BrowserView } from "react-device-detect";

import AnchorLink from 'react-anchor-link-smooth-scroll'

import styles from "./header.module.scss";

export default
function Header() {
    return <div className={`${styles.header} ${isMobile ? styles.mobile : ''}`}>
        <div className={styles.top}>
            <div className={styles.logo}>
                <div className={styles.icon} />
                <div className={styles.title}>
                    Не словом, а ділом. <br/>
                    Фонд.
                </div>
            </div>
            <BrowserView>
                <div className={styles.menu}>
                    <ul>
                        <li>
                            <AnchorLink href='#activity'>Наша діяльність</AnchorLink>
                        </li>
                        <li>
                            Збір коштів
                        </li>
                        <li>
                            <AnchorLink href='#team'>Команда</AnchorLink>
                        </li>
                        <li>
                            <AnchorLink href='#contacts'>Контакти</AnchorLink>
                        </li>
                        {/* <li>EN</li> */}
                    </ul>
                </div>
            </BrowserView>
        </div>
        <div className={styles.bottom}>
            <div className={styles.title}>
                Не словом, а ділом
            </div>
            <div className={styles.description}>
                Ми благодійна організація яка виникла як волонтерський рух, що допомогає військовим формуванням України та її громадянам
            </div>
            <div className={styles.button}>
                Долучитися
            </div>
            <div className={styles.arrow}/>
        </div>
    </div>
}

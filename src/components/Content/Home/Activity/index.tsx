import React from "react";

import { isMobile } from "react-device-detect";

import styles from "./Activity.module.scss";

export default function Activity() {
    return <div id={'activity'} className={`${styles.activity} ${isMobile ? styles.mobile : ''}`}>
        <h2>Наша діяльність</h2>

        <div className={styles.shortDesc}>
            Наш фонд працює по офіційних запитах від військових<br/>
            формувань, а також від боагодійних/громадських організацій.<br/>
            Ми допомагаєто власними зусиллями по збору коштів<br/>
            та організації волонтерської діяльності.
        </div>

        <div className={styles.stat}>
            <div className={styles.table}>
                <div className={styles.title}>
                    2 млн+ грн
                </div>
                <div className={styles.description}>
                    Передано на потреби армії
                </div>
            </div>

            <div className={styles.table}>
                <div className={styles.title}>
                    20+ тон
                </div>
                <div className={styles.description}>
                    Гуманітарної допомоги перевезено
                </div>
            </div>

            <div className={styles.table}>
                <div className={styles.title}>
                    5 авто
                </div>
                <div className={styles.description}>
                    Передано на потреби армії
                </div>
            </div>
            <div className={styles.table}>
                <div className={styles.title}>

                </div>
                <div className={styles.description}>
                    А також: 3 ноутбуки, 10 тепловізорів, 5 ПНІ, 1 дальномір, теплий одяг
                </div>
            </div>
        </div>
    </div>
}

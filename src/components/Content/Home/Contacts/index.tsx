import React from "react";

import { isMobile } from "react-device-detect";

import styles from "./Contacts.module.scss";

export default function Contacts() {
    //@TODO: use context provider istead
    //@TODO: move list info to the mapper
    return <div id={'contacts'} className={`${styles.contacts} ${isMobile ? styles.mobile : ''}`}>
        <h2>
            Контакти
        </h2>
        <div className={styles.text}>
            По будь-яких питаннях звертайтеся
        </div>
        <div className={styles.list}>
            <div className={styles.row}>
                <div className={styles.type}>
                    Пошта:
                </div>
                <div className={styles.value}>
                    niwbid@gmail.com
                </div>
            </div>
            <div className={styles.row}>
                <div className={styles.type}>
                    Телефони:
                </div>
                <div className={styles.value}>
                    +380937717022
                </div>
            </div>
            <div className={styles.row}>
                <div className={styles.type}>
                    Месенджери:
                </div>
                <div className={styles.value}>
                    +380937717022
                </div>
            </div>
        </div>
    </div>
}

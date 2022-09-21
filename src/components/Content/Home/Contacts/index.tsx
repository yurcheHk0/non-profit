import React from "react";

import styles from "./Contacts.module.scss";

export default function Contacts({}) {
    return <div className={styles.contacts}>
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
                    +380999999999
                </div>
            </div>
            <div className={styles.row}>
                <div className={styles.type}>
                    Месенджери:
                </div>
                <div className={styles.value}>
                    +380999999999
                </div>
            </div>
        </div>
    </div>
}

import React from "react";

import styles from "./header.module.scss";

export default
function Header(
    {

    }
) {
    return <div className={styles.header}>
        <div className={styles.top}>
            <div className={styles.logo}>
                <div className={styles.icon} />
                <div className={styles.title}>
                    Не словом, а ділом. <br/>
                    Фонд.
                </div>
            </div>
            <div className={styles.menu}>
                <ul>
                    <li>Наша діяльність</li>
                    <li>Збір коштів</li>
                    <li>Команда</li>
                    <li>Контакти</li>
                    <li>EN</li>
                </ul>
            </div>
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

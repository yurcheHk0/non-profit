import React from "react";
import styles from "./Footer.module.scss"

export default
function Footer(
    {

    }
) {
    return <div className={styles.footer}>
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

import React from "react";

import styles from "./SocialNetworks.module.scss";

export default function SocialNetworks({}) {
    return <div className={styles.social}>
        <h2>
            ми в соціальних мережах
        </h2>
        <div className={styles.grid}>
            <div className={styles.img1} />
            <div className={styles.img2} />
            <div className={styles.img3} />
            <div className={styles.img4} />
            <div className={styles.img5} />
            <div className={styles.img6} />
            <div className={styles.img7} />
            <div className={styles.img8} />
        </div>
        <div className={styles.links}>
            Instagram: <a href={''}>niwbid</a><br/>
            Facebook: <a href={''}>Не словом а ділом</a>
        </div>
    </div>
}

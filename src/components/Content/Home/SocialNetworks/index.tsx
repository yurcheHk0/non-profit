import React from "react";

import { isMobile } from "react-device-detect";

import styles from "./SocialNetworks.module.scss";

export default function SocialNetworks() {
    return <div className={`${styles.social} ${isMobile ? styles.mobile : ''}`}>
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
            <div className={styles.img9} />
            <div className={styles.img10} />
            <div className={styles.img11} />
            <div className={styles.img12} />
        </div>
        <div className={styles.links}>
            <span>
                Instagram: <a target="blank" href={'https://www.instagram.com/niwbid/'}>niwbid</a><br/>
            </span> 
            <span>
                Facebook: <a target="blank" href={'https://www.facebook.com/niwbid'}>Не словом а ділом</a>
            </span>
            <span>
                Telegram: <a target="blank" href={'https://t.me/not_in_word_but_in_deed'}>@not_in_word_but_in_deed</a>
            </span>
            
            
        </div>
    </div>
}

import React from "react";

import styles from "./Fundraising.module.scss";

import { isMobile } from "react-device-detect";

import { detailsMap } from "./bankDetailsMapper";

export default
    function Fundraising() {
    return <div
        id='fundraising'
        className={`${styles.fundraising} ${isMobile ? styles.mobile : ''}`}
    >
        <div className={styles.mainPadding}>
            <h2>Збір коштів</h2>
            <div className={styles.description}>
                Наш фонд працює по офіційним запитам від військових формувань, а також від благодійних/громадських організацій. Ми допомагаєто власними зусиллями по збору коштів та організації волонтерської діяльності.
                <br /><br />
                Залучаємо всіх не байдужих прийняти участь в допомозі!
            </div>
            <div className={styles.donate}>
                <div className={styles.title}>
                    Зробити разовий внесок:
                </div>

                <div className={styles.btnWrap}>
                    <div
                        className={styles.btn}
                        onClick={() => console.log('Переказ з картки')}
                    >
                        Переказ з картки
                    </div>
                    <div
                        className={styles.btn}
                        onClick={() => console.log('Банка МОНО')}
                    >
                        Банка МОНО
                    </div>
                </div>
            </div>
            <div className={styles.paypal}>
                <div className={styles.title}>
                    PayPal:
                </div>

                <div>
                    denys.tarasov@gmail.com
                </div>
            </div>
            <div className={styles.details}>
                <div className={styles.title}>
                    Переказ за реквізитами:
                </div>
                <div className={styles.fieldsWrap}>
                    {detailsMap.map((s) => {
                        return <div
                            className={styles.fields}
                            key={s.title}
                        >
                            <div className={styles.title}>{s.title}</div>
                            {s?.value?.map(i => {
                                return <div
                                    className={styles.field}
                                    key={i.name}
                                >
                                    <div>
                                        {i.name}
                                    </div>
                                    <div>
                                        {i.value}
                                    </div>
                                </div>
                            })}
                        </div>
                    })}
                </div>
            </div>
        </div>
    </div>
}
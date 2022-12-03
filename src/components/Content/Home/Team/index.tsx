import React from "react";

import { isMobile } from "react-device-detect";

import styles from "./Team.module.scss";

export default function Team() {
    return <div id={'team'} className={`${styles.team} ${isMobile ? styles.mobile : ''}`}>
        <h2>Команда</h2>

        <div className={styles.grid}>
            <div className={styles.member}>
                <div className={styles.iconDenis} />
                <div className={styles.name}>
                    Денис Тарасов
                </div>
                <div className={styles.role}>
                    засновник
                </div>
            </div>

            <div className={styles.member}>
                <div className={styles.iconDenis} />
                <div className={styles.name}>
                    Олексій Оленюк
                </div>
                <div className={styles.role}>
                    роль
                </div>
            </div>

            <div className={styles.member}>
                <div className={styles.iconDenis} />
                <div className={styles.name}>
                    Андрій Кіктенко
                </div>
                <div className={styles.role}>
                    роль
                </div>
            </div>

            <div className={styles.member}>
                <div className={styles.iconDenis} />
                <div className={styles.name}>
                    Олег Павленко
                </div>
                <div className={styles.role}>
                    роль
                </div>
            </div>

            <div className={styles.member}>
                <div className={styles.iconDenis} />
                <div className={styles.name}>
                    Олег Барило
                </div>
                <div className={styles.role}>
                    роль
                </div>
            </div>

            <div className={styles.member}>
                <div className={styles.iconDenis} />
                <div className={styles.name}>
                    Сергій Ніколаєв
                </div>
                <div className={styles.role}>
                    роль
                </div>
            </div>

            <div className={styles.member}>
                <div className={styles.iconDenis} />
                <div className={styles.name}>
                    Юрій Юрченко
                </div>
                <div className={styles.role}>
                    роль
                </div>
            </div>

            <div className={styles.member}>
                <div className={styles.iconDenis} />
                <div className={styles.name}>
                    Ірина Петрова
                </div>
                <div className={styles.role}>
                    роль
                </div>
            </div>

            <div className={styles.member}>
                <div className={styles.iconDenis} />
                <div className={styles.name}>
                    Анна Баранова
                </div>
                <div className={styles.role}>
                    дизайнер
                </div>
            </div>
        </div>
    </div>
}

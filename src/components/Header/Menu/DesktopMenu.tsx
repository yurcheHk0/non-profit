import React from "react";

import styles from "./menu.module.scss";

import AnchorLink from 'react-anchor-link-smooth-scroll';

export default function DesktopMenu() {
    return <div className={styles.menu}>
        <ul>
            <li>
                <AnchorLink href='#activity'>Наша діяльність</AnchorLink>
            </li>
            <li>
                <AnchorLink href='#fundraising'>Збір коштів</AnchorLink>
            </li>
            <li>
                <AnchorLink href='#team'>Команда</AnchorLink>
            </li>
            <li>
                <AnchorLink href='#contacts'>Контакти</AnchorLink>
            </li>
        </ul>
    </div>
}
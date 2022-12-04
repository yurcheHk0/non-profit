import React from "react";

import { slide as Menu } from 'react-burger-menu';

import AnchorLink from 'react-anchor-link-smooth-scroll';

var bgstyles = {
    bmBurgerButton: {
        position: 'absolute',
        width: '30px',
        height: '24px',
        right: '25px',
        top: '36px'
    },
    bmBurgerBars: {
        background: '#ffffff'
    },
    bmBurgerBarsHover: {
        background: '#a90000'
    },
    bmCrossButton: {
        height: '24px',
        width: '24px'
    },
    bmCross: {
        background: '#ffffff'
    },
    bmMenuWrap: {
        position: 'fixed',
        height: '100%',
        top: '0'
    },
    bmMenu: {
        background: '#373a47',
        padding: '2.5em 1.5em 0',
        fontSize: '1.15em'
    },
    bmMorphShape: {
        fill: '#373a47'
    },
    bmItemList: {
        color: '#b8b7ad',
        padding: '0.8em'
    },
    bmItem: {
        display: 'block',
        paddingBottom: '15px'
    },
    bmOverlay: {
        background: 'rgba(0, 0, 0, 0.3)'
    }
}

export default function MobileMenu() {
    return <Menu right styles={bgstyles} >
        <AnchorLink href='#activity'>Наша діяльність</AnchorLink>
        <AnchorLink href='#fundraising'>Збір коштів</AnchorLink>
        <AnchorLink href='#team'>Команда</AnchorLink>
        <AnchorLink href='#contacts'>Контакти</AnchorLink>
    </Menu>
}
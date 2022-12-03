import React from "react";

import { isMobile } from "react-device-detect";

import styles from "./Team.module.scss";

import { TeamMemberMapper } from "./members";

export default function Team() {
    return <div id={'team'} className={`${styles.team} ${isMobile ? styles.mobile : ''}`}>
        <h2>Команда</h2>
        
        <div className={styles.grid}>
            {TeamMemberMapper?.map((member) => {
                return <div 
                    className={styles.member}
                    key={member.name}
                 >
                    <div 
                        className={styles.icon}
                        style={{backgroundImage: `url(${member?.icon!})`}}
                     />
                    <div className={styles.name}>
                        {member.name}
                    </div>
                    <div className={styles.role}>
                        {member.role}
                    </div>
                </div>
            })}
        </div>
    </div>
}

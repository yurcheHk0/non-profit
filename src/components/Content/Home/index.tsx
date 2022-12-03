import React from "react";

import Activity from "./Activity";
import SocialNetworks from "./SocialNetworks";
import Team from "./Team";
import Contacts from "./Contacts";

export default
function Home() {
    return <div>
        <Activity />
        <SocialNetworks />
        <Team />
        <Contacts />
    </div>
}

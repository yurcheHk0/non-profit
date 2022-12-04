import React from "react";

import Activity from "./Activity";
import SocialNetworks from "./SocialNetworks";
import Team from "./Team";
import Contacts from "./Contacts";
import Fundraising from "./Fundraising";

export default
function Home() {
    return <div>
        <Activity />
        <SocialNetworks />
        <Fundraising />
        <Team />
        <Contacts />
    </div>
}

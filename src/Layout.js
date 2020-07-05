import React from "react";
import Panel from "popo-react-panel";
function Layout() {
    const style1 = {
        width: '100%',
        height: '100%',
        margin: 0,
        padding: 0,
    }
    return (
        <div id='container' style={style1}>
            <Panel target="1"><div>455</div></Panel>
        </div>
    );
}

export default Layout
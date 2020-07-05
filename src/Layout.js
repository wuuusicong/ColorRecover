import React from "react";
import Panel from "popo-react-panel";
import {Button} from "antd";
function Layout({imgSrc}) {
    const style1 = {
        width: '100%',
        height: '100%',
        margin: 0,
        padding: 0,
    }
    return (
        <div id='container' style={style1}>
            <Panel target="1">
                <div className="flex-container-row">
                    <Button type="default" className="flex-item-2">Load Image</Button>
                    <Button type="default" className="flex-item-2">Color Picker</Button>
                </div>
            </Panel>
            <Panel target="2">
                <img className="item-fill" src={imgSrc}/>
            </Panel>
        </div>
    );
}

export default Layout
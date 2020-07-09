import React from "react";
import Panel from "popo-react-panel";
import {Button,Upload,message} from "antd";
function Layout({imgSrc,data,getData}) {
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
                    <Upload className="flex-item-2" {...getData()} >
                        <Button  type="default" className="item-fill">
                            Image Load
                        </Button>
                    </Upload>
                    <Button type="default" className="flex-item-2">Color Picker</Button>
                </div>
            </Panel>
            <Panel target="2">
                {/*<canvas className="item-fill" id="canvas"/>*/}
                <div className="item-fill flex-item-2-fll">
                    <img src={imgSrc} className="item-fill-1"/>
                </div>
            </Panel>
            <Panel target="4">
                <div id="3Dmain" className="item-fill">
                </div>
            </Panel>
        </div>
    );
}

export default Layout
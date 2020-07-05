import React,{Component} from "react";
import Layout from "./Layout";
import *as P from "popojs"
class LayoutContainer extends Component{
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        const layout = P.init({
            container:'container',
            rows:24,
            cols:24,
            layout: [
                [24,[[8,[2,11,11]],[16]]]
            ],
            dev:{
                enable:true,
                panel:{
                    enable: true,
                    background:'#ccc'
                },
                guideline:{
                    show: true
                }
            },
            panel: {
                enable: true,
                custom: [
                    {panels: [1]}
                ]
            },
        })
    }
    render() {
        const style = {width:'100%',height:'100%'}
        return <Layout/>
    }
}
export default LayoutContainer
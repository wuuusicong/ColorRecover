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
            rows:12,
            cols:24,
            layout: [
                [12,[[8,[2,5,5]],[16]]]
            ],
            dev:{
                enable:true,
                panel:{
                    enable: true,
                    background:'grey'
                },
                guideline:{
                    show: true
                }
            }
        })
    }
    render() {
        const style = {width:'100%',height:'100%'}
        return <Layout/>
    }
}
export default LayoutContainer
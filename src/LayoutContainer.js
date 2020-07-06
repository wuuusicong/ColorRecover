import React,{Component} from "react";
import Layout from "./Layout";
import *as P from "popojs";
import echartsGL from 'echarts-gl'
import *as echarts from "echarts"
import *as d3 from  "d3"
import {message} from "antd";
import *as axios from "axios"


class LayoutContainer extends Component{
    constructor(props) {
        super(props);
        let UpProps = {
            accept:'.jpg,.png',
            name: 'file',
            action: 'http://127.0.0.1:5000/',
            method: 'GET',
            onChange(info) {
                if (info.file.status !== 'uploading') {
                    console.log(info.file, info.fileList);
                }
                if (info.file.status === 'done') {
                    message.success(`${info.file.name} file uploaded successfully`);
                } else if (info.file.status === 'error') {
                    message.error(`${info.file.name} file upload failed.`);
                }
            },
        };
        this.state = {
         imgSrc:"test3.png",
         UpProps
        }
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
        });
        const that = this;
        d3.json("table.json").then((data)=>{
            let symbolSize = 2.5;
            echarts.init(document.getElementById("3Dmain")).setOption({
                grid3D: {},
                xAxis3D: {
                    type: 'category'
                },
                yAxis3D: {},
                zAxis3D: {},
                dataset: {
                    dimensions: [
                        'Income',
                        'Life Expectancy',
                        'Population',
                        'Country',
                        {name: 'Year', type: 'ordinal'}
                    ],
                    source: data
                },
                series: [
                    {
                        type: 'scatter3D',
                        symbolSize: symbolSize,
                        encode: {
                            x: 'Country',
                            y: 'Life Expectancy',
                            z: 'Income',
                            tooltip: [0, 1, 2, 3, 4]
                        }
                    }
                ]
            })
        })
    }
    render() {
        const style = {width:'100%',height:'100%'}
        return <Layout imgSrc={this.state.imgSrc} data={this.state.data} UpProps={this.state.UpProps}/>
    }
}
export default LayoutContainer
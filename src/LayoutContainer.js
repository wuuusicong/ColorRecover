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
        this.draw3D = this.draw3D.bind(this);
        this.getData = this.getData.bind(this);
        this.drwaCanvas = this.drwaCanvas.bind(this);
        this.state = {
         imgSrc:"",
        }
    }
    componentDidMount() {
        console.log("didi")
        console.log(this.state);
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
    }
    getData(){
        const _this = this;
        const UpProps = {
            accept:'.jpg,.png',
            name: 'file',
            action: 'http://127.0.0.1:5000/',
            method: 'POST',
            defaultFileList:[],
            onChange(info) {
                if (info.file.status !== 'uploading') {
                }
                if (info.file.status === 'done') {
                    console.log(info.file.response)
                    message.success(`${info.file.name} file uploaded successfully`);
                    axios.post('http://127.0.0.1:5000/file',{
                            imgName:info.file.response['name']
                    }).then(data=>{
                        _this.setState({
                            ..._this.state,
                            imgSrc: 'http://127.0.0.1:5000'+ info.file.response['url'],
                            RGBData:data["data"]
                        })
                    })
                } else if (info.file.status === 'error') {
                    message.error(`${info.file.name} file upload failed.`);
                }
            }
        };
        return UpProps;
    }
    drwaCanvas(){
        let cvs = document.getElementById("canvas");
        let imgObj = new Image()
        imgObj.src = this.state.imgSrc;
        console.log(imgObj);
        imgObj.onload = function () {
            let ctx = cvs.getContext('2d')
            ctx.drawImage(this,50,0)
        }
    }

    draw3D(data){
        // this.drwaCanvas()
        console.log("3DData");
        let symbolSize = 2.5;
        let name = ['R','G','B'];
        let copyData = data["data"]
        let realData = data["data"]
        realData.unshift(name)
        console.log(realData)
        echarts.init(document.getElementById("3Dmain")).setOption({
            grid3D: {},
            xAxis3D: {
            },
            yAxis3D: {},
            zAxis3D: {},
            dataset: {
                dimensions: [
                    'R',
                    'G',
                    'B',
                ],
                source: realData
            },
            series: [
                {
                    type: 'scatter3D',
                    symbolSize: symbolSize,
                    encode: {
                        x: 'R',
                        y: 'G',
                        z: 'B',
                        tooltip: [0,1,2]
                    }
                }
            ],
            itemStyle:{
                color: (data)=>{
                    return `rgb(${data["value"][0]},${data["value"][1]},${data["value"][2]})`
                }
            }
        })
    }
    render() {
        console.log(1234)
        console.log(this.state)
        if(this.state.RGBData){
            this.draw3D(this.state.RGBData)
        }
        const style = {width:'100%',height:'100%'}
        return <Layout imgSrc={this.state.imgSrc} data={this.state.data} getData = {this.getData}/>
    }
}
export default LayoutContainer
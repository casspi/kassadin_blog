import React ,{useState,useEffect} from 'react'
import '../public/style/pages/header.css'
import {Row,Col,Menu,Icon} from 'antd'
import Router from 'next/router'
import Link from 'next/link'
import axios from 'axios'
import  servicePath  from '../config/apiUrl'
const Header=()=>{

    const [navArray , setNavArray] = useState([])
    useEffect(()=>{

        const fetchData = async ()=>{
           const result= await axios(servicePath.getTypeInfo).then(
                (res)=>{
                    setNavArray(res.data.data)
                    return res.data.data
                }
              )
           setNavArray(result)
        }
        fetchData()


    },[])
    //跳转到列表页
    const handleClick = (e)=>{
        if(e.key==0){
            Router.push('/index')
        }else{
            Router.push('/list?id='+e.key)
        }


    }

    return <div className="header">
        <Row type="flex" justify="center">
            <Col xs={24} sm={24} md={10} lg={10} xl={10}>
                <span className="logo-img">Kassadin</span>    
                <span className="logo-text">二手程序员</span>
            </Col>
            <Col className="memu-div" xs={0} sm={0} md={14} lg={8} xl={6}>
                <Menu  mode="horizontal" onClick={handleClick}>
                    <Menu.Item key="home" key="0">
                        <Icon type="home" />
                        首页
                    </Menu.Item>
                    {
                           navArray.map((item)=>{
                            return(
                                <Menu.Item key={item.Id}>
                                    <Icon type={item.icon} />
                                    {item.typeName}
                                </Menu.Item>
                            )
                           }) 
                        }
                </Menu>
            </Col>
        </Row>
    </div>

}

export default Header


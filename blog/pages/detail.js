import React,{useState} from 'react'
import Head from 'next/head'
import {Row, Col , Icon ,Breadcrumb,Affix} from 'antd'
import axios from "axios"

import Header from '../components/Header'
import Author from '../components/Author'
import Advert from '../components/Advert'
import Footer from '../components/Footer'
import '../public/style/pages/detail.css'
import ReactMarkdown from 'react-markdown'
import MarkNav from 'markdown-navbar';
import 'markdown-navbar/dist/navbar.css';
import marked from "marked"
import hljs from "highlight.js"
import 'highlight.js/styles/monokai-sublime.css'
import Tocify from '../components/tocify.tsx'
import servicePath from '../config/apiUrl'
// let markdown='# P01:课程介绍和环境搭建\n' +
//   '[ **M** ] arkdown + E [ **ditor** ] = **Mditor**  \n' +
//   '> Mditor 是一个简洁、易于集成、方便扩展、期望舒服的编写 markdown 的编辑器，仅此而已... \n\n' +
//    '**这是加粗的文字**\n\n' +
//   '*这是倾斜的文字*`\n\n' +
//   '***这是斜体加粗的文字***\n\n' +
//   '~~这是加删除线的文字~~ \n\n'+
//   '\`console.log(111)\` \n\n'+
//   '# p02:来个Hello World 初始Vue3.0\n' +
//   '> aaaaaaaaa\n' +
//   '>> bbbbbbbbb\n' +
//   '>>> cccccccccc\n'+
//   '***\n\n\n' +
//   '# p03:Vue3.0基础知识讲解\n' +
//   '> aaaaaaaaa\n' +
//   '>> bbbbbbbbb\n' +
//   '>>> cccccccccc\n\n'+
//   '# p04:Vue3.0基础知识讲解\n' +
//   '> aaaaaaaaa\n' +
//   '>> bbbbbbbbb\n' +
//   '>>> cccccccccc\n\n'+
//   '# p05:Vue3.0基础知识讲解\n' +
//   '> aaaaaaaaa\n' +
//   '>> bbbbbbbbb\n' +
//   '>>> cccccccccc\n\n'+
//   '# p06:Vue3.0基础知识讲解\n' +
//   '> aaaaaaaaa\n' +
//   '>> bbbbbbbbb\n' +
//   '>>> cccccccccc\n\n'+
//   '# p07:Vue3.0基础知识讲解\n' +
//   '> aaaaaaaaa\n' +
//   '>> bbbbbbbbb\n' +
//   '>>> cccccccccc\n\n'+
//   '``` var a=11; ```'

const Detail = (props) => {

  const renderer = new marked.Renderer();
  const tocify = new Tocify()
  renderer.heading = function(text, level, raw) {
    const anchor = tocify.add(text, level);
    return `<a id="${anchor}" href="#${anchor}" class="anchor-fix"><h${level}>${text}</h${level}></a>\n`;
  };
  marked.setOptions({
    renderer: renderer,
    gfm: true,
    pedantic: false,
    sanitize: false,
    tables: true,
    breaks: false,
    smartLists:true,
    highlight:function(code){
      return hljs.highlightAuto(code).value;
    }
  })
  
  let html = marked(props.article_content);
  return <div>
    <Head>
      <title>Detail</title>
      <link rel='icon' href='/favicon.ico' />
    </Head>
    <Header />
    <Row className="comm-main" type="flex" justify="center">
      <Col className="comm-left" xs={24} sm={24} md={16} lg={18} xl={14}>
        <div>
            <div className="bread-div">
              <Breadcrumb>
                <Breadcrumb.Item><a href="/">首页</a></Breadcrumb.Item>
                <Breadcrumb.Item><a href="/list">视频列表</a></Breadcrumb.Item>
                <Breadcrumb.Item>xxx</Breadcrumb.Item>
              </Breadcrumb>
            </div>
            <div>
                <div className="detailed-title">
                React实战视频教程-技术胖Blog开发(更新08集)
                </div>
            
                <div className="list-icon center">
                  <span><Icon type="calendar" /> 2019-06-28</span>
                  <span><Icon type="folder" /> 视频教程</span>
                  <span><Icon type="fire" /> 5498人</span>
                </div>
              
                <div className="detailed-content"  
                  dangerouslySetInnerHTML={{__html:html}}
                >
                  {/*                     
                    <ReactMarkdown 
                      source={markdown} 
                      escapeHtml={false}  
                    /> */}
                </div>

             </div>
        </div>        
      </Col>
      <Col className="comm-right" xs={0} sm={0} md={7} lg={5} xl={4}>
        <Author/>
        <Advert/>
        <Affix offsetTop={5}>
          <div className="detailed-nav comm-box">
              <div className="nav-title">文章目录</div>
              <div className="toc-list">
                {tocify && tocify.render()}
              </div>
            {/* <MarkNav
              className="article-menu"
              source={html}
              ordered={false}//序号
            />         */}
          </div>              
        </Affix>
      </Col>
    </Row>
    <Footer/>
  </div>
}
Detail.getInitialProps = async (ctx) => {
  console.log(ctx.query.id)
  let id = ctx.query.id;
  const p = new Promise((resolve)=>{
    axios(servicePath.getArticleById+id).then((res)=>{
      console.log(res)
      resolve(res.data.data[0])
    })
  })
  return await p
}
export default Detail

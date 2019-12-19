'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    let result = await this.app.mysql.get("blog_list",{})//"blog_list"是表名称
    console.log(result)
    ctx.body = result;
    
    
  }

  async getArticleList(){//获取文章列表
    //sql语句方式查询
    let sql = `SELECT article.id as id ,`+
              `article.title as title ,`+
              `article.introduce as introduce ,`+
              `FROM_UNIXTIME(article.addTime,"%Y-%m-%d %H:%m:%s") as addTime ,`+
              `article.view_count as view_count ,`+
              `article_type.typeName as typeName `+
              `FROM article LEFT JOIN article_type ON article.type_id = article_type.Id`;
              
    const results = await this.app.mysql.query(sql);
    this.ctx.body = {data:results}

  }
  async getArticleById(){
    let id = this.ctx.params.id;
    //sql语句方式查询
    let sql = `SELECT article.id as id ,`+
              `article.title as title ,`+
              `article.introduce as introduce ,`+
              `FROM_UNIXTIME(article.addTime,"%Y-%m-%d %H:%m:%s") as addTime ,`+
              `article.view_count as view_count ,`+
              `article.article_content as article_content ,`+
              `article_type.typeName as typeName ,`+
              `article_type.Id as typeId `+
              `FROM article LEFT JOIN article_type ON article.type_id = article_type.Id `+
              `WHERE article.id = `+id;
    const results = await this.app.mysql.query(sql);
    this.ctx.body = {data:results}
  }
}

module.exports = HomeController;

//RESTful 
//请求方式get 获取资源 post新建资源 put更新资源 delete 删除资源
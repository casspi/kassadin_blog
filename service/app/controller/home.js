'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, egg';
  }
  async list(){
    const { ctx } = this;
    ctx.body = "<h1>kassadin blog list page</h1>"
  }
}

module.exports = HomeController;

//RESTful 
//请求方式get 获取资源 post新建资源 put更新资源 delete 删除资源
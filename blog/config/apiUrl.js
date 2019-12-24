let ipUrl = "http://127.0.0.1:7001/";
let servicePath = {
    getArticleList: ipUrl + "article",//首页获取文章列表
    getArticleById: ipUrl + "getArticleById/",//详细页获取文章
    getTypeInfo:ipUrl + 'getTypeInfo',         // 文章分类信息
    getListById:ipUrl + 'getListById',         // 根据类别ID获得文章列表  
}
export default servicePath;
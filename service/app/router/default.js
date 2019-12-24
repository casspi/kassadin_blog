module.exports = app=>{
    const {router,controller} = app;
    router.get('/index', controller.default.home.index);
    router.get('/article', controller.default.home.getArticleList);
    router.get('/getArticleById/:id',controller.default.home.getArticleById);
    router.get('/getListById',controller.default.home.getListById);
}
import API from "./API";

export default {
    getArticlesHandler(){
        return API().get('articles')
    },
    getSingleArticleHandler(id){
        return API().get('articles/'+ id)
    }
}
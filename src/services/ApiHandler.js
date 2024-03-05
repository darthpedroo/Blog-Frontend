import API from "./API";

export default {
    getArticlesHandler(){
        return API().get('articles')
    },
    getSingleArticleHandler(article_id){
        return API().get('articles/'+ article_id)
    },
    getParagraphsFromArticleHandler(paragraph_id){
        return API().get('paragraphs/'+paragraph_id)
    }
}
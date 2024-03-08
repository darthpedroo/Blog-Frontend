import API from "./API";

export default {
    getArticlesHandler(){
        return API().get('articles')
    },
    getSingleArticleHandler(article_id){
        return API().get('articles/'+ article_id)
    },
    getParagraphsFromArticleHandler(article_id){
        return API().get('paragraphs/'+article_id)
    },
    putSingleParagraphHandler(body, paragraphId){
        const headers = {
            'Content-Type': 'application/json', // Content-Type header
        };

        return API().put(`paragraph/${paragraphId}`, body, { headers })
    },
    postSingleParagraphHandler(body){
        const headers = {
            'Content-Type': 'application/json', // Content-Type header
        };
        return API().post('paragraphs/', body, {headers})
    }
}
import API from "./API";

export default {
    getArticlesHandler(){
        return API().get('/articles')
    }
}
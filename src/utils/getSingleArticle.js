import getArticlesHandler from '@/services/ApiHandler';

export function getSingleArticle(response,id) {
    getArticlesHandler.getSingleArticleHandler(id)
    .then(data => response.value = data.data)
    .catch(error => console.error(error));
}

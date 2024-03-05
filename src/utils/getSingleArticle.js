import ApiHandler from '@/services/ApiHandler';

export function getSingleArticle(response,id) {
    ApiHandler.getSingleArticleHandler(id)
    .then(data => response.value = data.data)
    .catch(error => console.error(error));
}

import getArticlesHandler from '@/services/ApiHandler';

export function getAllArticles(response) {
    getArticlesHandler.getArticlesHandler()
    .then(data => response.value = data.data)
    .catch(error => console.error(error));
}

import getArticlesHandler from '@/services/getArticlesHandler';

export function getArticles(response) {
    getArticlesHandler.getArticlesHandler()
    .then(data => response.value = data.data)
    .catch(error => console.error(error));
}

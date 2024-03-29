import ApiHandler from '@/services/ApiHandler';

export function getAllArticles(response) {
    ApiHandler.getArticlesHandler()
    .then(data => response.value = data.data)
    .catch(error => console.error(error));
}

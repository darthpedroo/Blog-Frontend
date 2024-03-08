import ApiHandler from '@/services/ApiHandler';

export function getParagraphsFromArticle(response, id){
    console.log("GETTING PARRAGRAPHS FROM ARTICLE: ", response)
    ApiHandler.getParagraphsFromArticleHandler(id)
    .then(data => response.value = data.data)
    .catch(error => console.error(error));
}

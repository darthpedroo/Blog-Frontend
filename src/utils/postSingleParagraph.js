import ApiHandler from "@/services/ApiHandler";

export function postSingleParagraph(body){
    ApiHandler.postSingleParagraphHandler(body)
    .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error(error);
      });
}
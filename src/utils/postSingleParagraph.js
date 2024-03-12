import ApiHandler from "@/services/ApiHandler";

export function postSingleParagraph(body, callback){
    ApiHandler.postSingleParagraphHandler(body)
    .then((response) => {
        console.log(response);

        if(callback && typeof callback === 'function'){
          callback()
        }

      })
      .catch((error) => {
        console.error(error);
      });
}
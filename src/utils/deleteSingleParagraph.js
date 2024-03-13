import ApiHandler from "@/services/ApiHandler";

export function deleteSingleParagraph(body, callback){
    
    ApiHandler.deleteSingleParagraphHandler(body)
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

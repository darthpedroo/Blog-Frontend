import ApiHandler from "@/services/ApiHandler";

export function postSingleParagraph(body){
    console.log("TOM POSTING")
    ApiHandler.postSingleParagraphHandler(body)
    .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error(error);
      });
}
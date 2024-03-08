import ApiHandler from "@/services/ApiHandler";

export function deleteSingleParagraph(body){
    
    ApiHandler.deleteSingleParagraphHandler(body)
    .then((response) => {
        console.log(response);
        console.log("Checkpoint");
      })
      .catch((error) => {
        console.error(error);
      });
}

import ApiHandler from '@/services/ApiHandler';

export function putSingleParagraph(body,paragraphId) {

    ApiHandler.putSingleParagraphHandler(body, paragraphId)
    .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error(error);
      });

    }

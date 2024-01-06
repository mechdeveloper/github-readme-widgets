const axios = require("axios").default;

const {
    CustomError,
    MissingParamError
} = require("../common/utils");

const fetchMSLearnTranscript = (transcriptId) => {
    return axios({
      method: "get",
      // url: `https://www.credly.com/users/${username}/badges?sort=most_popular`,
      url: `https://learn.microsoft.com/api/profiles/transcript/share/${transcriptId}?locale=en-us`,
      headers: {
        Accept: "application/json",
      },
    });
  };

async function fetchMSLearnCertificationData(transcriptId){

    if (!transcriptId) throw new MissingParamError(["transcriptId"]);
    // console.log(username);

    try {
        let res = await fetchMSLearnTranscript(transcriptId);
        // console.log(res.data);
        return res.data;
    } catch (error) {
        if (error.response) {
            // console.log(error.response.data);
            // console.log(error.response.status);
            // console.log(error.response.headers);
            throw new CustomError(
                error.message || "Could not fetch data",
                CustomError.TRANSCRIPT_NOT_FOUND,
            );
        }
        // }else if (error.request) {
        //     console.log(error.request);
        // }else {
        //     console.log('Error', error.message);
        // }
        console.log(error.config);
    }
}

module.exports = fetchMSLearnCertificationData
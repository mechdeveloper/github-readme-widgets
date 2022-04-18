const axios = require("axios").default;

const {
    CustomError,
    MissingParamError
} = require("../common/utils");

const fetchCredlyBadges = (username) => {
    return axios({
      method: "get",
      url: `https://www.credly.com/users/${username}/badges?sort=most_popular`,
      headers: {
        Accept: "application/json",
      },
    });
  };

async function fetchBadges(username){

    if (!username) throw new MissingParamError(["username"]);
    // console.log(username);

    try {
        let res = await fetchCredlyBadges(username);
        // console.log(res.data);
        return res.data;
    } catch (error) {
        if (error.response) {
            // console.log(error.response.data);
            // console.log(error.response.status);
            // console.log(error.response.headers);
            throw new CustomError(
                error.message || "Could not fetch user",
                CustomError.USER_NOT_FOUND,
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

module.exports = fetchBadges
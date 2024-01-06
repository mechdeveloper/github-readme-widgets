/**
 * @see https://stackoverflow.com/a/48073476/10629172
 * @param {string} str
 * @returns {string}
 */
function encodeHTML(str) {
    return str
      .replace(/[\u00A0-\u9999<>&](?!#)/gim, (i) => {
        return "&#" + i.charCodeAt(0) + ";";
      })
      .replace(/\u0008/gim, "");
  }

const SECONDARY_ERROR_MESSAGES = {
    MAX_RETRY: "Max retries reached, unable to get data ! Please retry after sometime !! ",
    USER_NOT_FOUND: "Please make sure the provided username is correct !",
    TRANSCRIPT_NOT_FOUND: "Please ensure that provided transcript id is correct !"
};

class CustomError extends Error {
    constructor(message, type) {
      super(message);
      this.type = type;
      this.secondaryMessage = SECONDARY_ERROR_MESSAGES[type] || type;
    }
    static MAX_RETRY = "MAX_RETRY";
    static USER_NOT_FOUND = "USER_NOT_FOUND";
  }

class MissingParamError extends Error {
    constructor(missedParams, secondaryMessage) {
      const msg = `Missing params ${missedParams
        .map((p) => `"${p}"`)
        .join(", ")} make sure you pass the parameters in URL`;
      super(msg);
      this.missedParams = missedParams;
      this.secondaryMessage = secondaryMessage;
    }
  }

module.exports = {
    encodeHTML,
    CustomError,
    MissingParamError
}